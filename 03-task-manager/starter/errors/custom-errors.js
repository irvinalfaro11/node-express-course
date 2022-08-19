class customAPIError extends Error {
  constructor(msg, statuscode) {
    super(msg);
    this.statuscode = statuscode;
  }
}

const createCustomError = (msg, statuscode) => {
  return new customAPIError(msg, statuscode);
};

module.exports = { createCustomError, customAPIError };
