import { blogPosts } from "../../_shared/blogs.js";
import { json, options, proxyToBackend } from "../../_shared/http.js";

export const onRequestOptions = () => options();

export const onRequestGet = async ({ request, env, params }) => {
  const proxied = await proxyToBackend({ request, env, path: `/api/blogs/${params.slug}` });
  if (proxied?.ok) {
    return proxied;
  }

  if (env.BLOGS_KV) {
    const value = await env.BLOGS_KV.get(`blog:${params.slug}`);
    if (value) {
      return json(JSON.parse(value));
    }
  }

  const post = blogPosts.find((item) => item.slug === params.slug);
  return post ? json(post) : json({ detail: "Blog post not found" }, 404);
};
