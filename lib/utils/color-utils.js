
function hexToRgb(hex) {
    if (!hex) {
        return null;
    }

    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const bigint = parseInt(hex, 16);

    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function getLuminance({ r, g, b }) {
    const a = [r, g, b].map((v) => {
        v /= 255;

        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hashString(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
}

function getContrastingColor(hex) {
    const rgb = hexToRgb(hex);

    if (!rgb) {
        return null;
    }

    const luminance = getLuminance(rgb);
    const result = luminance > 0.5 ? '#000' : '#fff';

    return result;
}

function getColorFromString(str) {
    const colors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#9e9e9e',
        '#607d8b'
    ];

    const hash = hashString(str);
    const index = Math.abs(hash) % colors.length;
    const result = colors[index];

    return result;
}

export {
    getColorFromString,
    getContrastingColor
};
