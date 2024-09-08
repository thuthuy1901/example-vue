Vue.component('button-counter', {
    data() {
        return {
            count: 0,
        }
    },
    template:
        '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>',
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>',
})

new Vue({
    el: '#components-demo',
    data: {
        posts: [
            { id: 1, title: 'Giới thiệu về Vue' },
            { id: 2, title: 'Các khái niệm trong Vue' },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao' },
        ],
    },
})

Vue.component('blog-post2', {
    props: ['post'],
    template: `
        <div class="blog-post2">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Phóng to
            </button>
            <button v-on:click="$emit('downlarge-text', 0.1)">
                Thu nhỏ
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
        <div>
            <input
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
            />
            <p>{{value}}</p>
        </div>
    `,
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'a', content: 'a' },
            { id: 2, title: 'b', content: 'a' },
            { id: 3, title: 'c', content: 'a' },
        ],
        postFontSize: 1,
        searchText: '',
    },
    methods: {
        downLargeText: function (enlargeAmount) {
            this.postFontSize -= enlargeAmount
        },
    },
})
