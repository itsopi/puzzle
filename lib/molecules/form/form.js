import styles from './form.css?inline';

class PuzzleForm extends HTMLElement {
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
}

customElements.define('puzzle-form', PuzzleForm);

export { PuzzleForm };
