# Helio Shopify Dashboard

AI-powered Shopify analytics dashboard built with Next.js 14, TypeScript, Tailwind CSS, and Recharts.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (charts)
- Claude API (AI assistant)

## Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Enable AI chat

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Get a key at https://console.anthropic.com

## Deploy to Vercel

```bash
npx vercel --prod
```

Add `ANTHROPIC_API_KEY` in Vercel dashboard → Settings → Environment Variables.

## Built by
Raghavendra S.S — portfolio project for HelioAI Frontend Intern application.
