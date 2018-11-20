/**
 * Handler to fetch one record of a resource.
 */
const lodash = require('lodash');

exports = module.exports = buildFetchOneHandler;

/**
 * Build a handler function to fetch one record of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildFetchOneHandler(resourceConfig) {
  return async function (req, res) {
    //TODO
    res
      .status(200)
      .links({ self: '/xpto' })
      .json({ example: 123 });
  };
}
