(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [43432], {

        /***/
        290120: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var S0 = __c.S0;
                var L = __c.L;
                var cLc = async function(a, b) {
                        return a.uta(b, async () => {
                            const c = (0, __c.xc)()();
                            try {
                                if (a.fYa == null) throw Error("Scene document resources are not supported");
                                const d = c.r(await c.s(a.fYa.Ir({
                                        id: b,
                                        version: 1
                                    }, void 0))),
                                    e = {
                                        id: d.id,
                                        files: {
                                            g0a: d.content.url,
                                            RIa: d.Sc ? .url
                                        }
                                    };
                                (0, __c.Xb)(() => {
                                    a.scenes.set(e.id, e)
                                });
                                return e
                            } finally {
                                c.s()
                            }
                        })
                    },
                    fLc = function(a, b) {
                        if (a.Kh.Whb && b instanceof dLc) return new eLc(a.Kh.Whb, b);
                        throw Error("GltfResource needs GltfResource");
                    },
                    hLc = function(a) {
                        return gLc ? new dLc(a) : new dLc(a, {
                            environment_sdr: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                            environment_gain: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png"
                        })
                    },
                    iLc = function(a, b, c) {
                        let d = b - 1,
                            e = 0,
                            f = c - 1,
                            g = 0;
                        for (let h = 0; h < c; h++)
                            for (let k = 0; k < b; k++) a[3 + (h * b + k) * 4] !== 0 && (d = Math.min(d, k), e = Math.max(e, k), f = Math.min(f, h), g = Math.max(g, h));
                        a = g - f + 1;
                        return {
                            left: d,
                            top: c - (f + a),
                            width: e - d + 1,
                            height: a
                        }
                    },
                    jLc = function(a, b, c) {
                        const d = a.store.WE ? a.Kh.canvas :
                            a.store.HE;
                        if (d) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            a.store.WE && a.render(!1);
                            c.width = b;
                            c.height = b;
                            e.drawImage(d, 0, 0, b, b)
                        }
                    },
                    kLc = function(a, b) {
                        a.store.container = b;
                        b.contains(a.Kh.canvas) || b.appendChild(a.Kh.canvas)
                    },
                    mLc = function(a) {
                        if (a.store.Re) {
                            const b = requestAnimationFrame(lLc.wrap(() => mLc(a)));
                            a.store.bga = b;
                            a.render(a.store.IYa)
                        }
                    },
                    pLc = function({
                        Lka: a,
                        Kh: b
                    }) {
                        const c = new nLc;
                        return new oLc(c, a, b)
                    },
                    qLc = function(a) {
                        var b = __c.z(a.store.container, "Missing container"),
                            c = a.xg.QZ;
                        b.style.width = 2E3 * a.xg.da + "px";
                        b.style.height = 2E3 * a.xg.da + "px";
                        b.style.left = `-${c.left*a.xg.da}px`;
                        b.style.top = `-${c.top*a.xg.da}px`;
                        b.style.position = "absolute";
                        c = new Image; {
                            var d = a.xg;
                            b = a.u_(b);
                            const e = d.store.WE ? d.Kh.canvas : d.store.HE;
                            e ? (d.store.WE && (H7(d.Kh, b, b), d.render(!1)), d = e.toDataURL("image/png")) : d = ""
                        }
                        c.src = d;
                        a.store.hN = c
                    },
                    sLc = function(a) {
                        var b = __c.z(a.store.container, "Missing container");
                        b.style.position = "init";
                        b.style.left = "0";
                        b.style.top = "0";
                        b.style.width = "100%";
                        b.style.height =
                            "100%";
                        const c = document.createElement("canvas");
                        var d = a.xg;
                        b = a.u_(b);
                        if (d.store.isInitialized) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            var f = b / 2E3,
                                g = d.C8();
                            c.width = f * g.width;
                            c.height = f * g.height;
                            const h = rLc(d.Kh);
                            H7(d.Kh, b, b);
                            d.render(!1);
                            e.drawImage(d.Kh.canvas, g.left * f, g.top * f, g.width * f, g.height * f, 0, 0, g.width * f, g.height * f);
                            H7(d.Kh, h.width, h.height)
                        } else if (d.store.HE) {
                            e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            f = d.store.Aga;
                            g = d.store.FS /
                                2E3;
                            b /= 2E3;
                            c.width = Math.round(b * f.width);
                            c.height = Math.round(b * f.height);
                            e.drawImage(d.store.HE, f.left * g, f.top * g, f.width * g, f.height * g, 0, 0, c.width, c.height)
                        }
                        d = new Image;
                        d.src = c.toDataURL("image/png");
                        a.store.hN = d;
                        c.width = 1;
                        c.height = 1
                    },
                    tLc = function(a) {
                        const b = a.bn;
                        a = __c.HN.create({ ...__c.iD,
                            image: { ...__c.cJb,
                                media: { ...__c.JEb,
                                    id: a.uJ,
                                    version: 1
                                },
                                Bb: void 0
                            }
                        });
                        return I7(b, {
                            fill: a
                        })
                    },
                    wLc = function({
                        wjb: a,
                        qkb: b,
                        lkb: c,
                        hia: d,
                        Bzb: e,
                        bn: f,
                        qra: g
                    }) {
                        switch (d) {
                            case 1:
                                return I7(c, {});
                            case 3:
                                return I7(uLc, {
                                    M9: e || ""
                                });
                            case 0:
                                return I7(b, {});
                            case 2:
                                return I7(tLc, {
                                    bn: f,
                                    uJ: g || ""
                                });
                            case 4:
                                return I7(a, {});
                            case 5:
                                return I7(vLc, {});
                            default:
                                throw new __c.A(d);
                        }
                    },
                    DLc = function({
                        Qp: a,
                        le: b,
                        bn: c,
                        gA: d,
                        Kh: e,
                        gqa: f,
                        exports: g,
                        g7: h
                    }) {
                        const k = new xLc,
                            l = new yLc(k, a, b, d, e, f, h),
                            m = zLc(a),
                            n = ALc(a),
                            p = () => I7("div", {
                                children: "Error"
                            });
                        return BLc(() => {
                            J7(() => {
                                l.initialize();
                                return () => {
                                    l.destroy()
                                }
                            }, []);
                            J7(() => {
                                l.R2 && l.ki && g.emb && g.emb()
                            });
                            return I7(CLc, {
                                Kd: l.Kd,
                                children: I7(wLc, {
                                    hia: l.hia,
                                    Bzb: l.M9,
                                    selected: l.ki,
                                    qra: l.qra,
                                    bn: c,
                                    lkb: n,
                                    qkb: m,
                                    wjb: p
                                })
                            })
                        })
                    },
                    GLc = function(a) {
                        return ELc(({
                            data: b,
                            Ee: {
                                bn: c
                            },
                            Oh: {
                                le: d
                            }
                        }) => {
                            const e = FLc(() => DLc({
                                Qp: b,
                                le: d,
                                bn: c,
                                ...a
                            }), [b, d, c]);
                            return I7("div", {
                                className: "N73IPQ",
                                children: I7(e, {})
                            })
                        })
                    },
                    ILc = function(a, b, c) {
                        a = a.startSpan("load_resource", c);
                        return HLc(a, b)
                    },
                    HLc = function(a, b) {
                        return (typeof b === "function" ? b() : b).catch(lLc.wrap(c => {
                            a.setStatus("error");
                            throw c;
                        })).finally(lLc.wrap(() => {
                            a.end()
                        }))
                    },
                    H7 = function(a, b, c) {
                        a.canvas.width = b;
                        a.canvas.height = c
                    },
                    JLc = function(a, b) {
                        a.Gba = a.Gba.filter(c => c !== b)
                    },
                    rLc = function(a) {
                        return {
                            width: a.canvas.width,
                            height: a.canvas.height
                        }
                    },
                    LLc = async function(a) {
                        const b = K7()();
                        try {
                            a.zQ || (a.zQ = L7());
                            try {
                                const [{
                                    default: c,
                                    WebGlRenderer: d
                                }, {
                                    default: e
                                }] = b.r(await b.s(Promise.all([__webpack_require__.me(19779), __webpack_require__.me(104993)])));
                                b.r(await b.s(c({
                                    path: e
                                })));
                                a.rQa = d
                            } catch (c) {
                                throw b.r(), a.P4 = void 0, Error("Failed to initialize renderer", {
                                    cause: c
                                });
                            }
                            try {
                                a.GQ = KLc(a)
                            } catch (c) {
                                a.J.info(`Unable to initialize WebGL context error: ${c}`), M7(() => {
                                    a.bva = !0
                                })
                            }
                        } finally {
                            b.s()
                        }
                    },
                    L7 = function() {
                        const a = document.createElement("canvas");
                        a.width = 1E3;
                        a.height = 1E3;
                        a.style.width = "100%";
                        a.style.visibility = "visible";
                        return a
                    },
                    KLc = function(a, b = 0) {
                        if (b > 5) throw Error("Unable to recreate context");
                        const c = MLc(a);
                        a.GQ = new(__c.z(a.rQa))(c);
                        a.GQ.onContextLost = () => {
                            a.J.info("WebGL context lost for scene widget");
                            a.GQ = void 0;
                            a.P4 = void 0;
                            a.YFa = () => {
                                const d = a.canvas;
                                a.zQ = L7();
                                a.rQa && KLc(a, b + 1);
                                a.Gba.forEach(e => e(d));
                                a.YFa = void 0
                            }
                        };
                        return a.GQ
                    },
                    MLc = function(a) {
                        a = a.canvas;
                        let b;
                        const c = e => {
                            b = e.statusMessage ? ? "Unknown"
                        };
                        a.addEventListener("webglcontextcreationerror",
                            c);
                        const d = a.getContext("webgl");
                        a.removeEventListener("webglcontextcreationerror", c);
                        if (d != null) return d;
                        throw Error(b);
                    };
                __c.Wp.prototype.uta = __c.ea(12, function(a, b) {
                    const c = this.Ci.get(__c.Tp(a));
                    if (c != null && c.U$a != null) {
                        const e = this.aY.get(c);
                        if (e != null) return Promise.resolve({ ...c,
                            element: e
                        })
                    }
                    const d = __c.Tp(a);
                    if (a = this.pending.get(d)) return a;
                    c != null && c.U$a != null && (b = async () => {
                        const e = (0, __c.xc)()();
                        try {
                            const f = e.r(await e.s(__c.Vp(this, c)));
                            return { ...c,
                                element: f
                            }
                        } finally {
                            e.s()
                        }
                    });
                    b = b().finally(__c.Da.wrap(() => this.pending.delete(d)));
                    this.pending.set(d, b);
                    return b
                });
                __c.Xp.prototype.uta = __c.ea(11, function(a, b) {
                    var c = this.scenes.get(a);
                    if (c) return Promise.resolve(c);
                    if (c = this.pending.get(a)) return c;
                    b = b().finally(__c.Da.wrap(() => this.pending.delete(a)));
                    this.pending.set(a, b);
                    return b
                });
                var NLc = __webpack_require__(19779),
                    eLc = NLc.GltfRenderer,
                    dLc = NLc.GltfResource;
                var N7 = __webpack_require__(186901),
                    O7 = N7.EW,
                    M7 = N7.h5,
                    P7 = N7.mJ,
                    Q7 = N7.sH,
                    R7 = N7.XI;
                var lLc = __webpack_require__(245307).Fm;
                var K7 = __webpack_require__(75402)._;
                var OLc = __webpack_require__(322594),
                    I7 = OLc.jsx,
                    PLc = OLc.jsxs;
                var S7 = __webpack_require__(205482),
                    ELc = S7.memo,
                    J7 = S7.useEffect,
                    FLc = S7.useMemo,
                    QLc = S7.useRef,
                    RLc = S7.useState;
                var BLc = __webpack_require__(721226).PA;
                var gLc = __c.vc("1aab289f", !1),
                    SLc = class {
                        constructor(a) {
                            this.Kh = a
                        }
                    };
                var TLc = class {
                    static G(a) {
                        L(a, {
                            selected: Q7.ref,
                            ata: Q7.ref,
                            $sa: Q7.ref,
                            V9: Q7.ref,
                            bBb: Q7.ref
                        })
                    }
                    constructor(a) {
                        this.xg = a;
                        this.selected = (TLc.G(this), !1);
                        this.$sa = this.ata = !1;
                        this.V9 = 0;
                        this.bBb = !1
                    }
                };
                var oLc = class {
                    static G(a) {
                        L(a, {
                            initialize: R7,
                            Iub: R7,
                            AMa: R7,
                            Ccb: R7,
                            dispose: R7,
                            C8: R7,
                            Tka: R7,
                            Qdb: R7
                        })
                    }
                    async initialize(a) {
                        const b = K7()();
                        try {
                            if (!this.store.isInitialized && !this.store.Kd) {
                                this.store.Kd = !0;
                                var c = hLc(a);
                                this.store.Mka = c;
                                b.r(await b.s(c.load()));
                                c === this.store.Mka && (this.store.WE = fLc(this.Lka, c), this.Kh.Gba.push(this.Tka), this.render(!0), M7(() => {
                                    this.store.isInitialized = !0;
                                    this.store.Kd = !1
                                }))
                            }
                        } finally {
                            b.s()
                        }
                    }
                    Iub(a, b, c = !0) {
                        const d = this.C8();
                        this.store.QZ = d;
                        a = Math.round(Math.min(a.width * 2E3 /
                            d.width, 2E3));
                        H7(this.Kh, a, a);
                        this.store.FS = a;
                        this.store.da = b;
                        this.store.IYa = c;
                        this.Qdb()
                    }
                    get FS() {
                        return this.store.FS
                    }
                    get QZ() {
                        return this.store.QZ
                    }
                    AMa() {
                        this.store.Re = !1;
                        this.store.bga != null && (cancelAnimationFrame(this.store.bga), this.store.bga = void 0)
                    }
                    Ccb(a) {
                        this.store.TR = a
                    }
                    async dispose() {
                        const a = K7()();
                        try {
                            this.AMa();
                            if (this.isInitialized && this.store.container ? .contains(this.Kh.canvas)) {
                                this.store.Aga = this.C8();
                                const c = document.createElement("canvas");
                                jLc(this, this.store.FS, c);
                                this.store.HE =
                                    c
                            }
                            this.store.WE ? .dispose();
                            this.store.WE = void 0;
                            this.store.isInitialized = !1;
                            JLc(this.Kh, this.Tka);
                            this.store.Kd = !1;
                            const b = this.store.Mka;
                            this.store.Mka = void 0;
                            a.r(await a.s(b ? .load()));
                            b ? .dispose()
                        } finally {
                            a.s()
                        }
                    }
                    C8() {
                        if (this.store.Bga && this.store.TR === this.store.Bga ? .GIb) return this.store.Bga.ia;
                        var a = rLc(this.Kh);
                        H7(this.Kh, 2E3, 2E3);
                        this.render(!1);
                        const b = this.Kh.getImageData();
                        H7(this.Kh, a.width, a.height);
                        a = this.Dwb(b.data, b.width, b.height);
                        this.store.Bga = {
                            GIb: this.store.TR,
                            ia: a
                        };
                        return a
                    }
                    get isInitialized() {
                        return this.store.isInitialized
                    }
                    get Kd() {
                        return this.store.Kd
                    }
                    get Re() {
                        return this.store.Re
                    }
                    get da() {
                        return this.store.da
                    }
                    Qdb() {
                        this.AMa();
                        this.store.Re = !0;
                        mLc(this)
                    }
                    render(a) {
                        this.store.WE ? .render({
                            distance: 1,
                            rotationPhi: this.store.TR.rotation.x,
                            rotationTheta: this.store.TR.rotation.y,
                            enableGrid: a
                        })
                    }
                    constructor(a, b, c, d = iLc) {
                        this.store = a;
                        this.Lka = b;
                        this.Kh = c;
                        this.Dwb = d;
                        this.Tka = (oLc.G(this), e => {
                            M7(() => {
                                const f = this.store.Mka,
                                    g = this.store.container;
                                g && this.store.isInitialized && f && (g.contains(e) && g.removeChild(e), kLc(this, g), this.store.WE ? .dispose(), this.store.WE = void 0, this.store.WE = fLc(this.Lka, f), this.Kh.Gba.push(this.Tka), this.store.isInitialized = !0)
                            })
                        })
                    }
                };
                var nLc = class {
                    static G(a) {
                        L(a, {
                            Re: Q7.ref,
                            TR: Q7.ref,
                            bga: Q7.ref,
                            HE: Q7.ref,
                            Aga: Q7.ref,
                            Bga: Q7.ref,
                            isInitialized: Q7.ref,
                            Kd: Q7.ref,
                            da: Q7.ref,
                            QZ: Q7.ref
                        })
                    }
                    constructor() {
                        this.container = (nLc.G(this), void 0);
                        this.IYa = this.Re = !1;
                        this.TR = {
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 0
                            }
                        };
                        this.Aga = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.Kd = this.isInitialized = !1;
                        this.da = 1;
                        this.QZ = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.FS = 0
                    }
                };
                var ULc = ({
                        KAb: a
                    }) => PLc("div", {
                        className: "Wfem7A",
                        children: [I7("div", {
                            className: "CSoSRg"
                        }), I7("div", {
                            className: "__J59g",
                            style: {
                                width: a ? "100%" : "init",
                                height: a ? "init" : "100%",
                                aspectRatio: "1"
                            },
                            children: I7("div", {
                                className: "tEhdig"
                            })
                        })]
                    }),
                    CLc = ({
                        children: a,
                        Kd: b
                    }) => {
                        const c = QLc(null),
                            [d, e] = RLc(!1);
                        J7(() => {
                            c.current && e(c.current.clientWidth >= c.current.clientHeight)
                        }, [c]);
                        return b ? I7("div", {
                            ref: c,
                            className: "uDEnGQ",
                            children: PLc("div", {
                                className: "E8BDLQ",
                                children: [I7("div", {
                                    className: "II7r4Q",
                                    children: a
                                }), I7(ULc, {
                                    KAb: d
                                })]
                            })
                        }) : a
                    };
                var VLc = ({
                    KFb: a,
                    JFb: b
                }) => {
                    const c = QLc(null);
                    J7(() => {
                        const d = c.current;
                        c.current && a(c.current);
                        return () => {
                            d && b()
                        }
                    }, [c, a, b]);
                    return I7("div", {
                        ref: c,
                        style: {
                            display: "block",
                            position: "absolute"
                        }
                    })
                };
                var WLc = class {
                    get xg() {
                        return this.local.xg
                    }
                    constructor(a) {
                        this.local = a;
                        this.Uxb = b => {
                            const c = this.xg.QZ;
                            b.style.width = 2E3 * this.xg.da + "px";
                            b.style.height = 2E3 * this.xg.da + "px";
                            b.style.left = `-${c.left*this.xg.da}px`;
                            b.style.top = `-${c.top*this.xg.da}px`;
                            kLc(this.xg, b)
                        };
                        this.Txb = () => {
                            var b = this.xg;
                            if (b.isInitialized && b.store.container ? .contains(b.Kh.canvas)) {
                                b.store.Aga = b.C8();
                                const c = document.createElement("canvas");
                                jLc(b, b.store.FS, c);
                                b.store.HE = c
                            }
                            b.store.container ? .removeChild(b.Kh.canvas);
                            b.store.container =
                                void 0
                        }
                    }
                };
                var ALc = ({
                    local: a
                }) => {
                    const b = new WLc(a);
                    return () => I7(VLc, {
                        KFb: b.Uxb,
                        JFb: b.Txb
                    })
                };
                var XLc = ({
                    hN: a,
                    iGb: b,
                    onDispose: c
                }) => {
                    const d = QLc(null);
                    J7(() => {
                        d.current && b(d.current);
                        return () => c()
                    }, [d, b, c]);
                    J7(() => {
                        d.current && a && (a.style.width = "100%", a.style.height = "100%", d.current.firstChild && d.current.removeChild(d.current.firstChild), d.current.appendChild(a))
                    }, [d, a]);
                    return I7("div", {
                        ref: d,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                };
                var YLc = __c.vc("75810be2", !1),
                    ZLc = class {
                        static G(a) {
                            L(a, {
                                initialize: R7.bound,
                                dispose: R7.bound,
                                UXa: R7
                            })
                        }
                        initialize(a) {
                            YLc || (this.store.container = a, this.store.VXa = P7(() => [this.xg.store.TR, this.xg.Re], this.Xxb, {
                                fireImmediately: !1
                            }), this.store.SXa = P7(() => this.local.$sa, this.Vxb, {
                                fireImmediately: !0
                            }))
                        }
                        dispose() {
                            this.UXa();
                            this.store.VXa ? .();
                            this.store.VXa = void 0;
                            this.store.SXa ? .();
                            this.store.SXa = void 0
                        }
                        get hN() {
                            return this.store.hN
                        }
                        u_(a) {
                            a = a.getBoundingClientRect();
                            return Math.max(a.width, a.height) > 100 ?
                                this.xg.FS : 300
                        }
                        get xg() {
                            return this.local.xg
                        }
                        UXa() {
                            this.store.hN = void 0
                        }
                        constructor(a, b) {
                            this.store = a;
                            this.local = b;
                            this.Xxb = (ZLc.G(this), () => {
                                this.xg.Re || (this.local.$sa ? qLc(this) : sLc(this))
                            });
                            this.Vxb = () => {
                                this.local.$sa ? qLc(this) : sLc(this)
                            }
                        }
                    };
                var $Lc = class {
                    static G(a) {
                        L(a, {
                            hN: Q7.ref
                        })
                    }
                    constructor() {
                        this.container = ($Lc.G(this), void 0)
                    }
                };
                var zLc = ({
                    local: a
                }) => {
                    const b = new $Lc,
                        c = new ZLc(b, a);
                    return BLc(() => I7(XLc, {
                        iGb: c.initialize,
                        onDispose: c.dispose,
                        hN: c.hN
                    }))
                };
                var vLc = () => I7("div", {
                    className: "_7SJjPA"
                });
                var uLc = ({
                    M9: a
                }) => I7("img", {
                    src: a,
                    style: {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto"
                    }
                });
                var yLc = class {
                    static G(a) {
                        L(a, {
                            initialize: R7,
                            destroy: R7,
                            hia: O7,
                            Kd: O7,
                            isError: O7,
                            M9: O7,
                            WB: O7,
                            ki: O7,
                            q0a: R7,
                            v0a: R7,
                            w0a: R7
                        })
                    }
                    async initialize() {
                        const a = K7()();
                        try {
                            this.store.Dsb = P7(() => this.WB, this.q0a, {
                                fireImmediately: !0
                            });
                            const b = a.r(await a.s(cLc(this.gA, this.Qp.D.scene.id)));
                            M7(() => {
                                this.store.scene = b
                            })
                        } finally {
                            a.s()
                        }
                    }
                    destroy() {
                        this.WB && this.Qp.local.V9--;
                        this.Qp.local.V9 === 0 && this.xg.dispose();
                        this.store.Dsb ? .();
                        this.store.Xza ? .();
                        this.store.Wza ? .();
                        this.store.WXa ? .()
                    }
                    get hia() {
                        return this.IEa &&
                            this.WB && !this.xg.Re || this.WB && this.IEa && !this.ki || !this.WB && this.IEa ? 0 : this.LAb && this.xg.Re ? 1 : this.qra ? 2 : this.M9 ? 3 : this.isError ? 4 : 5
                    }
                    get Kd() {
                        return this.WB && this.ki && !this.xg.isInitialized
                    }
                    get isError() {
                        return !!this.store.scene && !this.store.scene.files.RIa
                    }
                    get M9() {
                        return this.store.scene ? .files.RIa
                    }
                    get IEa() {
                        return this.Qp.local.ata
                    }
                    get qra() {
                        return this.Qp.D.config.ref.snapshot ? .id
                    }
                    get WB() {
                        return !this.g7 && this.le === 30 && !this.Kh.T2a
                    }
                    get R2() {
                        return this.store.R2
                    }
                    get ki() {
                        return this.Qp.local.selected
                    }
                    get LAb() {
                        return this.WB &&
                            this.ki && this.xg.isInitialized
                    }
                    get xg() {
                        return this.Qp.local.xg
                    }
                    get D() {
                        return this.Qp.D
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.store = a;
                        this.Qp = b;
                        this.le = c;
                        this.gA = d;
                        this.Kh = e;
                        this.gqa = f;
                        this.g7 = g;
                        this.gyb = (yLc.G(this), () => {
                            if (!this.Qp.local.ata) {
                                var h = this.xg;
                                h.store.HE && (h.store.HE.width = 1, h.store.HE.height = 1, h.store.HE = void 0)
                            }
                        });
                        this.q0a = (h, k) => {
                            this.store.Xza ? .();
                            this.store.Wza ? .();
                            this.store.WXa ? .();
                            k && this.Qp.local.V9--;
                            this.WB ? (this.Qp.local.V9++, this.store.Xza = P7(() => ({
                                    selected: this.ki,
                                    scene: this.store.scene
                                }),
                                ({
                                    selected: l,
                                    scene: m
                                }) => this.v0a(l, m), {
                                    fireImmediately: !0
                                }), this.store.Wza = P7(() => [this.Qp.D.config.ref.rotationPhi, this.Qp.D.config.ref.rotationTheta], this.$xb, {
                                fireImmediately: !0
                            }), this.store.WXa = P7(() => [this.Qp.local.ata], this.gyb, {
                                fireImmediately: !1
                            })) : this.store.Xza = P7(() => ({
                                selected: this.ki
                            }), ({
                                selected: l
                            }) => this.w0a(l), {
                                fireImmediately: !0
                            })
                        };
                        this.v0a = async (h, k) => {
                            const l = K7()();
                            try {
                                if (k != null)
                                    if (!h) this.xg.dispose();
                                    else if (!this.xg.Kd) {
                                    var m = __c.z(k.files.g0a);
                                    l.r(await l.s(this.Kh.SSb));
                                    if (!this.Kh.T2a) {
                                        var n = this.gqa.startSpan("select");
                                        l.r(await l.s(ILc(this.gqa, async () => {
                                            const p = K7()();
                                            try {
                                                p.r(await p.s(this.xg.initialize(m)))
                                            } finally {
                                                p.s()
                                            }
                                        }, n)));
                                        n.end()
                                    }
                                }
                            } finally {
                                l.s()
                            }
                        };
                        this.w0a = h => {
                            this.store.R2 = this.g7;
                            h || (this.store.R2 = !1)
                        };
                        this.$xb = () => {
                            this.xg.Re || this.xg.Ccb({
                                rotation: {
                                    x: this.Qp.D.config.ref.rotationPhi,
                                    y: this.Qp.D.config.ref.rotationTheta,
                                    z: 0
                                }
                            })
                        }
                    }
                };
                var xLc = class {
                    static G(a) {
                        L(a, {
                            scene: Q7.ref,
                            R2: Q7.ref
                        })
                    }
                    constructor() {
                        this.Wza = (xLc.G(this), void 0);
                        this.R2 = !1
                    }
                };
                var aMc = class {
                    startSpan(a, b) {
                        a = `scene.${a}`;
                        return b ? this.fb.startSpan(a, b) : this.fb.xi(a, {
                            Pq: {
                                name: `editor.${a}`,
                                performance: {
                                    CJ: !0
                                }
                            }
                        })
                    }
                    constructor(a) {
                        this.fb = a
                    }
                };
                var bMc = __c.vc("5eb77351", !1),
                    cMc = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) || bMc,
                    dMc = class {
                        static G(a) {
                            L(a, {
                                bva: Q7.ref
                            })
                        }
                        get T2a() {
                            return this.bva
                        }
                        get SSb() {
                            this.YFa && this.YFa();
                            this.P4 || (this.P4 = LLc(this));
                            return this.P4
                        }
                        get canvas() {
                            this.zQ || (this.zQ = L7());
                            return this.zQ
                        }
                        get Whb() {
                            return this.GQ
                        }
                        getImageData() {
                            __c.x(this.GQ != null, "WebGlRenderer is not initialized");
                            return this.GQ.readPixels()
                        }
                        constructor(a) {
                            this.J = a;
                            this.zQ = (dMc.G(this), void 0);
                            this.Gba = [];
                            this.bva = !1;
                            cMc || (this.zQ =
                                L7(), this.P4 = LLc(this))
                        }
                    };
                var eMc = __c.y_()(() => ({
                    OYb(a, b, c) {
                        return {
                            data: {
                                D: {
                                    scene: {
                                        type: "scene",
                                        id: a,
                                        version: 0
                                    },
                                    config: {
                                        snapshot: void 0,
                                        rotationPhi: 6.02138592,
                                        rotationTheta: .08726646
                                    }
                                },
                                document: {}
                            },
                            P: {
                                width: b,
                                height: c
                            }
                        }
                    },
                    PYb(a, b, c, d) {
                        return {
                            data: {
                                D: {
                                    scene: {
                                        type: "scene",
                                        id: a,
                                        version: 0
                                    },
                                    config: {
                                        snapshot: b,
                                        rotationPhi: 6.02138592,
                                        rotationTheta: .08726646
                                    }
                                },
                                document: {}
                            },
                            P: {
                                width: c,
                                height: d
                            }
                        }
                    }
                }));
                var fMc = __c.J_({
                    D: __c.I_({
                        scene: S0.Lm(1, "SceneRef"),
                        config: S0.NTa(2, {
                            snapshot: S0.eHb(1, "MediaRef"),
                            rotationPhi: S0.iYa(2, {
                                min: 0,
                                max: 6.284
                            }),
                            rotationTheta: S0.iYa(3, {
                                min: -1.571,
                                max: 1.571
                            })
                        })
                    })
                });
                var gMc, hMc;
                gMc = __c.vc("646956e3", !1);
                hMc = __c.i_()(({
                    wi: a,
                    $L: b
                }) => {
                    var c = b.fb;
                    b = b.J.ag("scene_widget_rendering");
                    c = new aMc(c);
                    const d = new dMc(b),
                        e = new SLc(d),
                        f = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) && !gMc;
                    b = {
                        g7: f
                    };
                    a = GLc({
                        gA: a.gA,
                        Kh: d,
                        gqa: c,
                        exports: b,
                        g7: f
                    });
                    return {
                        metadata: {
                            type: "scene",
                            name: __c.K("6XoKOg"),
                            VV: g => g.scene.id
                        },
                        D6: () => {
                            const g = pLc({
                                Lka: e,
                                Kh: d
                            });
                            return new TLc(g)
                        },
                        D: __c.h_(a),
                        exports: b
                    }
                });
                __c.b0 = {};
                __c.b0.vVb = TLc;
                __c.b0.zh = eMc;
                __c.b0.Ro = hMc;
                __c.b0.Ah = fMc;
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/a8751e32ae3b55ff.js.map