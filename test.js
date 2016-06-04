var JsDom = require("jsdom");
var Jasmine = require("jasmine");
var RequireJs = require("requirejs");

global.define = RequireJs.define;
global.window = JsDom.jsdom().defaultView;
global.document = window.document;

RequireJs.config({
  paths: {"node_modules": "./node_modules"},
  nodeRequire: require
});

var jasmine = new Jasmine();
RequireJs(["./spec.js"], function () {
  jasmine.execute();
});
