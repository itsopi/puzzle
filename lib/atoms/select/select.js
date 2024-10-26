import styles from './select.css?inline';

class PuzzleSelect extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <button class="select js-select">
                <span class="text">
                    <slot></slot>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
        `;

        this.selectElement = this.shadowRoot.querySelector('.js-select');
    }

    static get observedAttributes() {
        return ['disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            this.selectElement.classList.toggle('disabled', newValue !== null);
        }
    }
}

customElements.define('puzzle-select', PuzzleSelect);

export { PuzzleSelect };
