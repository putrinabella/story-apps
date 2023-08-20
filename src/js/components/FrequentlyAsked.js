import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FrequentlyAsked extends LitElement {
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
      margin-top: auto; /* Untuk memusatkan dari atas */
      margin-bottom: auto; /* Untuk memusatkan dari bawah */
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center; 
    }
    h3 {
      font-size: 2rem; 
      padding: 0 10px 0 0;
      color: #9475ea;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="title">
        <h3> 
        ${msg('Frequently Asked Questions')} 
      </div>
    `;
  }
}

customElements.define('frequently-asked', FrequentlyAsked);
