import queryString from 'query-string';

export function getUrlQuery() {
  return queryString.parse(window.location.search) as any;
}
