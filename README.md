![alt tag](batarang_icon.jpg)

batarang.js
---

A utility belt of tiny javascript functions to attack not-so-everyday problems.

`npm install batarang --save`

---

### Running tests
```
npm run test
```

---

### Array Utilities

##### pluckUniqueValues
Given an array of objects, gets all the unique values of a given key

##### swapArrayItems
Returns an new array with the items at the given indexes swapped

##### excludeFromList
Excludes items from the first array of objects if the value of an item's specific field name is present the second input array.

Returns a new array.

```
excludeFromList([{id: 1}, {id: 2}, {id: 3}], [2, 3], 'id');
// [{id: 1}]

```
---

### Misc Utilities

##### isEnterKey
TODO: Document

##### capitalizeFirstChar
TODO: Document

---