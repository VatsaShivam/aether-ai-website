import { blogPosts } from "../../_shared/blogs.js";
import { json, proxyToBackend } from "../../_shared/http.js";

export const onRequestGet = async ({ request, env, params }) => {
  const proxied = await proxyToBackend({ request, env, path: `/api/blogs/${params.slug}` });
  if (proxied?.ok) {
    return proxied;
  }

  const post = blogPosts.find((item) => item.slug === params.slug);
  return post ? json(post) : json({ detail: "Blog post not found" }, 404);
};
