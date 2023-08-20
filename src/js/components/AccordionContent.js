import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class AccordionContent extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="accordion" id="accordionfqa">
      <accordion-item title=" ${msg('How do I create a story on StoryApp?')}" content=" ${msg('To create a story on StoryApp, you can log in to your account, then select the "Create New Story" option. You can upload images you want to use as story illustrations, then write your story below. Once you\'re done, you can share your story with the StoryApp community.')}"></accordion-item>
      <accordion-item title=" ${msg('Can I add photos to my story?')}" content=" ${msg('You can add photos or illustrations to your story on StoryApp. Each story will be displayed in polaroid photo format with the story below. This adds an additional visual dimension to your story.')}"></accordion-item>
      <accordion-item title=" ${msg('Can stories on StoryApp be accessed by everyone?')}" content=" ${msg('It depends on your privacy preferences. You can choose to share your story with the entire StoryApp community or make your story private. This gives you control over who can view your story.')}"></accordion-item>
      </div>
    `;
  }
}

customElements.define('accordion-content', AccordionContent);
