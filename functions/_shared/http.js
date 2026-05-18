export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

export const proxyToBackend = async ({ request, env, path }) => {
  if (!env.BACKEND_API_URL) {
    return null;
  }

  const baseUrl = env.BACKEND_API_URL.replace(/\/$/, "");
  const target = `${baseUrl}${path}`;
  const init = {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : await request.text(),
  };

  return fetch(target, init);
};
