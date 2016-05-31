define([], function () {
  return function (args) {
    var args = args || {};
    var links = args.links || [];

    var navigationElement = document.createElement("navigation");
    navigationElement.classList.add("navigation");

    var linkCollectionElement = document.createElement("ol");
    linkCollectionElement.classList.add("linkCollection");
    links.forEach(function (link) {
      var linkElement = document.createElement("li");
      linkElement.classList.add("link");

      var titleElement = document.createElement("a");
      titleElement.classList.add("title");
      titleElement.textContent = link.title;

      if (link.onNavigate instanceof Function) {
        titleElement.onclick = link.onNavigate.bind(this, link);
      } else {
        titleElement.attributes["href"] = link.url;
      }
      linkElement.appendChild(titleElement);

      linkCollectionElement.appendChild(linkElement);
    });
    navigationElement.appendChild(linkCollectionElement);

    return navigationElement;
  };
});
