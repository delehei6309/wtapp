/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (router, path) => {
    // 此处router 为 location
    const urlParams = new URLSearchParams(router.search);
  if (urlParams.size > 0 && path) {
    const arr = Array.from(urlParams.keys())

    return router.pathname.includes(path) && router.search.includes(urlParams.get(arr[0])) && path !== '/'
  }

  return false
}

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */
export const hasActiveChild = (item, currentURL) => {
  const { children } = item
  if (!children) {
    return false
  }
  for (const child of children) {
    if (child.children) {
      if (hasActiveChild(child, currentURL)) {
        return true
      }
    }
    const childPath = child.path

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL || (currentURL.includes(childPath) && childPath !== '/'))
    ) {
      return true
    }
  }

  return false
}

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (children, openGroup, currentActiveGroup) => {
  children.forEach(child => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title)
      if (index > -1) openGroup.splice(index, 1)

      // @ts-ignore
      if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
    }
  })
}
