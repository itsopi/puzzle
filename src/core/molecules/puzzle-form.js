class PuzzleForm extends HTMLElement {
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
                    gap: 8px;
                    font-size: 14px;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define('puzzle-form', PuzzleForm);

export { PuzzleForm };
