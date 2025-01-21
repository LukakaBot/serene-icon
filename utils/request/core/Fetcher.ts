import type { FetcherRequestConfig, Method } from '../types';
import InterceptorManager from './InterceptorManager';

class Fetcher {
  private instanceConfig: FetcherRequestConfig;
  private interceptor = new InterceptorManager();
  create = (instanceConfig: FetcherRequestConfig) => new Fetcher(instanceConfig);

  constructor(instanceConfig: FetcherRequestConfig) {
    this.instanceConfig = instanceConfig;
  }

  async request<T = any>(url: string, method: Method, data?: T) {
    const request = this.interceptor.request({
      url,
      method,
      data
    });

    const response = await fetch(url, request.options);
    return this.interceptor.response(response);
  }

  get = <T = any>(url: string, data?: T) => this.request(url, 'GET', data);

  post = <T = any>(url: string, data?: T) => this.request(url, 'POST', data);

  put = <T = any>(url: string, data?: T) => this.request(url, 'PUT', data);

  delete = <T = any>(url: string, data?: T) => this.request(url, 'DELETE', data);

  patch = <T = any>(url: string, data?: T) => this.request(url, 'PATCH', data);
}

export default Fetcher;
