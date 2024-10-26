import styles from './button.css?inline';

class PuzzleButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <button>
                <slot></slot>
            </button>
        `;

        this.buttonElement = this.shadowRoot.querySelector('button');
    }

    static get observedAttributes() {
        return ['disabled', 'variant', 'height'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            this.buttonElement.disabled = newValue !== null;
        } else if (name == 'height') {
            this.style.setProperty('--height', newValue);
        }
    }
}

customElements.define('puzzle-button', PuzzleButton);

export { PuzzleButton };
