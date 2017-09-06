/* Copyright 2014 Google */
(function() {
    var h = this,
        l = function() {},
        aa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        m = function(a) {
            return "function" == aa(a)
        },
        ba = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ca = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        n = function(a, b, c) {
            n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                ba : ca;
            return n.apply(null, arguments)
        },
        da = Date.now || function() {
            return +new Date
        },
        p = function(a, b) {
            function c() {}

            c.prototype = b.prototype;
            a.J = b.prototype;
            a.prototype = new c;
            a.I = function(a, c, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[c].apply(a, g)
            }
        };
    var q = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, q);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    p(q, Error);
    q.prototype.name = "CustomError";
    var ea = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        fa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ga = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var ha = function(a, b) {
        b.unshift(a);
        q.call(this, ea.apply(null, b));
        b.shift()
    };
    p(ha, q);
    ha.prototype.name = "AssertionError";
    var ia = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) var e = e + (": " + c),
                f = d;
            else a && (e += ": " + a, f = b);
            throw new ha("" + e, f || []);
        },
        t = function(a, b, c) {
            a || ia("", null, b, Array.prototype.slice.call(arguments, 2))
        },
        u = function(a, b, c) {
            m(a) || ia("Expected function but got %s: %s.", [aa(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var ja = Array.prototype.some ? function(a, b, c) {
            t(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        ka = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        la = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var ma = "StopIteration" in h ? h.StopIteration : { message: "StopIteration", stack: "" },
        na = function() {};
    na.prototype.next = function() {
        throw ma;
    };
    na.prototype.g = function() {
        return this
    };
    var oa = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        qa = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < pa.length; f++) c = pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var v = function(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof v) e = a.s(), d = a.o();
            else {
                var c = [],
                    f = 0;
                for (e in a) c[f++] = e;
                e = c;
                c = [];
                f = 0;
                for (d in a) c[f++] = a[d];
                d = c
            }
            for (c = 0; c < e.length; c++) this.set(e[c], d[c])
        }
    };
    v.prototype.o = function() {
        w(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    v.prototype.s = function() {
        w(this);
        return this.a.concat()
    };
    v.prototype.remove = function(a) {
        return x(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && w(this), !0) : !1
    };
    var w = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                x(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], x(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    v.prototype.get = function(a, b) {
        return x(this.b, a) ? this.b[a] : b
    };
    v.prototype.set = function(a, b) {
        x(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    v.prototype.forEach = function(a, b) {
        for (var c = this.s(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    v.prototype.clone = function() {
        return new v(this)
    };
    v.prototype.g = function(a) {
        w(this);
        var b = 0,
            c = this.f,
            d = this,
            e = new na;
        e.next = function() {
            if (c != d.f) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw ma;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };
    var x = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var ra = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        sa = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f = null,
                        g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
                }
        };
    var y = function(a, b) {
        this.f = this.j = this.c = "";
        this.i = null;
        this.g = this.h = "";
        this.a = !1;
        var c;
        a instanceof y ? (this.a = void 0 !== b ? b : a.a, ta(this, a.c), this.j = a.j, this.f = a.f, ua(this, a.i), this.h = a.h, va(this, a.b.clone()), this.g = a.g) : a && (c = String(a).match(ra)) ? (this.a = !!b, ta(this, c[1] || "", !0), this.j = z(c[2] || ""), this.f = z(c[3] || "", !0), ua(this, c[4]), this.h = z(c[5] || "", !0), va(this, c[6] || "", !0), this.g = z(c[7] || "")) : (this.a = !!b, this.b = new B(null, 0, this.a))
    };
    y.prototype.toString = function() {
        var a = [],
            b = this.c;
        b && a.push(C(b, wa, !0), ":");
        var c = this.f;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(C(b, wa, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
        if (c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(C(c, "/" == c.charAt(0) ? xa : ya, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", C(c, za));
        return a.join("")
    };
    y.prototype.clone = function() {
        return new y(this)
    };
    var ta = function(a, b, c) {
            a.c = c ? z(b, !0) : b;
            a.c && (a.c = a.c.replace(/:$/, ""))
        },
        ua = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.i = b
            } else a.i = null
        },
        va = function(a, b, c) {
            b instanceof B ? (a.b = b, Aa(a.b, a.a)) : (c || (b = C(b, Ba)), a.b = new B(b, 0, a.a))
        },
        Da = function(a, b, c) {
            "array" == aa(c) || (c = [String(c)]);
            Ca(a.b, b, c)
        },
        z = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        C = function(a, b, c) {
            return "string" == typeof a ? (a = encodeURI(a).replace(b, Ea), c && (a =
                a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Ea = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        wa = /[#\/\?@]/g,
        ya = /[\#\?:]/g,
        xa = /[\#\?]/g,
        Ba = /[\#\?@]/g,
        za = /#/g,
        B = function(a, b, c) {
            this.c = this.a = null;
            this.b = a || null;
            this.f = !!c
        },
        D = function(a) {
            a.a || (a.a = new v, a.c = 0, a.b && sa(a.b, function(b, c) {
                var d = decodeURIComponent(b.replace(/\+/g, " "));
                D(a);
                a.b = null;
                var d = E(a, d),
                    e = a.a.get(d);
                e || a.a.set(d, e = []);
                e.push(c);
                a.c++
            }))
        };
    B.prototype.remove = function(a) {
        D(this);
        a = E(this, a);
        return x(this.a.b, a) ? (this.b = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    var Fa = function(a, b) {
        D(a);
        b = E(a, b);
        return x(a.a.b, b)
    };
    B.prototype.s = function() {
        D(this);
        for (var a = this.a.o(), b = this.a.s(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    B.prototype.o = function(a) {
        D(this);
        var b = [];
        if ("string" == typeof a) Fa(this, a) && (b = ka(b, this.a.get(E(this, a))));
        else {
            a = this.a.o();
            for (var c = 0; c < a.length; c++) b = ka(b, a[c])
        }
        return b
    };
    B.prototype.set = function(a, b) {
        D(this);
        this.b = null;
        a = E(this, a);
        Fa(this, a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    };
    B.prototype.get = function(a, b) {
        var c = a ? this.o(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var Ca = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.b = null, a.a.set(E(a, b), la(c)), a.c += c.length)
    };
    B.prototype.toString = function() {
        if (this.b) return this.b;
        if (!this.a) return "";
        for (var a = [], b = this.a.s(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.o(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.b = a.join("&")
    };
    B.prototype.clone = function() {
        var a = new B;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };
    var E = function(a, b) {
            var c = String(b);
            a.f && (c = c.toLowerCase());
            return c
        },
        Aa = function(a, b) {
            b && !a.f && (D(a), a.b = null, a.a.forEach(function(a, b) {
                var e = b.toLowerCase();
                b != e && (this.remove(b), Ca(this, e, a))
            }, a));
            a.f = b
        };
    var F;
    a: {
        var Ga = h.navigator;
        if (Ga) {
            var Ha = Ga.userAgent;
            if (Ha) {
                F = Ha;
                break a
            }
        }
        F = ""
    }
    var G = function(a) {
        return -1 != F.indexOf(a)
    };
    var Ia = G("Opera") || G("OPR"),
        H = G("Trident") || G("MSIE"),
        Ja = G("Edge"),
        Ka = G("Gecko") && !(-1 != F.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"),
        La = -1 != F.toLowerCase().indexOf("webkit") && !G("Edge"),
        Ma = function() {
            var a = F;
            if (Ka) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Ja) return /Edge\/([\d\.]+)/.exec(a);
            if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (La) return /WebKit\/(\S+)/.exec(a)
        },
        Na = function() {
            var a = h.document;
            return a ? a.documentMode : void 0
        },
        Oa = function() {
            if (Ia &&
                h.opera) {
                var a;
                var b = h.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = Ma()) && (a = b ? b[1] : "");
            return H && (b = Na(), b > parseFloat(a)) ? String(b) : a
        }(),
        Pa = {},
        Qa = function(a) {
            if (!Pa[a]) {
                for (var b = 0, c = fa(String(Oa)).split("."), d = fa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "",
                        r = RegExp("(\\d*)(\\D*)", "g"),
                        A = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var N = r.exec(g) || ["", "", ""],
                            O = A.exec(k) || ["", "", ""];
                        if (0 == N[0].length && 0 == O[0].length) break;
                        b = ga(0 == N[1].length ? 0 : parseInt(N[1],
                            10), 0 == O[1].length ? 0 : parseInt(O[1], 10)) || ga(0 == N[2].length, 0 == O[2].length) || ga(N[2], O[2])
                    } while (0 == b)
                }
                Pa[a] = 0 <= b
            }
        },
        Ra = h.document,
        Sa = Ra && H ? Na() || ("CSS1Compat" == Ra.compatMode ? parseInt(Oa, 10) : 5) : void 0;
    var Ta;
    if (!(Ta = !Ka && !H)) {
        var Ua;
        if (Ua = H) Ua = 9 <= Sa;
        Ta = Ua
    }
    Ta || Ka && Qa("1.9.1");
    H && Qa("9");
    var Wa = function(a, b) {
            oa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Va.hasOwnProperty(d) ? a.setAttribute(Va[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Va = {
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
        };
    var Xa = function(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    };
    Xa.prototype.get = function() {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a
    };
    var Ya = function(a, b) {
        a.g(b);
        a.b < a.f && (a.b++, b.next = a.a, a.a = b)
    };
    var Za = function(a) {
            h.setTimeout(function() {
                throw a;
            }, 0)
        },
        $a, ab = function() {
            var a = h.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = n(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.A;
                        c.A = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = { A: a };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    h.setTimeout(a, 0)
                }
        };
    var bb = function() {
            this.b = this.a = null
        },
        db = new Xa(function() {
            return new cb
        }, function(a) {
            a.reset()
        }, 100);
    bb.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };
    var cb = function() {
        this.next = this.b = this.a = null
    };
    cb.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    cb.prototype.reset = function() {
        this.next = this.b = this.a = null
    };
    var hb = function(a, b) {
            I || eb();
            fb || (I(), fb = !0);
            var c = gb,
                d = db.get();
            d.set(a, b);
            c.b ? c.b.next = d : (t(!c.a), c.a = d);
            c.b = d
        },
        I, eb = function() {
            if (h.Promise && h.Promise.resolve) {
                var a = h.Promise.resolve(void 0);
                I = function() {
                    a.then(ib)
                }
            } else I = function() {
                var a = ib;
                !m(h.setImmediate) || h.Window && h.Window.prototype && !G("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? ($a || ($a = ab()), $a(a)) : h.setImmediate(a)
            }
        },
        fb = !1,
        gb = new bb,
        ib = function() {
            for (var a = null; a = gb.remove();) {
                try {
                    a.a.call(a.b)
                } catch (b) {
                    Za(b)
                }
                Ya(db, a)
            }
            fb = !1
        };
    var jb = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        kb = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var L = function(a, b) {
            this.a = 0;
            this.i = void 0;
            this.f = this.b = this.c = null;
            this.g = this.h = !1;
            if (a != l) try {
                var c = this;
                a.call(b, function(a) {
                    J(c, 2, a)
                }, function(a) {
                    if (!(a instanceof K)) try {
                        if (a instanceof Error) throw a;
                        throw Error("Promise rejected.");
                    } catch (b) {}
                    J(c, 3, a)
                })
            } catch (d) {
                J(this, 3, d)
            }
        },
        lb = function() {
            this.next = this.f = this.c = this.b = this.a = null;
            this.g = !1
        };
    lb.prototype.reset = function() {
        this.f = this.c = this.b = this.a = null;
        this.g = !1
    };
    var mb = new Xa(function() {
            return new lb
        }, function(a) {
            a.reset()
        }, 100),
        nb = function(a, b, c) {
            var d = mb.get();
            d.b = a;
            d.c = b;
            d.f = c;
            return d
        };
    L.prototype.then = function(a, b, c) {
        null != a && u(a, "opt_onFulfilled should be a function.");
        null != b && u(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return ob(this, m(a) ? a : null, m(b) ? b : null, c)
    };
    jb(L);
    L.prototype.cancel = function(a) {
        0 == this.a && hb(function() {
            var b = new K(a);
            pb(this, b)
        }, this)
    };
    var pb = function(a, b) {
            if (0 == a.a)
                if (a.c) {
                    var c = a.c;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.a && 1 == d ? pb(c, b) : (f ? (d = f, t(c.b), t(null != d), d.next == c.f && (c.f = d), d.next = d.next.next) : qb(c), rb(c, e, 3, b)))
                    }
                    a.c = null
                } else J(a, 3, b)
        },
        tb = function(a, b) {
            a.b || 2 != a.a && 3 != a.a || sb(a);
            t(null != b.b);
            a.f ? a.f.next = b : a.b = b;
            a.f = b
        },
        ob = function(a, b, c, d) {
            var e = nb(null, null, null);
            e.a = new L(function(a, g) {
                e.b = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (A) {
                        g(A)
                    }
                } : a;
                e.c = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        void 0 === e && b instanceof K ? g(b) : a(e)
                    } catch (A) {
                        g(A)
                    }
                } : g
            });
            e.a.c = a;
            tb(a, e);
            return e.a
        };
    L.prototype.m = function(a) {
        t(1 == this.a);
        this.a = 0;
        J(this, 2, a)
    };
    L.prototype.u = function(a) {
        t(1 == this.a);
        this.a = 0;
        J(this, 3, a)
    };
    var J = function(a, b, c) {
            if (0 == a.a) {
                a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.a = 1;
                var d;
                a: {
                    var e = c,
                        f = a.m,
                        g = a.u;
                    if (e instanceof L) null != f && u(f, "opt_onFulfilled should be a function."),
                    null != g && u(g, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
                    tb(e, nb(f || l, g || null, a)),
                    d = !0;
                    else if (kb(e)) e.then(f, g, a),
                    d = !0;
                    else {
                        var k = typeof e;
                        if ("object" == k && null != e || "function" == k) try {
                            var r = e.then;
                            if (m(r)) {
                                ub(e, r, f, g, a);
                                d = !0;
                                break a
                            }
                        } catch (A) {
                            g.call(a,
                                A);
                            d = !0;
                            break a
                        }
                        d = !1
                    }
                }
                d || (a.i = c, a.a = b, a.c = null, sb(a), 3 != b || c instanceof K || vb(a, c))
            }
        },
        ub = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (r) {
                k(r)
            }
        },
        sb = function(a) {
            a.h || (a.h = !0, hb(a.j, a))
        },
        qb = function(a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.f = null);
            null != b && t(null != b.b);
            return b
        };
    L.prototype.j = function() {
        for (var a = null; a = qb(this);) rb(this, a, this.a, this.i);
        this.h = !1
    };
    var rb = function(a, b, c, d) {
            if (3 == c && b.c && !b.g)
                for (; a && a.g; a = a.c) a.g = !1;
            if (b.a) b.a.c = null, wb(b, c, d);
            else try {
                b.g ? b.b.call(b.f) : wb(b, c, d)
            } catch (e) {
                xb.call(null, e)
            }
            Ya(mb, b)
        },
        wb = function(a, b, c) {
            2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
        },
        vb = function(a, b) {
            a.g = !0;
            hb(function() {
                a.g && xb.call(null, b)
            })
        },
        xb = Za,
        K = function(a) {
            q.call(this, a)
        };
    p(K, q);
    K.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    var M = function(a, b) {
        this.g = [];
        this.G = a;
        this.D = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.m = this.u = this.i = !1;
        this.h = 0;
        this.b = null;
        this.j = 0
    };
    M.prototype.cancel = function(a) {
        if (this.a) this.c instanceof M && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.j--, 0 >= b.j && b.cancel())
            }
            this.G ? this.G.call(this.D, this) : this.m = !0;
            this.a || yb(this, new P)
        }
    };
    M.prototype.C = function(a, b) {
        this.i = !1;
        zb(this, a, b)
    };
    var zb = function(a, b, c) {
            a.a = !0;
            a.c = c;
            a.f = !b;
            Ab(a)
        },
        Bb = function(a) {
            if (a.a) {
                if (!a.m) throw new Q;
                a.m = !1
            }
        },
        yb = function(a, b) {
            Bb(a);
            Cb(b);
            zb(a, !1, b)
        },
        Cb = function(a) {
            t(!(a instanceof M), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        Db = function(a, b, c, d) {
            t(!a.u, "Blocking Deferreds can not be re-used");
            a.g.push([b, c, d]);
            a.a && Ab(a)
        };
    M.prototype.then = function(a, b, c) {
        var d, e, f = new L(function(a, b) {
            d = a;
            e = b
        });
        Db(this, d, function(a) {
            a instanceof P ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    jb(M);
    var Eb = function(a) {
            return ja(a.g, function(a) {
                return m(a[1])
            })
        },
        Ab = function(a) {
            if (a.h && a.a && Eb(a)) {
                var b = a.h,
                    c = R[b];
                c && (h.clearTimeout(c.l), delete R[b]);
                a.h = 0
            }
            a.b && (a.b.j--, delete a.b);
            for (var b = a.c, d = c = !1; a.g.length && !a.i;) {
                var e = a.g.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = a.f ? g : f) try {
                    var k = f.call(e || a.D, b);
                    void 0 !== k && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                    if (kb(b) || "function" === typeof h.Promise && b instanceof h.Promise) d = !0, a.i = !0
                } catch (r) {
                    b = r, a.f = !0, Eb(a) || (c = !0)
                }
            }
            a.c = b;
            d && (k = n(a.C, a, !0), d = n(a.C,
                a, !1), b instanceof M ? (Db(b, k, d), b.u = !0) : b.then(k, d));
            c && (b = new Fb(b), R[b.l] = b, a.h = b.l)
        },
        Q = function() {
            q.call(this)
        };
    p(Q, q);
    Q.prototype.message = "Deferred has already fired";
    Q.prototype.name = "AlreadyCalledError";
    var P = function() {
        q.call(this)
    };
    p(P, q);
    P.prototype.message = "Deferred was canceled";
    P.prototype.name = "CanceledError";
    var Fb = function(a) {
        this.l = h.setTimeout(n(this.b, this), 0);
        this.a = a
    };
    Fb.prototype.b = function() {
        t(R[this.l], "Cannot throw an error that is not scheduled.");
        delete R[this.l];
        throw this.a;
    };
    var R = {};
    var Jb = function(a, b) {
            var c = b || {},
                d = c.document || document,
                e = document.createElement("SCRIPT"),
                f = {
                    F: e,
                    v: void 0
                },
                g = new M(Gb, f),
                k = null,
                r = null != c.timeout ? c.timeout : 5E3;
            0 < r && (k = window.setTimeout(function() {
                S(e, !0);
                yb(g, new Hb(1, "Timeout reached for loading script " + a))
            }, r), f.v = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (S(e, c.H || !1, k), Bb(g), Cb(null), zb(g, !0, null))
            };
            e.onerror = function() {
                S(e, !0, k);
                yb(g, new Hb(0, "Error while loading script " + a))
            };
            f = c.attributes || {};
            qa(f, { type: "text/javascript", charset: "UTF-8", src: a });
            Wa(e, f);
            Ib(d).appendChild(e);
            return g
        },
        Ib = function(a) {
            var b = a.getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        },
        Gb = function() {
            if (this && this.F) {
                var a = this.F;
                a && "SCRIPT" == a.tagName && S(a, !0, this.v)
            }
        },
        S = function(a, b, c) {
            null != c && h.clearTimeout(c);
            a.onload = l;
            a.onerror = l;
            a.onreadystatechange = l;
            b && window.setTimeout(function() {
                a && a.parentNode && a.parentNode.removeChild(a)
            }, 0)
        },
        Hb = function(a, b) {
            var c = "Jsloader error (code #" +
                a + ")";
            b && (c += ": " + b);
            q.call(this, c);
            this.code = a
        };
    p(Hb, q);
    var Kb = function(a, b) {
            this.b = new y(a);
            this.a = b ? b : "callback";
            this.v = 5E3
        },
        Lb = 0;
    Kb.prototype.send = function(a, b, c, d) {
        a = a || null;
        d = d || "_" + (Lb++).toString(36) + da().toString(36);
        h._callbacks_ || (h._callbacks_ = {});
        var e = this.b.clone();
        if (a)
            for (var f in a) a.hasOwnProperty && !a.hasOwnProperty(f) || Da(e, f, a[f]);
        b && (h._callbacks_[d] = Mb(d, b), Da(e, this.a, "_callbacks_." + d));
        b = Jb(e.toString(), { timeout: this.v, H: !0 });
        Db(b, null, Nb(d, a, c), void 0);
        return { l: d, B: b }
    };
    Kb.prototype.cancel = function(a) {
        a && (a.B && a.B.cancel(), a.l && Ob(a.l, !1))
    };
    var Nb = function(a, b, c) {
            return function() {
                Ob(a, !1);
                c && c(b)
            }
        },
        Mb = function(a, b) {
            return function(c) {
                Ob(a, !0);
                b.apply(void 0, arguments)
            }
        },
        Ob = function(a, b) {
            h._callbacks_[a] && (b ? delete h._callbacks_[a] : h._callbacks_[a] = l)
        };
    var T = function(a, b) {
            return a.replace(/\{\{\$.*?\}\}/g, function(a) {
                a = a.substr(3, a.length - 5);
                return String(b[a]) || ""
            })
        },
        Pb = function(a) {
            return a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n")
        },
        Qb = function(a) {
            a = String(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        },
        Rb = function(a, b) {
            return "https://translate.google.com/?source=gtx_c#auto/" + a + "/" + encodeURIComponent(b)
        };
    var U = function(a) {
            this.b = [];
            chrome.i18n.getAcceptLanguages(n(this.i, this));
            this.a = "";
            this.f = "1";
            this.c = [];
            this.h = !!a;
            chrome.storage.local.get(null, n(this.m, this));
            Sb(this)
        },
        Ub = function() {
            var a = Tb;
            if ("" != a.a) a = a.a;
            else a: {
                for (var b = 0; b < a.b.length; b++) {
                    var c = Qb(a.b[b]);
                    if (a.c[c]) {
                        a = c;
                        break a
                    }
                }
                a = "en"
            }
            return a
        };
    U.prototype.m = function(a) {
        "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.f = a.gtxShowBubble);
        "gtxSourceLangList" in a && Vb(this, a.gtxSourceLangList);
        "gtxTargetLangList" in a && (this.c = Vb(this, a.gtxTargetLangList));
        this.loaded = !0;
        if (this.h) {
            var b = (new Date).getTime(),
                c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0,
                d = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
            a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
            (864E5 < Math.abs(b - c) || d != a) && (new Kb("https://translate.googleapis.com/translate_a/l",
                "cb")).send({ client: "gtx", hl: d }, n(this.j, this, d))
        }
    };
    var Vb = function(a, b) {
        var c = [],
            d;
        for (d in b) c.push({ code: d, name: b[d] });
        c.sort(a.g);
        d = {};
        for (var e = 0; e < c.length; e++) d[c[e].code] = c[e].name;
        return d
    };
    U.prototype.g = function(a, b) {
        return a.name.localeCompare(b.name)
    };
    var Sb = function(a) {
        chrome.storage.onChanged.addListener(function(b) {
            b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.f = b.gtxShowBubble.newValue)
        })
    };
    U.prototype.i = function(a) {
        this.b = a
    };
    U.prototype.j = function(a, b) {
        var c = (new Date).getTime(),
            d = {};
        d.gtxSourceLangList = b.sl;
        d.gtxTargetLangList = b.tl;
        d.gtxDisplayLanguage = a;
        d.gtxTimeStamp = c;
        chrome.storage.local.set(d);
        this.c = b.tl
    };
    var Wb = T("(function(){({{$code}})();})();", { code: window.injection.toString() }),
        Xb = T("(function(){({{$code}})();})();", { code: window.injector.toString() });
    delete window.injector;
    delete window.injection;

    function Yb(a, b, c) {
        b = { pageLang: b, userLang: c };
        b.content = Pb(T(Wb, b));
        chrome.tabs.executeScript(a, { code: T(Xb, b) }, function() {
            chrome.runtime.lastError && console.error(chrome.runtime.lastError.message)
        })
    }

    var Zb = function(a) {
        this.c = a;
        this.w = this.a = !1
    };
    Zb.prototype.popup = function() {
        this.a || this.w || (this.a = !0, this.b = "", chrome.tabs.detectLanguage(this.c, n(this.f, this)))
    };
    Zb.prototype.f = function(a) {
        if (!this.w) {
            if (!a || "und" == a || a.match("invalid")) a = "auto";
            this.b = a;
            a = Qb(Ub());
            var b = Qb(this.b);
            Yb(this.c, b, a);
            this.a = !1
        }
    };
    var V = function() {
        this.a = {}
    };
    V.prototype.b = function(a) {
        this.a[a] || (this.a[a] = new Zb(a));
        this.a[a].popup()
    };
    V.prototype.c = function(a) {
        this.a[a] && (this.a[a].w = !0, delete this.a[a])
    };
    var $b = new V,
        Tb = new U(!0),
        W = document.createElement("audio");


    chrome.runtime.onMessage.addListener(function(a, b, sendResponse) {
        if (!a.action) {
            a.audioSrc ? W.paused || a.audioSrc != W.src ? (W.src = a.audioSrc, W.load(), W.play()) : (W.pause(), W.currentTime = 0) : a.bubbleClosed || a.popupClosed ? W.pause() : a.detectLanguage && chrome.tabs.detectLanguage(function(a) {
                chrome.tabs.sendMessage(b.tab.id, { "gtx.detected": a })
            })
        } else {
            //todo add new onMessage handler
            function showWindow(url) {
                var w = 400;
                var h = 400;
                chrome.windows.create({
                    url: url,
                    type: "popup",
                    width: w,
                    height: h,
                    left: Math.floor(screen.width / 2 - (w + 1) / 2),
                    top: Math.floor(screen.height / 2 - h / 2)
                });
            }

            var message = a;
            if (message.action == "addword" || message.action == "delword") {
                var url = 'http://dict.youdao.com/wordbook/ajax?action=';
                if (message.action == "addword") {
                    url += 'addword';
                } else {
                    url += 'delword';
                }
                url += '&q=' + encodeURIComponent(message.data) + '&date=' + new Date() + '&le=eng';
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            var jinfo = JSON.parse(xhr.responseText);
                            //添加成功和删除成功的返回值不同
                            if (jinfo.message == "adddone") {
                                sendResponse({ result: "addsuccess" });
                            } else if (jinfo.success == "1") {
                                sendResponse({ result: "delsuccess" });
                            } else if (jinfo.message == "nouser") {
                                showWindow("http://account.youdao.com/login?service=dict&back_url=http://dict.youdao.com/wordbook/wordlist%3Fkeyfrom%3Dnull");
                            } else {
                                sendResponse(jinfo);
                            }
                        } else {
                            sendResponse({ error: "status " + status });
                        }
                    }
                }
                xhr.open('GET', url, true);
                xhr.send();
            } else if (message.action == "logout") {
                chrome.cookies.getAll({}, function(cookies) {
                    console.log(cookies)
                    for (var i in cookies) {
                        if (cookies[i].domain == "dict.youdao.com" || cookies[i].domain == ".youdao.com") {
                            var url = "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain +
                                cookies[i].path;
                            chrome.cookies.remove({ "url": url, "name": cookies[i].name });
                        }
                    }
                    sendResponse({ result: "success" });
                    return true;
                });
            } else if (message.action == "login") {
                showWindow("http://account.youdao.com/login?service=dict&back_url=http://dict.youdao.com/wordbook/wordlist%3Fkeyfrom%3Dnull");
            }
            return true;
        }
    });
    chrome.runtime.onConnect.addListener(function(a) {
        a.onDisconnect.addListener(function() {
            chrome.runtime.sendMessage({ popupClosed: !0 })
        })
    });
    chrome.contextMenus.create({
        id: "translate",
        title: function(a) {
            a = chrome.i18n.getMessage(a);
            return chrome.i18n.getMessage(a)
        }("MSG_FOOTER_TRANSLATE"),
        contexts: ["selection"]
    });
    chrome.contextMenus.onClicked.addListener(function(a) {
        chrome.tabs.create({ url: Rb(Ub(), a.selectionText) })
    });
    var ac = function() {
            return $b
        },
        X = ["translate", "getTranslateManager"],
        Y = h;
    X[0] in Y || !Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ac ? Y[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ac;
    V.prototype.attach = V.prototype.b;
    V.prototype.detach = V.prototype.c;


})
();