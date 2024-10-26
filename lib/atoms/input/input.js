import styles from './input.css?inline';

class PuzzleInput extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <input type="text">
        `;

        this.inputElement = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['placeholder', 'type', 'height'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') {
            this.inputElement.placeholder = newValue || '';
        } else if (name === 'type') {
            this.inputElement.type = newValue || 'text';
        } else if (name === 'height') {
            this.style.setProperty('--height', newValue);
        }
    }
}

customElements.define('puzzle-input', PuzzleInput);

export { PuzzleInput };
