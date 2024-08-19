## Day1:

### CDN:
```html
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
```

### Use
index.js
```javascript
    var app3 = new Vue({
        el: '#id', // id
        data: {
            var: "this var" // variable
        }
    })
```

index.html
```html
    <div id="id">
        {{ var }}
    </div>
```

### Directive
```html
    <span v-bind:title="message">
    <span v-if="seen">
    <li v-for="todo in todos">
    <button v-on:click="nameFun">Reverse Message</button>
    <input v-model="message"> //two way binding
```
