/* jshint browser:true */
'use strict';

function createTreeWalker(root, acceptNode, whatToShow){
	acceptNode = acceptNode || function(){ return NodeFilter.FILTER_ACCEPT; };
	whatToShow = whatToShow || NodeFilter.SHOW_ELEMENT;

	return document.createTreeWalker(root, whatToShow, { acceptNode: acceptNode }, false);
}

function createIterator(walker, next){
	return function iterator(direction){
		switch(direction){
			case 'sibling':
				return next(walker.nextSibling(), iterator);
			case 'node':
				/* falls through */
			default:
				return next(walker.nextNode(), iterator);
		}
	};
}

module.exports = function(root, process, options){
	var walker;

	options = options || {};
	walker = createTreeWalker(root, options.acceptNode, options.whatToShow);

	function next(node, iterator){
		return node && process(node, iterator);
	}

	next(walker.currentNode, createIterator(walker, next));
};
