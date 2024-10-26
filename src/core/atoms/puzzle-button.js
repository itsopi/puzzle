class PuzzleButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
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
                }

                button {
                    background: #000;
                    border: 0;
                    border-radius: 3px;
                    padding: 0 16px;
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

        this.buttonElement = this.shadowRoot.querySelector('button');
    }

    static get observedAttributes() {
        return ['disabled', 'variant'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            this.buttonElement.disabled = newValue !== null;
        }
    }
}

customElements.define('puzzle-button', PuzzleButton);

export { PuzzleButton };
