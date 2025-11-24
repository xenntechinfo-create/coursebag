(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [20716], {

        /***/
        856598: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var S0 = __c.S0;
                var lGc = function(a, b, c = 1) {
                        b = Math.min(a.weight, b);
                        if (b !== 0) return {
                            borderWidth: `${b*c}px`,
                            borderStyle: "solid",
                            borderColor: a.color ? ? a.fill.color ? ? a.fill.Za.ref ? .Ih[0] ? .color ? ? "transparent"
                        }
                    },
                    mGc = function(a) {
                        if (a.color) return {
                            backgroundColor: a.color
                        };
                        if (a.Za.ref && a.Za.ref.type === "linear") return {
                            backgroundColor: a.Za.ref ? .Ih[0] ? .color,
                            background: `linear-gradient(${a.Za.ref.rotation}deg, ${a.Za.ref?.Ih.map(b=>`${b.color}`).join(",")})`
                        };
                        if (a.Za.ref && a.Za.ref.type === "radial") {
                            const b = a.Za.ref.center.left,
                                c =
                                a.Za.ref.center.top,
                                d = a.Za.ref ? .Ih.map(e => `${e.color}`).join(",");
                            return {
                                backgroundColor: a.Za.ref ? .Ih[0] ? .color,
                                background: `radial-gradient(circle at ${`${Math.round(b*100)}%`} ${`${Math.round(c*100)}%`}, ${d})`
                            }
                        }
                        return {}
                    },
                    nGc = __webpack_require__(322594),
                    I6 = nGc.jsx,
                    oGc = nGc.jsxs;
                __webpack_require__(186901);
                var pGc = __webpack_require__(721226).PA;
                var qGc = new RegExp(/^(https?|ftp|tel|sms|mailto|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i),
                    rGc = __c.J_({
                        D: __c.I_({
                            label: S0.Lm(1, "Richtext2"),
                            link: S0.Qz(2, qGc),
                            background: S0.Lm(3, "Fill"),
                            V: S0.kF(4, {
                                min: 0,
                                max: 100
                            }),
                            border: S0.I7a(5, "Stroke")
                        })
                    });
                var sGc = __c.y_()(a => ({
                    createDefault(b) {
                        var c = a.aja ? .iZb ? ? __c.sg.Ub["font-family"];
                        c = { ...(b ? .attrs ? ? {}),
                            "font-family": b ? .attrs ? .["font-family"] ? ? c,
                            "font-size": b ? .attrs ? .["font-size"] ? ? 20,
                            color: b ? .attrs ? .color ? ? "#ffffff",
                            "text-align": b ? .attrs ? .["text-align"] ? ? "center"
                        };
                        return {
                            data: {
                                D: {
                                    label: { ...__c.GF,
                                        stream: __c.ah.Jb().attrs(c).mb(b ? .label ? ? __c.K("4sGMlw")).mb("\n").build()
                                    },
                                    link: b ? .link,
                                    background: b ? .background ? ? { ...__c.iD,
                                        color: "#0ba84a"
                                    },
                                    V: b ? .V ? ? 25,
                                    border: b ? .border
                                },
                                document: {}
                            },
                            P: b ? .P ? ? {
                                width: 300,
                                height: 50
                            }
                        }
                    }
                }));
                var tGc = __c.i_()(() => ({
                    metadata: {
                        type: "button",
                        name: __c.K("xdElgQ")
                    },
                    D: __c.h_(pGc(({
                        data: {
                            D: a
                        },
                        Ee: b
                    }) => oGc("div", {
                        className: "_2Z_Fmg",
                        children: [I6("div", {
                            className: "_0mvZOQ",
                            style: {
                                borderRadius: `${a.V}px`,
                                border: a.border.ref ? `solid ${a.border.ref.weight}px  ${a.border.ref.color}` : void 0
                            },
                            children: I6(b.bn, {
                                fill: a.background
                            })
                        }), I6("div", {
                            className: "ZcsBDg",
                            children: I6("div", {
                                className: "vyKiIw",
                                children: I6(b.fk, {
                                    text: a.label
                                })
                            })
                        })]
                    }))),
                    email: {
                        type: 2,
                        Component: pGc(({
                            data: {
                                D: a
                            },
                            Ee: b,
                            Oh: {
                                P: c
                            },
                            scale: d
                        }) => {
                            var e = c.width * d;
                            e = (e = a.border.ref ? lGc(a.border.ref, e / 2, d) : void 0) ? `${e.borderWidth} ${e.borderStyle} ${e.borderColor}` : void 0;
                            const f = a.V ? a.V * d : 0;
                            return I6("a", {
                                href: a.link ? ? "#",
                                "ses:no-track": "",
                                target: "_blank",
                                rel: "noopener",
                                style: {
                                    display: "table",
                                    width: "100%",
                                    height: `${c.height*d}px`,
                                    textDecoration: "none",
                                    borderCollapse: "separate",
                                    boxSizing: "border-box",
                                    borderSpacing: 0,
                                    padding: "8px",
                                    ...mGc(a.background),
                                    ...(e ? {
                                        borderTop: e,
                                        borderBottom: e,
                                        borderLeft: e,
                                        borderRight: e
                                    } : {}),
                                    ...(f ? {
                                        borderTopLeftRadius: `${f}px`,
                                        borderTopRightRadius: `${f}px`,
                                        borderBottomLeftRadius: `${f}px`,
                                        borderBottomRightRadius: `${f}px`
                                    } : {})
                                },
                                children: I6(b.fk, {
                                    text: a.label
                                })
                            })
                        })
                    },
                    exports: {},
                    f7: ["fixed"]
                }));
                __c.c0 = {
                    zh: sGc,
                    Ro: tGc,
                    Ah: rGc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/a1a33f0f158693e4.js.map