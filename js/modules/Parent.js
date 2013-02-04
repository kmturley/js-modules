/*
    Parent
    by kmturley
*/

define('Parent', {
    extend: 'Events',
    init: function() {
        this.items = {item: 'parent data'};
    },
    parentFunction: function() {
        this.dispatchEvent('complete', this.items);
    }
});