const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')).window;
global.document = document;

let dui = require("dui")(window);
dui.log("test")
