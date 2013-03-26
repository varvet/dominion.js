ready(function() {
  console.log(all("li").map(function(element) { return element.text }))
  console.log(all("li").map(function(element) { return element.html }))

  element = find("ul").find("li")
  element.set("class", "active")
  element.on("click", function() { this.set("class", "clicked") })
});

on("click", "h1", function(event) {
  console.log("clicked h1", this, event);
});

on("click", "ul", function(event) {
  console.log("clicked ul", this, event);
});
