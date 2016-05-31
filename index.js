define([], function () {
  return function () {
    var navigationElement = document.createElement("navigation");
    navigationElement.classList.add("navigation");
    return navigationElement;
  };
});
