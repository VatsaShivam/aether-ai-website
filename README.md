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
