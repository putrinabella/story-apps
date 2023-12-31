import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class LoadingSpinner extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="preloader-wrapper" id="preloaderWrapper">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
