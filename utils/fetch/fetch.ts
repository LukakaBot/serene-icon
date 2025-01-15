import type { CreateAxiosDefaults } from './types';
import Fetch from './core/Fetch';

export function createInstance(defaultConfig: CreateAxiosDefaults) {
  const instance = new Fetch(defaultConfig);

  instance.create = function create(instanceConfig: CreateAxiosDefaults) {
    return createInstance(Object.assign(defaultConfig, instanceConfig));
  }

  return instance;
}

const request = createInstance({
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  },
  next: {
    revalidate: 0,
    tags: []
  }
});

export default request;