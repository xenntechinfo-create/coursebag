(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [66708], {

        /***/
        649000: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(721157);
            __web_req__(258551);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var Ka = __c.Ka;
                var w = __c.w;
                var VZ = __c.VZ;
                var O = __c.O;
                var Kb = __c.Kb;
                var hd = __c.hd;
                var vE = __c.vE;
                var fn = __c.fn;
                var N = __c.N;
                var ji = __c.ji;
                var Qh = __c.Qh;
                var v = __c.v;
                var Sl = __c.Sl;
                var Qi = __c.Qi;
                var TV = __c.TV;
                var y = __c.y;
                var cv = __c.cv;
                var bv = __c.bv;
                var Uqc = function(a, b) {
                        a.aw.forEach(c => c(b));
                        a.uOa = b
                    },
                    Vqc = function(a, b) {
                        return c => {
                            c = a(c);
                            if (typeof c === "boolean") return c ? bv() : cv(b);
                            switch (c.state) {
                                case "valid":
                                    return c;
                                case "invalid":
                                    return cv(b);
                                default:
                                    throw new y(c);
                            }
                        }
                    },
                    Wqc = function(a) {
                        return b => {
                            for (const e of a) {
                                var c = e,
                                    d = b;
                                c = (Array.isArray(c) ? Vqc(...c) : c)(d);
                                c = typeof c === "boolean" ? c ? bv() : cv() : c.state === "invalid" && c.error == null ? cv() : c;
                                if (c.state === "invalid") return c
                            }
                            return bv()
                        }
                    },
                    Xqc = function(a, b) {
                        switch (a.status) {
                            case 1:
                                return b.wI ? {
                                    status: 1,
                                    data: b.wI(a.data)
                                } : a;
                            case 2:
                                return a;
                            case 3:
                                return b.error ? TV(b.error(a.error)) : a;
                            default:
                                throw new y(a);
                        }
                    },
                    Y5 = function(a, b) {
                        const c = b.wI,
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
                                throw new y(a);
                        }
                    },
                    Yqc = function(a) {
                        if (a.status === 1) return a.data
                    },
                    $qc = function(a) {
                        const b = Zqc(a, a.document.language ? ? "en"),
                            c = Z5(d => {
                                a.OO = d
                            });
                        Array.isArray(b) ? c(b) : b.then($5.wrap(c), $5.wrap(() => c([])))
                    },
                    Zqc = async function(a, b) {
                        const c = a6()();
                        try {
                            try {
                                const {
                                    OO: d
                                } = c.r(await c.s(a.Nlb ? ? (a.Nlb = __webpack_require__.me(434895).then(() => __c.arc)))), e = JSON.parse(d);
                                return Object.values(e[b] ? ? {})
                            } catch {
                                return c.r(), []
                            }
                        } finally {
                            c.s()
                        }
                    },
                    brc = function(a) {
                        const b = a.label,
                            c = a.x5,
                            d = a.onClick,
                            e = a.jp;
                        a = a.padding;
                        return b6("button", {
                            className: c6("zFy0ZQ", e === d6 && "YWvjNg", (e === e6 || e === f6) && "y1B_1A"),
                            style: {
                                "--Wa7Mmg": c.default,
                                "--mvXy3w": c.$g,
                                "--www8Xw": c.active,
                                "--neon6Q": c.al,
                                paddingInlineStart: a.qa,
                                paddingInlineEnd: a.Ha,
                                paddingBlockStart: a.ja,
                                paddingBlockEnd: a.va
                            },
                            disabled: e !== d6,
                            onClick: d,
                            onTouchEnd: f => {
                                f.stopPropagation()
                            },
                            children: b
                        })
                    },
                    g6 = function(a, b, c) {
                        if (b) switch (b.Pm) {
                            case "required":
                                return a.dla();
                            case "unknown_option_id":
                                return a.kla();
                            case "invalid_format":
                                return c.type === 5 ? a.Zka() : a.Yka();
                            case "invalid_email":
                                return a.Xka();
                            case "out_of_bounds":
                                switch (c ? .type) {
                                    case 4:
                                        return b.params.exact != null ? a.hla(b.params.exact) : b.params.UP != null ? a.jla(b.params.UP) : a.ila(b.params.Wga);
                                    case 1:
                                    case 2:
                                    case 3:
                                        return b.params.exact !=
                                            null ? a.ela(b.params.exact) : b.params.UP != null ? a.gla(b.params.UP) : a.fla(b.params.Wga);
                                    case 5:
                                        return b.params.exact != null ? a.ala(b.params.exact) : b.params.UP != null ? a.cla(b.params.UP) : a.bla(b.params.Wga);
                                    default:
                                        throw new y(c);
                                }
                            default:
                                throw new y(b);
                        }
                    },
                    crc = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new y(a);
                        }
                    },
                    drc = function(a) {
                        a = { ...__c.Tl,
                            stream: Qi.Bb().attrs(a.stream.sh(0)).eb(a.stream.X.trim() + "*\n").build()
                        };
                        return Sl.create(a)
                    },
                    j6 = function(a) {
                        const b = a.foa,
                            c = a.gridGap,
                            [d, e] = h6(0),
                            f = erc.count(a.children),
                            g = b * f + c * (f - 1),
                            h = i6(null);
                        frc(() => {
                            h.current && e(h.current.offsetWidth)
                        }, []);
                        return b6(grc, {
                            onResize: k => e(k.entry ? .width ? ? 0),
                            children: ({
                                measureRef: k
                            }) => b6("div", {
                                ref: hrc(k, h),
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
                    k6 = function(a, b) {
                        return __c.kn(__c.jn(__c.cn(a), b))
                    },
                    irc = function(a) {
                        const b = a.color;
                        a = a.Xa;
                        return b ? b : a.ref ? a.ref.ih[0].color : "#ffffff"
                    },
                    l6 = function(a, b) {
                        v(b.length > 0, "zero contrast candidates received");
                        const c = new Map;
                        return __c.gk(b, d => {
                            const e = c.get(d) ? ? __c.YX(d, a);
                            c.set(d, e);
                            return e
                        })
                    },
                    n6 = function(a, b, c) {
                        v(!0);
                        v(!0);
                        v(!0);
                        const {
                            ra: d,
                            a: e,
                            b: f
                        } = __c.Ym(a), {
                            ra: g,
                            a: h,
                            b: k
                        } = __c.Ym(b), l = (d + g) / 2;
                        var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
                        m = .5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
                        var n = e * (1 + m),
                            p = h * (1 + m),
                            q = Math.hypot(n, f),
                            r = Math.hypot(p, k);
                        m = (q + r) / 2;
                        var t = __c.ln(Math.atan2(f, n) * 180 / Math.PI);
                        const u = __c.ln(Math.atan2(k, p) * 180 / Math.PI);
                        n = Math.abs(t - u) > 180 ? (t + u + 360) / 2 : (t + u) / 2;
                        p = r - q;
                        q = 2 * Math.sqrt(q * r) * Math.sin((Math.abs(u -
                            t) <= 180 ? u - t : u <= t ? u - t + 360 : u - t - 360) / 2 * Math.PI / 180);
                        r = 1 + .045 * m;
                        t = 1 + .015 * m * (1 - .17 * Math.cos((n - 30) * Math.PI / 180) + .24 * Math.cos(2 * n * Math.PI / 180) + .32 * Math.cos((3 * n + 6) * Math.PI / 180) - .2 * Math.cos((4 * n - 63) * Math.PI / 180));
                        return Math.sqrt(((g - d) / (1 + .015 * (l - 50) ** 2 / Math.sqrt(20 + (l - 50) ** 2))) ** 2 + (p / (1 * r)) ** 2 + (q / (1 * t)) ** 2 + p / (1 * r) * (q / (1 * t)) * (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((n - 275) / 25) ** 2) * 2 * Math.PI / 180))) >= (c ? ? 20) ? a : l6(b, m6)
                    },
                    jrc = function({
                        size: a
                    }) {
                        return b6("svg", {
                            "aria-hidden": "true",
                            width: a,
                            height: a,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: b6("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                                fill: "#db142c"
                            })
                        })
                    },
                    mrc = function(a) {
                        const b = a.C4a,
                            c = a.zv,
                            d = a.gy,
                            e = a.yq,
                            f = a.jp,
                            [g, h, k] = o6(() => {
                                switch (b) {
                                    case 4:
                                    case 2:
                                        return ["#e3fff0", "#00873d", krc];
                                    case 3:
                                        return ["#ffd9df", "#c8001e", lrc];
                                    case 1:
                                        return [c.al, d.al];
                                    case 0:
                                        return e ? [c.selected, d.selected] : f === f6 || f === e6 ? [c.al, d.al] : [c.default];
                                    default:
                                        throw new y(b);
                                }
                            }, [b, c.al, c.selected, c.default, d.al, d.selected, e, f]),
                            l = b === 0 || b === 1;
                        return b6(p6, { ...a,
                            Im: k,
                            mS: a.mca === "s" ? void 0 : e ? d.selected : d.default,
                            joa: h,
                            backgroundColor: {
                                default: g,
                                $g: l ? c.$g : g,
                                active: l ?
                                    c.active : g,
                                selected: l ? c.selected : g
                            },
                            V7a: !!k
                        })
                    },
                    p6 = function(a) {
                        const b = a.b5a,
                            c = a.backgroundColor,
                            d = a.joa,
                            e = a.S,
                            f = a.yq,
                            g = a.label,
                            h = a.KXa,
                            k = a.onChange;
                        var l = a.mca;
                        const m = a.jp,
                            n = a.Oqa,
                            p = a.Im,
                            q = a.mS,
                            r = a.V7a,
                            t = a.JG,
                            u = a.ydb,
                            z = a.o0a,
                            A = a.p0a,
                            B = a.fia;
                        a = a.Sf;
                        const D = q6(),
                            F = q6(),
                            I = q6(),
                            K = i6(null),
                            L = i6(null),
                            M = l === "s" ? "radio" : "checkbox";
                        l = o6(() => {
                            const S = g.stream.bp(0);
                            return n !== void 0 ? r6(`${n.value}%`, { ...S,
                                "font-weight": "bold",
                                color: n.Nc,
                                "font-size": Qh(ji, S, "font-size") * nrc
                            }) : void 0
                        }, [n, g]);
                        const R = m === d6;
                        return s6("div", {
                            className: c6("VTAQRg", !(f || n) && "zt5zlQ", R && "A_ugOA", (m === e6 || m === f6) && "zMViSA", f && "Buj71Q"),
                            style: {
                                "--_v6jRQ": c.default,
                                "--CGAV4g": c.selected,
                                "--6wmixw": c.$g,
                                "--LX33kQ": c.active,
                                "--T5edVA": `${e}px`,
                                "--XYYx_A": `${a/2}px`,
                                padding: `${u}px`
                            },
                            onClick: R ? S => {
                                L.current ? .contains(S.target) || K.current ? .contains(S.target) || K.current ? .click()
                            } : void 0,
                            children: [b6("input", {
                                "aria-invalid": !!t,
                                "aria-checked": f,
                                "aria-labelledby": p ? F : void 0,
                                "aria-describedby": n || t ? `${n?I:""} ${t||""}`.trim() : void 0,
                                id: D,
                                name: b,
                                readOnly: m === e6,
                                disabled: m === f6,
                                type: M,
                                value: g.stream.X,
                                className: "EP8SeA",
                                onChange: R ? k : void 0,
                                onClick: R ? S => {
                                    M === "radio" && f && (S.preventDefault(), k())
                                } : void 0,
                                checked: f,
                                ref: K
                            }), n !== void 0 && b6("div", {
                                className: "GpAzFg",
                                role: "meter",
                                "aria-valuenow": n.value,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "data-percent": n.value,
                                style: {
                                    width: `${n.value}%`,
                                    "--60vMXA": n.XZa
                                }
                            }), s6("label", {
                                className: c6("rSeRzQ", p && "zSZK5w", M === "checkbox" && "bHM4Bw"),
                                htmlFor: D,
                                ref: L,
                                children: [!r && M === "checkbox" && b6("div", {
                                    className: c6("n4ooaw", f && "Jw4Eqw"),
                                    style: {
                                        "--THA9bg": q,
                                        "--KBfK1Q": `${B}px`,
                                        "--HgMgMg": orc(c.selected, z, A)
                                    }
                                }), b6("div", {
                                    children: b6(h, {
                                        text: d ? prc(g, d) : g
                                    })
                                })]
                            }), l && b6("div", {
                                id: I,
                                children: b6(h, {
                                    text: l
                                })
                            }), p && b6(p, {
                                id: F,
                                size: a
                            })]
                        })
                    },
                    orc = function(a, b, c) {
                        a = encodeURIComponent(a);
                        return `url("data:image/svg+xml,%3Csvg width='${c}' height='${b}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
                    },
                    qrc = function(a) {
                        return b6("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": t6.o5a,
                            children: b6("path", {
                                d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    rrc = function(a) {
                        return b6("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": t6.Idb,
                            children: b6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    src = function(a, b, c) {
                        b ? ? (b = 0);
                        if (c != null && (c > b && a > b && a <= c || c < b && a > c && a <= b)) return "hover";
                        if (a <= b) return "selected"
                    },
                    trc = function(a) {
                        switch (a) {
                            case 1:
                                return "email";
                            case 2:
                                return "text";
                            default:
                                throw new y(a);
                        }
                    },
                    urc = function(a, b, c, d) {
                        const e = f => {
                            const g = c();
                            return g != null ? `${f} | ${b.Kpa(g)}` : f
                        };
                        switch (a) {
                            case 0:
                                return e(d ? b.Apa() : b.Iwa());
                            case 1:
                            case 5:
                                return e(d ? b.zpa() : b.Jwa());
                            case 2:
                                return b.Npa();
                            case 3:
                                return b.loading();
                            case 4:
                                return b.$ka();
                            case 6:
                                return e(b.oua());
                            case 7:
                                return e(b.Vra());
                            default:
                                throw new y(a);
                        }
                    },
                    vrc = function(a, b, c, d, e) {
                        if (a === 0) return null;
                        a = Qi.Bb().attrs({
                            "font-family": c.fontFamily,
                            color: b.Nc,
                            "font-size": b.R7a,
                            "font-weight": "bold",
                            "text-align": "center",
                            direction: crc(c.direction),
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).eb(a === 2 ? d.Nia() : d.fna()).fo();
                        a = Sl.create({
                            stream: a.build(),
                            Fb: new Map
                        });
                        return e(a)
                    },
                    wrc = function(a) {
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
                                    throw new y(b);
                            }
                        })
                    },
                    xrc = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    zrc = function(a, b) {
                        switch (a.type) {
                            case 0:
                                var c = u6(a.options, a.J1);
                                if (!c.length) return {
                                    qR: "",
                                    zM: []
                                };
                                a = u6(b, a.J1);
                                return {
                                    qR: c.map(({
                                        label: d
                                    }) => d).join(", "),
                                    zM: a.map(({
                                        id: d
                                    }) => d)
                                };
                            case 2:
                            case 1:
                                return c = yrc(b, a.value), {
                                    qR: a.value,
                                    zM: c ? [c.id] : []
                                };
                            default:
                                throw new y(a);
                        }
                    },
                    Arc = function(a) {
                        switch (a.type) {
                            case 0:
                                return a = u6(a.options, a.J1).map(({
                                    label: b
                                }) => b).join(", "), {
                                    qR: a,
                                    zM: a
                                };
                            case 2:
                            case 1:
                                return {
                                    qR: a.value,
                                    zM: a.value
                                };
                            default:
                                throw new y(a);
                        }
                    },
                    u6 = function(a, b) {
                        const c = [];
                        for (const d of a) b.includes(d.id) && c.push(d);
                        return c
                    },
                    yrc = function(a, b) {
                        for (const c of a)
                            if (c.label.trimEnd() === b) return c
                    },
                    Crc = function(a) {
                        const {
                            min: b = 0,
                            max: c = Infinity
                        } = a;
                        if (b !== 0 || c !== Infinity) {
                            var d = Brc({
                                min: b,
                                max: c
                            });
                            if (d) return ({
                                length: e
                            }) => d(e)
                        }
                    },
                    Brc = function(a) {
                        const {
                            min: b = -Infinity,
                            max: c = Infinity
                        } = a;
                        if (b !== -Infinity || c !== Infinity) return d => {
                            if (b === c) {
                                if (d !== b) return cv({
                                    Pm: "out_of_bounds",
                                    params: {
                                        exact: b
                                    }
                                })
                            } else {
                                if (d < b) return cv({
                                    Pm: "out_of_bounds",
                                    params: {
                                        UP: b
                                    }
                                });
                                if (d > c) return cv({
                                    Pm: "out_of_bounds",
                                    params: {
                                        Wga: c
                                    }
                                })
                            }
                            return bv()
                        }
                    },
                    Drc = function(a) {
                        return a === void 0 ? 1 : a === 0 ? Infinity : a
                    },
                    Hrc = function(a, b, c) {
                        switch (a.type) {
                            case "select":
                                return new Erc(a, b, c);
                            case "text":
                                return new Frc(a, b, c);
                            case "number":
                                return new Grc(a, b, c);
                            default:
                                throw new y(a);
                        }
                    },
                    Irc = function(a) {
                        if (!v6(a, "q")) return 0;
                        const b = a.form.fields.first().id ? ? "",
                            c = w6(a, b, "select");
                        a = a.xla.get(b);
                        return a ? .Wi == null ? 0 : xrc(c.FB, a.Wi) ? 2 : 1
                    },
                    w6 = function(a, b, c) {
                        let d = a.yla.get(b);
                        const e =
                            a.form.fields.first(({
                                id: f
                            }) => f === b);
                        if (!e) throw Error(`Field ${b} is not found`);
                        if (c != null && e.type !== c) throw Error(`Field ${b} is not the expected type (${c})`);
                        d && d.Vb === e || (c = x6(() => a.Tla.get() ? .getContext(a.form.id) ? .qwb ? .get(b) ? ? a.xla.get(b)), d = Hrc(e, a.context, c), a.yla.set(b, d));
                        return d
                    },
                    Lrc = function(a) {
                        let b;
                        Jrc(a.RS, () => {
                            b = a.ZC ? .eab({
                                g7a: () => a.form.jj
                            }).subscribe(c => {
                                y6(() => {
                                    a.RS.set(c.results)
                                })
                            })
                        });
                        Krc(a.RS, () => {
                            b ? .unsubscribe()
                        })
                    },
                    v6 = function(a, b) {
                        if (a.form.fields.count() !== 1) return !1;
                        const c = a.form.fields.first();
                        return c.type === "select" && (c.variant ? .type === b || c.variant ? .type === void 0 && a.form.type === (b === "q" ? "quiz" : "poll"))
                    },
                    Nrc = function(a, {
                        Pm: b,
                        kB: c
                    }) {
                        const d = a.wv;
                        if (d) {
                            switch (b) {
                                case 5:
                                    b = N("STZx7Q");
                                    break;
                                default:
                                    b = N("izckBA")
                            }
                            c = c ? {
                                y5: N("mQhziQ"),
                                onClick: Z5(() => void a.submit())
                            } : void 0;
                            d.Fga({
                                NLa: b,
                                group: Mrc,
                                NF: c
                            })
                        }
                    },
                    Orc = function(a) {
                        y6(() => {
                            for (const b of a.yla.values()) b.reset()
                        })
                    },
                    Prc = function(a) {
                        return a.map(b => b.result)
                    },
                    Rrc = function(a, b, c, d) {
                        const e = a !== b,
                            f = e ? a : l6(a, m6),
                            {
                                h: g,
                                s: h,
                                ra: k
                            } = __c.en(f);
                        var l = new __c.Xm(g, h, k < 10 ? k + 6 : k - 6);
                        l = fn(l);
                        var m = new __c.Xm(g, h, k < 10 ? k + 10 : k - 10);
                        m = fn(m);
                        return {
                            backgroundColor: b,
                            accentColor: f,
                            HYa: k6(f, e ? .5 : .12),
                            GYa: l,
                            FYa: m,
                            IYa: k6(f, .4),
                            IG: n6("#db142c", b),
                            ... function() {
                                const n = l6(f, m6);
                                return c ? {
                                    Q7a: c,
                                    LV: c === f ? n : c,
                                    OYa: c === f ? n : c,
                                    pC: c,
                                    o5: c,
                                    gAa: fn(__c.nn(__c.jn(__c.cn(c), .8), __c.cn(b)))
                                } : {
                                    Q7a: d ? .Va === 1 ? l6(b, m6) : l6(a, m6),
                                    LV: n,
                                    OYa: e ? l6(a, m6) : a,
                                    pC: l6(b, m6),
                                    o5: l6(b, Qrc),
                                    gAa: l6(b, m6)
                                }
                            }(),
                            C6: f,
                            ... function() {
                                if (c) return {
                                    bX: k6(c, .12),
                                    cX: k6(c, .3),
                                    B6: k6(c,
                                        .5),
                                    MQ: k6(c, .1)
                                };
                                const n = n6("#000000", b);
                                return {
                                    bX: k6(n, .08),
                                    cX: k6(n, .12),
                                    B6: k6(n, .5),
                                    MQ: k6(n, .1)
                                }
                            }(),
                            ... function() {
                                if (c) return {
                                    Hia: k6(c, .6),
                                    Jia: k6(c, .5),
                                    Iia: k6(c, .5)
                                };
                                const n = n6("#000000", b, 50),
                                    {
                                        h: p,
                                        s: q,
                                        ra: r
                                    } = __c.en(n);
                                var t = new __c.Xm(p, q, r < 10 ? r + 6 : r - 6);
                                t = fn(t);
                                var u = new __c.Xm(p, q, r < 10 ? r + 10 : r - 10);
                                u = fn(u);
                                return {
                                    Hia: k6(n, .6),
                                    Jia: k6(t, .5),
                                    Iia: k6(u, .5)
                                }
                            }()
                        }
                    },
                    Src = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new y(a);
                        }
                    },
                    Urc = function(a) {
                        return new Trc(a.data.D.value, a.Yo)
                    },
                    Vrc = function(a, b) {
                        const c = z6(b);
                        b = a.wM.get(c);
                        if (a = a.Qj.get(c)) return {
                            status: 1,
                            data: a
                        };
                        switch (b) {
                            case void 0:
                            case "uninitialized":
                                return TV();
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
                                throw new y(b);
                        }
                    },
                    Wrc = function(a) {
                        return A6(() => {
                            const b = a.formData.gi,
                                c = a.Yo.getSettings(b);
                            return [a.formData.jj, b, c]
                        }, async ([b, c, d]) => {
                            const e = a6()();
                            try {
                                if (d.status === 1) {
                                    var f = z6({
                                            jj: b,
                                            submitter: d.data.xda
                                        }),
                                        g = a.wM.get(f);
                                    if (g !== "initialized" && g !== "initializing") {
                                        a.wM.set(f,
                                            "initializing");
                                        var h = e.r(await e.s(a.ZC.xFa({
                                            jj: b,
                                            gi: c
                                        })));
                                        y6(() => {
                                            a.wM.get(f) !== "initialized" && (a.wM.set(f, "initialized"), h.ok && h.value && a.Qj.set(f, h.value))
                                        })
                                    }
                                }
                            } finally {
                                e.s()
                            }
                        }, {
                            equals: B6.structural
                        })
                    },
                    z6 = function(a) {
                        return [a.jj, JSON.stringify(a.submitter)].join(":")
                    },
                    $rc = function(a) {
                        const b = a.title,
                            c = a.id,
                            d = a.fields,
                            e = a.X6,
                            f = a.R0,
                            g = a.I1,
                            h = a.borderColor,
                            k = a.fe,
                            l = a.S,
                            m = a.Mwb,
                            [n, p] = [f, g].map(q => typeof q === "string" ? q : q.ih[0].color || "#ffffff");
                        return {
                            minHeight: 500,
                            minWidth: 368,
                            id: c,
                            jj: __c.td(),
                            gi: void 0,
                            type: "quiz",
                            Ch: 18,
                            si: 18,
                            direction: a.direction ? ? "l",
                            X6: e,
                            R0: typeof f === "string" ? { ...vE,
                                color: f
                            } : { ...vE,
                                Xa: f
                            },
                            I1: typeof g === "string" ? { ...vE,
                                color: g
                            } : { ...vE,
                                Xa: g
                            },
                            border: { ...__c.Zrb,
                                color: h ? ? n,
                                weight: k ? ? 8
                            },
                            S: l ? ? 8,
                            QCa: {},
                            Vma: void 0,
                            title: b ? {
                                label: C6(b, {
                                    "font-size": 35.154,
                                    "font-weight": "bold",
                                    "text-align": "start",
                                    leading: 1200,
                                    color: l6(n, m6),
                                    "font-family": e,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on"
                                }),
                                KD: "c"
                            } : void 0,
                            header: {
                                u0: 1.953,
                                ko: 1.953,
                                lo: 1.953,
                                Gq: .64,
                                background: Xrc
                            },
                            nZ: !1,
                            Xca: !1,
                            fields: d.map(q => Yrc(q, p, e)).slice(0, hd("5684dca7", 10)),
                            JL: {
                                lo: 1.953,
                                ko: 1.953,
                                Gq: .64
                            },
                            footer: {
                                label: {
                                    type: "text2",
                                    text: C6(m.slice(0, hd("f368b7e8", 250)), {
                                        "text-align": "center",
                                        "font-weight": "bold",
                                        color: n === p ? p : l6(n, m6),
                                        "font-size": Zrc,
                                        "font-family": e,
                                        "font-kerning": "normal",
                                        "font-feature-liga": "on",
                                        "font-feature-clig": "on",
                                        "font-feature-calt": "on"
                                    })
                                },
                                KD: void 0,
                                Gq: 1.953,
                                ko: 1.953,
                                lo: 1.953,
                                v0: .512
                            }
                        }
                    },
                    Yrc = function(a, b, c) {
                        const d = {
                            label: {
                                type: "text2",
                                text: C6(a.label.slice(0,
                                    hd("f368b7e8", 250)), asc(b, c))
                            },
                            koa: 1,
                            required: a.required,
                            id: __c.td(),
                            KD: "c",
                            S: 8
                        };
                        switch (a.type) {
                            case "select":
                                const e = [],
                                    f = a.options.map((g, h) => {
                                        var k = __c.td();
                                        g = g.slice(0, hd("f368b7e8", 250));
                                        var l = {
                                            color: l6(b, m6),
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
                                                text: C6(g, l)
                                            }
                                        };
                                        a.variant.type === 2 && a.variant.isb.includes(h) && k.id && e.push(k.id);
                                        return k
                                    });
                                return { ...d,
                                    type: "select",
                                    XS: a.$Db ? 0 : 1,
                                    variant: bsc(a.variant),
                                    Oia: e,
                                    options: f.slice(0, hd("55264882", 10))
                                };
                            case "text":
                                return { ...d,
                                    type: "text",
                                    placeholder: a.placeholder,
                                    variant: csc(a.variant)
                                };
                            case "number":
                                return { ...d,
                                    type: "number",
                                    variant: dsc(a.variant),
                                    ...esc(a.min, a.max, a.variant)
                                };
                            default:
                                throw new y(a);
                        }
                    },
                    esc = function(a, b, c) {
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
                                    max: Math.max(1, Math.min(10, b ? ?
                                        10))
                                };
                            case 4:
                                return a = Math.max(1, a ? ? 1), b = Math.min(10, b ? ? 10), {
                                    min: Math.min(a, b),
                                    max: Math.max(a, b)
                                };
                            default:
                                throw new y(c);
                        }
                    },
                    bsc = function(a) {
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
                                throw new y(a);
                        }
                    },
                    csc = function(a) {
                        switch (a.type) {
                            case 1:
                                return {
                                    type: "e"
                                };
                            case 2:
                                return {
                                    type: "f",
                                    OH: a.zyb ? 1 : 3
                                };
                            default:
                                throw new y(a);
                        }
                    },
                    dsc = function(a) {
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
                                throw new y(a);
                        }
                    },
                    asc = function(a, b) {
                        return {
                            color: l6(a, m6),
                            "font-size": 18,
                            "font-family": b,
                            "font-weight": "semibold",
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }
                    };
                __c.YA.prototype.Oqa = __c.ca(18, function() {
                    return __c.TA(this, () => __c.FA(this.operators, "%", this.value))
                });
                __c.dp.prototype.Fga = __c.ca(8, function(a) {
                    Uqc(this, {
                        notification: a
                    })
                });
                var $5 = __webpack_require__(245307).Fm;
                var D6 = __webpack_require__(186901),
                    x6 = D6.EW,
                    y6 = D6.h5,
                    E6 = D6.L3,
                    B6 = D6.m3,
                    A6 = D6.mJ,
                    fsc = D6.O8,
                    Krc = D6.q$,
                    F6 = D6.sH,
                    Jrc = D6.tC,
                    Z5 = D6.XI;
                var a6 = __webpack_require__(75402)._;
                var gsc = __webpack_require__(322594),
                    b6 = gsc.jsx,
                    s6 = gsc.jsxs;
                var hsc = __webpack_require__,
                    isc = hsc(208463),
                    c6 = hsc.n_x(isc)();
                var G6 = __webpack_require__(205482),
                    erc = G6.Children,
                    H6 = G6.createElement,
                    jsc = G6.useEffect,
                    q6 = G6.useId,
                    frc = G6.useLayoutEffect,
                    o6 = G6.useMemo,
                    i6 = G6.useRef,
                    h6 = G6.useState;
                var I6 = __webpack_require__(721226).PA;
                var hrc = __webpack_require__(87387).A;
                var grc = __webpack_require__(34741).A;
                var ksc = __webpack_require__(536618).iB;
                var lsc = a => Kb("JWYKDQ", [a]),
                    msc = () => N("jh7u2w"),
                    nsc = a => Kb("Jj1O+A", [a]),
                    osc = a => Kb("sUWUOA", [a]),
                    psc = a => Kb("Q5Pg4w", [a]),
                    qsc = a => Kb("4EBAAA", [a]),
                    rsc = () => N("orPgUw"),
                    ssc = () => N("WjcAyg"),
                    tsc = () => N("CV+PYA"),
                    usc = () => N("As1GTA"),
                    vsc = () => N("xSH8Og"),
                    wsc = () => N("wutQEA"),
                    xsc = a => Kb("Qso6Xw", [a]),
                    ysc = () => N("z/bN8g"),
                    zsc = a => Kb("Aa3fvQ", [a]),
                    Asc = () => N("2Q9Q+A"),
                    Bsc = a => Kb("6QpLYA", [a]),
                    Csc = a => Kb("SWeX4Q", [a]),
                    Dsc = () => N("nFbxIQ"),
                    Esc = () => N("ktnWSg"),
                    Fsc = a => Kb("U28wGg", [a]),
                    Gsc = () => N("VGvKlQ"),
                    Hsc = a => Kb("kbfbNQ", [a]),
                    Isc = () => N("fNQh9A"),
                    Jsc = () => N("i3mNPA"),
                    Ksc = () => N("zt/K0Q"),
                    Lsc = () => N("pT68JA"),
                    Msc = () => N("g7pHPw");
                var J6 = 0,
                    K6 = {
                        cla: J6++,
                        Yka: J6++,
                        ela: J6++,
                        BPa: J6++,
                        jla: J6++,
                        bla: J6++,
                        $ka: J6++,
                        Iwa: J6++,
                        fna: J6++,
                        Vra: J6++,
                        oua: J6++,
                        hla: J6++,
                        Xka: J6++,
                        ala: J6++,
                        loading: J6++,
                        Apa: J6++,
                        Kpa: J6++,
                        ila: J6++,
                        Npa: J6++,
                        dla: J6++,
                        zpa: J6++,
                        gla: J6++,
                        fla: J6++,
                        Zka: J6++,
                        Nia: J6++,
                        kla: J6++,
                        Pqa: J6++,
                        Jwa: J6++
                    },
                    Nsc = class {
                        static F(a) {
                            O(a, {
                                OO: F6.shallow
                            })
                        }
                        getText(a, b, c) {
                            a = this.OO ? .[a];
                            c ? .length ? a ? (b = this.document.language, c = (new __c.Lb(a, b ? __c.Mb(b) : void 0, __c.Nb, {
                                    ignoreTag: !0
                                })).format(Object.fromEntries(Object.entries(c)))) : c = b(...c) : c = a ||
                                b();
                            return c
                        }
                        fla(...a) {
                            return this.getText(K6.fla, Hsc, a)
                        }
                        $ka() {
                            return this.getText(K6.$ka, rsc)
                        }
                        Nia() {
                            return this.getText(K6.Nia, Jsc)
                        }
                        fna() {
                            return this.getText(K6.fna, usc)
                        }
                        Vra() {
                            return this.getText(K6.Vra, vsc)
                        }
                        Kpa(...a) {
                            return this.getText(K6.Kpa, Bsc, a)
                        }
                        BPa(...a) {
                            return this.getText(K6.BPa, osc, a)
                        }
                        Npa() {
                            return this.getText(K6.Npa, Dsc)
                        }
                        loading() {
                            return this.getText(K6.loading, Asc)
                        }
                        oua() {
                            return this.getText(K6.oua, wsc)
                        }
                        Jwa() {
                            return this.getText(K6.Jwa, Lsc)
                        }
                        Iwa() {
                            return this.getText(K6.Iwa, ssc)
                        }
                        zpa() {
                            return this.getText(K6.zpa,
                                Msc)
                        }
                        Apa() {
                            return this.getText(K6.Apa, tsc)
                        }
                        Pqa() {
                            return this.getText(K6.Pqa, Gsc)
                        }
                        dla() {
                            return this.getText(K6.dla, Esc)
                        }
                        kla() {
                            return this.getText(K6.kla, Ksc)
                        }
                        Zka() {
                            return this.getText(K6.Zka, Isc)
                        }
                        Yka() {
                            return this.getText(K6.Yka, msc)
                        }
                        hla(...a) {
                            return this.getText(K6.hla, xsc, a)
                        }
                        jla(...a) {
                            return this.getText(K6.jla, psc, a)
                        }
                        ila(...a) {
                            return this.getText(K6.ila, Csc, a)
                        }
                        ala(...a) {
                            return this.getText(K6.ala, zsc, a)
                        }
                        cla(...a) {
                            return this.getText(K6.cla, lsc, a)
                        }
                        bla(...a) {
                            return this.getText(K6.bla, qsc, a)
                        }
                        ela(...a) {
                            return this.getText(K6.ela,
                                nsc, a)
                        }
                        gla(...a) {
                            return this.getText(K6.gla, Fsc, a)
                        }
                        Xka() {
                            return this.getText(K6.Xka, ysc)
                        }
                        constructor(a) {
                            this.document = a;
                            this.OO = (Nsc.F(this), void 0);
                            A6(() => a.language, () => $qc(this), {
                                fireImmediately: !0
                            })
                        }
                    };
                var Osc = class extends Nsc {};
                var Psc = VZ.eh({
                        type: VZ.ei(46, "text2"),
                        text: VZ.Rk(2423, "Richtext2")
                    }),
                    L6 = VZ.PU({
                        type: void 0
                    }, Psc),
                    M6 = {
                        id: VZ.yv(35),
                        koa: VZ.Di(37),
                        label: VZ.ref(38, L6),
                        KD: VZ.ey(2430, "c", "u"),
                        S: VZ.Di(29),
                        required: VZ.l0(2331)
                    },
                    Qsc = VZ.eh({
                        id: VZ.yv(35),
                        label: VZ.ref(38, L6)
                    }),
                    Rsc = VZ.eh({
                        type: VZ.ei(46, "r")
                    }),
                    Ssc = VZ.eh({
                        type: VZ.ei(46, "p")
                    }),
                    Tsc = VZ.eh({
                        type: VZ.ei(46, "q")
                    }),
                    Usc = VZ.PU({
                        type: void 0
                    }, Rsc, Ssc, Tsc),
                    Vsc = VZ.eh({ ...M6,
                        type: VZ.ei(46, "select"),
                        variant: VZ.$Ma(48, Usc),
                        options: VZ.listRef(41, Qsc),
                        XS: VZ.udb(39, {
                            min: 0
                        }),
                        Oia: VZ.qza(1549,
                            VZ.lua())
                    }),
                    Wsc = VZ.eh({
                        type: VZ.ei(46, "e")
                    }),
                    Xsc = VZ.eh({
                        type: VZ.ei(46, "f"),
                        OH: VZ.tA(40, {
                            min: 1
                        })
                    }),
                    Ysc = VZ.PU({
                        type: void 0
                    }, Wsc, Xsc),
                    Zsc = VZ.eh({ ...M6,
                        type: VZ.ei(46, "text"),
                        variant: VZ.ref(48, Ysc),
                        placeholder: VZ.yv(42)
                    }),
                    $sc = VZ.eh({
                        type: VZ.ei(46, "a")
                    }),
                    atc = VZ.eh({
                        type: VZ.ei(46, "b")
                    }),
                    btc = VZ.eh({
                        type: VZ.ei(46, "c")
                    }),
                    ctc = VZ.eh({
                        type: VZ.ei(46, "d")
                    }),
                    dtc = VZ.PU({
                        type: void 0
                    }, $sc, atc, btc, ctc),
                    etc = VZ.eh({ ...M6,
                        type: VZ.ei(46, "number"),
                        variant: VZ.ref(48, dtc),
                        min: VZ.Di(1),
                        max: VZ.Di(2)
                    }),
                    ftc = VZ.PU({
                            type: void 0
                        },
                        Zsc, Vsc, etc),
                    gtc = VZ.eh({
                        ko: VZ.Di(1),
                        lo: VZ.Di(2),
                        Gq: VZ.Di(3)
                    }),
                    htc = VZ.eh({
                        label: VZ.ref(38, L6),
                        KD: VZ.ey(2, "c", "u"),
                        Gq: VZ.Di(3),
                        ko: VZ.Di(4),
                        lo: VZ.Di(5),
                        v0: VZ.Di(6)
                    }),
                    itc = VZ.eh({
                        u0: VZ.Di(1),
                        Gq: VZ.Di(2),
                        lo: VZ.Di(3),
                        ko: VZ.Di(4),
                        background: VZ.YMa(5, "Fill")
                    }),
                    jtc = VZ.eh({
                        Ch: VZ.Di(4),
                        si: VZ.Di(5),
                        minHeight: VZ.Di(2062),
                        minWidth: VZ.Di(2077),
                        type: VZ.ei(46, "poll", "quiz"),
                        id: VZ.hu(35),
                        jj: VZ.hu(45),
                        gi: VZ.yv(27),
                        direction: VZ.ey(44, "l", "r"),
                        X6: VZ.yv(30),
                        R0: VZ.Rk(2216, "Fill"),
                        I1: VZ.Rk(2372, "Fill"),
                        border: VZ.Rk(28, "Stroke"),
                        S: VZ.Di(29),
                        nZ: VZ.l0(1802),
                        Vma: VZ.l0(9),
                        Xca: VZ.l0(52),
                        QCa: VZ.$Ma(34, VZ.eh({})),
                        title: VZ.m0(36, {
                            label: VZ.Rk(1, "Richtext2"),
                            KD: VZ.F$(2430, "c", "u")
                        }),
                        header: VZ.m0(1, itc.fields),
                        fields: VZ.listRef(32, ftc),
                        JL: VZ.m0(6, gtc.fields),
                        footer: VZ.m0(1705, htc.fields)
                    }),
                    ktc = __c.AY({
                        type: VZ.ei(37, "poll", "quiz"),
                        value: VZ.ref(48, jtc)
                    });
                var C6 = (a, b) => ({ ...__c.Tl,
                        stream: Qi.Bb().attrs({ ...b,
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).eb(a).fo().build()
                    }),
                    r6 = (a, b) => Sl.create(C6(a, b)),
                    ltc = {
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
                var mtc = 14 * __c.bP / 16,
                    Xrc = { ...vE,
                        Va: 1
                    };
                N("1Vvt4w");
                __c.td();
                N("4qFSiQ");
                N("W5ifXQ");
                N("8qLU3g");
                N("vuVf+w");
                N("7IUw4A");
                N("hblGCQ");
                N("0ICFJA");
                var t6 = __c.cp.N4a ? {
                    statusText: "1t7jg8u",
                    o5a: "36iimsp",
                    Idb: "1a1nvnm",
                    label: "32aek6n",
                    Ltb: "2tk7d5",
                    hHb: "2n1bnv6",
                    Lwb: "2na0kmu",
                    Fxb: "3qf811p",
                    Dxb: "246bpa8",
                    zGb: "3p3qlie",
                    Mtb: "3tchg28"
                } : {};
                var N6 = I6(a => {
                    const {
                        Vb: b,
                        Vd: c,
                        $m: d,
                        errorMessage: e,
                        JG: f,
                        aZ: g = !0
                    } = a, h = c.Pi, k = b.label.stream.xt("font-family")["font-family"];
                    var l = b.label.stream.xt("direction").direction;
                    const m = g ? "fieldset" : "div",
                        n = g ? "legend" : "label";
                    l = l.values().next().value ? ? "ltr";
                    return s6(m, {
                        className: "_4ILOcQ",
                        onTouchEnd: p => {
                            p.stopPropagation()
                        },
                        dir: l,
                        children: [b.Zhb && b6(n, {
                                htmlFor: g ? void 0 : a.Wo,
                                "data-testid": t6.label,
                                style: {
                                    paddingBlockEnd: `${b.padding.J$a}px`
                                },
                                children: b6(h, {
                                    text: d.required ? drc(b.label) : b.label
                                })
                            }), a.children,
                            e && b6("div", {
                                id: f,
                                className: "o_7gvw",
                                style: {
                                    "--wfznTw": b.si,
                                    "--qMNgbA": b.Ch * 1.5
                                },
                                role: "alert",
                                children: b6(h, {
                                    text: r6(e ? ? "", {
                                        "font-family": k.values().next().value,
                                        direction: l,
                                        "font-size": b.y4a,
                                        color: b.IG,
                                        "text-align": "end"
                                    })
                                })
                            })
                        ]
                    })
                });
                var ntc = I6(a => {
                    const b = a.Vb,
                        c = a.Vd,
                        d = a.$m,
                        e = a.Px,
                        f = a.jp,
                        g = d.FB,
                        h = q6(),
                        k = __c.x(d.min);
                    a = __c.x(d.max);
                    w(k >= 1);
                    w(a <= 10);
                    a = Array.from({
                        length: a - k + 1
                    }, (n, p) => ({
                        ygb: p + k
                    }));
                    const l = g6(e, d.qF, b),
                        m = q6();
                    return b6(N6, {
                        Vb: b,
                        Vd: c,
                        $m: d,
                        errorMessage: l,
                        JG: m,
                        aZ: !0,
                        children: b6(j6, {
                            foa: b.sizes.Iha,
                            gridGap: b.gridGap,
                            children: a.map(({
                                ygb: n
                            }) => {
                                var p = Number(g);
                                const q = `${h}-${n}`,
                                    r = f !== d6 ? void 0 : Z5(() => {
                                        d.lq = String(n);
                                        d.Ct = !0
                                    });
                                p = p === n;
                                return s6("div", {
                                    className: c6("dAwWRA", f === d6 && !p && "oKt_Cg", (f === e6 || f === f6) && "HLJxlw",
                                        p && "kpt6Eg"),
                                    style: {
                                        borderRadius: b.S,
                                        padding: `${b.padding.Ia}px`,
                                        "--dayejg": b.backgroundColor.default,
                                        "--1PG0Mg": b.backgroundColor.$g,
                                        "--9P_0YQ": b.backgroundColor.active,
                                        "--1y49lg": b.backgroundColor.selected,
                                        "---3Rdqg": b.backgroundColor.al,
                                        "--Cjk51Q": b.accentColor
                                    },
                                    onClick: r,
                                    children: [b6("input", {
                                        "aria-invalid": !!l,
                                        "aria-describedby": l ? m : void 0,
                                        checked: p,
                                        type: "radio",
                                        id: q,
                                        name: h,
                                        value: n,
                                        className: "Mh7mQg",
                                        onChange: r,
                                        disabled: f === f6,
                                        readOnly: f === e6
                                    }), b6("label", {
                                        htmlFor: q,
                                        className: "_1TTelg",
                                        children: b6(c.Pi, {
                                            text: r6(String(n), {
                                                "font-family": Qh(ji, b.label.stream.sh(0), "font-family"),
                                                color: p ? b.Nc.selected : b.Nc.default,
                                                "text-align": "center",
                                                "font-size": b.sizes.YW
                                            })
                                        })
                                    })]
                                }, n)
                            })
                        })
                    })
                });
                var otc = [{
                        M_: 1,
                        Im: ({
                            size: a,
                            color: b
                        }) => s6("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [b6("path", {
                                    fill: b,
                                    d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z"
                                }),
                                b6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: N("3Spodw")
                    }, {
                        M_: 2,
                        Im: ({
                            size: a,
                            color: b
                        }) => s6("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: [b6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                                fill: b
                            }), b6("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                                fill: b
                            })]
                        }),
                        label: N("bqTQmw")
                    }, {
                        M_: 3,
                        Im: ({
                            size: a,
                            color: b
                        }) => s6("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [b6("path", {
                                    fill: b,
                                    d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z"
                                }),
                                b6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: N("k/uS7g")
                    }, {
                        M_: 4,
                        Im: ({
                            size: a,
                            color: b
                        }) => b6("svg", {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: b6("path", {
                                "fill-rule": "evenodd",
                                fill: b,
                                d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z"
                            })
                        }),
                        label: N("ssYkyg")
                    }, {
                        M_: 5,
                        Im: ({
                            size: a,
                            color: b
                        }) => s6("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [b6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                                    "clip-rule": "evenodd"
                                }), b6("path", {
                                    fill: b,
                                    d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z"
                                }),
                                b6("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: N("WKDtIg")
                    }],
                    ptc = I6(a => {
                        const b = a.Vb,
                            c = a.Vd,
                            d = a.$m,
                            e = a.Px,
                            f = a.jp,
                            g = d.FB;
                        w(d.min != null && d.min >= 1);
                        w(d.max != null && d.max <= 5);
                        a = otc.slice(d.min - 1, d.max);
                        const h = g6(e, d.qF, b),
                            k = q6(),
                            l = q6();
                        return b6(N6, {
                            Vb: b,
                            Vd: c,
                            $m: d,
                            errorMessage: h,
                            JG: k,
                            aZ: !0,
                            children: b6(j6, {
                                foa: b.sizes.Iha,
                                gridGap: b.gridGap,
                                children: a.map(({
                                    M_: m,
                                    Im: n,
                                    label: p
                                }) => {
                                    const q = Number(g),
                                        r = g === String(m),
                                        t = `${l}-${m}`,
                                        u = f === e6 || f === f6 ? void 0 : Z5(() => {
                                            d.lq = String(m)
                                        });
                                    return s6("div", {
                                        className: c6("r4VAMw", r && "jc6y_A", (f === e6 || f === f6) && "UpIThA", f === d6 && !r && "SMPq5g"),
                                        style: {
                                            "--hMlWEg": b.backgroundColor.default,
                                            "---127VA": b.backgroundColor.$g,
                                            "--9x4z1A": b.backgroundColor.active,
                                            "--W5Lfog": b.backgroundColor.selected,
                                            "--GtGNYg": b.backgroundColor.al,
                                            "--r8_7Tw": b.accentColor,
                                            borderRadius: b.S,
                                            padding: `${b.padding.Ia}px`
                                        },
                                        onClick: u,
                                        children: [b6("input", {
                                            "aria-invalid": !!h,
                                            "aria-describedby": h ? k : void 0,
                                            checked: q === m,
                                            type: "radio",
                                            id: t,
                                            name: l,
                                            value: m,
                                            className: "Mh7mQg",
                                            onChange: u,
                                            disabled: f === f6,
                                            readOnly: f === e6
                                        }), b6("label", {
                                            htmlFor: t,
                                            className: "Mh7mQg",
                                            children: b6("span", {
                                                children: p
                                            })
                                        }), b6("div", {
                                            className: "aOiRWQ",
                                            style: {
                                                width: b.sizes.Sf,
                                                height: b.sizes.Sf
                                            },
                                            children: b6(n, {
                                                size: b.sizes.Sf,
                                                color: r ? b.mS.selected : b.mS.default
                                            })
                                        })]
                                    }, m)
                                })
                            })
                        })
                    });
                var m6 = ["#000000", "#ffffff"];
                var qtc = I6(a => {
                    const b = a.Vb,
                        c = a.Vd,
                        d = a.$m,
                        e = a.jp;
                    var f = a.Px;
                    a = d.FB;
                    const g = c.n4,
                        h = !!d.qF,
                        k = q6(),
                        l = o6(() => h ? {
                            default: b.borderColor.error,
                            $g: b.borderColor.error,
                            focus: b.borderColor.error
                        } : e === d6 || e === O6 ? {
                            default: b.borderColor.default,
                            $g: b.borderColor.$g,
                            focus: b.borderColor.focus
                        } : {
                            default: b.borderColor.default,
                            $g: b.borderColor.default,
                            focus: b.borderColor.default
                        }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.$g, e, h]),
                        m = b.label.stream.sh(0),
                        n = ltc[Qh(ji, m, "font-weight")];
                    f = g6(f, d.qF, b);
                    const p = q6();
                    return b6(N6, {
                        Vb: b,
                        Vd: c,
                        $m: d,
                        errorMessage: f,
                        JG: k,
                        aZ: !1,
                        Wo: p,
                        children: s6("div", {
                            className: "ybpBnQ",
                            children: [b6(g, {
                                boxSizing: "border-box",
                                id: p,
                                type: "text",
                                inputMode: "numeric",
                                Mla: Qh(ji, m, "font-family"),
                                fontSize: `${b.sizes.YW}px`,
                                ci: b.Nc,
                                fontWeight: n,
                                value: a ? ? "",
                                name: b.id,
                                backgroundColor: "transparent",
                                borderStyle: "solid",
                                outline: "none",
                                borderWidth: b.sizes.uha,
                                sha: l,
                                borderRadius: b.S,
                                ariaInvalid: h,
                                paddingInlineEnd: h ? b.sizes.Sf * 1.5 : void 0,
                                Wh: h ? k : void 0,
                                onChange: Z5(q => {
                                    d.lq =
                                        q.target.value
                                }),
                                onBlur: Z5(() => {
                                    d.Ct = !0
                                }),
                                padding: b.padding.Ia,
                                readOnly: e === e6,
                                disabled: e === f6,
                                width: "100%"
                            }), h && b6("div", {
                                className: "_3v99oA",
                                style: {
                                    "--3tgqzg": `${b.sizes.Sf*.4}px`
                                },
                                children: b6(jrc, {
                                    size: b.sizes.Sf
                                })
                            })]
                        })
                    })
                });
                var nrc = 10 / 14,
                    rtc = I6(a => {
                        const b = a.Vb,
                            c = a.Vd,
                            d = a.$m,
                            e = a.jp,
                            f = a.Mma;
                        a = a.Px;
                        const g = b.options,
                            {
                                FB: h = [],
                                feedback: k
                            } = d,
                            l = q6(),
                            m = q6(),
                            n = x6(() => k.get() ? .Wi),
                            p = x6(() => k.get() ? .Eeb),
                            q = g6(a, d.qF, b),
                            r = e === d6 || e === O6;
                        return b6(N6, {
                            Vb: b,
                            Vd: c,
                            $m: d,
                            errorMessage: q,
                            JG: l,
                            children: b6("div", {
                                className: "iaCeXQ",
                                style: {
                                    gridGap: `${b.rowGap}px`
                                },
                                children: g.map(t => {
                                    var u = h.includes(t.id);
                                    const z = {
                                        mca: b.mca,
                                        b5a: `select-${m}`,
                                        S: b.S,
                                        label: t.label,
                                        background: b.zv,
                                        yq: u,
                                        KXa: c.Pi,
                                        JG: q ? l : void 0,
                                        ydb: b.padding.Ia,
                                        o0a: b.sizes.i0a,
                                        p0a: b.sizes.k0a,
                                        fia: b.sizes.fia,
                                        Sf: b.sizes.Sf,
                                        jp: e
                                    };
                                    switch (b.type) {
                                        case 1:
                                            var A = p.get();
                                            A = A ? Math.round(100 * (A.qqa.get(t.id) ? ? 0) / (A.total || 1)) : void 0;
                                            return H6(p6, { ...z,
                                                key: t.id,
                                                backgroundColor: {
                                                    default: A != null ? b.Jva.track : b.zv.default,
                                                    $g: b.zv.$g,
                                                    active: b.zv.active,
                                                    selected: A != null ? b.twa.track : b.zv.selected
                                                },
                                                joa: u ? b.gy.selected : r ? void 0 : b.gy.al,
                                                mS: u ? b.gy.selected : b.gy.default,
                                                Oqa: A != null ? {
                                                    value: A,
                                                    XZa: u ? b.twa.WF : b.Jva.WF,
                                                    Nc: u ? b.twa.text : b.Jva.text
                                                } : void 0,
                                                onChange: Z5(() => {
                                                    d.Iua(t.id);
                                                    d.Ct = !0;
                                                    f ? .()
                                                })
                                            });
                                        case 2:
                                            return u = n.get(), u = u == null ? 0 : u.includes(t.id) ? z.yq ? 4 : 2 : z.yq ? 3 : 1, H6(mrc, { ...z,
                                                key: t.id,
                                                zv: b.zv,
                                                gy: b.gy,
                                                C4a: u,
                                                onChange: Z5(() => {
                                                    d.Iua(t.id);
                                                    d.Ct = !0
                                                })
                                            });
                                        case 3:
                                            return H6(p6, { ...z,
                                                key: t.id,
                                                onChange: Z5(() => {
                                                    d.Iua(t.id);
                                                    d.Ct = !0
                                                }),
                                                mS: u ? b.gy.selected : b.gy.default,
                                                joa: u ? b.gy.selected : r ? void 0 : b.gy.al,
                                                backgroundColor: {
                                                    default: b.zv.default,
                                                    selected: b.zv.selected,
                                                    $g: b.zv.$g,
                                                    active: b.zv.active
                                                }
                                            });
                                        default:
                                            throw new y(b);
                                    }
                                })
                            })
                        })
                    }),
                    krc = a => b6("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": N("i3mNPA"),
                        children: s6("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [b6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), b6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#00873D"
                            }), b6("path", {
                                d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                                fill: "white"
                            })]
                        })
                    }),
                    lrc = a => b6("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": N("As1GTA"),
                        children: s6("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [b6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), b6("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#C8001E"
                            }), b6("path", {
                                d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: "white"
                            })]
                        })
                    });
                var ttc = I6(a => {
                        const b = a.Vb,
                            c = a.Vd,
                            d = a.$m,
                            e = a.Px,
                            f = a.jp,
                            g = d.YU.ok ? d.YU.value : void 0,
                            h = q6(),
                            k = q6(),
                            [l, m] = h6(null);
                        w(d.min != null && d.min >= 1);
                        w(d.max != null && d.max <= 10);
                        const n = g6(e, d.qF, b),
                            p = f === d6,
                            q = f === d6 || f === O6;
                        return b6(N6, {
                            Vb: b,
                            Vd: c,
                            $m: d,
                            errorMessage: n,
                            JG: k,
                            aZ: !0,
                            children: b6(j6, {
                                foa: b.Sf,
                                gridGap: 0,
                                children: Array.from({
                                    length: d.max
                                }, (r, t) => {
                                    const u = t + 1;
                                    r = src(u, g, l);
                                    t = p ? Z5(() => {
                                        d.lq = u === g ? "" : String(u);
                                        d.Ct = !0
                                    }) : void 0;
                                    return s6("label", {
                                        className: c6("Rw_cTw", !q && "g0Fw6w"),
                                        style: {
                                            "--4yIcLg": b.accentColor
                                        },
                                        onMouseEnter: p ? () => m(u) : void 0,
                                        onMouseLeave: p ? () => m(null) : void 0,
                                        children: [b6("input", {
                                            "aria-invalid": !!n,
                                            "aria-describedby": n ? k : void 0,
                                            checked: g === u,
                                            type: "radio",
                                            name: h,
                                            value: u,
                                            "aria-label": Kb("1aqRWg", [u]),
                                            className: "Mh7mQg",
                                            onClick: t,
                                            onChange: stc,
                                            disabled: f === f6,
                                            readOnly: f === e6
                                        }), r != null ? b6(qrc, {
                                            size: b.Sf,
                                            color: q ? r === "hover" ? b.fillColor.$g : b.fillColor.selected : b.fillColor.al
                                        }) : b6(rrc, {
                                            size: b.Sf,
                                            color: q ? b.borderColor.default : b.borderColor.al
                                        })]
                                    }, u)
                                })
                            })
                        })
                    }),
                    stc = () => {};
                var utc = I6(a => {
                    const b = a.Vb,
                        c = a.Vd,
                        d = a.$m,
                        e = a.jp;
                    var f = a.Px;
                    a = d.FB;
                    const g = c.n4,
                        h = c.Sfa,
                        k = !!d.qF,
                        l = q6(),
                        m = e === d6 || e === O6;
                    var n = o6(() => k ? {
                        default: b.borderColor.error,
                        $g: b.borderColor.error,
                        focus: b.borderColor.error
                    } : m ? {
                        default: b.borderColor.default,
                        $g: b.borderColor.$g,
                        focus: b.borderColor.focus
                    } : {
                        default: b.borderColor.default,
                        $g: b.borderColor.default,
                        focus: b.borderColor.default
                    }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.$g, m, k]);
                    const p = b.label.stream.sh(0),
                        q = ltc[Qh(ji,
                            p, "font-weight")],
                        r = q6();
                    n = {
                        boxSizing: "border-box",
                        Mla: Qh(ji, p, "font-family"),
                        fontSize: `${b.sizes.YW}px`,
                        ci: m ? b.Nc.default : b.Nc.al,
                        fontWeight: q,
                        padding: b.padding.Ia,
                        paddingInlineEnd: k ? b.sizes.Sf * 1.5 : void 0,
                        dOa: b.placeholder.color,
                        width: "100%",
                        sha: n,
                        backgroundColor: "transparent",
                        borderStyle: "solid",
                        outline: "none",
                        borderRadius: b.S,
                        borderWidth: b.sizes.uha,
                        ariaInvalid: k,
                        Wh: k ? l : void 0
                    };
                    f = g6(f, d.qF, b);
                    return b6(N6, {
                        Vb: b,
                        Vd: c,
                        $m: d,
                        errorMessage: f,
                        JG: l,
                        aZ: !1,
                        Wo: r,
                        children: s6("div", {
                            className: "DsSAig",
                            children: [b.OH >
                                1 ? b6(h, { ...n,
                                    rows: b.OH,
                                    id: r,
                                    name: b.id,
                                    placeholder: b.placeholder.text,
                                    disabled: e === f6,
                                    readOnly: e === e6,
                                    onBlur: Z5(() => {
                                        d.Ct = !0
                                    }),
                                    onChange: Z5(t => {
                                        d.lq = t.target.value
                                    }),
                                    resize: "none",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    value: a ? ? ""
                                }) : b6(g, { ...n,
                                    type: trc(b.variant),
                                    id: r,
                                    name: b.id,
                                    disabled: e === f6,
                                    readOnly: e === e6,
                                    onChange: Z5(t => {
                                        d.lq = t.target.value
                                    }),
                                    onBlur: Z5(() => {
                                        d.Ct = !0
                                    }),
                                    value: a ? ? "",
                                    placeholder: b.placeholder.text
                                }), k && b6("div", {
                                    className: c6("Xz8a5Q", b.OH > 1 && "XsCoFw"),
                                    style: {
                                        "--ozZJmw": `${b.sizes.Sf*
.4}px`
                                    },
                                    children: b6(jrc, {
                                        size: b.sizes.Sf
                                    })
                                })
                            ]
                        })
                    })
                });
                var vtc = I6(a => {
                    const b = a.messages,
                        c = a.footer;
                    var d = a.Z5a,
                        e = urc(a.KC, b, a.O6a, a.bib);
                    d = {
                        "font-family": d.fontFamily,
                        "font-size": c.n1a,
                        "text-align": "center",
                        direction: crc(d.direction),
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    };
                    var f = Qi.Bb().attrs(d);
                    f.attrs({
                        color: c.Nc
                    }).eb(e).fo();
                    e = Sl.create({
                        stream: f.build(),
                        Fb: new Map
                    });
                    f = window.location.origin;
                    v(!0);
                    var g = __c.RV(new __c.KZb("/form-data-processing"));
                    const h = f + __c.SV(__c.QV(g, "formUrl", window.location.href));
                    return s6("footer", {
                        children: [b6("div", {
                            "data-testid": t6.statusText,
                            children: b6(a.Pi, {
                                text: e
                            })
                        }), a.footer.M7a && a.KC !== 2 && b6("div", {
                            className: "_4x6reg",
                            children: b6("a", {
                                onClick: k => {
                                    a.Wu && (a.Wu.fcb(new __c.pIa({
                                        uri: h,
                                        target: 1
                                    })), k.preventDefault())
                                },
                                href: h,
                                target: "_blank",
                                onTouchEnd: k => {
                                    k.stopPropagation()
                                },
                                children: b6(a.Pi, {
                                    text: Sl.create({
                                        stream: Qi.Bb().attrs(d).attrs({
                                            color: c.Nc,
                                            decoration: "underline"
                                        }).eb(b.Pqa()).fo().build(),
                                        Fb: new Map
                                    })
                                })
                            })
                        })]
                    })
                });
                var wtc = I6(a => {
                    const b = a.header,
                        c = a.Vd;
                    return s6("div", {
                        className: "FnpX4Q",
                        style: {
                            paddingInlineStart: `${b.padding.qa}px`,
                            paddingInlineEnd: `${b.padding.Ha}px`,
                            paddingBlockStart: `${b.padding.ja}px`,
                            paddingBlockEnd: `${b.padding.va}px`
                        },
                        id: a.O7a,
                        children: [b.background && b6("div", {
                            className: "n9ICbQ",
                            children: b6(c.jl, {
                                fill: b.background
                            })
                        }), b6("div", {
                            role: "heading",
                            "aria-level": 1,
                            children: b6(c.Pi, {
                                text: b.label
                            })
                        })]
                    })
                });
                var d6 = 0,
                    O6 = 1,
                    e6 = 2,
                    f6 = 3,
                    xtc = I6(function(a) {
                        const b = a.state,
                            c = a.Yi,
                            d = a.Ula,
                            e = a.jYa;
                        a = a.Wu;
                        const f = b.theme,
                            g = b.header,
                            h = b.fields,
                            k = b.NF,
                            l = f.background,
                            m = f.S,
                            n = f.border,
                            p = e.Pi,
                            q = e.jl,
                            [r] = h6(() => F6.box(c));
                        jsc(() => {
                            y6(() => {
                                r.set(c)
                            })
                        }, [r, c]);
                        const [t] = h6(() => new Osc({
                            get language() {
                                return r.get()
                            }
                        })), u = o6(() => ksc(I => b6(p, {
                            text: I
                        })), [p]), z = v6(d, "p"), A = d.KC === 6 || d.KC === 7 && !z ? 2 : d.KC === 5 ? 1 : d.Pya ? 0 : 3, B = d.EM ? null : vrc(Irc(d), b.footer, f, t, u), D = !!k && (d.EM || !B), F = q6();
                        return s6("div", {
                            "aria-labelledby": F,
                            role: "form",
                            className: "_9sCIzQ",
                            style: {
                                borderRadius: m,
                                border: `${n.weight}px solid ${n.color}`
                            },
                            children: [b6("div", {
                                className: "wNGpBA",
                                children: b6(q, {
                                    fill: l
                                })
                            }), s6("div", {
                                className: "_6i3kwQ",
                                children: [g && b6(wtc, {
                                    header: g,
                                    O7a: F,
                                    Vd: e
                                }), b6("div", {
                                    className: "xIuERA",
                                    role: "group",
                                    style: {
                                        rowGap: b.iY.rowGap,
                                        paddingBlockStart: `${b.iY.ja}px`,
                                        paddingInlineStart: `${b.iY.qa}px`,
                                        paddingBlockEnd: `${b.iY.va}px`,
                                        paddingInlineEnd: `${b.iY.Ha}px`
                                    },
                                    children: h.map(I => b6("div", {
                                        className: c6("_6i3kwQ", "wNH5Fw", !!(I.type === 4 || I.type ===
                                            5 && I.variant === 3 || I.type === 5 && I.variant === 1) && "Od1Udw"),
                                        children: (() => {
                                            switch (I.type) {
                                                case 4:
                                                    return b6(utc, {
                                                        Vb: I,
                                                        Vd: e,
                                                        $m: w6(d, I.id, "text"),
                                                        Px: t,
                                                        jp: A
                                                    });
                                                case 5:
                                                    switch (I.variant) {
                                                        case 1:
                                                            return b6(qtc, {
                                                                Vb: I,
                                                                Vd: e,
                                                                $m: w6(d, I.id, "number"),
                                                                Px: t,
                                                                jp: A
                                                            });
                                                        case 2:
                                                            return b6(ptc, {
                                                                Vb: I,
                                                                Vd: e,
                                                                $m: w6(d, I.id, "number"),
                                                                Px: t,
                                                                jp: A
                                                            });
                                                        case 4:
                                                            return b6(ntc, {
                                                                Vb: I,
                                                                Vd: e,
                                                                $m: w6(d, I.id, "number"),
                                                                Px: t,
                                                                jp: A
                                                            });
                                                        case 3:
                                                            return b6(ttc, {
                                                                Vb: I,
                                                                Vd: e,
                                                                $m: w6(d, I.id, "number"),
                                                                Px: t,
                                                                jp: A
                                                            });
                                                        default:
                                                            throw new y(I);
                                                    }
                                                case 1:
                                                case 2:
                                                case 3:
                                                    return b6(rtc, {
                                                        Vb: I,
                                                        Vd: e,
                                                        $m: w6(d, I.id, "select"),
                                                        Px: t,
                                                        Mma: z ? () => d.Mma(I.id) : void 0,
                                                        jp: A
                                                    });
                                                default:
                                                    throw new y(I);
                                            }
                                        })()
                                    }, I.id))
                                }), s6("div", {
                                    className: c6("WwpS_Q"),
                                    style: {
                                        paddingInlineStart: `${b.UR.qa}px`,
                                        paddingInlineEnd: `${b.UR.Ha}px`,
                                        paddingBlockEnd: `${b.UR.va}px`
                                    },
                                    children: [D && b6(brc, {
                                        label: u(k.label),
                                        x5: k.backgroundColor,
                                        jp: A,
                                        onClick: Z5(() => d.submit()),
                                        padding: k.padding
                                    }), B && b6("div", {
                                        style: {
                                            paddingBlockStart: `${b.UR.efb}px`,
                                            paddingBlockEnd: `${b.UR.dfb}px`
                                        },
                                        children: B
                                    }), b6("div", {
                                        style: {
                                            paddingBlockStart: `${b.UR.Hbb}px`
                                        },
                                        children: b6(vtc, {
                                            footer: b.footer,
                                            KC: d.KC,
                                            messages: t,
                                            O6a: () => {
                                                var I = v6(d, "p") ? d.RS.get() ? .fields.get(d.form.fields.first().id ? ? "") ? .total ? ? 0 : void 0;
                                                return I
                                            },
                                            Z5a: f,
                                            Pi: e.Pi,
                                            Wu: a,
                                            bib: wrc(h)
                                        })
                                    })]
                                })]
                            })]
                        })
                    }),
                    prc = (a, b) => {
                        const c = a.stream.bp(0);
                        a = { ...__c.Tl,
                            stream: Qi.Bb().attrs({ ...c,
                                color: b
                            }).eb(a.stream.X).build()
                        };
                        return Sl.create(a)
                    };
                var P6 = {
                    Qm: "form_widget_interacted",
                    Tv(a) {
                        return __c.yt({
                            form_id: a.Sc,
                            form_type: a.Vla,
                            action_group: a.lr,
                            action: a.action,
                            location: a.location,
                            linked_design_id: a.Wyb,
                            toggle_value: a.dF,
                            editing_context: a.Nk == null ? void 0 : __c.zt(a.Nk),
                            performance_context: a.Mh == null ? void 0 : __c.At(a.Mh),
                            question_type: a.iGb
                        })
                    }
                };
                var Q6 = class {
                    static F(a) {
                        O(a, {
                            ZU: x6,
                            Ct: F6.ref,
                            YU: x6,
                            Oya: x6,
                            jRa: x6,
                            qF: x6
                        })
                    }
                    reset() {
                        this.Ct = !1;
                        this.lq = this.empty
                    }
                    get ZU() {}
                    get FB() {
                        return this.context.mode === "edit" ? this.empty : this.lq
                    }
                    get YU() {
                        if (this.isEmpty()) return this.required ? Ka({
                            Pm: "required"
                        }) : (0, __c.Ia)();
                        const a = this.isa(this.FB);
                        if (a.ok) {
                            const b = this.Oya(a.value);
                            if (b.state === "invalid") return Ka(b.error)
                        }
                        return a
                    }
                    get Oya() {
                        const a = this.ZU ? .filter(b => !!b);
                        return a ? .length ? Wqc(a) : bv
                    }
                    get jRa() {
                        return this.YU.map(() => this.isEmpty() ? void 0 :
                            this.serialize(this.FB))
                    }
                    get qF() {
                        return this.Ct && !this.YU.ok && this.context.mode === "interact" ? this.YU.error : void 0
                    }
                    get required() {
                        return !!this.Vb.required
                    }
                    isEmpty() {
                        const a = this.FB;
                        return a.length === 0 ? !0 : typeof a === "string" ? (a != null && a.trim().length > 0 ? bv() : cv()).state === "invalid" : !1
                    }
                    constructor(a, b, c) {
                        this.Vb = a;
                        this.context = b;
                        this.feedback = c;
                        this.Ct = (Q6.F(this), !1);
                        A6(() => Yqc(this.context.z$), d => {
                            d && (this.lq = (d = d.Cn.get(this.Vb.id ? ? "")) ? this.deserialize(d) : this.empty, this.Ct = !1)
                        })
                    }
                };
                var ytc = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/,
                    ztc = /[\s,]+/g,
                    Grc = class extends Q6 {
                        static F(a) {
                            O(a, {
                                lq: F6.ref
                            })
                        }
                        get min() {
                            return this.Vb.min
                        }
                        get max() {
                            return this.Vb.max
                        }
                        get ZU() {
                            return [Brc({
                                min: this.Vb.min,
                                max: this.Vb.max
                            })]
                        }
                        isa(a) {
                            return a.length <= 50 && ytc.test(a) && (a = a.replace(ztc, ""), a = Number(a), !isNaN(a) && isFinite(a)) ? (0, __c.Ia)(a) : Ka({
                                Pm: "invalid_format"
                            })
                        }
                        serialize(a) {
                            return {
                                type: 2,
                                Wo: this.Vb.id ? ? "",
                                hk: this.Vb.label.text.stream.X,
                                value: a
                            }
                        }
                        deserialize(a) {
                            return Arc(a).zM
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = (Grc.F(this), "number");
                            this.lq = this.empty = ""
                        }
                    };
                var Erc = class extends Q6 {
                    static F(a) {
                        O(a, {
                            lq: F6.ref,
                            bNa: x6({
                                equals: B6.shallow
                            }),
                            ZU: x6,
                            rqa: x6
                        })
                    }
                    get bNa() {
                        return new Set(this.Vb.options.map(({
                            id: a
                        }) => a ? ? ""))
                    }
                    get ZU() {
                        return [Crc({
                            max: Drc(this.Vb.XS)
                        })]
                    }
                    isa(a) {
                        return a.every(b => this.bNa.has(b)) ? (0, __c.Ia)(a.slice()) : Ka({
                            Pm: "unknown_option_id"
                        })
                    }
                    serialize(a) {
                        return {
                            type: 0,
                            Wo: this.Vb.id ? ? "",
                            hk: this.Vb.label.text.stream.X,
                            J1: a,
                            options: this.rqa
                        }
                    }
                    deserialize(a) {
                        return zrc(a, this.rqa).zM
                    }
                    get rqa() {
                        return this.Vb.options.map(a => ({
                            id: a.id ? ? "",
                            label: a.label.text.stream.X
                        }))
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (Erc.F(this), "select");
                        this.empty = [];
                        this.lq = [];
                        this.Iua = b => {
                            const c = this.FB;
                            this.lq = c ? .includes(b) ? c.filter(d => d !== b) : Drc(this.Vb.XS) > 1 && c ? .length ? [...c, b] : [b]
                        }
                    }
                };
                var Frc = class extends Q6 {
                    static F(a) {
                        O(a, {
                            lq: F6.ref
                        })
                    }
                    get ZU() {
                        const a = hd("b9892c2d", 500);
                        return [a != null ? Crc({
                            min: 0,
                            max: a
                        }) : void 0, this.Vb.variant.type === "e" ? Vqc(__c.DBb, {
                            Pm: "invalid_email"
                        }) : void 0]
                    }
                    isa(a) {
                        return (0, __c.Ia)(a.trim())
                    }
                    serialize(a) {
                        return {
                            type: 1,
                            Wo: this.Vb.id ? ? "",
                            hk: this.Vb.label.text.stream.X,
                            value: a
                        }
                    }
                    deserialize(a) {
                        return Arc(a).zM
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (Frc.F(this), "text");
                        this.lq = this.empty = ""
                    }
                };
                var Atc = class {
                    static F(a) {
                        O(a, {
                            z$: x6,
                            SQ: x6
                        })
                    }
                    get z$() {
                        if (!this.SG || !this.Yo) return {
                            status: 1,
                            data: void 0
                        };
                        const a = this.Yo.getSettings(this.formData.gi);
                        switch (a.status) {
                            case 2:
                            case 3:
                                return a;
                            default:
                                return Vrc(this.SG, {
                                    jj: this.formData.jj,
                                    submitter: a.data.xda
                                })
                        }
                    }
                    get SQ() {
                        if (!this.Yo) return TV();
                        const a = this.Yo.getSettings(this.formData.gi);
                        return Xqc(a, {
                            wI: b => ({
                                jj: this.formData.jj,
                                submitter: b.xda
                            })
                        })
                    }
                    get mode() {
                        return this.Tla.get() ? .getContext(this.formData.id) ? "edit" : "interact"
                    }
                    constructor(a, b,
                        c, d) {
                        this.formData = a;
                        this.Yo = b;
                        this.SG = c;
                        this.Tla = d;
                        Atc.F(this)
                    }
                };
                var Mrc = Symbol(),
                    Btc = class {
                        static F(a) {
                            O(a, {
                                JM: F6.ref,
                                xH: F6.ref,
                                Wi: x6,
                                xla: x6({
                                    equals: B6.structural
                                }),
                                SI: x6,
                                KC: x6,
                                Pya: x6
                            })
                        }
                        get Wi() {
                            const a = this.Yo ? .getSettings(this.form.gi);
                            return a ? .status === 1 ? a.data.Wi : void 0
                        }
                        get xla() {
                            var a = Yqc(this.context.z$);
                            if (a) {
                                {
                                    var b = this.xH;
                                    a = a != null ? this.RS.get() : void 0;
                                    var c = this.Wi;
                                    b = b ? .ok ? b.value.IL : b ? .error.IL;
                                    const g = new Map;
                                    if (b ? .size || a ? .fields ? .size || c ? .size) {
                                        var d = new Set([...(b ? .keys() || []), ...(a ? .fields.keys() || []), ...(c ? .keys() || [])]);
                                        for (f of d) {
                                            d = b ? .get(f) ? .feedback;
                                            var e = a ? .fields.get(f);
                                            e = e ? {
                                                Eeb: e
                                            } : void 0;
                                            const h = c ? .get(f);
                                            d = { ...d,
                                                ...e,
                                                ...(h ? {
                                                    Wi: h
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
                        get SI() {
                            return this.JM ? 2 : Y5(this.context.z$, {
                                wI: a => a == null ? 1 : 3,
                                loading: () => 4,
                                error: () => 1
                            })
                        }
                        get KC() {
                            return this.Kc ? .status === 2 ? 2 : this.ZC && this.Yo && this.SG ? this.SI === 2 ? 6 : this.SI === 3 ? 7 : this.SI === 4 ? 3 : Y5(this.context.SQ, {
                                wI: ({
                                    submitter: a
                                }) => a ? .type === "USER" ? 0 : 1,
                                loading: () => 3,
                                error: () => 4
                            }) : 5
                        }
                        get Pya() {
                            if (!this.ZC || this.context.mode !== "interact") return !1;
                            switch (this.KC) {
                                case 1:
                                case 0:
                                    return !0;
                                case 7:
                                    return v6(this, "p");
                                default:
                                    return !1
                            }
                        }
                        get EM() {
                            return this.context.mode === "edit"
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.form = a;
                            this.ZC = b;
                            this.Yo = c;
                            this.SG = d;
                            this.Tla = e;
                            this.Kc = f;
                            this.Wd = g;
                            this.wv = h;
                            this.yla = (Btc.F(this), new Map);
                            this.JM = !1;
                            this.RS = F6.box();
                            this.submit = E6(function() {
                                const k = this,
                                    l = a6(!0)();
                                return function*() {
                                    l.r();
                                    try {
                                        var m = k.ZC;
                                        const t = k.SG;
                                        var n = k.context;
                                        const u = k.Wd,
                                            z = k.form.fields,
                                            A = k.form.gi,
                                            B = k.form.jj,
                                            D = k.form.id,
                                            F = k.form.type;
                                        var p =
                                            (k.SI === 1 || v6(k, "p") && k.SI === 3) && k.context.mode === "interact";
                                        if (m && p && t && n.SQ.status === 1) {
                                            p = !0;
                                            var q = n.SQ.data;
                                            n = [];
                                            for (const I of z) {
                                                const K = w6(k, I.id ? ? "");
                                                K.Ct = !0;
                                                const L = K.jRa;
                                                L.ok ? p && L.value != null && n.push(L.value) : p = !1
                                            }
                                            if (p)
                                                if (n.length === 0) k.xH = Ka({
                                                    Pm: 5,
                                                    kB: !1
                                                });
                                                else {
                                                    k.JM = !0;
                                                    try {
                                                        const I = l.r(yield l.s(m.tab({
                                                            gi: A,
                                                            jj: B,
                                                            Cn: n
                                                        })));
                                                        k.xH = Prc(I);
                                                        if (I.ok) {
                                                            m = t;
                                                            var r = I.value.$v;
                                                            const K = z6(q);
                                                            m.Qj.set(K, r);
                                                            m.wM.set(K, "initialized");
                                                            u ? .track(P6, {
                                                                Sc: D,
                                                                Vla: F,
                                                                lr: "interacted",
                                                                action: "form_submitted",
                                                                location: "in_form"
                                                            })
                                                        }
                                                    } finally {
                                                        l.r(),
                                                            k.JM = !1
                                                    }
                                                }
                                            else k.xH = Ka({
                                                Pm: 6,
                                                kB: !1
                                            });
                                            k.xH.ok || Nrc(k, k.xH.error)
                                        }
                                    } finally {
                                        l.s()
                                    }
                                }()
                            });
                            this.HT = E6(function() {
                                const k = this,
                                    l = a6(!0)();
                                return function*() {
                                    l.r();
                                    try {
                                        const m = k.ZC,
                                            n = k.SG,
                                            p = k.context,
                                            q = k.form.jj,
                                            r = (k.SI === 1 || v6(k, "p") && k.SI === 3) && k.context.mode === "interact";
                                        if (m && r && n && p.SQ.status === 1) {
                                            k.JM = !0;
                                            try {
                                                l.r(yield l.s(m.HT({
                                                    jj: q
                                                }))).ok ? (k.Wd ? .track(P6, {
                                                    Sc: k.form.id,
                                                    Vla: "poll",
                                                    lr: "interacted",
                                                    action: "response_unsubmitted",
                                                    location: "in_form"
                                                }), n.HT(p.SQ.data), k.xH = void 0) : k.wv ? .Fga({
                                                    NLa: N("kgHTHw"),
                                                    group: Mrc,
                                                    NF: {
                                                        y5: N("mQhziQ"),
                                                        onClick: Z5(() => this.HT())
                                                    }
                                                })
                                            } finally {
                                                l.r(), k.JM = !1
                                            }
                                        }
                                    } finally {
                                        l.s()
                                    }
                                }()
                            });
                            this.Mma = E6(function(k) {
                                const l = this,
                                    m = a6(!0)();
                                return function*() {
                                    m.r();
                                    try {
                                        w6(l, k, "select").isEmpty() ? (l.Wd ? .track(P6, {
                                            Sc: l.form.id,
                                            Vla: "poll",
                                            lr: "interacted",
                                            action: "response_unsubmitted",
                                            location: "in_form"
                                        }), m.r(yield m.s(l.HT()))) : m.r(yield m.s(l.submit()))
                                    } finally {
                                        m.s()
                                    }
                                }()
                            });
                            A6(() => a.jj, () => {
                                this.xH = void 0;
                                this.RS.set(void 0);
                                v6(this, "p") && Orc(this)
                            });
                            this.context = new Atc(a, c, d, e);
                            Lrc(this)
                        }
                    };
                var R6 = Object.freeze({
                    Ch: 16,
                    si: 16,
                    rwb: 1.5625,
                    JL: {
                        lo: 1.25,
                        ko: 1.25,
                        Gq: 1
                    },
                    footer: {
                        Tdb: .625,
                        Udb: 1.25,
                        lo: 1.25,
                        ko: 1.25,
                        v0: .5,
                        qFb: .5,
                        pFb: 1.25
                    },
                    header: {
                        u0: 1.25,
                        Gq: 1,
                        lo: 1.25,
                        ko: 1.25
                    }
                });
                var Qrc = ["#cccccc", "#333333"];
                var Ctc = hd("4073adf", !1),
                    Trc = class {
                        get header() {
                            if (!this.Pa.nZ) return new Dtc(this.formData, this.Pa)
                        }
                        get fields() {
                            const a = this.formData.type;
                            return this.formData.fields.map(b => {
                                switch (b.type) {
                                    case "select":
                                        switch (b.variant ? .type) {
                                            case "p":
                                                return new Etc(b, this.Pa);
                                            case "q":
                                                return new S6(b, this.Pa);
                                            case void 0:
                                                switch (a) {
                                                    case "quiz":
                                                        return new S6(b, this.Pa);
                                                    case "poll":
                                                        return new Etc(b, this.Pa);
                                                    default:
                                                        throw new y(a);
                                                }
                                            case "r":
                                                return new Ftc(b, this.Pa);
                                            default:
                                                throw new y(b.variant);
                                        }
                                    case "text":
                                        switch (b.variant.type) {
                                            case "f":
                                                return new Gtc(b,
                                                    this.Pa);
                                            case "e":
                                                return new Htc(b, this.Pa);
                                            default:
                                                throw new y(b.variant);
                                        }
                                    case "number":
                                        switch (b.variant.type) {
                                            case "a":
                                                return new Itc(b, this.Pa);
                                            case "b":
                                                return new Jtc(b, this.Pa);
                                            case "c":
                                                return new Ktc(b, this.Pa);
                                            case "d":
                                                return new Ltc(b, this.Pa);
                                            default:
                                                throw new y(b.variant);
                                        }
                                    default:
                                        throw new y(b);
                                }
                            })
                        }
                        get NF() {
                            if ((this.fields.length !== 1 || this.fields[0].type !== 1) && this.formData.footer.ref) return {
                                backgroundColor: {
                                    default: this.Pa.Aa.accentColor,
                                    $g: this.Pa.Aa.GYa,
                                    active: this.Pa.Aa.FYa,
                                    al: this.Pa.Aa.IYa
                                },
                                label: this.formData.footer.ref ? .label.text,
                                padding: {
                                    ja: this.Pa.si * .64,
                                    va: this.Pa.si * .64,
                                    qa: this.Pa.si * .64,
                                    Ha: this.Pa.si * .64
                                }
                            }
                        }
                        get kc() {
                            return Xqc(this.Pa.kc, {
                                wI: a => ({
                                    submitter: a.xda
                                })
                            })
                        }
                        get footer() {
                            const a = Ctc && Y5(this.Pa.kc, {
                                    wI: c => !!c.Sba,
                                    default: () => !1
                                }),
                                b = this.Pa.Ch;
                            return {
                                R7a: b * mtc,
                                n1a: b * .625,
                                M7a: a,
                                Nc: this.Pa.Aa.gAa
                            }
                        }
                        get iY() {
                            const a = this.Pa.si,
                                b = this.formData.JL ? .ref;
                            return {
                                ja: a * 1,
                                qa: a * (b ? .lo ? ? R6.JL.lo),
                                Ha: a * (b ? .ko ? ? R6.JL.ko),
                                va: a * (b ? .Gq ? ? R6.JL.Gq),
                                rowGap: a * 2
                            }
                        }
                        get UR() {
                            const a = !!this.NF,
                                b = this.Pa.si;
                            return {
                                va: b * (this.formData.footer.ref ? .Gq ? ? (a ? R6.footer.Tdb : R6.footer.Udb)),
                                qa: b * (this.formData.footer.ref ? .lo ? ? R6.footer.lo),
                                Ha: b * (this.formData.footer.ref ? .ko ? ? R6.footer.ko),
                                Hbb: b * (this.formData.footer.ref ? .v0 ? ? (a ? R6.footer.v0 : 0)),
                                efb: b * .64,
                                dfb: b * .64
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Pa = new Mtc(a, b);
                            this.theme = new Ntc(a, this.Pa)
                        }
                    },
                    Mtc = class {
                        static F(a) {
                            O(a, {
                                Aa: x6
                            })
                        }
                        get Aa() {
                            return Rrc(this.Q0, this.Igb, this.Jmb, this.formData.header.ref ? .background ? .ref)
                        }
                        get Q0() {
                            return irc(this.formData.R0)
                        }
                        get Igb() {
                            return irc(this.formData.I1)
                        }
                        get direction() {
                            return this.formData.direction ===
                                "r" ? "r" : "l"
                        }
                        get kc() {
                            return this.Yo ? this.Yo.getSettings(this.formData.gi) : {
                                status: 2
                            }
                        }
                        get xcb() {
                            return this.formData.fields.count()
                        }
                        get nZ() {
                            return this.formData.nZ ? !0 : (this.formData.Vma || this.formData.title.ref ? .label == null) && this.formData.Xca === !1
                        }
                        get Ela() {
                            return this.xcb === 1 && (this.formData.Xca ? ? !0)
                        }
                        get Ch() {
                            if (this.formData.Ch) return this.formData.Ch;
                            const a = Qh(ji, this.l8.label.text.stream.sh(0), "font-size");
                            return this.Ela ? a / (this.l8.koa ? ? 1.5625) : a
                        }
                        get si() {
                            return this.formData.si ? ? 16
                        }
                        get Jmb() {
                            return this.l8.KD ===
                                "u" ? Qh(ji, this.l8.label.text.stream.sh(0), "color") : void 0
                        }
                        get l8() {
                            return __c.x(this.formData.fields.first(), "Malformed form data")
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Yo = b;
                            Mtc.F(this)
                        }
                    },
                    Ntc = class {
                        get background() {
                            return this.formData.I1
                        }
                        get border() {
                            return this.formData.border
                        }
                        get S() {
                            return this.formData.S ? ? 0
                        }
                        get fontFamily() {
                            return this.formData.X6
                        }
                        get direction() {
                            return this.formData.direction === "r" ? "r" : "l"
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Pa = b
                        }
                    },
                    Dtc = class {
                        get background() {
                            return this.formData.header ? .ref ? .background.ref ? ?
                                this.formData.R0
                        }
                        get label() {
                            var a = this.formData.fields.first();
                            return (a = this.Pa.Ela ? a.label.text : this.formData.title ? .ref ? .label) ? T6(a, this.Pa.direction) : r6("", {
                                "font-size": this.Pa.Ch * 1.953,
                                direction: Src(this.Pa.direction)
                            })
                        }
                        get padding() {
                            const a = this.formData.header.ref;
                            return {
                                ja: this.Pa.si * (a ? .u0 ? ? R6.header.u0),
                                va: this.Pa.si * (a ? .Gq ? ? R6.header.Gq),
                                qa: this.Pa.si * (a ? .lo ? ? R6.header.lo),
                                Ha: this.Pa.si * (a ? .ko ? ? R6.header.ko)
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Pa = b
                        }
                    },
                    U6 = class {
                        get id() {
                            return this.Vb.id ||
                                ""
                        }
                        get label() {
                            return T6(this.Vb.label.text, this.Pa.direction)
                        }
                        get Zhb() {
                            return !this.Pa.Ela
                        }
                        get accentColor() {
                            return this.Pa.Aa.accentColor
                        }
                        get IG() {
                            return this.Pa.Aa.IG
                        }
                        get y4a() {
                            return this.Pa.Ch * .8
                        }
                        get Ch() {
                            return this.Pa.Ch
                        }
                        get si() {
                            return this.Pa.si
                        }
                        get padding() {
                            return {
                                J$a: this.Pa.si * .512,
                                Ia: this.Pa.si * .64
                            }
                        }
                        constructor(a, b) {
                            this.Vb = a;
                            this.Pa = b
                        }
                    },
                    Otc = class extends U6 {
                        get placeholder() {
                            return {
                                color: k6(this.Pa.Aa.pC, .5),
                                text: this.Vb.placeholder || ""
                            }
                        }
                        get S() {
                            return this.Vb.S ? ? 8
                        }
                        get borderColor() {
                            return {
                                default: this.Pa.Aa.Hia,
                                $g: this.Pa.Aa.Jia,
                                focus: this.Pa.Aa.Iia,
                                error: this.Pa.Aa.IG
                            }
                        }
                        get Nc() {
                            return {
                                default: this.Pa.Aa.pC,
                                al: this.Pa.Aa.o5
                            }
                        }
                        get sizes() {
                            return {
                                YW: this.Pa.Ch * 1,
                                Sf: this.Pa.Ch * 1.5,
                                uha: this.Pa.Ch * .0625
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 4
                        }
                    },
                    Gtc = class extends Otc {
                        get OH() {
                            return this.Vb.variant.OH
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    Htc = class extends Otc {
                        constructor(...a) {
                            super(...a);
                            this.OH = this.variant = 1
                        }
                    },
                    V6 = class extends U6 {
                        get S() {
                            return this.Vb.S ? ? 8
                        }
                        constructor(...a) {
                            super(...a);
                            this.type =
                                5
                        }
                    },
                    Itc = class extends V6 {
                        get borderColor() {
                            return {
                                default: this.Pa.Aa.Hia,
                                $g: this.Pa.Aa.Jia,
                                focus: this.Pa.Aa.Iia,
                                error: this.Pa.Aa.IG
                            }
                        }
                        get Nc() {
                            return this.Pa.Aa.pC
                        }
                        get sizes() {
                            return {
                                YW: this.Pa.Ch * 1,
                                Sf: this.Pa.Ch * 1.5,
                                uha: this.Pa.Ch * .0625
                            }
                        }
                        get gridGap() {
                            return this.Pa.si * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 1
                        }
                    },
                    Jtc = class extends V6 {
                        get backgroundColor() {
                            return {
                                default: this.Pa.Aa.bX,
                                $g: this.Pa.Aa.cX,
                                active: this.Pa.Aa.B6,
                                selected: this.Pa.Aa.C6,
                                error: this.Pa.Aa.IG,
                                al: this.Pa.Aa.MQ
                            }
                        }
                        get mS() {
                            return {
                                default: this.Pa.Aa.pC,
                                selected: this.Pa.Aa.LV
                            }
                        }
                        get sizes() {
                            return {
                                Iha: this.Pa.Ch * 2.5,
                                Sf: this.Pa.Ch * 1.953
                            }
                        }
                        get gridGap() {
                            return this.Pa.si * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    Ktc = class extends V6 {
                        get borderColor() {
                            return {
                                default: this.Pa.Aa.pC,
                                al: this.Pa.Aa.o5
                            }
                        }
                        get fillColor() {
                            return {
                                $g: this.Pa.Aa.cX,
                                selected: this.Pa.Aa.C6,
                                al: this.Pa.Aa.MQ
                            }
                        }
                        get Sf() {
                            return this.Pa.Ch * 2.2
                        }
                        get gridGap() {
                            return this.Pa.si * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 3
                        }
                    },
                    Ltc = class extends V6 {
                        get backgroundColor() {
                            return {
                                default: this.Pa.Aa.bX,
                                $g: this.Pa.Aa.cX,
                                active: this.Pa.Aa.B6,
                                selected: this.Pa.Aa.C6,
                                error: this.Pa.Aa.IG,
                                al: this.Pa.Aa.MQ
                            }
                        }
                        get Nc() {
                            return {
                                default: this.Pa.Aa.pC,
                                selected: this.Pa.Aa.LV
                            }
                        }
                        get sizes() {
                            return {
                                Iha: this.Pa.Ch * 2.5,
                                YW: this.Pa.Ch * 1
                            }
                        }
                        get gridGap() {
                            return this.Pa.si * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 4
                        }
                    },
                    W6 = class extends U6 {
                        get options() {
                            return this.Vb.options.map(a => new Ptc(a, this.Pa))
                        }
                        get zv() {
                            return {
                                default: this.Pa.Aa.bX,
                                $g: this.Pa.Aa.cX,
                                active: this.Pa.Aa.B6,
                                selected: this.Pa.Aa.C6,
                                error: this.Pa.Aa.IG,
                                al: this.Pa.Aa.MQ
                            }
                        }
                        get gy() {
                            return {
                                default: this.Pa.Aa.pC,
                                selected: this.Pa.Aa.LV,
                                al: this.Pa.Aa.o5
                            }
                        }
                        get mca() {
                            return this.Vb.XS !== void 0 && this.Vb.XS !== 1 ? "m" : "s"
                        }
                        get S() {
                            return this.Vb.S ? ? 8
                        }
                        get rowGap() {
                            return .512 * this.Pa.si
                        }
                        get sizes() {
                            return {
                                Sf: this.Pa.Ch * 1,
                                fia: this.Pa.Ch * 1,
                                i0a: this.Pa.Ch * .5,
                                k0a: this.Pa.Ch * .625
                            }
                        }
                    },
                    S6 = class extends W6 {
                        static F(a) {
                            O(a, {
                                kc: x6
                            })
                        }
                        get kc() {
                            return Y5(this.Pa.kc, {
                                wI: a => (a = a.Wi.get(this.id) ? ? []) ? {
                                    status: 1,
                                    data: {
                                        Oia: a
                                    }
                                } : TV(),
                                loading: () => ({
                                    status: 2
                                }),
                                error: () => TV()
                            })
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = (S6.F(this), 2)
                        }
                    },
                    Etc = class extends W6 {
                        get twa() {
                            return {
                                text: this.Pa.Aa.LV,
                                track: this.Pa.Aa.HYa,
                                WF: this.Pa.Aa.accentColor
                            }
                        }
                        get Jva() {
                            return {
                                text: this.Pa.Aa.pC,
                                track: this.Pa.Aa.MQ,
                                WF: this.Pa.Aa.bX
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 1
                        }
                    },
                    Ftc = class extends W6 {
                        constructor(...a) {
                            super(...a);
                            this.type = 3
                        }
                    },
                    Ptc = class {
                        get id() {
                            return this.option.id || ""
                        }
                        get label() {
                            return T6(this.option.label.text, this.Pa.direction)
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.Pa = b
                        }
                    },
                    T6 = ksc((a, b) => {
                        const c = Sl.create(Sl.snapshot(a));
                        fsc(() => {
                            c.stream.setAttributes({
                                direction: Src(b)
                            })
                        });
                        return c
                    });
                var Qtc = class {
                    static F(a) {
                        O(a, {
                            iQ: F6.shallow
                        })
                    }
                    getSettings(a) {
                        const b = a || "",
                            c = this.iQ.get(b);
                        if (c) return c;
                        y6(() => this.iQ.set(b, {
                            status: 2
                        }));
                        this.ZC.c7a(a).then($5.wrap(d => {
                            y6(() => {
                                this.iQ.set(b, d.ok ? {
                                    status: 1,
                                    data: d.value
                                } : TV())
                            })
                        }), $5.wrap(() => {
                            y6(() => {
                                this.iQ.set(b, TV())
                            })
                        }));
                        return __c.x(this.iQ.get(b))
                    }
                    constructor(a) {
                        this.ZC = a;
                        this.iQ = (Qtc.F(this), new Map)
                    }
                };
                var Rtc = class {
                    static F(a) {
                        O(a, {
                            Qj: F6.shallow,
                            wM: F6.shallow
                        })
                    }
                    HT(a) {
                        a = z6(a);
                        this.Qj.delete(a)
                    }
                    constructor(a, b, c) {
                        this.ZC = a;
                        this.Yo = b;
                        this.formData = c;
                        this.Qj = (Rtc.F(this), new Map);
                        this.wM = new Map
                    }
                };
                var Zrc = 18 * mtc;
                var Stc = __c.BY({
                        D: ktc
                    }),
                    Ttc = __c.qY()(() => ({
                        Zia(a) {
                            return {
                                data: {
                                    D: {
                                        type: "quiz",
                                        value: $rc(a)
                                    },
                                    document: {}
                                },
                                Z: {
                                    width: 500,
                                    height: 600
                                }
                            }
                        }
                    }));
                var Utc;
                Utc = __c.aY()(({
                    lG: {
                        Wd: a,
                        wv: b,
                        Kc: c
                    },
                    hh: {
                        rq: d,
                        Wu: e
                    }
                }) => {
                    const f = F6.box(),
                        g = new WeakMap;
                    return {
                        metadata: {
                            type: "form",
                            zO: h => h.value.id,
                            name: void 0
                        },
                        D: __c.$X(I6(({
                            data: h,
                            Vd: k,
                            Ih: {
                                page: l
                            }
                        }) => {
                            l = l.container;
                            const m = h.D.value,
                                n = m.id,
                                p = l.id;
                            var q = g.get(m);
                            if (!q || q.Sc !== n || q.yd !== p) {
                                let z;
                                if (d && p) {
                                    z = d.TFa.get({
                                        Sc: n,
                                        yd: p,
                                        Zg: l.extension
                                    });
                                    var r = new Qtc(z);
                                    var t = new Rtc(z, r, m)
                                }
                                q = new Btc(m, z, r, t, f, c, a, b);
                                q = {
                                    Sc: n,
                                    yd: p,
                                    Yo: r,
                                    SG: t,
                                    Ula: q
                                };
                                g.set(m, q)
                            }
                            t = q.Yo;
                            r = q.Ula;
                            const u = q.SG;
                            jsc(() => {
                                if (u) return Wrc(u)
                            }, [u]);
                            h = Urc({
                                data: h,
                                Yo: t
                            });
                            return b6(xtc, {
                                Ula: r,
                                jYa: {
                                    Pi: k.Pi,
                                    jl: k.jl,
                                    n4: k.n4,
                                    Sfa: k.Sfa
                                },
                                state: h,
                                Yi: l.language || "en",
                                Wu: e
                            })
                        })),
                        EX: ["responsive"],
                        exports: {
                            x3a: f
                        }
                    }
                });
                __c.SY = {
                    ug: Ttc,
                    Om: Utc,
                    vg: Stc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/601bc9db9e4b448f.js.map