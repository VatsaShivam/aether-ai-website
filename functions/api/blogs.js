import { blogPosts } from "../_shared/blogs.js";
import { json, options, proxyToBackend } from "../_shared/http.js";

export const onRequestOptions = () => options();

export const onRequestGet = async ({ request, env }) => {
  const proxied = await proxyToBackend({ request, env, path: "/api/blogs" });
  if (proxied?.ok) {
    return proxied;
  }

  return json(blogPosts);
};
