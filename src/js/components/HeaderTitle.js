import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HeaderTitle extends LitElement {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.content = '';
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    :host {
      display: block;
      font-weight: bold;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center; 
    }
    h3 {
      font-size: 2rem; 
      margin: 0;
      color: #9475ea;
    }
    p {
      font-size: 1rem;
      margin: 5px 0 15px 0;
      font-weight: lighter;
    }
  `;

  render() {
    return html`
      <div class="title">
        <h3> 
        ${msg('Welcome to ')}  ${this.content}</h3>
        <p>${msg('- Share your memories here -')}</p>
      </div>
    `;
  }
}

customElements.define('header-title', HeaderTitle);

// WITHOUT DOM

// import { html } from 'lit';
// import LitWithoutShadowDom from './base/LitWithoutShadowDom';

// class HeaderTitle extends LitWithoutShadowDom {
//   static properties = {
//     content: { type: String, reflect: true },
//   };

//   constructor() {
//     super();
//     this.content = '';
//   }

//   render() {
//     return html`
//       <style>
//         ${HeaderTitle.styles}
//       </style>
//       <div class="title">
//         <h3 class="fw-bold fs-4">${this.content}</h3>
//         <p class="fs-6">- Share your memories here -</p>
//       </div>
//     `;
//   }
// }

// customElements.define('header-title', HeaderTitle);
