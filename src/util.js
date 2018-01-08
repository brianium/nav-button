/**
 * Returns the DOMRect for an element. Caches all results
 */
export function rect(element) {
  return element.getBoundingClientRect();
}

/**
 * Get the relative DOMRect of a child to it's parent
 *
 * @return {Object}
 */
export function relativeRect(element) {
  const { parentNode } = element;
  const parentRect = rect(parentNode);
  const elementRect = rect(element);
  return {
    left: elementRect.left - parentRect.left,
    right: elementRect.right - parentRect.right,
    top: elementRect.top - parentRect.top,
    width: elementRect.width
  };
}
