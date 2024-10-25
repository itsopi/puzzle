class PuzzleSelect extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
                .select {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    border: 1px solid #cfd8dc;
                    border-radius: 10px;
                    cursor: pointer;
                    padding: 0 16px;
                    background: #fff;
                    width: 100%;
                    font-size: 14px;
                    box-sizing: border-box;
                    text-align: left;
                }

                .text {
                    flex: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis
                }

                .select svg {
                    margin-left: 16px;
                }

                .select:hover {
                    background: #f5f5f5;
                }

                .select.disabled {
                    background: #e0e0e0;
                    color: #9e9e9e;
                    cursor: not-allowed;
                }
            </style>
            <button class="select js-select">
                <span class="text">
                    <slot></slot>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </button>
        `;

        this.selectElement = this.shadowRoot.querySelector('.js-select');
    }

    static get observedAttributes() {
        return ['disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            this.selectElement.classList.toggle('disabled', newValue !== null);
        }
    }
}

customElements.define('puzzle-select', PuzzleSelect);

export { PuzzleSelect };
