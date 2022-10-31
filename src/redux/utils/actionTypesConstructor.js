const actionTypesConstructor = (requestType, successType, failureType) => {
  if (
    [requestType, successType, failureType].filter(
      (type) => typeof type !== "string"
    ).length > 0
  ) {
    throw new Error("Action type has to be string type!");
  }
  return {
    request: () => requestType,
    success: () => successType,
    failure: () => failureType,
    all: function () {
      return [this.request(), this.success(), this.failure()];
    },
  };
};

export default actionTypesConstructor;
