### component

```javascript
    <div id="blog-posts-events-demo">
        <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post2
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                // c1: 
                v-on:enlarge-text="postFontSize += 0.1"
                // c2: dùng $event để lấy par truyền vào từ component
                v-on:enlarge-text="postFontSize += $event"
                //c3: truyền methods vào
                v-on:downLargeText="downLargeText(0.1)"
                //c4:
                v-on:downLargeText="downLargeText($event)"
            ></blog-post2>
        </div>
    </div>

    //  đặt vue.component trước new vue
    Vue.component('blog-post2', {
        props: ['post'],
        template: `
            <div class="blog-post2">
                <h3>{{ post.title }}</h3>
                <button v-on:click="$emit('enlarge-text', 0.1)">
                    Phóng to
                </button>
                <button v-on:click="$emit('downLargeText', 0.1)">
                    Thu nhỏ
                </button>
                <div v-html="post.content"></div>
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
        },
        methods: {
            downLargeText: function (enlargeAmount) {
                this.postFontSize -= enlargeAmount
            },
        },
    })
```

#### custom input 

```javascript
    <custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
    ></custom-input>

    Vue.component('custom-input', {
        props: ['value'],
        template: `
            <input
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
            />
        `
    })
```
