/* jshint browser:true */
'use strict';

function createTreeWalker(root, acceptNode, whatToShow){
	acceptNode = acceptNode || function(){ return NodeFilter.FILTER_ACCEPT; };
	whatToShow = whatToShow || NodeFilter.SHOW_ELEMENT;

	return document.createTreeWalker(root, whatToShow, { acceptNode: acceptNode }, false);
}

function createIterator(walker, next){
	return function(direction){
		switch(direction){
			case 'sibling':
				return next(walker.nextSibling());
			case 'node':
				/* falls through */
			default:
				return next(walker.nextNode());
		}
	};
}

module.exports = function(root, process, options){
	var walker, iterator;

	options = options || {};
	walker = createTreeWalker(root, options.acceptNode, options.whatToShow);
	iterator = createIterator(walker, next);

	function next(node){
		return node && process(node, iterator);
	}

	next(walker.currentNode);
};
