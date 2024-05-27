
export interface ApiConfig {
  baseConfig?: BaseConfig;
  body?: Record<string, any>;
  url: string;
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
}