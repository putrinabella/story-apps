import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class Navbar extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
    <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container">
        <span class="navbar-brand">${this.brandName}</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <nav-links></nav-links>
            </div>
        </div>
    </div>
</nav>



    `;
  }
}

customElements.define('nav-bar', Navbar);
