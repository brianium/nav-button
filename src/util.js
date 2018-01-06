const rectCache = new WeakMap(null);

/**
 * Returns the DOMRect for an element. Caches all results
 */
export function rect(element) {
  if (rectCache.has(element)) {
    return rectCache.get(element);
  }
  const r = element.getBoundingClientRect();
  rectCache.set(element, r);
  return r;
}

/**
 * Get the relative DOMRect of a child to it's parent
 *
 * @return {Object}
 */
export function relativePosition(element) {
  const { parentNode } = element;
  const parentRect = rect(parentNode);
  const elementRect = rect(element);
  return {
    left: elementRect.left - parentRect.left,
    right: elementRect.right - parentRect.right,
    top: elementRect.top - parentRect.top
  };
}
