// require('@babel/register') // 启用 Babel 运行时转译
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App.js'
const app = express()

app.get('/', (req, res) => {
  const appString = ReactDOMServer.renderToString(React.createElement(App))
  const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR Example</title>
        </head>
        <body>
            <div id="root">${appString}</div>
        </body>
        </html>
    `
  res.send(html)
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
})
