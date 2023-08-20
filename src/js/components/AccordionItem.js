/* eslint-disable no-param-reassign */
import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class AccordionItem extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
    content: { type: String, reflect: true },
    expanded: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.title = '';
    this.content = '';
    this.expanded = false;
  }

  toggleSection() {
    this.expanded = !this.expanded;

    const allAccordionItems = document.querySelectorAll('accordion-item');
    allAccordionItems.forEach((item) => {
      if (item !== this) {
        item.expanded = false;
      }
    });

    this.requestUpdate();
  }

  render() {
    return html`
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${this.expanded ? '' : 'collapsed'}"
                  type="button"
                  @click=${this.toggleSection}>
                  ${this.title}
          </button>
        </h2>
        <div class="accordion-collapse collapse ${this.expanded ? 'show' : ''}">
          <div class="accordion-body">
            ${this.content}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('accordion-item', AccordionItem);
