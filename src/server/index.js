import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store/index'
import serialize from "serialize-javascript"
import App from '../app'
import routes from '../app/routes'

const app = express()

app.use(cors())
app.use(express.static("public"))

app.get("*", async (req, res, next) => {

  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const data = activeRoute.fetchInitialData ? await activeRoute.fetchInitialData(req.path) : {}
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{ data }}>
        <App />
      </StaticRouter>
    </Provider>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(4000, () => {
  console.log(`Server is listening on port: 4000`)
})
