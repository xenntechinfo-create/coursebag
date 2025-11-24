(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [5936], {

        /***/
        563790: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var HB = __c.HB;
                var pc = __c.pc;
                var vg = __c.vg;
                var pm = __c.pm;
                var L = __c.L;
                var GB = __c.GB;
                var au = __c.au;
                var A = __c.A;
                var K = __c.K;
                var Pl = __c.Pl;
                var z = __c.z;
                var RDc = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of e) {
                                d = l.la;
                                var g = m.column,
                                    h = a.layout.cells.get(d, g);
                                if (!h || (l.boundary === "start" ? h.span.ac === d : h.span.kd === d))
                                    if (d = c.get(`${g.id}:${d.id}`), d = l.boundary === "start" ? d ? .ma : d ? .ya) {
                                        h = f[f.length - 1];
                                        g = (g = b.next(g)) ? {
                                            column: g,
                                            boundary: "start"
                                        } : {
                                            column: z(b.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.NAa, k = k.column === m.column && k.boundary === m.boundary;
                                        k && (k = h.mab, k = k.la === l.la && k.boundary === l.boundary);
                                        k && h.color === d.color && h.weight === d.weight &&
                                            h.rd === d.rd && h.rd === 0 ? h.NAa = g : f.push({
                                                mab: l,
                                                BNb: m,
                                                NAa: g,
                                                color: d.color,
                                                weight: d.weight,
                                                rd: d.rd
                                            })
                                    }
                            }
                        return f
                    },
                    SDc = function(a, b, c, d, e, f) {
                        const g = [];
                        for (const m of e)
                            for (const n of d) {
                                var h = n.la,
                                    k = m.column;
                                e = a.layout.cells.get(h, k);
                                if (!e || (m.boundary === "start" ? e.span.jc === k : e.span.sd === k))
                                    if (e = c.get(`${k.id}:${h.id}`), (e = m.boundary === "start" ? e ? .ta : e ? .Na) && (m.boundary !== "start" || f(h, k) !== 1)) {
                                        k = g[g.length - 1];
                                        h = (h = b.next(h)) ? {
                                            la: h,
                                            boundary: "start"
                                        } : {
                                            la: z(b.last()),
                                            boundary: "end"
                                        };
                                        var l;
                                        if (l = k) l = k.VUa, l = l.column ===
                                            m.column && l.boundary === m.boundary;
                                        l && (l = k.TAa, l = l.la === n.la && l.boundary === n.boundary);
                                        l && k.color === e.color && k.weight === e.weight && k.rd === e.rd && k.rd === 0 ? k.TAa = h : g.push({
                                            VUa: m,
                                            RNb: n,
                                            TAa: h,
                                            color: e.color,
                                            weight: e.weight,
                                            rd: e.rd
                                        })
                                    }
                            }
                        return g
                    },
                    TDc = function(a, b, c, d, e, f) {
                        const g = a.Xcb.Cqb(d, b.last(), c.last());
                        a = (r, t) => {
                            const u = g.get(r) || 0,
                                w = g.get(t) || 0;
                            return u <= w ? r : t
                        };
                        const h = new Map;
                        if (e.length === 0 || f.length === 0) return h;
                        var k = [],
                            l = c.previous(f[0].column);
                        l && k.push({
                            column: l,
                            boundary: "start"
                        });
                        k.push(...f);
                        (f = c.next(f[f.length - 1].column)) && k.push({
                            column: f,
                            boundary: "start"
                        });
                        f = [];
                        (l = b.previous(e[0].la)) && f.push({
                            la: l,
                            boundary: "start"
                        });
                        f.push(...e);
                        (e = b.next(e[e.length - 1].la)) && f.push({
                            la: e,
                            boundary: "start"
                        });
                        for (const r of k) {
                            k = (e = r.boundary === "start" ? r.column : void 0) ? c.previous(e) : c.last();
                            for (const t of f) {
                                var m = t.boundary === "start" ? t.la : void 0;
                                l = m ? b.previous(m) : b.last();
                                var n = e && m && d.get(`${e.id}:${m.id}`),
                                    p = e && l && d.get(`${e.id}:${l.id}`);
                                m = k && m && d.get(`${k.id}:${m.id}`);
                                var q = k && l && d.get(`${k.id}:${l.id}`);
                                l = r.boundary === "end" ? m ? .Na : n ? .ta;
                                n = t.boundary === "end" ? p ? .ya : n ? .ma;
                                p = r.boundary === "end" ? q ? .Na : p ? .ta;
                                m = t.boundary === "end" ? q ? .ya : m ? .ma;
                                q = __c.Sla({
                                    ma: p,
                                    ya: l,
                                    ta: m,
                                    Na: n
                                }, a);
                                let u;
                                switch (q) {
                                    case "blockStart":
                                        u = p;
                                        break;
                                    case "blockEnd":
                                        u = l;
                                        break;
                                    case "inlineStart":
                                        u = m;
                                        break;
                                    case "inlineEnd":
                                        u = n;
                                        break;
                                    default:
                                        u = void 0
                                }
                                const {
                                    height: w,
                                    width: y
                                } = u ? .rd === 1 ? {
                                    height: u.weight,
                                    width: u.weight
                                } : {
                                    height: Math.max(m ? .weight || 0, n ? .weight || 0),
                                    width: Math.max(p ? .weight || 0, l ? .weight || 0)
                                };
                                h.set(f6(r, t), __c.El(q, w / 2, y / 2))
                            }
                        }
                        return h
                    },
                    UDc = function(a, b, c, d, e, f, g, h) {
                        if (f.length === 0 || g.length === 0) return [];
                        const k = RDc(b, d, e, f, g);
                        h = SDc(b, c, e, f, g, h);
                        const l = TDc(a, c, d, e, f, g),
                            m = a.wxb(c),
                            n = a.Jwb(b, d),
                            p = b.direction === "rtl";
                        a = k.map(q => {
                            var r = q.BNb,
                                t = q.NAa,
                                u = q.mab;
                            const w = q.color,
                                y = q.weight;
                            q = q.rd;
                            const B = p ? -1 : 1,
                                D = l.get(f6(r, u)) ? .Na,
                                C = l.get(f6(t, u)) ? .ta;
                            if (D != null && C != null) {
                                var E = z(m.get(u.la)),
                                    J = z(n.get(r.column));
                                r = z(n.get(t.column));
                                u = u.boundary === "start" ? E.start : E.end;
                                E = J.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: w,
                                    weight: y,
                                    rd: q,
                                    p1: new Pl(E + D * B, u),
                                    p2: new Pl(t + C * B, u),
                                    ...__c.Jl((t - E) * B, q * y, D)
                                }
                            }
                        }).filter(__c.sb);
                        return [...h.map(q => {
                            var r = q.VUa,
                                t = q.RNb,
                                u = q.TAa;
                            const w = q.color,
                                y = q.weight;
                            q = q.rd;
                            const B = l.get(f6(r, t)) ? .ya,
                                D = l.get(f6(r, u)) ? .ma;
                            if (B != null && D != null) {
                                var C = z(n.get(r.column)),
                                    E = z(m.get(t.la));
                                t = z(m.get(u.la));
                                r = r.boundary === "start" ? C.start : C.end;
                                C = E.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: w,
                                    weight: y,
                                    rd: q,
                                    p1: new Pl(r, C + B),
                                    p2: new Pl(r, u + D),
                                    ...__c.Jl(u - C, q * y, B)
                                }
                            }
                        }).filter(__c.sb), ...a]
                    },
                    VDc = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Dl(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Dl(d, e => `${e.Bm}_${e.Cm}`);
                            for (const [, e] of a) {
                                const {
                                    Cm: f,
                                    Bm: g
                                } = e[0];
                                a = __c.Dl(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Bm: g,
                                    Cm: f
                                })
                            }
                        }
                        return b
                    },
                    WDc = function(a, b, c, d, e) {
                        return a.BKb(b, c, d, e)
                    },
                    XDc = function(a, b, c, d, e, f, g, h) {
                        var k = __c.eOb;
                        const l = f.get().flatMap(p => d.last() === p ? [{
                                la: p,
                                boundary: "start"
                            }, {
                                la: p,
                                boundary: "end"
                            }] : [{
                                la: p,
                                boundary: "start"
                            }]),
                            m = g.get().flatMap(p => e.last() === p ? [{
                                column: p,
                                boundary: "start"
                            }, {
                                column: p,
                                boundary: "end"
                            }] : [{
                                column: p,
                                boundary: "start"
                            }]),
                            n = new Map;
                        for (const p of f.get())
                            for (const q of g.get())(f = WDc(k.Xcb, a, b, c, {
                                column: q,
                                la: p
                            })) && n.set(`${q.id}:${p.id}`, f);
                        a = UDc(k, a, d, e, n, l, m, h);
                        return VDc(a)
                    },
                    YDc = function(a) {
                        switch (a) {
                            case 2:
                                return K("ibdecg");
                            case 7:
                                return K("446quA");
                            case 5:
                                return K("j1fbqg");
                            case 1:
                                return K("O5i4AQ");
                            case 6:
                                return K("C0VHsg");
                            case 4:
                                return K("9ND0kg");
                            case -1:
                                return K("RWqnLA");
                            case 9:
                                return K("nQR/7w");
                            case -2:
                                return K("P23rtA");
                            case 3:
                                return K("+IXmVg");
                            default:
                                throw new A(a);
                        }
                    },
                    ZDc = function() {
                        const [a] = (0, __c.nb)(() => au());
                        return a
                    },
                    $Dc = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.I)(a, { ...b
                            })
                        })
                    },
                    aEc = function(a) {
                        var b = a.eD;
                        const c = a.content,
                            d = a.context,
                            e = a.ds;
                        __c.x(c ? .sh ? .type === "formula");
                        const f = c.pk;
                        a = {
                            type: "dom",
                            render: g => g.innerText = ""
                        };
                        switch (f.type) {
                            case 9:
                                b = a;
                                break;
                            case 6:
                                b = b.Fua ? .({
                                    content: __c.tf(__c.Njb, { ...__c.vJb,
                                        value: f.value
                                    }),
                                    context: d,
                                    ds: e
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                b =
                                    b.Iua ? .({
                                        context: d,
                                        value: c.RD,
                                        valueType: c.pk.type
                                    });
                                break;
                            case 0:
                                b = {
                                    type: "react",
                                    node: g6(__c.av, {
                                        label: YDc(f.error),
                                        children: g6(__c.d8b, {
                                            tone: "critical"
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new A(f);
                        }
                        return b ? ? a
                    },
                    fEc = function(a) {
                        const b = a.eD,
                            c = a.lb,
                            d = a.og,
                            e = a.HOb,
                            f = a.hb;
                        b.Iua = g => __c.fRa({ ...g,
                            hb: f
                        });
                        b.gRa = g => aEc({ ...g,
                            eD: b
                        });
                        b.fRa = g => bEc({ ...g
                        });
                        b.Fua = $Dc(cEc({
                            og: d,
                            $W: void 0,
                            lb: c
                        }));
                        b.iRa = dEc(e, f);
                        b.jRa = $Dc(g => g6(eEc, { ...g,
                            hb: f
                        }))
                    },
                    hEc = function({
                        label: a,
                        cb: b,
                        width: c,
                        height: d,
                        scale: e,
                        bVa: f
                    }) {
                        return g6("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: h6(__c.Wu, {
                                className: i6("ivlMMQ", gEc(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && g6(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    gEc = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    jEc = function({
                        ee: a,
                        R0a: b,
                        scale: c,
                        Mr: d,
                        onMouseDown: e,
                        onTouchStart: f,
                        Nr: g,
                        cib: h,
                        sWa: k
                    }) {
                        const l = j6(() => {
                                const q = d ? .get();
                                if (q != null &&
                                    q.length !== 0) return new __c.fw(q)
                            }, [d]),
                            m = g(1),
                            n = g(c),
                            p = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return g6(__c.Xu, {
                            eq: "light",
                            light: "light",
                            ht: "light",
                            dark: "light",
                            children: q => g6("div", {
                                className: i6("ze9QCQ", p, q.className),
                                style: {
                                    width: n,
                                    height: n
                                },
                                children: g6("div", {
                                    style: {
                                        width: m,
                                        height: m,
                                        transform: `scale(${c})`
                                    },
                                    className: i6("N7J3UA", p),
                                    onMouseDown: e,
                                    onTouchStart: f,
                                    ref: l ? .xj,
                                    children: g6(__c.gv, {
                                        className: i6("m8CFdg", p, {
                                            G6wL4w: h,
                                            W_E0wA: b,
                                            _52RFdg: k === "move"
                                        }),
                                        ariaLabel: K("ruWN9A"),
                                        children: g6(iEc, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    lEc = function({
                        lb: a
                    }) {
                        const b = new kEc,
                            c = new __c.bU,
                            d = k6(g => {
                                const {
                                    scale: h = 1,
                                    L0a: k,
                                    size: l = "small",
                                    cib: m = !0
                                } = g, n = l6(p => b.Nr({
                                    scale: p,
                                    size: l,
                                    eGa: k
                                }), [l, k]);
                                return g6(jEc, { ...g,
                                    scale: k ? Math.max(h, k) : h,
                                    ee: g.sheet.direction === "rtl",
                                    R0a: g.selection != null && b.iBb(g.sheet, a, g.selection),
                                    Nr: n,
                                    cib: m,
                                    sWa: g.sWa,
                                    onMouseDown: g.onMouseDown,
                                    onTouchStart: g.onTouchStart
                                })
                            }),
                            e = k6(g => {
                                const {
                                    scale: h = 1,
                                    L0a: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    pLb: p
                                } = g, q = l6(y => b.Nr({
                                    scale: y,
                                    size: l,
                                    eGa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = l6(y =>
                                    n != null && b.pKa(n).has(y), [n]), u = l6(y => n != null && b.Fyb(m, a, n).has(y), [m, n]), w = l6(y => {
                                    var B = a.layout.xk.xh(m);
                                    B = p != null && B.mf(y, p.jc) >= 0 && B.mf(y, p.sd) <= 0;
                                    return t(y) ? B ? "secondary-active" : "primary-active" : u(y) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, u, t]);
                                return g6(m6, { ...g,
                                    od: h,
                                    Qd: r,
                                    Nr: q,
                                    BI: w,
                                    zJ: c,
                                    lb: a
                                })
                            }),
                            f = k6(g => {
                                const {
                                    scale: h = 1,
                                    L0a: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    pLb: p
                                } = g, q = l6(y => b.Nr({
                                    scale: y,
                                    size: l,
                                    eGa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = l6(y => n != null && b.sKa(n).has(y), [n]), u = l6(y => n != null && b.Gyb(m, a, n).has(y), [m, n]), w = l6(y => {
                                    var B = a.layout.xk.Hh(m);
                                    B = p != null && B.mf(y, p.ac) >= 0 && B.mf(y, p.kd) <= 0;
                                    return t(y) ? B ? "secondary-active" : "primary-active" : u(y) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, u, t]);
                                return g6(n6, { ...g,
                                    od: r,
                                    Qd: h,
                                    Nr: q,
                                    BI: w,
                                    zJ: c,
                                    lb: a
                                })
                            });
                        return {
                            Gib: d,
                            Fib: e,
                            Hib: f
                        }
                    },
                    mEc = function(a) {
                        const b = a.Ps,
                            c = () => null;
                        return __c.iu(d => g6(o6, { ...d,
                            Ps: b,
                            fj: c
                        }))
                    },
                    nEc = function({
                        sheet: a,
                        lb: b,
                        ui: c,
                        da: d,
                        range: e,
                        bd: f
                    }) {
                        p6(() => q6(() => {
                            if (f.current !=
                                null) {
                                var g = d ? .get() ? ? 1,
                                    h = c.get(),
                                    k = e ? GB(b.$a, a, {
                                        la: e.ac,
                                        column: e.jc
                                    }, {
                                        la: e.kd,
                                        column: e.sd
                                    }) ? .ob() : void 0,
                                    l = a.direction === "rtl";
                                f.current.style.transform = `translate(${k?k.left*g*(l?1:-1):0}px, ${k?-k.top*g:0}px)`;
                                f.current.style.width = `${h.width*g}px`;
                                f.current.style.height = `${h.height*g}px`
                            }
                        }), [a, c, b.layout.zg, b.$a, e, f, d])
                    },
                    qEc = function({
                        onScroll: a
                    }) {
                        const b = new oEc(a);
                        return {
                            jG: b,
                            pua: k6(c => g6(pEc, {
                                sheet: c.sheet,
                                jG: b,
                                children: c.children
                            }))
                        }
                    },
                    tEc = function(a) {
                        const b = a.Ps,
                            c = a.Te,
                            d = a.Zcb,
                            e = a.lb,
                            f = ({
                                children: m
                            }) =>
                            m,
                            g = ({
                                children: m
                            }) => g6("div", {
                                className: "Vc5nkQ",
                                children: m
                            }),
                            {
                                jG: h,
                                pua: k
                            } = qEc({
                                onScroll: a.onScroll
                            });
                        class l extends rEc {
                            get qQ() {
                                const m = this.props.ha.Cr,
                                    n = this.props.Mb;
                                switch (m) {
                                    case "screen":
                                        return k;
                                    case "print":
                                        return n.Uk != null ? g : f;
                                    default:
                                        throw new A(m);
                                }
                            }
                            componentDidMount() {
                                d.Jcb(this.props.item, {
                                    Mb: this.props.Mb,
                                    ha: this.props.ha
                                })
                            }
                            componentWillUnmount() {
                                d.fpb(this.props.item, {
                                    Mb: this.props.Mb,
                                    ha: this.props.ha
                                })
                            }
                            render() {
                                d.Jcb(this.props.item, {
                                    Mb: this.props.Mb,
                                    ha: this.props.ha
                                });
                                return g6(sEc, { ...this.props,
                                    da: this.da,
                                    Ps: b,
                                    qQ: this.qQ,
                                    fj: this.fj,
                                    Zcb: d,
                                    lb: e,
                                    jG: h
                                })
                            }
                            constructor(...m) {
                                super(...m);
                                this.da = r6(() => {
                                    const n = this.props.item;
                                    var p = this.props.ha,
                                        q = p.Cr;
                                    p = p.Ck;
                                    const r = this.props.Mb;
                                    switch (q) {
                                        case "screen":
                                            return p;
                                        case "print":
                                            if (r.Uk != null) return 1;
                                            q = d.Axb(n);
                                            if (!q) return 1;
                                            ({
                                                width: q
                                            } = new __c.Vm(n, q.Mb, {
                                                Ck: p
                                            }));
                                            return q / n.config.width;
                                        default:
                                            throw new A(q);
                                    }
                                });
                                this.fj = k6(n => g6("div", {
                                    className: "wKvivQ",
                                    children: g6(__c.nRa, { ...this.props,
                                        ...n,
                                        Te: c
                                    })
                                }))
                            }
                        }
                        return {
                            Skb: l,
                            jG: h
                        }
                    },
                    vEc = function(a) {
                        const b =
                            a.Ps,
                            c = a.lb,
                            d = () => null;
                        return e => g6(uEc, { ...e,
                            Ps: b,
                            fj: d,
                            lb: c
                        })
                    },
                    yEc = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                nUa: b,
                                EH: b,
                                Xa: {},
                                cE: {}
                            },
                            d = s6(() => a.rD.style || c, g => {
                                Object.assign(a.Wga.style, g.nUa);
                                Object.assign(a.qR.style, g.EH);
                                Object.assign(a.SL.style, g.Xa);
                                Object.assign(a.NH.style, g.cE);
                                g = g ? .Xa ? .textDecoration;
                                a.SL.classList.toggle("OQx3PQ", g === "underline");
                                a.SL.classList.toggle("_99ezUA", g === "line-through");
                                a.SL.classList.toggle("kppAqQ", g === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: wEc
                            }),
                            e = s6(() => a.DEa, g => {
                                a.SL.classList.toggle("_84KvRA", !g);
                                a.Wga.classList.toggle("_84KvRA", !g);
                                a.qR.classList.toggle("TL_RLA", !g)
                            }, {
                                fireImmediately: !0
                            }),
                            f = s6(() => a.renderer, g => {
                                a.Oha && g ? .type !== "react" ? (a.Oha = void 0, a.tba.remove()) : a.NH.innerHTML = "";
                                switch (g ? .type) {
                                    case "react":
                                        a.Oha = xEc(g.node, a.tba);
                                        a.NH.appendChild(a.tba);
                                        break;
                                    case "dom":
                                        g.render(a.NH);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new A(g);
                                }
                                a.ZGa()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e();
                            f()
                        }
                    },
                    wEc = function(a,
                        b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    AEc = function(a) {
                        const b = a.fD,
                            c = a.lb,
                            d = a.km,
                            e = a.QG,
                            f = a.phb,
                            g = new zEc(d, c);
                        return h => g6(t6, { ...h,
                            QG: e,
                            lb: c,
                            km: d,
                            fD: b,
                            XDa: g,
                            phb: f ? .get()
                        })
                    };
                __c.IB.prototype.ora = __c.ea(24, function(a, b, c) {
                    const d = [a];
                    for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                    return d
                });
                var f6 = (a, b) => `${a.column.id}-${a.boundary}:${b.la.id}-${b.boundary}`,
                    cEc = ({
                        og: a,
                        $W: b,
                        lb: c
                    }) => d => (0, __c.I)(__c.qRb, { ...d,
                        og: a,
                        $W: b,
                        lb: c
                    }),
                    BEc = __webpack_require__(322594),
                    CEc = BEc.Fragment,
                    g6 = BEc.jsx,
                    h6 = BEc.jsxs;
                var DEc = __webpack_require__,
                    EEc = DEc(208463),
                    i6 = DEc.n_x(EEc)();
                var k6 = __webpack_require__(721226).PA;
                var u6 = __webpack_require__(205482),
                    v6 = u6.Component,
                    rEc = u6.PureComponent,
                    l6 = u6.useCallback,
                    p6 = u6.useEffect,
                    FEc = u6.useLayoutEffect,
                    j6 = u6.useMemo,
                    w6 = u6.useRef;
                var x6 = __webpack_require__(186901),
                    r6 = x6.EW,
                    q6 = x6.fm,
                    GEc = x6.m3,
                    s6 = x6.mJ,
                    HEc = x6.MN,
                    IEc = x6.O8,
                    y6 = x6.sH,
                    z6 = x6.XI;
                var JEc = __webpack_require__(536618),
                    KEc = JEc.Aj,
                    A6 = JEc.iB,
                    LEc = JEc.uP;
                var B6 = __webpack_require__(277049)._;
                var C6 = __webpack_require__(269018)._;
                __webpack_require__(245307);
                var MEc = __webpack_require__(87387).A;
                var xEc = __webpack_require__(419094).createPortal;
                var NEc = class {
                        static G(a) {
                            L(a, {
                                viewBox: y6.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (NEc.G(this), pm({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.sMb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    OEc = k6(a => {
                        var b = a.sheet.direction === "rtl";
                        b = {
                            H2wykw: !b,
                            UweldA: b
                        };
                        const c = w6(new NEc),
                            d = z6(() => {
                                if (a.ita) {
                                    var g = a.ita.current;
                                    g && c.current.sMb(pm({
                                        top: g.scrollTop,
                                        left: g.scrollLeft,
                                        height: g.clientHeight,
                                        width: g.clientWidth
                                    }))
                                }
                            });
                        p6(() => {
                            d();
                            a.ita.current ? .addEventListener("scroll", d);
                            window ? .addEventListener("resize",
                                d);
                            return () => {
                                a.ita.current ? .removeEventListener("scroll", d);
                                window ? .removeEventListener("resize", d)
                            }
                        }, [a.ita, d]);
                        const e = j6(() => ({
                                get: () => c.current.viewBox
                            }), []),
                            f = j6(() => r6(() => __c.km(0, 0, a.sheet.width, a.sheet.height)), [a.sheet]);
                        return h6("div", {
                            className: i6("nMvVqA", b),
                            children: [h6("div", {
                                ref: a.bd,
                                className: "_0YOFPg",
                                children: [g6(a.Ps, { ...a,
                                    viewport: e,
                                    ui: f
                                }), g6("div", {
                                    className: i6("Gdl7fQ", b),
                                    children: a.zQa ? .get() ? .map((g, h) => g6(g, {}, h))
                                })]
                            }), a.J3b === "visible" && h6(CEc, {
                                children: [g6("div", {
                                    className: i6("_32sKQw",
                                        b),
                                    children: g6(a.Pkb, { ...a
                                    })
                                }), g6("div", {
                                    className: i6("xdIsTQ", b),
                                    children: g6(a.Tkb, { ...a
                                    })
                                }), g6("div", {
                                    className: i6("rsTRSA", b),
                                    children: g6(a.Rkb, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    PEc = k6(a => {
                        a = a.content;
                        __c.v(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.stream.Z;
                            case "text3":
                                return __c.Xq.snapshot(a.value).cells.Z();
                            default:
                                throw new A(a);
                        }
                    });
                var QEc = 1 / 13.334,
                    bEc = $Dc(k6(a => {
                        var b = a.context;
                        const c = a.value,
                            d = a.onChange,
                            e = b.attrs;
                        b = b.container.column;
                        __c.x(a.valueType === 3);
                        const f = l6(m => {
                                d ? .(c, m.target.checked)
                            }, [d, c]),
                            g = e.fontSize ? ? vg.Ub.fontSize,
                            h = b.width;
                        a = j6(() => {
                            const m = 20 * g * QEc;
                            return `${Math.round(m*Math.min(1,(h-__c.tU*2)/m))}px`
                        }, [g, h]);
                        b = j6(() => {
                            var m = e.color ? ? vg.Ub.color,
                                n = e.bE ? ? vg.Ub.bE;
                            const {
                                h: p,
                                s: q,
                                va: r
                            } = __c.yr(m), t = __c.wr(new __c.qr(p, q * .59, r * .69)).Ip(), u = __c.wr(new __c.qr(p, q * .68, r * .84)).Ip(), w = __c.Dr(__c.Cr(__c.wr(m), .5));
                            return {
                                GUa: m,
                                Uob: t,
                                HUa: u,
                                Vob: n !== "transparent" ? n : "#ffffff",
                                Wob: w
                            }
                        }, [e]);
                        const k = __c.Cu(),
                            l = l6(m => {
                                m.nativeEvent.cancelable && m.preventDefault();
                                m.stopPropagation();
                                z6(() => {
                                    d && d(c, !c)
                                })()
                            }, [d, c]);
                        return g6("label", {
                            className: i6("s5Xvtg", {
                                _0YWo_Q: k,
                                agLBbw: d == null
                            }),
                            onTouchEnd: l,
                            children: h6("div", {
                                className: "nOL94A",
                                style: {
                                    "--V8rdkw": a,
                                    "--6kHV0A": b.GUa,
                                    "--dhlyXQ": b.Uob,
                                    "--pMrTCg": b.HUa,
                                    "--EyYwbg": b.GUa,
                                    "--3ZWdlg": b.HUa,
                                    "--81jhOQ": b.Vob,
                                    "--Cs3XTw": b.Wob
                                },
                                children: [g6("input", {
                                    type: "checkbox",
                                    checked: c,
                                    onChange: z6(m => f(m)),
                                    className: "p8DDOg",
                                    hidden: !0
                                }), g6("span", {
                                    "aria-hidden": !0,
                                    className: i6("l_S_Ng", {
                                        iGjddQ: c
                                    }),
                                    children: g6(REc, {})
                                })]
                            })
                        })
                    })),
                    REc = () => g6("svg", {
                        className: "_8CNofA",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: g6("path", {
                            d: "M0.750977 4.5L3.25098 7L9.25098 1",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })
                    });
                var dEc = (a, b) => __c.PQa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.stream.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            yh: c
                        } = __c.bg(vg, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            oa: void 0,
                            writingMode: 1,
                            Ad: "start",
                            Se: SEc(e, c),
                            hb: b
                        })
                    }),
                    SEc = A6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.stream.Z.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: GEc.structural
                    });
                var TEc, UEc, VEc, eEc;
                new(TEc = class extends B6 {
                    constructor() {
                        super(eEc);
                        UEc()
                    }
                }, (() => {
                    class a extends(VEc = v6) {
                        static G(b) {
                            L(b, {
                                yh: r6
                            })
                        }
                        get yh() {
                            return __c.bg(vg, this.props.context.attrs).yh
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = g6(this.props.fj, {
                                content: b,
                                la: c.container.la,
                                col: c.container.column,
                                yh: this.yh
                            });
                            return this.yh === "wrap" ? g6("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.G(this)
                        }
                    }({
                        c: [eEc, UEc]
                    } = C6(a, [], [pc], VEc))
                })(), TEc);
                var WEc = class {
                    static ora(a, b, c) {
                        const d = [a];
                        for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    }
                    static G8(a, b, c) {
                        __c.v(a.layout.cols.has(b), "Column not found in sheet");
                        __c.v(a.layout.rows.has(c), "Row not found in sheet");
                        var d = a.layout.cells.get(c, b);
                        const {
                            jc: e,
                            ac: f,
                            sd: g,
                            kd: h
                        } = d ? .span || {
                            jc: b,
                            ac: c,
                            sd: b,
                            kd: c
                        };
                        b = a.ma(f);
                        c = a.ma(h) + h.height - b;
                        d = a.ta(e);
                        a = a.ta(g) + g.width - d;
                        return pm({
                            top: b,
                            left: d,
                            width: a,
                            height: c
                        })
                    }
                };
                var kEc = class {
                    Nr({
                        size: a,
                        scale: b,
                        eGa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.sX * b : __c.b7b * b
                    }
                    constructor() {
                        this.iBb = A6((a, b, c) => {
                            c = c.get();
                            const d = b.layout.xk.Hh(a);
                            a = b.layout.xk.xh(a);
                            return c != null && d.count() === (c.rows ? .size || 0) && a.count() === (c.columns ? .size || 0)
                        });
                        this.pKa = KEc(a => new Set(a.get() ? .columns || []), {
                            equals: __c.rl
                        });
                        this.sKa = KEc(a => new Set(a.get() ? .rows || []), {
                            equals: __c.rl
                        });
                        this.Fyb = A6((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.sKa(c);
                            b = b.layout.xk.xh(a);
                            if (e.size > 0) return new Set(b);
                            c = this.pKa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.la, f.column);
                                for (const g of WEc.ora(d ? d.span.jc : f.column, d ? d.span.sd : f.column, b))(c.size === 0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.rl
                        });
                        this.Gyb = A6((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.pKa(c);
                            b = b.layout.xk.Hh(a);
                            if (e.size > 0) return new Set(b);
                            c = this.sKa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.la, f.column);
                                for (const g of WEc.ora(d ? d.span.ac : f.la, d ? d.span.kd :
                                        f.la, b))(c.size === 0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.rl
                        })
                    }
                };
                var XEc, YEc, ZEc, $Ec, aFc, bFc, cFc = parseInt("4px", 10) || 4,
                    dFc = parseInt("0.5px", 10) || .5,
                    eFc = parseInt("1px", 10) || 1,
                    fFc = parseInt("0.5px", 10) || .5,
                    gFc = parseInt("0.5px", 10) || .5,
                    hFc = parseInt("1px", 10) || 1,
                    iFc = parseInt("0.5px", 10) || .5,
                    m6;
                new(XEc = class extends B6 {
                    constructor() {
                        super(m6);
                        ZEc()
                    }
                }, (() => {
                    class a extends($Ec = v6) {
                        static G(b) {
                            L(b, {
                                ee: r6,
                                Bt: r6,
                                cda: r6
                            })
                        }
                        get ee() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Bt() {
                            const b = this.props.Mr ? .get();
                            if (b != null && b.length !== 0) return new __c.fw(b)
                        }
                        get cda() {
                            return this.props.wCa ? .() ? .get()
                        }
                        render() {
                            return g6(__c.Xu, {
                                eq: "light",
                                light: "light",
                                ht: "light",
                                dark: "light",
                                children: this.Cpb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (m6.G(this), z6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    od: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "column", f)
                            }));
                            this.onMouseLeave = z6(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = z6(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = z6(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.G$a = (c, d, e) => {
                                const {
                                    sheet: f,
                                    lb: g,
                                    Nr: h,
                                    BI: k,
                                    X3b: l,
                                    od: m = 1,
                                    Qd: n = 1
                                } = this.props, p = {
                                    jNbTIg: !this.ee,
                                    gtA7Dw: this.ee
                                };
                                var q = e ? .sticky ? this.ee ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                q = e ? .sticky ? this.cda ? ? q : void 0;
                                let r = 0;
                                const t = g.layout.zg.xh(f),
                                    u = t.map(y => {
                                        if (!(c && t.mf(y, c) < 0 || d && t.mf(y, d) > 0)) return r += y.width, g6(jFc, {
                                            col: y,
                                            label: __c.At(f.Ju(y)),
                                            cb: l ? .get() ? .get(y),
                                            Nr: h,
                                            BI: k,
                                            od: m,
                                            Qd: n,
                                            start: g.$a.ta(f, y)
                                        }, y.id)
                                    }),
                                    w = this.ee ? {
                                        right: r * m
                                    } : {
                                        left: r * m
                                    };
                                return h6("div", {
                                    style: {
                                        height: h(n),
                                        width: r * m,
                                        ...q
                                    },
                                    className: i6("Vt2_4w", p, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [u, e ? .sticky && g6("div", {
                                        style: {
                                            width: cFc * m,
                                            ...w
                                        },
                                        className: i6("HBvlug", "ru3tFQ", p)
                                    })]
                                })
                            };
                            this.Cpb = c => {
                                var d = this.props.sheet;
                                const e = this.props.lb,
                                    f = e.layout.zg.u8(d),
                                    g = {
                                        jNbTIg: !this.ee,
                                        gtA7Dw: this.ee
                                    };
                                d = e.layout.zg.xh(d);
                                return h6("div", {
                                    ref: this.Bt ? .xj,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: i6("xhBZaw", g, c.className),
                                    children: [f && this.G$a(void 0, f, {
                                        sticky: !0
                                    }), this.G$a(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [m6, ZEc]
                    } = C6(a, [], [pc], $Ec))
                })(), XEc);
                var n6;
                new(YEc = class extends B6 {
                    constructor() {
                        super(n6);
                        aFc()
                    }
                }, (() => {
                    class a extends(bFc = v6) {
                        static G(b) {
                            L(b, {
                                ee: r6,
                                Bt: r6,
                                cda: r6
                            })
                        }
                        get ee() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get Bt() {
                            const b = this.props.Mr ? .get();
                            if (b != null && b.length !== 0) return new __c.fw(b)
                        }
                        get cda() {
                            return this.props.wCa ? .() ? .get()
                        }
                        render() {
                            return g6(__c.Xu, {
                                eq: "light",
                                light: "light",
                                ht: "light",
                                dark: "light",
                                children: this.TKb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (n6.G(this), z6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Qd: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "row", f)
                            }));
                            this.onMouseLeave = z6(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = z6(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = z6(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.L$a = (c, d, e) => {
                                const {
                                    sheet: f,
                                    lb: g,
                                    Nr: h,
                                    BI: k,
                                    od: l = 1,
                                    Qd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.ee,
                                    gtA7Dw: this.ee
                                };
                                var p = e ? .sticky ? {
                                    top: 0
                                } : void 0;
                                p = e ? .sticky ? this.cda ? ? p : void 0;
                                let q = 0;
                                const r = g.layout.zg.Hh(f),
                                    t = r.map(u => {
                                        if (!(c && r.mf(u, c) < 0 || d && r.mf(u, d) > 0)) {
                                            q += u.height;
                                            var w = `${f.Gv(u)+1}`;
                                            return g6(kFc, {
                                                la: u,
                                                label: w,
                                                BI: k,
                                                Nr: h,
                                                od: l,
                                                Qd: m,
                                                start: g.$a.ma(f, u)
                                            }, u.id)
                                        }
                                    });
                                return h6("div", {
                                    style: {
                                        height: q * m,
                                        width: h(l),
                                        ...p
                                    },
                                    className: i6("_93roJg", n, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [t, e ? .sticky && g6("div", {
                                        style: {
                                            height: cFc * m
                                        },
                                        className: i6("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.TKb = c => {
                                var d = this.props.sheet;
                                const e = this.props.lb,
                                    f = e.layout.zg.v8(d),
                                    g = {
                                        jNbTIg: !this.ee,
                                        gtA7Dw: this.ee
                                    };
                                d = e.layout.zg.Hh(d);
                                return h6("div", {
                                    ref: this.Bt ? .xj,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: i6("An9VeA", g, c.className),
                                    children: [f && this.L$a(void 0, f, {
                                        sticky: !0
                                    }), this.L$a(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [n6, aFc]
                    } = C6(a, [], [pc], bFc))
                })(), YEc);
                var jFc = k6(a => {
                        const b = a.label,
                            c = a.cb,
                            d = a.col,
                            e = a.BI,
                            f = a.Nr,
                            g = a.od,
                            h = a.Qd,
                            k = f(h),
                            l = LEc(() => e(d));
                        return g6("div", {
                            className: i6("_83Rssw", "d2uLIA", gEc(l)),
                            style: {
                                width: d.width * g,
                                height: k,
                                borderInlineWidth: `${dFc*g}px`,
                                borderBlockStartWidth: `${eFc*g}px`,
                                borderBlockEndWidth: `${fFc*g}px`,
                                transform: `translateX(${a.start*g}px)`
                            },
                            children: g6(hEc, {
                                label: b,
                                cb: c,
                                width: d.width,
                                height: f(1),
                                scale: h,
                                bVa: l
                            })
                        })
                    }),
                    kFc = k6(a => {
                        const b = a.label,
                            c = a.la,
                            d = a.Nr,
                            e = a.BI,
                            f = a.od,
                            g = a.Qd,
                            h = d(f),
                            k = LEc(() => e(c));
                        return g6("div", {
                            className: i6("_83Rssw", "JhBzyw", gEc(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${gFc*g}px`,
                                borderInlineStartWidth: `${hFc*g}px`,
                                borderInlineEndWidth: `${iFc*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: g6(hEc, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                bVa: k
                            })
                        })
                    });
                var lFc = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var mFc = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var iEc = __c.KT({
                    Ho: lFc,
                    medium: mFc
                });
                var nFc, oFc, pFc, o6;
                new(nFc = class extends B6 {
                    constructor() {
                        super(o6);
                        oFc()
                    }
                }, (() => {
                    class a extends(pFc = v6) {
                        static G(b) {
                            L(b, {
                                Nf: r6.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return g6(this.props.Ps, {
                                sheet: b.D.config,
                                container: b,
                                ui: this.ui,
                                yga: "visible",
                                Mr: this.props.Mr,
                                Kv: this.props.Kv,
                                Qw: this.props.Qw,
                                Sw: this.props.Sw,
                                da: this.props.da,
                                Nf: this.Nf,
                                fj: this.props.fj,
                                mL: void 0
                            })
                        }
                        get Nf() {
                            return __c.Jt(this.props.element.D.Va, this.props.Lf)
                        }
                        constructor(...b) {
                            super(...b);
                            this.ui = (o6.G(this), r6(() => {
                                const c = this.props.element.D.config;
                                return __c.km(0, 0, c.width, c.height)
                            }))
                        }
                    }({
                        c: [o6, oFc]
                    } = C6(a, [], [pc], pFc))
                })(), nFc);
                var qFc = class {
                    constructor() {
                        this.Tqa = new WeakMap;
                        this.Axb = a => this.Tqa.get(a);
                        this.Jcb = (a, b) => {
                            this.Tqa.set(a, b)
                        };
                        this.fpb = (a, b) => {
                            const c = this.Tqa.get(a);
                            c && c.ha === b.ha && c.Mb === b.Mb && this.Tqa.delete(a)
                        }
                    }
                };
                var rFc = parseInt("4px", 10) || 4,
                    sFc = k6(({
                        sheet: a,
                        lb: b,
                        ui: c,
                        da: d,
                        range: e,
                        fz: f,
                        gz: g
                    }) => {
                        if (e != null && (f || g)) {
                            d = d ? .get() ? ? 1;
                            c = c.get();
                            var h = a.direction === "rtl",
                                k = {
                                    ZJ0G6w: !h,
                                    dOI_jA: h
                                };
                            a = GB(b.$a, a, {
                                la: e.ac,
                                column: e.jc
                            }, {
                                la: e.kd,
                                column: e.sd
                            }) ? .ob();
                            if (a != null) {
                                if (f && g) return g6("div", {
                                    style: {
                                        top: (a.top + a.height) * d,
                                        width: a.width * d,
                                        height: rFc * d
                                    },
                                    className: i6("aX8dhQ", "VGcLng")
                                });
                                if (f) return f = a.left + a.width, g6("div", {
                                    style: {
                                        width: rFc * d,
                                        height: c.height * d,
                                        ...(h ? {
                                            right: f * d
                                        } : {
                                            left: f * d
                                        })
                                    },
                                    className: i6("aX8dhQ", "gl1RPg",
                                        k)
                                });
                                if (g) return g6("div", {
                                    style: {
                                        top: (a.top + a.height) * d,
                                        width: c.width * d,
                                        height: rFc * d
                                    },
                                    className: i6("aX8dhQ", "VGcLng")
                                })
                            }
                        }
                    });
                var D6 = ({
                        sheet: a,
                        lb: b,
                        range: c,
                        ui: d,
                        da: e,
                        children: f
                    }) => {
                        const g = ZDc();
                        nEc({
                            sheet: a,
                            lb: b,
                            ui: d,
                            da: e,
                            range: c,
                            bd: g
                        });
                        return g6("div", {
                            ref: g,
                            className: i6("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: f
                        })
                    },
                    tFc = ({
                        sheet: a,
                        lb: b,
                        range: c,
                        ui: d,
                        da: e,
                        children: f
                    }) => {
                        const g = ZDc();
                        nEc({
                            sheet: a,
                            lb: b,
                            ui: d,
                            da: e,
                            range: c,
                            bd: g
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return g6("div", {
                            className: i6("nstn2A", a, "_9sodyg"),
                            children: g6("div", {
                                ref: g,
                                className: i6("nstn2A", a),
                                children: f
                            })
                        })
                    };
                var pEc = k6(({
                        sheet: a,
                        children: b,
                        jG: c
                    }) => {
                        const d = l6(f => {
                                c.tLa(a, f)
                            }, [c, a]),
                            e = l6(f => {
                                f != null ? c.kG.set(a, f) : c.kG.delete(a)
                            }, [c, a]);
                        return g6(__c.E4b, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            Jx: e,
                            children: b
                        })
                    }),
                    oEc = class {
                        tLa(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.jca.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.kG = new WeakMap;
                            this.jca = y6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = z6((b, c) => {
                                this.kG.get(b) ? .scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var sEc = k6(a => {
                    const b = a.item,
                        c = a.Mr,
                        d = a.Kv,
                        e = a.ug,
                        f = a.measureRef,
                        g = a.da,
                        h = a.Z1a,
                        k = a.Mb,
                        l = a.Qw,
                        m = a.Sw,
                        n = a.Ps,
                        p = a.qQ,
                        q = a.fj,
                        r = a.Lf,
                        t = a.lb,
                        u = a.jG;
                    a = j6(() => __c.Jt(b.Va, r), [b, r]);
                    const w = j6(() => r6(() => {
                            const E = b.config;
                            return __c.km(0, 0, E.width, E.height)
                        }), [b]),
                        y = j6(() => k6(({
                            sheet: E,
                            range: J,
                            fz: M,
                            gz: O
                        }) => g6(D6, {
                            sheet: E,
                            lb: t,
                            range: J,
                            ui: w,
                            da: g,
                            children: g6(sFc, {
                                sheet: E,
                                lb: t,
                                ui: w,
                                da: g,
                                range: J,
                                fz: M,
                                gz: O
                            })
                        })), [g, w, t]),
                        B = __c.bya(b.config),
                        D = g.get(),
                        C = Math.min(B.width * D, k.width);
                    p6(() => q6(() => {
                        var E = b.config.view.freeze.LH ?
                            b.config.layout.Fe.get(b.config.view.freeze.LH) : void 0;
                        if (E != null)
                            if (b.config.ta(E) + E.width > C) {
                                if (E = u.kG.get(b)) E.style.overflowX = "hidden"
                            } else if (E = u.kG.get(b)) E.style.overflowX = "scroll"
                    }), [b, k.width, u, D, C]);
                    return g6("div", {
                        ref: f,
                        className: "E8r86A",
                        style: {
                            width: C
                        },
                        children: g6(p, {
                            sheet: b,
                            children: g6("div", {
                                ref: h,
                                className: "cXTiJA",
                                style: {
                                    width: B.width * D,
                                    height: B.height * D
                                },
                                children: g6("div", {
                                    className: "W1ir5A",
                                    children: g6(n, {
                                        container: e.Oj(b),
                                        sheet: b.config,
                                        ui: w,
                                        yga: "visible",
                                        Mr: c,
                                        Kv: d,
                                        da: g,
                                        Qw: l,
                                        Sw: m,
                                        Nf: a,
                                        fj: q,
                                        mL: y
                                    })
                                })
                            })
                        })
                    })
                });
                var uFc = k6(({
                    page: a,
                    lb: b,
                    range: c,
                    ZF: d
                }) => {
                    var e = c != null && c.jc != null && c.ac != null && c.sd != null && c.kd != null ? GB(b.$a, a.sheet, {
                        la: c.ac,
                        column: c.jc
                    }, {
                        la: c.kd,
                        column: c.sd
                    }) : void 0;
                    return g6("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((f, g) => e == null ? d(f, g) : __c.nm(pm(f)).Vr(e) && d(f, g))
                    })
                });
                var vFc = new __c.bU,
                    wFc = a => __c.sX * a,
                    xFc = () => "primary-default",
                    uEc = k6(({
                        container: a,
                        Mr: b,
                        Kv: c,
                        Qw: d,
                        Sw: e,
                        T8: f,
                        da: g,
                        viewport: h,
                        lb: k,
                        $Mb: l,
                        Ps: m,
                        fj: n,
                        ZF: p,
                        Spa: q,
                        NVb: r,
                        tUb: t,
                        sUb: u
                    }) => {
                        const w = a.page,
                            y = j6(() => r6(() => {
                                {
                                    var D = k.$a;
                                    var C = w.sheet,
                                        E = D.pA.xk.Hh(C),
                                        J = D.pA.xk.xh(C);
                                    const M = E.first(),
                                        O = J.first();
                                    E = E.last();
                                    J = J.last();
                                    D = M && O && E && J ? GB(D, C, {
                                        la: M,
                                        column: O
                                    }, {
                                        la: E,
                                        column: J
                                    }) : void 0
                                }
                                return D ? ? __c.km(0, 0, 0, 0)
                            }), [w, k]),
                            B = j6(() => k6(({
                                sheet: D,
                                range: C,
                                fz: E,
                                gz: J
                            }) => h6(CEc, {
                                children: [g6(D6, {
                                    sheet: w.sheet,
                                    lb: k,
                                    range: C,
                                    ui: y,
                                    da: g,
                                    children: g6(sFc, {
                                        sheet: D,
                                        lb: k,
                                        ui: y,
                                        da: g,
                                        range: C,
                                        fz: E,
                                        gz: J
                                    })
                                }), h6(tFc, {
                                    sheet: w.sheet,
                                    lb: k,
                                    range: C,
                                    ui: y,
                                    da: g,
                                    children: [r && g6(r, {}), p && g6(uFc, {
                                        page: w,
                                        lb: k,
                                        ZF: p,
                                        range: C
                                    }), u && g6(u, {}), q && q()]
                                }), t && C && g6(D6, {
                                    sheet: w.sheet,
                                    lb: k,
                                    range: C,
                                    ui: y,
                                    da: g,
                                    children: g6(t, {
                                        range: C
                                    })
                                })]
                            })), [w, k, y, g, r, p, u, q, t]);
                        return l ? g6(yFc, {
                            container: a,
                            ui: y,
                            viewport: h,
                            da: g,
                            Mr: b,
                            Kv: c,
                            Qw: d,
                            Sw: e,
                            Ps: m,
                            fj: n,
                            mL: B,
                            lb: k
                        }) : g6(m, {
                            sheet: w.sheet,
                            container: a,
                            ui: y,
                            yga: "hidden",
                            Mr: b,
                            Kv: c,
                            Qw: d,
                            Sw: e,
                            T8: f,
                            da: g,
                            viewport: h,
                            fj: n,
                            mL: B
                        })
                    }),
                    yFc = k6(a => {
                        const b = a.container,
                            c = a.ui,
                            d = a.da,
                            e = a.viewport,
                            f = a.Mr,
                            g = a.Kv,
                            h = a.Qw,
                            k = a.Sw,
                            l = a.Ps,
                            m = a.fj,
                            n = a.mL;
                        a = a.lb;
                        const p = b.page,
                            q = p.sheet.direction === "rtl",
                            r = w6(null),
                            t = w6(null),
                            u = w6(null);
                        p6(() => {
                            const C = E6({
                                sheet: p.sheet,
                                Fra: !0,
                                Gra: !0,
                                da: d,
                                viewport: e
                            });
                            return s6(() => C ? .get(), E => {
                                const J = r.current;
                                if (E && J) {
                                    var M = p.sheet.direction === "rtl";
                                    J.style.position = E.position ? ? "sticky";
                                    J.style.top = E.top ? ? "0px";
                                    M ? J.style.right = E.right ? ? "0px" : J.style.left = E.left ? ? "0px";
                                    J.style.transform = E.transform ? ? ""
                                }
                            })
                        }, [p.sheet, d, e]);
                        p6(() => {
                            const C = E6({
                                sheet: p.sheet,
                                Fra: !1,
                                Gra: !0,
                                da: d,
                                viewport: e
                            });
                            return s6(() => C ? .get(), E => {
                                const J = u.current;
                                E && J && (J.style.position = E.position ? ? "sticky", J.style.top = E.top ? ? "0px", J.style.transform = E.transform ? ? "")
                            })
                        }, [p.sheet, d, e]);
                        p6(() => {
                            const C = E6({
                                sheet: p.sheet,
                                Fra: !0,
                                Gra: !1,
                                da: d,
                                viewport: e
                            });
                            return s6(() => C ? .get(), E => {
                                const J = t.current;
                                if (E && J) {
                                    var M = p.sheet.direction === "rtl";
                                    J.style.position = E.position ? ? "sticky";
                                    M ? J.style.right = E.right ? ? "0px" : J.style.left = E.left ? ? "0px";
                                    J.style.transform =
                                        E.transform ? ? ""
                                }
                            })
                        }, [p.sheet, d, e]);
                        const w = l6((C, E, J) => E6({
                                sheet: C,
                                Fra: E,
                                Gra: J,
                                da: d,
                                viewport: e
                            }), [d, e]),
                            y = j6(() => w ? () => w(p.sheet, !0, !1) : void 0, [w, p.sheet]),
                            B = j6(() => w ? () => w(p.sheet, !1, !0) : void 0, [w, p.sheet]),
                            D = d ? .get() ? ? 1;
                        return h6("div", {
                            className: i6("OsKKIQ", "cbOp6Q"),
                            children: [g6("div", {
                                    className: "VDFv_A",
                                    children: g6(l, {
                                        sheet: p.sheet,
                                        container: b,
                                        ui: c,
                                        yga: "hidden",
                                        Mr: f,
                                        Kv: g,
                                        Qw: h,
                                        Sw: k,
                                        T8: w,
                                        da: d,
                                        viewport: e,
                                        fj: m,
                                        mL: n
                                    })
                                }), g6("div", {
                                    ref: r,
                                    className: "_688KWg",
                                    children: g6(jEc, {
                                        ee: q,
                                        R0a: !1,
                                        Nr: wFc,
                                        scale: D
                                    })
                                }),
                                g6("div", {
                                    ref: u,
                                    className: "m0cT1w",
                                    children: g6(m6, {
                                        sheet: p.sheet,
                                        od: D,
                                        Qd: D,
                                        Nr: wFc,
                                        BI: xFc,
                                        zJ: vFc,
                                        wCa: y,
                                        lb: a
                                    })
                                }), g6("div", {
                                    ref: t,
                                    className: "zm537g",
                                    children: g6(n6, {
                                        sheet: p.sheet,
                                        od: D,
                                        Qd: D,
                                        Nr: wFc,
                                        BI: xFc,
                                        zJ: vFc,
                                        wCa: B,
                                        lb: a
                                    })
                                })
                            ]
                        })
                    }),
                    E6 = ({
                        sheet: a,
                        Fra: b,
                        Gra: c,
                        da: d,
                        viewport: e
                    }) => r6(() => {
                        var f = e ? .get().ob();
                        const g = d ? .get() ? ? 1;
                        if (!f) return {};
                        const h = {};
                        f = new Pl(f.left, f.top);
                        const k = a.direction === "rtl";
                        h.position = "relative";
                        c && (h.top = "0px");
                        b && (k ? h.right = "0px" : h.left = "0px");
                        h.transform = `translate(${b?f.x*g:
0}px, ${c?f.y*g:0}px)`;
                        return h
                    });
                var zEc = class {
                    constructor(a, b) {
                        this.km = a;
                        this.lb = b;
                        this.Gob = __c.tU;
                        this.bxb = A6((c, d, e, f) => {
                            e = e.get();
                            const g = new WeakMap;
                            for (let u = 0; u < e.length; u++) {
                                var h = e[u],
                                    k = this.Twb(c, d, h);
                                if (k) {
                                    switch (k) {
                                        case "start":
                                        case "justify":
                                            var l = e[u + 1];
                                            if (l == null || !HB(c, this.lb, d, l)) continue;
                                            break;
                                        case "center":
                                            l = e[u + 1];
                                            if (l == null || !HB(c, this.lb, d, l)) continue;
                                            l = e[u - 1];
                                            if (l == null || !HB(c, this.lb, d, l)) continue;
                                            break;
                                        case "end":
                                            l = e[u - 1];
                                            if (l == null || !HB(c, this.lb, d, l)) continue;
                                            break;
                                        default:
                                            throw new A(k);
                                    }
                                    if (l = f(d, h)) {
                                        var m =
                                            l.width + (k === "center" ? 0 : this.Gob);
                                        if (!(h.width > m)) {
                                            switch (k) {
                                                case "start":
                                                case "justify":
                                                    k = this.lb.$a.ta(c, h);
                                                    l = k + m;
                                                    break;
                                                case "center":
                                                    l = this.lb.$a.ta(c, h) + h.width / 2;
                                                    k = l - m / 2;
                                                    l += m / 2;
                                                    break;
                                                case "end":
                                                    l = this.lb.$a.ta(c, h) + h.width;
                                                    k = l - m;
                                                    break;
                                                default:
                                                    throw new A(k);
                                            }
                                            for (m = e.indexOf(h); m >= 0; m--) {
                                                var n = e[m],
                                                    p = m - 1 < 0 || HB(c, this.lb, d, e[m - 1]),
                                                    q;
                                                if (q = n === h || HB(c, this.lb, d, n)) {
                                                    q = k;
                                                    var r = l,
                                                        t = this.lb.$a.ta(c, n);
                                                    q = q < t && t < r
                                                }
                                                if (q && p) g.set(n, 1);
                                                else break
                                            }
                                            for (h = e.indexOf(h) + 1; h < e.length; h++) {
                                                m = e[h];
                                                if (n = HB(c, this.lb,
                                                        d, m)) n = k, p = l, q = this.lb.$a.ta(c, m), n = n < q && q < p;
                                                if (n) g.set(m, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return g
                        });
                        this.Twb = (c, d, e) => {
                            const f = c.layout.cells.get(d, e);
                            if (f && (f.ref.content.ref || f.ref.Ga.ref) && f.span.ac === f.span.kd && f.span.jc === f.span.sd) {
                                var g = this.km.qo(c, d, e);
                                c = this.km.qCa(c, d, e, __c.wg({
                                    yh: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    yh: h,
                                    textAlign: k
                                } = __c.bg(vg, c);
                                if (h === "overflow") return __c.TQa(k, f.ref.content.ref ? .type, f.ref.Ga.ref ? .type, g ? () => g.pk.type : void 0)
                            }
                        }
                    }
                };
                var zFc = k6(function(a) {
                    const b = a.sheet;
                    var c = a.lb,
                        d = a.AW;
                    const e = a.KSb,
                        f = a.da,
                        g = a.XDa,
                        h = a.Hwb;
                    a = a.overflow;
                    const k = ZDc();
                    FEc(() => q6(() => {
                        const r = z(k.current),
                            t = f ? .get() ? ? 1,
                            u = b.height;
                        r.style.width = `${b.width*t}px`;
                        r.style.height = `${u*t}px`
                    }), [k, f, b]);
                    const l = l6(r => g.bxb(b, r, e, h), [g, b, e, h]);
                    var m = l6((r, t) => l(r) ? .get(t) ? ? 0, [l]),
                        n = c.layout.xk.Hh(b);
                    const p = c.layout.xk.xh(b),
                        q = c.layout.zg.Hh(b);
                    c = c.layout.zg.xh(b);
                    d = XDc(b, n, p, q, c, d, e, m);
                    c = b.width;
                    m = b.height;
                    n = b.direction === "rtl";
                    return g6("svg", {
                        ref: k,
                        role: "presentation",
                        className: i6("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${c} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: d.map(({
                            lines: r,
                            color: t,
                            weight: u,
                            Bm: w,
                            Cm: y
                        }) => g6("path", {
                            stroke: t,
                            strokeDasharray: w,
                            strokeDashoffset: y,
                            strokeWidth: u,
                            d: r.map(({
                                p1: B,
                                p2: D
                            }) => `M ${B.x} ${B.y} L ${D.x} ${D.y}`).join(" ")
                        }, `${t}-${u}-${w}-${y}`))
                    })
                });
                var AFc;
                AFc = Symbol.iterator;
                var BFc = class {
                    get size() {
                        return this.nra
                    }
                    get([a, b]) {
                        return (a = this.gJ.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.gJ.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.gJ.get(a);
                        d == null && (d = new Map, this.gJ.set(a, d));
                        d.set(b, c);
                        this.nra++;
                        return this
                    }
                    clear() {
                        this.gJ.clear();
                        this.nra = 0
                    }
                    delete([a, b]) {
                        const c = this.gJ.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.nra--;
                        c.size === 0 && this.gJ.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.gJ)
                            for (const [d, e] of c) a([b, d], e)
                    }*[AFc]() {
                        for (const [a, b] of this.gJ)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.nra = 0;
                        this.gJ = new Map
                    }
                };
                var CFc, DFc, EFc, FFc, GFc, HFc, IFc, JFc, KFc = class extends v6 {
                    render() {
                        const {
                            mka: a,
                            ...b
                        } = this.props, c = this.props.sheet;
                        return h6("div", {
                            ref: this.bdb,
                            className: i6("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                            children: [a ? .pTa && g6(F6, { ...b,
                                sheet: c,
                                range: a.pTa.range,
                                fz: !0,
                                gz: !0,
                                className: "_0C8M3w"
                            }), a ? .Chb && g6(F6, { ...b,
                                sheet: c,
                                range: a.Chb.range,
                                fz: !1,
                                gz: !0,
                                className: "_7n44yg"
                            }), a ? .U0a && g6(F6, { ...b,
                                sheet: c,
                                range: a.U0a.range,
                                fz: !0,
                                gz: !1,
                                className: "fF5r6w"
                            }), a ? .sgb && g6(F6, { ...b,
                                sheet: c,
                                range: a.sgb.range,
                                fz: !1,
                                gz: !1,
                                className: "llILYw"
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = q6(() => {
                            var b = this.props,
                                c = b.da;
                            b = b.ui;
                            const d = this.bdb.current;
                            if (d) {
                                c = c ? c.get() : 1;
                                const {
                                    width: e,
                                    height: f
                                } = b.get();
                                d.style.width = `${e*c}px`;
                                d.style.height = `${f*c}px`
                            }
                        });
                        __c.fc(this, [a])
                    }
                    constructor(...a) {
                        super(...a);
                        this.bdb = au()
                    }
                };
                ({
                    c: [JFc, EFc]
                } = C6(KFc, [], [pc], v6));
                EFc();
                var F6;
                new(CFc = class extends B6 {
                    constructor() {
                        super(F6);
                        FFc()
                    }
                }, (() => {
                    class a extends(GFc = v6) {
                        static G(b) {
                            L(b, {
                                LLa: r6,
                                bounds: r6
                            })
                        }
                        get LLa() {
                            const b = this.props.viewport,
                                c = this.props.fz,
                                d = this.props.gz;
                            return b == null || !c && !d ? b : r6(() => {
                                const e = b.get().ob();
                                return pm({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.sheet,
                                c = this.props.ui,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.mL,
                                g = this.props.fz,
                                h = this.props.gz;
                            return h6("div", {
                                ref: this.fIa,
                                className: i6("i0YQww",
                                    this.props.className),
                                children: [g6("div", {
                                    ref: this.H8a,
                                    className: "vUKoKg",
                                    children: g6("div", {
                                        ref: this.I8a,
                                        children: g6(G6, {
                                            sheet: b,
                                            container: d,
                                            ui: c,
                                            bounds: e,
                                            Mr: this.props.Mr,
                                            Kv: this.props.Kv,
                                            QG: this.props.QG,
                                            fj: this.props.fj,
                                            z6: this.props.z6,
                                            lb: this.props.lb,
                                            da: this.props.da,
                                            AW: this.AW,
                                            Fea: this.Fea,
                                            IY: this.IY
                                        })
                                    })
                                }), g6(this.qua, {}), f && g6(f, {
                                    sheet: b,
                                    range: e,
                                    fz: g,
                                    gz: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = q6(() => {
                                    var h = this.props,
                                        k = h.da,
                                        l = h.sheet,
                                        m = h.ui,
                                        n = h.lb,
                                        p = this.fIa.current;
                                    const q = this.H8a.current;
                                    h =
                                        this.I8a.current;
                                    var r = this.bounds,
                                        t = r.jc;
                                    const u = r.sd,
                                        w = r.ac;
                                    r = r.kd;
                                    k = k ? k.get() : 1;
                                    const {
                                        width: y,
                                        height: B
                                    } = m.get();
                                    n = (m = w && t && r && u ? GB(n.$a, l, {
                                        la: w,
                                        column: t
                                    }, {
                                        la: r,
                                        column: u
                                    }) ? .ob() : void 0) ? m.width : y;
                                    t = m ? m.height : B;
                                    p && (p.style.width = `${n*k}px`, p.style.height = `${t*k}px`);
                                    q && (q.style.width = `${n*k}px`, q.style.height = `${t*k}px`);
                                    l = l.direction === "rtl";
                                    l = m ? m.left * k * (l ? 1 : -1) : 0;
                                    p = m ? -m.top * k : 0;
                                    h && (h.style.transform = `translate(${l}px, ${p}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.T8;
                            const e = this.props.fz,
                                f = this.props.gz,
                                g = e || f ? d ? .(c, e, f) : void 0;
                            d = q6(() => {
                                const h = this.fIa.current;
                                if (h != null) {
                                    var k = e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const q = g.get();
                                        h.style.position = q.position ? ? k;
                                        h.style.top = q.top ? ? l;
                                        h.style.left = p ? "unset" : q.left ? ? m;
                                        h.style.right = p ? q.right ? ? n : "unset";
                                        h.style.transform = q.transform ? ? "unset"
                                    }
                                }
                            });
                            __c.fc(this, [b, d])
                        }
                        get bounds() {
                            var b =
                                this.props.sheet,
                                c = this.props.lb,
                                d = this.props.range;
                            const e = c.layout.xk.Hh(b);
                            b = c.layout.xk.xh(b);
                            if (b.empty || e.empty) return {
                                jc: void 0,
                                sd: void 0,
                                ac: void 0,
                                kd: void 0
                            };
                            c = d.jc;
                            const f = d.sd,
                                g = d.ac;
                            d = d.kd;
                            const h = b.first(),
                                k = e.first(),
                                l = b.last(),
                                m = e.last();
                            return {
                                jc: c ? b.has(c) ? c : void 0 : h,
                                sd: f ? b.has(f) ? f : void 0 : l,
                                ac: g ? e.has(g) ? g : void 0 : k,
                                kd: d ? e.has(d) ? d : void 0 : m
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.fIa = (F6.G(this), au());
                            this.H8a = au();
                            this.I8a = au();
                            this.IY = new LFc;
                            this.LSb = r6(() => [...this.AW.get().keys()].sort((c,
                                d) => this.props.lb.layout.zg.Hh(this.props.sheet).mf(c, d)), {
                                equals: __c.sl()
                            });
                            this.JSb = r6(() => [...this.Fea.get().keys()].sort((c, d) => this.props.lb.layout.zg.xh(this.props.sheet).mf(c, d)), {
                                equals: __c.sl()
                            });
                            this.qua = k6(() => g6(this.props.Okb, {
                                AW: this.LSb,
                                KSb: this.JSb,
                                Hwb: this.IY.zka,
                                range: this.props.range
                            }));
                            this.AW = r6(() => {
                                const c = this.props.sheet;
                                var d = this.props.da;
                                const e = this.props.lb;
                                var f = this.LLa ? .get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d,
                                    k = !f && g.ac && g.jc && g.kd && g.sd ? GB(e.$a, c, {
                                        la: g.ac,
                                        column: g.jc
                                    }, {
                                        la: g.kd,
                                        column: g.sd
                                    }) ? .ob() : void 0;
                                const l = f ? f.qa.y - h : k ? .top ? ? 0;
                                f = f ? f.br.y + h : k ? .height ? ? 0;
                                h = new Map;
                                k = e.layout.xk.Hh(c);
                                const m = e.layout.zg.Hh(c);
                                for (let n = g.ac; n != null && g.kd != null && k.mf(n, g.kd) <= 0; n = k.next(n)) {
                                    if (!m.has(n)) continue;
                                    const p = e.$a.ma(c, n);
                                    if (!(p + n.height < l)) {
                                        if (p > f) break;
                                        h.set(n, p * d)
                                    }
                                }
                                return h
                            }, {
                                equals: GEc.shallow
                            });
                            this.Fea = r6(() => {
                                const c = this.props.sheet;
                                var d = this.props.da;
                                const e = this.props.lb;
                                var f = this.LLa ? .get();
                                if (f &&
                                    (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d,
                                    k = !f && g.ac && g.jc && g.kd && g.sd ? GB(e.$a, c, {
                                        la: g.ac,
                                        column: g.jc
                                    }, {
                                        la: g.kd,
                                        column: g.sd
                                    }) ? .ob() : void 0;
                                const l = f ? f.qa.x - h : k ? .left ? ? 0;
                                f = f ? f.br.x + h : k ? .width ? ? 0;
                                h = new Map;
                                k = e.layout.xk.xh(c);
                                const m = e.layout.zg.xh(c);
                                for (let n = g.jc; n != null && g.sd != null && k.mf(n, g.sd) <= 0; n = k.next(n)) {
                                    if (!m.has(n)) continue;
                                    const p = e.$a.ta(c, n);
                                    if (!(p + n.width < l)) {
                                        if (p > f) break;
                                        h.set(n, p * d)
                                    }
                                }
                                return h
                            }, {
                                equals: GEc.shallow
                            })
                        }
                    }({
                        c: [F6, FFc]
                    } = C6(a, [], [pc],
                        GFc))
                })(), CFc);
                var LFc = class {
                        constructor() {
                            this.cells = new BFc;
                            this.pJa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = y6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.zka = (a, b) => {
                                let c = this.cells.get([a, b]);
                                c == null && (c = y6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], c));
                                return c.get() ? .BVa
                            }
                        }
                    },
                    G6;
                new(DFc = class extends B6 {
                    constructor() {
                        super(G6);
                        HFc()
                    }
                }, (() => {
                    class a extends(IFc = v6) {
                        static G(b) {
                            L(b, {
                                $P: y6.shallow,
                                Bt: r6,
                                PSa: z6,
                                Zha: z6.bound
                            })
                        }
                        get Bt() {
                            const b = this.props.Mr ? .get();
                            if (b != null && b.length !== 0) return new __c.fw(b)
                        }
                        render() {
                            return h6("div", {
                                onMouseDown: this.props.Kv ? .onMouseDown,
                                onTouchStart: this.props.Kv ? .onTouchStart,
                                ref: MEc(this.bd, this.Bt ? .xj),
                                children: [g6("div", {
                                    ref: this.oxa,
                                    className: "_5YlOqQ"
                                }), g6("div", {
                                    ref: this.qxa,
                                    className: "_XCmKw"
                                }), this.$P.map(b => b.FIb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                s6(() => [this.props.sheet, this.props.Fea.get(), this.props.AW.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.gpb();
                                    this.PSa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = q6(() => {
                                    var e = this.props,
                                        f = e.da;
                                    e = e.ui;
                                    const g = this.bd.current;
                                    if (g) {
                                        f = f ? f.get() : 1;
                                        const {
                                            width: h,
                                            height: k
                                        } = e.get();
                                        g.style.width = `${h*f}px`;
                                        g.style.height = `${k*f}px`
                                    }
                                }),
                                d = this.$P.map(e => yEc(e));
                            __c.fc(this, [c, b, ...d])
                        }
                        gpb() {
                            const b = z(this.oxa.current),
                                c = z(this.qxa.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.aPa.length = 0;
                            this.$P.length = 0
                        }
                        PSa(b, c) {
                            const d =
                                z(this.oxa.current),
                                e = z(this.qxa.current),
                                f = [],
                                g = new Map;
                            for (const h of this.aPa) c.has(h.la) ? g.set(h.la, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new MFc(this.Zha, h), d.appendChild(c.Xga), e.appendChild(c.Zga), this.aPa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        Zha(b, c) {
                            const d = this.props.z6,
                                e = this.props.lb,
                                f = this.props.sheet,
                                g = this.props.container,
                                h = this.props.IY;
                            b = new NFc(this.props.QG, this.props.fj, d(b, c), e, f, b, c, g, h.pJa, this.Kka, this.Jka);
                            __c.fc(this, yEc(b));
                            this.$P.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.bd = (G6.G(this), au());
                            this.oxa = au();
                            this.qxa = au();
                            this.aPa = [];
                            this.$P = [];
                            this.Kka = A6(c => {
                                const d = this.props.AW.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.Jka = A6(c => {
                                const d = this.props.Fea.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [G6, HFc]
                    } = C6(a, [], [pc], IFc))
                })(), DFc);
                var MFc = class {
                        static G(a) {
                            L(a, {
                                update: z6
                            })
                        }
                        update(a, b, c) {
                            [this.Xga, this.Zga].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.la = b;
                            for (const [d] of c) c = this.$P.get(d), c || (c = this.Zha(d, b), this.$P.set(d, c), this.Xga.appendChild(c.Wga), this.Zga.appendChild(c.qR)), c.update(b)
                        }
                        hide() {
                            [this.Xga, this.Zga].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.Zha = a;
                            this.la = b;
                            this.Xga = (MFc.G(this), document.createElement("div"));
                            this.Zga =
                                document.createElement("div");
                            this.$P = new Map
                        }
                    },
                    NFc = class {
                        static G(a) {
                            L(a, {
                                Oha: y6.ref,
                                la: y6.ref,
                                update: z6,
                                Oy: r6,
                                attrs: r6.struct,
                                DEa: r6,
                                EH: r6,
                                renderer: r6,
                                BVa: r6.struct
                            })
                        }
                        update(a) {
                            a !== this.la && (this.la = a, this.rD.la = a, this.Vza && this.Vza(), this.Vza = this.pJa(this.la, this.col, this))
                        }
                        get FIb() {
                            return this.Oha
                        }
                        get Oy() {
                            const a = this.sheet.layout.cells.get(this.la, this.col);
                            return a ? a.ref : void 0
                        }
                        get attrs() {
                            const a = this.rD.attrs;
                            return {
                                yh: a ? .yh,
                                textAlign: a ? .textAlign,
                                direction: a ? .direction,
                                link: a ? .link,
                                fontSize: a ? .fontSize,
                                color: a ? .color,
                                bE: a ? .bE
                            }
                        }
                        get DEa() {
                            var a = this.rD.span;
                            if (!a) return !1;
                            if (a.ac === a.kd && a.jc === a.sd) return !0;
                            var b = this.Kka("first");
                            const c = this.Kka("last"),
                                d = this.Jka("first"),
                                e = this.Jka("last");
                            if (!(b && c && d && e)) return !1;
                            const f = this.lb.layout.xk.Hh(this.sheet),
                                g = this.lb.layout.xk.xh(this.sheet);
                            b = f.mf(a.ac, b) >= 0 && f.mf(a.ac, c) <= 0 ? a.ac : b;
                            a = g.mf(a.jc, d) >= 0 && g.mf(a.jc, e) <= 0 ? a.jc : d;
                            return b === this.la && a === this.col
                        }
                        get EH() {
                            const a = this.sheet,
                                b = this.la,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                container: {
                                    config: a
                                },
                                la: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.SS(c, b);
                                case "sheet-item":
                                    return this.container.SS(c, b);
                                case "sheet-element":
                                    return this.container.SS(c, b);
                                default:
                                    throw new A(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Oy;
                            if (a && this.DEa && (a.content.ref || a.Ga.ref)) return this.QG({
                                context: {
                                    container: this.EH,
                                    attrs: this.attrs
                                },
                                ds: this.ZGa,
                                fj: this.fj
                            })
                        }
                        get BVa() {
                            this.CVa.reportObserved();
                            var a = IEc(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.tba : this.NH, a.childNodes.length !==
                                    0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            this.QG = a;
                            this.rD = c;
                            this.lb = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.pJa = k;
                            this.Kka = l;
                            this.Jka = m;
                            this.Wga = (NFc.G(this), document.createElement("div"));
                            this.qR = document.createElement("div");
                            this.SL = document.createElement("div");
                            this.NH = document.createElement("div");
                            this.tba = document.createElement("div");
                            this.CVa = HEc("content size atom");
                            this.ZGa = z6(() => this.CVa.reportChanged());
                            this.la = g;
                            this.Wga.className = "_2JFriw";
                            this.qR.className = "imy9ug";
                            this.SL.className = i6("pDMp7w", {
                                _0yZ6Qg: this.Oy ? .content.ref ? .type !== "text3",
                                qhF5uA: this.Oy ? .content.ref ? .type !== "text3" && this.Oy ? .content.ref ? .type !== "text2"
                            });
                            this.NH.className = "_30B9pw";
                            this.SL.appendChild(this.NH);
                            this.qR.appendChild(this.SL);
                            this.tba.className = "G7zH2w";
                            this.Vza = k(this.la, this.col, this);
                            this.fj = n => g6(b, { ...n,
                                ds: this.ZGa
                            })
                        }
                    };
                var OFc, PFc, QFc, t6;
                new(OFc = class extends B6 {
                    constructor() {
                        super(t6);
                        PFc()
                    }
                }, (() => {
                    class a extends(QFc = v6) {
                        static G(b) {
                            L(b, {
                                mka: r6
                            })
                        }
                        render() {
                            const {
                                sheet: b,
                                container: c,
                                ui: d,
                                lb: e,
                                Mr: f,
                                Kv: g,
                                T8: h,
                                QG: k,
                                Nf: l,
                                fj: m,
                                viewport: n,
                                mL: p,
                                phb: q = !1
                            } = this.props, r = b.direction === "ltr" ? "TA4X7w" : "WvuqMw", t = e.layout.zg.Hh(b);
                            if (!e.layout.zg.xh(b).empty && !t.empty) return g6("div", {
                                className: i6("SNkrHw", r, {
                                    RaA0Nw: q
                                }),
                                ...l,
                                children: g6(JFc, {
                                    QG: k,
                                    fj: m,
                                    Okb: this.qua,
                                    z6: this.z6,
                                    lb: e,
                                    sheet: b,
                                    container: c,
                                    ui: d,
                                    Mr: f,
                                    Kv: g,
                                    T8: h,
                                    da: this.da,
                                    viewport: n,
                                    mL: p,
                                    mka: this.mka
                                })
                            })
                        }
                        get mka() {
                            var b = this.props.sheet,
                                c = this.props.lb;
                            const d = {},
                                e = c.layout.xk.v8(b),
                                f = c.layout.xk.u8(b);
                            var g = c.layout.xk.Hh(b),
                                h = c.layout.xk.xh(b);
                            b = g.first();
                            c = g.last();
                            const k = h.first(),
                                l = h.last();
                            if (b != null && c != null && k != null && l != null) return h = f ? h.next(f) : k, g = e ? g.next(e) : b, e && f && (d.pTa = {
                                range: {
                                    jc: k,
                                    ac: b,
                                    sd: f,
                                    kd: e
                                }
                            }), e && h && (d.Chb = {
                                range: {
                                    jc: h,
                                    ac: b,
                                    sd: l,
                                    kd: e
                                }
                            }), f && g && (d.U0a = {
                                range: {
                                    jc: k,
                                    ac: g,
                                    sd: f,
                                    kd: c
                                }
                            }), g && h && (d.sgb = {
                                range: {
                                    jc: h,
                                    ac: g,
                                    sd: l,
                                    kd: c
                                }
                            }), d
                        }
                        get da() {
                            return this.props.da ?
                                this.props.da : r6(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.qua = (t6.G(this), k6(c => {
                                const {
                                    sheet: d,
                                    ui: e,
                                    lb: f,
                                    XDa: g,
                                    da: h,
                                    yga: k = "hidden"
                                } = this.props;
                                return g6(D6, {
                                    sheet: d,
                                    lb: f,
                                    range: c.range,
                                    ui: e,
                                    da: h,
                                    children: g6(zFc, { ...c,
                                        sheet: d,
                                        lb: f,
                                        da: this.da,
                                        XDa: g,
                                        overflow: k
                                    })
                                })
                            }));
                            this.z6 = (c, d) => new __c.lRa(this.props.km, this.props.lb, this.props.fD, this.props.sheet, c, d, this.da, this.Qw, this.Sw);
                            this.Qw = (c, d) => this.props.Qw ? .(this.props.sheet, c, d);
                            this.Sw = (c, d) => this.props.Sw ? .(this.props.sheet, c, d)
                        }
                    }({
                            c: [t6, PFc]
                        } =
                        C6(a, [], [pc], QFc))
                })(), OFc);
                __c.vRa = {
                    Rzb: function(a) {
                        const b = a.Wu,
                            c = a.be,
                            d = a.Ud,
                            e = a.zo,
                            f = a.km,
                            g = a.lb,
                            h = a.fD,
                            k = a.y4;
                        fEc({
                            eD: a.eD,
                            lb: g,
                            og: a.og,
                            HOb: a.nV,
                            hb: a.hb
                        });
                        const l = AEc({
                            QG: k,
                            lb: g,
                            km: f,
                            fD: h
                        });
                        b.Mua = vEc({
                            Ps: l,
                            lb: g
                        });
                        c.rua = mEc({
                            Ps: l
                        });
                        ({
                            Skb: a
                        } = tEc({
                            Ps: l,
                            Te: e(),
                            Zcb: new qFc,
                            lb: g
                        }));
                        d.kr.Lua = a;
                        const {
                            Gib: m,
                            Hib: n,
                            Fib: p
                        } = lEc({
                            lb: g
                        });
                        return {
                            SQa: k6(q => g6(OEc, { ...q,
                                container: void 0,
                                Ps: l,
                                Rkb: m,
                                Tkb: n,
                                Pkb: p,
                                fj: PEc
                            }))
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/87c21040175b9400.js.map