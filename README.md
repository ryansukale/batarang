
![batarang javascript library](batarang_icon.jpg)

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

##### pluckUniqueValues(array, [fieldName='id'])
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

##### swapArrayItems(array, number, number)
Returns an new array with the items at the given indexes swapped.

```js
var arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];
swapArrayItems(arr, 1, 3)
// [{a: 1}, {d: 4} , {c: 3}, {b: 2}]
```

##### excludeFromList(array, array, [fieldName='id'])
Excludes items from the first array of objects if the value of an item's specific field name is present the second input array.

Returns a new array.

```js
var idsToRemove = [2, 3];
var items = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'}
];

excludeFromList(items, idsToRemove);
// [{id: 1, name: 'a'}]

var namesToRemove = ['b'];
excludeFromList(items, namesToRemove, 'name');
// [{id: 1, name: 'a'}, {id: 3, name: 'c'}]
```

#### sortByField(array, fieldName, [order='ASC'])
Given an array of objects, sort the objects in ascending or descending order based on the value of a key.

```js
var items = [{id: 2}, {id: 4}, {id: 1}, {id: 3}];
sortByField(items, 'id');
// [{id: 1}, {id: 2}, {id: 3}, {id: 4}]

sortByField(items, 'id', 'DESC');
// [{id: 4}, {id: 3}, {id: 2}, {id: 1}]
```

##### arrayToMap(array, [fieldName='id'])
Converts an array of objects into a hash, where the key is one of the object properties. This is useful when you want convert an array of data you recieve from the server into a lookup hash to show on the UI based on the some field.

```js
var rows = [
  {age: 10},
  {age: 12},
  {age: 14}
];

arrayToMap(rows, 'age');
// { 10: {age: 10}, 12: {age: 12}, 14: {age: 14} }

```
---

### URL Utilities

##### getQueryString(url)
Returns the query string of a URL

```js
var url = 'https://www.youtube.com/results?search_query=the+dark+knight';
getQueryString(url)
// search_query=the+dark+knight
```

##### getQueryParams(url, [key])
Given a url, and a key, returns the values of the key if it is present as a query parameter. If no key is provided, it returns a hash of all the query parameters.
Single values are returned as strings
Multiple values are returned as arrays

```js
var url = 'https://www.youtube.com/watch?v=CqlNSVZpbAg';
var multiValues = ''https://www.example.com?x=1&x=11&y=2&z=3'';

getQueryParams(url, 'v'); // CqlNSVZpbAg
getQueryParams(multiValues, 'name'); // ['1', '11']
getQueryParams(multiValues); // { x: ['1', '11'] , y: '2', z: '3' }

```

##### getHostNameFromUrl(url)
Returns the hostname from a url. At the moment only works on the browser since it uses `document` to create an in-memory anchor tag to extract a url.

```js
getHostNameFromUrl('https://www.youtube.com/watch?v=KFHccsaTakg');
// www.youtube.com
```

##### getYoutubeVideoId(url)
Given a youtube video URL, returns the its video id

```js
var url = 'https://www.youtube.com/watch?v=EXeTwQWrcwY';
var playlistUrl = 'https://www.youtube.com/watch?v=ZRG1tWQN6e8&list=PLatdFpOvGjYGM6SMVXz1jpJMJdeHLKJun';
var shortUrl = 'https://youtu.be/VLXyMzCi7Mo';
var embedUrl = 'https://www.youtube.com/embed/VLXyMzCi7Mo';

getYoutubeVideoId(url); // EXeTwQWrcwY
getYoutubeVideoId(playlistUrl); // ZRG1tWQN6e8
getYoutubeVideoId(shortUrl); // ZRG1tWQN6e8
getYoutubeVideoId(embedUrl); // ZRG1tWQN6e8

```
---

### Misc Utilities

##### capitalizeFirstChar(string)
Capitalize the first character of a string.

```js
capitalizeFirstChar('examplestring')
// Examplestring
```

##### getCSVWords(string)
For a given comma separated string, returns and array of words split by comma. Trims blank spaces and omits empty characters.

```js
getCSVWords(',  hello,, ,    ,world, ,');
// ['hello', 'world']
```

##### isEnterKey(event)
Given an event object, returns true if it represents the enter key.

```js
var event = {keyCode: 13};
isEnterKey(event); // true

event = {keyCode: 1000};
isEnterKey(event) // false
```

---

##### reloadPage([boolean=false])
Reloads the page. This is just a wrapper around window.location.reload so it will only work on the client. A boolean argument of true forces it to reload from the server - and you thereby lose the scroll positioning. [Read more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

```js
reloadPage(); // Attempts to reload page from the cache

reloadPage(true); // Attempts to reload page from the server
```
---

##### License

MIT