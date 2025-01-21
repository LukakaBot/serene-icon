import type { CreateFetcherDefaults, Method } from '../types';
import { requestInterceptors, responseInterceptors } from './InterceptorManager';

class Fetcher {
  instanceConfig: CreateFetcherDefaults;
  create = (instanceConfig: CreateFetcherDefaults) => new Fetcher(instanceConfig);
  requestInterceptors = requestInterceptors;
  responseInterceptors = responseInterceptors;

  constructor(instanceConfig: CreateFetcherDefaults) {
    this.instanceConfig = instanceConfig;
  }

  async request<T = any>(url: string, method: Method, data?: T) {
    const request = this.requestInterceptors({
      url,
      method,
      data,
    });

    const response = await fetch(url, request.options);
    return this.responseInterceptors(response);
  }

  get = <T = any>(url: string, data?: T) => this.request(url, 'GET', data);

  post = <T = any>(url: string, data?: T) => this.request(url, 'POST', data);

  put = <T = any>(url: string, data?: T) => this.request(url, 'PUT', data);

  delete = <T = any>(url: string, data?: T) => this.request(url, 'DELETE', data);

  patch = <T = any>(url: string, data?: T) => this.request(url, 'PATCH', data);
}

export default Fetcher;
