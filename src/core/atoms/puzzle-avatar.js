import { getColorFromString, getContrastingColor } from '../..//utils/color-utils.js';

class PuzzleAvatar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style class="js-variables">
                :host {
                    --avatar-size: 40px;
                }
            </style>
            <style>
                :host([shape="square"]) .avatar {
                    border-radius: calc(var(--avatar-size) / 4);
                }

                .avatar {
                    width: var(--avatar-size);
                    height: var(--avatar-size);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: calc(var(--avatar-size) * 0.35);
                    color: #fff;
                    background-color: #000;
                    object-fit: cover;
                    overflow: hidden;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            </style>
            <div class="avatar js-avatar"></div>
        `;

        this.avatarElement = this.shadowRoot.querySelector('.js-avatar');
        this.variablesElement = this.shadowRoot.querySelector('.js-variables');
    }

    static get observedAttributes() {
        return ['src', 'size', 'initials', 'shape', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
            this.variablesElement.textContent = `:host { --avatar-size: ${newValue}; }`;
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
