export interface ApiResult<T> {
  results: T[];
  info: {
    seed: string;
    results: string;
    page: string;
    version: string;
  };
}
