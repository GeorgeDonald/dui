const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')).window;
global.document = document;

let dui = require("dui")(window);

class Assert{
    static NotNull(t){
        if(t == null || t == undefined) throw new Error("Should not be null or undefined");
    }
    static True(t){
        if(!t) throw new Error("Should be true");
    }
    static NotTrue(t){
        if(t) throw new Error("Should not be true");
    }
    static Equals(value, expected){
        if(value != expected) throw new Error("Should be equal");
    }
}

Assert.Equals(dui.toNumber("10"), 10);
Assert.Equals(dui.toNumber(33), 33);
Assert.Equals(dui.toNumber("10.28"), 10.28);
Assert.Equals(dui.toNumber("10.35xyz"), 10.35);
Assert.Equals(dui.toNumber("abcdxyz"), 0);
Assert.Equals(dui.toNumber("aabcdef10.35xyz"), 10.35);

console.log("Test finished successfully.")

