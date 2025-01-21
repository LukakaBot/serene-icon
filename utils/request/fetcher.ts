import type { FetcherRequestConfig } from './types';
import Fetcher from './core/Fetcher';

export function createInstance(defaultConfig: FetcherRequestConfig) {
  const instance = new Fetcher(defaultConfig);

  instance.create = function create(instanceConfig: FetcherRequestConfig) {
    return createInstance(Object.assign(defaultConfig, instanceConfig));
  }

  return instance;
}

const fetcher = createInstance({
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Authorization': 'Bearer ',
    'Content-Type': 'application/json',
  }
});

export default fetcher;