
export interface ApiConfig {
  baseConfig?: BaseConfig;
  body?: Record<string, any>;
  url: string;
  renderType?: RenderType;
}

type RequestHeaders = {
  [key: string]: any;
}

interface BaseConfig {
  headers?: RequestHeaders;
  baseURL?: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface FetchConfig {
  method: Method
  headers: RequestHeaders
  body?: string;
  cache?: RequestCache;
  next?: {}
}

export type RenderType = 'SSR' | 'SSG' | 'ISR'