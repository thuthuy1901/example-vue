### directive thông dụng

v-bind: / :
```javascript
    v-bind:nameHtmlProp="nameVar" // lấy ra biến trong data 
```

v-model=
```javascript
    v-model="dataTwoWayBinding" // cập nhập biến hai chiều 
```

v-if=
```javascript
    <p v-if="type === 'A'">Type A</p>
    <p v-else-if="type === 'B'">Type B</p>
    <p v-else>Other Type</p> 
```

v-for=
```javascript
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
```

v-on: / @
```javascript
    <button v-on:click="handleClick">Click me</button>
    <button @click="handleClick">Click me</button>
```

v-show:
```javascript
    <p v-show="isVisible">This is conditionally visible</p>
```

v-html=
```javascript
    <div v-html="rawHtml"></div>
    rawHtml: '<strong>This is bold text</strong>'
```

v-slot:name / v-slot
```javascript
    <!-- ChildComponent.vue -->
    <template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot> <!-- Default slot -->
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    </template>

    <!-- ParentComponent.vue -->
    <template>
        <ChildComponent>
            <template v-slot:header>
            <h1>This is the header content</h1>
            </template>

            <p>This is the main content, using the default slot</p>

            <template v-slot:footer>
            <p>This is the footer content</p>
            </template>
        </ChildComponent>
    </template>
```

