
function deepFreeze(obj) {
  // Freeze all nested objects first
  Object.keys(obj).forEach(key => {
    const value = obj[key];

    if (
      value !== null &&
      typeof value === 'object' &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });

  // Freeze the current object
  return Object.freeze(obj);
}

const config = deepFreeze({
  api: {
    baseUrl: 'https://x.com',
    retries: 3
  },
  debug: false
});

// Attempts to modify
config.api.baseUrl = 'https://changed.com'; // ignored
config.debug = true;                        // ignored

console.log(config.api.baseUrl, config.debug);
// https://x.com false

console.log(Object.isFrozen(config.api));
// true

console.log(Object.isFrozen(config));
// true