/* Copyright 2014 Google */
(function () {
    var h, aa = aa || {}, m = this, ba = function (a) {
        return void 0 !== a
    }, n = function () {
    }, ca = function (a) {
        a.M = function () {
            return a.ib ? a.ib : a.ib = new a
        }
    }, da = function (a) {
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
    }, p = function (a) {
        return "array" == da(a)
    }, ea = function (a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, q = function (a) {
        return "string" == typeof a
    }, fa = function (a) {
        return "number" == typeof a
    }, r = function (a) {
        return "function" == da(a)
    }, ga = function (a) {
        var b =
            typeof a;
        return "object" == b && null != a || "function" == b
    }, ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0, ja = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ka = function (a, b, c) {
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
    }, t = function (a, b, c) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
            ja : ka;
        return t.apply(null, arguments)
    }, u = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, la = Date.now || function () {
            return +new Date
        }, w = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.j = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.sd = function (a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    };
    var x = function (a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, x); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    w(x, Error);
    x.prototype.name = "CustomError";
    var ma;
    var na = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    }, oa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, wa = function (a) {
        if (!pa.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
        -1 != a.indexOf("'") &&
        (a = a.replace(ua, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));
        return a
    }, qa = /&/g, ra = /</g, sa = />/g, ta = /"/g, ua = /'/g, va = /\x00/g, pa = /[\x00&<>"']/, xa = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ya = function (a, b) {
        b.unshift(a);
        x.call(this, na.apply(null, b));
        b.shift()
    };
    w(ya, x);
    ya.prototype.name = "AssertionError";
    var za = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
        throw new ya("" + e, f || []);
    }, y = function (a, b, c) {
        a || za("", null, b, Array.prototype.slice.call(arguments, 2))
    }, Aa = function (a, b) {
        throw new ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, Ba = function (a, b, c) {
        q(a) || za("Expected string but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ca = function (a, b, c) {
        r(a) || za("Expected function but got %s: %s.", [da(a), a], b,
            Array.prototype.slice.call(arguments, 2))
    }, Da = function (a, b, c) {
        ga(a) && 1 == a.nodeType || za("Expected Element but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, Fa = function (a, b, c, d) {
        a instanceof b || za("Expected instanceof %s but got %s.", [Ea(b), Ea(a)], c, Array.prototype.slice.call(arguments, 3))
    }, Ea = function (a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null ===
        a ? "null" : typeof a
    };
    var Ga = Array.prototype.indexOf ? function (a, b, c) {
        y(null != a.length);
        return Array.prototype.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, z = Array.prototype.forEach ? function (a, b, c) {
        y(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ha = Array.prototype.filter ? function (a,
                                               b, c) {
        y(null != a.length);
        return Array.prototype.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l)
        }
        return e
    }, Ia = Array.prototype.map ? function (a, b, c) {
        y(null != a.length);
        return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, Ja = Array.prototype.some ? function (a, b, c) {
        y(null != a.length);
        return Array.prototype.some.call(a,
            b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return !0;
        return !1
    }, Ka = Array.prototype.every ? function (a, b, c) {
        y(null != a.length);
        return Array.prototype.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return !1;
        return !0
    }, Ma = function (a) {
        var b;
        a:{
            b = La;
            for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : q(a) ? a.charAt(b) :
            a[b]
    }, A = function (a, b) {
        return 0 <= Ga(a, b)
    }, Na = function (a, b) {
        var c = Ga(a, b), d;
        if (d = 0 <= c)y(null != a.length), Array.prototype.splice.call(a, c, 1);
        return d
    }, Oa = function (a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }, Pa = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    };
    var Qa = function (a, b, c) {
        for (var d in a)b.call(c, a[d], d, a)
    }, Ra = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }, Sa = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }, Ta = function (a) {
        return null !== a && "withCredentials" in a
    }, Ua = function (a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }, Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Wa = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < Va.length; f++)c = Va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, Xa = function (a) {
        var b = arguments.length;
        if (1 == b && p(arguments[0]))return Xa.apply(null, arguments[0]);
        if (b % 2)throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
        return c
    };
    var Za = function () {
        this.a = "";
        this.c = Ya;
        this.b = null
    };
    Za.prototype.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };
    var Ya = {}, $a = function (a) {
        var b = new Za;
        b.a = a;
        b.b = 0
    };
    $a("<!DOCTYPE html>");
    $a("");
    var ab;
    a:{
        var bb = m.navigator;
        if (bb) {
            var cb = bb.userAgent;
            if (cb) {
                ab = cb;
                break a
            }
        }
        ab = ""
    }
    var B = function (a) {
        return -1 != ab.indexOf(a)
    };
    var db = B("Opera") || B("OPR"), C = B("Trident") || B("MSIE"), D = B("Edge"), E = B("Gecko") && !(-1 != ab.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), F = -1 != ab.toLowerCase().indexOf("webkit") && !B("Edge"), G = B("Macintosh"), eb = function () {
        var a = ab;
        if (E)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (D)return /Edge\/([\d\.]+)/.exec(a);
        if (C)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (F)return /WebKit\/(\S+)/.exec(a)
    }, fb = function () {
        var a = m.document;
        return a ? a.documentMode : void 0
    }, gb =
        function () {
            if (db && m.opera) {
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
            (b = eb()) && (a = b ? b[1] : "");
            return C && (b = fb(), b > parseFloat(a)) ? String(b) : a
        }(), hb = {}, H = function (a) {
        var b;
        if (!(b = hb[a])) {
            b = 0;
            for (var c = oa(String(gb)).split("."), d = oa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var N = l.exec(g) || ["", "", ""], Y = v.exec(k) || ["", "", ""];
                    if (0 == N[0].length && 0 == Y[0].length)break;
                    b = xa(0 == N[1].length ? 0 : parseInt(N[1], 10), 0 == Y[1].length ? 0 : parseInt(Y[1], 10)) || xa(0 == N[2].length, 0 == Y[2].length) || xa(N[2], Y[2])
                } while (0 == b)
            }
            b = hb[a] = 0 <= b
        }
        return b
    }, ib = m.document, jb = ib && C ? fb() || ("CSS1Compat" == ib.compatMode ? parseInt(gb, 10) : 5) : void 0;
    var kb = !C || 9 <= jb, lb = !E && !C || C && 9 <= jb || E && H("1.9.1"), mb = C && !H("9");
    var pb = function (a) {
            return a ? new nb(ob(a)) : ma || (ma = new nb)
        }, I = function (a) {
            return q(a) ? document.getElementById(a) : a
        }, rb = function (a, b) {
            var c = b || document, d = null;
            c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = qb(a, b)[0];
            return d || null
        }, qb = function (a, b) {
            var c, d, e, f;
            c = document;
            c = b || c;
            if (c.querySelectorAll && c.querySelector && a)return c.querySelectorAll("" + (a ? "." + a : ""));
            if (a && c.getElementsByClassName) {
                var g = c.getElementsByClassName(a);
                return g
            }
            g = c.getElementsByTagName("*");
            if (a) {
                f = {};
                for (d = e = 0; c = g[d]; d++) {
                    var k = c.className;
                    "function" == typeof k.split && A(k.split(/\s+/), a) && (f[e++] = c)
                }
                f.length = e;
                return f
            }
            return g
        }, tb = function (a, b) {
            Qa(b, function (b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : sb.hasOwnProperty(d) ? a.setAttribute(sb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }, sb = {
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
        }, vb = function (a, b, c, d) {
            function e(c) {
                c && b.appendChild(q(c) ? a.createTextNode(c) : c)
            }

            for (; d < c.length; d++) {
                var f = c[d];
                !ea(f) || ga(f) && 0 < f.nodeType ? e(f) : z(ub(f) ? Pa(f) : f, e)
            }
        }, wb = function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, xb = function (a, b) {
            if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) &
                    16);
            for (; b && a != b;)b = b.parentNode;
            return b == a
        }, ob = function (a) {
            y(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }, yb = function (a, b) {
            y(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                for (var c; c = a.firstChild;)a.removeChild(c);
                c = ob(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        zb = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, Ab = {IMG: " ", BR: "\n"}, Bb = function (a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        }, Cb = function (a) {
            a = a.getAttributeNode("tabindex");
            return null != a && a.specified
        }, Db = function (a) {
            a = a.tabIndex;
            return fa(a) && 0 <= a && 32768 > a
        }, Fb = function (a) {
            var b = [];
            Eb(a, b, !1);
            return b.join("")
        }, Eb = function (a, b, c) {
            if (!(a.nodeName in zb))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in Ab)b.push(Ab[a.nodeName]);
            else for (a = a.firstChild; a;)Eb(a, b, c), a = a.nextSibling
        }, ub = function (a) {
            if (a && "number" == typeof a.length) {
                if (ga(a))return "function" == typeof a.item || "string" == typeof a.item;
                if (r(a))return "function" == typeof a.item
            }
            return !1
        }, nb = function (a) {
            this.a = a || m.document || document
        };
    h = nb.prototype;
    h.m = function (a) {
        return q(a) ? this.a.getElementById(a) : a
    };
    h.Ka = function (a, b, c) {
        var d = this.a, e = arguments, f = e[0], g = e[1];
        if (!kb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', wa(g.name), '"');
            if (g.type) {
                f.push(' type="', wa(g.type), '"');
                var k = {};
                Wa(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (q(g) ? f.className = g : p(g) ? f.className = g.join(" ") : tb(f, g));
        2 < e.length && vb(d, f, e, 2);
        return f
    };
    h.tb = function (a, b) {
        vb(ob(a), a, arguments, 1)
    };
    h.getChildren = function (a) {
        return lb && void 0 != a.children ? a.children : Ha(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    h.contains = xb;
    var Gb = function (a) {
        Gb[" "](a);
        return a
    };
    Gb[" "] = n;
    var Hb = !C || 9 <= jb, Ib = !C || 9 <= jb, Jb = C && !H("9");
    !F || H("528");
    E && H("1.9b") || C && H("8") || db && H("9.5") || F && H("528");
    E && !H("8") || C && H("9");
    var J = function () {
        this.s = this.s;
        this.w = this.w
    };
    J.prototype.s = !1;
    J.prototype.fa = function () {
        this.s || (this.s = !0, this.u())
    };
    var Kb = function (a, b) {
        a.s ? b.call(void 0) : (a.w || (a.w = []), a.w.push(ba(void 0) ? t(b, void 0) : b))
    };
    J.prototype.u = function () {
        if (this.w)for (; this.w.length;)this.w.shift()()
    };
    var Lb = function (a) {
        a && "function" == typeof a.fa && a.fa()
    };
    var Mb = function (a, b) {
        this.type = a;
        this.a = this.target = b;
        this.c = !1;
        this.jb = !0
    };
    Mb.prototype.h = function () {
        this.c = !0
    };
    Mb.prototype.f = function () {
        this.jb = !1
    };
    var K = function (a, b) {
        Mb.call(this, a ? a.type : "");
        this.g = this.a = this.target = null;
        this.keyCode = this.clientY = this.clientX = 0;
        this.i = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.b = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            var e = a.relatedTarget;
            if (e) {
                if (E) {
                    var f;
                    a:{
                        try {
                            Gb(e.nodeName);
                            f = !0;
                            break a
                        } catch (g) {
                        }
                        f = !1
                    }
                    f || (e = null)
                }
            } else"mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.g = e;
            null === d ? (this.clientX =
                void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY);
            this.keyCode = a.keyCode || 0;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.i = G ? a.metaKey : a.ctrlKey;
            this.b = a;
            a.defaultPrevented && this.f()
        }
    };
    w(K, Mb);
    var Nb = [1, 4, 2], Ob = function (a) {
        return Hb ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Nb[0])
    };
    K.prototype.h = function () {
        K.j.h.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    K.prototype.f = function () {
        K.j.f.call(this);
        var a = this.b;
        if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, Jb)try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
        } catch (b) {
        }
    };
    var Pb = "closure_listenable_" + (1E6 * Math.random() | 0), Qb = 0;
    var Rb = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.ya = !!d;
        this.Da = e;
        this.Xa = ++Qb;
        this.removed = this.xa = !1
    }, Sb = function (a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Da = null
    };
    var Tb = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }, Vb = function (a, b, c, d, e, f) {
        var g = b.toString();
        b = a.a[g];
        b || (b = a.a[g] = [], a.b++);
        var k = Ub(b, c, e, f);
        -1 < k ? (a = b[k], d || (a.xa = !1)) : (a = new Rb(c, a.src, g, !!e, f), a.xa = d, b.push(a));
        return a
    };
    Tb.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))return !1;
        var e = this.a[a];
        b = Ub(e, b, c, d);
        return -1 < b ? (Sb(e[b]), y(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var Wb = function (a, b) {
        var c = b.type;
        c in a.a && Na(a.a[c], b) && (Sb(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    };
    Tb.prototype.removeAll = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.a)if (!a || c == a) {
            for (var d = this.a[c], e = 0; e < d.length; e++)++b, Sb(d[e]);
            delete this.a[c];
            this.b--
        }
        return b
    };
    var Xb = function (a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = Ub(a, c, d, e));
        return -1 < b ? a[b] : null
    }, Ub = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.ya == !!c && f.Da == d)return e
        }
        return -1
    };
    var Yb = "closure_lm_" + (1E6 * Math.random() | 0), Zb = {}, $b = 0, L = function (a, b, c, d, e) {
        if (p(b)) {
            for (var f = 0; f < b.length; f++)L(a, b[f], c, d, e);
            return null
        }
        c = ac(c);
        if (a && a[Pb])a = a.listen(b, c, d, e); else {
            if (!b)throw Error("Invalid event type");
            var f = !!d, g = bc(a);
            g || (a[Yb] = g = new Tb(a));
            c = Vb(g, b, c, !1, d, e);
            if (!c.proxy) {
                d = cc();
                c.proxy = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener)a.addEventListener(b.toString(), d, f); else if (a.attachEvent)a.attachEvent(dc(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
                $b++
            }
            a = c
        }
        return a
    }, cc = function () {
        var a = ec, b = Ib ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)return c
        };
        return b
    }, fc = function (a, b, c, d, e) {
        if (p(b))for (var f = 0; f < b.length; f++)fc(a, b[f], c, d, e); else c = ac(c), a && a[Pb] ? a.S(b, c, d, e) : a && (a = bc(a)) && (b = Xb(a, b, c, !!d, e)) && gc(b)
    }, gc = function (a) {
        if (!fa(a) && a && !a.removed) {
            var b = a.src;
            if (b && b[Pb])Wb(b.L, a); else {
                var c = a.type, d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.ya) : b.detachEvent && b.detachEvent(dc(c),
                    d);
                $b--;
                (c = bc(b)) ? (Wb(c, a), 0 == c.b && (c.src = null, b[Yb] = null)) : Sb(a)
            }
        }
    }, dc = function (a) {
        return a in Zb ? Zb[a] : Zb[a] = "on" + a
    }, ic = function (a, b, c, d) {
        var e = !0;
        if (a = bc(a))if (b = a.a[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.ya == c && !f.removed && (f = hc(f, d), e = e && !1 !== f)
        }
        return e
    }, hc = function (a, b) {
        var c = a.listener, d = a.Da || a.src;
        a.xa && gc(a);
        return c.call(d, b)
    }, ec = function (a, b) {
        if (a.removed)return !0;
        if (!Ib) {
            var c;
            if (!(c = b))a:{
                c = ["window", "event"];
                for (var d = m, e; e = c.shift();)if (null != d[e])d = d[e];
                else {
                    c = null;
                    break a
                }
                c = d
            }
            e = c;
            c = new K(e, this);
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
                for (f = c.a; f; f = f.parentNode)e.push(f);
                for (var f = a.type, g = e.length - 1; !c.c && 0 <= g; g--) {
                    c.a = e[g];
                    var k = ic(e[g], f, !0, c), d = d && k
                }
                for (g = 0; !c.c && g < e.length; g++)c.a = e[g], k = ic(e[g], f, !1, c), d = d && k
            }
            return d
        }
        return hc(a, new K(b, this))
    }, bc = function (a) {
        a = a[Yb];
        return a instanceof Tb ? a : null
    }, jc = "__closure_events_fn_" +
        (1E9 * Math.random() >>> 0), ac = function (a) {
        y(a, "Listener can not be null.");
        if (r(a))return a;
        y(a.handleEvent, "An object listener must have handleEvent method.");
        a[jc] || (a[jc] = function (b) {
            return a.handleEvent(b)
        });
        return a[jc]
    };
    var kc = function (a, b) {
        a.style.display = b ? "" : "none"
    }, lc = E ? "MozUserSelect" : F || D ? "WebkitUserSelect" : null;
    var mc = "StopIteration" in m ? m.StopIteration : {message: "StopIteration", stack: ""}, nc = function () {
    };
    nc.prototype.next = function () {
        throw mc;
    };
    nc.prototype.qb = function () {
        return this
    };
    var oc = function (a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof oc ? (c = a.R(), d = a.G()) : (c = Sa(a), d = Ra(a));
            for (var e = 0; e < c.length; e++)this.set(c[e], d[e])
        }
    };
    oc.prototype.G = function () {
        pc(this);
        for (var a = [], b = 0; b < this.a.length; b++)a.push(this.b[this.a[b]]);
        return a
    };
    oc.prototype.R = function () {
        pc(this);
        return this.a.concat()
    };
    oc.prototype.remove = function (a) {
        return qc(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && pc(this), !0) : !1
    };
    var pc = function (a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                qc(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;)d = a.a[b], qc(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    h = oc.prototype;
    h.get = function (a, b) {
        return qc(this.b, a) ? this.b[a] : b
    };
    h.set = function (a, b) {
        qc(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    h.forEach = function (a, b) {
        for (var c = this.R(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function () {
        return new oc(this)
    };
    h.qb = function (a) {
        pc(this);
        var b = 0, c = this.f, d = this, e = new nc;
        e.next = function () {
            if (c != d.f)throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)throw mc;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var qc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var rc = function (a) {
        if (a.G && "function" == typeof a.G)return a.G();
        if (q(a))return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return Ra(a)
    }, sc = function (a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)a.forEach(b, c); else if (ea(a) || q(a))z(a, b, c); else {
            var d;
            if (a.R && "function" == typeof a.R)d = a.R(); else if (a.G && "function" == typeof a.G)d = void 0; else if (ea(a) || q(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)d.push(f)
            } else d = Sa(a);
            for (var e = rc(a), f = e.length, g = 0; g < f; g++)b.call(c,
                e[g], d && d[g], a)
        }
    };
    var tc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, uc = function (a, b) {
        if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    };
    var vc = function (a, b) {
        this.f = this.l = this.c = "";
        this.i = null;
        this.g = this.h = "";
        this.a = !1;
        var c;
        a instanceof vc ? (this.a = ba(b) ? b : a.a, wc(this, a.c), this.l = a.l, this.f = a.f, xc(this, a.i), this.h = a.h, yc(this, a.b.clone()), this.g = a.g) : a && (c = String(a).match(tc)) ? (this.a = !!b, wc(this, c[1] || "", !0), this.l = zc(c[2] || ""), this.f = zc(c[3] || "", !0), xc(this, c[4]), this.h = zc(c[5] || "", !0), yc(this, c[6] || "", !0), this.g = zc(c[7] || "")) : (this.a = !!b, this.b = new M(null, 0, this.a))
    };
    vc.prototype.toString = function () {
        var a = [], b = this.c;
        b && a.push(Ac(b, Bc, !0), ":");
        var c = this.f;
        if (c || "file" == b)a.push("//"), (b = this.l) && a.push(Ac(b, Bc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
        if (c = this.h)this.f && "/" != c.charAt(0) && a.push("/"), a.push(Ac(c, "/" == c.charAt(0) ? Cc : Dc, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Ac(c, Ec));
        return a.join("")
    };
    vc.prototype.clone = function () {
        return new vc(this)
    };
    var wc = function (a, b, c) {
        a.c = c ? zc(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }, xc = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.i = b
        } else a.i = null
    }, yc = function (a, b, c) {
        b instanceof M ? (a.b = b, Fc(a.b, a.a)) : (c || (b = Ac(b, Gc)), a.b = new M(b, 0, a.a))
    }, zc = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, Ac = function (a, b, c) {
        return q(a) ? (a = encodeURI(a).replace(b, Hc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, Hc = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, Bc = /[#\/\?@]/g, Dc = /[\#\?:]/g, Cc = /[\#\?]/g, Gc = /[\#\?@]/g, Ec = /#/g, M = function (a, b, c) {
        this.c = this.a = null;
        this.b = a || null;
        this.f = !!c
    }, Jc = function (a) {
        a.a || (a.a = new oc, a.c = 0, a.b && uc(a.b, function (b, c) {
            Ic(a, decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }, Ic = function (a, b, c) {
        Jc(a);
        a.b = null;
        b = Kc(a, b);
        var d = a.a.get(b);
        d || a.a.set(b, d = []);
        d.push(c);
        a.c++
    };
    M.prototype.remove = function (a) {
        Jc(this);
        a = Kc(this, a);
        return qc(this.a.b, a) ? (this.b = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    var Lc = function (a, b) {
        Jc(a);
        b = Kc(a, b);
        return qc(a.a.b, b)
    };
    M.prototype.R = function () {
        Jc(this);
        for (var a = this.a.G(), b = this.a.R(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    M.prototype.G = function (a) {
        Jc(this);
        var b = [];
        if (q(a))Lc(this, a) && (b = Oa(b, this.a.get(Kc(this, a)))); else {
            a = this.a.G();
            for (var c = 0; c < a.length; c++)b = Oa(b, a[c])
        }
        return b
    };
    M.prototype.set = function (a, b) {
        Jc(this);
        this.b = null;
        a = Kc(this, a);
        Lc(this, a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    };
    M.prototype.get = function (a, b) {
        var c = a ? this.G(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var Mc = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.b = null, a.a.set(Kc(a, b), Pa(c)), a.c += c.length)
    };
    M.prototype.toString = function () {
        if (this.b)return this.b;
        if (!this.a)return "";
        for (var a = [], b = this.a.R(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.G(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
        return this.b = a.join("&")
    };
    M.prototype.clone = function () {
        var a = new M;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };
    var Kc = function (a, b) {
        var c = String(b);
        a.f && (c = c.toLowerCase());
        return c
    }, Fc = function (a, b) {
        b && !a.f && (Jc(a), a.b = null, a.a.forEach(function (a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), Mc(this, e, a))
        }, a));
        a.f = b
    };
    M.prototype.g = function (a) {
        for (var b = 0; b < arguments.length; b++)sc(arguments[b], function (a, b) {
            Ic(this, b, a)
        }, this)
    };
    var Nc = function (a) {
        if (a.classList)return a.classList;
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }, Oc = function (a, b) {
        return a.classList ? a.classList.contains(b) : A(Nc(a), b)
    }, Pc = function (a, b) {
        a.classList ? a.classList.add(b) : Oc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, Qc = function (a, b) {
        if (a.classList)z(b, function (b) {
            Pc(a, b)
        }); else {
            var c = {};
            z(Nc(a), function (a) {
                c[a] = !0
            });
            z(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)a.className += 0 < a.className.length ? " " + d : d
        }
    }, Rc = function (a, b) {
        a.classList ?
            a.classList.remove(b) : Oc(a, b) && (a.className = Ha(Nc(a), function (a) {
            return a != b
        }).join(" "))
    }, Sc = function (a, b) {
        a.classList ? z(b, function (b) {
            Rc(a, b)
        }) : a.className = Ha(Nc(a), function (a) {
            return !A(b, a)
        }).join(" ")
    };
    var Tc = {ud: !0}, Uc = {td: !0}, Vc = {vd: !0}, O = function () {
        throw Error("Do not instantiate directly");
    };
    O.prototype.oa = null;
    O.prototype.U = function () {
        return this.content
    };
    O.prototype.toString = function () {
        return this.content
    };
    var Wc = function () {
        O.call(this)
    };
    w(Wc, O);
    var $c = function (a, b) {
        var c = Xc;
        y(c, "Soy template may not be null.");
        a.innerHTML = Yc(c(b || Zc, void 0, void 0))
    }, Yc = function (a) {
        if (!ga(a))return String(a);
        if (a instanceof O) {
            if (a.ba === Tc)return Ba(a.U());
            if (a.ba === Vc)return wa(a.U())
        }
        Aa("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }, ad = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i, Zc = {};
    var dd = function (a, b, c, d, e) {
        if (!(C || D || F && H("525")))return !0;
        if (G && e)return bd(a);
        if (e && !d)return !1;
        fa(b) && (b = cd(b));
        if (!c && (17 == b || 18 == b || G && 91 == b))return !1;
        if ((F || D) && d && c)switch (a) {
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
        if (C && d && b == a)return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(F || D)
        }
        return bd(a)
    }, bd = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (F || D) && 0 == a)return !0;
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
    }, cd = function (a) {
        if (E)a = ed(a); else if (G && F)a:switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }, ed = function (a) {
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
    var P = function () {
        J.call(this);
        this.L = new Tb(this);
        this.nb = this;
        this.Ha = null
    };
    w(P, J);
    P.prototype[Pb] = !0;
    P.prototype.Ia = function (a) {
        this.Ha = a
    };
    P.prototype.addEventListener = function (a, b, c, d) {
        L(this, a, b, c, d)
    };
    P.prototype.removeEventListener = function (a, b, c, d) {
        fc(this, a, b, c, d)
    };
    var Q = function (a, b) {
        fd(a);
        var c, d = a.Ha;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.Ha)c.push(d), y(1E3 > ++e, "infinite loop")
        }
        var d = a.nb, e = b, f = e.type || e;
        if (q(e))e = new Mb(e, d); else if (e instanceof Mb)e.target = e.target || d; else {
            var g = e, e = new Mb(f, d);
            Wa(e, g)
        }
        var g = !0, k;
        if (c)for (var l = c.length - 1; !e.c && 0 <= l; l--)k = e.a = c[l], g = gd(k, f, !0, e) && g;
        e.c || (k = e.a = d, g = gd(k, f, !0, e) && g, e.c || (g = gd(k, f, !1, e) && g));
        if (c)for (l = 0; !e.c && l < c.length; l++)k = e.a = c[l], g = gd(k, f, !1, e) && g;
        return g
    };
    P.prototype.u = function () {
        P.j.u.call(this);
        this.L && this.L.removeAll(void 0);
        this.Ha = null
    };
    P.prototype.listen = function (a, b, c, d) {
        fd(this);
        return Vb(this.L, String(a), b, !1, c, d)
    };
    P.prototype.S = function (a, b, c, d) {
        return this.L.remove(String(a), b, c, d)
    };
    var gd = function (a, b, c, d) {
        b = a.L.a[String(b)];
        if (!b)return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.removed && g.ya == c) {
                var k = g.listener, l = g.Da || g.src;
                g.xa && Wb(a.L, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.jb
    }, fd = function (a) {
        y(a.L, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var hd = function (a, b) {
        P.call(this);
        a && this.attach(a, b)
    };
    w(hd, P);
    h = hd.prototype;
    h.ga = null;
    h.Ea = null;
    h.Pa = null;
    h.Fa = null;
    h.H = -1;
    h.V = -1;
    h.Ja = !1;
    var id = {
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
    }, jd = {
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
    }, kd = C || D || F && H("525"), ld = G && E;
    h = hd.prototype;
    h.vb = function (a) {
        if (F || D)if (17 == this.H && !a.ctrlKey || 18 == this.H && !a.altKey || G && 91 == this.H && !a.metaKey)this.V = this.H = -1;
        -1 == this.H && (a.ctrlKey && 17 != a.keyCode ? this.H = 17 : a.altKey && 18 != a.keyCode ? this.H = 18 : a.metaKey && 91 != a.keyCode && (this.H = 91));
        kd && !dd(a.keyCode, this.H, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.V = cd(a.keyCode), ld && (this.Ja = a.altKey))
    };
    h.xb = function (a) {
        this.V = this.H = -1;
        this.Ja = a.altKey
    };
    h.handleEvent = function (a) {
        var b = a.b, c, d, e = b.altKey;
        C && "keypress" == a.type ? c = this.V : (F || D) && "keypress" == a.type ? c = this.V : db && !F ? c = this.V : (c = b.keyCode || this.V, d = b.charCode || 0, ld && (e = this.Ja), G && 63 == d && 224 == c && (c = 191));
        d = c = cd(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in id ? d = id[c] : 25 == c && a.shiftKey && (d = 9) : f && f in jd && (d = jd[f]);
        this.H = d;
        a = new md(d, 0, 0, b);
        a.altKey = e;
        Q(this, a)
    };
    h.m = function () {
        return this.ga
    };
    h.attach = function (a, b) {
        this.Fa && nd(this);
        this.ga = a;
        this.Ea = L(this.ga, "keypress", this, b);
        this.Pa = L(this.ga, "keydown", this.vb, b, this);
        this.Fa = L(this.ga, "keyup", this.xb, b, this)
    };
    var nd = function (a) {
        a.Ea && (gc(a.Ea), gc(a.Pa), gc(a.Fa), a.Ea = null, a.Pa = null, a.Fa = null);
        a.ga = null;
        a.H = -1;
        a.V = -1
    };
    hd.prototype.u = function () {
        hd.j.u.call(this);
        nd(this)
    };
    var md = function (a, b, c, d) {
        K.call(this, d);
        this.type = "key";
        this.keyCode = a
    };
    w(md, K);
    var od, pd = {
        Db: "activedescendant",
        Ib: "atomic",
        Jb: "autocomplete",
        Lb: "busy",
        mb: "checked",
        Sb: "controls",
        Ub: "describedby",
        Xb: "disabled",
        Zb: "dropeffect",
        $b: "expanded",
        ac: "flowto",
        bc: "grabbed",
        fc: "haspopup",
        HIDDEN: "hidden",
        ic: "invalid",
        jc: "label",
        kc: "labelledby",
        lc: "level",
        qc: "live",
        Ac: "multiline",
        Bc: "multiselectable",
        Fc: "orientation",
        Gc: "owns",
        Hc: "posinset",
        Jc: "pressed",
        Nc: "readonly",
        Pc: "relevant",
        Qc: "required",
        Wc: "selected",
        Yc: "setsize",
        $c: "sort",
        od: "valuemax",
        pd: "valuemin",
        qd: "valuenow",
        rd: "valuetext"
    };
    var qd = {
        Eb: "alert",
        Fb: "alertdialog",
        Gb: "application",
        Hb: "article",
        Kb: "banner",
        Mb: "button",
        Nb: "checkbox",
        Ob: "columnheader",
        Pb: "combobox",
        Qb: "complementary",
        Rb: "contentinfo",
        Tb: "definition",
        Vb: "dialog",
        Wb: "directory",
        Yb: "document",
        FORM: "form",
        cc: "grid",
        dc: "gridcell",
        ec: "group",
        gc: "heading",
        hc: "img",
        mc: "link",
        nc: "list",
        oc: "listbox",
        pc: "listitem",
        rc: "log",
        sc: "main",
        tc: "marquee",
        uc: "math",
        vc: "menu",
        wc: "menubar",
        xc: "menuitem",
        yc: "menuitemcheckbox",
        zc: "menuitemradio",
        Cc: "navigation",
        Dc: "note",
        Ec: "option",
        Ic: "presentation",
        Kc: "progressbar",
        Lc: "radio",
        Mc: "radiogroup",
        Oc: "region",
        Rc: "row",
        Sc: "rowgroup",
        Tc: "rowheader",
        Uc: "scrollbar",
        Vc: "search",
        Xc: "separator",
        Zc: "slider",
        ad: "spinbutton",
        bd: "status",
        cd: "tab",
        dd: "tablist",
        ed: "tabpanel",
        fd: "textbox",
        gd: "textinfo",
        hd: "timer",
        jd: "toolbar",
        kd: "tooltip",
        ld: "tree",
        md: "treegrid",
        nd: "treeitem"
    };
    var rd = function (a, b, c) {
        p(c) && (c = c.join(" "));
        var d;
        y(b, "ARIA attribute cannot be empty.");
        y(Ua(pd, b), "No such ARIA attribute " + b);
        d = "aria-" + b;
        "" === c || void 0 == c ? (od || (od = {
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
        }), c = od, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var sd = function (a) {
        J.call(this);
        this.b = a;
        this.a = {}
    };
    w(sd, J);
    var td = [];
    h = sd.prototype;
    h.listen = function (a, b, c, d) {
        p(b) || (b && (td[0] = b.toString()), b = td);
        for (var e = 0; e < b.length; e++) {
            var f = L(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f)break;
            this.a[f.Xa] = f
        }
        return this
    };
    h.S = function (a, b, c, d, e) {
        if (p(b))for (var f = 0; f < b.length; f++)this.S(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.b || this, c = ac(c), d = !!d, b = a && a[Pb] ? Xb(a.L, String(b), c, d, e) : a ? (a = bc(a)) ? Xb(a, b, c, d, e) : null : null, b && (gc(b), delete this.a[b.Xa]);
        return this
    };
    h.removeAll = function () {
        Qa(this.a, function (a, b) {
            this.a.hasOwnProperty(b) && gc(a)
        }, this);
        this.a = {}
    };
    h.u = function () {
        sd.j.u.call(this);
        this.removeAll()
    };
    h.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ud = function () {
    };
    ca(ud);
    ud.prototype.a = 0;
    var R = function (a) {
        P.call(this);
        this.g = a || pb();
        this.ma = vd;
        this.C = null;
        this.K = !1;
        this.c = null;
        this.i = void 0;
        this.l = this.X = this.f = null;
        this.Sa = !1
    };
    w(R, P);
    R.prototype.pb = ud.M();
    var vd = null, wd = function (a, b) {
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
    }, xd = function (a, b) {
        if (a.f && a.f.l) {
            var c = a.f.l, d = a.C;
            d in c && delete c[d];
            c = a.f.l;
            if (null !== c && b in c)throw Error('The object already contains the key "' + b + '"');
            c[b] = a
        }
        a.C = b
    };
    R.prototype.m = function () {
        return this.c
    };
    var yd = function (a) {
        a = a.c;
        y(a, "Can not call getElementStrict before rendering/decorating.");
        return a
    }, zd = function (a) {
        a.i || (a.i = new sd(a));
        return a.i
    };
    R.prototype.Ia = function (a) {
        if (this.f && this.f != a)throw Error("Method not supported");
        R.j.Ia.call(this, a)
    };
    R.prototype.ua = function () {
        this.c = this.g.a.createElement("DIV")
    };
    var Ad = function (a, b) {
        if (a.K)throw Error("Component already rendered");
        a.c || a.ua();
        b ? b.insertBefore(a.c, null) : a.g.a.body.appendChild(a.c);
        a.f && !a.f.K || a.P()
    }, Bd = function (a, b) {
        if (a.K)throw Error("Component already rendered");
        if (b && a.Ya(b)) {
            a.Sa = !0;
            var c = ob(b);
            a.g && a.g.a == c || (a.g = pb(b));
            a.Ua(b);
            a.P()
        } else throw Error("Invalid element to decorate");
    };
    h = R.prototype;
    h.Ya = function () {
        return !0
    };
    h.Ua = function (a) {
        this.c = a
    };
    h.P = function () {
        this.K = !0;
        Cd(this, function (a) {
            !a.K && a.m() && a.P()
        })
    };
    h.qa = function () {
        Cd(this, function (a) {
            a.K && a.qa()
        });
        this.i && this.i.removeAll();
        this.K = !1
    };
    h.u = function () {
        this.K && this.qa();
        this.i && (this.i.fa(), delete this.i);
        Cd(this, function (a) {
            a.fa()
        });
        !this.Sa && this.c && wb(this.c);
        this.f = this.c = this.l = this.X = null;
        R.j.u.call(this)
    };
    var Cd = function (a, b) {
        a.X && z(a.X, b, void 0)
    };
    R.prototype.removeChild = function (a, b) {
        if (a) {
            var c = q(a) ? a : a.C || (a.C = ":" + (a.pb.a++).toString(36)), d;
            this.l && c ? (d = this.l, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.l;
                c in d && delete d[c];
                Na(this.X, a);
                b && (a.qa(), a.c && wb(a.c));
                c = a;
                if (null == c)throw Error("Unable to set parent component");
                c.f = null;
                R.j.Ia.call(c, null)
            }
        }
        if (!a)throw Error("Child is not in parent component");
        return a
    };
    var S = function () {
    }, Dd;
    ca(S);
    var Ed = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    S.prototype.za = function () {
    };
    S.prototype.ha = function (a) {
        return a.g.Ka("DIV", Fd(this, a).join(" "), a.U())
    };
    var Hd = function (a, b, c) {
        if (a = a.m ? a.m() : a) {
            var d = [b];
            C && !H("7") && (d = Gd(Nc(a), b), d.push(b));
            (c ? Qc : Sc)(a, d)
        }
    };
    S.prototype.Za = function () {
        return !0
    };
    S.prototype.N = function (a, b) {
        b.id && xd(a, b.id);
        b && b.firstChild ? Id(a, b.firstChild.nextSibling ? Pa(b.childNodes) : b.firstChild) : a.pa = null;
        var c = 0, d = this.o(), e = this.o(), f = !1, g = !1, k = !1, l = Pa(Nc(b));
        z(l, function (a) {
            f || a != d ? g || a != e ? c |= Jd(this, a) : g = !0 : (f = !0, e == d && (g = !0));
            1 == Jd(this, a) && (Da(b), Cb(b) && Db(b) && Bb(b, !1))
        }, this);
        a.v = c;
        f || (l.push(d), e == d && (g = !0));
        g || l.push(e);
        var v = a.J;
        v && l.push.apply(l, v);
        if (C && !H("7")) {
            var N = Gd(l);
            0 < N.length && (l.push.apply(l, N), k = !0)
        }
        if (!f || !g || v || k)b.className = l.join(" ");
        return b
    };
    S.prototype.hb = function (a) {
        if (null == a.ma) {
            var b = a.K ? a.c : a.g.a.body, c;
            a:{
                c = ob(b);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
                    c = c.direction || c.getPropertyValue("direction") || "";
                    break a
                }
                c = ""
            }
            a.ma = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction)
        }
        a.ma && this.ab(a.m(), !0);
        a.a() && this.Ga(a, a.Y)
    };
    var Kd = function (a, b) {
        var c = a.za();
        if (c) {
            y(b, "The element passed as a first parameter cannot be null.");
            var d = b.getAttribute("role") || null;
            c != d && (c ? (y(Ua(qd, c), "No such ARIA role " + c), b.setAttribute("role", c)) : b.removeAttribute("role"))
        }
    };
    h = S.prototype;
    h.Na = function (a, b) {
        var c = !b, d = C || db ? a.getElementsByTagName("*") : null;
        if (lc) {
            if (c = c ? "none" : "", a.style && (a.style[lc] = c), d)for (var e = 0, f; f = d[e]; e++)f.style && (f.style[lc] = c)
        } else if (C || db)if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)for (e = 0; f = d[e]; e++)f.setAttribute("unselectable", c)
    };
    h.ab = function (a, b) {
        Hd(a, this.o() + "-rtl", b)
    };
    h.$a = function (a) {
        var b;
        return a.B & 32 && (b = a.m()) ? Cb(b) && Db(b) : !1
    };
    h.Ga = function (a, b) {
        var c;
        if (a.B & 32 && (c = a.m())) {
            if (!b && a.v & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.v & 32 && a.bb()
            }
            (Cb(c) && Db(c)) != b && Bb(c, b)
        }
    };
    h.Oa = function (a, b, c) {
        var d = a.m();
        if (d) {
            var e = Ld(this, b);
            e && Hd(a, e, c);
            this.O(d, b, c)
        }
    };
    h.O = function (a, b, c) {
        Dd || (Dd = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
        y(a, "The element passed as a first parameter cannot be null.");
        b = Dd[b];
        var d = a.getAttribute("role") || null;
        d && (d = Ed[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && rd(a, b, c)
    };
    h.o = function () {
        return "goog-control"
    };
    var Fd = function (a, b) {
            var c = a.o(), d = [c], e = a.o();
            e != c && d.push(e);
            c = b.getState();
            for (e = []; c;) {
                var f = c & -c;
                e.push(Ld(a, f));
                c &= ~f
            }
            d.push.apply(d, e);
            (c = b.J) && d.push.apply(d, c);
            C && !H("7") && d.push.apply(d, Gd(d));
            return d
        }, Gd = function (a, b) {
            var c = [];
            b && (a = a.concat([b]));
            z([], function (d) {
                !Ka(d, u(A, a)) || b && !A(d, b) || c.push(d.join("_"))
            });
            return c
        }, Ld = function (a, b) {
            a.a || Md(a);
            return a.a[b]
        }, Jd = function (a, b) {
            if (!a.A) {
                a.a || Md(a);
                var c = a.a, d = {}, e;
                for (e in c)d[c[e]] = e;
                a.A = d
            }
            c = parseInt(a.A[b], 10);
            return isNaN(c) ? 0 : c
        },
        Md = function (a) {
            var b = a.o(), c = b.replace(/\xa0|\s/g, " ");
            y(-1 == c.indexOf(" "), "ControlRenderer has an invalid css class: '" + b + "'");
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
    var Nd = function () {
    };
    w(Nd, S);
    ca(Nd);
    h = Nd.prototype;
    h.za = function () {
        return "button"
    };
    h.O = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                y(a, "The button DOM element cannot be null.");
                rd(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Nd.j.O.call(this, a, b, c)
        }
    };
    h.ha = function (a) {
        var b = Nd.j.ha.call(this, a), c = a.D;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.$) && this.Ma(b, c);
        a.B & 16 && this.O(b, 16, a.ia());
        return b
    };
    h.N = function (a, b) {
        b = Nd.j.N.call(this, a, b);
        var c = this.La(b);
        a.$ = c;
        a.D = b.title;
        a.B & 16 && this.O(b, 16, a.ia());
        return b
    };
    h.La = n;
    h.Ma = n;
    h.o = function () {
        return "goog-button"
    };
    var Od = function (a, b) {
        if (!a)throw Error("Invalid class name " + a);
        if (!r(b))throw Error("Invalid decorator function " + b);
    }, Pd = {};
    var T = function (a, b, c) {
        R.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[ha] || (b[ha] = ++ia);
                if (d = Pd[d])break;
                b = b.j ? b.j.constructor : null
            }
            b = d ? r(d.M) ? d.M() : new d : null
        }
        this.b = b;
        this.pa = ba(a) ? a : null
    };
    w(T, R);
    h = T.prototype;
    h.pa = null;
    h.v = 0;
    h.B = 39;
    h.na = 255;
    h.Y = !0;
    h.J = null;
    h.Ca = !0;
    var Rd = function (a) {
        a.K && 0 != a.Ca && Qd(a, !1);
        a.Ca = !1
    }, Sd = function (a, b) {
        b && (a.J ? A(a.J, b) || a.J.push(b) : a.J = [b], Hd(a, b, !0))
    };
    T.prototype.ua = function () {
        var a = this.b.ha(this);
        this.c = a;
        Kd(this.b, a);
        this.b.Na(a, !1);
        this.Y || (kc(a, !1), a && rd(a, "hidden", !0))
    };
    T.prototype.Ya = function (a) {
        return this.b.Za(a)
    };
    T.prototype.Ua = function (a) {
        this.c = a = this.b.N(this, a);
        Kd(this.b, a);
        this.b.Na(a, !1);
        this.Y = "none" != a.style.display
    };
    T.prototype.P = function () {
        T.j.P.call(this);
        var a = this.b, b = yd(this);
        y(this);
        y(b);
        this.Y || rd(b, "hidden", !this.Y);
        this.a() || a.O(b, 1, !this.a());
        this.B & 8 && a.O(b, 8, !!(this.v & 8));
        this.B & 16 && a.O(b, 16, this.ia());
        this.B & 64 && a.O(b, 64, !!(this.v & 64));
        this.b.hb(this);
        this.B & -2 && (this.Ca && Qd(this, !0), this.B & 32 && (a = this.m())) && (b = this.A || (this.A = new hd), b.attach(a), zd(this).listen(b, "key", this.wb).listen(a, "focus", this.ub).listen(a, "blur", this.bb))
    };
    var Qd = function (a, b) {
        var c = zd(a), d = a.m();
        b ? (c.listen(d, "mouseover", a.gb).listen(d, "mousedown", a.ra).listen(d, "mouseup", a.sa).listen(d, "mouseout", a.fb), a.Aa != n && c.listen(d, "contextmenu", a.Aa), C && (c.listen(d, "dblclick", a.eb), a.F || (a.F = new Td(a), Kb(a, u(Lb, a.F))))) : (c.S(d, "mouseover", a.gb).S(d, "mousedown", a.ra).S(d, "mouseup", a.sa).S(d, "mouseout", a.fb), a.Aa != n && c.S(d, "contextmenu", a.Aa), C && (c.S(d, "dblclick", a.eb), Lb(a.F), a.F = null))
    };
    T.prototype.qa = function () {
        T.j.qa.call(this);
        this.A && nd(this.A);
        this.Y && this.a() && this.b.Ga(this, !1)
    };
    T.prototype.u = function () {
        T.j.u.call(this);
        this.A && (this.A.fa(), delete this.A);
        delete this.b;
        this.F = this.J = this.pa = null
    };
    T.prototype.U = function () {
        return this.pa
    };
    var Id = function (a, b) {
        a.pa = b
    }, Ud = function (a) {
        a = a.U();
        if (!a)return "";
        if (!q(a))if (p(a))a = Ia(a, Fb).join(""); else {
            if (mb && "innerText" in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
                var b = [];
                Eb(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            mb || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    T.prototype.a = function () {
        return !(this.v & 1)
    };
    T.prototype.setEnabled = function (a) {
        var b = this.f;
        b && "function" == typeof b.a && !b.a() || !Vd(this, 1, !a) || (a || (Wd(this, !1), Xd(this, !1)), this.Y && this.b.Ga(this, a), Yd(this, 1, !a, !0))
    };
    var Xd = function (a, b) {
        Vd(a, 2, b) && Yd(a, 2, b)
    }, Wd = function (a, b) {
        Vd(a, 4, b) && Yd(a, 4, b)
    };
    T.prototype.ia = function () {
        return !!(this.v & 16)
    };
    T.prototype.Qa = function (a) {
        Vd(this, 16, a) && Yd(this, 16, a)
    };
    T.prototype.T = function (a) {
        Vd(this, 32, a) && Yd(this, 32, a)
    };
    T.prototype.getState = function () {
        return this.v
    };
    var Yd = function (a, b, c, d) {
        d || 1 != b ? a.B & b && c != !!(a.v & b) && (a.b.Oa(a, b, c), a.v = c ? a.v | b : a.v & ~b) : a.setEnabled(!c)
    }, Zd = function (a) {
        if (a.K && a.v & 32)throw Error("Component already rendered");
        a.v & 32 && Yd(a, 32, !1);
        a.B &= -33
    }, U = function (a, b) {
        return !!(a.na & b) && !!(a.B & b)
    }, Vd = function (a, b, c) {
        return !!(a.B & b) && !!(a.v & b) != c && (!(0 & b) || Q(a, wd(b, c))) && !a.s
    };
    h = T.prototype;
    h.gb = function (a) {
        (!a.g || !xb(this.m(), a.g)) && Q(this, "enter") && this.a() && U(this, 2) && Xd(this, !0)
    };
    h.fb = function (a) {
        a.g && xb(this.m(), a.g) || !Q(this, "leave") || (U(this, 4) && Wd(this, !1), U(this, 2) && Xd(this, !1))
    };
    h.Aa = n;
    h.ra = function (a) {
        this.a() && (U(this, 2) && Xd(this, !0), !Ob(a) || F && G && a.ctrlKey || (U(this, 4) && Wd(this, !0), this.b && this.b.$a(this) && this.m().focus()));
        !Ob(a) || F && G && a.ctrlKey || a.f()
    };
    h.sa = function (a) {
        this.a() && (U(this, 2) && Xd(this, !0), this.v & 4 && this.ka(a) && U(this, 4) && Wd(this, !1))
    };
    h.eb = function (a) {
        this.a() && this.ka(a)
    };
    h.ka = function (a) {
        U(this, 16) && this.Qa(!this.ia());
        U(this, 8) && Vd(this, 8, !0) && Yd(this, 8, !0);
        if (U(this, 64)) {
            var b = !(this.v & 64);
            Vd(this, 64, b) && Yd(this, 64, b)
        }
        b = new Mb("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.i = a.i);
        return Q(this, b)
    };
    h.ub = function () {
        U(this, 32) && this.T(!0)
    };
    h.bb = function () {
        U(this, 4) && Wd(this, !1);
        U(this, 32) && this.T(!1)
    };
    h.wb = function (a) {
        return this.Y && this.a() && this.Ba(a) ? (a.f(), a.h(), !0) : !1
    };
    h.Ba = function (a) {
        return 13 == a.keyCode && this.ka(a)
    };
    if (!r(T))throw Error("Invalid component class " + T);
    if (!r(S))throw Error("Invalid renderer class " + S);
    var $d = T[ha] || (T[ha] = ++ia);
    Pd[$d] = S;
    Od("goog-control", function () {
        return new T(null)
    });
    var Td = function (a) {
        J.call(this);
        this.b = a;
        this.a = !1;
        this.c = new sd(this);
        Kb(this, u(Lb, this.c));
        a = yd(this.b);
        this.c.listen(a, "mousedown", this.g).listen(a, "mouseup", this.h).listen(a, "click", this.f)
    };
    w(Td, J);
    Td.prototype.g = function () {
        this.a = !1
    };
    Td.prototype.h = function () {
        this.a = !0
    };
    Td.prototype.f = function (a) {
        if (this.a)this.a = !1; else {
            var b = a.b, c = b.button, d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.b.ra(new K(b, a.a));
            b.type = "mouseup";
            this.b.sa(new K(b, a.a));
            b.button = c;
            b.type = d
        }
    };
    Td.prototype.u = function () {
        this.b = null;
        Td.j.u.call(this)
    };
    var ae = function () {
    };
    w(ae, Nd);
    ca(ae);
    h = ae.prototype;
    h.za = function () {
    };
    h.ha = function (a) {
        Rd(a);
        a.na &= -256;
        Zd(a);
        return a.g.Ka("BUTTON", {
            "class": Fd(this, a).join(" "),
            disabled: !a.a(),
            title: a.D || "",
            value: a.$ || ""
        }, Ud(a) || "")
    };
    h.Za = function (a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    h.N = function (a, b) {
        Rd(a);
        a.na &= -256;
        Zd(a);
        if (b.disabled) {
            var c = Ba(Ld(this, 1));
            Pc(b, c)
        }
        return ae.j.N.call(this, a, b)
    };
    h.hb = function (a) {
        zd(a).listen(a.m(), "click", a.ka)
    };
    h.Na = n;
    h.ab = n;
    h.$a = function (a) {
        return a.a()
    };
    h.Ga = n;
    h.Oa = function (a, b, c) {
        ae.j.Oa.call(this, a, b, c);
        (a = a.m()) && 1 == b && (a.disabled = c)
    };
    h.La = function (a) {
        return a.value
    };
    h.Ma = function (a, b) {
        a && (a.value = b)
    };
    h.O = n;
    var be = function (a, b, c) {
        T.call(this, a, b || ae.M(), c)
    };
    w(be, T);
    be.prototype.u = function () {
        be.j.u.call(this);
        delete this.$;
        delete this.D
    };
    be.prototype.P = function () {
        be.j.P.call(this);
        if (this.B & 32) {
            var a = this.m();
            a && zd(this).listen(a, "keyup", this.Ba)
        }
    };
    be.prototype.Ba = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ka(a) : 32 == a.keyCode
    };
    Od("goog-button", function () {
        return new be(null)
    });
    var ce = function (a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    };
    ce.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };
    var de = function (a, b) {
        a.g(b);
        a.b < a.f && (a.b++, b.next = a.a, a.a = b)
    };
    var ee = function (a) {
        m.setTimeout(function () {
            throw a;
        }, 0)
    }, fe, ge = function () {
        var a = m.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = t(function (a) {
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
        if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (ba(c.next)) {
                    c = c.next;
                    var a = c.Ta;
                    c.Ta = null;
                    a()
                }
            };
            return function (a) {
                d.next = {Ta: a};
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
    var he = function () {
        this.b = this.a = null
    }, je = new ce(function () {
        return new ie
    }, function (a) {
        a.reset()
    }, 100);
    he.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var ie = function () {
        this.next = this.b = this.a = null
    };
    ie.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    ie.prototype.reset = function () {
        this.next = this.b = this.a = null
    };
    var oe = function (a, b) {
        ke || le();
        me || (ke(), me = !0);
        var c = ne, d = je.get();
        d.set(a, b);
        c.b ? c.b.next = d : (y(!c.a), c.a = d);
        c.b = d
    }, ke, le = function () {
        if (m.Promise && m.Promise.resolve) {
            var a = m.Promise.resolve(void 0);
            ke = function () {
                a.then(pe)
            }
        } else ke = function () {
            var a = pe;
            !r(m.setImmediate) || m.Window && m.Window.prototype && !B("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (fe || (fe = ge()), fe(a)) : m.setImmediate(a)
        }
    }, me = !1, ne = new he, pe = function () {
        for (var a = null; a = ne.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                ee(b)
            }
            de(je,
                a)
        }
        me = !1
    };
    var qe = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, re = function (a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var ue = function (a, b) {
        this.a = 0;
        this.i = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != n)try {
            var c = this;
            a.call(b, function (a) {
                se(c, 2, a)
            }, function (a) {
                if (!(a instanceof te))try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (b) {
                }
                se(c, 3, a)
            })
        } catch (d) {
            se(this, 3, d)
        }
    }, ve = function () {
        this.next = this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    ve.prototype.reset = function () {
        this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    var we = new ce(function () {
        return new ve
    }, function (a) {
        a.reset()
    }, 100), xe = function (a, b, c) {
        var d = we.get();
        d.b = a;
        d.c = b;
        d.f = c;
        return d
    };
    ue.prototype.then = function (a, b, c) {
        null != a && Ca(a, "opt_onFulfilled should be a function.");
        null != b && Ca(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return ye(this, r(a) ? a : null, r(b) ? b : null, c)
    };
    qe(ue);
    ue.prototype.cancel = function (a) {
        0 == this.a && oe(function () {
            var b = new te(a);
            ze(this, b)
        }, this)
    };
    var ze = function (a, b) {
        if (0 == a.a)if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g);
                e && (0 == c.a && 1 == d ? ze(c, b) : (f ? (d = f, y(c.b), y(null != d), d.next == c.f && (c.f = d), d.next = d.next.next) : Ae(c), Be(c, e, 3, b)))
            }
            a.c = null
        } else se(a, 3, b)
    }, De = function (a, b) {
        a.b || 2 != a.a && 3 != a.a || Ce(a);
        y(null != b.b);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }, ye = function (a, b, c, d) {
        var e = xe(null, null, null);
        e.a = new ue(function (a, g) {
            e.b = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (v) {
                    g(v)
                }
            } :
                a;
            e.c = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !ba(e) && b instanceof te ? g(b) : a(e)
                } catch (v) {
                    g(v)
                }
            } : g
        });
        e.a.c = a;
        De(a, e);
        return e.a
    };
    ue.prototype.s = function (a) {
        y(1 == this.a);
        this.a = 0;
        se(this, 2, a)
    };
    ue.prototype.w = function (a) {
        y(1 == this.a);
        this.a = 0;
        se(this, 3, a)
    };
    var se = function (a, b, c) {
        if (0 == a.a) {
            a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            var d;
            a:{
                var e = c, f = a.s, g = a.w;
                if (e instanceof ue)null != f && Ca(f, "opt_onFulfilled should be a function."), null != g && Ca(g, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), De(e, xe(f || n, g || null, a)), d = !0; else if (re(e))e.then(f, g, a), d = !0; else {
                    if (ga(e))try {
                        var k = e.then;
                        if (r(k)) {
                            Ee(e, k, f, g, a);
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
            (a.i = c, a.a = b, a.c = null, Ce(a), 3 != b || c instanceof te || Fe(a, c))
        }
    }, Ee = function (a, b, c, d, e) {
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
    }, Ce = function (a) {
        a.h || (a.h = !0, oe(a.l, a))
    }, Ae = function (a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        null != b && y(null != b.b);
        return b
    };
    ue.prototype.l = function () {
        for (var a = null; a = Ae(this);)Be(this, a, this.a, this.i);
        this.h = !1
    };
    var Be = function (a, b, c, d) {
        if (3 == c && b.c && !b.g)for (; a && a.g; a = a.c)a.g = !1;
        if (b.a)b.a.c = null, Ge(b, c, d); else try {
            b.g ? b.b.call(b.f) : Ge(b, c, d)
        } catch (e) {
            He.call(null, e)
        }
        de(we, b)
    }, Ge = function (a, b, c) {
        2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
    }, Fe = function (a, b) {
        a.g = !0;
        oe(function () {
            a.g && He.call(null, b)
        })
    }, He = ee, te = function (a) {
        x.call(this, a)
    };
    w(te, x);
    te.prototype.name = "cancel";
    var Ie = function (a, b, c) {
        if (r(a))c && (a = t(a, c)); else if (a && "function" == typeof a.handleEvent)a = t(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    };
    C && H(8);
    var Je = function (a) {
        if (null != a)switch (a.oa) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }, Ke = function () {
        O.call(this)
    };
    w(Ke, O);
    Ke.prototype.ba = Tc;
    var V = function (a) {
        if (null != a && a.ba === Tc)return y(a.constructor === Ke), a;
        if (a instanceof Za) {
            var b = Le, c;
            a instanceof Za && a.constructor === Za && a.c === Ya ? c = a.a : (Aa("expected object of type SafeHtml, got '" + a + "'"), c = "type_error:SafeHtml");
            a = b(c, a.b)
        } else a = Le(wa(String(String(a))), Je(a));
        return a
    }, Me = function () {
        O.call(this)
    };
    w(Me, O);
    Me.prototype.ba = Uc;
    Me.prototype.oa = 1;
    var Ne = function (a, b) {
        this.content = String(a);
        this.oa = null != b ? b : null
    };
    w(Ne, Wc);
    Ne.prototype.ba = Vc;
    var Le = function (a) {
        function b(a) {
            this.content = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.oa = d);
            return e
        }
    }(Ke);
    (function (a) {
        function b(a) {
            this.content = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            var e = String(a);
            if (!e)return "";
            e = new b(e);
            void 0 !== d && (e.oa = d);
            return e
        }
    })(Ke);
    var Se = function (a) {
            return null != a && a.ba === Tc ? (y(a.constructor === Ke), a = String(a.U()).replace(Oe, "").replace(Pe, "&lt;"), String(a).replace(Qe, Re)) : wa(String(a))
        }, Te = {
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
        }, Re = function (a) {
            return Te[a]
        }, Qe = /[\x00\x22\x27\x3c\x3e]/g, Ue = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        Oe = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Pe = /</g;
    var Ve = function (a) {
        var b;
        a = a || {};
        var c = Le, d = '<div role="button"' + (a.id ? ' id="' + Se(a.id) + '"' : "") + ' class="', e, f;
        e = a || {};
        var g = "goog-inline-block jfk-button ";
        switch (ga(f = e.style) ? f.toString() : f) {
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
                "") + (e.checked ? " jfk-button-checked" : "") + (e.rb ? " " + e.rb : "") + (e.disabled ? " jfk-button-disabled" : "");
        d = d + Se(new Ne(g, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.Ab ? Se(a.Ab) : "0") + '"') + (a.title ? " " + (a.Cb ? "data-tooltip" : "title") + '="' + Se(a.title) + '"' : "") + (a.value ? ' value="' + Se(a.value) + '"' : "");
        a.attributes ? (e = a.attributes, null != e && e.ba === Uc ? (y(e.constructor === Me), e = e.U().replace(/([^"'\s])$/, "$1 ")) : (e = String(e), Ue.test(e) || (Aa("Bad value `%s` for |filterHtmlAttributes", [e]), e = "zSoyz")),
            e = " " + e) : e = "";
        d = d + e + ">";
        a = null == (b = a.content) ? "" : b;
        b = V(a);
        return c(d + b + "</div>")
    };
    Ve.a = "jfk.templates.button.strict";
    var W = function (a, b, c, d) {
        be.call(this, a, We.M(), b);
        this.Z = c || 0;
        this.aa = d || 0;
        this.Ra = !1
    };
    w(W, be);
    W.prototype.setEnabled = function (a) {
        this.a() != a && (W.j.setEnabled.call(this, a), Xe(this))
    };
    W.prototype.T = function (a) {
        W.j.T.call(this, a);
        Ye(this, !1)
    };
    W.prototype.ra = function (a) {
        W.j.ra.call(this, a);
        this.a() && Ye(this, !0)
    };
    W.prototype.sa = function (a) {
        W.j.sa.call(this, a);
        this.a() && Ye(this, !0)
    };
    var Ye = function (a, b) {
        if (a.m()) {
            var c = a.m();
            b ? Pc(c, "jfk-button-clear-outline") : Rc(c, "jfk-button-clear-outline")
        }
    }, Xe = function (a) {
        a.m() && Ze(a.b, a)
    }, af = function () {
        var a = $e("MSG_TRANSLATE");
        return new W(a, void 0, 2)
    }, We = function () {
        this.w = this.o() + "-standard";
        this.b = this.o() + "-action";
        this.s = this.o() + "-primary";
        this.g = this.o() + "-default";
        this.h = this.o() + "-flat";
        this.l = this.o() + "-narrow";
        this.i = this.o() + "-mini";
        this.f = this.o() + "-contrast"
    };
    w(We, Nd);
    ca(We);
    h = We.prototype;
    h.W = function (a, b, c) {
        a && c.Z != a && (c.Z = a, Xe(c));
        b && c.aa != b && (c.aa = b, Xe(c))
    };
    h.o = function () {
        return "jfk-button"
    };
    h.ha = function (a) {
        Fa(a, W, "Button is expected to be instance of jfk.Button");
        var b = a.g, c;
        c = {disabled: !a.a(), checked: a.ia(), style: a.Z, title: a.D, Cb: a.Ra, value: a.$, width: a.aa};
        y(Ve, "Soy template may not be null.");
        a:{
            var d = Ve(c || Zc);
            c = (b || pb()).a.createElement("DIV");
            var d = Yc(d), e = d.match(ad);
            y(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
            c.innerHTML = d;
            if (1 == c.childNodes.length &&
                (d = c.firstChild, 1 == d.nodeType)) {
                c = d;
                break a
            }
        }
        b.tb(c, a.U());
        this.N(a, c);
        return c
    };
    h.N = function (a, b) {
        We.j.N.call(this, a, b);
        this.c || (this.c = Xa(this.w, u(this.W, 0, null), this.b, u(this.W, 2, null), this.s, u(this.W, 3, null), this.g, u(this.W, 1, null), this.h, u(this.W, 4, null), this.i, u(this.W, 5, null), this.f, u(this.W, 6, null), this.l, u(this.W, null, 1)));
        for (var c = Nc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip"))a.D = c, a.Ra = !0;
        return b
    };
    h.La = function (a) {
        return a.getAttribute("value") || ""
    };
    h.Ma = function (a, b) {
        a && a.setAttribute("value", b)
    };
    var Ze = function (a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }

        y(b.m(), "Button element must already exist when updating style.");
        var d = [], e = [], f = b.Z;
        c(0 == f, a.w);
        c(2 == f, a.b);
        c(3 == f, a.s);
        c(4 == f, a.h);
        c(5 == f, a.i);
        c(1 == f, a.g);
        c(6 == f, a.f);
        c(1 == b.aa, a.l);
        c(!b.a(), a.o() + "-disabled");
        Sc(b.m(), e);
        Qc(b.m(), d)
    };
    var bf = function () {
    };
    w(bf, S);
    ca(bf);
    bf.prototype.ha = function (a) {
        var b = a.g.Ka("SPAN", Fd(this, a).join(" "));
        cf(this, b, a.h);
        return b
    };
    bf.prototype.N = function (a, b) {
        b = bf.j.N.call(this, a, b);
        y(b);
        var c = Nc(b), d = !1;
        A(c, df(this, null)) ? d = null : A(c, df(this, !0)) ? d = !0 : A(c, df(this, !1)) && (d = !1);
        a.h = d;
        y(b, "The element cannot be null.");
        rd(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
        return b
    };
    bf.prototype.za = function () {
        return "checkbox"
    };
    var cf = function (a, b, c) {
        if (b) {
            y(b);
            var d = df(a, c);
            y(d);
            y(b);
            Oc(b, d) || (Qa(ef, function (a) {
                a = df(this, a);
                y(b);
                a == d ? Pc(b, a) : Rc(b, a)
            }, a), rd(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
        }
    };
    bf.prototype.o = function () {
        return "goog-checkbox"
    };
    var df = function (a, b) {
        var c = a.o();
        if (1 == b)return c + "-checked";
        if (0 == b)return c + "-unchecked";
        if (null == b)return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var ff = function (a, b, c) {
        c = c || bf.M();
        T.call(this, null, c, b);
        this.h = ba(a) ? a : !1
    };
    w(ff, T);
    var ef = {mb: !0, a: !1, b: null};
    h = ff.prototype;
    h.ia = function () {
        return 1 == this.h
    };
    h.Qa = function (a) {
        a != this.h && (this.h = a, cf(this.b, this.m(), this.h))
    };
    h.P = function () {
        ff.j.P.call(this);
        this.Ca && zd(this).listen(this.m(), "click", this.cb);
        yd(this)
    };
    h.setEnabled = function (a) {
        ff.j.setEnabled.call(this, a);
        if (a = this.m())a.tabIndex = this.a() ? 0 : -1
    };
    h.cb = function (a) {
        a.h();
        var b = this.h ? "uncheck" : "check";
        this.a() && !a.target.href && Q(this, b) && (a.f(), this.Qa(this.h ? !1 : !0), Q(this, "change"))
    };
    h.Ba = function (a) {
        32 == a.keyCode && (this.ka(a), this.cb(a));
        return !1
    };
    Od("goog-checkbox", function () {
        return new ff
    });
    var gf = [0, 200, 80, 50], hf = {
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
    var jf = function (a) {
        return eval("(" + a + ")")
    };
    var kf = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    kf.prototype.a = null;
    var lf = 0;
    kf.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || lf++;
        d || la();
        this.b = b;
        delete this.a
    };
    kf.prototype.getMessage = function () {
        return this.b
    };
    var mf = function (a) {
        this.f = a;
        this.b = this.c = this.a = null
    }, nf = function (a, b) {
        this.name = a;
        this.value = b
    };
    nf.prototype.toString = function () {
        return this.name
    };
    var of = new nf("SEVERE", 1E3), pf = new nf("CONFIG", 700), qf = new nf("FINE", 500);
    mf.prototype.getChildren = function () {
        this.b || (this.b = {});
        return this.b
    };
    var rf = function (a) {
        if (a.c)return a.c;
        if (a.a)return rf(a.a);
        Aa("Root logger has no level set.");
        return null
    };
    mf.prototype.log = function (a, b, c) {
        if (a.value >= rf(this).value)for (r(b) && (b = b()), a = new kf(a, String(b), this.f), c && (a.a = c), c = "log:" + a.getMessage(), m.console && (m.console.timeStamp ? m.console.timeStamp(c) : m.console.markTimeline && m.console.markTimeline(c)), m.msWriteProfilerMark && m.msWriteProfilerMark(c), c = this; c;)c = c.a
    };
    var sf = {}, tf = null, uf = function (a) {
        tf || (tf = new mf(""), sf[""] = tf, tf.c = pf);
        var b;
        if (!(b = sf[a])) {
            b = new mf(a);
            var c = a.lastIndexOf("."), d = a.substr(c + 1), c = uf(a.substr(0, c));
            c.getChildren()[d] = b;
            b.a = c;
            sf[a] = b
        }
        return b
    };
    var X = function (a, b) {
        a && a.log(qf, b, void 0)
    };
    var vf = function () {
    };
    vf.prototype.a = null;
    var xf = function (a) {
        var b;
        (b = a.a) || (b = {}, wf(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var yf, zf = function () {
    };
    w(zf, vf);
    var Af = function (a) {
        return (a = wf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, wf = function (a) {
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
    yf = new zf;
    var Z = function (a) {
        P.call(this);
        this.ua = new oc;
        this.F = a || null;
        this.b = !1;
        this.D = this.a = null;
        this.h = this.Z = this.f = "";
        this.c = this.T = this.l = this.X = !1;
        this.g = 0;
        this.i = null;
        this.aa = "";
        this.A = this.wa = !1
    };
    w(Z, P);
    var Bf = Z.prototype, Cf = uf("goog.net.XhrIo");
    Bf.I = Cf;
    var Df = /^https?$/i, Ef = ["POST", "PUT"], Ff = [], Gf = function (a, b, c, d) {
        var e = new Z;
        Ff.push(e);
        b && e.listen("complete", b);
        Vb(e.L, "ready", e.ma, !0, void 0, void 0);
        e.g = Math.max(0, 1E4);
        e.send(a, c, d, void 0)
    };
    Z.prototype.ma = function () {
        this.fa();
        Na(Ff, this)
    };
    Z.prototype.send = function (a, b, c, d) {
        if (this.a)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.f + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.f = a;
        this.h = "";
        this.Z = b;
        this.X = !1;
        this.b = !0;
        this.a = this.F ? Af(this.F) : Af(yf);
        this.D = this.F ? xf(this.F) : xf(yf);
        this.a.onreadystatechange = t(this.$, this);
        try {
            X(this.I, Hf(this, "Opening Xhr")), this.T = !0, this.a.open(b, String(a), !0), this.T = !1
        } catch (f) {
            X(this.I, Hf(this, "Error opening Xhr: " + f.message));
            If(this, f);
            return
        }
        a = c || "";
        var e = this.ua.clone();
        d && sc(d, function (a, b) {
            e.set(b, a)
        });
        d = Ma(e.R());
        c = m.FormData && a instanceof m.FormData;
        !A(Ef, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.aa && (this.a.responseType = this.aa);
        Ta(this.a) && (this.a.withCredentials = this.wa);
        try {
            Jf(this), 0 < this.g && (this.A = Kf(this.a), X(this.I, Hf(this, "Will abort after " + this.g + "ms if incomplete, xhr2 " + this.A)), this.A ? (this.a.timeout = this.g, this.a.ontimeout = t(this.ea, this)) :
                this.i = Ie(this.ea, this.g, this)), X(this.I, Hf(this, "Sending request")), this.l = !0, this.a.send(a), this.l = !1
        } catch (f) {
            X(this.I, Hf(this, "Send error: " + f.message)), If(this, f)
        }
    };
    var Kf = function (a) {
        return C && H(9) && fa(a.timeout) && ba(a.ontimeout)
    }, La = function (a) {
        return "content-type" == a.toLowerCase()
    };
    Z.prototype.ea = function () {
        "undefined" != typeof aa && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", X(this.I, Hf(this, this.h)), Q(this, "timeout"), this.a && this.b && (X(this.I, Hf(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, Q(this, "complete"), Q(this, "abort"), Lf(this)))
    };
    var If = function (a, b) {
        a.b = !1;
        a.a && (a.c = !0, a.a.abort(), a.c = !1);
        a.h = b;
        Mf(a);
        Lf(a)
    }, Mf = function (a) {
        a.X || (a.X = !0, Q(a, "complete"), Q(a, "error"))
    };
    Z.prototype.u = function () {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Lf(this, !0));
        Z.j.u.call(this)
    };
    Z.prototype.$ = function () {
        this.s || (this.T || this.l || this.c ? Nf(this) : this.va())
    };
    Z.prototype.va = function () {
        Nf(this)
    };
    var Nf = function (a) {
        if (a.b && "undefined" != typeof aa)if (a.D[1] && 4 == Of(a) && 2 == Pf(a))X(a.I, Hf(a, "Local request error detected and ignored")); else if (a.l && 4 == Of(a))Ie(a.$, 0, a); else if (Q(a, "readystatechange"), 4 == Of(a)) {
            X(a.I, Hf(a, "Request complete"));
            a.b = !1;
            try {
                if (Qf(a))Q(a, "complete"), Q(a, "success"); else {
                    var b;
                    try {
                        b = 2 < Of(a) ? a.a.statusText : ""
                    } catch (c) {
                        X(a.I, "Can not get status: " + c.message), b = ""
                    }
                    a.h = b + " [" + Pf(a) + "]";
                    Mf(a)
                }
            } finally {
                Lf(a)
            }
        }
    }, Lf = function (a, b) {
        if (a.a) {
            Jf(a);
            var c = a.a, d = a.D[0] ? n : null;
            a.a = null;
            a.D = null;
            b || Q(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (c = a.I) && c.log(of, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }, Jf = function (a) {
        a.a && a.A && (a.a.ontimeout = null);
        fa(a.i) && (m.clearTimeout(a.i), a.i = null)
    }, Qf = function (a) {
        var b = Pf(a), c;
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
            if (b = 0 === b)a = String(a.f).match(tc)[1] || null, !a && m.self && m.self.location && (a = m.self.location.protocol, a = a.substr(0, a.length -
                1)), b = !Df.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }, Of = function (a) {
        return a.a ? a.a.readyState : 0
    }, Pf = function (a) {
        try {
            return 2 < Of(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }, Rf = function (a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return X(a.I, "Can not get responseText: " + b.message), ""
        }
    }, Hf = function (a, b) {
        return b + " [" + a.Z + " " + a.f + " " + Pf(a) + "]"
    };
    var Sf = function () {
    };
    var Tf = function () {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.i = 1;
        this.f = {};
        L(window, "beforeunload", this.h, !1, this)
    };
    ca(Tf);
    var Uf = function (a, b, c) {
        if (null == b)return "1";
        switch (da(b)) {
            case "string":
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), encodeURIComponent(String(a));
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var d = [], e;
                for (e in b)d.push(Uf(a, b[e], c));
                return d.join(",");
            case "object":
                d = [];
                for (e in b)d.push([encodeURIComponent(String(e)), Uf(a, b[e], c || "smtalt" == e)].join("="));
                return d.join(",");
            default:
                return ""
        }
    };
    Tf.prototype.log = function (a, b, c) {
        this.b.push([a, b, c]);
        this.c || (this.c = !0, Ie(this.g, 0, this))
    };
    Tf.prototype.g = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            Vf(this, b[0], b[1], b[2])
        }
        this.b = [];
        this.c = !1
    };
    var Vf = function (a, b, c, d) {
        Wf(a, (d || "") + "/gen204?" + [encodeURIComponent(String(b)), Uf(a, c, "smtalt" == b)].join("="))
    }, Wf = function (a, b) {
        var c = new Image, d = a.i++;
        a.f[d] = c;
        c.onload = c.onerror = function () {
            delete Tf.M().f[d]
        };
        c.src = b;
        c = null
    };
    Tf.prototype.h = function () {
        this.g();
        for (var a in this.a)if (0 != this.a[a]) {
            var b = a;
            Vf(this, b, this.a[b][1], void 0);
            b in this.a && (m.clearTimeout(this.a[b][0]), delete this.a[b])
        }
    };
    var Xf = function (a) {
        return function () {
            return a
        }
    }, Yf = function (a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b[c + 2], d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d), d = "+" == b[c + 1] ? a >>> d : a << d;
            a = "+" == b[c] ? a + d & 4294967295 : a ^ d
        }
        return a
    }, Zf = null, $f = function (a) {
        var b;
        if (null === Zf) {
            var c = Xf(String.fromCharCode(84));
            b = Xf(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            Zf = Number(window[c.join(b())]) || 0
        }
        b = Zf;
        var d = Xf(String.fromCharCode(116)), c = Xf(String.fromCharCode(107)), d = [d(), d()];
        d[1] = c();
        for (var c = "&" + d.join("") + "=", d = [],
                 e = 0, f = 0; f < a.length; f++) {
            var g = a.charCodeAt(f);
            128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (d[e++] = g >> 12 | 224, d[e++] = g >> 6 & 63 | 128), d[e++] = g & 63 | 128)
        }
        a = b || 0;
        for (e = 0; e < d.length; e++)a += d[e], a = Yf(a, "+-a^+6");
        a = Yf(a, "+-3^+b+-f");
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." + (a ^ b))
    };
    var ag = function (a, b) {
        this.c = a;
        this.a = "";
        b && (this.a = b);
        this.b = 0
    }, bg = function (a) {
        a = a.G("q").join("");
        return $f(a)
    }, cg = function (a, b, c, d, e) {
        c = c.toString();
        c += bg(d);
        d = d.toString();
        var f = "POST";
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
        ++a.b;
        Gf(b, function (b) {
            --a.b;
            e(b)
        }, f, d)
    };
    ag.prototype.f = function (a, b) {
        var c = b.target;
        if (!Qf(c) || "[" != Rf(c)[0] && "{" != Rf(c)[0]) {
            var d = Tf.M(), e = String(c.f), c = Rf(c);
            d.log("invalidResponse", {q: e.substring(0, 500), ql: e.length, r: c.substring(0, 500), rl: c.length});
            a(null)
        } else {
            d = Rf(c);
            c = {"class": "trans.common.TranslationAPI", func: "handleSingleResult_", url: String(c.f)};
            try {
                e = jf(d)
            } catch (f) {
                throw e = Tf.M(), c.js = d, c.error = f.message, e.log("jsonParseErr", c), f;
            }
            p(e) && (e = new Sf);
            a(e)
        }
    };
    var dg = function () {
        W.call(this, "", void 0, 4);
        Sd(this, "jfk-button-flat");
        Sd(this, "gtx-audio-button");
        Sd(this, "no-audio");
        this.va = this.wa = "";
        zd(this).listen(this, "action", this.ob)
    };
    w(dg, W);
    dg.prototype.ob = function () {
        chrome.runtime.sendMessage({audioSrc: eg(this.wa, this.va)})
    };
    var fg = function (a, b, c) {
        var d = c.toLowerCase();
        d in hf && gf[hf[d.toLowerCase()]] >= b.length ? (a.J && Na(a.J, "no-audio") && (0 == a.J.length && (a.J = null), Hd(a, "no-audio", !1)), a.wa = b, a.va = c) : Sd(a, "no-audio")
    }, eg = function (a, b) {
        return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + $f(a) + "&q=" + encodeURIComponent(String(a))
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    var gg = function (a, b) {
        this.g = [];
        this.F = a;
        this.D = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.s = this.w = this.i = !1;
        this.h = 0;
        this.b = null;
        this.l = 0
    };
    gg.prototype.cancel = function (a) {
        if (this.a)this.c instanceof gg && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
            }
            this.F ? this.F.call(this.D, this) : this.s = !0;
            this.a || hg(this, new ig)
        }
    };
    gg.prototype.A = function (a, b) {
        this.i = !1;
        jg(this, a, b)
    };
    var jg = function (a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        kg(a)
    }, mg = function (a) {
        if (a.a) {
            if (!a.s)throw new lg;
            a.s = !1
        }
    }, hg = function (a, b) {
        mg(a);
        ng(b);
        jg(a, !1, b)
    }, ng = function (a) {
        y(!(a instanceof gg), "An execution sequence may not be initiated with a blocking Deferred.")
    }, og = function (a, b, c, d) {
        y(!a.w, "Blocking Deferreds can not be re-used");
        a.g.push([b, c, d]);
        a.a && kg(a)
    };
    gg.prototype.then = function (a, b, c) {
        var d, e, f = new ue(function (a, b) {
            d = a;
            e = b
        });
        og(this, d, function (a) {
            a instanceof ig ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    qe(gg);
    var pg = function (a) {
        return Ja(a.g, function (a) {
            return r(a[1])
        })
    }, kg = function (a) {
        if (a.h && a.a && pg(a)) {
            var b = a.h, c = qg[b];
            c && (m.clearTimeout(c.C), delete qg[b]);
            a.h = 0
        }
        a.b && (a.b.l--, delete a.b);
        for (var b = a.c, d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(), f = e[0], g = e[1], e = e[2];
            if (f = a.f ? g : f)try {
                var k = f.call(e || a.D, b);
                ba(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                if (re(b) || "function" === typeof m.Promise && b instanceof m.Promise)d = !0, a.i = !0
            } catch (l) {
                b = l, a.f = !0, pg(a) || (c = !0)
            }
        }
        a.c = b;
        d && (k = t(a.A, a, !0), d = t(a.A,
            a, !1), b instanceof gg ? (og(b, k, d), b.w = !0) : b.then(k, d));
        c && (b = new rg(b), qg[b.C] = b, a.h = b.C)
    }, lg = function () {
        x.call(this)
    };
    w(lg, x);
    lg.prototype.message = "Deferred has already fired";
    lg.prototype.name = "AlreadyCalledError";
    var ig = function () {
        x.call(this)
    };
    w(ig, x);
    ig.prototype.message = "Deferred was canceled";
    ig.prototype.name = "CanceledError";
    var rg = function (a) {
        this.C = m.setTimeout(t(this.b, this), 0);
        this.a = a
    };
    rg.prototype.b = function () {
        y(qg[this.C], "Cannot throw an error that is not scheduled.");
        delete qg[this.C];
        throw this.a;
    };
    var qg = {};
    var wg = function (a, b) {
        var c = b || {}, d = c.document || document, e = document.createElement("SCRIPT"), f = {
            kb: e,
            ea: void 0
        }, g = new gg(sg, f), k = null, l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
            tg(e, !0);
            hg(g, new ug(1, "Timeout reached for loading script " + a))
        }, l), f.ea = k);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (tg(e, c.sb || !1, k), mg(g), ng(null), jg(g, !0, null))
        };
        e.onerror = function () {
            tg(e, !0, k);
            hg(g, new ug(0, "Error while loading script " +
                a))
        };
        f = c.attributes || {};
        Wa(f, {type: "text/javascript", charset: "UTF-8", src: a});
        tb(e, f);
        vg(d).appendChild(e);
        return g
    }, vg = function (a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }, sg = function () {
        if (this && this.kb) {
            var a = this.kb;
            a && "SCRIPT" == a.tagName && tg(a, !0, this.ea)
        }
    }, tg = function (a, b, c) {
        null != c && m.clearTimeout(c);
        a.onload = n;
        a.onerror = n;
        a.onreadystatechange = n;
        b && window.setTimeout(function () {
            wb(a)
        }, 0)
    }, ug = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " +
            b);
        x.call(this, c);
        this.code = a
    };
    w(ug, x);
    var xg = function (a, b) {
        this.b = new vc(a);
        this.a = b ? b : "callback";
        this.ea = 5E3
    }, yg = 0;
    xg.prototype.send = function (a, b, c, d) {
        a = a || null;
        d = d || "_" + (yg++).toString(36) + la().toString(36);
        m._callbacks_ || (m._callbacks_ = {});
        var e = this.b.clone();
        if (a)for (var f in a)if (!a.hasOwnProperty || a.hasOwnProperty(f)) {
            var g = e, k = f, l = a[f];
            p(l) || (l = [String(l)]);
            Mc(g.b, k, l)
        }
        b && (m._callbacks_[d] = zg(d, b), b = this.a, f = "_callbacks_." + d, p(f) || (f = [String(f)]), Mc(e.b, b, f));
        b = wg(e.toString(), {timeout: this.ea, sb: !0});
        og(b, null, Ag(d, a, c), void 0);
        return {C: d, Va: b}
    };
    xg.prototype.cancel = function (a) {
        a && (a.Va && a.Va.cancel(), a.C && Bg(a.C, !1))
    };
    var Ag = function (a, b, c) {
        return function () {
            Bg(a, !1);
            c && c(b)
        }
    }, zg = function (a, b) {
        return function (c) {
            Bg(a, !0);
            b.apply(void 0, arguments)
        }
    }, Bg = function (a, b) {
        m._callbacks_[a] && (b ? delete m._callbacks_[a] : m._callbacks_[a] = n)
    };
    var Cg = function (a) {
        a = String(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)return "zh-CN";
        if ("zh-tw" == a)return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }, $e = function (a) {
        a = chrome.i18n.getMessage(a);
        return chrome.i18n.getMessage(a)
    };
    var Eg = function (a) {
        this.c = [];
        chrome.i18n.getAcceptLanguages(t(this.l, this));
        this.b = "";
        this.g = "1";
        this.a = [];
        this.f = [];
        this.i = !!a;
        chrome.storage.local.get(null, t(this.w, this));
        Dg(this)
    }, Gg = function () {
        var a = Fg;
        if ("" != a.b)a = a.b; else a:{
            for (var b = 0; b < a.c.length; b++) {
                var c = Cg(a.c[b]);
                if (a.a[c]) {
                    a = c;
                    break a
                }
            }
            a = "en"
        }
        return a
    };
    Eg.prototype.w = function (a) {
        "gtxTargetLang" in a && (this.b = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.g = a.gtxShowBubble);
        "gtxSourceLangList" in a && (this.f = Hg(this, a.gtxSourceLangList));
        "gtxTargetLangList" in a && (this.a = Hg(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.i) {
            var b = (new Date).getTime(), c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0, d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b - c) || d != a) && (new xg("https://translate.googleapis.com/translate_a/l",
                "cb")).send({client: "gtx", hl: d}, t(this.s, this, d))
        }
    };
    var Hg = function (a, b) {
        var c = [], d;
        for (d in b)c.push({code: d, name: b[d]});
        c.sort(a.h);
        d = {};
        for (var e = 0; e < c.length; e++)d[c[e].code] = c[e].name;
        return d
    };
    Eg.prototype.h = function (a, b) {
        return a.name.localeCompare(b.name)
    };
    var Dg = function (a) {
        chrome.storage.onChanged.addListener(function (b) {
            b.gtxTargetLang && (a.b = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.g = b.gtxShowBubble.newValue)
        })
    };
    Eg.prototype.l = function (a) {
        this.c = a
    };
    Eg.prototype.s = function (a, b) {
        var c = (new Date).getTime(), d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.f = b.sl;
        this.a = b.tl
    };
    var Ig = function (a) {
        var b = Fg;
        if ("sl" == a)return b.f;
        if ("tl" == a)return b.a;
        throw Error("Invalid input for getLangList()");
    };
    var Xc = function (a) {
        var b = "";
        if (a.query)if (a.lb) {
            for (var b = b + '<div class="gtx-language"><select class="gtx-lang-selector">', c = a.zb, d = c.length, e = 0; e < d; e++)var f = c[e], b = b + ("auto" != f ? '<option value="' + V(f[0]) + '" ' + (f[0] == a.yb ? "selected" : "") + ">" + V(f[1]) + "</option>" : "");
            //b += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + V(a.query) + '</div><br><div class="gtx-language">' + V(a.Bb) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' +
            //    V(a.lb) + "</div>";
            //todo add +word -word
            b += '</select>&nbsp&nbsp&nbsp&nbsp<a href="javascript:void(0)" id="btnaddword">+WordNote</a></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + V(a.query) + '</div><br><div class="gtx-language">' + V(a.Bb) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + V(a.lb) + "</div>";
            if (a.Wa) {
                b += '<table style="width: 95%">';
                c = a.Wa;
                d = c.length;
                for (e = 0; e < d; e++) {
                    f = c[e];
                    b += '<tr><td class="gtx-td"><div class="gtx-pos">' + V(f.pos) + '</div></td><td class="gtx-td">';
                    if (a.popup)for (var f = f.terms, g = f.length, k = 0; k < g; k++)b += (0 != k ? ", " : "") + V(f[k]); else for (f = f.terms, g = f.length, k = 0; k < g; k++)var l = f[k], b = b + (3 > k ? (0 != k ? ", " : "") + V(l) : "");
                    b += "</td></tr>"
                }
                b += "</table>"
            }
            b += "<br>"
        } else b += "No translation results for <b>" + V(a.query) + "</b>.";
        return b
    };
    Xc.a = "extension.translation";
    var Fg = new Eg, Jg = function () {
    };
    ca(Jg);
    var Kg = function (a, b, c, d) {
        if ("" != a) {
            window.selection = a;
            a = new ag("gtx", "https://translate.googleapis.com");
            var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            d = d ? d : "auto";
            var f = Gg();
            c = new M("source=" + c);
            var g = window.selection, k = a.a + "/translate_a/single", l = new M, v = new M;
            window.EGGS_JANGO && ("qab" == d && (l.set("slo", "qab"), d = "en"), "qab" == f && (l.set("tlo", "qab"), f = "en"));
            l.set("client", a.c);
            l.set("sl", d);
            l.set("tl", f);
            l.set("hl", e);
            Mc(l, "dt", ["t", "bd"]);
            l.set("dj", "1");
            c && l.g(c);
            v.set("q", g);
            cg(a, k, l, v, t(a.f, a, b))
        }
    };
    Jg.prototype.a = function (a, b, c, d) {
        if (null != d) {
            for (var e = d.src, f = Gg(), g = [], k = [], l = d.sentences, v = 0; v < l.length; v++)g.push(l[v].orig), k.push(l[v].trans);
            var g = g.join(""), k = k.join(""), l = Ig("tl")[f].toUpperCase(), v = Ig("sl"), N = [], Y;
            for (Y in v)N.push([Y, v[Y]]);
            $c(c, {query: b, lb: k, Bb: l, yb: e, zb: N, Wa: d.dict, popup: a});
            d = rb("gtx-lang-selector", c);
            L(d, "change", t(this.b, this, a, b, c), !1, this);
            b = new dg;
            d = rb("gtx-source-audio", c);
            Bd(b, d);
            fg(b, g, e);
            b = new dg;
            d = rb("gtx-target-audio", c);
            Bd(b, d);
            fg(b, k, f);
            e = "https://translate.google.com/?source=gtx_m#" +
                e + "/" + f + "/" + encodeURIComponent(window.selection);
            a ? (a = I("more"), a.setAttribute("href", e), c = new W("", void 0, 4), Ad(c, I("new-translation")), kc(I("new-translation"), !0), c = I("translate-page"), yb(a, $e("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), kc(a, !0)) : (a = document.createElement("a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target", "_blank"), yb(a, $e("MSG_FOOTER_OPTIONS").toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), c.appendChild(a),
                a = document.createElement("a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), yb(a, $e("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), c.appendChild(a))
        } else yb(I("translation"), $e("MSG_TRANSLATION_ERROR"))
    };
    Jg.prototype.b = function (a, b, c, d) {
        Kg(b, t(this.a, this, a, b, c), "ls", d.target.value)
    };
    var Lg = Jg.M(), Mg = chrome.extension.getBackgroundPage();
    document.addEventListener("DOMContentLoaded", function () {
        chrome.tabs.executeScript({code: "disposeWindowBubble();"});
        Ng();
        Og();
        L(I("new-translation"), "click", Pg);
        yb(I("options-link"), $e("MSG_FOOTER_OPTIONS"));
        yb(I("translate-link"), $e("MSG_FOOTER_TRANSLATE"));
        Qg();
        bindNewEvent();
        chrome.runtime.connect()
    });
    var Ng = function () {
        var a = I("search-bar"), b = af(), c = I("text-input");
        Ad(b, a);
        L(b, "action", Rg);
        L(c, "keypress", function (a) {
            13 == a.keyCode && Rg()
        });
        Sg()
    }, Og = function () {
        var a = I("translate-page");
        yb(a, $e("MSG_TRANSLATE_PAGE"));
        var b;
        chrome.tabs.query({active: !0, currentWindow: !0}, function (a) {
            b = a[0]
        });
        L(a, "click", function () {
            Mg.translate.getTranslateManager().attach(b.id);
            window.close()
        })
    }, Qg = function () {
        chrome.tabs.executeScript({code: "window.getSelection().toString();", allFrames: !0}, function (a) {
            for (var b = 0; b <
            a.length; b++)if ("" != a[b]) {
                Tg(a[b], "popup");
                break
            }
        })
    }, Pg = function () {
        Sg();
        kc(I("more"), !1);
        I("text-input").focus()
    }, Sg = function () {
        I("text-input").value = "";
        kc(I("search-bar"), !0);
        kc(I("new-translation"), !1);
        kc(I("more"), !1);
        $c(I("translation"))
    }, Rg = function () {
        Tg(I("text-input").value, "input")
    }, Tg = function (a, b) {
        "" != a.trim() && (kc(I("search-bar"), !1), Kg(a, t(Lg.a, Lg, !0, a, I("translation")), b))
    };



    //todo add +word -word  click  event linsten handler
    function bindNewEvent() {
        document.getElementById("btnlogout").onclick = function (event) {
            chrome.runtime.sendMessage({
                action : 'logout'
            },function(response){
                console.log(response);
                if(response.result=="success"){
                    event.target.innerText="logout success";
                }else{
                    event.target.innerText="logout error";
                }
            });
        };
        document.getElementById("btnwordlist").onclick = function () {
            window.open("http://dict.youdao.com/wordbook/wordlist");
        };
        document.getElementById("btnlogin").onclick = function () {
            chrome.runtime.sendMessage({
                action : 'login'
            },function(response){
                console.log(response);
            });
        };
    }
})();
