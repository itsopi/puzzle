function generateRandomString(length = 16) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

class PuzzleButton {
    constructor() {
        this._element = document.createElement('button');
        this._element.id = generateRandomString();

        this._isCreated = false;

        this._style = null;

        this._styles = null;
        this._text = null;
        this._events = null;
    }

    _getStyle() {
        const styles = this._styles || {};

        if (!this._style) {
            this._style = document.createElement('style');
        }

        this._style.textContent = `
            #${this._element.id} {
                color: ${styles.color || '#000'};
                background: ${styles.background || '#fff'};
                padding: 0 16px;
                height: 40px;
                border: ${styles.border || '1px solid #000'};
                border-radius: 10px;
                cursor: pointer;
                font: inherit;
            }
        `;

        return this._style;
    }

    styles(styles) {
        this._styles = styles;

        if (this._isCreated) {
            this._getStyle();
        }

        return this;
    }

    text(text) {
        if (this._text === text) {
            return this;
        }

        this._element.textContent = text;

        return this;
    }

    on(event, handler) {
        if (!this._events) {
            this._events = {};
        }

        if (!this._events[event]) {
            this._events[event] = [];
        }

        this._events[event].push(handler);

        this._element.addEventListener(event, handler);

        return this;
    }

    dom() {
        if (this._isCreated) {
            return this._element;
        }

        this._isCreated = true;

        document.head.appendChild(this._getStyle());

        return this._element;
    }

    destroy() {
        if (!this._isCreated) {
            return;
        }

        this._element.remove();
        this._element = null;

        this._isCreated = null;

        this._style.remove();
        this._style = null;

        this._styles = null;
        this._text = null;
    }
}

const puzzleButton = new PuzzleButton().text('Click me').on('click', (ev) => {
    console.log(1, ev);
});

document.body.appendChild(puzzleButton.dom());

setTimeout(() => {
    puzzleButton.text('Click me 2').styles({
        border: '0',
        color: '#fff',
        background: '#000'
    });
}, 2000);
