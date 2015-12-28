/* Copyright 2014 Google */
(function () {
    var g, k = this, m = function () {
        }, aa = function (a) {
            a.ca = function () {
                return a.kb ? a.kb : a.kb = new a
            }
        }, ba = function (a) {
            var b = typeof a;
            if ("object" == b)if (a) {
                if (a instanceof Array)return "array";
                if (a instanceof Object)return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call &&
                    "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
            } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
            return b
        }, n = function (a) {
            return "array" == ba(a)
        }, ca = function (a) {
            var b = ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }, p = function (a) {
            return "string" == typeof a
        }, r = function (a) {
            return "function" == ba(a)
        }, da = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }, ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ga = 0, ha = function (a, b, c) {
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
        }, t = function (a, b, c) {
            t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return t.apply(null, arguments)
        }, u = function (a, b) {
            var c =
                Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }, ja = Date.now || function () {
                return +new Date
            }, v = function (a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.j = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.sd = function (a, c, f) {
                for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++)h[l - 2] = arguments[l];
                return b.prototype[c].apply(a, h)
            }
        };
    var w = function (a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, w); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    v(w, Error);
    w.prototype.name = "CustomError";
    var ka;
    var la = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    }, ma = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, ua = function (a) {
        if (!na.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(oa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(pa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(qa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(ra, "&quot;"));
        -1 != a.indexOf("'") &&
        (a = a.replace(sa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(ta, "&#0;"));
        return a
    }, oa = /&/g, pa = /</g, qa = />/g, ra = /"/g, sa = /'/g, ta = /\x00/g, na = /[\x00&<>"']/, va = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var wa = function (a, b) {
        b.unshift(a);
        w.call(this, la.apply(null, b));
        b.shift()
    };
    v(wa, w);
    wa.prototype.name = "AssertionError";
    var xa = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
        throw new wa("" + e, f || []);
    }, x = function (a, b, c) {
        a || xa("", null, b, Array.prototype.slice.call(arguments, 2))
    }, ya = function (a, b) {
        throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, za = function (a, b, c) {
        p(a) || xa("Expected string but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Aa = function (a, b, c) {
        r(a) || xa("Expected function but got %s: %s.", [ba(a), a], b,
            Array.prototype.slice.call(arguments, 2))
    }, Ba = function (a, b, c) {
        da(a) && 1 == a.nodeType || xa("Expected Element but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, Da = function (a, b, c, d) {
        a instanceof b || xa("Expected instanceof %s but got %s.", [Ca(b), Ca(a)], c, Array.prototype.slice.call(arguments, 3))
    }, Ca = function (a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null ===
        a ? "null" : typeof a
    };
    var Ea = function (a) {
        Ea[" "](a);
        return a
    };
    Ea[" "] = m;
    var Fa = Array.prototype.indexOf ? function (a, b, c) {
        x(null != a.length);
        return Array.prototype.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a))return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, y = Array.prototype.forEach ? function (a, b, c) {
        x(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ga = Array.prototype.filter ? function (a,
                                               b, c) {
        x(null != a.length);
        return Array.prototype.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, h = p(a) ? a.split("") : a, l = 0; l < d; l++)if (l in h) {
            var q = h[l];
            b.call(c, q, l, a) && (e[f++] = q)
        }
        return e
    }, Ha = Array.prototype.map ? function (a, b, c) {
        x(null != a.length);
        return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, h = 0; h < d; h++)h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    }, Ia = Array.prototype.some ? function (a, b, c) {
        x(null != a.length);
        return Array.prototype.some.call(a,
            b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return !0;
        return !1
    }, Ja = Array.prototype.every ? function (a, b, c) {
        x(null != a.length);
        return Array.prototype.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return !1;
        return !0
    }, Ka = function (a, b) {
        return 0 <= Fa(a, b)
    }, La = function (a, b) {
        var c = Fa(a, b), d;
        if (d = 0 <= c)x(null != a.length), Array.prototype.splice.call(a, c, 1);
        return d
    }, Ma = function (a) {
        return Array.prototype.concat.apply(Array.prototype,
            arguments)
    }, Na = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    }, Oa = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (ca(d)) {
                var e = a.length || 0, f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++)a[e + h] = d[h]
            } else a.push(d)
        }
    }, Qa = function (a, b, c, d) {
        x(null != a.length);
        Array.prototype.splice.apply(a, Pa(arguments, 1))
    }, Pa = function (a, b, c) {
        x(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b,
            c)
    };
    var Ra = function (a, b, c) {
        for (var d in a)b.call(c, a[d], d, a)
    }, Sa = function (a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }, Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Ua = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < Ta.length; f++)c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, Va = function (a) {
        var b = arguments.length;
        if (1 == b && n(arguments[0]))return Va.apply(null, arguments[0]);
        if (b % 2)throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
        return c
    };
    var Wa;
    a:{
        var Xa = k.navigator;
        if (Xa) {
            var Ya = Xa.userAgent;
            if (Ya) {
                Wa = Ya;
                break a
            }
        }
        Wa = ""
    }
    var z = function (a) {
        return -1 != Wa.indexOf(a)
    };
    var Za = z("Opera") || z("OPR"), B = z("Trident") || z("MSIE"), C = z("Edge"), D = z("Gecko") && !(-1 != Wa.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"), E = -1 != Wa.toLowerCase().indexOf("webkit") && !z("Edge"), F = z("Macintosh"), $a = function () {
        var a = Wa;
        if (D)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (C)return /Edge\/([\d\.]+)/.exec(a);
        if (B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (E)return /WebKit\/(\S+)/.exec(a)
    }, ab = function () {
        var a = k.document;
        return a ? a.documentMode : void 0
    }, bb =
        function () {
            if (Za && k.opera) {
                var a;
                var b = k.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = $a()) && (a = b ? b[1] : "");
            return B && (b = ab(), b > parseFloat(a)) ? String(b) : a
        }(), cb = {}, G = function (a) {
        var b;
        if (!(b = cb[a])) {
            b = 0;
            for (var c = ma(String(bb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "", l = d[f] || "", q = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var W = q.exec(h) || ["", "", ""], fa = A.exec(l) || ["", "", ""];
                    if (0 == W[0].length && 0 == fa[0].length)break;
                    b = va(0 == W[1].length ? 0 : parseInt(W[1], 10), 0 == fa[1].length ? 0 : parseInt(fa[1], 10)) || va(0 == W[2].length, 0 == fa[2].length) || va(W[2], fa[2])
                } while (0 == b)
            }
            b = cb[a] = 0 <= b
        }
        return b
    }, db = k.document, eb = db && B ? ab() || ("CSS1Compat" == db.compatMode ? parseInt(bb, 10) : 5) : void 0;
    var fb = !B || 9 <= eb, gb = !B || 9 <= eb, hb = B && !G("9");
    !E || G("528");
    D && G("1.9b") || B && G("8") || Za && G("9.5") || E && G("528");
    D && !G("8") || B && G("9");
    var H = function () {
        this.u = this.u;
        this.m = this.m
    };
    H.prototype.u = !1;
    H.prototype.qa = function () {
        this.u || (this.u = !0, this.v())
    };
    var ib = function (a, b) {
        a.u ? b.call(void 0) : (a.m || (a.m = []), a.m.push(b))
    };
    H.prototype.v = function () {
        if (this.m)for (; this.m.length;)this.m.shift()()
    };
    var jb = function (a) {
        a && "function" == typeof a.qa && a.qa()
    };
    var kb = function (a, b) {
        this.type = a;
        this.b = this.target = b;
        this.f = !1;
        this.lb = !0
    };
    kb.prototype.l = function () {
        this.f = !0
    };
    kb.prototype.g = function () {
        this.lb = !1
    };
    var I = function (a, b) {
        kb.call(this, a ? a.type : "");
        this.i = this.b = this.target = null;
        this.a = this.clientY = this.clientX = 0;
        this.m = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.c = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            var e = a.relatedTarget;
            if (e) {
                if (D) {
                    var f;
                    a:{
                        try {
                            Ea(e.nodeName);
                            f = !0;
                            break a
                        } catch (h) {
                        }
                        f = !1
                    }
                    f || (e = null)
                }
            } else"mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.i = e;
            null === d ? (this.clientX =
                void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY);
            this.a = a.keyCode || 0;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.m = F ? a.metaKey : a.ctrlKey;
            this.c = a;
            a.defaultPrevented && this.g()
        }
    };
    v(I, kb);
    var lb = [1, 4, 2], mb = function (a) {
        return fb ? 0 == a.c.button : "click" == a.type ? !0 : !!(a.c.button & lb[0])
    };
    I.prototype.l = function () {
        I.j.l.call(this);
        this.c.stopPropagation ? this.c.stopPropagation() : this.c.cancelBubble = !0
    };
    I.prototype.g = function () {
        I.j.g.call(this);
        var a = this.c;
        if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, hb)try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
        } catch (b) {
        }
    };
    var nb = "closure_listenable_" + (1E6 * Math.random() | 0), ob = 0;
    var pb = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.va = !!d;
        this.Ba = e;
        this.ab = ++ob;
        this.removed = this.ua = !1
    }, qb = function (a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Ba = null
    };
    var rb = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }, tb = function (a, b, c, d, e) {
        var f = b.toString();
        b = a.a[f];
        b || (b = a.a[f] = [], a.b++);
        var h = sb(b, c, d, e);
        -1 < h ? (a = b[h], a.ua = !1) : (a = new pb(c, a.src, f, !!d, e), a.ua = !1, b.push(a));
        return a
    };
    rb.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))return !1;
        var e = this.a[a];
        b = sb(e, b, c, d);
        return -1 < b ? (qb(e[b]), x(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var ub = function (a, b) {
        var c = b.type;
        c in a.a && La(a.a[c], b) && (qb(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    };
    rb.prototype.removeAll = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.a)if (!a || c == a) {
            for (var d = this.a[c], e = 0; e < d.length; e++)++b, qb(d[e]);
            delete this.a[c];
            this.b--
        }
        return b
    };
    var vb = function (a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = sb(a, c, d, e));
        return -1 < b ? a[b] : null
    }, sb = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.va == !!c && f.Ba == d)return e
        }
        return -1
    };
    var wb = "closure_lm_" + (1E6 * Math.random() | 0), xb = {}, yb = 0, J = function (a, b, c, d, e) {
        if (n(b)) {
            for (var f = 0; f < b.length; f++)J(a, b[f], c, d, e);
            return null
        }
        c = zb(c);
        if (a && a[nb])a = a.listen(b, c, d, e); else {
            if (!b)throw Error("Invalid event type");
            var f = !!d, h = Ab(a);
            h || (a[wb] = h = new rb(a));
            c = tb(h, b, c, d, e);
            if (!c.proxy) {
                d = Bb();
                c.proxy = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener)a.addEventListener(b.toString(), d, f); else if (a.attachEvent)a.attachEvent(Cb(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
                yb++
            }
            a = c
        }
        return a
    }, Bb = function () {
        var a = Db, b = gb ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)return c
        };
        return b
    }, Eb = function (a, b, c, d, e) {
        if (n(b))for (var f = 0; f < b.length; f++)Eb(a, b[f], c, d, e); else c = zb(c), a && a[nb] ? a.U(b, c, d, e) : a && (a = Ab(a)) && (b = vb(a, b, c, !!d, e)) && Fb(b)
    }, Fb = function (a) {
        if ("number" != typeof a && a && !a.removed) {
            var b = a.src;
            if (b && b[nb])ub(b.R, a); else {
                var c = a.type, d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.va) : b.detachEvent && b.detachEvent(Cb(c),
                    d);
                yb--;
                (c = Ab(b)) ? (ub(c, a), 0 == c.b && (c.src = null, b[wb] = null)) : qb(a)
            }
        }
    }, Cb = function (a) {
        return a in xb ? xb[a] : xb[a] = "on" + a
    }, Hb = function (a, b, c, d) {
        var e = !0;
        if (a = Ab(a))if (b = a.a[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.va == c && !f.removed && (f = Gb(f, d), e = e && !1 !== f)
        }
        return e
    }, Gb = function (a, b) {
        var c = a.listener, d = a.Ba || a.src;
        a.ua && Fb(a);
        return c.call(d, b)
    }, Db = function (a, b) {
        if (a.removed)return !0;
        if (!gb) {
            var c;
            if (!(c = b))a:{
                c = ["window", "event"];
                for (var d = k, e; e = c.shift();)if (null != d[e])d = d[e];
                else {
                    c = null;
                    break a
                }
                c = d
            }
            e = c;
            c = new I(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a:{
                    var f = !1;
                    if (0 == e.keyCode)try {
                        e.keyCode = -1;
                        break a
                    } catch (q) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue)e.returnValue = !0
                }
                e = [];
                for (f = c.b; f; f = f.parentNode)e.push(f);
                for (var f = a.type, h = e.length - 1; !c.f && 0 <= h; h--) {
                    c.b = e[h];
                    var l = Hb(e[h], f, !0, c), d = d && l
                }
                for (h = 0; !c.f && h < e.length; h++)c.b = e[h], l = Hb(e[h], f, !1, c), d = d && l
            }
            return d
        }
        return Gb(a, new I(b, this))
    }, Ab = function (a) {
        a = a[wb];
        return a instanceof rb ? a : null
    }, Ib = "__closure_events_fn_" +
        (1E9 * Math.random() >>> 0), zb = function (a) {
        x(a, "Listener can not be null.");
        if (r(a))return a;
        x(a.handleEvent, "An object listener must have handleEvent method.");
        a[Ib] || (a[Ib] = function (b) {
            return a.handleEvent(b)
        });
        return a[Ib]
    };
    var K = function () {
        H.call(this);
        this.R = new rb(this);
        this.pb = this;
        this.la = null
    };
    v(K, H);
    K.prototype[nb] = !0;
    g = K.prototype;
    g.Fa = function (a) {
        this.la = a
    };
    g.addEventListener = function (a, b, c, d) {
        J(this, a, b, c, d)
    };
    g.removeEventListener = function (a, b, c, d) {
        Eb(this, a, b, c, d)
    };
    g.F = function (a) {
        Jb(this);
        var b, c = this.la;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.la)b.push(c), x(1E3 > ++d, "infinite loop")
        }
        c = this.pb;
        d = a.type || a;
        if (p(a))a = new kb(a, c); else if (a instanceof kb)a.target = a.target || c; else {
            var e = a;
            a = new kb(d, c);
            Ua(a, e)
        }
        var e = !0, f;
        if (b)for (var h = b.length - 1; !a.f && 0 <= h; h--)f = a.b = b[h], e = Kb(f, d, !0, a) && e;
        a.f || (f = a.b = c, e = Kb(f, d, !0, a) && e, a.f || (e = Kb(f, d, !1, a) && e));
        if (b)for (h = 0; !a.f && h < b.length; h++)f = a.b = b[h], e = Kb(f, d, !1, a) && e;
        return e
    };
    g.v = function () {
        K.j.v.call(this);
        this.R && this.R.removeAll(void 0);
        this.la = null
    };
    g.listen = function (a, b, c, d) {
        Jb(this);
        return tb(this.R, String(a), b, c, d)
    };
    g.U = function (a, b, c, d) {
        return this.R.remove(String(a), b, c, d)
    };
    var Kb = function (a, b, c, d) {
        b = a.R.a[String(b)];
        if (!b)return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.removed && h.va == c) {
                var l = h.listener, q = h.Ba || h.src;
                h.ua && ub(a.R, h);
                e = !1 !== l.call(q, d) && e
            }
        }
        return e && 0 != d.lb
    }, Jb = function (a) {
        x(a.R, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Lb = function (a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    };
    Lb.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };
    var Mb = function (a, b) {
        a.g(b);
        a.b < a.f && (a.b++, b.next = a.a, a.a = b)
    };
    var Nb = function (a) {
        k.setTimeout(function () {
            throw a;
        }, 0)
    }, Ob, Pb = function () {
        var a = k.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function () {
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
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var a = c.Za;
                    c.Za = null;
                    a()
                }
            };
            return function (a) {
                d.next = {Za: a};
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
            k.setTimeout(a, 0)
        }
    };
    var Qb = function () {
        this.b = this.a = null
    }, Sb = new Lb(function () {
        return new Rb
    }, function (a) {
        a.reset()
    }, 100);
    Qb.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var Rb = function () {
        this.next = this.b = this.a = null
    };
    Rb.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Rb.prototype.reset = function () {
        this.next = this.b = this.a = null
    };
    var Xb = function (a, b) {
        Tb || Ub();
        Vb || (Tb(), Vb = !0);
        var c = Wb, d = Sb.get();
        d.set(a, b);
        c.b ? c.b.next = d : (x(!c.a), c.a = d);
        c.b = d
    }, Tb, Ub = function () {
        if (k.Promise && k.Promise.resolve) {
            var a = k.Promise.resolve(void 0);
            Tb = function () {
                a.then(Yb)
            }
        } else Tb = function () {
            var a = Yb;
            !r(k.setImmediate) || k.Window && k.Window.prototype && !z("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Ob || (Ob = Pb()), Ob(a)) : k.setImmediate(a)
        }
    }, Vb = !1, Wb = new Qb, Yb = function () {
        for (var a = null; a = Wb.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Nb(b)
            }
            Mb(Sb,
                a)
        }
        Vb = !1
    };
    var Zb = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, $b = function (a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var L = function (a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.i = !1;
        if (a != m)try {
            var c = this;
            a.call(b, function (a) {
                ac(c, 2, a)
            }, function (a) {
                if (!(a instanceof bc))try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (b) {
                }
                ac(c, 3, a)
            })
        } catch (d) {
            ac(this, 3, d)
        }
    }, cc = function () {
        this.next = this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    cc.prototype.reset = function () {
        this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    var dc = new Lb(function () {
        return new cc
    }, function (a) {
        a.reset()
    }, 100), ec = function (a, b, c) {
        var d = dc.get();
        d.b = a;
        d.c = b;
        d.f = c;
        return d
    };
    L.prototype.then = function (a, b, c) {
        null != a && Aa(a, "opt_onFulfilled should be a function.");
        null != b && Aa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return fc(this, r(a) ? a : null, r(b) ? b : null, c)
    };
    Zb(L);
    L.prototype.cancel = function (a) {
        0 == this.a && Xb(function () {
            var b = new bc(a);
            gc(this, b)
        }, this)
    };
    var gc = function (a, b) {
        if (0 == a.a)if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next)e || (f = h);
                e && (0 == c.a && 1 == d ? gc(c, b) : (f ? (d = f, x(c.b), x(null != d), d.next == c.f && (c.f = d), d.next = d.next.next) : hc(c), ic(c, e, 3, b)))
            }
            a.c = null
        } else ac(a, 3, b)
    }, kc = function (a, b) {
        a.b || 2 != a.a && 3 != a.a || jc(a);
        x(null != b.b);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }, fc = function (a, b, c, d) {
        var e = ec(null, null, null);
        e.a = new L(function (a, h) {
            e.b = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (A) {
                    h(A)
                }
            } : a;
            e.c = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    void 0 === e && b instanceof bc ? h(b) : a(e)
                } catch (A) {
                    h(A)
                }
            } : h
        });
        e.a.c = a;
        kc(a, e);
        return e.a
    };
    L.prototype.u = function (a) {
        x(1 == this.a);
        this.a = 0;
        ac(this, 2, a)
    };
    L.prototype.w = function (a) {
        x(1 == this.a);
        this.a = 0;
        ac(this, 3, a)
    };
    var ac = function (a, b, c) {
        if (0 == a.a) {
            a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            var d;
            a:{
                var e = c, f = a.u, h = a.w;
                if (e instanceof L)null != f && Aa(f, "opt_onFulfilled should be a function."), null != h && Aa(h, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), kc(e, ec(f || m, h || null, a)), d = !0; else if ($b(e))e.then(f, h, a), d = !0; else {
                    if (da(e))try {
                        var l = e.then;
                        if (r(l)) {
                            lc(e, l, f, h, a);
                            d = !0;
                            break a
                        }
                    } catch (q) {
                        h.call(a, q);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d ||
            (a.l = c, a.a = b, a.c = null, jc(a), 3 != b || c instanceof bc || mc(a, c))
        }
    }, lc = function (a, b, c, d, e) {
        var f = !1, h = function (a) {
            f || (f = !0, c.call(e, a))
        }, l = function (a) {
            f || (f = !0, d.call(e, a))
        };
        try {
            b.call(a, h, l)
        } catch (q) {
            l(q)
        }
    }, jc = function (a) {
        a.i || (a.i = !0, Xb(a.m, a))
    }, hc = function (a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        null != b && x(null != b.b);
        return b
    };
    L.prototype.m = function () {
        for (var a = null; a = hc(this);)ic(this, a, this.a, this.l);
        this.i = !1
    };
    var ic = function (a, b, c, d) {
        if (3 == c && b.c && !b.g)for (; a && a.g; a = a.c)a.g = !1;
        if (b.a)b.a.c = null, nc(b, c, d); else try {
            b.g ? b.b.call(b.f) : nc(b, c, d)
        } catch (e) {
            oc.call(null, e)
        }
        Mb(dc, b)
    }, nc = function (a, b, c) {
        2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
    }, mc = function (a, b) {
        a.g = !0;
        Xb(function () {
            a.g && oc.call(null, b)
        })
    }, oc = Nb, bc = function (a) {
        w.call(this, a)
    };
    v(bc, w);
    bc.prototype.name = "cancel";
    var pc = function (a, b) {
        if (r(a))b && (a = t(a, b)); else if (a && "function" == typeof a.handleEvent)a = t(a.handleEvent, a); else throw Error("Invalid listener argument");
        k.setTimeout(a, 50)
    };
    var qc = function (a) {
        if (a.classList)return a.classList;
        a = a.className;
        return p(a) && a.match(/\S+/g) || []
    }, rc = function (a, b) {
        return a.classList ? a.classList.contains(b) : Ka(qc(a), b)
    }, sc = function (a, b) {
        a.classList ? a.classList.add(b) : rc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, tc = function (a, b) {
        if (a.classList)y(b, function (b) {
            sc(a, b)
        }); else {
            var c = {};
            y(qc(a), function (a) {
                c[a] = !0
            });
            y(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)a.className += 0 < a.className.length ? " " + d : d
        }
    }, uc = function (a, b) {
        a.classList ?
            a.classList.remove(b) : rc(a, b) && (a.className = Ga(qc(a), function (a) {
            return a != b
        }).join(" "))
    }, vc = function (a, b) {
        a.classList ? y(b, function (b) {
            uc(a, b)
        }) : a.className = Ga(qc(a), function (a) {
            return !Ka(b, a)
        }).join(" ")
    };
    var xc = function () {
        this.a = "";
        this.c = wc;
        this.b = null
    };
    xc.prototype.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };
    var wc = {}, yc = function (a) {
        var b = new xc;
        b.a = a;
        b.b = 0
    };
    yc("<!DOCTYPE html>");
    yc("");
    var zc = !B || 9 <= eb;
    !D && !B || B && 9 <= eb || D && G("1.9.1");
    var Ac = B && !G("9");
    var Dc = function (a) {
            return a ? new Bc(Cc(a)) : ka || (ka = new Bc)
        }, M = function (a, b) {
            return p(b) ? a.getElementById(b) : b
        }, Fc = function (a, b) {
            var c = b || document, d = null;
            c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Ec(a, b)[0];
            return d || null
        }, Ec = function (a, b) {
            var c, d, e, f;
            c = document;
            c = b || c;
            if (c.querySelectorAll && c.querySelector && a)return c.querySelectorAll("" + (a ? "." + a : ""));
            if (a && c.getElementsByClassName) {
                var h = c.getElementsByClassName(a);
                return h
            }
            h =
                c.getElementsByTagName("*");
            if (a) {
                f = {};
                for (d = e = 0; c = h[d]; d++) {
                    var l = c.className;
                    "function" == typeof l.split && Ka(l.split(/\s+/), a) && (f[e++] = c)
                }
                f.length = e;
                return f
            }
            return h
        }, Hc = function (a, b) {
            Ra(b, function (b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Gc.hasOwnProperty(d) ? a.setAttribute(Gc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }, Gc = {
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
        }, Jc = function (a, b, c) {
            return Ic(document, arguments)
        }, Ic = function (a, b) {
            var c = b[0], d = b[1];
            if (!zc && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', ua(d.name), '"');
                if (d.type) {
                    c.push(' type="', ua(d.type), '"');
                    var e = {};
                    Ua(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (p(d) ? c.className = d : n(d) ? c.className = d.join(" ") : Hc(c, d));
            2 < b.length && Kc(a, c, b, 2);
            return c
        }, Kc = function (a, b, c, d) {
            function e(c) {
                c && b.appendChild(p(c) ? a.createTextNode(c) : c)
            }

            for (; d < c.length; d++) {
                var f = c[d];
                !ca(f) || da(f) && 0 < f.nodeType ? e(f) : y(Lc(f) ? Na(f) : f, e)
            }
        }, Mc = function (a, b) {
            Kc(Cc(a), a, arguments, 1)
        }, Nc = function (a) {
            for (var b; b = a.firstChild;)a.removeChild(b)
        }, Oc = function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, Pc = function (a, b) {
            if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) &
                    16);
            for (; b && a != b;)b = b.parentNode;
            return b == a
        }, Cc = function (a) {
            x(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }, N = function (a, b) {
            x(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                Nc(a);
                var c = Cc(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        Qc = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, Rc = {IMG: " ", BR: "\n"}, Sc = function (a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        }, Tc = function (a) {
            a = a.getAttributeNode("tabindex");
            return null != a && a.specified
        }, Uc = function (a) {
            a = a.tabIndex;
            return "number" == typeof a && 0 <= a && 32768 > a
        }, Wc = function (a) {
            var b = [];
            Vc(a, b, !1);
            return b.join("")
        }, Vc = function (a, b, c) {
            if (!(a.nodeName in Qc))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in
                Rc)b.push(Rc[a.nodeName]); else for (a = a.firstChild; a;)Vc(a, b, c), a = a.nextSibling
        }, Lc = function (a) {
            if (a && "number" == typeof a.length) {
                if (da(a))return "function" == typeof a.item || "string" == typeof a.item;
                if (r(a))return "function" == typeof a.item
            }
            return !1
        }, Bc = function (a) {
            this.a = a || k.document || document
        };
    g = Bc.prototype;
    g.h = function (a) {
        return M(this.a, a)
    };
    g.xa = function (a, b, c) {
        return Ic(this.a, arguments)
    };
    g.appendChild = function (a, b) {
        a.appendChild(b)
    };
    g.ub = Mc;
    g.contains = Pc;
    var Xc = {ud: !0}, Yc = {td: !0}, Zc = {vd: !0}, O = function () {
        throw Error("Do not instantiate directly");
    };
    O.prototype.oa = null;
    O.prototype.S = function () {
        return this.content
    };
    O.prototype.toString = function () {
        return this.content
    };
    var $c = function () {
        O.call(this)
    };
    v($c, O);
    var dd = function (a, b, c) {
        x(a, "Soy template may not be null.");
        a:if (a = a(b || ad, void 0, void 0), c = (c || Dc()).a.createElement("DIV"), a = bd(a), b = a.match(cd), x(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a), c.innerHTML = a, 1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType)) {
            c = a;
            break a
        }
        return c
    }, bd = function (a) {
        if (!da(a))return String(a);
        if (a instanceof O) {
            if (a.W === Xc)return za(a.S());
            if (a.W === Zc)return ua(a.S())
        }
        ya("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }, cd = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i, ad = {};
    var ed = D ? "MozUserSelect" : E || C ? "WebkitUserSelect" : null;
    var hd = function (a, b, c, d, e) {
        if (!(B || C || E && G("525")))return !0;
        if (F && e)return fd(a);
        if (e && !d)return !1;
        "number" == typeof b && (b = gd(b));
        if (!c && (17 == b || 18 == b || F && 91 == b))return !1;
        if ((E || C) && d && c)switch (a) {
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
        if (B && d && b == a)return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(E || C)
        }
        return fd(a)
    }, fd = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (E || C) && 0 == a)return !0;
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
    }, gd = function (a) {
        if (D)a = id(a); else if (F && E)a:switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }, id = function (a) {
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
    var P = function (a, b) {
        K.call(this);
        a && jd(this, a, b)
    };
    v(P, K);
    g = P.prototype;
    g.ha = null;
    g.Ca = null;
    g.Ra = null;
    g.Da = null;
    g.J = -1;
    g.Y = -1;
    g.Ja = !1;
    var kd = {
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
    }, ld = {
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
    }, md = B || C || E && G("525"), nd = F && D;
    P.prototype.a = function (a) {
        if (E || C)if (17 == this.J && !a.ctrlKey || 18 == this.J && !a.altKey || F && 91 == this.J && !a.metaKey)this.Y = this.J = -1;
        -1 == this.J && (a.ctrlKey && 17 != a.a ? this.J = 17 : a.altKey && 18 != a.a ? this.J = 18 : a.metaKey && 91 != a.a && (this.J = 91));
        md && !hd(a.a, this.J, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Y = gd(a.a), nd && (this.Ja = a.altKey))
    };
    P.prototype.b = function (a) {
        this.Y = this.J = -1;
        this.Ja = a.altKey
    };
    P.prototype.handleEvent = function (a) {
        var b = a.c, c, d, e = b.altKey;
        B && "keypress" == a.type ? c = this.Y : (E || C) && "keypress" == a.type ? c = this.Y : Za && !E ? c = this.Y : (c = b.keyCode || this.Y, d = b.charCode || 0, nd && (e = this.Ja), F && 63 == d && 224 == c && (c = 191));
        d = c = gd(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in kd ? d = kd[c] : 25 == c && a.shiftKey && (d = 9) : f && f in ld && (d = ld[f]);
        this.J = d;
        a = new od(d, 0, 0, b);
        a.altKey = e;
        this.F(a)
    };
    P.prototype.h = function () {
        return this.ha
    };
    var jd = function (a, b, c) {
        a.Da && pd(a);
        a.ha = b;
        a.Ca = J(a.ha, "keypress", a, c);
        a.Ra = J(a.ha, "keydown", a.a, c, a);
        a.Da = J(a.ha, "keyup", a.b, c, a)
    }, pd = function (a) {
        a.Ca && (Fb(a.Ca), Fb(a.Ra), Fb(a.Da), a.Ca = null, a.Ra = null, a.Da = null);
        a.ha = null;
        a.J = -1;
        a.Y = -1
    };
    P.prototype.v = function () {
        P.j.v.call(this);
        pd(this)
    };
    var od = function (a, b, c, d) {
        I.call(this, d);
        this.type = "key";
        this.a = a
    };
    v(od, I);
    var qd, rd = {
        Db: "activedescendant",
        Ib: "atomic",
        Jb: "autocomplete",
        Lb: "busy",
        ob: "checked",
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
    var sd = {
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
    var td = function (a, b) {
        b ? (x(Sa(sd, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
    }, vd = function (a, b, c) {
        n(c) && (c = c.join(" "));
        var d = ud(b);
        "" === c || void 0 == c ? (qd || (qd = {
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
        }), c = qd, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
            c)
    }, ud = function (a) {
        x(a, "ARIA attribute cannot be empty.");
        x(Sa(rd, a), "No such ARIA attribute " + a);
        return "aria-" + a
    };
    var wd = function (a) {
        H.call(this);
        this.b = a;
        this.a = {}
    };
    v(wd, H);
    var xd = [];
    g = wd.prototype;
    g.listen = function (a, b, c, d) {
        n(b) || (b && (xd[0] = b.toString()), b = xd);
        for (var e = 0; e < b.length; e++) {
            var f = J(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f)break;
            this.a[f.ab] = f
        }
        return this
    };
    g.U = function (a, b, c, d, e) {
        if (n(b))for (var f = 0; f < b.length; f++)this.U(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.b || this, c = zb(c), d = !!d, b = a && a[nb] ? vb(a.R, String(b), c, d, e) : a ? (a = Ab(a)) ? vb(a, b, c, d, e) : null : null, b && (Fb(b), delete this.a[b.ab]);
        return this
    };
    g.removeAll = function () {
        Ra(this.a, function (a, b) {
            this.a.hasOwnProperty(b) && Fb(a)
        }, this);
        this.a = {}
    };
    g.v = function () {
        wd.j.v.call(this);
        this.removeAll()
    };
    g.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var yd = function () {
    };
    aa(yd);
    yd.prototype.a = 0;
    var Q = function (a) {
        K.call(this);
        this.c = a || Dc();
        this.Ia = zd;
        this.C = null;
        this.I = !1;
        this.a = null;
        this.i = void 0;
        this.l = this.O = this.f = null;
        this.Ya = !1
    };
    v(Q, K);
    Q.prototype.Va = yd.ca();
    var zd = null, Ad = function (a, b) {
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
    }, Bd = function (a, b) {
        if (a.f && a.f.l) {
            var c = a.f.l, d = a.C;
            d in c && delete c[d];
            c = a.f.l;
            if (null !== c && b in c)throw Error('The object already contains the key "' + b + '"');
            c[b] = a
        }
        a.C = b
    };
    Q.prototype.h = function () {
        return this.a
    };
    var Cd = function (a) {
        a = a.a;
        x(a, "Can not call getElementStrict before rendering/decorating.");
        return a
    }, Dd = function (a) {
        return a.a ? Fc("jfk-checkbox-checkmark", a.a || a.c.a) : null
    }, Ed = function (a) {
        a.i || (a.i = new wd(a));
        return a.i
    };
    Q.prototype.Fa = function (a) {
        if (this.f && this.f != a)throw Error("Method not supported");
        Q.j.Fa.call(this, a)
    };
    Q.prototype.ma = function () {
        this.a = this.c.a.createElement("DIV")
    };
    var Fd = function (a, b) {
        if (a.I)throw Error("Component already rendered");
        a.a || a.ma();
        b ? b.insertBefore(a.a, null) : a.c.a.body.appendChild(a.a);
        a.f && !a.f.I || a.M()
    }, Gd = function (a, b) {
        if (a.I)throw Error("Component already rendered");
        if (b && a.bb(b)) {
            a.Ya = !0;
            var c = Cc(b);
            a.c && a.c.a == c || (a.c = Dc(b));
            a.wa(b);
            a.M()
        } else throw Error("Invalid element to decorate");
    };
    g = Q.prototype;
    g.bb = function () {
        return !0
    };
    g.wa = function (a) {
        this.a = a
    };
    g.M = function () {
        this.I = !0;
        Hd(this, function (a) {
            !a.I && a.h() && a.M()
        })
    };
    g.fa = function () {
        Hd(this, function (a) {
            a.I && a.fa()
        });
        this.i && this.i.removeAll();
        this.I = !1
    };
    g.v = function () {
        this.I && this.fa();
        this.i && (this.i.qa(), delete this.i);
        Hd(this, function (a) {
            a.qa()
        });
        !this.Ya && this.a && Oc(this.a);
        this.f = this.a = this.l = this.O = null;
        Q.j.v.call(this)
    };
    var Hd = function (a, b) {
        a.O && y(a.O, b, void 0)
    };
    Q.prototype.removeChild = function (a, b) {
        if (a) {
            var c = p(a) ? a : a.C || (a.C = ":" + (a.Va.a++).toString(36)), d;
            this.l && c ? (d = this.l, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.l;
                c in d && delete d[c];
                La(this.O, a);
                b && (a.fa(), a.a && Oc(a.a));
                c = a;
                if (null == c)throw Error("Unable to set parent component");
                c.f = null;
                Q.j.Fa.call(c, null)
            }
        }
        if (!a)throw Error("Child is not in parent component");
        return a
    };
    var R = function () {
    }, Id;
    aa(R);
    var Kd = function () {
        var a = new Jd;
        a.s = function () {
            return "jfk-checkbox"
        };
        return a
    }, Ld = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    R.prototype.sa = function () {
    };
    R.prototype.da = function (a) {
        return a.c.xa("DIV", Md(this, a).join(" "), a.S())
    };
    R.prototype.ta = function (a) {
        return a
    };
    var Od = function (a, b, c) {
        if (a = a.h ? a.h() : a) {
            var d = [b];
            B && !G("7") && (d = Nd(qc(a), b), d.push(b));
            (c ? tc : vc)(a, d)
        }
    };
    R.prototype.cb = function () {
        return !0
    };
    R.prototype.H = function (a, b) {
        b.id && Bd(a, b.id);
        var c = this.ta(b);
        c && c.firstChild ? Pd(a, c.firstChild.nextSibling ? Na(c.childNodes) : c.firstChild) : a.pa = null;
        var d = 0, e = this.s(), f = this.s(), h = !1, l = !1, q = !1, A = Na(qc(b));
        y(A, function (a) {
            h || a != e ? l || a != f ? d |= Qd(this, a) : l = !0 : (h = !0, f == e && (l = !0));
            1 == Qd(this, a) && (Ba(c), Tc(c) && Uc(c) && Sc(c, !1))
        }, this);
        a.A = d;
        h || (A.push(e), f == e && (l = !0));
        l || A.push(f);
        var W = a.Ka;
        W && A.push.apply(A, W);
        if (B && !G("7")) {
            var fa = Nd(A);
            0 < fa.length && (A.push.apply(A, fa), q = !0)
        }
        if (!h || !l || W || q)b.className =
            A.join(" ");
        return b
    };
    R.prototype.jb = function (a) {
        if (null == a.Ia) {
            var b = a.I ? a.a : a.c.a.body, c;
            a:{
                c = Cc(b);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
                    c = c.direction || c.getPropertyValue("direction") || "";
                    break a
                }
                c = ""
            }
            a.Ia = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction)
        }
        a.Ia && this.fb(a.h(), !0);
        a.o() && this.Ea(a, a.aa)
    };
    var Rd = function (a, b) {
        var c = a.sa();
        if (c) {
            x(b, "The element passed as a first parameter cannot be null.");
            var d = b.getAttribute("role") || null;
            c != d && td(b, c)
        }
    };
    g = R.prototype;
    g.Ma = function (a, b) {
        var c = !b, d = B || Za ? a.getElementsByTagName("*") : null;
        if (ed) {
            if (c = c ? "none" : "", a.style && (a.style[ed] = c), d)for (var e = 0, f; f = d[e]; e++)f.style && (f.style[ed] = c)
        } else if (B || Za)if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)for (e = 0; f = d[e]; e++)f.setAttribute("unselectable", c)
    };
    g.fb = function (a, b) {
        Od(a, this.s() + "-rtl", b)
    };
    g.eb = function (a) {
        var b;
        return a.B & 32 && (b = a.h()) ? Tc(b) && Uc(b) : !1
    };
    g.Ea = function (a, b) {
        var c;
        if (a.B & 32 && (c = a.h())) {
            if (!b && a.A & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.A & 32 && a.gb()
            }
            (Tc(c) && Uc(c)) != b && Sc(c, b)
        }
    };
    g.Na = function (a, b, c) {
        var d = a.h();
        if (d) {
            var e = Sd(this, b);
            e && Od(a, e, c);
            this.P(d, b, c)
        }
    };
    g.P = function (a, b, c) {
        Id || (Id = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
        x(a, "The element passed as a first parameter cannot be null.");
        b = Id[b];
        var d = a.getAttribute("role") || null;
        d && (d = Ld[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && vd(a, b, c)
    };
    g.s = function () {
        return "goog-control"
    };
    var Md = function (a, b) {
        var c = a.s(), d = [c], e = a.s();
        e != c && d.push(e);
        c = b.getState();
        for (e = []; c;) {
            var f = c & -c;
            e.push(Sd(a, f));
            c &= ~f
        }
        d.push.apply(d, e);
        (c = b.Ka) && d.push.apply(d, c);
        B && !G("7") && d.push.apply(d, Nd(d));
        return d
    }, Nd = function (a, b) {
        var c = [];
        b && (a = a.concat([b]));
        y([], function (d) {
            !Ja(d, u(Ka, a)) || b && !Ka(d, b) || c.push(d.join("_"))
        });
        return c
    }, Sd = function (a, b) {
        a.a || Td(a);
        return a.a[b]
    }, Qd = function (a, b) {
        if (!a.D) {
            a.a || Td(a);
            var c = a.a, d = {}, e;
            for (e in c)d[c[e]] = e;
            a.D = d
        }
        c = parseInt(a.D[b], 10);
        return isNaN(c) ?
            0 : c
    }, Td = function (a) {
        var b = a.s(), c = b.replace(/\xa0|\s/g, " ");
        x(-1 == c.indexOf(" "), "ControlRenderer has an invalid css class: '" + b + "'");
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
    var Ud = function () {
    };
    v(Ud, R);
    aa(Ud);
    g = Ud.prototype;
    g.sa = function () {
        return "button"
    };
    g.P = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                x(a, "The button DOM element cannot be null.");
                vd(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Ud.j.P.call(this, a, b, c)
        }
    };
    g.da = function (a) {
        var b = Ud.j.da.call(this, a), c = a.D;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.K()) && this.La(b, c);
        a.B & 16 && this.P(b, 16, a.N());
        return b
    };
    g.H = function (a, b) {
        b = Ud.j.H.call(this, a, b);
        var c = this.K(b);
        a.Ua = c;
        a.D = b.title;
        a.B & 16 && this.P(b, 16, a.N());
        return b
    };
    g.K = m;
    g.La = m;
    g.s = function () {
        return "goog-button"
    };
    var Vd = function (a, b) {
        if (!a)throw Error("Invalid class name " + a);
        if (!r(b))throw Error("Invalid decorator function " + b);
    }, Wd = {};
    var S = function (a, b, c) {
        Q.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[ea] || (b[ea] = ++ga);
                if (d = Wd[d])break;
                b = b.j ? b.j.constructor : null
            }
            b = d ? r(d.ca) ? d.ca() : new d : null
        }
        this.b = b;
        this.pa = void 0 !== a ? a : null
    };
    v(S, Q);
    g = S.prototype;
    g.pa = null;
    g.A = 0;
    g.B = 39;
    g.ba = 255;
    g.aa = !0;
    g.Ka = null;
    g.za = !0;
    var Yd = function (a) {
        a.I && 0 != a.za && Xd(a, !1);
        a.za = !1
    };
    S.prototype.ma = function () {
        var a = this.b.da(this);
        this.a = a;
        Rd(this.b, a);
        this.b.Ma(a, !1);
        this.aa || (a.style.display = "none", a && vd(a, "hidden", !0))
    };
    S.prototype.bb = function (a) {
        return this.b.cb(a)
    };
    S.prototype.wa = function (a) {
        this.a = a = this.b.H(this, a);
        Rd(this.b, a);
        this.b.Ma(a, !1);
        this.aa = "none" != a.style.display
    };
    S.prototype.M = function () {
        S.j.M.call(this);
        var a = this.b, b = Cd(this);
        x(this);
        x(b);
        this.aa || vd(b, "hidden", !this.aa);
        this.o() || a.P(b, 1, !this.o());
        this.B & 8 && a.P(b, 8, !!(this.A & 8));
        this.B & 16 && a.P(b, 16, this.N());
        this.B & 64 && a.P(b, 64, !!(this.A & 64));
        this.b.jb(this);
        this.B & -2 && (this.za && Xd(this, !0), this.B & 32 && (a = this.h())) && (b = this.w || (this.w = new P), jd(b, a), Ed(this).listen(b, "key", this.Ab).listen(a, "focus", this.zb).listen(a, "blur", this.gb))
    };
    var Xd = function (a, b) {
        var c = Ed(a), d = a.h();
        b ? (c.listen(d, "mouseover", a.Qa).listen(d, "mousedown", a.X).listen(d, "mouseup", a.ja).listen(d, "mouseout", a.Pa), a.ya != m && c.listen(d, "contextmenu", a.ya), B && (c.listen(d, "dblclick", a.ib), a.L || (a.L = new Zd(a), ib(a, u(jb, a.L))))) : (c.U(d, "mouseover", a.Qa).U(d, "mousedown", a.X).U(d, "mouseup", a.ja).U(d, "mouseout", a.Pa), a.ya != m && c.U(d, "contextmenu", a.ya), B && (c.U(d, "dblclick", a.ib), jb(a.L), a.L = null))
    };
    S.prototype.fa = function () {
        S.j.fa.call(this);
        this.w && pd(this.w);
        this.aa && this.o() && this.b.Ea(this, !1)
    };
    S.prototype.v = function () {
        S.j.v.call(this);
        this.w && (this.w.qa(), delete this.w);
        delete this.b;
        this.L = this.Ka = this.pa = null
    };
    S.prototype.S = function () {
        return this.pa
    };
    var Pd = function (a, b) {
        a.pa = b
    }, $d = function (a) {
        a = a.S();
        if (!a)return "";
        if (!p(a))if (n(a))a = Ha(a, Wc).join(""); else {
            if (Ac && "innerText" in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
                var b = [];
                Vc(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Ac || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    S.prototype.o = function () {
        return !(this.A & 1)
    };
    S.prototype.setEnabled = function (a) {
        var b = this.f;
        b && "function" == typeof b.o && !b.o() || !ae(this, 1, !a) || (a || (be(this, !1), ce(this, !1)), this.aa && this.b.Ea(this, a), de(this, 1, !a, !0))
    };
    var ce = function (a, b) {
        ae(a, 2, b) && de(a, 2, b)
    }, be = function (a, b) {
        ae(a, 4, b) && de(a, 4, b)
    };
    g = S.prototype;
    g.Sa = function (a) {
        ae(this, 8, a) && de(this, 8, a)
    };
    g.N = function () {
        return !!(this.A & 16)
    };
    g.Z = function (a) {
        ae(this, 16, a) && de(this, 16, a)
    };
    g.ka = function (a) {
        ae(this, 32, a) && de(this, 32, a)
    };
    g.getState = function () {
        return this.A
    };
    var de = function (a, b, c, d) {
        d || 1 != b ? a.B & b && c != !!(a.A & b) && (a.b.Na(a, b, c), a.A = c ? a.A | b : a.A & ~b) : a.setEnabled(!c)
    }, ee = function (a, b, c) {
        if (a.I && a.A & b && !c)throw Error("Component already rendered");
        !c && a.A & b && de(a, b, !1);
        a.B = c ? a.B | b : a.B & ~b
    }, T = function (a, b) {
        return !!(a.ba & b) && !!(a.B & b)
    }, ae = function (a, b, c) {
        return !!(a.B & b) && !!(a.A & b) != c && (!(0 & b) || a.F(Ad(b, c))) && !a.u
    };
    g = S.prototype;
    g.Qa = function (a) {
        (!a.i || !Pc(this.h(), a.i)) && this.F("enter") && this.o() && T(this, 2) && ce(this, !0)
    };
    g.Pa = function (a) {
        a.i && Pc(this.h(), a.i) || !this.F("leave") || (T(this, 4) && be(this, !1), T(this, 2) && ce(this, !1))
    };
    g.ya = m;
    g.X = function (a) {
        this.o() && (T(this, 2) && ce(this, !0), !mb(a) || E && F && a.ctrlKey || (T(this, 4) && be(this, !0), this.b && this.b.eb(this) && this.h().focus()));
        !mb(a) || E && F && a.ctrlKey || a.g()
    };
    g.ja = function (a) {
        this.o() && (T(this, 2) && ce(this, !0), this.A & 4 && this.T(a) && T(this, 4) && be(this, !1))
    };
    g.ib = function (a) {
        this.o() && this.T(a)
    };
    g.T = function (a) {
        T(this, 16) && this.Z(!this.N());
        T(this, 8) && this.Sa(!0);
        if (T(this, 64)) {
            var b = !(this.A & 64);
            ae(this, 64, b) && de(this, 64, b)
        }
        b = new kb("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.m = a.m);
        return this.F(b)
    };
    g.zb = function () {
        T(this, 32) && this.ka(!0)
    };
    g.gb = function () {
        T(this, 4) && be(this, !1);
        T(this, 32) && this.ka(!1)
    };
    g.Ab = function (a) {
        return this.aa && this.o() && this.ia(a) ? (a.g(), a.l(), !0) : !1
    };
    g.ia = function (a) {
        return 13 == a.a && this.T(a)
    };
    if (!r(S))throw Error("Invalid component class " + S);
    if (!r(R))throw Error("Invalid renderer class " + R);
    var fe = S[ea] || (S[ea] = ++ga);
    Wd[fe] = R;
    Vd("goog-control", function () {
        return new S(null)
    });
    var Zd = function (a) {
        H.call(this);
        this.b = a;
        this.a = !1;
        this.c = new wd(this);
        ib(this, u(jb, this.c));
        a = Cd(this.b);
        this.c.listen(a, "mousedown", this.g).listen(a, "mouseup", this.i).listen(a, "click", this.f)
    };
    v(Zd, H);
    Zd.prototype.g = function () {
        this.a = !1
    };
    Zd.prototype.i = function () {
        this.a = !0
    };
    Zd.prototype.f = function (a) {
        if (this.a)this.a = !1; else {
            var b = a.c, c = b.button, d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.b.X(new I(b, a.b));
            b.type = "mouseup";
            this.b.ja(new I(b, a.b));
            b.button = c;
            b.type = d
        }
    };
    Zd.prototype.v = function () {
        this.b = null;
        Zd.j.v.call(this)
    };
    var ge = function () {
    };
    v(ge, Ud);
    aa(ge);
    g = ge.prototype;
    g.sa = function () {
    };
    g.da = function (a) {
        Yd(a);
        a.ba &= -256;
        ee(a, 32, !1);
        return a.c.xa("BUTTON", {
            "class": Md(this, a).join(" "),
            disabled: !a.o(),
            title: a.D || "",
            value: a.K() || ""
        }, $d(a) || "")
    };
    g.cb = function (a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    g.H = function (a, b) {
        Yd(a);
        a.ba &= -256;
        ee(a, 32, !1);
        if (b.disabled) {
            var c = za(Sd(this, 1));
            sc(b, c)
        }
        return ge.j.H.call(this, a, b)
    };
    g.jb = function (a) {
        Ed(a).listen(a.h(), "click", a.T)
    };
    g.Ma = m;
    g.fb = m;
    g.eb = function (a) {
        return a.o()
    };
    g.Ea = m;
    g.Na = function (a, b, c) {
        ge.j.Na.call(this, a, b, c);
        (a = a.h()) && 1 == b && (a.disabled = c)
    };
    g.K = function (a) {
        return a.value
    };
    g.La = function (a, b) {
        a && (a.value = b)
    };
    g.P = m;
    var U = function (a, b, c) {
        S.call(this, a, b || ge.ca(), c)
    };
    v(U, S);
    U.prototype.K = function () {
        return this.Ua
    };
    U.prototype.v = function () {
        U.j.v.call(this);
        delete this.Ua;
        delete this.D
    };
    U.prototype.M = function () {
        U.j.M.call(this);
        if (this.B & 32) {
            var a = this.h();
            a && Ed(this).listen(a, "keyup", this.ia)
        }
    };
    U.prototype.ia = function (a) {
        return 13 == a.a && "key" == a.type || 32 == a.a && "keyup" == a.type ? this.T(a) : 32 == a.a
    };
    Vd("goog-button", function () {
        return new U(null)
    });
    var he = "StopIteration" in k ? k.StopIteration : {message: "StopIteration", stack: ""}, ie = function () {
    };
    ie.prototype.next = function () {
        throw he;
    };
    ie.prototype.qb = function () {
        return this
    };
    var je = function (a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof je)e = a.ra(), d = a.ga(); else {
                var c = [], f = 0;
                for (e in a)c[f++] = e;
                e = c;
                c = [];
                f = 0;
                for (d in a)c[f++] = a[d];
                d = c
            }
            for (c = 0; c < e.length; c++)this.set(e[c], d[c])
        }
    };
    je.prototype.ga = function () {
        ke(this);
        for (var a = [], b = 0; b < this.a.length; b++)a.push(this.b[this.a[b]]);
        return a
    };
    je.prototype.ra = function () {
        ke(this);
        return this.a.concat()
    };
    je.prototype.remove = function (a) {
        return le(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && ke(this), !0) : !1
    };
    var ke = function (a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                le(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;)d = a.a[b], le(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    g = je.prototype;
    g.get = function (a, b) {
        return le(this.b, a) ? this.b[a] : b
    };
    g.set = function (a, b) {
        le(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    g.forEach = function (a, b) {
        for (var c = this.ra(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.clone = function () {
        return new je(this)
    };
    g.qb = function (a) {
        ke(this);
        var b = 0, c = this.f, d = this, e = new ie;
        e.next = function () {
            if (c != d.f)throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)throw he;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var le = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    B && G(8);
    var me = function (a) {
        if (null != a)switch (a.oa) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }, ne = function () {
        O.call(this)
    };
    v(ne, O);
    ne.prototype.W = Xc;
    var oe = function () {
        O.call(this)
    };
    v(oe, O);
    oe.prototype.W = Yc;
    oe.prototype.oa = 1;
    var pe = function (a, b) {
        this.content = String(a);
        this.oa = null != b ? b : null
    };
    v(pe, $c);
    pe.prototype.W = Zc;
    var qe = function (a) {
        function b(a) {
            this.content = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.oa = d);
            return e
        }
    }(ne);
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
    })(ne);
    var V = function (a) {
        return null != a && a.W === Xc ? (x(a.constructor === ne), a = String(a.S()).replace(re, "").replace(se, "&lt;"), String(a).replace(te, ue)) : ua(String(a))
    }, we = function (a) {
        if (null != a && a.W === Yc)return x(a.constructor === oe), a.S().replace(/([^"'\s])$/, "$1 ");
        a = String(a);
        ve.test(a) || (ya("Bad value `%s` for |filterHtmlAttributes", [a]), a = "zSoyz");
        return a
    }, xe = {
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
    }, ue = function (a) {
        return xe[a]
    }, te = /[\x00\x22\x27\x3c\x3e]/g, ve = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i, re = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, se = /</g;
    var ye = function (a) {
        var b;
        a = a || {};
        var c = '<div role="button"' + (a.id ? ' id="' + V(a.id) + '"' : "") + ' class="', d, e;
        d = a || {};
        var f = "goog-inline-block jfk-button ";
        switch (da(e = d.style) ? e.toString() : e) {
            case 0:
                f += "jfk-button-standard";
                break;
            case 2:
                f += "jfk-button-action";
                break;
            case 3:
                f += "jfk-button-primary";
                break;
            case 1:
                f += "jfk-button-default";
                break;
            case 4:
                f += "jfk-button-flat";
                break;
            case 5:
                f += "jfk-button-mini";
                break;
            case 6:
                f += "jfk-button-contrast";
                break;
            default:
                f += "jfk-button-standard"
        }
        f += (1 == d.width ? " jfk-button-narrow" :
                "") + (d.checked ? " jfk-button-checked" : "") + (d.na ? " " + d.na : "") + (d.disabled ? " jfk-button-disabled" : "");
        c = c + V(new pe(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.Ta ? V(a.Ta) : "0") + '"') + (a.title ? " " + (a.Cb ? "data-tooltip" : "title") + '="' + V(a.title) + '"' : "") + (a.value ? ' value="' + V(a.value) + '"' : "") + (a.attributes ? " " + we(a.attributes) : "") + ">";
        a = null == (b = a.content) ? "" : b;
        null != a && a.W === Xc ? (x(a.constructor === ne), b = a) : a instanceof xc ? (a instanceof xc && a.constructor === xc && a.c === wc ? b = a.a : (ya("expected object of type SafeHtml, got '" +
            a + "'"), b = "type_error:SafeHtml"), b = qe(b, a.b)) : b = qe(ua(String(String(a))), me(a));
        return qe(c + b + "</div>")
    };
    ye.a = "jfk.templates.button.strict";
    var X = function (a, b, c, d) {
        U.call(this, a, ze.ca(), b);
        this.V = c || 0;
        this.ea = d || 0;
        this.Xa = !1
    };
    v(X, U);
    X.prototype.setEnabled = function (a) {
        this.o() != a && (X.j.setEnabled.call(this, a), Ae(this))
    };
    X.prototype.ka = function (a) {
        X.j.ka.call(this, a);
        Be(this, !1)
    };
    X.prototype.X = function (a) {
        X.j.X.call(this, a);
        this.o() && Be(this, !0)
    };
    X.prototype.ja = function (a) {
        X.j.ja.call(this, a);
        this.o() && Be(this, !0)
    };
    var Be = function (a, b) {
        if (a.h()) {
            var c = a.h();
            b ? sc(c, "jfk-button-clear-outline") : uc(c, "jfk-button-clear-outline")
        }
    }, Ae = function (a) {
        a.h() && Ce(a.b, a)
    }, ze = function () {
        this.w = this.s() + "-standard";
        this.b = this.s() + "-action";
        this.u = this.s() + "-primary";
        this.g = this.s() + "-default";
        this.i = this.s() + "-flat";
        this.m = this.s() + "-narrow";
        this.l = this.s() + "-mini";
        this.f = this.s() + "-contrast"
    };
    v(ze, Ud);
    aa(ze);
    g = ze.prototype;
    g.$ = function (a, b, c) {
        a && c.V != a && (c.V = a, Ae(c));
        b && c.ea != b && (c.ea = b, Ae(c))
    };
    g.s = function () {
        return "jfk-button"
    };
    g.da = function (a) {
        Da(a, X, "Button is expected to be instance of jfk.Button");
        var b = a.c, c = dd(ye, {
            disabled: !a.o(),
            checked: a.N(),
            style: a.V,
            title: a.D,
            Cb: a.Xa,
            value: a.K(),
            width: a.ea
        }, b);
        b.ub(c, a.S());
        this.H(a, c);
        return c
    };
    g.H = function (a, b) {
        ze.j.H.call(this, a, b);
        this.c || (this.c = Va(this.w, u(this.$, 0, null), this.b, u(this.$, 2, null), this.u, u(this.$, 3, null), this.g, u(this.$, 1, null), this.i, u(this.$, 4, null), this.l, u(this.$, 5, null), this.f, u(this.$, 6, null), this.m, u(this.$, null, 1)));
        for (var c = qc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip"))a.D = c, a.Xa = !0;
        return b
    };
    g.K = function (a) {
        return a.getAttribute("value") || ""
    };
    g.La = function (a, b) {
        a && a.setAttribute("value", b)
    };
    var Ce = function (a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }

        x(b.h(), "Button element must already exist when updating style.");
        var d = [], e = [], f = b.V;
        c(0 == f, a.w);
        c(2 == f, a.b);
        c(3 == f, a.u);
        c(4 == f, a.i);
        c(5 == f, a.l);
        c(1 == f, a.g);
        c(6 == f, a.f);
        c(1 == b.ea, a.m);
        c(!b.o(), a.s() + "-disabled");
        vc(b.h(), e);
        tc(b.h(), d)
    };
    var Jd = function () {
    };
    v(Jd, R);
    aa(Jd);
    Jd.prototype.da = function (a) {
        var b = a.c.xa("SPAN", Md(this, a).join(" "));
        De(this, b, a.g);
        return b
    };
    Jd.prototype.H = function (a, b) {
        b = Jd.j.H.call(this, a, b);
        x(b);
        var c = qc(b), d = !1;
        Ka(c, Ee(this, null)) ? d = null : Ka(c, Ee(this, !0)) ? d = !0 : Ka(c, Ee(this, !1)) && (d = !1);
        a.g = d;
        x(b, "The element cannot be null.");
        vd(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
        return b
    };
    Jd.prototype.sa = function () {
        return "checkbox"
    };
    var De = function (a, b, c) {
        if (b) {
            x(b);
            var d = Ee(a, c);
            x(d);
            x(b);
            rc(b, d) || (Ra(Fe, function (a) {
                a = Ee(this, a);
                x(b);
                a == d ? sc(b, a) : uc(b, a)
            }, a), vd(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
        }
    };
    Jd.prototype.s = function () {
        return "goog-checkbox"
    };
    var Ee = function (a, b) {
        var c = a.s();
        if (1 == b)return c + "-checked";
        if (0 == b)return c + "-unchecked";
        if (null == b)return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var Ge = function (a, b, c) {
        c = c || Jd.ca();
        S.call(this, null, c, b);
        this.g = void 0 !== a ? a : !1
    };
    v(Ge, S);
    var Fe = {ob: !0, a: !1, b: null};
    g = Ge.prototype;
    g.G = null;
    g.N = function () {
        return 1 == this.g
    };
    g.Z = function (a) {
        a != this.g && (this.g = a, De(this.b, this.h(), this.g))
    };
    g.M = function () {
        Ge.j.M.call(this);
        if (this.za) {
            var a = Ed(this);
            this.G && a.listen(this.G, "click", this.Oa).listen(this.G, "mouseover", this.Qa).listen(this.G, "mouseout", this.Pa).listen(this.G, "mousedown", this.X).listen(this.G, "mouseup", this.ja);
            a.listen(this.h(), "click", this.Oa)
        }
        var a = Cd(this), b;
        if (b = this.G && a != this.G)b = a.getAttribute(ud("label")), b = /^[\s\xa0]*$/.test(null == b || void 0 == b ? "" : String(b));
        if (b) {
            if (!this.G.id) {
                b = this.G;
                var c;
                c = (this.C || (this.C = ":" + (this.Va.a++).toString(36))) + ".lbl";
                b.id = c
            }
            vd(a,
                "labelledby", this.G.id)
        }
    };
    g.setEnabled = function (a) {
        Ge.j.setEnabled.call(this, a);
        if (a = this.h())a.tabIndex = this.o() ? 0 : -1
    };
    g.Oa = function (a) {
        a.l();
        var b = this.g ? "uncheck" : "check";
        this.o() && !a.target.href && this.F(b) && (a.g(), this.Z(this.g ? !1 : !0), this.F("change"))
    };
    g.ia = function (a) {
        32 == a.a && (this.T(a), this.Oa(a));
        return !1
    };
    Vd("goog-checkbox", function () {
        return new Ge
    });
    var He = function (a) {
        a = a || {};
        return qe('<span class="jfk-checkbox goog-inline-block' + (a.nb ? " jfk-checkbox-undetermined" : a.checked ? " jfk-checkbox-checked" : " jfk-checkbox-unchecked") + (a.disabled ? " jfk-checkbox-disabled" : "") + (a.na ? " " + V(a.na) : "") + '" role="checkbox" aria-checked="' + (a.nb ? "mixed" : a.checked ? "true" : "false") + '"' + (a.sb ? 'aria-labelledby="' + V(a.sb) + '"' : a.rb ? 'aria-label="' + V(a.rb) + '"' : "") + (a.id ? 'id="' + V(a.id) + '"' : "") + (a.disabled ? 'aria-disabled="true" tabindex="-1"' : 'tabindex="' + (a.Ta ? V(a.Ta) : "0") +
            '"') + (a.attributes ? " " + we(a.attributes) : "") + 'dir="ltr"><div class="jfk-checkbox-checkmark" role="presentation"></div></span>')
    };
    He.a = "jfk.templates.checkbox.main";
    var Ie = function (a, b) {
        var c = Kd();
        Ge.call(this, a, b, c);
        ee(this, 4, !0)
    };
    v(Ie, Ge);
    Ie.prototype.ma = function () {
        this.a = dd(He, {checked: this.N(), disabled: !this.o(), nb: null == this.g}, this.c)
    };
    Ie.prototype.wa = function (a) {
        Ie.j.wa.call(this, a);
        sc(a, "goog-inline-block");
        this.h().dir = "ltr";
        Dd(this) || (a = this.c.xa("div", "jfk-checkbox-checkmark"), this.h().appendChild(a));
        a = Dd(this);
        x(a, "Expected element in component with class: %s", "jfk-checkbox-checkmark");
        td(a, "presentation")
    };
    Ie.prototype.ka = function (a) {
        Ie.j.ka.call(this, a);
        Je(this, !1)
    };
    Ie.prototype.X = function (a) {
        Ie.j.X.call(this, a);
        this.o() && Je(this, !0)
    };
    var Je = function (a, b) {
        if (a.h()) {
            var c = a.h();
            b ? sc(c, "jfk-checkbox-clearOutline") : uc(c, "jfk-checkbox-clearOutline")
        }
    };
    var Ke = function (a) {
        a = a || {};
        var b = '<div class="jfk-radiobutton' + (a.checked ? " jfk-radiobutton-checked" : "") + (a.disabled ? " jfk-radiobutton-disabled" : "") + (a.na ? " " + V(a.na) : "") + '"' + (a.name ? ' data-name="' + V(a.name) + '"' : "") + (a.value ? ' data-value="' + V(a.value) + '"' : "") + (a.id ? ' id="' + V(a.id) + '"' : "") + (a.attributes ? " " + we(a.attributes) : "") + ' role="radio"><span class="jfk-radiobutton-radio"></span><div class="jfk-radiobutton-label">';
        a.label ? (a = a.label, null != a && a.W === Zc && (ya("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`",
            [a.S()]), a = "zSoyz")) : a = "";
        return b + a + "</div></div>"
    };
    Ke.a = "jfk.templates.radiobutton.main";
    var Ne = function (a, b, c, d) {
        S.call(this, null, Le.ca(), a);
        this.V = c || "";
        this.Ha = d || "";
        ee(this, 16, !0);
        this.ba &= -17;
        b && Me(this, b)
    };
    v(Ne, S);
    g = Ne.prototype;
    g.T = function (a) {
        this.Z(!0);
        return Ne.j.T.call(this, a)
    };
    g.ia = function (a) {
        switch (a.a) {
            case 38:
            case 37:
                return this.F(a.ctrlKey ? "b" : "d"), !0;
            case 40:
            case 39:
                return this.F(a.ctrlKey ? "a" : "c"), !0;
            case 32:
                return this.T(a);
            case 9:
                return this.F(a.shiftKey ? "g" : "f"), !1
        }
        return Ne.j.ia.call(this, a)
    };
    g.K = function () {
        return this.V
    };
    g.Z = function (a) {
        Ne.j.Z.call(this, a)
    };
    g.setEnabled = function (a) {
        Ne.j.setEnabled.call(this, a);
        this.F("e")
    };
    var Me = function (a, b) {
        a.Wa = b;
        if (a.h()) {
            var c = a.Wa, d = a.b.ta(a.h());
            x(d);
            Nc(d);
            Mc(d, c)
        }
    }, Le = function () {
    };
    v(Le, R);
    aa(Le);
    g = Le.prototype;
    g.da = function (a) {
        var b = dd(Ke, {checked: a.N(), disabled: !a.o(), name: a.Ha, value: a.K()}, a.c);
        if (a = a.Wa) {
            var c = this.ta(b);
            x(c);
            Nc(c);
            Mc(c, a)
        }
        return b
    };
    g.H = function (a, b) {
        Le.j.H.call(this, a, b);
        var c = b.getAttribute("data-value");
        if (c) {
            a.V = c;
            var d = a.h();
            d && d.setAttribute("data-value", c)
        }
        if (c = b.getAttribute("data-name"))a.Ha = c, a.h() && a.h().setAttribute("data-name", c);
        c = this.ta(b);
        x(c);
        c.firstChild ? Me(a, c.firstChild.nextSibling ? Na(c.childNodes) : c.firstChild) : Me(a, null);
        return b
    };
    g.sa = function () {
        return "radio"
    };
    g.ta = function (a) {
        return Fc(this.s() + "-label", a)
    };
    g.s = function () {
        return "jfk-radiobutton"
    };
    var Pe = function (a) {
        K.call(this);
        this.a = [];
        Oe(this, a)
    };
    v(Pe, K);
    Pe.prototype.b = null;
    Pe.prototype.c = null;
    var Oe = function (a, b) {
        b && (y(b, function (a) {
            Qe(this, a, !1)
        }, a), Oa(a.a, b))
    };
    Pe.prototype.v = function () {
        Pe.j.v.call(this);
        delete this.a;
        this.b = null
    };
    var Qe = function (a, b, c) {
        b && ("function" == typeof a.c ? a.c(b, c) : "function" == typeof b.Sa && b.Sa(c))
    };
    var Se = function (a, b) {
        K.call(this);
        this.f = b || "";
        this.a = new Pe;
        ib(this, u(jb, this.a));
        this.b = new wd(this);
        ib(this, u(jb, this.b));
        this.a.c = Re;
        this.b.listen(this.a, "select", u(this.F, "change"));
        this.b.listen(this, "a", this.wb);
        this.b.listen(this, "b", this.xb);
        this.b.listen(this, "c", this.yb);
        this.b.listen(this, "d", this.Bb);
        this.b.listen(this, "e", this.Aa);
        this.b.listen(this, "f", u(this.hb, !1));
        this.b.listen(this, "g", u(this.hb, !0));
        a && y(a, this.c, this)
    };
    v(Se, K);
    Se.prototype.c = function (a) {
        x(null != a);
        this.b.listen(a, "action", this.vb);
        a.Fa(this);
        var b = this.f;
        a.Ha = b;
        a.h() && a.h().setAttribute("data-name", b);
        var b = a.N(), c = this.a, d = c.a.length;
        a && (Qe(c, a, !1), Qa(c.a, d, 0, a));
        b && Te(this, a);
        a.h() && this.Aa()
    };
    var Te = function (a, b) {
        var c = a.a;
        b != c.b && (Qe(c, c.b, !1), c.b = b, Qe(c, b, !0));
        c.F("select");
        a.Aa()
    }, Ue = function (a) {
        return (a = a.a.b) ? a.K() : null
    }, Ve = function (a, b, c) {
        var d = a.a.a[b] || null;
        c && Te(a, d);
        y(Na(a.a.a), function (a) {
            a.h() && Sc(a.h(), d == a)
        });
        try {
            d.h().focus()
        } catch (e) {
        }
    }, Xe = function (a, b, c, d) {
        c = We(a, b, c);
        -1 != c && a.a.a[c] && (Sc(b.h(), !1), Ve(a, c, d))
    }, We = function (a, b, c) {
        var d = a.a.a.length;
        b = b ? Fa(a.a.a, b) : -1;
        for (var e = 1; e <= d; e++) {
            var f;
            f = (b + c * e) % d;
            f = 0 > f * d ? f + d : f;
            if ((a.a.a[f] || null).o())return f
        }
        return -1
    };
    g = Se.prototype;
    g.Bb = function (a) {
        a = a.target;
        x(a);
        Xe(this, a, -1, !0)
    };
    g.yb = function (a) {
        a = a.target;
        x(a);
        Xe(this, a, 1, !0)
    };
    g.xb = function (a) {
        a = a.target;
        x(a);
        Xe(this, a, -1, !1)
    };
    g.wb = function (a) {
        a = a.target;
        x(a);
        Xe(this, a, 1, !1)
    };
    g.hb = function (a) {
        var b = this.Aa();
        try {
            var c = b[a ? 0 : 1];
            c && c.h().focus()
        } catch (d) {
        }
    };
    g.Aa = function () {
        var a = this.a.b, b = this.a.a[0] || null, c = a && a.o(), d = c ? a : b;
        x(d, "Must have at least one button in the group");
        d.o() || (a = We(this, d, 1), d = -1 != a ? this.a.a[a] || null : null);
        var e = d;
        d && !c && (a = We(this, d, -1), e = -1 != a ? this.a.a[a] || null : null);
        y(Na(this.a.a), function (a) {
            a.h() && Sc(a.h(), d == a || e == a)
        });
        return [d, e]
    };
    g.vb = function (a) {
        a = a.target;
        Te(this, a);
        try {
            a.h().focus()
        } catch (b) {
        }
    };
    g.v = function () {
        y(Na(this.a.a), function (a) {
            jb(a)
        });
        Se.j.v.call(this)
    };
    var Re = function (a, b) {
        a.Z(b);
        a.h() && Sc(a.h(), b)
    };
    var Ye = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Ze = function (a, b) {
        if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, h = null;
            0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
            b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    };
    var $e = function (a, b) {
        this.f = this.m = this.c = "";
        this.l = null;
        this.g = this.i = "";
        this.a = !1;
        var c;
        a instanceof $e ? (this.a = void 0 !== b ? b : a.a, af(this, a.c), this.m = a.m, this.f = a.f, bf(this, a.l), this.i = a.i, cf(this, a.b.clone()), this.g = a.g) : a && (c = String(a).match(Ye)) ? (this.a = !!b, af(this, c[1] || "", !0), this.m = df(c[2] || ""), this.f = df(c[3] || "", !0), bf(this, c[4]), this.i = df(c[5] || "", !0), cf(this, c[6] || "", !0), this.g = df(c[7] || "")) : (this.a = !!b, this.b = new Y(null, 0, this.a))
    };
    $e.prototype.toString = function () {
        var a = [], b = this.c;
        b && a.push(ef(b, ff, !0), ":");
        var c = this.f;
        if (c || "file" == b)a.push("//"), (b = this.m) && a.push(ef(b, ff, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.i)this.f && "/" != c.charAt(0) && a.push("/"), a.push(ef(c, "/" == c.charAt(0) ? gf : hf, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", ef(c, jf));
        return a.join("")
    };
    $e.prototype.clone = function () {
        return new $e(this)
    };
    var af = function (a, b, c) {
        a.c = c ? df(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }, bf = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.l = b
        } else a.l = null
    }, cf = function (a, b, c) {
        b instanceof Y ? (a.b = b, kf(a.b, a.a)) : (c || (b = ef(b, lf)), a.b = new Y(b, 0, a.a))
    }, df = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, ef = function (a, b, c) {
        return p(a) ? (a = encodeURI(a).replace(b, mf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, mf = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, ff = /[#\/\?@]/g, hf = /[\#\?:]/g, gf = /[\#\?]/g, lf = /[\#\?@]/g, jf = /#/g, Y = function (a, b, c) {
        this.c = this.a = null;
        this.b = a || null;
        this.f = !!c
    }, nf = function (a) {
        a.a || (a.a = new je, a.c = 0, a.b && Ze(a.b, function (b, c) {
            var d = decodeURIComponent(b.replace(/\+/g, " "));
            nf(a);
            a.b = null;
            var d = of(a, d), e = a.a.get(d);
            e || a.a.set(d, e = []);
            e.push(c);
            a.c++
        }))
    };
    Y.prototype.remove = function (a) {
        nf(this);
        a = of(this, a);
        return le(this.a.b, a) ? (this.b = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    var pf = function (a, b) {
        nf(a);
        b = of(a, b);
        return le(a.a.b, b)
    };
    Y.prototype.ra = function () {
        nf(this);
        for (var a = this.a.ga(), b = this.a.ra(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    Y.prototype.ga = function (a) {
        nf(this);
        var b = [];
        if (p(a))pf(this, a) && (b = Ma(b, this.a.get(of(this, a)))); else {
            a = this.a.ga();
            for (var c = 0; c < a.length; c++)b = Ma(b, a[c])
        }
        return b
    };
    Y.prototype.set = function (a, b) {
        nf(this);
        this.b = null;
        a = of(this, a);
        pf(this, a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    };
    Y.prototype.get = function (a, b) {
        var c = a ? this.ga(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var qf = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.b = null, a.a.set(of(a, b), Na(c)), a.c += c.length)
    };
    Y.prototype.toString = function () {
        if (this.b)return this.b;
        if (!this.a)return "";
        for (var a = [], b = this.a.ra(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ga(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
        return this.b = a.join("&")
    };
    Y.prototype.clone = function () {
        var a = new Y;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };
    var of = function (a, b) {
        var c = String(b);
        a.f && (c = c.toLowerCase());
        return c
    }, kf = function (a, b) {
        b && !a.f && (nf(a), a.b = null, a.a.forEach(function (a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), qf(this, e, a))
        }, a));
        a.f = b
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    var rf = function (a, b) {
        this.g = [];
        this.O = a;
        this.L = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.u = this.w = this.l = !1;
        this.i = 0;
        this.b = null;
        this.m = 0
    };
    rf.prototype.cancel = function (a) {
        if (this.a)this.c instanceof rf && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.m--, 0 >= b.m && b.cancel())
            }
            this.O ? this.O.call(this.L, this) : this.u = !0;
            this.a || sf(this, new tf)
        }
    };
    rf.prototype.D = function (a, b) {
        this.l = !1;
        uf(this, a, b)
    };
    var uf = function (a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        vf(a)
    }, xf = function (a) {
        if (a.a) {
            if (!a.u)throw new wf;
            a.u = !1
        }
    }, sf = function (a, b) {
        xf(a);
        yf(b);
        uf(a, !1, b)
    }, yf = function (a) {
        x(!(a instanceof rf), "An execution sequence may not be initiated with a blocking Deferred.")
    }, zf = function (a, b, c, d) {
        x(!a.w, "Blocking Deferreds can not be re-used");
        a.g.push([b, c, d]);
        a.a && vf(a)
    };
    rf.prototype.then = function (a, b, c) {
        var d, e, f = new L(function (a, b) {
            d = a;
            e = b
        });
        zf(this, d, function (a) {
            a instanceof tf ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Zb(rf);
    var Af = function (a) {
        return Ia(a.g, function (a) {
            return r(a[1])
        })
    }, vf = function (a) {
        if (a.i && a.a && Af(a)) {
            var b = a.i, c = Bf[b];
            c && (k.clearTimeout(c.C), delete Bf[b]);
            a.i = 0
        }
        a.b && (a.b.m--, delete a.b);
        for (var b = a.c, d = c = !1; a.g.length && !a.l;) {
            var e = a.g.shift(), f = e[0], h = e[1], e = e[2];
            if (f = a.f ? h : f)try {
                var l = f.call(e || a.L, b);
                void 0 !== l && (a.f = a.f && (l == b || l instanceof Error), a.c = b = l);
                if ($b(b) || "function" === typeof k.Promise && b instanceof k.Promise)d = !0, a.l = !0
            } catch (q) {
                b = q, a.f = !0, Af(a) || (c = !0)
            }
        }
        a.c = b;
        d && (l = t(a.D, a, !0), d = t(a.D,
            a, !1), b instanceof rf ? (zf(b, l, d), b.w = !0) : b.then(l, d));
        c && (b = new Cf(b), Bf[b.C] = b, a.i = b.C)
    }, wf = function () {
        w.call(this)
    };
    v(wf, w);
    wf.prototype.message = "Deferred has already fired";
    wf.prototype.name = "AlreadyCalledError";
    var tf = function () {
        w.call(this)
    };
    v(tf, w);
    tf.prototype.message = "Deferred was canceled";
    tf.prototype.name = "CanceledError";
    var Cf = function (a) {
        this.C = k.setTimeout(t(this.b, this), 0);
        this.a = a
    };
    Cf.prototype.b = function () {
        x(Bf[this.C], "Cannot throw an error that is not scheduled.");
        delete Bf[this.C];
        throw this.a;
    };
    var Bf = {};
    var Hf = function (a, b) {
        var c = b || {}, d = c.document || document, e = document.createElement("SCRIPT"), f = {
            mb: e,
            Ga: void 0
        }, h = new rf(Df, f), l = null, q = null != c.timeout ? c.timeout : 5E3;
        0 < q && (l = window.setTimeout(function () {
            Ef(e, !0);
            sf(h, new Ff(1, "Timeout reached for loading script " + a))
        }, q), f.Ga = l);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Ef(e, c.tb || !1, l), xf(h), yf(null), uf(h, !0, null))
        };
        e.onerror = function () {
            Ef(e, !0, l);
            sf(h, new Ff(0, "Error while loading script " +
                a))
        };
        f = c.attributes || {};
        Ua(f, {type: "text/javascript", charset: "UTF-8", src: a});
        Hc(e, f);
        Gf(d).appendChild(e);
        return h
    }, Gf = function (a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }, Df = function () {
        if (this && this.mb) {
            var a = this.mb;
            a && "SCRIPT" == a.tagName && Ef(a, !0, this.Ga)
        }
    }, Ef = function (a, b, c) {
        null != c && k.clearTimeout(c);
        a.onload = m;
        a.onerror = m;
        a.onreadystatechange = m;
        b && window.setTimeout(function () {
            Oc(a)
        }, 0)
    }, Ff = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " +
            b);
        w.call(this, c);
        this.code = a
    };
    v(Ff, w);
    var If = function (a, b) {
        this.b = new $e(a);
        this.a = b ? b : "callback";
        this.Ga = 5E3
    }, Jf = 0;
    If.prototype.send = function (a, b, c, d) {
        a = a || null;
        d = d || "_" + (Jf++).toString(36) + ja().toString(36);
        k._callbacks_ || (k._callbacks_ = {});
        var e = this.b.clone();
        if (a)for (var f in a)if (!a.hasOwnProperty || a.hasOwnProperty(f)) {
            var h = e, l = f, q = a[f];
            n(q) || (q = [String(q)]);
            qf(h.b, l, q)
        }
        b && (k._callbacks_[d] = Kf(d, b), b = this.a, f = "_callbacks_." + d, n(f) || (f = [String(f)]), qf(e.b, b, f));
        b = Hf(e.toString(), {timeout: this.Ga, tb: !0});
        zf(b, null, Lf(d, a, c), void 0);
        return {C: d, $a: b}
    };
    If.prototype.cancel = function (a) {
        a && (a.$a && a.$a.cancel(), a.C && Mf(a.C, !1))
    };
    var Lf = function (a, b, c) {
        return function () {
            Mf(a, !1);
            c && c(b)
        }
    }, Kf = function (a, b) {
        return function (c) {
            Mf(a, !0);
            b.apply(void 0, arguments)
        }
    }, Mf = function (a, b) {
        k._callbacks_[a] && (b ? delete k._callbacks_[a] : k._callbacks_[a] = m)
    };
    var Nf = function (a) {
        a = String(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)return "zh-CN";
        if ("zh-tw" == a)return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }, Z = function (a) {
        a = chrome.i18n.getMessage(a);
        return chrome.i18n.getMessage(a)
    };
    var Pf = function (a) {
        this.g = [];
        chrome.i18n.getAcceptLanguages(t(this.m, this));
        this.a = "";
        this.b = "1";
        this.c = !0;
        this.f = [];
        this.l = !!a;
        chrome.storage.local.get(null, t(this.w, this));
        Of(this)
    }, Qf = !!chrome.i18n.detectLanguage;
    Pf.prototype.w = function (a) {
        "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.b = a.gtxShowBubble);
        "gtxDetectLanguage" in a && (this.c = a.gtxDetectLanguage);
        "gtxSourceLangList" in a && Rf(this, a.gtxSourceLangList);
        "gtxTargetLangList" in a && (this.f = Rf(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.l) {
            var b = (new Date).getTime(), c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0, d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b -
                c) || d != a) && (new If("https://translate.googleapis.com/translate_a/l", "cb")).send({
                client: "gtx",
                hl: d
            }, t(this.u, this, d))
        }
    };
    var Rf = function (a, b) {
        var c = [], d;
        for (d in b)c.push({code: d, name: b[d]});
        c.sort(a.i);
        d = {};
        for (var e = 0; e < c.length; e++)d[c[e].code] = c[e].name;
        return d
    };
    Pf.prototype.i = function (a, b) {
        return a.name.localeCompare(b.name)
    };
    var Sf = function (a) {
        var b = {};
        b.gtxTargetLang = a.a;
        b.gtxShowBubble = a.b;
        b.gtxDetectLanguage = a.c;
        chrome.storage.local.set(b)
    }, Of = function (a) {
        chrome.storage.onChanged.addListener(function (b) {
            b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.b = b.gtxShowBubble.newValue)
        })
    };
    Pf.prototype.m = function (a) {
        this.g = a
    };
    Pf.prototype.u = function (a, b) {
        var c = (new Date).getTime(), d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.f = b.tl
    };
    var Uf = function () {
        this.a = new Pf;
        this.i = document.getElementById("targetLangSel");
        Tf();
        this.O = new X;
        Gd(this.O, document.getElementById("saveBtn"));
        this.L = new X;
        Gd(this.L, document.getElementById("resetBtn"));
        this.l = document.getElementById("saveStatus");
        this.w = new Ne(void 0, Z("MSG_OPTIONS_ICON_DESC"), "1");
        this.m = new Ne(void 0, Z("MSG_OPTIONS_POPUP_DESC"), "2");
        this.D = new Ne(void 0, Z("MSG_OPTIONS_NONE_DESC"), "0");
        Fd(this.w, document.getElementById("popup-option-content"));
        if (!Qf) {
            this.f = Jc("div", "popup-option-ai");
            document.getElementById("popup-option-content").appendChild(this.f);
            this.b = new Ie;
            this.g = Jc("span", "popup-option-ai-lbl");
            N(this.g, Z("MSG_OPTIONS_ALWAYS_SHOW_ICON"));
            var a = this.b, b = this.g;
            if (a.I) {
                var c = !!(a.A & 32);
                a.fa();
                a.G = b;
                a.M();
                c && Cd(a).focus()
            } else a.G = b;
            Fd(this.b, this.f);
            this.f.appendChild(this.g)
        }
        Fd(this.m, document.getElementById("popup-option-content"));
        a = Jc("div", "popup-option-tip", Z("MSG_OPTIONS_POPUP_TIP"));
        document.getElementById("popup-option-content").appendChild(a);
        Fd(this.D, document.getElementById("popup-option-content"));
        a = Jc("div", "popup-option-tip", Z("MSG_OPTIONS_NONE_TIP"));
        document.getElementById("popup-option-content").appendChild(a);
        this.c = new Se([this.w, this.m, this.D])
    };
    Uf.prototype.u = function () {
        if (this.a.loaded) {
            Tf();
            Vf(this);
            for (var a = this.c.a.a.length, b = 0; b < a; ++b) {
                var c = this.c.a.a[b] || null;
                if (c.K() == this.a.b) {
                    Te(this.c, c);
                    break
                }
            }
            this.i.addEventListener("change", t(this.ma, this));
            J(this.c, "change", this.V, !1, this);
            Qf || (this.b.Z(!this.a.c), Qf || this.b.setEnabled("1" == Ue(this.c)), J(this.b, "change", this.la, !1, this));
            J(this.O, "action", this.ea, !1, this);
            J(this.L, "action", function () {
                window.history.go(0)
            })
        } else pc(this.u, this)
    };
    var Vf = function (a) {
        var b = 0, c;
        c = a.a.f;
        var d = a.a;
        if ("" != d.a)d = d.a; else a:{
            for (var e = 0; e < d.g.length; e++) {
                var f = Nf(d.g[e]);
                if (d.f[f]) {
                    d = f;
                    break a
                }
            }
            d = "en"
        }
        var d = d || "", h;
        for (h in c)e = document.createElement("option"), e.value = h, e.text = c[h], e.a = b++, a.i.appendChild(e), h == d && (e.selected = !0)
    };
    Uf.prototype.ma = function () {
        this.a.a = this.i.value
    };
    Uf.prototype.V = function () {
        Qf || this.b.setEnabled("1" == Ue(this.c));
        var a = Ue(this.c);
        this.a.b = a
    };
    Uf.prototype.la = function () {
        this.a.c = !this.b.N()
    };
    Uf.prototype.ea = function () {
        Sf(this.a);
        this.l.style.display = "";
        this.l.style.setProperty("-webkit-transition", "opacity 0.4s ease-out");
        this.l.style.opacity = 1;
        window.setTimeout(function () {
            document.getElementById("saveStatus").style.opacity = 0
        }, 1500)
    };
    var Tf = function () {
        N(M(document, "options-page-title"), Z("MSG_OPTIONS_PAGE_TITLE"));
        N(M(document, "options-title-heading"), Z("MSG_OPTIONS_TITLE"));
        N(M(document, "lang-option"), Z("MSG_OPTIONS_LANG"));
        N(M(document, "popup-option"), Z("MSG_OPTIONS_POPUP"));
        N(M(document, "popup-option-title"), Z("MSG_OPTIONS_POPUP_TITLE"));
        N(M(document, "saveBtn"), Z("MSG_OPTIONS_SAVE"));
        N(M(document, "resetBtn"), Z("MSG_OPTIONS_RESET"));
        N(M(document, "saveStatus"), Z("MSG_OPTIONS_SAVED_STATUS"));
        N(M(document, "footer-homepage"), Z("MSG_OPTIONS_FOOTER_HOMEPAGE"));
        N(M(document, "footer-privacy"), Z("MSG_OPTIONS_FOOTER_PRIVACY"))
    };
    document.addEventListener("DOMContentLoaded", function () {
        (new Uf).u()
    });
})();
