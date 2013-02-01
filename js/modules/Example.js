/*
    Example
    by kmturley
*/

define('Example', {
    extend: 'Events',
	init: function() {
        this.items = {item: 'testdata'};
	},
    load: function() {
        this.dispatchEvent('complete', this.items);
	}
});