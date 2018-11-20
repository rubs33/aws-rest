/**
 * Handler to create one record of a resource.
 */
const lodash = require('lodash');

exports = module.exports = buildPostHandler;

/**
 * Build a handler function to create one record of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildPostHandler(resourceConfig) {
  return async function (req, res) {
    //TODO
    res
      .status(201)
      .links({ self: '/xpto' })
      .json({ example: 123 });
  };
}
