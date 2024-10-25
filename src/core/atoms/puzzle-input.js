class PuzzleInput extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
                input {
                    width: 100%;
                    border: 1px solid #cfd8dc;
                    box-sizing: border-box;
                    height: 40px;
                    border-radius: 10px;
                    padding: 0 16px;
                    outline: none;
                    font-family: inherit;
                }

                input:placeholder {
                    font: inherit;
                    color: #757575;
                }
            </style>
            <div>
                <input type="text" />
            </div>
        `;

        this.inputElement = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['placeholder', 'type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') {
            this.inputElement.placeholder = newValue || '';
        } else if (name === 'type') {
            this.inputElement.type = newValue || 'text';
        }
    }
}

customElements.define('puzzle-input', PuzzleInput);

export { PuzzleInput };
