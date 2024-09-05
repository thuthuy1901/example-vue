### v-for

#### show
- in/ of như nhau

```javascript
    // Array 
    <li v-for="(item, index) in items">

    // Object
    <div v-for="(value, key, index) in object">
```

#### xử lý phức tạp

```javascript
    <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Thêm việc cần làm"
    />
    <ul>
        <li
            is="todo-item" // name component
            v-for="(todo, index) in todos" 
            v-bind:key="todo.id"
            v-bind:title="todo.title" // props
            v-on:remove="todos.splice(index, 1)" // hàm xóa truyeefnn vào
        ></li>
    </ul>

    // component item
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
            ],
            nextTodoId: 2,
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
```