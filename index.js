const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')).window;
global.document = document;

let dui = require("dui")(window);
let test = dui.test;

test("toNumber", (assert) => {
    assert.Equals(dui.toNumber("10"), 10);
    assert.Equals(dui.toNumber(33), 33);
    assert.Equals(dui.toNumber("10.28"), 10.28);
    assert.Equals(dui.toNumber("10.35xyz"), 10.35);
    assert.Equals(dui.toNumber("abcdxyz"), 0);
    assert.Equals(dui.toNumber("aabcdef10.35xyz"), 10.35);
});

test("swap", (assert) => {
    let obj = {m1: 10, m2: 20}
    dui.swap(obj, "m1", "m2");
    assert.Equals(obj.m1, 20);
    assert.Equals(obj.m2, 10);

    obj = {m1: "abc", m2: 54}
    dui.swap(obj, "m1", "m2")
    assert.Equals(obj.m1, 54);
    assert.Equals(obj.m2, "abc");
});

test("equals", (assert) => {
    assert.True(dui.equals({a: 10, b: 20}, {a: "10", b: "20"}, ['a', 'b']));
    assert.False(dui.equals({a: 10, b: 20}, {a: "10", b: "10"}, ['a', 'b']));
    assert.False(dui.equals({a: 10, b: 20}, null, ['a', 'b']));
    assert.False(dui.equals({a: "10", b: "10"}, null, ['a', 'b']));
    assert.True(dui.equals(['a', 'b'], ['a', 'b']));
    assert.True(dui.equals(100, 100));
    assert.True(dui.equals("abc", "abc"));
    assert.True(dui.equals(13, "13"));
    assert.False(dui.equals(['a', 'b'], ['a', 'b', 'c']));
    assert.True(dui.equals());
    assert.True(dui.equals({First: 1, Second: 2}, {First: '1', Second: '2'}));
    assert.False(dui.equals({First: 1, Second: 2}, {First: '1', second: '2'}));
    assert.False(dui.equals({First: 1, Second: 2}, {First: '1', Second: '3'}));
    assert.True(dui.equals({First: 1, Second: [2,3]}, {First: '1', Second: ['2', 3]}));
    assert.True(dui.equals({First: {a: 1, b: 102}, Second: 2}, {First: {a: '1', b: '102'}, Second: '2'}));
});

test("toNumberObject", (assert) => {
    let obj = dui.toNumberObject(['a', 'b', 'c'], 10, 22, 31);
    assert.Equals(obj, {a: 10, b: 22, c: 31})
    obj = dui.toNumberObject(['a', 'b', 'c'], [11, 122, 231]);
    assert.Equals(obj, {a: 11, b: 122, c: 231})
    obj = dui.toNumberObject(['a', 'b', 'c'], {a: 11, b: 122, c: 21, d: "something"});
    assert.Equals(obj, {a: 11, b: 122, c: 21})
    obj = dui.toNumberObject(['a', 'b', 'c'], {x: 11, b: 122, c: 21, d: "something"});
    assert.NotEquals(obj, {a: 11, b: 122, c: 21})
});

test("equalsTo", (assert) => {
    assert.True(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, 19, 201));
    assert.True(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, [19, 201]));
    assert.True(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, {a: 19, b: 201}));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, 19, 202));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, [19, 202]));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, {a: 19, b: 202}));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, {a: 19}));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}, {a: 19, c: 202}));
    assert.False(dui.equalsTo(['a', 'b'], {a: 19, b: 201}));
});

test("Point", assert => {
    let p1 = new dui.Point(31, 28);
    let p2 = dui.Point.New({y: "28", x: "31"});
    assert.True(p1.equals(p2));
    assert.Equals(p1, p2);

    p1.offset(10, 10);
    assert.False(p1.equals(p2));
    assert.NotEquals(p1, p2);
    assert.True(p1.equals(p2.offset(10, 10)));
    assert.Equals(p1, p2);

    p1.offset(dui.Point.New(13, 17));
    assert.False(p1.equals(p2));
    assert.NotEquals(p1, p2);
    assert.True(p1.equals(p2.offset(new dui.Point(13, 17))));
    assert.Equals(p1, p2);
});

test("Size", assert => {
    let s1 = new dui.Size(88, 67);
    let s2 = new dui.Size(88, 67);
    assert.True(s1.equals(s2));
    assert.Equals(s1, s2);

    s1.add(12,33);
    assert.False(s1.equals(s2));
    assert.NotEquals(s1, s2);
    assert.True(s1.equals(dui.Size.New(new dui.Size(100, 100))));
});

test("Color", assert => {
    let c = new dui.Color(200, 12, 33);
    c.r = 322;
    assert.Equals(c.r, 255);

    c = new dui.Color("rgb(255,255,255)")
    assert.True(c.equals(new dui.Color(255,255,255)));
})

console.log("All tests finished successfully !!!!!!")

