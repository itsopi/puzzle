export default {
    navigation: {
        id: 'avatar',
        name: 'Avatar'
    },
    container: '<puzzle-avatar></puzzle-avatar>',
    sidebar: {
        attributes: [
            {
                name: 'src',
                description: 'The URL of the image to display in the avatar.',
                examples: [
                    '<puzzle-avatar src="https://example.com/avatar.jpg"></puzzle-avatar>',
                    '<puzzle-avatar src="../../assets/images/uifaces-abstract-image.jpg"></puzzle-avatar>'
                ]
            },
            {
                name: 'size',
                description: 'The size of the avatar.',
                examples: [
                    '<puzzle-avatar size="2rem"></puzzle-avatar>'
                ]
            },
            {
                name: 'initials',
                description: 'The initials to display in the avatar.',
                examples: [
                    '<puzzle-avatar initials="JS"></puzzle-avatar>',
                ]
            },
            {
                name: 'shape',
                description: 'The shape of the avatar.',
                examples: [
                    '<puzzle-avatar shape="square"></puzzle-avatar>'
                ]
            },
            {
                name: 'color',
                description: 'The color of the avatar.',
                examples: [
                    '<puzzle-avatar color="#212121"></puzzle-avatar>',
                ]
            }
        ]
    }
};
