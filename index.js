const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.document = window;

let dui = require("dui")(window);
let test = dui.test;
let document = window.document;

// {
//     let units = dui.units;
//     let obj = {};
//     Object.keys(units).forEach(u1 => {
//         Object.keys(units).forEach(u2 => {
//             obj[u1+" "+u2] = "function(v1, v2) {return v1 + v2}";
//         });
//     });
//     console.log(JSON.stringify(obj, null, "    "));
// }

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

test("toPixels", assert => {
    let tp = dui.toPixels;
    // assert.Equals(tp(0, "mm"), 0);
    // assert.Equals(tp(1, "in"), 96);
});

test("metricAdd", assert => {
    let ma = dui.metricAdd;
    let r = ma("10px", "20px");
    assert.Equals(r.desc, "30px");
});

test("metric", assert => {
    let metric = dui.metric;
    let t = metric("10px");
    assert.Equals(t.value, 10);
    assert.Equals(t.unit, 'px');

    t = metric("10", 'px');
    assert.Equals(t.value, 10);
    assert.Equals(t.unit, 'px');

    t = metric(10);
    assert.Equals(t.value, 10);
    assert.Equals(t.unit, 'px');

    t = metric({value: "10", unit: "mm"});
    assert.Equals(t.value, 10);
    assert.Equals(t.unit, 'mm');

    t = metric({value: "13", unit: "mm"});
    assert.Equals(t.value, 13);
    assert.Equals(t.unit, 'mm');

    t = metric([17, 'pt']);
    assert.Equals(t.value, 17);
    assert.Equals(t.unit, 'pt');


    t = metric("a10b30askoie");
    assert.Equals(t.value, 10);
    assert.Equals(t.unit, 'px');
});

test("Qunant", assert => {
    let Quant = dui.Quant;
    let q = Quant.New();
    assert.True(q.equals(new Quant()));

    q = Quant.New(new Quant("19mm"));
    assert.Equals(q.value, 19);
    assert.Equals(q.unit, 'mm');

    q = Quant.New(18, "pc");
    assert.Equals(q.value, 18);
    assert.Equals(q.unit, 'pc');

    q = dui.metric(Quant.New("28", "%"));
    assert.Equals(q.value, 28);
    assert.Equals(q.unit, '%');

    q = Quant.New("alsdkjf;aslf", 0);
    assert.Equals(q.value, 0);
    assert.Equals(q.unit, 'px');

    q = Quant.New("10px");
    q.add("10px");
    assert.Equals(q.desc, "20px");

    q.add("-2px")
    assert.Equals(q.desc, "18px");

    assert.True(q.equals(new Quant("18px")));
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

test("Quad", assert => {
    let qd = dui.Quad;
    let q1 = qd.New("13px", "21px", "18px", "90px");
    let q2 = new qd(q1);
    assert.True(q1.equals(q2));

    q1.add(q2);
    assert.True(q1.equals(new qd('26px', '42px', 36, 180)));
});

test("Color", assert => {
    // rgb
    let c = new dui.Color(200, 12, 33);
    c.r = 322;
    assert.Equals(c.r, 255);

    c = new dui.Color()
    assert.True(c.equals(new dui.Color(0,0,0)));

    // rgb string
    c = new dui.Color("rgb(255,255,255)")
    assert.True(c.equals(new dui.Color(255,255,255)));

    // name
    Object.keys(dui.namedColors).forEach(cn => {
        assert.True(dui.Color.New(cn).equals(new dui.Color(dui.namedColors[cn])));
    });

    // hex string
    c = new dui.Color("#0f")
    assert.True(c.equals(new dui.Color(15,15,15)));

    c = new dui.Color("#a")
    assert.True(c.equals(new dui.Color(10,10,10)));

    c = new dui.Color("#fe3")
    assert.True(c.equals(new dui.Color(0xff,0xee,0x33)));

    c = new dui.Color("#122232")
    assert.True(c.equals(new dui.Color(18,34,50)));

    // number string
    c = new dui.Color("32", "128", "99")
    assert.True(c.equals(new dui.Color(32,128,99)));
    assert.Equals(c.hex, "#208063");
    assert.Equals(c.rgb, "rgb(32, 128, 99)");
    assert.Equals(c.rgba, "rgb(32, 128, 99, 1)");
    assert.Equals(c.name, undefined);

    Object.keys(dui.namedColors).forEach(cn => {
        let name = dui.Color.New(cn).name;
        assert.NotNull(name);
        assert.True(dui.Color.New(name).equals(dui.Color.New(cn)));
    });
});

test("Lateral", assert => {
    let l = dui.Lateral.New();
    assert.Equals(l.style, "solid");
    assert.Equals(l.unit, "px");
    assert.Equals(l.width, 0);
    assert.Equals(l.color.name, "White");

    l = dui.Lateral.New(3, "double", "white");
    assert.Equals(l.style, "double");
    assert.Equals(l.unit, "px");
    assert.Equals(l.width, 3);
    assert.Equals(l.color.name, "White");

    l = dui.Lateral.New(l);
    assert.Equals(l.style, "double");
    assert.Equals(l.unit, "px");
    assert.Equals(l.width, 3);
    assert.Equals(l.color.name, "White");

    l = dui.Lateral.New("3px", "dotted", "white");
    assert.Equals(l.style, "dotted");
    assert.Equals(l.unit, "px");
    assert.Equals(l.width, 3);
    assert.Equals(l.color.name, "White");

    l = dui.Lateral.New("0.3in", "dashed", "aqua");
    assert.Equals(l.style, "dashed");
    assert.Equals(l.unit, "in");
    assert.Equals(l.width, 0.3);
    assert.Equals(l.color.name, "Aqua");

    l = dui.Lateral.New("aqua", "dashed", "0.3in");
    assert.Equals(l.style, "dashed");
    assert.Equals(l.unit, "in");
    assert.Equals(l.width, 0.3);
    assert.Equals(l.color.name, "Aqua");

    l = dui.Lateral.New("0.13in");
    assert.Equals(l.style, "solid");
    assert.Equals(l.unit, "in");
    assert.Equals(l.width, 0.13);
    assert.Equals(l.color.name, "White");

    l.width = 2;
    assert.Equals(l.width, 2);

    l.style = dui.lineStyles.none;
    assert.Equals(l.style, dui.lineStyles.none);

    l.style = "notexists";
    assert.Equals(l.style, dui.lineStyles.none);

    l.style = "groove";
    assert.Equals(l.style, dui.lineStyles.groove);

    l.color = "oldlace";
    assert.Equals(l.color.name, "OldLace");

    l.color = "#BA55D3";
    assert.Equals(l.color.name.toLowerCase(), "mediumorchid");

    l.unit = "mm";
    assert.Equals(l.unit, dui.units.mm);

    assert.True(l.equals("2mm", "groove", "#BA55D3"));
});

test("Page", assert => {
    let Page = dui.Page;
    let Wnd = dui.Wnd;

    let page = Page.New();
    let mainWnd = page.mainWnd;
    let child1 = Wnd.CreateNew(mainWnd);
    assert.NotNull(document.getElementById(child1.id));
    assert.True(child1.element);
    assert.Equals(child1.element.tagName, "DIV");
    child1.width = "80px";
    assert.Equals(child1.width, '80px');
    child1.height = "120px";
    assert.Equals(child1.height, "120px");
    child1.bgdClr = "yellow";
    assert.NotNull(child1.bgdClr.name);
    assert.Equals(child1.bgdClr.name.toLowerCase(), "yellow");

    child1.top = '10px';
    assert.Equals(child1.top, "10px");
    child1.left = '10px';
    assert.Equals(child1.left, "10px");

    child1.Destroy();
    assert.IsNull(document.getElementById(child1.id))
    assert.IsNull(child1.element);
});

console.log("✌️✌️✌️ All tests finished successfully !!!!!! ✌️✌️✌️")

