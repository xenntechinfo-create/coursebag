(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [18778], {

        /***/
        697478: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var E4 = function(a, b) {
                        var c = a.KTa.get(b);
                        if (c != null) return c;
                        c = {
                            value: a.qo.$q(b)
                        };
                        a.KTa.set(b, c);
                        a.ETa.set(c, b);
                        return c
                    },
                    F4 = function(a, b) {
                        a = a.ETa.get(b);
                        if (a == null) throw new xlc("ref does not exists");
                        return a
                    },
                    ylc = function() {
                        const a = b => {
                            if (b ? .type !== "text2") throw new G4("text2", b);
                            return b.value
                        };
                        return {
                            wk: b => ({
                                type: "text2",
                                value: b
                            }),
                            ar: b => {
                                if (b ? .type !== "text2") throw new H4("text2", b);
                                return b.value
                            },
                            $q: a,
                            mu: a
                        }
                    },
                    zlc = __webpack_require__(186901).EW;
                var I4 = class {
                        static F(a) {
                            __c.O(a, {
                                FDa: zlc
                            })
                        }
                        get FDa() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = E4(this, b);
                                if (c === void 0) throw new xlc("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.FDa.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(E4(this, c)) : void 0);
                            if (b != null) return E4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(E4(this, c)) : void 0);
                            if (b != null) return E4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(E4(this, d)) : void 0;
                            a = F4(this, a);
                            c = this.list.value.next(a, c);
                            if (c != null) return E4(this, c)
                        }
                        previous(a, b) {
                            var c = b ? d => b(E4(this, d)) : void 0;
                            a = F4(this, a);
                            c = this.list.value.previous(a, c);
                            if (c != null) return E4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(E4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(E4(this, b), c)).map(b => E4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(E4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(E4(this, b)))
                        }
                        constructor(a, b) {
                            this.qo =
                                b;
                            this.KTa = (I4.F(this), new WeakMap);
                            this.ETa = new WeakMap;
                            __c.w(a.type === "list");
                            this.list = a
                        }
                    },
                    Alc = class extends I4 {
                        replace(a, b) {
                            a = F4(this, a);
                            b = this.list.value.replace(a, this.qo.wk(b));
                            return E4(this, b)
                        }
                        yD(a, b) {
                            a = a != null ? F4(this, a) : void 0;
                            b = this.list.value.yD(a, this.qo.wk(b));
                            return E4(this, b)
                        }
                        qA(a, b) {
                            a = a != null ? F4(this, a) : void 0;
                            return this.list.value.qA(a, b.map(c => this.qo.wk(c))).map(c => E4(this, c))
                        }
                        insertBefore(a, b) {
                            a = a != null ? F4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.qo.wk(b));
                            return E4(this,
                                b)
                        }
                        append(a) {
                            a = this.list.value.append(this.qo.wk(a));
                            return E4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.qo.wk(a));
                            return E4(this, a)
                        }
                        delete(a) {
                            a = F4(this, a);
                            this.list.value.delete(a)
                        }
                        Pz(a) {
                            this.list.value.Pz(a ? b => a(E4(this, b)) : void 0)
                        }
                        moveBefore(a, b) {
                            a = a == null ? void 0 : F4(this, a);
                            b = F4(this, b);
                            this.list.value.moveBefore(a, b)
                        }
                    };
                var K4 = class {
                        static string(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "string") throw d === "toWidgetData" ? new G4("string", c) : new H4("string", c);
                                return c.value
                            };
                            return {
                                wk: c => ({
                                    type: "string",
                                    value: c
                                }),
                                ar: c => b(c, "toWidgetState"),
                                $q: c => b(c, "toWidgetData"),
                                mu: c => b(c, "toWidgetData")
                            }
                        }
                        static literal(a, b) {
                            if (a.length === 0) throw new J4("At least one value must be provided for literal types.");
                            const c = new Set(a),
                                d = (e, f) => {
                                    if (e == null && b != null) return b;
                                    if (e ? .type !== "string" || !c.has(e.value)) throw f ===
                                        "toWidgetData" ? new G4("literal", e) : new H4("literal", e);
                                    return e.value
                                };
                            return {
                                wk: e => ({
                                    type: "string",
                                    value: e
                                }),
                                ar: e => d(e, "toWidgetState"),
                                $q: e => d(e, "toWidgetData"),
                                mu: e => d(e, "toWidgetData")
                            }
                        }
                        static integer(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "int32" || !Number.isFinite(c.value) || !Number.isInteger(c.value)) throw d === "toWidgetData" ? new G4("integer", c) : new H4("integer", c);
                                return c.value
                            };
                            return {
                                wk: c => {
                                    if (!Number.isFinite(c) || !Number.isInteger(c)) throw new Blc("integer", c);
                                    return {
                                        type: "int32",
                                        value: c
                                    }
                                },
                                ar: c => b(c, "toWidgetState"),
                                $q: c => b(c, "toWidgetData"),
                                mu: c => b(c, "toWidgetData")
                            }
                        }
                        static double(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "double" || !Number.isFinite(c.value)) throw d === "toWidgetData" ? new G4("double", c) : new H4("double", c);
                                return c.value
                            };
                            return {
                                wk: c => {
                                    if (!Number.isFinite(c)) throw new Blc("double", c);
                                    return {
                                        type: "double",
                                        value: c
                                    }
                                },
                                ar: c => b(c, "toWidgetState"),
                                $q: c => b(c, "toWidgetData"),
                                mu: c => b(c, "toWidgetData")
                            }
                        }
                        static Hc(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "boolean") throw d === "toWidgetData" ? new G4("boolean", c) : new H4("boolean", c);
                                return c.value
                            };
                            return {
                                wk: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                ar: c => b(c, "toWidgetState"),
                                $q: c => b(c, "toWidgetData"),
                                mu: c => b(c, "toWidgetData")
                            }
                        }
                        static fill() {
                            const a = b => {
                                if (b ? .type !== "fill") throw new G4("fill", b);
                                return b.value
                            };
                            return {
                                wk: b => ({
                                    type: "fill",
                                    value: b
                                }),
                                ar: b => {
                                    if (b ? .type !== "fill") throw new H4("fill", b);
                                    return b.value
                                },
                                $q: a,
                                mu: a
                            }
                        }
                        static stroke() {
                            const a = b => {
                                if (b ? .type !== "stroke") throw new G4("stroke", b);
                                return b.value
                            };
                            return {
                                wk: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                ar: b => {
                                    if (b ? .type !== "stroke") throw new H4("stroke", b);
                                    return b.value
                                },
                                $q: a,
                                mu: a
                            }
                        }
                        static L(a) {
                            const b = new Set;
                            for (const d of Object.keys(a)) {
                                const [e] = a[d];
                                if (b.has(e)) throw new J4(`Duplicate serialized keys "${e}" found in record schema.`);
                                b.add(e)
                            }
                            const c = (d, e) => {
                                if (e ? .type !== "dict") throw new G4("record", e);
                                const f = {};
                                for (const g of Object.keys(a)) {
                                    const [h, k] = a[g], l = zlc(() => {
                                        const m = e.value.get(h);
                                        return k.$q(m)
                                    }, {
                                        keepAlive: !0
                                    });
                                    Object.defineProperty(f, g, {
                                        get() {
                                            return l.get()
                                        },
                                        set(m) {
                                            d !== "readonly" && (m = k.wk(m), m == null ? e.value.delete(h) : e.value.set(h, m))
                                        },
                                        enumerable: !0
                                    })
                                }
                                return f
                            };
                            return {
                                wk: d => {
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.wk(d[f]);
                                        k != null && (e[g] = k)
                                    }
                                    return {
                                        type: "dict",
                                        value: new Map(Object.entries(e))
                                    }
                                },
                                ar: d => {
                                    if (d ? .type !== "dict") throw new H4("record", d);
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.ar(d.value.get(g));
                                        k != null && (e[f] = k)
                                    }
                                    return e
                                },
                                $q: d => c("editable", d),
                                mu: d => c("readonly", d),
                                nb: d => K4.L({ ...a,
                                    ...d
                                })
                            }
                        }
                        static list(a) {
                            return {
                                wk: b =>
                                    ({
                                        type: "list",
                                        value: b.map(c => a.wk(c))
                                    }),
                                ar: b => {
                                    if (b ? .type !== "list") throw new H4("list", b);
                                    return b.value.filter(__c.Db).map(c => a.ar(c))
                                },
                                $q: b => {
                                    if (b ? .type !== "list") throw new G4("list", b);
                                    return new Alc(b, a)
                                },
                                mu: b => {
                                    if (b ? .type !== "list") throw new G4("list", b);
                                    return new I4(b, a)
                                }
                            }
                        }
                        static optional(a) {
                            return {
                                wk: b => {
                                    if (b != null) return a.wk(b)
                                },
                                ar: b => {
                                    if (b != null) return a.ar(b)
                                },
                                $q: b => {
                                    if (b != null) return a.$q(b)
                                },
                                mu: b => {
                                    if (b != null) return a.mu(b)
                                }
                            }
                        }
                        static union(a, b) {
                            const c = new Set(Object.keys(a)),
                                d = e => {
                                    if (e ? .type !==
                                        "dict") throw new G4("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new G4("union", e);
                                    return {
                                        F5: a[f],
                                        G5: g
                                    }
                                };
                            return {
                                wk: e => {
                                    const f = b(e);
                                    return {
                                        type: "dict",
                                        value: new Map([
                                            ["k", {
                                                type: "string",
                                                value: f
                                            }],
                                            ["v", a[f].wk(e)]
                                        ])
                                    }
                                },
                                ar: e => {
                                    if (e ? .type !== "dict") throw new H4("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new H4("union", e);
                                    const {
                                        F5: h,
                                        G5: k
                                    } = {
                                        F5: a[f],
                                        G5: g
                                    };
                                    return h.ar(k)
                                },
                                $q: e => {
                                    const {
                                        F5: f,
                                        G5: g
                                    } = d(e);
                                    return f.$q(g)
                                },
                                mu: e => {
                                    const {
                                        F5: f,
                                        G5: g
                                    } = d(e);
                                    return f.mu(g)
                                }
                            }
                        }
                    },
                    J4 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    xlc = class extends J4 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    G4 = class extends J4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    H4 = class extends J4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    Blc = class extends J4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of document state`)
                        }
                    };
                var Clc = {
                    kc: {
                        status: 2
                    },
                    PHb: new Map,
                    QHb: 0,
                    Mxb: void 0,
                    Zpb: void 0,
                    Pma: !1,
                    ayb: "unchecked",
                    JM: !1,
                    vyb: !1
                };
                var Dlc = K4.L({
                        type: ["t", K4.literal(["text2"], "text2"), "readonly"],
                        text: ["te", ylc()]
                    }),
                    L4 = K4.union({
                        text2: Dlc
                    }, a => a.type),
                    Elc = K4.L({
                        id: ["i", K4.string("")],
                        label: ["l", L4]
                    }),
                    Flc = K4.list(Elc),
                    Glc = K4.list(K4.string("")),
                    M4 = K4.L({
                        id: ["i", K4.string("")],
                        label: ["l", L4],
                        KD: ["tl", K4.literal(["c", "u"], "c")],
                        koa: ["k", K4.optional(K4.double(1))],
                        required: ["rq", K4.Hc(!1)],
                        S: ["c", K4.double(0)]
                    }),
                    Hlc = K4.L({
                        type: ["t", K4.literal(["r"], "r"), "readonly"]
                    }),
                    Ilc = K4.L({
                        type: ["t", K4.literal(["p"], "p"), "readonly"]
                    }),
                    Jlc = K4.L({
                        type: ["t",
                            K4.literal(["q"], "q"), "readonly"
                        ]
                    }),
                    Klc = K4.union({
                        r: Hlc,
                        p: Ilc,
                        q: Jlc
                    }, a => a.type),
                    Llc = M4.nb({
                        type: ["t", K4.literal(["select"], "select"), "readonly"],
                        variant: ["v", K4.optional(Klc)],
                        options: ["o", Flc],
                        XS: ["m", K4.optional(K4.integer(1))],
                        Oia: ["co", Glc]
                    }),
                    Mlc = K4.L({
                        type: ["t", K4.literal(["e"], "e"), "readonly"]
                    }),
                    Nlc = K4.L({
                        type: ["t", K4.literal(["f"], "f"), "readonly"],
                        OH: ["n", K4.integer(1)]
                    }),
                    Olc = K4.union({
                        e: Mlc,
                        f: Nlc
                    }, a => a.type),
                    Plc = M4.nb({
                        type: ["t", K4.literal(["text"], "text"), "readonly"],
                        placeholder: ["p", K4.string("")],
                        variant: ["v", Olc]
                    }),
                    Qlc = K4.L({
                        type: ["t", K4.literal(["a"], "a"), "readonly"]
                    }),
                    Rlc = K4.L({
                        type: ["t", K4.literal(["b"], "b"), "readonly"]
                    }),
                    Slc = K4.L({
                        type: ["t", K4.literal(["c"], "c"), "readonly"]
                    }),
                    Tlc = K4.L({
                        type: ["t", K4.literal(["d"], "d"), "readonly"]
                    }),
                    Ulc = K4.union({
                        a: Qlc,
                        b: Rlc,
                        c: Slc,
                        d: Tlc
                    }, a => a.type),
                    Vlc = M4.nb({
                        type: ["t", K4.literal(["number"], "number"), "readonly"],
                        variant: ["v", Ulc],
                        min: ["a", K4.optional(K4.double())],
                        max: ["b", K4.optional(K4.double())]
                    }),
                    Wlc = K4.union({
                        select: Llc,
                        text: Plc,
                        number: Vlc
                    }, a => a.type),
                    Xlc = K4.list(Wlc),
                    Ylc = K4.L({
                        ko: ["A", K4.optional(K4.double(1))],
                        lo: ["B", K4.optional(K4.double(1))],
                        Gq: ["C", K4.optional(K4.double(1))]
                    }),
                    Zlc = K4.L({
                        label: ["l", L4],
                        KD: ["B", K4.optional(K4.literal(["c", "u"]))],
                        Gq: ["C", K4.optional(K4.double(1))],
                        lo: ["E", K4.optional(K4.double(1))],
                        ko: ["D", K4.optional(K4.double(1))],
                        v0: ["F", K4.optional(K4.double(1))]
                    }),
                    $lc = K4.L({}),
                    amc = K4.L({
                        u0: ["A", K4.double(1.25)],
                        Gq: ["B", K4.double(1)],
                        lo: ["C", K4.double(1.25)],
                        ko: ["D", K4.double(1.25)],
                        background: ["E", K4.optional(K4.fill())]
                    }),
                    bmc = K4.L({
                        label: ["A", ylc()],
                        KD: ["tl", K4.literal(["c", "u"])]
                    }),
                    cmc = K4.literal(["l", "r"], "l"),
                    dmc = K4.L({
                        minHeight: ["mh", K4.double(1)],
                        minWidth: ["mw", K4.double(1)],
                        type: ["t", K4.literal(["poll", "quiz"], "poll"), "readonly"],
                        id: ["i", K4.string()],
                        jj: ["s", K4.string()],
                        gi: ["a", K4.optional(K4.string())],
                        direction: ["r", cmc],
                        X6: ["d", K4.string("")],
                        R0: ["pf", K4.fill()],
                        I1: ["sf", K4.fill()],
                        border: ["b", K4.stroke()],
                        S: ["c", K4.double(0)],
                        Ch: ["D", K4.optional(K4.double(16))],
                        si: ["E", K4.optional(K4.double(16))],
                        JL: ["F",
                            K4.optional(Ylc)
                        ],
                        nZ: ["hh", K4.Hc(!1)],
                        Vma: ["I", K4.optional(K4.Hc(!1))],
                        Xca: ["z", K4.Hc(!0)],
                        QCa: ["h", K4.optional($lc)],
                        title: ["j", K4.optional(bmc)],
                        header: ["A", K4.optional(amc)],
                        fields: ["f", Xlc],
                        footer: ["fo", K4.optional(Zlc)]
                    }),
                    emc = K4.union({
                        poll: dmc,
                        quiz: dmc
                    }, a => a.type);
                __c.pKa = {
                    Q1a: function() {
                        return {
                            $xb: Clc,
                            qo: emc
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/dea87fff7cf71dc0.js.map