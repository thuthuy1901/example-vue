var vm = new Vue({
    el: '#example',
    data: {
        isActive: true,
        hasError: false,
    },
})

Vue.component('my-component', {
    template: '<p class="foo bar">test2</p>',
})
