define(["./index.js"], function (NavigationComponent) {
  describe("Navigation Component", function () {

    it("is a navigation element", function () {
      expect(NavigationComponent().tagName).toBe("NAVIGATION");
    });

    it("has the navigation class", function () {
      expect(NavigationComponent().classList.contains("navigation")).toBe(true);
    });
  });
});
