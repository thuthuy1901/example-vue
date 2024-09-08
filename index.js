Vue.component('my-component', {
    inheritAttrs: false,
    props: {
        label: String,
    },
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
            />
        </label>`,
})
new Vue({
    el: '#components-demo',
    data: {
        username: 'test',
    },
})
