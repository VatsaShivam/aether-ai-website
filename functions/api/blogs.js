import { blogPosts } from "../_shared/blogs.js";
import { json, proxyToBackend } from "../_shared/http.js";

export const onRequestGet = async ({ request, env }) => {
  const proxied = await proxyToBackend({ request, env, path: "/api/blogs" });
  if (proxied?.ok) {
    return proxied;
  }

  return json(blogPosts);
};
