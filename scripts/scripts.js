document.getElementById("scrollButton").addEventListener("click", function () {
  // Get the target element
  var targetElement = document.getElementById("targetElement");

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});
