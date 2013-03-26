(function(root, document) {
  "use strict"

  var aliases;

  // Set up root functions
  root.ready = document.addEventListener.bind(document, "DOMContentLoaded");
  root.find = document.querySelector.bind(document);
  root.all = document.querySelectorAll.bind(document);
  root.on = function(type, selector, listener, useCapture) {
    var find = function(element) {
      if(element.matches(selector)) {
        return element;
      } else if (element.parentNode.matches) {
        return find(element.parentNode)
      }
    }
    document.addEventListener(type, function(event) {
      var element = find(event.srcElement);
      if(element) { listener.apply(element, arguments) }
    }, useCapture)
  }

  Object.getOwnPropertyNames(Array.prototype).forEach(function(prop) {
    if(typeof(Array.prototype[prop] === "function")) {
      Object.defineProperty(NodeList.prototype, prop, Object.getOwnPropertyDescriptor(Array.prototype, prop));
    }
  });

  aliases = {
    text: "textContent",
    html: "innerHTML",
    all: "querySelectorAll",
    find: "querySelector",
    set: "setAttribute",
    get: "getAttribute",
    unset: "removeAttribute",
    on: "addEventListener",
    off: "removeEventListener"
  }

  Object.getOwnPropertyNames(aliases).forEach(function(alias) {
    Object.defineProperty(Element.prototype, alias, {
      get: function() { return this[aliases[alias]] },
      set: function(val) { this[aliases[alias]] = val },
      configurable: true
    });
  });


  if(!Element.prototype.matches) {
    Object.defineProperty(Element.prototype, "matches", {
      value: ["moz", "o", "ms", "webkit"].map(function(s) { return Element.prototype[s + "MatchesSelector"] }).sort()[0],
      configurable: true,
      writable: true
    });
  };
})(this, document);
