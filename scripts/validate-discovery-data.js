const data = require('../data/discovery-data.js');

const capabilityCards = Object.values(data.capabilities).flatMap(capability => capability.cards);
const missingApiKeys = capabilityCards.filter(card => !data.apis[card.key]).map(card => card.key);
const invalidAvailability = Object.entries(data.apis)
  .filter(([, api]) => !Array.isArray(api.markets) || !api.markets.length || !Array.isArray(api.audience) || !api.audience.length)
  .map(([key]) => key);

if (missingApiKeys.length || invalidAvailability.length) {
  console.error(JSON.stringify({ missingApiKeys, invalidAvailability }, null, 2));
  process.exitCode = 1;
} else {
  console.log(`Validated ${capabilityCards.length} recommendations against ${Object.keys(data.apis).length} API records.`);
}