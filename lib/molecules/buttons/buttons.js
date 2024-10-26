import styles from './buttons.css?inline';

class PuzzleButtons extends HTMLElement {
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
        return ['align', 'stretch'];
    }
}

customElements.define('puzzle-buttons', PuzzleButtons);

export { PuzzleButtons };
