class PuzzleLayout extends HTMLElement {
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
                    gap: 16px;
                }

                :host([direction="row"]) {
                    flex-direction: row;
                }
            </style>
            <slot></slot>
        `;
    }

    static get observedAttributes() {
        return ['direction'];
    }
}

customElements.define('puzzle-layout', PuzzleLayout);

export { PuzzleLayout };
