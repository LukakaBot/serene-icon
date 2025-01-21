import queryString from 'query-string';
import type { FetcherRequestConfig, FetcherRequestInit, Headers } from "../types";

class InterceptorManager {
  constructor() { }

  request = <T = any>({ url, method, data, cacheTIme }: FetcherRequestConfig<T>): FetcherRequestInit => {
    let params = '';
    let payload = '';
    let config: RequestInit = {};
    let _url = url;

    const headers: Headers = {
      'Authorization': 'Bearer ',
    };

    if (cacheTIme || cacheTIme === 0) {
      if (cacheTIme > 0) {
        config = { next: { revalidate: cacheTIme } }
      }
      else {
        config = { cache: 'no-store' };
      }
    }
    else {
      config = { cache: 'force-cache' };
    }

    if (method === 'GET' || method === 'DELETE') {
      if (data) {
        params = queryString.stringify(data!);
        _url = `${_url}?${params}`;
      }
    } else {
      if (!['[object FormData]', '[object URLSearchParams]'].includes(Object.prototype.toString.call(data))) {
        Object.assign(headers, { 'Content-Type': 'application/json' });
        payload = JSON.stringify(data);
      }
    }

    return {
      url: _url!,
      options: {
        method,
        headers,
        body: method !== 'GET' && method !== 'DELETE' ? payload : undefined,
        ...config
      }
    };
  }

  response = <T = any>(response: Response): Promise<T> => {
    return new Promise((resolve, reject) => {
      const URL = response.url;

      if (response.status === 200) {
        return resolve(response.json() as Promise<T>);
      } else {
        response.clone().text().then((text) => {
          try {
            const error = JSON.parse(text);
            return reject({ message: error.message || 'API Error', url: URL });
          } catch {
            return reject({ message: text, url: URL });
          }
        });
      }
    })
  }
}

export default InterceptorManager;