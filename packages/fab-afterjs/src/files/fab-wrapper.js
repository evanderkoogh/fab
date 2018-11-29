/*
* FAB Wrapper
*
* Entry point for the FAB Webpack build
* Maps the simplified index.fab.js to the FAB spec
*
* */

const MockExpressResponse = require('./mock-express-response')
const render_app = require('app-index').default

const render = async (req, settings) => {
  const res = new MockExpressResponse()
  const body = await render_app(req, res, settings)
  return new Response(body, {
    status: res.statusCode,
    headers: res._headers
  })
}

module.exports = { render }