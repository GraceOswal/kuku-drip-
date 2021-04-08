(function(global, factory) {

    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    "use strict";

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call(Object);

    var support = {};

    var isFunction = function isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };


    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };




    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };

    function DOMEval(code, node, doc) {
        doc = doc || document;

        var i, val,
            script = doc.createElement("script");

        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {
                val = node[i] || node.getAttribute && node.getAttribute(i);
                if (val) {
                    script.setAttribute(i, val);
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }


    function toType(obj) {
        if (obj == null) {
            return obj + "";
        }

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }
    var
        version = "3.4.1",

        // Define a local copy of jQuery
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        },

        // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function() {
            return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {

            // Return all the elements in a clean array
            if (num == null) {
                return slice.call(this);
            }

            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },

        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },

        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },

        first: function() {
            return this.eq(0);
        },

        last: function() {
            return this.eq(-1);
        },

        eq: function(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function() {
            return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    copy = options[name];
                }
            }
        }
    }
})