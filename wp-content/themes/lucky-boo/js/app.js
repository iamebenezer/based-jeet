/*!For license information please see app.js.LICENSE.txt*/
(() => {
    "use strict";
    var n, t = {
            194: () => {
                function n(n, t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
                    }
                }
                var t = "(prefers-reduced-motion: reduce)",
                    e = 4,
                    i = 5,
                    o = {
                        CREATED: 1,
                        MOUNTED: 2,
                        IDLE: 3,
                        MOVING: e,
                        SCROLLING: i,
                        DRAGGING: 6,
                        DESTROYED: 7
                    };

                function r(n) {
                    n.length = 0
                }

                function u(n, t, e) {
                    return Array.prototype.slice.call(n, t, e)
                }

                function s(n) {
                    return n.bind.apply(n, [null].concat(u(arguments, 1)))
                }
                var a = setTimeout,
                    c = function() {};

                function l(n) {
                    return requestAnimationFrame(n)
                }

                function f(n, t) {
                    return typeof t === n
                }

                function d(n) {
                    return !m(n) && f("object", n)
                }
                var v = Array.isArray,
                    p = s(f, "function"),
                    g = s(f, "string"),
                    h = s(f, "undefined");

                function m(n) {
                    return null === n
                }

                function y(n) {
                    try {
                        return n instanceof(n.ownerDocument.defaultView || window).HTMLElement
                    } catch (n) {
                        return !1
                    }
                }

                function b(n) {
                    return v(n) ? n : [n]
                }

                function w(n, t) {
                    b(n).forEach(t)
                }

                function E(n, t) {
                    return n.indexOf(t) > -1
                }

                function x(n, t) {
                    return n.push.apply(n, b(t)), n
                }

                function S(n, t, e) {
                    n && w(t, (function(t) {
                        t && n.classList[e ? "add" : "remove"](t)
                    }))
                }

                function C(n, t) {
                    S(n, g(t) ? t.split(" ") : t, !0)
                }

                function k(n, t) {
                    w(t, n.appendChild.bind(n))
                }

                function L(n, t) {
                    w(n, (function(n) {
                        var e = (t || n).parentNode;
                        e && e.insertBefore(n, t)
                    }))
                }

                function P(n, t) {
                    return y(n) && (n.msMatchesSelector || n.matches).call(n, t)
                }

                function _(n, t) {
                    var e = n ? u(n.children) : [];
                    return t ? e.filter((function(n) {
                        return P(n, t)
                    })) : e
                }

                function O(n, t) {
                    return t ? _(n, t)[0] : n.firstElementChild
                }
                var A = Object.keys;

                function D(n, t, e) {
                    return n && (e ? A(n).reverse() : A(n)).forEach((function(e) {
                        "__proto__" !== e && t(n[e], e)
                    })), n
                }

                function M(n) {
                    return u(arguments, 1).forEach((function(t) {
                        D(t, (function(e, i) {
                            n[i] = t[i]
                        }))
                    })), n
                }

                function z(n) {
                    return u(arguments, 1).forEach((function(t) {
                        D(t, (function(t, e) {
                            v(t) ? n[e] = t.slice() : d(t) ? n[e] = z({}, d(n[e]) ? n[e] : {}, t) : n[e] = t
                        }))
                    })), n
                }

                function N(n, t) {
                    w(t || A(n), (function(t) {
                        delete n[t]
                    }))
                }

                function I(n, t) {
                    w(n, (function(n) {
                        w(t, (function(t) {
                            n && n.removeAttribute(t)
                        }))
                    }))
                }

                function T(n, t, e) {
                    d(t) ? D(t, (function(t, e) {
                        T(n, e, t)
                    })) : w(n, (function(n) {
                        m(e) || "" === e ? I(n, t) : n.setAttribute(t, String(e))
                    }))
                }

                function j(n, t, e) {
                    var i = document.createElement(n);
                    return t && (g(t) ? C(i, t) : T(i, t)), e && k(e, i), i
                }

                function F(n, t, e) {
                    if (h(e)) return getComputedStyle(n)[t];
                    m(e) || (n.style[t] = "" + e)
                }

                function R(n, t) {
                    F(n, "display", t)
                }

                function B(n) {
                    n.setActive && n.setActive() || n.focus({
                        preventScroll: !0
                    })
                }

                function W(n, t) {
                    return n.getAttribute(t)
                }

                function X(n, t) {
                    return n && n.classList.contains(t)
                }

                function G(n) {
                    return n.getBoundingClientRect()
                }

                function q(n) {
                    w(n, (function(n) {
                        n && n.parentNode && n.parentNode.removeChild(n)
                    }))
                }

                function H(n) {
                    return O((new DOMParser).parseFromString(n, "text/html").body)
                }

                function U(n, t) {
                    n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation())
                }

                function Y(n, t) {
                    return n && n.querySelector(t)
                }

                function K(n, t) {
                    return t ? u(n.querySelectorAll(t)) : []
                }

                function J(n, t) {
                    S(n, t, !1)
                }

                function Q(n) {
                    return n.timeStamp
                }

                function V(n) {
                    return g(n) ? n : n ? n + "px" : ""
                }
                var Z = "splide",
                    $ = "data-" + Z;

                function nn(n, t) {
                    if (!n) throw new Error("[" + Z + "] " + (t || ""))
                }
                var tn = Math.min,
                    en = Math.max,
                    on = Math.floor,
                    rn = Math.ceil,
                    un = Math.abs;

                function sn(n, t, e) {
                    return un(n - t) < e
                }

                function an(n, t, e, i) {
                    var o = tn(t, e),
                        r = en(t, e);
                    return i ? o < n && n < r : o <= n && n <= r
                }

                function cn(n, t, e) {
                    var i = tn(t, e),
                        o = en(t, e);
                    return tn(en(i, n), o)
                }

                function ln(n) {
                    return +(n > 0) - +(n < 0)
                }

                function fn(n, t) {
                    return w(t, (function(t) {
                        n = n.replace("%s", "" + t)
                    })), n
                }

                function dn(n) {
                    return n < 10 ? "0" + n : "" + n
                }
                var vn = {};

                function pn(n) {
                    return "" + n + dn(vn[n] = (vn[n] || 0) + 1)
                }

                function gn() {
                    var n = [];

                    function t(n, t, e) {
                        w(n, (function(n) {
                            n && w(t, (function(t) {
                                t.split(" ").forEach((function(t) {
                                    var i = t.split(".");
                                    e(n, i[0], i[1])
                                }))
                            }))
                        }))
                    }
                    return {
                        bind: function(e, i, o, r) {
                            t(e, i, (function(t, e, i) {
                                var u = "addEventListener" in t,
                                    s = u ? t.removeEventListener.bind(t, e, o, r) : t.removeListener.bind(t, o);
                                u ? t.addEventListener(e, o, r) : t.addListener(o), n.push([t, e, i, o, s])
                            }))
                        },
                        unbind: function(e, i, o) {
                            t(e, i, (function(t, e, i) {
                                n = n.filter((function(n) {
                                    return !!(n[0] !== t || n[1] !== e || n[2] !== i || o && n[3] !== o) || (n[4](), !1)
                                }))
                            }))
                        },
                        dispatch: function(n, t, e) {
                            var i;
                            return "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                                bubbles: true,
                                detail: e
                            }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, true, !1, e), n.dispatchEvent(i), i
                        },
                        destroy: function() {
                            n.forEach((function(n) {
                                n[4]()
                            })), r(n)
                        }
                    }
                }
                var hn = "mounted",
                    mn = "ready",
                    yn = "move",
                    bn = "moved",
                    wn = "click",
                    En = "active",
                    xn = "inactive",
                    Sn = "visible",
                    Cn = "hidden",
                    kn = "refresh",
                    Ln = "updated",
                    Pn = "resize",
                    _n = "resized",
                    On = "scroll",
                    An = "scrolled",
                    Dn = "destroy",
                    Mn = "arrows:mounted",
                    zn = "navigation:mounted",
                    Nn = "autoplay:play",
                    In = "autoplay:pause",
                    Tn = "lazyload:loaded",
                    jn = "sk",
                    Fn = "sh",
                    Rn = "ei";

                function Bn(n) {
                    var t = n ? n.event.bus : document.createDocumentFragment(),
                        e = gn();
                    return n && n.event.on(Dn, e.destroy), M(e, {
                        bus: t,
                        on: function(n, i) {
                            e.bind(t, b(n).join(" "), (function(n) {
                                i.apply(i, v(n.detail) ? n.detail : [])
                            }))
                        },
                        off: s(e.unbind, t),
                        emit: function(n) {
                            e.dispatch(t, n, u(arguments, 1))
                        }
                    })
                }

                function Wn(n, t, e, i) {
                    var o, r, u = Date.now,
                        s = 0,
                        a = !0,
                        c = 0;

                    function f() {
                        if (!a) {
                            if (s = n ? tn((u() - o) / n, 1) : 1, e && e(s), s >= 1 && (t(), o = u(), i && ++c >= i)) return d();
                            r = l(f)
                        }
                    }

                    function d() {
                        a = !0
                    }

                    function v() {
                        r && cancelAnimationFrame(r), s = 0, r = 0, a = !0
                    }
                    return {
                        start: function(t) {
                            t || v(), o = u() - (t ? s * n : 0), a = !1, r = l(f)
                        },
                        rewind: function() {
                            o = u(), s = 0, e && e(s)
                        },
                        pause: d,
                        cancel: v,
                        set: function(t) {
                            n = t
                        },
                        isPaused: function() {
                            return a
                        }
                    }
                }
                var Xn = "Arrow",
                    Gn = Xn + "Left",
                    qn = Xn + "Right",
                    Hn = Xn + "Up",
                    Un = Xn + "Down",
                    Yn = "ttb",
                    Kn = {
                        width: ["height"],
                        left: ["top", "right"],
                        right: ["bottom", "left"],
                        x: ["y"],
                        X: ["Y"],
                        Y: ["X"],
                        ArrowLeft: [Hn, qn],
                        ArrowRight: [Un, Gn]
                    };

                function Jn(n, t, e) {
                    return {
                        resolve: function(n, t, i) {
                            var o = "rtl" !== (i = i || e.direction) || t ? i === Yn ? 0 : -1 : 1;
                            return Kn[n] && Kn[n][o] || n.replace(/width|left|right/i, (function(n, t) {
                                var e = Kn[n.toLowerCase()][o] || n;
                                return t > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e
                            }))
                        },
                        orient: function(n) {
                            return n * ("rtl" === e.direction ? 1 : -1)
                        }
                    }
                }
                var Qn = "role",
                    Vn = "tabindex",
                    Zn = "aria-",
                    $n = Zn + "controls",
                    nt = Zn + "current",
                    tt = Zn + "selected",
                    et = Zn + "label",
                    it = Zn + "labelledby",
                    ot = Zn + "hidden",
                    rt = Zn + "orientation",
                    ut = Zn + "roledescription",
                    st = Zn + "live",
                    at = Zn + "busy",
                    ct = Zn + "atomic",
                    lt = [Qn, Vn, "disabled", $n, nt, et, it, ot, rt, ut],
                    ft = Z + "__",
                    dt = "is-",
                    vt = Z,
                    pt = ft + "track",
                    gt = ft + "list",
                    ht = ft + "slide",
                    mt = ht + "--clone",
                    yt = ht + "__container",
                    bt = ft + "arrows",
                    wt = ft + "arrow",
                    Et = wt + "--prev",
                    xt = wt + "--next",
                    St = ft + "pagination",
                    Ct = St + "__page",
                    kt = ft + "progress" + "__bar",
                    Lt = ft + "toggle",
                    Pt = ft + "sr",
                    _t = dt + "initialized",
                    Ot = dt + "active",
                    At = dt + "prev",
                    Dt = dt + "next",
                    Mt = dt + "visible",
                    zt = dt + "loading",
                    Nt = dt + "focus-in",
                    It = dt + "overflow",
                    Tt = [Ot, Mt, At, Dt, zt, Nt, It],
                    jt = {
                        slide: ht,
                        clone: mt,
                        arrows: bt,
                        arrow: wt,
                        prev: Et,
                        next: xt,
                        pagination: St,
                        page: Ct,
                        spinner: ft + "spinner"
                    };
                var Ft = "touchstart mousedown",
                    Rt = "touchmove mousemove",
                    Bt = "touchend touchcancel mouseup click";
                var Wt = "slide",
                    Xt = "loop",
                    Gt = "fade";

                function qt(n, t, o, r) {
                    var u, a = Bn(n),
                        c = a.on,
                        l = a.emit,
                        f = a.bind,
                        d = n.Components,
                        v = n.root,
                        p = n.options,
                        g = p.isNavigation,
                        h = p.updateOnMove,
                        m = p.i18n,
                        y = p.pagination,
                        b = p.slideFocus,
                        w = d.Direction.resolve,
                        E = W(r, "style"),
                        x = W(r, et),
                        C = o > -1,
                        k = O(r, "." + yt);

                    function L() {
                        var e = n.splides.map((function(n) {
                            var e = n.splide.Components.Slides.getAt(t);
                            return e ? e.slide.id : ""
                        })).join(" ");
                        T(r, et, fn(m.slideX, (C ? o : t) + 1)), T(r, $n, e), T(r, Qn, b ? "button" : ""), b && I(r, ut)
                    }

                    function P() {
                        u || _()
                    }

                    function _() {
                        if (!u) {
                            var o = n.index;
                            (s = A()) !== X(r, Ot) && (S(r, Ot, s), T(r, nt, g && s || ""), l(s ? En : xn, D)),
                                function() {
                                    var t = function() {
                                            if (n.is(Gt)) return A();
                                            var t = G(d.Elements.track),
                                                e = G(r),
                                                i = w("left", !0),
                                                o = w("right", !0);
                                            return on(t[i]) <= rn(e[i]) && on(e[o]) <= rn(t[o])
                                        }(),
                                        o = !t && (!A() || C);
                                    n.state.is([e, i]) || T(r, ot, o || "");
                                    T(K(r, p.focusableNodes || ""), Vn, o ? -1 : ""), b && T(r, Vn, o ? -1 : 0);
                                    t !== X(r, Mt) && (S(r, Mt, t), l(t ? Sn : Cn, D));
                                    if (!t && document.activeElement === r) {
                                        var u = d.Slides.getAt(n.index);
                                        u && B(u.slide)
                                    }
                                }(), S(r, At, t === o - 1), S(r, Dt, t === o + 1)
                        }
                        var s
                    }

                    function A() {
                        var e = n.index;
                        return e === t || p.cloneStatus && e === o
                    }
                    var D = {
                        index: t,
                        slideIndex: o,
                        slide: r,
                        container: k,
                        isClone: C,
                        mount: function() {
                            C || (r.id = v.id + "-slide" + dn(t + 1), T(r, Qn, y ? "tabpanel" : "group"), T(r, ut, m.slide), T(r, et, x || fn(m.slideLabel, [t + 1, n.length]))), f(r, "click", s(l, wn, D)), f(r, "keydown", s(l, jn, D)), c([bn, Fn, An], _), c(zn, L), h && c(yn, P)
                        },
                        destroy: function() {
                            u = !0, a.destroy(), J(r, Tt), I(r, lt), T(r, "style", E), T(r, et, x || "")
                        },
                        update: _,
                        style: function(n, t, e) {
                            F(e && k || r, n, t)
                        },
                        isWithin: function(e, i) {
                            var o = un(e - t);
                            return C || !p.rewind && !n.is(Xt) || (o = tn(o, n.length - o)), o <= i
                        }
                    };
                    return D
                }
                var Ht = "http://www.w3.org/2000/svg",
                    Ut = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
                var Yt = $ + "-interval";
                var Kt = {
                    passive: !1,
                    capture: !0
                };
                var Jt = {
                    Spacebar: " ",
                    Right: qn,
                    Left: Gn,
                    Up: Hn,
                    Down: Un
                };

                function Qt(n) {
                    return n = g(n) ? n : n.key, Jt[n] || n
                }
                var Vt = "keydown";
                var Zt = $ + "-lazy",
                    $t = Zt + "-srcset",
                    ne = "[" + Zt + "], [" + $t + "]";
                var te = [" ", "Enter"];
                var ee = Object.freeze({
                        __proto__: null,
                        Media: function(n, e, i) {
                            var o = n.state,
                                r = i.breakpoints || {},
                                u = i.reducedMotion || {},
                                s = gn(),
                                a = [];

                            function c(n) {
                                n && s.destroy()
                            }

                            function l(n, t) {
                                var e = matchMedia(t);
                                s.bind(e, "change", f), a.push([n, e])
                            }

                            function f() {
                                var t = o.is(7),
                                    e = i.direction,
                                    r = a.reduce((function(n, t) {
                                        return z(n, t[1].matches ? t[0] : {})
                                    }), {});
                                N(i), d(r), i.destroy ? n.destroy("completely" === i.destroy) : t ? (c(!0), n.mount()) : e !== i.direction && n.refresh()
                            }

                            function d(t, e, r) {
                                z(i, t), e && z(Object.getPrototypeOf(i), t), !r && o.is(1) || n.emit(Ln, i)
                            }
                            return {
                                setup: function() {
                                    var n = "min" === i.mediaQuery;
                                    A(r).sort((function(t, e) {
                                        return n ? +t - +e : +e - +t
                                    })).forEach((function(t) {
                                        l(r[t], "(" + (n ? "min" : "max") + "-width:" + t + "px)")
                                    })), l(u, t), f()
                                },
                                destroy: c,
                                reduce: function(n) {
                                    matchMedia(t).matches && (n ? z(i, u) : N(i, A(u)))
                                },
                                set: d
                            }
                        },
                        Direction: Jn,
                        Elements: function(n, t, e) {
                            var i, o, u, s = Bn(n),
                                a = s.on,
                                c = s.bind,
                                l = n.root,
                                f = e.i18n,
                                d = {},
                                v = [],
                                g = [],
                                h = [];

                            function m() {
                                i = w("." + pt), o = O(i, "." + gt), nn(i && o, "A track/list element is missing."), x(v, _(o, "." + ht + ":not(." + mt + ")")), D({
                                        arrows: bt,
                                        pagination: St,
                                        prev: Et,
                                        next: xt,
                                        bar: kt,
                                        toggle: Lt
                                    }, (function(n, t) {
                                        d[t] = w("." + n)
                                    })), M(d, {
                                        root: l,
                                        track: i,
                                        list: o,
                                        slides: v
                                    }),
                                    function() {
                                        var n = l.id || pn(Z),
                                            t = e.role;
                                        l.id = n, i.id = i.id || n + "-track", o.id = o.id || n + "-list", !W(l, Qn) && "SECTION" !== l.tagName && t && T(l, Qn, t);
                                        T(l, ut, f.carousel), T(o, Qn, "presentation")
                                    }(), b()
                            }

                            function y(n) {
                                var t = lt.concat("style");
                                r(v), J(l, g), J(i, h), I([i, o], t), I(l, n ? t : ["style", ut])
                            }

                            function b() {
                                J(l, g), J(i, h), g = E(vt), h = E(pt), C(l, g), C(i, h), T(l, et, e.label), T(l, it, e.labelledby)
                            }

                            function w(n) {
                                var t = Y(l, n);
                                return t && function(n, t) {
                                    if (p(n.closest)) return n.closest(t);
                                    for (var e = n; e && 1 === e.nodeType && !P(e, t);) e = e.parentElement;
                                    return e
                                }(t, "." + vt) === l ? t : void 0
                            }

                            function E(n) {
                                return [n + "--" + e.type, n + "--" + e.direction, e.drag && n + "--draggable", e.isNavigation && n + "--nav", n === vt && Ot]
                            }
                            return M(d, {
                                setup: m,
                                mount: function() {
                                    a(kn, y), a(kn, m), a(Ln, b), c(document, Ft + " keydown", (function(n) {
                                        u = "keydown" === n.type
                                    }), {
                                        capture: !0
                                    }), c(l, "focusin", (function() {
                                        S(l, Nt, !!u)
                                    }))
                                },
                                destroy: y
                            })
                        },
                        Slides: function(n, t, e) {
                            var i = Bn(n),
                                o = i.on,
                                u = i.emit,
                                a = i.bind,
                                c = t.Elements,
                                l = c.slides,
                                f = c.list,
                                d = [];

                            function v() {
                                l.forEach((function(n, t) {
                                    m(n, t, -1)
                                }))
                            }

                            function h() {
                                S((function(n) {
                                    n.destroy()
                                })), r(d)
                            }

                            function m(t, e, i) {
                                var o = qt(n, e, i, t);
                                o.mount(), d.push(o), d.sort((function(n, t) {
                                    return n.index - t.index
                                }))
                            }

                            function x(n) {
                                return n ? _((function(n) {
                                    return !n.isClone
                                })) : d
                            }

                            function S(n, t) {
                                x(t).forEach(n)
                            }

                            function _(n) {
                                return d.filter(p(n) ? n : function(t) {
                                    return g(n) ? P(t.slide, n) : E(b(n), t.index)
                                })
                            }
                            return {
                                mount: function() {
                                    v(), o(kn, h), o(kn, v)
                                },
                                destroy: h,
                                update: function() {
                                    S((function(n) {
                                        n.update()
                                    }))
                                },
                                register: m,
                                get: x,
                                getIn: function(n) {
                                    var i = t.Controller,
                                        o = i.toIndex(n),
                                        r = i.hasFocus() ? 1 : e.perPage;
                                    return _((function(n) {
                                        return an(n.index, o, o + r - 1)
                                    }))
                                },
                                getAt: function(n) {
                                    return _(n)[0]
                                },
                                add: function(n, t) {
                                    w(n, (function(n) {
                                        if (g(n) && (n = H(n)), y(n)) {
                                            var i = l[t];
                                            i ? L(n, i) : k(f, n), C(n, e.classes.slide), o = n, r = s(u, Pn), c = K(o, "img"), (d = c.length) ? c.forEach((function(n) {
                                                a(n, "load error", (function() {
                                                    --d || r()
                                                }))
                                            })) : r()
                                        }
                                        var o, r, c, d
                                    })), u(kn)
                                },
                                remove: function(n) {
                                    q(_(n).map((function(n) {
                                        return n.slide
                                    }))), u(kn)
                                },
                                forEach: S,
                                filter: _,
                                style: function(n, t, e) {
                                    S((function(i) {
                                        i.style(n, t, e)
                                    }))
                                },
                                getLength: function(n) {
                                    return n ? l.length : d.length
                                },
                                isEnough: function() {
                                    return d.length > e.perPage
                                }
                            }
                        },
                        Layout: function(n, t, e) {
                            var i, o, r, u = Bn(n),
                                a = u.on,
                                c = u.bind,
                                l = u.emit,
                                f = t.Slides,
                                v = t.Direction.resolve,
                                p = t.Elements,
                                g = p.root,
                                h = p.track,
                                m = p.list,
                                y = f.getAt,
                                b = f.style;

                            function w() {
                                i = e.direction === Yn, F(g, "maxWidth", V(e.width)), F(h, v("paddingLeft"), x(!1)), F(h, v("paddingRight"), x(!0)), E(!0)
                            }

                            function E(n) {
                                var t = G(g);
                                (n || o.width !== t.width || o.height !== t.height) && (F(h, "height", function() {
                                    var n = "";
                                    i && (nn(n = C(), "height or heightRatio is missing."), n = "calc(" + n + " - " + x(!1) + " - " + x(!0) + ")");
                                    return n
                                }()), b(v("marginRight"), V(e.gap)), b("width", e.autoWidth ? null : V(e.fixedWidth) || (i ? "" : k())), b("height", V(e.fixedHeight) || (i ? e.autoHeight ? null : k() : C()), !0), o = t, l(_n), r !== (r = D()) && (S(g, It, r), l("overflow", r)))
                            }

                            function x(n) {
                                var t = e.padding,
                                    i = v(n ? "right" : "left");
                                return t && V(t[i] || (d(t) ? 0 : t)) || "0px"
                            }

                            function C() {
                                return V(e.height || G(m).width * e.heightRatio)
                            }

                            function k() {
                                var n = V(e.gap);
                                return "calc((100%" + (n && " + " + n) + ")/" + (e.perPage || 1) + (n && " - " + n) + ")"
                            }

                            function L() {
                                return G(m)[v("width")]
                            }

                            function P(n, t) {
                                var e = y(n || 0);
                                return e ? G(e.slide)[v("width")] + (t ? 0 : A()) : 0
                            }

                            function _(n, t) {
                                var e = y(n);
                                if (e) {
                                    var i = G(e.slide)[v("right")],
                                        o = G(m)[v("left")];
                                    return un(i - o) + (t ? 0 : A())
                                }
                                return 0
                            }

                            function O(t) {
                                return _(n.length - 1) - _(0) + P(0, t)
                            }

                            function A() {
                                var n = y(0);
                                return n && parseFloat(F(n.slide, v("marginRight"))) || 0
                            }

                            function D() {
                                return n.is(Gt) || O(!0) > L()
                            }
                            return {
                                mount: function() {
                                    var n, t, e;
                                    w(), c(window, "resize load", (n = s(l, Pn), e = Wn(t || 0, n, null, 1), function() {
                                        e.isPaused() && e.start()
                                    })), a([Ln, kn], w), a(Pn, E)
                                },
                                resize: E,
                                listSize: L,
                                slideSize: P,
                                sliderSize: O,
                                totalSize: _,
                                getPadding: function(n) {
                                    return parseFloat(F(h, v("padding" + (n ? "Right" : "Left")))) || 0
                                },
                                isOverflow: D
                            }
                        },
                        Clones: function(n, t, e) {
                            var i, o = Bn(n),
                                u = o.on,
                                s = t.Elements,
                                a = t.Slides,
                                c = t.Direction.resolve,
                                l = [];

                            function f() {
                                u(kn, d), u([Ln, Pn], p), (i = g()) && (! function(t) {
                                    var i = a.get().slice(),
                                        o = i.length;
                                    if (o) {
                                        for (; i.length < t;) x(i, i);
                                        x(i.slice(-t), i.slice(0, t)).forEach((function(r, u) {
                                            var c = u < t,
                                                f = function(t, i) {
                                                    var o = t.cloneNode(!0);
                                                    return C(o, e.classes.clone), o.id = n.root.id + "-clone" + dn(i + 1), o
                                                }(r.slide, u);
                                            c ? L(f, i[0].slide) : k(s.list, f), x(l, f), a.register(f, u - t + (c ? 0 : o), r.index)
                                        }))
                                    }
                                }(i), t.Layout.resize(!0))
                            }

                            function d() {
                                v(), f()
                            }

                            function v() {
                                q(l), r(l), o.destroy()
                            }

                            function p() {
                                var n = g();
                                i !== n && (i < n || !n) && o.emit(kn)
                            }

                            function g() {
                                var i = e.clones;
                                if (n.is(Xt)) {
                                    if (h(i)) {
                                        var o = e[c("fixedWidth")] && t.Layout.slideSize(0);
                                        i = o && rn(G(s.track)[c("width")] / o) || e[c("autoWidth")] && n.length || 2 * e.perPage
                                    }
                                } else i = 0;
                                return i
                            }
                            return {
                                mount: f,
                                destroy: v
                            }
                        },
                        Move: function(n, t, i) {
                            var o, r = Bn(n),
                                u = r.on,
                                s = r.emit,
                                a = n.state.set,
                                c = t.Layout,
                                l = c.slideSize,
                                f = c.getPadding,
                                d = c.totalSize,
                                v = c.listSize,
                                p = c.sliderSize,
                                g = t.Direction,
                                m = g.resolve,
                                y = g.orient,
                                b = t.Elements,
                                w = b.list,
                                E = b.track;

                            function x() {
                                t.Controller.isBusy() || (t.Scroll.cancel(), S(n.index), t.Slides.update())
                            }

                            function S(n) {
                                C(_(n, !0))
                            }

                            function C(e, i) {
                                if (!n.is(Gt)) {
                                    var o = i ? e : function(e) {
                                        if (n.is(Xt)) {
                                            var i = P(e),
                                                o = i > t.Controller.getEnd();
                                            (i < 0 || o) && (e = k(e, o))
                                        }
                                        return e
                                    }(e);
                                    F(w, "transform", "translate" + m("X") + "(" + o + "px)"), e !== o && s(Fn)
                                }
                            }

                            function k(n, t) {
                                var e = n - A(t),
                                    i = p();
                                return n -= y(i * (rn(un(e) / i) || 1)) * (t ? 1 : -1)
                            }

                            function L() {
                                C(O(), !0), o.cancel()
                            }

                            function P(n) {
                                for (var e = t.Slides.get(), i = 0, o = 1 / 0, r = 0; r < e.length; r++) {
                                    var u = e[r].index,
                                        s = un(_(u, !0) - n);
                                    if (!(s <= o)) break;
                                    o = s, i = u
                                }
                                return i
                            }

                            function _(t, e) {
                                var o = y(d(t - 1) - function(n) {
                                    var t = i.focus;
                                    return "center" === t ? (v() - l(n, !0)) / 2 : +t * l(n) || 0
                                }(t));
                                return e ? function(t) {
                                    i.trimSpace && n.is(Wt) && (t = cn(t, 0, y(p(!0) - v())));
                                    return t
                                }(o) : o
                            }

                            function O() {
                                var n = m("left");
                                return G(w)[n] - G(E)[n] + y(f(!1))
                            }

                            function A(n) {
                                return _(n ? t.Controller.getEnd() : 0, !!i.trimSpace)
                            }
                            return {
                                mount: function() {
                                    o = t.Transition, u([hn, _n, Ln, kn], x)
                                },
                                move: function(n, t, i, r) {
                                    var u, c;
                                    n !== t && (u = n > i, c = y(k(O(), u)), u ? c >= 0 : c <= w[m("scrollWidth")] - G(E)[m("width")]) && (L(), C(k(O(), n > i), !0)), a(e), s(yn, t, i, n), o.start(t, (function() {
                                        a(3), s(bn, t, i, n), r && r()
                                    }))
                                },
                                jump: S,
                                translate: C,
                                shift: k,
                                cancel: L,
                                toIndex: P,
                                toPosition: _,
                                getPosition: O,
                                getLimit: A,
                                exceededLimit: function(n, t) {
                                    t = h(t) ? O() : t;
                                    var e = !0 !== n && y(t) < y(A(!1)),
                                        i = !1 !== n && y(t) > y(A(!0));
                                    return e || i
                                },
                                reposition: x
                            }
                        },
                        Controller: function(n, t, o) {
                            var r, u, a, c, l = Bn(n),
                                f = l.on,
                                d = l.emit,
                                v = t.Move,
                                p = v.getPosition,
                                m = v.getLimit,
                                y = v.toPosition,
                                b = t.Slides,
                                w = b.isEnough,
                                E = b.getLength,
                                x = o.omitEnd,
                                S = n.is(Xt),
                                C = n.is(Wt),
                                k = s(D, !1),
                                L = s(D, !0),
                                P = o.start || 0,
                                _ = P;

                            function O() {
                                u = E(!0), a = o.perMove, c = o.perPage, r = N();
                                var n = cn(P, 0, x ? r : u - 1);
                                n !== P && (P = n, v.reposition())
                            }

                            function A() {
                                r !== N() && d(Rn)
                            }

                            function D(n, t) {
                                var e = a || (F() ? 1 : c),
                                    i = M(P + e * (n ? -1 : 1), P, !(a || F()));
                                return -1 === i && C && !sn(p(), m(!n), 1) ? n ? 0 : r : t ? i : z(i)
                            }

                            function M(t, e, i) {
                                if (w() || F()) {
                                    var s = function(t) {
                                        if (C && "move" === o.trimSpace && t !== P)
                                            for (var e = p(); e === y(t, !0) && an(t, 0, n.length - 1, !o.rewind);) t < P ? --t : ++t;
                                        return t
                                    }(t);
                                    s !== t && (e = t, t = s, i = !1), t < 0 || t > r ? t = a || !an(0, t, e, !0) && !an(r, e, t, !0) ? S ? i ? t < 0 ? -(u % c || c) : u : t : o.rewind ? t < 0 ? r : 0 : -1 : I(T(t)) : i && t !== e && (t = I(T(e) + (t < e ? -1 : 1)))
                                } else t = -1;
                                return t
                            }

                            function z(n) {
                                return S ? (n + u) % u || 0 : n
                            }

                            function N() {
                                for (var n = u - (F() || S && a ? 1 : c); x && n-- > 0;)
                                    if (y(u - 1, !0) !== y(n, !0)) {
                                        n++;
                                        break
                                    }
                                return cn(n, 0, u - 1)
                            }

                            function I(n) {
                                return cn(F() ? n : c * n, 0, r)
                            }

                            function T(n) {
                                return F() ? tn(n, r) : on((n >= r ? u - 1 : n) / c)
                            }

                            function j(n) {
                                n !== P && (_ = P, P = n)
                            }

                            function F() {
                                return !h(o.focus) || o.isNavigation
                            }

                            function R() {
                                return n.state.is([e, i]) && !!o.waitForTransition
                            }
                            return {
                                mount: function() {
                                    O(), f([Ln, kn, Rn], O), f(_n, A)
                                },
                                go: function(n, t, e) {
                                    if (!R()) {
                                        var i = function(n) {
                                                var t = P;
                                                if (g(n)) {
                                                    var e = n.match(/([+\-<>])(\d+)?/) || [],
                                                        i = e[1],
                                                        o = e[2];
                                                    "+" === i || "-" === i ? t = M(P + +("" + i + (+o || 1)), P) : ">" === i ? t = o ? I(+o) : k(!0) : "<" === i && (t = L(!0))
                                                } else t = S ? n : cn(n, 0, r);
                                                return t
                                            }(n),
                                            o = z(i);
                                        o > -1 && (t || o !== P) && (j(o), v.move(i, o, _, e))
                                    }
                                },
                                scroll: function(n, e, i, o) {
                                    t.Scroll.scroll(n, e, i, (function() {
                                        var n = z(v.toIndex(p()));
                                        j(x ? tn(n, r) : n), o && o()
                                    }))
                                },
                                getNext: k,
                                getPrev: L,
                                getAdjacent: D,
                                getEnd: N,
                                setIndex: j,
                                getIndex: function(n) {
                                    return n ? _ : P
                                },
                                toIndex: I,
                                toPage: T,
                                toDest: function(n) {
                                    var t = v.toIndex(n);
                                    return C ? cn(t, 0, r) : t
                                },
                                hasFocus: F,
                                isBusy: R
                            }
                        },
                        Arrows: function(n, t, e) {
                            var i, o, r = Bn(n),
                                u = r.on,
                                a = r.bind,
                                c = r.emit,
                                l = e.classes,
                                f = e.i18n,
                                d = t.Elements,
                                v = t.Controller,
                                p = d.arrows,
                                g = d.track,
                                h = p,
                                m = d.prev,
                                y = d.next,
                                b = {};

                            function w() {
                                ! function() {
                                    var n = e.arrows;
                                    !n || m && y || (h = p || j("div", l.arrows), m = P(!0), y = P(!1), i = !0, k(h, [m, y]), !p && L(h, g));
                                    m && y && (M(b, {
                                        prev: m,
                                        next: y
                                    }), R(h, n ? "" : "none"), C(h, o = bt + "--" + e.direction), n && (u([hn, bn, kn, An, Rn], _), a(y, "click", s(S, ">")), a(m, "click", s(S, "<")), _(), T([m, y], $n, g.id), c(Mn, m, y)))
                                }(), u(Ln, E)
                            }

                            function E() {
                                x(), w()
                            }

                            function x() {
                                r.destroy(), J(h, o), i ? (q(p ? [m, y] : h), m = y = null) : I([m, y], lt)
                            }

                            function S(n) {
                                v.go(n, !0)
                            }

                            function P(n) {
                                return H('<button class="' + l.arrow + " " + (n ? l.prev : l.next) + '" type="button"><svg xmlns="' + Ht + '" viewBox="0 0 ' + "40 " + '40" width="' + '40" height="' + '40" focusable="false"><path d="' + (e.arrowPath || Ut) + '" />')
                            }

                            function _() {
                                if (m && y) {
                                    var t = n.index,
                                        e = v.getPrev(),
                                        i = v.getNext(),
                                        o = e > -1 && t < e ? f.last : f.prev,
                                        r = i > -1 && t > i ? f.first : f.next;
                                    m.disabled = e < 0, y.disabled = i < 0, T(m, et, o), T(y, et, r), c("arrows:updated", m, y, e, i)
                                }
                            }
                            return {
                                arrows: b,
                                mount: w,
                                destroy: x,
                                update: _
                            }
                        },
                        Autoplay: function(n, t, e) {
                            var i, o, r = Bn(n),
                                u = r.on,
                                s = r.bind,
                                a = r.emit,
                                c = Wn(e.interval, n.go.bind(n, ">"), (function(n) {
                                    var t = f.bar;
                                    t && F(t, "width", 100 * n + "%"), a("autoplay:playing", n)
                                })),
                                l = c.isPaused,
                                f = t.Elements,
                                d = t.Elements,
                                v = d.root,
                                p = d.toggle,
                                g = e.autoplay,
                                h = "pause" === g;

                            function m() {
                                l() && t.Slides.isEnough() && (c.start(!e.resetProgress), o = i = h = !1, w(), a(Nn))
                            }

                            function y(n) {
                                void 0 === n && (n = !0), h = !!n, w(), l() || (c.pause(), a(In))
                            }

                            function b() {
                                h || (i || o ? y(!1) : m())
                            }

                            function w() {
                                p && (S(p, Ot, !h), T(p, et, e.i18n[h ? "play" : "pause"]))
                            }

                            function E(n) {
                                var i = t.Slides.getAt(n);
                                c.set(i && +W(i.slide, Yt) || e.interval)
                            }
                            return {
                                mount: function() {
                                    g && (! function() {
                                        e.pauseOnHover && s(v, "mouseenter mouseleave", (function(n) {
                                            i = "mouseenter" === n.type, b()
                                        }));
                                        e.pauseOnFocus && s(v, "focusin focusout", (function(n) {
                                            o = "focusin" === n.type, b()
                                        }));
                                        p && s(p, "click", (function() {
                                            h ? m() : y(!0)
                                        }));
                                        u([yn, On, kn], c.rewind), u(yn, E)
                                    }(), p && T(p, $n, f.track.id), h || m(), w())
                                },
                                destroy: c.cancel,
                                play: m,
                                pause: y,
                                isPaused: l
                            }
                        },
                        Cover: function(n, t, e) {
                            var i = Bn(n).on;

                            function o(n) {
                                t.Slides.forEach((function(t) {
                                    var e = O(t.container || t.slide, "img");
                                    e && e.src && r(n, e, t)
                                }))
                            }

                            function r(n, t, e) {
                                e.style("background", n ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), R(t, n ? "none" : "")
                            }
                            return {
                                mount: function() {
                                    e.cover && (i(Tn, s(r, !0)), i([hn, Ln, kn], s(o, !0)))
                                },
                                destroy: s(o, !1)
                            }
                        },
                        Scroll: function(n, t, e) {
                            var o, r, u = Bn(n),
                                a = u.on,
                                c = u.emit,
                                l = n.state.set,
                                f = t.Move,
                                d = f.getPosition,
                                v = f.getLimit,
                                p = f.exceededLimit,
                                g = f.translate,
                                h = n.is(Wt),
                                m = 1;

                            function y(n, e, u, a, v) {
                                var g = d();
                                if (E(), u && (!h || !p())) {
                                    var y = t.Layout.sliderSize(),
                                        x = ln(n) * y * on(un(n) / y) || 0;
                                    n = f.toPosition(t.Controller.toDest(n % y)) + x
                                }
                                var S = sn(g, n, 1);
                                m = 1, e = S ? 0 : e || en(un(n - g) / 1.5, 800), r = a, o = Wn(e, b, s(w, g, n, v), 1), l(i), c(On), o.start()
                            }

                            function b() {
                                l(3), r && r(), c(An)
                            }

                            function w(n, t, i, o) {
                                var u, s, a = d(),
                                    c = (n + (t - n) * (u = o, (s = e.easingFunc) ? s(u) : 1 - Math.pow(1 - u, 4)) - a) * m;
                                g(a + c), h && !i && p() && (m *= .6, un(c) < 10 && y(v(p(!0)), 600, !1, r, !0))
                            }

                            function E() {
                                o && o.cancel()
                            }

                            function x() {
                                o && !o.isPaused() && (E(), b())
                            }
                            return {
                                mount: function() {
                                    a(yn, E), a([Ln, kn], x)
                                },
                                destroy: E,
                                scroll: y,
                                cancel: x
                            }
                        },
                        Drag: function(n, t, o) {
                            var r, u, s, a, l, f, v, p, g = Bn(n),
                                h = g.on,
                                m = g.emit,
                                y = g.bind,
                                b = g.unbind,
                                w = n.state,
                                E = t.Move,
                                x = t.Scroll,
                                S = t.Controller,
                                C = t.Elements.track,
                                k = t.Media.reduce,
                                L = t.Direction,
                                _ = L.resolve,
                                O = L.orient,
                                A = E.getPosition,
                                D = E.exceededLimit,
                                M = !1;

                            function z() {
                                var n = o.drag;
                                q(!n), a = "free" === n
                            }

                            function N(n) {
                                if (f = !1, !v) {
                                    var t = G(n);
                                    r = n.target, u = o.noDrag, P(r, "." + Ct + ", ." + wt) || u && P(r, u) || !t && n.button || (S.isBusy() ? U(n, !0) : (p = t ? C : window, l = w.is([e, i]), s = null, y(p, Rt, I, Kt), y(p, Bt, T, Kt), E.cancel(), x.cancel(), F(n)))
                                }
                                var r, u
                            }

                            function I(t) {
                                if (w.is(6) || (w.set(6), m("drag")), t.cancelable)
                                    if (l) {
                                        E.translate(r + R(t) / (M && n.is(Wt) ? 5 : 1));
                                        var e = B(t) > 200,
                                            i = M !== (M = D());
                                        (e || i) && F(t), f = !0, m("dragging"), U(t)
                                    } else(function(n) {
                                        return un(R(n)) > un(R(n, !0))
                                    })(t) && (l = function(n) {
                                        var t = o.dragMinThreshold,
                                            e = d(t),
                                            i = e && t.mouse || 0,
                                            r = (e ? t.touch : +t) || 10;
                                        return un(R(n)) > (G(n) ? r : i)
                                    }(t), U(t))
                            }

                            function T(e) {
                                w.is(6) && (w.set(3), m("dragged")), l && (! function(e) {
                                    var i = function(t) {
                                            if (n.is(Xt) || !M) {
                                                var e = B(t);
                                                if (e && e < 200) return R(t) / e
                                            }
                                            return 0
                                        }(e),
                                        r = function(n) {
                                            return A() + ln(n) * tn(un(n) * (o.flickPower || 600), a ? 1 / 0 : t.Layout.listSize() * (o.flickMaxPages || 1))
                                        }(i),
                                        u = o.rewind && o.rewindByDrag;
                                    k(!1), a ? S.scroll(r, 0, o.snap) : n.is(Gt) ? S.go(O(ln(i)) < 0 ? u ? "<" : "-" : u ? ">" : "+") : n.is(Wt) && M && u ? S.go(D(!0) ? ">" : "<") : S.go(S.toDest(r), !0);
                                    k(!0)
                                }(e), U(e)), b(p, Rt, I), b(p, Bt, T), l = !1
                            }

                            function j(n) {
                                !v && f && U(n, !0)
                            }

                            function F(n) {
                                s = u, u = n, r = A()
                            }

                            function R(n, t) {
                                return X(n, t) - X(W(n), t)
                            }

                            function B(n) {
                                return Q(n) - Q(W(n))
                            }

                            function W(n) {
                                return u === n && s || u
                            }

                            function X(n, t) {
                                return (G(n) ? n.changedTouches[0] : n)["page" + _(t ? "Y" : "X")]
                            }

                            function G(n) {
                                return "undefined" != typeof TouchEvent && n instanceof TouchEvent
                            }

                            function q(n) {
                                v = n
                            }
                            return {
                                mount: function() {
                                    y(C, Rt, c, Kt), y(C, Bt, c, Kt), y(C, Ft, N, Kt), y(C, "click", j, {
                                        capture: !0
                                    }), y(C, "dragstart", U), h([hn, Ln], z)
                                },
                                disable: q,
                                isDragging: function() {
                                    return l
                                }
                            }
                        },
                        Keyboard: function(n, t, e) {
                            var i, o, r = Bn(n),
                                u = r.on,
                                s = r.bind,
                                c = r.unbind,
                                l = n.root,
                                f = t.Direction.resolve;

                            function d() {
                                var n = e.keyboard;
                                n && (i = "global" === n ? window : l, s(i, Vt, g))
                            }

                            function v() {
                                c(i, Vt)
                            }

                            function p() {
                                var n = o;
                                o = !0, a((function() {
                                    o = n
                                }))
                            }

                            function g(t) {
                                if (!o) {
                                    var e = Qt(t);
                                    e === f(Gn) ? n.go("<") : e === f(qn) && n.go(">")
                                }
                            }
                            return {
                                mount: function() {
                                    d(), u(Ln, v), u(Ln, d), u(yn, p)
                                },
                                destroy: v,
                                disable: function(n) {
                                    o = n
                                }
                            }
                        },
                        LazyLoad: function(n, t, e) {
                            var i = Bn(n),
                                o = i.on,
                                u = i.off,
                                a = i.bind,
                                c = i.emit,
                                l = "sequential" === e.lazyLoad,
                                f = [bn, An],
                                d = [];

                            function v() {
                                r(d), t.Slides.forEach((function(n) {
                                    K(n.slide, ne).forEach((function(t) {
                                        var i = W(t, Zt),
                                            o = W(t, $t);
                                        if (i !== t.src || o !== t.srcset) {
                                            var r = e.classes.spinner,
                                                u = t.parentElement,
                                                s = O(u, "." + r) || j("span", r, u);
                                            d.push([t, n, s]), t.src || R(t, "none")
                                        }
                                    }))
                                })), l ? m() : (u(f), o(f, p), p())
                            }

                            function p() {
                                (d = d.filter((function(t) {
                                    var i = e.perPage * ((e.preloadPages || 1) + 1) - 1;
                                    return !t[1].isWithin(n.index, i) || g(t)
                                }))).length || u(f)
                            }

                            function g(n) {
                                var t = n[0];
                                C(n[1].slide, zt), a(t, "load error", s(h, n)), T(t, "src", W(t, Zt)), T(t, "srcset", W(t, $t)), I(t, Zt), I(t, $t)
                            }

                            function h(n, t) {
                                var e = n[0],
                                    i = n[1];
                                J(i.slide, zt), "error" !== t.type && (q(n[2]), R(e, ""), c(Tn, e, i), c(Pn)), l && m()
                            }

                            function m() {
                                d.length && g(d.shift())
                            }
                            return {
                                mount: function() {
                                    e.lazyLoad && (v(), o(kn, v))
                                },
                                destroy: s(r, d),
                                check: p
                            }
                        },
                        Pagination: function(n, t, e) {
                            var i, o, a = Bn(n),
                                c = a.on,
                                l = a.emit,
                                f = a.bind,
                                d = t.Slides,
                                v = t.Elements,
                                p = t.Controller,
                                g = p.hasFocus,
                                h = p.getIndex,
                                m = p.go,
                                y = t.Direction.resolve,
                                b = v.pagination,
                                w = [];

                            function E() {
                                i && (q(b ? u(i.children) : i), J(i, o), r(w), i = null), a.destroy()
                            }

                            function x(n) {
                                m(">" + n, !0)
                            }

                            function S(n, t) {
                                var e = w.length,
                                    i = Qt(t),
                                    o = k(),
                                    r = -1;
                                i === y(qn, !1, o) ? r = ++n % e : i === y(Gn, !1, o) ? r = (--n + e) % e : "Home" === i ? r = 0 : "End" === i && (r = e - 1);
                                var u = w[r];
                                u && (B(u.button), m(">" + r), U(t, !0))
                            }

                            function k() {
                                return e.paginationDirection || e.direction
                            }

                            function L(n) {
                                return w[p.toPage(n)]
                            }

                            function P() {
                                var n = L(h(!0)),
                                    t = L(h());
                                if (n) {
                                    var e = n.button;
                                    J(e, Ot), I(e, tt), T(e, Vn, -1)
                                }
                                if (t) {
                                    var o = t.button;
                                    C(o, Ot), T(o, tt, !0), T(o, Vn, "")
                                }
                                l("pagination:updated", {
                                    list: i,
                                    items: w
                                }, n, t)
                            }
                            return {
                                items: w,
                                mount: function t() {
                                    E(), c([Ln, kn, Rn], t);
                                    var r = e.pagination;
                                    b && R(b, r ? "" : "none"), r && (c([yn, On, An], P), function() {
                                        var t = n.length,
                                            r = e.classes,
                                            u = e.i18n,
                                            a = e.perPage,
                                            c = g() ? p.getEnd() + 1 : rn(t / a);
                                        C(i = b || j("ul", r.pagination, v.track.parentElement), o = St + "--" + k()), T(i, Qn, "tablist"), T(i, et, u.select), T(i, rt, k() === Yn ? "vertical" : "");
                                        for (var l = 0; l < c; l++) {
                                            var h = j("li", null, i),
                                                m = j("button", {
                                                    class: r.page,
                                                    type: "button"
                                                }, h),
                                                y = d.getIn(l).map((function(n) {
                                                    return n.slide.id
                                                })),
                                                E = !g() && a > 1 ? u.pageX : u.slideX;
                                            f(m, "click", s(x, l)), e.paginationKeyboard && f(m, "keydown", s(S, l)), T(h, Qn, "presentation"), T(m, Qn, "tab"), T(m, $n, y.join(" ")), T(m, et, fn(E, l + 1)), T(m, Vn, -1), w.push({
                                                li: h,
                                                button: m,
                                                page: l
                                            })
                                        }
                                    }(), P(), l("pagination:mounted", {
                                        list: i,
                                        items: w
                                    }, L(n.index)))
                                },
                                destroy: E,
                                getAt: L,
                                update: P
                            }
                        },
                        Sync: function(n, t, e) {
                            var i = e.isNavigation,
                                o = e.slideFocus,
                                u = [];

                            function a() {
                                var t, e;
                                n.splides.forEach((function(t) {
                                    t.isParent || (l(n, t.splide), l(t.splide, n))
                                })), i && (t = Bn(n), (e = t.on)(wn, d), e(jn, v), e([hn, Ln], f), u.push(t), t.emit(zn, n.splides))
                            }

                            function c() {
                                u.forEach((function(n) {
                                    n.destroy()
                                })), r(u)
                            }

                            function l(n, t) {
                                var e = Bn(n);
                                e.on(yn, (function(n, e, i) {
                                    t.go(t.is(Xt) ? i : n)
                                })), u.push(e)
                            }

                            function f() {
                                T(t.Elements.list, rt, e.direction === Yn ? "vertical" : "")
                            }

                            function d(t) {
                                n.go(t.index)
                            }

                            function v(n, t) {
                                E(te, Qt(t)) && (d(n), U(t))
                            }
                            return {
                                setup: s(t.Media.set, {
                                    slideFocus: h(o) ? i : o
                                }, !0),
                                mount: a,
                                destroy: c,
                                remount: function() {
                                    c(), a()
                                }
                            }
                        },
                        Wheel: function(n, t, i) {
                            var o = Bn(n).bind,
                                r = 0;

                            function u(o) {
                                if (o.cancelable) {
                                    var u = o.deltaY,
                                        s = u < 0,
                                        a = Q(o),
                                        c = i.wheelMinThreshold || 0,
                                        l = i.wheelSleep || 0;
                                    un(u) > c && a - r > l && (n.go(s ? "<" : ">"), r = a),
                                        function(o) {
                                            return !i.releaseWheel || n.state.is(e) || -1 !== t.Controller.getAdjacent(o)
                                        }(s) && U(o)
                                }
                            }
                            return {
                                mount: function() {
                                    i.wheel && o(t.Elements.track, "wheel", u, Kt)
                                }
                            }
                        },
                        Live: function(n, t, e) {
                            var i = Bn(n).on,
                                o = t.Elements.track,
                                r = e.live && !e.isNavigation,
                                u = j("span", Pt),
                                a = Wn(90, s(c, !1));

                            function c(n) {
                                T(o, at, n), n ? (k(o, u), a.start()) : (q(u), a.cancel())
                            }

                            function l(n) {
                                r && T(o, st, n ? "off" : "polite")
                            }
                            return {
                                mount: function() {
                                    r && (l(!t.Autoplay.isPaused()), T(o, ct, !0), u.textContent = "…", i(Nn, s(l, !0)), i(In, s(l, !1)), i([bn, An], s(c, !0)))
                                },
                                disable: l,
                                destroy: function() {
                                    I(o, [st, ct, at]), q(u)
                                }
                            }
                        }
                    }),
                    ie = {
                        type: "slide",
                        role: "region",
                        speed: 400,
                        perPage: 1,
                        cloneStatus: !0,
                        arrows: !0,
                        pagination: !0,
                        paginationKeyboard: !0,
                        interval: 5e3,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        resetProgress: !0,
                        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                        drag: !0,
                        direction: "ltr",
                        trimSpace: !0,
                        focusableNodes: "a, button, textarea, input, select, iframe",
                        live: !0,
                        classes: jt,
                        i18n: {
                            prev: "Previous slide",
                            next: "Next slide",
                            first: "Go to first slide",
                            last: "Go to last slide",
                            slideX: "Go to slide %s",
                            pageX: "Go to page %s",
                            play: "Start autoplay",
                            pause: "Pause autoplay",
                            carousel: "carousel",
                            slide: "slide",
                            select: "Select a slide to show",
                            slideLabel: "%s of %s"
                        },
                        reducedMotion: {
                            speed: 0,
                            rewindSpeed: 0,
                            autoplay: "pause"
                        }
                    };

                function oe(n, t, e) {
                    var i = t.Slides;

                    function o() {
                        i.forEach((function(n) {
                            n.style("transform", "translateX(-" + 100 * n.index + "%)")
                        }))
                    }
                    return {
                        mount: function() {
                            Bn(n).on([hn, kn], o)
                        },
                        start: function(n, t) {
                            i.style("transition", "opacity " + e.speed + "ms " + e.easing), a(t)
                        },
                        cancel: c
                    }
                }

                function re(n, t, e) {
                    var i, o = t.Move,
                        r = t.Controller,
                        u = t.Scroll,
                        a = t.Elements.list,
                        c = s(F, a, "transition");

                    function l() {
                        c(""), u.cancel()
                    }
                    return {
                        mount: function() {
                            Bn(n).bind(a, "transitionend", (function(n) {
                                n.target === a && i && (l(), i())
                            }))
                        },
                        start: function(t, s) {
                            var a = o.toPosition(t, !0),
                                l = o.getPosition(),
                                f = function(t) {
                                    var i = e.rewindSpeed;
                                    if (n.is(Wt) && i) {
                                        var o = r.getIndex(!0),
                                            u = r.getEnd();
                                        if (0 === o && t >= u || o >= u && 0 === t) return i
                                    }
                                    return e.speed
                                }(t);
                            un(a - l) >= 1 && f >= 1 ? e.useScroll ? u.scroll(a, f, !1, s) : (c("transform " + f + "ms " + e.easing), o.translate(a, !0), i = s) : (o.jump(t), s())
                        },
                        cancel: l
                    }
                }
                var ue = function() {
                    function t(n, e) {
                        var i;
                        this.event = Bn(), this.Components = {}, this.state = (i = 1, {
                            set: function(n) {
                                i = n
                            },
                            is: function(n) {
                                return E(b(n), i)
                            }
                        }), this.splides = [], this._o = {}, this._E = {};
                        var o = g(n) ? Y(document, n) : n;
                        nn(o, o + " is invalid."), this.root = o, e = z({
                            label: W(o, et) || "",
                            labelledby: W(o, it) || ""
                        }, ie, t.defaults, e || {});
                        try {
                            z(e, JSON.parse(W(o, $)))
                        } catch (n) {
                            nn(!1, "Invalid JSON")
                        }
                        this._o = Object.create(z({}, e))
                    }
                    var e, i, o, s = t.prototype;
                    return s.mount = function(n, t) {
                        var e = this,
                            i = this.state,
                            o = this.Components;
                        return nn(i.is([1, 7]), "Already mounted!"), i.set(1), this._C = o, this._T = t || this._T || (this.is(Gt) ? oe : re), this._E = n || this._E, D(M({}, ee, this._E, {
                            Transition: this._T
                        }), (function(n, t) {
                            var i = n(e, o, e._o);
                            o[t] = i, i.setup && i.setup()
                        })), D(o, (function(n) {
                            n.mount && n.mount()
                        })), this.emit(hn), C(this.root, _t), i.set(3), this.emit(mn), this
                    }, s.sync = function(n) {
                        return this.splides.push({
                            splide: n
                        }), n.splides.push({
                            splide: this,
                            isParent: !0
                        }), this.state.is(3) && (this._C.Sync.remount(), n.Components.Sync.remount()), this
                    }, s.go = function(n) {
                        return this._C.Controller.go(n), this
                    }, s.on = function(n, t) {
                        return this.event.on(n, t), this
                    }, s.off = function(n) {
                        return this.event.off(n), this
                    }, s.emit = function(n) {
                        var t;
                        return (t = this.event).emit.apply(t, [n].concat(u(arguments, 1))), this
                    }, s.add = function(n, t) {
                        return this._C.Slides.add(n, t), this
                    }, s.remove = function(n) {
                        return this._C.Slides.remove(n), this
                    }, s.is = function(n) {
                        return this._o.type === n
                    }, s.refresh = function() {
                        return this.emit(kn), this
                    }, s.destroy = function(n) {
                        void 0 === n && (n = !0);
                        var t = this.event,
                            e = this.state;
                        return e.is(1) ? Bn(this).on(mn, this.destroy.bind(this, n)) : (D(this._C, (function(t) {
                            t.destroy && t.destroy(n)
                        }), !0), t.emit(Dn), t.destroy(), n && r(this.splides), e.set(7)), this
                    }, e = t, (i = [{
                        key: "options",
                        get: function() {
                            return this._o
                        },
                        set: function(n) {
                            this._C.Media.set(n, !0, !0)
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this._C.Slides.getLength(!0)
                        }
                    }, {
                        key: "index",
                        get: function() {
                            return this._C.Controller.getIndex()
                        }
                    }]) && n(e.prototype, i), o && n(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
                ue.defaults = {}, ue.STATES = o;
                document.addEventListener("DOMContentLoaded", (function() {
                    document.getElementsByClassName("splide").length ? (console.log("Splide is present"), new ue(".splide", {
                        arrows: !1,
                        classes: {
                            pagination: "splide__pagination index-splide-pagination",
                            page: "splide__pagination__page index-splide-page"
                        }
                    }).mount()) : console.log("Splide is NOT present")
                })), jQuery(document).ready((function(n) {
                    document.querySelectorAll(".faq-toggle").forEach((function(t) {
                        n(t).click((function() {
                            n(this).toggleClass("rotate-180"), n(this).toggleClass("text-boo-cyan"), n(this).toggleClass("text-black");
                            var t = n(this).closest(".faq-item").find(".faq-answer");
                            t.is(":visible") ? t.slideUp() : t.slideDown()
                        }))
                    }))
                })), document.addEventListener("DOMContentLoaded", (function() {
                    var n = document.getElementById("mobile-menu-open"),
                        t = document.getElementById("mobile-menu-close"),
                        e = document.getElementById("mobile-menu"),
                        i = document.body;
                    n.addEventListener("click", (function() {
                        e.classList.toggle("h-0"), e.classList.toggle("h-full"), i.style.overflow = "hidden"
                    })), t.addEventListener("click", (function() {
                        e.classList.toggle("h-0"), e.classList.toggle("h-full"), i.style.overflow = ""
                    }))
                }))
            },
            662: () => {},
            797: () => {}
        },
        e = {};

    function i(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var r = e[n] = {
            exports: {}
        };
        return t[n](r, r.exports, i), r.exports
    }
    i.m = t, n = [], i.O = (t, e, o, r) => {
        if (!e) {
            var u = 1 / 0;
            for (l = 0; l < n.length; l++) {
                for (var [e, o, r] = n[l], s = !0, a = 0; a < e.length; a++)(!1 & r || u >= r) && Object.keys(i.O).every((n => i.O[n](e[a]))) ? e.splice(a--, 1) : (s = !1, r < u && (u = r));
                if (s) {
                    n.splice(l--, 1);
                    var c = o();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        r = r || 0;
        for (var l = n.length; l > 0 && n[l - 1][2] > r; l--) n[l] = n[l - 1];
        n[l] = [e, o, r]
    }, i.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t), (() => {
        var n = {
            773: 0,
            170: 0,
            842: 0
        };
        i.O.j = t => 0 === n[t];
        var t = (t, e) => {
                var o, r, [u, s, a] = e,
                    c = 0;
                if (u.some((t => 0 !== n[t]))) {
                    for (o in s) i.o(s, o) && (i.m[o] = s[o]);
                    if (a) var l = a(i)
                }
                for (t && t(e); c < u.length; c++) r = u[c], i.o(n, r) && n[r] && n[r][0](), n[r] = 0;
                return i.O(l)
            },
            e = self.webpackChunktailpress = self.webpackChunktailpress || [];
        e.forEach(t.bind(null, 0)), e.push = t.bind(null, e.push.bind(e))
    })(), i.O(void 0, [170, 842], (() => i(194))), i.O(void 0, [170, 842], (() => i(662)));
    var o = i.O(void 0, [170, 842], (() => i(797)));
    o = i.O(o)
})();