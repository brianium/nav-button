# nav-button

Buttons for simply sharing [NAV Coin](https://navcoin.org/) addresses.

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

The `nav-button` library is build as a UMD module, so you should be able to use
it multiple ways.

CommonJS:

```js
const factory = require('nav-button').default;
```

ES6:

```js
import factory from 'nav-button';
```

Window:

To use it on the window, you will need to include the script in the `head` of
your document.

```html
<script src="/nav-button/dist/index.js"></script>
<script type="text/javascript">
var factory = window['nav-button'].default;
</script>
```

## Usage

NAV buttons are really just styled markup. The React components are probably
the easiest to use, but whether you are using React or some other implementation,
you will want to include the NAV button css located in `nav-button/dist/nav-button.css`.

```html
<link rel="stylesheet" href="nav-button/dist/nav-button.css">
```

After rendering a button you can use the JavaScript API to bring it to life.

### Vanilla JS

The vanilla JavaScript approach can be used to generated `HTMLElements` that can then
be added to a page, or be used to target existing button elements.

The default factory export can be given an element (see *Template* section below) or a selector:

```js
import factory from 'nav-button';

factory('#my-tip-button');
```

You can also get a button dynamically and append it to your document:

```js
import { createButton } from 'nav-button';

const button = createButton({
  address: 'NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt'
});

document.getElementById('tipme').appendChild(button);
```

#### Options

The following options are supported:

```js
{
  type: 'qr', // type of button - if not qr, will be the default click to copy button
  position: 'bottom', // where to open qr code popover - can be bottom or right
  alt: false, // set to true to use the alternative blue button style
  size: '', // can be "md" for medium buttons or "sm" for small buttons - default is the large button style
}
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
    text="Tip with NAV"
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
    text="Pay with NAV"
    actionText="Show QR Code"
    onCopy={(e) => console.log(e.text)}
    closeText="Thanks! Got it"
    alt={true}
  />
);
```

The following props are supported for these components:

```js
{
  text: "Tip with NAV",
  alt: false, // set to true to use the alternative blue buttons
  actionText: "Copy Address",
  actionTitle: "click to copy address",
  onCopy: () => {},
  className: "",
  closeText: "Thanks! Got it",
  size: "", // supports size variants via "sm" for small, and "md" for medium - default is large,
  options: {} // any other option supported by the vanilla js factory - properties specified here will be preferred over props if there are collisions
};
```

### Templates

The following templates should be used for rendering markup. These can be used if you
want to perform rendering on server side. They are meant to be copied
as is, with the exception of including your own NAV address:

A default button looks like this:

```html
<button class="nav-btn" data-address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt" data-clipboard-text="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt">
  <span class="nav-btn__text">Tip with NAV</span>
  <span title="click to copy address" class="nav-btn__action-text">Copy Address</span>
</button>
```

The `data-address` and `data-clipboard-text` are important if you want your QR codes
to render correctly, and if you want to support copy to clipboard functionality.

Markup for a QR code supported button is a little more involved:

```html
<div class="nav-btn-container">
  <button class="nav-btn" data-address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt" data-clipboard-text="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt">
    <span class="nav-btn__text">Pay with NAV</span>
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

If you would like to use the alternative blue button, simply add the `nav-btn--alt` class
alongside the `nav-btn` class.

```html
<button class="nav-btn nav-btn--alt" data-address="" data-clipboard-text="">
  <span class="nav-btn__text">Pay with NAV</span>
  <span class="nav-btn__action-text">Show QR Code</span>
</button>
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

* NAV Button WordPress Plugin (Coming Soon)

## Contributing

Bug reports, feature requests, and pull requests are all welcome.

## Donating

If you find this work useful, [NAV Coin](https://navcoin.org/) tips are always appreciated.

My address is in every single demo of this button:

```
NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt
```