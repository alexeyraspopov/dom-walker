/* jshint browser:true */
'use strict';

function createTreeWalker(root, acceptNode, whatToShow){
	acceptNode = acceptNode || function(){ return NodeFilter.FILTER_ACCEPT; };
	whatToShow = whatToShow || NodeFilter.SHOW_ELEMENT;

	return document.createTreeWalker(root, whatToShow, { acceptNode: acceptNode }, false);
}

module.exports = function(root, process, options){
	var walker = createTreeWalker(root, options.acceptNode, options.whatToShow),
		node = walker.currentNode;

	function next(node){
		process(node, iterator);
	}

	function iterator(direction){
		switch(direction){
			case 'sibling':
				return nextSibling();
			case 'node':
				/* falls through */
			default:
				return nextNode();
		}
	}

	function nextNode(){
		next(walker.nextNode());
	}

	function nextSibling(){
		next(walker.nextSibling());
	}

	next(node);
};
