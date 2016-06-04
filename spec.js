define(["./index.js"], function (NavigationComponent) {
  describe("Navigation Component", function () {

    it("is a navigation element", function () {
      expect(NavigationComponent().tagName).toBe("NAVIGATION");
    });

    it("has the navigation class", function () {
      expect(NavigationComponent().classList.contains("navigation")).toBe(true);
    });

    it("creates an array of links", function () {
      var links = [
        {
          id: "foo",
          title: "Foo",
          url: "http://www.example.com/foo"
        },
        {
          id: "bar",
          title: "Bar",
          url: "http://www.example.com/bar"
        },
        {
          id: "baz",
          title: "Baz",
          url: "http://www.example.com/baz"
        }
      ];

      var navigationElement = NavigationComponent({links: links});

      links.forEach(function (link, index) {
        var linkElement = navigationElement
          .querySelector(".link.array .value:nth-child(0n+" +
          (index + 1) +
          ") .link");

        expect(linkElement.dataset.id).toBe(link.id);
        expect(linkElement.textContent).toBe(link.title);
        expect(linkElement.href).toBe(link.url);
      });
    });
  });
});
