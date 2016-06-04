define(["node_modules/array-component/index"], function (ArrayComponent) {
  return function (args) {
    var args = args || {};
    var links = args.links || [];

    var navigationElement = document.createElement("navigation");
    navigationElement.classList.add("navigation");

    var linkCollectionElement = ArrayComponent({
      array: links,
      ValueComponent: function (args) {
        var args = args || {};
        var link = args.value || {};
        var linkElement = document.createElement("a");
        linkElement.classList.add("link");
        linkElement.dataset.id = link.id;
        linkElement.textContent = link.title;
        linkElement.href = link.url;
        return linkElement;
      }
    });
    linkCollectionElement.classList.add("link");
    navigationElement.appendChild(linkCollectionElement);

    return navigationElement;
  };
});
