import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AboutApps extends LitElement {
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
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify; 
    }
  `;

  render() {
    return html`
      <div class="title"> 
        ${msg('StoryApp is an innovative application that combines the charm of polaroid photos with the power of storytelling. Like looking at photos hanging on a wall, this app allows users to express their stories in the classic form of photos, with stories intertwined at the bottom. This unique concept combines compelling visuals with a strong narrative, creating a immersive and immersive experience. Every story in StoryApp looks like a Polaroid photo on the wall. Users can feel the nostalgic charm of Polaroid photos, while exploring the interesting stories underneath. With this unique style, StoryApp creates an atmosphere that invites reading and sharing stories in new and creative ways.')}  
      </div>
    `;
  }
}

customElements.define('about-apps', AboutApps);
