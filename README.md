### props

```javascript
    <div id="components-demo">
        <my-component
            v-model="username"
            class="username-input"
            placeholder="Enter your username"
            label="labelTest"
        ></my-component>
    </div>

    Vue.component('my-component', {
        // có cái này mới dùng đc $attrs lấy tất cả những gì còn lại
        // của props mà ko đc nêu trong props phía dưới
        inheritAttrs: false,
        // props: [] lấy tên các props
        // props: {} quy định kiểu đầu vào 
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
```
