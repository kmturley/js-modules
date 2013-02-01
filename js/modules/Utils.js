/*
    Utils
    by kmturley
*/

define('Utils', {
	elements: {},
	getEl: function(id) {
        if (typeof id == 'string') {
            if (this.elements[id]) {
                return this.elements[id];
            }
            else {
                this.elements[id] = document.getElementById(id);
                return this.elements[id];
            }
        }
        else {
            return id;
        }
	},
	clone: function(o) {
		var a = {};
		for (var i in o) {
			if (o.hasOwnProperty(i)) { a[i] = o[i]; }
		}
		return a;
	},
	extend: function(o, o2) {
		for (var p in o2) {
			try {
				if (o2[p].constructor == Object) { o[p] = this.extend(o[p], o2[p]); }
				else { o[p] = o2[p]; }
			}
			catch (e) { o[p] = o2[p]; }
		}
		return o;
	}
}, true);