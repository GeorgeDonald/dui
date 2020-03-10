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
})(typeof window !== 'undefined' ? window : this, duiFunc);

function duiFunc(window, noGlobal) {
    "use strict";

    var document = window.document;
    var version = "0.0.1";
    var help = {};

    ////////////////////////////////////////////////////////////////////
    // counstants
    const namedColors = {
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgrey: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        grey: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgrey: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        rebeccapurple: [102, 51, 153, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1],
    }
    var hexColorNames = {
        "#F0F8FF": "AliceBlue",
        "#FAEBD7": "AntiqueWhite",
        "#00FFFF": "Aqua",
        "#7FFFD4": "Aquamarine",
        "#F0FFFF": "Azure",
        "#F5F5DC": "Beige",
        "#FFE4C4": "Bisque",
        "#000000": "Black",
        "#FFEBCD": "BlanchedAlmond",
        "#0000FF": "Blue",
        "#8A2BE2": "BlueViolet",
        "#A52A2A": "Brown",
        "#DEB887": "BurlyWood",
        "#5F9EA0": "CadetBlue",
        "#7FFF00": "Chartreuse",
        "#D2691E": "Chocolate",
        "#FF7F50": "Coral",
        "#6495ED": "CornflowerBlue",
        "#FFF8DC": "Cornsilk",
        "#DC143C": "Crimson",
        "#00008B": "DarkBlue",
        "#008B8B": "DarkCyan",
        "#B8860B": "DarkGoldenRod",
        "#A9A9A9": "DarkGrey",
        "#006400": "DarkGreen",
        "#BDB76B": "DarkKhaki",
        "#8B008B": "DarkMagenta",
        "#556B2F": "DarkOliveGreen",
        "#FF8C00": "DarkOrange",
        "#9932CC": "DarkOrchid",
        "#8B0000": "DarkRed",
        "#E9967A": "DarkSalmon",
        "#8FBC8F": "DarkSeaGreen",
        "#483D8B": "DarkSlateBlue",
        "#2F4F4F": "DarkSlateGrey",
        "#00CED1": "DarkTurquoise",
        "#9400D3": "DarkViolet",
        "#FF1493": "DeepPink",
        "#00BFFF": "DeepSkyBlue",
        "#696969": "DimGrey",
        "#1E90FF": "DodgerBlue",
        "#B22222": "FireBrick",
        "#FFFAF0": "FloralWhite",
        "#228B22": "ForestGreen",
        "#FF00FF": "Fuchsia",
        "#DCDCDC": "Gainsboro",
        "#F8F8FF": "GhostWhite",
        "#FFD700": "Gold",
        "#DAA520": "GoldenRod",
        "#808080": "Grey",
        "#008000": "Green",
        "#ADFF2F": "GreenYellow",
        "#F0FFF0": "HoneyDew",
        "#FF69B4": "HotPink",
        "#CD5C5C": "IndianRed",
        "#4B0082": "Indigo",
        "#FFFFF0": "Ivory",
        "#F0E68C": "Khaki",
        "#E6E6FA": "Lavender",
        "#FFF0F5": "LavenderBlush",
        "#7CFC00": "LawnGreen",
        "#FFFACD": "LemonChiffon",
        "#ADD8E6": "LightBlue",
        "#F08080": "LightCoral",
        "#E0FFFF": "LightCyan",
        "#FAFAD2": "LightGoldenRodYellow",
        "#D3D3D3": "LightGrey",
        "#90EE90": "LightGreen",
        "#FFB6C1": "LightPink",
        "#FFA07A": "LightSalmon",
        "#20B2AA": "LightSeaGreen",
        "#87CEFA": "LightSkyBlue",
        "#778899": "LightSlateGrey",
        "#B0C4DE": "LightSteelBlue",
        "#FFFFE0": "LightYellow",
        "#00FF00": "Lime",
        "#32CD32": "LimeGreen",
        "#FAF0E6": "Linen",
        "#800000": "Maroon",
        "#66CDAA": "MediumAquaMarine",
        "#0000CD": "MediumBlue",
        "#BA55D3": "MediumOrchid",
        "#9370DB": "MediumPurple",
        "#3CB371": "MediumSeaGreen",
        "#7B68EE": "MediumSlateBlue",
        "#00FA9A": "MediumSpringGreen",
        "#48D1CC": "MediumTurquoise",
        "#C71585": "MediumVioletRed",
        "#191970": "MidnightBlue",
        "#F5FFFA": "MintCream",
        "#FFE4E1": "MistyRose",
        "#FFE4B5": "Moccasin",
        "#FFDEAD": "NavajoWhite",
        "#000080": "Navy",
        "#FDF5E6": "OldLace",
        "#808000": "Olive",
        "#6B8E23": "OliveDrab",
        "#FFA500": "Orange",
        "#FF4500": "OrangeRed",
        "#DA70D6": "Orchid",
        "#EEE8AA": "PaleGoldenRod",
        "#98FB98": "PaleGreen",
        "#AFEEEE": "PaleTurquoise",
        "#DB7093": "PaleVioletRed",
        "#FFEFD5": "PapayaWhip",
        "#FFDAB9": "PeachPuff",
        "#CD853F": "Peru",
        "#FFC0CB": "Pink",
        "#DDA0DD": "Plum",
        "#B0E0E6": "PowderBlue",
        "#800080": "Purple",
        "#663399": "RebeccaPurple",
        "#FF0000": "Red",
        "#BC8F8F": "RosyBrown",
        "#4169E1": "RoyalBlue",
        "#8B4513": "SaddleBrown",
        "#FA8072": "Salmon",
        "#F4A460": "SandyBrown",
        "#2E8B57": "SeaGreen",
        "#FFF5EE": "SeaShell",
        "#A0522D": "Sienna",
        "#C0C0C0": "Silver",
        "#87CEEB": "SkyBlue",
        "#6A5ACD": "SlateBlue",
        "#708090": "SlateGrey",
        "#FFFAFA": "Snow",
        "#00FF7F": "SpringGreen",
        "#4682B4": "SteelBlue",
        "#D2B48C": "Tan",
        "#008080": "Teal",
        "#D8BFD8": "Thistle",
        "#FF6347": "Tomato",
        "#40E0D0": "Turquoise",
        "#EE82EE": "Violet",
        "#F5DEB3": "Wheat",
        "#FFFFFF": "White",
        "#F5F5F5": "WhiteSmoke",
        "#FFFF00": "Yellow",
        "#9ACD32": "YellowGreen",
    }
    const lineStyles = {
        dotted: 'dotted',
        dashed: 'dashed',
        solid: 'solid',
        double: 'double',
        groove: 'groove',
        ridge: 'ridge',
        inset: 'inset',
        outset: 'outset',
        none: 'none',
        hidden: 'hidden',
    }
    const units = {
        cm: 'cm', 
        mm: 'mm', 
        in: 'in', 
        px: 'px', 
        pt: 'pt', 
        pc: 'pc',
        em: 'em', 
        ex: 'ex', 
        ch: 'ch', 
        rem: 'rem', 
        vw: 'vw', 
        vh: 'vh', 
        vmin: 'vmin', 
        vmax: 'vmax', 
        '%': '%'
    }

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

    function uon(v){
        return v == undefined || v == null;
    }

    function nou(v){
        return uon(v);
    }

    function registerEventListeners(wnd){
        var events = {
            abort: {handler: 'onAbort', spec: `The event occurs when the loading of a media is aborted`, events: `UiEvent, Event`},
            afterprint: {handler: 'onAfterPrint', spec: `The event occurs when a page has started printing, or if the print dialogue box has been closed`, events: `Event`},
            animationend: {handler: 'onAnimationEnd', spec: `The event occurs when a CSS animation has completed`, events: `AnimationEvent`},
            animationiteration: {handler: 'onAnimationIteration', spec: `The event occurs when a CSS animation is repeated`, events: `AnimationEvent`},
            animationstart: {handler: 'onAnimationStart', spec: `The event occurs when a CSS animation has started`, events: `AnimationEvent`},
            beforeprint: {handler: 'onBeforePrint', spec: `The event occurs when a page is about to be printed`, events: `Event`},
            //beforeunload: {handler: 'onBeforeUnload', spec: `The event occurs before the document is about to be unloaded`, events: `UiEvent, Event`},
            blur: {handler: 'onKillFocus', spec: `The event occurs when an element loses focus`, events: `FocusEvent`},
            canplay: {handler: 'onCanPlay', spec: `The event occurs when the browser can start playing the media (when it has buffered enough to begin)`, events: `Event`},
            canplaythrough: {handler: 'onCanPlayThrough', spec: `The event occurs when the browser can play through the media without stopping for buffering`, events: `Event`},
            change: {handler: 'onChange', spec: `The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)`, events: `Event`},
            click: {handler: 'onClick', spec: `The event occurs when the user clicks on an element`, events: `MouseEvent`},
            contextmenu: {handler: 'on_ContextMenu', spec: `The event occurs when the user right-clicks on an element to open a context menu`, events: `MouseEvent`},
            copy: {handler: 'onCopy', spec: `The event occurs when the user copies the content of an element`, events: `ClipboardEvent`},
            cut: {handler: 'onCut', spec: `The event occurs when the user cuts the content of an element`, events: `ClipboardEvent`},
            dblclick: {handler: 'onDblClick', spec: `The event occurs when the user double-clicks on an element`, events: `MouseEvent`},
            drag: {handler: 'onDrag', spec: `The event occurs when an element is being dragged`, events: `DragEvent`},
            dragend: {handler: 'onDragEnd', spec: `The event occurs when the user has finished dragging an element`, events: `DragEvent`},
            dragenter: {handler: 'onDragEnter', spec: `The event occurs when the dragged element enters the drop target`, events: `DragEvent`},
            dragleave: {handler: 'onDragLeave', spec: `The event occurs when the dragged element leaves the drop target`, events: `DragEvent`},
            dragover: {handler: 'onDragOver', spec: `The event occurs when the dragged element is over the drop target`, events: `DragEvent`},
            dragstart: {handler: 'onDragStart', spec: `The event occurs when the user starts to drag an element`, events: `DragEvent`},
            drop: {handler: 'onDrop', spec: `The event occurs when the dragged element is dropped on the drop target`, events: `DragEvent`},
            durationchange: {handler: 'onDurationChange', spec: `The event occurs when the duration of the media is changed`, events: `Event`},
            ended: {handler: 'onEnded', spec: `The event occurs when the media has reach the end (useful for messages like "thanks for listening")`, events: `Event`},
            error: {handler: 'onError', spec: `The event occurs when an error occurs while loading an external file`, events: `ProgressEvent, UiEvent, Event`},
            focus: {handler: 'onFocus', spec: `The event occurs when an element gets focus`, events: `FocusEvent`},
            focusin: {handler: 'onFocusIn', spec: `The event occurs when an element is about to get focus`, events: `FocusEvent`},
            focusout: {handler: 'onFocusOut', spec: `The event occurs when an element is about to lose focus`, events: `FocusEvent`},
            fullscreenchange: {handler: 'onFullScreenChange', spec: `The event occurs when an element is displayed in fullscreen mode`, events: `Event`},
            fullscreenerror: {handler: 'onFullScreenError', spec: `The event occurs when an element can not be displayed in fullscreen mode`, events: `Event`},
            hashchange: {handler: 'onHashChange', spec: `The event occurs when there has been changes to the anchor part of a URL`, events: `HashChangeEvent`},
            input: {handler: 'onInput', spec: `The event occurs when an element gets user input`, events: `InputEvent, Event`},
            invalid: {handler: 'onInvalid', spec: `The event occurs when an element is invalid`, events: `Event`},
            keydown: {handler: 'onKeyDown', spec: `The event occurs when the user is pressing a key`, events: `KeyboardEvent`},
            keypress: {handler: 'onKeyPress', spec: `The event occurs when the user presses a key`, events: `KeyboardEvent`},
            keyup: {handler: 'onKeyUp', spec: `The event occurs when the user releases a key`, events: `KeyboardEvent`},
            //load: {handler: 'on_load', spec: `The event occurs when an object has loaded`, events: `UiEvent, Event`},
            //loadeddata: {handler: 'onLoadedData', spec: `The event occurs when media data is loaded`, events: `Event`},
            //loadedmetadata: {handler: 'onLoadedMetadata', spec: `The event occurs when meta data (like dimensions and duration) are loaded`, events: `Event`},
            loadstart: {handler: 'onLoadStart', spec: `The event occurs when the browser starts looking for the specified media`, events: `ProgressEvent`},
            message: {handler: 'onMessage', spec: `The event occurs when a message is received through the event source`, events: `Event`},
            mousedown: {handler: 'onMouseDown', spec: `The event occurs when the user presses a mouse button over an element`, events: `MouseEvent`},
            mouseenter: {handler: 'onMouseEnter', spec: `The event occurs when the pointer is moved onto an element`, events: `MouseEvent`},
            mouseleave: {handler: 'onMouseLeave', spec: `The event occurs when the pointer is moved out of an element`, events: `MouseEvent`},
            mousemove: {handler: 'onMouseMove', spec: `The event occurs when the pointer is moving while it is over an element`, events: `MouseEvent`},
            mouseover: {handler: 'onMouseOver', spec: `The event occurs when the pointer is moved onto an element, or onto one of its children`, events: `MouseEvent`},
            mouseout: {handler: 'onMouseOut', spec: `The event occurs when a user moves the mouse pointer out of an element, or out of one of its children`, events: `MouseEvent`},
            mouseup: {handler: 'onMouseUp', spec: `The event occurs when a user releases a mouse button over an element`, events: `MouseEvent`},
            //mousewheel: {handler: 'onMouseWheel', spec: `Deprecated. Use the wheel event instead`, events: `WheelEvent`},
            //offline: {handler: 'on_offline', spec: `The event occurs when the browser starts to work offline`, events: `Event`},
            //online: {handler: 'on_online', spec: `The event occurs when the browser starts to work online`, events: `Event`},
            //open: {handler: 'on_open', spec: `The event occurs when a connection with the event source is opened`, events: `Event`},
            //pagehide: {handler: 'on_pagehide', spec: `The event occurs when the user navigates away from a webpage`, events: `PageTransitionEvent`},
            //pageshow: {handler: 'on_pageshow', spec: `The event occurs when the user navigates to a webpage`, events: `PageTransitionEvent`},
            paste: {handler: 'onPaste', spec: `The event occurs when the user pastes some content in an element`, events: `ClipboardEvent`},
            pause: {handler: 'onPause', spec: `The event occurs when the media is paused either by the user or programmatically`, events: `Event`},
            play: {handler: 'onPlay', spec: `The event occurs when the media has been started or is no longer paused`, events: `Event`},
            playing: {handler: 'onPlaying', spec: `The event occurs when the media is playing after having been paused or stopped for buffering`, events: `Event`},
            popstate: {handler: 'onPopState', spec: `The event occurs when the window's history changes`, events: `PopStateEvent`},
            progress: {handler: 'onProgress', spec: `The event occurs when the browser is in the process of getting the media data (downloading the media)`, events: `Event`},
            ratechange: {handler: 'onRateChange', spec: `The event occurs when the playing speed of the media is changed`, events: `Event`},
            //resize: {handler: 'on_resize', spec: `The event occurs when the document view is resized`, events: `UiEvent, Event`},
            reset: {handler: 'onReset', spec: `The event occurs when a form is reset`, events: `Event`},
            scroll: {handler: 'onScroll', spec: `The event occurs when an element's scrollbar is being scrolled`, events: `UiEvent, Event`},
            search: {handler: 'onSearch', spec: `The event occurs when the user writes something in a search field (for <input="search">)`, events: `Event`},
            seeked: {handler: 'onSeeked', spec: `The event occurs when the user is finished moving/skipping to a new position in the media`, events: `Event`},
            seeking: {handler: 'onSeeking', spec: `The event occurs when the user starts moving/skipping to a new position in the media`, events: `Event`},
            select: {handler: 'onSelect', spec: `The event occurs after the user selects some text (for <input> and <textarea>)`, events: `UiEvent, Event`},
            show: {handler: 'onShow', spec: `The event occurs when a <menu> element is shown as a context menu`, events: `Event`},
            //stalled: {handler: 'on_stalled', spec: `The event occurs when the browser is trying to get media data, but data is not available`, events: `Event`},
            storage: {handler: 'onStorage', spec: `The event occurs when a Web Storage area is updated`, events: `StorageEvent`},
            submit: {handler: 'onSubmit', spec: `The event occurs when a form is submitted`, events: `Event`},
            suspend: {handler: 'onSuspend', spec: `The event occurs when the browser is intentionally not getting media data`, events: `Event`},
            timeupdate: {handler: 'onTimeUpdate', spec: `The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)`, events: `Event`},
            toggle: {handler: 'onToggle', spec: `The event occurs when the user opens or closes the <details> element`, events: `Event`},
            touchcancel: {handler: 'onTouchCancel', spec: `The event occurs when the touch is interrupted`, events: `TouchEvent`},
            touchend: {handler: 'onTouchEnd', spec: `The event occurs when a finger is removed from a touch screen`, events: `TouchEvent`},
            touchmove: {handler: 'onTouchMove', spec: `The event occurs when a finger is dragged across the screen`, events: `TouchEvent`},
            touchstart: {handler: 'onTouchStart', spec: `The event occurs when a finger is placed on a touch screen`, events: `TouchEvent`},
            transitionend: {handler: 'onTransitionEnd', spec: `The event occurs when a CSS transition has completed`, events: `TransitionEvent`},
            //unload: {handler: 'on_unload', spec: `The event occurs once a page has unloaded (for <body>)`, events: `UiEvent, Event`},
            volumechange: {handler: 'onVolumeChange', spec: `The event occurs when the volume of the media has changed (includes setting the volume to "mute")`, events: `Event`},
            waiting: {handler: 'onWaiting', spec: `The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)`, events: `Event`},
            wheel: {handler: 'onWheel', spec: `The event occurs when the mouse wheel rolls up or down over an element`, events: `WheelEvent`},
        }

        let ele = wnd.element;
        Object.keys(events).forEach(event => {
            if(typeof wnd[events[event].handler] == 'function') {
                ele.addEventListener(event, wnd[events[event].handler], true);
            }
        });
    }

    help.toNumber = `
    toNumber(x: string)
        convert string to float
        x: string that include digits
    `
    function toNumber(x) {
        if (typeof x == 'string') {
            var rer = /([\+|\-]{0,1}\d+\.*\d*e*[\+|\-]{0,1}\d*)/g.exec(x);
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
        return names.every(v => {
            if(typeof obj1[v] == 'function') return true;
            if(typeof obj1[v].equals == 'function') {
                return obj1[v].equals(obj2[v]);
            } else return equals(obj1[v], obj2[v])
        });
    }

    help.toNumberObject = `
    toNumberObject(names: array, ...args)
        convert a sequence of strings or numbers to a named number object width keys named in names
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

    help.toObject = `
    toObject(names: array, ...args)
        convert a sequence of strings or numbers to a object width keys named in names
        example: 
            toNumberObject(["a", "b"], 10, 11) returns {a: 10, b: 11}
            toNumberObject(['a', 'b'], [10, 11]) returns {a: 10, b: 11}
            toNumberObject(['a', 'b'], {a: 10, b: 11, c: 12}) returns {a: 10, b: 11}
    `
    function toObject(names, ...args) {
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
            obj[v] = args[i];
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
        var t = toObject.apply(null, args);
        return equals(obj1, t, names);
    }

    help.metric = `
    metric
        convert quantity string to value and unit
        10px => 10, px
        10 => 10, px
        10% => 10, %
        10, % => 10, %
        Quantity(10, 'mm') => 10, mm
        {value: 10, "unit": "in"} => 10in
        [10, 20, 30] => 10px
        [10, 'in', 30] => 10in
        10abcdef => 10, px
    `
    function metric(desc, defaultUnit) {
        var value;
        var unit;
        if (typeof desc == "number") {
            value = desc;
            unit = defaultUnit;
        } else if(typeof desc == 'string'){
            var re = /^\s*([\+|\-]{0,1}\d+\.*\d*e*[\+|\-]{0,1}\d*)([a-zA-Z]*)\s*$/g;
            var rs = re.exec(desc);
            if (rs && rs.length == 3) {
                if (rs[2] == "") rs[2] = defaultUnit;
                else if (!units[rs[2].toLowerCase()]) rs[2] = defaultUnit;
                value = toNumber(rs[1]);
                unit = rs[2];
            } else {
                value = toNumber(desc);
                unit = defaultUnit;
            }
        } else {
            var t = toObject(["value", "unit"], desc);
            value = toNumber(t.value);
            unit = t.unit;
        }
        unit = typeof unit == 'string' ? units[unit.toLowerCase()] : undefined;
        if(!unit) unit = "px";
        return { value, unit, desc: `${value}${unit}` }
    }

    function toPixels(value, unit){
        if(arguments.length < 2) throw new Error("2 parameters required");
        if(uon(value) || uon(unit) || typeof unit != 'string' || !units[unit.toLowerCase()]) {
            throw new Error("Invalid parameters.");
        }

        var e = document.createElement("div");
        e.style.position = "absolute";
        e.style.left = `-${value}${unit}`;
        e.style.top = `-${value}${unit}`;
        e.style.width = `${value}${unit}`;
        e.style.height = `${value}${unit}`;
        document.body.appendChild(e);
        var x = window.getComputedStyle(e).width;
        document.body.removeChild(e);
        return metric(x);
    }

    help.convertUnit = `
    convertUnit
        convert a quantity from one measurement to another one
    `
    function convertUnit(value, unitFrom, unitTo){
        if(arguments.length < 2) throw new Error("2 or 3 parameters required");
        if(uon(unitTo)){
            unitTo = unitFrom;
            var t = metric(value);
            value = t.value;
            unitFrom = t.unit;
        }

        if(unitFrom == unitTo) return value;

        let v1 = toPixels(10000, unitFrom);
        let v2 = toPixels(10000, unitTo);
        if(v1.unit != v2.unit) {
            throw new Error("Your browser doesn't support unit conversion");
        }
        return Math.trunc(v1.value * value / v2.value * 10000) / 10000;
    }

    function valarizeRate(objRate, objTotal){
        if(objRate.unit != '%') return;
        objRate.value = objRate.value * objTotal.value / 100.0;
        objRate.unit = objTotal.unit;
    }

    help.metricAdd = `
    metricAdd
        at least two parameters needed
        for two parameters: value1: quantity 1, unit1: quantity 2
        for three parameters: value1: quantity 1, unit1: quantity 2, value2: total width
    `
    function metricAdd(value1, unit1, value2, unit2, totalWidth, totalWidthUnit){
        if(uon(value1) || nou(!unit1)) throw new Error("At least 2 parameters needed");
        if(uon(unit2) && uon(totalWidth) && uon(totalWidthUnit)){
            var t1 = metric(value1);
            var t2 = metric(unit1);
            var t3 = metric(value2);
            value1 = t1.value;
            unit1 = t1.unit;
            value2 = t2.value;
            unit2 = t2.unit;
            totalWidth = t3.value;
            totalWidthUnit = t3.unit;
        } else if(!uon(totalWidth)){
            var t = metric(totalWidth);
            totalWidth = t.value;
            totalWidthUnit = t.unit;
        }

        if(typeof totalWidthUnit == 'string') totalWidthUnit = totalWidthUnit.toLowerCase();
        if((typeof totalWidthUnit == 'string' && (!units[totalWidthUnit] || totalWidthUnit == "%")) ||
            (!units[totalWidthUnit] && (unit1 == "%" || unit2 == "%"))) {
            throw new Error("Invalid ")
        }

        if(unit1 == "%") {
            value1 = value1 * totalWidthUnit / 100.0;
            unit1 = totalWidthUnit;
        }

        if(unit2 == "%") {
            value2 = value2 * totalWidthUnit / 100.0;
            unit2 = totalWidthUnit;
        }

        var value = convertUnit(value2, unit2, unit1) + value1;
        return { value, unit: unit1, desc: `${value}${unit1}` }
    }
    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////
    // basic classes

    help.Quant = `
    Quantity
        represents (value, unit)
    `
    function Quant(value, unit) {
        var _value = 0;
        var _unit = 'px';

        var quant = {
            get value(){
                return _value;
            },
            set value(v){
                var t = Quant(v, _unit);
                _value = t.value;
                _unit = t.unit;
            },
            get unit() {
                return _unit;
            },
            set unit(u){
                u = units[u];
                if(u) _unit = u;
            },
            get desc(){
                return `${_value}${_unit}`;
            },
            equals(...args){
                var q = Quant.apply(null, args);
                var t = Quant(this).toUnit(q.unit);
                return equals({value: t.value, unit: t.unit}, q, ['value', 'unit']);
            },
            add(value, unit, totalWidth, totalWidthUnit){
                return addWidthUnit(value, unit, totalWidth, totalWidthUnit, false);
            },
            sub(value, unit, totalWidth, totalWidthUnit){
                return addWidthUnit(value, unit, totalWidth, totalWidthUnit, true);
            },
            oppsite(){
                _value = -_value;
                return this;
            },
            compare(...args){
                var other = Quant.apply(null, args);
                var t = convertUnit(other.value, other.unit, _unit);
                if(_value < t) return -1;
                else if(_value > t) return 1;
                return 0;
            },
            lt(other){
                return this.compare(other) < 0;
            },
            gt(other){
                return this.compare(other) > 0;
            },
            le(other){
                return this.compare(other) <= 0;
            },
            ge(other){
                return this.compare(other) >= 0;
            },
            multiply(value){
                _value *= toNumber(value);
                return this;
            },
            divide(value){
                value = toNumber(value);
                if(value == 0) throw new Error("Divided by zero");
                this.value /= value;
                return this;
            },
            toUnit(unit){
                _value = convertUnit(_value, unit);
                _unit = unit;
                return this;
            }
        }
        function addWidthUnit(value, unit, totalWidth, totalWidthUnit, sub){
            if(typeof unit != 'string' || !units[unit]) {
                var t = metric(value);
                if(uon(totalWidth)){
                    var tt = metric(unit);
                    totalWidth = tt.value;
                    totalWidthUnit = tt.unit;
                }
                value = t.value;
                unit = t.unit;
            } else if(uon(totalWidthUnit)){
                var tt = metric(unit);
                totalWidth = tt.value;
                totalWidthUnit = tt.unit;
            }

            var t = Quant(value, unit);
            var o = {value: _value, unit: _unit};
            var total = {value: totalWidth, unit: totalWidthUnit};
            valarizeRate(o, total);
            valarizeRate(t, total)

            t = convertUnit(t.value, t.unit, o.unit);
            if(sub != true) _value += t;
            else _value -= t;
            if(_unit == '%') _alue /= totalWidth;
            return quant;
        }

        if(!nou(value)) {
            if(typeof value == "string"){
                var t = metric(value, unit ? unit : "px");
                value = t.value;
                unit = t.unit;
            }
            var t = toObject(['value', 'unit'], value, unit);
            _value = toNumber(t.value);
            _unit = typeof t.unit == 'string' ? units[t.unit.toLowerCase()]: undefined;
            if(!_unit){
                _unit = "px";
            }
        }
        return quant;
    }

    help.Point = `
    Point
        represents a (x, y) pair
        constructor(x: number or number string or Point or object like {x: 1, y: 2}, y: optional, number or number string)
        offset(x: number or Point, y: optional number)
            move Point to (Point.x + x, Point.y + y)
    `
    function Point(x, y) {
        var _x;
        var _y;
        var t = toObject(["x", "y"], x, y);
        _x = Quant(t.x);
        _y = Quant(t.y);

        return {
            get x(){
                return _x;
            },
            set x(x){
                _x = Quant(x);
            },
            get y(){
                return _y;
            },
            set y(y){
                _y = Quant(y);
            },
            offset(x, y) {
                var t = Point(x, y);
                _x.add(t.x);
                _y.add(t.y);
                return this;
            },
            equals(x, y) {
                return equalsTo(['x', 'y'], this, x, y);
            }
        }
    }

    function Position(x, y) {
        return Point(x, y);
    }

    help.Size = `
    Size
        represents (width, height) pair
        constructor(width: number or number string or Point or object like {x: 1, y: 2}, height: optional number or number string)
        add(width: number or Size, y: optional number)
            add width and height to this.width and this.height saperately
        normalize:
            make sure width and height are positive. if not, change it to it's absolute value
    `
    function Size(width, height) {
        var _width;
        var _height;
        var t = toObject(["width", "height"], width, height);
        _width = Quant(t.width);
        _height = Quant(t.height);

        return {
            get width(){
                return _width;
            },
            set width(width){
                _width = Quant(width);
            },
            get height(){
                return _height;
            },
            set height(height){
                _height = Quant(height);
            },
            add(width, height) {
                var t = toObject(["width", "height"], width, height);
                _width.add(t.width);
                _height.add(t.height);
                return this;
            },
            normalize() {
                if (_width.value < 0) _width.value = -_width.value;
                if (_height.value < 0) _height.value = -_height.value;
                return this;
            },
            equals(width, height) {
                var t = toObject(["width", "height"], width, height);
                return _width.equals(Quant(t.width)) && _height.equals(Quant(t.height));
            },
        }
    }

    help.Quad = `
    Quad
        represents (left, top, right, bottom)
        constructor(left: number or Rect, top: optional number, right, bottom)
    `
    function Quad(left, top, right, bottom) {
        var _left, _top, _right, _bottom;

        var t1 = toObject(["left", "top", "right", "bottom"], left, top, right, bottom);
        _left = Quant(t1.left);
        _top = Quant(t1.top);
        _right = Quant(t1.right);
        _bottom = Quant(t1.bottom);
        if ((left.right == undefined && left.width != undefined) || (left.bottom == undefined && left.height != undefined)) {
            var t2 = toObject(["left", "top", "width", "height"], left);
            if (left.right == undefined && left.width != undefined) _right = Quant(_left).add(t2.width);
            if (left.bottom == undefined && left.height != undefined) _bottom = Quant(_top).add(t2.height);
        }

        return {
            get left(){
                return _left;
            },
            set left(value) {
                _left = Quant(value);
            },
            get top(){
                return _top;
            },
            set top(value) {
                _top = Quant(value);
            },
            get right(){
                return _right;
            },
            set right(value) {
                _right = Quant(value);
            },
            get bottom(){
                return _bottom;
            },
            set bottom(value) {
                _bottom = Quant(value);
            },
            add(left, top, right, bottom) {
                var t = toObject(["left", "top", "right", "bottom"], left, top, right, bottom);
                _left.add(Quant(t.left));
                _top.add(Quant(t.top));
                _right.add(Quant(t.right));
                _bottom.add(Quant(t.bottom));
                return this;
            },
            equals(left, top, right, bottom) {
                return equals({left: _left, top: _top, right: _right, bottom: _bottom}, 
                    Quad(left, top, right, bottom), ["left", "top", "right", "bottom"]);
            }
        }
    }

    help.Rect = `
    Rect
        represents a rect of two points: (left, top) and (right, bottom)
    `
    function Rect(left, top, right, bottom) {
        var quad = Quad(left, top, right, bottom);
        
        quad.__defineGetter__('width', () =>
        {
            return Quant(quad.right).sub(quad.left);
        });

        quad.__defineGetter__('height', () => {
            return Quant(quad.bottom).sub(quad.top);
        });

        quad.normalize = () => {
            if (quad.left.gt(quad.right)) {
                swap(quad, "left", "right");
            }
            if (quad.top.gt(quad.bottom)) {
                swap(quad, "top", "bottom");
            }
            return quad;
        };

        quad.offset = (x, y) => {
            var t = toObject(["x", "y"], x, y);
            x = Quant(t.x);
            y = Quant(t.y);
            quad.left.add(x);
            quad.right.add(x);
            quad.top.add(y);
            quad.bottom.add(y);
            return quad;
        };

        quad.add = (width, height) => {
            var t = toObject(["width", "height"], width, height);
            if (quad.left.le(quad.right)) quad.right.add(t.width);
            else quad.left.sub(t.width);

            if (quad.top.le(quad.bottom)) quad.bottom.add(t.height);
            else quad.top.sub(t.height);
            return quad;
        }

        quad.extend = (left, top, right, bottom) => {
            var t = toObject(["left", "top", 'right', 'bottom'], left, top, right, bottom);
            if (quad.left.le(quad.right)) {
                quad.left.sub(Quant(t.left));
                quad.right.add(Quant(t.right));
            } else {
                quad.right.sub(Quant(t.left));
                quad.left.add(Quant(t.right));
            }

            if (quad.top.le(quad.bottom)) {
                quad.top.sub(Quant(t.top));
                quad.bottom.add(Quant(t.bottom));
            } else {
                quad.bottom.sub(Quant(t.top));
                quad.top.add(Quant(t.bottom));
            }
            return quad;
        }

        return quad;
    }

    help.Color = `
    Color
        represents a color: (red, green, blue, alpha)
    `
    function Color(red, green, blue, alpha = 1) {
        var _red = 0;
        var _green = 0;
        var _blue = 0;
        var _alpha = 1;

        function GetColorValue(c) {
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

        var rtn = {
            get red() {
                return _red;
            },
            get r() {
                return _red;
            },
            set red(r) {
                _red = GetColorValue(r);
            },
            set r(r) {
                this.red = r;
            },
            get green() {
                return _green;
            },
            get g() {
                return _green;
            },
            set green(g) {
                _green = GetColorValue(g);
            },
            set g(g) {
                this.green = g;
            },
            get blue() {
                return _blue;
            },
            get b() {
                return _blue;
            },
            set blue(b) {
                _blue = GetColorValue(b);
            },
            set b(b) {
                this.blue = b;
            },
            get alpha() {
                return _alpha;
            },
            get a() {
                return _alpha;
            },
            set alpha(a) {
                _alpha = GetColorValue(a > 1 ? 1 : a < 0 ? 0 : a);
            },
            set a(a) {
                this.alpha = a;
            },
            equals(...other) {
                return equalsTo(['red', 'green', 'blue', 'alpha'], {red: _red, green: _green, blue: _blue, alpha: _alpha}, 
                    Color.apply(null, other));
            },
            get hex(){
                return `#${this.r.toString(16).toUpperCase().padStart(2,"0")}${this.g.toString(16).toUpperCase().padStart(2,"0")}${this.b.toString(16).toUpperCase().padStart(2,"0")}`
            },
            get rgb(){
                return `rgb(${this.r}, ${this.g}, ${this.b})`
            },
            get rgba(){
                return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
            },
            get name(){
                return hexColorNames[this.hex];
            },
        }

        if (typeof red == "string") {
            var re = /^\s*#([0-9a-fA-F]{1,8})\s*$/g;
            var rlt = re.exec(red);
            if (rlt && rlt.length == 2) {
                if (rlt[1].length == 1) rlt[1] = "0" + rlt[1];
                if (rlt[1].length == 2) rlt[1] = rlt[1] + rlt[1] + rlt[1];
                else if (rlt[1].length == 3) rlt[1] = rlt[1].split("").map(c => c+c).join("");
                if (rlt[1].length <= 6) {
                    for (; rlt[1].length < 6;) rlt[1] = "0" + rlt[1];
                    for (; rlt[1].length < 8;) rlt[1] = "f" + rlt[1];
                }
                for (; rlt[1].length < 8;) rlt[1] = "0" + rlt[1];

                _alpha = parseInt(rlt[1].substring(0, 2), 16) / 255.0;
                _red = parseInt(rlt[1].substring(2, 4), 16);
                _green = parseInt(rlt[1].substring(4, 6), 16);
                _blue = parseInt(rlt[1].substring(6), 16);
                return rtn;
            } else {
                var re = /^rgba*\((\d{1,3}\.*\d*),\s*(\d{1,3}\.*\d*),\s*(\d{1,3}\.*\d*),*\s*(\d*\.*\d*)\)$/g;
                var rlt = re.exec(red);
                if (rlt && rlt.length == 5) {
                    if(rlt[4] == "") rlt[4] = "1";
                    for (var i = 1; i < 5; i++) {
                        rlt[i] = parseFloat(rlt[i]);
                    }
                    _red = rlt[1];
                    _green = rlt[2];
                    _blue = rlt[3];
                    _alpha = rlt[4];
                    return rtn;
                } else {
                    var clr = namedColors[red.toLowerCase()];
                    if (clr) {
                        _red = clr[0];
                        _green = clr[1];
                        _blue = clr[2];
                        _alpha = 1;
                        return rtn;
                    }
                }
            }
        }

        var t = toNumberObject(["red", "green", "blue", "alpha"], red, green, blue, alpha);

        _red = t.red;
        _green = t.green;
        _blue = t.blue;
        _alpha = t.alpha;
        return rtn;
    }

    help.Lateral = `
    Lateral
        represent style, color and width of a lateral line
    `
    function Lateral(width, style, color) {
        var _style = "none";
        var _width = Quant(0,'px');
        var _color = Color(0, 0, 0, 1);

        function abstractValue(str){
            var ss = str.split(" ");
            ss = ss.filter(v => v != "");
            if (ss.length == 3) {
                for (var s of ss) {
                    if (lineStyles[s]) style = s;
                    else if (namedColors[s.toLowerCase()]) color = s;
                    else if (/^#\d+[0-9A-Fa-f]*$/g.test(s)) color = s;
                    else if (/^[\+|\-]{0,1}\d+\.*\d*[a-zA-Z]*$/g.test(s)) width = s;
                    else if (/^rgba*\(.+\)$/g.test(s)) color = s;
                }
                return true;
            }
            return false;
        }

        var processed = false;
        if (typeof width == "string") {
            processed = abstractValue(width);
        }

        if(!processed) {
            abstractValue(`${width} ${style ? style : ""} ${color ? color : ""}`);
        }

        var t = toObject(['width', 'style', 'color'], width, style, color);
        if (lineStyles[t.style]) _style = t.style;
        _width = Quant(t.width);
        if (t.color) {
            _color = Color(t.color);
        }

        return {
            get style() {
                return _style;
            },
            get width() {
                return _width;
            },
            get color() {
                return _color;
            },
            set style(s) {
                if (lineStyles[s])
                    _style = s;
            },
            set width(width) {
                _width = Quant(width);
            },
            set color(color) {
                _color = Color(color);
            },
            get desc(){
                return `${_width.desc} ${_style} ${_color.name ? _color.name : _color.hex}`;
            },
            equals(width, style, color){
                return equals({width: _width, style: _style, color: _color}, 
                    Lateral(width, style, color), ['width', 'style', 'color']);
            }
        }
    }

    help.Border = `
    Border
        represents four laterals of a rect
    `
    function Border(left, top, right, bottom){
        var _left;
        var _top;
        var _right;
        var _bottom;
         _left = _top = _right = _bottom = Lateral();

        if(!(left instanceof Lateral)) {
            var t = toObject(['left', 'top', 'right', 'bottom'], left, top, right, bottom);
            left = t.left;
            top = t.top;
            right = t.right;
            bottom = t.bottom;
        }

        if(left) _left = Lateral(left);
        if(top) _top = Lateral(top)
        else _top = Lateral(_left);
        if(right) _right = Lateral(right)
        else _right = Lateral(_left);
        if(bottom) _bottom = Lateral(bottom)
        else _bottom = Lateral(_top);

        return {
            get left(){
                return _left;
            },
            get l(){
                return this.left;
            },
            get top(){
                return _top;
            },
            get t(){
                return this.top;
            },
            get right(){
                return _right;
            },
            get r(){
                return this.right;
            },
            get bottom(){
                return _bottom;
            },
            get b(){
                return this.bottom;
            },
            set left(prm){
                _left = Lateral(prm);
            },
            set l(prm){
                this.left = prm;
            },
            set top(prm){
                _top = Lateral(prm);
            },
            set t(prm){
                this.top = prm;
            },
            set right(prm){
                _right = Lateral(prm);
            },
            set r(prm){
                this.right = prm;
            },
            set bottom(prm){
                _bottom = Lateral(prm);
            },
            set b(prm){
                this.bottom = prm;
            },
            get desc(){
                if(_left.equals(_top) && _left.equals(_right) && _left.equals(_bottom)){
                    return _left.desc;
                } else return "";
            },
            equals(...args){
                var t = Border.constructor.apply(null, args);
                return equals({left: _left, top: _top, right: _right, bottom: _bottom}, t, ['left', 'top', 'right', 'bottom']);
            }
        }
    }
    ////////////////////////////////////////////////////////////////////

    help.Page = `
    Page
        represents html
        init: create main wnd attached to body
    `
    function Page() {
        var _idCounter = 1;
        var _unit = "px";
        var _mainWnd = null;
        function newId() {
            var id = _idCounter;
            _idCounter++;
            return id.toString();
        }

        class Page {
            get newId(){
                return newId();
            }
            get valid() {
                return _mainWnd && _mainWnd.wndValid;
            }
            get mainWnd() {
                return _mainWnd;
            }
            get width() {
                return window.innerWidth;
            }
            get height() {
                return window.innerHeight;
            }
            get unit() {
                return _unit;
            }
            set unit(unit) {
                if (typeof unit != 'string') return;
                unit = unit.toLowerCase();
                if (!units[unit]) return;
                this._unit = unit;
            }
            Destroy() {
                _idCounter = 1;
                _mainWnd.Destroy();
                _mainWnd = null;
                _unit = "px"
            }
        }

        var page = new Page();
        page.Page = Page;
        page.Create = Create;

        function Create() {
            if(_mainWnd && _mainWnd.IsValidWnd()) return true;
            document.body.id = newId();
            _mainWnd = Wnd();
            return _mainWnd.Create(page);
        }

        Create();
        return page;
    }

    // base wnd class
    function Wnd(tag = 'div') {
        var _id = "0";
        var _page = null;
        var _parent = null;
        var _children = {};
        var _zorder = [];
        var _tag = tag;

        function GetColor(element, attr) {
            var bc = window.getComputedStyle(element)[attr];
            return Color(bc);
        }
        function SetColor(element, attr, ...args) {
            element.style[attr] = Color.apply(null, args).rgba;
        }

        class Wnd {
            get page() {
                return _page;
            }
            get idValid() {
                return (_id.toString() === _id) && _id > 0;
            }
            get wndValid() {
                return _page != null && this.element != null;
            }
            get id() {
                return _id;
            }
            get element() {
                return document.getElementById(this.id);
            }
            get width() {
                return Quant(window.getComputedStyle(this.element).width);
            }
            get height() {
                return Quant(window.getComputedStyle(this.element).height);
            }
            get rect() {
                var ele = this.element;
                return Rect({ left: ele.clientLeft, top: ele.clientTop, width: ele.clientWidth, height: ele.clientHeight });
            }
            get position() {
                var ele = this.element;
                return Position(ele.clientLeft, ele.clientTop);
            }
            set width(width) {
                var m = Quant(width, this.page.unit);
                this.element.style.width = m.desc;
            }
            set height(height) {
                var m = new Quant(height, this.page.unit);
                this.element.style.height = m.desc;
            }
            get bgdClr() {
                return GetColor(this.element, "backgroundColor")
            }
            get txtClr() {
                return GetColor(this.element, "color");
            }
            set bgdClr(clr) {
                var args = Array.from(arguments);
                args.unshift("backgroundColor");
                args.unshift(this.element);
                SetColor.apply(null, args);
            }
            set txtClr(clr) {
                var args = Array.from(arguments);
                args.unshift("color")
                args.unshift(this.element);
                SetColor.apply(null, args);
            }
            get bdr(){
                var style = this.element.style;
                return Border(style.borderLeft, style.borderTop, style.borderRight, style.borderBottom);
            }
            get bdrLeft(){
                return Lateral(this.element.style.borderLeft);
            }
            get lbdr(){
                return this.bdrLeft;
            }
            get bdrTop(){
                return Lateral(this.element.style.borderTop);
            }
            get tbdr(){
                return this.bdrTop;
            }
            get bdrRight(){
                return Lateral(this.element.style.borderRight);
            }
            get rbdr(){
                return this.bdrRight;
            }
            get bdrBottom(){
                return Lateral(this.element.style.borderBottom);
            }
            get bbdr(){
                return this.bdrBottom;
            }
            set bdr(val){
                var bdr = Border(val);
                var style = this.element.style;
                style.borderLeft = bdr.left.desc;
                style.borderTop = bdr.top.desc;
                style.borderRight = bdr.right.desc;
                style.borderBottom = bdr.bottom.desc;
            }
            set bdrLeft(val){
                this.element.style.borderLeft = Lateral(val).desc;
            }
            set lbdr(val){
                this.bdrLeft = val;
            }
            set bdrTop(val){
                this.element.style.borderTop = Lateral(val).desc;
            }
            set tbdr(val){
                this.bdrTop = val;
            }
            set bdrRight(val){
                this.element.style.borderRight = Lateral(val).desc;
            }
            set rbdr(val){
                this.bdrRight = val;
            }
            set bdrBottom(val){
                this.element.style.borderBottom = Lateral(val).desc;
            }
            set bbdr(val){
                this.bdrBottom = val;
            }
            AddChild(child) {
                if (_children[child.id] != null) {
                    return false;
                }

                child.parent = this;
                _children[child.id] = {
                    wnd: child,
                    zorder: _zorder.push(child.id) - 1
                };
                return true;
            }
            RemoveChild(child) {
                if (_children[child.id] == null) {
                    return true;
                }

                _zorder.splice(_children[child.id].zorder, 1);
                _children[child.id] = null;

                return true;
            }
            SetAttributes(attributes) {
                try {
                    if (typeof attributes != 'object' || !(attributes instanceof Object)) {
                        if (arguments.length > 1) {
                            if(arguments.length % 2 == 0) {
                                var temp = {};
                                for(var i = 0; i < arguments.length; i += 2) {
                                    if(typeof arguments[i] != "string") throw new Error("Odd parameters should be strings");
                                    temp[arguments[i]] = arguments[i + 1];
                                }
                                attributes = temp;
                            } else {
                                throw new Error("Even number of parameters required");
                            }
                        } else {
                            attributes = JSON.parse(attributes);
                            return this.SetAttributes(attributes);
                        }
                    } else if(attributes instanceof Array) {
                        if(attributes.length % 2 == 0) {
                            var temp = {};
                            for(var i = 0; i < attributes.length; i += 2) {
                                if(typeof attributes[i] != "string") throw new Error("Odd parameters should be strings");
                                temp[attributes[i]] = attributes[i + 1];
                            }
                            attributes = temp;
                        } else {
                            throw new Error("Even number of array elements required");
                        }
                    }

                    Object.keys(attributes).forEach(attr => {
                        var setter = this.constructor.prototype.__lookupSetter__(attr);
                        if (setter == undefined) {
                            log(`Attribute "${attr} is not defined in ${this.constructor.name}"`);
                            return;
                        }
                        this[attr] = typeof attributes[attr] == 'function' ? attributes[attr]() : attributes[attr];
                    });
                } catch(e){
                    log(e);
                    return false;
                }
            }
            onSize(event){
                log("I know the size of the view port has been changed");
            }

            // for this base wnd class, create a "div" wnd
            // unless parent is null, in which case set this wnd to html body
            Create(parent) {
                // if parent is null or undefined,
                // set this wnd to html body
                function isPage(){
                    try{
                        return parent instanceof parent.Page;
                    } catch(error){
                        return false;
                    }
                }
                function isWnd(){
                    try{
                        return parent instanceof parent.Wnd;
                    } catch(error){
                        return false;
                    }
                }
                if (isPage()) {
                    _page = parent;
                    _id = document.body.id.toString();
                    _tag = "body";
                    document.body.onresize = this.onSize;
                } else {
                    // this is already a valid wnd, return true
                    if (this.wndValid) return true;
                    if (!isWnd() || !parent.wndValid) return false;

                    _page = parent.page;
                    _id = _page.newId;
                    var thisElement = document.createElement(_tag);
                    thisElement.id = _id;

                    thisElement.style.position = "absolute";
                    thisElement.style.overflowX = "hidden";
                    thisElement.style.overflowY = "hidden";

                    var parentElement = document.getElementById(parent.id);
                    parentElement.appendChild(thisElement);

                    if(!parent.AddChild(this)) return false;
                }

                registerEventListeners(this);
                return true;
            }

            get parent() {
                return _parent;
            }
            set parent(parent){
                if(_parent){
                    _parent.RemoveChild(this);
                }
                _parent = parent;
            }

            Destroy() {
                for (; _zorder.length;) {
                    _children[_zorder[0]].wnd.Destroy();
                }

                if (!_parent) return true;

                if (!_parent.RemoveChild(this)) return false;
                _parent.element.removeChild(this.element);
                return true;
            }

            // set position top coordination
            set top(top){
                let t = Quant(top, this.page.unit);
                this.element.style.top = t.desc;
            }

            // get position top coordination
            get top(){
                return Quant(window.getComputedStyle(this.element).top);
            }

            // set position left coordination
            set left(left){
                let t = Quant(left, this.page.unit);
                this.element.style.left = t.desc;
            }

            // get position left corrdination
            get left(){
                return Quant(window.getComputedStyle(this.element).left);
            }

            get right(){
                return this.left.add(this.width);
            }

            get bottom(){
                return this.top.add(this.height);
            }

            set right(val){
                this.width = Quant(val).sub(this.left);
            }

            set bottom(val){
                this.height = Quant(val).sub(this.left);
            }

            set pos(pos){
                pos = Position(pos);
                this.left = pos.x;
                this.top = pos.y;
            }

            layout(options){
                let left = 0;
                this._children.forEach(child => {
                    child.left = left;
                    child.top = 0;
                    left+=child.width;
                });
            }
            get title() {
                this.element.innerText;
            }
            set title(text) {
                this.element.innerText = text;
            }
        }

        var wnd = new Wnd();
        wnd.Wnd = Wnd;
        return wnd;
    }

    Wnd.CreateNew = (parent, wndFunc = Wnd) => {
        var wnd = wndFunc();
        if(wnd.Create(parent)){
            return wnd;
        } else return null;
    }

    function DropdownGroup(){
        var wnd = Wnd("optgroup");
        wnd.__defineGetter__("label", () => {
            return wnd.element.label;
        });
        wnd.__defineSetter__("label", (label) => {
            wnd.element.label = label;
        });

        var superCreate = wnd.Create;
        wnd.Create = (parent, label) => {
            if(!parent || !(parent instanceof parent.Wnd)) return false;
            if(!superCreate.apply(wnd, [parent])){
                return false;
            }

            wnd.label = label;
            return true;
        }

        return wnd;
    }

    function DropdownItem(){
        var wnd = Wnd("option");
        wnd.__defineGetter__("value", () => {
            return wnd.element.value;
        });
        wnd.__defineSetter__("value", (value) => {
            wnd.element.value = value;
        });
        wnd.__defineGetter__("text", () => {
            return wnd.element.text;
        });
        wnd.__defineSetter__("text", (text) => {
            wnd.element.text = text;
        });
        wnd.__defineGetter__("selected", () => {
            return wnd.element.text;
        });
        wnd.__defineSetter__("selected", (selected) => {
            wnd.element.selected = selected;
        });

        var superCreate = wnd.Create;
        wnd.Create = (parent, text, value, selected) => {
            if(!parent || !(parent instanceof parent.Wnd)) return false;
            if(!superCreate.apply(wnd, [parent])){
                return false;
            }

            var t = toObject(['text', 'value', 'selected'], text, value, selected);
            wnd.text = t.text;
            wnd.value = t.value;
            wnd.selected = selected;
            return true;
        }

        return wnd;
    }

    help.DropDown = `
    Dropdown
    `
    function Dropdown(){
        var wnd = Wnd('select');
        var superCreate = wnd.Create;
        wnd.Create = (parent, items) => {
            if(!superCreate.apply(wnd, [parent])){
                return false;
            }

            wnd.AddItems(items);
            return true;
        }

        function AddItem(parent, item){
            if(item instanceof Array){
                wnd.AddItem(parent, item[0], item[1], item[2]);
            } else if(item instanceof Object){
                wnd.AddItem(parent, item.value, item.text, item.selected);
            } else {
                wnd.AddItem(parent, item);
            } 
        }

        function AddArray(parent, items){
            for(var item of items){
                AddItem(parent, item);
            }
        }

        wnd.AddItems = (items) => {
            if(!items || (typeof items != 'string' && !(items instanceof Object))) return;
            if(typeof items == 'string') return wnd.AddItems(JSON.parse(items));
            if(items instanceof Array){
                AddArray(wnd, items);
            } else {
                Object.keys(items).forEach(key => {
                    item = items[key];
                    if(item instanceof Object){
                        var group = CreateWnd(DropdownGroup, wnd, key);
                        if(item instanceof Array) {
                            AddArray(group, item);
                        } else {
                            Object.keys(item).forEach(subkey => {
                                AddItem(group, item[subkey]);
                            });
                        }
                    } else wnd.AddItem(wnd, key, item)
                });
            }
        }
        wnd.AddGroup = (name) => {
            return CreateWnd(DropdownGroup, wnd, name);
        }
        wnd.AddItem = (parent, ...args) => {
            if(!parent || !parent.Wnd || !(parent instanceof parent.Wnd)) {
                if(parent) args.unshift(parent);
                parent = wnd;
            }
            return CreateWnd(DropdownItem, parent, args)
        }

        return wnd;
    }

    Dropdown.CreateNew = (parent, data) => {
        return CreateWnd(Dropdown, parent, data);
    }

    function CreateWnd(wndClass, parent, ...args){
        var wnd = new wndClass();
        args.unshift(parent);
        if(wnd.Create.apply(wnd, args)){
            return wnd;
        } else {
            return null;
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
        IsNull(t){
            if(t) throw new Error("Should be null");
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
    dui.namedColors = namedColors;
    dui.hexColorNames = hexColorNames;
    dui.lineStyles = lineStyles;
    dui.units = units;

    dui.help = help;
    dui.log = log;
    dui.Assert = Assert;
    dui.test = test;

    dui.toNumber = toNumber;
    dui.swap = swap;
    dui.equals = equals;
    dui.toObject = toObject;
    dui.toNumberObject = toNumberObject;
    dui.equalsTo = equalsTo;
    dui.metric = metric;
    dui.toPixels = toPixels;
    dui.convertUnit = convertUnit;
    dui.metricAdd = metricAdd;

    dui.Quant = Quant;
    dui.Point = Point;
    dui.Position = Position;
    dui.Size = Size;
    dui.Quad = Quad;
    dui.Rect = Rect;
    dui.Color = Color;
    dui.Lateral = Lateral;
    dui.Border = Border;
    dui.Page = Page;
    dui.Wnd = Wnd;
    dui.Dropdown = Dropdown;
    
    dui.createTestWnd = createTestWnd;
    dui.CreateWnd = CreateWnd;

    function test(name, func){
        var assert = new Assert(name);
        func(assert);
        assert.Done();
    }
    
    function createTestWnd(){
        dui.testMainPage = Page();
        dui.testMainWnd = dui.testMainPage.mainWnd;
        dui.testChildWnd = Wnd.CreateNew(dui.testMainWnd, Wnd);
        dui.testChildWnd.width = 300;
        dui.testChildWnd.height = 300;
        dui.testChildWnd.bgdClr = "blue";
    }

    if (!noGlobal) {
        window.dui = dui;
    }

    return dui;
}
