/**
 * Handler to fetch all records of a resource.
 */
const lodash = require('lodash');

exports = module.exports = buildFetchAllHandler;

/**
 * Build a handler function to fetch all records of the resource.
 * @param Object resourceConfig
 * @return function (req, res, next)
 */
function buildFetchAllHandler(resourceConfig) {
  const resourceName = resourceConfig.name;
  return async function (req, res) {
    //TODO
    res
      .status(200)
      .links({ self: '/xpto' })
      .json({ _embeded: { [resourceName]: [] } });
  };
}
