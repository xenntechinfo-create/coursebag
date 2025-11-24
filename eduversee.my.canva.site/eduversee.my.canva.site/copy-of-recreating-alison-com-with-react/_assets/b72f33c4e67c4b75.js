(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [6712], {

        /***/
        258551: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var I_;
                var S0;
                var L = __c.L;
                var Ra = __c.Ra;
                var aJ = __c.aJ;
                var G = __c.G;
                var Y = __c.Y;
                var X = __c.X;
                var H = __c.H;
                var gD = __c.gD;
                var tf = __c.tf;
                var Jd = __c.Jd;
                var kd = __c.kd;
                var A = __c.A;
                var v = __c.v;
                var z = __c.z;
                var x = __c.x;
                var Ea = __c.Ea;
                var Ebc, Gbc, Fbc, Ibc, j_, Kbc, Mbc, Lbc, n_, Pbc, Tbc, Xbc, Rbc, s_, t_, dcc, jcc, r_, lcc, u_, pcc, qcc, ucc, z_, A_, vcc, B_, C_, D_, wcc, E_, F_, G_, xcc, H_, ycc, Acc, Bcc, Ccc, Dcc, Ecc, Fcc, Hcc, K_, L_, Gcc, Icc, Jcc, Kcc, Lcc, N_, Mcc, Ncc, Pcc, Qcc, Wcc, cdc, ndc, odc, pdc, qdc, e0, f0, g0, sdc, tdc, udc, h0, xdc, vdc, j0, zdc, k0, ydc, l0, Bdc, Ddc, Edc, Gdc, o0, Hdc, Udc, Vdc, Wdc, Xdc, s0, Idc, Kdc, Odc, Rdc, Tdc, q0, Qdc, Ydc, Fdc, $dc, aec, bec, Zdc, eec, fec, hec, u0, wec, tec, qec, sec, iec, lec, kec, rec, jec, xec, pec, nec, mec, v0, Bec, x0, Dec, Eec, Fec, Hec, Gec, Jec, z0, Qec, Uec, Sec, Xcc, D0, Wec, gdc,
                    hdc, idc, Yec, Zec, $ec, afc, bfc, ffc, hfc, E0, F0, G0, H0, Rcc, ifc, mfc, ofc, nfc, qfc, pfc, rfc, sfc, tfc, xfc, yfc, Afc, Bfc, Cfc, Dfc, Efc;
                Ebc = function(a, b) {
                    b = a.Ci.get(__c.Tp(b));
                    return b != null ? a.aY.get(b) : void 0
                };
                __c.h_ = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.i_ = function() {
                    return a => a
                };
                Gbc = function(a, b) {
                    b = Fbc(b);
                    return a.origin !== b.MOa ? {
                        valid: !1,
                        error: {
                            message: "Message origin does not match iframe src origin",
                            extra: new Map([
                                ["msg.origin", a.origin],
                                ["iframe.origin", b.MOa]
                            ])
                        }
                    } : {
                        valid: !0,
                        pca: b.pca
                    }
                };
                Fbc = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return Hbc;
                    a = (new URL(a)).origin;
                    return a === "null" ? Hbc : {
                        MOa: a,
                        pca: a
                    }
                };
                Ibc = function(a, b) {
                    if (!a) return Ea("missing 'data' field in MessageEvent");
                    const c = a.sandboxCommsSource ? ? a.source;
                    return c ? c !== "iframe" ? Ea("invalid source") : a.clientId !== b ? Ea("unknown client id") : (0, __c.Ba)() : Ea("'source' is missing in MessageEvent data object")
                };
                j_ = function(a, b) {
                    x(!a.disposed, "IFrameHostConnector disposed");
                    x(!a.j6.has(b), "Callback already registered");
                    a.j6.add(b)
                };
                Kbc = function(a) {
                    a.ne = setTimeout(k_.wrap(() => {
                        a.z$a(new Jbc)
                    }), 500)
                };
                Mbc = async function(a, b) {
                    const c = l_()();
                    try {
                        const f = b.requestId,
                            g = b.path,
                            h = b.payload,
                            k = a.V1.get(g);
                        if (k) {
                            a.iaa.G5.send({
                                type: "ack",
                                requestId: f
                            });
                            var d = setInterval(k_.wrap(() => a.iaa.G5.send({
                                type: "ack",
                                requestId: f
                            })), 9E3);
                            try {
                                const l = c.r(await c.s(k(h)));
                                clearInterval(d);
                                a.iaa.G5.send({
                                    type: "response",
                                    requestId: f,
                                    payload: l
                                })
                            } catch (l) {
                                c.r();
                                clearInterval(d);
                                b = "internal_error";
                                d = "Something went wrong on our end, if this issue persists please contact us.";
                                if (l instanceof m_) {
                                    var e = l;
                                    l.code === "internal_error" ?
                                        a.J.Vb(l, {
                                            Ke: "Internal error in comms handler",
                                            tags: new Map([
                                                ["type", "request"],
                                                ["path", g]
                                            ])
                                        }) : (b = l.code, d = l.xJb)
                                } else a.nKb ? a.J.Vb(l, {
                                    Ke: "Unexpected error type thrown from comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", g]
                                    ])
                                }) : a.jsb.error(l);
                                const m = Lbc(a.iaa, f, b, d);
                                m.ok || a.J.QR(m.error, {
                                    Ke: "unable to send error response",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", g]
                                    ])
                                })
                            }
                            if (e != null)
                                for (const l of a.xub) try {
                                    l(e)
                                } catch (m) {
                                    a.J.JG(m, {
                                        Ke: "Error executing errorObserver"
                                    })
                                }
                        } else {
                            const l = Lbc(a.iaa,
                                f, "internal_error", `No request handler configured for path: "${g}".`);
                            l.ok || a.J.QR(l.error, {
                                Ke: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", g]
                                ])
                            })
                        }
                    } finally {
                        c.s()
                    }
                };
                Lbc = function(a, b, c, d) {
                    return a.G5.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                n_ = function(a, b, c, d, e) {
                    a.handle(b, async f => {
                        const g = l_()();
                        try {
                            if (f === void 0) throw new m_({
                                code: "internal_error",
                                message: `${b}: request cannot be undefined.`
                            });
                            var h = c.za(f);
                            const k = g.r(await g.s(d(h)));
                            if (e) return e.Fa(k)
                        } finally {
                            g.s()
                        }
                    })
                };
                Pbc = function(a, b) {
                    n_(a, "INIT_DATA", Nbc, c => b.p0a(c), o_);
                    n_(a, "DATA_RENDER_READY", Obc, c => b.u0a(c), p_)
                };
                Tbc = async function(a, b) {
                    const c = l_()();
                    try {
                        const d = c.r(await c.s(a.BY.request("INTERACTION_MODE_CHANGED", Qbc.Fa(b)))),
                            e = Rbc(d, "INTERACTION_MODE_CHANGED");
                        return Sbc.za(e)
                    } finally {
                        c.s()
                    }
                };
                Xbc = function(a, b) {
                    n_(a, "SELECTION_CHANGED", Ubc, c => b.dyb(c), q_);
                    n_(a, "TEXT_CONTENT_CHANGED", Vbc, c => b.fyb(c), Wbc)
                };
                Rbc = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                s_ = async function(a, b) {
                    const c = l_()();
                    try {
                        const d = c.r(await c.s(a.BY.request("RENDER_ELEMENT", Ybc.Fa(b)))),
                            e = r_(d, "RENDER_ELEMENT");
                        return Zbc.za(e)
                    } finally {
                        c.s()
                    }
                };
                t_ = async function(a, b) {
                    const c = l_()();
                    try {
                        const d = c.r(await c.s(a.BY.request("SET_CAPABILITY", $bc.Fa(b)))),
                            e = r_(d, "SET_CAPABILITY");
                        return acc.za(e)
                    } finally {
                        c.s()
                    }
                };
                dcc = async function(a, b) {
                    const c = l_()();
                    try {
                        const d = c.r(await c.s(a.BY.request("SET_EDIT_PANEL_VALUE", bcc.Fa(b)))),
                            e = r_(d, "SET_EDIT_PANEL_VALUE");
                        return ccc.za(e)
                    } finally {
                        c.s()
                    }
                };
                jcc = function(a, b) {
                    n_(a, "INIT_ELEMENT", ecc, c => b.UCa(c), fcc);
                    n_(a, "SET_CONFIG", gcc, c => b.eyb(c), hcc);
                    n_(a, "RESIZE_EVENT", icc, c => b.XCa(c))
                };
                r_ = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                lcc = function(a, b) {
                    n_(a, "RESIZE_EVENT", kcc, c => b.XCa(c))
                };
                u_ = function(a, b, c) {
                    const d = ({
                        Qpb: e
                    }) => {
                        var f = e.clientId;
                        e = e.eJb;
                        if (f !== c.clientId || e !== b) return Promise.resolve({
                            type: "connection_request_not_matched"
                        });
                        e = z(a.EY.get(b));
                        f = z(e.get(f));
                        if (f.connected) return Promise.resolve({
                            type: "already_connected"
                        });
                        const {
                            port1: g,
                            port2: h
                        } = new MessageChannel;
                        e = new mcc(g, a.J);
                        c.Iha(e);
                        f.connected = !0;
                        return Promise.resolve({
                            type: "connection_request_matched",
                            port: h
                        })
                    };
                    z(a.EY.get(b)).set(c.clientId, {
                        handler: d,
                        connected: !1
                    });
                    return d
                };
                pcc = function(a, b, {
                    mK: c,
                    L2: d,
                    K2: e,
                    M2: f
                }) {
                    a.EY.has(b) || (a.EY.set(b, new Map), j_(a.w9, u_(a, b, {
                        clientId: "canva-code-data-sdk",
                        Iha: g => {
                            const {
                                vWa: h
                            } = c();
                            Pbc(g, h)
                        }
                    })), d && j_(a.w9, u_(a, b, {
                        clientId: "canva-code-element-sdk",
                        Iha: g => {
                            const {
                                ntb: h
                            } = d(new ncc(g));
                            jcc(g, h)
                        }
                    })), e && j_(a.w9, u_(a, b, {
                        clientId: "canva-code-editing-sdk",
                        Iha: g => {
                            const {
                                htb: h
                            } = e(new occ(g));
                            Xbc(g, h)
                        }
                    })), f && j_(a.w9, u_(a, b, {
                        clientId: "canva-code-resizing-sdk",
                        Iha: g => {
                            const {
                                AKb: h
                            } = f();
                            lcc(g, h)
                        }
                    })))
                };
                qcc = function(a) {
                    a = (new DOMParser).parseFromString(a, "text/html");
                    a = z(a.querySelector("iframe"));
                    return {
                        id: a.id,
                        src: z(a.getAttribute("src")),
                        sandbox: a.sandbox.toString(),
                        allow: a.allow,
                        allowFullscreen: a.allowFullscreen
                    }
                };
                ucc = function({
                    le: a,
                    Tu: b,
                    Jw: c,
                    ab: d,
                    J: e,
                    LOa: f
                }) {
                    const g = __c.Fa(() => new rcc(e, f))(),
                        h = new scc(g, e),
                        k = (l, m) => e.error(l, {
                            Ke: "codelet: ",
                            extra: new Map(Object.entries(m))
                        });
                    return v_(l => {
                        const {
                            qJa: m,
                            bOa: n
                        } = w_(() => ({
                            qJa: q => pcc(h, q, {
                                mK: l.mK,
                                L2: l.L2,
                                K2: l.K2,
                                M2: l.M2
                            }),
                            bOa: q => {
                                const r = h.EY.get(q);
                                if (r) {
                                    for (const w of r.keys()) {
                                        var t = r.get(w);
                                        if (t ? .handler) {
                                            var u = h.w9;
                                            t = t.handler;
                                            x(!u.disposed, "IFrameHostConnector disposed");
                                            u.j6.delete(t)
                                        }
                                    }
                                    h.EY.delete(q)
                                }
                            }
                        }), [l.mK, l.L2, l.K2, l.M2]), p = w_(() => q => x_(tcc, {
                            className: q.className,
                            url: l.url,
                            embed: q.embed,
                            H2: q.H2,
                            qJa: m,
                            bOa: n
                        }), [m, n, l.url]);
                        return x_(__c.sx, {
                            url: l.url,
                            store: b,
                            On: c,
                            lI: k,
                            ab: d,
                            gV: a > 10,
                            ik: l.ik || !1,
                            GF: l.GF,
                            sjb: p
                        })
                    })
                };
                __c.y_ = function() {
                    return a => a
                };
                z_ = function(a, b) {
                    return b.map(c => ({
                        type: a,
                        id: c.id,
                        version: c.version
                    }))
                };
                A_ = function(a) {
                    return {
                        kind: 0,
                        KO: a
                    }
                };
                vcc = function() {
                    return {
                        kind: 1
                    }
                };
                B_ = function(a) {
                    return {
                        kind: 3,
                        range: a
                    }
                };
                C_ = function(a) {
                    return {
                        kind: 2,
                        range: a
                    }
                };
                D_ = function(...a) {
                    return {
                        kind: 4,
                        values: new Set(a)
                    }
                };
                wcc = function(a) {
                    return {
                        kind: 5,
                        itemType: a
                    }
                };
                E_ = function(a) {
                    return {
                        kind: 7,
                        name: a
                    }
                };
                F_ = function(a) {
                    return {
                        kind: 8,
                        itemType: a
                    }
                };
                G_ = function(a) {
                    return {
                        kind: 10,
                        fields: a
                    }
                };
                xcc = function(a, ...b) {
                    return {
                        kind: 11,
                        MXa: a,
                        Nh: b
                    }
                };
                H_ = function(a, b, c) {
                    return (d, ...e) => ({
                        key: d,
                        FLa: a,
                        SF: b,
                        type: c(...e)
                    })
                };
                I_ = __c.I_ = function(a) {
                    const b = new Set;
                    for (const c of Object.values(a)) v(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
                    return a
                };
                ycc = function(a) {
                    switch (a.kind) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            return !1;
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            return !0;
                        default:
                            throw new A(a);
                    }
                };
                __c.J_ = function(a) {
                    return () => ({ ...zcc,
                        ...a
                    })
                };
                Acc = function(a, b) {
                    a = { ...a.YY
                    };
                    b.pb.every(c => !!c.fill.Nd.ref ? .image && !!c.fill.Nd.ref ? .video) && (a.mt = !0);
                    return a
                };
                Bcc = function(a, b) {
                    a = { ...a.YY
                    };
                    b.tb.every(c => !!c.Nd.ref ? .text) && (a.mt = !0);
                    return a
                };
                Ccc = function(a, b) {
                    a = { ...a.YY
                    };
                    b.cells.every(c => !!c.fill.Nd.ref ? .image && !!c.fill.Nd.ref ? .video) && (a.mt = !0);
                    return a
                };
                Dcc = function(a, b) {
                    switch (b.type) {
                        case "rect":
                            return a = { ...a.YY
                            }, b.fill.Nd.ref ? .image && b.fill.Nd.ref ? .video && (a.mt = !0), a;
                        case "shape":
                            return Acc(a, b);
                        case "text":
                            return a = { ...a.YY
                            }, b.Nd.ref ? .text && (a.mt = !0), a;
                        case "chart":
                            return { ...a.YY
                            };
                        case "line":
                            return Bcc(a, b);
                        case "grid":
                            return Ccc(a, b);
                        default:
                            throw new A(b);
                    }
                };
                Ecc = function(a, b) {
                    return a.e.classes.w4.create({}, {
                        U: {
                            fill: K_(a, b.fill)
                        },
                        attributes: { ...L_(a, b),
                            V: () => b.V
                        }
                    })
                };
                Fcc = function(a, b) {
                    return a.e.classes.nfa.create({}, {
                        U: {
                            pb: a.e.list(b.pb.map(c => a.createPath(c))),
                            tb: b.tb,
                            resizeMode: b.resizeMode,
                            slice: b.slice
                        },
                        attributes: { ...L_(a, b),
                            kj: () => b.kj,
                            viewBox: () => b.viewBox
                        }
                    })
                };
                Hcc = function(a, b) {
                    return a.e.classes.bua.create({}, {
                        U: {
                            cells: a.e.$c(Object.fromEntries(Array.from(b.cells.entries()).map(([c, d]) => [c, Gcc(a, d)])))
                        },
                        attributes: { ...L_(a, b),
                            layout: () => b.layout
                        }
                    })
                };
                K_ = function(a, b) {
                    const c = {
                        ref: void 0,
                        set: () => {}
                    };
                    return a.e.classes.r4.create({}, {
                        U: {
                            image: a.e.computed(() => Icc(a.Nd, c, b.Nd.ref ? .video).ref == null ? Jcc(a.Nd, b.image, b.Nd.ref ? .image) : c),
                            video: a.e.computed(() => Jcc(a.Nd, c, b.Nd.ref ? .image).ref == null ? Icc(a.Nd, b.video, b.Nd.ref ? .video) : c),
                            Za: b.Za
                        },
                        attributes: {
                            Hm: () => b.Hm,
                            color: () => b.color,
                            Ra: () => b.Ra,
                            locked: () => b.locked,
                            Vg: () => b.Vg,
                            Rl: () => b.Rl,
                            cd: () => b.cd,
                            flipX: () => b.flipX,
                            flipY: () => b.flipY
                        }
                    })
                };
                L_ = function(a, b) {
                    return {
                        height: () => b.height,
                        width: () => b.width,
                        top: () => b.top,
                        left: () => b.left,
                        rotation: () => b.rotation,
                        rh: () => Dcc(a.R3a, b),
                        locked: !0
                    }
                };
                Gcc = function(a, b) {
                    return a.e.classes.aua.create({}, {
                        U: {
                            fill: K_(a, b.fill),
                            stroke: b.stroke
                        },
                        attributes: {
                            V: () => b.V
                        }
                    })
                };
                Icc = function(a, b, c) {
                    const d = c ? a.Nd ? .get(c) : void 0;
                    return {
                        ref: (d && Kcc(d, "video_fill")) ? .video.ref ? ? b.ref,
                        set: e => Lcc(a, {
                            type: "video_fill",
                            value: { ...__c.iD,
                                video: e
                            }
                        }, c)
                    }
                };
                Jcc = function(a, b, c) {
                    const d = c ? a.Nd ? .get(c) : void 0;
                    return {
                        ref: (d && Kcc(d, "image_fill")) ? .image.ref ? ? b.ref,
                        set: e => Lcc(a, {
                            type: "image_fill",
                            value: { ...__c.iD,
                                image: e
                            }
                        }, c)
                    }
                };
                Kcc = function(a, b) {
                    if (a.type !== b) throw Error(`Expected override type ${b} but got ${a.type}`);
                    return a.value
                };
                Lcc = function(a, b, c) {
                    if (!c) throw Error("No override key is available, but this is being set on an instance. This is likely an error with the locking logic.");
                    a.Nd.set(c, b)
                };
                N_ = async function(a, b) {
                    const c = l_()();
                    try {
                        const [d] = c.r(await c.s(a.Fja([b])));
                        return new M_({
                            id: b.id,
                            url: d.fonts[0].files[0].url
                        })
                    } finally {
                        c.s()
                    }
                };
                Mcc = async function(a, b, c) {
                    const d = l_()();
                    try {
                        const e = d.r(await d.s(N_(a, c)));
                        return t_(b, e)
                    } finally {
                        d.s()
                    }
                };
                Ncc = async function(a, b, c, d, e, f, g) {
                    const h = l_()();
                    try {
                        try {
                            const k = b.cka.ref ? .first(),
                                l = a.wa,
                                m = h.r(await h.s(s_(c, {
                                    config: b.config,
                                    NS: l != null && k != null ? h.r(await h.s(N_(l, k))) : void 0
                                })));
                            a.config.bz ? .Vsa({ ...m,
                                sI: m.sI ? .size
                            }, b, d, e, f, g)
                        } catch (k) {
                            h.r(), a.J.JG(k)
                        } finally {
                            a.dLa()
                        }
                    } finally {
                        h.s()
                    }
                };
                Pcc = function(a, b) {
                    const c = new Map;
                    return O_(() => {
                        const d = new Map;
                        a.config.forEach((e, f) => {
                            let g;
                            const h = c.get(f);
                            e.textContent !== h ? .textContent && (g = { ...(g ? ? new P_({})),
                                textContent: e.textContent
                            });
                            e.backgroundColor !== h ? .backgroundColor && (g = { ...(g ? ? new P_({})),
                                backgroundColor: e.backgroundColor
                            });
                            g && d.set(f, g);
                            c.set(f, { ...e
                            })
                        });
                        return d
                    }, async d => b.wca(new Occ({
                        config: d
                    })), {
                        fireImmediately: !0
                    })
                };
                Qcc = function(a, b) {
                    return O_(() => a.y4b, c => Tbc(b, new Qbc({
                        mode: c
                    })), {
                        fireImmediately: !0
                    })
                };
                Wcc = function(a) {
                    function b(d, e) {
                        var f = c;
                        e = e();
                        v(!f.ica.has(d));
                        e = {
                            document: Rcc(f.XVa(d, e.document)),
                            D: Rcc(f.XVa(d, e.D))
                        };
                        f.ica.set(d, e);
                        return {
                            id: d,
                            Mq: e
                        }
                    }
                    const c = a.sPa;
                    return {
                        Ys: b("w:wnJF5T87v", Scc),
                        rZ: b("w:xB9fK2LmQ", Tcc),
                        Mj: a.yAa ? Promise.all([__webpack_require__.me(288639).then(() => __c.Q_), __webpack_require__.me(229274).then(() => __c.R_), __webpack_require__.me(89563).then(() => __c.S_), __webpack_require__.me(706140).then(() => __c.T_), __webpack_require__.me(58313).then(() => __c.U_), __webpack_require__.me(879434).then(() =>
                            __c.V_), __webpack_require__.me(181007).then(() => __c.W_), __webpack_require__.me(354456).then(() => __c.X_), __webpack_require__.me(920429).then(() => __c.Y_), __webpack_require__.me(580825).then(() => __c.Z_)]).then(k_.wrap(([d, e, f, g, h, k, l, m, n, p]) => ({
                            aZ: b("w:cm9wgGptP", d.Ah),
                            cZ: b("w:yLMS4dWnl", e.Ah),
                            dZ: b("w:2flp30CGQ", f.Ah),
                            eZ: b("w:1Nv6K6Dtv", g.Ah),
                            fZ: b("w:5Nv6K6Dtv", h.Ah),
                            gZ: b("w:6Nv6K6Dtv", k.Ah),
                            hZ: b("w:7Nv6K6Dtv", l.Ah),
                            iZ: b("w:8Nv6K6Dtv", m.Ah),
                            jZ: b("w:9Nv6K6Dtv", n.Ah),
                            bZ: b("w:sSrc7m4Q3", p.Ah)
                        }))) : void 0,
                        hB: b("w:JR4G8hDDg", Ucc),
                        rY: b("w:KS5H9iEEh", Vcc),
                        form: __webpack_require__.me(649E3).then(() => __c.$_).then(k_.wrap(d => b("widget:form", d.Ah))),
                        RN: a.FAa ? __webpack_require__.me(320784).then(() => __c.a0).then(k_.wrap(d => b("w:K7mQ9xR3p", d.Ah))) : void 0,
                        scene: a.KAa ? __webpack_require__.me(290120).then(() => __c.b0).then(k_.wrap(d => b("w:2pbXJMtm1", d.Ah))) : void 0,
                        button: __webpack_require__.me(856598).then(() => __c.c0).then(k_.wrap(d => b("w:PQccHDsCJ", d.Ah)))
                    }
                };
                cdc = function(a) {
                    function b({
                        id: f,
                        Mq: g
                    }, h, k) {
                        var l = e;
                        h = h(k);
                        k = z(l.hKa.ica.get(f));
                        v(k.D === g.D);
                        v(!l.aWa.has(f));
                        g = Xcc(f, h, g);
                        l.aWa.set(f, g);
                        return g
                    }
                    const c = new Ycc,
                        d = a.tPa,
                        e = a.rPa;
                    return {
                        fhc: c,
                        Mj: d.Mj ? Promise.all([d.Mj, __webpack_require__.me(288639).then(() => __c.Q_), __webpack_require__.me(229274).then(() => __c.R_), __webpack_require__.me(89563).then(() => __c.S_), __webpack_require__.me(706140).then(() => __c.T_), __webpack_require__.me(58313).then(() => __c.U_), __webpack_require__.me(879434).then(() => __c.V_),
                            __webpack_require__.me(181007).then(() => __c.W_), __webpack_require__.me(354456).then(() => __c.X_), __webpack_require__.me(920429).then(() => __c.Y_), __webpack_require__.me(580825).then(() => __c.Z_)
                        ]).then(k_.wrap(([f, g, h, k, l, m, n, p, q, r, t]) => ({
                            aZ: b(f.aZ, g.zh, void 0),
                            cZ: b(f.cZ, h.zh, void 0),
                            dZ: b(f.dZ, k.zh, void 0),
                            eZ: b(f.eZ, l.zh, void 0),
                            fZ: b(f.fZ, m.zh, void 0),
                            gZ: b(f.gZ, n.zh, void 0),
                            hZ: b(f.hZ, p.zh, void 0),
                            iZ: b(f.iZ, q.zh, void 0),
                            jZ: b(f.jZ, r.zh, void 0),
                            bZ: b(f.bZ, t.zh, void 0)
                        }))) : void 0,
                        scene: d.scene ? Promise.all([d.scene,
                            __webpack_require__.me(290120).then(() => __c.b0)
                        ]).then(k_.wrap(([f, g]) => b(f, g.zh, void 0))) : void 0,
                        button: Promise.all([d.button, __webpack_require__.me(856598).then(() => __c.c0)]).then(k_.wrap(([f, g]) => b(f, g.zh, {
                            aja: c.aja
                        }))),
                        hB: b(d.hB, Zcc, void 0),
                        rY: b(d.rY, $cc, void 0),
                        form: Promise.all([d.form, __webpack_require__.me(649E3).then(() => __c.$_)]).then(k_.wrap(([f, g]) => b(f, g.zh, void 0))),
                        Ys: b(d.Ys, adc, void 0),
                        rZ: b(d.rZ, bdc, void 0),
                        RN: d.RN ? Promise.all([d.RN, __webpack_require__.me(320784).then(() => __c.a0)]).then(k_.wrap(([f,
                            g
                        ]) => b(f, g.zh, void 0))) : void 0
                    }
                };
                ndc = function(a) {
                    const b = a.tPa,
                        c = a.Lea,
                        d = a.mg,
                        e = a.$L,
                        f = a.wi;
                    class g extends ddc {
                        async load() {
                            const m = l_()();
                            try {
                                const [n, p, q] = m.r(await m.s(Promise.all([this.Pn, this.loadModule(), Promise.resolve(this.wi)]))), r = n.id, t = n.Mq, u = p.Ro({
                                    $L: { ...e,
                                        fb: d.hz(`widgets.rendering.clients.${this.qm}`)
                                    },
                                    wi: q
                                }), w = z(c.hKa.ica.get(r));
                                v(w.D === t.D);
                                v(!c.jV.has(r));
                                edc.has(r) || (__c.yAb.set(r, fdc), edc.add(r));
                                const {
                                    rub: y,
                                    BFa: B
                                } = gdc(c, t, u), D = hdc(c, t, u, B), C = {
                                    D: y,
                                    email: D,
                                    exports: u.exports,
                                    metadata: u.metadata,
                                    gEb: idc(t, u.metadata),
                                    BFa: B,
                                    f7: u.f7
                                };
                                c.jV.set(r, C);
                                return {
                                    id: r,
                                    Mq: t,
                                    Qba: C,
                                    qm: this.qm
                                }
                            } finally {
                                m.s()
                            }
                        }
                        constructor(m) {
                            super(m.id, m.loadModule);
                            this.Pn = m.Pn;
                            this.wi = m.wi;
                            this.qm = m.qm ? ? "default"
                        }
                    }
                    const h = {
                        Ys: new g({
                            id: "w:wnJF5T87v",
                            Pn: Promise.resolve(b.Ys),
                            loadModule: () => __webpack_require__.me(196751).then(() => jdc),
                            wi: {
                                AH: f.AH,
                                $D: f.$D
                            },
                            qm: "blueprint"
                        }),
                        rZ: new g({
                            id: "w:xB9fK2LmQ",
                            Pn: Promise.resolve(b.rZ),
                            loadModule: () => __webpack_require__.me(258551).then(() => kdc),
                            wi: {
                                AH: f.AH
                            },
                            qm: "documentBlueprint"
                        }),
                        aZ: b.Mj ? new g({
                            id: "w:cm9wgGptP",
                            Pn: b.Mj.then(k_.wrap(m => m.aZ)),
                            loadModule: () => __webpack_require__.me(288639).then(() => __c.Q_),
                            wi: void 0,
                            qm: "demo1"
                        }) : null,
                        cZ: b.Mj ? new g({
                            id: "w:yLMS4dWnl",
                            Pn: b.Mj.then(k_.wrap(m => m.cZ)),
                            loadModule: () => __webpack_require__.me(229274).then(() => __c.R_),
                            wi: void 0,
                            qm: "demo2"
                        }) : null,
                        dZ: b.Mj ? new g({
                            id: "w:2flp30CGQ",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m => m.dZ))),
                            loadModule: () => __webpack_require__.me(89563).then(() => __c.S_),
                            wi: void 0,
                            qm: "demo3"
                        }) : null,
                        eZ: b.Mj ? new g({
                            id: "w:1Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m =>
                                m.eZ))),
                            loadModule: () => __webpack_require__.me(706140).then(() => __c.T_),
                            wi: void 0,
                            qm: "demo4"
                        }) : null,
                        fZ: b.Mj ? new g({
                            id: "w:5Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m => m.fZ))),
                            loadModule: () => __webpack_require__.me(58313).then(() => __c.U_),
                            wi: void 0,
                            qm: "demo5"
                        }) : null,
                        gZ: b.Mj ? new g({
                            id: "w:6Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m => m.gZ))),
                            loadModule: () => __webpack_require__.me(879434).then(() => __c.V_),
                            wi: void 0,
                            qm: "demo6"
                        }) : null,
                        hZ: b.Mj ? new g({
                            id: "w:7Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m =>
                                m.hZ))),
                            loadModule: () => __webpack_require__.me(181007).then(() => __c.W_),
                            wi: void 0,
                            qm: "demo7"
                        }) : null,
                        iZ: b.Mj ? new g({
                            id: "w:8Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m => m.iZ))),
                            loadModule: () => __webpack_require__.me(354456).then(() => __c.X_),
                            wi: void 0,
                            qm: "demo8"
                        }) : null,
                        jZ: b.Mj ? new g({
                            id: "w:9Nv6K6Dtv",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m => m.jZ))),
                            loadModule: () => __webpack_require__.me(920429).then(() => __c.Y_),
                            wi: void 0,
                            qm: "demo9"
                        }) : null,
                        bZ: b.Mj ? new g({
                            id: "w:sSrc7m4Q3",
                            Pn: Promise.resolve(b.Mj.then(k_.wrap(m =>
                                m.bZ))),
                            loadModule: () => __webpack_require__.me(580825).then(() => __c.Z_),
                            wi: void 0,
                            qm: "demo10"
                        }) : null,
                        hB: new g({
                            id: "w:JR4G8hDDg",
                            Pn: Promise.resolve(b.hB),
                            loadModule: () => __webpack_require__.me(149342).then(() => ldc),
                            wi: {
                                hL: f.hL,
                                wa: f.wa,
                                Op: f.Op
                            },
                            qm: "codelet"
                        }),
                        rY: new g({
                            id: "w:KS5H9iEEh",
                            Pn: Promise.resolve(b.rY),
                            loadModule: () => __webpack_require__.me(761582).then(() => mdc),
                            wi: {
                                hL: f.hL,
                                Op: f.Op
                            },
                            qm: "codelet2"
                        }),
                        form: new g({
                            id: "widget:form",
                            Pn: b.form,
                            loadModule: () => __webpack_require__.me(649E3).then(() => __c.$_),
                            wi: Promise.all([f.wla ? .()]).then(k_.wrap(([m]) => ({
                                iwb: m,
                                Ch: f.Ch
                            }))),
                            qm: "form"
                        }),
                        RN: b.RN ? new g({
                            id: "w:K7mQ9xR3p",
                            Pn: b.RN,
                            loadModule: () => __webpack_require__.me(320784).then(() => __c.a0),
                            wi: void 0,
                            qm: "navigationMenu"
                        }) : null,
                        scene: b.scene ? new g({
                            id: "w:2pbXJMtm1",
                            Pn: b.scene,
                            loadModule: () => __webpack_require__.me(290120).then(() => __c.b0),
                            wi: {
                                gA: f.gA
                            },
                            qm: "scene"
                        }) : null,
                        button: new g({
                            id: "w:PQccHDsCJ",
                            Pn: b.button,
                            loadModule: () => __webpack_require__.me(856598).then(() => __c.c0),
                            wi: void 0,
                            qm: "button"
                        })
                    };
                    a = new Set(["widget:form",
                        "w:JR4G8hDDg", "w:wnJF5T87v", "w:2pbXJMtm1", "w:PQccHDsCJ"
                    ]);
                    const k = [];
                    for (var l of Object.values(h)) l && a.has(l.id) && k.push(l.En(Promise.resolve()));
                    l = Promise.allSettled(k).then(k_.wrap(() => {}));
                    return {
                        jV: {
                            Ys: h.Ys.En(l),
                            rZ: h.rZ.En(l),
                            Mj: b.Mj && {
                                aZ: h.aZ.En(l),
                                cZ: h.cZ.En(l),
                                dZ: h.dZ.En(l),
                                eZ: h.eZ.En(l),
                                fZ: h.fZ.En(l),
                                gZ: h.gZ.En(l),
                                hZ: h.hZ.En(l),
                                iZ: h.iZ.En(l),
                                jZ: h.jZ.En(l),
                                bZ: h.bZ.En(l)
                            },
                            hB: h.hB.En(l),
                            rY: h.rY.En(l),
                            form: h.form ? .En(l) ? ? void 0,
                            RN: h.RN ? .En(l) ? ? void 0,
                            scene: h.scene ? .En(l) ? ? void 0,
                            button: h.button ? .En(l) ? ?
                                void 0
                        },
                        b_a: () => {
                            const m = [];
                            for (const n of Object.values(h)) n && m.push(n.En(Promise.resolve()));
                            return Promise.allSettled(m)
                        }
                    }
                };
                odc = function(a) {
                    var b = {
                        document: void 0,
                        D: void 0
                    };
                    const c = new Map;
                    for (const d in b) a[d].aM.forEach((e, f) => c.set(f, e));
                    return {
                        aM: c,
                        decode: d => {
                            const e = new Map,
                                f = {};
                            for (const g in d) {
                                const h = a[g].decode(d[g]);
                                h.aKa.forEach((k, l) => e.set(l, k));
                                f[g] = h.data
                            }
                            return {
                                aKa: e,
                                data: f
                            }
                        },
                        encode: d => kd(b, (e, f) => a[f].encode(d[f]))
                    }
                };
                pdc = function(a) {
                    return () => a
                };
                qdc = function(a) {
                    return a()
                };
                e0 = function(a, b, c) {
                    return new d0([a], b, c)
                };
                f0 = function(a, b, c, d) {
                    return new d0([a, b], c, d)
                };
                g0 = function(a, b, c, d) {
                    return new rdc(a, b, c, d)
                };
                sdc = function(a, b) {
                    return b(a)
                };
                tdc = function(a) {
                    return (b, c) => ({
                        kind: 2,
                        name: a,
                        args: [b, c]
                    })
                };
                udc = function(a) {
                    return b => ({
                        kind: 3,
                        name: a,
                        args: b
                    })
                };
                h0 = function(a, b) {
                    return a === b || b.map(c => a.$Da(vdc(c)))
                };
                xdc = function(a, b) {
                    return a.qGa(b).map(c => new wdc(c, d => d.props[b]))
                };
                vdc = function(a) {
                    v(a instanceof i0);
                    return a
                };
                j0 = function(a) {
                    const b = new WeakMap;
                    return function(c) {
                        let d = b.get(c);
                        d == null && (d = a.call(this, c), b.set(c, d));
                        return d
                    }
                };
                zdc = function(a, b) {
                    if (a === b) return !0;
                    switch (typeof a) {
                        case "string":
                        case "number":
                        case "boolean":
                        case "undefined":
                            return !1;
                        case "object":
                            if (typeof b !== "object" || a.kind !== b.kind) return !1;
                            switch (a.kind) {
                                case "array":
                                    return b.kind === "array" && k0(a.items, b.items);
                                case "set":
                                    var c;
                                    if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : k0([...a], [...b]);
                                    return c;
                                case "map":
                                    if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : k0([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                    return c;
                                case "record":
                                    return b.kind === "record" && ydc(a.fields, b.fields);
                                case "instance":
                                    return b.kind === "instance" && a.instance === b.instance;
                                default:
                                    throw new A(a);
                            }
                        default:
                            throw new A(a);
                    }
                };
                k0 = function(a, b) {
                    if (a === b) return !0;
                    if (a.length !== b.length) return !1;
                    for (let c = 0; c < a.length; c++)
                        if (!zdc(a[c], b[c])) return !1;
                    return !0
                };
                ydc = function(a, b) {
                    if (a === b) return !0;
                    const c = Object.keys(a),
                        d = Object.keys(b),
                        e = new Set([...c, ...d]);
                    if (c.length !== e.size || d.length !== e.size) return !1;
                    for (const f of e)
                        if (!zdc(a[f], b[f])) return !1;
                    return !0
                };
                l0 = function(a) {
                    return typeof a === "string" ? JSON.stringify(a) : String(a)
                };
                Bdc = function(a, b) {
                    return a.map(c => b.map(d => Adc[0](c, d)))
                };
                Ddc = function(a, b, c) {
                    return b.map(d => Cdc[a](d, c))
                };
                Edc = function(a, b) {
                    return new m0(new n0(new Map(b), a.vars), a.A8)
                };
                Gdc = function(a, b, c) {
                    for (const [e, f] of c.A8) {
                        var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
                        d = Fdc(b, d, g => o0(a, g, f.body));
                        b = new m0(b.vars, b.A8.define(e, d))
                    }
                    return o0(a, b, c.body)
                };
                o0 = function(a, b, c) {
                    switch (c.kind) {
                        case 1:
                            return Hdc(c.value);
                        case 2:
                            const f = c.args.map(q => o0(a, b, q));
                            c = c.name;
                            return typeof c === "string" ? b.A8.resolve(c).map(q => Idc(q, f)) : Jdc[c].map(q => Kdc(q, f));
                        case 3:
                            const g = c.args.map(q => q.kind !== 13 ? new Ldc(o0(a, b, q)) : new Mdc(o0(a, b, q.Q4b)));
                            c = c.name;
                            switch (c) {
                                case 0:
                                case 1:
                                    var d = g.map(q => q.KBa(r => r.type, r => r.type.ST()));
                                    return p0.union(...d).map(Ndc[c]).map(q => Odc(q, g));
                                default:
                                    return Pdc[c].map(q => Odc(q, g))
                            }
                        case 4:
                            d = c.name;
                            var e = c.param;
                            const h = c.body,
                                k = o0(a,
                                    b, c.yY);
                            c = k.type.ST();
                            const l = Fdc(b, [
                                [e, c]
                            ], q => o0(a, q, h));
                            return Ddc(d, c, l.resultType).map(q => Qdc(q, k, l));
                        case 5:
                            const m = c.entries.map(([q, r]) => [o0(a, b, q), o0(a, b, r)]);
                            c = p0.union(...m.map(([q]) => q.type));
                            d = p0.union(...m.map(([, q]) => q.type));
                            if (!h0(c, p0.primitive)) throw Error(`key type is not a primitive: ${c}`);
                            return Bdc(c, d).map(q => Rdc(q, m));
                        case 6:
                            const n = kd(c.fields, q => o0(a, b, q));
                            c = kd(n, q => q.type);
                            return (0, Sdc[0])(c).map(q => Tdc(q, n));
                        case 7:
                            d = a.types.resolve(c.name);
                            if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                            const p = o0(a, b, {
                                kind: 6,
                                fields: c.args
                            });
                            return d.QEb.map(q => Kdc(q, [p], {
                                yq: !0
                            }));
                        case 8:
                            return d = o0(a, b, c.base), Udc(d, c.Ccc);
                        case 9:
                            return Vdc(b, c.name);
                        case 10:
                            return d = Jd(c.defs, q => o0(a, b, q)), Wdc(a, b, d, c.body);
                        case 11:
                            return d = o0(a, b, c.test).as(p0.ad), e = o0(a, b, c.mYb), c = o0(a, b, c.alternate), Xdc(d, e, c);
                        case 12:
                            return o0(a, b, c.body).computed();
                        default:
                            throw new A(c);
                    }
                };
                Hdc = function(a) {
                    switch (typeof a) {
                        case "string":
                            return q0(p0.string, a);
                        case "number":
                            return q0(p0.number, a);
                        case "boolean":
                            return q0(p0.ad, a);
                        case "undefined":
                            return q0(p0.undefined, a);
                        default:
                            throw new A(a);
                    }
                };
                Udc = function(a, b) {
                    return a.map(c => xdc(c, b).map(({
                        type: d,
                        get: e
                    }) => Kdc(new d0([c], d, e), [a])))
                };
                Vdc = function(a, b) {
                    return a.vars.resolve(b).map(c => r0.of(c, d => d.resolve(b)))
                };
                Wdc = function(a, b, c, d) {
                    const e = Jd(c, g => g.type),
                        f = Jd(c, g => g.evaluate);
                    return Ydc(o0(a, Edc(b, e), d), g => {
                        const h = Jd(f, k => k(g));
                        return new n0(new Map(h), g)
                    })
                };
                Xdc = function(a, b, c) {
                    return b.map((d, e) => c.map((f, g) => {
                        f = p0.union(d, f);
                        return r0.of(f, h => {
                            const k = a(h),
                                l = e(h),
                                m = g(h);
                            return () => k() ? l() : m()
                        })
                    }))
                };
                s0 = function(a) {
                    return b => b(a)
                };
                Idc = function({
                    Qoa: a,
                    resultType: b,
                    evaluate: c
                }, d) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const e = Zdc(a, (f, g) => d[g].as(f));
                    return r0.of(b, f => {
                        const g = e.map(s0(f));
                        return c(f)(...g)
                    })
                };
                Kdc = function({
                    Qoa: a,
                    resultType: b,
                    apply: c
                }, d, e) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const f = Zdc(a, (g, h) => d[h].as(g));
                    return r0.of(b, g => {
                        g = f.map(s0(g));
                        return $dc(e ? .yq ? aec(c) : c, g)
                    })
                };
                Odc = function({
                    jIb: a,
                    resultType: b,
                    apply: c
                }, d) {
                    let e;
                    const f = d.map(g => g.qwa(h => h.as(a), h => h.as(e ? ? (e = p0.yY(a)))));
                    return new r0(b, g => {
                        const h = s0(g),
                            k = f.map(l => l.qwa(h, h));
                        return () => {
                            const l = [];
                            k.forEach(m => {
                                m.KBa(n => l.push(n()), n => l.push(...n()))
                            });
                            return c(l)
                        }
                    })
                };
                Rdc = function({
                    keyType: a,
                    valueType: b,
                    resultType: c,
                    apply: d
                }, e) {
                    const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                    return new r0(c, g => {
                        const h = f.map(([k, l]) => [k(g), l(g)]);
                        return () => d(h.map(([k, l]) => [k(), l()]))
                    })
                };
                Tdc = function({
                    Imb: a,
                    resultType: b,
                    apply: c
                }, d) {
                    const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                    if (e.length) throw Error(`too few arguments (missing ${e})`);
                    const f = bec(a, (g, h) => d[h].as(g));
                    return new r0(b, g => {
                        const h = kd(f, s0(g));
                        return () => {
                            var k = kd(h, qdc);
                            return c(k)
                        }
                    })
                };
                q0 = function(a, b) {
                    const c = pdc(b);
                    return new r0(a, () => c)
                };
                Qdc = function({
                    itemType: a,
                    dnb: b,
                    resultType: c,
                    reduce: d
                }, e, f) {
                    const g = f.as([a], b),
                        h = e.as(p0.yY(a));
                    return new r0(c, k => {
                        const l = h(k),
                            m = g(k),
                            n = aec(p => {
                                p = p.map(pdc);
                                return [p, p.map(m)]
                            });
                        return () => {
                            const [p, q] = n(l());
                            return d(p, q)
                        }
                    })
                };
                Ydc = function(a, b) {
                    const c = a.evaluate;
                    return new r0(a.type, d => c(b(d)))
                };
                Fdc = function(a, b, c) {
                    const d = b.map(f => f[0]),
                        e = b.map(f => f[1]);
                    return sdc(e, f => c(Edc(a, new Map(b))).map((g, h) => new cec(f, g, k => (...l) => {
                        const m = new Map(d.map((n, p) => [n, l[p]]));
                        return h(new n0(new Map(m), k))
                    })))
                };
                $dc = function(a, b) {
                    switch (b.length) {
                        case 0:
                            return a;
                        case 1:
                            const [c] = b;
                            return () => a(c());
                        case 2:
                            const [d, e] = b;
                            return () => a(d(), e());
                        default:
                            return () => {
                                var f = b.map(qdc);
                                return a(...f)
                            }
                    }
                };
                aec = function(a) {
                    let b;
                    return (...c) => {
                        if (b && b.hhb.length === c.length && b.hhb.every((e, f) => t0.Zg(e, c[f]))) return b.v;
                        const d = a(...c);
                        b = {
                            hhb: c,
                            v: d
                        };
                        return d
                    }
                };
                bec = function(a, b) {
                    return kd(a, b)
                };
                Zdc = function(a, b) {
                    return a.map(b)
                };
                eec = function(a, b, c) {
                    return new dec(a, b, c)
                };
                fec = function(a, b) {
                    return [...a].map(b)[Symbol.iterator]()
                };
                hec = function(a, b, c) {
                    return new gec(a, b, c)
                };
                u0 = function(a, b, c, d) {
                    if (d == null) throw a.error(b.LM(c), "not found");
                    return d
                };
                wec = function(a) {
                    function b(r) {
                        return m[r.kind](r)
                    }
                    const c = a.types,
                        d = a.values;
                    class e {
                        static of (r, t, u, w, y, B) {
                            return new e(r, u, w, iec(y, jec(t)), kec(B, jec(t)))
                        }
                        map(r) {
                            return r(this)
                        }
                        validate(r) {
                            return r ? new e(this.dataType, this.iea, this.Fda, lec(this.decode, r), iec(this.encode, r)) : this
                        }
                        constructor(r, t, u, w, y) {
                            this.dataType = r;
                            this.iea = t;
                            this.Fda = u;
                            this.decode = w;
                            this.encode = y
                        }
                    }
                    const f = e.of({
                            kind: 0
                        }, "string", c.string, r => r, (r, t, u) => u.value, (r, t, u) => ({
                            type: "string",
                            value: u
                        })),
                        g = e.of({
                                kind: 1
                            }, "boolean", c.ad, r =>
                            r, (r, t, u) => u.value, (r, t, u) => ({
                                type: "boolean",
                                value: u
                            })),
                        h = e.of({
                            kind: 2
                        }, "double", c.number, r => r, (r, t, u) => u.value, (r, t, u) => ({
                            type: "double",
                            value: u
                        })).validate((r, t, u) => {
                            if (!Number.isFinite(u)) throw r.error(t, `number is not finite: ${u}`);
                        }),
                        k = e.of({
                            kind: 3
                        }, "int32", c.number, r => r, (r, t, u) => u.value, (r, t, u) => ({
                            type: "int32",
                            value: u
                        })).validate((r, t, u) => {
                            if (!Number.isInteger(u) || u < -2147483648 || u > 2147483647) throw r.error(t, `number is not an int32: ${u}`);
                        }),
                        l = {
                            FontRef: e.of({
                                    kind: 7,
                                    name: "FontRef"
                                }, "ref", c.instance("FontRef"),
                                r => d.instance("FontRef", r), v0("font"), (r, t, u) => ({
                                    type: "ref",
                                    value: u
                                })),
                            MediaRef: e.of({
                                kind: 7,
                                name: "MediaRef"
                            }, "ref", c.instance("MediaRef"), r => d.instance("MediaRef", r), v0("media"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            VideoRef: e.of({
                                kind: 7,
                                name: "VideoRef"
                            }, "ref", c.instance("VideoRef"), r => d.instance("VideoRef", r), v0("video"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            AudioRef: e.of({
                                kind: 7,
                                name: "AudioRef"
                            }, "ref", c.instance("AudioRef"), r => d.instance("AudioRef", r), v0("audio"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            EmbedRef: e.of({
                                kind: 7,
                                name: "EmbedRef"
                            }, "ref", c.instance("EmbedRef"), r => d.instance("EmbedRef", r), v0("embed"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            SceneRef: e.of({
                                kind: 7,
                                name: "SceneRef"
                            }, "ref", c.instance("SceneRef"), r => d.instance("SceneRef", r), v0("scene"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            BlueprintRef: e.of({
                                kind: 7,
                                name: "BlueprintRef"
                            }, "ref", c.instance("BlueprintRef"), r => d.instance("BlueprintRef", r), v0("blueprint"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            Fill: e.of({
                                    kind: 7,
                                    name: "Fill"
                                }, "fill", c.instance("Fill"), r => d.instance("Fill", r),
                                (r, t, u) => u.value, (r, t, u) => ({
                                    type: "fill",
                                    value: u
                                })),
                            Stroke: e.of({
                                kind: 7,
                                name: "Stroke"
                            }, "stroke", c.instance("Stroke"), r => d.instance("Stroke", r), (r, t, u) => u.value, (r, t, u) => ({
                                type: "stroke",
                                value: u
                            })),
                            Richtext2: e.of({
                                kind: 7,
                                name: "Richtext2"
                            }, "text2", c.instance("Richtext2"), r => d.instance("Richtext2", r), (r, t, u) => u.value, (r, t, u) => ({
                                type: "text2",
                                value: u
                            }))
                        },
                        m = {
                            [0]: r => f.validate(mec(r.KO)),
                            [1]: () => g,
                            [2]: r => h.validate(nec(r.range)),
                            [3]: r => k.validate(nec(r.range)),
                            [4]: r => e.of({
                                    kind: 4,
                                    values: r.values
                                }, oec, c.primitive,
                                t => t, (t, u, w) => w.value, (t, u, w) => {
                                    a: switch (typeof w) {
                                        case "string":
                                            t = {
                                                type: "string",
                                                value: w
                                            };
                                            break a;
                                        case "boolean":
                                            t = {
                                                type: "boolean",
                                                value: w
                                            };
                                            break a;
                                        case "number":
                                            t = {
                                                type: "int32",
                                                value: w
                                            };
                                            break a;
                                        default:
                                            throw new A(w);
                                    }
                                    return t
                                }).validate(pec(r.values)),
                            [5]: r => {
                                const {
                                    dataType: t,
                                    iea: u,
                                    Fda: w,
                                    decode: y,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 5,
                                    itemType: t
                                }, "list", c.array(u), D => d.array(D.map(w)), (D, C, E) => E.value.toArray().map((J, M) => y(D, C.RS(M), J)), (D, C, E) => ({
                                    type: "list",
                                    value: E.map((J, M) => B(D, C.RS(M),
                                        J))
                                }))
                            },
                            [6]: r => {
                                const {
                                    dataType: t,
                                    iea: u,
                                    Fda: w,
                                    decode: y,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 6,
                                    itemType: t
                                }, "dict", c.map(c.string, u), D => d.map(Jd(D, w)), (D, C, E) => Jd(E.value.yi(), (J, M) => y(D, C.p8(M), J)), (D, C, E) => ({
                                    type: "dict",
                                    value: Jd(E, (J, M) => B(D, C.p8(M), J))
                                }))
                            },
                            [7]: r => l[r.name],
                            [8]: r => {
                                const {
                                    dataType: t,
                                    decode: u,
                                    encode: w
                                } = b(r.itemType);
                                return e.of({
                                    kind: 8,
                                    itemType: t
                                }, "list", c.undefined, () => {}, (y, B, D) => hec(D.value, C => w(y, B.RS("*"), C), qec(u, y, B.RS("*"))), (y, B, D) => ({
                                    type: "list",
                                    value: D.map((C, E) => w(y,
                                        B.RS(E), C))
                                }))
                            },
                            [9]: r => {
                                const {
                                    dataType: t,
                                    decode: u,
                                    encode: w
                                } = b(r.itemType);
                                return e.of({
                                    kind: 9,
                                    itemType: t
                                }, "dict", c.undefined, () => {}, (y, B, D) => eec(D.value, C => w(y, B.p8("*"), C), qec(u, y, B.RS("*"))), (y, B, D) => ({
                                    type: "dict",
                                    value: Jd(D, (C, E) => w(y, B.p8(E), C))
                                }))
                            },
                            [10]: r => {
                                const {
                                    decode: t,
                                    encode: u
                                } = p.X3a(r.fields);
                                return e.of({
                                    kind: 10,
                                    fields: r.fields
                                }, "dict", c.undefined, () => {}, t, u)
                            },
                            [11]: r => {
                                function t(J, M, O, R) {
                                    O = O.get(R);
                                    if (O == null) throw J.error(M, `unknown case for discriminator value: ${R}`);
                                    return O
                                }
                                const u =
                                    r.MXa;
                                r = r.Nh;
                                var w = Object.keys(u);
                                v(w.length >= 1, "missing discriminator props");
                                v(w.length <= 1, "too many discriminator props: {}", w);
                                const y = w[0];
                                v(r.length >= 1, "discriminated union has no cases");
                                w = new Map;
                                for (const J of r) {
                                    const M = J.fields[y].type.values,
                                        O = b(J);
                                    for (const R of M) v(!w.has(R), "discriminator values are not unique across cases: {}", R), w.set(R, O)
                                }
                                const {
                                    decode: B,
                                    encode: D
                                } = b({
                                    kind: 4,
                                    values: new Set(w.keys())
                                }), C = Jd(w, J => J.decode), E = Jd(w, J => J.encode);
                                return e.of({
                                        kind: 11,
                                        MXa: u,
                                        Nh: r
                                    }, "dict",
                                    c.undefined, () => {}, (J, M, O) => {
                                        var R = u0(J, M, "k", O.value.get("k"));
                                        O = u0(J, M, "v", O.value.get("v"));
                                        rec(J, M, "dict", O);
                                        R = B(J, M, R);
                                        return t(J, M, C, R)(J, M, O)
                                    }, (J, M, O) => {
                                        const R = O[y],
                                            Q = t(J, M, E, R);
                                        return {
                                            type: "dict",
                                            value: new Map([
                                                ["k", D(J, M, R)],
                                                ["v", Q(J, M, O)]
                                            ])
                                        }
                                    })
                            }
                        },
                        n = Symbol("$impl");
                    class p {
                        static X3a(r) {
                            r = kd(r, w => q.of(w));
                            const t = kd(r, w => w.dPb()),
                                u = Object.entries(r);
                            return {
                                aM: new Map(u.map(([, w]) => w.ZOb())),
                                ePb: w => {
                                    const y = w[n];
                                    return new Map(u.map(([, B]) => B.fPb(y)))
                                },
                                decode: (w, y, B) => {
                                    const D = Object.create(null,
                                        t);
                                    Object.defineProperty(D, n, {
                                        enumerable: !1,
                                        writable: !1,
                                        value: new p(w, y, B.value)
                                    });
                                    return D
                                },
                                encode: (w, y, B) => {
                                    const D = u.map(([C, E]) => E.encode(w, y, B[C]));
                                    return {
                                        type: "dict",
                                        value: new Map(D.filter(__c.sb))
                                    }
                                }
                            }
                        }
                        FCa(r, t) {
                            const u = u0(this.e, this.p, t, this.data.get(t));
                            return sec(this.tZa, r.decode, this.e, this.p.LM(t), u)
                        }
                        DCa(r, t) {
                            const u = this.data.get(t);
                            if (u != null) return sec(this.tZa, r.decode, this.e, this.p.LM(t), u)
                        }
                        Hcb(r, t, u) {
                            this.data.set(t, r.encode(this.e, this.p.LM(t), u))
                        }
                        Acb(r, t, u) {
                            u != null ? this.data.set(t,
                                r.encode(this.e, this.p.LM(t), u)) : this.data.delete(t)
                        }
                        constructor(r, t, u) {
                            this.e = r;
                            this.p = t;
                            this.data = u;
                            this.tZa = new WeakMap;
                            this.MTa = new Map;
                            this.uxb = tec(this.MTa, (w, y) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.FCa(y, w)
                                    },
                                    set(D) {
                                        B.Hcb(y, w, D)
                                    }
                                }
                            });
                            this.ixb = tec(this.MTa, (w, y) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.DCa(y, w)
                                    },
                                    set(D) {
                                        B.Acb(y, w, D)
                                    }
                                }
                            })
                        }
                    }
                    class q {
                        static of (r) {
                            return new q(r, b(r.type))
                        }
                        ZOb() {
                            const r = this.key,
                                t = this.Ib,
                                u = this.type;
                            switch (t.SF) {
                                case 0:
                                    return [r, u.iea];
                                case 1:
                                    return [r, c.optional(u.iea)];
                                default:
                                    throw new A(t.SF);
                            }
                        }
                        fPb(r) {
                            const t = this.key,
                                u = this.Ib,
                                w = this.type;
                            switch (u.SF) {
                                case 0:
                                    return [t, () => w.Fda(r.FCa(w, t))];
                                case 1:
                                    return [t, () => {
                                        const y = r.DCa(w, t);
                                        return y != null ? w.Fda(y) : void 0
                                    }];
                                default:
                                    throw new A(u.SF);
                            }
                        }
                        dPb() {
                            const r = this.key;
                            var t = this.Ib;
                            const u = this.type;
                            if (ycc(u.dataType) && t.FLa === 1) {
                                switch (t.SF) {
                                    case 0:
                                        t = function() {
                                            return this[n].uxb(r, u)
                                        };
                                        break;
                                    case 1:
                                        t = function() {
                                            return this[n].ixb(r, u)
                                        };
                                        break;
                                    default:
                                        throw new A(t.SF);
                                }
                                return {
                                    enumerable: !0,
                                    get: t
                                }
                            }
                            let w;
                            switch (t.SF) {
                                case 0:
                                    w = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].FCa(u, r)
                                        },
                                        set(y) {
                                            this[n].Hcb(u, r, y)
                                        }
                                    };
                                    break;
                                case 1:
                                    w = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].DCa(u, r)
                                        },
                                        set(y) {
                                            this[n].Acb(u, r, y)
                                        }
                                    };
                                    break;
                                default:
                                    throw new A(t.SF);
                            }
                            switch (t.FLa) {
                                case 0:
                                    w.set = void 0;
                                    break;
                                case 1:
                                    break;
                                default:
                                    throw new A(t.FLa);
                            }
                            return w
                        }
                        encode(r, t, u) {
                            const w = this.key,
                                y = this.Ib,
                                B = this.type;
                            switch (y.SF) {
                                case 0:
                                    return [w, B.encode(r, t.LM(w), u0(r, t, w, u))];
                                case 1:
                                    return u != null ? [w, B.encode(r, t.LM(w), u)] : void 0;
                                default:
                                    throw new A(y.SF);
                            }
                        }
                        constructor(r, t) {
                            this.Ib =
                                r;
                            this.type = t;
                            r = r.key;
                            v(r > 0 && Number.isInteger(r));
                            if (r <= 52) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" [r - 1];
                            else {
                                for (t = ""; r > 0;) r--, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" [r % 52] + t, r = Math.floor(r / 52);
                                r = t
                            }
                            this.key = r
                        }
                    }
                    return (r, t) => {
                        const u = new uec(r),
                            w = new vec,
                            {
                                aM: y,
                                ePb: B,
                                decode: D,
                                encode: C
                            } = p.X3a(t);
                        return {
                            aM: y,
                            decode: E => {
                                E = D(u, w, {
                                    type: "dict",
                                    value: E
                                });
                                return {
                                    aKa: B(E),
                                    data: E
                                }
                            },
                            encode: E => C(u, w, E).value
                        }
                    }
                };
                tec = function(a, b) {
                    return (c, ...d) => {
                        a.has(c) || a.set(c, b(c, ...d));
                        return a.get(c)
                    }
                };
                qec = function(a, b, c) {
                    const d = new WeakMap;
                    return e => sec(d, a, b, c, e)
                };
                sec = function(a, b, c, d, e) {
                    let f = a.get(e);
                    f == null && (f = b(c, d, e), a.set(e, f));
                    return f
                };
                iec = function(a, b) {
                    return (c, d, e) => {
                        b(c, d, e);
                        return a(c, d, e)
                    }
                };
                lec = function(a, b) {
                    return (c, d, e) => {
                        e = a(c, d, e);
                        b(c, d, e);
                        return e
                    }
                };
                kec = function(a, b) {
                    var c = xec();
                    return (d, e, f) => {
                        f = a(d, e, f);
                        b(d, e, f);
                        c(d, e, f);
                        return f
                    }
                };
                rec = function(a, b, c, d) {
                    if (d.type !== c) throw a.error(b, `type error: expected ${c}, was ${d.type}`);
                };
                jec = function(a) {
                    return typeof a === "string" ? (b, c, d) => rec(b, c, a, d) : (b, c, d) => {
                        if (!a.has(d.type)) throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                    }
                };
                xec = function() {
                    return (a, b, c) => {
                        if (typeof c.value !== yec[c.type]) throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                    }
                };
                pec = function(a) {
                    return (b, c, d) => {
                        if (!a.has(d)) throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                    }
                };
                nec = function(a) {
                    if (a) {
                        var b = a.min,
                            c = a.max;
                        v(b == null || c == null || b <= c);
                        return (d, e, f) => {
                            if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                            if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                        }
                    }
                };
                mec = function(a) {
                    if (a) return (b, c, d) => {
                        if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
                };
                v0 = function(a) {
                    return (b, c, d) => {
                        if (d.value.type !== a) throw b.error(c, `expected ${zec[a]} resource type, got ${zec[d.value.type]}`);
                        return { ...d.value,
                            type: a
                        }
                    }
                };
                Bec = function(a) {
                    return new Aec(typeof a === "function" ? w0(a) : a)
                };
                x0 = function(a) {
                    return typeof a === "function"
                };
                Dec = function(a) {
                    return {
                        get: () => a,
                        set: Cec
                    }
                };
                Eec = function(...a) {
                    const b = new Set,
                        c = new Set;
                    for (const d of a)
                        for (const e in d) b.has(e) ? c.add(e) : b.add(e);
                    if (c.size) throw Error(`keys not disjoint: ${[...c].map(d=>`'${d}'`).join(", ")}`);
                };
                Fec = function(a, b) {
                    return () => b(kd(a, c => c()))
                };
                Hec = function(a) {
                    v(a.length === 1);
                    let b;
                    return c => {
                        if (b != null && Gec(b[0], c)) return b[1];
                        const d = a(c);
                        b = [c, d];
                        return d
                    }
                };
                Gec = function(a, b) {
                    if (a === b) return !0;
                    if (a == null || b == null) return !1;
                    const c = Object.keys(a),
                        d = Object.keys(b);
                    if (c.length !== d.length) return !1;
                    for (const e of c)
                        if (a[e] !== b[e]) return !1;
                    return !0
                };
                Jec = function(a) {
                    var b = Iec;
                    return {
                        r4: b({
                            ko: a.r4,
                            args: {},
                            Nd: {
                                U: {
                                    image: void 0,
                                    video: void 0,
                                    Za: void 0
                                },
                                attributes: {
                                    Hm: void 0,
                                    color: void 0,
                                    Ra: void 0,
                                    locked: void 0,
                                    Vg: void 0,
                                    Rl: void 0,
                                    cd: void 0,
                                    flipX: void 0,
                                    flipY: void 0
                                }
                            }
                        }),
                        vua: b({
                            ko: a.vua,
                            args: {},
                            Nd: {
                                U: {
                                    fill: void 0
                                },
                                attributes: {
                                    weight: void 0,
                                    color: void 0,
                                    Vc: void 0,
                                    Ye: void 0
                                }
                            }
                        }),
                        sQ: b({
                            ko: a.sQ,
                            args: {
                                d: void 0
                            },
                            Nd: {
                                U: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    V: void 0
                                }
                            }
                        }),
                        w4: b({
                            ko: a.w4,
                            args: {},
                            Nd: {
                                U: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: { ...y0,
                                    V: void 0
                                }
                            }
                        }),
                        nfa: b({
                            ko: a.nfa,
                            args: {},
                            Nd: {
                                U: {
                                    tb: void 0,
                                    resizeMode: void 0,
                                    slice: void 0,
                                    pb: void 0
                                },
                                attributes: { ...y0,
                                    kj: void 0,
                                    viewBox: void 0
                                }
                            }
                        }),
                        qfa: b({
                            ko: a.qfa,
                            args: {},
                            Nd: {
                                U: {
                                    text: void 0
                                },
                                attributes: { ...y0,
                                    fB: void 0,
                                    Uh: void 0,
                                    La: void 0,
                                    I: void 0,
                                    N: void 0,
                                    pg: void 0
                                }
                            }
                        }),
                        eQa: b({
                            ko: a.eQa,
                            args: {
                                url: void 0,
                                I: void 0,
                                N: void 0
                            },
                            Nd: {
                                U: {},
                                attributes: y0
                            }
                        }),
                        bua: b({
                            ko: a.bua,
                            args: {},
                            Nd: {
                                U: {
                                    cells: void 0
                                },
                                attributes: { ...y0,
                                    layout: void 0
                                }
                            }
                        }),
                        aua: b({
                            ko: a.aua,
                            args: {},
                            Nd: {
                                U: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    V: void 0
                                }
                            }
                        })
                    }
                };
                z0 = function(a, b) {
                    return c => b({ ...a,
                        ...c
                    })
                };
                Qec = function() {
                    return Jec({
                        r4: z0(A0, a => tf(__c.HN, a)),
                        vua: z0(Kec, a => tf(__c.Uy, a)),
                        sQ: z0(Lec, a => tf(__c.nR, a)),
                        w4: z0(B0, a => tf(__c.fD, { ...a,
                            id: gD.generate()
                        })),
                        nfa: z0(C0, a => tf(__c.qH, { ...a,
                            pb: [],
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: 1,
                                height: 1
                            },
                            id: gD.generate()
                        })),
                        qfa: z0(Mec, a => tf(__c.CR, { ...a,
                            id: gD.generate()
                        })),
                        eQa: z0(Nec, a => tf(__c.DR, { ...a,
                            id: gD.generate()
                        })),
                        bua: z0(Oec, a => tf(__c.FR, { ...a,
                            id: gD.generate()
                        })),
                        aua: z0(Pec, a => tf(__c.pH, a))
                    })
                };
                Uec = function() {
                    return (new Rec({})).add((a, b) => ({
                        FontRef: new a("FontRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "font",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        MediaRef: new a("MediaRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "media",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        VideoRef: new a("VideoRef", {
                            id: b.string
                        }, c => ({
                            type: "video",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        AudioRef: new a("AudioRef", {
                            id: b.string
                        }, c => ({
                            type: "audio",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        EmbedRef: new a("EmbedRef", {
                            id: b.string
                        }, c => ({
                            type: "embed",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        SceneRef: new a("SceneRef", {
                            id: b.string
                        }, c => ({
                            type: "scene",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        BlueprintRef: new a("BlueprintRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "blueprint",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        Fill: new a("Fill", {
                            color: b.string
                        }, c => __c.HN.create({ ...A0,
                            color: c.color
                        }))
                    })).add((a, b) => ({
                        Stroke: new a("Stroke", {
                            color: b.string,
                            weight: b.number,
                            Vc: b.array(b.number),
                            Ye: b.ad
                        }, c => __c.Uy.create({ ...Kec,
                            color: c.color,
                            weight: c.weight,
                            Vc: c.Vc.items,
                            Ye: c.Ye
                        }))
                    })).add((a, b) => ({
                        Richtext2: new a("Richtext2", {
                            mwb: b.array(b.O({
                                mb: b.string,
                                attrs: b.map(b.string, b.string)
                            }))
                        }, c => {
                            c = c.mwb;
                            const d = __c.ah.Jb();
                            c.items.forEach(e => {
                                const f = e.fields.mb;
                                d.attrs(__c.ug(e.fields.attrs.items));
                                d.mb(f)
                            });
                            return __c.Zh.create({ ...__c.GF,
                                stream: d.build()
                            })
                        })
                    })).add((a, b) => ({
                        Path: new a("Path", {
                            d: b.string,
                            fill: b.instance("Fill"),
                            stroke: b.union(b.instance("Stroke"), b.undefined)
                        }, c => {
                            const d = c.stroke,
                                e = c.fill;
                            c = __c.nR.create({ ...Lec,
                                d: c.d,
                                fill: A0
                            });
                            Object.defineProperties(c, {
                                fill: {
                                    value: e.instance
                                },
                                stroke: {
                                    value: Sec(d)
                                }
                            });
                            return c
                        })
                    })).add((a, b) => ({
                        RectElement: new a("RectElement", {
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number,
                            rotation: b.union(b.number, b.undefined),
                            fill: b.instance("Fill"),
                            V: b.union(b.array(b.number), b.undefined),
                            stroke: b.union(b.instance("Stroke"), b.undefined)
                        }, c => {
                            const d = c.stroke,
                                e = __c.fD.create({ ...B0,
                                    id: gD.generate(),
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: c.rotation ? ? B0.rotation,
                                    fill: A0,
                                    V: c.V ? .items ? ? B0.V
                                });
                            Object.defineProperties(e, {
                                fill: {
                                    value: c.fill.instance
                                },
                                stroke: {
                                    value: Sec(d)
                                }
                            });
                            return e
                        })
                    })).add((a, b) => ({
                        ShapeElement: new a("ShapeElement", {
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number,
                            rotation: b.union(b.number, b.undefined),
                            Ra: b.union(b.number, b.undefined),
                            viewBox: b.O({
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number
                            }),
                            pb: b.array(b.instance("Path"))
                        }, c => {
                            const d = __c.qH.create({ ...C0,
                                id: gD.generate(),
                                top: c.top,
                                left: c.left,
                                width: c.width,
                                height: c.height,
                                rotation: c.rotation ? ? C0.rotation,
                                Ra: c.Ra ? ? C0.Ra,
                                pb: [],
                                viewBox: c.viewBox.fields
                            });
                            Object.defineProperties(d, {
                                pb: {
                                    value: new Tec(c.pb.items.map(e => w0(() => e.instance)))
                                }
                            });
                            return d
                        })
                    }))
                };
                Sec = function(a) {
                    return a && {
                        ref: a.instance,
                        set() {
                            throw Error("Replacing of stroke on a model unit is not yet supported");
                        }
                    }
                };
                Xcc = function(a, b, c) {
                    return kd(b, d => (...e) => {
                        const {
                            data: f,
                            P: {
                                width: g,
                                height: h
                            }
                        } = d(...e);
                        e = c.D.encode(f.D);
                        const k = c.document.aM.size > 0 ? c.document.encode(f.document) : void 0;
                        return {
                            Fc: { ...__c.IEb,
                                app: {
                                    id: a,
                                    version: 1
                                }
                            },
                            f_b: k,
                            hd: e,
                            wf: {
                                width: g,
                                height: h
                            }
                        }
                    })
                };
                D0 = function() {
                    throw Error("ref not found");
                };
                Wec = function(a, b) {
                    return class extends Vec {
                        componentDidCatch(c) {
                            a.error(c);
                            this.setState({
                                hasError: !0
                            })
                        }
                        render() {
                            return this.state.hasError ? x_(__c.tq, {
                                background: "criticalLow",
                                width: "full",
                                height: "full",
                                padding: "0.25u",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                role: "alert",
                                children: x_(__c.Wu, {
                                    size: "xsmall",
                                    alignment: "center",
                                    children: __c.K("Q6XSow")
                                })
                            }) : x_(b, { ...this.props
                            })
                        }
                        constructor(...c) {
                            super(...c);
                            this.state = {
                                hasError: !1
                            }
                        }
                    }
                };
                gdc = function(a, b, c) {
                    const d = c.D,
                        e = (c = c.D6) ? new Xec(c) : void 0;
                    c = e ? f => e.Ec(f.D) : void 0;
                    switch (d.type) {
                        case 0:
                            a = Yec(a, d, b, c);
                            break;
                        case 1:
                            a = Zec(a, d, b, c);
                            break;
                        default:
                            throw new A(d);
                    }
                    return {
                        rub: a,
                        BFa: e
                    }
                };
                hdc = function(a, b, c, d) {
                    c = c.email;
                    if (c != null) {
                        var e = d ? g => d.Ec(g.D) : void 0,
                            f = c.type;
                        switch (f) {
                            case 2:
                                return $ec(a, c, b, e);
                            default:
                                throw new A(f);
                        }
                    }
                };
                idc = function(a, b) {
                    return c => {
                        if (b) return c = a.D.decode(c.D.hd).data, {
                            type: b.type,
                            VV: typeof b.VV === "function" ? b.VV(c) : b.VV,
                            name: typeof b.name === "function" ? b.name(c) : b.name
                        }
                    }
                };
                Yec = function(a, b, c, d) {
                    const e = b.Vy,
                        {
                            Jva: f,
                            F6: g,
                            Mq: h,
                            DJa: k
                        } = afc(a, c);
                    return typeof e === "object" ? (b = a.y3.types, b = b.yY(b.union(b.instance("RectElement"), b.instance("ShapeElement"))), bfc(a, f, h, b, e, l => new cfc(() => l().map(m => m.instance)), k)) : {
                        type: 0,
                        Vy: (l, m) => {
                            const {
                                document: n,
                                D: p
                            } = h.decode(f(l)).data;
                            m = g(l, m);
                            l = d ? {
                                document: n,
                                D: p,
                                local: d(l)
                            } : {
                                document: n,
                                D: p,
                                local: void 0
                            };
                            return e(l, m)
                        },
                        eaa: E0(k),
                        LN: F0(k),
                        bT: G0(k),
                        eV: H0(k)
                    }
                };
                Zec = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            Jva: f,
                            F6: g,
                            Mq: h,
                            DJa: k
                        } = afc(a, c);
                    return {
                        type: 1,
                        eaa: E0(k),
                        LN: F0(k),
                        bT: G0(k),
                        eV: H0(k),
                        Component: Wec(a.J, I0(({
                            model: l,
                            le: m,
                            bxa: n,
                            gP: p
                        }) => {
                            n = dfc(a.Ee, l, m, n);
                            const q = w_(() => {
                                const {
                                    document: r,
                                    D: t
                                } = h.decode(f(l)).data;
                                return d ? {
                                    document: r,
                                    D: t,
                                    local: d(l)
                                } : {
                                    document: r,
                                    D: t,
                                    local: void 0
                                }
                            }, [l]);
                            m = g(l, m);
                            return x_(e, {
                                data: q,
                                Ee: n,
                                Oh: m,
                                gP: p
                            })
                        }))
                    }
                };
                $ec = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            Jva: f,
                            F6: g,
                            Mq: h,
                            DJa: k
                        } = afc(a, c);
                    return {
                        type: 2,
                        eaa: E0(k),
                        LN: F0(k),
                        bT: G0(k),
                        eV: H0(k),
                        Component: Wec(a.J, I0(({
                            model: l,
                            le: m,
                            scale: n
                        }) => {
                            const p = efc(a.stb, n),
                                q = w_(() => {
                                    const {
                                        document: r,
                                        D: t
                                    } = h.decode(f(l)).data;
                                    return d ? {
                                        document: r,
                                        D: t,
                                        local: d(l)
                                    } : {
                                        document: r,
                                        D: t,
                                        local: void 0
                                    }
                                }, [l]);
                            m = g(l, m);
                            return x_(e, {
                                data: q,
                                Ee: p,
                                scale: n,
                                Oh: m
                            })
                        }))
                    }
                };
                afc = function(a, b) {
                    return {
                        Jva: c => ({
                            document: ffc(a, c),
                            D: c.D.hd
                        }),
                        F6: (c, d) => a.qta.F6(c, d),
                        Mq: odc(b),
                        DJa: new gfc
                    }
                };
                bfc = function(a, b, c, d, e, f, g) {
                    const h = a.zya(a.y3, c, d).compile(e);
                    return {
                        type: 0,
                        Vy: k => ({
                            Ka: f(h(b(k)))
                        }),
                        LN: F0(g),
                        eaa: E0(g),
                        bT: G0(g),
                        eV: H0(g)
                    }
                };
                ffc = function(a, b) {
                    return a.Ca.hn.first(c => c.app.id === b.D.Fc.app.id && c.app.version === b.D.Fc.app.version) ? .data ? ? __c.HR.create(new Map)
                };
                hfc = function(a, b) {
                    return a.jV.get(b.D.Fc.app.id) ? .gEb(b)
                };
                E0 = function(a) {
                    return J0(b => {
                        if ((b = a.get(b.D)) && b.size !== 0) return Array.from(b).map(c => c.zka()).reduce((c, d) => ({
                            width: Math.max(c.width, d.width),
                            height: Math.max(c.height, d.height)
                        }), {
                            width: -Infinity,
                            height: -Infinity
                        })
                    })
                };
                F0 = function(a) {
                    return J0((b, c) => {
                        b = a.get(b);
                        if (!b || b.size === 0) return c;
                        for (const d of b)
                            if (d.LN) return d.LN(c);
                        return c
                    })
                };
                G0 = function(a) {
                    return J0(b => (b = a.get(b.D)) && b.size !== 0 ? Array.from(b).flatMap(c => c.bT()) : [])
                };
                H0 = function(a) {
                    return (b, c) => {
                        a.add(b.D, c);
                        return () => a.remove(b.D, c)
                    }
                };
                Rcc = function(a) {
                    return {
                        aM: a.aM,
                        decode: ifc(a.decode),
                        encode: a.encode
                    }
                };
                ifc = function(a) {
                    const b = new WeakMap;
                    return c => {
                        let d = b.get(c);
                        d || (d = a(c), b.set(c, d));
                        return d
                    }
                };
                mfc = function(a) {
                    var b = a.rta;
                    const c = a.aTb,
                        d = a.YSb,
                        e = a.Jya,
                        f = a.y3,
                        g = a.J,
                        h = a.Ca,
                        k = a.Vab,
                        l = a.v$a;
                    a = new jfc(a.mo, h);
                    const m = new kfc(h, b, f, e, g, a, c, d);
                    b = new lfc;
                    k && k.Tcc(n => hfc(m, n));
                    l && l(n => hfc(m, n));
                    return {
                        Lea: m,
                        qy: m,
                        qta: a,
                        expr: b
                    }
                };
                ofc = function(a, b) {
                    if (!a) return "Arial, Helvetica, sans-serif";
                    const c = __c.wn(a);
                    a = b.find(d => d.id === c.id && d.version === c.version);
                    switch (a ? .name) {
                        case "Arimo":
                        case "Arial":
                            return "Arial, Helvetica, sans-serif";
                        case "Helvetica":
                        case "Helvetica Now":
                            return "Helvetica, Arial, sans-serif";
                        case "Times New Roman MT":
                        case "Times New Roman":
                            return '"Times New Roman", Times, serif';
                        case "Tahoma":
                            return "Tahoma, Geneva, sans-serif";
                        case "Trebuchet MS":
                            return '"Trebuchet MS", Helvetica, sans-serif';
                        case "Lucida Console":
                            return '"Lucida Console", Monaco, monospace';
                        case "Comic Sans":
                            return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
                        case "Courier New OS":
                        case "Courier New":
                            return '"Courier New", monospace';
                        case "Georgia Pro":
                        case "Georgia":
                            return "Georgia, serif";
                        case "Verdana Pro":
                        case "Verdana":
                            return "Verdana, Geneva, sans-serif";
                        default:
                            return a ? .name ? `${nfc(a.name)}, ${"Arial, Helvetica, sans-serif"}` : "Arial, Helvetica, sans-serif"
                    }
                };
                nfc = function(a) {
                    a = a.replace(/["']/g, "");
                    return /[\s,]/.test(a) ? `"${a}"` : a
                };
                qfc = function() {
                    ({
                        Fi: a
                    } = {
                        Fi: []
                    });
                    var a;
                    return ({
                        text: b
                    }) => {
                        const c = pfc(b, a);
                        return x_("span", {
                            style: { ...c,
                                display: "table-cell",
                                width: "100%",
                                height: "100%",
                                verticalAlign: "middle",
                                boxSizing: "border-box"
                            },
                            children: b.stream.Z
                        })
                    }
                };
                pfc = function(a, b) {
                    var c = q => [...a.stream.Xu(q)[q]].values().next().value ? ? __c.sg.Ub[q],
                        d = c("font-family");
                    b = ofc(d, b);
                    d = c("font-size");
                    var e = c("color"),
                        f = c("font-weight"),
                        g = c("font-style"),
                        h = c("decoration"),
                        k = c("strikethrough"),
                        l = c("direction"),
                        m = c("text-align"),
                        n = c("leading");
                    c = c("tracking");
                    const p = [];
                    h === "underline" && p.push("underline");
                    k === "strikethrough" && p.push("line-through");
                    h = p.length > 0 ? p.join(" ") : "none";
                    return {
                        color: e,
                        fontSize: `${d}px`,
                        fontWeight: f,
                        fontFamily: b,
                        fontStyle: g === "italic" ? "italic" : "normal",
                        textDecoration: h,
                        direction: l,
                        textAlign: rfc(l, m),
                        lineHeight: `${sfc(n)}em`,
                        letterSpacing: `${sfc(c)}em`
                    }
                };
                rfc = function(a, b) {
                    const c = {
                        start: "left",
                        center: "center",
                        end: "right",
                        justify: "justify"
                    };
                    if (a !== "rtl") return c[b];
                    switch (b) {
                        case "start":
                            return "end";
                        case "end":
                            return "start";
                        default:
                            return c[b]
                    }
                };
                sfc = function(a) {
                    if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
                    return a / 1E3
                };
                tfc = function(a) {
                    a.AQ && (a.AQ(), a.AQ = null);
                    const b = a.props.Psb;
                    b.forEach(c => {
                        window.addEventListener(c, a.vRa)
                    });
                    a.AQ = () => {
                        b.forEach(c => {
                            window.removeEventListener(c, a.vRa)
                        })
                    }
                };
                xfc = function(a) {
                    const b = v_(function(c) {
                        const [{
                            store: d,
                            Ja: e
                        }] = K0(() => {
                            const f = new ufc,
                                g = new vfc(f);
                            return {
                                store: f,
                                Ja: g
                            }
                        });
                        return x_(wfc, {
                            Faa: e.reset,
                            children: x_(__c.yYb, {
                                Yzb: e,
                                Zzb: d,
                                J2a: a.Tu.contains(c.url),
                                children: ({
                                    ik: f
                                }) => c.children({
                                    ik: f
                                })
                            })
                        })
                    });
                    return v_(c => c.kob && a.ab ? .status !== 2 ? x_(b, { ...c
                    }) : c.children({
                        ik: !1
                    }))
                };
                yfc = function(a) {
                    return I0(function(b) {
                        return x_("div", {
                            className: "gcYy_A PYuKbg",
                            children: x_(__c.Yv, {
                                U7: "both",
                                children: ({
                                    width: c,
                                    height: d
                                }) => x_(a.Hj, {
                                    fill: b.fill,
                                    Tb: c,
                                    sc: d,
                                    ve: void 0,
                                    animation: void 0,
                                    rG: !1,
                                    da: void 0,
                                    ha: void 0
                                })
                            })
                        })
                    })
                };
                Afc = function(a) {
                    const b = a.wa,
                        c = a.rka,
                        d = e => {
                            e = __c.wn(e);
                            b.dz([e], {
                                Yl: !0
                            });
                            return b.Uba(e)
                        };
                    return I0(function(e) {
                        var f = e.QBa;
                        const g = e.fontWeight,
                            h = e.zwa,
                            k = e.Hc,
                            l = e.Kmb,
                            m = e.ariaInvalid,
                            n = e.disabled,
                            p = e.id,
                            q = e.name,
                            r = e.inputMode,
                            t = e.onBlur,
                            u = e.onFocus,
                            w = e.onChange,
                            y = e.padding,
                            B = e.placeholder,
                            D = e.h9a,
                            C = e.readOnly,
                            E = e.outline,
                            J = e.paddingInlineEnd,
                            M = e.type,
                            O = e.value,
                            R = e.width;
                        e = {
                            boxSizing: e.boxSizing,
                            color: e.pj,
                            fontSize: e.fontSize,
                            backgroundColor: e.backgroundColor,
                            borderStyle: e.borderStyle,
                            borderRadius: e.borderRadius,
                            borderWidth: e.borderWidth,
                            fontFamily: f && d(f),
                            fontWeight: g && __c.Jn(g),
                            padding: y,
                            paddingInlineEnd: J,
                            outline: E,
                            width: R
                        };
                        [f] = K0(() => c ? .Fxb());
                        return x_("div", {
                            ref: f ? .xj,
                            className: "BHOPhg PYuKbg",
                            children: x_("input", {
                                "aria-describedby": k,
                                "aria-errormessage": l,
                                "aria-invalid": m,
                                className: zfc(["_6Yde8g", D && "sR0SUA"]),
                                disabled: n,
                                id: p,
                                name: q,
                                inputMode: r,
                                onBlur: t,
                                onFocus: u,
                                onChange: w,
                                placeholder: B,
                                readOnly: C,
                                type: M,
                                value: O,
                                style: { ...e,
                                    "--srRiKA": D,
                                    "--oiOG3Q": h ? .default,
                                    "--oGOcXA": h ? .Qg,
                                    "--UBd2ow": h ? .focus
                                },
                                "data-1p-ignore": !0,
                                "data-bwignore": !0,
                                "data-lpignore": !0,
                                "data-protonpass-ignore": !0,
                                "data-form-type": "other"
                            })
                        })
                    })
                };
                Bfc = function() {
                    return () => x_(__c.fV, {
                        mediaType: "embed",
                        failed: !1
                    })
                };
                Cfc = function(a) {
                    return I0(function(b) {
                        return x_("div", {
                            className: "oUJNhQ PYuKbg",
                            children: x_(a.Te, {
                                text: b.text,
                                animation: void 0,
                                Ad: "middle",
                                oa: void 0,
                                hb: void 0,
                                Se: [],
                                writingMode: 1
                            })
                        })
                    })
                };
                Dfc = function() {
                    return I0(function(a) {
                        return x_("div", {
                            className: a.className,
                            style: a.style,
                            children: a.children
                        })
                    })
                };
                Efc = function(a) {
                    const b = a.wa,
                        c = a.rka,
                        d = e => {
                            e = __c.wn(e);
                            b.dz([e], {
                                Yl: !0
                            });
                            return b.Uba(e)
                        };
                    return I0(function(e) {
                        var f = e.QBa;
                        const g = e.fontSize,
                            h = e.fontWeight,
                            k = e.zwa,
                            l = e.Hc,
                            m = e.Kmb,
                            n = e.ariaInvalid,
                            p = e.disabled,
                            q = e.id,
                            r = e.name,
                            t = e.onBlur,
                            u = e.onFocus,
                            w = e.onChange,
                            y = e.padding,
                            B = e.paddingInlineEnd,
                            D = e.placeholder,
                            C = e.h9a,
                            E = e.readOnly,
                            J = e.resize,
                            M = e.outline,
                            O = e.rows,
                            R = e.value,
                            Q = e.width,
                            S = e.whiteSpace,
                            W = e.wordBreak;
                        e = {
                            backgroundColor: e.backgroundColor,
                            borderRadius: e.borderRadius,
                            borderStyle: e.borderStyle,
                            borderWidth: e.borderWidth,
                            boxSizing: e.boxSizing,
                            color: e.pj,
                            fontFamily: f && d(f),
                            fontSize: g,
                            fontWeight: h && __c.Jn(h),
                            outline: M,
                            padding: y,
                            paddingInlineEnd: B,
                            resize: J,
                            whiteSpace: S,
                            width: Q,
                            wordBreak: W
                        };
                        [f] = K0(() => c ? .Fxb());
                        return x_("div", {
                            ref: f ? .xj,
                            className: "BHOPhg PYuKbg",
                            children: x_("textarea", {
                                "aria-describedby": l,
                                "aria-errormessage": m,
                                "aria-invalid": n,
                                className: zfc(["_6Yde8g", C && "sR0SUA"]),
                                disabled: p,
                                id: q,
                                name: r,
                                onBlur: t,
                                onFocus: u,
                                onChange: w,
                                placeholder: D,
                                rows: O,
                                readOnly: E,
                                style: { ...e,
                                    "--srRiKA": C,
                                    "--oiOG3Q": k ? .default,
                                    "--oGOcXA": k ? .Qg,
                                    "--UBd2ow": k ? .focus
                                },
                                value: R
                            })
                        })
                    })
                };
                __c.MK.prototype.Aq = __c.ea(9, function() {
                    return this.mb("\n")
                });
                __c.tR.prototype.Aq = __c.ea(8, function() {
                    this.Jb.Aq();
                    return this
                });
                __c.yI.prototype.QR = __c.ea(7, function(a, b) {
                    this.console.error(...__c.Ec(this, "critical", a, b))
                });
                __c.zI.prototype.QR = __c.ea(6, function(a, b) {
                    this.Bw.QR(a, b);
                    __c.wI(this, a, "critical", b)
                });
                var Ffc = class {
                        constructor(a) {
                            this.ref = a
                        }
                    },
                    Gfc = class {
                        get ref() {
                            return this.box.get()
                        }
                        constructor(a) {
                            this.box = a
                        }
                    },
                    Hfc = class {
                        get ref() {
                            return this.box.ref
                        }
                        set() {
                            throw Error("cannot set unmodifiable box");
                        }
                        constructor(a) {
                            this.box = a
                        }
                    },
                    l_ = __webpack_require__(75402)._;
                var k_ = __webpack_require__(245307).Fm;
                var Ifc = __webpack_require__(322594),
                    x_ = Ifc.jsx,
                    Jfc = Ifc.jsxs;
                var L0 = __webpack_require__(205482),
                    Kfc = L0.Component,
                    I0 = L0.memo,
                    Vec = L0.PureComponent,
                    M0 = L0.useCallback,
                    Lfc = L0.useEffect,
                    w_ = L0.useMemo,
                    K0 = L0.useState;
                var v_ = __webpack_require__(721226).PA;
                var N0 = __webpack_require__(186901),
                    w0 = N0.EW,
                    Mfc = N0.fm,
                    Nfc = N0.h5,
                    Ofc = N0.m3,
                    O_ = N0.mJ,
                    O0 = N0.sH,
                    P0 = N0.XI;
                var J0 = __webpack_require__(536618).iB;
                var Pfc = __webpack_require__,
                    Qfc = Pfc(208463),
                    zfc = Pfc.n_x(Qfc)();
                var Hbc = {
                    MOa: "null",
                    pca: "*"
                };
                var Rfc = () => [...document.getElementsByTagName("iframe")],
                    rcc = class {
                        dispose() {
                            this.disposed || (this.disposed = !0, this.X0a.removeEventListener("message", this.$0), Sfc.delete(this.aV), this.j6.clear())
                        }
                        constructor(a, b = Gbc) {
                            var c = window;
                            this.options = {
                                aV: "codelet"
                            };
                            this.J = a;
                            this.X0a = c;
                            this.LOa = b;
                            this.axb = Rfc;
                            this.disposed = !1;
                            this.$0 = async d => {
                                const e = l_()();
                                try {
                                    const p = d.source,
                                        q = d.data;
                                    if (p) {
                                        var f = q ? .clientId,
                                            g = q ? .sandboxCommsSource ? ? q ? .source;
                                        if (!g ? .startsWith("react-")) {
                                            var h = this.axb().find(r => r.contentWindow ===
                                                p);
                                            if (h) {
                                                var k = h.getAttribute("data-process-id");
                                                if (k && k.startsWith(this.aV)) {
                                                    var l = z(h.contentWindow),
                                                        m = this.LOa(d, h);
                                                    if (m.valid) {
                                                        var n = Ibc(q, f);
                                                        if (n.ok) {
                                                            d = {
                                                                type: "connection_request_not_matched"
                                                            };
                                                            for (const r of this.j6)
                                                                if (d = e.r(await e.s(r({
                                                                        Qpb: {
                                                                            eJb: k,
                                                                            clientId: f
                                                                        },
                                                                        iframe: h
                                                                    }))), d.type !== "connection_request_not_matched") break;
                                                            switch (d.type) {
                                                                case "connection_request_matched":
                                                                    l.postMessage({
                                                                        source: "parent",
                                                                        sandboxCommsSource: "parent",
                                                                        clientId: f
                                                                    }, m.pca, [d.port]);
                                                                    break;
                                                                case "connection_request_not_matched":
                                                                    this.J.GA("received an init message which no listener accepted", {
                                                                        extra: new Map([
                                                                            ["processId", k],
                                                                            ["data.source", g],
                                                                            ["data.clientId", f]
                                                                        ])
                                                                    });
                                                                    this.options.hXb && h.remove();
                                                                    break;
                                                                case "already_connected":
                                                                    this.J.GA("received an init message for a processId & clientId that is already connected", {
                                                                        extra: new Map([
                                                                            ["processId", k],
                                                                            ["data.source", g],
                                                                            ["data.clientId", f]
                                                                        ])
                                                                    });
                                                                    break;
                                                                default:
                                                                    throw new A(d);
                                                            }
                                                        } else this.J.GA(n.error, {
                                                            extra: new Map([
                                                                ["data.source", g],
                                                                ["data.clientId", f]
                                                            ])
                                                        })
                                                    } else m.error && this.J.info(m.error.message, {
                                                        extra: m.error.extra
                                                    })
                                                }
                                            }
                                        }
                                    }
                                } finally {
                                    e.s()
                                }
                            };
                            this.aV =
                                this.options.aV ? ? `iframe_host_${Tfc++}`;
                            this.j6 = new Set;
                            x(!Sfc.has(this.aV), `A IFrameHostConnector has already been created with the prefix ${this.options.aV}`);
                            Sfc.add(this.aV);
                            this.X0a.addEventListener("message", this.$0)
                        }
                    },
                    Tfc = 0,
                    Sfc = new Set;
                var m_ = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.xJb = a.message;
                        Object.setPrototypeOf(this, m_.prototype)
                    }
                };
                var Ufc = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.J = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ba)()
                            } catch (e) {
                                return this.J.Vb(e), Ea(e)
                            }
                        };
                        this.rGb = d => {
                            this.J.Vb(d)
                        };
                        this.$0 = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.CJb(d)
                            } catch (e) {
                                this.J.Vb(e)
                            } else this.J.error(new m_({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.$0;
                        this.port.onmessageerror = this.rGb
                    }
                };
                var Jbc = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    Vfc = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.ne);
                            this.CKb(a)
                        }
                        reject(a) {
                            clearTimeout(this.ne);
                            this.z$a(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.ne);
                            this.ne = setTimeout(k_.wrap(() => {
                                Kbc(this)
                            }), Math.max(this.timeoutMs - 500, 500))
                        }
                        constructor() {
                            this.timeoutMs = 5E3;
                            this.p = new Promise((a, b) => {
                                this.CKb = a;
                                this.z$a = b
                            });
                            this.setTimeout()
                        }
                    };
                var Wfc = class {
                    request(a, b) {
                        const c = this.X8a,
                            d = new Vfc,
                            e = this.pKb(),
                            f = async function() {
                                const g = l_()();
                                try {
                                    c.set(e, {
                                        path: a,
                                        rKb: d
                                    });
                                    try {
                                        const h = g.r(await g.s(d.promise()));
                                        return (0, __c.Ba)(h)
                                    } catch (h) {
                                        return g.r(), h instanceof Jbc ? Ea(new m_({
                                            code: "internal_error",
                                            message: `Comms promise timed out (${a}).`
                                        })) : Ea(h)
                                    } finally {
                                        c.delete(e)
                                    }
                                } finally {
                                    g.s()
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.J.Vb(b.error, {
                            Ke: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a,
                        b) {
                        this.send = a;
                        this.J = b;
                        this.pKb = __c.sn;
                        this.X8a = new Map
                    }
                };
                var Xfc = class {
                    handle(a, b) {
                        if (this.V1.has(a)) throw new m_({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.V1.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.iaa = a;
                        this.J = b;
                        this.nKb = !0;
                        this.jsb = c;
                        this.V1 = new Map;
                        this.xub = new Set
                    }
                };
                var mcc = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.V1.handle(c, d);
                            a = new Yfc(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            {
                                                path: g,
                                                rKb: h
                                            } = d.X8a.get(e) || {};
                                        if (h) switch (f) {
                                            case "response":
                                                h.resolve(c.payload);
                                                break;
                                            case "ack":
                                                h.reset(2E4);
                                                break;
                                            case "error":
                                                d.J.U4({
                                                    level: "info",
                                                    category: "sandbox_comms",
                                                    message: "Error response received",
                                                    data: {
                                                        path: g ? ? "unknown"
                                                    }
                                                });
                                                h.reject(new m_({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new A(c);
                                        } else f !== "ack" && d.J.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        Mbc(this.V1, c);
                                        break;
                                    default:
                                        throw new A(c);
                                }
                            }, a, b.ag("bus"));
                            this.client = new Wfc(a.nG, b.ag("client"));
                            this.V1 = new Xfc(a, b.ag("requestHandler"))
                        }
                    },
                    Yfc = class {
                        constructor(a, b, c) {
                            this.Vka = a;
                            this.nG = (d, e, f) => this.G5.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.zGb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.Vka({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.Vka({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.Vka({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.Vka({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new A(d);
                                }
                            };
                            this.G5 = new Ufc({
                                CJb: this.zGb
                            }, b, c)
                        }
                    };
                var Nbc = H(() => ({}));
                var Zfc = H(() => ({
                    S6: X(1),
                    zd: X(2)
                }));
                var o_ = H(() => ({
                    Nj: Y("documentId", 1),
                    nj: Y("elementId", 2),
                    Xhb: G("websiteContext", 3, Zfc),
                    xEa: __c.jJ("isPreview", 4)
                }), {
                    fi: 0
                });
                var Obc = H(() => ({}));
                var p_ = H(() => ({}));
                var P_ = H(() => ({
                    textContent: Y("textContent", 1),
                    backgroundColor: Y("backgroundColor", 2)
                }), {
                    fi: 0
                });
                var Occ = H(() => ({
                    config: (0, __c.nJ)("config", 1, P_)
                }), {
                    fi: 0
                });
                var $fc = H(() => ({}));
                var agc = __c.fb(() => [1, 2]);
                var Qbc = H(() => ({
                    mode: __c.Ta("mode", 1, agc)
                }), {
                    fi: 0
                });
                var Sbc = H(() => ({}));
                var bgc = H(() => ({
                    top: aJ("top", 1),
                    left: aJ("left", 2),
                    width: aJ("width", 3),
                    height: aJ("height", 4)
                }), {
                    fi: 0
                });
                var cgc = H(() => ({
                    $Ya: X("entityId", 1),
                    uXb: __c.Qa("boundingRect", 2, bgc)
                }), {
                    fi: 0
                });
                var Ubc = H(() => ({
                    selection: G("selection", 1, cgc)
                }), {
                    fi: 0
                });
                var q_ = H(() => ({}));
                var Vbc = H(() => ({
                    $Ya: X("entityId", 1),
                    textContent: X("textContent", 2)
                }), {
                    fi: 0
                });
                var Wbc = H(() => ({}));
                var occ = class {
                    async wca(a) {
                        const b = l_()();
                        try {
                            const c = b.r(await b.s(this.BY.request("SET_EDITING_CONFIG", Occ.Fa(a)))),
                                d = Rbc(c, "SET_EDITING_CONFIG");
                            return $fc.za(d)
                        } finally {
                            b.s()
                        }
                    }
                    constructor(a) {
                        this.BY = a
                    }
                };
                var M_ = H(() => ({
                    type: __c.F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
                    id: X("id", 1),
                    url: X("url", 4)
                }), {
                    fi: 0
                });
                var Ybc = H(() => ({
                    config: Y("config", 1),
                    NS: G("fontEditable", 2, M_)
                }), {
                    fi: 0
                });
                var Q0 = H(() => ({
                    type: __c.F("type", "RECOLORABLE", 1, "RECOLORABLE"),
                    id: X("id", 1),
                    value: X("value", 2)
                }), {
                    fi: 0
                });
                var dgc = H(() => ({
                    borderRadius: aJ("borderRadius", 1),
                    borderWidth: aJ("borderWidth", 2)
                }), {
                    fi: 0
                });
                var egc = H(() => ({
                    type: __c.F("type", "BORDERABLE", 2, "BORDERABLE"),
                    id: X("id", 1),
                    value: __c.Qa("value", 2, dgc)
                }), {
                    fi: 0
                });
                var fgc = H(() => ({
                    id: X("id", 1),
                    value: X("value", 2)
                }), {
                    fi: 0
                });
                var R0 = H(() => ({
                    type: __c.F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
                    size: aJ("size", 21)
                }), {
                    fi: 0
                });
                var Zbc = H(() => ({
                    config: X("config", 1),
                    M1: Ra("recolorables", 4, Q0),
                    Rnb: Ra("borderables", 5, egc),
                    gtb: Ra("editPanelValues", 6, fgc),
                    sI: G("fontSizeable", 7, R0),
                    NS: G("fontEditable", 8, M_)
                }), {
                    fi: 0
                });
                var $bc = __c.eb(() => ({
                    type: [1, Q0, 2, egc, 3, M_, 5, R0]
                }), () => ({}), {
                    fi: 0
                });
                var acc = H(() => ({
                    config: X("config", 1)
                }), {
                    fi: 0
                });
                var bcc = H(() => ({
                    id: X(1),
                    value: X(2)
                }));
                var ccc = H(() => ({
                    config: X(1)
                }));
                var ecc = H(() => ({
                    config: X("config", 1)
                }), {
                    fi: 0
                });
                var fcc = H(() => ({
                    config: Y("config", 1),
                    NS: G("fontEditable", 2, M_)
                }), {
                    fi: 0
                });
                var gcc = H(() => ({
                    config: X("config", 1),
                    M1: Ra("recolorables", 4, Q0),
                    Rnb: Ra("borderables", 5, egc),
                    NS: G("fontEditable", 6, M_),
                    gtb: Ra("editPanelValues", 7, fgc),
                    sI: G("fontSizeable", 8, R0)
                }), {
                    fi: 0
                });
                var hcc = H(() => ({}));
                var ggc = H(() => ({
                    scrollWidth: aJ("scrollWidth", 1),
                    scrollHeight: aJ("scrollHeight", 2),
                    offsetWidth: aJ("offsetWidth", 3),
                    offsetHeight: aJ("offsetHeight", 4)
                }), {
                    fi: 0
                });
                var icc = H(() => ({
                    body: __c.Qa("body", 1, ggc)
                }), {
                    fi: 0
                });
                var ncc = class {
                    constructor(a) {
                        this.BY = a
                    }
                };
                var hgc = H(() => ({
                    scrollWidth: aJ("scrollWidth", 1),
                    scrollHeight: aJ("scrollHeight", 2),
                    offsetWidth: aJ("offsetWidth", 3),
                    offsetHeight: aJ("offsetHeight", 4)
                }), {
                    fi: 0
                });
                var kcc = H(() => ({
                    body: __c.Qa("body", 1, hgc)
                }), {
                    fi: 0
                });
                var scc = class {
                    constructor(a, b) {
                        this.w9 = a;
                        this.J = b;
                        this.EY = new Map
                    }
                };
                var tcc = I0(function({
                    className: a,
                    url: b,
                    embed: c,
                    H2: d,
                    qJa: e,
                    bOa: f,
                    Pbc: g = qcc
                }) {
                    const h = w_(() => `${"codelet"}-${b}-${__c.sn()}`, [b]),
                        {
                            id: k,
                            src: l,
                            sandbox: m,
                            allow: n,
                            allowFullscreen: p
                        } = g(z(c.html));
                    Lfc(() => {
                        e(h);
                        return () => {
                            f(h)
                        }
                    }, [e, f, h]);
                    return x_("div", {
                        className: a,
                        children: x_("div", {
                            ref: q => {
                                q && d(q)
                            },
                            className: "R9vaCQ",
                            children: x_("iframe", {
                                id: k,
                                className: "_5K1SQ",
                                "data-process-id": h,
                                src: l,
                                title: c.title || __c.K("gs+cqw"),
                                sandbox: m,
                                allow: n,
                                allowFullScreen: p
                            })
                        })
                    })
                });
                var igc;
                igc = Symbol.iterator;
                var cfc = class {
                    static G(a) {
                        L(a, {
                            rn: w0,
                            Tr: w0
                        })
                    }
                    get rn() {
                        return this.Omb().map(a => {
                            let b = this.e1a.get(a);
                            b == null && (b = `${this.Pyb++}`, this.e1a.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Tr() {
                        const a = new Map;
                        this.rn.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    wl(a) {
                        return z(this.Tr.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.rn.length
                    }
                    count() {
                        return this.rn.length
                    }
                    toArray() {
                        return this.rn.map(a => a.ref)
                    }
                    yi() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get KS() {
                        return this.rn[0] ? .ref
                    }
                    get VT() {
                        return this.rn[this.rn.length - 1] ? .ref
                    }
                    first(a) {
                        return a ?
                            this.rn.find(b => a(b.ref)) ? .ref : this.KS
                    }
                    last(a) {
                        if (!a) return this.VT;
                        const b = this.rn;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.rn;
                        for (a = this.wl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    previous(a, b) {
                        const c = this.rn;
                        for (a = this.wl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    mf(a, b) {
                        a = this.Tr.get(a);
                        b = this.Tr.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Sr(a) {
                        return this.rn[this.wl(a)].id
                    }
                    has(a) {
                        return this.Tr.has(a)
                    }
                    pq(a) {
                        return new __c.KK(this,
                            a)
                    }
                    map(a) {
                        return this.rn.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.rn.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.rn.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.rn.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.rn.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.rn.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.rn.every(b => a(b.ref, b.id))
                    }[igc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.Omb = a;
                        this.Pyb = (cfc.G(this), 0);
                        this.e1a = new WeakMap
                    }
                };
                var adc = __c.y_()(() => ({
                        AYb({
                            NL: a,
                            Mnb: b,
                            version: c
                        }, d, e) {
                            e = e && {
                                fonts: z_("font", e.fonts),
                                media: z_("media", e.media),
                                yd: z_("video", e.yd),
                                embeds: z_("embed", e.embeds)
                            };
                            return {
                                data: {
                                    D: {
                                        NL: a,
                                        Ys: {
                                            domain: "resource",
                                            resource: {
                                                ref: {
                                                    type: "blueprint",
                                                    id: b,
                                                    version: c
                                                },
                                                resources: e
                                            }
                                        },
                                        type: "instance",
                                        Nd: void 0
                                    },
                                    document: {}
                                },
                                P: d
                            }
                        }
                    })),
                    jgc = ({
                        resource: a,
                        $D: b
                    }) => {
                        const c = Mfc(() => {
                            __c.Nta(b, a.ref.ref)
                        });
                        return {
                            Ka: new cfc(() => {
                                const d = Ebc(b, a.ref.ref);
                                return d ? (x(d.type === "group", "Expected group element"), d.Ka.filter(__c.sb).map(e =>
                                    __c.rE.create({ ...e,
                                        locked: !0,
                                        Vg: !0
                                    }))) : []
                            }),
                            wg: c
                        }
                    },
                    kgc = __c.i_()(({
                        wi: {
                            $D: a
                        }
                    }) => ({
                        metadata: {
                            type: "blueprint",
                            name: __c.K("iAtEVw")
                        },
                        D: {
                            type: 0,
                            Vy: ({
                                D: b
                            }) => jgc({
                                resource: b.Ys.resource,
                                $D: a
                            })
                        },
                        exports: {}
                    }));
                S0 = __c.S0 = class {};
                S0.val = (a, b) => H_(0, 0, () => b)(a);
                S0.VD = (a, b) => H_(1, 0, () => b)(a);
                S0.ref = (a, b) => H_(0, 0, () => b)(a);
                S0.bHb = () => {
                    var a = __c.T0;
                    return H_(1, 1, () => a)(1)
                };
                S0.K7a = (a, b) => H_(0, 1, () => b)(a);
                S0.Nra = H_(0, 0, A_);
                S0.iYa = H_(0, 0, C_);
                S0.rj = H_(0, 0, D_);
                S0.Vx = H_(1, 0, A_);
                S0.HTa = H_(1, 0, vcc);
                S0.hYa = H_(1, 0, C_);
                S0.Kma = H_(1, 0, D_);
                S0.kF = H_(1, 0, B_);
                S0.QSa = H_(1, 0, wcc);
                S0.Qz = H_(1, 1, A_);
                S0.Uaa = H_(1, 1, vcc);
                S0.Tj = H_(1, 1, C_);
                S0.fHb = H_(1, 1, B_);
                S0.rC = H_(1, 1, D_);
                S0.aHb = H_(1, 1, wcc);
                S0.Lm = H_(0, 0, E_);
                S0.listRef = H_(0, 0, F_);
                S0.EXa = H_(0, 0, function(a) {
                    return {
                        kind: 9,
                        itemType: a
                    }
                });
                S0.Epa = H_(0, 0, G_);
                S0.BRb = H_(0, 0, xcc);
                S0.eHb = H_(0, 1, E_);
                S0.iHb = H_(0, 1, G_);
                S0.NTa = H_(1, 0, G_);
                S0.I7a = H_(1, 1, E_);
                S0.dHb = H_(1, 1, F_);
                S0.Vaa = H_(1, 1, G_);
                S0.FMa = A_;
                S0.Wzb = B_;
                S0.S9 = E_;
                S0.I3a = F_;
                S0.ri = G_;
                S0.C3 = xcc;
                S0.bFb = I_({});
                var zcc = Object.freeze({
                    document: Object.freeze({}),
                    D: Object.freeze({})
                });
                var Scc = __c.J_({
                    D: I_({
                        NL: S0.Nra(1),
                        Ys: S0.Epa(2, {
                            domain: S0.rj(1, "resource"),
                            resource: S0.NTa(2, {
                                ref: S0.Lm(2, "BlueprintRef"),
                                resources: S0.iHb(3, {
                                    fonts: S0.listRef(1, S0.S9("FontRef")),
                                    media: S0.listRef(2, S0.S9("MediaRef")),
                                    yd: S0.listRef(3, S0.S9("VideoRef")),
                                    embeds: S0.listRef(5, S0.S9("EmbedRef"))
                                })
                            })
                        })
                    })
                });
                var jdc = {
                    zh: adc,
                    Ro: kgc,
                    Ah: Scc
                };
                var lgc = class {
                    constructor() {
                        this.YY = {
                            mt: !1,
                            CK: !1,
                            MH: !1,
                            eI: !1
                        }
                    }
                };
                var mgc = class {
                    create(a) {
                        switch (a.type) {
                            case "rect":
                                return Ecc(this, a);
                            case "shape":
                                return Fcc(this, a);
                            case "grid":
                                return Hcc(this, a);
                            default:
                                const b = __c.LR.snapshot(a);
                                return __c.LR.create({ ...b,
                                    locked: !0,
                                    Vg: !0,
                                    rh: Dcc(this.R3a, a)
                                })
                        }
                    }
                    createPath(a) {
                        return this.e.classes.sQ.create({
                            d: a.d
                        }, {
                            U: {
                                fill: K_(this, a.fill),
                                stroke: a.stroke
                            },
                            attributes: {
                                V: () => a.V
                            }
                        })
                    }
                    constructor(a, b) {
                        this.e = a;
                        this.Nd = b;
                        this.R3a = new lgc
                    }
                };
                var ngc = class {
                    constructor(a) {
                        this.Nd = a
                    }
                };
                var bdc = __c.y_()(() => ({
                        FYb({
                            NL: a,
                            Mnb: b,
                            type: c
                        }, d) {
                            return {
                                data: {
                                    D: {
                                        NL: a,
                                        Ys: {
                                            domain: "document",
                                            id: b,
                                            version: 1,
                                            Ib: c === "source" ? {
                                                type: c
                                            } : {
                                                type: c,
                                                Nd: new Map
                                            }
                                        }
                                    },
                                    document: {}
                                },
                                P: d
                            }
                        }
                    })),
                    ogc = ({
                        data: a,
                        AH: b,
                        expr: c
                    }) => {
                        b = b.Bvb(a.NL);
                        if (!b) throw Error(`Blueprint set ${a.NL} not found`);
                        const d = b.Ci.get(a.Ys.id);
                        if (!d) throw Error(`Blueprint ${a.Ys.id} not found in blueprint set ${a.NL}`);
                        if (a.Ys.Ib.type === "source") return {
                            Ka: d.xf
                        };
                        const e = new mgc(c, new ngc(a.Ys.Ib.Nd));
                        return {
                            Ka: c.list(() => d.Ka.map(f => e.create(f)))
                        }
                    },
                    pgc = __c.i_()(({
                        $L: {
                            expr: a
                        },
                        wi: {
                            AH: b
                        }
                    }) => ({
                        metadata: {
                            type: void 0,
                            name: void 0
                        },
                        D: {
                            type: 0,
                            Vy: ({
                                D: c
                            }) => ogc({
                                data: c,
                                AH: b,
                                expr: a
                            })
                        },
                        exports: {}
                    }));
                var qgc = S0.C3({
                    type: void 0
                }, S0.ri({
                    type: S0.rj(1, "boolean"),
                    value: S0.Uaa(2)
                }), S0.ri({
                    type: S0.rj(1, "non-negative-double"),
                    value: S0.Tj(2, {
                        min: 0
                    })
                }), S0.ri({
                    type: S0.rj(1, "double"),
                    value: S0.Tj(2)
                }), S0.ri({
                    type: S0.rj(1, "string"),
                    value: S0.Qz(2)
                }), S0.ri({
                    type: S0.rj(1, "richtext2"),
                    value: S0.Lm(2, "Richtext2")
                }), S0.ri({
                    type: S0.rj(1, "image_fill"),
                    value: S0.Lm(2, "Fill")
                }), S0.ri({
                    type: S0.rj(1, "video_fill"),
                    value: S0.Lm(2, "Fill")
                }));
                var rgc = S0.ri({
                        type: S0.rj(1, "source")
                    }),
                    sgc = S0.ri({
                        type: S0.rj(1, "instance"),
                        Nd: S0.EXa(2, qgc)
                    }),
                    Tcc = __c.J_({
                        D: I_({
                            NL: S0.Nra(1),
                            Ys: S0.Epa(2, {
                                domain: S0.rj(1, "document"),
                                id: S0.Nra(2),
                                version: S0.kF(3),
                                Ib: S0.BRb(4, {
                                    type: void 0
                                }, rgc, sgc)
                            })
                        })
                    });
                var kdc = {
                    zh: bdc,
                    Ro: pgc,
                    Ah: Tcc
                };
                var tgc = class {
                        static G(a) {
                            L(a, {
                                nj: O0.ref
                            })
                        }
                        constructor(a) {
                            this.nj = (tgc.G(this), void 0);
                            this.nj = a
                        }
                    },
                    Zcc = __c.y_()(() => ({
                        EYb(a, b) {
                            return {
                                data: {
                                    D: {
                                        Kxa: {
                                            type: "embed",
                                            id: a,
                                            version: 0
                                        },
                                        SUa: b,
                                        config: void 0,
                                        cka: void 0
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    }));
                var ugc = class {};
                var vgc = class {
                    static G(a) {
                        L(a, {
                            xT: O0.ref,
                            dLa: P0
                        })
                    }
                    subscribe(a) {
                        this.Rj.add(a);
                        return () => {
                            this.Rj.delete(a)
                        }
                    }
                    async UCa(a, b, c, d, e, f) {
                        const g = l_()();
                        try {
                            const h = a.cka.ref ? .first(),
                                k = this.wa,
                                l = a.config != null && a.config !== "" ? a.config : b.config;
                            this.config.bz ? .Vsa({
                                config: l
                            }, a, c, d, e, f);
                            let m;
                            try {
                                m = k != null && h != null ? g.r(await g.s(N_(k, h))) : void 0
                            } catch (n) {
                                g.r(), this.J.Vb(n)
                            }
                            return new fcc({
                                config: a.config != null && a.config !== "" ? a.config : void 0,
                                NS: m
                            })
                        } finally {
                            g.s()
                        }
                    }
                    constructor(a, b, c, d) {
                        this.config = a;
                        this.wa =
                            b;
                        this.J = c;
                        this.Op = d;
                        this.Rj = (vgc.G(this), new Set);
                        this.xT = !1;
                        this.notifyListeners = e => {
                            this.Rj.forEach(f => f(e))
                        };
                        this.L2 = (e, f) => {
                            this.lo ? .();
                            this.lo = void 0;
                            const g = r => t_(f, new Q0(r)),
                                h = this.wa,
                                k = h ? r => Mcc(h, f, r) : void 0,
                                l = r => dcc(f, new bcc(r)),
                                m = r => t_(f, new R0({
                                    size: r
                                })),
                                n = {
                                    UCa: async r => this.UCa(e, r, g, k, m, l),
                                    eyb: r => {
                                        this.config.bz ? .Vsa({ ...r,
                                            sI: r.sI ? .size
                                        }, e, g, k, m, l);
                                        return new hcc
                                    },
                                    XCa: this.Sxb
                                },
                                p = O_(() => e.config, async r => {
                                    const t = l_()();
                                    try {
                                        const u = t.r(await t.s(s_(f, {
                                            config: r,
                                            NS: void 0
                                        })));
                                        u.config &&
                                            u.config !== r && this.config.bz ? .Vsa({ ...u,
                                                sI: u.sI ? .size
                                            }, e, g, k, m, l)
                                    } finally {
                                        t.s()
                                    }
                                }),
                                q = O_(() => e.cka.ref ? .first(), async r => {
                                    const t = l_()();
                                    try {
                                        const u = e.config,
                                            w = this.wa,
                                            y = t.r(await t.s(s_(f, {
                                                config: u,
                                                NS: w != null && r != null ? t.r(await t.s(N_(w, r))) : void 0
                                            })));
                                        y.config && y.config !== u && this.config.bz ? .Vsa({ ...y,
                                            sI: y.sI ? .size
                                        }, e, g, k, m, l)
                                    } finally {
                                        t.s()
                                    }
                                });
                            this.lo = () => {
                                p();
                                q()
                            };
                            Ncc(this, e, f, g, k, m, l);
                            return {
                                ntb: n
                            }
                        };
                        this.mK = e => {
                            const f = this.Op && new Zfc({
                                S6: this.Op.id,
                                zd: this.Op.zd
                            });
                            return {
                                vWa: {
                                    p0a: () => new o_({
                                        Nj: e.page ? .container ? .id,
                                        nj: e.nj,
                                        Xhb: f
                                    }),
                                    u0a: () => new p_
                                }
                            }
                        };
                        this.dLa = () => {
                            this.xT = !0
                        };
                        this.GF = () => {
                            this.lo ? .()
                        };
                        this.Sxb = e => {
                            this.notifyListeners({
                                height: e.body.scrollHeight,
                                width: e.body.scrollWidth
                            })
                        }
                    }
                };
                var Ucc = __c.J_({
                    D: I_({
                        Kxa: S0.Lm(1, "EmbedRef"),
                        SUa: S0.Nra(35),
                        config: S0.Qz(29),
                        cka: S0.dHb(6, S0.S9("FontRef"))
                    })
                });
                var wgc = __c.i_()(({
                        wi: a,
                        $L: b
                    }) => {
                        const c = a.hL,
                            d = a.wa,
                            e = a.Op,
                            f = b.J,
                            g = new ugc;
                        return {
                            metadata: {
                                type: "codelet",
                                name: __c.K("4kcGvw"),
                                VV: h => h.SUa
                            },
                            D6: () => new tgc(void 0),
                            D: __c.h_(v_(({
                                data: {
                                    D: h,
                                    local: k
                                },
                                Ee: {
                                    aX: l,
                                    ekb: m
                                },
                                Oh: n,
                                gP: p
                            }) => {
                                Nfc(() => {
                                    k.nj = n.nj
                                });
                                const [q] = K0(() => new vgc(g, d, f, e));
                                Lfc(() => {
                                    p ? .(q)
                                }, [q, p]);
                                const r = M0(u => q.L2(h, u), [h, q]),
                                    t = M0(() => q.mK(n), [q, n]);
                                return Jfc("div", {
                                    className: "guWTXA",
                                    children: [x_(l, {
                                            url: h.Kxa.id,
                                            children: ({
                                                ik: u
                                            }) => x_(c, {
                                                url: h.Kxa.id,
                                                ik: u,
                                                mK: t,
                                                L2: r,
                                                GF: q.GF,
                                                Aac: q.dLa
                                            })
                                        }),
                                        n.le > 10 && h.config != null && !q.xT && x_("div", {
                                            className: "djA3nQ",
                                            children: x_(m, {})
                                        })
                                    ]
                                })
                            })),
                            exports: {
                                config: g
                            }
                        }
                    }),
                    ldc = {
                        zh: Zcc,
                        Ro: wgc,
                        Ah: Ucc
                    };
                var Vcc = __c.J_({
                        D: I_({
                            hB: S0.Vaa(1, I_({
                                Lxa: S0.Lm(1, "EmbedRef"),
                                config: S0.EXa(2, S0.ri({
                                    textContent: S0.Qz(1),
                                    backgroundColor: S0.Qz(2, /^#[0-9a-f]{6}$/)
                                })),
                                Jeb: S0.Qz(3)
                            }))
                        })
                    }),
                    $cc = __c.y_()(() => ({
                        zYb() {
                            return {
                                data: {
                                    D: {
                                        hB: void 0
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        },
                        DYb(a, b, c) {
                            return {
                                data: {
                                    D: {
                                        hB: {
                                            Lxa: {
                                                type: "embed",
                                                id: a,
                                                version: 0
                                            },
                                            config: b,
                                            Jeb: c
                                        }
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    })),
                    xgc = class {
                        static G(a) {
                            L(a, {
                                bz: O0.ref,
                                gQa: O0.ref
                            })
                        }
                        constructor() {
                            this.bz = (xgc.G(this), void 0)
                        }
                    };
                var ygc = class {
                    subscribe(a) {
                        this.Rj.add(a);
                        return () => {
                            this.Rj.delete(a)
                        }
                    }
                    dispose() {
                        this.Ei.forEach(a => a());
                        this.Ei = []
                    }
                    constructor(a, b) {
                        this.config = a;
                        this.Op = b;
                        this.Rj = new Set;
                        this.Ei = [];
                        this.K2 = (c, d, e) => {
                            this.dispose();
                            this.Ei.push(Pcc(c, e));
                            this.config.bz && this.Ei.push(Qcc(this.config.bz, e));
                            return {
                                htb: {
                                    dyb: f => {
                                        if (d == null) return new q_;
                                        this.config.bz ? .Lac(d, f.selection);
                                        return new q_
                                    },
                                    fyb: f => {
                                        this.config.bz ? .Sac(c, f.$Ya, f.textContent);
                                        return new Wbc
                                    }
                                }
                            }
                        };
                        this.M2 = () => ({
                            AKb: {
                                XCa: c => {
                                    const d = {
                                        height: c.body.scrollHeight,
                                        width: c.body.scrollWidth
                                    };
                                    this.Rj.forEach(e => e(d))
                                }
                            }
                        });
                        this.mK = c => {
                            const d = this.Op && new Zfc({
                                S6: this.Op.id,
                                zd: this.Op.zd
                            });
                            return {
                                vWa: {
                                    p0a: () => new o_({
                                        Nj: c.page ? .container ? .id,
                                        nj: c.nj,
                                        Xhb: d
                                    }),
                                    u0a: () => new p_
                                }
                            }
                        };
                        this.GF = () => {
                            this.dispose()
                        }
                    }
                };
                var zgc = v_(({
                    D: a,
                    hL: b,
                    aX: c,
                    Oh: d,
                    Ja: e
                }) => {
                    const f = M0(k => e.K2(a, d.nj, k), [d.nj, a, e]),
                        g = M0(() => e.M2(), [e]),
                        h = M0(() => e.mK(d), [e, d]);
                    return x_(c, {
                        url: a.Lxa.id,
                        children: ({
                            ik: k
                        }) => x_(b, {
                            url: a.Lxa.id,
                            ik: k,
                            mK: h,
                            K2: f,
                            M2: g,
                            GF: e.GF
                        })
                    })
                });
                var Agc = __c.i_()(({
                        wi: a
                    }) => {
                        const b = a.hL,
                            c = a.Op,
                            d = new xgc;
                        return {
                            metadata: {
                                type: void 0,
                                name: void 0
                            },
                            D: __c.h_(v_(({
                                data: {
                                    D: e
                                },
                                Ee: {
                                    aX: f
                                },
                                Oh: g,
                                gP: h
                            }) => {
                                const [k] = K0(() => new ygc(d, c));
                                Lfc(() => {
                                    h ? .(k)
                                }, [k, h]);
                                return e.hB.ref != null ? x_(zgc, {
                                    Oh: g,
                                    D: e.hB.ref,
                                    Ja: k,
                                    hL: b,
                                    aX: f
                                }) : d.gQa != null ? x_(d.gQa, {}) : null
                            })),
                            exports: {
                                configuration: d
                            }
                        }
                    }),
                    mdc = {
                        zh: $cc,
                        Ro: Agc,
                        Ah: Vcc
                    };
                var ddc = class {
                        En(a) {
                            this.loading || (this.loading = (a ? ? Promise.resolve()).then(k_.wrap(() => this.load())));
                            return this.loading
                        }
                        constructor(a, b) {
                            this.id = a;
                            this.loadModule = b
                        }
                    },
                    Ycc = class {
                        static G(a) {
                            L(a, {
                                aja: O0.ref
                            })
                        }
                        constructor() {
                            this.aja = (Ycc.G(this), void 0)
                        }
                    };
                var d0 = class {
                        static of (a, b, c) {
                            return new d0(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Qoa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Cgc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = Bgc;
                            this.Imb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    U0 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.jIb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Egc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = Dgc;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    rdc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.dnb = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var wdc = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                __c.Fgc = tdc(4);
                __c.Ggc = tdc(6);
                __c.Hgc = udc(5);
                __c.V0 = udc(0);
                var Igc = class {},
                    Ldc = class extends Igc {
                        qwa(a) {
                            return new Ldc(a(this.value))
                        }
                        KBa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    Mdc = class extends Igc {
                        qwa(a, b) {
                            return new Mdc(b(this.value))
                        }
                        KBa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var i0 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    W0 = class extends i0 {
                        $Da(a) {
                            return this === a || a.aMa(b => this.Y9(b))
                        }
                        ST() {
                            throw Error(`${this} is not iterable`);
                        }
                        qGa(a) {
                            const b = this.propTypes ? ? (this.propTypes = this.Xma());
                            if (!b) throw Error(`${this} is not navigable"`);
                            if (!b.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return b[a]
                        }
                        Xma() {
                            throw Error(`${this} is not navigable`);
                        }
                        TBa(a) {
                            a(this)
                        }
                        aMa(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes = void 0
                        }
                    },
                    X0 = class extends W0 {
                        Y9(a) {
                            return a instanceof
                            X0 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    Jgc = class extends W0 {
                        Y9(a) {
                            return a instanceof Jgc && this.ko === a.ko
                        }
                        toString() {
                            return this.ko.name
                        }
                        constructor(a) {
                            super();
                            this.ko = a
                        }
                    },
                    Kgc = class extends W0 {
                        Y9(a) {
                            return a instanceof Kgc && this.ko === a.ko && h0(this.arg, a.arg)
                        }
                        toString() {
                            return `${this.ko}<${this.arg}>`
                        }
                        constructor(a, b) {
                            super();
                            this.ko = a;
                            this.arg = b
                        }
                    },
                    Lgc = class extends Kgc {
                        ST() {
                            return this.arg
                        }
                        Xma() {
                            const a = this.arg;
                            return {
                                size: p0.number,
                                empty: p0.ad,
                                get first() {
                                    return p0.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array",
                                a)
                        }
                    },
                    Mgc = class extends Kgc {
                        ST() {
                            return this.arg
                        }
                        Xma() {
                            const a = this.arg;
                            return {
                                size: p0.number,
                                empty: p0.ad,
                                get first() {
                                    return p0.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    Ngc = class extends W0 {
                        Y9(a) {
                            return a instanceof Ngc && h0(this.key, a.key) && h0(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    Ogc = class extends W0 {
                        Y9(a) {
                            return a instanceof Ogc ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && h0(this.fields[b],
                                c)) : !1
                        }
                        Xma() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    Y0 = class extends i0 {
                        $Da(a) {
                            return this === a || this.Nh.every(b => b.$Da(a))
                        }
                        ST() {
                            return p0.union(...this.Nh.map(a => a.ST()))
                        }
                        qGa(a) {
                            return p0.union(...this.Nh.map(b => b.qGa(a)))
                        }
                        TBa(a) {
                            this.Nh.forEach(b => b.TBa(a))
                        }
                        aMa(a) {
                            return this.Nh.some(b => b.aMa(a))
                        }
                        toString() {
                            return this.Nh.length ? this.Nh.map(a => a.toString()).join(" | ") :
                                "never"
                        }
                        constructor(a) {
                            super();
                            this.Nh = a;
                            this.kind = "disjunction";
                            v(a.length !== 1)
                        }
                    },
                    Pgc = new Y0([]),
                    Qgc = new X0("string"),
                    Rgc = new X0("number"),
                    Sgc = new X0("boolean"),
                    Tgc = new X0("undefined"),
                    Ugc = new Y0([Qgc, Rgc, Sgc]),
                    Vgc = class {
                        get never() {
                            return Pgc
                        }
                        get string() {
                            return Qgc
                        }
                        get number() {
                            return Rgc
                        }
                        get ad() {
                            return Sgc
                        }
                        get undefined() {
                            return Tgc
                        }
                        get primitive() {
                            return Ugc
                        }
                        optional(a) {
                            return p0.union(a, p0.undefined)
                        }
                        array(a) {
                            return new Lgc(a)
                        }
                        set(a) {
                            return new Mgc(a)
                        }
                        yY(a) {
                            return new Y0([new Lgc(a), new Mgc(a)])
                        }
                        map(a,
                            b) {
                            return new Ngc(a, b)
                        }
                        O(a) {
                            return new Ogc({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return Pgc;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) vdc(d).TBa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return Pgc;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return h0(d, e) ? e : h0(e, d) ? d : new Y0(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => h0(d, e)) || (c.forEach(e => h0(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new Y0([...c])
                        }
                        constructor() {
                            this.optional = j0(this.optional);
                            this.array =
                                j0(this.array);
                            this.set = j0(this.set);
                            this.yY = j0(this.yY)
                        }
                    },
                    Wgc = class extends Vgc {
                        instance(a) {
                            return new Jgc(a)
                        }
                    },
                    p0 = new Wgc,
                    Xgc = class extends Vgc {
                        instance(a) {
                            return new Jgc(z(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var Ygc, Zgc, Z0 = Symbol("value"),
                    $gc = class {
                        get props() {
                            return this.Llb ? ? (this.Llb = this.Tva())
                        }
                    },
                    ahc = class {
                        get size() {
                            return this[Z0].length
                        }
                        get empty() {
                            return this[Z0].length === 0
                        }
                        get first() {
                            return this[Z0][0]
                        }
                        constructor(a) {
                            this[Z0] = a
                        }
                    };
                Ygc = Symbol.iterator;
                var bhc = class extends $gc {
                        Tva() {
                            return new ahc(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[Ygc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,l0).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    chc = class {
                        get size() {
                            return this[Z0].size
                        }
                        get empty() {
                            return this[Z0].size === 0
                        }
                        get first() {
                            return this[Z0][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[Z0] = a
                        }
                    };
                Zgc = Symbol.iterator;
                var dhc = class extends $gc {
                        Tva() {
                            return new chc(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[Zgc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,l0).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    ehc = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${l0(a)}]: ${l0(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    fhc = class extends $gc {
                        Tva() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${l0(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    ghc = class {
                        toString() {
                            return `[instance ${this.ko.name}]`
                        }
                        constructor(a, b) {
                            this.ko = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    hhc = class {
                        array(a) {
                            return new bhc(a)
                        }
                        set(a) {
                            return new dhc(a)
                        }
                        map(a) {
                            return new ehc(new Map(a))
                        }
                        O(a) {
                            return new fhc({ ...a
                            })
                        }
                    },
                    ihc = class extends hhc {
                        instance(a, b) {
                            return new ghc(a, b)
                        }
                        stringify(a) {
                            return l0(a)
                        }
                        constructor() {
                            super();
                            this.Zg = zdc
                        }
                    },
                    t0 = new ihc,
                    jhc = class extends hhc {
                        instance(a, b) {
                            a = z(this.classes[a]);
                            return new ghc(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var Jdc = {
                        [0]: e0(p0.number, p0.number, a => -a),
                        [1]: e0(p0.string, p0.number, a => a.length),
                        [2]: e0(p0.ad, p0.ad, a => !a),
                        [3]: f0(p0.number, p0.number, p0.number, (a, b) => a + b),
                        [4]: f0(p0.number, p0.number, p0.number, (a, b) => a - b),
                        [5]: f0(p0.number, p0.number, p0.number, (a, b) => a * b),
                        [6]: f0(p0.number, p0.number, p0.number, (a, b) => a / b),
                        [7]: f0(p0.number, p0.number, p0.number, (a, b) => a % b),
                        [8]: f0(p0.string, p0.string, p0.string, (a, b) => a + b),
                        [9]: f0(p0.number, p0.number, p0.ad, (a, b) => a === b),
                        [10]: f0(p0.number, p0.number, p0.ad, (a, b) => a !== b),
                        [11]: f0(p0.number,
                            p0.number, p0.ad, (a, b) => a < b),
                        [12]: f0(p0.number, p0.number, p0.ad, (a, b) => a <= b),
                        [13]: f0(p0.number, p0.number, p0.ad, (a, b) => a > b),
                        [14]: f0(p0.number, p0.number, p0.ad, (a, b) => a >= b),
                        [15]: f0(p0.ad, p0.ad, p0.ad, (a, b) => a && b),
                        [16]: f0(p0.ad, p0.ad, p0.ad, (a, b) => a || b)
                    },
                    Pdc = {
                        [2]: new U0(p0.number, p0.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new U0(p0.number, p0.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new U0(p0.number, p0.number, a => Math.max(...a)),
                        [5]: new U0(p0.number, p0.number, a => Math.min(...a)),
                        [6]: new U0(p0.string, p0.string, a =>
                            a.join(""))
                    },
                    khc = a => t0.array(a),
                    lhc = a => t0.set(a),
                    Ndc = {
                        [0]: a => new U0(a, p0.array(a), khc),
                        [1]: a => new U0(a, p0.set(a), lhc)
                    },
                    Dgc = a => t0.map(a),
                    Adc = {
                        [0]: (a, b) => new Egc(a, b, p0.map(a, b))
                    },
                    Bgc = a => t0.O(a),
                    Sdc = {
                        [0]: a => new Cgc(a, p0.O(a))
                    },
                    mhc = (a, b) => t0.array(b.map(c => c())),
                    nhc = (a, b) => t0.array(b.flatMap(c => c().items)),
                    ohc = (a, b) => t0.array(a.filter((c, d) => b[d]()).map(c => c())),
                    phc = (a, b) => b.some(c => c()),
                    qhc = (a, b) => b.every(c => c()),
                    rhc = (a, b) => a.find((c, d) => b[d]()) ? .(),
                    Cdc = {
                        [0]: (a, b) => b.map(c => g0(a, c, p0.array(c), mhc)),
                        [1]: (a, b) => b.ST().map(c => g0(a, p0.array(c), p0.array(c), nhc)),
                        [2]: a => g0(a, p0.ad, p0.array(a), ohc),
                        [3]: a => g0(a, p0.ad, p0.ad, phc),
                        [4]: a => g0(a, p0.ad, p0.ad, qhc),
                        [5]: a => g0(a, p0.ad, p0.optional(a), rhc)
                    };
                var n0 = class {
                    define(a, b) {
                        return new n0(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: "${a}"`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var thc = (a, b, c) => {
                        const d = m0.create(b.aM),
                            e = new shc(a);
                        return {
                            compile: f => {
                                const g = Gdc(e, d, f).as(c);
                                return h => {
                                    h = new n0(new Map(b.decode(h).aKa));
                                    return g(h)
                                }
                            }
                        }
                    },
                    m0 = class {
                        static create(a) {
                            return new m0(new n0(new Map(a)), new n0(new Map))
                        }
                        constructor(a = new n0(new Map), b = new n0(new Map)) {
                            this.vars = a;
                            this.A8 = b
                        }
                    },
                    shc = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    r0 = class {
                        static of (a, b) {
                            return new r0(a, b)
                        }
                        as(a) {
                            if (!h0(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new r0(this.type, b => {
                                const c = w0(a(b), {
                                    equals: t0.Zg
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type, this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    cec = class {
                        as(a, b) {
                            const c = this.Qoa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!h0(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!h0(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Qoa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var Rec = class {
                        add(a) {
                            a = a(uhc, this.types);
                            return new Rec({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        evaluate(a) {
                            const b = this.types;
                            switch (a.kind) {
                                case 0:
                                    switch (a.name) {
                                        case "string":
                                            return b.string;
                                        case "number":
                                            return b.number;
                                        case "boolean":
                                            return b.ad;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new A(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.OSa));
                                        case "set":
                                            return b.set(this.evaluate(a.OSa));
                                        default:
                                            throw new A(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.OSa);
                                            a = this.evaluate(a.HWb);
                                            if (!h0(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new A(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.O(kd(a.args, c => this.evaluate(c)));
                                default:
                                    throw new A(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new Xgc(this.classes);
                            this.values = new jhc(this.classes)
                        }
                    },
                    uhc = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.QEb = new d0([p0.O(b)],
                                p0.instance(this), d => t0.instance(this, c(d.fields)))
                        }
                    };
                var vhc;
                vhc = Symbol.iterator;
                var dec = class {
                    static G(a) {
                        L(a, {
                            R$: w0
                        })
                    }
                    get R$() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Gg(b), b));
                        return a
                    }
                    qv(a) {
                        return z(this.R$.get(a))
                    }
                    I0(a) {
                        return a != null ? this.Gg(a) : void 0
                    }
                    get size() {
                        return this.base.size
                    }
                    get(a) {
                        a = this.base.get(a);
                        return this.I0(a)
                    }
                    has(a) {
                        return this.base.has(a)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Gg(b), c))
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Gg(b), c))
                    }
                    set(a, b) {
                        return this.Gg(this.base.set(a, this.oJ(b)))
                    }
                    every(a) {
                        return this.base.every((b, c) => a(this.Gg(b),
                            c))
                    }
                    delete(a) {
                        this.base.delete(a)
                    }
                    entries() {
                        return fec(this.base.entries(), ([a, b]) => [a, this.Gg(b)])
                    }
                    keys() {
                        return this.base.keys()
                    }
                    values() {
                        return fec(this.base.values(), this.Gg)
                    }[vhc]() {
                        return this.yi()[Symbol.iterator]()
                    }
                    yi() {
                        return Jd(this.base.yi(), this.Gg)
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.oJ = b;
                        this.Gg = c;
                        dec.G(this)
                    }
                };
                var whc;
                whc = Symbol.iterator;
                var gec = class {
                    static G(a) {
                        L(a, {
                            R$: w0
                        })
                    }
                    get R$() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Gg(b), b));
                        return a
                    }
                    qv(a) {
                        return z(this.R$.get(a))
                    }
                    I0(a) {
                        return a != null ? this.Gg(a) : void 0
                    }
                    get empty() {
                        return this.base.empty
                    }
                    count() {
                        return this.base.count()
                    }
                    toArray() {
                        return this.base.toArray().map(this.Gg)
                    }
                    yi() {
                        return Jd(this.base.yi(), this.Gg)
                    }[whc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    first(a) {
                        return this.I0(this.base.first(a && (b => a(this.Gg(b)))))
                    }
                    last(a) {
                        return this.I0(this.base.last(a && (b => a(this.Gg(b)))))
                    }
                    next(a,
                        b) {
                        return this.I0(this.base.next(this.qv(a), b && (c => b(this.Gg(c)))))
                    }
                    previous(a, b) {
                        return this.I0(this.base.previous(this.qv(a), b && (c => b(this.Gg(c)))))
                    }
                    mf(a, b) {
                        return this.base.mf(this.qv(a), this.qv(b))
                    }
                    Sr(a) {
                        return this.base.Sr(this.qv(a))
                    }
                    has(a) {
                        return this.base.has(this.qv(a))
                    }
                    set(a, b) {
                        return this.Gg(this.base.set(a, this.oJ(b)))
                    }
                    replace(a, b) {
                        return this.Gg(this.base.replace(this.qv(a), this.oJ(b)))
                    }
                    append(a) {
                        return this.Gg(this.base.append(this.oJ(a)))
                    }
                    prepend(a) {
                        return this.Gg(this.base.prepend(this.oJ(a)))
                    }
                    TI(a,
                        b) {
                        return this.Gg(this.base.TI(a && this.qv(a), this.oJ(b)))
                    }
                    insertBefore(a, b) {
                        return this.Gg(this.base.insertBefore(a && this.qv(a), this.oJ(b)))
                    }
                    hF(a, b) {
                        return this.base.hF(a && this.qv(a), b.map(this.oJ)).map(this.Gg)
                    }
                    delete(a) {
                        this.base.delete(this.qv(a))
                    }
                    uE(a) {
                        this.base.uE(a && (b => a(this.Gg(b))))
                    }
                    moveBefore(a, b) {
                        this.base.moveBefore(a && this.qv(a), this.qv(b))
                    }
                    pq(a) {
                        return new __c.KK(this, a)
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Gg(b), c))
                    }
                    flatMap(a) {
                        return this.base.flatMap((b, c) => a(this.Gg(b), c))
                    }
                    filter(a) {
                        return this.base.filter((b,
                            c) => a(this.Gg(b), c)).map(this.Gg)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Gg(b), c))
                    }
                    reduce(a, b) {
                        return this.base.reduce((c, d) => a(c, this.Gg(d)), b)
                    }
                    some(a) {
                        return this.base.some(b => a(this.Gg(b)))
                    }
                    every(a) {
                        return this.base.every(b => a(this.Gg(b)))
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.oJ = b;
                        this.Gg = c;
                        gec.G(this)
                    }
                };
                var $0 = class {
                        LM(a) {
                            return new xhc(this, a)
                        }
                        p8(a) {
                            return new yhc(this, a)
                        }
                        RS(a) {
                            return new zhc(this, a)
                        }
                        toString() {
                            return this.s ? ? (this.s = this.S$())
                        }
                    },
                    vec = class extends $0 {
                        LM(a) {
                            return new Ahc(a)
                        }
                        p8() {
                            throw Error();
                        }
                        RS() {
                            throw Error();
                        }
                        S$() {
                            return "(global)"
                        }
                    },
                    Ahc = class extends $0 {
                        S$() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    xhc = class extends $0 {
                        S$() {
                            return `${this.parent}.${this.name}`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.name = b
                        }
                    },
                    yhc = class extends $0 {
                        S$() {
                            return `${this.parent}["${this.key}"]`
                        }
                        constructor(a,
                            b) {
                            super();
                            this.parent = a;
                            this.key = b
                        }
                    },
                    zhc = class extends $0 {
                        S$() {
                            return `${this.parent}[${this.index}]`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.index = b
                        }
                    },
                    uec = class {
                        error(a, b) {
                            return Error(`widget '${this.$Sb}': schema error on key '${a}': ${b}`)
                        }
                        constructor(a) {
                            this.$Sb = a
                        }
                    },
                    yec = {
                        string: "string",
                        boolean: "boolean",
                        double: "number",
                        int32: "number",
                        list: "object",
                        dict: "object",
                        ref: "object",
                        fill: "object",
                        stroke: "object",
                        text2: "object"
                    },
                    oec = new Set(["string", "boolean", "int32"]),
                    zec = {
                        font: "font",
                        media: "media",
                        video: "video",
                        audio: "audio",
                        embed: "embed",
                        scene: "scene",
                        blueprint: "blueprint"
                    };
                var Bhc;
                Bhc = Symbol.iterator;
                var Chc = class {
                    get size() {
                        return this.cells.size
                    }
                    get(a) {
                        return this.cells.get(a) ? .get()
                    }
                    has(a) {
                        return this.cells.has(a)
                    }
                    forEach(a) {
                        for (const [b, c] of this.cells.entries()) a(c.get(), b)
                    }
                    map(a) {
                        const b = [];
                        for (const [c, d] of this.cells.entries()) b.push(a(d.get(), c));
                        return b
                    }
                    every(a) {
                        for (const [b, c] of this.cells.entries())
                            if (!a(c.get(), b)) return !1;
                        return !0
                    }
                    entries() {
                        return this.yi().entries()
                    }
                    keys() {
                        return this.cells.keys()
                    }* values() {
                        for (const a of this.cells.values()) yield a.get()
                    }
                    yi() {
                        const a = new Map;
                        for (const [b, c] of this.cells.entries()) a.set(b, c.get());
                        return a
                    }[Bhc]() {
                        return this.yi()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = new Map(a)
                    }
                };
                var Dhc;
                Dhc = Symbol.iterator;
                var Aec = class {
                    get $c() {
                        return this.tNb.get()
                    }
                    get size() {
                        return this.$c.size
                    }
                    get(a) {
                        return this.$c.get(a)
                    }
                    has(a) {
                        return this.$c.has(a)
                    }
                    forEach(a) {
                        this.$c.forEach(a)
                    }
                    map(a) {
                        return this.$c.map(a)
                    }
                    every(a) {
                        return this.$c.every(a)
                    }
                    entries() {
                        return this.$c.entries()
                    }
                    keys() {
                        return this.$c.keys()
                    }
                    values() {
                        return this.$c.values()
                    }
                    yi() {
                        return this.$c.yi()
                    }[Dhc]() {
                        return this.$c[Symbol.iterator]()
                    }
                    set(a, b) {
                        return this.$c.set(a, b)
                    }
                    delete(a) {
                        return this.$c.delete(a)
                    }
                    constructor(a) {
                        this.tNb = a
                    }
                };
                var Ehc;
                Ehc = Symbol.iterator;
                var Fhc = class {
                    get size() {
                        return this.$c.size
                    }
                    get(a) {
                        return this.$c.get(a)
                    }
                    has(a) {
                        return this.$c.has(a)
                    }
                    forEach(a) {
                        this.$c.forEach(a)
                    }
                    map(a) {
                        return this.$c.map(a)
                    }
                    every(a) {
                        return this.$c.every(a)
                    }
                    entries() {
                        return this.$c.entries()
                    }
                    keys() {
                        return this.$c.keys()
                    }
                    values() {
                        return this.$c.values()
                    }
                    yi() {
                        return this.$c.yi()
                    }[Ehc]() {
                        return this.$c[Symbol.iterator]()
                    }
                    set() {
                        return this.ly()
                    }
                    delete() {
                        return this.ly()
                    }
                    ly() {
                        throw Error("dict not modifiable");
                    }
                    constructor(a) {
                        this.$c = a
                    }
                };
                var Ghc, Hhc = class {
                    get value() {
                        return this.box.get()
                    }
                    constructor(a, b) {
                        this.id = a;
                        this.box = b
                    }
                };
                Ghc = Symbol.iterator;
                var Tec = class {
                    static G(a) {
                        L(a, {
                            Tr: w0,
                            KS: w0,
                            VT: w0
                        })
                    }
                    get Tr() {
                        const a = new Map;
                        this.cells.forEach((b, c) => a.set(b.value, c));
                        return a
                    }
                    wl(a) {
                        return z(this.Tr.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.cells.length
                    }
                    count() {
                        return this.cells.length
                    }
                    toArray() {
                        return this.cells.map(a => a.value)
                    }
                    yi() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get KS() {
                        return this.cells[0] ? .value
                    }
                    get VT() {
                        return this.cells[this.cells.length - 1] ? .value
                    }
                    first(a) {
                        return a ? this.cells.find(b => a(b.value)) ? .value : this.KS
                    }
                    last(a) {
                        if (!a) return this.VT;
                        const b = this.cells;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.value)) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.cells;
                        for (a = this.wl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    previous(a, b) {
                        const c = this.cells;
                        for (a = this.wl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    mf(a, b) {
                        a = this.Tr.get(a);
                        b = this.Tr.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Sr(a) {
                        return this.cells[this.wl(a)].id
                    }
                    has(a) {
                        return this.Tr.has(a)
                    }
                    pq(a) {
                        return new __c.KK(this,
                            a)
                    }
                    map(a) {
                        return this.cells.map(b => a(b.value, b.id))
                    }
                    flatMap(a) {
                        return this.cells.flatMap(b => a(b.value, b.id))
                    }
                    filter(a) {
                        return this.cells.filter(b => a(b.value, b.id)).map(b => b.value)
                    }
                    forEach(a) {
                        this.cells.forEach(b => a(b.value, b.id))
                    }
                    reduce(a, b) {
                        return this.cells.reduce((c, d) => a(c, d.value, d.id), b)
                    }
                    some(a) {
                        return this.cells.some(b => a(b.value, b.id))
                    }
                    every(a) {
                        return this.cells.every(b => a(b.value, b.id))
                    }[Ghc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = (Tec.G(this), void 0);
                        this.cells =
                            a.map((b, c) => new Hhc(String(c), b))
                    }
                };
                var lfc, Iec, Cec, Ihc, Jhc;
                __c.a1 = class {
                    map(a, b) {
                        const c = this.get,
                            d = this.set;
                        return new __c.a1(() => a(c()), e => d(b(e)))
                    }
                    project({
                        get: a,
                        set: b
                    }) {
                        const c = this.get,
                            d = this.set;
                        return new __c.a1(() => a(c()), e => d(b(c(), e)))
                    }
                    constructor(a, b) {
                        this.get = a;
                        this.set = b
                    }
                };
                lfc = class {
                    read(a) {
                        return x0(a) ? a() : a
                    }
                    computed(a) {
                        const b = w0(a);
                        return () => b.get()
                    }
                    map(a, b) {
                        return x0(a) ? () => b(a()) : b(a)
                    }
                    box(a) {
                        return new Hfc(x0(a) ? new Gfc(w0(a)) : new Ffc(a))
                    }
                    list(a) {
                        const b = this.map(a, c => new __c.Nub(new Tec(c.map(d => x0(d) ? w0(d) : Dec(d)))));
                        return x0(b) ? __c.Og(() => b()) : b
                    }
                    $c(a) {
                        const b = this.map(a, c => {
                            c = new Map(Object.entries(c).map(([d, e]) => {
                                e = x0(e) ? w0(e) : Dec(e);
                                return [d, e]
                            }));
                            return new Fhc(new Chc(c))
                        });
                        return x0(b) ? Bec(() => b()) : b
                    }
                    constructor() {
                        this.classes = Qec()
                    }
                };
                Iec = a => {
                    const b = a.ko,
                        c = a.Nd,
                        d = c.U,
                        e = c.attributes;
                    Eec(a.args, d, e);
                    return {
                        create: function(f, g) {
                            const h = {};
                            var k;
                            const l = g ? .U;
                            g = g ? .attributes;
                            if (l)
                                for (const [m, n] of Object.entries(l)) v(m in d, "unknown override: '{}'", m), x0(n) ? (k || (k = {}))[m] = n : h[m] = Ihc(n);
                            if (g)
                                for (const [m, n] of Object.entries(g)) v(m in e, "unknown override: '{}'", m), h[m] = n instanceof __c.a1 ? n : x0(n) ? {
                                    enumerable: !0,
                                    get: n,
                                    set: Cec
                                } : Jhc(n);
                            if (k) return Fec(k, Hec(m => {
                                const n = b(f);
                                Object.defineProperties(n, { ...h,
                                    ...kd(m, Ihc)
                                });
                                return n
                            }));
                            k = b(f);
                            Object.defineProperties(k, h);
                            return k
                        }
                    }
                };
                Cec = () => {};
                Ihc = a => ({
                    enumerable: !0,
                    writable: !1,
                    value: a
                });
                Jhc = a => ({
                    enumerable: !0,
                    get: () => a,
                    set: Cec
                });
                var y0 = {
                    top: void 0,
                    left: void 0,
                    width: void 0,
                    height: void 0,
                    rotation: void 0,
                    locked: void 0,
                    rh: void 0
                };
                var b1 = new Map,
                    c1 = [],
                    A0 = Object.freeze({
                        Hm: void 0,
                        image: void 0,
                        video: void 0,
                        Za: void 0,
                        color: void 0,
                        Ra: 0,
                        locked: !0,
                        Vg: !0,
                        Rl: void 0,
                        cd: void 0,
                        K: void 0,
                        transition: void 0,
                        flipX: !1,
                        flipY: !1
                    }),
                    Lec = Object.freeze({
                        fill: A0,
                        stroke: void 0,
                        V: 0
                    }),
                    Kec = Object.freeze({
                        weight: 0,
                        color: "#000000",
                        fill: A0,
                        Vc: c1,
                        Ye: !1
                    }),
                    d1 = Object.freeze({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        rotation: 0,
                        Ra: 0,
                        Ki: void 0,
                        ga: void 0,
                        K: void 0,
                        transition: void 0,
                        oa: c1,
                        cc: c1,
                        animation: void 0,
                        Xf: void 0,
                        link: void 0,
                        locked: !0,
                        rh: void 0,
                        Vg: !0,
                        Rl: void 0,
                        Va: void 0,
                        yu: void 0,
                        Of: c1,
                        XF: b1,
                        mG: b1,
                        anchor: void 0,
                        uh: b1
                    }),
                    B0 = Object.freeze({ ...d1,
                        type: "rect",
                        fill: A0,
                        stroke: void 0,
                        V: c1
                    }),
                    C0 = Object.freeze({ ...d1,
                        type: "shape",
                        slice: void 0,
                        kj: void 0,
                        tb: c1,
                        resizeMode: void 0
                    }),
                    Mec = Object.freeze({ ...d1,
                        type: "text",
                        text: Object.freeze({
                            stream: __c.ah.oE("\n"),
                            Pb: b1
                        }),
                        La: Object.freeze({
                            Wa: []
                        }),
                        Ze: void 0,
                        placeholder: void 0,
                        pg: 1,
                        writingMode: void 0,
                        I: void 0,
                        N: void 0,
                        bp: !1,
                        fB: void 0,
                        Uh: void 0,
                        cd: void 0
                    }),
                    Nec = Object.freeze({ ...d1,
                        type: "embed"
                    }),
                    Oec = Object.freeze({ ...d1,
                        type: "grid",
                        cells: b1,
                        layout: Object.freeze({
                            template: c1,
                            jB: c1,
                            Bl: c1,
                            Ku: 0,
                            Hv: 0
                        })
                    }),
                    Pec = Object.freeze({
                        fill: A0,
                        stroke: void 0,
                        V: c1
                    });
                var jfc = class {
                        F6(a, b) {
                            const c = a.uc;
                            x(c.type !== "body", "Unexpected body context.");
                            switch (c.type) {
                                case "fixed-page":
                                    return {
                                        page: this.jj.J_a(c),
                                        P: new e1(a),
                                        nj: a.D.id,
                                        le: b
                                    };
                                case "concatenated-fixed-page":
                                    return {
                                        page: this.jj.y_a(c),
                                        P: new e1(a),
                                        nj: a.D.id,
                                        le: b
                                    };
                                case "controlled-page":
                                    return {
                                        page: this.jj.A_a(c),
                                        P: new e1(a),
                                        nj: a.D.id,
                                        le: b
                                    };
                                case "responsive-page":
                                    return {
                                        page: this.jj.a0a(c),
                                        P: new e1(a),
                                        nj: a.D.id,
                                        le: b
                                    };
                                default:
                                    throw new A(c);
                            }
                        }
                        constructor(a, b) {
                            this.bqa = a;
                            v(b.hg === "fixed", "Responsive documents are not supported in widget rendering.");
                            this.Ca = __c.rh(b);
                            this.jj = new Khc(this.bqa, this.Ca)
                        }
                    },
                    e1 = class {
                        get width() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.wf ? .width || 0;
                                case "controlled-page":
                                    return 0;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.I;
                                default:
                                    throw new A(this.container);
                            }
                        }
                        get height() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.wf ? .height || 0;
                                case "controlled-page":
                                    return 0;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.N;
                                default:
                                    throw new A(this.container);
                            }
                        }
                        constructor(a) {
                            this.container = a
                        }
                    },
                    f1 = class {
                        getIndex() {
                            return this.JI(this.page)
                        }
                        get id() {
                            return this.page.D.id
                        }
                        get title() {
                            return this.page.D.title
                        }
                        get anchor() {
                            return this.page.D.anchor
                        }
                        get r2a() {
                            return this.page.D.xf
                        }
                        constructor(a, b) {
                            this.page = a;
                            this.JI = b
                        }
                    },
                    Lhc = class extends f1 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "fixed"
                        }
                    },
                    Mhc = class extends f1 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "concatenated-fixed"
                        }
                    },
                    Nhc = class extends f1 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "controlled"
                        }
                    },
                    Ohc = class extends f1 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "responsive"
                        }
                    },
                    Phc = class {
                        get id() {
                            return this.bqa ? .id
                        }
                        get extension() {
                            return this.bqa ? .extension
                        }
                        get language() {
                            return this.Ca.D.language
                        }
                        constructor(a, b) {
                            this.bqa = a;
                            this.Ca = b
                        }
                    },
                    Khc = class extends Phc {
                        static G(a) {
                            L(a, {
                                ba: w0({
                                    equals: Ofc.shallow
                                }),
                                f6a: w0({
                                    equals: Ofc.shallow
                                })
                            })
                        }
                        get ba() {
                            return this.Ca.D.ba.map(a =>
                                this.lxb(this.Ca.xe(a)))
                        }
                        get f6a() {
                            return this.Ca.D.ba.toArray()
                        }
                        constructor(a, b) {
                            super(a, b);
                            this.mo = a;
                            this.Ca = b;
                            this.type = (Khc.G(this), "fixed");
                            this.J_a = J0(c => new Lhc(c, this.JI, this));
                            this.y_a = J0(c => new Mhc(c, this.JI, this));
                            this.A_a = J0(c => new Nhc(c, this.JI, this));
                            this.a0a = J0(c => new Ohc(c, this.JI, this));
                            this.lxb = J0(c => {
                                switch (c.type) {
                                    case "fixed-page":
                                        return this.J_a(c);
                                    case "concatenated-fixed-page":
                                        return this.y_a(c);
                                    case "controlled-page":
                                        return this.A_a(c);
                                    case "responsive-page":
                                        return this.a0a(c);
                                    default:
                                        throw new A(c);
                                }
                            });
                            this.JI = J0(c => {
                                c = this.Ca.D.ba.has(c.D) ? c.D : void 0;
                                return c != null ? this.f6a.indexOf(c) : -1
                            })
                        }
                    };
                var Qhc = class {
                    constructor(a) {
                        this.hKa = a;
                        this.aWa = new Map
                    }
                };
                var Rhc = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    yi() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        D0()
                    },
                    previous() {
                        D0()
                    },
                    mf() {
                        D0()
                    },
                    Sr() {
                        D0()
                    },
                    has() {
                        return !1
                    },
                    pq() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var gfc = class {
                    add(a, b) {
                        let c = this.store.get(a);
                        c || (c = O0.set(void 0, {
                            deep: !1
                        }), this.store.set(a, c));
                        c.add(b)
                    }
                    get(a) {
                        return this.store.get(a)
                    }
                    remove(a, b) {
                        const c = this.store.get(a);
                        c && (c.delete(b), c.size === 0 && this.store.delete(a))
                    }
                    constructor() {
                        this.store = new __c.GA
                    }
                };
                var Xec = class {
                    Ec(a) {
                        let b = this.store.get(a);
                        b == null && (b = this.Xqb(), this.store.set(a, b));
                        return b
                    }
                    constructor(a) {
                        this.Xqb = a;
                        this.store = new WeakMap
                    }
                };
                var edc = new Set,
                    fdc = {
                        Vy: () => ({
                            Ka: Rhc
                        })
                    },
                    kfc = class {
                        static G(a) {
                            L(a, {
                                jV: O0.shallow
                            })
                        }
                        d8(a) {
                            return this.jV.get(a) ? .D
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.Ca = a;
                            this.hKa = b;
                            this.y3 = c;
                            this.zya = d;
                            this.J = e;
                            this.qta = f;
                            this.Ee = g;
                            this.stb = h;
                            this.jV = (kfc.G(this), new Map)
                        }
                    },
                    dfc = (a, b, c, d) => ({ ...a,
                        aX: e => x_(a.aX, { ...e,
                            kob: d || !1
                        }),
                        jL: e => x_(a.jL, { ...e,
                            le: c,
                            model: b
                        })
                    }),
                    efc = (a, b) => ({ ...a,
                        fk: c => x_(a.fk, { ...c,
                            scale: b || 1
                        })
                    });
                var Shc = class {
                    static G(a) {
                        L(a, {
                            ica: O0.shallow
                        })
                    }
                    constructor(a) {
                        this.XVa = a;
                        this.ica = (Shc.G(this), new Map)
                    }
                };
                var Thc = class extends Kfc {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            yJb: c,
                            coa: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.Blb;
                            return f
                        }, {}));
                        return x_(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.coa && tfc(this)
                    }
                    componentDidUpdate() {
                        this.props.coa && tfc(this)
                    }
                    componentWillUnmount() {
                        this.AQ && (this.AQ(), this.AQ = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.cva = this.AQ = null;
                        this.Blb = b => {
                            this.cva = b.nativeEvent
                        };
                        this.vRa = b => {
                            const c = this.props.coa,
                                d = this.cva === b;
                            c && !d &&
                                c(b);
                            this.cva = null
                        }
                    }
                };
                var wfc = a => x_(Thc, {
                    yJb: ["onMouseDown", "onTouchStart"],
                    Psb: ["mousedown", "touchstart"],
                    coa: a.Faa,
                    children: a.children
                });
                var ufc = class {
                        static G(a) {
                            L(a, {
                                ik: O0.ref
                            })
                        }
                        constructor() {
                            this.ik = (ufc.G(this), !0)
                        }
                    },
                    vfc = class {
                        static G(a) {
                            L(a, {
                                onDoubleClick: P0.bound,
                                onTouchEnd: P0.bound,
                                reset: P0.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.ik = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.$V ? (window.clearTimeout(this.$V), this.$V = void 0, this.store.ik = !1) : this.$V = window.setTimeout(k_.wrap(() => this.$V = void 0), 300))
                        }
                        reset() {
                            this.store.ik = !0
                        }
                        oY() {
                            this.$V && window.clearTimeout(this.$V)
                        }
                        constructor(a) {
                            this.store = a;
                            this.$V = (vfc.G(this), void 0)
                        }
                    };
                __c.C_a = {
                    Tzb: function({
                        document: a,
                        jj: b,
                        Op: c,
                        gA: d,
                        $D: e,
                        AH: f,
                        jg: g,
                        dja: h,
                        wa: k,
                        Hg: l,
                        jL: m,
                        Te: n,
                        og: p,
                        le: q,
                        cTb: r,
                        Vab: t,
                        v$a: u,
                        rka: w,
                        KOa: y
                    }) {
                        const B = g.wla,
                            D = g.Ch;
                        var C = g.J;
                        const E = g.mg,
                            J = g.ka,
                            M = g.AYa,
                            O = g.ab;
                        var R = h.Tu;
                        const {
                            yAa: Q = !1,
                            KAa: S = !1,
                            FAa: W = !1
                        } = r ? ? {}, {
                            On: ca,
                            zya: ba
                        } = {
                            On: Uec(),
                            zya: thc
                        };
                        r = new Shc(wec(ca));
                        const {
                            sPa: fa,
                            rta: la,
                            Jya: ka,
                            y3: na
                        } = {
                            sPa: r,
                            rta: r,
                            Jya: ba,
                            y3: ca
                        };
                        r = Wcc({
                            sPa: fa,
                            yAa: Q,
                            KAa: S,
                            FAa: W
                        });
                        var Aa = new Qhc(la);
                        const {
                            rPa: da,
                            Zhb: sa
                        } = {
                            rPa: Aa,
                            Zhb: Aa
                        };
                        Aa = cdc({
                            tPa: r,
                            rPa: da
                        });
                        C = C.ag("widget");
                        R = xfc({
                            Tu: R,
                            ab: O
                        });
                        const ma = Bfc();
                        m = m || Dfc();
                        n = Cfc({
                            Te: n
                        });
                        p = yfc({
                            Hj: p
                        });
                        const ya = Afc({
                            wa: k,
                            rka: w
                        });
                        w = Efc({
                            wa: k,
                            rka: w
                        });
                        const {
                            Lea: La,
                            qy: Sa,
                            qta: Ja,
                            expr: Ga
                        } = mfc({
                            J: C,
                            rta: la,
                            aTb: {
                                aX: R,
                                ekb: ma,
                                jL: m,
                                fk: n,
                                bn: p,
                                ffa: ya,
                                xua: w
                            },
                            YSb: {
                                fk: qfc()
                            },
                            Jya: ka,
                            y3: na,
                            mo: b,
                            Ca: a,
                            Vab: t,
                            v$a: u
                        });
                        a = ucc({
                            le: q,
                            Tu: h.Tu,
                            Jw: h.Jw,
                            ab: g.ab,
                            J: g.J.ag("codelet"),
                            LOa: y
                        });
                        const {
                            jV: kb,
                            b_a: Tb
                        } = ndc({
                            tPa: r,
                            Lea: La,
                            mg: E,
                            $L: {
                                J: C,
                                ka: J,
                                Hg: q === 30 ? l : void 0,
                                ab: O,
                                expr: Ga
                            },
                            wi: {
                                gA: d,
                                AH: f,
                                $D: e,
                                AYa: M,
                                wa: k,
                                Op: c,
                                hL: a,
                                wla: B,
                                Ch: D
                            }
                        });
                        return {
                            rta: la,
                            qy: Sa,
                            ihc: kb,
                            ghc: Aa,
                            Zhb: sa,
                            qta: Ja,
                            b_a: Tb
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        },

        /***/
        196751:
            (_, __, r) => r(258551),

        /***/
        149342:
            (_, __, r) => r(258551),

        /***/
        761582:
            (_, __, r) => r(258551),

        /***/
        751088:
            (_, __, r) => r(258551)

    }
])
//# sourceMappingURL=sourcemaps/b72f33c4e67c4b75.js.map