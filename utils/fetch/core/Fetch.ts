import queryString from 'query-string';
import type { CreateAxiosDefaults, Method } from '../types';


class Fetch {
  instanceConfig: CreateAxiosDefaults;
  create = (instanceConfig: CreateAxiosDefaults) => new Fetch(instanceConfig);
  requestInterceptors: any;
  responseInterceptors: any;

  constructor(instanceConfig: CreateAxiosDefaults) {
    this.instanceConfig = instanceConfig;
    this.requestInterceptors = () => { };
    this.responseInterceptors = () => { };
  }

  request(url: string, method: Method, data?: any) {

  }
}

export default Fetch;