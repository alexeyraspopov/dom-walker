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

	process(node);
};
