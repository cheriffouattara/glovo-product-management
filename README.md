# Glovo CI — Product Categorization & Naming Tool

## Deploy on Render (free, 5 minutes)

1. **Upload this folder to a GitHub repository**

2. **Go to [render.com](https://render.com)** → New → Web Service

3. **Connect your GitHub repo**

4. **Settings:**
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Environment: Node

5. **Deploy** → You get a public URL like `https://glovo-product-tool.onrender.com`

6. **Share the URL** — anyone can use the tool directly in their browser

## How it works

- The tool is a **single HTML file** served by a minimal Express server
- All categorization logic runs **in the browser** (no server calls needed)
- AI features (Claude / ChatGPT / Gemini) are called **directly from the browser** using the user's own API key
- **No API key = offline mode** using built-in rule-based engine

## Project structure

```
glovo-render/
├── server.js        ← Express server (just serves static files)
├── package.json     ← Only express dependency
└── public/
    └── index.html   ← The complete tool (all-in-one HTML)
```
