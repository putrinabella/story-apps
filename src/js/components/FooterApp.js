import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <footer class="footer">
      ${msg('Created by Putri Nabella on 2023')}
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
