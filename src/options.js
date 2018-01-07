export const DEFAULT_OPTIONS = {
  text: "Tip with NAV",
  alt: false,
  actionText: "Copy Address",
  actionTitle: "click to copy address",
  onCopy: () => {},
  className: "",
  position: "bottom",
  closeText: "Thanks! Got it",
  size: "",
  type: "copy"
};

/**
 * Get options ensuring defaults
 *
 * @param {Object} opts
 * @return {Object}
 */
export function options(opts = {}) {
  return Object.assign({}, DEFAULT_OPTIONS, opts);
}
