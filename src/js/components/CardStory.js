import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardStory extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    formattedDate: { type: Date, reflect: true },
    class: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.id = '';
    this.photoUrl = '';
    this.name = '';
    this.description = '';
    this.formattedDate = '';
  }

  render() {
    return html`
    <div class="card" id="${this.id}">
    <img src="${this.photoUrl}" alt="${this.name}" class="card-header" />
    <div class="details">
      <h2 class="card-title">${this.name}</h2>
      <h3 class="card-subtitle">${this.formattedDate}</h3>
      <p class="card-text">${this.description}</p>
      <a href="#" class="card-link">Read More</a>
    </div>
  </div>
    `;
  }
}

customElements.define('card-story', CardStory);
