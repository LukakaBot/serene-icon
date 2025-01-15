export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export type FetchHeaderValue = string | string[] | number | boolean | null;

interface RawFetchHeaders {
  [key: string]: FetchHeaderValue;
}

export interface HeadersDefaults {
  common: RawAxiosRequestHeaders;
  delete: RawAxiosRequestHeaders;
  get: RawAxiosRequestHeaders;
  head: RawAxiosRequestHeaders;
  post: RawAxiosRequestHeaders;
  put: RawAxiosRequestHeaders;
  patch: RawAxiosRequestHeaders;
  options?: RawAxiosRequestHeaders;
};

type CommonRequestHeadersList = 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';

export type RawAxiosRequestHeaders = Partial<RawFetchHeaders & {
  [Key in CommonRequestHeadersList]: FetchHeaderValue;
} & {
  'Content-Type': ContentType
}>;

type CommonResponseHeadersList = 'Server' | 'Content-Type' | 'Content-Length' | 'Cache-Control' | 'Content-Encoding';

type ContentType = FetchHeaderValue | 'text/html' | 'text/plain' | 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded' | 'application/octet-stream';

export type RawFetchRequestHeaders = Partial<RawFetchHeaders & {
  [Key in CommonRequestHeadersList]: AxiosHeaderValue;
} & {
  'Content-Type': ContentType
}>;

export type FetchRequestHeaders = RawFetchRequestHeaders;

type RawCommonResponseHeaders = {
  [Key in CommonResponseHeadersList]: FetchHeaderValue;
} & {
  "set-cookie": string[];
};

export type RawFetchResponseHeaders = Partial<RawFetchHeaders & RawCommonResponseHeaders>;

export type AxiosResponseHeaders = RawFetchResponseHeaders;

export interface FetchRequestConfig<D = any> {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: RawFetchRequestHeaders | Partial<HeadersDefaults>;
  data?: D;
  next?: {
    revalidate: number;
    tags: string[];
  };
  cache?: 'no-store' | 'force-cache';
};

export interface CreateAxiosDefaults<D = any> extends Omit<FetchRequestConfig<D>, 'headers'> {
  headers?: RawFetchRequestHeaders | Partial<HeadersDefaults>;
}

export interface FetchResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
};

export class Fetch {
  constructor(config: FetchConfig);

  request<T = any, R = FetchResponse<T>, D = any>(config: FetchRequestConfig<D>): Promise<R>;
  get<T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchRequestConfig<D>): Promise<R>;
  post<T = any, R = FetchResponse<T>, D = any>(url: string, data?: D, config?: FetchRequestConfig<D>): Promise<R>;
  put<T = any, R = FetchResponse<T>, D = any>(url: string, data?: D, config?: FetchRequestConfig<D>): Promise<R>;
  delete<T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchRequestConfig<D>): Promise<R>;
}

export interface FetchInstance extends Fetch {
  create: (instanceConfig: FetchConfig) => Fetch;
}
