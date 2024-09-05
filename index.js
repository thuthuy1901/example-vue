new Vue({
    el: '#example',
    data: {
        isActive: '',
        show: false,
    },
    methods: {
        toggleButton() {
            this.isActive = !this.isActive
        },
    },
})

new Vue({
    el: '#app',
    data: {
        items: [
            { id: 1, value: 'Item 1' },
            { id: 2, value: 'Item 2' },
            { id: 3, value: 'Item 3' },
        ],
    },
    methods: {
        shuffleItems() {
            this.items = this.items.sort(() => Math.random() - 0.5)
        },
    },
})
