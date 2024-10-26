import avatar from './atoms/avatar.js';

const data = [
    {
        id: 'atoms',
        name: 'Atoms',
        items: [
            avatar
        ]
    }
];

const navigationElement = document.querySelector('.js-navigation');
const containerElement = document.querySelector('.js-container');
const sidebarElement = document.querySelector('.js-sidebar');

navigationElement.innerHTML = data.map((item) => {
    return `
        <div class="items js-items">
            ${item.items.map((subItem) => `<div class="item js-item" data-item="${subItem.navigation.id}">${subItem.navigation.name}</div>`).join('')}
        </div>
    `;
}).join('');

navigationElement.addEventListener('click', (event) => {
    const itemElement = event.target.closest('.js-item');

    if (itemElement) {
        const schema = data.find((item) => item.items.find((subItem) => subItem.navigation.id === itemElement.dataset.item)).items.find((subItem) => subItem.navigation.id === itemElement.dataset.item);

        containerElement.innerHTML = schema.container;
        sidebarElement.innerHTML = Object.keys(schema.sidebar).map((key) => {
            if (key === 'attributes') {
                return `
                    <div class="attributes">
                        ${schema.sidebar[key].map((attribute) => {
                            return `
                                <div class="attribute">
                                    <div class="name">${attribute.name}</div>
                                    <div class="description">${attribute.description}</div>
                                    <div class="examples">
                                        ${attribute.examples.map((example) => `<pre><code class="language-html">${example.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            }
        }).join('');

        hljs.highlightAll();
    }
});
