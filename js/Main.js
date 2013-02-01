/*
    Main define module function
    by kmturley
*/

function define(name, module, unique) {
    if (unique == true) {
        if (!window[name]) { window[name] = module; }
    }
    else {
        if (!window.modules) { window.modules = {}; }
        modules[name] = module;
        if (module.extend) {
            module.superclass = modules[module.extend];
            module = Utils.extend(Utils.clone(module.superclass), module);
        }
        function Module(id, options) {
            this.el = Utils.getEl(id);
            if (!this.options) { this.options = {}; }
            for (var item in options) {
                this.options[item] = options[item];
            }
            this.init();
        }
        Module.prototype = module;
        if (!window[name]) { window[name] = Module; }
    }
}
