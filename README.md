# Dominion.js

Dominion is a light weight library which embraces and extends the DOM.

Here's what it does:

* Adds the global methods `find` and `all` which are shortcuts for
  `document.querySelector` and `document.querySelectorAll` respectively.

* Extends the Element prototype with useful methods for manipulation and
  querying.

* Polyfills the `matches` methods on Element for browsers which don't
  support it.

* Extends the NodeList prototype with all the regular Array methods.

* Adds a global method called `on` for event delegation.

The general idea is: the DOM is not *that* bad, and completely shimming it with
a different API like jQuery does is annoying and superfluous. Extending native
prototypes really isn't as evil as some make it out to be.

Supports IE9 and all modern browsers.

License: MIT
