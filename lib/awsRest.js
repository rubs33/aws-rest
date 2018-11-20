/**
 * This library provide a simple way to create REST APIs using AWS resources.
 */
const lodash = require('lodash');
const buildFetchAllHandler = require('./handlers/fetchAll');
const buildFetchOneHandler = require('./handlers/fetchOne');
const buildPostHandler = require('./handlers/post');
const buildPutHandler = require('./handlers/put');
const buildPatchHandler = require('./handlers/patch');
const buildDeleteHandler = require('./handlers/delete');

exports = module.exports = { registerRoute };

/**
 * Register routes for a REST resource in an express-like framework
 * @param Object app Express-like application instance.
 * @param Object resourceConfig
 */
function registerRoute(app, resourceConfig) {
  const resourceName = lodash.get(resourceConfig, 'name');

  // Resource collection routes
  app.route(`/${resourceName}`)
    .get(buildFetchAllHandler(resourceConfig))
    .post(buildPostHandler(resourceConfig))

  // Resource item routes
  app.route(`/${resourceName}/:id`)
    .get(buildFetchOneHandler(resourceConfig))
    .put(buildPutHandler(resourceConfig))
    .patch(buildPatchHandler(resourceConfig))
    .delete(buildDeleteHandler(resourceConfig));
}
