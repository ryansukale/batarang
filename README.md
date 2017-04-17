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
Given an array of objects, gets all the unique values of a given key. The default key is `id`.

```js
var items = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 1, name: 'one'},
  {id: 2, name: 'two'}
];

pluckUniqueValues(items);
// [1, 2] All the unique values of id

pluckUniqueValues(items, 'name');
// ['one', 'two'] All the unique values of name
```

##### swapArrayItems
Returns an new array with the items at the given indexes swapped.

```js
var arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];
swapArrayItems(arr, 1, 3)
// [{a: 1}, {d: 4} , {c: 3}, {b: 2}]
```

##### excludeFromList
Excludes items from the first array of objects if the value of an item's specific field name is present the second input array.

Returns a new array.

```
excludeFromList([{id: 1}, {id: 2}, {id: 3}], [2, 3], 'id');
// [{id: 1}]

```

#### sortByField
Given an array of objects, sort the objects in ascending or descending order based on the value of a key.

```js
var items = [{id: 2}, {id: 4}, {id: 1}, {id: 3}];
sortByField(items, 'id');
// [{id: 1}, {id: 2}, {id: 3}, {id: 4}]

sortByField(items, 'id', 'DESC');
// [{id: 4}, {id: 3}, {id: 2}, {id: 1}]
```

##### arrayToMap
TODO: Document

---

### Misc Utilities

##### capitalizeFirstChar
Capitalize the first character of a string.

```js
capitalizeFirstChar('examplestring')
// ExampleString
```

##### getCSVWords
For a given comma separated string, returns and array of words split by comma. Trims blank spaces and omits empty characters.

```js
getCSVWords(',  hello,, ,    ,world, ,');
// ['hello', 'world']
```

##### getHostNameFromUrl
TODO: Document

##### getYoutubeVideoId
TODO: Document

##### isEmail
TODO: Document

##### isEnterKey
Given an event object, returns true if it represents the enter key.

```js
var event = {keyCode: 13};
isEnterKey(event); // true

event = {keyCode: 1000};
isEnterKey(event) // false
```

---

##### reloadPage
Reloads the page. This is just a wrapper around window.location.reload so it will only work on the client. A boolean argument of true forces it to reload from the server - and you thereby lose the scroll positioning. [Read more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

```js
reloadPage(); // Attempts to reload page from the cache

reloadPage(true); // Attempts to reload page from the server
```
---