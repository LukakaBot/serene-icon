export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export interface FetcherRequestConfig<D = any> {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: Headers;
  data?: D;
  cacheTIme?: number;
  next?: {
    revalidate: number;
  };
  cache?: 'no-store' | 'force-cache';
};

export interface CreateFetcherDefaults<D = any> extends Omit<FetcherRequestConfig<D>, 'headers'> {
  headers?: Headers;
}

export class Fetcher {
  constructor(config: FetcherRequestConfig);

  request<T = any, R = Response<T>, D = any>(config: FetcherRequestConfig<D>): Promise<R>;
  get<T = any, R = Response<T>, D = any>(url: string, config?: FetcherRequestConfig<D>): Promise<R>;
  post<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: FetcherRequestConfig<D>): Promise<R>;
  put<T = any, R = Response<T>, D = any>(url: string, data?: D, config?: FetcherRequestConfig<D>): Promise<R>;
  delete<T = any, R = Response<T>, D = any>(url: string, config?: FetcherRequestConfig<D>): Promise<R>;
}

export interface FetcherInstance extends Fetcher {
  create: (instanceConfig: FetcherRequestConfig) => Fetcher;
}

export interface FetcherRequestInit {
  url: string;
  options: RequestInit;
}

export type Headers = RequestInit['headers'];