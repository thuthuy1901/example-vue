new Vue({
    el: '#example-1',
    data: {
        items: [{ name: 'Cà phê' }, { name: 'Trà đặc' }, { name: 'Bò húc' }],
    },
})

new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [{ name: 'Cà phê' }, { name: 'Trà đặc' }, { name: 'Bò húc' }],
    },
})

new Vue({
    el: '#v-for-object',
    data: {
        object: {
            họ: 'Bành',
            tên: 'Tổ',
            tuổi: 800,
        },
    },
})

new Vue({
    el: '#test',
    data: {
        show: true,
    },
})

Vue.component('todo-item', {
    template:
        '\
            <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
            </li>\
        ',
    props: ['title'],
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'luộc khoai',
            },
            {
                id: 2,
                title: 'cùng chị giã gạo',
            },
            {
                id: 3,
                title: 'thổi cơm',
            },
            {
                id: 4,
                title: 'nhổ cỏ vườn',
            },
        ],
        nextTodoId: 5,
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText,
            })
            this.newTodoText = ''
        },
    },
})
