/* eslint-disable no-useless-constructor */
import { css, html, LitElement } from 'lit';

import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinks extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-left: auto; 
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0;
    }
  `;

  constructor() {
    super();
  }

  render() {
    const isLoggedIn = CheckUserAuth.checkLoginState();

    return html`
      <ul>
        <nav-link content="Dashboard" to="/"></nav-link>
        <nav-link content="Add Story" to="/addpage.html"></nav-link>
        <nav-link content="About" to="/about.html"></nav-link>
        ${isLoggedIn
    ? html`<nav-link-auth></nav-link-auth>`
    : html`<nav-link content="Masuk" to="/auth/login.html" id="loginMenu"></nav-link>`}
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
