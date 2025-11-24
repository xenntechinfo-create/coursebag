(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [70386], {

        /***/
        649000: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var Ea = __c.Ea;
                var x = __c.x;
                var S0 = __c.S0;
                var L = __c.L;
                var vb = __c.vb;
                var vc = __c.vc;
                var iD = __c.iD;
                var zr = __c.zr;
                var K = __c.K;
                var sg = __c.sg;
                var ag = __c.ag;
                var v = __c.v;
                var Zh = __c.Zh;
                var ah = __c.ah;
                var M2 = __c.M2;
                var A = __c.A;
                var Qp = __c.Qp;
                var Pp = __c.Pp;
                var HHc = function(a, b) {
                        return c => {
                            c = a(c);
                            if (typeof c === "boolean") return c ? Pp() : Qp(b);
                            switch (c.state) {
                                case "valid":
                                    return c;
                                case "invalid":
                                    return Qp(b);
                                default:
                                    throw new A(c);
                            }
                        }
                    },
                    IHc = function(a) {
                        return b => {
                            for (const e of a) {
                                var c = e,
                                    d = b;
                                c = (Array.isArray(c) ? HHc(...c) : c)(d);
                                c = typeof c === "boolean" ? c ? Pp() : Qp() : c.state === "invalid" && c.error == null ? Qp() : c;
                                if (c.state === "invalid") return c
                            }
                            return Pp()
                        }
                    },
                    JHc = function(a, b) {
                        switch (a.status) {
                            case 1:
                                return b.RO ? {
                                    status: 1,
                                    data: b.RO(a.data)
                                } : a;
                            case 2:
                                return a;
                            case 3:
                                return b.error ?
                                    M2(b.error(a.error)) : a;
                            default:
                                throw new A(a);
                        }
                    },
                    W6 = function(a, b) {
                        const c = b.RO,
                            d = b.loading,
                            e = b.error;
                        switch (a.status) {
                            case 1:
                                return c ? c(a.data) : b.default ? .();
                            case 2:
                                return d ? d() : b.default ? .();
                            case 3:
                                return e ? e(a.error) : b.default ? .();
                            default:
                                throw new A(a);
                        }
                    },
                    KHc = function(a) {
                        if (a.status === 1) return a.data
                    },
                    MHc = function(a) {
                        const b = LHc(a, a.document.language ? ? "en"),
                            c = X6(d => {
                                a.nW = d
                            });
                        Array.isArray(b) ? c(b) : b.then(Y6.wrap(c), Y6.wrap(() => c([])))
                    },
                    LHc = async function(a, b) {
                        const c = Z6()();
                        try {
                            try {
                                const {
                                    nW: d
                                } =
                                c.r(await c.s(a.pRb ? ? (a.pRb = __webpack_require__.me(434895).then(() => __c.NHc)))), e = JSON.parse(d);
                                return Object.values(e[b] ? ? {})
                            } catch {
                                return c.r(), []
                            }
                        } finally {
                            c.s()
                        }
                    },
                    OHc = function(a) {
                        const b = a.label,
                            c = a.Hga,
                            d = a.onClick,
                            e = a.Ur;
                        a = a.padding;
                        return $6("button", {
                            className: a7("zFy0ZQ", e === b7 && "YWvjNg", (e === c7 || e === d7) && "y1B_1A"),
                            style: {
                                "--Wa7Mmg": c.default,
                                "--mvXy3w": c.Qg,
                                "--www8Xw": c.active,
                                "--neon6Q": c.Um,
                                paddingInlineStart: a.ta,
                                paddingInlineEnd: a.Na,
                                paddingBlockStart: a.ma,
                                paddingBlockEnd: a.ya
                            },
                            disabled: e !==
                                b7,
                            onClick: d,
                            onTouchEnd: f => {
                                f.stopPropagation()
                            },
                            children: b
                        })
                    },
                    e7 = function(a, b, c) {
                        if (b) switch (b.EE) {
                            case "required":
                                return a.dBa();
                            case "unknown_option_id":
                                return a.kBa();
                            case "invalid_format":
                                return c.type === 5 ? a.ZAa() : a.YAa();
                            case "invalid_email":
                                return a.XAa();
                            case "out_of_bounds":
                                switch (c ? .type) {
                                    case 4:
                                        return b.params.exact != null ? a.hBa(b.params.exact) : b.params.KX != null ? a.jBa(b.params.KX) : a.iBa(b.params.Xva);
                                    case 1:
                                    case 2:
                                    case 3:
                                        return b.params.exact != null ? a.eBa(b.params.exact) : b.params.KX != null ?
                                            a.gBa(b.params.KX) : a.fBa(b.params.Xva);
                                    case 5:
                                        return b.params.exact != null ? a.aBa(b.params.exact) : b.params.KX != null ? a.cBa(b.params.KX) : a.bBa(b.params.Xva);
                                    default:
                                        throw new A(c);
                                }
                            default:
                                throw new A(b);
                        }
                    },
                    PHc = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new A(a);
                        }
                    },
                    QHc = function(a) {
                        a = { ...__c.GF,
                            stream: ah.Jb().attrs(a.stream.Gi(0)).mb(a.stream.Z.trim() + "*\n").build()
                        };
                        return Zh.create(a)
                    },
                    WHc = function(a) {
                        const b = a.MEa,
                            c = a.gridGap,
                            [d, e] = f7(0),
                            f = RHc.count(a.children),
                            g =
                            b * f + c * (f - 1),
                            h = SHc(null);
                        THc(() => {
                            h.current && e(h.current.offsetWidth)
                        }, []);
                        return $6(UHc, {
                            onResize: k => e(k.entry ? .width ? ? 0),
                            children: ({
                                measureRef: k
                            }) => $6("div", {
                                ref: VHc(k, h),
                                className: "lLyTrw",
                                style: {
                                    "--7BjzEw": `${b}px`,
                                    "--W5t64A": g > d ? 1 : f,
                                    "--CEwLjw": `${c}px`
                                },
                                children: a.children
                            })
                        })
                    },
                    g7 = function(a, b) {
                        return __c.Dr(__c.Cr(__c.wr(a), b))
                    },
                    XHc = function(a) {
                        const b = a.color;
                        a = a.Za;
                        return b ? b : a.ref ? a.ref.Ih[0].color : "#ffffff"
                    },
                    h7 = function(a, b) {
                        v(b.length > 0, "zero contrast candidates received");
                        const c = new Map;
                        return __c.Gn(b, d => {
                            const e = c.get(d) ? ? __c.KA(d, a);
                            c.set(d, e);
                            return e
                        })
                    },
                    YHc = function(a, b, c) {
                        v(!0);
                        v(!0);
                        v(!0);
                        const {
                            va: d,
                            a: e,
                            b: f
                        } = __c.rr(a), {
                            va: g,
                            a: h,
                            b: k
                        } = __c.rr(b), l = (d + g) / 2;
                        var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
                        m = .5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
                        var n = e * (1 + m),
                            p = h * (1 + m),
                            q = Math.hypot(n, f),
                            r = Math.hypot(p, k);
                        m = (q + r) / 2;
                        var t = __c.Er(Math.atan2(f, n) * 180 / Math.PI);
                        const u = __c.Er(Math.atan2(k, p) * 180 / Math.PI);
                        n = Math.abs(t - u) > 180 ? (t + u + 360) / 2 : (t + u) / 2;
                        p = r - q;
                        q = 2 * Math.sqrt(q * r) * Math.sin((Math.abs(u - t) <=
                            180 ? u - t : u <= t ? u - t + 360 : u - t - 360) / 2 * Math.PI / 180);
                        r = 1 + .045 * m;
                        t = 1 + .015 * m * (1 - .17 * Math.cos((n - 30) * Math.PI / 180) + .24 * Math.cos(2 * n * Math.PI / 180) + .32 * Math.cos((3 * n + 6) * Math.PI / 180) - .2 * Math.cos((4 * n - 63) * Math.PI / 180));
                        return Math.sqrt(((g - d) / (1 + .015 * (l - 50) ** 2 / Math.sqrt(20 + (l - 50) ** 2))) ** 2 + (p / (1 * r)) ** 2 + (q / (1 * t)) ** 2 + p / (1 * r) * (q / (1 * t)) * (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((n - 275) / 25) ** 2) * 2 * Math.PI / 180))) >= (c ? ? 20) ? a : h7(b, i7)
                    },
                    ZHc = function({
                        size: a
                    }) {
                        return $6("svg", {
                            "aria-hidden": "true",
                            width: a,
                            height: a,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: $6("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                                fill: "#db142c"
                            })
                        })
                    },
                    cIc = function(a) {
                        const b = a.Aub,
                            c = a.Rz,
                            d = a.sC,
                            e = a.ki,
                            f = a.Ur,
                            [g, h, k] = j7(() => {
                                switch (b) {
                                    case 4:
                                    case 2:
                                        return ["#e3fff0", "#00873d", $Hc];
                                    case 3:
                                        return ["#ffd9df", "#c8001e", aIc];
                                    case 1:
                                        return [c.Um, d.Um];
                                    case 0:
                                        return e ? [c.selected, d.selected] : f === d7 || f === c7 ? [c.Um, d.Um] : [c.default];
                                    default:
                                        throw new A(b);
                                }
                            }, [b, c.Um, c.selected, c.default, d.Um, d.selected, e, f]),
                            l = b === 0 || b === 1;
                        return $6(bIc, { ...a,
                            cb: k,
                            I_: a.vqa === "s" ? void 0 : e ? d.selected : d.default,
                            QEa: h,
                            backgroundColor: {
                                default: g,
                                Qg: l ? c.Qg : g,
                                active: l ?
                                    c.active : g,
                                selected: l ? c.selected : g
                            },
                            Cyb: !!k
                        })
                    },
                    bIc = function(a) {
                        const b = a.gvb,
                            c = a.backgroundColor,
                            d = a.QEa,
                            e = a.V,
                            f = a.ki,
                            g = a.label,
                            h = a.Fkb,
                            k = a.onChange;
                        var l = a.vqa;
                        const m = a.Ur,
                            n = a.sIa,
                            p = a.cb,
                            q = a.I_,
                            r = a.Cyb,
                            t = a.DM,
                            u = a.kHb,
                            w = a.Yob,
                            y = a.Zob,
                            B = a.Bxa;
                        a = a.Rc;
                        const D = k7(),
                            C = k7(),
                            E = k7(),
                            J = SHc(null),
                            M = SHc(null),
                            O = l === "s" ? "radio" : "checkbox";
                        l = j7(() => {
                            const Q = g.stream.Or(0);
                            return n !== void 0 ? l7(`${n.value}%`, { ...Q,
                                "font-weight": "bold",
                                color: n.gd,
                                "font-size": ag(sg, Q, "font-size") * dIc
                            }) : void 0
                        }, [n, g]);
                        const R = m ===
                            b7;
                        return m7("div", {
                            className: a7("VTAQRg", !(f || n) && "zt5zlQ", R && "A_ugOA", (m === c7 || m === d7) && "zMViSA", f && "Buj71Q"),
                            style: {
                                "--_v6jRQ": c.default,
                                "--CGAV4g": c.selected,
                                "--6wmixw": c.Qg,
                                "--LX33kQ": c.active,
                                "--T5edVA": `${e}px`,
                                "--XYYx_A": `${a/2}px`,
                                padding: `${u}px`
                            },
                            onClick: R ? Q => {
                                M.current ? .contains(Q.target) || J.current ? .contains(Q.target) || J.current ? .click()
                            } : void 0,
                            children: [$6("input", {
                                "aria-invalid": !!t,
                                "aria-checked": f,
                                "aria-labelledby": p ? C : void 0,
                                "aria-describedby": n || t ? `${n?E:""} ${t||""}`.trim() : void 0,
                                id: D,
                                name: b,
                                readOnly: m === c7,
                                disabled: m === d7,
                                type: O,
                                value: g.stream.Z,
                                className: "EP8SeA",
                                onChange: R ? k : void 0,
                                onClick: R ? Q => {
                                    O === "radio" && f && (Q.preventDefault(), k())
                                } : void 0,
                                checked: f,
                                ref: J
                            }), n !== void 0 && $6("div", {
                                className: "GpAzFg",
                                role: "meter",
                                "aria-valuenow": n.value,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "data-percent": n.value,
                                style: {
                                    width: `${n.value}%`,
                                    "--60vMXA": n.pnb
                                }
                            }), m7("label", {
                                className: a7("rSeRzQ", p && "zSZK5w", O === "checkbox" && "bHM4Bw"),
                                htmlFor: D,
                                ref: M,
                                children: [!r && O === "checkbox" && $6("div", {
                                    className: a7("n4ooaw", f && "Jw4Eqw"),
                                    style: {
                                        "--THA9bg": q,
                                        "--KBfK1Q": `${B}px`,
                                        "--HgMgMg": eIc(c.selected, w, y)
                                    }
                                }), $6("div", {
                                    children: $6(h, {
                                        text: d ? fIc(g, d) : g
                                    })
                                })]
                            }), l && $6("div", {
                                id: E,
                                children: $6(h, {
                                    text: l
                                })
                            }), p && $6(p, {
                                id: C,
                                size: a
                            })]
                        })
                    },
                    eIc = function(a, b, c) {
                        a = encodeURIComponent(a);
                        return `url("data:image/svg+xml,%3Csvg width='${c}' height='${b}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
                    },
                    gIc = function(a) {
                        return $6("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": n7.vvb,
                            children: $6("path", {
                                d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    hIc = function(a) {
                        return $6("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": n7.wHb,
                            children: $6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    iIc = function(a, b, c) {
                        b ? ? (b = 0);
                        if (c != null && (c > b && a > b && a <= c || c < b && a > c && a <= b)) return "hover";
                        if (a <= b) return "selected"
                    },
                    jIc = function(a) {
                        switch (a) {
                            case 1:
                                return "email";
                            case 2:
                                return "text";
                            default:
                                throw new A(a);
                        }
                    },
                    kIc = function(a, b, c, d) {
                        const e = f => {
                            const g = c();
                            return g != null ? `${f} | ${b.KGa(g)}` : f
                        };
                        switch (a) {
                            case 0:
                                return e(d ? b.pGa() : b.EPa());
                            case 1:
                            case 5:
                                return e(d ? b.oGa() : b.FPa());
                            case 2:
                                return b.offline();
                            case 3:
                                return b.loading();
                            case 4:
                                return b.$Aa();
                            case 6:
                                return e(b.LMa());
                            case 7:
                                return e(b.NJa());
                            default:
                                throw new A(a);
                        }
                    },
                    lIc = function(a, b, c, d, e) {
                        if (a === 0) return null;
                        a = ah.Jb().attrs({
                            "font-family": c.fontFamily,
                            color: b.gd,
                            "font-size": b.wyb,
                            "font-weight": "bold",
                            "text-align": "center",
                            direction: PHc(c.direction),
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).mb(a === 2 ? d.qya() : d.wDa()).Aq();
                        a = Zh.create({
                            stream: a.build(),
                            Pb: new Map
                        });
                        return e(a)
                    },
                    mIc = function(a) {
                        return a.some(b => {
                            switch (b.type) {
                                case 4:
                                    return !0;
                                case 5:
                                    return b.variant === 1;
                                case 1:
                                case 2:
                                case 3:
                                    return !1;
                                default:
                                    throw new A(b);
                            }
                        })
                    },
                    nIc = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    qIc = function(a, b) {
                        switch (a.type) {
                            case 0:
                                var c = oIc(a.options, a.qKa);
                                if (!c.length) return {
                                    pZ: "",
                                    BT: []
                                };
                                a = oIc(b, a.qKa);
                                return {
                                    pZ: c.map(({
                                        label: d
                                    }) => d).join(", "),
                                    BT: a.map(({
                                        id: d
                                    }) => d)
                                };
                            case 2:
                            case 1:
                                return c = pIc(b, a.value), {
                                    pZ: a.value,
                                    BT: c ? [c.id] : []
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    rIc = function(a) {
                        switch (a.type) {
                            case 0:
                                return a = oIc(a.options, a.qKa).map(({
                                    label: b
                                }) => b).join(", "), {
                                    pZ: a,
                                    BT: a
                                };
                            case 2:
                            case 1:
                                return {
                                    pZ: a.value,
                                    BT: a.value
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    oIc = function(a, b) {
                        const c = [];
                        for (const d of a) b.includes(d.id) && c.push(d);
                        return c
                    },
                    pIc = function(a, b) {
                        for (const c of a)
                            if (c.label.trimEnd() === b) return c
                    },
                    tIc = function(a) {
                        const {
                            min: b = 0,
                            max: c = Infinity
                        } = a;
                        if (b !== 0 || c !== Infinity) {
                            var d = sIc({
                                min: b,
                                max: c
                            });
                            if (d) return ({
                                length: e
                            }) => d(e)
                        }
                    },
                    sIc = function(a) {
                        const {
                            min: b = -Infinity,
                            max: c = Infinity
                        } = a;
                        if (b !== -Infinity || c !== Infinity) return d => {
                            if (b === c) {
                                if (d !== b) return Qp({
                                    EE: "out_of_bounds",
                                    params: {
                                        exact: b
                                    }
                                })
                            } else {
                                if (d < b) return Qp({
                                    EE: "out_of_bounds",
                                    params: {
                                        KX: b
                                    }
                                });
                                if (d > c) return Qp({
                                    EE: "out_of_bounds",
                                    params: {
                                        Xva: c
                                    }
                                })
                            }
                            return Pp()
                        }
                    },
                    uIc = function(a) {
                        return a === void 0 ? 1 : a === 0 ? Infinity : a
                    },
                    yIc = function(a, b, c) {
                        switch (a.type) {
                            case "select":
                                return new vIc(a, b, c);
                            case "text":
                                return new wIc(a, b, c);
                            case "number":
                                return new xIc(a, b, c);
                            default:
                                throw new A(a);
                        }
                    },
                    zIc = function(a) {
                        if (!o7(a, "q")) return 0;
                        const b = a.form.fields.first().id ? ? "",
                            c = p7(a, b, "select");
                        a = a.ABa.get(b);
                        return a ? .fM == null ? 0 : nIc(c.EG, a.fM) ? 2 : 1
                    },
                    p7 = function(a, b, c) {
                        let d = a.BBa.get(b);
                        const e =
                            a.form.fields.first(({
                                id: f
                            }) => f === b);
                        if (!e) throw Error(`Field ${b} is not found`);
                        if (c != null && e.type !== c) throw Error(`Field ${b} is not the expected type (${c})`);
                        d && d.Dd === e || (c = q7(() => a.YBa.get() ? .getContext(a.form.id) ? .l2b ? .get(b) ? ? a.ABa.get(b)), d = yIc(e, a.context, c), a.BBa.set(b, d));
                        return d
                    },
                    CIc = function(a) {
                        let b;
                        AIc(a.t0, () => {
                            b = a.wI ? .n5b({
                                p3b: () => a.form.Bs
                            }).subscribe(c => {
                                r7(() => {
                                    a.t0.set(c.results)
                                })
                            })
                        });
                        BIc(a.t0, () => {
                            b ? .unsubscribe()
                        })
                    },
                    o7 = function(a, b) {
                        if (a.form.fields.count() !== 1) return !1;
                        const c = a.form.fields.first();
                        return c.type === "select" && (c.variant ? .type === b || c.variant ? .type === void 0 && a.form.type === (b === "q" ? "quiz" : "poll"))
                    },
                    EIc = function(a, {
                        EE: b,
                        aab: c
                    }) {
                        const d = a.Hg;
                        if (d) {
                            switch (b) {
                                case 5:
                                    b = K("STZx7Q");
                                    break;
                                default:
                                    b = K("izckBA")
                            }
                            c = c ? {
                                QL: K("mQhziQ"),
                                onClick: X6(() => void a.submit())
                            } : void 0;
                            d.MD({
                                BF: b,
                                group: DIc,
                                fH: c
                            })
                        }
                    },
                    FIc = function(a) {
                        r7(() => {
                            for (const b of a.BBa.values()) b.reset()
                        })
                    },
                    GIc = function(a) {
                        return a.map(b => b.result)
                    },
                    IIc = function(a, b, c, d) {
                        const e = a !== b,
                            f = e ? a : h7(a, i7),
                            {
                                h: g,
                                s: h,
                                va: k
                            } = __c.yr(f);
                        var l = new __c.qr(g, h, k < 10 ? k + 6 : k - 6);
                        l = zr(l);
                        var m = new __c.qr(g, h, k < 10 ? k + 10 : k - 10);
                        m = zr(m);
                        return {
                            backgroundColor: b,
                            accentColor: f,
                            Ulb: g7(f, e ? .5 : .12),
                            Tlb: l,
                            Slb: m,
                            Vlb: g7(f, .4),
                            CM: YHc("#db142c", b),
                            ... function() {
                                const n = h7(f, i7);
                                return c ? {
                                    vyb: c,
                                    Q4: c === f ? n : c,
                                    Zlb: c === f ? n : c,
                                    BH: c,
                                    vga: c,
                                    FTa: zr(__c.IA(__c.Cr(__c.wr(c), .8), __c.wr(b)))
                                } : {
                                    vyb: d ? .Ra === 1 ? h7(b, i7) : h7(a, i7),
                                    Q4: n,
                                    Zlb: e ? h7(a, i7) : a,
                                    BH: h7(b, i7),
                                    vga: h7(b, HIc),
                                    FTa: h7(b, i7)
                                }
                            }(),
                            Rha: f,
                            ... function() {
                                if (c) return {
                                    t6: g7(c, .12),
                                    u6: g7(c, .3),
                                    Qha: g7(c, .5),
                                    JY: g7(c, .1)
                                };
                                const n = YHc("#000000", b);
                                return {
                                    t6: g7(n, .08),
                                    u6: g7(n, .12),
                                    Qha: g7(n, .5),
                                    JY: g7(n, .1)
                                }
                            }(),
                            ... function() {
                                if (c) return {
                                    kya: g7(c, .6),
                                    mya: g7(c, .5),
                                    lya: g7(c, .5)
                                };
                                const n = YHc("#000000", b, 50),
                                    {
                                        h: p,
                                        s: q,
                                        va: r
                                    } = __c.yr(n);
                                var t = new __c.qr(p, q, r < 10 ? r + 6 : r - 6);
                                t = zr(t);
                                var u = new __c.qr(p, q, r < 10 ? r + 10 : r - 10);
                                u = zr(u);
                                return {
                                    kya: g7(n, .6),
                                    mya: g7(t, .5),
                                    lya: g7(u, .5)
                                }
                            }()
                        }
                    },
                    JIc = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new A(a);
                        }
                    },
                    LIc = function(a) {
                        return new KIc(a.data.D.value,
                            a.Lr)
                    },
                    MIc = function(a, b) {
                        const c = s7(b);
                        b = a.wT.get(c);
                        if (a = a.gda.get(c)) return {
                            status: 1,
                            data: a
                        };
                        switch (b) {
                            case void 0:
                            case "uninitialized":
                                return M2();
                            case "initializing":
                                return {
                                    status: 2
                                };
                            case "initialized":
                                return {
                                    status: 1,
                                    data: a
                                };
                            default:
                                throw new A(b);
                        }
                    },
                    OIc = function(a) {
                        return t7(() => {
                            const b = a.formData.pG,
                                c = a.Lr.getSettings(b);
                            return [a.formData.Bs, b, c]
                        }, async ([b, c, d]) => {
                            const e = Z6()();
                            try {
                                if (d.status === 1) {
                                    var f = s7({
                                            Bs: b,
                                            submitter: d.data.KMa
                                        }),
                                        g = a.wT.get(f);
                                    if (g !== "initialized" && g !== "initializing") {
                                        a.wT.set(f,
                                            "initializing");
                                        var h = e.r(await e.s(a.wI.t2b({
                                            Bs: b,
                                            pG: c
                                        })));
                                        r7(() => {
                                            a.wT.get(f) !== "initialized" && (a.wT.set(f, "initialized"), h.ok && h.value && a.gda.set(f, h.value))
                                        })
                                    }
                                }
                            } finally {
                                e.s()
                            }
                        }, {
                            equals: NIc.structural
                        })
                    },
                    s7 = function(a) {
                        return [a.Bs, JSON.stringify(a.submitter)].join(":")
                    },
                    SIc = function(a) {
                        const b = a.title,
                            c = a.id,
                            d = a.fields,
                            e = a.oia,
                            f = a.Cba,
                            g = a.mca,
                            h = a.borderColor,
                            k = a.Ue,
                            l = a.V,
                            m = a.K2b,
                            [n, p] = [f, g].map(q => typeof q === "string" ? q : q.Ih[0].color || "#ffffff");
                        return {
                            minHeight: 500,
                            minWidth: 368,
                            id: c,
                            Bs: __c.sn(),
                            pG: void 0,
                            type: "quiz",
                            Qi: 18,
                            Kj: 18,
                            direction: a.direction ? ? "l",
                            oia: e,
                            Cba: typeof f === "string" ? { ...iD,
                                color: f
                            } : { ...iD,
                                Za: f
                            },
                            mca: typeof g === "string" ? { ...iD,
                                color: g
                            } : { ...iD,
                                Za: g
                            },
                            border: { ...__c.dJb,
                                color: h ? ? n,
                                weight: k ? ? 8
                            },
                            V: l ? ? 8,
                            NWa: {},
                            lDa: void 0,
                            title: b ? {
                                label: u7(b, {
                                    "font-size": 35.154,
                                    "font-weight": "bold",
                                    "text-align": "start",
                                    leading: 1200,
                                    color: h7(n, i7),
                                    "font-family": e,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on"
                                }),
                                hJ: "c"
                            } : void 0,
                            header: {
                                bba: 1.953,
                                Eq: 1.953,
                                Fq: 1.953,
                                Rt: .64,
                                background: PIc
                            },
                            E_: !1,
                            lra: !1,
                            fields: d.map(q => QIc(q, p, e)).slice(0, vc("5684dca7", 10)),
                            HS: {
                                Fq: 1.953,
                                Eq: 1.953,
                                Rt: .64
                            },
                            footer: {
                                label: {
                                    type: "text2",
                                    text: u7(m.slice(0, vc("f368b7e8", 250)), {
                                        "text-align": "center",
                                        "font-weight": "bold",
                                        color: n === p ? p : h7(n, i7),
                                        "font-size": RIc,
                                        "font-family": e,
                                        "font-kerning": "normal",
                                        "font-feature-liga": "on",
                                        "font-feature-clig": "on",
                                        "font-feature-calt": "on"
                                    })
                                },
                                hJ: void 0,
                                Rt: 1.953,
                                Eq: 1.953,
                                Fq: 1.953,
                                cba: .512
                            }
                        }
                    },
                    QIc = function(a, b, c) {
                        const d = {
                            label: {
                                type: "text2",
                                text: u7(a.label.slice(0, vc("f368b7e8", 250)), TIc(b, c))
                            },
                            REa: 1,
                            required: a.required,
                            id: __c.sn(),
                            hJ: "c",
                            V: 8
                        };
                        switch (a.type) {
                            case "select":
                                const e = [],
                                    f = a.options.map((g, h) => {
                                        var k = __c.sn();
                                        g = g.slice(0, vc("f368b7e8", 250));
                                        var l = {
                                            color: h7(b, i7),
                                            "font-size": 18,
                                            "font-family": c,
                                            "font-kerning": "normal",
                                            "font-feature-liga": "on",
                                            "font-feature-clig": "on",
                                            "font-feature-calt": "on"
                                        };
                                        k = {
                                            id: k,
                                            label: {
                                                type: "text2",
                                                text: u7(g, l)
                                            }
                                        };
                                        a.variant.type === 2 && a.variant.wYb.includes(h) && k.id && e.push(k.id);
                                        return k
                                    });
                                return { ...d,
                                    type: "select",
                                    G0: a.J$b ? 0 : 1,
                                    variant: UIc(a.variant),
                                    rya: e,
                                    options: f.slice(0, vc("55264882", 10))
                                };
                            case "text":
                                return { ...d,
                                    type: "text",
                                    placeholder: a.placeholder,
                                    variant: VIc(a.variant)
                                };
                            case "number":
                                return { ...d,
                                    type: "number",
                                    variant: WIc(a.variant),
                                    ...XIc(a.min, a.max, a.variant)
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    XIc = function(a, b, c) {
                        switch (c.type) {
                            case 1:
                                return b && a && b < a ? {
                                    min: b,
                                    max: a
                                } : {
                                    min: a,
                                    max: b
                                };
                            case 2:
                                return a = Math.max(1, a ? ? 1), b = Math.min(5, b ? ? 5), {
                                    min: Math.min(a, b),
                                    max: Math.max(a, b)
                                };
                            case 3:
                                return {
                                    min: 1,
                                    max: Math.max(1,
                                        Math.min(10, b ? ? 10))
                                };
                            case 4:
                                return a = Math.max(1, a ? ? 1), b = Math.min(10, b ? ? 10), {
                                    min: Math.min(a, b),
                                    max: Math.max(a, b)
                                };
                            default:
                                throw new A(c);
                        }
                    },
                    UIc = function(a) {
                        switch (a.type) {
                            case 2:
                                return {
                                    type: "q"
                                };
                            case 3:
                                return {
                                    type: "r"
                                };
                            case 1:
                                return {
                                    type: "p"
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    VIc = function(a) {
                        switch (a.type) {
                            case 1:
                                return {
                                    type: "e"
                                };
                            case 2:
                                return {
                                    type: "f",
                                    YN: a.L4b ? 1 : 3
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    WIc = function(a) {
                        switch (a.type) {
                            case 1:
                                return {
                                    type: "a"
                                };
                            case 2:
                                return {
                                    type: "b"
                                };
                            case 3:
                                return {
                                    type: "c"
                                };
                            case 4:
                                return {
                                    type: "d"
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    TIc = function(a, b) {
                        return {
                            color: h7(a, i7),
                            "font-size": 18,
                            "font-family": b,
                            "font-weight": "semibold",
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }
                    };
                __c.sy.prototype.sIa = __c.ea(22, function() {
                    return __c.ny(this, () => __c.$x(this.operators, "%", this.value))
                });
                var Y6 = __webpack_require__(245307).Fm;
                var v7 = __webpack_require__(186901),
                    q7 = v7.EW,
                    r7 = v7.h5,
                    YIc = v7.L3,
                    NIc = v7.m3,
                    t7 = v7.mJ,
                    ZIc = v7.O8,
                    BIc = v7.q$,
                    w7 = v7.sH,
                    AIc = v7.tC,
                    X6 = v7.XI;
                var Z6 = __webpack_require__(75402)._;
                var $Ic = __webpack_require__(322594),
                    $6 = $Ic.jsx,
                    m7 = $Ic.jsxs;
                var aJc = __webpack_require__,
                    bJc = aJc(208463),
                    a7 = aJc.n_x(bJc)();
                var x7 = __webpack_require__(205482),
                    RHc = x7.Children,
                    cJc = x7.createElement,
                    dJc = x7.useEffect,
                    k7 = x7.useId,
                    THc = x7.useLayoutEffect,
                    j7 = x7.useMemo,
                    SHc = x7.useRef,
                    f7 = x7.useState;
                var y7 = __webpack_require__(721226).PA;
                var VHc = __webpack_require__(87387).A;
                var UHc = __webpack_require__(34741).A;
                var eJc = __webpack_require__(536618).iB;
                var fJc = a => vb("JWYKDQ", [a]),
                    gJc = () => K("jh7u2w"),
                    hJc = a => vb("Jj1O+A", [a]),
                    iJc = a => vb("sUWUOA", [a]),
                    jJc = a => vb("Q5Pg4w", [a]),
                    kJc = a => vb("4EBAAA", [a]),
                    lJc = () => K("orPgUw"),
                    mJc = () => K("WjcAyg"),
                    nJc = () => K("CV+PYA"),
                    oJc = () => K("As1GTA"),
                    pJc = () => K("xSH8Og"),
                    qJc = () => K("wutQEA"),
                    rJc = a => vb("Qso6Xw", [a]),
                    sJc = () => K("z/bN8g"),
                    tJc = a => vb("Aa3fvQ", [a]),
                    uJc = () => K("2Q9Q+A"),
                    vJc = a => vb("6QpLYA", [a]),
                    wJc = a => vb("SWeX4Q", [a]),
                    xJc = () => K("nFbxIQ"),
                    yJc = () => K("ktnWSg"),
                    zJc = a => vb("U28wGg", [a]),
                    AJc = () => K("VGvKlQ"),
                    BJc = a => vb("kbfbNQ", [a]),
                    CJc = () => K("fNQh9A"),
                    DJc = () => K("i3mNPA"),
                    EJc = () => K("zt/K0Q"),
                    FJc = () => K("pT68JA"),
                    GJc = () => K("g7pHPw");
                var z7 = 0,
                    A7 = {
                        cBa: z7++,
                        YAa: z7++,
                        eBa: z7++,
                        Y$a: z7++,
                        jBa: z7++,
                        bBa: z7++,
                        $Aa: z7++,
                        EPa: z7++,
                        wDa: z7++,
                        NJa: z7++,
                        LMa: z7++,
                        hBa: z7++,
                        XAa: z7++,
                        aBa: z7++,
                        loading: z7++,
                        pGa: z7++,
                        KGa: z7++,
                        iBa: z7++,
                        offline: z7++,
                        dBa: z7++,
                        oGa: z7++,
                        gBa: z7++,
                        fBa: z7++,
                        ZAa: z7++,
                        qya: z7++,
                        kBa: z7++,
                        uIa: z7++,
                        FPa: z7++
                    },
                    HJc = class {
                        static G(a) {
                            L(a, {
                                nW: w7.shallow
                            })
                        }
                        getText(a, b, c) {
                            a = this.nW ? .[a];
                            c ? .length ? a ? (b = this.document.language, c = (new __c.wb(a, b ? __c.Jaa(b) : void 0, __c.Kaa, {
                                    ignoreTag: !0
                                })).format(Object.fromEntries(Object.entries(c)))) : c = b(...c) :
                                c = a || b();
                            return c
                        }
                        fBa(...a) {
                            return this.getText(A7.fBa, BJc, a)
                        }
                        $Aa() {
                            return this.getText(A7.$Aa, lJc)
                        }
                        qya() {
                            return this.getText(A7.qya, DJc)
                        }
                        wDa() {
                            return this.getText(A7.wDa, oJc)
                        }
                        NJa() {
                            return this.getText(A7.NJa, pJc)
                        }
                        KGa(...a) {
                            return this.getText(A7.KGa, vJc, a)
                        }
                        Y$a(...a) {
                            return this.getText(A7.Y$a, iJc, a)
                        }
                        offline() {
                            return this.getText(A7.offline, xJc)
                        }
                        loading() {
                            return this.getText(A7.loading, uJc)
                        }
                        LMa() {
                            return this.getText(A7.LMa, qJc)
                        }
                        FPa() {
                            return this.getText(A7.FPa, FJc)
                        }
                        EPa() {
                            return this.getText(A7.EPa,
                                mJc)
                        }
                        oGa() {
                            return this.getText(A7.oGa, GJc)
                        }
                        pGa() {
                            return this.getText(A7.pGa, nJc)
                        }
                        uIa() {
                            return this.getText(A7.uIa, AJc)
                        }
                        dBa() {
                            return this.getText(A7.dBa, yJc)
                        }
                        kBa() {
                            return this.getText(A7.kBa, EJc)
                        }
                        ZAa() {
                            return this.getText(A7.ZAa, CJc)
                        }
                        YAa() {
                            return this.getText(A7.YAa, gJc)
                        }
                        hBa(...a) {
                            return this.getText(A7.hBa, rJc, a)
                        }
                        jBa(...a) {
                            return this.getText(A7.jBa, jJc, a)
                        }
                        iBa(...a) {
                            return this.getText(A7.iBa, wJc, a)
                        }
                        aBa(...a) {
                            return this.getText(A7.aBa, tJc, a)
                        }
                        cBa(...a) {
                            return this.getText(A7.cBa, fJc, a)
                        }
                        bBa(...a) {
                            return this.getText(A7.bBa,
                                kJc, a)
                        }
                        eBa(...a) {
                            return this.getText(A7.eBa, hJc, a)
                        }
                        gBa(...a) {
                            return this.getText(A7.gBa, zJc, a)
                        }
                        XAa() {
                            return this.getText(A7.XAa, sJc)
                        }
                        constructor(a) {
                            this.document = a;
                            this.nW = (HJc.G(this), void 0);
                            t7(() => a.language, () => MHc(this), {
                                fireImmediately: !0
                            })
                        }
                    };
                var IJc = class extends HJc {};
                var JJc = S0.ri({
                        type: S0.rj(46, "text2"),
                        text: S0.Lm(2423, "Richtext2")
                    }),
                    KJc = S0.C3({
                        type: void 0
                    }, JJc),
                    LJc = {
                        id: S0.Qz(35),
                        REa: S0.Tj(37),
                        label: S0.ref(38, KJc),
                        hJ: S0.rC(2430, "c", "u"),
                        V: S0.Tj(29),
                        required: S0.Uaa(2331)
                    },
                    MJc = S0.ri({
                        id: S0.Qz(35),
                        label: S0.ref(38, KJc)
                    }),
                    NJc = S0.ri({
                        type: S0.rj(46, "r")
                    }),
                    OJc = S0.ri({
                        type: S0.rj(46, "p")
                    }),
                    PJc = S0.ri({
                        type: S0.rj(46, "q")
                    }),
                    QJc = S0.C3({
                        type: void 0
                    }, NJc, OJc, PJc),
                    RJc = S0.ri({ ...LJc,
                        type: S0.rj(46, "select"),
                        variant: S0.K7a(48, QJc),
                        options: S0.listRef(41, MJc),
                        G0: S0.fHb(39, {
                            min: 0
                        }),
                        rya: S0.QSa(1549, S0.FMa())
                    }),
                    SJc = S0.ri({
                        type: S0.rj(46, "e")
                    }),
                    TJc = S0.ri({
                        type: S0.rj(46, "f"),
                        YN: S0.kF(40, {
                            min: 1
                        })
                    }),
                    UJc = S0.C3({
                        type: void 0
                    }, SJc, TJc),
                    VJc = S0.ri({ ...LJc,
                        type: S0.rj(46, "text"),
                        variant: S0.ref(48, UJc),
                        placeholder: S0.Qz(42)
                    }),
                    WJc = S0.ri({
                        type: S0.rj(46, "a")
                    }),
                    XJc = S0.ri({
                        type: S0.rj(46, "b")
                    }),
                    YJc = S0.ri({
                        type: S0.rj(46, "c")
                    }),
                    ZJc = S0.ri({
                        type: S0.rj(46, "d")
                    }),
                    $Jc = S0.C3({
                        type: void 0
                    }, WJc, XJc, YJc, ZJc),
                    aKc = S0.ri({ ...LJc,
                        type: S0.rj(46, "number"),
                        variant: S0.ref(48, $Jc),
                        min: S0.Tj(1),
                        max: S0.Tj(2)
                    }),
                    bKc = S0.C3({
                            type: void 0
                        },
                        VJc, RJc, aKc),
                    cKc = S0.ri({
                        Eq: S0.Tj(1),
                        Fq: S0.Tj(2),
                        Rt: S0.Tj(3)
                    }),
                    dKc = S0.ri({
                        label: S0.ref(38, KJc),
                        hJ: S0.rC(2, "c", "u"),
                        Rt: S0.Tj(3),
                        Eq: S0.Tj(4),
                        Fq: S0.Tj(5),
                        cba: S0.Tj(6)
                    }),
                    eKc = S0.ri({
                        bba: S0.Tj(1),
                        Rt: S0.Tj(2),
                        Fq: S0.Tj(3),
                        Eq: S0.Tj(4),
                        background: S0.I7a(5, "Fill")
                    }),
                    fKc = S0.ri({
                        Qi: S0.Tj(4),
                        Kj: S0.Tj(5),
                        minHeight: S0.Tj(2062),
                        minWidth: S0.Tj(2077),
                        type: S0.rj(46, "poll", "quiz"),
                        id: S0.Vx(35),
                        Bs: S0.Vx(45),
                        pG: S0.Qz(27),
                        direction: S0.rC(44, "l", "r"),
                        oia: S0.Qz(30),
                        Cba: S0.Lm(2216, "Fill"),
                        mca: S0.Lm(2372, "Fill"),
                        border: S0.Lm(28,
                            "Stroke"),
                        V: S0.Tj(29),
                        E_: S0.Uaa(1802),
                        lDa: S0.Uaa(9),
                        lra: S0.Uaa(52),
                        NWa: S0.K7a(34, S0.ri({})),
                        title: S0.Vaa(36, {
                            label: S0.Lm(1, "Richtext2"),
                            hJ: S0.Kma(2430, "c", "u")
                        }),
                        header: S0.Vaa(1, eKc.fields),
                        fields: S0.listRef(32, bKc),
                        HS: S0.Vaa(6, cKc.fields),
                        footer: S0.Vaa(1705, dKc.fields)
                    }),
                    gKc = __c.I_({
                        type: S0.rj(37, "poll", "quiz"),
                        value: S0.ref(48, fKc)
                    });
                var u7 = (a, b) => ({ ...__c.GF,
                        stream: ah.Jb().attrs({ ...b,
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).mb(a).Aq().build()
                    }),
                    l7 = (a, b) => Zh.create(u7(a, b)),
                    hKc = {
                        thin: "thin",
                        extralight: "thin",
                        light: "thin",
                        normal: "extralight",
                        medium: "normal",
                        semibold: "normal",
                        bold: "normal",
                        ultrabold: "normal",
                        heavy: "normal"
                    };
                var iKc = 14 * __c.MT / 16,
                    PIc = { ...iD,
                        Ra: 1
                    };
                K("1Vvt4w");
                __c.sn();
                K("4qFSiQ");
                K("W5ifXQ");
                K("8qLU3g");
                K("vuVf+w");
                K("7IUw4A");
                K("hblGCQ");
                K("0ICFJA");
                var n7 = __c.Dv.iZa ? {
                    statusText: "1t7jg8u",
                    vvb: "36iimsp",
                    wHb: "1a1nvnm",
                    label: "32aek6n",
                    s_b: "2tk7d5",
                    eec: "2n1bnv6",
                    J2b: "2na0kmu",
                    L3b: "3qf811p",
                    K3b: "246bpa8",
                    odc: "3p3qlie",
                    t_b: "3tchg28"
                } : {};
                var B7 = y7(a => {
                    const {
                        Dd: b,
                        Ee: c,
                        fp: d,
                        errorMessage: e,
                        DM: f,
                        a9: g = !0
                    } = a, h = c.fk, k = b.label.stream.Xu("font-family")["font-family"];
                    var l = b.label.stream.Xu("direction").direction;
                    const m = g ? "fieldset" : "div",
                        n = g ? "legend" : "label";
                    l = l.values().next().value ? ? "ltr";
                    return m7(m, {
                        className: "_4ILOcQ",
                        onTouchEnd: p => {
                            p.stopPropagation()
                        },
                        dir: l,
                        children: [b.sdb && $6(n, {
                                htmlFor: g ? void 0 : a.Y7,
                                "data-testid": n7.label,
                                style: {
                                    paddingBlockEnd: `${b.padding.LBb}px`
                                },
                                children: $6(h, {
                                    text: d.required ? QHc(b.label) : b.label
                                })
                            }), a.children,
                            e && $6("div", {
                                id: f,
                                className: "o_7gvw",
                                style: {
                                    "--wfznTw": b.Kj,
                                    "--qMNgbA": b.Qi * 1.5
                                },
                                role: "alert",
                                children: $6(h, {
                                    text: l7(e ? ? "", {
                                        "font-family": k.values().next().value,
                                        direction: l,
                                        "font-size": b.wub,
                                        color: b.CM,
                                        "text-align": "end"
                                    })
                                })
                            })
                        ]
                    })
                });
                var jKc = y7(a => {
                    const b = a.Dd,
                        c = a.Ee,
                        d = a.fp,
                        e = a.hC,
                        f = a.Ur,
                        g = d.EG,
                        h = k7(),
                        k = __c.z(d.min);
                    a = __c.z(d.max);
                    x(k >= 1);
                    x(a <= 10);
                    a = Array.from({
                        length: a - k + 1
                    }, (n, p) => ({
                        ZKb: p + k
                    }));
                    const l = e7(e, d.SK, b),
                        m = k7();
                    return $6(B7, {
                        Dd: b,
                        Ee: c,
                        fp: d,
                        errorMessage: l,
                        DM: m,
                        a9: !0,
                        children: $6(WHc, {
                            MEa: b.sizes.Vwa,
                            gridGap: b.gridGap,
                            children: a.map(({
                                ZKb: n
                            }) => {
                                var p = Number(g);
                                const q = `${h}-${n}`,
                                    r = f !== b7 ? void 0 : X6(() => {
                                        d.vt = String(n);
                                        d.Ww = !0
                                    });
                                p = p === n;
                                return m7("div", {
                                    className: a7("dAwWRA", f === b7 && !p && "oKt_Cg", (f === c7 || f === d7) && "HLJxlw",
                                        p && "kpt6Eg"),
                                    style: {
                                        borderRadius: b.V,
                                        padding: `${b.padding.Ka}px`,
                                        "--dayejg": b.backgroundColor.default,
                                        "--1PG0Mg": b.backgroundColor.Qg,
                                        "--9P_0YQ": b.backgroundColor.active,
                                        "--1y49lg": b.backgroundColor.selected,
                                        "---3Rdqg": b.backgroundColor.Um,
                                        "--Cjk51Q": b.accentColor
                                    },
                                    onClick: r,
                                    children: [$6("input", {
                                        "aria-invalid": !!l,
                                        "aria-describedby": l ? m : void 0,
                                        checked: p,
                                        type: "radio",
                                        id: q,
                                        name: h,
                                        value: n,
                                        className: "Mh7mQg",
                                        onChange: r,
                                        disabled: f === d7,
                                        readOnly: f === c7
                                    }), $6("label", {
                                        htmlFor: q,
                                        className: "_1TTelg",
                                        children: $6(c.fk, {
                                            text: l7(String(n), {
                                                "font-family": ag(sg, b.label.stream.Gi(0), "font-family"),
                                                color: p ? b.gd.selected : b.gd.default,
                                                "text-align": "center",
                                                "font-size": b.sizes.o6
                                            })
                                        })
                                    })]
                                }, n)
                            })
                        })
                    })
                });
                var kKc = [{
                        kaa: 1,
                        cb: ({
                            size: a,
                            color: b
                        }) => m7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [$6("path", {
                                    fill: b,
                                    d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z"
                                }),
                                $6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: K("3Spodw")
                    }, {
                        kaa: 2,
                        cb: ({
                            size: a,
                            color: b
                        }) => m7("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: [$6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                                fill: b
                            }), $6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                                fill: b
                            })]
                        }),
                        label: K("bqTQmw")
                    }, {
                        kaa: 3,
                        cb: ({
                            size: a,
                            color: b
                        }) => m7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [$6("path", {
                                    fill: b,
                                    d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z"
                                }),
                                $6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: K("k/uS7g")
                    }, {
                        kaa: 4,
                        cb: ({
                            size: a,
                            color: b
                        }) => $6("svg", {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: $6("path", {
                                "fill-rule": "evenodd",
                                fill: b,
                                d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z"
                            })
                        }),
                        label: K("ssYkyg")
                    }, {
                        kaa: 5,
                        cb: ({
                            size: a,
                            color: b
                        }) => m7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [$6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                                    "clip-rule": "evenodd"
                                }), $6("path", {
                                    fill: b,
                                    d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z"
                                }),
                                $6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: K("WKDtIg")
                    }],
                    lKc = y7(a => {
                        const b = a.Dd,
                            c = a.Ee,
                            d = a.fp,
                            e = a.hC,
                            f = a.Ur,
                            g = d.EG;
                        x(d.min != null && d.min >= 1);
                        x(d.max != null && d.max <= 5);
                        a = kKc.slice(d.min - 1, d.max);
                        const h = e7(e, d.SK, b),
                            k = k7(),
                            l = k7();
                        return $6(B7, {
                            Dd: b,
                            Ee: c,
                            fp: d,
                            errorMessage: h,
                            DM: k,
                            a9: !0,
                            children: $6(WHc, {
                                MEa: b.sizes.Vwa,
                                gridGap: b.gridGap,
                                children: a.map(({
                                    kaa: m,
                                    cb: n,
                                    label: p
                                }) => {
                                    const q = Number(g),
                                        r = g === String(m),
                                        t = `${l}-${m}`,
                                        u = f === c7 || f === d7 ? void 0 : X6(() => {
                                            d.vt = String(m)
                                        });
                                    return m7("div", {
                                        className: a7("r4VAMw", r && "jc6y_A", (f === c7 || f === d7) && "UpIThA", f === b7 && !r && "SMPq5g"),
                                        style: {
                                            "--hMlWEg": b.backgroundColor.default,
                                            "---127VA": b.backgroundColor.Qg,
                                            "--9x4z1A": b.backgroundColor.active,
                                            "--W5Lfog": b.backgroundColor.selected,
                                            "--GtGNYg": b.backgroundColor.Um,
                                            "--r8_7Tw": b.accentColor,
                                            borderRadius: b.V,
                                            padding: `${b.padding.Ka}px`
                                        },
                                        onClick: u,
                                        children: [$6("input", {
                                            "aria-invalid": !!h,
                                            "aria-describedby": h ? k : void 0,
                                            checked: q === m,
                                            type: "radio",
                                            id: t,
                                            name: l,
                                            value: m,
                                            className: "Mh7mQg",
                                            onChange: u,
                                            disabled: f === d7,
                                            readOnly: f === c7
                                        }), $6("label", {
                                            htmlFor: t,
                                            className: "Mh7mQg",
                                            children: $6("span", {
                                                children: p
                                            })
                                        }), $6("div", {
                                            className: "aOiRWQ",
                                            style: {
                                                width: b.sizes.Rc,
                                                height: b.sizes.Rc
                                            },
                                            children: $6(n, {
                                                size: b.sizes.Rc,
                                                color: r ? b.I_.selected : b.I_.default
                                            })
                                        })]
                                    }, m)
                                })
                            })
                        })
                    });
                var i7 = ["#000000", "#ffffff"];
                var mKc = y7(a => {
                    const b = a.Dd,
                        c = a.Ee,
                        d = a.fp,
                        e = a.Ur;
                    var f = a.hC;
                    a = d.EG;
                    const g = c.ffa,
                        h = !!d.SK,
                        k = k7(),
                        l = j7(() => h ? {
                            default: b.borderColor.error,
                            Qg: b.borderColor.error,
                            focus: b.borderColor.error
                        } : e === b7 || e === C7 ? {
                            default: b.borderColor.default,
                            Qg: b.borderColor.Qg,
                            focus: b.borderColor.focus
                        } : {
                            default: b.borderColor.default,
                            Qg: b.borderColor.default,
                            focus: b.borderColor.default
                        }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Qg, e, h]),
                        m = b.label.stream.Gi(0),
                        n = hKc[ag(sg, m, "font-weight")];
                    f = e7(f, d.SK, b);
                    const p = k7();
                    return $6(B7, {
                        Dd: b,
                        Ee: c,
                        fp: d,
                        errorMessage: f,
                        DM: k,
                        a9: !1,
                        Y7: p,
                        children: m7("div", {
                            className: "ybpBnQ",
                            children: [$6(g, {
                                boxSizing: "border-box",
                                id: p,
                                type: "text",
                                inputMode: "numeric",
                                QBa: ag(sg, m, "font-family"),
                                fontSize: `${b.sizes.o6}px`,
                                pj: b.gd,
                                fontWeight: n,
                                value: a ? ? "",
                                name: b.id,
                                backgroundColor: "transparent",
                                borderStyle: "solid",
                                outline: "none",
                                borderWidth: b.sizes.Bwa,
                                zwa: l,
                                borderRadius: b.V,
                                ariaInvalid: h,
                                paddingInlineEnd: h ? b.sizes.Rc * 1.5 : void 0,
                                Hc: h ? k : void 0,
                                onChange: X6(q => {
                                    d.vt =
                                        q.target.value
                                }),
                                onBlur: X6(() => {
                                    d.Ww = !0
                                }),
                                padding: b.padding.Ka,
                                readOnly: e === c7,
                                disabled: e === d7,
                                width: "100%"
                            }), h && $6("div", {
                                className: "_3v99oA",
                                style: {
                                    "--3tgqzg": `${b.sizes.Rc*.4}px`
                                },
                                children: $6(ZHc, {
                                    size: b.sizes.Rc
                                })
                            })]
                        })
                    })
                });
                var dIc = 10 / 14,
                    nKc = y7(a => {
                        const b = a.Dd,
                            c = a.Ee,
                            d = a.fp,
                            e = a.Ur,
                            f = a.ZCa;
                        a = a.hC;
                        const g = b.options,
                            {
                                EG: h = [],
                                feedback: k
                            } = d,
                            l = k7(),
                            m = k7(),
                            n = q7(() => k.get() ? .fM),
                            p = q7(() => k.get() ? .AIb),
                            q = e7(a, d.SK, b),
                            r = e === b7 || e === C7;
                        return $6(B7, {
                            Dd: b,
                            Ee: c,
                            fp: d,
                            errorMessage: q,
                            DM: l,
                            children: $6("div", {
                                className: "iaCeXQ",
                                style: {
                                    gridGap: `${b.rowGap}px`
                                },
                                children: g.map(t => {
                                    var u = h.includes(t.id);
                                    const w = {
                                        vqa: b.vqa,
                                        gvb: `select-${m}`,
                                        V: b.V,
                                        label: t.label,
                                        background: b.Rz,
                                        ki: u,
                                        Fkb: c.fk,
                                        DM: q ? l : void 0,
                                        kHb: b.padding.Ka,
                                        Yob: b.sizes.Qob,
                                        Zob: b.sizes.Sob,
                                        Bxa: b.sizes.Bxa,
                                        Rc: b.sizes.Rc,
                                        Ur: e
                                    };
                                    switch (b.type) {
                                        case 1:
                                            var y = p.get();
                                            y = y ? Math.round(100 * (y.wbc.get(t.id) ? ? 0) / (y.total || 1)) : void 0;
                                            return cJc(bIc, { ...w,
                                                key: t.id,
                                                backgroundColor: {
                                                    default: y != null ? b.uOa.track : b.Rz.default,
                                                    Qg: b.Rz.Qg,
                                                    active: b.Rz.active,
                                                    selected: y != null ? b.qPa.track : b.Rz.selected
                                                },
                                                QEa: u ? b.sC.selected : r ? void 0 : b.sC.Um,
                                                I_: u ? b.sC.selected : b.sC.default,
                                                sIa: y != null ? {
                                                    value: y,
                                                    pnb: u ? b.qPa.GL : b.uOa.GL,
                                                    gd: u ? b.qPa.text : b.uOa.text
                                                } : void 0,
                                                onChange: X6(() => {
                                                    d.nNa(t.id);
                                                    d.Ww = !0;
                                                    f ? .()
                                                })
                                            });
                                        case 2:
                                            return u = n.get(), u = u == null ? 0 : u.includes(t.id) ? w.ki ? 4 : 2 : w.ki ? 3 : 1, cJc(cIc, { ...w,
                                                key: t.id,
                                                Rz: b.Rz,
                                                sC: b.sC,
                                                Aub: u,
                                                onChange: X6(() => {
                                                    d.nNa(t.id);
                                                    d.Ww = !0
                                                })
                                            });
                                        case 3:
                                            return cJc(bIc, { ...w,
                                                key: t.id,
                                                onChange: X6(() => {
                                                    d.nNa(t.id);
                                                    d.Ww = !0
                                                }),
                                                I_: u ? b.sC.selected : b.sC.default,
                                                QEa: u ? b.sC.selected : r ? void 0 : b.sC.Um,
                                                backgroundColor: {
                                                    default: b.Rz.default,
                                                    selected: b.Rz.selected,
                                                    Qg: b.Rz.Qg,
                                                    active: b.Rz.active
                                                }
                                            });
                                        default:
                                            throw new A(b);
                                    }
                                })
                            })
                        })
                    }),
                    $Hc = a => $6("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": K("i3mNPA"),
                        children: m7("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [$6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), $6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#00873D"
                            }), $6("path", {
                                d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                                fill: "white"
                            })]
                        })
                    }),
                    aIc = a => $6("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": K("As1GTA"),
                        children: m7("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [$6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), $6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#C8001E"
                            }), $6("path", {
                                d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: "white"
                            })]
                        })
                    });
                var pKc = y7(a => {
                        const b = a.Dd,
                            c = a.Ee,
                            d = a.fp,
                            e = a.hC,
                            f = a.Ur,
                            g = d.N3.ok ? d.N3.value : void 0,
                            h = k7(),
                            k = k7(),
                            [l, m] = f7(null);
                        x(d.min != null && d.min >= 1);
                        x(d.max != null && d.max <= 10);
                        const n = e7(e, d.SK, b),
                            p = f === b7,
                            q = f === b7 || f === C7;
                        return $6(B7, {
                            Dd: b,
                            Ee: c,
                            fp: d,
                            errorMessage: n,
                            DM: k,
                            a9: !0,
                            children: $6(WHc, {
                                MEa: b.Rc,
                                gridGap: 0,
                                children: Array.from({
                                    length: d.max
                                }, (r, t) => {
                                    const u = t + 1;
                                    r = iIc(u, g, l);
                                    t = p ? X6(() => {
                                        d.vt = u === g ? "" : String(u);
                                        d.Ww = !0
                                    }) : void 0;
                                    return m7("label", {
                                        className: a7("Rw_cTw", !q && "g0Fw6w"),
                                        style: {
                                            "--4yIcLg": b.accentColor
                                        },
                                        onMouseEnter: p ? () => m(u) : void 0,
                                        onMouseLeave: p ? () => m(null) : void 0,
                                        children: [$6("input", {
                                            "aria-invalid": !!n,
                                            "aria-describedby": n ? k : void 0,
                                            checked: g === u,
                                            type: "radio",
                                            name: h,
                                            value: u,
                                            "aria-label": vb("1aqRWg", [u]),
                                            className: "Mh7mQg",
                                            onClick: t,
                                            onChange: oKc,
                                            disabled: f === d7,
                                            readOnly: f === c7
                                        }), r != null ? $6(gIc, {
                                            size: b.Rc,
                                            color: q ? r === "hover" ? b.fillColor.Qg : b.fillColor.selected : b.fillColor.Um
                                        }) : $6(hIc, {
                                            size: b.Rc,
                                            color: q ? b.borderColor.default : b.borderColor.Um
                                        })]
                                    }, u)
                                })
                            })
                        })
                    }),
                    oKc = () => {};
                var qKc = y7(a => {
                    const b = a.Dd,
                        c = a.Ee,
                        d = a.fp,
                        e = a.Ur;
                    var f = a.hC;
                    a = d.EG;
                    const g = c.ffa,
                        h = c.xua,
                        k = !!d.SK,
                        l = k7(),
                        m = e === b7 || e === C7;
                    var n = j7(() => k ? {
                        default: b.borderColor.error,
                        Qg: b.borderColor.error,
                        focus: b.borderColor.error
                    } : m ? {
                        default: b.borderColor.default,
                        Qg: b.borderColor.Qg,
                        focus: b.borderColor.focus
                    } : {
                        default: b.borderColor.default,
                        Qg: b.borderColor.default,
                        focus: b.borderColor.default
                    }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Qg, m, k]);
                    const p = b.label.stream.Gi(0),
                        q = hKc[ag(sg,
                            p, "font-weight")],
                        r = k7();
                    n = {
                        boxSizing: "border-box",
                        QBa: ag(sg, p, "font-family"),
                        fontSize: `${b.sizes.o6}px`,
                        pj: m ? b.gd.default : b.gd.Um,
                        fontWeight: q,
                        padding: b.padding.Ka,
                        paddingInlineEnd: k ? b.sizes.Rc * 1.5 : void 0,
                        h9a: b.placeholder.color,
                        width: "100%",
                        zwa: n,
                        backgroundColor: "transparent",
                        borderStyle: "solid",
                        outline: "none",
                        borderRadius: b.V,
                        borderWidth: b.sizes.Bwa,
                        ariaInvalid: k,
                        Hc: k ? l : void 0
                    };
                    f = e7(f, d.SK, b);
                    return $6(B7, {
                        Dd: b,
                        Ee: c,
                        fp: d,
                        errorMessage: f,
                        DM: l,
                        a9: !1,
                        Y7: r,
                        children: m7("div", {
                            className: "DsSAig",
                            children: [b.YN >
                                1 ? $6(h, { ...n,
                                    rows: b.YN,
                                    id: r,
                                    name: b.id,
                                    placeholder: b.placeholder.text,
                                    disabled: e === d7,
                                    readOnly: e === c7,
                                    onBlur: X6(() => {
                                        d.Ww = !0
                                    }),
                                    onChange: X6(t => {
                                        d.vt = t.target.value
                                    }),
                                    resize: "none",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    value: a ? ? ""
                                }) : $6(g, { ...n,
                                    type: jIc(b.variant),
                                    id: r,
                                    name: b.id,
                                    disabled: e === d7,
                                    readOnly: e === c7,
                                    onChange: X6(t => {
                                        d.vt = t.target.value
                                    }),
                                    onBlur: X6(() => {
                                        d.Ww = !0
                                    }),
                                    value: a ? ? "",
                                    placeholder: b.placeholder.text
                                }), k && $6("div", {
                                    className: a7("Xz8a5Q", b.YN > 1 && "XsCoFw"),
                                    style: {
                                        "--ozZJmw": `${b.sizes.Rc*
.4}px`
                                    },
                                    children: $6(ZHc, {
                                        size: b.sizes.Rc
                                    })
                                })
                            ]
                        })
                    })
                });
                var rKc = y7(a => {
                    const b = a.messages,
                        c = a.footer;
                    var d = a.jwb,
                        e = kIc(a.bI, b, a.hxb, a.ZMb);
                    d = {
                        "font-family": d.fontFamily,
                        "font-size": c.gqb,
                        "text-align": "center",
                        direction: PHc(d.direction),
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    };
                    var f = ah.Jb().attrs(d);
                    f.attrs({
                        color: c.gd
                    }).mb(e).Aq();
                    e = Zh.create({
                        stream: f.build(),
                        Pb: new Map
                    });
                    f = window.location.origin;
                    v(!0);
                    const g = f + __c.PA(__c.OA(new __c.tOa("/form-data-processing"), "formUrl", window.location.href));
                    return m7("footer", {
                        children: [$6("div", {
                            "data-testid": n7.statusText,
                            children: $6(a.fk, {
                                text: e
                            })
                        }), a.footer.qyb && a.bI !== 2 && $6("div", {
                            className: "_4x6reg",
                            children: $6("a", {
                                onClick: h => {
                                    a.Ch && (a.Ch.Fna(new __c.lx({
                                        uri: g,
                                        target: 1
                                    })), h.preventDefault())
                                },
                                href: g,
                                target: "_blank",
                                onTouchEnd: h => {
                                    h.stopPropagation()
                                },
                                children: $6(a.fk, {
                                    text: Zh.create({
                                        stream: ah.Jb().attrs(d).attrs({
                                            color: c.gd,
                                            decoration: "underline"
                                        }).mb(b.uIa()).Aq().build(),
                                        Pb: new Map
                                    })
                                })
                            })
                        })]
                    })
                });
                var sKc = y7(a => {
                    const b = a.header,
                        c = a.Ee;
                    return m7("div", {
                        className: "FnpX4Q",
                        style: {
                            paddingInlineStart: `${b.padding.ta}px`,
                            paddingInlineEnd: `${b.padding.Na}px`,
                            paddingBlockStart: `${b.padding.ma}px`,
                            paddingBlockEnd: `${b.padding.ya}px`
                        },
                        id: a.tyb,
                        children: [b.background && $6("div", {
                            className: "n9ICbQ",
                            children: $6(c.bn, {
                                fill: b.background
                            })
                        }), $6("div", {
                            role: "heading",
                            "aria-level": 1,
                            children: $6(c.fk, {
                                text: b.label
                            })
                        })]
                    })
                });
                var b7 = 0,
                    C7 = 1,
                    c7 = 2,
                    d7 = 3,
                    tKc = y7(function(a) {
                        const b = a.state,
                            c = a.nk,
                            d = a.ZBa,
                            e = a.nlb;
                        a = a.Ch;
                        const f = b.theme,
                            g = b.header,
                            h = b.fields,
                            k = b.fH,
                            l = f.background,
                            m = f.V,
                            n = f.border,
                            p = e.fk,
                            q = e.bn,
                            [r] = f7(() => w7.box(c));
                        dJc(() => {
                            r7(() => {
                                r.set(c)
                            })
                        }, [r, c]);
                        const [t] = f7(() => new IJc({
                            get language() {
                                return r.get()
                            }
                        })), u = j7(() => eJc(E => $6(p, {
                            text: E
                        })), [p]), w = o7(d, "p"), y = d.bI === 6 || d.bI === 7 && !w ? 2 : d.bI === 5 ? 1 : d.lSa ? 0 : 3, B = d.gp ? null : lIc(zIc(d), b.footer, f, t, u), D = !!k && (d.gp || !B), C = k7();
                        return m7("div", {
                            "aria-labelledby": C,
                            role: "form",
                            className: "_9sCIzQ",
                            style: {
                                borderRadius: m,
                                border: `${n.weight}px solid ${n.color}`
                            },
                            children: [$6("div", {
                                className: "wNGpBA",
                                children: $6(q, {
                                    fill: l
                                })
                            }), m7("div", {
                                className: "_6i3kwQ",
                                children: [g && $6(sKc, {
                                    header: g,
                                    tyb: C,
                                    Ee: e
                                }), $6("div", {
                                    className: "xIuERA",
                                    role: "group",
                                    style: {
                                        rowGap: b.Z7.rowGap,
                                        paddingBlockStart: `${b.Z7.ma}px`,
                                        paddingInlineStart: `${b.Z7.ta}px`,
                                        paddingBlockEnd: `${b.Z7.ya}px`,
                                        paddingInlineEnd: `${b.Z7.Na}px`
                                    },
                                    children: h.map(E => $6("div", {
                                        className: a7("_6i3kwQ", "wNH5Fw", !!(E.type === 4 || E.type ===
                                            5 && E.variant === 3 || E.type === 5 && E.variant === 1) && "Od1Udw"),
                                        children: (() => {
                                            switch (E.type) {
                                                case 4:
                                                    return $6(qKc, {
                                                        Dd: E,
                                                        Ee: e,
                                                        fp: p7(d, E.id, "text"),
                                                        hC: t,
                                                        Ur: y
                                                    });
                                                case 5:
                                                    switch (E.variant) {
                                                        case 1:
                                                            return $6(mKc, {
                                                                Dd: E,
                                                                Ee: e,
                                                                fp: p7(d, E.id, "number"),
                                                                hC: t,
                                                                Ur: y
                                                            });
                                                        case 2:
                                                            return $6(lKc, {
                                                                Dd: E,
                                                                Ee: e,
                                                                fp: p7(d, E.id, "number"),
                                                                hC: t,
                                                                Ur: y
                                                            });
                                                        case 4:
                                                            return $6(jKc, {
                                                                Dd: E,
                                                                Ee: e,
                                                                fp: p7(d, E.id, "number"),
                                                                hC: t,
                                                                Ur: y
                                                            });
                                                        case 3:
                                                            return $6(pKc, {
                                                                Dd: E,
                                                                Ee: e,
                                                                fp: p7(d, E.id, "number"),
                                                                hC: t,
                                                                Ur: y
                                                            });
                                                        default:
                                                            throw new A(E);
                                                    }
                                                case 1:
                                                case 2:
                                                case 3:
                                                    return $6(nKc, {
                                                        Dd: E,
                                                        Ee: e,
                                                        fp: p7(d, E.id, "select"),
                                                        hC: t,
                                                        ZCa: w ? () => d.ZCa(E.id) : void 0,
                                                        Ur: y
                                                    });
                                                default:
                                                    throw new A(E);
                                            }
                                        })()
                                    }, E.id))
                                }), m7("div", {
                                    className: a7("WwpS_Q"),
                                    style: {
                                        paddingInlineStart: `${b.e_.ta}px`,
                                        paddingInlineEnd: `${b.e_.Na}px`,
                                        paddingBlockEnd: `${b.e_.ya}px`
                                    },
                                    children: [D && $6(OHc, {
                                        label: u(k.label),
                                        Hga: k.backgroundColor,
                                        Ur: y,
                                        onClick: X6(() => d.submit()),
                                        padding: k.padding
                                    }), B && $6("div", {
                                        style: {
                                            paddingBlockStart: `${b.e_.qJb}px`,
                                            paddingBlockEnd: `${b.e_.pJb}px`
                                        },
                                        children: B
                                    }), $6("div", {
                                        style: {
                                            paddingBlockStart: `${b.e_.eEb}px`
                                        },
                                        children: $6(rKc, {
                                            footer: b.footer,
                                            bI: d.bI,
                                            messages: t,
                                            hxb: () => {
                                                var E = o7(d, "p") ? d.t0.get() ? .fields.get(d.form.fields.first().id ? ? "") ? .total ? ? 0 : void 0;
                                                return E
                                            },
                                            jwb: f,
                                            fk: e.fk,
                                            Ch: a,
                                            ZMb: mIc(h)
                                        })
                                    })]
                                })]
                            })]
                        })
                    }),
                    fIc = (a, b) => {
                        const c = a.stream.Or(0);
                        a = { ...__c.GF,
                            stream: ah.Jb().attrs({ ...c,
                                color: b
                            }).mb(a.stream.Z).build()
                        };
                        return Zh.create(a)
                    };
                var uKc = {
                    ke: "form_widget_interacted",
                    Af(a) {
                        return __c.Vn({
                            form_id: a.f_,
                            form_type: a.$Ba,
                            action_group: a.yu,
                            action: a.action,
                            location: a.location,
                            linked_design_id: a.m5b,
                            toggle_value: a.DK,
                            editing_context: a.Cd == null ? void 0 : __c.Wn(a.Cd),
                            performance_context: a.$d == null ? void 0 : __c.Xn(a.$d),
                            question_type: a.Kcc
                        })
                    }
                };
                var D7 = class {
                    static G(a) {
                        L(a, {
                            O3: q7,
                            Ww: w7.ref,
                            N3: q7,
                            kSa: q7,
                            Sbb: q7,
                            SK: q7
                        })
                    }
                    reset() {
                        this.Ww = !1;
                        this.vt = this.empty
                    }
                    get O3() {}
                    get EG() {
                        return this.context.mode === "edit" ? this.empty : this.vt
                    }
                    get N3() {
                        if (this.isEmpty()) return this.required ? Ea({
                            EE: "required"
                        }) : (0, __c.Ba)();
                        const a = this.bKa(this.EG);
                        if (a.ok) {
                            const b = this.kSa(a.value);
                            if (b.state === "invalid") return Ea(b.error)
                        }
                        return a
                    }
                    get kSa() {
                        const a = this.O3 ? .filter(b => !!b);
                        return a ? .length ? IHc(a) : Pp
                    }
                    get Sbb() {
                        return this.N3.map(() => this.isEmpty() ? void 0 :
                            this.Fa(this.EG))
                    }
                    get SK() {
                        return this.Ww && !this.N3.ok && this.context.mode === "interact" ? this.N3.error : void 0
                    }
                    get required() {
                        return !!this.Dd.required
                    }
                    isEmpty() {
                        const a = this.EG;
                        return a.length === 0 ? !0 : typeof a === "string" ? (a != null && a.trim().length > 0 ? Pp() : Qp()).state === "invalid" : !1
                    }
                    constructor(a, b, c) {
                        this.Dd = a;
                        this.context = b;
                        this.feedback = c;
                        this.Ww = (D7.G(this), !1);
                        t7(() => KHc(this.context.Dma), d => {
                            d && (this.vt = (d = d.zmb.get(this.Dd.id ? ? "")) ? this.za(d) : this.empty, this.Ww = !1)
                        })
                    }
                };
                var vKc = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/,
                    wKc = /[\s,]+/g,
                    xIc = class extends D7 {
                        static G(a) {
                            L(a, {
                                vt: w7.ref
                            })
                        }
                        get min() {
                            return this.Dd.min
                        }
                        get max() {
                            return this.Dd.max
                        }
                        get O3() {
                            return [sIc({
                                min: this.Dd.min,
                                max: this.Dd.max
                            })]
                        }
                        bKa(a) {
                            return a.length <= 50 && vKc.test(a) && (a = a.replace(wKc, ""), a = Number(a), !isNaN(a) && isFinite(a)) ? (0, __c.Ba)(a) : Ea({
                                EE: "invalid_format"
                            })
                        }
                        Fa(a) {
                            return {
                                type: 2,
                                Y7: this.Dd.id ? ? "",
                                un: this.Dd.label.text.stream.Z,
                                value: a
                            }
                        }
                        za(a) {
                            return rIc(a).BT
                        }
                        constructor(...a) {
                            super(...a);
                            this.type =
                                (xIc.G(this), "number");
                            this.vt = this.empty = ""
                        }
                    };
                var vIc = class extends D7 {
                    static G(a) {
                        L(a, {
                            vt: w7.ref,
                            M7a: q7({
                                equals: NIc.shallow
                            }),
                            O3: q7,
                            NHa: q7
                        })
                    }
                    get M7a() {
                        return new Set(this.Dd.options.map(({
                            id: a
                        }) => a ? ? ""))
                    }
                    get O3() {
                        return [tIc({
                            max: uIc(this.Dd.G0)
                        })]
                    }
                    bKa(a) {
                        return a.every(b => this.M7a.has(b)) ? (0, __c.Ba)(a.slice()) : Ea({
                            EE: "unknown_option_id"
                        })
                    }
                    Fa(a) {
                        return {
                            type: 0,
                            Y7: this.Dd.id ? ? "",
                            un: this.Dd.label.text.stream.Z,
                            qKa: a,
                            options: this.NHa
                        }
                    }
                    za(a) {
                        return qIc(a, this.NHa).BT
                    }
                    get NHa() {
                        return this.Dd.options.map(a => ({
                            id: a.id ? ? "",
                            label: a.label.text.stream.Z
                        }))
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (vIc.G(this), "select");
                        this.empty = [];
                        this.vt = [];
                        this.nNa = b => {
                            const c = this.EG;
                            this.vt = c ? .includes(b) ? c.filter(d => d !== b) : uIc(this.Dd.G0) > 1 && c ? .length ? [...c, b] : [b]
                        }
                    }
                };
                var wIc = class extends D7 {
                    static G(a) {
                        L(a, {
                            vt: w7.ref
                        })
                    }
                    get O3() {
                        const a = vc("b9892c2d", 500);
                        return [a != null ? tIc({
                            min: 0,
                            max: a
                        }) : void 0, this.Dd.variant.type === "e" ? HHc(__c.lLb, {
                            EE: "invalid_email"
                        }) : void 0]
                    }
                    bKa(a) {
                        return (0, __c.Ba)(a.trim())
                    }
                    Fa(a) {
                        return {
                            type: 1,
                            Y7: this.Dd.id ? ? "",
                            un: this.Dd.label.text.stream.Z,
                            value: a
                        }
                    }
                    za(a) {
                        return rIc(a).BT
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (wIc.G(this), "text");
                        this.vt = this.empty = ""
                    }
                };
                var xKc = class {
                    static G(a) {
                        L(a, {
                            Dma: q7,
                            RY: q7
                        })
                    }
                    get Dma() {
                        if (!this.MM || !this.Lr) return {
                            status: 1,
                            data: void 0
                        };
                        const a = this.Lr.getSettings(this.formData.pG);
                        switch (a.status) {
                            case 2:
                            case 3:
                                return a;
                            default:
                                return MIc(this.MM, {
                                    Bs: this.formData.Bs,
                                    submitter: a.data.KMa
                                })
                        }
                    }
                    get RY() {
                        if (!this.Lr) return M2();
                        const a = this.Lr.getSettings(this.formData.pG);
                        return JHc(a, {
                            RO: b => ({
                                Bs: this.formData.Bs,
                                submitter: b.KMa
                            })
                        })
                    }
                    get mode() {
                        return this.YBa.get() ? .getContext(this.formData.id) ? "edit" : "interact"
                    }
                    constructor(a,
                        b, c, d) {
                        this.formData = a;
                        this.Lr = b;
                        this.MM = c;
                        this.YBa = d;
                        xKc.G(this)
                    }
                };
                var DIc = Symbol(),
                    yKc = class {
                        static G(a) {
                            L(a, {
                                MT: w7.ref,
                                zN: w7.ref,
                                fM: q7,
                                ABa: q7({
                                    equals: NIc.structural
                                }),
                                sP: q7,
                                bI: q7,
                                lSa: q7
                            })
                        }
                        get fM() {
                            const a = this.Lr ? .getSettings(this.form.pG);
                            return a ? .status === 1 ? a.data.fM : void 0
                        }
                        get ABa() {
                            var a = KHc(this.context.Dma);
                            if (a) {
                                {
                                    var b = this.zN;
                                    a = a != null ? this.t0.get() : void 0;
                                    var c = this.fM;
                                    b = b ? .ok ? b.value.hvb : b ? .error.hvb;
                                    const g = new Map;
                                    if (b ? .size || a ? .fields ? .size || c ? .size) {
                                        var d = new Set([...(b ? .keys() || []), ...(a ? .fields.keys() || []), ...(c ? .keys() || [])]);
                                        for (f of d) {
                                            d = b ? .get(f) ? .feedback;
                                            var e = a ? .fields.get(f);
                                            e = e ? {
                                                AIb: e
                                            } : void 0;
                                            const h = c ? .get(f);
                                            d = { ...d,
                                                ...e,
                                                ...(h ? {
                                                    fM: h
                                                } : void 0)
                                            };
                                            Object.keys(d).length > 0 && g.set(f, d)
                                        }
                                    }
                                    var f = g
                                }
                            } else f = new Map;
                            return f
                        }
                        get sP() {
                            return this.MT ? 2 : W6(this.context.Dma, {
                                RO: a => a == null ? 1 : 3,
                                loading: () => 4,
                                error: () => 1
                            })
                        }
                        get bI() {
                            return this.ab ? .status === 2 ? 2 : this.wI && this.Lr && this.MM ? this.sP === 2 ? 6 : this.sP === 3 ? 7 : this.sP === 4 ? 3 : W6(this.context.RY, {
                                RO: ({
                                    submitter: a
                                }) => a ? .type === "USER" ? 0 : 1,
                                loading: () => 3,
                                error: () => 4
                            }) : 5
                        }
                        get lSa() {
                            if (!this.wI || this.context.mode !== "interact") return !1;
                            switch (this.bI) {
                                case 1:
                                case 0:
                                    return !0;
                                case 7:
                                    return o7(this, "p");
                                default:
                                    return !1
                            }
                        }
                        get gp() {
                            return this.context.mode === "edit"
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.form = a;
                            this.wI = b;
                            this.Lr = c;
                            this.MM = d;
                            this.YBa = e;
                            this.ab = f;
                            this.ka = g;
                            this.Hg = h;
                            this.BBa = (yKc.G(this), new Map);
                            this.MT = !1;
                            this.t0 = w7.box();
                            this.submit = YIc(function() {
                                const k = this,
                                    l = Z6(!0)();
                                return function*() {
                                    l.r();
                                    try {
                                        var m = k.wI;
                                        const t = k.MM;
                                        var n = k.context;
                                        const u = k.ka,
                                            w = k.form.fields,
                                            y = k.form.pG,
                                            B = k.form.Bs,
                                            D = k.form.id,
                                            C = k.form.type;
                                        var p =
                                            (k.sP === 1 || o7(k, "p") && k.sP === 3) && k.context.mode === "interact";
                                        if (m && p && t && n.RY.status === 1) {
                                            p = !0;
                                            var q = n.RY.data;
                                            n = [];
                                            for (const E of w) {
                                                const J = p7(k, E.id ? ? "");
                                                J.Ww = !0;
                                                const M = J.Sbb;
                                                M.ok ? p && M.value != null && n.push(M.value) : p = !1
                                            }
                                            if (p)
                                                if (n.length === 0) k.zN = Ea({
                                                    EE: 5,
                                                    aab: !1
                                                });
                                                else {
                                                    k.MT = !0;
                                                    try {
                                                        const E = l.r(yield l.s(m.H5b({
                                                            pG: y,
                                                            Bs: B,
                                                            zmb: n
                                                        })));
                                                        k.zN = GIc(E);
                                                        if (E.ok) {
                                                            m = t;
                                                            var r = E.value.afc;
                                                            const J = s7(q);
                                                            m.gda.set(J, r);
                                                            m.wT.set(J, "initialized");
                                                            u ? .track(uKc, {
                                                                f_: D,
                                                                $Ba: C,
                                                                yu: "interacted",
                                                                action: "form_submitted",
                                                                location: "in_form"
                                                            })
                                                        }
                                                    } finally {
                                                        l.r(),
                                                            k.MT = !1
                                                    }
                                                }
                                            else k.zN = Ea({
                                                EE: 6,
                                                aab: !1
                                            });
                                            k.zN.ok || EIc(k, k.zN.error)
                                        }
                                    } finally {
                                        l.s()
                                    }
                                }()
                            });
                            this.Oba = YIc(function() {
                                const k = this,
                                    l = Z6(!0)();
                                return function*() {
                                    l.r();
                                    try {
                                        const m = k.wI,
                                            n = k.MM,
                                            p = k.context,
                                            q = k.form.Bs,
                                            r = (k.sP === 1 || o7(k, "p") && k.sP === 3) && k.context.mode === "interact";
                                        if (m && r && n && p.RY.status === 1) {
                                            k.MT = !0;
                                            try {
                                                l.r(yield l.s(m.Oba({
                                                    Bs: q
                                                }))).ok ? (k.ka ? .track(uKc, {
                                                    f_: k.form.id,
                                                    $Ba: "poll",
                                                    yu: "interacted",
                                                    action: "response_unsubmitted",
                                                    location: "in_form"
                                                }), n.Oba(p.RY.data), k.zN = void 0) : k.Hg ? .MD({
                                                    BF: K("kgHTHw"),
                                                    group: DIc,
                                                    fH: {
                                                        QL: K("mQhziQ"),
                                                        onClick: X6(() => this.Oba())
                                                    }
                                                })
                                            } finally {
                                                l.r(), k.MT = !1
                                            }
                                        }
                                    } finally {
                                        l.s()
                                    }
                                }()
                            });
                            this.ZCa = YIc(function(k) {
                                const l = this,
                                    m = Z6(!0)();
                                return function*() {
                                    m.r();
                                    try {
                                        p7(l, k, "select").isEmpty() ? (l.ka ? .track(uKc, {
                                            f_: l.form.id,
                                            $Ba: "poll",
                                            yu: "interacted",
                                            action: "response_unsubmitted",
                                            location: "in_form"
                                        }), m.r(yield m.s(l.Oba()))) : m.r(yield m.s(l.submit()))
                                    } finally {
                                        m.s()
                                    }
                                }()
                            });
                            t7(() => a.Bs, () => {
                                this.zN = void 0;
                                this.t0.set(void 0);
                                o7(this, "p") && FIc(this)
                            });
                            this.context = new xKc(a, c, d, e);
                            CIc(this)
                        }
                    };
                var E7 = Object.freeze({
                    Qi: 16,
                    Kj: 16,
                    m2b: 1.5625,
                    HS: {
                        Fq: 1.25,
                        Eq: 1.25,
                        Rt: 1
                    },
                    footer: {
                        JHb: .625,
                        KHb: 1.25,
                        Fq: 1.25,
                        Eq: 1.25,
                        cba: .5,
                        Fbc: .5,
                        Ebc: 1.25
                    },
                    header: {
                        bba: 1.25,
                        Rt: 1,
                        Fq: 1.25,
                        Eq: 1.25
                    }
                });
                var HIc = ["#cccccc", "#333333"];
                var zKc = vc("4073adf", !1),
                    KIc = class {
                        get header() {
                            if (!this.Ua.E_) return new AKc(this.formData, this.Ua)
                        }
                        get fields() {
                            const a = this.formData.type;
                            return this.formData.fields.map(b => {
                                switch (b.type) {
                                    case "select":
                                        switch (b.variant ? .type) {
                                            case "p":
                                                return new BKc(b, this.Ua);
                                            case "q":
                                                return new CKc(b, this.Ua);
                                            case void 0:
                                                switch (a) {
                                                    case "quiz":
                                                        return new CKc(b, this.Ua);
                                                    case "poll":
                                                        return new BKc(b, this.Ua);
                                                    default:
                                                        throw new A(a);
                                                }
                                            case "r":
                                                return new DKc(b, this.Ua);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    case "text":
                                        switch (b.variant.type) {
                                            case "f":
                                                return new EKc(b,
                                                    this.Ua);
                                            case "e":
                                                return new FKc(b, this.Ua);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    case "number":
                                        switch (b.variant.type) {
                                            case "a":
                                                return new GKc(b, this.Ua);
                                            case "b":
                                                return new HKc(b, this.Ua);
                                            case "c":
                                                return new IKc(b, this.Ua);
                                            case "d":
                                                return new JKc(b, this.Ua);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    default:
                                        throw new A(b);
                                }
                            })
                        }
                        get fH() {
                            if ((this.fields.length !== 1 || this.fields[0].type !== 1) && this.formData.footer.ref) return {
                                backgroundColor: {
                                    default: this.Ua.Aa.accentColor,
                                    Qg: this.Ua.Aa.Tlb,
                                    active: this.Ua.Aa.Slb,
                                    Um: this.Ua.Aa.Vlb
                                },
                                label: this.formData.footer.ref ? .label.text,
                                padding: {
                                    ma: this.Ua.Kj * .64,
                                    ya: this.Ua.Kj * .64,
                                    ta: this.Ua.Kj * .64,
                                    Na: this.Ua.Kj * .64
                                }
                            }
                        }
                        get Kf() {
                            return JHc(this.Ua.Kf, {
                                RO: a => ({
                                    submitter: a.KMa
                                })
                            })
                        }
                        get footer() {
                            const a = zKc && W6(this.Ua.Kf, {
                                    RO: c => !!c.gdc,
                                    default: () => !1
                                }),
                                b = this.Ua.Qi;
                            return {
                                wyb: b * iKc,
                                gqb: b * .625,
                                qyb: a,
                                gd: this.Ua.Aa.FTa
                            }
                        }
                        get Z7() {
                            const a = this.Ua.Kj,
                                b = this.formData.HS ? .ref;
                            return {
                                ma: a * 1,
                                ta: a * (b ? .Fq ? ? E7.HS.Fq),
                                Na: a * (b ? .Eq ? ? E7.HS.Eq),
                                ya: a * (b ? .Rt ? ? E7.HS.Rt),
                                rowGap: a * 2
                            }
                        }
                        get e_() {
                            const a = !!this.fH,
                                b = this.Ua.Kj;
                            return {
                                ya: b * (this.formData.footer.ref ? .Rt ? ? (a ? E7.footer.JHb : E7.footer.KHb)),
                                ta: b * (this.formData.footer.ref ? .Fq ? ? E7.footer.Fq),
                                Na: b * (this.formData.footer.ref ? .Eq ? ? E7.footer.Eq),
                                eEb: b * (this.formData.footer.ref ? .cba ? ? (a ? E7.footer.cba : 0)),
                                qJb: b * .64,
                                pJb: b * .64
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Ua = new KKc(a, b);
                            this.theme = new LKc(a, this.Ua)
                        }
                    },
                    KKc = class {
                        static G(a) {
                            L(a, {
                                Aa: q7
                            })
                        }
                        get Aa() {
                            return IIc(this.DO, this.pqa, this.mSb, this.formData.header.ref ? .background ? .ref)
                        }
                        get DO() {
                            return XHc(this.formData.Cba)
                        }
                        get pqa() {
                            return XHc(this.formData.mca)
                        }
                        get direction() {
                            return this.formData.direction ===
                                "r" ? "r" : "l"
                        }
                        get Kf() {
                            return this.Lr ? this.Lr.getSettings(this.formData.pG) : {
                                status: 2
                            }
                        }
                        get hFb() {
                            return this.formData.fields.count()
                        }
                        get E_() {
                            return this.formData.E_ ? !0 : (this.formData.lDa || this.formData.title.ref ? .label == null) && this.formData.lra === !1
                        }
                        get IBa() {
                            return this.hFb === 1 && (this.formData.lra ? ? !0)
                        }
                        get Qi() {
                            if (this.formData.Qi) return this.formData.Qi;
                            const a = ag(sg, this.Rja.label.text.stream.Gi(0), "font-size");
                            return this.IBa ? a / (this.Rja.REa ? ? 1.5625) : a
                        }
                        get Kj() {
                            return this.formData.Kj ? ? 16
                        }
                        get mSb() {
                            return this.Rja.hJ ===
                                "u" ? ag(sg, this.Rja.label.text.stream.Gi(0), "color") : void 0
                        }
                        get Rja() {
                            return __c.z(this.formData.fields.first(), "Malformed form data")
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Lr = b;
                            KKc.G(this)
                        }
                    },
                    LKc = class {
                        get background() {
                            return this.formData.mca
                        }
                        get border() {
                            return this.formData.border
                        }
                        get V() {
                            return this.formData.V ? ? 0
                        }
                        get fontFamily() {
                            return this.formData.oia
                        }
                        get direction() {
                            return this.formData.direction === "r" ? "r" : "l"
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Ua = b
                        }
                    },
                    AKc = class {
                        get background() {
                            return this.formData.header ? .ref ? .background.ref ? ?
                                this.formData.Cba
                        }
                        get label() {
                            var a = this.formData.fields.first();
                            return (a = this.Ua.IBa ? a.label.text : this.formData.title ? .ref ? .label) ? MKc(a, this.Ua.direction) : l7("", {
                                "font-size": this.Ua.Qi * 1.953,
                                direction: JIc(this.Ua.direction)
                            })
                        }
                        get padding() {
                            const a = this.formData.header.ref;
                            return {
                                ma: this.Ua.Kj * (a ? .bba ? ? E7.header.bba),
                                ya: this.Ua.Kj * (a ? .Rt ? ? E7.header.Rt),
                                ta: this.Ua.Kj * (a ? .Fq ? ? E7.header.Fq),
                                Na: this.Ua.Kj * (a ? .Eq ? ? E7.header.Eq)
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Ua = b
                        }
                    },
                    NKc = class {
                        get id() {
                            return this.Dd.id ||
                                ""
                        }
                        get label() {
                            return MKc(this.Dd.label.text, this.Ua.direction)
                        }
                        get sdb() {
                            return !this.Ua.IBa
                        }
                        get accentColor() {
                            return this.Ua.Aa.accentColor
                        }
                        get CM() {
                            return this.Ua.Aa.CM
                        }
                        get wub() {
                            return this.Ua.Qi * .8
                        }
                        get Qi() {
                            return this.Ua.Qi
                        }
                        get Kj() {
                            return this.Ua.Kj
                        }
                        get padding() {
                            return {
                                LBb: this.Ua.Kj * .512,
                                Ka: this.Ua.Kj * .64
                            }
                        }
                        constructor(a, b) {
                            this.Dd = a;
                            this.Ua = b
                        }
                    },
                    OKc = class extends NKc {
                        get placeholder() {
                            return {
                                color: g7(this.Ua.Aa.BH, .5),
                                text: this.Dd.placeholder || ""
                            }
                        }
                        get V() {
                            return this.Dd.V ? ? 8
                        }
                        get borderColor() {
                            return {
                                default: this.Ua.Aa.kya,
                                Qg: this.Ua.Aa.mya,
                                focus: this.Ua.Aa.lya,
                                error: this.Ua.Aa.CM
                            }
                        }
                        get gd() {
                            return {
                                default: this.Ua.Aa.BH,
                                Um: this.Ua.Aa.vga
                            }
                        }
                        get sizes() {
                            return {
                                o6: this.Ua.Qi * 1,
                                Rc: this.Ua.Qi * 1.5,
                                Bwa: this.Ua.Qi * .0625
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 4
                        }
                    },
                    EKc = class extends OKc {
                        get YN() {
                            return this.Dd.variant.YN
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    FKc = class extends OKc {
                        constructor(...a) {
                            super(...a);
                            this.YN = this.variant = 1
                        }
                    },
                    F7 = class extends NKc {
                        get V() {
                            return this.Dd.V ? ? 8
                        }
                        constructor(...a) {
                            super(...a);
                            this.type =
                                5
                        }
                    },
                    GKc = class extends F7 {
                        get borderColor() {
                            return {
                                default: this.Ua.Aa.kya,
                                Qg: this.Ua.Aa.mya,
                                focus: this.Ua.Aa.lya,
                                error: this.Ua.Aa.CM
                            }
                        }
                        get gd() {
                            return this.Ua.Aa.BH
                        }
                        get sizes() {
                            return {
                                o6: this.Ua.Qi * 1,
                                Rc: this.Ua.Qi * 1.5,
                                Bwa: this.Ua.Qi * .0625
                            }
                        }
                        get gridGap() {
                            return this.Ua.Kj * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 1
                        }
                    },
                    HKc = class extends F7 {
                        get backgroundColor() {
                            return {
                                default: this.Ua.Aa.t6,
                                Qg: this.Ua.Aa.u6,
                                active: this.Ua.Aa.Qha,
                                selected: this.Ua.Aa.Rha,
                                error: this.Ua.Aa.CM,
                                Um: this.Ua.Aa.JY
                            }
                        }
                        get I_() {
                            return {
                                default: this.Ua.Aa.BH,
                                selected: this.Ua.Aa.Q4
                            }
                        }
                        get sizes() {
                            return {
                                Vwa: this.Ua.Qi * 2.5,
                                Rc: this.Ua.Qi * 1.953
                            }
                        }
                        get gridGap() {
                            return this.Ua.Kj * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    IKc = class extends F7 {
                        get borderColor() {
                            return {
                                default: this.Ua.Aa.BH,
                                Um: this.Ua.Aa.vga
                            }
                        }
                        get fillColor() {
                            return {
                                Qg: this.Ua.Aa.u6,
                                selected: this.Ua.Aa.Rha,
                                Um: this.Ua.Aa.JY
                            }
                        }
                        get Rc() {
                            return this.Ua.Qi * 2.2
                        }
                        get gridGap() {
                            return this.Ua.Kj * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 3
                        }
                    },
                    JKc = class extends F7 {
                        get backgroundColor() {
                            return {
                                default: this.Ua.Aa.t6,
                                Qg: this.Ua.Aa.u6,
                                active: this.Ua.Aa.Qha,
                                selected: this.Ua.Aa.Rha,
                                error: this.Ua.Aa.CM,
                                Um: this.Ua.Aa.JY
                            }
                        }
                        get gd() {
                            return {
                                default: this.Ua.Aa.BH,
                                selected: this.Ua.Aa.Q4
                            }
                        }
                        get sizes() {
                            return {
                                Vwa: this.Ua.Qi * 2.5,
                                o6: this.Ua.Qi * 1
                            }
                        }
                        get gridGap() {
                            return this.Ua.Kj * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 4
                        }
                    },
                    QKc = class extends NKc {
                        get options() {
                            return this.Dd.options.map(a => new PKc(a, this.Ua))
                        }
                        get Rz() {
                            return {
                                default: this.Ua.Aa.t6,
                                Qg: this.Ua.Aa.u6,
                                active: this.Ua.Aa.Qha,
                                selected: this.Ua.Aa.Rha,
                                error: this.Ua.Aa.CM,
                                Um: this.Ua.Aa.JY
                            }
                        }
                        get sC() {
                            return {
                                default: this.Ua.Aa.BH,
                                selected: this.Ua.Aa.Q4,
                                Um: this.Ua.Aa.vga
                            }
                        }
                        get vqa() {
                            return this.Dd.G0 !== void 0 && this.Dd.G0 !== 1 ? "m" : "s"
                        }
                        get V() {
                            return this.Dd.V ? ? 8
                        }
                        get rowGap() {
                            return .512 * this.Ua.Kj
                        }
                        get sizes() {
                            return {
                                Rc: this.Ua.Qi * 1,
                                Bxa: this.Ua.Qi * 1,
                                Qob: this.Ua.Qi * .5,
                                Sob: this.Ua.Qi * .625
                            }
                        }
                    },
                    CKc = class extends QKc {
                        static G(a) {
                            L(a, {
                                Kf: q7
                            })
                        }
                        get Kf() {
                            return W6(this.Ua.Kf, {
                                RO: a => (a = a.fM.get(this.id) ? ? []) ? {
                                    status: 1,
                                    data: {
                                        rya: a
                                    }
                                } : M2(),
                                loading: () => ({
                                    status: 2
                                }),
                                error: () => M2()
                            })
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = (CKc.G(this), 2)
                        }
                    },
                    BKc = class extends QKc {
                        get qPa() {
                            return {
                                text: this.Ua.Aa.Q4,
                                track: this.Ua.Aa.Ulb,
                                GL: this.Ua.Aa.accentColor
                            }
                        }
                        get uOa() {
                            return {
                                text: this.Ua.Aa.BH,
                                track: this.Ua.Aa.JY,
                                GL: this.Ua.Aa.t6
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 1
                        }
                    },
                    DKc = class extends QKc {
                        constructor(...a) {
                            super(...a);
                            this.type = 3
                        }
                    },
                    PKc = class {
                        get id() {
                            return this.option.id || ""
                        }
                        get label() {
                            return MKc(this.option.label.text, this.Ua.direction)
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.Ua = b
                        }
                    },
                    MKc = eJc((a, b) => {
                        const c = Zh.create(Zh.snapshot(a));
                        ZIc(() => {
                            c.stream.setAttributes({
                                direction: JIc(b)
                            })
                        });
                        return c
                    });
                var RKc = class {
                    static G(a) {
                        L(a, {
                            eY: w7.shallow
                        })
                    }
                    getSettings(a) {
                        const b = a || "",
                            c = this.eY.get(b);
                        if (c) return c;
                        r7(() => this.eY.set(b, {
                            status: 2
                        }));
                        this.wI.n3b(a).then(Y6.wrap(d => {
                            r7(() => {
                                this.eY.set(b, d.ok ? {
                                    status: 1,
                                    data: d.value
                                } : M2())
                            })
                        }), Y6.wrap(() => {
                            r7(() => {
                                this.eY.set(b, M2())
                            })
                        }));
                        return __c.z(this.eY.get(b))
                    }
                    constructor(a) {
                        this.wI = a;
                        this.eY = (RKc.G(this), new Map)
                    }
                };
                var SKc = class {
                    static G(a) {
                        L(a, {
                            gda: w7.shallow,
                            wT: w7.shallow
                        })
                    }
                    Oba(a) {
                        a = s7(a);
                        this.gda.delete(a)
                    }
                    constructor(a, b, c) {
                        this.wI = a;
                        this.Lr = b;
                        this.formData = c;
                        this.gda = (SKc.G(this), new Map);
                        this.wT = new Map
                    }
                };
                var RIc = 18 * iKc;
                var TKc = __c.J_({
                        D: gKc
                    }),
                    UKc = __c.y_()(() => ({
                        IYb(a) {
                            return {
                                data: {
                                    D: {
                                        type: "quiz",
                                        value: SIc(a)
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 500,
                                    height: 600
                                }
                            }
                        }
                    }));
                var VKc;
                VKc = __c.i_()(({
                    $L: {
                        ka: a,
                        Hg: b,
                        ab: c
                    },
                    wi: {
                        iwb: d,
                        Ch: e
                    }
                }) => {
                    const f = w7.box(),
                        g = new WeakMap;
                    return {
                        metadata: {
                            type: "form",
                            VV: h => h.value.id,
                            name: void 0
                        },
                        D: __c.h_(y7(({
                            data: h,
                            Ee: k,
                            Oh: {
                                page: l
                            }
                        }) => {
                            l = l.container;
                            const m = h.D.value,
                                n = m.id,
                                p = l.id;
                            var q = g.get(m);
                            if (!q || q.f_ !== n || q.ci !== p) {
                                let w;
                                if (d && p) {
                                    w = d.O2b.get({
                                        f_: n,
                                        ci: p,
                                        $1b: l.extension
                                    });
                                    var r = new RKc(w);
                                    var t = new SKc(w, r, m)
                                }
                                q = new yKc(m, w, r, t, f, c, a, b);
                                q = {
                                    f_: n,
                                    ci: p,
                                    Lr: r,
                                    MM: t,
                                    ZBa: q
                                };
                                g.set(m, q)
                            }
                            t = q.Lr;
                            r = q.ZBa;
                            const u = q.MM;
                            dJc(() => {
                                if (u) return OIc(u)
                            }, [u]);
                            h =
                                LIc({
                                    data: h,
                                    Lr: t
                                });
                            return $6(tKc, {
                                ZBa: r,
                                nlb: {
                                    fk: k.fk,
                                    bn: k.bn,
                                    ffa: k.ffa,
                                    xua: k.xua
                                },
                                state: h,
                                nk: l.language || "en",
                                Ch: e
                            })
                        })),
                        f7: ["responsive"],
                        exports: {
                            ftb: f
                        }
                    }
                });
                __c.$_ = {
                    zh: UKc,
                    Ro: VKc,
                    Ah: TKc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/00ce33dd490890f6.js.map