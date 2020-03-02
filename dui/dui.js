// dui create web page by javascript purely version 0.0.1
// Copyright George S. Dong
// Date 03-02-2020

(function (global, factory) {
    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("dui requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    "use strict";

    var document = window.document;
    var version = "0.0.1";
    var help = {};

    ////////////////////////////////////////////////////////////////////
    // counstants
    const namedColors = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgrey: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
    }
    const namedLineStyles = [
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'none',
        'hidden',
    ];
    const units = [
        'cm', 'mm', 'in', 'px', 'pt', 'pc',
        'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', '%'
    ]

    ////////////////////////////////////////////////////////////////////
    // functions

    // log
    // localized version of console.log for simplification
    function log(msg) {
        var e = new Error();
        if (!e.stack) {
            try {
                throw e;
            } catch (e) {
            }
        }
        if (e.stack) {
            var stack = e.stack.toString().split(/\r\n|\n/);
            if (stack.length > 2) {
                msg += "\n" + stack.splice(2).join("\n");
            }
        }
        console.log(msg);
    }

    help.toNumber = `
    toNumber(x: string)
        convert string to float
        x: string that include digits
    `
    function toNumber(x) {
        if (typeof x == 'string') {
            var rer = /(\d+\.*\d*)/g.exec(x);
            if (!rer) return 0;
            x = parseFloat(rer[1]);
        }
        if (typeof x != 'number') x = 0;
        return x;
    }

    help.swap = `
    swap(object, member1: string, member2: string)
        swap two member variables of a object
        object: object width some members
        member1: name of first member variable to swap
        member2: name of second member variable to swap
    `
    function swap(obj, m1, m2) {
        var t = obj[m1];
        obj[m1] = obj[m2];
        obj[m2] = t;
    }

    help.equals = `
    equals(object1, object2, member_name_array)
        compare members of object1 and object2 whose names are in member_name_array
        if member_name_array is undefined, then compares all members
    `
    function equals(obj1, obj2, names) {
        if (!obj1 || !obj2 || !(obj1 instanceof Object) || !(obj2 instanceof Object)) return obj1 == obj2;
        if(!names || (!(typeof names == "number" || typeof names == "string") && !(names instanceof Array))){
            var names1 = Object.keys(obj1);
            var names2 = Object.keys(obj2);
            if(names1.length != names2.length) return false;
            if(names1.length == 0 && names2.length == 0) return obj1 == obj2;
            if(!names1.every((v, i) => equals(v, names2[i]))) return false;
            names = names1;
        } else if(typeof names == "number" || typeof names == "string"){
            names = [names];
        }
        return names.every(v => equals(obj1[v], obj2[v]));
    }

    help.toNumberObject = `
    toNumberObject(names: array, ...args)
        convert a sequence of stings or numbers to a object width keys named in names
        example: 
            toNumberObject(["a", "b"], 10, 11) returns {a: 10, b: 11}
            toNumberObject(['a', 'b'], [10, 11]) returns {a: 10, b: 11}
            toNumberObject(['a', 'b'], {a: 10, b: 11, c: 12}) returns {a: 10, b: 11}
    `
    function toNumberObject(names, ...args) {
        var obj = {};
        if (args[0] instanceof Object) {
            var temp = args[0];
            if (!(args[0] instanceof Array)) {
                names.forEach((v, i) => {
                    args[i] = temp[v];
                });
            } else {
                names.forEach((v, i) => {
                    args[i] = temp[i];
                });
            }
        }

        names.forEach((v, i) => {
            obj[v] = toNumber(args[i]);
        });

        return obj;
    }

    help.equalsTo = `
    equalsTo
        compare members of obj1 whose names are in parameter names to a sequence of variables
        examples:
            equalsTo(['a', 'b'], {a: 10, b: 20}, 10, 20) return true
    `
    function equalsTo(names, obj1, ...args) {
        args.unshift(names);
        var t = toNumberObject.apply(null, args);
        return equals(obj1, t, names);
    }
    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////
    // basic classes

    help.Point = `
    class Point
        represents a (x, y) pair
        constructor(x: number or number string or Point or object like {x: 1, y: 2}, y: optional, number or number string)
        offset(x: number or Point, y: optional number)
            move Point to (Point.x + x, Point.y + y)
    `
    class Point {
        constructor(x, y) {
            var t = toNumberObject(["x", "y"], x, y);
            this.x = t.x;
            this.y = t.y;
        }
        offset(x, y) {
            var t = toNumberObject(["x", "y"], x, y);
            this.x += t.x;
            this.y += t.y;
            return this;
        }
        equals(x, y) {
            return equalsTo(['x', 'y'], this, x, y);
        }
        static New(x, y){
            return new Point(x, y);
        }
    }

    class Position extends Point { }

    help.Size = `
    class Size
        represents (width, height) pair
        constructor(width: number or number string or Point or object like {x: 1, y: 2}, height: optional number or number string)
        add(width: number or Size, y: optional number)
            add width and height to this.width and this.height saperately
        normalize:
            make sure width and height are positive. if not, change it to it's absolute value
    `
    class Size {
        constructor(width, height) {
            var t = toNumberObject(["width", "height"], width, height);
            this.width = t.width;
            this.height = t.height;
        }
        add(width, height) {
            var t = toNumberObject(["width", "height"], width, height);
            this.width += t.width;
            this.height += t.height;
            return this;
        }
        normalize() {
            if (this.width < 0) this.width = -this.width;
            if (this.height < 0) this.height = -this.height;
            return this;
        }
        equals(width, height) {
            return equalsTo(["width", "height"], this, width, height);
        }
        static New(width, height){
            return new Size(width, height);
        }
    }

    help.Quad = `
    class Quad
        represents (left, top, right, bottom)
        constructor(left: number or Rect, top: optional number, right, bottom)
    `
    class Quad{
        constructor(l, t, r, b) {
            var t1 = toNumberObject(["left", "top", "right", "bottom"], l, t, r, b);
            this.left = t1.left;
            this.top = t1.top;
            this.right = t1.right;
            this.bottom = t1.bottom;
            if (l.width != undefined || l.height != undefined) {
                var t2 = toNumberObject(["left", "top", "width", "height"], l, t, r, b);
                if (l.width != undefined) this.right = this.left + t2.width;
                if (l.height != undefined) this.bottom = this.top + t2.height;
            }
        }

        add(left, top, right, bottom) {
            var t = toNumberObject(["left", "top", "right", "bottom"], left, top, right, bottom);
            this.left += t.left;
            this.top += t.top;
            this.right += t.right;
            this.bottom += t.bottom;
            return this;
        }

        equals(left, top, right, bottom) {
            return equals(["left", "top", "right", "bottom"], this, new Rect(left, top, right, bottom));
        }

        static New(left, top, right, bottom){
            return new Quad(left, top, right, bottom);
        }
    }

    help.Rect = `
    class Rect
        represents a rect of two points: (left, top) and (right, bottom)
    `
    class Rect extends Quad {
        get width() {
            return this.right - this.left;
        }

        get height() {
            return this.bottom - this.top;
        }

        normalize() {
            if (this.left > this.right) {
                swap(this, "left", "right");
            }
            if (this.top > this.bottom) {
                swap(this, "top", "bottom");
            }
            return this;
        }

        offset(x, y) {
            var t = toNumberObject(["x", "y"], x, y);
            this.left += t.x;
            this.right += t.x;
            this.top += t.y;
            this.bottom += t.y;
            return this;
        }

        extend(width, height) {
            var t = toNumberObject(["width", "height"], width, height);
            if (this.left <= this.right) this.right += t.width;
            else this.left -= t.width;

            if (this.top <= this.bottom) this.bottom += t.height;
            else this.top -= t.height;
            return this;
        }

        static New(left, top, right, bottom){
            return new Rect(left, top, right, bottom);
        }
    }

    help.Color = `
    class Color
        represents a color: (red, green, blue, alpha)
    `
    class Color {
        static GetColorValue(c) {
            if (typeof c == "string") {
                var re = /^\s*#([0-9a-fA-F]{1,2})\s*$/g;
                var rlt = re.exec(c);
                if (rlt && rlt.length == 2) {
                    return parseInt(rlt[1], 16);
                } else c = parseInt(c);
            }

            if (typeof c == "number") return c > 255 ? 255 : c < 0 ? 0 : c;
            else return 0;
        }

        static New(red, green, blue, alpha = 1) {
            return new Color(red, green, blue, alpha);
        }

        constructor(red, green, blue, alpha = 1) {
            this._red = 0
            this._green = 0
            this._blue = 0
            this._alpha = 1
            if(red == undefined || red == null) return;

            if (typeof red == "string") {
                var re = /^\s*#{0,1}([0-9a-fA-F]{2,8})\s*$/g;
                var rlt = re.exec(red);
                if (rlt && rlt.length == 2) {
                    if (rlt[1].length == 2) rlt[1] = rlt[1] + rlt[1] + rlt[1];
                    else if (rlt[1].length == 3) rlt[1] = rlt[1] + rlt[1].split("").reverse().join("");
                    if (rlt[1].length <= 6) {
                        for (; rlt[1].length < 6;) rlt[1] = "0" + rlt[1];
                        for (; rlt[1].length < 8;) rlt[1] = "f" + rlt[1];
                    }
                    for (; rlt[1].length < 8;) rlt[1] = "0" + rlt[1];

                    this._alpha = parseInt(rlt[1].substring(0, 2), 16) / 255.0;
                    this._red = parseInt(rlt[1].substring(2, 4), 16);
                    this._green = parseInt(rlt[1].substring(4, 6), 16);
                    this._blue = parseInt(rlt[1].substring(6), 16);
                    return;
                } else {
                    var re = /^rgba*\((\d{1,3}\.*\d*),\s*(\d{1,3}\.*\d*),\s*(\d{1,3}\.*\d*),*\s*(\d*\.*\d*)\)$/g;
                    var rlt = re.exec(red);
                    if (rlt && rlt.length == 5) {
                        if(rlt[4] == "") rlt[4] = "1";
                        for (var i = 1; i < 5; i++) {
                            rlt[i] = parseFloat(rlt[i]);
                        }
                        this._red = rlt[1];
                        this._green = rlt[2];
                        this._blue = rlt[3];
                        this._alpha = rlt[4];
                        return;
                    } else {
                        var clr = Color.predefinedColors[red.toLowerCase()];
                        if (clr) {
                            this._red = clr[0];
                            this._green = clr[1];
                            this._blue = clr[2];
                            this._alpha = 1;
                            return;
                        }
                    }
                }
            }

            var t = toNumberObject(["red", "green", "blue", "alpha"], red, green, blue, alpha);

            this._red = t.red;
            this._green = t.green;
            this._blue = t.blue;
            this._alpha = t.alpha;
        }

        get red() {
            return this._red;
        }
        get r() {
            return this._red;
        }
        set red(r) {
            this._red = Color.GetColorValue(r);
        }
        set r(r) {
            this.red = r;
        }
        get green() {
            return this._green;
        }
        get g() {
            return this._green;
        }
        set green(g) {
            this._green = Color.GetColorValue(g);
        }
        set g(g) {
            this.green = g;
        }
        get blue() {
            return this._blue;
        }
        get b() {
            return this._blue;
        }
        set blue(b) {
            this._blue = Color.GetColorValue(b);
        }
        set b(b) {
            this.blue = b;
        }
        get alpha() {
            return this._alpha;
        }
        get a() {
            return this._alpha;
        }
        set alpha(a) {
            this._alpha = Color.GetColorValue(a > 1 ? 1 : a < 0 ? 0 : a);
        }
        set a(a) {
            this.alpha = a;
        }
        equals(...other) {
            return equalsTo(['red', 'green', 'blue', 'alpha'], this, Color.New.apply(null, other));
        }
    }

    class Lateral {
        constructor(width, style, color) {
            this._lineStyle = "solid"
            this._width = 0
            this._unit = "px"
            this._color = new Color(0, 0, 0, 1);
            if(width == null || width == undefined) return;

            if (typeof width == "string") {
                var ss = width.split(" ");
                ss = ss.filter(v => v != "");
                if (ss.length == 3) {
                    for (var s of ss) {
                        if (styles.includes(s)) style = s;
                        else if (Color.predefinedColors.includes(s)) color = s;
                        else if (/^#\d+[0-9A-Fa-f]*$/g.text(s)) color = s;
                        else if (/^\d+\.*\d*[a-zA-Z]*$/g.test(s)) width = s;
                        else if (/^\{.+\}$/) color = s;
                    }
                }
            }
            if (styles.includes(style)) this._lineStyle = style;
            var m = domWnd.Metric(width, this._unit);
            this._width = m.value;
            this._unit = m.unit;
            if (color) {
                this._color = new Color(color);
            }
        }

        get style() {
            return this._lineStyle;
        }
        get width() {
            return this._width;
        }
        get unit() {
            return this._unit;
        }
        get color() {
            return this._color;
        }

        set style(s) {
            if (Lateral.styles.includes(s))
                this._lineStyle = s;
        }
        set width(width) {
            var m = domWnd.Metric(width, this._unit);
            _width = m.value;
            _unit = m.unit;
        }
        set unit(u) {
            if (domWnd.Units.includes(u)) {
                this._unit = u;
            }
        }
        set color(c) {
            this._color = Color.New.apply(null, arguments);
        }
    }

    class Border {
    }
    ////////////////////////////////////////////////////////////////////


    class domPage {
        static New() {
            var p = new domPage();
            p.Init();
            return p;
        }
        static IsPageValid(page) {
            return page && page instanceof domPage && page.valid;
        }

        constructor(){
            this._idCounter = 1;
            this._mainWnd = null;
            this._unit = "px";
        }

        get newId() {
            var id = this._idCounter;
            this._idCounter++;
            return id.toString();
        }

        Init() {
            document.body.id = this.newId;
            this._mainWnd = new domWnd(this);
            this._mainWnd.Create(null);
            return this;
        }

        get valid() {
            return domWnd.IsValidWnd(this.mainWnd);
        }
        get mainWnd() {
            return this._mainWnd;
        }
        get width() {
            return window.innerWidth;
        }
        get height() {
            return window.innerHeight;
        }
        get unit() {
            return this._unit;
        }
        set unit(unit) {
            if (typeof unit != 'string') return;
            unit = unit.toLowerCase();
            if (!domPage.Units().includes(unit)) return;
            this._unit = unit;
        }
        Destroy() {
            this._idCounter = 1;
            this._mainWnd.Destroy();
            this._mainWnd = null;
            this._unit = "px"
        }
    }

    // base wnd class
    class domWnd {
        /////////////////////////////////
        // static classes

        // check if a wnd is valid domWnd
        static IsValidWnd(wnd) {
            return wnd && wnd instanceof domWnd && wnd.wndValid;
        }

        ////////////////////////////////
        // private properties

        ////////////////////////////////
        // constructor
        // a wnd must be belong to a page
        constructor(page = null, tag = "div") {
            this._id = "0";
            this._page = null;
            this._parent = null;
            this._children = {};
            this._zorder = [];
            this._elementTag = tag;
        }


        get page() {
            return this._page;
        }
        get pageValid() {
            return domPage.IsPageValid(this._page);
        }
        get idValid() {
            return (this._id.toString() === this._id) && this._id > 0;
        }
        get wndValid() {
            return this._page instanceof domPage && this._page != null && this.element != null;
        }
        get id() {
            return this._id;
        }
        get element() {
            if (!this.idValid) return null;
            return document.getElementById(this.id);
        }
        get width() {
            return this.element.clientWidth;
        }
        get height() {
            return this.element.clientHeight;
        }
        get rect() {
            var ele = this.element;
            return new Rect({ left: ele.clientLeft, top: ele.clientTop, width: ele.clientWidth, height: ele.clientHeight });
        }
        get position() {
            var ele = this.element;
            return new Position(ele.clientLeft, ele.clientTop);
        }
        static Metric(desc, defaultUnit) {
            var value;
            var unit;
            if (typeof desc == "number") {
                value = desc;
                unit = defaultUnit;
            } else {
                var re = /^\s*(\-*\d+\.*\d*)([a-zA-Z]*)\s*$/g;
                var rs = re.exec(desc);
                if (!rs || rs.length != 3) return null;
                if (rs[2] == "") rs[2] = this.page.unit;
                else if (!domPage.Units().includes(rs[2])) null;
                value = rs[1];
                unit = rs[2];
            }
            return { value, unit, descript: `${value}${unit}` }
        }
        set width(width) {
            var m = domWnd.Metric(width, this.page.unit);
            if (!m) return;
            this.element.style.width = m.descript;
        }
        set height(height) {
            var m = domWnd.Metric(height, this.page.unit);
            if (!m) return;
            this.element.style.height = m.descript;
        }
        GetColor(attr) {
            var bc = window.getComputedStyle(this.element)[attr];
            return Color.New(bc);
        }
        get bgdClr() {
            return this.GetColor("backgroundColor")
        }
        get txtClr() {
            return this.GetColor("color");
        }
        get border() {

        }
        SetColor(attr, clr) {
            var args = Array.from(arguments).splice(1);
            clr = Color.New.apply(null, args);
            this.element.style[attr] = `rgba(${clr.r}, ${clr.g}, ${clr.b}, ${clr.a})`
        }
        set bgdClr(clr) {
            var args = Array.from(arguments);
            args.unshift("backgroundColor")
            this.SetColor.apply(this, args);
        }
        set txtClr(clr) {
            var args = Array.from(arguments);
            args.unshift("color")
            this.SetColor.apply(this, args);
        }

        AddChild(child) {
            if (this._children[child.id] != null) {
                return false;
            }

            child._parent = this;
            this._children[child.id] = {
                wnd: child,
                zorder: this._zorder.push(child.id) - 1
            };
            return true;
        }

        DestroyChild(child) {
            if (this._children[child.id] == null) {
                return true;
            }

            this._zorder.splice(this._children[child.id].zorder, 1);
            this._children[child.id] = null;

            return true;
        }

        SetAttributes(attributes) {
            if (typeof attributes != 'object' || !(attributes instanceof Object) || attributes instanceof Array) {
                if (arguments.length == 2 && typeof attributes == 'string') {
                    attributes = { [attributes]: arguments[1] };
                } else {
                    log("Invalid parameters");
                    return;
                }
            }

            Object.keys(attributes).forEach(attr => {
                var setter = this.constructor.prototype.__lookupSetter__(attr);
                if (setter == undefined) {
                    log(`Attribute "${attr} is not defined in ${this.constructor.name}"`);
                    return;
                }
                this[attr] = attributes[attr];
            });
        }
        // for this base wnd class, create a "div" wnd
        // unless parent is null, in which case set this wnd to html body
        Create(parent) {
            // if parent is null or undefined,
            // set this wnd to html body
            if (!parent) {
                if (!this._page || !(this._page instanceof domPage)) return false;
                this._id = document.body.id.toString();
                this._tag = "body";
                return true;
            }

            // this is already a valid wnd, return true
            if (this.wndValid) return true;
            if (!domWnd.IsValidWnd(parent)) return false;

            this._page = parent.page;
            this._id = this.page.newId;
            var thisElement = document.createElement(this._tag);
            thisElement.id = this._id;
            thisElement.style.position = "relative";

            var parentElement = document.getElementById(parent.id);
            parentElement.appendChild(thisElement);

            return parent.AddChild(this)
        }

        get parent() {
            return this._parent;
        }

        Destroy() {
            for (; this._zorder.length;) {
                this._children[this._zorder[0]].wnd.Destroy();
            }

            if (!this._parent) return true;

            if (!this._parent.DestroyChild(this)) return false;
            this._parent.element.removeChild(this.element);
            return true;
        }

        static New(wnd = domWnd) {
            return new wnd();
        }
        static CreateNew(parent, wnd = domWnd) {
            var nw = new wnd();
            if (nw.Create(parent)) return nw;

            return null;
        }
    }

    class domDiv extends domWnd {
        get text() {
            this.element.innerText;
        }
        set text(text) {
            this.element.innerText = text;
        }
    }

    var dui = function () {

    }

    class Assert{
        constructor(name){
            this.name = name;
            console.log(`dui version: ${version}\nStart testing ${name}`);
            console.log(help[name]);
        }
        NotNull(t){
            if(t == null || t == undefined) throw new Error("Should not be null or undefined");
        }
        True(t){
            if(!t) throw new Error("Should be true");
        }
        False(t){
            if(t) throw new Error("Should not be true");
        }
        Equals(value, expected){
            if(!equals(value, expected)) throw new Error("Should be equal");
        }
        NotEquals(value, expected){
            if(equals(value, expected)) throw new Error("Should be equal");
        }
        ShouldThrowError(func){
            var args = Array.from(arguments);
            args.shift();
            try{
                func.apply(null, args);
            }catch(error){ return }
            throw new Error("Should throw an error");
        }
        Done(){
            console.log(`Test of "${this.name}" finished successfully !!!\n`);
        }
    }

    dui.version = version;
    dui.help = help;
    dui.log = log;
    dui.Assert = Assert;
    dui.test = test;

    dui.toNumber = toNumber;
    dui.swap = swap;
    dui.equals = equals;
    dui.toNumberObject = toNumberObject;
    dui.equalsTo = equalsTo;

    dui.Point = Point;
    dui.Position = Position;
    dui.Size = Size;
    dui.Quad = Quad;
    dui.Rect = Rect;
    dui.Color = Color;
    
    function test(name, func){
        var assert = new Assert(name);
        func(assert);
        assert.Done();
    }
    
    if (!noGlobal) {
        window.dui = dui;
    }

    return dui;
});
