# Æther AI Website

React + Vite + Tailwind site for Æther AI.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Docker

```bash
docker build -t aether-ai-website .
docker run --rm -p 8080:80 aether-ai-website
```

## Full Stack With Python + MongoDB

Run the website, FastAPI backend, and MongoDB together:

```bash
docker compose up --build
```

Frontend:

```bash
http://localhost:8080
```

Python API:

```bash
http://localhost:8000/api/health
```

The contact form saves inquiries to MongoDB through `POST /api/inquiries`.
The blog renders from MongoDB through `GET /api/blogs`; seed articles are inserted automatically when the database is empty.

## Cloudflare Pages

Build command:

```bash
npm run build
```

Build output directory:

```bash
dist
```

Do not set the Cloudflare Pages deploy command to `npx wrangler deploy`.
For Pages, leave the deploy command empty in the Cloudflare dashboard, or use:

```bash
npx wrangler pages deploy dist --project-name aether-ai-website
```

Cloudflare Pages deploys only the frontend. The Python API and MongoDB need to run on a separate backend host, then set:

```bash
VITE_API_BASE_URL=https://your-api-domain.com/api
```

The repo also includes Cloudflare Pages Functions under `functions/api`.
On Cloudflare, `/api/blogs` returns blog content and `/api/inquiries` accepts form submissions.
For real MongoDB storage in production, deploy the Python backend and add this Cloudflare Pages environment variable:

```bash
BACKEND_API_URL=https://your-api-domain.com
```

Optional: bind a Cloudflare KV namespace named `INQUIRIES_KV` to save inquiries on Cloudflare when no Python backend is configured.

To run fully on Cloudflare without the Python container, create two Workers KV namespaces in Cloudflare:

```bash
INQUIRIES_KV
BLOGS_KV
```

Bind them to the Pages project in:

```bash
Workers & Pages > your Pages project > Settings > Functions > KV namespace bindings
```

Then Cloudflare Pages Functions will:

- save contact form submissions to `INQUIRIES_KV`
- read blog posts from `BLOGS_KV`
- fall back to bundled blog posts if `BLOGS_KV` is empty

MongoDB itself cannot be hosted inside Cloudflare Pages. To use MongoDB, host MongoDB in MongoDB Atlas or another Mongo host, deploy the Python backend, and set `BACKEND_API_URL`.
