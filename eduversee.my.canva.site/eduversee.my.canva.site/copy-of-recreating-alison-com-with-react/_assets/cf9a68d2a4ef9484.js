(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [94260], {

        /***/
        697478: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var S5 = function(a, b) {
                        var c = a.mfb.get(b);
                        if (c != null) return c;
                        c = {
                            value: a.Mq.ou(b)
                        };
                        a.mfb.set(b, c);
                        a.efb.set(c, b);
                        return c
                    },
                    T5 = function(a, b) {
                        a = a.efb.get(b);
                        if (a == null) throw new ZBc("ref does not exists");
                        return a
                    },
                    $Bc = function() {
                        const a = b => {
                            if (b ? .type !== "text2") throw new U5("text2", b);
                            return b.value
                        };
                        return {
                            om: b => ({
                                type: "text2",
                                value: b
                            }),
                            pu: b => {
                                if (b ? .type !== "text2") throw new V5("text2", b);
                                return b.value
                            },
                            ou: a,
                            gy: a
                        }
                    },
                    aCc = __webpack_require__(186901).EW;
                var bCc = class {
                        static G(a) {
                            __c.L(a, {
                                CXa: aCc
                            })
                        }
                        get CXa() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = S5(this, b);
                                if (c === void 0) throw new ZBc("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.CXa.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(S5(this, c)) : void 0);
                            if (b != null) return S5(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(S5(this, c)) : void 0);
                            if (b != null) return S5(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(S5(this, d)) : void 0;
                            a = T5(this, a);
                            c = this.list.value.next(a, c);
                            if (c != null) return S5(this, c)
                        }
                        previous(a, b) {
                            var c = b ? d => b(S5(this, d)) : void 0;
                            a = T5(this, a);
                            c = this.list.value.previous(a, c);
                            if (c != null) return S5(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(S5(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(S5(this, b), c)).map(b => S5(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(S5(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(S5(this, b)))
                        }
                        constructor(a, b) {
                            this.Mq =
                                b;
                            this.mfb = (bCc.G(this), new WeakMap);
                            this.efb = new WeakMap;
                            __c.x(a.type === "list");
                            this.list = a
                        }
                    },
                    cCc = class extends bCc {
                        replace(a, b) {
                            a = T5(this, a);
                            b = this.list.value.replace(a, this.Mq.om(b));
                            return S5(this, b)
                        }
                        TI(a, b) {
                            a = a != null ? T5(this, a) : void 0;
                            b = this.list.value.TI(a, this.Mq.om(b));
                            return S5(this, b)
                        }
                        hF(a, b) {
                            a = a != null ? T5(this, a) : void 0;
                            return this.list.value.hF(a, b.map(c => this.Mq.om(c))).map(c => S5(this, c))
                        }
                        insertBefore(a, b) {
                            a = a != null ? T5(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.Mq.om(b));
                            return S5(this,
                                b)
                        }
                        append(a) {
                            a = this.list.value.append(this.Mq.om(a));
                            return S5(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.Mq.om(a));
                            return S5(this, a)
                        }
                        delete(a) {
                            a = T5(this, a);
                            this.list.value.delete(a)
                        }
                        uE(a) {
                            this.list.value.uE(a ? b => a(S5(this, b)) : void 0)
                        }
                        moveBefore(a, b) {
                            a = a == null ? void 0 : T5(this, a);
                            b = T5(this, b);
                            this.list.value.moveBefore(a, b)
                        }
                    };
                var X5 = class {
                        static string(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "string") throw d === "toWidgetData" ? new U5("string", c) : new V5("string", c);
                                return c.value
                            };
                            return {
                                om: c => ({
                                    type: "string",
                                    value: c
                                }),
                                pu: c => b(c, "toWidgetState"),
                                ou: c => b(c, "toWidgetData"),
                                gy: c => b(c, "toWidgetData")
                            }
                        }
                        static literal(a, b) {
                            if (a.length === 0) throw new W5("At least one value must be provided for literal types.");
                            const c = new Set(a),
                                d = (e, f) => {
                                    if (e == null && b != null) return b;
                                    if (e ? .type !== "string" || !c.has(e.value)) throw f ===
                                        "toWidgetData" ? new U5("literal", e) : new V5("literal", e);
                                    return e.value
                                };
                            return {
                                om: e => ({
                                    type: "string",
                                    value: e
                                }),
                                pu: e => d(e, "toWidgetState"),
                                ou: e => d(e, "toWidgetData"),
                                gy: e => d(e, "toWidgetData")
                            }
                        }
                        static integer(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "int32" || !Number.isFinite(c.value) || !Number.isInteger(c.value)) throw d === "toWidgetData" ? new U5("integer", c) : new V5("integer", c);
                                return c.value
                            };
                            return {
                                om: c => {
                                    if (!Number.isFinite(c) || !Number.isInteger(c)) throw new dCc("integer", c);
                                    return {
                                        type: "int32",
                                        value: c
                                    }
                                },
                                pu: c => b(c, "toWidgetState"),
                                ou: c => b(c, "toWidgetData"),
                                gy: c => b(c, "toWidgetData")
                            }
                        }
                        static double(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "double" || !Number.isFinite(c.value)) throw d === "toWidgetData" ? new U5("double", c) : new V5("double", c);
                                return c.value
                            };
                            return {
                                om: c => {
                                    if (!Number.isFinite(c)) throw new dCc("double", c);
                                    return {
                                        type: "double",
                                        value: c
                                    }
                                },
                                pu: c => b(c, "toWidgetState"),
                                ou: c => b(c, "toWidgetData"),
                                gy: c => b(c, "toWidgetData")
                            }
                        }
                        static ad(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "boolean") throw d === "toWidgetData" ? new U5("boolean", c) : new V5("boolean", c);
                                return c.value
                            };
                            return {
                                om: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                pu: c => b(c, "toWidgetState"),
                                ou: c => b(c, "toWidgetData"),
                                gy: c => b(c, "toWidgetData")
                            }
                        }
                        static fill() {
                            const a = b => {
                                if (b ? .type !== "fill") throw new U5("fill", b);
                                return b.value
                            };
                            return {
                                om: b => ({
                                    type: "fill",
                                    value: b
                                }),
                                pu: b => {
                                    if (b ? .type !== "fill") throw new V5("fill", b);
                                    return b.value
                                },
                                ou: a,
                                gy: a
                            }
                        }
                        static stroke() {
                            const a = b => {
                                if (b ? .type !== "stroke") throw new U5("stroke", b);
                                return b.value
                            };
                            return {
                                om: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                pu: b => {
                                    if (b ? .type !== "stroke") throw new V5("stroke", b);
                                    return b.value
                                },
                                ou: a,
                                gy: a
                            }
                        }
                        static O(a) {
                            const b = new Set;
                            for (const d of Object.keys(a)) {
                                const [e] = a[d];
                                if (b.has(e)) throw new W5(`Duplicate serialized keys "${e}" found in record schema.`);
                                b.add(e)
                            }
                            const c = (d, e) => {
                                if (e ? .type !== "dict") throw new U5("record", e);
                                const f = {};
                                for (const g of Object.keys(a)) {
                                    const [h, k] = a[g], l = aCc(() => {
                                        const m = e.value.get(h);
                                        return k.ou(m)
                                    }, {
                                        keepAlive: !0
                                    });
                                    Object.defineProperty(f, g, {
                                        get() {
                                            return l.get()
                                        },
                                        set(m) {
                                            d !== "readonly" && (m = k.om(m), m == null ? e.value.delete(h) : e.value.set(h, m))
                                        },
                                        enumerable: !0
                                    })
                                }
                                return f
                            };
                            return {
                                om: d => {
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.om(d[f]);
                                        k != null && (e[g] = k)
                                    }
                                    return {
                                        type: "dict",
                                        value: new Map(Object.entries(e))
                                    }
                                },
                                pu: d => {
                                    if (d ? .type !== "dict") throw new V5("record", d);
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.pu(d.value.get(g));
                                        k != null && (e[f] = k)
                                    }
                                    return e
                                },
                                ou: d => c("editable", d),
                                gy: d => c("readonly", d),
                                Ab: d => X5.O({ ...a,
                                    ...d
                                })
                            }
                        }
                        static list(a) {
                            return {
                                om: b =>
                                    ({
                                        type: "list",
                                        value: b.map(c => a.om(c))
                                    }),
                                pu: b => {
                                    if (b ? .type !== "list") throw new V5("list", b);
                                    return b.value.filter(__c.sb).map(c => a.pu(c))
                                },
                                ou: b => {
                                    if (b ? .type !== "list") throw new U5("list", b);
                                    return new cCc(b, a)
                                },
                                gy: b => {
                                    if (b ? .type !== "list") throw new U5("list", b);
                                    return new bCc(b, a)
                                }
                            }
                        }
                        static optional(a) {
                            return {
                                om: b => {
                                    if (b != null) return a.om(b)
                                },
                                pu: b => {
                                    if (b != null) return a.pu(b)
                                },
                                ou: b => {
                                    if (b != null) return a.ou(b)
                                },
                                gy: b => {
                                    if (b != null) return a.gy(b)
                                }
                            }
                        }
                        static union(a, b) {
                            const c = new Set(Object.keys(a)),
                                d = e => {
                                    if (e ? .type !==
                                        "dict") throw new U5("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new U5("union", e);
                                    return {
                                        Tga: a[f],
                                        Uga: g
                                    }
                                };
                            return {
                                om: e => {
                                    const f = b(e);
                                    return {
                                        type: "dict",
                                        value: new Map([
                                            ["k", {
                                                type: "string",
                                                value: f
                                            }],
                                            ["v", a[f].om(e)]
                                        ])
                                    }
                                },
                                pu: e => {
                                    if (e ? .type !== "dict") throw new V5("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new V5("union", e);
                                    const {
                                        Tga: h,
                                        Uga: k
                                    } = {
                                        Tga: a[f],
                                        Uga: g
                                    };
                                    return h.pu(k)
                                },
                                ou: e => {
                                    const {
                                        Tga: f,
                                        Uga: g
                                    } = d(e);
                                    return f.ou(g)
                                },
                                gy: e => {
                                    const {
                                        Tga: f,
                                        Uga: g
                                    } = d(e);
                                    return f.gy(g)
                                }
                            }
                        }
                    },
                    W5 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    ZBc = class extends W5 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    U5 = class extends W5 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    V5 = class extends W5 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    dCc = class extends W5 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of document state`)
                        }
                    };
                var eCc = {
                    Kf: {
                        status: 2
                    },
                    bfc: new Map,
                    cfc: 0,
                    V3b: void 0,
                    hWb: void 0,
                    cDa: !1,
                    m4b: "unchecked",
                    MT: !1,
                    zn: !1
                };
                var fCc = X5.O({
                        type: ["t", X5.literal(["text2"], "text2"), "readonly"],
                        text: ["te", $Bc()]
                    }),
                    gCc = X5.union({
                        text2: fCc
                    }, a => a.type),
                    hCc = X5.O({
                        id: ["i", X5.string("")],
                        label: ["l", gCc]
                    }),
                    iCc = X5.list(hCc),
                    jCc = X5.list(X5.string("")),
                    kCc = X5.O({
                        id: ["i", X5.string("")],
                        label: ["l", gCc],
                        hJ: ["tl", X5.literal(["c", "u"], "c")],
                        REa: ["k", X5.optional(X5.double(1))],
                        required: ["rq", X5.ad(!1)],
                        V: ["c", X5.double(0)]
                    }),
                    lCc = X5.O({
                        type: ["t", X5.literal(["r"], "r"), "readonly"]
                    }),
                    mCc = X5.O({
                        type: ["t", X5.literal(["p"], "p"), "readonly"]
                    }),
                    nCc =
                    X5.O({
                        type: ["t", X5.literal(["q"], "q"), "readonly"]
                    }),
                    oCc = X5.union({
                        r: lCc,
                        p: mCc,
                        q: nCc
                    }, a => a.type),
                    pCc = kCc.Ab({
                        type: ["t", X5.literal(["select"], "select"), "readonly"],
                        variant: ["v", X5.optional(oCc)],
                        options: ["o", iCc],
                        G0: ["m", X5.optional(X5.integer(1))],
                        rya: ["co", jCc]
                    }),
                    qCc = X5.O({
                        type: ["t", X5.literal(["e"], "e"), "readonly"]
                    }),
                    rCc = X5.O({
                        type: ["t", X5.literal(["f"], "f"), "readonly"],
                        YN: ["n", X5.integer(1)]
                    }),
                    sCc = X5.union({
                        e: qCc,
                        f: rCc
                    }, a => a.type),
                    tCc = kCc.Ab({
                        type: ["t", X5.literal(["text"], "text"), "readonly"],
                        placeholder: ["p",
                            X5.string("")
                        ],
                        variant: ["v", sCc]
                    }),
                    uCc = X5.O({
                        type: ["t", X5.literal(["a"], "a"), "readonly"]
                    }),
                    vCc = X5.O({
                        type: ["t", X5.literal(["b"], "b"), "readonly"]
                    }),
                    wCc = X5.O({
                        type: ["t", X5.literal(["c"], "c"), "readonly"]
                    }),
                    xCc = X5.O({
                        type: ["t", X5.literal(["d"], "d"), "readonly"]
                    }),
                    yCc = X5.union({
                        a: uCc,
                        b: vCc,
                        c: wCc,
                        d: xCc
                    }, a => a.type),
                    zCc = kCc.Ab({
                        type: ["t", X5.literal(["number"], "number"), "readonly"],
                        variant: ["v", yCc],
                        min: ["a", X5.optional(X5.double())],
                        max: ["b", X5.optional(X5.double())]
                    }),
                    ACc = X5.union({
                            select: pCc,
                            text: tCc,
                            number: zCc
                        },
                        a => a.type),
                    BCc = X5.list(ACc),
                    CCc = X5.O({
                        Eq: ["A", X5.optional(X5.double(1))],
                        Fq: ["B", X5.optional(X5.double(1))],
                        Rt: ["C", X5.optional(X5.double(1))]
                    }),
                    DCc = X5.O({
                        label: ["l", gCc],
                        hJ: ["B", X5.optional(X5.literal(["c", "u"]))],
                        Rt: ["C", X5.optional(X5.double(1))],
                        Fq: ["E", X5.optional(X5.double(1))],
                        Eq: ["D", X5.optional(X5.double(1))],
                        cba: ["F", X5.optional(X5.double(1))]
                    }),
                    ECc = X5.O({}),
                    FCc = X5.O({
                        bba: ["A", X5.double(1.25)],
                        Rt: ["B", X5.double(1)],
                        Fq: ["C", X5.double(1.25)],
                        Eq: ["D", X5.double(1.25)],
                        background: ["E", X5.optional(X5.fill())]
                    }),
                    GCc = X5.O({
                        label: ["A", $Bc()],
                        hJ: ["tl", X5.literal(["c", "u"])]
                    }),
                    HCc = X5.literal(["l", "r"], "l"),
                    ICc = X5.O({
                        minHeight: ["mh", X5.double(1)],
                        minWidth: ["mw", X5.double(1)],
                        type: ["t", X5.literal(["poll", "quiz"], "poll"), "readonly"],
                        id: ["i", X5.string()],
                        Bs: ["s", X5.string()],
                        pG: ["a", X5.optional(X5.string())],
                        direction: ["r", HCc],
                        oia: ["d", X5.string("")],
                        Cba: ["pf", X5.fill()],
                        mca: ["sf", X5.fill()],
                        border: ["b", X5.stroke()],
                        V: ["c", X5.double(0)],
                        Qi: ["D", X5.optional(X5.double(16))],
                        Kj: ["E", X5.optional(X5.double(16))],
                        HS: ["F",
                            X5.optional(CCc)
                        ],
                        E_: ["hh", X5.ad(!1)],
                        lDa: ["I", X5.optional(X5.ad(!1))],
                        lra: ["z", X5.ad(!0)],
                        NWa: ["h", X5.optional(ECc)],
                        title: ["j", X5.optional(GCc)],
                        header: ["A", X5.optional(FCc)],
                        fields: ["f", BCc],
                        footer: ["fo", X5.optional(DCc)]
                    }),
                    JCc = X5.union({
                        poll: ICc,
                        quiz: ICc
                    }, a => a.type);
                __c.PHa = {
                    Sqb: function() {
                        return {
                            l4b: eCc,
                            Mq: JCc
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/cf9a68d2a4ef9484.js.map