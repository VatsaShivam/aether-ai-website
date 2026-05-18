import { blogPosts } from "../_shared/blogs.js";
import { json, options, proxyToBackend } from "../_shared/http.js";

export const onRequestOptions = () => options();

export const onRequestGet = async ({ request, env }) => {
  const proxied = await proxyToBackend({ request, env, path: "/api/blogs" });
  if (proxied?.ok) {
    return proxied;
  }

  if (env.BLOGS_KV) {
    const list = await env.BLOGS_KV.list({ prefix: "blog:" });
    const posts = await Promise.all(
      list.keys.map(async (key) => {
        const value = await env.BLOGS_KV.get(key.name);
        return value ? JSON.parse(value) : null;
      })
    );
    const published = posts.filter(Boolean).filter((post) => post.published !== false);
    if (published.length) {
      return json(published);
    }
  }

  return json(blogPosts);
};

export const onRequestPost = async ({ request, env }) => {
  if (!env.BLOGS_KV) {
    return json({ detail: "BLOGS_KV binding is required to save posts on Cloudflare" }, 501);
  }

  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (env.ADMIN_API_TOKEN && token !== env.ADMIN_API_TOKEN) {
    return json({ detail: "Unauthorized" }, 401);
  }

  const post = await request.json().catch(() => null);
  if (!post?.slug || !post?.title || !post?.desc || !Array.isArray(post?.sections)) {
    return json({ detail: "Invalid blog post payload" }, 400);
  }

  const payload = { ...post, updatedAt: new Date().toISOString() };
  await env.BLOGS_KV.put(`blog:${post.slug}`, JSON.stringify(payload));
  return json(payload, 201);
};
