import styles from './avatar.css?inline';
import { getColorFromString, getContrastingColor } from '../../utils/color-utils.js';

class PuzzleAvatar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <div class="avatar js-avatar"></div>
        `;

        this.avatarElement = this.shadowRoot.querySelector('.js-avatar');
    }

    static get observedAttributes() {
        return ['src', 'size', 'initials', 'shape', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
            this.style.setProperty('--size', newValue);
        } else if (name === 'src') {
            this.avatarElement.innerHTML = `<img src="${newValue}">`;
        } else if (name === 'initials') {
            this.avatarElement.innerHTML = newValue.length > 2 ? newValue.substring(0, 2) : newValue;

            if (!this.hasAttribute('color')) {
                const color = getColorFromString(newValue);

                this.avatarElement.style.backgroundColor = color;
                this.avatarElement.style.color = getContrastingColor(color);
            }
        } else if (name === 'color') {
            this.avatarElement.style.backgroundColor = newValue;
            this.avatarElement.style.color = getContrastingColor(newValue);
        }
    }
}

customElements.define('puzzle-avatar', PuzzleAvatar);

export { PuzzleAvatar };
