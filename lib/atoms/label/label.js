import styles from './label.css?inline';

class PuzzleLabel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <slot></slot>
        `;
    }

    static get observedAttributes() {
        return ['truncate'];
    }
}

customElements.define('puzzle-label', PuzzleLabel);

export { PuzzleLabel };
