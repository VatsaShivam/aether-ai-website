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
