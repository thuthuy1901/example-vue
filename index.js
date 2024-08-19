//EX1
var data = { a: 1 }

var vm = new Vue({
    data: data,
})

vm.a == data.a // => true

vm.a = 2
data.a // => 2

data.a = 3
vm.a // => 3

//EX2
var obj = {
    foo: 0,
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj,
})

// EX3
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
