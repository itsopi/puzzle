class PuzzleButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    font-family: inherit;
                    display: inline-flex;
                }

                :host([block]) button {
                    width: 100%;
                }

                :host([variant="secondary"]) button {
                    background: #fff;
                    color: #000;
                    border: 1px solid #cfd8dc;
                }

                :host([variant="secondary"]) button:hover {
                    background: #f5f5f5;
                }

                :host([variant="secondary"][disabled]) button {
                    background: #e0e0e0;
                    color: #9e9e9e;
                    cursor: not-allowed;
                    border-color: #cfd8dc;
                }

                button {
                    background: #000;
                    border: 0;
                    border-radius: 3px;
                    padding: 0rem 1rem;
                    cursor: pointer;
                    color: #fff;
                    height: 40px;
                    border-radius: 10px;
                    font-size: 14px;
                    font-family: inherit;
                    width: 100%;
                }

                button:hover {
                    background: #212121;
                }

                button:disabled {
                    background: #cfd8dc;
                    color: #fff;
                    cursor: not-allowed;
                }
            </style>
            <button>
                <slot></slot>
            </button>
        `;

        this.button = this.shadowRoot.querySelector('button');
    }

    static get observedAttributes() {
        return ['disabled', 'variant', 'block'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            this.button.disabled = newValue !== null;
        }
    }
}

customElements.define('puzzle-button', PuzzleButton);

export { PuzzleButton };
