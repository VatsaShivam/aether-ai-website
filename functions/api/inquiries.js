import { json, options, proxyToBackend } from "../_shared/http.js";

export const onRequest = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return options();
  }

  if (request.method === "GET") {
    if (env.INQUIRIES_KV) {
      const list = await env.INQUIRIES_KV.list({ prefix: "inquiry:" });
      const inquiries = await Promise.all(
        list.keys.map(async (key) => {
          const value = await env.INQUIRIES_KV.get(key.name);
          return value ? JSON.parse(value) : null;
        })
      );
      return json(inquiries.filter(Boolean).reverse());
    }

    return json({
      status: "ok",
      message: "Use POST /api/inquiries to submit website inquiries.",
    });
  }

  if (request.method !== "POST") {
    return json({ detail: "Method not allowed" }, 405);
  }

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
