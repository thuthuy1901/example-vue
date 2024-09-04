var vm = new Vue({
    el: '#example',
    data: {
        message: '',
    },
    computed: {
        showMessComputed() {
            return this.message
        },
        showMessComputed2: {
            get() {
                return this.message
            },
            set(newValue) {
                this.message = newValue
            },
        },
    },
    methods: {
        showMessMethods: function () {
            return this.message
        },
    },
    watch: {
        message() {
            this.showMessComputed2 = ' test'
        },
    },
})
