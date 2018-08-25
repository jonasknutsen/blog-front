export function stripDomain (url) {
  return url.replace(/^.*\/\/[^/]+/, '')
}
