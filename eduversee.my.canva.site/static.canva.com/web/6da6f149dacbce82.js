(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [96282], {

        /***/
        258551: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(333838);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var AY;
                var VZ;
                var O = __c.O;
                var Ya = __c.Ya;
                var FF = __c.FF;
                var G = __c.G;
                var Y = __c.Y;
                var V = __c.V;
                var H = __c.H;
                var ca = __c.ca;
                var ZX = __c.ZX;
                var jh = __c.jh;
                var mf = __c.mf;
                var Ee = __c.Ee;
                var y = __c.y;
                var v = __c.v;
                var x = __c.x;
                var w = __c.w;
                var Ka = __c.Ka;
                var q2b, s2b, r2b, u2b, bY, w2b, y2b, x2b, fY, B2b, F2b, I2b, M2b, D2b, kY, lY, T2b, Z2b, jY, a3b, mY, e3b, f3b, j3b, rY, sY, k3b, tY, uY, vY, l3b, wY, xY, yY, m3b, zY, n3b, p3b, q3b, r3b, s3b, t3b, v3b, x3b, CY, DY, u3b, w3b, y3b, z3b, A3b, B3b, FY, C3b, D3b, E3b, F3b, L3b, S3b, c4b, d4b, e4b, f4b, XY, YY, ZY, h4b, i4b, j4b, $Y, m4b, k4b, bZ, dZ, cZ, n4b, eZ, p4b, r4b, s4b, u4b, hZ, v4b, H4b, I4b, J4b, K4b, mZ, w4b, iZ, B4b, E4b, G4b, kZ, D4b, L4b, t4b, N4b, O4b, P4b, M4b, S4b, T4b, V4b, oZ, i5b, f5b, d5b, qZ, W4b, Z4b, Y4b, e5b, X4b, j5b, c5b, a5b, $4b, pZ, n5b, sZ, o5b, p5b, q5b, s5b, r5b, u5b, vZ, B5b, E5b, D5b, M3b, AZ, G5b,
                    W3b, X3b, Y3b, I5b, J5b, K5b, BZ, L5b, O5b, Q5b, DZ, EZ, FZ, GZ, G3b, R5b, V5b, X5b, W5b, Z5b, Y5b, $5b, a6b, b6b, f6b, g6b, i6b, j6b, k6b, l6b, m6b;
                q2b = function(a, b) {
                    b = a.Dh.get(__c.dv(b));
                    return b != null ? a.fQ.get(b) : void 0
                };
                __c.$X = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.aY = function() {
                    return a => a
                };
                s2b = function(a, b) {
                    b = r2b(b);
                    return a.origin !== b.Xva ? {
                        valid: !1,
                        error: {
                            message: "Message origin does not match iframe src origin",
                            extra: new Map([
                                ["msg.origin", a.origin],
                                ["iframe.origin", b.Xva]
                            ])
                        }
                    } : {
                        valid: !0,
                        pca: b.pca
                    }
                };
                r2b = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return t2b;
                    a = (new URL(a)).origin;
                    return a === "null" ? t2b : {
                        Xva: a,
                        pca: a
                    }
                };
                u2b = function(a, b) {
                    if (!a) return Ka("missing 'data' field in MessageEvent");
                    const c = a.sandboxCommsSource ? ? a.source;
                    return c ? c !== "iframe" ? Ka("invalid source") : a.clientId !== b ? Ka("unknown client id") : (0, __c.Ia)() : Ka("'source' is missing in MessageEvent data object")
                };
                bY = function(a, b) {
                    w(!a.disposed, "IFrameHostConnector disposed");
                    w(!a.SW.has(b), "Callback already registered");
                    a.SW.add(b)
                };
                w2b = function(a) {
                    a.Og = setTimeout(cY.wrap(() => {
                        a.hPa(new v2b)
                    }), 500)
                };
                y2b = async function(a, b) {
                    const c = dY()();
                    try {
                        const f = b.requestId,
                            g = b.path,
                            h = b.payload,
                            k = a.JT.get(g);
                        if (k) {
                            a.K_.vW.send({
                                type: "ack",
                                requestId: f
                            });
                            var d = setInterval(cY.wrap(() => a.K_.vW.send({
                                type: "ack",
                                requestId: f
                            })), 9E3);
                            try {
                                const l = c.r(await c.s(k(h)));
                                clearInterval(d);
                                a.K_.vW.send({
                                    type: "response",
                                    requestId: f,
                                    payload: l
                                })
                            } catch (l) {
                                c.r();
                                clearInterval(d);
                                b = "internal_error";
                                d = "Something went wrong on our end, if this issue persists please contact us.";
                                if (l instanceof eY) {
                                    var e = l;
                                    l.code === "internal_error" ?
                                        a.N.Ub(l, {
                                            rf: "Internal error in comms handler",
                                            tags: new Map([
                                                ["type", "request"],
                                                ["path", g]
                                            ])
                                        }) : (b = l.code, d = l.kfb)
                                } else a.Nfb ? a.N.Ub(l, {
                                    rf: "Unexpected error type thrown from comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", g]
                                    ])
                                }) : a.T2a.error(l);
                                const m = x2b(a.K_, f, b, d);
                                m.ok || a.N.kX(m.error, {
                                    rf: "unable to send error response",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", g]
                                    ])
                                })
                            }
                            if (e != null)
                                for (const l of a.z4a) try {
                                    l(e)
                                } catch (m) {
                                    a.N.BJ(m, {
                                        rf: "Error executing errorObserver"
                                    })
                                }
                        } else {
                            const l = x2b(a.K_, f,
                                "internal_error", `No request handler configured for path: "${g}".`);
                            l.ok || a.N.kX(l.error, {
                                rf: "unable to send error response",
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
                x2b = function(a, b, c, d) {
                    return a.vW.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                fY = function(a, b, c, d, e) {
                    a.handle(b, async f => {
                        const g = dY()();
                        try {
                            if (f === void 0) throw new eY({
                                code: "internal_error",
                                message: `${b}: request cannot be undefined.`
                            });
                            var h = c.deserialize(f);
                            const k = g.r(await g.s(d(h)));
                            if (e) return e.serialize(k)
                        } finally {
                            g.s()
                        }
                    })
                };
                B2b = function(a, b) {
                    fY(a, "INIT_DATA", z2b, c => b.aHa(c), gY);
                    fY(a, "DATA_RENDER_READY", A2b, c => b.cHa(c), hY)
                };
                F2b = async function(a, b) {
                    const c = dY()();
                    try {
                        const d = c.r(await c.s(a.FQ.request("SET_EDITING_CONFIG", C2b.serialize(b)))),
                            e = D2b(d, "SET_EDITING_CONFIG");
                        return E2b.deserialize(e)
                    } finally {
                        c.s()
                    }
                };
                I2b = async function(a, b) {
                    const c = dY()();
                    try {
                        const d = c.r(await c.s(a.FQ.request("INTERACTION_MODE_CHANGED", G2b.serialize(b)))),
                            e = D2b(d, "INTERACTION_MODE_CHANGED");
                        return H2b.deserialize(e)
                    } finally {
                        c.s()
                    }
                };
                M2b = function(a, b) {
                    fY(a, "SELECTION_CHANGED", J2b, c => b.C7a(c), iY);
                    fY(a, "TEXT_CONTENT_CHANGED", K2b, c => b.E7a(c), L2b)
                };
                D2b = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                kY = async function(a, b) {
                    const c = dY()();
                    try {
                        const d = c.r(await c.s(a.FQ.request("RENDER_ELEMENT", N2b.serialize(b)))),
                            e = jY(d, "RENDER_ELEMENT");
                        return O2b.deserialize(e)
                    } finally {
                        c.s()
                    }
                };
                lY = async function(a, b) {
                    const c = dY()();
                    try {
                        const d = c.r(await c.s(a.FQ.request("SET_CAPABILITY", P2b.serialize(b)))),
                            e = jY(d, "SET_CAPABILITY");
                        return Q2b.deserialize(e)
                    } finally {
                        c.s()
                    }
                };
                T2b = async function(a, b) {
                    const c = dY()();
                    try {
                        const d = c.r(await c.s(a.FQ.request("SET_EDIT_PANEL_VALUE", R2b.serialize(b)))),
                            e = jY(d, "SET_EDIT_PANEL_VALUE");
                        return S2b.deserialize(e)
                    } finally {
                        c.s()
                    }
                };
                Z2b = function(a, b) {
                    fY(a, "INIT_ELEMENT", U2b, c => b.Hma(c), V2b);
                    fY(a, "SET_CONFIG", W2b, c => b.D7a(c), X2b);
                    fY(a, "RESIZE_EVENT", Y2b, c => b.Kma(c))
                };
                jY = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                a3b = function(a, b) {
                    fY(a, "RESIZE_EVENT", $2b, c => b.Kma(c))
                };
                mY = function(a, b, c) {
                    const d = ({
                        b1a: e
                    }) => {
                        var f = e.clientId;
                        e = e.Xeb;
                        if (f !== c.clientId || e !== b) return Promise.resolve({
                            type: "connection_request_not_matched"
                        });
                        e = x(a.HQ.get(b));
                        f = x(e.get(f));
                        if (f.connected) return Promise.resolve({
                            type: "already_connected"
                        });
                        const {
                            port1: g,
                            port2: h
                        } = new MessageChannel;
                        e = new b3b(g, a.N);
                        c.s6(e);
                        f.connected = !0;
                        return Promise.resolve({
                            type: "connection_request_matched",
                            port: h
                        })
                    };
                    x(a.HQ.get(b)).set(c.clientId, {
                        handler: d,
                        connected: !1
                    });
                    return d
                };
                e3b = function(a, b, {
                    JE: c,
                    nU: d,
                    mU: e,
                    oU: f
                }) {
                    a.HQ.has(b) || (a.HQ.set(b, new Map), bY(a.sZ, mY(a, b, {
                        clientId: "canva-code-data-sdk",
                        s6: g => {
                            const {
                                DCa: h
                            } = c();
                            B2b(g, h)
                        }
                    })), d && bY(a.sZ, mY(a, b, {
                        clientId: "canva-code-element-sdk",
                        s6: g => {
                            const {
                                F3a: h
                            } = d(new c3b(g));
                            Z2b(g, h)
                        }
                    })), e && bY(a.sZ, mY(a, b, {
                        clientId: "canva-code-editing-sdk",
                        s6: g => {
                            const {
                                z3a: h
                            } = e(new d3b(g));
                            M2b(g, h)
                        }
                    })), f && bY(a.sZ, mY(a, b, {
                        clientId: "canva-code-resizing-sdk",
                        s6: g => {
                            const {
                                Xfb: h
                            } = f();
                            a3b(g, h)
                        }
                    })))
                };
                f3b = function(a) {
                    a = (new DOMParser).parseFromString(a, "text/html");
                    a = x(a.querySelector("iframe"));
                    return {
                        id: a.id,
                        src: x(a.getAttribute("src")),
                        sandbox: a.sandbox.toString(),
                        allow: a.allow,
                        allowFullscreen: a.allowFullscreen
                    }
                };
                j3b = function({
                    ye: a,
                    Ir: b,
                    jx: c,
                    Kc: d,
                    N: e,
                    Wva: f
                }) {
                    const g = __c.La(() => new g3b(e, f))(),
                        h = new h3b(g, e),
                        k = (l, m) => e.error(l, {
                            rf: "codelet: ",
                            extra: new Map(Object.entries(m))
                        });
                    return nY(l => {
                        const {
                            Gra: m,
                            qva: n
                        } = oY(() => ({
                            Gra: q => e3b(h, q, {
                                JE: l.JE,
                                nU: l.nU,
                                mU: l.mU,
                                oU: l.oU
                            }),
                            qva: q => {
                                const r = h.HQ.get(q);
                                if (r) {
                                    for (const z of r.keys()) {
                                        var t = r.get(z);
                                        if (t ? .handler) {
                                            var u = h.sZ;
                                            t = t.handler;
                                            w(!u.disposed, "IFrameHostConnector disposed");
                                            u.SW.delete(t)
                                        }
                                    }
                                    h.HQ.delete(q)
                                }
                            }
                        }), [l.JE, l.nU, l.mU, l.oU]), p = oY(() => q => pY(i3b, {
                            className: q.className,
                            url: l.url,
                            embed: q.embed,
                            iU: q.iU,
                            Gra: m,
                            qva: n
                        }), [m, n, l.url]);
                        return pY(__c.Yz, {
                            url: l.url,
                            store: b,
                            Ol: c,
                            HG: k,
                            Kc: d,
                            VN: a > 10,
                            Si: l.Si || !1,
                            QA: l.QA,
                            ZWa: p
                        })
                    })
                };
                __c.qY = function() {
                    return a => a
                };
                rY = function(a, b) {
                    return b.map(c => ({
                        type: a,
                        id: c.id,
                        version: c.version
                    }))
                };
                sY = function(a) {
                    return {
                        kind: 0,
                        oI: a
                    }
                };
                k3b = function() {
                    return {
                        kind: 1
                    }
                };
                tY = function(a) {
                    return {
                        kind: 3,
                        range: a
                    }
                };
                uY = function(a) {
                    return {
                        kind: 2,
                        range: a
                    }
                };
                vY = function(...a) {
                    return {
                        kind: 4,
                        values: new Set(a)
                    }
                };
                l3b = function(a) {
                    return {
                        kind: 5,
                        itemType: a
                    }
                };
                wY = function(a) {
                    return {
                        kind: 7,
                        name: a
                    }
                };
                xY = function(a) {
                    return {
                        kind: 8,
                        itemType: a
                    }
                };
                yY = function(a) {
                    return {
                        kind: 10,
                        fields: a
                    }
                };
                m3b = function(a, ...b) {
                    return {
                        kind: 11,
                        LDa: a,
                        Fg: b
                    }
                };
                zY = function(a, b, c) {
                    return (d, ...e) => ({
                        key: d,
                        rta: a,
                        $A: b,
                        type: c(...e)
                    })
                };
                AY = __c.AY = function(a) {
                    const b = new Set;
                    for (const c of Object.values(a)) v(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
                    return a
                };
                n3b = function(a) {
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
                            throw new y(a);
                    }
                };
                __c.BY = function(a) {
                    return () => ({ ...o3b,
                        ...a
                    })
                };
                p3b = function(a, b) {
                    a = { ...a.ZQ
                    };
                    b.gb.every(c => !!c.fill.nd.ref ? .image && !!c.fill.nd.ref ? .video) && (a.jq = !0);
                    return a
                };
                q3b = function(a, b) {
                    a = { ...a.ZQ
                    };
                    b.ib.every(c => !!c.nd.ref ? .text) && (a.jq = !0);
                    return a
                };
                r3b = function(a, b) {
                    a = { ...a.ZQ
                    };
                    b.cells.every(c => !!c.fill.nd.ref ? .image && !!c.fill.nd.ref ? .video) && (a.jq = !0);
                    return a
                };
                s3b = function(a, b) {
                    switch (b.type) {
                        case "rect":
                            return a = { ...a.ZQ
                            }, b.fill.nd.ref ? .image && b.fill.nd.ref ? .video && (a.jq = !0), a;
                        case "shape":
                            return p3b(a, b);
                        case "text":
                            return a = { ...a.ZQ
                            }, b.nd.ref ? .text && (a.jq = !0), a;
                        case "chart":
                            return { ...a.ZQ
                            };
                        case "line":
                            return q3b(a, b);
                        case "grid":
                            return r3b(a, b);
                        default:
                            throw new y(b);
                    }
                };
                t3b = function(a, b) {
                    return a.e.classes.xV.create({}, {
                        P: {
                            fill: CY(a, b.fill)
                        },
                        attributes: { ...DY(a, b),
                            S: () => b.S
                        }
                    })
                };
                v3b = function(a, b) {
                    return a.e.classes.t4.create({}, {
                        P: {
                            gb: a.e.list(b.gb.map(c => u3b(a, c))),
                            ib: b.ib,
                            resizeMode: b.resizeMode,
                            slice: b.slice
                        },
                        attributes: { ...DY(a, b),
                            Yh: () => b.Yh,
                            viewBox: () => b.viewBox
                        }
                    })
                };
                x3b = function(a, b) {
                    return a.e.classes.zfa.create({}, {
                        P: {
                            cells: a.e.Fc(Object.fromEntries(Array.from(b.cells.entries()).map(([c, d]) => [c, w3b(a, d)])))
                        },
                        attributes: { ...DY(a, b),
                            layout: () => b.layout
                        }
                    })
                };
                CY = function(a, b) {
                    const c = {
                        ref: void 0,
                        set: () => {}
                    };
                    return a.e.classes.uV.create({}, {
                        P: {
                            image: a.e.computed(() => y3b(a.nd, c, b.nd.ref ? .video).ref == null ? z3b(a.nd, b.image, b.nd.ref ? .image) : c),
                            video: a.e.computed(() => z3b(a.nd, c, b.nd.ref ? .image).ref == null ? y3b(a.nd, b.video, b.nd.ref ? .video) : c),
                            Xa: b.Xa
                        },
                        attributes: {
                            Mk: () => b.Mk,
                            color: () => b.color,
                            Va: () => b.Va,
                            locked: () => b.locked,
                            Xf: () => b.Xf,
                            $j: () => b.$j,
                            Ic: () => b.Ic,
                            flipX: () => b.flipX,
                            flipY: () => b.flipY
                        }
                    })
                };
                DY = function(a, b) {
                    return {
                        height: () => b.height,
                        width: () => b.width,
                        top: () => b.top,
                        left: () => b.left,
                        rotation: () => b.rotation,
                        og: () => s3b(a.NJa, b),
                        locked: !0
                    }
                };
                u3b = function(a, b) {
                    return a.e.classes.OJ.create({
                        d: b.d
                    }, {
                        P: {
                            fill: CY(a, b.fill),
                            stroke: b.stroke
                        },
                        attributes: {
                            S: () => b.S
                        }
                    })
                };
                w3b = function(a, b) {
                    return a.e.classes.yfa.create({}, {
                        P: {
                            fill: CY(a, b.fill),
                            stroke: b.stroke
                        },
                        attributes: {
                            S: () => b.S
                        }
                    })
                };
                y3b = function(a, b, c) {
                    const d = c ? a.nd ? .get(c) : void 0;
                    return {
                        ref: (d && A3b(d, "video_fill")) ? .video.ref ? ? b.ref,
                        set: e => B3b(a, {
                            type: "video_fill",
                            value: { ...__c.vE,
                                video: e
                            }
                        }, c)
                    }
                };
                z3b = function(a, b, c) {
                    const d = c ? a.nd ? .get(c) : void 0;
                    return {
                        ref: (d && A3b(d, "image_fill")) ? .image.ref ? ? b.ref,
                        set: e => B3b(a, {
                            type: "image_fill",
                            value: { ...__c.vE,
                                image: e
                            }
                        }, c)
                    }
                };
                A3b = function(a, b) {
                    if (a.type !== b) throw Error(`Expected override type ${b} but got ${a.type}`);
                    return a.value
                };
                B3b = function(a, b, c) {
                    if (!c) throw Error("No override key is available, but this is being set on an instance. This is likely an error with the locking logic.");
                    a.nd.set(c, b)
                };
                FY = async function(a, b) {
                    const c = dY()();
                    try {
                        const [d] = c.r(await c.s(a.Z7([b])));
                        return new EY({
                            id: b.id,
                            url: d.fonts[0].files[0].url
                        })
                    } finally {
                        c.s()
                    }
                };
                C3b = async function(a, b, c) {
                    const d = dY()();
                    try {
                        const e = d.r(await d.s(FY(a, c)));
                        return lY(b, e)
                    } finally {
                        d.s()
                    }
                };
                D3b = async function(a, b, c, d, e, f, g) {
                    const h = dY()();
                    try {
                        try {
                            const k = b.x8.ref ? .first(),
                                l = a.Ga,
                                m = h.r(await h.s(kY(c, {
                                    config: b.config,
                                    PL: l != null && k != null ? h.r(await h.s(FY(l, k))) : void 0
                                })));
                            a.config.Uu ? .Eea({ ...m,
                                WC: m.WC ? .size
                            }, b, d, e, f, g)
                        } catch (k) {
                            h.r(), a.N.BJ(k)
                        } finally {
                            a.bta()
                        }
                    } finally {
                        h.s()
                    }
                };
                E3b = function(a, b) {
                    const c = new Map;
                    return GY(() => {
                        const d = new Map;
                        a.config.forEach((e, f) => {
                            let g;
                            const h = c.get(f);
                            e.textContent !== h ? .textContent && (g = { ...(g ? ? new HY({})),
                                textContent: e.textContent
                            });
                            e.backgroundColor !== h ? .backgroundColor && (g = { ...(g ? ? new HY({})),
                                backgroundColor: e.backgroundColor
                            });
                            g && d.set(f, g);
                            c.set(f, { ...e
                            })
                        });
                        return d
                    }, async d => F2b(b, new C2b({
                        config: d
                    })), {
                        fireImmediately: !0
                    })
                };
                F3b = function(a, b) {
                    return GY(() => a.myb, c => I2b(b, new G2b({
                        mode: c
                    })), {
                        fireImmediately: !0
                    })
                };
                L3b = function(a) {
                    function b(d, e) {
                        var f = c;
                        e = e();
                        v(!f.E1.has(d));
                        e = {
                            document: G3b(f.kCa(d, e.document)),
                            D: G3b(f.kCa(d, e.D))
                        };
                        f.E1.set(d, e);
                        return {
                            id: d,
                            qo: e
                        }
                    }
                    const c = a.xwa;
                    return {
                        Yp: b("w:wnJF5T87v", H3b),
                        sR: b("w:xB9fK2LmQ", I3b),
                        wi: a.Bka ? Promise.all([__webpack_require__.me(288639).then(() => __c.IY), __webpack_require__.me(229274).then(() => __c.JY), __webpack_require__.me(89563).then(() => __c.KY), __webpack_require__.me(706140).then(() => __c.LY), __webpack_require__.me(58313).then(() => __c.MY), __webpack_require__.me(879434).then(() =>
                            __c.NY), __webpack_require__.me(181007).then(() => __c.OY), __webpack_require__.me(354456).then(() => __c.PY), __webpack_require__.me(920429).then(() => __c.QY), __webpack_require__.me(580825).then(() => __c.RY)]).then(cY.wrap(([d, e, f, g, h, k, l, m, n, p]) => ({
                            cR: b("w:cm9wgGptP", d.vg),
                            eR: b("w:yLMS4dWnl", e.vg),
                            fR: b("w:2flp30CGQ", f.vg),
                            gR: b("w:1Nv6K6Dtv", g.vg),
                            hR: b("w:5Nv6K6Dtv", h.vg),
                            iR: b("w:6Nv6K6Dtv", k.vg),
                            jR: b("w:7Nv6K6Dtv", l.vg),
                            kR: b("w:8Nv6K6Dtv", m.vg),
                            lR: b("w:9Nv6K6Dtv", n.vg),
                            dR: b("w:sSrc7m4Q3", p.vg)
                        }))) : void 0,
                        Pw: b("w:JR4G8hDDg", J3b),
                        uQ: b("w:KS5H9iEEh", K3b),
                        form: __webpack_require__.me(649E3).then(() => __c.SY).then(cY.wrap(d => b("widget:form", d.vg))),
                        JH: a.Gka ? __webpack_require__.me(320784).then(() => __c.TY).then(cY.wrap(d => b("w:K7mQ9xR3p", d.vg))) : void 0,
                        scene: a.Mka ? __webpack_require__.me(290120).then(() => __c.UY).then(cY.wrap(d => b("w:2pbXJMtm1", d.vg))) : void 0,
                        button: __webpack_require__.me(856598).then(() => __c.VY).then(cY.wrap(d => b("w:PQccHDsCJ", d.vg)))
                    }
                };
                S3b = function(a) {
                    function b({
                        id: f,
                        qo: g
                    }, h, k) {
                        var l = e;
                        h = h(k);
                        k = x(l.nsa.E1.get(f));
                        v(k.D === g.D);
                        v(!l.nCa.has(f));
                        g = M3b(f, h, g);
                        l.nCa.set(f, g);
                        return g
                    }
                    const c = new N3b,
                        d = a.ywa,
                        e = a.vwa;
                    return {
                        uJb: c,
                        wi: d.wi ? Promise.all([d.wi, __webpack_require__.me(288639).then(() => __c.IY), __webpack_require__.me(229274).then(() => __c.JY), __webpack_require__.me(89563).then(() => __c.KY), __webpack_require__.me(706140).then(() => __c.LY), __webpack_require__.me(58313).then(() => __c.MY), __webpack_require__.me(879434).then(() => __c.NY),
                            __webpack_require__.me(181007).then(() => __c.OY), __webpack_require__.me(354456).then(() => __c.PY), __webpack_require__.me(920429).then(() => __c.QY), __webpack_require__.me(580825).then(() => __c.RY)
                        ]).then(cY.wrap(([f, g, h, k, l, m, n, p, q, r, t]) => ({
                            cR: b(f.cR, g.ug, void 0),
                            eR: b(f.eR, h.ug, void 0),
                            fR: b(f.fR, k.ug, void 0),
                            gR: b(f.gR, l.ug, void 0),
                            hR: b(f.hR, m.ug, void 0),
                            iR: b(f.iR, n.ug, void 0),
                            jR: b(f.jR, p.ug, void 0),
                            kR: b(f.kR, q.ug, void 0),
                            lR: b(f.lR, r.ug, void 0),
                            dR: b(f.dR, t.ug, void 0)
                        }))) : void 0,
                        scene: d.scene ? Promise.all([d.scene,
                            __webpack_require__.me(290120).then(() => __c.UY)
                        ]).then(cY.wrap(([f, g]) => b(f, g.ug, void 0))) : void 0,
                        button: Promise.all([d.button, __webpack_require__.me(856598).then(() => __c.VY)]).then(cY.wrap(([f, g]) => b(f, g.ug, {
                            F7: c.F7
                        }))),
                        Pw: b(d.Pw, O3b, void 0),
                        uQ: b(d.uQ, P3b, void 0),
                        form: Promise.all([d.form, __webpack_require__.me(649E3).then(() => __c.SY)]).then(cY.wrap(([f, g]) => b(f, g.ug, void 0))),
                        Yp: b(d.Yp, Q3b, void 0),
                        sR: b(d.sR, R3b, void 0),
                        JH: d.JH ? Promise.all([d.JH, __webpack_require__.me(320784).then(() => __c.TY)]).then(cY.wrap(([f,
                            g
                        ]) => b(f, g.ug, void 0))) : void 0
                    }
                };
                c4b = function(a) {
                    const b = a.ywa,
                        c = a.R3,
                        d = a.Sh,
                        e = a.lG,
                        f = a.hh;
                    class g extends T3b {
                        async load() {
                            const m = dY()();
                            try {
                                const [n, p, q] = m.r(await m.s(Promise.all([this.Pl, this.loadModule(), Promise.resolve(this.hh)]))), r = n.id, t = n.qo, u = p.Om({
                                    lG: { ...e,
                                        tc: d.av(`widgets.rendering.clients.${this.xk}`)
                                    },
                                    hh: q
                                }), z = x(c.nsa.E1.get(r));
                                v(z.D === t.D);
                                v(!c.XN.has(r));
                                U3b.has(r) || (__c.Fob.set(r, V3b), U3b.add(r));
                                const {
                                    w4a: A,
                                    Roa: B
                                } = W3b(c, t, u), D = X3b(c, t, u, B), F = {
                                    D: A,
                                    email: D,
                                    exports: u.exports,
                                    metadata: u.metadata,
                                    Kbb: Y3b(t, u.metadata),
                                    Roa: B,
                                    EX: u.EX
                                };
                                c.XN.set(r, F);
                                return {
                                    id: r,
                                    qo: t,
                                    f1: F,
                                    xk: this.xk
                                }
                            } finally {
                                m.s()
                            }
                        }
                        constructor(m) {
                            super(m.id, m.loadModule);
                            this.Pl = m.Pl;
                            this.hh = m.hh;
                            this.xk = m.xk ? ? "default"
                        }
                    }
                    const h = {
                        Yp: new g({
                            id: "w:wnJF5T87v",
                            Pl: Promise.resolve(b.Yp),
                            loadModule: () => __webpack_require__.me(196751).then(() => Z3b),
                            hh: {
                                oC: f.oC,
                                wz: f.wz
                            },
                            xk: "blueprint"
                        }),
                        sR: new g({
                            id: "w:xB9fK2LmQ",
                            Pl: Promise.resolve(b.sR),
                            loadModule: () => __webpack_require__.me(258551).then(() => $3b),
                            hh: {
                                oC: f.oC
                            },
                            xk: "documentBlueprint"
                        }),
                        cR: b.wi ? new g({
                            id: "w:cm9wgGptP",
                            Pl: b.wi.then(cY.wrap(m => m.cR)),
                            loadModule: () => __webpack_require__.me(288639).then(() => __c.IY),
                            hh: void 0,
                            xk: "demo1"
                        }) : null,
                        eR: b.wi ? new g({
                            id: "w:yLMS4dWnl",
                            Pl: b.wi.then(cY.wrap(m => m.eR)),
                            loadModule: () => __webpack_require__.me(229274).then(() => __c.JY),
                            hh: void 0,
                            xk: "demo2"
                        }) : null,
                        fR: b.wi ? new g({
                            id: "w:2flp30CGQ",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m => m.fR))),
                            loadModule: () => __webpack_require__.me(89563).then(() => __c.KY),
                            hh: void 0,
                            xk: "demo3"
                        }) : null,
                        gR: b.wi ? new g({
                            id: "w:1Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m =>
                                m.gR))),
                            loadModule: () => __webpack_require__.me(706140).then(() => __c.LY),
                            hh: void 0,
                            xk: "demo4"
                        }) : null,
                        hR: b.wi ? new g({
                            id: "w:5Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m => m.hR))),
                            loadModule: () => __webpack_require__.me(58313).then(() => __c.MY),
                            hh: void 0,
                            xk: "demo5"
                        }) : null,
                        iR: b.wi ? new g({
                            id: "w:6Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m => m.iR))),
                            loadModule: () => __webpack_require__.me(879434).then(() => __c.NY),
                            hh: void 0,
                            xk: "demo6"
                        }) : null,
                        jR: b.wi ? new g({
                            id: "w:7Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m =>
                                m.jR))),
                            loadModule: () => __webpack_require__.me(181007).then(() => __c.OY),
                            hh: void 0,
                            xk: "demo7"
                        }) : null,
                        kR: b.wi ? new g({
                            id: "w:8Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m => m.kR))),
                            loadModule: () => __webpack_require__.me(354456).then(() => __c.PY),
                            hh: void 0,
                            xk: "demo8"
                        }) : null,
                        lR: b.wi ? new g({
                            id: "w:9Nv6K6Dtv",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m => m.lR))),
                            loadModule: () => __webpack_require__.me(920429).then(() => __c.QY),
                            hh: void 0,
                            xk: "demo9"
                        }) : null,
                        dR: b.wi ? new g({
                            id: "w:sSrc7m4Q3",
                            Pl: Promise.resolve(b.wi.then(cY.wrap(m =>
                                m.dR))),
                            loadModule: () => __webpack_require__.me(580825).then(() => __c.RY),
                            hh: void 0,
                            xk: "demo10"
                        }) : null,
                        Pw: new g({
                            id: "w:JR4G8hDDg",
                            Pl: Promise.resolve(b.Pw),
                            loadModule: () => __webpack_require__.me(149342).then(() => a4b),
                            hh: {
                                FF: f.FF,
                                Ga: f.Ga,
                                xn: f.xn
                            },
                            xk: "codelet"
                        }),
                        uQ: new g({
                            id: "w:KS5H9iEEh",
                            Pl: Promise.resolve(b.uQ),
                            loadModule: () => __webpack_require__.me(761582).then(() => b4b),
                            hh: {
                                FF: f.FF,
                                xn: f.xn
                            },
                            xk: "codelet2"
                        }),
                        form: new g({
                            id: "widget:form",
                            Pl: b.form,
                            loadModule: () => __webpack_require__.me(649E3).then(() => __c.SY),
                            hh: Promise.all([f.nH ? .()]).then(cY.wrap(([m]) => ({
                                rq: m,
                                Wu: f.Wu
                            }))),
                            xk: "form"
                        }),
                        JH: b.JH ? new g({
                            id: "w:K7mQ9xR3p",
                            Pl: b.JH,
                            loadModule: () => __webpack_require__.me(320784).then(() => __c.TY),
                            hh: void 0,
                            xk: "navigationMenu"
                        }) : null,
                        scene: b.scene ? new g({
                            id: "w:2pbXJMtm1",
                            Pl: b.scene,
                            loadModule: () => __webpack_require__.me(290120).then(() => __c.UY),
                            hh: {
                                Ov: f.Ov
                            },
                            xk: "scene"
                        }) : null,
                        button: new g({
                            id: "w:PQccHDsCJ",
                            Pl: b.button,
                            loadModule: () => __webpack_require__.me(856598).then(() => __c.VY),
                            hh: void 0,
                            xk: "button"
                        })
                    };
                    a = new Set(["widget:form",
                        "w:JR4G8hDDg", "w:wnJF5T87v", "w:2pbXJMtm1", "w:PQccHDsCJ"
                    ]);
                    const k = [];
                    for (var l of Object.values(h)) l && a.has(l.id) && k.push(l.Gl(Promise.resolve()));
                    l = Promise.allSettled(k).then(cY.wrap(() => {}));
                    return {
                        XN: {
                            Yp: h.Yp.Gl(l),
                            sR: h.sR.Gl(l),
                            wi: b.wi && {
                                cR: h.cR.Gl(l),
                                eR: h.eR.Gl(l),
                                fR: h.fR.Gl(l),
                                gR: h.gR.Gl(l),
                                hR: h.hR.Gl(l),
                                iR: h.iR.Gl(l),
                                jR: h.jR.Gl(l),
                                kR: h.kR.Gl(l),
                                lR: h.lR.Gl(l),
                                dR: h.dR.Gl(l)
                            },
                            Pw: h.Pw.Gl(l),
                            uQ: h.uQ.Gl(l),
                            form: h.form ? .Gl(l) ? ? void 0,
                            JH: h.JH ? .Gl(l) ? ? void 0,
                            scene: h.scene ? .Gl(l) ? ? void 0,
                            button: h.button ? .Gl(l) ? ?
                                void 0
                        },
                        RFa: () => {
                            const m = [];
                            for (const n of Object.values(h)) n && m.push(n.Gl(Promise.resolve()));
                            return Promise.allSettled(m)
                        }
                    }
                };
                d4b = function(a) {
                    var b = {
                        document: void 0,
                        D: void 0
                    };
                    const c = new Map;
                    for (const d in b) a[d].mG.forEach((e, f) => c.set(f, e));
                    return {
                        mG: c,
                        decode: d => {
                            const e = new Map,
                                f = {};
                            for (const g in d) {
                                const h = a[g].decode(d[g]);
                                h.hsa.forEach((k, l) => e.set(l, k));
                                f[g] = h.data
                            }
                            return {
                                hsa: e,
                                data: f
                            }
                        },
                        encode: d => Ee(b, (e, f) => a[f].encode(d[f]))
                    }
                };
                e4b = function(a) {
                    return () => a
                };
                f4b = function(a) {
                    return a()
                };
                XY = function(a, b, c) {
                    return new WY([a], b, c)
                };
                YY = function(a, b, c, d) {
                    return new WY([a, b], c, d)
                };
                ZY = function(a, b, c, d) {
                    return new g4b(a, b, c, d)
                };
                h4b = function(a, b) {
                    return b(a)
                };
                i4b = function(a) {
                    return (b, c) => ({
                        kind: 2,
                        name: a,
                        args: [b, c]
                    })
                };
                j4b = function(a) {
                    return b => ({
                        kind: 3,
                        name: a,
                        args: b
                    })
                };
                $Y = function(a, b) {
                    return a === b || b.map(c => a.Ena(k4b(c)))
                };
                m4b = function(a, b) {
                    return a.Bpa(b).map(c => new l4b(c, d => d.props[b]))
                };
                k4b = function(a) {
                    v(a instanceof aZ);
                    return a
                };
                bZ = function(a) {
                    const b = new WeakMap;
                    return function(c) {
                        let d = b.get(c);
                        d == null && (d = a.call(this, c), b.set(c, d));
                        return d
                    }
                };
                dZ = function(a, b) {
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
                                    return b.kind === "array" && cZ(a.items, b.items);
                                case "set":
                                    var c;
                                    if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : cZ([...a], [...b]);
                                    return c;
                                case "map":
                                    if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : cZ([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                    return c;
                                case "record":
                                    return b.kind === "record" && n4b(a.fields, b.fields);
                                case "instance":
                                    return b.kind === "instance" && a.instance === b.instance;
                                default:
                                    throw new y(a);
                            }
                        default:
                            throw new y(a);
                    }
                };
                cZ = function(a, b) {
                    if (a === b) return !0;
                    if (a.length !== b.length) return !1;
                    for (let c = 0; c < a.length; c++)
                        if (!dZ(a[c], b[c])) return !1;
                    return !0
                };
                n4b = function(a, b) {
                    if (a === b) return !0;
                    const c = Object.keys(a),
                        d = Object.keys(b),
                        e = new Set([...c, ...d]);
                    if (c.length !== e.size || d.length !== e.size) return !1;
                    for (const f of e)
                        if (!dZ(a[f], b[f])) return !1;
                    return !0
                };
                eZ = function(a) {
                    return typeof a === "string" ? JSON.stringify(a) : String(a)
                };
                p4b = function(a, b) {
                    return a.map(c => b.map(d => o4b[0](c, d)))
                };
                r4b = function(a, b, c) {
                    return b.map(d => q4b[a](d, c))
                };
                s4b = function(a, b) {
                    return new fZ(new gZ(new Map(b), a.vars), a.DY)
                };
                u4b = function(a, b, c) {
                    for (const [e, f] of c.DY) {
                        var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
                        d = t4b(b, d, g => hZ(a, g, f.body));
                        b = new fZ(b.vars, b.DY.define(e, d))
                    }
                    return hZ(a, b, c.body)
                };
                hZ = function(a, b, c) {
                    switch (c.kind) {
                        case 1:
                            return v4b(c.value);
                        case 2:
                            const f = c.args.map(q => hZ(a, b, q));
                            c = c.name;
                            return typeof c === "string" ? b.DY.resolve(c).map(q => w4b(q, f)) : x4b[c].map(q => iZ(q, f));
                        case 3:
                            const g = c.args.map(q => q.kind !== 13 ? new y4b(hZ(a, b, q)) : new z4b(hZ(a, b, q.Eyb)));
                            c = c.name;
                            switch (c) {
                                case 0:
                                case 1:
                                    var d = g.map(q => q.Gla(r => r.type, r => r.type.PM()));
                                    return jZ.union(...d).map(A4b[c]).map(q => B4b(q, g));
                                default:
                                    return C4b[c].map(q => B4b(q, g))
                            }
                        case 4:
                            d = c.name;
                            var e = c.param;
                            const h = c.body,
                                k = hZ(a, b,
                                    c.CQ);
                            c = k.type.PM();
                            const l = t4b(b, [
                                [e, c]
                            ], q => hZ(a, q, h));
                            return r4b(d, c, l.resultType).map(q => D4b(q, k, l));
                        case 5:
                            const m = c.entries.map(([q, r]) => [hZ(a, b, q), hZ(a, b, r)]);
                            c = jZ.union(...m.map(([q]) => q.type));
                            d = jZ.union(...m.map(([, q]) => q.type));
                            if (!$Y(c, jZ.primitive)) throw Error(`key type is not a primitive: ${c}`);
                            return p4b(c, d).map(q => E4b(q, m));
                        case 6:
                            const n = Ee(c.fields, q => hZ(a, b, q));
                            c = Ee(n, q => q.type);
                            return (0, F4b[0])(c).map(q => G4b(q, n));
                        case 7:
                            d = a.types.resolve(c.name);
                            if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                            const p = hZ(a, b, {
                                kind: 6,
                                fields: c.args
                            });
                            return d.jcb.map(q => iZ(q, [p], {
                                co: !0
                            }));
                        case 8:
                            return d = hZ(a, b, c.base), H4b(d, c.aGb);
                        case 9:
                            return I4b(b, c.name);
                        case 10:
                            return d = mf(c.defs, q => hZ(a, b, q)), J4b(a, b, d, c.body);
                        case 11:
                            return d = hZ(a, b, c.test).as(jZ.Hc), e = hZ(a, b, c.bsb), c = hZ(a, b, c.alternate), K4b(d, e, c);
                        case 12:
                            return hZ(a, b, c.body).computed();
                        default:
                            throw new y(c);
                    }
                };
                v4b = function(a) {
                    switch (typeof a) {
                        case "string":
                            return kZ(jZ.string, a);
                        case "number":
                            return kZ(jZ.number, a);
                        case "boolean":
                            return kZ(jZ.Hc, a);
                        case "undefined":
                            return kZ(jZ.undefined, a);
                        default:
                            throw new y(a);
                    }
                };
                H4b = function(a, b) {
                    return a.map(c => m4b(c, b).map(({
                        type: d,
                        get: e
                    }) => iZ(new WY([c], d, e), [a])))
                };
                I4b = function(a, b) {
                    return a.vars.resolve(b).map(c => lZ.of(c, d => d.resolve(b)))
                };
                J4b = function(a, b, c, d) {
                    const e = mf(c, g => g.type),
                        f = mf(c, g => g.evaluate);
                    return L4b(hZ(a, s4b(b, e), d), g => {
                        const h = mf(f, k => k(g));
                        return new gZ(new Map(h), g)
                    })
                };
                K4b = function(a, b, c) {
                    return b.map((d, e) => c.map((f, g) => {
                        f = jZ.union(d, f);
                        return lZ.of(f, h => {
                            const k = a(h),
                                l = e(h),
                                m = g(h);
                            return () => k() ? l() : m()
                        })
                    }))
                };
                mZ = function(a) {
                    return b => b(a)
                };
                w4b = function({
                    dba: a,
                    resultType: b,
                    evaluate: c
                }, d) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const e = M4b(a, (f, g) => d[g].as(f));
                    return lZ.of(b, f => {
                        const g = e.map(mZ(f));
                        return c(f)(...g)
                    })
                };
                iZ = function({
                    dba: a,
                    resultType: b,
                    apply: c
                }, d, e) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const f = M4b(a, (g, h) => d[h].as(g));
                    return lZ.of(b, g => {
                        g = f.map(mZ(g));
                        return N4b(e ? .co ? O4b(c) : c, g)
                    })
                };
                B4b = function({
                    reb: a,
                    resultType: b,
                    apply: c
                }, d) {
                    let e;
                    const f = d.map(g => g.jha(h => h.as(a), h => h.as(e ? ? (e = jZ.CQ(a)))));
                    return new lZ(b, g => {
                        const h = mZ(g),
                            k = f.map(l => l.jha(h, h));
                        return () => {
                            const l = [];
                            k.forEach(m => {
                                m.Gla(n => l.push(n()), n => l.push(...n()))
                            });
                            return c(l)
                        }
                    })
                };
                E4b = function({
                    keyType: a,
                    valueType: b,
                    resultType: c,
                    apply: d
                }, e) {
                    const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                    return new lZ(c, g => {
                        const h = f.map(([k, l]) => [k(g), l(g)]);
                        return () => d(h.map(([k, l]) => [k(), l()]))
                    })
                };
                G4b = function({
                    tZa: a,
                    resultType: b,
                    apply: c
                }, d) {
                    const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                    if (e.length) throw Error(`too few arguments (missing ${e})`);
                    const f = P4b(a, (g, h) => d[h].as(g));
                    return new lZ(b, g => {
                        const h = Ee(f, mZ(g));
                        return () => {
                            var k = Ee(h, f4b);
                            return c(k)
                        }
                    })
                };
                kZ = function(a, b) {
                    const c = e4b(b);
                    return new lZ(a, () => c)
                };
                D4b = function({
                    itemType: a,
                    MZa: b,
                    resultType: c,
                    reduce: d
                }, e, f) {
                    const g = f.as([a], b),
                        h = e.as(jZ.CQ(a));
                    return new lZ(c, k => {
                        const l = h(k),
                            m = g(k),
                            n = O4b(p => {
                                p = p.map(e4b);
                                return [p, p.map(m)]
                            });
                        return () => {
                            const [p, q] = n(l());
                            return d(p, q)
                        }
                    })
                };
                L4b = function(a, b) {
                    const c = a.evaluate;
                    return new lZ(a.type, d => c(b(d)))
                };
                t4b = function(a, b, c) {
                    const d = b.map(f => f[0]),
                        e = b.map(f => f[1]);
                    return h4b(e, f => c(s4b(a, new Map(b))).map((g, h) => new Q4b(f, g, k => (...l) => {
                        const m = new Map(d.map((n, p) => [n, l[p]]));
                        return h(new gZ(new Map(m), k))
                    })))
                };
                N4b = function(a, b) {
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
                                var f = b.map(f4b);
                                return a(...f)
                            }
                    }
                };
                O4b = function(a) {
                    let b;
                    return (...c) => {
                        if (b && b.nVa.length === c.length && b.nVa.every((e, f) => nZ.Tg(e, c[f]))) return b.v;
                        const d = a(...c);
                        b = {
                            nVa: c,
                            v: d
                        };
                        return d
                    }
                };
                P4b = function(a, b) {
                    return Ee(a, b)
                };
                M4b = function(a, b) {
                    return a.map(b)
                };
                S4b = function(a, b, c) {
                    return new R4b(a, b, c)
                };
                T4b = function(a, b) {
                    return [...a].map(b)[Symbol.iterator]()
                };
                V4b = function(a, b, c) {
                    return new U4b(a, b, c)
                };
                oZ = function(a, b, c, d) {
                    if (d == null) throw a.error(b.QG(c), "not found");
                    return d
                };
                i5b = function(a) {
                    function b(r) {
                        return m[r.kind](r)
                    }
                    const c = a.types,
                        d = a.values;
                    class e {
                        static of (r, t, u, z, A, B) {
                            return new e(r, u, z, W4b(A, X4b(t)), Y4b(B, X4b(t)))
                        }
                        map(r) {
                            return r(this)
                        }
                        validate(r) {
                            return r ? new e(this.dataType, this.s3, this.S2, Z4b(this.decode, r), W4b(this.encode, r)) : this
                        }
                        constructor(r, t, u, z, A) {
                            this.dataType = r;
                            this.s3 = t;
                            this.S2 = u;
                            this.decode = z;
                            this.encode = A
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
                            }, "boolean", c.Hc, r => r,
                            (r, t, u) => u.value, (r, t, u) => ({
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
                                r => d.instance("FontRef", r), pZ("font"), (r, t, u) => ({
                                    type: "ref",
                                    value: u
                                })),
                            MediaRef: e.of({
                                kind: 7,
                                name: "MediaRef"
                            }, "ref", c.instance("MediaRef"), r => d.instance("MediaRef", r), pZ("media"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            VideoRef: e.of({
                                kind: 7,
                                name: "VideoRef"
                            }, "ref", c.instance("VideoRef"), r => d.instance("VideoRef", r), pZ("video"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            AudioRef: e.of({
                                kind: 7,
                                name: "AudioRef"
                            }, "ref", c.instance("AudioRef"), r => d.instance("AudioRef", r), pZ("audio"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            EmbedRef: e.of({
                                kind: 7,
                                name: "EmbedRef"
                            }, "ref", c.instance("EmbedRef"), r => d.instance("EmbedRef", r), pZ("embed"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            SceneRef: e.of({
                                kind: 7,
                                name: "SceneRef"
                            }, "ref", c.instance("SceneRef"), r => d.instance("SceneRef", r), pZ("scene"), (r, t, u) => ({
                                type: "ref",
                                value: u
                            })),
                            BlueprintRef: e.of({
                                kind: 7,
                                name: "BlueprintRef"
                            }, "ref", c.instance("BlueprintRef"), r => d.instance("BlueprintRef", r), pZ("blueprint"), (r, t, u) => ({
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
                            [0]: r => f.validate($4b(r.oI)),
                            [1]: () => g,
                            [2]: r => h.validate(a5b(r.range)),
                            [3]: r => k.validate(a5b(r.range)),
                            [4]: r => e.of({
                                    kind: 4,
                                    values: r.values
                                }, b5b, c.primitive,
                                t => t, (t, u, z) => z.value, (t, u, z) => {
                                    a: switch (typeof z) {
                                        case "string":
                                            t = {
                                                type: "string",
                                                value: z
                                            };
                                            break a;
                                        case "boolean":
                                            t = {
                                                type: "boolean",
                                                value: z
                                            };
                                            break a;
                                        case "number":
                                            t = {
                                                type: "int32",
                                                value: z
                                            };
                                            break a;
                                        default:
                                            throw new y(z);
                                    }
                                    return t
                                }).validate(c5b(r.values)),
                            [5]: r => {
                                const {
                                    dataType: t,
                                    s3: u,
                                    S2: z,
                                    decode: A,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 5,
                                    itemType: t
                                }, "list", c.array(u), D => d.array(D.map(z)), (D, F, I) => I.value.toArray().map((K, L) => A(D, F.VL(L), K)), (D, F, I) => ({
                                    type: "list",
                                    value: I.map((K, L) => B(D, F.VL(L),
                                        K))
                                }))
                            },
                            [6]: r => {
                                const {
                                    dataType: t,
                                    s3: u,
                                    S2: z,
                                    decode: A,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 6,
                                    itemType: t
                                }, "dict", c.map(c.string, u), D => d.map(mf(D, z)), (D, F, I) => mf(I.value.jh(), (K, L) => A(D, F.uY(L), K)), (D, F, I) => ({
                                    type: "dict",
                                    value: mf(I, (K, L) => B(D, F.uY(L), K))
                                }))
                            },
                            [7]: r => l[r.name],
                            [8]: r => {
                                const {
                                    dataType: t,
                                    decode: u,
                                    encode: z
                                } = b(r.itemType);
                                return e.of({
                                    kind: 8,
                                    itemType: t
                                }, "list", c.undefined, () => {}, (A, B, D) => V4b(D.value, F => z(A, B.VL("*"), F), d5b(u, A, B.VL("*"))), (A, B, D) => ({
                                    type: "list",
                                    value: D.map((F, I) => z(A,
                                        B.VL(I), F))
                                }))
                            },
                            [9]: r => {
                                const {
                                    dataType: t,
                                    decode: u,
                                    encode: z
                                } = b(r.itemType);
                                return e.of({
                                    kind: 9,
                                    itemType: t
                                }, "dict", c.undefined, () => {}, (A, B, D) => S4b(D.value, F => z(A, B.uY("*"), F), d5b(u, A, B.VL("*"))), (A, B, D) => ({
                                    type: "dict",
                                    value: mf(D, (F, I) => z(A, B.uY(I), F))
                                }))
                            },
                            [10]: r => {
                                const {
                                    decode: t,
                                    encode: u
                                } = p.QJa(r.fields);
                                return e.of({
                                    kind: 10,
                                    fields: r.fields
                                }, "dict", c.undefined, () => {}, t, u)
                            },
                            [11]: r => {
                                function t(K, L, M, R) {
                                    M = M.get(R);
                                    if (M == null) throw K.error(L, `unknown case for discriminator value: ${R}`);
                                    return M
                                }
                                const u =
                                    r.LDa;
                                r = r.Fg;
                                var z = Object.keys(u);
                                v(z.length >= 1, "missing discriminator props");
                                v(z.length <= 1, "too many discriminator props: {}", z);
                                const A = z[0];
                                v(r.length >= 1, "discriminated union has no cases");
                                z = new Map;
                                for (const K of r) {
                                    const L = K.fields[A].type.values,
                                        M = b(K);
                                    for (const R of L) v(!z.has(R), "discriminator values are not unique across cases: {}", R), z.set(R, M)
                                }
                                const {
                                    decode: B,
                                    encode: D
                                } = b({
                                    kind: 4,
                                    values: new Set(z.keys())
                                }), F = mf(z, K => K.decode), I = mf(z, K => K.encode);
                                return e.of({
                                        kind: 11,
                                        LDa: u,
                                        Fg: r
                                    }, "dict",
                                    c.undefined, () => {}, (K, L, M) => {
                                        var R = oZ(K, L, "k", M.value.get("k"));
                                        M = oZ(K, L, "v", M.value.get("v"));
                                        e5b(K, L, "dict", M);
                                        R = B(K, L, R);
                                        return t(K, L, F, R)(K, L, M)
                                    }, (K, L, M) => {
                                        const R = M[A],
                                            S = t(K, L, I, R);
                                        return {
                                            type: "dict",
                                            value: new Map([
                                                ["k", D(K, L, R)],
                                                ["v", S(K, L, M)]
                                            ])
                                        }
                                    })
                            }
                        },
                        n = Symbol("$impl");
                    class p {
                        static QJa(r) {
                            r = Ee(r, z => q.of(z));
                            const t = Ee(r, z => z.Ejb()),
                                u = Object.entries(r);
                            return {
                                mG: new Map(u.map(([, z]) => z.zjb())),
                                Fjb: z => {
                                    const A = z[n];
                                    return new Map(u.map(([, B]) => B.Gjb(A)))
                                },
                                decode: (z, A, B) => {
                                    const D = Object.create(null,
                                        t);
                                    Object.defineProperty(D, n, {
                                        enumerable: !1,
                                        writable: !1,
                                        value: new p(z, A, B.value)
                                    });
                                    return D
                                },
                                encode: (z, A, B) => {
                                    const D = u.map(([F, I]) => I.encode(z, A, B[F]));
                                    return {
                                        type: "dict",
                                        value: new Map(D.filter(__c.Db))
                                    }
                                }
                            }
                        }
                        wma(r, t) {
                            const u = oZ(this.e, this.p, t, this.data.get(t));
                            return qZ(this.mFa, r.decode, this.e, this.p.QG(t), u)
                        }
                        uma(r, t) {
                            const u = this.data.get(t);
                            if (u != null) return qZ(this.mFa, r.decode, this.e, this.p.QG(t), u)
                        }
                        NRa(r, t, u) {
                            this.data.set(t, r.encode(this.e, this.p.QG(t), u))
                        }
                        JRa(r, t, u) {
                            u != null ? this.data.set(t,
                                r.encode(this.e, this.p.QG(t), u)) : this.data.delete(t)
                        }
                        constructor(r, t, u) {
                            this.e = r;
                            this.p = t;
                            this.data = u;
                            this.mFa = new WeakMap;
                            this.nAa = new Map;
                            this.Y6a = f5b(this.nAa, (z, A) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.wma(A, z)
                                    },
                                    set(D) {
                                        B.NRa(A, z, D)
                                    }
                                }
                            });
                            this.P6a = f5b(this.nAa, (z, A) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.uma(A, z)
                                    },
                                    set(D) {
                                        B.JRa(A, z, D)
                                    }
                                }
                            })
                        }
                    }
                    class q {
                        static of (r) {
                            return new q(r, b(r.type))
                        }
                        zjb() {
                            const r = this.key,
                                t = this.yb,
                                u = this.type;
                            switch (t.$A) {
                                case 0:
                                    return [r, u.s3];
                                case 1:
                                    return [r, c.optional(u.s3)];
                                default:
                                    throw new y(t.$A);
                            }
                        }
                        Gjb(r) {
                            const t = this.key,
                                u = this.yb,
                                z = this.type;
                            switch (u.$A) {
                                case 0:
                                    return [t, () => z.S2(r.wma(z, t))];
                                case 1:
                                    return [t, () => {
                                        const A = r.uma(z, t);
                                        return A != null ? z.S2(A) : void 0
                                    }];
                                default:
                                    throw new y(u.$A);
                            }
                        }
                        Ejb() {
                            const r = this.key;
                            var t = this.yb;
                            const u = this.type;
                            if (n3b(u.dataType) && t.rta === 1) {
                                switch (t.$A) {
                                    case 0:
                                        t = function() {
                                            return this[n].Y6a(r, u)
                                        };
                                        break;
                                    case 1:
                                        t = function() {
                                            return this[n].P6a(r, u)
                                        };
                                        break;
                                    default:
                                        throw new y(t.$A);
                                }
                                return {
                                    enumerable: !0,
                                    get: t
                                }
                            }
                            let z;
                            switch (t.$A) {
                                case 0:
                                    z = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].wma(u, r)
                                        },
                                        set(A) {
                                            this[n].NRa(u, r, A)
                                        }
                                    };
                                    break;
                                case 1:
                                    z = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].uma(u, r)
                                        },
                                        set(A) {
                                            this[n].JRa(u, r, A)
                                        }
                                    };
                                    break;
                                default:
                                    throw new y(t.$A);
                            }
                            switch (t.rta) {
                                case 0:
                                    z.set = void 0;
                                    break;
                                case 1:
                                    break;
                                default:
                                    throw new y(t.rta);
                            }
                            return z
                        }
                        encode(r, t, u) {
                            const z = this.key,
                                A = this.yb,
                                B = this.type;
                            switch (A.$A) {
                                case 0:
                                    return [z, B.encode(r, t.QG(z), oZ(r, t, z, u))];
                                case 1:
                                    return u != null ? [z, B.encode(r, t.QG(z), u)] : void 0;
                                default:
                                    throw new y(A.$A);
                            }
                        }
                        constructor(r, t) {
                            this.yb =
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
                        const u = new g5b(r),
                            z = new h5b,
                            {
                                mG: A,
                                Fjb: B,
                                decode: D,
                                encode: F
                            } = p.QJa(t);
                        return {
                            mG: A,
                            decode: I => {
                                I = D(u, z, {
                                    type: "dict",
                                    value: I
                                });
                                return {
                                    hsa: B(I),
                                    data: I
                                }
                            },
                            encode: I => F(u, z, I).value
                        }
                    }
                };
                f5b = function(a, b) {
                    return (c, ...d) => {
                        a.has(c) || a.set(c, b(c, ...d));
                        return a.get(c)
                    }
                };
                d5b = function(a, b, c) {
                    const d = new WeakMap;
                    return e => qZ(d, a, b, c, e)
                };
                qZ = function(a, b, c, d, e) {
                    let f = a.get(e);
                    f == null && (f = b(c, d, e), a.set(e, f));
                    return f
                };
                W4b = function(a, b) {
                    return (c, d, e) => {
                        b(c, d, e);
                        return a(c, d, e)
                    }
                };
                Z4b = function(a, b) {
                    return (c, d, e) => {
                        e = a(c, d, e);
                        b(c, d, e);
                        return e
                    }
                };
                Y4b = function(a, b) {
                    var c = j5b();
                    return (d, e, f) => {
                        f = a(d, e, f);
                        b(d, e, f);
                        c(d, e, f);
                        return f
                    }
                };
                e5b = function(a, b, c, d) {
                    if (d.type !== c) throw a.error(b, `type error: expected ${c}, was ${d.type}`);
                };
                X4b = function(a) {
                    return typeof a === "string" ? (b, c, d) => e5b(b, c, a, d) : (b, c, d) => {
                        if (!a.has(d.type)) throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                    }
                };
                j5b = function() {
                    return (a, b, c) => {
                        if (typeof c.value !== k5b[c.type]) throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                    }
                };
                c5b = function(a) {
                    return (b, c, d) => {
                        if (!a.has(d)) throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                    }
                };
                a5b = function(a) {
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
                $4b = function(a) {
                    if (a) return (b, c, d) => {
                        if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
                };
                pZ = function(a) {
                    return (b, c, d) => {
                        if (d.value.type !== a) throw b.error(c, `expected ${l5b[a]} resource type, got ${l5b[d.value.type]}`);
                        return { ...d.value,
                            type: a
                        }
                    }
                };
                n5b = function(a) {
                    return new m5b(typeof a === "function" ? rZ(a) : a)
                };
                sZ = function(a) {
                    return typeof a === "function"
                };
                o5b = function(a) {
                    return {
                        get: () => a,
                        set: tZ
                    }
                };
                p5b = function(...a) {
                    const b = new Set,
                        c = new Set;
                    for (const d of a)
                        for (const e in d) b.has(e) ? c.add(e) : b.add(e);
                    if (c.size) throw Error(`keys not disjoint: ${[...c].map(d=>`'${d}'`).join(", ")}`);
                };
                q5b = function(a, b) {
                    return () => b(Ee(a, c => c()))
                };
                s5b = function(a) {
                    v(a.length === 1);
                    let b;
                    return c => {
                        if (b != null && r5b(b[0], c)) return b[1];
                        const d = a(c);
                        b = [c, d];
                        return d
                    }
                };
                r5b = function(a, b) {
                    if (a === b) return !0;
                    if (a == null || b == null) return !1;
                    const c = Object.keys(a),
                        d = Object.keys(b);
                    if (c.length !== d.length) return !1;
                    for (const e of c)
                        if (a[e] !== b[e]) return !1;
                    return !0
                };
                u5b = function(a) {
                    var b = t5b;
                    return {
                        uV: b({
                            lm: a.uV,
                            args: {},
                            nd: {
                                P: {
                                    image: void 0,
                                    video: void 0,
                                    Xa: void 0
                                },
                                attributes: {
                                    Mk: void 0,
                                    color: void 0,
                                    Va: void 0,
                                    locked: void 0,
                                    Xf: void 0,
                                    $j: void 0,
                                    Ic: void 0,
                                    flipX: void 0,
                                    flipY: void 0
                                }
                            }
                        }),
                        Qfa: b({
                            lm: a.Qfa,
                            args: {},
                            nd: {
                                P: {
                                    fill: void 0
                                },
                                attributes: {
                                    weight: void 0,
                                    color: void 0,
                                    zc: void 0,
                                    je: void 0
                                }
                            }
                        }),
                        OJ: b({
                            lm: a.OJ,
                            args: {
                                d: void 0
                            },
                            nd: {
                                P: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    S: void 0
                                }
                            }
                        }),
                        xV: b({
                            lm: a.xV,
                            args: {},
                            nd: {
                                P: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: { ...uZ,
                                    S: void 0
                                }
                            }
                        }),
                        t4: b({
                            lm: a.t4,
                            args: {},
                            nd: {
                                P: {
                                    ib: void 0,
                                    resizeMode: void 0,
                                    slice: void 0,
                                    gb: void 0
                                },
                                attributes: { ...uZ,
                                    Yh: void 0,
                                    viewBox: void 0
                                }
                            }
                        }),
                        w4: b({
                            lm: a.w4,
                            args: {},
                            nd: {
                                P: {
                                    text: void 0
                                },
                                attributes: { ...uZ,
                                    Nw: void 0,
                                    Mg: void 0,
                                    Ea: void 0,
                                    G: void 0,
                                    R: void 0,
                                    nf: void 0
                                }
                            }
                        }),
                        fxa: b({
                            lm: a.fxa,
                            args: {
                                url: void 0,
                                G: void 0,
                                R: void 0
                            },
                            nd: {
                                P: {},
                                attributes: uZ
                            }
                        }),
                        zfa: b({
                            lm: a.zfa,
                            args: {},
                            nd: {
                                P: {
                                    cells: void 0
                                },
                                attributes: { ...uZ,
                                    layout: void 0
                                }
                            }
                        }),
                        yfa: b({
                            lm: a.yfa,
                            args: {},
                            nd: {
                                P: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    S: void 0
                                }
                            }
                        })
                    }
                };
                vZ = function(a, b) {
                    return c => b({ ...a,
                        ...c
                    })
                };
                B5b = function() {
                    return u5b({
                        uV: vZ(wZ, a => jh(__c.gK, a)),
                        Qfa: vZ(v5b, a => jh(__c.zB, a)),
                        OJ: vZ(w5b, a => jh(__c.NN, a)),
                        xV: vZ(xZ, a => jh(__c.bO, { ...a,
                            id: ZX.generate()
                        })),
                        t4: vZ(yZ, a => jh(__c.CE, { ...a,
                            gb: [],
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: 1,
                                height: 1
                            },
                            id: ZX.generate()
                        })),
                        w4: vZ(x5b, a => jh(__c.cO, { ...a,
                            id: ZX.generate()
                        })),
                        fxa: vZ(y5b, a => jh(__c.dO, { ...a,
                            id: ZX.generate()
                        })),
                        zfa: vZ(z5b, a => jh(__c.fO, { ...a,
                            id: ZX.generate()
                        })),
                        yfa: vZ(A5b, a => jh(__c.BE, a))
                    })
                };
                E5b = function() {
                    return (new C5b({})).add((a, b) => ({
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
                        }, c => __c.gK.create({ ...wZ,
                            color: c.color
                        }))
                    })).add((a, b) => ({
                        Stroke: new a("Stroke", {
                            color: b.string,
                            weight: b.number,
                            zc: b.array(b.number),
                            je: b.Hc
                        }, c => __c.zB.create({ ...v5b,
                            color: c.color,
                            weight: c.weight,
                            zc: c.zc.items,
                            je: c.je
                        }))
                    })).add((a, b) => ({
                        Richtext2: new a("Richtext2", {
                            b6a: b.array(b.L({
                                eb: b.string,
                                attrs: b.map(b.string, b.string)
                            }))
                        }, c => {
                            c = c.b6a;
                            const d = __c.Qi.Bb();
                            c.items.forEach(e => {
                                const f = e.fields.eb;
                                d.attrs(__c.ki(e.fields.attrs.items));
                                d.eb(f)
                            });
                            return __c.Sl.create({ ...__c.Tl,
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
                            c = __c.NN.create({ ...w5b,
                                d: c.d,
                                fill: wZ
                            });
                            Object.defineProperties(c, {
                                fill: {
                                    value: e.instance
                                },
                                stroke: {
                                    value: D5b(d)
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
                            S: b.union(b.array(b.number), b.undefined),
                            stroke: b.union(b.instance("Stroke"), b.undefined)
                        }, c => {
                            const d = c.stroke,
                                e = __c.bO.create({ ...xZ,
                                    id: ZX.generate(),
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: c.rotation ? ? xZ.rotation,
                                    fill: wZ,
                                    S: c.S ? .items ? ? xZ.S
                                });
                            Object.defineProperties(e, {
                                fill: {
                                    value: c.fill.instance
                                },
                                stroke: {
                                    value: D5b(d)
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
                            Va: b.union(b.number, b.undefined),
                            viewBox: b.L({
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number
                            }),
                            gb: b.array(b.instance("Path"))
                        }, c => {
                            const d = __c.CE.create({ ...yZ,
                                id: ZX.generate(),
                                top: c.top,
                                left: c.left,
                                width: c.width,
                                height: c.height,
                                rotation: c.rotation ? ? yZ.rotation,
                                Va: c.Va ? ? yZ.Va,
                                gb: [],
                                viewBox: c.viewBox.fields
                            });
                            Object.defineProperties(d, {
                                gb: {
                                    value: new zZ(c.gb.items.map(e => rZ(() => e.instance)))
                                }
                            });
                            return d
                        })
                    }))
                };
                D5b = function(a) {
                    return a && {
                        ref: a.instance,
                        set() {
                            throw Error("Replacing of stroke on a model unit is not yet supported");
                        }
                    }
                };
                M3b = function(a, b, c) {
                    return Ee(b, d => (...e) => {
                        const {
                            data: f,
                            Z: {
                                width: g,
                                height: h
                            }
                        } = d(...e);
                        e = c.D.encode(f.D);
                        const k = c.document.mG.size > 0 ? c.document.encode(f.document) : void 0;
                        return {
                            oc: { ...__c.nsb,
                                app: {
                                    id: a,
                                    version: 1
                                }
                            },
                            Btb: k,
                            Pc: e,
                            Fe: {
                                width: g,
                                height: h
                            }
                        }
                    })
                };
                AZ = function() {
                    throw Error("ref not found");
                };
                G5b = function(a, b) {
                    return class extends F5b {
                        componentDidCatch(c) {
                            a.error(c);
                            this.setState({
                                hasError: !0
                            })
                        }
                        render() {
                            return this.state.hasError ? pY(__c.Co, {
                                background: "criticalLow",
                                width: "full",
                                height: "full",
                                padding: "0.25u",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                role: "alert",
                                children: pY(__c.So, {
                                    size: "xsmall",
                                    alignment: "center",
                                    children: __c.N("Q6XSow")
                                })
                            }) : pY(b, { ...this.props
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
                W3b = function(a, b, c) {
                    const d = c.D,
                        e = (c = c.jX) ? new H5b(c) : void 0;
                    c = e ? f => e.Zb(f.D) : void 0;
                    switch (d.type) {
                        case 0:
                            a = I5b(a, d, b, c);
                            break;
                        case 1:
                            a = J5b(a, d, b, c);
                            break;
                        default:
                            throw new y(d);
                    }
                    return {
                        w4a: a,
                        Roa: e
                    }
                };
                X3b = function(a, b, c, d) {
                    c = c.email;
                    if (c != null) {
                        var e = d ? g => d.Zb(g.D) : void 0,
                            f = c.type;
                        switch (f) {
                            case 2:
                                return K5b(a, c, b, e);
                            default:
                                throw new y(f);
                        }
                    }
                };
                Y3b = function(a, b) {
                    return c => {
                        if (b) return c = a.D.decode(c.D.Pc).data, {
                            type: b.type,
                            zO: typeof b.zO === "function" ? b.zO(c) : b.zO,
                            name: typeof b.name === "function" ? b.name(c) : b.name
                        }
                    }
                };
                I5b = function(a, b, c, d) {
                    const e = b.Qu,
                        {
                            Mga: f,
                            mX: g,
                            qo: h,
                            Ora: k
                        } = BZ(a, c);
                    return typeof e === "object" ? (b = a.LU.types, b = b.CQ(b.union(b.instance("RectElement"), b.instance("ShapeElement"))), L5b(a, f, h, b, e, l => new CZ(() => l().map(m => m.instance)), k)) : {
                        type: 0,
                        Qu: (l, m) => {
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
                        I_: DZ(k),
                        EH: EZ(k),
                        gM: FZ(k),
                        TN: GZ(k)
                    }
                };
                J5b = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            Mga: f,
                            mX: g,
                            qo: h,
                            Ora: k
                        } = BZ(a, c);
                    return {
                        type: 1,
                        I_: DZ(k),
                        EH: EZ(k),
                        gM: FZ(k),
                        TN: GZ(k),
                        Component: G5b(a.N, HZ(({
                            model: l,
                            ye: m,
                            Pha: n,
                            II: p
                        }) => {
                            n = M5b(a.Vd, l, m, n);
                            const q = oY(() => {
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
                            return pY(e, {
                                data: q,
                                Vd: n,
                                Ih: m,
                                II: p
                            })
                        }))
                    }
                };
                K5b = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            Mga: f,
                            mX: g,
                            qo: h,
                            Ora: k
                        } = BZ(a, c);
                    return {
                        type: 2,
                        I_: DZ(k),
                        EH: EZ(k),
                        gM: FZ(k),
                        TN: GZ(k),
                        Component: G5b(a.N, HZ(({
                            model: l,
                            ye: m,
                            scale: n
                        }) => {
                            const p = N5b(a.J3a, n),
                                q = oY(() => {
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
                            return pY(e, {
                                data: q,
                                Vd: p,
                                scale: n,
                                Ih: m
                            })
                        }))
                    }
                };
                BZ = function(a, b) {
                    return {
                        Mga: c => ({
                            document: O5b(a, c),
                            D: c.D.Pc
                        }),
                        mX: (c, d) => a.Vea.mX(c, d),
                        qo: d4b(b),
                        Ora: new P5b
                    }
                };
                L5b = function(a, b, c, d, e, f, g) {
                    const h = a.Wia(a.LU, c, d).compile(e);
                    return {
                        type: 0,
                        Qu: k => ({
                            Ia: f(h(b(k)))
                        }),
                        EH: EZ(g),
                        I_: DZ(g),
                        gM: FZ(g),
                        TN: GZ(g)
                    }
                };
                O5b = function(a, b) {
                    return a.wb.sl.first(c => c.app.id === b.D.oc.app.id && c.app.version === b.D.oc.app.version) ? .data ? ? __c.hO.create(new Map)
                };
                Q5b = function(a, b) {
                    return a.XN.get(b.D.oc.app.id) ? .Kbb(b)
                };
                DZ = function(a) {
                    return IZ(b => {
                        if ((b = a.get(b.D)) && b.size !== 0) return Array.from(b).map(c => c.X8()).reduce((c, d) => ({
                            width: Math.max(c.width, d.width),
                            height: Math.max(c.height, d.height)
                        }), {
                            width: -Infinity,
                            height: -Infinity
                        })
                    })
                };
                EZ = function(a) {
                    return IZ((b, c) => {
                        b = a.get(b);
                        if (!b || b.size === 0) return c;
                        for (const d of b)
                            if (d.EH) return d.EH(c);
                        return c
                    })
                };
                FZ = function(a) {
                    return IZ(b => (b = a.get(b.D)) && b.size !== 0 ? Array.from(b).flatMap(c => c.gM()) : [])
                };
                GZ = function(a) {
                    return (b, c) => {
                        a.add(b.D, c);
                        return () => a.remove(b.D, c)
                    }
                };
                G3b = function(a) {
                    return {
                        mG: a.mG,
                        decode: R5b(a.decode),
                        encode: a.encode
                    }
                };
                R5b = function(a) {
                    const b = new WeakMap;
                    return c => {
                        let d = b.get(c);
                        d || (d = a(c), b.set(c, d));
                        return d
                    }
                };
                V5b = function(a) {
                    var b = a.Wea;
                    const c = a.rnb,
                        d = a.onb,
                        e = a.bja,
                        f = a.LU,
                        g = a.N,
                        h = a.wb,
                        k = a.lQa,
                        l = a.ePa;
                    a = new S5b(a.LC, h);
                    const m = new T5b(h, b, f, e, g, a, c, d);
                    b = new U5b;
                    k && k.nGb(n => Q5b(m, n));
                    l && l(n => Q5b(m, n));
                    return {
                        R3: m,
                        vu: m,
                        Vea: a,
                        expr: b
                    }
                };
                X5b = function(a, b) {
                    if (!a) return "Arial, Helvetica, sans-serif";
                    const c = __c.ft(a);
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
                            return a ? .name ? `${W5b(a.name)}, ${"Arial, Helvetica, sans-serif"}` : "Arial, Helvetica, sans-serif"
                    }
                };
                W5b = function(a) {
                    a = a.replace(/["']/g, "");
                    return /[\s,]/.test(a) ? `"${a}"` : a
                };
                Z5b = function() {
                    ({
                        sm: a
                    } = {
                        sm: []
                    });
                    var a;
                    return ({
                        text: b
                    }) => {
                        const c = Y5b(b, a);
                        return pY("span", {
                            style: { ...c,
                                display: "table-cell",
                                width: "100%",
                                height: "100%",
                                verticalAlign: "middle",
                                boxSizing: "border-box"
                            },
                            children: b.stream.X
                        })
                    }
                };
                Y5b = function(a, b) {
                    var c = q => [...a.stream.xt(q)[q]].values().next().value ? ? __c.ji.Hb[q],
                        d = c("font-family");
                    b = X5b(d, b);
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
                        textAlign: $5b(l, m),
                        lineHeight: `${a6b(n)}em`,
                        letterSpacing: `${a6b(c)}em`
                    }
                };
                $5b = function(a, b) {
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
                a6b = function(a) {
                    if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
                    return a / 1E3
                };
                b6b = function(a) {
                    a.WJ && (a.WJ(), a.WJ = null);
                    const b = a.props.m3a;
                    b.forEach(c => {
                        window.addEventListener(c, a.hya)
                    });
                    a.WJ = () => {
                        b.forEach(c => {
                            window.removeEventListener(c, a.hya)
                        })
                    }
                };
                f6b = function(a) {
                    const b = nY(function(c) {
                        const [{
                            store: d,
                            Sa: e
                        }] = JZ(() => {
                            const f = new c6b,
                                g = new d6b(f);
                            return {
                                store: f,
                                Sa: g
                            }
                        });
                        return pY(e6b, {
                            GMa: e.reset,
                            children: pY(__c.SNb, {
                                n9a: e,
                                o9a: d,
                                VIa: a.Ir.contains(c.url),
                                children: ({
                                    Si: f
                                }) => c.children({
                                    Si: f
                                })
                            })
                        })
                    });
                    return nY(c => c.K_a && a.Kc ? .status !== 2 ? pY(b, { ...c
                    }) : c.children({
                        Si: !1
                    }))
                };
                g6b = function(a) {
                    return HZ(function(b) {
                        return pY("div", {
                            className: "gcYy_A PYuKbg",
                            children: pY(__c.Vn, {
                                lla: "both",
                                children: ({
                                    width: c,
                                    height: d
                                }) => pY(a.pi, {
                                    fill: b.fill,
                                    wc: c,
                                    Ad: d,
                                    Qd: void 0,
                                    animation: void 0,
                                    tB: !1,
                                    aa: void 0,
                                    ga: void 0
                                })
                            })
                        })
                    })
                };
                i6b = function(a) {
                    const b = a.Ga,
                        c = a.P8,
                        d = e => {
                            e = __c.ft(e);
                            b.$z([e], {
                                kk: !0
                            });
                            return b.l1(e)
                        };
                    return HZ(function(e) {
                        var f = e.Mla;
                        const g = e.fontWeight,
                            h = e.sha,
                            k = e.Wh,
                            l = e.vZa,
                            m = e.ariaInvalid,
                            n = e.disabled,
                            p = e.id,
                            q = e.name,
                            r = e.inputMode,
                            t = e.onBlur,
                            u = e.onFocus,
                            z = e.onChange,
                            A = e.padding,
                            B = e.placeholder,
                            D = e.dOa,
                            F = e.readOnly,
                            I = e.outline,
                            K = e.paddingInlineEnd,
                            L = e.type,
                            M = e.value,
                            R = e.width;
                        e = {
                            boxSizing: e.boxSizing,
                            color: e.ci,
                            fontSize: e.fontSize,
                            backgroundColor: e.backgroundColor,
                            borderStyle: e.borderStyle,
                            borderRadius: e.borderRadius,
                            borderWidth: e.borderWidth,
                            fontFamily: f && d(f),
                            fontWeight: g && __c.mt(g),
                            padding: A,
                            paddingInlineEnd: K,
                            outline: I,
                            width: R
                        };
                        [f] = JZ(() => c ? .j7a());
                        return pY("div", {
                            ref: f ? .hl,
                            className: "BHOPhg PYuKbg",
                            children: pY("input", {
                                "aria-describedby": k,
                                "aria-errormessage": l,
                                "aria-invalid": m,
                                className: h6b(["_6Yde8g", D && "sR0SUA"]),
                                disabled: n,
                                id: p,
                                name: q,
                                inputMode: r,
                                onBlur: t,
                                onFocus: u,
                                onChange: z,
                                placeholder: B,
                                readOnly: F,
                                type: L,
                                value: M,
                                style: { ...e,
                                    "--srRiKA": D,
                                    "--oiOG3Q": h ? .default,
                                    "--oGOcXA": h ? .$g,
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
                j6b = function() {
                    return () => pY(__c.uR, {
                        mediaType: "embed",
                        gk: !1
                    })
                };
                k6b = function(a) {
                    return HZ(function(b) {
                        return pY("div", {
                            className: "oUJNhQ PYuKbg",
                            children: pY(a.cf, {
                                text: b.text,
                                animation: void 0,
                                bd: "middle",
                                la: void 0,
                                hb: void 0,
                                ee: [],
                                writingMode: 1
                            })
                        })
                    })
                };
                l6b = function() {
                    return HZ(function(a) {
                        return pY("div", {
                            className: a.className,
                            style: a.style,
                            children: a.children
                        })
                    })
                };
                m6b = function(a) {
                    const b = a.Ga,
                        c = a.P8,
                        d = e => {
                            e = __c.ft(e);
                            b.$z([e], {
                                kk: !0
                            });
                            return b.l1(e)
                        };
                    return HZ(function(e) {
                        var f = e.Mla;
                        const g = e.fontSize,
                            h = e.fontWeight,
                            k = e.sha,
                            l = e.Wh,
                            m = e.vZa,
                            n = e.ariaInvalid,
                            p = e.disabled,
                            q = e.id,
                            r = e.name,
                            t = e.onBlur,
                            u = e.onFocus,
                            z = e.onChange,
                            A = e.padding,
                            B = e.paddingInlineEnd,
                            D = e.placeholder,
                            F = e.dOa,
                            I = e.readOnly,
                            K = e.resize,
                            L = e.outline,
                            M = e.rows,
                            R = e.value,
                            S = e.width,
                            W = e.whiteSpace,
                            X = e.wordBreak;
                        e = {
                            backgroundColor: e.backgroundColor,
                            borderRadius: e.borderRadius,
                            borderStyle: e.borderStyle,
                            borderWidth: e.borderWidth,
                            boxSizing: e.boxSizing,
                            color: e.ci,
                            fontFamily: f && d(f),
                            fontSize: g,
                            fontWeight: h && __c.mt(h),
                            outline: L,
                            padding: A,
                            paddingInlineEnd: B,
                            resize: K,
                            whiteSpace: W,
                            width: S,
                            wordBreak: X
                        };
                        [f] = JZ(() => c ? .j7a());
                        return pY("div", {
                            ref: f ? .hl,
                            className: "BHOPhg PYuKbg",
                            children: pY("textarea", {
                                "aria-describedby": l,
                                "aria-errormessage": m,
                                "aria-invalid": n,
                                className: h6b(["_6Yde8g", F && "sR0SUA"]),
                                disabled: p,
                                id: q,
                                name: r,
                                onBlur: t,
                                onFocus: u,
                                onChange: z,
                                placeholder: D,
                                rows: M,
                                readOnly: I,
                                style: { ...e,
                                    "--srRiKA": F,
                                    "--oiOG3Q": k ? .default,
                                    "--oGOcXA": k ? .$g,
                                    "--UBd2ow": k ? .focus
                                },
                                value: R
                            })
                        })
                    })
                };
                __c.nH.prototype.fo = ca(7, function() {
                    return this.eb("\n")
                });
                __c.TN.prototype.fo = ca(6, function() {
                    this.Bb.fo();
                    return this
                });
                __c.bF.prototype.kX = ca(5, function(a, b) {
                    this.console.error(...__c.sd(this, "critical", a, b))
                });
                __c.cF.prototype.kX = ca(4, function(a, b) {
                    __c.Od(this, "fatal", a, b)
                });
                __c.bF.prototype.O4 = ca(3, function(a) {
                    this.console.log("breadcrumb added", a)
                });
                __c.cF.prototype.O4 = ca(2, function(a) {
                    this.Gi != null && this.Gi ? .addBreadcrumb({ ...a,
                        level: a.level
                    })
                });
                var n6b = class {
                        constructor(a) {
                            this.ref = a
                        }
                    },
                    o6b = class {
                        get ref() {
                            return this.box.get()
                        }
                        constructor(a) {
                            this.box = a
                        }
                    },
                    p6b = class {
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
                    dY = __webpack_require__(75402)._;
                var cY = __webpack_require__(245307).Fm;
                var q6b = __webpack_require__(322594),
                    pY = q6b.jsx,
                    r6b = q6b.jsxs;
                var KZ = __webpack_require__(205482),
                    s6b = KZ.Component,
                    HZ = KZ.memo,
                    F5b = KZ.PureComponent,
                    LZ = KZ.useCallback,
                    MZ = KZ.useEffect,
                    oY = KZ.useMemo,
                    JZ = KZ.useState;
                var nY = __webpack_require__(721226).PA;
                var NZ = __webpack_require__(186901),
                    rZ = NZ.EW,
                    t6b = NZ.fm,
                    u6b = NZ.h5,
                    v6b = NZ.m3,
                    GY = NZ.mJ,
                    OZ = NZ.sH,
                    PZ = NZ.XI;
                var IZ = __webpack_require__(536618).iB;
                var w6b = __webpack_require__,
                    x6b = w6b(208463),
                    h6b = w6b.n_x(x6b)();
                var t2b = {
                    Xva: "null",
                    pca: "*"
                };
                var y6b = () => [...document.getElementsByTagName("iframe")],
                    g3b = class {
                        dispose() {
                            this.disposed || (this.disposed = !0, this.yHa.removeEventListener("message", this.Kaa), QZ.delete(this.NN), this.SW.clear())
                        }
                        constructor(a, b = s2b) {
                            var c = window;
                            this.options = {
                                NN: "codelet"
                            };
                            this.N = a;
                            this.yHa = c;
                            this.Wva = b;
                            this.H6a = y6b;
                            this.disposed = !1;
                            this.Kaa = async d => {
                                const e = dY()();
                                try {
                                    const p = d.source,
                                        q = d.data;
                                    if (p) {
                                        var f = q ? .clientId,
                                            g = q ? .sandboxCommsSource ? ? q ? .source;
                                        if (!g ? .startsWith("react-")) {
                                            var h = this.H6a().find(r => r.contentWindow ===
                                                p);
                                            if (h) {
                                                var k = h.getAttribute("data-process-id");
                                                if (k && k.startsWith(this.NN)) {
                                                    var l = x(h.contentWindow),
                                                        m = this.Wva(d, h);
                                                    if (m.valid) {
                                                        var n = u2b(q, f);
                                                        if (n.ok) {
                                                            d = {
                                                                type: "connection_request_not_matched"
                                                            };
                                                            for (const r of this.SW)
                                                                if (d = e.r(await e.s(r({
                                                                        b1a: {
                                                                            Xeb: k,
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
                                                                    this.N.AJ("received an init message which no listener accepted", {
                                                                        extra: new Map([
                                                                            ["processId", k],
                                                                            ["data.source", g],
                                                                            ["data.clientId", f]
                                                                        ])
                                                                    });
                                                                    this.options.Yqb && h.remove();
                                                                    break;
                                                                case "already_connected":
                                                                    this.N.AJ("received an init message for a processId & clientId that is already connected", {
                                                                        extra: new Map([
                                                                            ["processId", k],
                                                                            ["data.source", g],
                                                                            ["data.clientId", f]
                                                                        ])
                                                                    });
                                                                    break;
                                                                default:
                                                                    throw new y(d);
                                                            }
                                                        } else this.N.AJ(n.error, {
                                                            extra: new Map([
                                                                ["data.source", g],
                                                                ["data.clientId", f]
                                                            ])
                                                        })
                                                    } else m.error && this.N.info(m.error.message, {
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
                            this.NN =
                                this.options.NN ? ? `iframe_host_${z6b++}`;
                            this.SW = new Set;
                            w(!QZ.has(this.NN), `A IFrameHostConnector has already been created with the prefix ${this.options.NN}`);
                            QZ.add(this.NN);
                            this.yHa.addEventListener("message", this.Kaa)
                        }
                    },
                    z6b = 0,
                    QZ = new Set;
                var eY = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.kfb = a.message;
                        Object.setPrototypeOf(this, eY.prototype)
                    }
                };
                var A6b = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.N = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ia)()
                            } catch (e) {
                                return this.N.Ub(e), Ka(e)
                            }
                        };
                        this.cdb = d => {
                            this.N.Ub(d)
                        };
                        this.Kaa = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.receive(d)
                            } catch (e) {
                                this.N.Ub(e)
                            } else this.N.error(new eY({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.Kaa;
                        this.port.onmessageerror = this.cdb
                    }
                };
                var v2b = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    B6b = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.Og);
                            this.Zfb(a)
                        }
                        reject(a) {
                            clearTimeout(this.Og);
                            this.hPa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.Og);
                            this.Og = setTimeout(cY.wrap(() => {
                                w2b(this)
                            }), Math.max(this.timeoutMs - 500, 500))
                        }
                        constructor() {
                            this.timeoutMs = 5E3;
                            this.p = new Promise((a, b) => {
                                this.Zfb = a;
                                this.hPa = b
                            });
                            this.setTimeout()
                        }
                    };
                var C6b = class {
                    request(a, b) {
                        const c = this.UNa,
                            d = new B6b,
                            e = this.Ofb(),
                            f = async function() {
                                const g = dY()();
                                try {
                                    c.set(e, {
                                        path: a,
                                        Pfb: d
                                    });
                                    try {
                                        const h = g.r(await g.s(d.promise()));
                                        return (0, __c.Ia)(h)
                                    } catch (h) {
                                        return g.r(), h instanceof v2b ? Ka(new eY({
                                            code: "internal_error",
                                            message: `Comms promise timed out (${a}).`
                                        })) : Ka(h)
                                    } finally {
                                        c.delete(e)
                                    }
                                } finally {
                                    g.s()
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.N.Ub(b.error, {
                            rf: "unable to send request",
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
                        this.N = b;
                        this.Ofb = __c.td;
                        this.UNa = new Map
                    }
                };
                var D6b = class {
                    handle(a, b) {
                        if (this.JT.has(a)) throw new eY({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.JT.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.K_ = a;
                        this.N = b;
                        this.Nfb = !0;
                        this.T2a = c;
                        this.JT = new Map;
                        this.z4a = new Set
                    }
                };
                var b3b = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.JT.handle(c, d);
                            a = new E6b(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            {
                                                path: g,
                                                Pfb: h
                                            } = d.UNa.get(e) || {};
                                        if (h) switch (f) {
                                            case "response":
                                                h.resolve(c.payload);
                                                break;
                                            case "ack":
                                                h.reset(2E4);
                                                break;
                                            case "error":
                                                d.N.O4({
                                                    level: "info",
                                                    category: "sandbox_comms",
                                                    message: "Error response received",
                                                    data: {
                                                        path: g ? ? "unknown"
                                                    }
                                                });
                                                h.reject(new eY({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new y(c);
                                        } else f !== "ack" && d.N.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        y2b(this.JT, c);
                                        break;
                                    default:
                                        throw new y(c);
                                }
                            }, a, b.Gk("bus"));
                            this.client = new C6b(a.GI, b.Gk("client"));
                            this.JT = new D6b(a, b.Gk("requestHandler"))
                        }
                    },
                    E6b = class {
                        constructor(a, b, c) {
                            this.t9 = a;
                            this.GI = (d, e, f) => this.vW.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.gdb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.t9({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.t9({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.t9({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.t9({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new y(d);
                                }
                            };
                            this.vW = new A6b({
                                receive: this.gdb
                            }, b, c)
                        }
                    };
                var z2b = H(() => ({}));
                var RZ = H(() => ({
                    nR: V(1),
                    pj: V(2)
                }));
                var gY = H(() => ({
                    om: Y("documentId", 1),
                    $h: Y("elementId", 2),
                    WVa: G("websiteContext", 3, RZ),
                    Vna: __c.Z("isPreview", 4)
                }), {
                    Wg: 0
                });
                var A2b = H(() => ({}));
                var hY = H(() => ({}));
                var HY = H(() => ({
                    textContent: Y("textContent", 1),
                    backgroundColor: Y("backgroundColor", 2)
                }), {
                    Wg: 0
                });
                var C2b = H(() => ({
                    config: (0, __c.QF)("config", 1, HY)
                }), {
                    Wg: 0
                });
                var E2b = H(() => ({}));
                var F6b = __c.nb(() => [1, 2]);
                var G2b = H(() => ({
                    mode: __c.Za("mode", 1, F6b)
                }), {
                    Wg: 0
                });
                var H2b = H(() => ({}));
                var G6b = H(() => ({
                    top: FF("top", 1),
                    left: FF("left", 2),
                    width: FF("width", 3),
                    height: FF("height", 4)
                }), {
                    Wg: 0
                });
                var H6b = H(() => ({
                    UEa: V("entityId", 1),
                    lrb: __c.Xa("boundingRect", 2, G6b)
                }), {
                    Wg: 0
                });
                var J2b = H(() => ({
                    selection: G("selection", 1, H6b)
                }), {
                    Wg: 0
                });
                var iY = H(() => ({}));
                var K2b = H(() => ({
                    UEa: V("entityId", 1),
                    textContent: V("textContent", 2)
                }), {
                    Wg: 0
                });
                var L2b = H(() => ({}));
                var d3b = class {
                    constructor(a) {
                        this.FQ = a
                    }
                };
                var EY = H(() => ({
                    type: __c.E("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
                    id: V("id", 1),
                    url: V("url", 4)
                }), {
                    Wg: 0
                });
                var N2b = H(() => ({
                    config: Y("config", 1),
                    PL: G("fontEditable", 2, EY)
                }), {
                    Wg: 0
                });
                var SZ = H(() => ({
                    type: __c.E("type", "RECOLORABLE", 1, "RECOLORABLE"),
                    id: V("id", 1),
                    value: V("value", 2)
                }), {
                    Wg: 0
                });
                var I6b = H(() => ({
                    borderRadius: FF("borderRadius", 1),
                    borderWidth: FF("borderWidth", 2)
                }), {
                    Wg: 0
                });
                var TZ = H(() => ({
                    type: __c.E("type", "BORDERABLE", 2, "BORDERABLE"),
                    id: V("id", 1),
                    value: __c.Xa("value", 2, I6b)
                }), {
                    Wg: 0
                });
                var J6b = H(() => ({
                    id: V("id", 1),
                    value: V("value", 2)
                }), {
                    Wg: 0
                });
                var UZ = H(() => ({
                    type: __c.E("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
                    size: FF("size", 21)
                }), {
                    Wg: 0
                });
                var O2b = H(() => ({
                    config: V("config", 1),
                    CT: Ya("recolorables", 4, SZ),
                    v_a: Ya("borderables", 5, TZ),
                    y3a: Ya("editPanelValues", 6, J6b),
                    WC: G("fontSizeable", 7, UZ),
                    PL: G("fontEditable", 8, EY)
                }), {
                    Wg: 0
                });
                var P2b = __c.mb(() => ({
                    type: [1, SZ, 2, TZ, 3, EY, 5, UZ]
                }), () => ({}), {
                    Wg: 0
                });
                var Q2b = H(() => ({
                    config: V("config", 1)
                }), {
                    Wg: 0
                });
                var R2b = H(() => ({
                    id: V(1),
                    value: V(2)
                }));
                var S2b = H(() => ({
                    config: V(1)
                }));
                var U2b = H(() => ({
                    config: V("config", 1)
                }), {
                    Wg: 0
                });
                var V2b = H(() => ({
                    config: Y("config", 1),
                    PL: G("fontEditable", 2, EY)
                }), {
                    Wg: 0
                });
                var W2b = H(() => ({
                    config: V("config", 1),
                    CT: Ya("recolorables", 4, SZ),
                    v_a: Ya("borderables", 5, TZ),
                    PL: G("fontEditable", 6, EY),
                    y3a: Ya("editPanelValues", 7, J6b),
                    WC: G("fontSizeable", 8, UZ)
                }), {
                    Wg: 0
                });
                var X2b = H(() => ({}));
                var K6b = H(() => ({
                    scrollWidth: FF("scrollWidth", 1),
                    scrollHeight: FF("scrollHeight", 2),
                    offsetWidth: FF("offsetWidth", 3),
                    offsetHeight: FF("offsetHeight", 4)
                }), {
                    Wg: 0
                });
                var Y2b = H(() => ({
                    body: __c.Xa("body", 1, K6b)
                }), {
                    Wg: 0
                });
                var c3b = class {
                    constructor(a) {
                        this.FQ = a
                    }
                };
                var L6b = H(() => ({
                    scrollWidth: FF("scrollWidth", 1),
                    scrollHeight: FF("scrollHeight", 2),
                    offsetWidth: FF("offsetWidth", 3),
                    offsetHeight: FF("offsetHeight", 4)
                }), {
                    Wg: 0
                });
                var $2b = H(() => ({
                    body: __c.Xa("body", 1, L6b)
                }), {
                    Wg: 0
                });
                var h3b = class {
                    constructor(a, b) {
                        this.sZ = a;
                        this.N = b;
                        this.HQ = new Map
                    }
                };
                var i3b = HZ(function({
                    className: a,
                    url: b,
                    embed: c,
                    iU: d,
                    Gra: e,
                    qva: f,
                    CFb: g = f3b
                }) {
                    const h = oY(() => `${"codelet"}-${b}-${__c.td()}`, [b]),
                        {
                            id: k,
                            src: l,
                            sandbox: m,
                            allow: n,
                            allowFullscreen: p
                        } = g(x(c.html));
                    MZ(() => {
                        e(h);
                        return () => {
                            f(h)
                        }
                    }, [e, f, h]);
                    return pY("div", {
                        className: a,
                        children: pY("div", {
                            ref: q => {
                                q && d(q)
                            },
                            className: "R9vaCQ",
                            children: pY("iframe", {
                                id: k,
                                className: "_5K1SQ",
                                "data-process-id": h,
                                src: l,
                                title: c.title || __c.N("gs+cqw"),
                                sandbox: m,
                                allow: n,
                                allowFullScreen: p
                            })
                        })
                    })
                });
                var M6b;
                M6b = Symbol.iterator;
                var CZ = class {
                    static F(a) {
                        O(a, {
                            yl: rZ,
                            hp: rZ
                        })
                    }
                    get yl() {
                        return this.yZa().map(a => {
                            let b = this.EHa.get(a);
                            b == null && (b = `${this.i8a++}`, this.EHa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get hp() {
                        const a = new Map;
                        this.yl.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Ij(a) {
                        return x(this.hp.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.yl.length
                    }
                    count() {
                        return this.yl.length
                    }
                    toArray() {
                        return this.yl.map(a => a.ref)
                    }
                    jh() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get ML() {
                        return this.yl[0] ? .ref
                    }
                    get SM() {
                        return this.yl[this.yl.length - 1] ? .ref
                    }
                    first(a) {
                        return a ?
                            this.yl.find(b => a(b.ref)) ? .ref : this.ML
                    }
                    last(a) {
                        if (!a) return this.SM;
                        const b = this.yl;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.yl;
                        for (a = this.Ij(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    previous(a, b) {
                        const c = this.yl;
                        for (a = this.Ij(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    ue(a, b) {
                        a = this.hp.get(a);
                        b = this.hp.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    gp(a) {
                        return this.yl[this.Ij(a)].id
                    }
                    has(a) {
                        return this.hp.has(a)
                    }
                    Yu(a) {
                        return new __c.lH(this,
                            a)
                    }
                    map(a) {
                        return this.yl.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.yl.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.yl.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.yl.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.yl.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.yl.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.yl.every(b => a(b.ref, b.id))
                    }[M6b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.yZa = a;
                        this.i8a = (CZ.F(this), 0);
                        this.EHa = new WeakMap
                    }
                };
                var Q3b = __c.qY()(() => ({
                        nsb({
                            cG: a,
                            q_a: b,
                            version: c
                        }, d, e) {
                            e = e && {
                                fonts: rY("font", e.fonts),
                                media: rY("media", e.media),
                                rd: rY("video", e.rd),
                                embeds: rY("embed", e.embeds)
                            };
                            return {
                                data: {
                                    D: {
                                        cG: a,
                                        Yp: {
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
                                        nd: void 0
                                    },
                                    document: {}
                                },
                                Z: d
                            }
                        }
                    })),
                    N6b = ({
                        resource: a,
                        wz: b
                    }) => {
                        const c = t6b(() => {
                            __c.nza(b, a.ref.ref)
                        });
                        return {
                            Ia: new CZ(() => {
                                const d = q2b(b, a.ref.ref);
                                return d ? (w(d.type === "group", "Expected group element"), d.Ia.filter(__c.Db).map(e =>
                                    __c.xE.create({ ...e,
                                        locked: !0,
                                        Xf: !0
                                    }))) : []
                            }),
                            Uf: c
                        }
                    },
                    O6b = __c.aY()(({
                        hh: {
                            wz: a
                        }
                    }) => ({
                        metadata: {
                            type: "blueprint",
                            name: __c.N("iAtEVw")
                        },
                        D: {
                            type: 0,
                            Qu: ({
                                D: b
                            }) => N6b({
                                resource: b.Yp.resource,
                                wz: a
                            })
                        },
                        exports: {}
                    }));
                VZ = __c.VZ = class {};
                VZ.val = (a, b) => zY(0, 0, () => b)(a);
                VZ.uz = (a, b) => zY(1, 0, () => b)(a);
                VZ.ref = (a, b) => zY(0, 0, () => b)(a);
                VZ.qdb = () => {
                    var a = __c.WZ;
                    return zY(1, 1, () => a)(1)
                };
                VZ.$Ma = (a, b) => zY(0, 1, () => b)(a);
                VZ.wda = zY(0, 0, sY);
                VZ.jEa = zY(0, 0, uY);
                VZ.ei = zY(0, 0, vY);
                VZ.hu = zY(1, 0, sY);
                VZ.iAa = zY(1, 0, k3b);
                VZ.iEa = zY(1, 0, uY);
                VZ.F$ = zY(1, 0, vY);
                VZ.tA = zY(1, 0, tY);
                VZ.qza = zY(1, 0, l3b);
                VZ.yv = zY(1, 1, sY);
                VZ.l0 = zY(1, 1, k3b);
                VZ.Di = zY(1, 1, uY);
                VZ.udb = zY(1, 1, tY);
                VZ.ey = zY(1, 1, vY);
                VZ.pdb = zY(1, 1, l3b);
                VZ.Rk = zY(0, 0, wY);
                VZ.listRef = zY(0, 0, xY);
                VZ.HDa = zY(0, 0, function(a) {
                    return {
                        kind: 9,
                        itemType: a
                    }
                });
                VZ.Cba = zY(0, 0, yY);
                VZ.Xlb = zY(0, 0, m3b);
                VZ.tdb = zY(0, 1, wY);
                VZ.xdb = zY(0, 1, yY);
                VZ.oAa = zY(1, 0, yY);
                VZ.YMa = zY(1, 1, wY);
                VZ.sdb = zY(1, 1, xY);
                VZ.m0 = zY(1, 1, yY);
                VZ.lua = sY;
                VZ.l9a = tY;
                VZ.JZ = wY;
                VZ.GJa = xY;
                VZ.eh = yY;
                VZ.PU = m3b;
                VZ.tcb = AY({});
                var o3b = Object.freeze({
                    document: Object.freeze({}),
                    D: Object.freeze({})
                });
                var H3b = __c.BY({
                    D: AY({
                        cG: VZ.wda(1),
                        Yp: VZ.Cba(2, {
                            domain: VZ.ei(1, "resource"),
                            resource: VZ.oAa(2, {
                                ref: VZ.Rk(2, "BlueprintRef"),
                                resources: VZ.xdb(3, {
                                    fonts: VZ.listRef(1, VZ.JZ("FontRef")),
                                    media: VZ.listRef(2, VZ.JZ("MediaRef")),
                                    rd: VZ.listRef(3, VZ.JZ("VideoRef")),
                                    embeds: VZ.listRef(5, VZ.JZ("EmbedRef"))
                                })
                            })
                        })
                    })
                });
                var Z3b = {
                    ug: Q3b,
                    Om: O6b,
                    vg: H3b
                };
                var P6b = class {
                    constructor() {
                        this.ZQ = {
                            jq: !1,
                            bF: !1,
                            zC: !1,
                            NC: !1
                        }
                    }
                };
                var Q6b = class {
                    create(a) {
                        switch (a.type) {
                            case "rect":
                                return t3b(this, a);
                            case "shape":
                                return v3b(this, a);
                            case "grid":
                                return x3b(this, a);
                            default:
                                const b = __c.lO.snapshot(a);
                                return __c.lO.create({ ...b,
                                    locked: !0,
                                    Xf: !0,
                                    og: s3b(this.NJa, a)
                                })
                        }
                    }
                    constructor(a, b) {
                        this.e = a;
                        this.nd = b;
                        this.NJa = new P6b
                    }
                };
                var R6b = class {
                    constructor(a) {
                        this.nd = a
                    }
                };
                var R3b = __c.qY()(() => ({
                        ssb({
                            cG: a,
                            q_a: b,
                            type: c
                        }, d) {
                            return {
                                data: {
                                    D: {
                                        cG: a,
                                        Yp: {
                                            domain: "document",
                                            id: b,
                                            version: 1,
                                            yb: c === "source" ? {
                                                type: c
                                            } : {
                                                type: c,
                                                nd: new Map
                                            }
                                        }
                                    },
                                    document: {}
                                },
                                Z: d
                            }
                        }
                    })),
                    S6b = ({
                        data: a,
                        oC: b,
                        expr: c
                    }) => {
                        b = b.r5a(a.cG);
                        if (!b) throw Error(`Blueprint set ${a.cG} not found`);
                        const d = b.Dh.get(a.Yp.id);
                        if (!d) throw Error(`Blueprint ${a.Yp.id} not found in blueprint set ${a.cG}`);
                        if (a.Yp.yb.type === "source") return {
                            Ia: d.ck
                        };
                        const e = new Q6b(c, new R6b(a.Yp.yb.nd));
                        return {
                            Ia: c.list(() => d.Ia.map(f => e.create(f)))
                        }
                    },
                    T6b = __c.aY()(({
                        lG: {
                            expr: a
                        },
                        hh: {
                            oC: b
                        }
                    }) => ({
                        metadata: {
                            type: void 0,
                            name: void 0
                        },
                        D: {
                            type: 0,
                            Qu: ({
                                D: c
                            }) => S6b({
                                data: c,
                                oC: b,
                                expr: a
                            })
                        },
                        exports: {}
                    }));
                var U6b = VZ.PU({
                    type: void 0
                }, VZ.eh({
                    type: VZ.ei(1, "boolean"),
                    value: VZ.l0(2)
                }), VZ.eh({
                    type: VZ.ei(1, "non-negative-double"),
                    value: VZ.Di(2, {
                        min: 0
                    })
                }), VZ.eh({
                    type: VZ.ei(1, "double"),
                    value: VZ.Di(2)
                }), VZ.eh({
                    type: VZ.ei(1, "string"),
                    value: VZ.yv(2)
                }), VZ.eh({
                    type: VZ.ei(1, "richtext2"),
                    value: VZ.Rk(2, "Richtext2")
                }), VZ.eh({
                    type: VZ.ei(1, "image_fill"),
                    value: VZ.Rk(2, "Fill")
                }), VZ.eh({
                    type: VZ.ei(1, "video_fill"),
                    value: VZ.Rk(2, "Fill")
                }));
                var V6b = VZ.eh({
                        type: VZ.ei(1, "source")
                    }),
                    W6b = VZ.eh({
                        type: VZ.ei(1, "instance"),
                        nd: VZ.HDa(2, U6b)
                    }),
                    I3b = __c.BY({
                        D: AY({
                            cG: VZ.wda(1),
                            Yp: VZ.Cba(2, {
                                domain: VZ.ei(1, "document"),
                                id: VZ.wda(2),
                                version: VZ.tA(3),
                                yb: VZ.Xlb(4, {
                                    type: void 0
                                }, V6b, W6b)
                            })
                        })
                    });
                var $3b = {
                    ug: R3b,
                    Om: T6b,
                    vg: I3b
                };
                var X6b = class {
                        static F(a) {
                            O(a, {
                                $h: OZ.ref
                            })
                        }
                        constructor(a) {
                            this.$h = (X6b.F(this), void 0);
                            this.$h = a
                        }
                    },
                    O3b = __c.qY()(() => ({
                        rsb(a, b) {
                            return {
                                data: {
                                    D: {
                                        jia: {
                                            type: "embed",
                                            id: a,
                                            version: 0
                                        },
                                        nBa: b,
                                        config: void 0,
                                        x8: void 0
                                    },
                                    document: {}
                                },
                                Z: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    }));
                var Y6b = class {};
                var Z6b = class {
                    static F(a) {
                        O(a, {
                            fv: OZ.ref,
                            bta: PZ
                        })
                    }
                    subscribe(a) {
                        this.mk.add(a);
                        return () => {
                            this.mk.delete(a)
                        }
                    }
                    async Hma(a, b, c, d, e, f) {
                        const g = dY()();
                        try {
                            const h = a.x8.ref ? .first(),
                                k = this.Ga,
                                l = a.config != null && a.config !== "" ? a.config : b.config;
                            this.config.Uu ? .Eea({
                                config: l
                            }, a, c, d, e, f);
                            let m;
                            try {
                                m = k != null && h != null ? g.r(await g.s(FY(k, h))) : void 0
                            } catch (n) {
                                g.r(), this.N.Ub(n)
                            }
                            return new V2b({
                                config: a.config != null && a.config !== "" ? a.config : void 0,
                                PL: m
                            })
                        } finally {
                            g.s()
                        }
                    }
                    constructor(a, b, c, d) {
                        this.config = a;
                        this.Ga = b;
                        this.N = c;
                        this.xn = d;
                        this.mk = (Z6b.F(this), new Set);
                        this.fv = !1;
                        this.notifyListeners = e => {
                            this.mk.forEach(f => f(e))
                        };
                        this.nU = (e, f) => {
                            this.jt ? .();
                            this.jt = void 0;
                            const g = r => lY(f, new SZ(r)),
                                h = this.Ga,
                                k = h ? r => C3b(h, f, r) : void 0,
                                l = r => T2b(f, new R2b(r)),
                                m = r => lY(f, new UZ({
                                    size: r
                                })),
                                n = {
                                    Hma: async r => this.Hma(e, r, g, k, m, l),
                                    D7a: r => {
                                        this.config.Uu ? .Eea({ ...r,
                                            WC: r.WC ? .size
                                        }, e, g, k, m, l);
                                        return new X2b
                                    },
                                    Kma: this.s7a
                                },
                                p = GY(() => e.config, async r => {
                                    const t = dY()();
                                    try {
                                        const u = t.r(await t.s(kY(f, {
                                            config: r,
                                            PL: void 0
                                        })));
                                        u.config &&
                                            u.config !== r && this.config.Uu ? .Eea({ ...u,
                                                WC: u.WC ? .size
                                            }, e, g, k, m, l)
                                    } finally {
                                        t.s()
                                    }
                                }),
                                q = GY(() => e.x8.ref ? .first(), async r => {
                                    const t = dY()();
                                    try {
                                        const u = e.config,
                                            z = this.Ga,
                                            A = t.r(await t.s(kY(f, {
                                                config: u,
                                                PL: z != null && r != null ? t.r(await t.s(FY(z, r))) : void 0
                                            })));
                                        A.config && A.config !== u && this.config.Uu ? .Eea({ ...A,
                                            WC: A.WC ? .size
                                        }, e, g, k, m, l)
                                    } finally {
                                        t.s()
                                    }
                                });
                            this.jt = () => {
                                p();
                                q()
                            };
                            D3b(this, e, f, g, k, m, l);
                            return {
                                F3a: n
                            }
                        };
                        this.JE = e => {
                            const f = this.xn && new RZ({
                                nR: this.xn.id,
                                pj: this.xn.pj
                            });
                            return {
                                DCa: {
                                    aHa: () => new gY({
                                        om: e.page ? .container ? .id,
                                        $h: e.$h,
                                        WVa: f
                                    }),
                                    cHa: () => new hY
                                }
                            }
                        };
                        this.bta = () => {
                            this.fv = !0
                        };
                        this.QA = () => {
                            this.jt ? .()
                        };
                        this.s7a = e => {
                            this.notifyListeners({
                                height: e.body.scrollHeight,
                                width: e.body.scrollWidth
                            })
                        }
                    }
                };
                var J3b = __c.BY({
                    D: AY({
                        jia: VZ.Rk(1, "EmbedRef"),
                        nBa: VZ.wda(35),
                        config: VZ.yv(29),
                        x8: VZ.sdb(6, VZ.JZ("FontRef"))
                    })
                });
                var $6b = __c.aY()(({
                        hh: a,
                        lG: b
                    }) => {
                        const c = a.FF,
                            d = a.Ga,
                            e = a.xn,
                            f = b.N,
                            g = new Y6b;
                        return {
                            metadata: {
                                type: "codelet",
                                name: __c.N("4kcGvw"),
                                zO: h => h.nBa
                            },
                            jX: () => new X6b(void 0),
                            D: __c.$X(nY(({
                                data: {
                                    D: h,
                                    local: k
                                },
                                Vd: {
                                    vP: l,
                                    AXa: m
                                },
                                Ih: n,
                                II: p
                            }) => {
                                u6b(() => {
                                    k.$h = n.$h
                                });
                                const [q] = JZ(() => new Z6b(g, d, f, e));
                                MZ(() => {
                                    p ? .(q)
                                }, [q, p]);
                                const r = LZ(u => q.nU(h, u), [h, q]),
                                    t = LZ(() => q.JE(n), [q, n]);
                                return r6b("div", {
                                    className: "guWTXA",
                                    children: [pY(l, {
                                            url: h.jia.id,
                                            children: ({
                                                Si: u
                                            }) => pY(c, {
                                                url: h.jia.id,
                                                Si: u,
                                                JE: t,
                                                nU: r,
                                                QA: q.QA,
                                                EEb: q.bta
                                            })
                                        }),
                                        n.ye > 10 && h.config != null && !q.fv && pY("div", {
                                            className: "djA3nQ",
                                            children: pY(m, {})
                                        })
                                    ]
                                })
                            })),
                            exports: {
                                config: g
                            }
                        }
                    }),
                    a4b = {
                        ug: O3b,
                        Om: $6b,
                        vg: J3b
                    };
                var K3b = __c.BY({
                        D: AY({
                            Pw: VZ.m0(1, AY({
                                kia: VZ.Rk(1, "EmbedRef"),
                                config: VZ.HDa(2, VZ.eh({
                                    textContent: VZ.yv(1),
                                    backgroundColor: VZ.yv(2, /^#[0-9a-f]{6}$/)
                                })),
                                oTa: VZ.yv(3)
                            }))
                        })
                    }),
                    P3b = __c.qY()(() => ({
                        msb() {
                            return {
                                data: {
                                    D: {
                                        Pw: void 0
                                    },
                                    document: {}
                                },
                                Z: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        },
                        qsb(a, b, c) {
                            return {
                                data: {
                                    D: {
                                        Pw: {
                                            kia: {
                                                type: "embed",
                                                id: a,
                                                version: 0
                                            },
                                            config: b,
                                            oTa: c
                                        }
                                    },
                                    document: {}
                                },
                                Z: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    })),
                    a7b = class {
                        static F(a) {
                            O(a, {
                                Uu: OZ.ref,
                                hxa: OZ.ref
                            })
                        }
                        constructor() {
                            this.Uu = (a7b.F(this), void 0)
                        }
                    };
                var b7b = class {
                    subscribe(a) {
                        this.mk.add(a);
                        return () => {
                            this.mk.delete(a)
                        }
                    }
                    dispose() {
                        this.Hr.forEach(a => a());
                        this.Hr = []
                    }
                    constructor(a, b) {
                        this.config = a;
                        this.xn = b;
                        this.mk = new Set;
                        this.Hr = [];
                        this.mU = (c, d, e) => {
                            this.dispose();
                            this.Hr.push(E3b(c, e));
                            this.config.Uu && this.Hr.push(F3b(this.config.Uu, e));
                            return {
                                z3a: {
                                    C7a: f => {
                                        if (d == null) return new iY;
                                        this.config.Uu ? .JEb(d, f.selection);
                                        return new iY
                                    },
                                    E7a: f => {
                                        this.config.Uu ? .KEb(c, f.UEa, f.textContent);
                                        return new L2b
                                    }
                                }
                            }
                        };
                        this.oU = () => ({
                            Xfb: {
                                Kma: c => {
                                    const d = {
                                        height: c.body.scrollHeight,
                                        width: c.body.scrollWidth
                                    };
                                    this.mk.forEach(e => e(d))
                                }
                            }
                        });
                        this.JE = c => {
                            const d = this.xn && new RZ({
                                nR: this.xn.id,
                                pj: this.xn.pj
                            });
                            return {
                                DCa: {
                                    aHa: () => new gY({
                                        om: c.page ? .container ? .id,
                                        $h: c.$h,
                                        WVa: d
                                    }),
                                    cHa: () => new hY
                                }
                            }
                        };
                        this.QA = () => {
                            this.dispose()
                        }
                    }
                };
                var c7b = nY(({
                    D: a,
                    FF: b,
                    vP: c,
                    Ih: d,
                    Sa: e
                }) => {
                    const f = LZ(k => e.mU(a, d.$h, k), [d.$h, a, e]),
                        g = LZ(() => e.oU(), [e]),
                        h = LZ(() => e.JE(d), [e, d]);
                    return pY(c, {
                        url: a.kia.id,
                        children: ({
                            Si: k
                        }) => pY(b, {
                            url: a.kia.id,
                            Si: k,
                            JE: h,
                            mU: f,
                            oU: g,
                            QA: e.QA
                        })
                    })
                });
                var d7b = __c.aY()(({
                        hh: a
                    }) => {
                        const b = a.FF,
                            c = a.xn,
                            d = new a7b;
                        return {
                            metadata: {
                                type: void 0,
                                name: void 0
                            },
                            D: __c.$X(nY(({
                                data: {
                                    D: e
                                },
                                Vd: {
                                    vP: f
                                },
                                Ih: g,
                                II: h
                            }) => {
                                const [k] = JZ(() => new b7b(d, c));
                                MZ(() => {
                                    h ? .(k)
                                }, [k, h]);
                                return e.Pw.ref != null ? pY(c7b, {
                                    Ih: g,
                                    D: e.Pw.ref,
                                    Sa: k,
                                    FF: b,
                                    vP: f
                                }) : d.hxa != null ? pY(d.hxa, {}) : null
                            })),
                            exports: {
                                configuration: d
                            }
                        }
                    }),
                    b4b = {
                        ug: P3b,
                        Om: d7b,
                        vg: K3b
                    };
                var T3b = class {
                        Gl(a) {
                            this.loading || (this.loading = (a ? ? Promise.resolve()).then(cY.wrap(() => this.load())));
                            return this.loading
                        }
                        constructor(a, b) {
                            this.id = a;
                            this.loadModule = b
                        }
                    },
                    N3b = class {
                        static F(a) {
                            O(a, {
                                F7: OZ.ref
                            })
                        }
                        constructor() {
                            this.F7 = (N3b.F(this), void 0)
                        }
                    };
                var WY = class {
                        static of (a, b, c) {
                            return new WY(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.dba = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    f7b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = e7b;
                            this.tZa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    XZ = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.reb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    h7b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = g7b;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    g4b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.MZa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var l4b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                __c.i7b = i4b(4);
                __c.YZ = i4b(6);
                __c.j7b = j4b(5);
                __c.ZZ = j4b(0);
                var k7b = class {},
                    y4b = class extends k7b {
                        jha(a) {
                            return new y4b(a(this.value))
                        }
                        Gla(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    z4b = class extends k7b {
                        jha(a, b) {
                            return new z4b(b(this.value))
                        }
                        Gla(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var aZ = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    $Z = class extends aZ {
                        Ena(a) {
                            return this === a || a.Jta(b => this.OZ(b))
                        }
                        PM() {
                            throw Error(`${this} is not iterable`);
                        }
                        Bpa(a) {
                            const b = this.propTypes ? ? (this.propTypes = this.N$());
                            if (!b) throw Error(`${this} is not navigable"`);
                            if (!b.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return b[a]
                        }
                        N$() {
                            throw Error(`${this} is not navigable`);
                        }
                        Ola(a) {
                            a(this)
                        }
                        Jta(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes = void 0
                        }
                    },
                    a_ = class extends $Z {
                        OZ(a) {
                            return a instanceof
                            a_ && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    b_ = class extends $Z {
                        OZ(a) {
                            return a instanceof b_ && this.lm === a.lm
                        }
                        toString() {
                            return this.lm.name
                        }
                        constructor(a) {
                            super();
                            this.lm = a
                        }
                    },
                    c_ = class extends $Z {
                        OZ(a) {
                            return a instanceof c_ && this.lm === a.lm && $Y(this.arg, a.arg)
                        }
                        toString() {
                            return `${this.lm}<${this.arg}>`
                        }
                        constructor(a, b) {
                            super();
                            this.lm = a;
                            this.arg = b
                        }
                    },
                    l7b = class extends c_ {
                        PM() {
                            return this.arg
                        }
                        N$() {
                            const a = this.arg;
                            return {
                                size: jZ.number,
                                empty: jZ.Hc,
                                get first() {
                                    return jZ.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array",
                                a)
                        }
                    },
                    m7b = class extends c_ {
                        PM() {
                            return this.arg
                        }
                        N$() {
                            const a = this.arg;
                            return {
                                size: jZ.number,
                                empty: jZ.Hc,
                                get first() {
                                    return jZ.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    n7b = class extends $Z {
                        OZ(a) {
                            return a instanceof n7b && $Y(this.key, a.key) && $Y(this.value, a.value)
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
                    o7b = class extends $Z {
                        OZ(a) {
                            return a instanceof o7b ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && $Y(this.fields[b],
                                c)) : !1
                        }
                        N$() {
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
                    d_ = class extends aZ {
                        Ena(a) {
                            return this === a || this.Fg.every(b => b.Ena(a))
                        }
                        PM() {
                            return jZ.union(...this.Fg.map(a => a.PM()))
                        }
                        Bpa(a) {
                            return jZ.union(...this.Fg.map(b => b.Bpa(a)))
                        }
                        Ola(a) {
                            this.Fg.forEach(b => b.Ola(a))
                        }
                        Jta(a) {
                            return this.Fg.some(b => b.Jta(a))
                        }
                        toString() {
                            return this.Fg.length ? this.Fg.map(a => a.toString()).join(" | ") :
                                "never"
                        }
                        constructor(a) {
                            super();
                            this.Fg = a;
                            this.kind = "disjunction";
                            v(a.length !== 1)
                        }
                    },
                    e_ = new d_([]),
                    p7b = new a_("string"),
                    q7b = new a_("number"),
                    r7b = new a_("boolean"),
                    s7b = new a_("undefined"),
                    t7b = new d_([p7b, q7b, r7b]),
                    u7b = class {
                        get never() {
                            return e_
                        }
                        get string() {
                            return p7b
                        }
                        get number() {
                            return q7b
                        }
                        get Hc() {
                            return r7b
                        }
                        get undefined() {
                            return s7b
                        }
                        get primitive() {
                            return t7b
                        }
                        optional(a) {
                            return jZ.union(a, jZ.undefined)
                        }
                        array(a) {
                            return new l7b(a)
                        }
                        set(a) {
                            return new m7b(a)
                        }
                        CQ(a) {
                            return new d_([new l7b(a), new m7b(a)])
                        }
                        map(a,
                            b) {
                            return new n7b(a, b)
                        }
                        L(a) {
                            return new o7b({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return e_;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) k4b(d).Ola(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return e_;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return $Y(d, e) ? e : $Y(e, d) ? d : new d_(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => $Y(d, e)) || (c.forEach(e => $Y(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new d_([...c])
                        }
                        constructor() {
                            this.optional = bZ(this.optional);
                            this.array =
                                bZ(this.array);
                            this.set = bZ(this.set);
                            this.CQ = bZ(this.CQ)
                        }
                    },
                    v7b = class extends u7b {
                        instance(a) {
                            return new b_(a)
                        }
                    },
                    jZ = new v7b,
                    w7b = class extends u7b {
                        instance(a) {
                            return new b_(x(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var x7b, y7b, f_ = Symbol("value"),
                    g_ = class {
                        get props() {
                            return this.zYa ? ? (this.zYa = this.Uga())
                        }
                    },
                    z7b = class {
                        get size() {
                            return this[f_].length
                        }
                        get empty() {
                            return this[f_].length === 0
                        }
                        get first() {
                            return this[f_][0]
                        }
                        constructor(a) {
                            this[f_] = a
                        }
                    };
                x7b = Symbol.iterator;
                var A7b = class extends g_ {
                        Uga() {
                            return new z7b(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[x7b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,eZ).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    B7b = class {
                        get size() {
                            return this[f_].size
                        }
                        get empty() {
                            return this[f_].size === 0
                        }
                        get first() {
                            return this[f_][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[f_] = a
                        }
                    };
                y7b = Symbol.iterator;
                var C7b = class extends g_ {
                        Uga() {
                            return new B7b(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[y7b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,eZ).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    D7b = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${eZ(a)}]: ${eZ(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    E7b = class extends g_ {
                        Uga() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${eZ(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    F7b = class {
                        toString() {
                            return `[instance ${this.lm.name}]`
                        }
                        constructor(a, b) {
                            this.lm = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    G7b = class {
                        array(a) {
                            return new A7b(a)
                        }
                        set(a) {
                            return new C7b(a)
                        }
                        map(a) {
                            return new D7b(new Map(a))
                        }
                        L(a) {
                            return new E7b({ ...a
                            })
                        }
                    },
                    H7b = class extends G7b {
                        instance(a, b) {
                            return new F7b(a, b)
                        }
                        stringify(a) {
                            return eZ(a)
                        }
                        constructor() {
                            super();
                            this.Tg = dZ
                        }
                    },
                    nZ = new H7b,
                    I7b = class extends G7b {
                        instance(a, b) {
                            a = x(this.classes[a]);
                            return new F7b(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var x4b = {
                        [0]: XY(jZ.number, jZ.number, a => -a),
                        [1]: XY(jZ.string, jZ.number, a => a.length),
                        [2]: XY(jZ.Hc, jZ.Hc, a => !a),
                        [3]: YY(jZ.number, jZ.number, jZ.number, (a, b) => a + b),
                        [4]: YY(jZ.number, jZ.number, jZ.number, (a, b) => a - b),
                        [5]: YY(jZ.number, jZ.number, jZ.number, (a, b) => a * b),
                        [6]: YY(jZ.number, jZ.number, jZ.number, (a, b) => a / b),
                        [7]: YY(jZ.number, jZ.number, jZ.number, (a, b) => a % b),
                        [8]: YY(jZ.string, jZ.string, jZ.string, (a, b) => a + b),
                        [9]: YY(jZ.number, jZ.number, jZ.Hc, (a, b) => a === b),
                        [10]: YY(jZ.number, jZ.number, jZ.Hc, (a, b) => a !== b),
                        [11]: YY(jZ.number,
                            jZ.number, jZ.Hc, (a, b) => a < b),
                        [12]: YY(jZ.number, jZ.number, jZ.Hc, (a, b) => a <= b),
                        [13]: YY(jZ.number, jZ.number, jZ.Hc, (a, b) => a > b),
                        [14]: YY(jZ.number, jZ.number, jZ.Hc, (a, b) => a >= b),
                        [15]: YY(jZ.Hc, jZ.Hc, jZ.Hc, (a, b) => a && b),
                        [16]: YY(jZ.Hc, jZ.Hc, jZ.Hc, (a, b) => a || b)
                    },
                    C4b = {
                        [2]: new XZ(jZ.number, jZ.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new XZ(jZ.number, jZ.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new XZ(jZ.number, jZ.number, a => Math.max(...a)),
                        [5]: new XZ(jZ.number, jZ.number, a => Math.min(...a)),
                        [6]: new XZ(jZ.string, jZ.string, a =>
                            a.join(""))
                    },
                    J7b = a => nZ.array(a),
                    K7b = a => nZ.set(a),
                    A4b = {
                        [0]: a => new XZ(a, jZ.array(a), J7b),
                        [1]: a => new XZ(a, jZ.set(a), K7b)
                    },
                    g7b = a => nZ.map(a),
                    o4b = {
                        [0]: (a, b) => new h7b(a, b, jZ.map(a, b))
                    },
                    e7b = a => nZ.L(a),
                    F4b = {
                        [0]: a => new f7b(a, jZ.L(a))
                    },
                    L7b = (a, b) => nZ.array(b.map(c => c())),
                    M7b = (a, b) => nZ.array(b.flatMap(c => c().items)),
                    N7b = (a, b) => nZ.array(a.filter((c, d) => b[d]()).map(c => c())),
                    O7b = (a, b) => b.some(c => c()),
                    P7b = (a, b) => b.every(c => c()),
                    Q7b = (a, b) => a.find((c, d) => b[d]()) ? .(),
                    q4b = {
                        [0]: (a, b) => b.map(c => ZY(a, c, jZ.array(c), L7b)),
                        [1]: (a, b) => b.PM().map(c => ZY(a, jZ.array(c), jZ.array(c), M7b)),
                        [2]: a => ZY(a, jZ.Hc, jZ.array(a), N7b),
                        [3]: a => ZY(a, jZ.Hc, jZ.Hc, O7b),
                        [4]: a => ZY(a, jZ.Hc, jZ.Hc, P7b),
                        [5]: a => ZY(a, jZ.Hc, jZ.optional(a), Q7b)
                    };
                var gZ = class {
                    define(a, b) {
                        return new gZ(new Map([
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
                var S7b = (a, b, c) => {
                        const d = fZ.create(b.mG),
                            e = new R7b(a);
                        return {
                            compile: f => {
                                const g = u4b(e, d, f).as(c);
                                return h => {
                                    h = new gZ(new Map(b.decode(h).hsa));
                                    return g(h)
                                }
                            }
                        }
                    },
                    fZ = class {
                        static create(a) {
                            return new fZ(new gZ(new Map(a)), new gZ(new Map))
                        }
                        constructor(a = new gZ(new Map), b = new gZ(new Map)) {
                            this.vars = a;
                            this.DY = b
                        }
                    },
                    R7b = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    lZ = class {
                        static of (a, b) {
                            return new lZ(a, b)
                        }
                        as(a) {
                            if (!$Y(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new lZ(this.type, b => {
                                const c = rZ(a(b), {
                                    equals: nZ.Tg
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
                    Q4b = class {
                        as(a, b) {
                            const c = this.dba,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!$Y(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!$Y(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.dba = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var C5b = class {
                        add(a) {
                            a = a(T7b, this.types);
                            return new C5b({ ...this.classes,
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
                                            return b.Hc;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new y(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.oza));
                                        case "set":
                                            return b.set(this.evaluate(a.oza));
                                        default:
                                            throw new y(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.oza);
                                            a = this.evaluate(a.Aqb);
                                            if (!$Y(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new y(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.L(Ee(a.args, c => this.evaluate(c)));
                                default:
                                    throw new y(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new w7b(this.classes);
                            this.values = new I7b(this.classes)
                        }
                    },
                    T7b = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.jcb = new WY([jZ.L(b)],
                                jZ.instance(this), d => nZ.instance(this, c(d.fields)))
                        }
                    };
                var U7b;
                U7b = Symbol.iterator;
                var R4b = class {
                    static F(a) {
                        O(a, {
                            x_: rZ
                        })
                    }
                    get x_() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Hf(b), b));
                        return a
                    }
                    Zr(a) {
                        return x(this.x_.get(a))
                    }
                    ZS(a) {
                        return a != null ? this.Hf(a) : void 0
                    }
                    get size() {
                        return this.base.size
                    }
                    get(a) {
                        a = this.base.get(a);
                        return this.ZS(a)
                    }
                    has(a) {
                        return this.base.has(a)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Hf(b), c))
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Hf(b), c))
                    }
                    set(a, b) {
                        return this.Hf(this.base.set(a, this.SD(b)))
                    }
                    every(a) {
                        return this.base.every((b, c) => a(this.Hf(b),
                            c))
                    }
                    delete(a) {
                        this.base.delete(a)
                    }
                    entries() {
                        return T4b(this.base.entries(), ([a, b]) => [a, this.Hf(b)])
                    }
                    keys() {
                        return this.base.keys()
                    }
                    values() {
                        return T4b(this.base.values(), this.Hf)
                    }[U7b]() {
                        return this.jh()[Symbol.iterator]()
                    }
                    jh() {
                        return mf(this.base.jh(), this.Hf)
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.SD = b;
                        this.Hf = c;
                        R4b.F(this)
                    }
                };
                var V7b;
                V7b = Symbol.iterator;
                var U4b = class {
                    static F(a) {
                        O(a, {
                            x_: rZ
                        })
                    }
                    get x_() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Hf(b), b));
                        return a
                    }
                    Zr(a) {
                        return x(this.x_.get(a))
                    }
                    ZS(a) {
                        return a != null ? this.Hf(a) : void 0
                    }
                    get empty() {
                        return this.base.empty
                    }
                    count() {
                        return this.base.count()
                    }
                    toArray() {
                        return this.base.toArray().map(this.Hf)
                    }
                    jh() {
                        return mf(this.base.jh(), this.Hf)
                    }[V7b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    first(a) {
                        return this.ZS(this.base.first(a && (b => a(this.Hf(b)))))
                    }
                    last(a) {
                        return this.ZS(this.base.last(a && (b => a(this.Hf(b)))))
                    }
                    next(a,
                        b) {
                        return this.ZS(this.base.next(this.Zr(a), b && (c => b(this.Hf(c)))))
                    }
                    previous(a, b) {
                        return this.ZS(this.base.previous(this.Zr(a), b && (c => b(this.Hf(c)))))
                    }
                    ue(a, b) {
                        return this.base.ue(this.Zr(a), this.Zr(b))
                    }
                    gp(a) {
                        return this.base.gp(this.Zr(a))
                    }
                    has(a) {
                        return this.base.has(this.Zr(a))
                    }
                    set(a, b) {
                        return this.Hf(this.base.set(a, this.SD(b)))
                    }
                    replace(a, b) {
                        return this.Hf(this.base.replace(this.Zr(a), this.SD(b)))
                    }
                    append(a) {
                        return this.Hf(this.base.append(this.SD(a)))
                    }
                    prepend(a) {
                        return this.Hf(this.base.prepend(this.SD(a)))
                    }
                    yD(a,
                        b) {
                        return this.Hf(this.base.yD(a && this.Zr(a), this.SD(b)))
                    }
                    insertBefore(a, b) {
                        return this.Hf(this.base.insertBefore(a && this.Zr(a), this.SD(b)))
                    }
                    qA(a, b) {
                        return this.base.qA(a && this.Zr(a), b.map(this.SD)).map(this.Hf)
                    }
                    delete(a) {
                        this.base.delete(this.Zr(a))
                    }
                    Pz(a) {
                        this.base.Pz(a && (b => a(this.Hf(b))))
                    }
                    moveBefore(a, b) {
                        this.base.moveBefore(a && this.Zr(a), this.Zr(b))
                    }
                    Yu(a) {
                        return new __c.lH(this, a)
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Hf(b), c))
                    }
                    flatMap(a) {
                        return this.base.flatMap((b, c) => a(this.Hf(b), c))
                    }
                    filter(a) {
                        return this.base.filter((b,
                            c) => a(this.Hf(b), c)).map(this.Hf)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Hf(b), c))
                    }
                    reduce(a, b) {
                        return this.base.reduce((c, d) => a(c, this.Hf(d)), b)
                    }
                    some(a) {
                        return this.base.some(b => a(this.Hf(b)))
                    }
                    every(a) {
                        return this.base.every(b => a(this.Hf(b)))
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.SD = b;
                        this.Hf = c;
                        U4b.F(this)
                    }
                };
                var h_ = class {
                        QG(a) {
                            return new W7b(this, a)
                        }
                        uY(a) {
                            return new X7b(this, a)
                        }
                        VL(a) {
                            return new Y7b(this, a)
                        }
                        toString() {
                            return this.s ? ? (this.s = this.y_())
                        }
                    },
                    h5b = class extends h_ {
                        QG(a) {
                            return new Z7b(a)
                        }
                        uY() {
                            throw Error();
                        }
                        VL() {
                            throw Error();
                        }
                        y_() {
                            return "(global)"
                        }
                    },
                    Z7b = class extends h_ {
                        y_() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    W7b = class extends h_ {
                        y_() {
                            return `${this.parent}.${this.name}`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.name = b
                        }
                    },
                    X7b = class extends h_ {
                        y_() {
                            return `${this.parent}["${this.key}"]`
                        }
                        constructor(a,
                            b) {
                            super();
                            this.parent = a;
                            this.key = b
                        }
                    },
                    Y7b = class extends h_ {
                        y_() {
                            return `${this.parent}[${this.index}]`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.index = b
                        }
                    },
                    g5b = class {
                        error(a, b) {
                            return Error(`widget '${this.qnb}': schema error on key '${a}': ${b}`)
                        }
                        constructor(a) {
                            this.qnb = a
                        }
                    },
                    k5b = {
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
                    b5b = new Set(["string", "boolean", "int32"]),
                    l5b = {
                        font: "font",
                        media: "media",
                        video: "video",
                        audio: "audio",
                        embed: "embed",
                        scene: "scene",
                        blueprint: "blueprint"
                    };
                var $7b;
                $7b = Symbol.iterator;
                var a8b = class {
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
                        return this.jh().entries()
                    }
                    keys() {
                        return this.cells.keys()
                    }* values() {
                        for (const a of this.cells.values()) yield a.get()
                    }
                    jh() {
                        const a = new Map;
                        for (const [b, c] of this.cells.entries()) a.set(b, c.get());
                        return a
                    }[$7b]() {
                        return this.jh()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = new Map(a)
                    }
                };
                var b8b;
                b8b = Symbol.iterator;
                var m5b = class {
                    get Fc() {
                        return this.qib.get()
                    }
                    get size() {
                        return this.Fc.size
                    }
                    get(a) {
                        return this.Fc.get(a)
                    }
                    has(a) {
                        return this.Fc.has(a)
                    }
                    forEach(a) {
                        this.Fc.forEach(a)
                    }
                    map(a) {
                        return this.Fc.map(a)
                    }
                    every(a) {
                        return this.Fc.every(a)
                    }
                    entries() {
                        return this.Fc.entries()
                    }
                    keys() {
                        return this.Fc.keys()
                    }
                    values() {
                        return this.Fc.values()
                    }
                    jh() {
                        return this.Fc.jh()
                    }[b8b]() {
                        return this.Fc[Symbol.iterator]()
                    }
                    set(a, b) {
                        return this.Fc.set(a, b)
                    }
                    delete(a) {
                        return this.Fc.delete(a)
                    }
                    constructor(a) {
                        this.qib = a
                    }
                };
                var c8b;
                c8b = Symbol.iterator;
                var d8b = class {
                    get size() {
                        return this.Fc.size
                    }
                    get(a) {
                        return this.Fc.get(a)
                    }
                    has(a) {
                        return this.Fc.has(a)
                    }
                    forEach(a) {
                        this.Fc.forEach(a)
                    }
                    map(a) {
                        return this.Fc.map(a)
                    }
                    every(a) {
                        return this.Fc.every(a)
                    }
                    entries() {
                        return this.Fc.entries()
                    }
                    keys() {
                        return this.Fc.keys()
                    }
                    values() {
                        return this.Fc.values()
                    }
                    jh() {
                        return this.Fc.jh()
                    }[c8b]() {
                        return this.Fc[Symbol.iterator]()
                    }
                    set() {
                        return this.tu()
                    }
                    delete() {
                        return this.tu()
                    }
                    tu() {
                        throw Error("dict not modifiable");
                    }
                    constructor(a) {
                        this.Fc = a
                    }
                };
                var e8b, f8b = class {
                    get value() {
                        return this.box.get()
                    }
                    constructor(a, b) {
                        this.id = a;
                        this.box = b
                    }
                };
                e8b = Symbol.iterator;
                var zZ = class {
                    static F(a) {
                        O(a, {
                            hp: rZ,
                            ML: rZ,
                            SM: rZ
                        })
                    }
                    get hp() {
                        const a = new Map;
                        this.cells.forEach((b, c) => a.set(b.value, c));
                        return a
                    }
                    Ij(a) {
                        return x(this.hp.get(a), "ref not found")
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
                    jh() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get ML() {
                        return this.cells[0] ? .value
                    }
                    get SM() {
                        return this.cells[this.cells.length - 1] ? .value
                    }
                    first(a) {
                        return a ? this.cells.find(b => a(b.value)) ? .value : this.ML
                    }
                    last(a) {
                        if (!a) return this.SM;
                        const b = this.cells;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.value)) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.cells;
                        for (a = this.Ij(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    previous(a, b) {
                        const c = this.cells;
                        for (a = this.Ij(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    ue(a, b) {
                        a = this.hp.get(a);
                        b = this.hp.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    gp(a) {
                        return this.cells[this.Ij(a)].id
                    }
                    has(a) {
                        return this.hp.has(a)
                    }
                    Yu(a) {
                        return new __c.lH(this,
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
                    }[e8b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = (zZ.F(this), void 0);
                        this.cells =
                            a.map((b, c) => new f8b(String(c), b))
                    }
                };
                var U5b, t5b, tZ, g8b, h8b;
                __c.i_ = class {
                    map(a, b) {
                        const c = this.get,
                            d = this.set;
                        return new __c.i_(() => a(c()), e => d(b(e)))
                    }
                    project({
                        get: a,
                        set: b
                    }) {
                        const c = this.get,
                            d = this.set;
                        return new __c.i_(() => a(c()), e => d(b(c(), e)))
                    }
                    constructor(a, b) {
                        this.get = a;
                        this.set = b
                    }
                };
                U5b = class {
                    read(a) {
                        return sZ(a) ? a() : a
                    }
                    computed(a) {
                        const b = rZ(a);
                        return () => b.get()
                    }
                    map(a, b) {
                        return sZ(a) ? () => b(a()) : b(a)
                    }
                    box(a) {
                        return new p6b(sZ(a) ? new o6b(rZ(a)) : new n6b(a))
                    }
                    list(a) {
                        const b = this.map(a, c => new __c.Uib(new zZ(c.map(d => sZ(d) ? rZ(d) : o5b(d)))));
                        return sZ(b) ? __c.Ei(() => b()) : b
                    }
                    Fc(a) {
                        const b = this.map(a, c => {
                            c = new Map(Object.entries(c).map(([d, e]) => {
                                e = sZ(e) ? rZ(e) : o5b(e);
                                return [d, e]
                            }));
                            return new d8b(new a8b(c))
                        });
                        return sZ(b) ? n5b(() => b()) : b
                    }
                    constructor() {
                        this.classes = B5b()
                    }
                };
                t5b = a => {
                    const b = a.lm,
                        c = a.nd,
                        d = c.P,
                        e = c.attributes;
                    p5b(a.args, d, e);
                    return {
                        create: function(f, g) {
                            const h = {};
                            var k;
                            const l = g ? .P;
                            g = g ? .attributes;
                            if (l)
                                for (const [m, n] of Object.entries(l)) v(m in d, "unknown override: '{}'", m), sZ(n) ? (k || (k = {}))[m] = n : h[m] = g8b(n);
                            if (g)
                                for (const [m, n] of Object.entries(g)) v(m in e, "unknown override: '{}'", m), h[m] = n instanceof __c.i_ ? n : sZ(n) ? {
                                    enumerable: !0,
                                    get: n,
                                    set: tZ
                                } : h8b(n);
                            if (k) return q5b(k, s5b(m => {
                                const n = b(f);
                                Object.defineProperties(n, { ...h,
                                    ...Ee(m, g8b)
                                });
                                return n
                            }));
                            k = b(f);
                            Object.defineProperties(k, h);
                            return k
                        }
                    }
                };
                tZ = () => {};
                g8b = a => ({
                    enumerable: !0,
                    writable: !1,
                    value: a
                });
                h8b = a => ({
                    enumerable: !0,
                    get: () => a,
                    set: tZ
                });
                var uZ = {
                    top: void 0,
                    left: void 0,
                    width: void 0,
                    height: void 0,
                    rotation: void 0,
                    locked: void 0,
                    og: void 0
                };
                var j_ = new Map,
                    k_ = [],
                    wZ = Object.freeze({
                        Mk: void 0,
                        image: void 0,
                        video: void 0,
                        Xa: void 0,
                        color: void 0,
                        Va: 0,
                        locked: !0,
                        Xf: !0,
                        $j: void 0,
                        Ic: void 0,
                        J: void 0,
                        transition: void 0,
                        flipX: !1,
                        flipY: !1
                    }),
                    w5b = Object.freeze({
                        fill: wZ,
                        stroke: void 0,
                        S: 0
                    }),
                    v5b = Object.freeze({
                        weight: 0,
                        color: "#000000",
                        fill: wZ,
                        zc: k_,
                        je: !1
                    }),
                    l_ = Object.freeze({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        rotation: 0,
                        Va: 0,
                        Ah: void 0,
                        ia: void 0,
                        J: void 0,
                        transition: void 0,
                        la: k_,
                        Ob: k_,
                        animation: void 0,
                        $e: void 0,
                        link: void 0,
                        locked: !0,
                        og: void 0,
                        Xf: !0,
                        $j: void 0,
                        Qa: void 0,
                        lr: void 0,
                        Te: k_,
                        eB: j_,
                        rB: j_,
                        anchor: void 0,
                        qg: j_
                    }),
                    xZ = Object.freeze({ ...l_,
                        type: "rect",
                        fill: wZ,
                        stroke: void 0,
                        S: k_
                    }),
                    yZ = Object.freeze({ ...l_,
                        type: "shape",
                        slice: void 0,
                        Yh: void 0,
                        ib: k_,
                        resizeMode: void 0
                    }),
                    x5b = Object.freeze({ ...l_,
                        type: "text",
                        text: Object.freeze({
                            stream: __c.Qi.Lz("\n"),
                            Fb: j_
                        }),
                        Ea: Object.freeze({
                            Ra: []
                        }),
                        ke: void 0,
                        placeholder: void 0,
                        nf: 1,
                        writingMode: void 0,
                        G: void 0,
                        R: void 0,
                        Xm: !1,
                        Nw: void 0,
                        Mg: void 0,
                        Ic: void 0
                    }),
                    y5b = Object.freeze({ ...l_,
                        type: "embed"
                    }),
                    z5b = Object.freeze({ ...l_,
                        type: "grid",
                        cells: j_,
                        layout: Object.freeze({
                            template: k_,
                            Qw: k_,
                            Lj: k_,
                            zr: 0,
                            rs: 0
                        })
                    }),
                    A5b = Object.freeze({
                        fill: wZ,
                        stroke: void 0,
                        S: k_
                    });
                var S5b = class {
                        mX(a, b) {
                            const c = a.dc;
                            w(c.type !== "body", "Unexpected body context.");
                            switch (c.type) {
                                case "fixed-page":
                                    return {
                                        page: this.Lk.yGa(c),
                                        Z: new m_(a),
                                        $h: a.D.id,
                                        ye: b
                                    };
                                case "concatenated-fixed-page":
                                    return {
                                        page: this.Lk.pGa(c),
                                        Z: new m_(a),
                                        $h: a.D.id,
                                        ye: b
                                    };
                                case "controlled-page":
                                    return {
                                        page: this.Lk.qGa(c),
                                        Z: new m_(a),
                                        $h: a.D.id,
                                        ye: b
                                    };
                                case "responsive-page":
                                    return {
                                        page: this.Lk.OGa(c),
                                        Z: new m_(a),
                                        $h: a.D.id,
                                        ye: b
                                    };
                                default:
                                    throw new y(c);
                            }
                        }
                        constructor(a, b) {
                            this.Zba = a;
                            v(b.Wf === "fixed", "Responsive documents are not supported in widget rendering.");
                            this.wb = new __c.Pt(b);
                            this.Lk = new i8b(this.Zba, this.wb)
                        }
                    },
                    m_ = class {
                        get width() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.Fe ? .width || 0;
                                case "controlled-page":
                                    return 0;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.G;
                                default:
                                    throw new y(this.container);
                            }
                        }
                        get height() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.Fe ? .height || 0;
                                case "controlled-page":
                                    return 0;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.R;
                                default:
                                    throw new y(this.container);
                            }
                        }
                        constructor(a) {
                            this.container = a
                        }
                    },
                    n_ = class {
                        getIndex() {
                            return this.dS(this.page)
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
                        get EIa() {
                            return this.page.D.ck
                        }
                        constructor(a, b) {
                            this.page = a;
                            this.dS = b
                        }
                    },
                    j8b = class extends n_ {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "fixed"
                        }
                    },
                    k8b = class extends n_ {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "concatenated-fixed"
                        }
                    },
                    l8b = class extends n_ {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "controlled"
                        }
                    },
                    m8b = class extends n_ {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "responsive"
                        }
                    },
                    n8b = class {
                        get id() {
                            return this.Zba ? .id
                        }
                        get extension() {
                            return this.Zba ? .extension
                        }
                        get language() {
                            return this.wb.D.language
                        }
                        constructor(a, b) {
                            this.Zba = a;
                            this.wb = b
                        }
                    },
                    i8b = class extends n8b {
                        static F(a) {
                            O(a, {
                                oa: rZ({
                                    equals: v6b.shallow
                                }),
                                RLa: rZ({
                                    equals: v6b.shallow
                                })
                            })
                        }
                        get oa() {
                            return this.wb.D.oa.map(a =>
                                this.R6a(this.wb.rh(a)))
                        }
                        get RLa() {
                            return this.wb.D.oa.toArray()
                        }
                        constructor(a, b) {
                            super(a, b);
                            this.LC = a;
                            this.wb = b;
                            this.type = (i8b.F(this), "fixed");
                            this.yGa = IZ(c => new j8b(c, this.dS, this));
                            this.pGa = IZ(c => new k8b(c, this.dS, this));
                            this.qGa = IZ(c => new l8b(c, this.dS, this));
                            this.OGa = IZ(c => new m8b(c, this.dS, this));
                            this.R6a = IZ(c => {
                                switch (c.type) {
                                    case "fixed-page":
                                        return this.yGa(c);
                                    case "concatenated-fixed-page":
                                        return this.pGa(c);
                                    case "controlled-page":
                                        return this.qGa(c);
                                    case "responsive-page":
                                        return this.OGa(c);
                                    default:
                                        throw new y(c);
                                }
                            });
                            this.dS = IZ(c => {
                                c = this.wb.D.oa.has(c.D) ? c.D : void 0;
                                return c != null ? this.RLa.indexOf(c) : -1
                            })
                        }
                    };
                var o8b = class {
                    constructor(a) {
                        this.nsa = a;
                        this.nCa = new Map
                    }
                };
                var p8b = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    jh() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        AZ()
                    },
                    previous() {
                        AZ()
                    },
                    ue() {
                        AZ()
                    },
                    gp() {
                        AZ()
                    },
                    has() {
                        return !1
                    },
                    Yu() {
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
                var P5b = class {
                    add(a, b) {
                        let c = this.store.get(a);
                        c || (c = OZ.set(void 0, {
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
                        this.store = new __c.jC
                    }
                };
                var H5b = class {
                    Zb(a) {
                        let b = this.store.get(a);
                        b == null && (b = this.V1a(), this.store.set(a, b));
                        return b
                    }
                    constructor(a) {
                        this.V1a = a;
                        this.store = new WeakMap
                    }
                };
                var U3b = new Set,
                    V3b = {
                        Qu: () => ({
                            Ia: p8b
                        })
                    },
                    T5b = class {
                        static F(a) {
                            O(a, {
                                XN: OZ.shallow
                            })
                        }
                        lY(a) {
                            return this.XN.get(a) ? .D
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.wb = a;
                            this.nsa = b;
                            this.LU = c;
                            this.Wia = d;
                            this.N = e;
                            this.Vea = f;
                            this.Vd = g;
                            this.J3a = h;
                            this.XN = (T5b.F(this), new Map)
                        }
                    },
                    M5b = (a, b, c, d) => ({ ...a,
                        vP: e => pY(a.vP, { ...e,
                            K_a: d || !1
                        }),
                        GF: e => pY(a.GF, { ...e,
                            ye: c,
                            model: b
                        })
                    }),
                    N5b = (a, b) => ({ ...a,
                        Pi: c => pY(a.Pi, { ...c,
                            scale: b || 1
                        })
                    });
                var q8b = class {
                    static F(a) {
                        O(a, {
                            E1: OZ.shallow
                        })
                    }
                    constructor(a) {
                        this.kCa = a;
                        this.E1 = (q8b.F(this), new Map)
                    }
                };
                var r8b = class extends s6b {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            lfb: c,
                            Caa: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.qYa;
                            return f
                        }, {}));
                        return pY(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.Caa && b6b(this)
                    }
                    componentDidUpdate() {
                        this.props.Caa && b6b(this)
                    }
                    componentWillUnmount() {
                        this.WJ && (this.WJ(), this.WJ = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.pga = this.WJ = null;
                        this.qYa = b => {
                            this.pga = b.nativeEvent
                        };
                        this.hya = b => {
                            const c = this.props.Caa,
                                d = this.pga === b;
                            c && !d &&
                                c(b);
                            this.pga = null
                        }
                    }
                };
                var e6b = a => pY(r8b, {
                    lfb: ["onMouseDown", "onTouchStart"],
                    m3a: ["mousedown", "touchstart"],
                    Caa: a.GMa,
                    children: a.children
                });
                var c6b = class {
                        static F(a) {
                            O(a, {
                                Si: OZ.ref
                            })
                        }
                        constructor() {
                            this.Si = (c6b.F(this), !0)
                        }
                    },
                    d6b = class {
                        static F(a) {
                            O(a, {
                                onDoubleClick: PZ.bound,
                                onTouchEnd: PZ.bound,
                                reset: PZ.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Si = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.EO ? (window.clearTimeout(this.EO), this.EO = void 0, this.store.Si = !1) : this.EO = window.setTimeout(cY.wrap(() => this.EO = void 0), 300))
                        }
                        reset() {
                            this.store.Si = !0
                        }
                        sQ() {
                            this.EO && window.clearTimeout(this.EO)
                        }
                        constructor(a) {
                            this.store = a;
                            this.EO = (d6b.F(this), void 0)
                        }
                    };
                __c.GUa = {
                    i9a: function({
                        document: a,
                        Lk: b,
                        xn: c,
                        Ov: d,
                        wz: e,
                        oC: f,
                        Ph: g,
                        vka: h,
                        Ga: k,
                        wv: l,
                        GF: m,
                        cf: n,
                        mh: p,
                        ye: q,
                        tnb: r,
                        lQa: t,
                        ePa: u,
                        P8: z,
                        tVa: A
                    }) {
                        const B = g.nH,
                            D = g.Wu;
                        var F = g.N;
                        const I = g.Sh,
                            K = g.Wd,
                            L = g.VX,
                            M = g.Kc;
                        var R = h.Ir;
                        const {
                            Bka: S = !1,
                            Mka: W = !1,
                            Gka: X = !1
                        } = r ? ? {}, {
                            Ol: fa,
                            Wia: na
                        } = {
                            Ol: E5b(),
                            Wia: S7b
                        };
                        r = new q8b(i5b(fa));
                        const {
                            xwa: ya,
                            Wea: Aa,
                            bja: wa,
                            LU: va
                        } = {
                            xwa: r,
                            Wea: r,
                            bja: na,
                            LU: fa
                        };
                        r = L3b({
                            xwa: ya,
                            Bka: S,
                            Mka: W,
                            Gka: X
                        });
                        var Ga = new o8b(Aa);
                        const {
                            vwa: ia,
                            ZVa: Ba
                        } = {
                            vwa: Ga,
                            ZVa: Ga
                        };
                        Ga = S3b({
                            ywa: r,
                            vwa: ia
                        });
                        F = F.Gk("widget");
                        R = f6b({
                            Ir: R,
                            Kc: M
                        });
                        const ta = j6b();
                        m = m || l6b();
                        n = k6b({
                            cf: n
                        });
                        p = g6b({
                            pi: p
                        });
                        const Ja = i6b({
                            Ga: k,
                            P8: z
                        });
                        z = m6b({
                            Ga: k,
                            P8: z
                        });
                        const {
                            R3: sb,
                            vu: ub,
                            Vea: Ta,
                            expr: Ra
                        } = V5b({
                            N: F,
                            Wea: Aa,
                            rnb: {
                                vP: R,
                                AXa: ta,
                                GF: m,
                                Pi: n,
                                jl: p,
                                n4: Ja,
                                Sfa: z
                            },
                            onb: {
                                Pi: Z5b()
                            },
                            bja: wa,
                            LU: va,
                            LC: b,
                            wb: a,
                            lQa: t,
                            ePa: u
                        });
                        a = j3b({
                            ye: q,
                            Ir: h.Ir,
                            jx: h.jx,
                            Kc: g.Kc,
                            N: g.N.Gk("codelet"),
                            Wva: A
                        });
                        const {
                            XN: jc,
                            RFa: Zc
                        } = c4b({
                            ywa: r,
                            R3: sb,
                            Sh: I,
                            lG: {
                                N: F,
                                Wd: K,
                                wv: q === 30 ? l : void 0,
                                Kc: M,
                                expr: Ra
                            },
                            hh: {
                                Ov: d,
                                oC: f,
                                wz: e,
                                VX: L,
                                Ga: k,
                                xn: c,
                                FF: a,
                                nH: B,
                                Wu: D
                            }
                        });
                        return {
                            Wea: Aa,
                            vu: ub,
                            xJb: jc,
                            vJb: Ga,
                            ZVa: Ba,
                            Vea: Ta,
                            RFa: Zc
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
//# sourceMappingURL=sourcemaps/6da6f149dacbce82.js.map