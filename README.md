### v-model

```javascript
    <textarea v-model="message" ></textarea>

    <input v-model="message" />
```

```javascript
    <div id="ex-5">
        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Giá tiền: {{ selected }}</span>
    </div>

    data: {
        selected: '50k',
        options: [
            { text: 'Đọt bí xào tỏi', value: '50k' },
            { text: 'Canh bông điên điển', value: '30k' },
            { text: 'Lẩu nấm', value: '45k' },
        ],
    },
```

#### modifier

```javascript
    // click ra ngoài hoặc ấn enter mới cập nhập
    <input v-model.lazy="message" />

    // chỉ nhập số
    <input v-model.number="age" type="number" />

    // bỏ nhiều space trước và trong text
    <input v-model.trim="msg" />
```