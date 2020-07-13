module.exports.getObjectProperties = (object, ...properties) => {
    const filtered = properties.reduce((result, key) => {
      result[key] = object[key];
      return result;
    }, {});
    return filtered;
  };
  