class PuzzleField extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: .5rem;
                    font-size: 14px;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define('puzzle-field', PuzzleField);

export { PuzzleField };
