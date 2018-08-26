export function stripDomain (url) {
  return url.replace(/^.*\/\/[^/]+/, '')
}

export function categoryIds (categories) {
  return categories.map((cat) => {
    return cat.id
  })
}
