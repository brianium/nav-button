import React, { Component } from "react";
import NavQrButton from "./NavQrButton";

export default class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      alt: false
    };
  }

  onCopy() {
    console.log("copy");
  }

  toggle() {
    const { alt } = this.state;
    this.setState({
      alt: !alt
    });
  }

  render() {
    return (
      <div>
        <NavQrButton
          address="NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt"
          onCopy={this.onCopy}
          alt={this.state.alt}
        />
        <button type="button" onClick={() => this.toggle()}>
          toggle
        </button>
      </div>
    );
  }
}
