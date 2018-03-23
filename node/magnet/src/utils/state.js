import WeDeploy from 'wedeploy';

const pretty = require('prettysize');

/**
 * Returns the user plans.
 * @param {Object} req
 * @param {Object} res
 * @return {Object}
 */
export async function userPlans(req, res) {
  const response = await WeDeploy.url('https://api.wedeploy.com/plans/user').get();
  const plans = response.body();
  const planIds = Object.keys(plans);
  for (let planId of planIds) {
    const plan = plans[planId];
    plan.memoryPretty = pretty(plan.memory * 1024 * 1024);
    plan.trafficPretty = pretty(plan.traffic * 1024 * 1024);
    plan.storagePretty = pretty(plan.storage * 1024 * 1024);
  }
  return plans;
}
