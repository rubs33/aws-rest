/**
 * Handler to delete one record of a resource
 */
const lodash = require('lodash');

exports = module.exports = buildDeleteHandler;

/**
 * Build a handler function to delete one record of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildDeleteHandler(resourceConfig) {
  return async function (req, res) {
    //TODO
    res
      .status(204)
      .end();
  };
}
