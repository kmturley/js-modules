/*
    Main define module function
    by kmturley
*/

function define(name, module, unique) {
    var proto = module;
    if (unique === true) {
        if (!window[name]) { window[name] = module; }
    }
    else {
        if (!window.modules) { window.modules = {}; }
        if (module.extend) {
            proto = Utils.extend(Utils.clone(modules[module.extend]), module);
            proto.superclass = modules[module.extend];
        }
        modules[name] = proto;
        function Module(id, options) {
            this.el = Utils.getEl(id);
            this.options = Utils.extend(this.options, options);
            this.init();
        }
        Module.prototype = proto;
        if (!window[name]) { window[name] = Module; }
    }
}
