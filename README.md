### computed
- cached, getter, setter
- chạy get thì data thay đổi

```javascript
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
```

### methods
- gán vào các event Ex: click,...

```javascript
    methods: {
        showMessMethods () {
            return this.message
        },
    },
```

### watch
- đặt trùng tên với biến cần theo dõi rồi thực hiện 
- ko cached, hay dùng cho không đồng bộ 

```javascript
    data: {
        message: '',
    },
    watch: {
        message() {
            this.showMessComputed2 = ' test'
        },
    },
```
