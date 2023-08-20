import { html } from 'lit';
import { updateWhenLocaleChanges } from '@lit/localize';
// eslint-disable-next-line import/extensions
import { getLocale, localeNames, setLocaleFromUrl } from '../../localization.js';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    this.currentLocale = getLocale();
    updateWhenLocaleChanges(this);
  }

  render() {
    const allLocales = ['en', 'es', 'fr', 'id'];

    return html`
    <div class="center-container">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="localeDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ${localeNames[this.currentLocale]}
        </button>
        <ul class="dropdown-menu" aria-labelledby="localeDropdown">
          ${allLocales.map((locale) => html`
              <li>
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  @click=${() => this._localeChanged(locale)}
                >
                  ${localeNames[locale]}
                </a>
              </li>
            `)}
        </ul>
      </div>
      </div>
    `;
  }

  _localeChanged(newLocale) {
    if (newLocale !== this.currentLocale) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();

      this.currentLocale = newLocale;
      this.requestUpdate();
    }
  }
}

customElements.define('locale-picker', LocalePicker);
