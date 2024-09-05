### v-if
- điều kiện để ẩn/show trong dom

```javascript
    <div id="example">
        <button @click="toggleButton">click</button>
        <p v-if="isActive">0</p>
        <p v-else-if="isActive === false">1</p>
        <template v-else>
            <p>3</p>
            <p>4</p>
        </template>
    </div>

    new Vue({
        el: '#example',
        data: {
            isActive: '',
        },
        methods: {
            toggleButton() {
                this.isActive = !this.isActive
            },
        },
    })
```

### v-show
- display: none

```javascript
    <div id="example">
        <div v-show="show">test</div>
    </div>

    data: {
        show: false,
    }
```

#### v-for
- dùng key để phân biệt không giá trị ô input sẽ ko bị thay đổi theo

```javascript
    <div id="app">
        <div v-for="item in items" style="display: flex" :key="item.id">
            <p>{{item.value}}</p>
            <input type="text" />
        </div>
        <button @click="shuffleItems">Shuffle Items</button>
    </div>
```