import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'dist/public')));

// 读取资源清单
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'dist/public/manifest.json'), 'utf-8')
);

app.get('/', (req, res) => {
  const appString = renderToString(<App />);
  const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Example</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="${manifest['main.js']}"></script>
      </body>
    </html>`;
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});