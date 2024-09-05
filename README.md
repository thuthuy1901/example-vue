### Class Binding

#### Object
- dùng điều kiện để return

```javascript
    // class="static active"
    <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
        test
    </div> 

    data: {
        isActive: true,
        hasError: false,
    },
```

```javascript
    <div v-bind:class="classObject">test</div>

    //C1: 
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }

    //C2:
    data: {
        isActive: true,
        error: null
    },

    computed: {
        classObject () {
            return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
```

#### Array
- truyền như biến

```javascript
    // class="active text-danger"
    <div v-bind:class="[activeClass, errorClass]">test</div>

    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
```

```javascript
    //C1 
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

    //C2
    <div v-bind:class="[{ active: isActive }, errorClass]"></div>
```