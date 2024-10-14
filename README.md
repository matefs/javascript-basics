### Repository structure: 

```bash
utils
├── math-functions
│   ├── add.js
│   ├── subtract.js
│   └── multiply.js
├── string-functions
│   ├── uppercase.js
│   └── lowercase.js
└── io-functions
    ├── read-file.js
    └── write-file.js

```

### Folder content: 
```
Utils/arrray-functions/find-index-by-number.js          Utils/sorting-numbers-example.js                        
Utils/arrray-functions/find-index-by-string.js          labeled-statement-for-loop.js                           
Utils/force-dispatch-event-listenner.html               right-way-to-declare-variables.js                       
Utils/force-waiting-async-function.js                   variables-operations/const-let-var-example.js           
Utils/object-assign.js                                  variables-operations/nullish-variable-validation.js     
Utils/objects-functions/delete-atribute-from-object.js  
```

### Optional chainning: 

```js
undefined.length // TypeError: Cannot read properties of undefined
undefined?.length // undefined 
```


### Inherit Method Override And Modify
```js

class Parent {
    getFinalLayout() {
        return Promise.resolve("Parent Layout");
    }
}

class Child extends Parent {
    getFinalLayout() {
        return super.getFinalLayout().then(originalLayout => {
            return `${originalLayout} with Child Modifications`;
        });
    }
}

// Usage
const childInstance = new Child();
childInstance.getFinalLayout().then(layout => {
    console.log(layout); // Output: "Parent Layout with Child Modifications"
});

```
