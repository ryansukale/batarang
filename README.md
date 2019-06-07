
![batarang javascript library](batarang_icon.jpg)

batarang.js
---

A utility belt of tiny javascript functions to attack not-so-everyday problems.

`yarn add batarang`

OR

`npm install batarang --save`

Require individual functions from the library so you only load what you need e.g.

```
var getQueryString = require('batarang/getQueryString');
```

---

### Running tests
```
yarn test
```

OR

```
npm run test
```

---

## Array
* <a href="#pluckuniquevaluesarray-fieldnameid">`pluckUniqueValues`</a>
* <a href="#swaparrayitemsarray-number-number">`swapArrayItems`</a>
* <a href="#excludefromlistarray-array-fieldnameid">`excludeFromList`</a>
* <a href="#sortbyfieldarray-fieldname-orderasc">`sortByField`</a>
* <a href="#arraytomaparray-fieldnameid">`arrayToMap`</a>
* <a href="#cyclearray">`cycle`</a>
* <a href="#segregategroupingarray-itemarray">`segregate`</a>
* <a href="#segregatebyfunction-itemarray">`segregateBy`</a>

---

## URL
* <a href="#getquerystringurl">`getQueryString`</a>
* <a href="#getqueryparamsurl-key">`getQueryParams`</a>
* <a href="#gethostnamefromurlurl">`getHostNameFromUrl`</a>
* <a href="#createurlurlpattern-options-config">`createUrl`</a>
* <a href="#createrouterroutes">`createRouter`</a>
* <a href="#getyoutubevideoidurl">`getYoutubeVideoId`</a>

---

## MISC
* <a href="#getRangeWindow">`getRangeWindow`</a>
* <a href="#capitalizefirstcharstring">`capitalizeFirstChar`</a>
* <a href="#getcsvwordsstring">`getCSVWords`</a>
* <a href="#isenterkeyevent">`isEnterKey`</a>
* <a href="#slugifytext">`slugify`</a>
* <a href="#reloadpagebooleanfalse">`reloadPage`</a>

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
swapArrayItems(arr, 1, 3);
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
Converts an array of objects into a hash, where the key is one of the object properties. This is useful when you want convert an array of data you recieve from the server into a lookup hash to show on the UI based on the some field. The default key is 'id'.

```js
var rows = [
  {id: 1, age: 10},
  {id: 2, age: 12}
];

arrayToMap(rows);
// { 1: {id: 1, age: 10}, 2: {id: 2, age: 12} }

// Using custom property as key
arrayToMap(rows, 'age');
// { 10: {id: 1, age: 10}, 12: {id: 2, age: 12} }

var composite = [
  {emp_id: 1, mgr_id: 11},
  {emp_id: 1, mgr_id: 12}
];

function selector(item) {
  return item.emp_id + '_' + item.mgr_id;
}

// Using a selector function
arrayToMap(rows, selector);
// { '1_11': {emp_id: 1, mgr_id: 11}, '1_12': {emp_id: 1, mgr_id: 12} }

```

##### cycle(Array)
Returns an object that has 4 functions - `next()`, `nextVal()`, `prev()` and `prevVal()` that lets you cycle through the items in an array. This `next` and `previous` function return values that are compatible with the [ES6 iteratable protocal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) in mind. For regular usage, you are more likely to go with the `nextVal` and `prevVal` functions.

```js
var items1 = ['a', 'b'];
var iter1 = cycle(items1);
iter1.next(); // { value: 'a', index: 0, done: false }
iter1.next(); // { value: 'b', index: 1, done: false }
iter1.next(); // { value: 'a', index: 0, done: false }

iter1.nextVal(); // 'b'

var items2 = ['x', 'y'];
var iter2 = cycle(items2);
iter2.prev(); // { value: 'y', index: 1, done: false }
iter2.prev(); // { value: 'x', index: 0, done: false }
iter2.prev(); // { value: 'y', index: 1, done: false }

iter2.prevVal(); // 'x'
```

##### segregate(groupingArray, itemArray)
Divides the item array into smaller arrays whose sizes are specified in the grouping array. Returns an array. E.g.

```js
var items = ['a', 'b', 'c', 'd', 'e'];
var groups = [1, 2, 2]; // Intended size of each sub array

var result = segregate(groups, items);

// result[0] = ['a']
// result[1] = ['b', 'c']
// result[2] = ['d', 'e']
```


##### segregateBy(function, itemArray)
Similar to segregate, but groups items based on an evaluation of the conditional function. Each item of the array is passed to the function for evaluation. Returns a hash. E.g.

```js
var items = [
  {name: 'a', val: 1},
  {name: 'b', val: 2},
  {name: 'c', val: 3},
  {name: 'd', val: 4}
];

// Checks if a function is even or odd
function condition(item) { return item.val % 2 === 0 ? 'even' : 'odd'; };
var result = segregateBy(condition, items);

// result
// {
//    even: [{name: 'b', val: 2}, {name: 'd', val: 4}],
//    odd: [{name: 'a', val: 1}, {name: 'c', val: 3}]
// }
```

---

### URL Utilities

##### getQueryString(url)
Returns the query string of a URL

```js
var url = 'https://www.youtube.com/results?search_query=the+dark+knight';
getQueryString(url);
// search_query=the+dark+knight
```

##### getQueryParams(url, [key])
Given a url, and a key, returns the values of the key if it is present as a query parameter. If no key is provided, it returns a hash of all the query parameters.
Single values are returned as strings
Multiple values are returned as arrays

This function handles the basic use case for processing the query params. If you need something more advanced, look at [qs](https://www.npmjs.com/package/qs).

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

##### createUrl(urlPattern, [options], [config])
Constructs a url from a pattern. Optionally pass `params` and `query` in the options to be processed for generating the URL.

- options.query: An object that will be converted to queryString
- options.params: An object whose keys will be looked up in the ur pattern and replaced by its values.
- config.query: Configuration for options.query processing. It uses the [stringify function in the query-string](https://github.com/sindresorhus/query-string#stringifyobject-options). Useful when you want to parse different array formats etc.
- config.params: Configuration for options.params processing. It uses the [compile function from path-to-regexp](https://github.com/pillarjs/path-to-regexp#compile-reverse-path-to-regexp)
- config.encode: A boolean that if set to `false` will disable encoding for both, `query` and `params`.

```js
var params = {id: 'r$', team_id: 2};
var query = {page: 1, sort: 'name'};
var urlPattern = 'https://api.com/users/:id/teams/:team_id';

createUrl(urlPattern, {params, query});
// Output => 'https://api.com/users/r%24/teams/2?page=1&sort=name'

createUrl(urlPattern, {params, query}, {encode: false});
// Output => 'https://api.com/users/r$/teams/2?page=1&sort=name'
```

##### createRouter(routes)
Creates a `router` object from a hash of named routes i.e. your sitemap. Named routes let you access the url patterns of your application all throughout your code by simply using a name and offload the actual url construction with parameters and query strings to the `router.get` method.

**router.get(pathName, [options], [config])**
- pathName: The name of the route you want to retrieve from the sitemap.
- options: A hash of of the structure {params, query}. It uses `createUrl` as documented above to generate the final URL.
- config: The optional configuration that will be passed to `createUrl` for transforming options.query and options.params. See `createUrl` for more details.

```js
const router = createRouter({
  'products': '/products',
  'product': '/products/:p'
  'product_items': '/products/:p/items'
});

router.get('product_items')
//=> /products/:p/items

router.get('products', {query: {page: 1, sort: 'name'}});
//=> '/products?page=1&sort=name'

router.get('product_items', {query: {sort: 'name'}, params: p: 'boat'});
//=> '/products/boat/items&sort=name'
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

##### getRangeWindow(index, maxIndex, size)
Given `index`, return an array of maximum length `size`, such that
- `index` is present in the array.
- items to the right of the `index` are larger than index.
- items on the left of the `index` are smaller than index.

This is useful for creating buttons that represent page numbers in a pagination toolbar.

```js
getRangeWindow(0, 10, 4) // [0, 1, 2, 3]
getRangeWindow(0, 2, 4) // [0, 1, 2]
getRangeWindow(2, 3, 4) // [0, 1, 2, 3]
getRangeWindow(3, 3, 2) // [2, 3]
```

##### capitalizeFirstChar(string)
Capitalize the first character of a string. Keeps the rest of the string the same.

```js
capitalizeFirstChar('exampLestRing');
// ExampLestRing
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

##### slugify(text)
Generates a hyphenated (url safe) form of a string

slugify('my slug string');
// my-slug-string

---

##### reloadPage([boolean=false])
Reloads the page. This is just a wrapper around window.location.reload so it will only work on the client. A boolean argument of true forces it to reload from the server - and you thereby lose the scroll positioning. [Read more at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

```js
reloadPage(); // Attempts to reload page from the cache

reloadPage(true); // Attempts to reload page from the server
```
---

Some additional notes and legacy functions are documented in [the wiki](https://github.com/ryansukale/batarang/wiki)

##### License

MIT
