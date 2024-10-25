class PuzzleButtons extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.5rem;
                }

                :host([align="left"]) {
                    justify-content: flex-start;
                }

                :host([align="center"]) {
                    justify-content: center;
                }

                :host([stretch]) ::slotted(puzzle-button) {
                    flex: 1;
                }
            </style>
            <slot></slot>
        `;
    }

    static get observedAttributes() {
        return ['align', 'stretch'];
    }
}

customElements.define('puzzle-buttons', PuzzleButtons);

export { PuzzleButtons };
