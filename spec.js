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

		root.innerHTML = '<div><div><div></div></div></div>';

		walker(root, function(node, next){
			index++;
			next();
		});

		expect(index).toBe(4);
	});
});
