# nav-button

Buttons for simply sharing [Nav Coin](https://navcoin.org/) addresses.

<p align="center">
  <img src="readme-img.png?raw=true" alt="nav button - buttons for use" />
</p>

## Installing

You can install `nav-button` with `npm` or `yarn`.

```
$ npm install --save nav-button
```

```
$ yarn add nav-button
```

The `nav-button` library is built as a UMD module, so you can use it multiple ways - choose
whichever method suits your project best.

CommonJS:

```js
const factory = require('nav-button').default;
```

ES6:

```js
import factory from 'nav-button';
```

Window:

To use it on the window, you will need to include `nav-button` via a script tag in your document.

The `window` variable will have two properties: `nav-button`, and `nav-button-react`.

```html
<script src="/nav-button/dist/index.js"></script>
<script type="text/javascript">
var factory = window['nav-button'].default;
</script>
```

## Usage

Nav buttons are really just styled markup. The React components are probably
the easiest to use, but whether you are using React or some other implementation,
you will want to include the Nav button css located in `nav-button/dist/nav-button.css`.

```html
<link rel="stylesheet" href="nav-button/dist/nav-button.css">
```

After rendering a button you can use the JavaScript API to bring it to life.

### Vanilla JS

The default export can be given an element or a selector. For markup templates used
to render buttons, see the [templates section](#templates).

```js
import factory from 'nav-button';

factory('#my-tip-button');
```

There is aslo a `createButton` function that can be used to return a `NavButton` instance that can be appended.

```js
import { createButton } from 'nav-button';

const btn = createButton({ address: 'NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt' });

document.body.appendChild(btn.node);
```

The `btn.node` property represents a DOM element that can be appended.

Supported options for the `createButton` function are as follows:

```js
{
  text: "Tip with NAV", // what text the button contains
  alt: false, // whether or not to use the alternative blue button style
  actionText: "Copy Address", // what text is rendered when hovered
  actionTitle: "click to copy address", // the title attribute for the button
  onCopy: () => {}, // called when the address is copied
  className: "", // additional class(s) to add to the button
  position: "bottom", // direction the QR code opens to - supports "bottom" and "right"
  closeText: "Thanks! Got it", // text displayed while a QR code is open
  size: "", // size of the button, supports "sm" and "md" values
  type: "copy" // can be "copy" or "qr"
};
```

### React

`nav-button` ships with a couple of React components for use as well. You can
use the `NavButton` or `NavQrButton` components via the `nav-button/dist/nav-button-react` module:

The `NavButton` component is used like so:

```js
import React from 'react';
import { NavButton } from 'nav-button/dist/nav-button-react';

const MyComponent = (props) => (
  <NavButton
    address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt"
    text="Tip with Nav"
    actionText="Copy Address"
    onCopy={(e) => console.log(e.text)} //e.text is you address
  />
);
```

And `NavQrButton` is similar:

```js
const MyComponent = () => (
  <NavQrButton
    address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt"
    text="Pay with Nav"
    actionText="Show QR Code"
    onCopy={(e) => console.log(e.text)}
    closeText="Thanks! Got it"
    alt={true}
  />
);
```

The following props are supported for the `NavButton`:

```js
{
  text: "Tip with Nav",
  alt: false, // set to true to use the alternative blue buttons
  actionText: "Copy Address",
  actionTitle: "click to copy address",
  onCopy: () => {},
  className: "",
  size: "", // supports size variants via "sm" for small, and "md" for medium - default is large,
};
```

The `NavQrButton` supports all the props of `NavButton`, but additionally supports the following props:

```js
{
  position: "bottom", // controls where the qr code opens - can be bottom or right - defaults to bottom
  closeText: "Thanks! Got it", // what text is displayed while the qr code is displayed
}
```

### Templates

The following templates should be used for rendering markup. These can be used if you
want to perform rendering on the server side. They are meant to be copied
as is - but you should at least replace the Nav address :)

A default button looks like this:

```html
<button class="nav-btn" data-address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt" data-clipboard-text="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt">
  <span class="nav-btn__text">Tip with Nav</span>
  <span title="click to copy address" class="nav-btn__action-text">Copy Address</span>
</button>
```

The `data-address` and `data-clipboard-text` are important if you want your QR codes
to render correctly, and if you want to support copy to clipboard functionality.

Markup for a QR code supported button is a little more involved, but like the default button you
can copy and base the following as is:

```html
<div class="nav-btn-container">
  <button class="nav-btn" data-address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt" data-clipboard-text="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt">
    <span class="nav-btn__text">Pay with Nav</span>
    <span class="nav-btn__action-text">Show QR Code</span>
  </button>
  <div class="nav-btn-qr">
    <canvas></canvas>
    <div class="nav-btn-qr__input">
      <input class="nav-btn-qr__input__field" type="text" value="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt" readonly />
      <button class="nav-btn-qr__input__btn">
        <svg
          aria-hidden="true"
          data-icon="clipboard"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M336 64h-80c0-35.29-28.71-64-64-64s-64 28.71-64 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h42v36c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-36h42a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zM192 40c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24"
          />
        </svg>
      </button>
    </div>
    <span class="nav-btn-qr__arrow"></span>
    <a class="nav-btn-qr__link" target="__blank" href="https://navcoin.org/">navcoin.org</a>
  </div>
</div>
```

If you would like to use the alternative blue button style, simply add the `nav-btn--alt` class
alongside the `nav-btn` class.

```html
<button class="nav-btn nav-btn--alt" data-address="" data-clipboard-text="">
  <span class="nav-btn__text">Pay with Nav</span>
  <span class="nav-btn__action-text">Show QR Code</span>
</button>
```
And in the case of the QR button, you will want to add `nav-btn-container--alt` as well:

```html
<div class="nav-btn-container nav-btn-container--alt">
  <!-- rest of button markup -->
</div>
```

## Development

To install dependencies:

```
$ yarn
```

To start the dev server with live reload:

```
$ yarn start
```

This should open a browser to `http://localhost:9000/dev`

### Building the site

```
$ yarn build:site
```

### Deploying the site

```
$ yarn deploy:site
```

## Integrations

* Nav Button WordPress Plugin (Coming Soon)

## Contributing

Bug reports, feature requests, and pull requests are all welcome.

## Donating

If you find this work useful, [Nav Coin](https://navcoin.org/) tips are always appreciated.

My address is in every single demo of this button:

```
NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt
```
