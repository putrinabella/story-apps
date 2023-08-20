import { LitElement, html, css } from 'lit';

class NavLink extends LitElement {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  static styles = css`
  :host {
    display: block;
  }
  a {
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 500;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    color: white;
    position: relative;
  }
  a::before {
    content: '';
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }
  a:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  `;

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define('nav-link', NavLink);

// WITHOUT DOM
// import { html } from 'lit';
// import LitWithoutShadowDom from './base/LitWithoutShadowDom';

// class NavLink extends LitWithoutShadowDom {
//   static properties = {
//     content: { type: String, reflect: true },
//     to: { type: String, reflect: true },
//   };

//   constructor() {
//     super();
//     this._checkAvailabilityProperty()
//   }

//   _checkAvailabilityProperty() {
//     if (!this.hasAttribute('to')) {
//       throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
//     }
//   }

//   render() {
//     return html`
//       <li class="nav-item">
//         <a class="nav-link" href="${this.to}">${this.content}</a>
//       </li>
//     `;
//   }
// }

// customElements.define('nav-link', NavLink);
