import { options } from "./options";

/**
 * Get class names for a button
 */
function classNames(opts) {
  const { alt, size } = opts;
  const classes = ["nav-btn"];
  if (alt) {
    classes.push("nav-btn--alt");
  }
  if (/sm|md/.test(size)) {
    classes.push(`nav-btn--${size}`);
  }
  return classes.join(" ");
}

/**
 * Returns a template for a default button
 *
 * @param {Object} opts
 * @return {String}
 */
export function defaultButton(opts) {
  const validated = options(opts);
  const { address, text, actionTitle, actionText } = validated;
  const className = classNames(validated);
  return `
  <button class="${className}" data-address="${address}" data-clipboard-text="${address}">
    <span class="nav-btn__text">${text}</span>
    <span title="${actionTitle}" class="nav-btn__action-text">${actionText}</span>
  </button>
  `;
}

/**
 * Get class names for a nav button container
 */
function containerClasses(opts) {
  const { alt } = opts;
  const classes = ["nav-btn-container"];
  if (alt) {
    classes.push("nav-btn-container--alt");
  }
  return classes.join(" ");
}

/**
 * Returns a template for a qr code enabled button
 *
 * @param {Object} opts
 * @return {String}
 */
export function qrButton(opts) {
  const base = defaultButton(
    Object.assign({}, opts, { actionText: "Show QR Code" })
  );
  const validated = options(opts);
  const className = containerClasses(validated);
  const { address } = validated;
  return `
    <div class="${className}">
      ${base}
      <div class="nav-btn-qr">
        <canvas></canvas>
        <div class="nav-btn-qr__input">
          <input
            class="nav-btn-qr__input__field"
            type="text"
            value="${address}"
            readonly="readonly"
          />
          <button class="nav-btn-qr__input__btn">
            <svg
              aria-hidden="true"
              data-icon="clipboard"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M336 64h-80c0-35.29-28.71-64-64-64s-64 28.71-64 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h42v36c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-36h42a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zM192 40c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24" />
            </svg>
          </button>
        </div>
        <span class="nav-btn-qr__arrow"></span>
        <a
          class="nav-btn-qr__link"
          target="__blank"
          href="https://navcoin.org/"
        >
          navcoin.org
        </a>
      </div>
    </div>
  `;
}
