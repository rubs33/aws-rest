/**
 * Handler to update record attributes of a resource.
 */
const lodash = require('lodash');

exports = module.exports = buildPatchHandler;

/**
 * Build a handler function to update record attributes of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildPatchHandler(resourceConfig) {
  return async function (req, res) {
    //TODO
    res
      .status(200)
      .links({ self: '/xpto' })
      .json({ example: 123 });
  };
}
