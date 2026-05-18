import { json, proxyToBackend } from "../_shared/http.js";

export const onRequestPost = async ({ request, env }) => {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.projectType || !body?.message) {
    return json({ detail: "Missing required inquiry fields" }, 400);
  }

  const replay = new Request(request.url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const proxied = await proxyToBackend({ request: replay, env, path: "/api/inquiries" });
  if (proxied?.ok) {
    return proxied;
  }

  if (env.INQUIRIES_KV) {
    const id = crypto.randomUUID();
    await env.INQUIRIES_KV.put(`inquiry:${Date.now()}:${id}`, JSON.stringify({ ...body, createdAt: new Date().toISOString() }));
    return json({ id, status: "saved", storage: "cloudflare-kv" }, 201);
  }

  return json({
    id: crypto.randomUUID(),
    status: "received",
    storage: "cloudflare-pages-function",
    note: "Set BACKEND_API_URL to forward inquiries to the Python MongoDB backend.",
  }, 202);
};
