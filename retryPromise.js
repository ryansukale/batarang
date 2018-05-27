export default function retryPromise(source, validator, attempts, ...retryArgs) {
  let retryCount = 0;
  return function retryOnInvalid(...args) {
    if (attempts < retryCount) {
      throw new Error(`Method ${source.name} failed after retrying ${attempts} times`);
    }

    return source(...args).then((d) => {
      if (validator(d)) {
        retryCount = 0;
        return d;
      }
      retryCount += 1;
      const methodArgs = retryArgs.length > 0 ? retryArgs : args;
      return retryOnInvalid(...methodArgs);
    });
  };
}
