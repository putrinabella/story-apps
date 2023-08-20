/* eslint-disable no-useless-constructor */
// import { html } from 'lit';
// import LitWithoutShadowDom from './base/LitWithoutShadowDom';

// class ShowPassword extends LitWithoutShadowDom {
//   constructor() {
//     super();
//   }

//   render() {
//     return html`
//     <input class="form-check-input"
// type="checkbox"  @click=${() => this._showPassword()}> Show Password
//     `;
//   }

//   _showPassword() {
//     const passwordText = document.getElementById('validationCustomPassword');
//     if (passwordText.type === 'password') {
//       passwordText.type = 'text';
//     } else {
//       passwordText.type = 'password';
//     }
//   }
// }

// customElements.define('show-password', ShowPassword);

import { html, css, LitElement } from 'lit';

class ShowPassword extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }

    .password-toggle-icon {
      display: inline-flex;
      align-items: center;
      color: #000;
      // background-color: #fff;
      margin: 2px 0;
      padding: 8px; 
    }

    .text {
      display: inline-block;
      margin: 2px 0;
      padding-left: 8px; 
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }
  `;

  constructor() {
    super();
    this._isPasswordVisible = false;
  }

  render() {
    return html`
    <div>
    <span class="password-toggle-icon" @click=${this._togglePasswordVisibility}>
    <i class="material-icons">${this._isPasswordVisible ? 'visibility_off' : 'visibility'}</i>
  <p class="text">
  ${this._isPasswordVisible ? 'Hide Password' : 'Show Password'}
  </p>
   </span>
    `;
  }

  _togglePasswordVisibility() {
    const passwordText = document.getElementById('validationCustomPassword');
    this._isPasswordVisible = !this._isPasswordVisible;
    passwordText.type = this._isPasswordVisible ? 'text' : 'password';
    this.requestUpdate();
  }
}

customElements.define('show-password', ShowPassword);
