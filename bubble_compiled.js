/* Copyright 2014 Google */
(function () {
    var h, aa = aa || {}, m = this, p = function (a) {
        return void 0 !== a
    }, r = function () {
    }, ba = function (a) {
        a.X = function () {
            return a.xb ? a.xb : a.xb = new a
        }
    }, ca = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }, u = function (a) {
        return "array" == ca(a)
    }, da = function (a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, v = function (a) {
        return "string" == typeof a
    }, w = function (a) {
        return "number" == typeof a
    }, x = function (a) {
        return "function" == ca(a)
    }, ea = function (a) {
        var b =
            typeof a;
        return "object" == b && null != a || "function" == b
    }, fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0, ha = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ia = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, y = function (a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
            ha : ia;
        return y.apply(null, arguments)
    }, z = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, ja = Date.now || function () {
            return +new Date
        }, A = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.l = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Md = function (a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    };
    var B = function (a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, B); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    A(B, Error);
    B.prototype.name = "CustomError";
    var ka;
    var la = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    }, ma = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, va = function (a) {
        if (!oa.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
        -1 != a.indexOf("'") &&
        (a = a.replace(ta, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));
        return a
    }, pa = /&/g, qa = /</g, ra = />/g, sa = /"/g, ta = /'/g, ua = /\x00/g, oa = /[\x00&<>"']/, wa = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }, xa = function (a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }, ya = function (a) {
        var b = v(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var za = function (a, b) {
        b.unshift(a);
        B.call(this, la.apply(null, b));
        b.shift()
    };
    A(za, B);
    za.prototype.name = "AssertionError";
    var Aa = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
        throw new za("" + e, f || []);
    }, D = function (a, b, c) {
        a || Aa("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ba = function (a, b) {
        throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, Ca = function (a, b, c) {
        v(a) || Aa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Da = function (a, b, c) {
        x(a) || Aa("Expected function but got %s: %s.", [ca(a),
            a], b, Array.prototype.slice.call(arguments, 2))
    }, Ea = function (a, b, c) {
        ea(a) || Aa("Expected object but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, Fa = function (a, b, c) {
        ea(a) && 1 == a.nodeType || Aa("Expected Element but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, Ha = function (a, b, c, d) {
        a instanceof b || Aa("Expected instanceof %s but got %s.", [Ga(b), Ga(a)], c, Array.prototype.slice.call(arguments, 3))
    }, Ga = function (a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" :
            a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var Ia = Array.prototype.indexOf ? function (a, b, c) {
        D(null != a.length);
        return Array.prototype.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (v(a))return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, E = Array.prototype.forEach ? function (a, b, c) {
        D(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ja = Array.prototype.filter ? function (a,
                                               b, c) {
        D(null != a.length);
        return Array.prototype.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g = v(a) ? a.split("") : a, k = 0; k < d; k++)if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l)
        }
        return e
    }, Ka = Array.prototype.map ? function (a, b, c) {
        D(null != a.length);
        return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, La = Array.prototype.some ? function (a, b, c) {
        D(null != a.length);
        return Array.prototype.some.call(a,
            b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return !0;
        return !1
    }, Ma = Array.prototype.every ? function (a, b, c) {
        D(null != a.length);
        return Array.prototype.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return !1;
        return !0
    }, Oa = function (a) {
        var b;
        a:{
            b = Na;
            for (var c = a.length, d = v(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : v(a) ? a.charAt(b) :
            a[b]
    }, Pa = function (a, b) {
        return 0 <= Ia(a, b)
    }, Qa = function (a, b) {
        var c = Ia(a, b), d;
        if (d = 0 <= c)D(null != a.length), Array.prototype.splice.call(a, c, 1);
        return d
    }, Ra = function (a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }, Sa = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    };
    var Ta = function (a, b, c) {
        for (var d in a)b.call(c, a[d], d, a)
    }, Ua = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }, Va = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }, Wa = function (a) {
        return null !== a && "withCredentials" in a
    }, Xa = function (a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }, Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Za = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < Ya.length; f++)c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, $a = function (a) {
        var b = arguments.length;
        if (1 == b && u(arguments[0]))return $a.apply(null, arguments[0]);
        if (b % 2)throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
        return c
    };
    var ab = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var cb = function () {
        this.a = "";
        this.b = bb
    };
    cb.prototype.ha = !0;
    cb.prototype.aa = function () {
        return this.a
    };
    cb.prototype.toString = function () {
        return "Const{" + this.a + "}"
    };
    var db = function (a) {
        if (a instanceof cb && a.constructor === cb && a.b === bb)return a.a;
        Ba("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }, bb = {};
    var fb = function () {
        this.a = "";
        this.b = eb
    };
    fb.prototype.ha = !0;
    var eb = {};
    fb.prototype.aa = function () {
        return this.a
    };
    fb.prototype.toString = function () {
        return "SafeStyle{" + this.a + "}"
    };
    var gb = function (a) {
        var b = new fb;
        b.a = a;
        return b
    }, hb = gb(""), ib = /^[-,."'%_!# a-zA-Z0-9]+$/;
    var kb = function () {
        this.a = "";
        this.b = jb
    };
    h = kb.prototype;
    h.ha = !0;
    h.aa = function () {
        return this.a
    };
    h.Ya = !0;
    h.oa = function () {
        return 1
    };
    h.toString = function () {
        return "SafeUrl{" + this.a + "}"
    };
    var lb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, jb = {};
    var nb = function () {
        this.a = mb
    };
    h = nb.prototype;
    h.ha = !0;
    h.aa = function () {
        return ""
    };
    h.Ya = !0;
    h.oa = function () {
        return 1
    };
    h.toString = function () {
        return "TrustedResourceUrl{}"
    };
    var mb = {};
    var pb = function () {
        this.a = "";
        this.c = ob;
        this.b = null
    };
    h = pb.prototype;
    h.Ya = !0;
    h.oa = function () {
        return this.b
    };
    h.ha = !0;
    h.aa = function () {
        return this.a
    };
    h.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };
    var qb = function (a) {
        if (a instanceof pb && a.constructor === pb && a.c === ob)return a.a;
        Ba("expected object of type SafeHtml, got '" + a + "'");
        return "type_error:SafeHtml"
    }, sb = function (a) {
        if (a instanceof pb)return a;
        var b = null;
        a.Ya && (b = a.oa());
        a = va(a.ha ? a.aa() : String(a));
        return rb(a, b)
    }, tb = /^[a-zA-Z0-9-]+$/, ub = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }, vb = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }, wb = function (a) {
        var b =
            0, c = "", d = function (a) {
            u(a) ? E(a, d) : (a = sb(a), c += qb(a), a = a.oa(), 0 == b ? b = a : 0 != a && b != a && (b = null))
        };
        E(arguments, d);
        return rb(c, b)
    }, ob = {}, rb = function (a, b) {
        var c = new pb;
        c.a = a;
        c.b = b;
        return c
    };
    rb("<!DOCTYPE html>", 0);
    var xb = rb("", 0);
    var F = function (a, b) {
        this.x = p(a) ? a : 0;
        this.y = p(b) ? b : 0
    };
    F.prototype.clone = function () {
        return new F(this.x, this.y)
    };
    F.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    };
    var yb = function (a, b) {
        return new F(a.x - b.x, a.y - b.y)
    };
    F.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var zb = function (a, b) {
        this.width = a;
        this.height = b
    };
    zb.prototype.clone = function () {
        return new zb(this.width, this.height)
    };
    zb.prototype.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    zb.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ab;
    a:{
        var Bb = m.navigator;
        if (Bb) {
            var Cb = Bb.userAgent;
            if (Cb) {
                Ab = Cb;
                break a
            }
        }
        Ab = ""
    }
    var G = function (a) {
        return -1 != Ab.indexOf(a)
    };
    var Db = G("Opera") || G("OPR"), H = G("Trident") || G("MSIE"), Eb = G("Edge"), Fb = Eb || H, I = G("Gecko") && !(-1 != Ab.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"), J = -1 != Ab.toLowerCase().indexOf("webkit") && !G("Edge"), Gb = J && G("Mobile"), Hb = G("Macintosh"), Ib = function () {
        var a = Ab;
        if (I)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Eb)return /Edge\/([\d\.]+)/.exec(a);
        if (H)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (J)return /WebKit\/(\S+)/.exec(a)
    }, Jb = function () {
        var a = m.document;
        return a ?
            a.documentMode : void 0
    }, Kb = function () {
        if (Db && m.opera) {
            var a;
            var b = m.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = Ib()) && (a = b ? b[1] : "");
        return H && (b = Jb(), b > parseFloat(a)) ? String(b) : a
    }(), Lb = {}, K = function (a) {
        var b;
        if (!(b = Lb[a])) {
            b = 0;
            for (var c = ma(String(Kb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var n = l.exec(g) || ["", "", ""], t = q.exec(k) || ["", "", ""];
                    if (0 == n[0].length &&
                        0 == t[0].length)break;
                    b = wa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || wa(0 == n[2].length, 0 == t[2].length) || wa(n[2], t[2])
                } while (0 == b)
            }
            b = Lb[a] = 0 <= b
        }
        return b
    }, Mb = m.document, Nb = Mb && H ? Jb() || ("CSS1Compat" == Mb.compatMode ? parseInt(Kb, 10) : 5) : void 0;
    var Ob = !H || 9 <= Nb, Pb = !I && !H || H && 9 <= Nb || I && K("1.9.1"), Qb = H && !K("9");
    var Sb = function (a) {
        return a ? new Rb(M(a)) : ka || (ka = new Rb)
    }, Tb = function (a, b) {
        return v(b) ? a.getElementById(b) : b
    }, Vb = function (a, b) {
        var c = b || document, d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Ub(a, b)[0];
        return d || null
    }, Ub = function (a, b) {
        var c, d, e, f;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a)return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var g = c.getElementsByClassName(a);
            return g
        }
        g =
            c.getElementsByTagName("*");
        if (a) {
            f = {};
            for (d = e = 0; c = g[d]; d++) {
                var k = c.className;
                "function" == typeof k.split && Pa(k.split(/\s+/), a) && (f[e++] = c)
            }
            f.length = e;
            return f
        }
        return g
    }, Xb = function (a, b) {
        Ta(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Wb.hasOwnProperty(d) ? a.setAttribute(Wb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, Wb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }, $b = function (a) {
        var b = Yb(a);
        a = Zb(a);
        return H && K("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }, Yb = function (a) {
        return a.scrollingElement ? a.scrollingElement : J || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }, Zb = function (a) {
        return a.parentWindow || a.defaultView
    }, bc = function (a,
                      b, c, d) {
        function e(c) {
            c && b.appendChild(v(c) ? a.createTextNode(c) : c)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !da(f) || ea(f) && 0 < f.nodeType ? e(f) : E(ac(f) ? Sa(f) : f, e)
        }
    }, cc = function (a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }, dc = function (a, b) {
        if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)b = b.parentNode;
        return b == a
    }, M = function (a) {
        D(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ?
            a : a.ownerDocument || a.document
    }, ec = function (a, b) {
        D(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            for (var c; c = a.firstChild;)a.removeChild(c);
            c = M(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }, fc = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, gc = {IMG: " ", BR: "\n"}, hc = function (a, b) {
        b ?
            a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }, ic = function (a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }, jc = function (a) {
        a = a.tabIndex;
        return w(a) && 0 <= a && 32768 > a
    }, lc = function (a) {
        var b = [];
        kc(a, b, !1);
        return b.join("")
    }, kc = function (a, b, c) {
        if (!(a.nodeName in fc))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in gc)b.push(gc[a.nodeName]); else for (a = a.firstChild; a;)kc(a, b, c), a = a.nextSibling
    }, ac = function (a) {
        if (a &&
            "number" == typeof a.length) {
            if (ea(a))return "function" == typeof a.item || "string" == typeof a.item;
            if (x(a))return "function" == typeof a.item
        }
        return !1
    }, Rb = function (a) {
        this.a = a || m.document || document
    };
    Rb.prototype.j = function (a) {
        return Tb(this.a, a)
    };
    Rb.prototype.b = function (a, b, c) {
        var d = this.a, e = arguments, f = e[0], g = e[1];
        if (!Ob && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', va(g.name), '"');
            if (g.type) {
                f.push(' type="', va(g.type), '"');
                var k = {};
                Za(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (v(g) ? f.className = g : u(g) ? f.className = g.join(" ") : Xb(f, g));
        2 < e.length && bc(d, f, e, 2);
        return f
    };
    var mc = function (a) {
        return "CSS1Compat" == a.a.compatMode
    };
    Rb.prototype.c = function (a, b) {
        bc(M(a), a, arguments, 1)
    };
    Rb.prototype.getChildren = function (a) {
        return Pb && void 0 != a.children ? a.children : Ja(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    Rb.prototype.contains = dc;
    var nc = function (a) {
        nc[" "](a);
        return a
    };
    nc[" "] = r;
    var oc = function (a, b) {
        try {
            return nc(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    var pc = !H || 9 <= Nb, qc = !H || 9 <= Nb, rc = H && !K("9");
    !J || K("528");
    I && K("1.9b") || H && K("8") || Db && K("9.5") || J && K("528");
    I && !K("8") || H && K("9");
    var sc = function () {
        this.v = this.v;
        this.B = this.B
    };
    sc.prototype.v = !1;
    sc.prototype.P = function () {
        this.v || (this.v = !0, this.o())
    };
    var tc = function (a, b) {
        a.v ? b.call(void 0) : (a.B || (a.B = []), a.B.push(p(void 0) ? y(b, void 0) : b))
    };
    sc.prototype.o = function () {
        if (this.B)for (; this.B.length;)this.B.shift()()
    };
    var uc = function (a) {
        a && "function" == typeof a.P && a.P()
    };
    var vc = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.ia = !1;
        this.Db = !0
    };
    vc.prototype.stopPropagation = function () {
        this.ia = !0
    };
    vc.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.Db = !1
    };
    var N = function (a, b) {
        vc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.bb = !1;
        this.W = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var e = a.relatedTarget;
            e ? I && (oc(e, "nodeName") || (e = null)) : "mouseover" ==
            c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            null === d ? (this.offsetX = J || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = J || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button =
                a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.bb = Hb ? a.metaKey : a.ctrlKey;
            this.state = a.state;
            this.W = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    A(N, vc);
    var wc = [1, 4, 2], xc = function (a) {
        return (pc ? 0 == a.W.button : "click" == a.type ? !0 : !!(a.W.button & wc[0])) && !(J && Hb && a.ctrlKey)
    };
    N.prototype.stopPropagation = function () {
        N.l.stopPropagation.call(this);
        this.W.stopPropagation ? this.W.stopPropagation() : this.W.cancelBubble = !0
    };
    N.prototype.preventDefault = function () {
        N.l.preventDefault.call(this);
        var a = this.W;
        if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, rc)try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
        } catch (b) {
        }
    };
    var yc = "closure_listenable_" + (1E6 * Math.random() | 0), zc = function (a) {
        return !(!a || !a[yc])
    }, Ac = 0;
    var Bc = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.Ea = !!d;
        this.Ga = e;
        this.lb = ++Ac;
        this.removed = this.Da = !1
    }, Cc = function (a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Ga = null
    };
    var Dc = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }, Fc = function (a, b, c, d, e, f) {
        var g = b.toString();
        b = a.a[g];
        b || (b = a.a[g] = [], a.b++);
        var k = Ec(b, c, e, f);
        -1 < k ? (a = b[k], d || (a.Da = !1)) : (a = new Bc(c, a.src, g, !!e, f), a.Da = d, b.push(a));
        return a
    };
    Dc.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))return !1;
        var e = this.a[a];
        b = Ec(e, b, c, d);
        return -1 < b ? (Cc(e[b]), D(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var Gc = function (a, b) {
        var c = b.type;
        if (!(c in a.a))return !1;
        var d = Qa(a.a[c], b);
        d && (Cc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    };
    Dc.prototype.removeAll = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.a)if (!a || c == a) {
            for (var d = this.a[c], e = 0; e < d.length; e++)++b, Cc(d[e]);
            delete this.a[c];
            this.b--
        }
        return b
    };
    var Hc = function (a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = Ec(a, c, d, e));
        return -1 < b ? a[b] : null
    }, Ec = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.Ea == !!c && f.Ga == d)return e
        }
        return -1
    };
    var Ic = "closure_lm_" + (1E6 * Math.random() | 0), Jc = {}, Kc = 0, O = function (a, b, c, d, e) {
        if (u(b)) {
            for (var f = 0; f < b.length; f++)O(a, b[f], c, d, e);
            return null
        }
        c = Lc(c);
        return zc(a) ? a.listen(b, c, d, e) : Mc(a, b, c, !1, d, e)
    }, Mc = function (a, b, c, d, e, f) {
        if (!b)throw Error("Invalid event type");
        var g = !!e, k = Nc(a);
        k || (a[Ic] = k = new Dc(a));
        c = Fc(k, b, c, d, e, f);
        if (c.proxy)return c;
        d = Oc();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)a.addEventListener(b.toString(), d, g); else if (a.attachEvent)a.attachEvent(Pc(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
        Kc++;
        return c
    }, Oc = function () {
        var a = Qc, b = qc ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)return c
        };
        return b
    }, Rc = function (a, b, c, d, e) {
        if (u(b))for (var f = 0; f < b.length; f++)Rc(a, b[f], c, d, e); else c = Lc(c), zc(a) ? Fc(a.F, String(b), c, !0, d, e) : Mc(a, b, c, !0, d, e)
    }, Sc = function (a, b, c, d, e) {
        if (u(b))for (var f = 0; f < b.length; f++)Sc(a, b[f], c, d, e); else c = Lc(c), zc(a) ? a.F.remove(String(b), c, d, e) : a && (a = Nc(a)) && (b = Hc(a, b, c, !!d, e)) && Tc(b)
    }, Tc = function (a) {
        if (w(a) || !a || a.removed)return !1;
        var b = a.src;
        if (zc(b))return Gc(b.F, a);
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.Ea) : b.detachEvent && b.detachEvent(Pc(c), d);
        Kc--;
        (c = Nc(b)) ? (Gc(c, a), 0 == c.b && (c.src = null, b[Ic] = null)) : Cc(a);
        return !0
    }, Uc = function (a) {
        if (a)if (zc(a))a.F && a.F.removeAll(void 0); else if (a = Nc(a)) {
            var b = 0, c;
            for (c in a.a)for (var d = a.a[c].concat(), e = 0; e < d.length; ++e)Tc(d[e]) && ++b
        }
    }, Pc = function (a) {
        return a in Jc ? Jc[a] : Jc[a] = "on" + a
    }, Wc = function (a, b, c, d) {
        var e = !0;
        if (a = Nc(a))if (b = a.a[b.toString()])for (b =
                                                         b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.Ea == c && !f.removed && (f = Vc(f, d), e = e && !1 !== f)
        }
        return e
    }, Vc = function (a, b) {
        var c = a.listener, d = a.Ga || a.src;
        a.Da && Tc(a);
        return c.call(d, b)
    }, Qc = function (a, b) {
        if (a.removed)return !0;
        if (!qc) {
            var c;
            if (!(c = b))a:{
                c = ["window", "event"];
                for (var d = m, e; e = c.shift();)if (null != d[e])d = d[e]; else {
                    c = null;
                    break a
                }
                c = d
            }
            e = c;
            c = new N(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a:{
                    var f = !1;
                    if (0 == e.keyCode)try {
                        e.keyCode = -1;
                        break a
                    } catch (l) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue)e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode)e.push(f);
                for (var f = a.type, g = e.length - 1; !c.ia && 0 <= g; g--) {
                    c.currentTarget = e[g];
                    var k = Wc(e[g], f, !0, c), d = d && k
                }
                for (g = 0; !c.ia && g < e.length; g++)c.currentTarget = e[g], k = Wc(e[g], f, !1, c), d = d && k
            }
            return d
        }
        return Vc(a, new N(b, this))
    }, Nc = function (a) {
        a = a[Ic];
        return a instanceof Dc ? a : null
    }, Xc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Lc = function (a) {
        D(a, "Listener can not be null.");
        if (x(a))return a;
        D(a.handleEvent, "An object listener must have handleEvent method.");
        a[Xc] || (a[Xc] = function (b) {
            return a.handleEvent(b)
        });
        return a[Xc]
    };
    var Yc = function (a) {
        if (a.classList)return a.classList;
        a = a.className;
        return v(a) && a.match(/\S+/g) || []
    }, Zc = function (a, b) {
        return a.classList ? a.classList.contains(b) : Pa(Yc(a), b)
    }, $c = function (a, b) {
        a.classList ? a.classList.add(b) : Zc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, ad = function (a, b) {
        if (a.classList)E(b, function (b) {
            $c(a, b)
        }); else {
            var c = {};
            E(Yc(a), function (a) {
                c[a] = !0
            });
            E(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)a.className += 0 < a.className.length ? " " + d : d
        }
    }, bd = function (a, b) {
        a.classList ?
            a.classList.remove(b) : Zc(a, b) && (a.className = Ja(Yc(a), function (a) {
            return a != b
        }).join(" "))
    }, cd = function (a, b) {
        a.classList ? E(b, function (b) {
            bd(a, b)
        }) : a.className = Ja(Yc(a), function (a) {
            return !Pa(b, a)
        }).join(" ")
    };
    var dd, ed = {
        Wb: "activedescendant",
        ac: "atomic",
        bc: "autocomplete",
        dc: "busy",
        gc: "checked",
        lc: "controls",
        nc: "describedby",
        qc: "disabled",
        sc: "dropeffect",
        tc: "expanded",
        uc: "flowto",
        vc: "grabbed",
        zc: "haspopup",
        HIDDEN: "hidden",
        Cc: "invalid",
        Dc: "label",
        Ec: "labelledby",
        Fc: "level",
        Kc: "live",
        Uc: "multiline",
        Vc: "multiselectable",
        Zc: "orientation",
        $c: "owns",
        ad: "posinset",
        cd: "pressed",
        gd: "readonly",
        jd: "relevant",
        kd: "required",
        qd: "selected",
        sd: "setsize",
        ud: "sort",
        Id: "valuemax",
        Jd: "valuemin",
        Kd: "valuenow",
        Ld: "valuetext"
    };
    var fd = {
        Xb: "alert",
        Yb: "alertdialog",
        Zb: "application",
        $b: "article",
        cc: "banner",
        ec: "button",
        fc: "checkbox",
        hc: "columnheader",
        ic: "combobox",
        jc: "complementary",
        kc: "contentinfo",
        mc: "definition",
        oc: "dialog",
        pc: "directory",
        rc: "document",
        FORM: "form",
        wc: "grid",
        xc: "gridcell",
        yc: "group",
        Ac: "heading",
        Bc: "img",
        Gc: "link",
        Hc: "list",
        Ic: "listbox",
        Jc: "listitem",
        Lc: "log",
        Mc: "main",
        Nc: "marquee",
        Oc: "math",
        Pc: "menu",
        Qc: "menubar",
        Rc: "menuitem",
        Sc: "menuitemcheckbox",
        Tc: "menuitemradio",
        Wc: "navigation",
        Xc: "note",
        Yc: "option",
        bd: "presentation",
        dd: "progressbar",
        ed: "radio",
        fd: "radiogroup",
        hd: "region",
        ld: "row",
        md: "rowgroup",
        nd: "rowheader",
        od: "scrollbar",
        pd: "search",
        rd: "separator",
        td: "slider",
        vd: "spinbutton",
        wd: "status",
        xd: "tab",
        yd: "tablist",
        zd: "tabpanel",
        Ad: "textbox",
        Bd: "textinfo",
        Cd: "timer",
        Dd: "toolbar",
        Ed: "tooltip",
        Fd: "tree",
        Gd: "treegrid",
        Hd: "treeitem"
    };
    var gd = function (a, b, c) {
        u(c) && (c = c.join(" "));
        var d;
        D(b, "ARIA attribute cannot be empty.");
        D(Xa(ed, b), "No such ARIA attribute " + b);
        d = "aria-" + b;
        "" === c || void 0 == c ? (dd || (dd = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = dd, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var hd = function (a) {
        sc.call(this);
        this.b = a;
        this.a = {}
    };
    A(hd, sc);
    var id = [];
    hd.prototype.listen = function (a, b, c, d) {
        u(b) || (b && (id[0] = b.toString()), b = id);
        for (var e = 0; e < b.length; e++) {
            var f = O(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f)break;
            this.a[f.lb] = f
        }
        return this
    };
    var jd = function (a, b, c, d, e, f) {
        if (u(c))for (var g = 0; g < c.length; g++)jd(a, b, c[g], d, e, f); else d = d || a.handleEvent, f = f || a.b || a, d = Lc(d), e = !!e, c = zc(b) ? Hc(b.F, String(c), d, e, f) : b ? (b = Nc(b)) ? Hc(b, c, d, e, f) : null : null, c && (Tc(c), delete a.a[c.lb]);
        return a
    };
    hd.prototype.removeAll = function () {
        Ta(this.a, function (a, b) {
            this.a.hasOwnProperty(b) && Tc(a)
        }, this);
        this.a = {}
    };
    hd.prototype.o = function () {
        hd.l.o.call(this);
        this.removeAll()
    };
    hd.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var nd = function (a, b, c, d, e) {
        if (!(H || Eb || J && K("525")))return !0;
        if (Hb && e)return kd(a);
        if (e && !d)return !1;
        w(b) && (b = ld(b));
        if (!c && (17 == b || 18 == b || Hb && 91 == b))return !1;
        if ((J || Eb) && d && c)switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (H && d && b == a)return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(J || Eb)
        }
        return kd(a)
    }, kd = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (J || Eb) && 0 == a)return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }, ld = function (a) {
        if (I)a = od(a); else if (Hb && J)a:switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }, od = function (a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
    var pd = function () {
    }, qd = new pd, rd = ["click", I ? "keypress" : "keydown", "keyup"];
    pd.prototype.listen = function (a, b, c, d, e) {
        var f = function (a) {
            var c = Lc(b), e = a.target, e = ea(e) && 1 == e.nodeType ? a.target.getAttribute("role") || null : null;
            "click" == a.type && xc(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
        };
        f.a = b;
        f.b = d;
        e ? e.listen(a, rd, f, c) : O(a, rd, f, c)
    };
    var P = function () {
        sc.call(this);
        this.F = new Dc(this);
        this.Gb = this;
        this.Ka = null
    };
    A(P, sc);
    P.prototype[yc] = !0;
    P.prototype.La = function (a) {
        this.Ka = a
    };
    P.prototype.addEventListener = function (a, b, c, d) {
        O(this, a, b, c, d)
    };
    P.prototype.removeEventListener = function (a, b, c, d) {
        Sc(this, a, b, c, d)
    };
    var Q = function (a, b) {
        sd(a);
        var c, d = a.Ka;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.Ka)c.push(d), D(1E3 > ++e, "infinite loop")
        }
        var d = a.Gb, e = b, f = e.type || e;
        if (v(e))e = new vc(e, d); else if (e instanceof vc)e.target = e.target || d; else {
            var g = e, e = new vc(f, d);
            Za(e, g)
        }
        var g = !0, k;
        if (c)for (var l = c.length - 1; !e.ia && 0 <= l; l--)k = e.currentTarget = c[l], g = td(k, f, !0, e) && g;
        e.ia || (k = e.currentTarget = d, g = td(k, f, !0, e) && g, e.ia || (g = td(k, f, !1, e) && g));
        if (c)for (l = 0; !e.ia && l < c.length; l++)k = e.currentTarget = c[l], g = td(k, f, !1, e) && g;
        return g
    };
    P.prototype.o = function () {
        P.l.o.call(this);
        this.F && this.F.removeAll(void 0);
        this.Ka = null
    };
    P.prototype.listen = function (a, b, c, d) {
        sd(this);
        return Fc(this.F, String(a), b, !1, c, d)
    };
    var td = function (a, b, c, d) {
        b = a.F.a[String(b)];
        if (!b)return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.removed && g.Ea == c) {
                var k = g.listener, l = g.Ga || g.src;
                g.Da && Gc(a.F, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Db
    }, sd = function (a) {
        D(a.F, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ud = function () {
        P.call(this);
        this.b = 0
    };
    A(ud, P);
    ud.prototype.onStop = function () {
        Q(this, "stop")
    };
    var R = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    R.prototype.clone = function () {
        return new R(this.top, this.right, this.bottom, this.left)
    };
    R.prototype.toString = function () {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    R.prototype.contains = function (a) {
        return this && a ? a instanceof R ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    R.prototype.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var vd = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    vd.prototype.clone = function () {
        return new vd(this.left, this.top, this.width, this.height)
    };
    vd.prototype.toString = function () {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    vd.prototype.contains = function (a) {
        return a instanceof vd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    vd.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var xd = function (a, b, c) {
        if (v(b))(b = wd(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = wd(c, d);
            f && (c.style[f] = e)
        }
    }, yd = {}, wd = function (a, b) {
        var c = yd[b];
        if (!c) {
            var d = xa(b), c = d;
            void 0 === a.style[d] && (d = (J ? "Webkit" : I ? "Moz" : H ? "ms" : Db ? "O" : null) + ya(d), void 0 !== a.style[d] && (c = d));
            yd[b] = c
        }
        return c
    }, zd = function (a, b) {
        var c = M(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }, Ad = function (a, b) {
        return zd(a, b) || (a.currentStyle ?
                a.currentStyle[b] : null) || a.style && a.style[b]
    }, Cd = function (a, b, c) {
        var d;
        b instanceof F ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = Bd(d);
        a.style.top = Bd(b)
    }, Dd = function (a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }, Ed = function (a) {
        if (H && !(8 <= Nb))return a.offsetParent;
        var b = M(a), c = Ad(a, "position"), d = "fixed" ==
            c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)if (11 == a.nodeType && a.host && (a = a.host), c = Ad(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
        return null
    }, Gd = function (a) {
        for (var b = new R(0, Infinity, Infinity, 0), c = Sb(a), d = c.a.body, e = c.a.documentElement, f = Yb(c.a); a = Ed(a);)if (!(H && 0 == a.clientWidth || J && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Ad(a, "overflow")) {
            var g =
                Fd(a), k = new F(a.clientLeft, a.clientTop);
            g.x += k.x;
            g.y += k.y;
            b.top = Math.max(b.top, g.y);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = (Zb(c.a) || window).document;
        c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
        c = new zb(c.clientWidth, c.clientHeight);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left &&
        b.bottom > b.top && b.right > b.left ? b : null
    }, Fd = function (a) {
        var b = M(a);
        Ea(a, "Parameter is required");
        var c = new F(0, 0), d;
        d = b ? M(b) : document;
        var e;
        (e = !H) || (e = 9 <= Nb);
        d = e || mc(Sb(d)) ? d.documentElement : d.body;
        if (a == d)return c;
        a = Dd(a);
        b = Sb(b);
        b = $b(b.a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }, Id = function (a, b) {
        var c = Hd(a), d = Hd(b);
        return new F(c.x - d.x, c.y - d.y)
    }, Jd = function (a) {
        a = Dd(a);
        return new F(a.left, a.top)
    }, Hd = function (a) {
        D(a);
        if (1 == a.nodeType)return Jd(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new F(a.clientX,
            a.clientY)
    }, Bd = function (a) {
        "number" == typeof a && (a = a + "px");
        return a
    }, Ld = function (a) {
        var b = Kd;
        if ("none" != Ad(a, "display"))return b(a);
        var c = a.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }, Kd = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
        return p(b) && !d || !a.getBoundingClientRect ? new zb(b, c) : (a = Dd(a), new zb(a.right - a.left, a.bottom - a.top))
    }, Md = function (a) {
        var b = Fd(a);
        a =
            Ld(a);
        return new vd(b.x, b.y, a.width, a.height)
    }, Nd = function (a, b) {
        a.style.display = b ? "" : "none"
    }, Od = function (a) {
        return "rtl" == Ad(a, "direction")
    }, Pd = I ? "MozUserSelect" : J || Eb ? "WebkitUserSelect" : null, Qd = function (a, b) {
        if (/^\d+px?$/.test(b))return parseInt(b, 10);
        var c = a.style.left, d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }, Rd = function (a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Qd(a, c) : 0
    }, Sd =
    {thin: 2, medium: 4, thick: 6}, Td = function (a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in Sd ? Sd[c] : Qd(a, c)
    };
    var Ud = function (a, b) {
        u(b) || (b = [b]);
        D(0 < b.length, "At least one Css3Property should be specified.");
        var c = Ka(b, function (a) {
            if (v(a))return a;
            Ea(a, "Expected css3 property to be an object.");
            var b = a.Cb + " " + a.duration + "s " + a.timing + " " + a.jb + "s";
            D(a.Cb && w(a.duration) && a.timing && w(a.jb), "Unexpected css3 property value: %s", b);
            return b
        });
        xd(a, "transition", c.join(","))
    }, Vd = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }(function () {
        if (H)return K("10.0");
        var a = document.createElement("DIV"),
            b = J ? "-webkit" : I ? "-moz" : H ? "-ms" : Db ? "-o" : null, c = {transition: "opacity 1s linear"};
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {style: c};
        if (!tb.test("div"))throw Error("Invalid tag name <div>.");
        if ("DIV" in vb)throw Error("Tag name <div> is not allowed for SafeHtml.");
        var c = null, d = "<div";
        if (b)for (var e in b) {
            if (!tb.test(e))throw Error('Invalid attribute name "' + e + '".');
            var f = b[e];
            if (null != f) {
                var g;
                g = e;
                if (f instanceof cb)f = db(f); else if ("style" == g.toLowerCase()) {
                    if (!ea(f))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                    if (!(f instanceof fb)) {
                        var k = "", l = void 0;
                        for (l in f) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(l))throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                            var q = f[l];
                            if (null != q) {
                                if (q instanceof cb)q = db(q), D(!/[{;}]/.test(q), "Value does not allow [{;}]."); else if (ib.test(q)) {
                                    for (var n = !0, t = !0, C = 0; C < q.length; C++) {
                                        var L = q.charAt(C);
                                        "'" == L && t ? n = !n : '"' == L && n && (t = !t)
                                    }
                                    n && t || (Ba("String value requires balanced quotes, got: " + q), q = "zClosurez")
                                } else Ba("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " +
                                    q), q = "zClosurez";
                                k += l + ":" + q + ";"
                            }
                        }
                        k ? (D(!/[<>]/.test(k), "Forbidden characters in style string: " + k), f = gb(k)) : f = hb
                    }
                    k = void 0;
                    f instanceof fb && f.constructor === fb && f.b === eb ? k = f.a : (Ba("expected object of type SafeStyle, got '" + f + "'"), k = "type_error:SafeStyle");
                    f = k
                } else {
                    if (/^on/i.test(g))throw Error('Attribute "' + g + '" requires goog.string.Const value, "' + f + '" given.');
                    if (g.toLowerCase() in ub)if (f instanceof nb)f instanceof nb && f.constructor === nb && f.a === mb ? f = "" : (Ba("expected object of type TrustedResourceUrl, got '" +
                        f + "'"), f = "type_error:TrustedResourceUrl"); else if (f instanceof kb)f instanceof kb && f.constructor === kb && f.b === jb ? f = f.a : (Ba("expected object of type SafeUrl, got '" + f + "'"), f = "type_error:SafeUrl"); else if (v(f))f instanceof kb || (f = f.ha ? f.aa() : String(f), lb.test(f) || (f = "about:invalid#zClosurez"), k = new kb, k.a = f, f = k), f = f.aa(); else throw Error('Attribute "' + g + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                }
                f.ha && (f = f.aa());
                D(v(f) || w(f), "String or number value expected, got " + typeof f + " with value: " + f);
                g = g + '="' + va(String(f)) + '"';
                d = d + (" " + g)
            }
        }
        e = void 0;
        null != e ? u(e) || (e = [e]) : e = [];
        !0 === ab.div ? (D(!e.length, "Void tag <div> does not allow content."), d += ">") : (c = wb(e), d += ">" + qb(c) + "</div>", c = c.oa());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = rb(d, c);
        a.innerHTML = qb(b);
        a = a.firstChild;
        D(a.nodeType == Node.ELEMENT_NODE);
        b = a.style[xa("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[wd(a, "transition")] || "")
    });
    var Wd = function (a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    };
    Wd.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };
    var Xd = function (a, b) {
        a.g(b);
        a.b < a.f && (a.b++, b.next = a.a, a.a = b)
    };
    var Yd = function (a) {
        m.setTimeout(function () {
            throw a;
        }, 0)
    }, Zd, $d = function () {
        var a = m.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = y(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c)this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (p(c.next)) {
                    c = c.next;
                    var a = c.fb;
                    c.fb = null;
                    a()
                }
            };
            return function (a) {
                d.next = {fb: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
            function (a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function () {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function (a) {
            m.setTimeout(a, 0)
        }
    };
    var ae = function () {
        this.b = this.a = null
    }, ce = new Wd(function () {
        return new be
    }, function (a) {
        a.reset()
    }, 100);
    ae.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var be = function () {
        this.next = this.b = this.a = null
    };
    be.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    be.prototype.reset = function () {
        this.next = this.b = this.a = null
    };
    var he = function (a, b) {
        de || ee();
        fe || (de(), fe = !0);
        var c = ge, d = ce.get();
        d.set(a, b);
        c.b ? c.b.next = d : (D(!c.a), c.a = d);
        c.b = d
    }, de, ee = function () {
        if (m.Promise && m.Promise.resolve) {
            var a = m.Promise.resolve(void 0);
            de = function () {
                a.then(ie)
            }
        } else de = function () {
            var a = ie;
            !x(m.setImmediate) || m.Window && m.Window.prototype && !G("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (Zd || (Zd = $d()), Zd(a)) : m.setImmediate(a)
        }
    }, fe = !1, ge = new ae, ie = function () {
        for (var a = null; a = ge.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Yd(b)
            }
            Xd(ce,
                a)
        }
        fe = !1
    };
    var je = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, ke = function (a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var ne = function (a, b) {
        this.a = 0;
        this.i = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != r)try {
            var c = this;
            a.call(b, function (a) {
                le(c, 2, a)
            }, function (a) {
                if (!(a instanceof me))try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (b) {
                }
                le(c, 3, a)
            })
        } catch (d) {
            le(this, 3, d)
        }
    }, oe = function () {
        this.next = this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    oe.prototype.reset = function () {
        this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    var pe = new Wd(function () {
        return new oe
    }, function (a) {
        a.reset()
    }, 100), qe = function (a, b, c) {
        var d = pe.get();
        d.b = a;
        d.c = b;
        d.f = c;
        return d
    };
    ne.prototype.then = function (a, b, c) {
        null != a && Da(a, "opt_onFulfilled should be a function.");
        null != b && Da(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return re(this, x(a) ? a : null, x(b) ? b : null, c)
    };
    je(ne);
    ne.prototype.cancel = function (a) {
        0 == this.a && he(function () {
            var b = new me(a);
            se(this, b)
        }, this)
    };
    var se = function (a, b) {
        if (0 == a.a)if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g);
                e && (0 == c.a && 1 == d ? se(c, b) : (f ? (d = f, D(c.b), D(null != d), d.next == c.f && (c.f = d), d.next = d.next.next) : te(c), ue(c, e, 3, b)))
            }
            a.c = null
        } else le(a, 3, b)
    }, we = function (a, b) {
        a.b || 2 != a.a && 3 != a.a || ve(a);
        D(null != b.b);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }, re = function (a, b, c, d) {
        var e = qe(null, null, null);
        e.a = new ne(function (a, g) {
            e.b = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (q) {
                    g(q)
                }
            } :
                a;
            e.c = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !p(e) && b instanceof me ? g(b) : a(e)
                } catch (q) {
                    g(q)
                }
            } : g
        });
        e.a.c = a;
        we(a, e);
        return e.a
    };
    ne.prototype.v = function (a) {
        D(1 == this.a);
        this.a = 0;
        le(this, 2, a)
    };
    ne.prototype.B = function (a) {
        D(1 == this.a);
        this.a = 0;
        le(this, 3, a)
    };
    var le = function (a, b, c) {
        if (0 == a.a) {
            a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            var d;
            a:{
                var e = c, f = a.v, g = a.B;
                if (e instanceof ne)null != f && Da(f, "opt_onFulfilled should be a function."), null != g && Da(g, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), we(e, qe(f || r, g || null, a)), d = !0; else if (ke(e))e.then(f, g, a), d = !0; else {
                    if (ea(e))try {
                        var k = e.then;
                        if (x(k)) {
                            xe(e, k, f, g, a);
                            d = !0;
                            break a
                        }
                    } catch (l) {
                        g.call(a, l);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d ||
            (a.i = c, a.a = b, a.c = null, ve(a), 3 != b || c instanceof me || ye(a, c))
        }
    }, xe = function (a, b, c, d, e) {
        var f = !1, g = function (a) {
            f || (f = !0, c.call(e, a))
        }, k = function (a) {
            f || (f = !0, d.call(e, a))
        };
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    }, ve = function (a) {
        a.h || (a.h = !0, he(a.m, a))
    }, te = function (a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        null != b && D(null != b.b);
        return b
    };
    ne.prototype.m = function () {
        for (var a = null; a = te(this);)ue(this, a, this.a, this.i);
        this.h = !1
    };
    var ue = function (a, b, c, d) {
        if (3 == c && b.c && !b.g)for (; a && a.g; a = a.c)a.g = !1;
        if (b.a)b.a.c = null, ze(b, c, d); else try {
            b.g ? b.b.call(b.f) : ze(b, c, d)
        } catch (e) {
            Ae.call(null, e)
        }
        Xd(pe, b)
    }, ze = function (a, b, c) {
        2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
    }, ye = function (a, b) {
        a.g = !0;
        he(function () {
            a.g && Ae.call(null, b)
        })
    }, Ae = Yd, me = function (a) {
        B.call(this, a)
    };
    A(me, B);
    me.prototype.name = "cancel";
    var Be = function (a, b, c) {
        if (x(a))c && (a = y(a, c)); else if (a && "function" == typeof a.handleEvent)a = y(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    };
    var Ce = function (a, b, c, d, e) {
        ud.call(this);
        this.a = a;
        this.h = b;
        this.i = c;
        this.f = d;
        this.s = u(e) ? e : [e]
    };
    A(Ce, ud);
    var De = function (a) {
        1 != a.b && (Q(a, "begin"), Q(a, "play"), ja(), a.b = 1, Vd() ? (xd(a.a, a.i), a.g = Be(a.m, void 0, a)) : a.c(!1))
    };
    Ce.prototype.m = function () {
        Ld(this.a);
        Ud(this.a, this.s);
        xd(this.a, this.f);
        this.g = Be(y(this.c, this, !1), 1E3 * this.h)
    };
    Ce.prototype.stop = function () {
        1 == this.b && this.c(!0)
    };
    Ce.prototype.c = function (a) {
        xd(this.a, "transition", "");
        m.clearTimeout(this.g);
        xd(this.a, this.f);
        ja();
        this.b = 0;
        if (a)this.onStop(); else Q(this, "finish");
        Q(this, "end")
    };
    Ce.prototype.o = function () {
        this.stop();
        Ce.l.o.call(this)
    };
    var Ee = function (a, b, c, d) {
        return new Ce(a, .218, {opacity: c}, {opacity: d}, {Cb: "opacity", duration: .218, timing: b, jb: 0})
    };
    var Fe = {Od: !0}, Ge = {Nd: !0}, He = {Pd: !0}, Ie = function () {
        throw Error("Do not instantiate directly");
    };
    Ie.prototype.na = null;
    Ie.prototype.$ = function () {
        return this.content
    };
    Ie.prototype.toString = function () {
        return this.content
    };
    var Je = function () {
        Ie.call(this)
    };
    A(Je, Ie);
    var Ne = function (a, b, c) {
        D(a, "Soy template may not be null.");
        a:if (a = a(b || Ke, void 0, void 0), c = (c || Sb()).a.createElement("DIV"), a = Le(a), b = a.match(Me), D(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a), c.innerHTML = a, 1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType)) {
            c = a;
            break a
        }
        return c
    }, Le = function (a) {
        if (!ea(a))return String(a);
        if (a instanceof Ie) {
            if (a.U === Fe)return Ca(a.$());
            if (a.U === He)return va(a.$())
        }
        Ba("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }, Me = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i, Ke = {};
    var Oe = function () {
    };
    ba(Oe);
    Oe.prototype.a = 0;
    var S = function (a) {
        P.call(this);
        this.f = a || Sb();
        this.ma = Pe;
        this.G = null;
        this.H = !1;
        this.a = null;
        this.i = void 0;
        this.m = this.L = this.g = null;
        this.Ca = !1
    };
    A(S, P);
    S.prototype.Ib = Oe.X();
    var Pe = null, Qe = function (a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }, Re = function (a, b) {
        if (a.g && a.g.m) {
            var c = a.g.m, d = a.G;
            d in c && delete c[d];
            c = a.g.m;
            if (null !== c && b in c)throw Error('The object already contains the key "' + b + '"');
            c[b] = a
        }
        a.G = b
    };
    S.prototype.j = function () {
        return this.a
    };
    var Se = function (a) {
        a = a.a;
        D(a, "Can not call getElementStrict before rendering/decorating.");
        return a
    }, Te = function (a) {
        a.i || (a.i = new hd(a));
        return a.i
    };
    S.prototype.La = function (a) {
        if (this.g && this.g != a)throw Error("Method not supported");
        S.l.La.call(this, a)
    };
    S.prototype.Ra = function () {
        this.a = this.f.a.createElement("DIV")
    };
    var Ue = function (a, b) {
        if (a.H)throw Error("Component already rendered");
        a.a || a.Ra();
        b ? b.insertBefore(a.a, null) : a.f.a.body.appendChild(a.a);
        a.g && !a.g.H || a.V()
    }, Ve = function (a, b) {
        if (a.H)throw Error("Component already rendered");
        if (b && a.nb(b)) {
            a.Ca = !0;
            var c = M(b);
            a.f && a.f.a == c || (a.f = Sb(b));
            a.hb(b);
            a.V()
        } else throw Error("Invalid element to decorate");
    };
    h = S.prototype;
    h.nb = function () {
        return !0
    };
    h.hb = function (a) {
        this.a = a
    };
    h.V = function () {
        this.H = !0;
        We(this, function (a) {
            !a.H && a.j() && a.V()
        })
    };
    h.sa = function () {
        We(this, function (a) {
            a.H && a.sa()
        });
        this.i && this.i.removeAll();
        this.H = !1
    };
    h.o = function () {
        this.H && this.sa();
        this.i && (this.i.P(), delete this.i);
        We(this, function (a) {
            a.P()
        });
        !this.Ca && this.a && cc(this.a);
        this.g = this.a = this.m = this.L = null;
        S.l.o.call(this)
    };
    h.Sa = function () {
        return this.a
    };
    var We = function (a, b) {
        a.L && E(a.L, b, void 0)
    };
    S.prototype.removeChild = function (a, b) {
        if (a) {
            var c = v(a) ? a : a.G || (a.G = ":" + (a.Ib.a++).toString(36)), d;
            this.m && c ? (d = this.m, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.m;
                c in d && delete d[c];
                Qa(this.L, a);
                b && (a.sa(), a.a && cc(a.a));
                c = a;
                if (null == c)throw Error("Unable to set parent component");
                c.g = null;
                S.l.La.call(c, null)
            }
        }
        if (!a)throw Error("Child is not in parent component");
        return a
    };
    var Xe = function (a, b) {
        return (b & 4 && Od(a) ? b ^ 2 : b) & -5
    };
    var Ze = function (a, b) {
        P.call(this);
        this.a = new hd(this);
        var c = a || null;
        Ye(this);
        this.D = c;
        b && (this.qa = b)
    };
    A(Ze, P);
    h = Ze.prototype;
    h.D = null;
    h.eb = null;
    h.Z = !1;
    h.$a = -1;
    h.qa = "toggle_display";
    h.j = function () {
        return this.D
    };
    var Ye = function (a) {
        if (a.Z)throw Error("Can not change this state of the popup while showing.");
    };
    Ze.prototype.b = r;
    var $e = function (a, b) {
        a.Z && Q(a, {
            type: "beforehide",
            target: b
        }) && (a.a && a.a.removeAll(), a.Z = !1, ja(), a.c ? (Rc(a.c, "end", z(a.gb, b), !1, a), De(a.c)) : a.gb(b))
    };
    h = Ze.prototype;
    h.gb = function (a) {
        "toggle_display" == this.qa ? this.Pb() : "move_offscreen" == this.qa && (this.D.style.top = "-10000px");
        Q(this, {type: "hide", target: a})
    };
    h.Pb = function () {
        this.D.style.visibility = "hidden";
        Nd(this.D, !1)
    };
    h.Bb = function () {
        Q(this, "show")
    };
    h.Ab = function (a) {
        a = a.target;
        dc(this.D, a) || af(this, a) || 150 > ja() - this.$a || $e(this, a)
    };
    h.zb = function (a) {
        var b = M(this.D);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || dc(this.D, a) || "BODY" == a.tagName)return
        } else if (a.target != b)return;
        150 > ja() - this.$a || $e(this)
    };
    var af = function (a, b) {
        return La(a.eb || [], function (a) {
            return b === a || dc(a, b)
        })
    };
    Ze.prototype.o = function () {
        Ze.l.o.call(this);
        this.a.P();
        uc(this.f);
        uc(this.c);
        delete this.D;
        delete this.a;
        delete this.eb
    };
    var bf = function (a, b) {
        this.g = b || void 0;
        Ze.call(this, a)
    };
    A(bf, Ze);
    bf.prototype.b = function () {
        if (this.g) {
            var a = !this.Z && "move_offscreen" != this.qa, b = this.j();
            a && (b.style.visibility = "hidden", Nd(b, !0));
            this.g.mb(b, 4, this.h);
            a && Nd(b, !1)
        }
    };
    var cf = function () {
    };
    cf.prototype.mb = function () {
    };
    var df = function (a, b) {
        this.c = a;
        this.h = !!b;
        this.f = {0: this.c + "-arrowright", 1: this.c + "-arrowup", 2: this.c + "-arrowdown", 3: this.c + "-arrowleft"}
    };
    A(df, cf);
    h = df.prototype;
    h.Na = 2;
    h.cb = 20;
    h.Oa = 3;
    h.ab = -5;
    h.mb = function (a, b, c) {
        D(this.g, "Must call setElements first.");
        b = this.Na;
        2 == b && (b = 0);
        a = this.Oa;
        var d = 2 == this.Na ? ef(this.Oa) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.cb;
        if (this.b) {
            var e = ff(a, b), f, g = this.b;
            f = Ld(g);
            f = (ef(a) ? f.height / 2 : f.width / 2) - d;
            var k = Xe(g, e), l;
            if (l = Gd(g))g = Md(g), g = new R(g.top, g.left + g.width, g.top + g.height, g.left), ef(a) ? g.top < l.top && !(k & 1) ? f -= l.top - g.top : g.bottom > l.bottom && k & 1 && (f -= g.bottom - l.bottom) : g.left < l.left && !(k & 2) ? f -= l.left - g.left : g.right > l.right && k & 2 && (f -= g.right - l.right);
            k = ef(a) ? new F(this.ab, f) : new F(f, this.ab);
            f = a ^ 3;
            ef(a) && "rtl" == this.b.dir && (f = a);
            l = this.b;
            g = ff(f, b);
            f = this.a;
            D(f);
            var q, n = f.offsetParent;
            if (n) {
                var t = "HTML" == n.tagName || "BODY" == n.tagName;
                t && "static" == Ad(n, "position") || (q = Fd(n), t || (t = (t = Od(n)) && I ? -n.scrollLeft : !t || Fb && K("8") || "visible" == Ad(n, "overflowX") ? n.scrollLeft : n.scrollWidth - n.clientWidth - n.scrollLeft, q = yb(q, new F(t, n.scrollTop))))
            }
            q = q || new F;
            n = Md(l);
            if (t = Gd(l)) {
                var C = new vd(t.left, t.top, t.right - t.left, t.bottom - t.top), t = Math.max(n.left, C.left),
                    L = Math.min(n.left + n.width, C.left + C.width);
                if (t <= L) {
                    var na = Math.max(n.top, C.top), C = Math.min(n.top + n.height, C.top + C.height);
                    na <= C && (n.left = t, n.top = na, n.width = L - t, n.height = C - na)
                }
            }
            t = Sb(l);
            na = Sb(f);
            if (t.a != na.a) {
                L = t.a.body;
                var na = Zb(na.a), C = new F(0, 0), T;
                T = (T = M(L)) ? Zb(T) : window;
                if (oc(T, "parent")) {
                    var md = L;
                    do {
                        var xf = T == na ? Fd(md) : Jd(D(md));
                        C.x += xf.x;
                        C.y += xf.y
                    } while (T && T != na && T != T.parent && (md = T.frameElement) && (T = T.parent))
                }
                L = yb(C, Fd(L));
                !H || 9 <= Nb || mc(t) || (L = yb(L, $b(t.a)));
                n.left += L.x;
                n.top += L.y
            }
            l = Xe(l, g);
            g = new F(l & 2 ? n.left + n.width : n.left, l & 1 ? n.top + n.height : n.top);
            g = yb(g, q);
            k && (g.x += (l & 2 ? -1 : 1) * k.x, g.y += (l & 1 ? -1 : 1) * k.y);
            l = g.clone();
            k = Xe(f, e);
            e = Ld(f);
            g = e.clone();
            l = l.clone();
            g = g.clone();
            if (c || 0 != k)k & 2 ? l.x -= g.width + (c ? c.right : 0) : c && (l.x += c.left), k & 1 ? l.y -= g.height + (c ? c.bottom : 0) : c && (l.y += c.top);
            c = new vd(0, 0, 0, 0);
            c.left = l.x;
            c.top = l.y;
            c.width = g.width;
            c.height = g.height;
            Cd(f, new F(c.left, c.top));
            g = new zb(c.width, c.height);
            e == g || e && g && e.width == g.width && e.height == g.height || (c = g, e = M(f), k = mc(Sb(e)), !H || K("10") ||
            k && K("8") ? (f = f.style, I ? f.MozBoxSizing = "border-box" : J ? f.WebkitBoxSizing = "border-box" : f.boxSizing = "border-box", f.width = Math.max(c.width, 0) + "px", f.height = Math.max(c.height, 0) + "px") : (e = f.style, k ? (H ? (k = Rd(f, "paddingLeft"), l = Rd(f, "paddingRight"), g = Rd(f, "paddingTop"), q = Rd(f, "paddingBottom"), k = new R(g, l, q, k)) : (k = zd(f, "paddingLeft"), l = zd(f, "paddingRight"), g = zd(f, "paddingTop"), q = zd(f, "paddingBottom"), k = new R(parseFloat(g), parseFloat(l), parseFloat(q), parseFloat(k))), !H || 9 <= Nb ? (l = zd(f, "borderLeftWidth"), g = zd(f,
                "borderRightWidth"), q = zd(f, "borderTopWidth"), f = zd(f, "borderBottomWidth"), f = new R(parseFloat(q), parseFloat(g), parseFloat(f), parseFloat(l))) : (l = Td(f, "borderLeft"), g = Td(f, "borderRight"), q = Td(f, "borderTop"), f = Td(f, "borderBottom"), f = new R(q, g, f, l)), e.pixelWidth = c.width - f.left - k.left - k.right - f.right, e.pixelHeight = c.height - f.top - k.top - k.bottom - f.bottom) : (e.pixelWidth = c.width, e.pixelHeight = c.height)));
            this.h && (f = parseFloat(this.a.style.left), c = parseFloat(this.a.style.top), D(!isNaN(f) && !isNaN(c), "Could not parse position."),
            isFinite(f) && 0 == f % 1 && isFinite(c) && 0 == c % 1 || Cd(this.a, Math.round(f), Math.round(c)))
        }
        gf(this, a, b, d)
    };
    var gf = function (a, b, c, d) {
        var e = a.g;
        Ta(a.f, function (a) {
            bd(e, a)
        }, a);
        $c(e, a.f[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.b ? (c = Id(a.b, a.a), d = hf(a.b, b), ef(b) ? e.style.top = jf(c.y + d.y, a.a.offsetHeight - 15) + "px" : e.style.left = jf(c.x + d.x, a.a.offsetWidth - 15) + "px") : e.style[0 == c ? ef(b) ? "top" : "left" : ef(b) ? "bottom" : "right"] = d + "px"
    }, jf = function (a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    }, ff = function (a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 3;
            case 1:
                return 0 == b ? 0 : 2;
            case 0:
                return 0 == b ? 6 : 7;
            default:
                return 0 ==
                b ? 4 : 5
        }
    }, hf = function (a, b) {
        var c = 0, d = 0, e = Ld(a);
        switch (b) {
            case 2:
                c = e.width / 2;
                break;
            case 1:
                c = e.width / 2;
                d = e.height;
                break;
            case 0:
                d = e.height / 2;
                break;
            case 3:
                c = e.width, d = e.height / 2
        }
        return new F(c, d)
    }, ef = function (a) {
        return 0 == a || 3 == a
    };
    var kf = "StopIteration" in m ? m.StopIteration : {message: "StopIteration", stack: ""}, lf = function () {
    };
    lf.prototype.next = function () {
        throw kf;
    };
    lf.prototype.Jb = function () {
        return this
    };
    var mf = function (a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof mf ? (c = a.Y(), d = a.J()) : (c = Va(a), d = Ua(a));
            for (var e = 0; e < c.length; e++)this.set(c[e], d[e])
        }
    };
    mf.prototype.J = function () {
        nf(this);
        for (var a = [], b = 0; b < this.a.length; b++)a.push(this.b[this.a[b]]);
        return a
    };
    mf.prototype.Y = function () {
        nf(this);
        return this.a.concat()
    };
    mf.prototype.remove = function (a) {
        return of(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && nf(this), !0) : !1
    };
    var nf = function (a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                of(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;)d = a.a[b], of(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    h = mf.prototype;
    h.get = function (a, b) {
        return of(this.b, a) ? this.b[a] : b
    };
    h.set = function (a, b) {
        of(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    h.forEach = function (a, b) {
        for (var c = this.Y(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function () {
        return new mf(this)
    };
    h.Jb = function (a) {
        nf(this);
        var b = 0, c = this.f, d = this, e = new lf;
        e.next = function () {
            if (c != d.f)throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)throw kf;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var of = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var pf = function (a) {
        if (a.J && "function" == typeof a.J)return a.J();
        if (v(a))return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return Ua(a)
    }, qf = function (a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)a.forEach(b, c); else if (da(a) || v(a))E(a, b, c); else {
            var d;
            if (a.Y && "function" == typeof a.Y)d = a.Y(); else if (a.J && "function" == typeof a.J)d = void 0; else if (da(a) || v(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)d.push(f)
            } else d = Va(a);
            for (var e = pf(a), f = e.length, g = 0; g < f; g++)b.call(c,
                e[g], d && d[g], a)
        }
    };
    H && K(8);
    var rf = function (a) {
        if (null != a)switch (a.na) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }, sf = function () {
        Ie.call(this)
    };
    A(sf, Ie);
    sf.prototype.U = Fe;
    var uf = function (a) {
        return null != a && a.U === Fe ? (D(a.constructor === sf), a) : a instanceof pb ? tf(qb(a), a.oa()) : tf(va(String(String(a))), rf(a))
    }, vf = function () {
        Ie.call(this)
    };
    A(vf, Ie);
    vf.prototype.U = Ge;
    vf.prototype.na = 1;
    var wf = function (a, b) {
        this.content = String(a);
        this.na = null != b ? b : null
    };
    A(wf, Je);
    wf.prototype.U = He;
    var tf = function (a) {
        function b(a) {
            this.content = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.na = d);
            return e
        }
    }(sf);
    (function (a) {
        function b(a) {
            this.content = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            var e = String(a);
            if (!e)return "";
            e = new b(e);
            void 0 !== d && (e.na = d);
            return e
        }
    })(sf);
    var Cf = function (a) {
            return null != a && a.U === Fe ? (D(a.constructor === sf), a = String(a.$()).replace(yf, "").replace(zf, "&lt;"), String(a).replace(Af, Bf)) : va(String(a))
        }, Df = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        }, Bf = function (a) {
            return Df[a]
        }, Af = /[\x00\x22\x27\x3c\x3e]/g, Ef = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        yf = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, zf = /</g;
    var Ff = function (a) {
        var b = '<div class="jfk-bubble" role="alertdialog"' + (a.uid ? ' aria-describedby="' + Cf(a.uid) + '"' : "") + '><div class="jfk-bubble-content-id"' + (a.uid ? ' id="' + Cf(a.uid) + '"' : "") + "></div>";
        a.Qb && (a = b, b = "Close".replace(Af, Bf), b = a + ('<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="' + b + '" role="button" tabindex=0></div>'));
        return tf(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
    };
    Ff.a = "jfk.templates.bubble.main";
    var Gf = function (a) {
        S.call(this, a);
        this.s = new df("jfk-bubble", !0);
        this.c = new bf;
        this.M = []
    };
    A(Gf, S);
    Gf.prototype.O = !1;
    var Hf = function (a, b) {
        var c = a.Sa();
        if (b && c)if (v(b)) {
            var d;
            d = rb(b, null);
            c.innerHTML = qb(d)
        } else if (b instanceof sf) {
            if (b.U === He)d = sb(b.toString()); else {
                if (b.U !== Fe)throw Error("Sanitized content was not of kind TEXT or HTML.");
                var e = new cb;
                e.a = "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.";
                d = b.toString();
                var f = b.na;
                Ca(db(e), "must provide justification");
                e = db(e);
                D(!/^[\s\xa0]*$/.test(e), "must provide non-empty justification");
                d = rb(d, f || null)
            }
            c.innerHTML = qb(d)
        } else b instanceof
        pb ? c.innerHTML = qb(b) : (c.innerHTML = qb(xb), c.appendChild(b))
    };
    h = Gf.prototype;
    h.Sa = function () {
        return this.a ? Vb("jfk-bubble-content-id", this.a || this.f.a) : null
    };
    h.Ra = function () {
        this.a = Ne(Ff, {Qb: !0, uid: "bubble-" + (this[fa] || (this[fa] = ++ga))}, this.f);
        Hf(this, this.T);
        Nd(this.j(), !1);
        var a = this.c, b = this.j();
        Ye(a);
        a.D = b;
        if (!Gb) {
            var a = this.c, b = Ee(this.j(), "ease-out", 0, 1), c = Ee(this.j(), "ease-in", 1, 0);
            a.f = b;
            a.c = c
        }
        ad(this.j(), this.M)
    };
    h.V = function () {
        Gf.l.V.call(this);
        Te(this).listen(this.c, ["beforeshow", "show", "beforehide", "hide"], this.Ob);
        var a = Te(this), b = this.a ? Vb("jfk-bubble-closebtn-id", this.a || this.f.a) : null;
        qd.listen(b, z(this.yb, !1), void 0, a.b || a, a);
        a = this.j();
        D(a, "getElement() returns null.");
        b = this.a ? Vb("jfk-bubble-arrow-id", this.a || this.f.a) : null;
        D(b, "No arrow element is found!");
        var c = this.s;
        c.a = a;
        c.g = b;
        a = this.c;
        a.g = this.s || void 0;
        a.Z && a.b()
    };
    h.yb = function (a) {
        var b = this.c;
        b.f && b.f.stop();
        b.c && b.c.stop();
        if (a) {
            if (!b.Z && Q(b, "beforeshow")) {
                if (!b.D)throw Error("Caller must call setElement before trying to show the popup");
                b.b();
                a = M(b.D);
                b.a.listen(a, "mousedown", b.Ab, !0);
                if (H) {
                    var c;
                    try {
                        c = a.activeElement
                    } catch (e) {
                    }
                    for (; c && "IFRAME" == c.nodeName;) {
                        try {
                            var d = c.contentDocument || c.contentWindow.document
                        } catch (e) {
                            break
                        }
                        a = d;
                        c = a.activeElement
                    }
                    b.a.listen(a, "mousedown", b.Ab, !0);
                    b.a.listen(a, "deactivate", b.zb)
                } else b.a.listen(a, "blur", b.zb);
                "toggle_display" ==
                b.qa ? (b.D.style.visibility = "visible", Nd(b.D, !0)) : "move_offscreen" == b.qa && b.b();
                b.Z = !0;
                b.$a = ja();
                b.f ? (Rc(b.f, "end", b.Bb, !1, b), De(b.f)) : b.Bb()
            }
        } else $e(b)
    };
    h.o = function () {
        this.c.P();
        delete this.c;
        Gf.l.o.call(this)
    };
    h.vb = function () {
        Hd(this.j());
        return !1
    };
    h.Ob = function (a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = Te(this), c = this.f, c = H ? Zb(c.a) : c.a;
            "show" == a.type ? b.listen(c, "scroll", this.vb) : jd(b, c, "scroll", this.vb)
        }
        b = Q(this, a.type);
        this.O && "hide" == a.type && this.P();
        return b
    };
    var If = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Jf = function (a, b) {
        if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    };
    var Kf = function (a, b) {
        this.f = this.m = this.c = "";
        this.i = null;
        this.g = this.h = "";
        this.a = !1;
        var c;
        a instanceof Kf ? (this.a = p(b) ? b : a.a, Lf(this, a.c), this.m = a.m, this.f = a.f, Mf(this, a.i), this.h = a.h, Nf(this, a.b.clone()), this.g = a.g) : a && (c = String(a).match(If)) ? (this.a = !!b, Lf(this, c[1] || "", !0), this.m = Of(c[2] || ""), this.f = Of(c[3] || "", !0), Mf(this, c[4]), this.h = Of(c[5] || "", !0), Nf(this, c[6] || "", !0), this.g = Of(c[7] || "")) : (this.a = !!b, this.b = new U(null, 0, this.a))
    };
    Kf.prototype.toString = function () {
        var a = [], b = this.c;
        b && a.push(Pf(b, Qf, !0), ":");
        var c = this.f;
        if (c || "file" == b)a.push("//"), (b = this.m) && a.push(Pf(b, Qf, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
        if (c = this.h)this.f && "/" != c.charAt(0) && a.push("/"), a.push(Pf(c, "/" == c.charAt(0) ? Rf : Sf, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Pf(c, Tf));
        return a.join("")
    };
    Kf.prototype.clone = function () {
        return new Kf(this)
    };
    var Lf = function (a, b, c) {
        a.c = c ? Of(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }, Mf = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.i = b
        } else a.i = null
    }, Nf = function (a, b, c) {
        b instanceof U ? (a.b = b, Uf(a.b, a.a)) : (c || (b = Pf(b, Vf)), a.b = new U(b, 0, a.a))
    }, Of = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, Pf = function (a, b, c) {
        return v(a) ? (a = encodeURI(a).replace(b, Wf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, Wf = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, Qf = /[#\/\?@]/g, Sf = /[\#\?:]/g, Rf = /[\#\?]/g, Vf = /[\#\?@]/g, Tf = /#/g, U = function (a, b, c) {
        this.c = this.a = null;
        this.b = a || null;
        this.f = !!c
    }, Yf = function (a) {
        a.a || (a.a = new mf, a.c = 0, a.b && Jf(a.b, function (b, c) {
            Xf(a, decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }, Xf = function (a, b, c) {
        Yf(a);
        a.b = null;
        b = Zf(a, b);
        var d = a.a.get(b);
        d || a.a.set(b, d = []);
        d.push(c);
        a.c++
    };
    U.prototype.remove = function (a) {
        Yf(this);
        a = Zf(this, a);
        return of(this.a.b, a) ? (this.b = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    var $f = function (a, b) {
        Yf(a);
        b = Zf(a, b);
        return of(a.a.b, b)
    };
    U.prototype.Y = function () {
        Yf(this);
        for (var a = this.a.J(), b = this.a.Y(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    U.prototype.J = function (a) {
        Yf(this);
        var b = [];
        if (v(a))$f(this, a) && (b = Ra(b, this.a.get(Zf(this, a)))); else {
            a = this.a.J();
            for (var c = 0; c < a.length; c++)b = Ra(b, a[c])
        }
        return b
    };
    U.prototype.set = function (a, b) {
        Yf(this);
        this.b = null;
        a = Zf(this, a);
        $f(this, a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    };
    U.prototype.get = function (a, b) {
        var c = a ? this.J(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var ag = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.b = null, a.a.set(Zf(a, b), Sa(c)), a.c += c.length)
    };
    U.prototype.toString = function () {
        if (this.b)return this.b;
        if (!this.a)return "";
        for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.J(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
        return this.b = a.join("&")
    };
    U.prototype.clone = function () {
        var a = new U;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };
    var Zf = function (a, b) {
        var c = String(b);
        a.f && (c = c.toLowerCase());
        return c
    }, Uf = function (a, b) {
        b && !a.f && (Yf(a), a.b = null, a.a.forEach(function (a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), ag(this, e, a))
        }, a));
        a.f = b
    };
    U.prototype.g = function (a) {
        for (var b = 0; b < arguments.length; b++)qf(arguments[b], function (a, b) {
            Xf(this, b, a)
        }, this)
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    var bg = function (a, b) {
        this.g = [];
        this.L = a;
        this.w = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.v = this.B = this.i = !1;
        this.h = 0;
        this.b = null;
        this.m = 0
    };
    bg.prototype.cancel = function (a) {
        if (this.a)this.c instanceof bg && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.m--, 0 >= b.m && b.cancel())
            }
            this.L ? this.L.call(this.w, this) : this.v = !0;
            this.a || cg(this, new dg)
        }
    };
    bg.prototype.s = function (a, b) {
        this.i = !1;
        eg(this, a, b)
    };
    var eg = function (a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        fg(a)
    }, hg = function (a) {
        if (a.a) {
            if (!a.v)throw new gg;
            a.v = !1
        }
    }, cg = function (a, b) {
        hg(a);
        ig(b);
        eg(a, !1, b)
    }, ig = function (a) {
        D(!(a instanceof bg), "An execution sequence may not be initiated with a blocking Deferred.")
    }, jg = function (a, b, c, d) {
        D(!a.B, "Blocking Deferreds can not be re-used");
        a.g.push([b, c, d]);
        a.a && fg(a)
    };
    bg.prototype.then = function (a, b, c) {
        var d, e, f = new ne(function (a, b) {
            d = a;
            e = b
        });
        jg(this, d, function (a) {
            a instanceof dg ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    je(bg);
    var kg = function (a) {
        return La(a.g, function (a) {
            return x(a[1])
        })
    }, fg = function (a) {
        if (a.h && a.a && kg(a)) {
            var b = a.h, c = lg[b];
            c && (m.clearTimeout(c.G), delete lg[b]);
            a.h = 0
        }
        a.b && (a.b.m--, delete a.b);
        for (var b = a.c, d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(), f = e[0], g = e[1], e = e[2];
            if (f = a.f ? g : f)try {
                var k = f.call(e || a.w, b);
                p(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                if (ke(b) || "function" === typeof m.Promise && b instanceof m.Promise)d = !0, a.i = !0
            } catch (l) {
                b = l, a.f = !0, kg(a) || (c = !0)
            }
        }
        a.c = b;
        d && (k = y(a.s, a, !0), d = y(a.s, a,
            !1), b instanceof bg ? (jg(b, k, d), b.B = !0) : b.then(k, d));
        c && (b = new mg(b), lg[b.G] = b, a.h = b.G)
    }, gg = function () {
        B.call(this)
    };
    A(gg, B);
    gg.prototype.message = "Deferred has already fired";
    gg.prototype.name = "AlreadyCalledError";
    var dg = function () {
        B.call(this)
    };
    A(dg, B);
    dg.prototype.message = "Deferred was canceled";
    dg.prototype.name = "CanceledError";
    var mg = function (a) {
        this.G = m.setTimeout(y(this.b, this), 0);
        this.a = a
    };
    mg.prototype.b = function () {
        D(lg[this.G], "Cannot throw an error that is not scheduled.");
        delete lg[this.G];
        throw this.a;
    };
    var lg = {};
    var rg = function (a, b) {
        var c = b || {}, d = c.document || document, e = document.createElement("SCRIPT"), f = {
            Eb: e,
            ka: void 0
        }, g = new bg(ng, f), k = null, l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
            og(e, !0);
            cg(g, new pg(1, "Timeout reached for loading script " + a))
        }, l), f.ka = k);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (og(e, c.Lb || !1, k), hg(g), ig(null), eg(g, !0, null))
        };
        e.onerror = function () {
            og(e, !0, k);
            cg(g, new pg(0, "Error while loading script " +
                a))
        };
        f = c.attributes || {};
        Za(f, {type: "text/javascript", charset: "UTF-8", src: a});
        Xb(e, f);
        qg(d).appendChild(e);
        return g
    }, qg = function (a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }, ng = function () {
        if (this && this.Eb) {
            var a = this.Eb;
            a && "SCRIPT" == a.tagName && og(a, !0, this.ka)
        }
    }, og = function (a, b, c) {
        null != c && m.clearTimeout(c);
        a.onload = r;
        a.onerror = r;
        a.onreadystatechange = r;
        b && window.setTimeout(function () {
            cc(a)
        }, 0)
    }, pg = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " +
            b);
        B.call(this, c);
        this.code = a
    };
    A(pg, B);
    var sg = function (a, b) {
        this.b = new Kf(a);
        this.a = b ? b : "callback";
        this.ka = 5E3
    }, tg = 0;
    sg.prototype.send = function (a, b, c, d) {
        a = a || null;
        d = d || "_" + (tg++).toString(36) + ja().toString(36);
        m._callbacks_ || (m._callbacks_ = {});
        var e = this.b.clone();
        if (a)for (var f in a)if (!a.hasOwnProperty || a.hasOwnProperty(f)) {
            var g = e, k = f, l = a[f];
            u(l) || (l = [String(l)]);
            ag(g.b, k, l)
        }
        b && (m._callbacks_[d] = ug(d, b), b = this.a, f = "_callbacks_." + d, u(f) || (f = [String(f)]), ag(e.b, b, f));
        b = rg(e.toString(), {timeout: this.ka, Lb: !0});
        jg(b, null, vg(d, a, c), void 0);
        return {G: d, ib: b}
    };
    sg.prototype.cancel = function (a) {
        a && (a.ib && a.ib.cancel(), a.G && wg(a.G, !1))
    };
    var vg = function (a, b, c) {
        return function () {
            wg(a, !1);
            c && c(b)
        }
    }, ug = function (a, b) {
        return function (c) {
            wg(a, !0);
            b.apply(void 0, arguments)
        }
    }, wg = function (a, b) {
        m._callbacks_[a] && (b ? delete m._callbacks_[a] : m._callbacks_[a] = r)
    };
    var xg = function (a) {
        a = String(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)return "zh-CN";
        if ("zh-tw" == a)return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }, yg = function (a) {
        a = chrome.i18n.getMessage(a);
        return chrome.i18n.getMessage(a)
    };
    var Ag = function (a) {
        this.f = [];
        chrome.i18n.getAcceptLanguages(y(this.v, this));
        this.c = "";
        this.a = "1";
        this.g = !0;
        this.b = [];
        this.h = [];
        this.m = !!a;
        chrome.storage.local.get(null, y(this.s, this));
        zg(this)
    }, Bg = !!chrome.i18n.detectLanguage, Cg = function (a) {
        if ("" != a.c)a = a.c; else a:{
            for (var b = 0; b < a.f.length; b++) {
                var c = xg(a.f[b]);
                if (a.b[c]) {
                    a = c;
                    break a
                }
            }
            a = "en"
        }
        return a
    };
    Ag.prototype.s = function (a) {
        "gtxTargetLang" in a && (this.c = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.a = a.gtxShowBubble);
        "gtxDetectLanguage" in a && (this.g = a.gtxDetectLanguage);
        "gtxSourceLangList" in a && (this.h = Dg(this, a.gtxSourceLangList));
        "gtxTargetLangList" in a && (this.b = Dg(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.m) {
            var b = (new Date).getTime(), c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0, d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b - c) || d != a) && (new sg("https://translate.googleapis.com/translate_a/l", "cb")).send({
                client: "gtx",
                hl: d
            }, y(this.B, this, d))
        }
    };
    var Dg = function (a, b) {
        var c = [], d;
        for (d in b)c.push({code: d, name: b[d]});
        c.sort(a.i);
        d = {};
        for (var e = 0; e < c.length; e++)d[c[e].code] = c[e].name;
        return d
    };
    Ag.prototype.i = function (a, b) {
        return a.name.localeCompare(b.name)
    };
    var zg = function (a) {
        chrome.storage.onChanged.addListener(function (b) {
            b.gtxTargetLang && (a.c = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.a = b.gtxShowBubble.newValue)
        })
    };
    Ag.prototype.v = function (a) {
        this.f = a
    };
    var Fg = function (a) {
        var b = Eg;
        a = xg(a);
        return a == Cg(b) ? !0 : !1
    };
    Ag.prototype.B = function (a, b) {
        var c = (new Date).getTime(), d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.h = b.sl;
        this.b = b.tl
    };
    var Hg = function (a) {
        var b = Gg;
        if ("sl" == a)return b.h;
        if ("tl" == a)return b.b;
        throw Error("Invalid input for getLangList()");
    };
    var Ig = [0, 200, 80, 50], Jg = {
        ar: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1,
        en: 1,
        fr: 1,
        de: 1,
        it: 1,
        ja: 1,
        ko: 1,
        la: 1,
        pt: 1,
        es: 1,
        af: 1,
        sq: 1,
        hy: 1,
        bs: 1,
        ca: 1,
        hr: 1,
        cs: 1,
        da: 1,
        nl: 1,
        eo: 1,
        fi: 1,
        el: 1,
        ht: 1,
        hi: 1,
        hu: 1,
        is: 1,
        id: 1,
        ku: 1,
        lv: 1,
        mk: 1,
        no: 1,
        pl: 1,
        ro: 1,
        ru: 1,
        sr: 1,
        sk: 1,
        sw: 1,
        sv: 1,
        ta: 1,
        th: 1,
        tr: 1,
        vi: 1,
        cy: 1
    };
    var Kg = function (a) {
        return eval("(" + a + ")")
    };
    var Lg = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    Lg.prototype.a = null;
    var Mg = 0;
    Lg.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || Mg++;
        d || ja();
        this.b = b;
        delete this.a
    };
    Lg.prototype.getMessage = function () {
        return this.b
    };
    var Ng = function (a) {
        this.f = a;
        this.b = this.c = this.a = null
    }, Og = function (a, b) {
        this.name = a;
        this.value = b
    };
    Og.prototype.toString = function () {
        return this.name
    };
    var Pg = new Og("SEVERE", 1E3), Qg = new Og("CONFIG", 700), Rg = new Og("FINE", 500);
    Ng.prototype.getChildren = function () {
        this.b || (this.b = {});
        return this.b
    };
    var Sg = function (a) {
        if (a.c)return a.c;
        if (a.a)return Sg(a.a);
        Ba("Root logger has no level set.");
        return null
    };
    Ng.prototype.log = function (a, b, c) {
        if (a.value >= Sg(this).value)for (x(b) && (b = b()), a = new Lg(a, String(b), this.f), c && (a.a = c), c = "log:" + a.getMessage(), m.console && (m.console.timeStamp ? m.console.timeStamp(c) : m.console.markTimeline && m.console.markTimeline(c)), m.msWriteProfilerMark && m.msWriteProfilerMark(c), c = this; c;)c = c.a
    };
    var Tg = {}, Ug = null, Vg = function (a) {
        Ug || (Ug = new Ng(""), Tg[""] = Ug, Ug.c = Qg);
        var b;
        if (!(b = Tg[a])) {
            b = new Ng(a);
            var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Vg(a.substr(0, c));
            c.getChildren()[d] = b;
            b.a = c;
            Tg[a] = b
        }
        return b
    };
    var V = function (a, b) {
        a && a.log(Rg, b, void 0)
    };
    var Wg = function () {
    };
    Wg.prototype.a = null;
    var Yg = function (a) {
        var b;
        (b = a.a) || (b = {}, Xg(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var Zg, $g = function () {
    };
    A($g, Wg);
    var ah = function (a) {
        return (a = Xg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, Xg = function (a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
    Zg = new $g;
    var bh = function (a) {
        P.call(this);
        this.Aa = new mf;
        this.L = a || null;
        this.b = !1;
        this.w = this.a = null;
        this.h = this.S = this.f = "";
        this.c = this.M = this.m = this.O = !1;
        this.g = 0;
        this.i = null;
        this.ma = "";
        this.s = this.Ca = !1
    };
    A(bh, P);
    var ch = bh.prototype, dh = Vg("goog.net.XhrIo");
    ch.K = dh;
    var eh = /^https?$/i, fh = ["POST", "PUT"], gh = [], hh = function (a, b, c, d) {
        var e = new bh;
        gh.push(e);
        b && e.listen("complete", b);
        Fc(e.F, "ready", e.za, !0, void 0, void 0);
        e.g = Math.max(0, 1E4);
        e.send(a, c, d, void 0)
    };
    bh.prototype.za = function () {
        this.P();
        Qa(gh, this)
    };
    bh.prototype.send = function (a, b, c, d) {
        if (this.a)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.f + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.f = a;
        this.h = "";
        this.S = b;
        this.O = !1;
        this.b = !0;
        this.a = this.L ? ah(this.L) : ah(Zg);
        this.w = this.L ? Yg(this.L) : Yg(Zg);
        this.a.onreadystatechange = y(this.T, this);
        try {
            V(this.K, ih(this, "Opening Xhr")), this.M = !0, this.a.open(b, String(a), !0), this.M = !1
        } catch (f) {
            V(this.K, ih(this, "Error opening Xhr: " + f.message));
            jh(this, f);
            return
        }
        a = c || "";
        var e = this.Aa.clone();
        d && qf(d, function (a, b) {
            e.set(b, a)
        });
        d = Oa(e.Y());
        c = m.FormData && a instanceof m.FormData;
        !Pa(fh, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.ma && (this.a.responseType = this.ma);
        Wa(this.a) && (this.a.withCredentials = this.Ca);
        try {
            kh(this), 0 < this.g && (this.s = lh(this.a), V(this.K, ih(this, "Will abort after " + this.g + "ms if incomplete, xhr2 " + this.s)), this.s ? (this.a.timeout = this.g, this.a.ontimeout = y(this.ka, this)) :
                this.i = Be(this.ka, this.g, this)), V(this.K, ih(this, "Sending request")), this.m = !0, this.a.send(a), this.m = !1
        } catch (f) {
            V(this.K, ih(this, "Send error: " + f.message)), jh(this, f)
        }
    };
    var lh = function (a) {
        return H && K(9) && w(a.timeout) && p(a.ontimeout)
    }, Na = function (a) {
        return "content-type" == a.toLowerCase()
    };
    bh.prototype.ka = function () {
        "undefined" != typeof aa && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", V(this.K, ih(this, this.h)), Q(this, "timeout"), this.a && this.b && (V(this.K, ih(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, Q(this, "complete"), Q(this, "abort"), mh(this)))
    };
    var jh = function (a, b) {
        a.b = !1;
        a.a && (a.c = !0, a.a.abort(), a.c = !1);
        a.h = b;
        nh(a);
        mh(a)
    }, nh = function (a) {
        a.O || (a.O = !0, Q(a, "complete"), Q(a, "error"))
    };
    bh.prototype.o = function () {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), mh(this, !0));
        bh.l.o.call(this)
    };
    bh.prototype.T = function () {
        this.v || (this.M || this.m || this.c ? oh(this) : this.Ba())
    };
    bh.prototype.Ba = function () {
        oh(this)
    };
    var oh = function (a) {
        if (a.b && "undefined" != typeof aa)if (a.w[1] && 4 == ph(a) && 2 == qh(a))V(a.K, ih(a, "Local request error detected and ignored")); else if (a.m && 4 == ph(a))Be(a.T, 0, a); else if (Q(a, "readystatechange"), 4 == ph(a)) {
            V(a.K, ih(a, "Request complete"));
            a.b = !1;
            try {
                if (rh(a))Q(a, "complete"), Q(a, "success"); else {
                    var b;
                    try {
                        b = 2 < ph(a) ? a.a.statusText : ""
                    } catch (c) {
                        V(a.K, "Can not get status: " + c.message), b = ""
                    }
                    a.h = b + " [" + qh(a) + "]";
                    nh(a)
                }
            } finally {
                mh(a)
            }
        }
    }, mh = function (a, b) {
        if (a.a) {
            kh(a);
            var c = a.a, d = a.w[0] ? r : null;
            a.a = null;
            a.w = null;
            b || Q(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (c = a.K) && c.log(Pg, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }, kh = function (a) {
        a.a && a.s && (a.a.ontimeout = null);
        w(a.i) && (m.clearTimeout(a.i), a.i = null)
    }, rh = function (a) {
        var b = qh(a), c;
        a:switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b)a = String(a.f).match(If)[1] || null, !a && m.self && m.self.location && (a = m.self.location.protocol, a = a.substr(0, a.length - 1)),
                b = !eh.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, ph = function (a) {
        return a.a ? a.a.readyState : 0
    }, qh = function (a) {
        try {
            return 2 < ph(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }, sh = function (a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return V(a.K, "Can not get responseText: " + b.message), ""
        }
    }, ih = function (a, b) {
        return b + " [" + a.S + " " + a.f + " " + qh(a) + "]"
    };
    var th = function () {
    };
    var uh = function () {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.i = 1;
        this.f = {};
        O(window, "beforeunload", this.h, !1, this)
    };
    ba(uh);
    var vh = function (a, b, c) {
        if (null == b)return "1";
        switch (ca(b)) {
            case "string":
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), encodeURIComponent(String(a));
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var d = [], e;
                for (e in b)d.push(vh(a, b[e], c));
                return d.join(",");
            case "object":
                d = [];
                for (e in b)d.push([encodeURIComponent(String(e)), vh(a, b[e], c || "smtalt" == e)].join("="));
                return d.join(",");
            default:
                return ""
        }
    };
    uh.prototype.log = function (a, b, c) {
        this.b.push([a, b, c]);
        this.c || (this.c = !0, Be(this.g, 0, this))
    };
    uh.prototype.g = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            wh(this, b[0], b[1], b[2])
        }
        this.b = [];
        this.c = !1
    };
    var wh = function (a, b, c, d) {
        xh(a, (d || "") + "/gen204?" + [encodeURIComponent(String(b)), vh(a, c, "smtalt" == b)].join("="))
    }, xh = function (a, b) {
        var c = new Image, d = a.i++;
        a.f[d] = c;
        c.onload = c.onerror = function () {
            delete uh.X().f[d]
        };
        c.src = b;
        c = null
    };
    uh.prototype.h = function () {
        this.g();
        for (var a in this.a)if (0 != this.a[a]) {
            var b = a;
            wh(this, b, this.a[b][1], void 0);
            b in this.a && (m.clearTimeout(this.a[b][0]), delete this.a[b])
        }
    };
    var yh = function (a) {
        return function () {
            return a
        }
    }, zh = function (a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b[c + 2], d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d), d = "+" == b[c + 1] ? a >>> d : a << d;
            a = "+" == b[c] ? a + d & 4294967295 : a ^ d
        }
        return a
    }, Ah = null, Bh = function (a) {
        var b;
        if (null === Ah) {
            var c = yh(String.fromCharCode(84));
            b = yh(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            Ah = Number(window[c.join(b())]) || 0
        }
        b = Ah;
        var d = yh(String.fromCharCode(116)), c = yh(String.fromCharCode(107)), d = [d(), d()];
        d[1] = c();
        for (var c = "&" + d.join("") + "=", d = [],
                 e = 0, f = 0; f < a.length; f++) {
            var g = a.charCodeAt(f);
            128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (d[e++] = g >> 12 | 224, d[e++] = g >> 6 & 63 | 128), d[e++] = g & 63 | 128)
        }
        a = b || 0;
        for (e = 0; e < d.length; e++)a += d[e], a = zh(a, "+-a^+6");
        a = zh(a, "+-3^+b+-f");
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." + (a ^ b))
    };
    var Ch = function (a, b) {
        this.c = a;
        this.a = "";
        b && (this.a = b);
        this.b = 0
    }, Dh = function (a) {
        a = a.J("q").join("");
        return Bh(a)
    }, Eh = function (a, b, c, d, e) {
        c = c.toString();
        c += Dh(d);
        d = d.toString();
        var f = "POST";
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
        ++a.b;
        hh(b, function (b) {
            --a.b;
            e(b)
        }, f, d)
    };
    Ch.prototype.f = function (a, b) {
        var c = b.target;
        if (!rh(c) || "[" != sh(c)[0] && "{" != sh(c)[0]) {
            var d = uh.X(), e = String(c.f), c = sh(c);
            d.log("invalidResponse", {q: e.substring(0, 500), ql: e.length, r: c.substring(0, 500), rl: c.length});
            a(null)
        } else {
            d = sh(c);
            c = {"class": "trans.common.TranslationAPI", func: "handleSingleResult_", url: String(c.f)};
            try {
                e = Kg(d)
            } catch (f) {
                throw e = uh.X(), c.js = d, c.error = f.message, e.log("jsonParseErr", c), f;
            }
            u(e) && (e = new th);
            a(e)
        }
    };
    var Gh = function (a, b) {
        P.call(this);
        a && Fh(this, a, b)
    };
    A(Gh, P);
    h = Gh.prototype;
    h.pa = null;
    h.Ha = null;
    h.Za = null;
    h.Ia = null;
    h.I = -1;
    h.ea = -1;
    h.Ma = !1;
    var Hh = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Ih = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Jh = H || Eb || J && K("525"), Kh = Hb && I;
    Gh.prototype.a = function (a) {
        if (J || Eb)if (17 == this.I && !a.ctrlKey || 18 == this.I && !a.altKey || Hb && 91 == this.I && !a.metaKey)this.ea = this.I = -1;
        -1 == this.I && (a.ctrlKey && 17 != a.keyCode ? this.I = 17 : a.altKey && 18 != a.keyCode ? this.I = 18 : a.metaKey && 91 != a.keyCode && (this.I = 91));
        Jh && !nd(a.keyCode, this.I, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ea = ld(a.keyCode), Kh && (this.Ma = a.altKey))
    };
    Gh.prototype.b = function (a) {
        this.ea = this.I = -1;
        this.Ma = a.altKey
    };
    Gh.prototype.handleEvent = function (a) {
        var b = a.W, c, d, e = b.altKey;
        H && "keypress" == a.type ? (c = this.ea, d = 13 != c && 27 != c ? b.keyCode : 0) : (J || Eb) && "keypress" == a.type ? (c = this.ea, d = 0 <= b.charCode && 63232 > b.charCode && kd(c) ? b.charCode : 0) : Db && !J ? (c = this.ea, d = kd(c) ? b.keyCode : 0) : (c = b.keyCode || this.ea, d = b.charCode || 0, Kh && (e = this.Ma), Hb && 63 == d && 224 == c && (c = 191));
        var f = c = ld(c), g = b.keyIdentifier;
        c ? 63232 <= c && c in Hh ? f = Hh[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Ih && (f = Ih[g]);
        a = f == this.I;
        this.I = f;
        b = new Lh(f, d, a, b);
        b.altKey = e;
        Q(this,
            b)
    };
    Gh.prototype.j = function () {
        return this.pa
    };
    var Fh = function (a, b, c) {
        a.Ia && Mh(a);
        a.pa = b;
        a.Ha = O(a.pa, "keypress", a, c);
        a.Za = O(a.pa, "keydown", a.a, c, a);
        a.Ia = O(a.pa, "keyup", a.b, c, a)
    }, Mh = function (a) {
        a.Ha && (Tc(a.Ha), Tc(a.Za), Tc(a.Ia), a.Ha = null, a.Za = null, a.Ia = null);
        a.pa = null;
        a.I = -1;
        a.ea = -1
    };
    Gh.prototype.o = function () {
        Gh.l.o.call(this);
        Mh(this)
    };
    var Lh = function (a, b, c, d) {
        N.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    A(Lh, N);
    var W = function () {
    }, Nh;
    ba(W);
    var Oh = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    W.prototype.Ta = function () {
    };
    W.prototype.ua = function (a) {
        return a.f.b("DIV", Ph(this, a).join(" "), a.$())
    };
    var Rh = function (a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            H && !K("7") && (d = Qh(Yc(a), b), d.push(b));
            (c ? ad : cd)(a, d)
        }
    };
    W.prototype.ob = function () {
        return !0
    };
    W.prototype.ba = function (a, b) {
        b.id && Re(a, b.id);
        b && b.firstChild ? Sh(a, b.firstChild.nextSibling ? Sa(b.childNodes) : b.firstChild) : a.va = null;
        var c = 0, d = this.A(), e = this.A(), f = !1, g = !1, k = !1, l = Sa(Yc(b));
        E(l, function (a) {
            f || a != d ? g || a != e ? c |= Th(this, a) : g = !0 : (f = !0, e == d && (g = !0));
            1 == Th(this, a) && (Fa(b), ic(b) && jc(b) && hc(b, !1))
        }, this);
        a.u = c;
        f || (l.push(d), e == d && (g = !0));
        g || l.push(e);
        var q = a.N;
        q && l.push.apply(l, q);
        if (H && !K("7")) {
            var n = Qh(l);
            0 < n.length && (l.push.apply(l, n), k = !0)
        }
        if (!f || !g || q || k)b.className = l.join(" ");
        return b
    };
    W.prototype.wb = function (a) {
        null == a.ma && (a.ma = Od(a.H ? a.a : a.f.a.body));
        a.ma && this.qb(a.j(), !0);
        a.b() && this.Ja(a, a.ga)
    };
    var Uh = function (a, b) {
        var c = a.Ta();
        if (c) {
            D(b, "The element passed as a first parameter cannot be null.");
            var d = b.getAttribute("role") || null;
            c != d && (c ? (D(Xa(fd, c), "No such ARIA role " + c), b.setAttribute("role", c)) : b.removeAttribute("role"))
        }
    };
    h = W.prototype;
    h.Ua = function (a, b) {
        var c = !b, d = H || Db ? a.getElementsByTagName("*") : null;
        if (Pd) {
            if (c = c ? "none" : "", a.style && (a.style[Pd] = c), d)for (var e = 0, f; f = d[e]; e++)f.style && (f.style[Pd] = c)
        } else if (H || Db)if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)for (e = 0; f = d[e]; e++)f.setAttribute("unselectable", c)
    };
    h.qb = function (a, b) {
        Rh(a, this.A() + "-rtl", b)
    };
    h.pb = function (a) {
        var b;
        return a.C & 32 && (b = a.j()) ? ic(b) && jc(b) : !1
    };
    h.Ja = function (a, b) {
        var c;
        if (a.C & 32 && (c = a.j())) {
            if (!b && a.u & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.u & 32 && a.rb()
            }
            (ic(c) && jc(c)) != b && hc(c, b)
        }
    };
    h.Va = function (a, b, c) {
        var d = a.j();
        if (d) {
            var e = Vh(this, b);
            e && Rh(a, e, c);
            this.R(d, b, c)
        }
    };
    h.R = function (a, b, c) {
        Nh || (Nh = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
        D(a, "The element passed as a first parameter cannot be null.");
        b = Nh[b];
        var d = a.getAttribute("role") || null;
        d && (d = Oh[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && gd(a, b, c)
    };
    h.A = function () {
        return "goog-control"
    };
    var Ph = function (a, b) {
        var c = a.A(), d = [c], e = a.A();
        e != c && d.push(e);
        c = b.getState();
        for (e = []; c;) {
            var f = c & -c;
            e.push(Vh(a, f));
            c &= ~f
        }
        d.push.apply(d, e);
        (c = b.N) && d.push.apply(d, c);
        H && !K("7") && d.push.apply(d, Qh(d));
        return d
    }, Qh = function (a, b) {
        var c = [];
        b && (a = a.concat([b]));
        E([], function (d) {
            !Ma(d, z(Pa, a)) || b && !Pa(d, b) || c.push(d.join("_"))
        });
        return c
    }, Vh = function (a, b) {
        a.a || Wh(a);
        return a.a[b]
    }, Th = function (a, b) {
        if (!a.s) {
            a.a || Wh(a);
            var c = a.a, d = {}, e;
            for (e in c)d[c[e]] = e;
            a.s = d
        }
        c = parseInt(a.s[b], 10);
        return isNaN(c) ? 0 :
            c
    }, Wh = function (a) {
        var b = a.A(), c = b.replace(/\xa0|\s/g, " ");
        D(-1 == c.indexOf(" "), "ControlRenderer has an invalid css class: '" + b + "'");
        a.a = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
    var Xh = function () {
    };
    A(Xh, W);
    ba(Xh);
    h = Xh.prototype;
    h.Ta = function () {
        return "button"
    };
    h.R = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                D(a, "The button DOM element cannot be null.");
                gd(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Xh.l.R.call(this, a, b, c)
        }
    };
    h.ua = function (a) {
        var b = Xh.l.ua.call(this, a), c = a.s;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.S) && this.Qa(b, c);
        a.C & 16 && this.R(b, 16, !!(a.u & 16));
        return b
    };
    h.ba = function (a, b) {
        b = Xh.l.ba.call(this, a, b);
        var c = this.Pa(b);
        a.S = c;
        a.s = b.title;
        a.C & 16 && this.R(b, 16, !!(a.u & 16));
        return b
    };
    h.Pa = r;
    h.Qa = r;
    h.A = function () {
        return "goog-button"
    };
    var Yh = function (a, b) {
        if (!a)throw Error("Invalid class name " + a);
        if (!x(b))throw Error("Invalid decorator function " + b);
    }, Zh = {};
    var X = function (a, b, c) {
        S.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[fa] || (b[fa] = ++ga);
                if (d = Zh[d])break;
                b = b.l ? b.l.constructor : null
            }
            b = d ? x(d.X) ? d.X() : new d : null
        }
        this.c = b;
        this.va = p(a) ? a : null
    };
    A(X, S);
    h = X.prototype;
    h.va = null;
    h.u = 0;
    h.C = 39;
    h.ra = 255;
    h.ga = !0;
    h.N = null;
    h.Xa = !0;
    var ai = function (a) {
        a.H && 0 != a.Xa && $h(a, !1);
        a.Xa = !1
    }, bi = function (a, b) {
        b && (a.N ? Pa(a.N, b) || a.N.push(b) : a.N = [b], Rh(a, b, !0))
    };
    h = X.prototype;
    h.Ra = function () {
        var a = this.c.ua(this);
        this.a = a;
        Uh(this.c, a);
        this.c.Ua(a, !1);
        this.ga || (Nd(a, !1), a && gd(a, "hidden", !0))
    };
    h.Sa = function () {
        return this.j()
    };
    h.nb = function (a) {
        return this.c.ob(a)
    };
    h.hb = function (a) {
        this.a = a = this.c.ba(this, a);
        Uh(this.c, a);
        this.c.Ua(a, !1);
        this.ga = "none" != a.style.display
    };
    h.V = function () {
        X.l.V.call(this);
        var a = this.c, b = Se(this);
        D(this);
        D(b);
        this.ga || gd(b, "hidden", !this.ga);
        this.b() || a.R(b, 1, !this.b());
        this.C & 8 && a.R(b, 8, !!(this.u & 8));
        this.C & 16 && a.R(b, 16, !!(this.u & 16));
        this.C & 64 && a.R(b, 64, !!(this.u & 64));
        this.c.wb(this);
        this.C & -2 && (this.Xa && $h(this, !0), this.C & 32 && (a = this.j())) && (b = this.h || (this.h = new Gh), Fh(b, a), Te(this).listen(b, "key", this.Nb).listen(a, "focus", this.Mb).listen(a, "blur", this.rb))
    };
    var $h = function (a, b) {
        var c = Te(a), d = a.j();
        b ? (c.listen(d, "mouseover", a.ub).listen(d, "mousedown", a.wa).listen(d, "mouseup", a.xa).listen(d, "mouseout", a.tb), a.Fa != r && c.listen(d, "contextmenu", a.Fa), H && (c.listen(d, "dblclick", a.sb), a.w || (a.w = new ci(a), tc(a, z(uc, a.w))))) : (jd(jd(jd(jd(c, d, "mouseover", a.ub), d, "mousedown", a.wa), d, "mouseup", a.xa), d, "mouseout", a.tb), a.Fa != r && jd(c, d, "contextmenu", a.Fa), H && (jd(c, d, "dblclick", a.sb), uc(a.w), a.w = null))
    };
    X.prototype.sa = function () {
        X.l.sa.call(this);
        this.h && Mh(this.h);
        this.ga && this.b() && this.c.Ja(this, !1)
    };
    X.prototype.o = function () {
        X.l.o.call(this);
        this.h && (this.h.P(), delete this.h);
        delete this.c;
        this.w = this.N = this.va = null
    };
    X.prototype.$ = function () {
        return this.va
    };
    var Sh = function (a, b) {
        a.va = b
    }, di = function (a) {
        a = a.$();
        if (!a)return "";
        if (!v(a))if (u(a))a = Ka(a, lc).join(""); else {
            if (Qb && "innerText" in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
                var b = [];
                kc(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Qb || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    X.prototype.b = function () {
        return !(this.u & 1)
    };
    X.prototype.setEnabled = function (a) {
        var b = this.g;
        b && "function" == typeof b.b && !b.b() || !ei(this, 1, !a) || (a || (fi(this, !1), gi(this, !1)), this.ga && this.c.Ja(this, a), hi(this, 1, !a, !0))
    };
    var gi = function (a, b) {
        ei(a, 2, b) && hi(a, 2, b)
    }, fi = function (a, b) {
        ei(a, 4, b) && hi(a, 4, b)
    };
    X.prototype.O = function (a) {
        ei(this, 32, a) && hi(this, 32, a)
    };
    X.prototype.getState = function () {
        return this.u
    };
    var hi = function (a, b, c, d) {
        d || 1 != b ? a.C & b && c != !!(a.u & b) && (a.c.Va(a, b, c), a.u = c ? a.u | b : a.u & ~b) : a.setEnabled(!c)
    }, ii = function (a) {
        if (a.H && a.u & 32)throw Error("Component already rendered");
        a.u & 32 && hi(a, 32, !1);
        a.C &= -33
    }, Y = function (a, b) {
        return !!(a.ra & b) && !!(a.C & b)
    }, ei = function (a, b, c) {
        return !!(a.C & b) && !!(a.u & b) != c && (!(0 & b) || Q(a, Qe(b, c))) && !a.v
    };
    h = X.prototype;
    h.ub = function (a) {
        (!a.relatedTarget || !dc(this.j(), a.relatedTarget)) && Q(this, "enter") && this.b() && Y(this, 2) && gi(this, !0)
    };
    h.tb = function (a) {
        a.relatedTarget && dc(this.j(), a.relatedTarget) || !Q(this, "leave") || (Y(this, 4) && fi(this, !1), Y(this, 2) && gi(this, !1))
    };
    h.Fa = r;
    h.wa = function (a) {
        this.b() && (Y(this, 2) && gi(this, !0), xc(a) && (Y(this, 4) && fi(this, !0), this.c && this.c.pb(this) && this.j().focus()));
        xc(a) && a.preventDefault()
    };
    h.xa = function (a) {
        this.b() && (Y(this, 2) && gi(this, !0), this.u & 4 && this.ya(a) && Y(this, 4) && fi(this, !1))
    };
    h.sb = function (a) {
        this.b() && this.ya(a)
    };
    h.ya = function (a) {
        if (Y(this, 16)) {
            var b = !(this.u & 16);
            ei(this, 16, b) && hi(this, 16, b)
        }
        Y(this, 8) && ei(this, 8, !0) && hi(this, 8, !0);
        Y(this, 64) && (b = !(this.u & 64), ei(this, 64, b) && hi(this, 64, b));
        b = new vc("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.bb = a.bb);
        return Q(this, b)
    };
    h.Mb = function () {
        Y(this, 32) && this.O(!0)
    };
    h.rb = function () {
        Y(this, 4) && fi(this, !1);
        Y(this, 32) && this.O(!1)
    };
    h.Nb = function (a) {
        return this.ga && this.b() && this.Wa(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    h.Wa = function (a) {
        return 13 == a.keyCode && this.ya(a)
    };
    if (!x(X))throw Error("Invalid component class " + X);
    if (!x(W))throw Error("Invalid renderer class " + W);
    var ji = X[fa] || (X[fa] = ++ga);
    Zh[ji] = W;
    Yh("goog-control", function () {
        return new X(null)
    });
    var ci = function (a) {
        sc.call(this);
        this.b = a;
        this.a = !1;
        this.c = new hd(this);
        tc(this, z(uc, this.c));
        a = Se(this.b);
        this.c.listen(a, "mousedown", this.g).listen(a, "mouseup", this.h).listen(a, "click", this.f)
    };
    A(ci, sc);
    ci.prototype.g = function () {
        this.a = !1
    };
    ci.prototype.h = function () {
        this.a = !0
    };
    ci.prototype.f = function (a) {
        if (this.a)this.a = !1; else {
            var b = a.W, c = b.button, d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.b.wa(new N(b, a.currentTarget));
            b.type = "mouseup";
            this.b.xa(new N(b, a.currentTarget));
            b.button = c;
            b.type = d
        }
    };
    ci.prototype.o = function () {
        this.b = null;
        ci.l.o.call(this)
    };
    var ki = function () {
    };
    A(ki, Xh);
    ba(ki);
    h = ki.prototype;
    h.Ta = function () {
    };
    h.ua = function (a) {
        ai(a);
        a.ra &= -256;
        ii(a);
        return a.f.b("BUTTON", {
            "class": Ph(this, a).join(" "),
            disabled: !a.b(),
            title: a.s || "",
            value: a.S || ""
        }, di(a) || "")
    };
    h.ob = function (a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    h.ba = function (a, b) {
        ai(a);
        a.ra &= -256;
        ii(a);
        if (b.disabled) {
            var c = Ca(Vh(this, 1));
            $c(b, c)
        }
        return ki.l.ba.call(this, a, b)
    };
    h.wb = function (a) {
        Te(a).listen(a.j(), "click", a.ya)
    };
    h.Ua = r;
    h.qb = r;
    h.pb = function (a) {
        return a.b()
    };
    h.Ja = r;
    h.Va = function (a, b, c) {
        ki.l.Va.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    h.Pa = function (a) {
        return a.value
    };
    h.Qa = function (a, b) {
        a && (a.value = b)
    };
    h.R = r;
    var li = function (a, b, c) {
        X.call(this, a, b || ki.X(), c)
    };
    A(li, X);
    li.prototype.o = function () {
        li.l.o.call(this);
        delete this.S;
        delete this.s
    };
    li.prototype.V = function () {
        li.l.V.call(this);
        if (this.C & 32) {
            var a = this.j();
            a && Te(this).listen(a, "keyup", this.Wa)
        }
    };
    li.prototype.Wa = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ya(a) : 32 == a.keyCode
    };
    Yh("goog-button", function () {
        return new li(null)
    });
    var mi = function (a) {
        var b;
        a = a || {};
        var c = tf, d = '<div role="button"' + (a.id ? ' id="' + Cf(a.id) + '"' : "") + ' class="', e, f;
        e = a || {};
        var g = "goog-inline-block jfk-button ";
        switch (ea(f = e.style) ? f.toString() : f) {
            case 0:
                g += "jfk-button-standard";
                break;
            case 2:
                g += "jfk-button-action";
                break;
            case 3:
                g += "jfk-button-primary";
                break;
            case 1:
                g += "jfk-button-default";
                break;
            case 4:
                g += "jfk-button-flat";
                break;
            case 5:
                g += "jfk-button-mini";
                break;
            case 6:
                g += "jfk-button-contrast";
                break;
            default:
                g += "jfk-button-standard"
        }
        g += (1 == e.width ? " jfk-button-narrow" :
                "") + (e.checked ? " jfk-button-checked" : "") + (e.Kb ? " " + e.Kb : "") + (e.disabled ? " jfk-button-disabled" : "");
        d = d + Cf(new wf(g, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.Tb ? Cf(a.Tb) : "0") + '"') + (a.title ? " " + (a.Vb ? "data-tooltip" : "title") + '="' + Cf(a.title) + '"' : "") + (a.value ? ' value="' + Cf(a.value) + '"' : "");
        a.attributes ? (e = a.attributes, null != e && e.U === Ge ? (D(e.constructor === vf), e = e.$().replace(/([^"'\s])$/, "$1 ")) : (e = String(e), Ef.test(e) || (Ba("Bad value `%s` for |filterHtmlAttributes", [e]), e = "zSoyz")),
            e = " " + e) : e = "";
        d = d + e + ">";
        a = null == (b = a.content) ? "" : b;
        b = uf(a);
        return c(d + b + "</div>")
    };
    mi.a = "jfk.templates.button.strict";
    var Z = function (a, b, c, d) {
        li.call(this, a, ni.X(), b);
        this.M = c || 0;
        this.T = d || 0;
        this.Ba = !1
    };
    A(Z, li);
    Z.prototype.setEnabled = function (a) {
        this.b() != a && (Z.l.setEnabled.call(this, a), oi(this))
    };
    Z.prototype.O = function (a) {
        Z.l.O.call(this, a);
        pi(this, !1)
    };
    Z.prototype.wa = function (a) {
        Z.l.wa.call(this, a);
        this.b() && pi(this, !0)
    };
    Z.prototype.xa = function (a) {
        Z.l.xa.call(this, a);
        this.b() && pi(this, !0)
    };
    var pi = function (a, b) {
        if (a.j()) {
            var c = a.j();
            b ? $c(c, "jfk-button-clear-outline") : bd(c, "jfk-button-clear-outline")
        }
    }, oi = function (a) {
        a.j() && qi(a.c, a)
    }, ni = function () {
        this.B = this.A() + "-standard";
        this.b = this.A() + "-action";
        this.v = this.A() + "-primary";
        this.g = this.A() + "-default";
        this.h = this.A() + "-flat";
        this.m = this.A() + "-narrow";
        this.i = this.A() + "-mini";
        this.f = this.A() + "-contrast"
    };
    A(ni, Xh);
    ba(ni);
    h = ni.prototype;
    h.fa = function (a, b, c) {
        a && c.M != a && (c.M = a, oi(c));
        b && c.T != b && (c.T = b, oi(c))
    };
    h.A = function () {
        return "jfk-button"
    };
    h.ua = function (a) {
        Ha(a, Z, "Button is expected to be instance of jfk.Button");
        var b = a.f, c = Ne(mi, {
            disabled: !a.b(),
            checked: !!(a.u & 16),
            style: a.M,
            title: a.s,
            Vb: a.Ba,
            value: a.S,
            width: a.T
        }, b);
        b.c(c, a.$());
        this.ba(a, c);
        return c
    };
    h.ba = function (a, b) {
        ni.l.ba.call(this, a, b);
        this.c || (this.c = $a(this.B, z(this.fa, 0, null), this.b, z(this.fa, 2, null), this.v, z(this.fa, 3, null), this.g, z(this.fa, 1, null), this.h, z(this.fa, 4, null), this.i, z(this.fa, 5, null), this.f, z(this.fa, 6, null), this.m, z(this.fa, null, 1)));
        for (var c = Yc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip"))a.s = c, a.Ba = !0;
        return b
    };
    h.Pa = function (a) {
        return a.getAttribute("value") || ""
    };
    h.Qa = function (a, b) {
        a && a.setAttribute("value", b)
    };
    var qi = function (a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }

        D(b.j(), "Button element must already exist when updating style.");
        var d = [], e = [], f = b.M;
        c(0 == f, a.B);
        c(2 == f, a.b);
        c(3 == f, a.v);
        c(4 == f, a.h);
        c(5 == f, a.i);
        c(1 == f, a.g);
        c(6 == f, a.f);
        c(1 == b.T, a.m);
        c(!b.b(), a.A() + "-disabled");
        cd(b.j(), e);
        ad(b.j(), d)
    };
    var ri = function () {
        Z.call(this, "", void 0, 4);
        bi(this, "jfk-button-flat");
        bi(this, "gtx-audio-button");
        bi(this, "no-audio");
        this.za = this.Aa = "";
        Te(this).listen(this, "action", this.Hb)
    };
    A(ri, Z);
    ri.prototype.Hb = function () {
        chrome.runtime.sendMessage({audioSrc: si(this.Aa, this.za)})
    };
    var ti = function (a, b, c) {
        var d = c.toLowerCase();
        d in Jg && Ig[Jg[d.toLowerCase()]] >= b.length ? (a.N && Qa(a.N, "no-audio") && (0 == a.N.length && (a.N = null), Rh(a, "no-audio", !1)), a.Aa = b, a.za = c) : bi(a, "no-audio")
    }, si = function (a, b) {
        return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + Bh(a) + "&q=" + encodeURIComponent(String(a))
    };
    var ui = function (a) {
        var b = "";
        if (a.query)if (a.Fb) {
            for (var b = b + '<div class="gtx-language"><select class="gtx-lang-selector">', c = a.Sb, d = c.length, e = 0; e < d; e++)var f = c[e], b = b + ("auto" != f ? '<option value="' + uf(f[0]) + '" ' + (f[0] == a.Rb ? "selected" : "") + ">" + uf(f[1]) + "</option>" : "");
            //b += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + uf(a.query) + '</div><br><div class="gtx-language">' + uf(a.Ub) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' +
            //    uf(a.Fb) + "</div>";
//todo add +word -word
            b += '</select>&nbsp&nbsp&nbsp&nbsp<a href="javascript:void(0)" id="btnaddword">+WordNote</a>&nbsp&nbsp&nbsp&nbsp<a href="javascript:void(0)" id="btndelword">-WordNote</a></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + uf(a.query) + '</div><br><div class="gtx-language">' + uf(a.Ub) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' +
                uf(a.Fb) + "</div>";
            if (a.kb) {
                b += '<table style="width: 95%">';
                c = a.kb;
                d = c.length;
                for (e = 0; e < d; e++) {
                    f = c[e];
                    b += '<tr><td class="gtx-td"><div class="gtx-pos">' + uf(f.pos) + '</div></td><td class="gtx-td">';
                    if (a.popup)for (var f = f.terms, g = f.length, k = 0; k < g; k++)b += (0 != k ? ", " : "") + uf(f[k]); else for (f = f.terms, g = f.length, k = 0; k < g; k++)var l = f[k], b = b + (3 > k ? (0 != k ? ", " : "") + uf(l) : "");
                    b += "</td></tr>"
                }
                b += "</table>"
            }
            b += "<br>"
        } else b += "No translation results for <b>" + uf(a.query) + "</b>.";
        return b
    };
    ui.a = "extension.translation";
    var Gg = new Ag, vi = function () {
    };
    ba(vi);
    var wi = function (a, b, c, d) {
        if ("" != a) {
            window.selection = a;
            a = new Ch("gtx", "https://translate.googleapis.com");
            var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            d = d ? d : "auto";
            var f = Cg(Gg);
            c = new U("source=" + c);
            var g = window.selection, k = a.a + "/translate_a/single", l = new U, q = new U;
            window.EGGS_JANGO && ("qab" == d && (l.set("slo", "qab"), d = "en"), "qab" == f && (l.set("tlo", "qab"), f = "en"));
            l.set("client", a.c);
            l.set("sl", d);
            l.set("tl", f);
            l.set("hl", e);
            ag(l, "dt", ["t", "bd"]);
            l.set("dj", "1");
            c && l.g(c);
            q.set("q",
                g);
            Eh(a, k, l, q, y(a.f, a, b))
        }
    };
    vi.prototype.a = function (a, b, c, d) {
        if (null != d) {
            for (var e = d.src, f = Cg(Gg), g = [], k = [], l = d.sentences, q = 0; q < l.length; q++)g.push(l[q].orig), k.push(l[q].trans);
            var g = g.join(""), k = k.join(""), l = Hg("tl")[f].toUpperCase(), q = Hg("sl"), n = [], t;
            for (t in q)n.push([t, q[t]]);
            d = {query: b, Fb: k, Ub: l, Rb: e, Sb: n, kb: d.dict, popup: a};
            D(ui, "Soy template may not be null.");
            c.innerHTML = Le(ui(d || Ke));
            d = Vb("gtx-lang-selector", c);
            O(d, "change", y(this.b, this, a, b, c), !1, this);
            b = new ri;
            d = Vb("gtx-source-audio", c);
            Ve(b, d);
            ti(b, g, e);
            b = new ri;
            g = Vb("gtx-target-audio", c);
            Ve(b, g);
            ti(b, k, f);
            e = "https://translate.google.com/?source=gtx_m#" + e + "/" + f + "/" + encodeURIComponent(window.selection);
            a ? (a = Tb(document, "more"), a.setAttribute("href", e), c = new Z("", void 0, 4), Ue(c, Tb(document, "new-translation")), Nd(Tb(document, "new-translation"), !0), c = Tb(document, "translate-page"), ec(a, yg("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), Nd(a, !0)) : (a = document.createElement("a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target",
                "_blank"), ec(a, yg("MSG_FOOTER_OPTIONS").toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), c.appendChild(a), a = document.createElement("a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), ec(a, yg("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), c.appendChild(a))
        } else ec(Tb(document, "translation"), yg("MSG_TRANSLATION_ERROR"))
    };
    vi.prototype.b = function (a, b, c, d) {
        wi(b, y(this.a, this, a, b, c), "ls", d.target.value)
    };
    var xi = function (a) {
        Gf.call(this);
        this.O = !0;
        D(!this.H, "Must call addClassName() before rendering");
        this.M.push("gtx-bubble");
        this.s.b = a;
        this.c.Z && this.c.b();
        var b = 2;
        parseInt(a.style.top, 10) - document.body.scrollTop + parseInt(a.style.height, 10) / 2 < window.innerHeight / 2 && (b = 1);
        var c = 2;
        a = parseInt(a.style.left, 10) + parseInt(a.style.width, 10) / 2;
        217 >= a ? c = 0 : a >= window.innerWidth - 217 && (c = 1);
        D(!this.H, "Must call setPosition() before rendering");
        a = this.s;
        null != b && (a.Oa = b);
        null != c && (a.Na = c);
        w(0) && (a.cb = Math.max(0,
            15));
        w(-10) && (a.ab = -10)
    }, yi, zi;
    A(xi, Gf);
    xi.prototype.o = function () {
        xi.l.o.call(this);
        chrome.runtime.sendMessage({bubbleClosed: !0});
        cc(Tb(document, "gtx-anchor"))
    };
    xi.prototype.h = null;
    xi.prototype.w = null;
    xi.prototype.S = function (a, b) {
        var c = document.createElement("style");
        c.innerHTML = b;
        this.w.appendChild(c);
        c = this.h;
        D(v(c) || c.nodeType || c instanceof sf || c instanceof pb, "Content must be a string or HTML.");
        this.T = c;
        Hf(this, c);
        var d = this.h.cloneNode(!1);
        d.id = "bubble-content";
        d.className = "gtx-content";
        this.w.appendChild(d);
        c = document.createElement("div");
        c.className = "content";
        c.setAttribute("style", "margin: 0");
        d.appendChild(c);
        d = this.h.cloneNode(!1);
        d.id = "translation";
        d.style.display = "inline";
        c.appendChild(d);
        Ai.a(!1, window.selection, d, a);
        this.c.Z && this.c.b()
    };
    var Ci = function (a, b, c) {
        var d = Tb(document, "gtx-trans");
        Uc(d);
        cc(d);
        wi(b, z(Bi, a), "icon", c)
    }, Gi = function (a) {
        if ("0" != Eg.a) {
            var b = window.getSelection(), c = b.toString().trim();
            Di(c) && (Bg ? Ei(b, function (d) {
                if (!Fg(d)) {
                    if ("zh" == d || "zh-Hant" == d)d = "zh-CN";
                    Fi(a, b, c, d)
                }
            }) : !Bg && "1" == Eg.a && Eg.g && Fg(yi) || Fi(a, b, c))
        }
    }, Hi = function (a, b, c) {
        if (a) {
            var d = a.innerText || a.textContent || "", d = decodeURIComponent(encodeURIComponent(d.trim()));
            chrome.i18n.detectLanguage(d, function (d) {
                d.isReliable ? c(d.languages[0].language) : 0 < b ? Hi(a.parentNode,
                    b - 1, c) : c("")
            })
        } else c("")
    }, Fi = function (a, b, c, d) {
        b = b.getRangeAt(0).getBoundingClientRect();
        if (0 != b.top || 0 != b.left)if ("1" == Eg.a) {
            var e = document.createElement("div");
            e.className = "gtx-trans-icon";
            var f = document.createElement("div");
            f.appendChild(e);
            f.id = "gtx-trans";
            f.style.position = "absolute";
            f.style.left = a.clientX + document.body.scrollLeft - 13 + "px";
            a = a.clientY;
            a - b.top > b.height / 2 ? a = b.bottom + 1 : a = b.top - 1 - 27;
            f.style.top = a + document.body.scrollTop + "px";
            document.body.appendChild(f);
            O(f, "click", z(Ci, b, c, d))
        } else wi(c,
            z(Bi, b), "bubble", d)
    }, Ei = function (a, b) {
        var c = a.toString().trim(), c = decodeURIComponent(encodeURIComponent(c));
        chrome.i18n.detectLanguage(c, function (c) {
            var e = null;
            if (c.isReliable)return e = c.languages[0].language, b(e);
            Hi(a.anchorNode, 3, function (a) {
                b(a)
            })
        })
    }, Di = function (a) {
        var b = /^[0-9!@#$\u20ac\u00a3%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        return 0 < a.length && !Vb("gtx-bubble") && 250 > a.length && !b.test(a) && 400 < window.innerWidth
    }, Bi = function (a, b) {
        if ("1" == Eg.a || b.src != Cg(Eg)) {
            var c = document.createElement("div");
            c.id = "gtx-anchor";
            c.style.position = "absolute";
            c.style.visibility = "hidden";
            c.style.left = String(a.left + document.body.scrollLeft + "px");
            c.style.top = String(a.top + document.body.scrollTop + "px");
            c.style.width = String(a.right - a.left + 1 + "px");
            c.style.height = String(a.height + "px");
            document.body.appendChild(c);
            window.a = new xi(c);
            Ue(window.a, document.body);
            c = window.a;
            c.h = document.createElement("div");
            c.h.id = "gtx-host";
            c.h.setAttribute("style", "min-width: 200px; max-width: 400px;");
            c.h.createShadowRoot ? c.w = c.h.createShadowRoot() :
                c.w = c.h.webkitCreateShadowRoot();
            Ii(chrome.runtime.getURL("popup_css_compiled.css"), y(c.S, c, b));
            window.a.yb(!0)
        }
    }, Ii = function (a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        c.onload = function () {
            var a = null;
            200 === c.status && (a = c.response);
            return b(a)
        };
        c.send()
    };
    chrome.runtime.onMessage.addListener(function (a) {
        a["gtx.detected"] && (yi = a["gtx.detected"], Gi(zi))
    });
    var Eg = new Ag, Ai = vi.X();
    O(window, "mouseup", function (a) {
        if (0 == a.button && !Tb(document, "gtx-trans")) {
            try {
                chrome.runtime.sendMessage({test: 1})
            } catch (b) {
                return
            }
            Bg || "1" != Eg.a || !Eg.g || yi ? window.setTimeout(z(Gi, a), 0) : (zi = a, chrome.runtime.sendMessage({detectLanguage: 1}))
        }
    });
    O(window, "mousedown", function (a) {
        var b = Tb(document, "gtx-trans");
        b && (dc(b, a.target) ? a.preventDefault() : (Uc(b), cc(b)));
        a.target instanceof HTMLElement && -1 != a.target.className.indexOf("jfk-bubble-closebtn") && a.preventDefault()
    }, !0);
    var Ji = function () {
        window.a && window.a.P()
    }, Ki = ["disposeWindowBubble"], Li = m;
    Ki[0] in Li || !Li.execScript || Li.execScript("var " + Ki[0]);
    for (var Mi; Ki.length && (Mi = Ki.shift());)!Ki.length && p(Ji) ? Li[Mi] = Ji : Li[Mi] ? Li = Li[Mi] : Li = Li[Mi] = {};

    //todo add +word -word  click  event linsten handler
    function spaceCount(temp) {
        var cnt = 0;
        for (var i = 0; i < temp.length; i++) {
            if (temp.charAt(i) == ' ')
                cnt++;
        }
        return cnt;
    }
    document.addEventListener("click", function (event) {
        //点击事件 shadow-root下的事件实际触发的是寄主的事件
        if (event.target.getAttribute("id") == "gtx-host") {
            var shadowroot=event.target.shadowRoot;

            var truecontent = shadowroot.getElementById("translation");
            var divs = truecontent.getElementsByTagName("div");
            var word=divs[3].innerText;
            var wordcounts = spaceCount(word);
            console.log(word);
            if(wordcounts<3){
                //词/詞组
                var posteventloopdata = {
                    action: "addword",
                    data: word
                };
                chrome.runtime.sendMessage(posteventloopdata, function (response) {
                    console.log(response);
                    if(response&&!response.error){
                        console.log(response.error);
                        if(resopnse.result=="addsuccess"){
                            shadowroot.getElementById("btnaddword").innerText = "Add Success";
                        }else if(resopnse.result=="delsuccess"){
                            shadowroot.getElementById("btndelword").innerText = "Del Success";
                        }
                    }
                });
            }else{
                //句子
            }
        }
    }, false);

})();
