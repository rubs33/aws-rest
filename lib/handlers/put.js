/**
 * Handler to replace one record of a resource.
 */
const lodash = require('lodash');

exports = module.exports = buildPutHandler;

/**
 * Build a handler function to replace one record of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildPutHandler(resourceConfig) {
  return async function (req, res) {
    //TODO
    res
      .status(200)
      .links({ self: '/xpto' })
      .json({ example: 123 });
  };
}
