/*
    Events
    by kmturley
*/

define('Events', {
    events: {},
    addEvent: function(name, callback) {
        //console.log('addEvent', name, callback);
        if (!this.events[name]) { this.events[name] = []; }
        this.events[name].push(callback);
    },
    removeEvent: function(name, callback) {
        //console.log('removeEvent', name, callback);
        if (this.events[name]) {
            if (callback) {
                for (var i=0; i<this.events[name].length; ++i) {
                    if (this.events[name][i] === callback) { this.events[name].splice(i, 1); return true; }
                }
            }
            else { delete this.events[name]; }
        }
    },
    dispatchEvent: function(name, data) {
        //console.log('dispatchEvent', name, data, this.events[name]);
        if (this.events[name]) {
            for (var i=0; i<this.events[name].length; ++i) {
                this.events[name][i]({ data: data, target: this, type: name});
            }
        }
    }
});