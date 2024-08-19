## Đối tượng Vue:

### reactivity system:
```javascript
    var data = { a: 1 }

    var vm = new Vue({
        data: data,
    })

    vm.a == data.a == true
    data.a = 3 // có thể gán lại vm.a = 3
    vm.a = 2 // có thể gán lại data.a = 2
```

```javascript
    Object.freeze(data) // không cho cập nhập
```

### $:
- Giúp phân biệt thuộc tính: 
```javascript
    var data = { a: 1 }
    var vm = new Vue({
        el: '#example',
        data: data,
    })

    vm.$data === data // => true
    vm.$el === document.getElementById('example') // => true

    vm.$watch('a', function (newValue, oldValue) {
        // Hàm callback này sẽ được gọi khi `vm.a` thay đổi
    })
```

###  lifecycle hook:
- Note: Không dùng **arrow func** vì nó ko thể dùng **this**
```javascript
    new Vue({
        data: {
            a: 1
        },
    created: function () {
        console.log('giá trị của a là ' + this.a)
    }
})
```
![Alt text](/src/lifecycle.png)