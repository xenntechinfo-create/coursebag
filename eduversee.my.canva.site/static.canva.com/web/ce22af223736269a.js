(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [45522], {

        /***/
        563790: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var ZC = __c.ZC;
                var bd = __c.bd;
                var li = __c.li;
                var Mj = __c.Mj;
                var O = __c.O;
                var YC = __c.YC;
                var fy = __c.fy;
                var y = __c.y;
                var N = __c.N;
                var lj = __c.lj;
                var x = __c.x;
                var jnc = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of e) {
                                d = l.fa;
                                var g = m.column,
                                    h = a.layout.cells.get(d, g);
                                if (!h || (l.boundary === "start" ? h.span.Nb === d : h.span.Rc === d))
                                    if (d = c.get(`${g.id}:${d.id}`), d = l.boundary === "start" ? d ? .ja : d ? .va) {
                                        h = f[f.length - 1];
                                        g = (g = b.next(g)) ? {
                                            column: g,
                                            boundary: "start"
                                        } : {
                                            column: x(b.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Pka, k = k.column === m.column && k.boundary === m.boundary;
                                        k && (k = h.MPa, k = k.fa === l.fa && k.boundary === l.boundary);
                                        k && h.color === d.color && h.weight === d.weight &&
                                            h.Xc === d.Xc && h.Xc === 0 ? h.Pka = g : f.push({
                                                MPa: l,
                                                yib: m,
                                                Pka: g,
                                                color: d.color,
                                                weight: d.weight,
                                                Xc: d.Xc
                                            })
                                    }
                            }
                        return f
                    },
                    knc = function(a, b, c, d, e, f) {
                        const g = [];
                        for (const m of e)
                            for (const n of d) {
                                var h = n.fa,
                                    k = m.column;
                                e = a.layout.cells.get(h, k);
                                if (!e || (m.boundary === "start" ? e.span.Sb === k : e.span.Yc === k))
                                    if (e = c.get(`${k.id}:${h.id}`), (e = m.boundary === "start" ? e ? .qa : e ? .Ha) && (m.boundary !== "start" || f(h, k) !== 1)) {
                                        k = g[g.length - 1];
                                        h = (h = b.next(h)) ? {
                                            fa: h,
                                            boundary: "start"
                                        } : {
                                            fa: x(b.last()),
                                            boundary: "end"
                                        };
                                        var l;
                                        if (l = k) l = k.qBa, l = l.column ===
                                            m.column && l.boundary === m.boundary;
                                        l && (l = k.Tka, l = l.fa === n.fa && l.boundary === n.boundary);
                                        l && k.color === e.color && k.weight === e.weight && k.Xc === e.Xc && k.Xc === 0 ? k.Tka = h : g.push({
                                            qBa: m,
                                            Iib: n,
                                            Tka: h,
                                            color: e.color,
                                            weight: e.weight,
                                            Xc: e.Xc
                                        })
                                    }
                            }
                        return g
                    },
                    lnc = function(a, b, c, d, e, f) {
                        const g = a.YRa.D1a(d, b.last(), c.last());
                        a = (r, t) => {
                            const u = g.get(r) || 0,
                                z = g.get(t) || 0;
                            return u <= z ? r : t
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
                        (l = b.previous(e[0].fa)) && f.push({
                            fa: l,
                            boundary: "start"
                        });
                        f.push(...e);
                        (e = b.next(e[e.length - 1].fa)) && f.push({
                            fa: e,
                            boundary: "start"
                        });
                        for (const r of k) {
                            k = (e = r.boundary === "start" ? r.column : void 0) ? c.previous(e) : c.last();
                            for (const t of f) {
                                var m = t.boundary === "start" ? t.fa : void 0;
                                l = m ? b.previous(m) : b.last();
                                var n = e && m && d.get(`${e.id}:${m.id}`),
                                    p = e && l && d.get(`${e.id}:${l.id}`);
                                m = k && m && d.get(`${k.id}:${m.id}`);
                                var q = k && l && d.get(`${k.id}:${l.id}`);
                                l = r.boundary === "end" ? m ? .Ha : n ? .qa;
                                n = t.boundary === "end" ? p ? .va : n ? .ja;
                                p = r.boundary === "end" ? q ? .Ha : p ? .qa;
                                m = t.boundary === "end" ? q ? .va : m ? .ja;
                                q = __c.Kha({
                                    ja: p,
                                    va: l,
                                    qa: m,
                                    Ha: n
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
                                    height: z,
                                    width: A
                                } = u ? .Xc === 1 ? {
                                    height: u.weight,
                                    width: u.weight
                                } : {
                                    height: Math.max(m ? .weight || 0, n ? .weight || 0),
                                    width: Math.max(p ? .weight || 0, l ? .weight || 0)
                                };
                                h.set(Y4(r, t), __c.Xl(q, z / 2, A / 2))
                            }
                        }
                        return h
                    },
                    mnc = function(a, b, c, d, e, f, g, h) {
                        if (f.length === 0 || g.length === 0) return [];
                        const k = jnc(b, d, e, f, g);
                        h = knc(b, c, e, f, g, h);
                        const l = lnc(a, c, d, e, f, g),
                            m = a.$6a(c),
                            n = a.u6a(b, d),
                            p = b.direction === "rtl";
                        a = k.map(q => {
                            var r = q.yib,
                                t = q.Pka,
                                u = q.MPa;
                            const z = q.color,
                                A = q.weight;
                            q = q.Xc;
                            const B = p ? -1 : 1,
                                D = l.get(Y4(r, u)) ? .Ha,
                                F = l.get(Y4(t, u)) ? .qa;
                            if (D != null && F != null) {
                                var I = x(m.get(u.fa)),
                                    K = x(n.get(r.column));
                                r = x(n.get(t.column));
                                u = u.boundary === "start" ? I.start : I.end;
                                I = K.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: z,
                                    weight: A,
                                    Xc: q,
                                    p1: new lj(I + D * B, u),
                                    p2: new lj(t + F * B, u),
                                    ...__c.bm((t - I) * B, q * A, D)
                                }
                            }
                        }).filter(__c.Db);
                        return [...h.map(q => {
                            var r = q.qBa,
                                t = q.Iib,
                                u = q.Tka;
                            const z = q.color,
                                A = q.weight;
                            q = q.Xc;
                            const B = l.get(Y4(r, t)) ? .va,
                                D = l.get(Y4(r, u)) ? .ja;
                            if (B != null && D != null) {
                                var F = x(n.get(r.column)),
                                    I = x(m.get(t.fa));
                                t = x(m.get(u.fa));
                                r = r.boundary === "start" ? F.start : F.end;
                                F = I.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: z,
                                    weight: A,
                                    Xc: q,
                                    p1: new lj(r, F + B),
                                    p2: new lj(r, u + D),
                                    ...__c.bm(u - F, q * A, B)
                                }
                            }
                        }).filter(__c.Db), ...a]
                    },
                    nnc = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Wl(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Wl(d, e => `${e.Ik}_${e.Jk}`);
                            for (const [, e] of a) {
                                const {
                                    Jk: f,
                                    Ik: g
                                } = e[0];
                                a = __c.Wl(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Ik: g,
                                    Jk: f
                                })
                            }
                        }
                        return b
                    },
                    onc = function(a, b, c, d, e) {
                        return a.Yfb(b, c, d, e)
                    },
                    pnc = function(a, b, c, d, e, f, g, h) {
                        var k = __c.ZDb;
                        const l = f.get().flatMap(p => d.last() === p ? [{
                                fa: p,
                                boundary: "start"
                            }, {
                                fa: p,
                                boundary: "end"
                            }] : [{
                                fa: p,
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
                            for (const q of g.get())(f = onc(k.YRa, a, b, c, {
                                column: q,
                                fa: p
                            })) && n.set(`${q.id}:${p.id}`, f);
                        a = mnc(k, a, d, e, n, l, m, h);
                        return nnc(a)
                    },
                    qnc = function(a) {
                        switch (a) {
                            case 2:
                                return N("ibdecg");
                            case 7:
                                return N("446quA");
                            case 5:
                                return N("j1fbqg");
                            case 1:
                                return N("O5i4AQ");
                            case 6:
                                return N("C0VHsg");
                            case 4:
                                return N("9ND0kg");
                            case -1:
                                return N("RWqnLA");
                            case 9:
                                return N("nQR/7w");
                            case -2:
                                return N("P23rtA");
                            case 3:
                                return N("+IXmVg");
                            default:
                                throw new y(a);
                        }
                    },
                    Z4 = function() {
                        const [a] = (0, __c.yb)(() => fy());
                        return a
                    },
                    $4 = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.J)(a, { ...b
                            })
                        })
                    },
                    snc = function(a) {
                        var b = a.KE;
                        const c = a.content,
                            d = a.context,
                            e = a.tp;
                        __c.w(c ? .pg ? .type === "formula");
                        const f = c.Zi;
                        a = {
                            type: "dom",
                            render: g => g.innerText = ""
                        };
                        switch (f.type) {
                            case 9:
                                b = a;
                                break;
                            case 6:
                                b = b.Yfa ? .({
                                    content: __c.jh(__c.U8a, { ...__c.tsb,
                                        value: f.value
                                    }),
                                    context: d,
                                    tp: e
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                b =
                                    b.aga ? .({
                                        context: d,
                                        value: c.rz,
                                        valueType: c.Zi.type
                                    });
                                break;
                            case 0:
                                b = {
                                    type: "react",
                                    node: a5(__c.Xo, {
                                        label: qnc(f.error),
                                        children: a5(rnc, {
                                            tone: "critical"
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new y(f);
                        }
                        return b ? ? a
                    },
                    wnc = function(a) {
                        const b = a.KE,
                            c = a.cb,
                            d = a.mh,
                            e = a.kjb,
                            f = a.hb;
                        b.aga = g => __c.vSa({ ...g,
                            hb: f
                        });
                        b.Vxa = g => snc({ ...g,
                            KE: b
                        });
                        b.Uxa = g => tnc({ ...g
                        });
                        b.Yfa = $4(unc({
                            mh: d,
                            tP: void 0,
                            cb: c
                        }));
                        b.Xxa = vnc(e, f);
                        b.Yxa = $4(g => a5(b5, { ...g,
                            hb: f
                        }))
                    },
                    xnc = function({
                        label: a,
                        Im: b,
                        width: c,
                        height: d,
                        scale: e,
                        vBa: f
                    }) {
                        return a5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: c5(__c.So, {
                                className: d5("ivlMMQ", e5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && a5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    e5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    znc = function({
                        Sk: a,
                        tHa: b,
                        scale: c,
                        Zo: d,
                        onMouseDown: e,
                        onTouchStart: f,
                        ap: g,
                        bWa: h,
                        ACa: k
                    }) {
                        const l = f5(() => {
                                const q = d ? .get();
                                if (q != null &&
                                    q.length !== 0) return new __c.Zy(q)
                            }, [d]),
                            m = g(1),
                            n = g(c),
                            p = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return a5(__c.To, {
                            Kn: "light",
                            light: "light",
                            hq: "light",
                            dark: "light",
                            children: q => a5("div", {
                                className: d5("ze9QCQ", p, q.className),
                                style: {
                                    width: n,
                                    height: n
                                },
                                children: a5("div", {
                                    style: {
                                        width: m,
                                        height: m,
                                        transform: `scale(${c})`
                                    },
                                    className: d5("N7J3UA", p),
                                    onMouseDown: e,
                                    onTouchStart: f,
                                    ref: l ? .hl,
                                    children: a5(__c.ap, {
                                        className: d5("m8CFdg", p, {
                                            G6wL4w: h,
                                            W_E0wA: b,
                                            _52RFdg: k === "move"
                                        }),
                                        ariaLabel: N("ruWN9A"),
                                        children: a5(ync, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Bnc = function({
                        cb: a
                    }) {
                        const b = new Anc,
                            c = new __c.GQ,
                            d = g5(g => {
                                const {
                                    scale: h = 1,
                                    qHa: k,
                                    size: l = "small",
                                    bWa: m = !0
                                } = g, n = h5(p => b.ap({
                                    scale: p,
                                    size: l,
                                    tpa: k
                                }), [l, k]);
                                return a5(znc, { ...g,
                                    scale: k ? Math.max(h, k) : h,
                                    Sk: g.sheet.direction === "rtl",
                                    tHa: g.selection != null && b.i$a(g.sheet, a, g.selection),
                                    ap: n,
                                    bWa: m,
                                    ACa: g.ACa,
                                    onMouseDown: g.onMouseDown,
                                    onTouchStart: g.onTouchStart
                                })
                            }),
                            e = g5(g => {
                                const {
                                    scale: h = 1,
                                    qHa: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    Mgb: p
                                } = g, q = h5(A => b.ap({
                                    scale: A,
                                    size: l,
                                    tpa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = h5(A =>
                                    n != null && b.usa(n).has(A), [n]), u = h5(A => n != null && b.Y7a(m, a, n).has(A), [m, n]), z = h5(A => {
                                    var B = a.layout.cj.sg(m);
                                    B = p != null && B.ue(A, p.Sb) >= 0 && B.ue(A, p.Yc) <= 0;
                                    return t(A) ? B ? "secondary-active" : "primary-active" : u(A) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, u, t]);
                                return a5(i5, { ...g,
                                    Vc: h,
                                    pd: r,
                                    ap: q,
                                    bD: z,
                                    cE: c,
                                    cb: a
                                })
                            }),
                            f = g5(g => {
                                const {
                                    scale: h = 1,
                                    qHa: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    Mgb: p
                                } = g, q = h5(A => b.ap({
                                    scale: A,
                                    size: l,
                                    tpa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = h5(A => n != null && b.wsa(n).has(A), [n]), u = h5(A => n != null && b.Z7a(m, a, n).has(A), [m, n]), z = h5(A => {
                                    var B = a.layout.cj.Ag(m);
                                    B = p != null && B.ue(A, p.Nb) >= 0 && B.ue(A, p.Rc) <= 0;
                                    return t(A) ? B ? "secondary-active" : "primary-active" : u(A) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, u, t]);
                                return a5(j5, { ...g,
                                    Vc: r,
                                    pd: h,
                                    ap: q,
                                    bD: z,
                                    cE: c,
                                    cb: a
                                })
                            });
                        return {
                            AWa: d,
                            zWa: e,
                            BWa: f
                        }
                    },
                    Cnc = function(a) {
                        const b = a.Sp,
                            c = () => null;
                        return __c.ny(d => a5(k5, { ...d,
                            Sp: b,
                            Uh: c
                        }))
                    },
                    Dnc = function({
                        sheet: a,
                        cb: b,
                        gh: c,
                        aa: d,
                        range: e,
                        dg: f
                    }) {
                        l5(() => m5(() => {
                            if (f.current !=
                                null) {
                                var g = d ? .get() ? ? 1,
                                    h = c.get(),
                                    k = e ? YC(b.Wa, a, {
                                        fa: e.Nb,
                                        column: e.Sb
                                    }, {
                                        fa: e.Rc,
                                        column: e.Yc
                                    }) ? .tb() : void 0,
                                    l = a.direction === "rtl";
                                f.current.style.transform = `translate(${k?k.left*g*(l?1:-1):0}px, ${k?-k.top*g:0}px)`;
                                f.current.style.width = `${h.width*g}px`;
                                f.current.style.height = `${h.height*g}px`
                            }
                        }), [a, c, b.layout.Cf, b.Wa, e, f, d])
                    },
                    Gnc = function({
                        onScroll: a
                    }) {
                        const b = new Enc(a);
                        return {
                            oB: b,
                            Lfa: g5(c => a5(Fnc, {
                                sheet: c.sheet,
                                oB: b,
                                children: c.children
                            }))
                        }
                    },
                    Jnc = function(a) {
                        const b = a.Sp,
                            c = a.cf,
                            d = a.ZRa,
                            e = a.cb,
                            f = ({
                                children: m
                            }) =>
                            m,
                            g = ({
                                children: m
                            }) => a5("div", {
                                className: "Vc5nkQ",
                                children: m
                            }),
                            {
                                oB: h,
                                Lfa: k
                            } = Gnc({
                                onScroll: a.onScroll
                            });
                        class l extends Hnc {
                            get MJ() {
                                const m = this.props.ga.Gr,
                                    n = this.props.Ab;
                                switch (m) {
                                    case "screen":
                                        return k;
                                    case "print":
                                        return n.uj != null ? g : f;
                                    default:
                                        throw new y(m);
                                }
                            }
                            componentDidMount() {
                                d.PRa(this.props.item, {
                                    Ab: this.props.Ab,
                                    ga: this.props.ga
                                })
                            }
                            componentWillUnmount() {
                                d.w0a(this.props.item, {
                                    Ab: this.props.Ab,
                                    ga: this.props.ga
                                })
                            }
                            render() {
                                d.PRa(this.props.item, {
                                    Ab: this.props.Ab,
                                    ga: this.props.ga
                                });
                                return a5(Inc, { ...this.props,
                                    aa: this.aa,
                                    Sp: b,
                                    MJ: this.MJ,
                                    Uh: this.Uh,
                                    ZRa: d,
                                    cb: e,
                                    oB: h
                                })
                            }
                            constructor(...m) {
                                super(...m);
                                this.aa = n5(() => {
                                    const n = this.props.item;
                                    var p = this.props.ga,
                                        q = p.Gr;
                                    p = p.qk;
                                    const r = this.props.Ab;
                                    switch (q) {
                                        case "screen":
                                            return p;
                                        case "print":
                                            if (r.uj != null) return 1;
                                            q = d.e7a(n);
                                            if (!q) return 1;
                                            ({
                                                width: q
                                            } = new __c.Kn(n, q.Ab, {
                                                qk: p
                                            }));
                                            return q / n.config.width;
                                        default:
                                            throw new y(q);
                                    }
                                });
                                this.Uh = g5(n => a5("div", {
                                    className: "wKvivQ",
                                    children: a5(__c.DSa, { ...this.props,
                                        ...n,
                                        cf: c
                                    })
                                }))
                            }
                        }
                        return {
                            UXa: l,
                            oB: h
                        }
                    },
                    Lnc = function(a) {
                        const b =
                            a.Sp,
                            c = a.cb,
                            d = () => null;
                        return e => a5(Knc, { ...e,
                            Sp: b,
                            Uh: d,
                            cb: c
                        })
                    },
                    Onc = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                OAa: b,
                                sC: b,
                                Ta: {},
                                yz: {}
                            },
                            d = o5(() => a.Uy.style || c, g => {
                                Object.assign(a.I5.style, g.OAa);
                                Object.assign(a.DK.style, g.sC);
                                Object.assign(a.gG.style, g.Ta);
                                Object.assign(a.AC.style, g.yz);
                                g = g ? .Ta ? .textDecoration;
                                a.gG.classList.toggle("OQx3PQ", g === "underline");
                                a.gG.classList.toggle("_99ezUA", g === "line-through");
                                a.gG.classList.toggle("kppAqQ", g === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: Mnc
                            }),
                            e = o5(() => a.$na, g => {
                                a.gG.classList.toggle("_84KvRA", !g);
                                a.I5.classList.toggle("_84KvRA", !g);
                                a.DK.classList.toggle("TL_RLA", !g)
                            }, {
                                fireImmediately: !0
                            }),
                            f = o5(() => a.renderer, g => {
                                a.y6 && g ? .type !== "react" ? (a.y6 = void 0, a.M0.remove()) : a.AC.innerHTML = "";
                                switch (g ? .type) {
                                    case "react":
                                        a.y6 = Nnc(g.node, a.M0);
                                        a.AC.appendChild(a.M0);
                                        break;
                                    case "dom":
                                        g.render(a.AC);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new y(g);
                                }
                                a.Vpa()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e();
                            f()
                        }
                    },
                    Mnc = function(a,
                        b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    Qnc = function(a) {
                        const b = a.Py,
                            c = a.cb,
                            d = a.uk,
                            e = a.LB,
                            f = a.sVa,
                            g = new Pnc(d, c);
                        return h => a5(p5, { ...h,
                            LB: e,
                            cb: c,
                            uk: d,
                            Py: b,
                            Cna: g,
                            sVa: f ? .get()
                        })
                    };
                __c.aD.prototype.$ca = __c.ca(20, function(a, b, c) {
                    const d = [a];
                    for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                    return d
                });
                var Y4 = (a, b) => `${a.column.id}-${a.boundary}:${b.fa.id}-${b.boundary}`,
                    unc = ({
                        mh: a,
                        tP: b,
                        cb: c
                    }) => d => (0, __c.J)(__c.FGb, { ...d,
                        mh: a,
                        tP: b,
                        cb: c
                    }),
                    q5 = __webpack_require__(322594),
                    Rnc = q5.Fragment,
                    a5 = q5.jsx,
                    c5 = q5.jsxs;
                var Snc = __webpack_require__,
                    Tnc = Snc(208463),
                    d5 = Snc.n_x(Tnc)();
                var g5 = __webpack_require__(721226).PA;
                var r5 = __webpack_require__(205482),
                    s5 = r5.Component,
                    Hnc = r5.PureComponent,
                    h5 = r5.useCallback,
                    l5 = r5.useEffect,
                    Unc = r5.useLayoutEffect,
                    f5 = r5.useMemo,
                    t5 = r5.useRef;
                var u5 = __webpack_require__(186901),
                    n5 = u5.EW,
                    m5 = u5.fm,
                    v5 = u5.m3,
                    o5 = u5.mJ,
                    Vnc = u5.MN,
                    Wnc = u5.O8,
                    w5 = u5.sH,
                    x5 = u5.XI;
                var y5 = __webpack_require__(536618),
                    Xnc = y5.Aj,
                    z5 = y5.iB,
                    Ync = y5.uP;
                var A5 = __webpack_require__(277049)._;
                var B5 = __webpack_require__(269018)._;
                __webpack_require__(245307);
                var Znc = __webpack_require__(87387).A;
                var Nnc = __webpack_require__(419094).createPortal;
                var $nc = class {
                        static F(a) {
                            O(a, {
                                viewBox: w5.ref
                            })
                        }
                        constructor() {
                            this.viewBox = ($nc.F(this), Mj({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Ahb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    aoc = g5(a => {
                        var b = a.sheet.direction === "rtl";
                        b = {
                            H2wykw: !b,
                            UweldA: b
                        };
                        const c = t5(new $nc),
                            d = x5(() => {
                                if (a.Rea) {
                                    var g = a.Rea.current;
                                    g && c.current.Ahb(Mj({
                                        top: g.scrollTop,
                                        left: g.scrollLeft,
                                        height: g.clientHeight,
                                        width: g.clientWidth
                                    }))
                                }
                            });
                        l5(() => {
                            d();
                            a.Rea.current ? .addEventListener("scroll", d);
                            window ? .addEventListener("resize",
                                d);
                            return () => {
                                a.Rea.current ? .removeEventListener("scroll", d);
                                window ? .removeEventListener("resize", d)
                            }
                        }, [a.Rea, d]);
                        const e = f5(() => ({
                                get: () => c.current.viewBox
                            }), []),
                            f = f5(() => n5(() => __c.Fj(0, 0, a.sheet.width, a.sheet.height)), [a.sheet]);
                        return c5("div", {
                            className: d5("nMvVqA", b),
                            children: [c5("div", {
                                ref: a.dg,
                                className: "_0YOFPg",
                                children: [a5(a.Sp, { ...a,
                                    viewport: e,
                                    gh: f
                                }), a5("div", {
                                    className: d5("Gdl7fQ", b),
                                    children: a.vxa ? .get() ? .map((g, h) => a5(g, {}, h))
                                })]
                            }), a.Bxb === "visible" && c5(Rnc, {
                                children: [a5("div", {
                                    className: d5("_32sKQw",
                                        b),
                                    children: a5(a.RXa, { ...a
                                    })
                                }), a5("div", {
                                    className: d5("xdIsTQ", b),
                                    children: a5(a.VXa, { ...a
                                    })
                                }), a5("div", {
                                    className: d5("rsTRSA", b),
                                    children: a5(a.TXa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    boc = g5(a => {
                        a = a.content;
                        __c.v(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.stream.X;
                            case "text3":
                                return __c.Rv.snapshot(a.value).cells.X();
                            default:
                                throw new y(a);
                        }
                    });
                var coc = 1 / 13.334,
                    tnc = $4(g5(a => {
                        var b = a.context;
                        const c = a.value,
                            d = a.onChange,
                            e = b.attrs;
                        b = b.container.column;
                        __c.w(a.valueType === 3);
                        const f = h5(m => {
                                d ? .(c, m.target.checked)
                            }, [d, c]),
                            g = e.fontSize ? ? li.Hb.fontSize,
                            h = b.width;
                        a = f5(() => {
                            const m = 20 * g * coc;
                            return `${Math.round(m*Math.min(1,(h-__c.SQ*2)/m))}px`
                        }, [g, h]);
                        b = f5(() => {
                            var m = e.color ? ? li.Hb.color,
                                n = e.xz ? ? li.Hb.xz;
                            const {
                                h: p,
                                s: q,
                                ra: r
                            } = __c.en(m), t = __c.cn(new __c.Xm(p, q * .59, r * .69)).kw(), u = __c.cn(new __c.Xm(p, q * .68, r * .84)).kw(), z = __c.kn(__c.jn(__c.cn(m), .5));
                            return {
                                fBa: m,
                                l0a: t,
                                gBa: u,
                                m0a: n !== "transparent" ? n : "#ffffff",
                                n0a: z
                            }
                        }, [e]);
                        const k = __c.qo(),
                            l = h5(m => {
                                m.nativeEvent.cancelable && m.preventDefault();
                                m.stopPropagation();
                                x5(() => {
                                    d && d(c, !c)
                                })()
                            }, [d, c]);
                        return a5("label", {
                            className: d5("s5Xvtg", {
                                _0YWo_Q: k,
                                agLBbw: d == null
                            }),
                            onTouchEnd: l,
                            children: c5("div", {
                                className: "nOL94A",
                                style: {
                                    "--V8rdkw": a,
                                    "--6kHV0A": b.fBa,
                                    "--dhlyXQ": b.l0a,
                                    "--pMrTCg": b.gBa,
                                    "--EyYwbg": b.fBa,
                                    "--3ZWdlg": b.gBa,
                                    "--81jhOQ": b.m0a,
                                    "--Cs3XTw": b.n0a
                                },
                                children: [a5("input", {
                                    type: "checkbox",
                                    checked: c,
                                    onChange: x5(m => f(m)),
                                    className: "p8DDOg",
                                    hidden: !0
                                }), a5("span", {
                                    "aria-hidden": !0,
                                    className: d5("l_S_Ng", {
                                        iGjddQ: c
                                    }),
                                    children: a5(doc, {})
                                })]
                            })
                        })
                    })),
                    doc = () => a5("svg", {
                        className: "_8CNofA",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: a5("path", {
                            d: "M0.750977 4.5L3.25098 7L9.25098 1",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })
                    });
                var eoc = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var rnc = __c.BP({
                    medium: eoc
                });
                var vnc = (a, b) => __c.eSa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.stream.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            tg: c
                        } = __c.Rh(li, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            la: void 0,
                            writingMode: 1,
                            bd: "start",
                            ee: foc(e, c),
                            hb: b
                        })
                    }),
                    foc = z5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.stream.X.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: v5.structural
                    });
                var goc, hoc, ioc, b5;
                new(goc = class extends A5 {
                    constructor() {
                        super(b5);
                        hoc()
                    }
                }, (() => {
                    class a extends(ioc = s5) {
                        static F(b) {
                            O(b, {
                                tg: n5
                            })
                        }
                        get tg() {
                            return __c.Rh(li, this.props.context.attrs).tg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = a5(this.props.Uh, {
                                content: b,
                                fa: c.container.fa,
                                col: c.container.column,
                                tg: this.tg
                            });
                            return this.tg === "wrap" ? a5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.F(this)
                        }
                    }({
                        c: [b5, hoc]
                    } = B5(a, [], [bd], ioc))
                })(), goc);
                var joc = class {
                    static $ca(a, b, c) {
                        const d = [a];
                        for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    }
                    static JY(a, b, c) {
                        __c.v(a.layout.cols.has(b), "Column not found in sheet");
                        __c.v(a.layout.rows.has(c), "Row not found in sheet");
                        var d = a.layout.cells.get(c, b);
                        const {
                            Sb: e,
                            Nb: f,
                            Yc: g,
                            Rc: h
                        } = d ? .span || {
                            Sb: b,
                            Nb: c,
                            Yc: b,
                            Rc: c
                        };
                        b = a.ja(f);
                        c = a.ja(h) + h.height - b;
                        d = a.qa(e);
                        a = a.qa(g) + g.width - d;
                        return Mj({
                            top: b,
                            left: d,
                            width: a,
                            height: c
                        })
                    }
                };
                var koc = __c.Uo * 5,
                    loc = __c.Uo * 4;
                var Anc = class {
                    ap({
                        size: a,
                        scale: b,
                        tpa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? koc * b : loc * b
                    }
                    constructor() {
                        this.i$a = z5((a, b, c) => {
                            c = c.get();
                            const d = b.layout.cj.Ag(a);
                            a = b.layout.cj.sg(a);
                            return c != null && d.count() === (c.rows ? .size || 0) && a.count() === (c.columns ? .size || 0)
                        });
                        this.usa = Xnc(a => new Set(a.get() ? .columns || []), {
                            equals: __c.ck
                        });
                        this.wsa = Xnc(a => new Set(a.get() ? .rows || []), {
                            equals: __c.ck
                        });
                        this.Y7a = z5((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.wsa(c);
                            b = b.layout.cj.sg(a);
                            if (e.size >
                                0) return new Set(b);
                            c = this.usa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.fa, f.column);
                                for (const g of joc.$ca(d ? d.span.Sb : f.column, d ? d.span.Yc : f.column, b))(c.size === 0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.ck
                        });
                        this.Z7a = z5((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.usa(c);
                            b = b.layout.cj.Ag(a);
                            if (e.size > 0) return new Set(b);
                            c = this.wsa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.fa, f.column);
                                for (const g of joc.$ca(d ? d.span.Nb : f.fa, d ? d.span.Rc : f.fa, b))(c.size ===
                                    0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.ck
                        })
                    }
                };
                var moc, noc, ooc, poc, qoc, roc, soc = parseInt("4px", 10) || 4,
                    toc = parseInt("0.5px", 10) || .5,
                    uoc = parseInt("1px", 10) || 1,
                    voc = parseInt("0.5px", 10) || .5,
                    woc = parseInt("0.5px", 10) || .5,
                    xoc = parseInt("1px", 10) || 1,
                    yoc = parseInt("0.5px", 10) || .5,
                    i5;
                new(moc = class extends A5 {
                    constructor() {
                        super(i5);
                        ooc()
                    }
                }, (() => {
                    class a extends(poc = s5) {
                        static F(b) {
                            O(b, {
                                Sk: n5,
                                tx: n5,
                                A2: n5
                            })
                        }
                        get Sk() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get tx() {
                            const b = this.props.Zo ? .get();
                            if (b != null && b.length !== 0) return new __c.Zy(b)
                        }
                        get A2() {
                            return this.props.nma ? .() ? .get()
                        }
                        render() {
                            return a5(__c.To, {
                                Kn: "light",
                                light: "light",
                                hq: "light",
                                dark: "light",
                                children: this.R0a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (i5.F(this), x5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Vc: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "column", f)
                            }));
                            this.onMouseLeave = x5(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = x5(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = x5(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.lPa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    cb: g,
                                    ap: h,
                                    bD: k,
                                    Oxb: l,
                                    Vc: m = 1,
                                    pd: n = 1
                                } = this.props, p = {
                                    jNbTIg: !this.Sk,
                                    gtA7Dw: this.Sk
                                };
                                var q = e ? .sticky ? this.Sk ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                q = e ? .sticky ? this.A2 ? ? q : void 0;
                                let r = 0;
                                const t = g.layout.Cf.sg(f),
                                    u = t.map(A => {
                                        if (!(c && t.ue(A, c) < 0 || d && t.ue(A, d) > 0)) return r += A.width, a5(zoc, {
                                            col: A,
                                            label: __c.Px(f.yr(A)),
                                            Im: l ? .get() ? .get(A),
                                            ap: h,
                                            bD: k,
                                            Vc: m,
                                            pd: n,
                                            start: g.Wa.qa(f, A)
                                        }, A.id)
                                    }),
                                    z = this.Sk ? {
                                        right: r * m
                                    } : {
                                        left: r * m
                                    };
                                return c5("div", {
                                    style: {
                                        height: h(n),
                                        width: r * m,
                                        ...q
                                    },
                                    className: d5("Vt2_4w", p, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [u, e ? .sticky && a5("div", {
                                        style: {
                                            width: soc * m,
                                            ...z
                                        },
                                        className: d5("HBvlug", "ru3tFQ", p)
                                    })]
                                })
                            };
                            this.R0a = c => {
                                var d = this.props.sheet;
                                const e = this.props.cb,
                                    f = e.layout.Cf.yY(d),
                                    g = {
                                        jNbTIg: !this.Sk,
                                        gtA7Dw: this.Sk
                                    };
                                d = e.layout.Cf.sg(d);
                                return c5("div", {
                                    ref: this.tx ? .hl,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: d5("xhBZaw", g, c.className),
                                    children: [f && this.lPa(void 0, f, {
                                        sticky: !0
                                    }), this.lPa(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [i5, ooc]
                    } = B5(a, [], [bd], poc))
                })(), moc);
                var j5;
                new(noc = class extends A5 {
                    constructor() {
                        super(j5);
                        qoc()
                    }
                }, (() => {
                    class a extends(roc = s5) {
                        static F(b) {
                            O(b, {
                                Sk: n5,
                                tx: n5,
                                A2: n5
                            })
                        }
                        get Sk() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get tx() {
                            const b = this.props.Zo ? .get();
                            if (b != null && b.length !== 0) return new __c.Zy(b)
                        }
                        get A2() {
                            return this.props.nma ? .() ? .get()
                        }
                        render() {
                            return a5(__c.To, {
                                Kn: "light",
                                light: "light",
                                hq: "light",
                                dark: "light",
                                children: this.tgb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (j5.F(this), x5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    pd: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "row", f)
                            }));
                            this.onMouseLeave = x5(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = x5(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = x5(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.nPa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    cb: g,
                                    ap: h,
                                    bD: k,
                                    Vc: l = 1,
                                    pd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.Sk,
                                    gtA7Dw: this.Sk
                                };
                                var p = e ? .sticky ? {
                                    top: 0
                                } : void 0;
                                p = e ? .sticky ? this.A2 ? ? p : void 0;
                                let q = 0;
                                const r = g.layout.Cf.Ag(f),
                                    t = r.map(u => {
                                        if (!(c && r.ue(u, c) < 0 || d && r.ue(u, d) > 0)) {
                                            q += u.height;
                                            var z = `${f.qs(u)+1}`;
                                            return a5(Aoc, {
                                                fa: u,
                                                label: z,
                                                bD: k,
                                                ap: h,
                                                Vc: l,
                                                pd: m,
                                                start: g.Wa.ja(f, u)
                                            }, u.id)
                                        }
                                    });
                                return c5("div", {
                                    style: {
                                        height: q * m,
                                        width: h(l),
                                        ...p
                                    },
                                    className: d5("_93roJg", n, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [t, e ? .sticky && a5("div", {
                                        style: {
                                            height: soc * m
                                        },
                                        className: d5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.tgb = c => {
                                var d = this.props.sheet;
                                const e = this.props.cb,
                                    f = e.layout.Cf.zY(d),
                                    g = {
                                        jNbTIg: !this.Sk,
                                        gtA7Dw: this.Sk
                                    };
                                d = e.layout.Cf.Ag(d);
                                return c5("div", {
                                    ref: this.tx ? .hl,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: d5("An9VeA", g, c.className),
                                    children: [f && this.nPa(void 0, f, {
                                        sticky: !0
                                    }), this.nPa(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [j5, qoc]
                    } = B5(a, [], [bd], roc))
                })(), noc);
                var zoc = g5(a => {
                        const b = a.label,
                            c = a.Im,
                            d = a.col,
                            e = a.bD,
                            f = a.ap,
                            g = a.Vc,
                            h = a.pd,
                            k = f(h),
                            l = Ync(() => e(d));
                        return a5("div", {
                            className: d5("_83Rssw", "d2uLIA", e5(l)),
                            style: {
                                width: d.width * g,
                                height: k,
                                borderInlineWidth: `${toc*g}px`,
                                borderBlockStartWidth: `${uoc*g}px`,
                                borderBlockEndWidth: `${voc*g}px`,
                                transform: `translateX(${a.start*g}px)`
                            },
                            children: a5(xnc, {
                                label: b,
                                Im: c,
                                width: d.width,
                                height: f(1),
                                scale: h,
                                vBa: l
                            })
                        })
                    }),
                    Aoc = g5(a => {
                        const b = a.label,
                            c = a.fa,
                            d = a.ap,
                            e = a.bD,
                            f = a.Vc,
                            g = a.pd,
                            h = d(f),
                            k = Ync(() => e(c));
                        return a5("div", {
                            className: d5("_83Rssw", "JhBzyw", e5(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${woc*g}px`,
                                borderInlineStartWidth: `${xoc*g}px`,
                                borderInlineEndWidth: `${yoc*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: a5(xnc, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                vBa: k
                            })
                        })
                    });
                var Boc = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var Coc = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var ync = __c.BP({
                    Is: Boc,
                    medium: Coc
                });
                var Doc, Eoc, Foc, k5;
                new(Doc = class extends A5 {
                    constructor() {
                        super(k5);
                        Eoc()
                    }
                }, (() => {
                    class a extends(Foc = s5) {
                        static F(b) {
                            O(b, {
                                Re: n5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return a5(this.props.Sp, {
                                sheet: b.D.config,
                                container: b,
                                gh: this.gh,
                                p5: "visible",
                                Zo: this.props.Zo,
                                ws: this.props.ws,
                                wt: this.props.wt,
                                yt: this.props.yt,
                                aa: this.props.aa,
                                Re: this.Re,
                                Uh: this.props.Uh,
                                IF: void 0
                            })
                        }
                        get Re() {
                            return __c.Lm(this.props.element.D.Qa, this.props.Oe)
                        }
                        constructor(...b) {
                            super(...b);
                            this.gh = (k5.F(this), n5(() => {
                                const c = this.props.element.D.config;
                                return __c.Fj(0, 0, c.width, c.height)
                            }))
                        }
                    }({
                        c: [k5, Eoc]
                    } = B5(a, [], [bd], Foc))
                })(), Doc);
                var Goc = class {
                    constructor() {
                        this.Jca = new WeakMap;
                        this.e7a = a => this.Jca.get(a);
                        this.PRa = (a, b) => {
                            this.Jca.set(a, b)
                        };
                        this.w0a = (a, b) => {
                            const c = this.Jca.get(a);
                            c && c.ga === b.ga && c.Ab === b.Ab && this.Jca.delete(a)
                        }
                    }
                };
                var C5 = parseInt("4px", 10) || 4,
                    Hoc = g5(({
                        sheet: a,
                        cb: b,
                        gh: c,
                        aa: d,
                        range: e,
                        Zu: f,
                        $u: g
                    }) => {
                        if (e != null && (f || g)) {
                            d = d ? .get() ? ? 1;
                            c = c.get();
                            var h = a.direction === "rtl",
                                k = {
                                    ZJ0G6w: !h,
                                    dOI_jA: h
                                };
                            a = YC(b.Wa, a, {
                                fa: e.Nb,
                                column: e.Sb
                            }, {
                                fa: e.Rc,
                                column: e.Yc
                            }) ? .tb();
                            if (a != null) {
                                if (f && g) return a5("div", {
                                    style: {
                                        top: (a.top + a.height) * d,
                                        width: a.width * d,
                                        height: C5 * d
                                    },
                                    className: d5("aX8dhQ", "VGcLng")
                                });
                                if (f) return f = a.left + a.width, a5("div", {
                                    style: {
                                        width: C5 * d,
                                        height: c.height * d,
                                        ...(h ? {
                                            right: f * d
                                        } : {
                                            left: f * d
                                        })
                                    },
                                    className: d5("aX8dhQ", "gl1RPg",
                                        k)
                                });
                                if (g) return a5("div", {
                                    style: {
                                        top: (a.top + a.height) * d,
                                        width: c.width * d,
                                        height: C5 * d
                                    },
                                    className: d5("aX8dhQ", "VGcLng")
                                })
                            }
                        }
                    });
                var D5 = ({
                        sheet: a,
                        cb: b,
                        range: c,
                        gh: d,
                        aa: e,
                        children: f
                    }) => {
                        const g = Z4();
                        Dnc({
                            sheet: a,
                            cb: b,
                            gh: d,
                            aa: e,
                            range: c,
                            dg: g
                        });
                        return a5("div", {
                            ref: g,
                            className: d5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: f
                        })
                    },
                    Ioc = ({
                        sheet: a,
                        cb: b,
                        range: c,
                        gh: d,
                        aa: e,
                        children: f
                    }) => {
                        const g = Z4();
                        Dnc({
                            sheet: a,
                            cb: b,
                            gh: d,
                            aa: e,
                            range: c,
                            dg: g
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return a5("div", {
                            className: d5("nstn2A", a, "_9sodyg"),
                            children: a5("div", {
                                ref: g,
                                className: d5("nstn2A", a),
                                children: f
                            })
                        })
                    };
                var Fnc = g5(({
                        sheet: a,
                        children: b,
                        oB: c
                    }) => {
                        const d = h5(f => {
                                c.lta(a, f)
                            }, [c, a]),
                            e = h5(f => {
                                f != null ? c.pB.set(a, f) : c.pB.delete(a)
                            }, [c, a]);
                        return a5(__c.JUb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            BI: e,
                            children: b
                        })
                    }),
                    Enc = class {
                        lta(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.F1.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.pB = new WeakMap;
                            this.F1 = w5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = x5((b, c) => {
                                this.pB.get(b) ? .scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var Inc = g5(a => {
                    const b = a.item,
                        c = a.Zo,
                        d = a.ws,
                        e = a.wf,
                        f = a.measureRef,
                        g = a.aa,
                        h = a.nIa,
                        k = a.Ab,
                        l = a.wt,
                        m = a.yt,
                        n = a.Sp,
                        p = a.MJ,
                        q = a.Uh,
                        r = a.Oe,
                        t = a.cb,
                        u = a.oB;
                    a = f5(() => __c.Lm(b.Qa, r), [b, r]);
                    const z = f5(() => n5(() => {
                            const I = b.config;
                            return __c.Fj(0, 0, I.width, I.height)
                        }), [b]),
                        A = f5(() => g5(({
                            sheet: I,
                            range: K,
                            Zu: L,
                            $u: M
                        }) => a5(D5, {
                            sheet: I,
                            cb: t,
                            range: K,
                            gh: z,
                            aa: g,
                            children: a5(Hoc, {
                                sheet: I,
                                cb: t,
                                gh: z,
                                aa: g,
                                range: K,
                                Zu: L,
                                $u: M
                            })
                        })), [g, z, t]),
                        B = __c.ACa(b.config),
                        D = g.get(),
                        F = Math.min(B.width * D, k.width);
                    l5(() => m5(() => {
                        var I = b.config.view.freeze.yC ?
                            b.config.layout.Xd.get(b.config.view.freeze.yC) : void 0;
                        if (I != null)
                            if (b.config.qa(I) + I.width > F) {
                                if (I = u.pB.get(b)) I.style.overflowX = "hidden"
                            } else if (I = u.pB.get(b)) I.style.overflowX = "scroll"
                    }), [b, k.width, u, D, F]);
                    return a5("div", {
                        ref: f,
                        className: "E8r86A",
                        style: {
                            width: F
                        },
                        children: a5(p, {
                            sheet: b,
                            children: a5("div", {
                                ref: h,
                                className: "cXTiJA",
                                style: {
                                    width: B.width * D,
                                    height: B.height * D
                                },
                                children: a5("div", {
                                    className: "W1ir5A",
                                    children: a5(n, {
                                        container: e.yi(b),
                                        sheet: b.config,
                                        gh: z,
                                        p5: "visible",
                                        Zo: c,
                                        ws: d,
                                        aa: g,
                                        wt: l,
                                        yt: m,
                                        Re: a,
                                        Uh: q,
                                        IF: A
                                    })
                                })
                            })
                        })
                    })
                });
                var Joc = g5(({
                    page: a,
                    cb: b,
                    range: c,
                    fB: d
                }) => {
                    var e = c != null && c.Sb != null && c.Nb != null && c.Yc != null && c.Rc != null ? YC(b.Wa, a.sheet, {
                        fa: c.Nb,
                        column: c.Sb
                    }, {
                        fa: c.Rc,
                        column: c.Yc
                    }) : void 0;
                    return a5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((f, g) => e == null ? d(f, g) : __c.Ij(Mj(f)).lp(e) && d(f, g))
                    })
                });
                var Koc = new __c.GQ,
                    E5 = a => koc * a,
                    Loc = () => "primary-default",
                    Knc = g5(({
                        container: a,
                        Zo: b,
                        ws: c,
                        wt: d,
                        yt: e,
                        VY: f,
                        aa: g,
                        viewport: h,
                        cb: k,
                        cib: l,
                        Sp: m,
                        Uh: n,
                        fB: p,
                        Pba: q,
                        Hpb: r,
                        Bob: t,
                        Aob: u
                    }) => {
                        const z = a.page,
                            A = f5(() => n5(() => {
                                {
                                    var D = k.Wa;
                                    var F = z.sheet,
                                        I = D.Xv.cj.Ag(F),
                                        K = D.Xv.cj.sg(F);
                                    const L = I.first(),
                                        M = K.first();
                                    I = I.last();
                                    K = K.last();
                                    D = L && M && I && K ? YC(D, F, {
                                        fa: L,
                                        column: M
                                    }, {
                                        fa: I,
                                        column: K
                                    }) : void 0
                                }
                                return D ? ? __c.Fj(0, 0, 0, 0)
                            }), [z, k]),
                            B = f5(() => g5(({
                                sheet: D,
                                range: F,
                                Zu: I,
                                $u: K
                            }) => c5(Rnc, {
                                children: [a5(D5, {
                                    sheet: z.sheet,
                                    cb: k,
                                    range: F,
                                    gh: A,
                                    aa: g,
                                    children: a5(Hoc, {
                                        sheet: D,
                                        cb: k,
                                        gh: A,
                                        aa: g,
                                        range: F,
                                        Zu: I,
                                        $u: K
                                    })
                                }), c5(Ioc, {
                                    sheet: z.sheet,
                                    cb: k,
                                    range: F,
                                    gh: A,
                                    aa: g,
                                    children: [r && a5(r, {}), p && a5(Joc, {
                                        page: z,
                                        cb: k,
                                        fB: p,
                                        range: F
                                    }), u && a5(u, {}), q && q()]
                                }), t && F && a5(D5, {
                                    sheet: z.sheet,
                                    cb: k,
                                    range: F,
                                    gh: A,
                                    aa: g,
                                    children: a5(t, {
                                        range: F
                                    })
                                })]
                            })), [z, k, A, g, r, p, u, q, t]);
                        return l ? a5(Moc, {
                            container: a,
                            gh: A,
                            viewport: h,
                            aa: g,
                            Zo: b,
                            ws: c,
                            wt: d,
                            yt: e,
                            Sp: m,
                            Uh: n,
                            IF: B,
                            cb: k
                        }) : a5(m, {
                            sheet: z.sheet,
                            container: a,
                            gh: A,
                            p5: "hidden",
                            Zo: b,
                            ws: c,
                            wt: d,
                            yt: e,
                            VY: f,
                            aa: g,
                            viewport: h,
                            Uh: n,
                            IF: B
                        })
                    }),
                    Moc =
                    g5(a => {
                        const b = a.container,
                            c = a.gh,
                            d = a.aa,
                            e = a.viewport,
                            f = a.Zo,
                            g = a.ws,
                            h = a.wt,
                            k = a.yt,
                            l = a.Sp,
                            m = a.Uh,
                            n = a.IF;
                        a = a.cb;
                        const p = b.page,
                            q = p.sheet.direction === "rtl",
                            r = t5(null),
                            t = t5(null),
                            u = t5(null);
                        l5(() => {
                            const F = F5({
                                sheet: p.sheet,
                                qda: !0,
                                rda: !0,
                                aa: d,
                                viewport: e
                            });
                            return o5(() => F ? .get(), I => {
                                const K = r.current;
                                if (I && K) {
                                    var L = p.sheet.direction === "rtl";
                                    K.style.position = I.position ? ? "sticky";
                                    K.style.top = I.top ? ? "0px";
                                    L ? K.style.right = I.right ? ? "0px" : K.style.left = I.left ? ? "0px";
                                    K.style.transform = I.transform ? ? ""
                                }
                            })
                        }, [p.sheet,
                            d, e
                        ]);
                        l5(() => {
                            const F = F5({
                                sheet: p.sheet,
                                qda: !1,
                                rda: !0,
                                aa: d,
                                viewport: e
                            });
                            return o5(() => F ? .get(), I => {
                                const K = u.current;
                                I && K && (K.style.position = I.position ? ? "sticky", K.style.top = I.top ? ? "0px", K.style.transform = I.transform ? ? "")
                            })
                        }, [p.sheet, d, e]);
                        l5(() => {
                            const F = F5({
                                sheet: p.sheet,
                                qda: !0,
                                rda: !1,
                                aa: d,
                                viewport: e
                            });
                            return o5(() => F ? .get(), I => {
                                const K = t.current;
                                if (I && K) {
                                    var L = p.sheet.direction === "rtl";
                                    K.style.position = I.position ? ? "sticky";
                                    L ? K.style.right = I.right ? ? "0px" : K.style.left = I.left ? ? "0px";
                                    K.style.transform =
                                        I.transform ? ? ""
                                }
                            })
                        }, [p.sheet, d, e]);
                        const z = h5((F, I, K) => F5({
                                sheet: F,
                                qda: I,
                                rda: K,
                                aa: d,
                                viewport: e
                            }), [d, e]),
                            A = f5(() => z ? () => z(p.sheet, !0, !1) : void 0, [z, p.sheet]),
                            B = f5(() => z ? () => z(p.sheet, !1, !0) : void 0, [z, p.sheet]),
                            D = d ? .get() ? ? 1;
                        return c5("div", {
                            className: d5("OsKKIQ", "cbOp6Q"),
                            children: [a5("div", {
                                    className: "VDFv_A",
                                    children: a5(l, {
                                        sheet: p.sheet,
                                        container: b,
                                        gh: c,
                                        p5: "hidden",
                                        Zo: f,
                                        ws: g,
                                        wt: h,
                                        yt: k,
                                        VY: z,
                                        aa: d,
                                        viewport: e,
                                        Uh: m,
                                        IF: n
                                    })
                                }), a5("div", {
                                    ref: r,
                                    className: "_688KWg",
                                    children: a5(znc, {
                                        Sk: q,
                                        tHa: !1,
                                        ap: E5,
                                        scale: D
                                    })
                                }),
                                a5("div", {
                                    ref: u,
                                    className: "m0cT1w",
                                    children: a5(i5, {
                                        sheet: p.sheet,
                                        Vc: D,
                                        pd: D,
                                        ap: E5,
                                        bD: Loc,
                                        cE: Koc,
                                        nma: A,
                                        cb: a
                                    })
                                }), a5("div", {
                                    ref: t,
                                    className: "zm537g",
                                    children: a5(j5, {
                                        sheet: p.sheet,
                                        Vc: D,
                                        pd: D,
                                        ap: E5,
                                        bD: Loc,
                                        cE: Koc,
                                        nma: B,
                                        cb: a
                                    })
                                })
                            ]
                        })
                    }),
                    F5 = ({
                        sheet: a,
                        qda: b,
                        rda: c,
                        aa: d,
                        viewport: e
                    }) => n5(() => {
                        var f = e ? .get().tb();
                        const g = d ? .get() ? ? 1;
                        if (!f) return {};
                        const h = {};
                        f = new lj(f.left, f.top);
                        const k = a.direction === "rtl";
                        h.position = "relative";
                        c && (h.top = "0px");
                        b && (k ? h.right = "0px" : h.left = "0px");
                        h.transform = `translate(${b?f.x*g:0}px, ${c?
f.y*g:0}px)`;
                        return h
                    });
                var Pnc = class {
                    constructor(a, b) {
                        this.uk = a;
                        this.cb = b;
                        this.Z_a = __c.SQ;
                        this.I6a = z5((c, d, e, f) => {
                            e = e.get();
                            const g = new WeakMap;
                            for (let u = 0; u < e.length; u++) {
                                var h = e[u],
                                    k = this.A6a(c, d, h);
                                if (k) {
                                    switch (k) {
                                        case "start":
                                        case "justify":
                                            var l = e[u + 1];
                                            if (l == null || !ZC(c, this.cb, d, l)) continue;
                                            break;
                                        case "center":
                                            l = e[u + 1];
                                            if (l == null || !ZC(c, this.cb, d, l)) continue;
                                            l = e[u - 1];
                                            if (l == null || !ZC(c, this.cb, d, l)) continue;
                                            break;
                                        case "end":
                                            l = e[u - 1];
                                            if (l == null || !ZC(c, this.cb, d, l)) continue;
                                            break;
                                        default:
                                            throw new y(k);
                                    }
                                    if (l = f(d, h)) {
                                        var m =
                                            l.width + (k === "center" ? 0 : this.Z_a);
                                        if (!(h.width > m)) {
                                            switch (k) {
                                                case "start":
                                                case "justify":
                                                    k = this.cb.Wa.qa(c, h);
                                                    l = k + m;
                                                    break;
                                                case "center":
                                                    l = this.cb.Wa.qa(c, h) + h.width / 2;
                                                    k = l - m / 2;
                                                    l += m / 2;
                                                    break;
                                                case "end":
                                                    l = this.cb.Wa.qa(c, h) + h.width;
                                                    k = l - m;
                                                    break;
                                                default:
                                                    throw new y(k);
                                            }
                                            for (m = e.indexOf(h); m >= 0; m--) {
                                                var n = e[m],
                                                    p = m - 1 < 0 || ZC(c, this.cb, d, e[m - 1]),
                                                    q;
                                                if (q = n === h || ZC(c, this.cb, d, n)) {
                                                    q = k;
                                                    var r = l,
                                                        t = this.cb.Wa.qa(c, n);
                                                    q = q < t && t < r
                                                }
                                                if (q && p) g.set(n, 1);
                                                else break
                                            }
                                            for (h = e.indexOf(h) + 1; h < e.length; h++) {
                                                m = e[h];
                                                if (n = ZC(c, this.cb,
                                                        d, m)) n = k, p = l, q = this.cb.Wa.qa(c, m), n = n < q && q < p;
                                                if (n) g.set(m, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return g
                        });
                        this.A6a = (c, d, e) => {
                            const f = c.layout.cells.get(d, e);
                            if (f && (f.ref.content.ref || f.ref.Ba.ref) && f.span.Nb === f.span.Rc && f.span.Sb === f.span.Yc) {
                                var g = this.uk.um(c, d, e);
                                c = this.uk.jma(c, d, e, __c.mi({
                                    tg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    tg: h,
                                    textAlign: k
                                } = __c.Rh(li, c);
                                if (h === "overflow") return __c.iSa(k, f.ref.content.ref ? .type, f.ref.Ba.ref ? .type, g ? () => g.Zi.type : void 0)
                            }
                        }
                    }
                };
                var Noc = g5(function(a) {
                    const b = a.sheet;
                    var c = a.cb,
                        d = a.ZO;
                    const e = a.dnb,
                        f = a.aa,
                        g = a.Cna,
                        h = a.s6a;
                    a = a.overflow;
                    const k = Z4();
                    Unc(() => m5(() => {
                        const r = x(k.current),
                            t = f ? .get() ? ? 1,
                            u = b.height;
                        r.style.width = `${b.width*t}px`;
                        r.style.height = `${u*t}px`
                    }), [k, f, b]);
                    const l = h5(r => g.I6a(b, r, e, h), [g, b, e, h]);
                    var m = h5((r, t) => l(r) ? .get(t) ? ? 0, [l]),
                        n = c.layout.cj.Ag(b);
                    const p = c.layout.cj.sg(b),
                        q = c.layout.Cf.Ag(b);
                    c = c.layout.Cf.sg(b);
                    d = pnc(b, n, p, q, c, d, e, m);
                    c = b.width;
                    m = b.height;
                    n = b.direction === "rtl";
                    return a5("svg", {
                        ref: k,
                        role: "presentation",
                        className: d5("c6a1eQ", {
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
                            Ik: z,
                            Jk: A
                        }) => a5("path", {
                            stroke: t,
                            strokeDasharray: z,
                            strokeDashoffset: A,
                            strokeWidth: u,
                            d: r.map(({
                                p1: B,
                                p2: D
                            }) => `M ${B.x} ${B.y} L ${D.x} ${D.y}`).join(" ")
                        }, `${t}-${u}-${z}-${A}`))
                    })
                });
                var Ooc;
                Ooc = Symbol.iterator;
                var Poc = class {
                    get size() {
                        return this.Zca
                    }
                    get([a, b]) {
                        return (a = this.JD.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.JD.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.JD.get(a);
                        d == null && (d = new Map, this.JD.set(a, d));
                        d.set(b, c);
                        this.Zca++;
                        return this
                    }
                    clear() {
                        this.JD.clear();
                        this.Zca = 0
                    }
                    delete([a, b]) {
                        const c = this.JD.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.Zca--;
                        c.size === 0 && this.JD.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.JD)
                            for (const [d, e] of c) a([b, d], e)
                    }*[Ooc]() {
                        for (const [a, b] of this.JD)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.Zca = 0;
                        this.JD = new Map
                    }
                };
                var Qoc, Roc, Soc, Toc, Uoc, Voc, Woc, Xoc, Yoc = class extends s5 {
                    render() {
                        const {
                            J8: a,
                            ...b
                        } = this.props, c = this.props.sheet;
                        return c5("div", {
                            ref: this.aSa,
                            className: d5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                            children: [a ? .Qza && a5(G5, { ...b,
                                sheet: c,
                                range: a.Qza.range,
                                Zu: !0,
                                $u: !0,
                                className: "_0C8M3w"
                            }), a ? .FVa && a5(G5, { ...b,
                                sheet: c,
                                range: a.FVa.range,
                                Zu: !1,
                                $u: !0,
                                className: "_7n44yg"
                            }), a ? .wHa && a5(G5, { ...b,
                                sheet: c,
                                range: a.wHa.range,
                                Zu: !0,
                                $u: !1,
                                className: "fF5r6w"
                            }), a ? .EUa && a5(G5, { ...b,
                                sheet: c,
                                range: a.EUa.range,
                                Zu: !1,
                                $u: !1,
                                className: "llILYw"
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = m5(() => {
                            var b = this.props,
                                c = b.aa;
                            b = b.gh;
                            const d = this.aSa.current;
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
                        __c.Oc(this, [a])
                    }
                    constructor(...a) {
                        super(...a);
                        this.aSa = fy()
                    }
                };
                ({
                    c: [Xoc, Soc]
                } = B5(Yoc, [], [bd], s5));
                Soc();
                var G5;
                new(Qoc = class extends A5 {
                    constructor() {
                        super(G5);
                        Toc()
                    }
                }, (() => {
                    class a extends(Uoc = s5) {
                        static F(b) {
                            O(b, {
                                wta: n5,
                                bounds: n5
                            })
                        }
                        get wta() {
                            const b = this.props.viewport,
                                c = this.props.Zu,
                                d = this.props.$u;
                            return b == null || !c && !d ? b : n5(() => {
                                const e = b.get().tb();
                                return Mj({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.sheet,
                                c = this.props.gh,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.IF,
                                g = this.props.Zu,
                                h = this.props.$u;
                            return c5("div", {
                                ref: this.Eqa,
                                className: d5("i0YQww",
                                    this.props.className),
                                children: [a5("div", {
                                    ref: this.INa,
                                    className: "vUKoKg",
                                    children: a5("div", {
                                        ref: this.JNa,
                                        children: a5(H5, {
                                            sheet: b,
                                            container: d,
                                            gh: c,
                                            bounds: e,
                                            Zo: this.props.Zo,
                                            ws: this.props.ws,
                                            LB: this.props.LB,
                                            Uh: this.props.Uh,
                                            gX: this.props.gX,
                                            cb: this.props.cb,
                                            aa: this.props.aa,
                                            ZO: this.ZO,
                                            M3: this.M3,
                                            LQ: this.LQ
                                        })
                                    })
                                }), a5(this.Mfa, {}), f && a5(f, {
                                    sheet: b,
                                    range: e,
                                    Zu: g,
                                    $u: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = m5(() => {
                                    var h = this.props,
                                        k = h.aa,
                                        l = h.sheet,
                                        m = h.gh,
                                        n = h.cb,
                                        p = this.Eqa.current;
                                    const q = this.INa.current;
                                    h = this.JNa.current;
                                    var r = this.bounds,
                                        t = r.Sb;
                                    const u = r.Yc,
                                        z = r.Nb;
                                    r = r.Rc;
                                    k = k ? k.get() : 1;
                                    const {
                                        width: A,
                                        height: B
                                    } = m.get();
                                    n = (m = z && t && r && u ? YC(n.Wa, l, {
                                        fa: z,
                                        column: t
                                    }, {
                                        fa: r,
                                        column: u
                                    }) ? .tb() : void 0) ? m.width : A;
                                    t = m ? m.height : B;
                                    p && (p.style.width = `${n*k}px`, p.style.height = `${t*k}px`);
                                    q && (q.style.width = `${n*k}px`, q.style.height = `${t*k}px`);
                                    l = l.direction === "rtl";
                                    l = m ? m.left * k * (l ? 1 : -1) : 0;
                                    p = m ? -m.top * k : 0;
                                    h && (h.style.transform = `translate(${l}px, ${p}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.VY;
                            const e = this.props.Zu,
                                f = this.props.$u,
                                g =
                                e || f ? d ? .(c, e, f) : void 0;
                            d = m5(() => {
                                const h = this.Eqa.current;
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
                            __c.Oc(this, [b, d])
                        }
                        get bounds() {
                            var b = this.props.sheet,
                                c = this.props.cb,
                                d = this.props.range;
                            const e = c.layout.cj.Ag(b);
                            b = c.layout.cj.sg(b);
                            if (b.empty || e.empty) return {
                                Sb: void 0,
                                Yc: void 0,
                                Nb: void 0,
                                Rc: void 0
                            };
                            c = d.Sb;
                            const f = d.Yc,
                                g = d.Nb;
                            d = d.Rc;
                            const h = b.first(),
                                k = e.first(),
                                l = b.last(),
                                m = e.last();
                            return {
                                Sb: c ? b.has(c) ? c : void 0 : h,
                                Yc: f ? b.has(f) ? f : void 0 : l,
                                Nb: g ? e.has(g) ? g : void 0 : k,
                                Rc: d ? e.has(d) ? d : void 0 : m
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.Eqa = (G5.F(this), fy());
                            this.INa = fy();
                            this.JNa = fy();
                            this.LQ = new Zoc;
                            this.enb = n5(() => [...this.ZO.get().keys()].sort((c, d) => this.props.cb.layout.Cf.Ag(this.props.sheet).ue(c,
                                d)), {
                                equals: __c.dk()
                            });
                            this.cnb = n5(() => [...this.M3.get().keys()].sort((c, d) => this.props.cb.layout.Cf.sg(this.props.sheet).ue(c, d)), {
                                equals: __c.dk()
                            });
                            this.Mfa = g5(() => a5(this.props.QXa, {
                                ZO: this.enb,
                                dnb: this.cnb,
                                s6a: this.LQ.X8,
                                range: this.props.range
                            }));
                            this.ZO = n5(() => {
                                const c = this.props.sheet;
                                var d = this.props.aa;
                                const e = this.props.cb;
                                var f = this.wta ? .get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d,
                                    k = !f && g.Nb && g.Sb && g.Rc && g.Yc ? YC(e.Wa, c, {
                                        fa: g.Nb,
                                        column: g.Sb
                                    }, {
                                        fa: g.Rc,
                                        column: g.Yc
                                    }) ? .tb() : void 0;
                                const l = f ? f.na.y - h : k ? .top ? ? 0;
                                f = f ? f.br.y + h : k ? .height ? ? 0;
                                h = new Map;
                                k = e.layout.cj.Ag(c);
                                const m = e.layout.Cf.Ag(c);
                                for (let n = g.Nb; n != null && g.Rc != null && k.ue(n, g.Rc) <= 0; n = k.next(n)) {
                                    if (!m.has(n)) continue;
                                    const p = e.Wa.ja(c, n);
                                    if (!(p + n.height < l)) {
                                        if (p > f) break;
                                        h.set(n, p * d)
                                    }
                                }
                                return h
                            }, {
                                equals: v5.shallow
                            });
                            this.M3 = n5(() => {
                                const c = this.props.sheet;
                                var d = this.props.aa;
                                const e = this.props.cb;
                                var f = this.wta ? .get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d,
                                    k = !f && g.Nb && g.Sb && g.Rc && g.Yc ? YC(e.Wa, c, {
                                        fa: g.Nb,
                                        column: g.Sb
                                    }, {
                                        fa: g.Rc,
                                        column: g.Yc
                                    }) ? .tb() : void 0;
                                const l = f ? f.na.x - h : k ? .left ? ? 0;
                                f = f ? f.br.x + h : k ? .width ? ? 0;
                                h = new Map;
                                k = e.layout.cj.sg(c);
                                const m = e.layout.Cf.sg(c);
                                for (let n = g.Sb; n != null && g.Yc != null && k.ue(n, g.Yc) <= 0; n = k.next(n)) {
                                    if (!m.has(n)) continue;
                                    const p = e.Wa.qa(c, n);
                                    if (!(p + n.width < l)) {
                                        if (p > f) break;
                                        h.set(n, p * d)
                                    }
                                }
                                return h
                            }, {
                                equals: v5.shallow
                            })
                        }
                    }({
                        c: [G5, Toc]
                    } = B5(a, [], [bd], Uoc))
                })(), Qoc);
                var Zoc = class {
                        constructor() {
                            this.cells = new Poc;
                            this.Fra = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.X8 = (a, b) => {
                                let c = this.cells.get([a, b]);
                                c == null && (c = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], c));
                                return c.get() ? .TBa
                            }
                        }
                    },
                    H5;
                new(Roc = class extends A5 {
                    constructor() {
                        super(H5);
                        Voc()
                    }
                }, (() => {
                    class a extends(Woc = s5) {
                        static F(b) {
                            O(b, {
                                uJ: w5.shallow,
                                tx: n5,
                                pza: x5,
                                K6: x5.bound
                            })
                        }
                        get tx() {
                            const b = this.props.Zo ? .get();
                            if (b != null && b.length !== 0) return new __c.Zy(b)
                        }
                        render() {
                            return c5("div", {
                                onMouseDown: this.props.ws ? .onMouseDown,
                                onTouchStart: this.props.ws ? .onTouchStart,
                                ref: Znc(this.dg, this.tx ? .hl),
                                children: [a5("div", {
                                    ref: this.Uha,
                                    className: "_5YlOqQ"
                                }), a5("div", {
                                    ref: this.Wha,
                                    className: "_XCmKw"
                                }), this.uJ.map(b => b.Heb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                o5(() => [this.props.sheet, this.props.M3.get(), this.props.ZO.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.x0a();
                                    this.pza(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = m5(() => {
                                    var e = this.props,
                                        f = e.aa;
                                    e = e.gh;
                                    const g = this.dg.current;
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
                                d = this.uJ.map(e => Onc(e));
                            __c.Oc(this, [c, b, ...d])
                        }
                        x0a() {
                            const b = x(this.Uha.current),
                                c = x(this.Wha.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.hwa.length = 0;
                            this.uJ.length = 0
                        }
                        pza(b, c) {
                            const d =
                                x(this.Uha.current),
                                e = x(this.Wha.current),
                                f = [],
                                g = new Map;
                            for (const h of this.hwa) c.has(h.fa) ? g.set(h.fa, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new $oc(this.K6, h), d.appendChild(c.J5), e.appendChild(c.L5), this.hwa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        K6(b, c) {
                            const d = this.props.gX,
                                e = this.props.cb,
                                f = this.props.sheet,
                                g = this.props.container,
                                h = this.props.LQ;
                            b = new apc(this.props.LB, this.props.Uh, d(b, c), e, f, b, c, g, h.Fra, this.i9, this.h9);
                            __c.Oc(this, Onc(b));
                            this.uJ.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.dg = (H5.F(this), fy());
                            this.Uha = fy();
                            this.Wha = fy();
                            this.hwa = [];
                            this.uJ = [];
                            this.i9 = z5(c => {
                                const d = this.props.ZO.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.h9 = z5(c => {
                                const d = this.props.M3.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [H5, Voc]
                    } = B5(a, [], [bd], Woc))
                })(), Roc);
                var $oc = class {
                        static F(a) {
                            O(a, {
                                update: x5
                            })
                        }
                        update(a, b, c) {
                            [this.J5, this.L5].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.fa = b;
                            for (const [d] of c) c = this.uJ.get(d), c || (c = this.K6(d, b), this.uJ.set(d, c), this.J5.appendChild(c.I5), this.L5.appendChild(c.DK)), c.update(b)
                        }
                        hide() {
                            [this.J5, this.L5].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.K6 = a;
                            this.fa = b;
                            this.J5 = ($oc.F(this), document.createElement("div"));
                            this.L5 = document.createElement("div");
                            this.uJ = new Map
                        }
                    },
                    apc = class {
                        static F(a) {
                            O(a, {
                                y6: w5.ref,
                                fa: w5.ref,
                                update: x5,
                                Ju: n5,
                                attrs: n5.struct,
                                $na: n5,
                                sC: n5,
                                renderer: n5,
                                TBa: n5.struct
                            })
                        }
                        update(a) {
                            a !== this.fa && (this.fa = a, this.Uy.fa = a, this.bka && this.bka(), this.bka = this.Fra(this.fa, this.col, this))
                        }
                        get Heb() {
                            return this.y6
                        }
                        get Ju() {
                            const a = this.sheet.layout.cells.get(this.fa, this.col);
                            return a ? a.ref : void 0
                        }
                        get attrs() {
                            const a = this.Uy.attrs;
                            return {
                                tg: a ? .tg,
                                textAlign: a ? .textAlign,
                                direction: a ? .direction,
                                link: a ? .link,
                                fontSize: a ? .fontSize,
                                color: a ? .color,
                                xz: a ? .xz
                            }
                        }
                        get $na() {
                            var a = this.Uy.span;
                            if (!a) return !1;
                            if (a.Nb === a.Rc && a.Sb === a.Yc) return !0;
                            var b = this.i9("first");
                            const c = this.i9("last"),
                                d = this.h9("first"),
                                e = this.h9("last");
                            if (!(b && c && d && e)) return !1;
                            const f = this.cb.layout.cj.Ag(this.sheet),
                                g = this.cb.layout.cj.sg(this.sheet);
                            b = f.ue(a.Nb, b) >= 0 && f.ue(a.Nb, c) <= 0 ? a.Nb : b;
                            a = g.ue(a.Sb, d) >= 0 && g.ue(a.Sb, e) <= 0 ? a.Sb : d;
                            return b === this.fa && a === this.col
                        }
                        get sC() {
                            const a = this.sheet,
                                b = this.fa,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                container: {
                                    config: a
                                },
                                fa: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.WL(c, b);
                                case "sheet-item":
                                    return this.container.WL(c, b);
                                case "sheet-element":
                                    return this.container.WL(c, b);
                                default:
                                    throw new y(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Ju;
                            if (a && this.$na && (a.content.ref || a.Ba.ref)) return this.LB({
                                context: {
                                    container: this.sC,
                                    attrs: this.attrs
                                },
                                tp: this.Vpa,
                                Uh: this.Uh
                            })
                        }
                        get TBa() {
                            this.UBa.reportObserved();
                            var a = Wnc(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.M0 : this.AC, a.childNodes.length !==
                                    0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            this.LB = a;
                            this.Uy = c;
                            this.cb = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Fra = k;
                            this.i9 = l;
                            this.h9 = m;
                            this.I5 = (apc.F(this), document.createElement("div"));
                            this.DK = document.createElement("div");
                            this.gG = document.createElement("div");
                            this.AC = document.createElement("div");
                            this.M0 = document.createElement("div");
                            this.UBa = Vnc("content size atom");
                            this.Vpa = x5(() => this.UBa.reportChanged());
                            this.fa = g;
                            this.I5.className = "_2JFriw";
                            this.DK.className = "imy9ug";
                            this.gG.className = d5("pDMp7w", {
                                _0yZ6Qg: this.Ju ? .content.ref ? .type !== "text3",
                                qhF5uA: this.Ju ? .content.ref ? .type !== "text3" && this.Ju ? .content.ref ? .type !== "text2"
                            });
                            this.AC.className = "_30B9pw";
                            this.gG.appendChild(this.AC);
                            this.DK.appendChild(this.gG);
                            this.M0.className = "G7zH2w";
                            this.bka = k(this.fa, this.col, this);
                            this.Uh = n => a5(b, { ...n,
                                tp: this.Vpa
                            })
                        }
                    };
                var bpc, cpc, dpc, p5;
                new(bpc = class extends A5 {
                        constructor() {
                            super(p5);
                            cpc()
                        }
                    }, (() => {
                        class a extends(dpc = s5) {
                            static F(b) {
                                O(b, {
                                    J8: n5
                                })
                            }
                            render() {
                                const {
                                    sheet: b,
                                    container: c,
                                    gh: d,
                                    cb: e,
                                    Zo: f,
                                    ws: g,
                                    VY: h,
                                    LB: k,
                                    Re: l,
                                    Uh: m,
                                    viewport: n,
                                    IF: p,
                                    sVa: q = !1
                                } = this.props, r = b.direction === "ltr" ? "TA4X7w" : "WvuqMw", t = e.layout.Cf.Ag(b);
                                if (!e.layout.Cf.sg(b).empty && !t.empty) return a5("div", {
                                    className: d5("SNkrHw", r, {
                                        RaA0Nw: q
                                    }),
                                    ...l,
                                    children: a5(Xoc, {
                                        LB: k,
                                        Uh: m,
                                        QXa: this.Mfa,
                                        gX: this.gX,
                                        cb: e,
                                        sheet: b,
                                        container: c,
                                        gh: d,
                                        Zo: f,
                                        ws: g,
                                        VY: h,
                                        aa: this.aa,
                                        viewport: n,
                                        IF: p,
                                        J8: this.J8
                                    })
                                })
                            }
                            get J8() {
                                var b = this.props.sheet,
                                    c = this.props.cb;
                                const d = {},
                                    e = c.layout.cj.zY(b),
                                    f = c.layout.cj.yY(b);
                                var g = c.layout.cj.Ag(b),
                                    h = c.layout.cj.sg(b);
                                b = g.first();
                                c = g.last();
                                const k = h.first(),
                                    l = h.last();
                                if (b != null && c != null && k != null && l != null) return h = f ? h.next(f) : k, g = e ? g.next(e) : b, e && f && (d.Qza = {
                                    range: {
                                        Sb: k,
                                        Nb: b,
                                        Yc: f,
                                        Rc: e
                                    }
                                }), e && h && (d.FVa = {
                                    range: {
                                        Sb: h,
                                        Nb: b,
                                        Yc: l,
                                        Rc: e
                                    }
                                }), f && g && (d.wHa = {
                                    range: {
                                        Sb: k,
                                        Nb: g,
                                        Yc: f,
                                        Rc: c
                                    }
                                }), g && h && (d.EUa = {
                                    range: {
                                        Sb: h,
                                        Nb: g,
                                        Yc: l,
                                        Rc: c
                                    }
                                }), d
                            }
                            get aa() {
                                return this.props.aa ? this.props.aa :
                                    n5(() => 1)
                            }
                            constructor(...b) {
                                super(...b);
                                this.Mfa = (p5.F(this), g5(c => {
                                    const {
                                        sheet: d,
                                        gh: e,
                                        cb: f,
                                        Cna: g,
                                        aa: h,
                                        p5: k = "hidden"
                                    } = this.props;
                                    return a5(D5, {
                                        sheet: d,
                                        cb: f,
                                        range: c.range,
                                        gh: e,
                                        aa: h,
                                        children: a5(Noc, { ...c,
                                            sheet: d,
                                            cb: f,
                                            aa: this.aa,
                                            Cna: g,
                                            overflow: k
                                        })
                                    })
                                }));
                                this.gX = (c, d) => new __c.BSa(this.props.uk, this.props.cb, this.props.Py, this.props.sheet, c, d, this.aa, this.wt, this.yt);
                                this.wt = (c, d) => this.props.wt ? .(this.props.sheet, c, d);
                                this.yt = (c, d) => this.props.yt ? .(this.props.sheet, c, d)
                            }
                        }({
                            c: [p5, cpc]
                        } = B5(a, [], [bd], dpc))
                    })(),
                    bpc);
                __c.LSa = {
                    f9a: function(a) {
                        const b = a.qx,
                            c = a.Qf,
                            d = a.vf,
                            e = a.ps,
                            f = a.uk,
                            g = a.cb,
                            h = a.Py,
                            k = a.zV;
                        wnc({
                            KE: a.KE,
                            cb: g,
                            mh: a.mh,
                            kjb: a.s1,
                            hb: a.hb
                        });
                        const l = Qnc({
                            LB: k,
                            cb: g,
                            uk: f,
                            Py: h
                        });
                        b.ega = Lnc({
                            Sp: l,
                            cb: g
                        });
                        c.Nfa = Cnc({
                            Sp: l
                        });
                        ({
                            UXa: a
                        } = Jnc({
                            Sp: l,
                            cf: e(),
                            ZRa: new Goc,
                            cb: g
                        }));
                        d.Jo.dga = a;
                        const {
                            AWa: m,
                            BWa: n,
                            zWa: p
                        } = Bnc({
                            cb: g
                        });
                        return {
                            Jxa: g5(q => a5(aoc, { ...q,
                                container: void 0,
                                Sp: l,
                                TXa: m,
                                VXa: n,
                                RXa: p,
                                Uh: boc
                            }))
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/ce22af223736269a.js.map