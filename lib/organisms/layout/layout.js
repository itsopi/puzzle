import styles from './layout.css?inline';

class PuzzleLayout extends HTMLElement {
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
        return ['direction'];
    }
}

customElements.define('puzzle-layout', PuzzleLayout);

export { PuzzleLayout };
