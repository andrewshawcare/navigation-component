define(["./index.js"], function (NavigationComponent) {
  describe("Navigation Component", function () {

    it("is a navigation element", function () {
      expect(NavigationComponent().tagName).toBe("NAVIGATION");
    });

    it("has the navigation class", function () {
      expect(NavigationComponent().classList.contains("navigation")).toBe(true);
    });

    it("Renders an ordered collection of links", function () {
      var links = [
        {title: "Foo", url: "http://www.example.com/foo"},
        {title: "Bar", url: "http://www.example.com/bar"},
        {title: "Baz", url: "http://www.example.com/baz"}
      ];
      var navigationElement = NavigationComponent({
        links: links
      });

      links.forEach(function (link, index) {
        var titleElement = navigationElement.querySelector(
          ".linkCollection .link:nth-child(0n+" +
          (index + 1) +
          ") .title"
        );

        expect(titleElement.textContent).toBe(link.title);
        expect(titleElement.attributes["href"]).toBe(link.url);
      });
    });
  });
});
