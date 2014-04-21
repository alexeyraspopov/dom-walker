# dom-walker

DOM Walker based on [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)

## Install

```bash
$ component install alexeyraspopov/dom-walker
```

```bash
$ bower install dom-walker
```

## API

	walk(root, process, options);

 * `root` - start element
 * `process` - processing function
   * `node` - current node
   * `next` - iterator function (go to next node)
     * `direction` (optional) - which node should be next (`'node'` by default).
       * `'node'` calls `treeWalker.nextNode()`
       * `'sibling'` calls `treeWalker.nextSibling()`
 * `options` (optional)
   * `acceptNode` - [TreeWalker filter function](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker.filter). Accept all elements by default
   * `whatToShow` - [TreeWalker option](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker.whatToShow). `NodeFilter.SHOW_ELEMENT` by default

## Usage

```javascript
var walk = require('dom-walker');

var root = document.getElementById('viewport');

walk(root, function(node, next){
	console.log(node);
	next();
});
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
