/* global describe, it, beforeEach, expect, document */
'use strict';

var walker = require('./index');

describe('walker', function(){
	var root;

	beforeEach(function(){
		root = document.createElement('div');
	});

	it('should just walk', function(){
		var index = 0;

		root.innerHTML = '<div> <div> <div></div> </div> </div>';

		walker(root, function(node, next){
			index++;
			next();
		});

		expect(index).toBe(4);
	});

	it('should walk to sibling', function(){
		var index = 0;

		root.innerHTML = '<div id="1"> <div id="2"> <div id="3"></div> <div id="5"></div> </div> <div id="6"></div> </div>';

		walker(root, function(node, next){
			index++;
			next(node.id === '2' ? 'sibling' : 'node');
		});

		expect(index).toBe(4);
	});
});
