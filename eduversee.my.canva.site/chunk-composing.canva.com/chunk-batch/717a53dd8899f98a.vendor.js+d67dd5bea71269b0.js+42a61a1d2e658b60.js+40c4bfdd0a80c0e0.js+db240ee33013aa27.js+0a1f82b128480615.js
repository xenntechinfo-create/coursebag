; // __FILE_CONTENT_FOR__:717a53dd8899f98a.vendor.js
"use strict";
(globalThis.webpackChunk_canva_web = globalThis.webpackChunk_canva_web || []).push([
    [47918], {
        19779: (e, t, n) => {
            let r;
            n.r(t), n.d(t, {
                BinaryTexture: () => ie,
                Buffer: () => re,
                ElementsBuffer: () => _e,
                GltfRenderer: () => ue,
                GltfResource: () => ae,
                ImageTexture: () => ce,
                RenderTexture: () => be,
                Renderable: () => oe,
                Renderer: () => ge,
                Shader: () => ne,
                WebGlRenderer: () => X,
                createWebGlRenderer: () => fe,
                default: () => se,
                getAbsoluteTextureSize: () => v
            });
            const _ = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
                ignoreBOM: !0,
                fatal: !0
            }) : {
                decode: () => {
                    throw Error("TextDecoder not available")
                }
            };
            "undefined" != typeof TextDecoder && _.decode();
            let i = null;

            function c() {
                return null !== i && 0 !== i.byteLength || (i = new Uint8Array(r.memory.buffer)), i
            }

            function b(e, t) {
                return e >>>= 0, _.decode(c().subarray(e, e + t))
            }

            function o(e) {
                const t = r.__externref_table_alloc();
                return r.__wbindgen_export_2.set(t, e), t
            }

            function a(e, t) {
                try {
                    return e.apply(this, t)
                } catch (n) {
                    const e = o(n);
                    r.__wbindgen_exn_store(e)
                }
            }

            function g(e, t) {
                return e >>>= 0, c().subarray(e / 1, e / 1 + t)
            }

            function f(e) {
                return null == e
            }
            let u = 0;
            const s = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
                    encode: () => {
                        throw Error("TextEncoder not available")
                    }
                },
                w = "function" == typeof s.encodeInto ? function(e, t) {
                    return s.encodeInto(e, t)
                } : function(e, t) {
                    const n = s.encode(e);
                    return t.set(n), {
                        read: e.length,
                        written: n.length
                    }
                };

            function d(e, t, n) {
                if (void 0 === n) {
                    const n = s.encode(e),
                        r = t(n.length, 1) >>> 0;
                    return c().subarray(r, r + n.length).set(n), u = n.length, r
                }
                let r = e.length,
                    _ = t(r, 1) >>> 0;
                const i = c();
                let b = 0;
                for (; b < r; b++) {
                    const t = e.charCodeAt(b);
                    if (t > 127) break;
                    i[_ + b] = t
                }
                if (b !== r) {
                    0 !== b && (e = e.slice(b)), _ = n(_, r, r = b + 3 * e.length, 1) >>> 0;
                    const t = c().subarray(_ + b, _ + r);
                    b += w(e, t).written, _ = n(_, r, b, 1) >>> 0
                }
                return u = b, _
            }
            let l = null;

            function h() {
                return (null === l || !0 === l.buffer.detached || void 0 === l.buffer.detached && l.buffer !== r.memory.buffer) && (l = new DataView(r.memory.buffer)), l
            }
            const p = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => {
                r.__wbindgen_export_6.get(e.dtor)(e.a, e.b)
            }));

            function y(e, t, n, _) {
                const i = {
                        a: e,
                        b: t,
                        cnt: 1,
                        dtor: n
                    },
                    c = (...e) => {
                        i.cnt++;
                        try {
                            return _(i.a, i.b, ...e)
                        } finally {
                            0 == --i.cnt && (r.__wbindgen_export_6.get(i.dtor)(i.a, i.b), i.a = 0, p.unregister(i))
                        }
                    };
                return c.original = i, p.register(c, i, i), c
            }

            function m(e, t, n, _) {
                const i = {
                        a: e,
                        b: t,
                        cnt: 1,
                        dtor: n
                    },
                    c = (...e) => {
                        i.cnt++;
                        const t = i.a;
                        i.a = 0;
                        try {
                            return _(t, i.b, ...e)
                        } finally {
                            0 == --i.cnt ? (r.__wbindgen_export_6.get(i.dtor)(t, i.b), p.unregister(i)) : i.a = t
                        }
                    };
                return c.original = i, p.register(c, i, i), c
            }

            function x(e) {
                const t = typeof e;
                if ("number" == t || "boolean" == t || null == e) return `${e}`;
                if ("string" == t) return `"${e}"`;
                if ("symbol" == t) {
                    const t = e.description;
                    return null == t ? "Symbol" : `Symbol(${t})`
                }
                if ("function" == t) {
                    const t = e.name;
                    return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function"
                }
                if (Array.isArray(e)) {
                    const t = e.length;
                    let n = "[";
                    t > 0 && (n += x(e[0]));
                    for (let r = 1; r < t; r++) n += ", " + x(e[r]);
                    return n += "]", n
                }
                const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
                let r;
                if (!(n && n.length > 1)) return toString.call(e);
                if (r = n[1], "Object" == r) try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (_) {
                    return "Object"
                }
                return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r
            }

            function v(e, t) {
                const n = r.getAbsoluteTextureSize(e, t);
                return K.__wrap(n)
            }

            function A(e, t) {
                if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`)
            }

            function I(e, t) {
                r._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hed6db36449cfa690(e, t)
            }

            function R(e, t, n) {
                r.closure182_externref_shim(e, t, n)
            }

            function F(e, t) {
                r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0f70d4e01d040ed3(e, t)
            }

            function E(e, t, n) {
                r.closure429_externref_shim(e, t, n)
            }
            const L = ["omit", "same-origin", "include"],
                k = ["same-origin", "no-cors", "cors", "navigate"],
                T = "undefined" == typeof FinalizationRegistry ? {
                    register: () => {},
                    unregister: () => {}
                } : new FinalizationRegistry((e => r.__wbg_binarytexture_free(e >>> 0, 1)));
            let z = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, T.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_binarytexture_free(e, 0)
                }
                constructor(e) {
                    const t = r.binarytexture_constructor(e);
                    return this.__wbg_ptr = t >>> 0, T.register(this, this.__wbg_ptr, this), this
                }
                update(e) {
                    r.binarytexture_update(this.__wbg_ptr, e)
                }
                get id() {
                    return r.binarytexture_id(this.__wbg_ptr)
                }
            };
            const S = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_buffer_free(e >>> 0, 1)));
            let P = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, S.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_buffer_free(e, 0)
                }
                constructor(e) {
                    const t = r.buffer_constructor(e);
                    return this.__wbg_ptr = t >>> 0, S.register(this, this.__wbg_ptr, this), this
                }
                get id() {
                    return r.buffer_id(this.__wbg_ptr)
                }
            };
            const B = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_elementsbuffer_free(e >>> 0, 1)));
            let D = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, B.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_elementsbuffer_free(e, 0)
                }
                constructor(e) {
                    const t = r.elementsbuffer_constructor(e);
                    return this.__wbg_ptr = t >>> 0, B.register(this, this.__wbg_ptr, this), this
                }
                get id() {
                    return r.buffer_id(this.__wbg_ptr)
                }
            };
            const U = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_gltfrendererinternal_free(e >>> 0, 1)));
            class C {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, U.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_gltfrendererinternal_free(e, 0)
                }
                constructor(e) {
                    A(e, O);
                    const t = r.gltfrendererinternal_constructor(e.__wbg_ptr);
                    return this.__wbg_ptr = t >>> 0, U.register(this, this.__wbg_ptr, this), this
                }
                render_webgl(e, t) {
                    A(e, X), r.gltfrendererinternal_render_webgl(this.__wbg_ptr, e.__wbg_ptr, t)
                }
                dispose_webgl(e) {
                    const t = this.__destroy_into_raw();
                    A(e, X), r.gltfrendererinternal_dispose_webgl(t, e.__wbg_ptr)
                }
            }
            const M = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_gltfresource_free(e >>> 0, 1)));
            let O = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, M.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_gltfresource_free(e, 0)
                }
                constructor(e, ...t) {
                    const n = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u,
                        i = r.gltfresource_constructor(n, _, t);
                    return this.__wbg_ptr = i >>> 0, M.register(this, this.__wbg_ptr, this), this
                }
                id() {
                    return r.binarytexture_id(this.__wbg_ptr)
                }
                precache() {
                    r.gltfresource_precache(this.__wbg_ptr)
                }
                dispose() {
                    const e = this.__destroy_into_raw();
                    r.gltfresource_dispose(e)
                }
                load() {
                    return r.gltfresource_load(this.__wbg_ptr)
                }
            };
            const j = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_imagetexture_free(e >>> 0, 1)));
            let W = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, j.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_imagetexture_free(e, 0)
                }
                constructor(e) {
                    const t = r.imagetexture_constructor(e);
                    return this.__wbg_ptr = t >>> 0, j.register(this, this.__wbg_ptr, this), this
                }
                update(e) {
                    r.imagetexture_update(this.__wbg_ptr, e)
                }
                get id() {
                    return r.binarytexture_id(this.__wbg_ptr)
                }
            };
            const G = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_rendertexture_free(e >>> 0, 1)));
            let q = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, G.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_rendertexture_free(e, 0)
                }
                constructor(e) {
                    const t = r.rendertexture_constructor(e);
                    return this.__wbg_ptr = t >>> 0, G.register(this, this.__wbg_ptr, this), this
                }
                update(e) {
                    r.rendertexture_update(this.__wbg_ptr, e)
                }
                get id() {
                    return r.binarytexture_id(this.__wbg_ptr)
                }
            };
            const H = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_renderable_free(e >>> 0, 1)));
            let N = class e {
                static __wrap(t) {
                    t >>>= 0;
                    const n = Object.create(e.prototype);
                    return n.__wbg_ptr = t, H.register(n, n.__wbg_ptr, n), n
                }
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, H.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_renderable_free(e, 0)
                }
                constructor(e) {
                    const t = r.renderable_constructor(e);
                    return this.__wbg_ptr = t >>> 0, H.register(this, this.__wbg_ptr, this), this
                }
                update(e) {
                    r.renderable_update(this.__wbg_ptr, e)
                }
                get id() {
                    return r.binarytexture_id(this.__wbg_ptr)
                }
                get resources() {
                    return r.renderable_resources(this.__wbg_ptr)
                }
            };
            const V = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_shader_free(e >>> 0, 1)));
            let $ = class {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, V.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_shader_free(e, 0)
                }
                constructor(e) {
                    const t = r.shader_constructor(e);
                    return this.__wbg_ptr = t >>> 0, V.register(this, this.__wbg_ptr, this), this
                }
                get id() {
                    return r.buffer_id(this.__wbg_ptr)
                }
            };
            const J = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_size_free(e >>> 0, 1)));
            class K {
                static __wrap(e) {
                    e >>>= 0;
                    const t = Object.create(K.prototype);
                    return t.__wbg_ptr = e, J.register(t, t.__wbg_ptr, t), t
                }
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, J.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_size_free(e, 0)
                }
                get width() {
                    return r.__wbg_get_size_width(this.__wbg_ptr) >>> 0
                }
                set width(e) {
                    r.__wbg_set_size_width(this.__wbg_ptr, e)
                }
                get height() {
                    return r.__wbg_get_size_height(this.__wbg_ptr) >>> 0
                }
                set height(e) {
                    r.__wbg_set_size_height(this.__wbg_ptr, e)
                }
            }
            const Q = "undefined" == typeof FinalizationRegistry ? {
                register: () => {},
                unregister: () => {}
            } : new FinalizationRegistry((e => r.__wbg_webglrenderer_free(e >>> 0, 1)));
            class X {
                __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return this.__wbg_ptr = 0, Q.unregister(this), e
                }
                free() {
                    const e = this.__destroy_into_raw();
                    r.__wbg_webglrenderer_free(e, 0)
                }
                constructor(e, ...t) {
                    const n = r.webglrenderer_new_js(e, t);
                    return this.__wbg_ptr = n >>> 0, Q.register(this, this.__wbg_ptr, this), this
                }
                load(e) {
                    r.webglrenderer_load(this.__wbg_ptr, e)
                }
                release(e) {
                    r.webglrenderer_release(this.__wbg_ptr, e)
                }
                update(e) {
                    r.webglrenderer_update(this.__wbg_ptr, e)
                }
                render(e) {
                    r.webglrenderer_render(this.__wbg_ptr, e)
                }
                clear(e, ...t) {
                    r.webglrenderer_clear(this.__wbg_ptr, e, t)
                }
                readPixels(...e) {
                    return r.webglrenderer_readPixels(this.__wbg_ptr, e)
                }
                dispose() {
                    r.webglrenderer_dispose(this.__wbg_ptr)
                }
                flush() {
                    r.webglrenderer_flush(this.__wbg_ptr)
                }
                resize(e, t) {
                    r.webglrenderer_resize(this.__wbg_ptr, f(e) ? 4294967297 : e >>> 0, f(t) ? 4294967297 : t >>> 0)
                }
                get canvas() {
                    return r.webglrenderer_canvas(this.__wbg_ptr)
                }
                set onContextLost(e) {
                    r.webglrenderer_set_onContextLost(this.__wbg_ptr, e)
                }
            }

            function Y() {
                const e = {
                    wbg: {}
                };
                return e.wbg.__wbg_abort_410ec47a64ac6117 = function(e, t) {
                    e.abort(t)
                }, e.wbg.__wbg_abort_775ef1d17fc65868 = function(e) {
                    e.abort()
                }, e.wbg.__wbg_activeTexture_0f19d8acfa0a14c2 = function(e, t) {
                    e.activeTexture(t >>> 0)
                }, e.wbg.__wbg_addEventListener_4220b29000fe3462 = function() {
                    return a((function(e, t, n, r, _) {
                        e.addEventListener(b(t, n), r, _)
                    }), arguments)
                }, e.wbg.__wbg_append_8c7dd8d641a5f01b = function() {
                    return a((function(e, t, n, r, _) {
                        e.append(b(t, n), b(r, _))
                    }), arguments)
                }, e.wbg.__wbg_arrayBuffer_d1b44c4390db422f = function() {
                    return a((function(e) {
                        return e.arrayBuffer()
                    }), arguments)
                }, e.wbg.__wbg_at_7d852dd9f194d43e = function(e, t) {
                    return e.at(t)
                }, e.wbg.__wbg_attachShader_94e758c8b5283eb2 = function(e, t, n) {
                    e.attachShader(t, n)
                }, e.wbg.__wbg_bindBuffer_f32f587f1c2962a7 = function(e, t, n) {
                    e.bindBuffer(t >>> 0, n)
                }, e.wbg.__wbg_bindFramebuffer_bd02c8cc707d670f = function(e, t, n) {
                    e.bindFramebuffer(t >>> 0, n)
                }, e.wbg.__wbg_bindTexture_bc8eb316247f739d = function(e, t, n) {
                    e.bindTexture(t >>> 0, n)
                }, e.wbg.__wbg_blendEquationSeparate_c1aa26a9a5c5267e = function(e, t, n) {
                    e.blendEquationSeparate(t >>> 0, n >>> 0)
                }, e.wbg.__wbg_blendFuncSeparate_483be8d4dd635340 = function(e, t, n, r, _) {
                    e.blendFuncSeparate(t >>> 0, n >>> 0, r >>> 0, _ >>> 0)
                }, e.wbg.__wbg_bufferData_e782cf0ee06c693a = function(e, t, n, r, _) {
                    e.bufferData(t >>> 0, g(n, r), _ >>> 0)
                }, e.wbg.__wbg_buffer_09165b52af8c5237 = function(e) {
                    return e.buffer
                }, e.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
                    return e.buffer
                }, e.wbg.__wbg_byteOffset_fd862df290ef848d = function(e) {
                    return e.byteOffset
                }, e.wbg.__wbg_call_672a4d21634d4a24 = function() {
                    return a((function(e, t) {
                        return e.call(t)
                    }), arguments)
                }, e.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
                    return a((function(e, t, n) {
                        return e.call(t, n)
                    }), arguments)
                }, e.wbg.__wbg_canvas_61c22f731dd850f6 = function(e) {
                    const t = e.canvas;
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_clearColor_f0fa029dfbcc1982 = function(e, t, n, r, _) {
                    e.clearColor(t, n, r, _)
                }, e.wbg.__wbg_clearDepth_17cfee5be8476fae = function(e, t) {
                    e.clearDepth(t)
                }, e.wbg.__wbg_clearStencil_7addd3b330b56b27 = function(e, t) {
                    e.clearStencil(t)
                }, e.wbg.__wbg_clearTimeout_0b53d391c1b94dda = function(e) {
                    return clearTimeout(e)
                }, e.wbg.__wbg_clear_f8d5f3c348d37d95 = function(e, t) {
                    e.clear(t >>> 0)
                }, e.wbg.__wbg_clientHeight_216178c194000db4 = function(e) {
                    return e.clientHeight
                }, e.wbg.__wbg_clientWidth_ce67a04dc15fce39 = function(e) {
                    return e.clientWidth
                }, e.wbg.__wbg_compileShader_2307c9d370717dd5 = function(e, t) {
                    e.compileShader(t)
                }, e.wbg.__wbg_createBuffer_7a9ec3d654073660 = function(e) {
                    const t = e.createBuffer();
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_createElement_8c9931a732ee2fea = function() {
                    return a((function(e, t, n) {
                        return e.createElement(b(t, n))
                    }), arguments)
                }, e.wbg.__wbg_createFramebuffer_7824f69bba778885 = function(e) {
                    const t = e.createFramebuffer();
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_createObjectURL_6e98d2f9c7bd9764 = function() {
                    return a((function(e, t) {
                        const n = d(URL.createObjectURL(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
                            _ = u;
                        h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                    }), arguments)
                }, e.wbg.__wbg_createProgram_8ff56c485f3233d0 = function(e) {
                    const t = e.createProgram();
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_createShader_4a256a8cc9c1ce4f = function(e, t) {
                    const n = e.createShader(t >>> 0);
                    return f(n) ? 0 : o(n)
                }, e.wbg.__wbg_createTexture_9c536c79b635fdef = function(e) {
                    const t = e.createTexture();
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_cullFace_fbae6dd4d5e61ba4 = function(e, t) {
                    e.cullFace(t >>> 0)
                }, e.wbg.__wbg_deleteBuffer_a7822433fc95dfb8 = function(e, t) {
                    e.deleteBuffer(t)
                }, e.wbg.__wbg_deleteFramebuffer_cd3285ee5a702a7a = function(e, t) {
                    e.deleteFramebuffer(t)
                }, e.wbg.__wbg_deleteProgram_3fa626bbc0001eb7 = function(e, t) {
                    e.deleteProgram(t)
                }, e.wbg.__wbg_deleteShader_c65a44796c5004d8 = function(e, t) {
                    e.deleteShader(t)
                }, e.wbg.__wbg_deleteTexture_a30f5ca0163c4110 = function(e, t) {
                    e.deleteTexture(t)
                }, e.wbg.__wbg_depthFunc_2906916f4536d5d7 = function(e, t) {
                    e.depthFunc(t >>> 0)
                }, e.wbg.__wbg_depthMask_5fe84e2801488eda = function(e, t) {
                    e.depthMask(0 !== t)
                }, e.wbg.__wbg_depthRange_3cd6b4dc961d9116 = function(e, t, n) {
                    e.depthRange(t, n)
                }, e.wbg.__wbg_devicePixelRatio_68c391265f05d093 = function(e) {
                    return e.devicePixelRatio
                }, e.wbg.__wbg_disableVertexAttribArray_afd097fb465dc100 = function(e, t) {
                    e.disableVertexAttribArray(t >>> 0)
                }, e.wbg.__wbg_disable_8b53998501a7a85b = function(e, t) {
                    e.disable(t >>> 0)
                }, e.wbg.__wbg_document_d249400bd7bd996d = function(e) {
                    const t = e.document;
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_done_769e5ede4b31c67b = function(e) {
                    return e.done
                }, e.wbg.__wbg_drawArraysInstancedANGLE_342ee6b5236d9702 = function(e, t, n, r, _) {
                    e.drawArraysInstancedANGLE(t >>> 0, n, r, _)
                }, e.wbg.__wbg_drawArrays_6acaa2669c105f3a = function(e, t, n, r) {
                    e.drawArrays(t >>> 0, n, r)
                }, e.wbg.__wbg_drawElementsInstancedANGLE_096b48ab8686c5cf = function(e, t, n, r, _, i) {
                    e.drawElementsInstancedANGLE(t >>> 0, n, r >>> 0, _, i)
                }, e.wbg.__wbg_drawElements_16199ef1cc58b16a = function(e, t, n, r, _) {
                    e.drawElements(t >>> 0, n, r >>> 0, _)
                }, e.wbg.__wbg_drawImage_c8968fd5fac937f5 = function() {
                    return a((function(e, t, n, r, _, i) {
                        e.drawImage(t, n, r, _, i)
                    }), arguments)
                }, e.wbg.__wbg_drawingBufferHeight_1d398e1fc5bb18e9 = function(e) {
                    return e.drawingBufferHeight
                }, e.wbg.__wbg_drawingBufferWidth_78f7e4a8892a90fe = function(e) {
                    return e.drawingBufferWidth
                }, e.wbg.__wbg_enableVertexAttribArray_607be07574298e5e = function(e, t) {
                    e.enableVertexAttribArray(t >>> 0)
                }, e.wbg.__wbg_enable_d183fef39258803f = function(e, t) {
                    e.enable(t >>> 0)
                }, e.wbg.__wbg_entries_3265d4158b33e5dc = function(e) {
                    return Object.entries(e)
                }, e.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, t) {
                    let n, _;
                    try {
                        n = e, _ = t, console.error(b(e, t))
                    } finally {
                        r.__wbindgen_free(n, _, 1)
                    }
                }, e.wbg.__wbg_fetch_11bff8299d0ecd2b = function(e) {
                    return fetch(e)
                }, e.wbg.__wbg_fetch_509096533071c657 = function(e, t) {
                    return e.fetch(t)
                }, e.wbg.__wbg_flush_987c35de09e06fd6 = function(e) {
                    e.flush()
                }, e.wbg.__wbg_framebufferTexture2D_81a565732bd5d8fe = function(e, t, n, r, _, i) {
                    e.framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, _, i)
                }, e.wbg.__wbg_frontFace_4d4936cfaeb8b7df = function(e, t) {
                    e.frontFace(t >>> 0)
                }, e.wbg.__wbg_generateMipmap_13d3d6406de35b14 = function(e, t) {
                    e.generateMipmap(t >>> 0)
                }, e.wbg.__wbg_getActiveAttrib_ef9231684274e84a = function(e, t, n) {
                    const r = e.getActiveAttrib(t, n >>> 0);
                    return f(r) ? 0 : o(r)
                }, e.wbg.__wbg_getActiveUniform_3c49cb0b185d71e0 = function(e, t, n) {
                    const r = e.getActiveUniform(t, n >>> 0);
                    return f(r) ? 0 : o(r)
                }, e.wbg.__wbg_getAttribLocation_9db82d01924fa43d = function(e, t, n, r) {
                    return e.getAttribLocation(t, b(n, r))
                }, e.wbg.__wbg_getContext_e9cf379449413580 = function() {
                    return a((function(e, t, n) {
                        const r = e.getContext(b(t, n));
                        return f(r) ? 0 : o(r)
                    }), arguments)
                }, e.wbg.__wbg_getExtension_e6c97409b224b5dc = function() {
                    return a((function(e, t, n) {
                        const r = e.getExtension(b(t, n));
                        return f(r) ? 0 : o(r)
                    }), arguments)
                }, e.wbg.__wbg_getParameter_1f0887a2b88e6d19 = function() {
                    return a((function(e, t) {
                        return e.getParameter(t >>> 0)
                    }), arguments)
                }, e.wbg.__wbg_getProgramInfoLog_631c180b1b21c8ed = function(e, t, n) {
                    const _ = t.getProgramInfoLog(n);
                    var i = f(_) ? 0 : d(_, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        c = u;
                    h().setInt32(e + 4, c, !0), h().setInt32(e + 0, i, !0)
                }, e.wbg.__wbg_getProgramParameter_0c411f0cd4185c5b = function(e, t, n) {
                    return e.getProgramParameter(t, n >>> 0)
                }, e.wbg.__wbg_getRandomValues_38097e921c2494c3 = function() {
                    return a((function(e, t) {
                        globalThis.crypto.getRandomValues(g(e, t))
                    }), arguments)
                }, e.wbg.__wbg_getShaderInfoLog_7e7b38fb910ec534 = function(e, t, n) {
                    const _ = t.getShaderInfoLog(n);
                    var i = f(_) ? 0 : d(_, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        c = u;
                    h().setInt32(e + 4, c, !0), h().setInt32(e + 0, i, !0)
                }, e.wbg.__wbg_getShaderParameter_6dbe0b8558dc41fd = function(e, t, n) {
                    return e.getShaderParameter(t, n >>> 0)
                }, e.wbg.__wbg_getUniformLocation_838363001c74dc21 = function(e, t, n, r) {
                    const _ = e.getUniformLocation(t, b(n, r));
                    return f(_) ? 0 : o(_)
                }, e.wbg.__wbg_get_67b2ba62fc30de12 = function() {
                    return a((function(e, t) {
                        return Reflect.get(e, t)
                    }), arguments)
                }, e.wbg.__wbg_get_b9b93047fe3cf45b = function(e, t) {
                    return e[t >>> 0]
                }, e.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function(e, t) {
                    return e[t]
                }, e.wbg.__wbg_has_a5ea9117f258a0ec = function() {
                    return a((function(e, t) {
                        return Reflect.has(e, t)
                    }), arguments)
                }, e.wbg.__wbg_headers_9cb51cfd2ac780a4 = function(e) {
                    return e.headers
                }, e.wbg.__wbg_height_1d93eb7f5e355d97 = function(e) {
                    return e.height
                }, e.wbg.__wbg_height_838cee19ba8597db = function(e) {
                    return e.height
                }, e.wbg.__wbg_height_94941b7681aa1cce = function(e) {
                    return e.height
                }, e.wbg.__wbg_height_d3f39e12f0f62121 = function(e) {
                    return e.height
                }, e.wbg.__wbg_height_df1aa98dfbbe11ad = function(e) {
                    return e.height
                }, e.wbg.__wbg_height_e3c322f23d99ad2f = function(e) {
                    return e.height
                }, e.wbg.__wbg_href_87d60a783a012377 = function() {
                    return a((function(e, t) {
                        const n = d(t.href, r.__wbindgen_malloc, r.__wbindgen_realloc),
                            _ = u;
                        h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                    }), arguments)
                }, e.wbg.__wbg_href_e36b397abf414828 = function(e, t) {
                    const n = d(t.href, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u;
                    h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                }, e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function(e) {
                    let t;
                    try {
                        t = e instanceof ArrayBuffer
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_BigInt64Array_54093ef9577a0ead = function(e) {
                    let t;
                    try {
                        t = e instanceof BigInt64Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_BigUint64Array_11036ba986f4cf6c = function(e) {
                    let t;
                    try {
                        t = e instanceof BigUint64Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_CanvasRenderingContext2d_df82a4d3437bf1cc = function(e) {
                    let t;
                    try {
                        t = e instanceof CanvasRenderingContext2D
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_EventTarget_8c4eb19ce0b8fe12 = function(e) {
                    let t;
                    try {
                        t = e instanceof EventTarget
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Float32Array_01dd91be3195315d = function(e) {
                    let t;
                    try {
                        t = e instanceof Float32Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Float64Array_becba31e3ab3ef82 = function(e) {
                    let t;
                    try {
                        t = e instanceof Float64Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5 = function(e) {
                    let t;
                    try {
                        t = e instanceof HTMLCanvasElement
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_HtmlImageElement_3fe24a3cec7f62bb = function(e) {
                    let t;
                    try {
                        t = e instanceof HTMLImageElement
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_HtmlVideoElement_7f414b32f362e317 = function(e) {
                    let t;
                    try {
                        t = e instanceof HTMLVideoElement
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_ImageBitmap_d093d508663e313d = function(e) {
                    let t;
                    try {
                        t = e instanceof ImageBitmap
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_ImageData_fc475d401abac639 = function(e) {
                    let t;
                    try {
                        t = e instanceof ImageData
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Int16Array_51f409e7e77b5328 = function(e) {
                    let t;
                    try {
                        t = e instanceof Int16Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Int32Array_e5985ec23fafcb9c = function(e) {
                    let t;
                    try {
                        t = e instanceof Int32Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Int8Array_2897001329f70c4e = function(e) {
                    let t;
                    try {
                        t = e instanceof Int8Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function(e) {
                    let t;
                    try {
                        t = e instanceof Map
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_OffscreenCanvas_d55760945f91bf51 = function(e) {
                    let t;
                    try {
                        t = e instanceof OffscreenCanvas
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function(e) {
                    let t;
                    try {
                        t = e instanceof Response
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Uint16Array_17c549c1d1af4c33 = function(e) {
                    let t;
                    try {
                        t = e instanceof Uint16Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Uint32Array_b8b88c093c0d7ff4 = function(e) {
                    let t;
                    try {
                        t = e instanceof Uint32Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function(e) {
                    let t;
                    try {
                        t = e instanceof Uint8Array
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Uint8ClampedArray_72cd50327e1f4ad6 = function(e) {
                    let t;
                    try {
                        t = e instanceof Uint8ClampedArray
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(e) {
                    let t;
                    try {
                        t = e instanceof Window
                    } catch (n) {
                        t = !1
                    }
                    return t
                }, e.wbg.__wbg_isArray_a1eab7e0d067391b = function(e) {
                    return Array.isArray(e)
                }, e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function(e) {
                    return Number.isSafeInteger(e)
                }, e.wbg.__wbg_iterator_9a24c88df860dc65 = function() {
                    return Symbol.iterator
                }, e.wbg.__wbg_length_07e0772b8084db33 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_1e1dda66fc775b47 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_238152a0aedbb6e7 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_3b4f022188ae8db6 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_6ca527665d89694d = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_8cfd2c6409af88ad = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_a446193dc22c12f8 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_c38244946ebd6be9 = function(e) {
                    return e.length
                }, e.wbg.__wbg_length_e2d2a49132c1b256 = function(e) {
                    return e.length
                }, e.wbg.__wbg_linkProgram_e002979fe36e5b2a = function(e, t) {
                    e.linkProgram(t)
                }, e.wbg.__wbg_location_350d99456c2f3693 = function(e) {
                    return e.location
                }, e.wbg.__wbg_name_f5089a8a6c7a983a = function(e, t) {
                    const n = d(t.name, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u;
                    h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                }, e.wbg.__wbg_new_018dcc2d6c8c2f6a = function() {
                    return a((function() {
                        return new Headers
                    }), arguments)
                }, e.wbg.__wbg_new_23a2665fac83c611 = function(e, t) {
                    try {
                        var n = {
                            a: e,
                            b: t
                        };
                        const _ = new Promise(((e, t) => {
                            const _ = n.a;
                            n.a = 0;
                            try {
                                return function(e, t, n, _) {
                                    r.closure681_externref_shim(e, t, n, _)
                                }(_, n.b, e, t)
                            } finally {
                                n.a = _
                            }
                        }));
                        return _
                    } finally {
                        n.a = n.b = 0
                    }
                }, e.wbg.__wbg_new_2626a2990a9762f6 = function(e) {
                    return new Int16Array(e)
                }, e.wbg.__wbg_new_405e22f390576ce2 = function() {
                    return new Object
                }, e.wbg.__wbg_new_6377da097a44ce6e = function() {
                    return a((function() {
                        return new Image
                    }), arguments)
                }, e.wbg.__wbg_new_780abee5c1739fd7 = function(e) {
                    return new Float32Array(e)
                }, e.wbg.__wbg_new_78feb108b6472713 = function() {
                    return new Array
                }, e.wbg.__wbg_new_7a91e41fe43b3c92 = function(e) {
                    return new Uint8ClampedArray(e)
                }, e.wbg.__wbg_new_8a6f238a6ece86ea = function() {
                    return new Error
                }, e.wbg.__wbg_new_8de0180919aeafa0 = function(e) {
                    return new Int8Array(e)
                }, e.wbg.__wbg_new_9fee97a409b32b68 = function(e) {
                    return new Uint16Array(e)
                }, e.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
                    return a((function(e, t) {
                        return new URL(b(e, t))
                    }), arguments)
                }, e.wbg.__wbg_new_a12002a7f91c75be = function(e) {
                    return new Uint8Array(e)
                }, e.wbg.__wbg_new_e25e5aab09ff45db = function() {
                    return a((function() {
                        return new AbortController
                    }), arguments)
                }, e.wbg.__wbg_new_e3b321dcfef89fc7 = function(e) {
                    return new Uint32Array(e)
                }, e.wbg.__wbg_new_e9a4a67dbababe57 = function(e) {
                    return new Int32Array(e)
                }, e.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
                    return new Function(b(e, t))
                }, e.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
                    return a((function(e, t, n, r) {
                        return new URL(b(e, t), b(n, r))
                    }), arguments)
                }, e.wbg.__wbg_newwithbyteoffsetandlength_6d34787141015158 = function(e, t, n) {
                    return new Uint8ClampedArray(e, t >>> 0, n >>> 0)
                }, e.wbg.__wbg_newwithbyteoffsetandlength_999332a180064b59 = function(e, t, n) {
                    return new Int32Array(e, t >>> 0, n >>> 0)
                }, e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, n) {
                    return new Uint8Array(e, t >>> 0, n >>> 0)
                }, e.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function(e, t, n) {
                    return new Float32Array(e, t >>> 0, n >>> 0)
                }, e.wbg.__wbg_newwithjsu8clampedarrayandsh_7f3fdc36fd8f9d7a = function() {
                    return a((function(e, t, n) {
                        return new ImageData(e, t >>> 0, n >>> 0)
                    }), arguments)
                }, e.wbg.__wbg_newwithstrandinit_06c535e0a867c635 = function() {
                    return a((function(e, t, n) {
                        return new Request(b(e, t), n)
                    }), arguments)
                }, e.wbg.__wbg_newwithu8slicesequenceandoptions_075d550d668604ed = function() {
                    return a((function(e, t) {
                        return new Blob(e, t)
                    }), arguments)
                }, e.wbg.__wbg_next_25feadfc0913fea9 = function(e) {
                    return e.next
                }, e.wbg.__wbg_next_6574e1a8a62d1055 = function() {
                    return a((function(e) {
                        return e.next()
                    }), arguments)
                }, e.wbg.__wbg_parentElement_be28a1a931f9c9b7 = function(e) {
                    const t = e.parentElement;
                    return f(t) ? 0 : o(t)
                }, e.wbg.__wbg_pixelStorei_6aba5d04cdcaeaf6 = function(e, t, n) {
                    e.pixelStorei(t >>> 0, n)
                }, e.wbg.__wbg_push_737cfc8c1432c2c6 = function(e, t) {
                    return e.push(t)
                }, e.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function(e) {
                    queueMicrotask(e)
                }, e.wbg.__wbg_queueMicrotask_d3219def82552485 = function(e) {
                    return e.queueMicrotask
                }, e.wbg.__wbg_readPixels_05b426266eb8041a = function() {
                    return a((function(e, t, n, r, _, i, c, b, o) {
                        e.readPixels(t, n, r, _, i >>> 0, c >>> 0, 0 === b ? void 0 : g(b, o))
                    }), arguments)
                }, e.wbg.__wbg_removeEventListener_709135c542708608 = function() {
                    return a((function(e, t, n, r) {
                        e.removeEventListener(b(t, n), r)
                    }), arguments)
                }, e.wbg.__wbg_removeEventListener_a84e3f7cc5932d93 = function() {
                    return a((function(e, t, n, r, _) {
                        e.removeEventListener(b(t, n), r, _)
                    }), arguments)
                }, e.wbg.__wbg_renderable_new = function(e) {
                    return N.__wrap(e)
                }, e.wbg.__wbg_resolve_4851785c9c5f573d = function(e) {
                    return Promise.resolve(e)
                }, e.wbg.__wbg_revokeObjectURL_27267efebeb457c7 = function() {
                    return a((function(e, t) {
                        URL.revokeObjectURL(b(e, t))
                    }), arguments)
                }, e.wbg.__wbg_screen_8edf8699f70d98bc = function() {
                    return a((function(e) {
                        return e.screen
                    }), arguments)
                }, e.wbg.__wbg_setTimeout_73ce8df12de4f2f2 = function(e, t) {
                    return setTimeout(e, t)
                }, e.wbg.__wbg_set_10bad9bee0e9c58b = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_2bff331e6fe25bf4 = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_65595bdd868b3009 = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_6775f73144c2ef27 = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_958acb46280370e5 = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_98629cd6f1be3d3f = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_d23661d19148b229 = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_set_f4f1f0daa30696fc = function(e, t, n) {
                    e.set(t, n >>> 0)
                }, e.wbg.__wbg_setbody_5923b78a95eedf29 = function(e, t) {
                    e.body = t
                }, e.wbg.__wbg_setcapture_46bd7043887eba02 = function(e, t) {
                    e.capture = 0 !== t
                }, e.wbg.__wbg_setcapture_8cca597162578f78 = function(e, t) {
                    e.capture = 0 !== t
                }, e.wbg.__wbg_setcredentials_c3a22f1cd105a2c6 = function(e, t) {
                    e.credentials = L[t]
                }, e.wbg.__wbg_sethandleevent_8454ae22cde5c602 = function(e, t) {
                    e.handleEvent = t
                }, e.wbg.__wbg_setheaders_834c0bdb6a8949ad = function(e, t) {
                    e.headers = t
                }, e.wbg.__wbg_setheight_433680330c9420c3 = function(e, t) {
                    e.height = t >>> 0
                }, e.wbg.__wbg_setheight_da683a33fa99843c = function(e, t) {
                    e.height = t >>> 0
                }, e.wbg.__wbg_setmethod_3c5280fe5d890842 = function(e, t, n) {
                    e.method = b(t, n)
                }, e.wbg.__wbg_setmode_5dc300b865044b65 = function(e, t) {
                    e.mode = k[t]
                }, e.wbg.__wbg_setonce_0cb80aea26303a35 = function(e, t) {
                    e.once = 0 !== t
                }, e.wbg.__wbg_setonerror_e94ca1221abc457f = function(e, t) {
                    e.onerror = t
                }, e.wbg.__wbg_setonload_264a0d330b7166fb = function(e, t) {
                    e.onload = t
                }, e.wbg.__wbg_setsignal_75b21ef3a81de905 = function(e, t) {
                    e.signal = t
                }, e.wbg.__wbg_setsrc_c239193cc7ab0470 = function(e, t, n) {
                    e.src = b(t, n)
                }, e.wbg.__wbg_settype_39ed370d3edd403c = function(e, t, n) {
                    e.type = b(t, n)
                }, e.wbg.__wbg_setwidth_660ca581e3fbe279 = function(e, t) {
                    e.width = t >>> 0
                }, e.wbg.__wbg_setwidth_c5fed9f5e7f0b406 = function(e, t) {
                    e.width = t >>> 0
                }, e.wbg.__wbg_shaderSource_ad0087e637a35191 = function(e, t, n, r) {
                    e.shaderSource(t, b(n, r))
                }, e.wbg.__wbg_signal_aaf9ad74119f20a4 = function(e) {
                    return e.signal
                }, e.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, t) {
                    const n = d(t.stack, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u;
                    h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                }, e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
                    const e = "undefined" == typeof global ? null : global;
                    return f(e) ? 0 : o(e)
                }, e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
                    const e = "undefined" == typeof globalThis ? null : globalThis;
                    return f(e) ? 0 : o(e)
                }, e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
                    const e = "undefined" == typeof self ? null : self;
                    return f(e) ? 0 : o(e)
                }, e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
                    const e = "undefined" == typeof window ? null : window;
                    return f(e) ? 0 : o(e)
                }, e.wbg.__wbg_status_f6360336ca686bf0 = function(e) {
                    return e.status
                }, e.wbg.__wbg_stringify_f7ed6987935b4a24 = function() {
                    return a((function(e) {
                        return JSON.stringify(e)
                    }), arguments)
                }, e.wbg.__wbg_subarray_fa0950d06c298557 = function(e, t, n) {
                    return e.subarray(t >>> 0, n >>> 0)
                }, e.wbg.__wbg_texImage2D_297bb8474cd4e8b8 = function() {
                    return a((function(e, t, n, r, _, i, c, b, o, a, f) {
                        e.texImage2D(t >>> 0, n, r, _, i, c, b >>> 0, o >>> 0, 0 === a ? void 0 : g(a, f))
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_7b15c62fc9c12b16 = function() {
                    return a((function(e, t, n, r, _, i, c) {
                        e.texImage2D(t >>> 0, n, r, _ >>> 0, i >>> 0, c)
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_7fafc5db9861e235 = function() {
                    return a((function(e, t, n, r, _, i, c) {
                        e.texImage2D(t >>> 0, n, r, _ >>> 0, i >>> 0, c)
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_b2bb443de3966051 = function() {
                    return a((function(e, t, n, r, _, i, c) {
                        e.texImage2D(t >>> 0, n, r, _ >>> 0, i >>> 0, c)
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_b8edcb5692f65f88 = function() {
                    return a((function(e, t, n, r, _, i, c, b, o, a) {
                        e.texImage2D(t >>> 0, n, r, _, i, c, b >>> 0, o >>> 0, a)
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_d40a00b9c1254ee4 = function() {
                    return a((function(e, t, n, r, _, i, c) {
                        e.texImage2D(t >>> 0, n, r, _ >>> 0, i >>> 0, c)
                    }), arguments)
                }, e.wbg.__wbg_texImage2D_dd9ded937513fb00 = function() {
                    return a((function(e, t, n, r, _, i, c) {
                        e.texImage2D(t >>> 0, n, r, _ >>> 0, i >>> 0, c)
                    }), arguments)
                }, e.wbg.__wbg_texParameterf_957d99ee8423bfef = function(e, t, n, r) {
                    e.texParameterf(t >>> 0, n >>> 0, r)
                }, e.wbg.__wbg_texParameteri_ef50743cb94d507e = function(e, t, n, r) {
                    e.texParameteri(t >>> 0, n >>> 0, r)
                }, e.wbg.__wbg_then_44b73946d2fb3e7d = function(e, t) {
                    return e.then(t)
                }, e.wbg.__wbg_then_48b406749878a531 = function(e, t, n) {
                    return e.then(t, n)
                }, e.wbg.__wbg_type_a43080ecd49da621 = function(e) {
                    return e.type
                }, e.wbg.__wbg_uniform1f_21390b04609a9fa5 = function(e, t, n) {
                    e.uniform1f(t, n)
                }, e.wbg.__wbg_uniform1fv_76ac2f26482914f1 = function(e, t, n) {
                    e.uniform1fv(t, n)
                }, e.wbg.__wbg_uniform1i_5ddd9d8ccbd390bb = function(e, t, n) {
                    e.uniform1i(t, n)
                }, e.wbg.__wbg_uniform1iv_6cc568ecb1605db8 = function(e, t, n) {
                    e.uniform1iv(t, n)
                }, e.wbg.__wbg_uniform2f_b69b5369bc019bd5 = function(e, t, n, r) {
                    e.uniform2f(t, n, r)
                }, e.wbg.__wbg_uniform2fv_2fe225c92cf82bc4 = function(e, t, n) {
                    e.uniform2fv(t, n)
                }, e.wbg.__wbg_uniform2i_2ca0ebb03eed1cb8 = function(e, t, n, r) {
                    e.uniform2i(t, n, r)
                }, e.wbg.__wbg_uniform2iv_b3744f977cce1269 = function(e, t, n) {
                    e.uniform2iv(t, n)
                }, e.wbg.__wbg_uniform3f_99e237fdba99fca9 = function(e, t, n, r, _) {
                    e.uniform3f(t, n, r, _)
                }, e.wbg.__wbg_uniform3fv_4d2aede2b0bb1252 = function(e, t, n) {
                    e.uniform3fv(t, n)
                }, e.wbg.__wbg_uniform3i_c777d18b03191e7c = function(e, t, n, r, _) {
                    e.uniform3i(t, n, r, _)
                }, e.wbg.__wbg_uniform3iv_165cb850ae8fa3b9 = function(e, t, n) {
                    e.uniform3iv(t, n)
                }, e.wbg.__wbg_uniform4f_f7ea07febf8b5108 = function(e, t, n, r, _, i) {
                    e.uniform4f(t, n, r, _, i)
                }, e.wbg.__wbg_uniform4fv_a978b08cd99c1698 = function(e, t, n) {
                    e.uniform4fv(t, n)
                }, e.wbg.__wbg_uniform4i_7485a4e0fee475f4 = function(e, t, n, r, _, i) {
                    e.uniform4i(t, n, r, _, i)
                }, e.wbg.__wbg_uniform4iv_d38ad80dd9793345 = function(e, t, n) {
                    e.uniform4iv(t, n)
                }, e.wbg.__wbg_uniformMatrix2fv_b411371b2515adbf = function(e, t, n, r) {
                    e.uniformMatrix2fv(t, 0 !== n, r)
                }, e.wbg.__wbg_uniformMatrix3fv_2be8ea2151a1d280 = function(e, t, n, r) {
                    e.uniformMatrix3fv(t, 0 !== n, r)
                }, e.wbg.__wbg_uniformMatrix4fv_6b5babe739d4c3b0 = function(e, t, n, r) {
                    e.uniformMatrix4fv(t, 0 !== n, r)
                }, e.wbg.__wbg_url_ae10c34ca209681d = function(e, t) {
                    const n = d(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u;
                    h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                }, e.wbg.__wbg_useProgram_473bf913989b6089 = function(e, t) {
                    e.useProgram(t)
                }, e.wbg.__wbg_value_cd1ffa7b1ab794f1 = function(e) {
                    return e.value
                }, e.wbg.__wbg_vertexAttribDivisorANGLE_11e909d332960413 = function(e, t, n) {
                    e.vertexAttribDivisorANGLE(t >>> 0, n >>> 0)
                }, e.wbg.__wbg_vertexAttribPointer_7a2a506cdbe3aebc = function(e, t, n, r, _, i, c) {
                    e.vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== _, i, c)
                }, e.wbg.__wbg_viewport_a1b4d71297ba89af = function(e, t, n, r, _) {
                    e.viewport(t, n, r, _)
                }, e.wbg.__wbg_width_4f334fc47ef03de1 = function(e) {
                    return e.width
                }, e.wbg.__wbg_width_5dde457d606ba683 = function(e) {
                    return e.width
                }, e.wbg.__wbg_width_5ebf76e136ee6582 = function(e) {
                    return e.width
                }, e.wbg.__wbg_width_679079836447b4b7 = function() {
                    return a((function(e) {
                        return e.width
                    }), arguments)
                }, e.wbg.__wbg_width_8fe4e8f77479c2a6 = function(e) {
                    return e.width
                }, e.wbg.__wbg_width_b0c1d9f437a95799 = function(e) {
                    return e.width
                }, e.wbg.__wbg_width_f54c7178d3c78f16 = function(e) {
                    return e.width
                }, e.wbg.__wbindgen_as_number = function(e) {
                    return +e
                }, e.wbg.__wbindgen_bigint_from_i64 = function(e) {
                    return e
                }, e.wbg.__wbindgen_bigint_from_u64 = function(e) {
                    return BigInt.asUintN(64, e)
                }, e.wbg.__wbindgen_bigint_get_as_i64 = function(e, t) {
                    const n = "bigint" == typeof t ? t : void 0;
                    h().setBigInt64(e + 8, f(n) ? BigInt(0) : n, !0), h().setInt32(e + 0, !f(n), !0)
                }, e.wbg.__wbindgen_boolean_get = function(e) {
                    return "boolean" == typeof e ? e ? 1 : 0 : 2
                }, e.wbg.__wbindgen_cb_drop = function(e) {
                    const t = e.original;
                    if (1 == t.cnt--) return t.a = 0, !0;
                    return !1
                }, e.wbg.__wbindgen_closure_wrapper1780 = function(e, t, n) {
                    return y(e, t, 179, I)
                }, e.wbg.__wbindgen_closure_wrapper1782 = function(e, t, n) {
                    return y(e, t, 179, R)
                }, e.wbg.__wbindgen_closure_wrapper2234 = function(e, t, n) {
                    return m(e, t, 321, F)
                }, e.wbg.__wbindgen_closure_wrapper2938 = function(e, t, n) {
                    return m(e, t, 430, E)
                }, e.wbg.__wbindgen_debug_string = function(e, t) {
                    const n = d(x(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
                        _ = u;
                    h().setInt32(e + 4, _, !0), h().setInt32(e + 0, n, !0)
                }, e.wbg.__wbindgen_error_new = function(e, t) {
                    return new Error(b(e, t))
                }, e.wbg.__wbindgen_in = function(e, t) {
                    return e in t
                }, e.wbg.__wbindgen_init_externref_table = function() {
                    const e = r.__wbindgen_export_2,
                        t = e.grow(4);
                    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1)
                }, e.wbg.__wbindgen_is_array = function(e) {
                    return Array.isArray(e)
                }, e.wbg.__wbindgen_is_bigint = function(e) {
                    return "bigint" == typeof e
                }, e.wbg.__wbindgen_is_falsy = function(e) {
                    return !e
                }, e.wbg.__wbindgen_is_function = function(e) {
                    return "function" == typeof e
                }, e.wbg.__wbindgen_is_object = function(e) {
                    return "object" == typeof e && null !== e
                }, e.wbg.__wbindgen_is_string = function(e) {
                    return "string" == typeof e
                }, e.wbg.__wbindgen_is_undefined = function(e) {
                    return void 0 === e
                }, e.wbg.__wbindgen_jsval_eq = function(e, t) {
                    return e === t
                }, e.wbg.__wbindgen_jsval_loose_eq = function(e, t) {
                    return e == t
                }, e.wbg.__wbindgen_memory = function() {
                    return r.memory
                }, e.wbg.__wbindgen_number_get = function(e, t) {
                    const n = "number" == typeof t ? t : void 0;
                    h().setFloat64(e + 8, f(n) ? 0 : n, !0), h().setInt32(e + 0, !f(n), !0)
                }, e.wbg.__wbindgen_number_new = function(e) {
                    return e
                }, e.wbg.__wbindgen_string_get = function(e, t) {
                    const n = "string" == typeof t ? t : void 0;
                    var _ = f(n) ? 0 : d(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
                        i = u;
                    h().setInt32(e + 4, i, !0), h().setInt32(e + 0, _, !0)
                }, e.wbg.__wbindgen_string_new = function(e, t) {
                    return b(e, t)
                }, e.wbg.__wbindgen_throw = function(e, t) {
                    throw new Error(b(e, t))
                }, e
            }
            async function Z(e) {
                if (void 0 !== r) return r;
                void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? ({
                    module_or_path: e
                } = e) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("" + new URL(n(159448), n.b).href, "file:///mnt/engflow/worker/work/0/exec/bazel-out/k8-opt-exec-ST-781bf821b7a5/bin/web/src/pages/website_element_widget/webpack_cli_page_/webpack_cli_page.runfiles/_main/node_modules/.aspect_rules_js/@canva+fragl-rs@0.4.5/node_modules/@canva/fragl-rs/dist/fragl.js"));
                const t = Y();
                ("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
                const {
                    instance: _,
                    module: c
                } = await async function(e, t) {
                    if ("function" == typeof Response && e instanceof Response) {
                        if ("function" == typeof WebAssembly.instantiateStreaming) try {
                            return await WebAssembly.instantiateStreaming(e, t)
                        } catch (n) {
                            if ("application/wasm" == e.headers.get("Content-Type")) throw n;
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n)
                        }
                        const r = await e.arrayBuffer();
                        return await WebAssembly.instantiate(r, t)
                    } {
                        const n = await WebAssembly.instantiate(e, t);
                        return n instanceof WebAssembly.Instance ? {
                            instance: n,
                            module: e
                        } : n
                    }
                }(await e, t);
                return function(e, t) {
                    return r = e.exports, Z.__wbindgen_wasm_module = t, l = null, i = null, r.__wbindgen_start(), r
                }(_, c)
            }
            if ("undefined" == typeof FinalizationRegistry) throw new Error("`FinalizationRegistry` is not supported");
            const ee = new FinalizationRegistry((e => {
                ! function(e) {
                    r.remove(e)
                }(e)
            }));

            function te(e) {
                return class extends e {
                    constructor(...e) {
                        super(...e);
                        const t = "function" == typeof this.id ? this.id() : this.id;
                        ee.register(this, t)
                    }
                }
            }
            class ne extends(te($)) {}
            class re extends(te(P)) {}
            class _e extends(te(D)) {}
            class ie extends(te(z)) {}
            class ce extends(te(W)) {}
            class be extends(te(q)) {}
            class oe extends(te(N)) {}
            class ae extends(te(O)) {}
            class ge {
                constructor(e) {
                    this.create = e, this.backend = this.createBackend()
                }
                backend;
                resources = new Map;
                onContextLost;
                createBackend() {
                    const e = this.create();
                    return "onContextLost" in e && (e.onContextLost = e => this.onContextLost ? .(e)), e
                }
                load(e) {
                    const t = Array.isArray(e) ? e : e.resources;
                    this.backend.load(t);
                    for (const n of t) this.resources.set(n.id, n)
                }
                update(e) {
                    this.backend.update("resources" in e ? e.resources : e)
                }
                clear(e, t) {
                    const n = Array.isArray(e) ? {
                        color: e
                    } : e;
                    this.backend.clear(n, t)
                }
                render(e) {
                    this.backend.render("renderables" in e ? e.renderables : e)
                }
                readPixels(e) {
                    return this.backend.readPixels(e)
                }
                resize(...e) {
                    this.backend.resize(e[0], e[1])
                }
                dispose() {
                    this.backend.dispose(), this.resources.clear()
                }
                restore() {
                    this.backend.dispose(), this.backend = this.createBackend(), this.backend.load(Array.from(this.resources.values()))
                }
                flush() {
                    this.backend.flush()
                }
                release(e) {
                    this.backend.release(e)
                }
                get canvas() {
                    return this.backend.canvas
                }
            }

            function fe(e, t) {
                const n = document.createElement("canvas");
                e.append(n), n.style.width = "100%", n.style.height = "100%";
                let r = "Unknown";
                const _ = e => {
                    e.statusMessage && (r = e.statusMessage)
                };
                n.addEventListener("webglcontextcreationerror", _);
                const i = {
                        alpha: t ? .alpha ? ? !0,
                        antialias: t ? .antialias ? ? !0,
                        depth: t ? .depth ? ? !1,
                        stencil: !1,
                        preserveDrawingBuffer: !!t ? .preserveDrawingBuffer,
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: !!t ? .failIfMajorPerformanceCaveat
                    },
                    c = t ? .useWebGl2 ? n.getContext("webgl2", i) : n.getContext("webgl", i);
                if (n.removeEventListener("webglcontextcreationerror", _), !c) throw new Error(`A WebGL context could not be created. Reason: ${r}`);
                return new X(c, { ...t,
                    onDispose: () => {
                        n.remove()
                    }
                })
            }
            class ue extends C {
                renderer;
                constructor(e, t) {
                    super(t), this.renderer = e
                }
                render(e) {
                    super.render_webgl(this.renderer, e)
                }
                dispose() {
                    super.dispose_webgl(this.renderer)
                }
            }
            async function se(e = {}) {
                const {
                    memory: t
                } = e.path ? await Z({
                    module_or_path: e.path
                }) : await Z();
                return {
                    memory: t
                }
            }
            $.prototype.resourceType = "shader", P.prototype.resourceType = "buffer", D.prototype.resourceType = "elements", W.prototype.resourceType = "texture", z.prototype.resourceType = "texture", q.prototype.resourceType = "texture"
        },
        159448: (e, t, n) => {
            e.exports = n.p + "10556e48c8503275.wasm"
        }
    }
]);; // __FILE_CONTENT_FOR__:d67dd5bea71269b0.js
(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [14302], {

        /***/
        290120: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var VZ = __c.VZ;
                var O = __c.O;
                var buc = async function(a, b) {
                        return a.Yea(b, async () => {
                            const c = (0, __c.ld)()();
                            try {
                                if (a.fEa == null) throw Error("Scene document resources are not supported");
                                const d = c.r(await c.s(a.fEa.oq({
                                        id: b,
                                        version: 1
                                    }, void 0))),
                                    e = {
                                        id: d.id,
                                        files: {
                                            SGa: d.content.url,
                                            mra: d.Uc ? .url
                                        }
                                    };
                                (0, __c.Ac)(() => {
                                    a.scenes.set(e.id, e)
                                });
                                return e
                            } finally {
                                c.s()
                            }
                        })
                    },
                    duc = function(a, b) {
                        if (a.Cg.VVa && b instanceof Y6) return new cuc(a.Cg.VVa, b);
                        throw Error("GltfResource needs GltfResource");
                    },
                    fuc = function(a) {
                        return euc ? new Y6(a) : new Y6(a, {
                            environment_sdr: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                            environment_gain: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png"
                        })
                    },
                    guc = function(a, b, c) {
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
                    huc = function(a, b, c) {
                        const d = a.store.kA ? a.Cg.canvas : a.store.Yz;
                        if (d) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            a.store.kA && a.render(!1);
                            c.width = b;
                            c.height = b;
                            e.drawImage(d, 0, 0, b, b)
                        }
                    },
                    iuc = function(a, b) {
                        a.store.container = b;
                        b.contains(a.Cg.canvas) || b.appendChild(a.Cg.canvas)
                    },
                    juc = function(a) {
                        if (a.store.de) {
                            const b = requestAnimationFrame(Z6.wrap(() => juc(a)));
                            a.store.W4 = b;
                            a.render(a.store.DEa)
                        }
                    },
                    muc = function({
                        j9: a,
                        Cg: b
                    }) {
                        const c = new kuc;
                        return new luc(c, a, b)
                    },
                    ouc = function(a) {
                        var b = __c.x(a.store.container, "Missing container"),
                            c = a.Af.MR;
                        b.style.width = 2E3 * a.Af.aa + "px";
                        b.style.height = 2E3 * a.Af.aa + "px";
                        b.style.left = `-${c.left*a.Af.aa}px`;
                        b.style.top =
                            `-${c.top*a.Af.aa}px`;
                        b.style.position = "absolute";
                        c = new Image; {
                            var d = a.Af;
                            b = nuc(a, b);
                            const e = d.store.kA ? d.Cg.canvas : d.store.Yz;
                            e ? (d.store.kA && ($6(d.Cg, b, b), d.render(!1)), d = e.toDataURL("image/png")) : d = ""
                        }
                        c.src = d;
                        a.store.jH = c
                    },
                    quc = function(a) {
                        var b = __c.x(a.store.container, "Missing container");
                        b.style.position = "init";
                        b.style.left = "0";
                        b.style.top = "0";
                        b.style.width = "100%";
                        b.style.height = "100%";
                        const c = document.createElement("canvas");
                        var d = a.Af;
                        b = nuc(a, b);
                        if (d.store.isInitialized) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            var f = b / 2E3,
                                g = d.FY();
                            c.width = f * g.width;
                            c.height = f * g.height;
                            const h = puc(d.Cg);
                            $6(d.Cg, b, b);
                            d.render(!1);
                            e.drawImage(d.Cg.canvas, g.left * f, g.top * f, g.width * f, g.height * f, 0, 0, g.width * f, g.height * f);
                            $6(d.Cg, h.width, h.height)
                        } else if (d.store.Yz) {
                            e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            f = d.store.r5;
                            g = d.store.HL / 2E3;
                            b /= 2E3;
                            c.width = Math.round(b * f.width);
                            c.height = Math.round(b * f.height);
                            e.drawImage(d.store.Yz, f.left * g, f.top * g, f.width *
                                g, f.height * g, 0, 0, c.width, c.height)
                        }
                        d = new Image;
                        d.src = c.toDataURL("image/png");
                        a.store.jH = d;
                        c.width = 1;
                        c.height = 1
                    },
                    nuc = function(a, b) {
                        b = b.getBoundingClientRect();
                        return Math.max(b.width, b.height) > 100 ? a.Af.HL : 300
                    },
                    ruc = function(a) {
                        const b = a.jl;
                        a = __c.gK.create({ ...__c.vE,
                            image: { ...__c.Yrb,
                                media: { ...__c.osb,
                                    id: a.YD,
                                    version: 1
                                },
                                ob: void 0
                            }
                        });
                        return a7(b, {
                            fill: a
                        })
                    },
                    uuc = function({
                        aXa: a,
                        DXa: b,
                        BXa: c,
                        P6: d,
                        R8a: e,
                        jl: f,
                        cda: g
                    }) {
                        switch (d) {
                            case 1:
                                return a7(c, {});
                            case 3:
                                return a7(suc, {
                                    EZ: e || ""
                                });
                            case 0:
                                return a7(b, {});
                            case 2:
                                return a7(ruc, {
                                    jl: f,
                                    YD: g || ""
                                });
                            case 4:
                                return a7(a, {});
                            case 5:
                                return a7(tuc, {});
                            default:
                                throw new __c.y(d);
                        }
                    },
                    Buc = function({
                        yn: a,
                        ye: b,
                        jl: c,
                        Ov: d,
                        Cg: e,
                        eca: f,
                        exports: g,
                        FX: h
                    }) {
                        const k = new vuc,
                            l = new wuc(k, a, b, d, e, f, h),
                            m = xuc(a),
                            n = yuc(a),
                            p = () => a7("div", {
                                children: "Error"
                            });
                        return zuc(() => {
                            b7(() => {
                                l.initialize();
                                return () => {
                                    l.destroy()
                                }
                            }, []);
                            b7(() => {
                                l.qU && l.yq && g.VYa && g.VYa()
                            });
                            return a7(Auc, {
                                uf: l.uf,
                                children: a7(uuc, {
                                    P6: l.P6,
                                    R8a: l.EZ,
                                    selected: l.yq,
                                    cda: l.cda,
                                    jl: c,
                                    BXa: n,
                                    DXa: m,
                                    aXa: p
                                })
                            })
                        })
                    },
                    Euc = function(a) {
                        return Cuc(({
                            data: b,
                            Vd: {
                                jl: c
                            },
                            Ih: {
                                ye: d
                            }
                        }) => {
                            const e = Duc(() => Buc({
                                yn: b,
                                ye: d,
                                jl: c,
                                ...a
                            }), [b, d, c]);
                            return a7("div", {
                                className: "N73IPQ",
                                children: a7(e, {})
                            })
                        })
                    },
                    Guc = function(a, b, c) {
                        a = a.startSpan("load_resource", c);
                        return Fuc(a, b)
                    },
                    Fuc = function(a, b) {
                        return (typeof b === "function" ? b() : b).catch(Z6.wrap(c => {
                            a.setStatus("error");
                            throw c;
                        })).finally(Z6.wrap(() => {
                            a.end()
                        }))
                    },
                    $6 = function(a, b, c) {
                        a.canvas.width = b;
                        a.canvas.height = c
                    },
                    Huc = function(a, b) {
                        a.W0 = a.W0.filter(c => c !== b)
                    },
                    puc = function(a) {
                        return {
                            width: a.canvas.width,
                            height: a.canvas.height
                        }
                    },
                    Juc = async function(a) {
                        const b = c7()();
                        try {
                            a.VJ || (a.VJ = d7());
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
                                a.pxa = d
                            } catch (c) {
                                throw b.r(), a.KV = void 0, Error("Failed to initialize renderer", {
                                    cause: c
                                });
                            }
                            try {
                                a.aK = Iuc(a)
                            } catch (c) {
                                a.N.info(`Unable to initialize WebGL context error: ${c}`), e7(() => {
                                    a.oga = !0
                                })
                            }
                        } finally {
                            b.s()
                        }
                    },
                    d7 = function() {
                        const a = document.createElement("canvas");
                        a.width =
                            1E3;
                        a.height = 1E3;
                        a.style.width = "100%";
                        a.style.visibility = "visible";
                        return a
                    },
                    Iuc = function(a, b = 0) {
                        if (b > 5) throw Error("Unable to recreate context");
                        const c = Kuc(a);
                        a.aK = new(__c.x(a.pxa))(c);
                        a.aK.onContextLost = () => {
                            a.N.info("WebGL context lost for scene widget");
                            a.aK = void 0;
                            a.KV = void 0;
                            a.npa = () => {
                                const d = a.canvas;
                                a.VJ = d7();
                                a.pxa && Iuc(a, b + 1);
                                a.W0.forEach(e => e(d));
                                a.npa = void 0
                            }
                        };
                        return a.aK
                    },
                    Kuc = function(a) {
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
                __c.gv.prototype.Yea = __c.ca(10, function(a, b) {
                    const c = this.Dh.get(__c.dv(a));
                    if (c != null && c.zPa != null) {
                        const e = this.fQ.get(c);
                        if (e != null) return Promise.resolve({ ...c,
                            element: e
                        })
                    }
                    const d = __c.dv(a);
                    if (a = this.pending.get(d)) return a;
                    c != null && c.zPa != null && (b = async () => {
                        const e = (0, __c.ld)()();
                        try {
                            const f = e.r(await e.s(__c.fv(this, c)));
                            return { ...c,
                                element: f
                            }
                        } finally {
                            e.s()
                        }
                    });
                    b = b().finally(__c.C.wrap(() => this.pending.delete(d)));
                    this.pending.set(d, b);
                    return b
                });
                __c.hv.prototype.Yea = __c.ca(9, function(a, b) {
                    var c = this.scenes.get(a);
                    if (c) return Promise.resolve(c);
                    if (c = this.pending.get(a)) return c;
                    b = b().finally(__c.C.wrap(() => this.pending.delete(a)));
                    this.pending.set(a, b);
                    return b
                });
                var Luc = __webpack_require__(19779),
                    cuc = Luc.GltfRenderer,
                    Y6 = Luc.GltfResource;
                var f7 = __webpack_require__(186901),
                    g7 = f7.EW,
                    e7 = f7.h5,
                    h7 = f7.mJ,
                    i7 = f7.sH,
                    j7 = f7.XI;
                var Z6 = __webpack_require__(245307).Fm;
                var c7 = __webpack_require__(75402)._;
                var Muc = __webpack_require__(322594),
                    a7 = Muc.jsx,
                    Nuc = Muc.jsxs;
                var k7 = __webpack_require__(205482),
                    Cuc = k7.memo,
                    b7 = k7.useEffect,
                    Duc = k7.useMemo,
                    l7 = k7.useRef,
                    Ouc = k7.useState;
                var zuc = __webpack_require__(721226).PA;
                var euc = __c.hd("1aab289f", !1),
                    Puc = class {
                        constructor(a) {
                            this.Cg = a
                        }
                    };
                var m7 = class {
                    static F(a) {
                        O(a, {
                            selected: i7.ref,
                            Jea: i7.ref,
                            Iea: i7.ref,
                            LZ: i7.ref,
                            d$a: i7.ref
                        })
                    }
                    constructor(a) {
                        this.Af = a;
                        this.selected = (m7.F(this), !1);
                        this.Iea = this.Jea = !1;
                        this.LZ = 0;
                        this.d$a = !1
                    }
                };
                var luc = class {
                    static F(a) {
                        O(a, {
                            initialize: j7,
                            I4a: j7,
                            gua: j7,
                            LRa: j7,
                            dispose: j7,
                            FY: j7,
                            r9: j7,
                            FSa: j7
                        })
                    }
                    async initialize(a) {
                        const b = c7()();
                        try {
                            if (!this.store.isInitialized && !this.store.uf) {
                                this.store.uf = !0;
                                var c = fuc(a);
                                this.store.k9 = c;
                                b.r(await b.s(c.load()));
                                c === this.store.k9 && (this.store.kA = duc(this.j9, c), this.Cg.W0.push(this.r9), this.render(!0), e7(() => {
                                    this.store.isInitialized = !0;
                                    this.store.uf = !1
                                }))
                            }
                        } finally {
                            b.s()
                        }
                    }
                    I4a(a, b, c = !0) {
                        const d = this.FY();
                        this.store.MR = d;
                        a = Math.round(Math.min(a.width * 2E3 / d.width,
                            2E3));
                        $6(this.Cg, a, a);
                        this.store.HL = a;
                        this.store.aa = b;
                        this.store.DEa = c;
                        this.FSa()
                    }
                    get HL() {
                        return this.store.HL
                    }
                    get MR() {
                        return this.store.MR
                    }
                    gua() {
                        this.store.de = !1;
                        this.store.W4 != null && (cancelAnimationFrame(this.store.W4), this.store.W4 = void 0)
                    }
                    LRa(a) {
                        this.store.aL = a
                    }
                    async dispose() {
                        const a = c7()();
                        try {
                            this.gua();
                            if (this.isInitialized && this.store.container ? .contains(this.Cg.canvas)) {
                                this.store.r5 = this.FY();
                                const c = document.createElement("canvas");
                                huc(this, this.store.HL, c);
                                this.store.Yz = c
                            }
                            this.store.kA ? .dispose();
                            this.store.kA = void 0;
                            this.store.isInitialized = !1;
                            Huc(this.Cg, this.r9);
                            this.store.uf = !1;
                            const b = this.store.k9;
                            this.store.k9 = void 0;
                            a.r(await a.s(b ? .load()));
                            b ? .dispose()
                        } finally {
                            a.s()
                        }
                    }
                    FY() {
                        if (this.store.s5 && this.store.aL === this.store.s5 ? .Ieb) return this.store.s5.ea;
                        var a = puc(this.Cg);
                        $6(this.Cg, 2E3, 2E3);
                        this.render(!1);
                        const b = this.Cg.getImageData();
                        $6(this.Cg, a.width, a.height);
                        a = this.q6a(b.data, b.width, b.height);
                        this.store.s5 = {
                            Ieb: this.store.aL,
                            ea: a
                        };
                        return a
                    }
                    get isInitialized() {
                        return this.store.isInitialized
                    }
                    get uf() {
                        return this.store.uf
                    }
                    get de() {
                        return this.store.de
                    }
                    get aa() {
                        return this.store.aa
                    }
                    FSa() {
                        this.gua();
                        this.store.de = !0;
                        juc(this)
                    }
                    render(a) {
                        this.store.kA ? .render({
                            distance: 1,
                            rotationPhi: this.store.aL.rotation.x,
                            rotationTheta: this.store.aL.rotation.y,
                            enableGrid: a
                        })
                    }
                    constructor(a, b, c, d = guc) {
                        this.store = a;
                        this.j9 = b;
                        this.Cg = c;
                        this.q6a = d;
                        this.r9 = (luc.F(this), e => {
                            e7(() => {
                                const f = this.store.k9,
                                    g = this.store.container;
                                g && this.store.isInitialized && f && (g.contains(e) && g.removeChild(e), iuc(this, g), this.store.kA ? .dispose(), this.store.kA = void 0, this.store.kA = duc(this.j9, f), this.Cg.W0.push(this.r9), this.store.isInitialized = !0)
                            })
                        })
                    }
                };
                var kuc = class {
                    static F(a) {
                        O(a, {
                            de: i7.ref,
                            aL: i7.ref,
                            W4: i7.ref,
                            Yz: i7.ref,
                            r5: i7.ref,
                            s5: i7.ref,
                            isInitialized: i7.ref,
                            uf: i7.ref,
                            aa: i7.ref,
                            MR: i7.ref
                        })
                    }
                    constructor() {
                        this.container = (kuc.F(this), void 0);
                        this.DEa = this.de = !1;
                        this.aL = {
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 0
                            }
                        };
                        this.r5 = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.uf = this.isInitialized = !1;
                        this.aa = 1;
                        this.MR = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.HL = 0
                    }
                };
                var Quc = ({
                        Q9a: a
                    }) => Nuc("div", {
                        className: "Wfem7A",
                        children: [a7("div", {
                            className: "CSoSRg"
                        }), a7("div", {
                            className: "__J59g",
                            style: {
                                width: a ? "100%" : "init",
                                height: a ? "init" : "100%",
                                aspectRatio: "1"
                            },
                            children: a7("div", {
                                className: "tEhdig"
                            })
                        })]
                    }),
                    Auc = ({
                        children: a,
                        uf: b
                    }) => {
                        const c = l7(null),
                            [d, e] = Ouc(!1);
                        b7(() => {
                            c.current && e(c.current.clientWidth >= c.current.clientHeight)
                        }, [c]);
                        return b ? a7("div", {
                            ref: c,
                            className: "uDEnGQ",
                            children: Nuc("div", {
                                className: "E8BDLQ",
                                children: [a7("div", {
                                    className: "II7r4Q",
                                    children: a
                                }), a7(Quc, {
                                    Q9a: d
                                })]
                            })
                        }) : a
                    };
                var Ruc = ({
                    Scb: a,
                    Rcb: b
                }) => {
                    const c = l7(null);
                    b7(() => {
                        const d = c.current;
                        c.current && a(c.current);
                        return () => {
                            d && b()
                        }
                    }, [c, a, b]);
                    return a7("div", {
                        ref: c,
                        style: {
                            display: "block",
                            position: "absolute"
                        }
                    })
                };
                var Suc = class {
                    get Af() {
                        return this.local.Af
                    }
                    constructor(a) {
                        this.local = a;
                        this.u7a = b => {
                            const c = this.Af.MR;
                            b.style.width = 2E3 * this.Af.aa + "px";
                            b.style.height = 2E3 * this.Af.aa + "px";
                            b.style.left = `-${c.left*this.Af.aa}px`;
                            b.style.top = `-${c.top*this.Af.aa}px`;
                            iuc(this.Af, b)
                        };
                        this.t7a = () => {
                            var b = this.Af;
                            if (b.isInitialized && b.store.container ? .contains(b.Cg.canvas)) {
                                b.store.r5 = b.FY();
                                const c = document.createElement("canvas");
                                huc(b, b.store.HL, c);
                                b.store.Yz = c
                            }
                            b.store.container ? .removeChild(b.Cg.canvas);
                            b.store.container =
                                void 0
                        }
                    }
                };
                var yuc = ({
                    local: a
                }) => {
                    const b = new Suc(a);
                    return () => a7(Ruc, {
                        Scb: b.u7a,
                        Rcb: b.t7a
                    })
                };
                var Tuc = ({
                    jH: a,
                    $cb: b,
                    onDispose: c
                }) => {
                    const d = l7(null);
                    b7(() => {
                        d.current && b(d.current);
                        return () => c()
                    }, [d, b, c]);
                    b7(() => {
                        d.current && a && (a.style.width = "100%", a.style.height = "100%", d.current.firstChild && d.current.removeChild(d.current.firstChild), d.current.appendChild(a))
                    }, [d, a]);
                    return a7("div", {
                        ref: d,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                };
                var Uuc = __c.hd("75810be2", !1),
                    Vuc = class {
                        static F(a) {
                            O(a, {
                                initialize: j7.bound,
                                dispose: j7.bound,
                                UDa: j7
                            })
                        }
                        initialize(a) {
                            Uuc || (this.store.container = a, this.store.VDa = h7(() => [this.Af.store.aL, this.Af.de], this.w7a, {
                                fireImmediately: !1
                            }), this.store.SDa = h7(() => this.local.Iea, this.v7a, {
                                fireImmediately: !0
                            }))
                        }
                        dispose() {
                            this.UDa();
                            this.store.VDa ? .();
                            this.store.VDa = void 0;
                            this.store.SDa ? .();
                            this.store.SDa = void 0
                        }
                        get jH() {
                            return this.store.jH
                        }
                        get Af() {
                            return this.local.Af
                        }
                        UDa() {
                            this.store.jH = void 0
                        }
                        constructor(a,
                            b) {
                            this.store = a;
                            this.local = b;
                            this.w7a = (Vuc.F(this), () => {
                                this.Af.de || (this.local.Iea ? ouc(this) : quc(this))
                            });
                            this.v7a = () => {
                                this.local.Iea ? ouc(this) : quc(this)
                            }
                        }
                    };
                var Wuc = class {
                    static F(a) {
                        O(a, {
                            jH: i7.ref
                        })
                    }
                    constructor() {
                        this.container = (Wuc.F(this), void 0)
                    }
                };
                var xuc = ({
                    local: a
                }) => {
                    const b = new Wuc,
                        c = new Vuc(b, a);
                    return zuc(() => a7(Tuc, {
                        $cb: c.initialize,
                        onDispose: c.dispose,
                        jH: c.jH
                    }))
                };
                var tuc = () => a7("div", {
                    className: "_7SJjPA"
                });
                var suc = ({
                    EZ: a
                }) => a7("img", {
                    src: a,
                    style: {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto"
                    }
                });
                var wuc = class {
                    static F(a) {
                        O(a, {
                            initialize: j7,
                            destroy: j7,
                            P6: g7,
                            uf: g7,
                            isError: g7,
                            EZ: g7,
                            CD: g7,
                            yq: g7,
                            bHa: j7,
                            dHa: j7,
                            eHa: j7
                        })
                    }
                    async initialize() {
                        const a = c7()();
                        try {
                            this.store.f3a = h7(() => this.CD, this.bHa, {
                                fireImmediately: !0
                            });
                            const b = a.r(await a.s(buc(this.Ov, this.yn.D.scene.id)));
                            e7(() => {
                                this.store.scene = b
                            })
                        } finally {
                            a.s()
                        }
                    }
                    destroy() {
                        this.CD && this.yn.local.LZ--;
                        this.yn.local.LZ === 0 && this.Af.dispose();
                        this.store.f3a ? .();
                        this.store.dka ? .();
                        this.store.cka ? .();
                        this.store.WDa ? .()
                    }
                    get P6() {
                        return this.coa && this.CD &&
                            !this.Af.de || this.CD && this.coa && !this.yq || !this.CD && this.coa ? 0 : this.S9a && this.Af.de ? 1 : this.cda ? 2 : this.EZ ? 3 : this.isError ? 4 : 5
                    }
                    get uf() {
                        return this.CD && this.yq && !this.Af.isInitialized
                    }
                    get isError() {
                        return !!this.store.scene && !this.store.scene.files.mra
                    }
                    get EZ() {
                        return this.store.scene ? .files.mra
                    }
                    get coa() {
                        return this.yn.local.Jea
                    }
                    get cda() {
                        return this.yn.D.config.ref.snapshot ? .id
                    }
                    get CD() {
                        return !this.FX && this.ye === 30 && !this.Cg.dJa
                    }
                    get qU() {
                        return this.store.qU
                    }
                    get yq() {
                        return this.yn.local.selected
                    }
                    get S9a() {
                        return this.CD &&
                            this.yq && this.Af.isInitialized
                    }
                    get Af() {
                        return this.yn.local.Af
                    }
                    get D() {
                        return this.yn.D
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.store = a;
                        this.yn = b;
                        this.ye = c;
                        this.Ov = d;
                        this.Cg = e;
                        this.eca = f;
                        this.FX = g;
                        this.F7a = (wuc.F(this), () => {
                            if (!this.yn.local.Jea) {
                                var h = this.Af;
                                h.store.Yz && (h.store.Yz.width = 1, h.store.Yz.height = 1, h.store.Yz = void 0)
                            }
                        });
                        this.bHa = (h, k) => {
                            this.store.dka ? .();
                            this.store.cka ? .();
                            this.store.WDa ? .();
                            k && this.yn.local.LZ--;
                            this.CD ? (this.yn.local.LZ++, this.store.dka = h7(() => ({
                                    selected: this.yq,
                                    scene: this.store.scene
                                }),
                                ({
                                    selected: l,
                                    scene: m
                                }) => this.dHa(l, m), {
                                    fireImmediately: !0
                                }), this.store.cka = h7(() => [this.yn.D.config.ref.rotationPhi, this.yn.D.config.ref.rotationTheta], this.y7a, {
                                fireImmediately: !0
                            }), this.store.WDa = h7(() => [this.yn.local.Jea], this.F7a, {
                                fireImmediately: !1
                            })) : this.store.dka = h7(() => ({
                                selected: this.yq
                            }), ({
                                selected: l
                            }) => this.eHa(l), {
                                fireImmediately: !0
                            })
                        };
                        this.dHa = async (h, k) => {
                            const l = c7()();
                            try {
                                if (k != null)
                                    if (!h) this.Af.dispose();
                                    else if (!this.Af.uf) {
                                    var m = __c.x(k.files.SGa);
                                    l.r(await l.s(this.Cg.knb));
                                    if (!this.Cg.dJa) {
                                        var n = this.eca.startSpan("select");
                                        l.r(await l.s(Guc(this.eca, async () => {
                                            const p = c7()();
                                            try {
                                                p.r(await p.s(this.Af.initialize(m)))
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
                        this.eHa = h => {
                            this.store.qU = this.FX;
                            h || (this.store.qU = !1)
                        };
                        this.y7a = () => {
                            this.Af.de || this.Af.LRa({
                                rotation: {
                                    x: this.yn.D.config.ref.rotationPhi,
                                    y: this.yn.D.config.ref.rotationTheta,
                                    z: 0
                                }
                            })
                        }
                    }
                };
                var vuc = class {
                    static F(a) {
                        O(a, {
                            scene: i7.ref,
                            qU: i7.ref
                        })
                    }
                    constructor() {
                        this.cka = (vuc.F(this), void 0);
                        this.qU = !1
                    }
                };
                var Xuc = class {
                    startSpan(a, b) {
                        a = `scene.${a}`;
                        return b ? this.tc.startSpan(a, b) : this.tc.Ip(a, {
                            RI: {
                                name: `editor.${a}`,
                                performance: {
                                    yaa: !0
                                }
                            }
                        })
                    }
                    constructor(a) {
                        this.tc = a
                    }
                };
                var Yuc = __c.hd("5eb77351", !1),
                    Zuc = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) || Yuc,
                    $uc = class {
                        static F(a) {
                            O(a, {
                                oga: i7.ref
                            })
                        }
                        get dJa() {
                            return this.oga
                        }
                        get knb() {
                            this.npa && this.npa();
                            this.KV || (this.KV = Juc(this));
                            return this.KV
                        }
                        get canvas() {
                            this.VJ || (this.VJ = d7());
                            return this.VJ
                        }
                        get VVa() {
                            return this.aK
                        }
                        getImageData() {
                            __c.w(this.aK != null, "WebGlRenderer is not initialized");
                            return this.aK.readPixels()
                        }
                        constructor(a) {
                            this.N = a;
                            this.VJ = ($uc.F(this), void 0);
                            this.W0 = [];
                            this.oga = !1;
                            Zuc || (this.VJ =
                                d7(), this.KV = Juc(this))
                        }
                    };
                var avc = __c.qY()(() => ({
                    zsb(a, b, c) {
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
                            Z: {
                                width: b,
                                height: c
                            }
                        }
                    },
                    Asb(a, b, c, d) {
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
                            Z: {
                                width: c,
                                height: d
                            }
                        }
                    }
                }));
                var bvc = __c.BY({
                    D: __c.AY({
                        scene: VZ.Rk(1, "SceneRef"),
                        config: VZ.oAa(2, {
                            snapshot: VZ.tdb(1, "MediaRef"),
                            rotationPhi: VZ.jEa(2, {
                                min: 0,
                                max: 6.284
                            }),
                            rotationTheta: VZ.jEa(3, {
                                min: -1.571,
                                max: 1.571
                            })
                        })
                    })
                });
                var cvc, dvc;
                cvc = __c.hd("646956e3", !1);
                dvc = __c.aY()(({
                    hh: a,
                    lG: b
                }) => {
                    var c = b.tc;
                    b = b.N.Gk("scene_widget_rendering");
                    c = new Xuc(c);
                    const d = new $uc(b),
                        e = new Puc(d),
                        f = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) && !cvc;
                    b = {
                        FX: f
                    };
                    a = Euc({
                        Ov: a.Ov,
                        Cg: d,
                        eca: c,
                        exports: b,
                        FX: f
                    });
                    return {
                        metadata: {
                            type: "scene",
                            name: __c.N("6XoKOg"),
                            zO: g => g.scene.id
                        },
                        jX: () => {
                            const g = muc({
                                j9: e,
                                Cg: d
                            });
                            return new m7(g)
                        },
                        D: __c.$X(a),
                        exports: b
                    }
                });
                __c.UY = {};
                __c.UY.vpb = m7;
                __c.UY.ug = avc;
                __c.UY.Om = dvc;
                __c.UY.vg = bvc;
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
]); // __FILE_CONTENT_FOR__:42a61a1d2e658b60.js
(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [99222], {

        /***/
        856598: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var VZ = __c.VZ;
                var zpc = function(a, b, c = 1) {
                        b = Math.min(a.weight, b);
                        if (b !== 0) return {
                            borderWidth: `${b*c}px`,
                            borderStyle: "solid",
                            borderColor: a.color ? ? a.fill.color ? ? a.fill.Xa.ref ? .ih[0] ? .color ? ? "transparent"
                        }
                    },
                    Apc = function(a) {
                        if (a.color) return {
                            backgroundColor: a.color
                        };
                        if (a.Xa.ref && a.Xa.ref.type === "linear") return {
                            backgroundColor: a.Xa.ref ? .ih[0] ? .color,
                            background: `linear-gradient(${a.Xa.ref.rotation}deg, ${a.Xa.ref?.ih.map(b=>`${b.color}`).join(",")})`
                        };
                        if (a.Xa.ref && a.Xa.ref.type === "radial") {
                            const b = a.Xa.ref.center.left,
                                c =
                                a.Xa.ref.center.top,
                                d = a.Xa.ref ? .ih.map(e => `${e.color}`).join(",");
                            return {
                                backgroundColor: a.Xa.ref ? .ih[0] ? .color,
                                background: `radial-gradient(circle at ${`${Math.round(b*100)}%`} ${`${Math.round(c*100)}%`}, ${d})`
                            }
                        }
                        return {}
                    },
                    Bpc = __webpack_require__(322594),
                    J5 = Bpc.jsx,
                    Cpc = Bpc.jsxs;
                __webpack_require__(186901);
                var Dpc = __webpack_require__(721226).PA;
                var Epc = new RegExp(/^(https?|ftp|tel|sms|mailto|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i),
                    Fpc = __c.BY({
                        D: __c.AY({
                            label: VZ.Rk(1, "Richtext2"),
                            link: VZ.yv(2, Epc),
                            background: VZ.Rk(3, "Fill"),
                            S: VZ.tA(4, {
                                min: 0,
                                max: 100
                            }),
                            border: VZ.YMa(5, "Stroke")
                        })
                    });
                var Gpc = __c.qY()(a => ({
                    Jz(b) {
                        var c = a.F7 ? .Qsb ? ? __c.ji.Hb["font-family"];
                        c = { ...(b ? .attrs ? ? {}),
                            "font-family": b ? .attrs ? .["font-family"] ? ? c,
                            "font-size": b ? .attrs ? .["font-size"] ? ? 20,
                            color: b ? .attrs ? .color ? ? "#ffffff",
                            "text-align": b ? .attrs ? .["text-align"] ? ? "center"
                        };
                        return {
                            data: {
                                D: {
                                    label: { ...__c.Tl,
                                        stream: __c.Qi.Bb().attrs(c).eb(b ? .label ? ? __c.N("4sGMlw")).eb("\n").build()
                                    },
                                    link: b ? .link,
                                    background: b ? .background ? ? { ...__c.vE,
                                        color: "#0ba84a"
                                    },
                                    S: b ? .S ? ? 25,
                                    border: b ? .border
                                },
                                document: {}
                            },
                            Z: b ? .Z ? ? {
                                width: 300,
                                height: 50
                            }
                        }
                    }
                }));
                var Hpc = __c.aY()(() => ({
                    metadata: {
                        type: "button",
                        name: __c.N("xdElgQ")
                    },
                    D: __c.$X(Dpc(({
                        data: {
                            D: a
                        },
                        Vd: b
                    }) => Cpc("div", {
                        className: "_2Z_Fmg",
                        children: [J5("div", {
                            className: "_0mvZOQ",
                            style: {
                                borderRadius: `${a.S}px`,
                                border: a.border.ref ? `solid ${a.border.ref.weight}px  ${a.border.ref.color}` : void 0
                            },
                            children: J5(b.jl, {
                                fill: a.background
                            })
                        }), J5("div", {
                            className: "ZcsBDg",
                            children: J5("div", {
                                className: "vyKiIw",
                                children: J5(b.Pi, {
                                    text: a.label
                                })
                            })
                        })]
                    }))),
                    email: {
                        type: 2,
                        Component: Dpc(({
                            data: {
                                D: a
                            },
                            Vd: b,
                            Ih: {
                                Z: c
                            },
                            scale: d
                        }) => {
                            var e = c.width * d;
                            e = (e = a.border.ref ? zpc(a.border.ref, e / 2, d) : void 0) ? `${e.borderWidth} ${e.borderStyle} ${e.borderColor}` : void 0;
                            const f = a.S ? a.S * d : 0;
                            return J5("a", {
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
                                    ...Apc(a.background),
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
                                children: J5(b.Pi, {
                                    text: a.label
                                })
                            })
                        })
                    },
                    exports: {},
                    EX: ["fixed"]
                }));
                __c.VY = {
                    ug: Gpc,
                    Om: Hpc,
                    vg: Fpc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
]); // __FILE_CONTENT_FOR__:40c4bfdd0a80c0e0.js
(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [27539], {

        /***/
        271191: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(721157);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var nb = __c.nb;
                var Y = __c.Y;
                var V = __c.V;
                var E = __c.E;
                var H = __c.H;
                var Ka = __c.Ka;
                var Ia = __c.Ia;
                var YV;
                var y = __c.y;
                var VV;
                var MZb = function(a) {
                        if (a === void 0) return "multiple";
                        if (a === 1) return "single";
                        throw Error("Unsupported user submission limit: " + a);
                    },
                    RZb = function(a) {
                        const b = c => new __c.UV({
                            id: a.Wo,
                            label: a.hk,
                            Vb: c
                        });
                        switch (a.type) {
                            case 0:
                                const c = b(new NZb({
                                    arity: 1,
                                    multiple: !1,
                                    options: a.options.map(d => new OZb({
                                        label: d.label,
                                        value: d.id
                                    }))
                                }));
                                return a.J1.map(d => new VV({
                                    value: d,
                                    Vb: c
                                }));
                            case 1:
                                return [new VV({
                                    value: a.value,
                                    Vb: b(new PZb({
                                        arity: 1
                                    }))
                                })];
                            case 2:
                                return [new VV({
                                    value: a.value,
                                    Vb: b(new QZb({
                                        arity: 1
                                    }))
                                })];
                            default:
                                throw new y(a);
                        }
                    },
                    SZb = function(a) {
                        __c.w(a.length >= 1);
                        const [b] = a;
                        a.length > 1 && __c.w(a.every(({
                            Vb: {
                                id: e
                            }
                        }) => e === b.Vb.id));
                        const c = b.Vb.Vb,
                            d = {
                                Wo: b.Vb.id,
                                hk: b.Vb.label
                            };
                        switch (c.type) {
                            case "SELECT_FIELD":
                                return { ...d,
                                    type: 0,
                                    J1: a.map(({
                                        value: e
                                    }) => e),
                                    options: c.options.map(e => ({
                                        id: e.value,
                                        label: e.label
                                    }))
                                };
                            case "TEXT_FIELD":
                            case "EMAIL_FIELD":
                                return { ...d,
                                    type: 1,
                                    value: b.value
                                };
                            case "NUMBER_FIELD":
                                return { ...d,
                                    type: 2,
                                    value: b.value
                                };
                            default:
                                throw new y(c);
                        }
                    },
                    TZb = function(a) {
                        const b = __c.Wl(a.Cn, c => c.Vb.id);
                        return {
                            id: a.id,
                            status: a.status,
                            Cn: __c.mf(b, SZb)
                        }
                    },
                    UZb = function(a, b, c) {
                        return {
                            ryb: d => {
                                const e = a.kc.Wi[0];
                                return e ? e.Pia.includes(d) : !1
                            },
                            Wi: new Map(a.kc.Wi.map(d => [d.Wo, d.Pia])),
                            Srb: a.kc.iza ? "anon" : "public",
                            xda: b,
                            Sba: !!c,
                            Uva: MZb(a.kc.Uva)
                        }
                    },
                    VZb = function(a, b) {
                        const {
                            initialDelay: c,
                            lH: d = 1.6,
                            CH: e,
                            bP: f,
                            aR: g,
                            signal: h,
                            rpa: k
                        } = b;
                        __c.v(d > 1, "increaseFactor (${increaseFactor}) must be greater than 1");
                        return __c.rsa(a, l => {
                            l = Math.min(c * Math.pow(d, l), e);
                            const m = k ? .();
                            return m !== void 0 ? Math.max(l, m) : l
                        }, {
                            bP: f,
                            aR: g,
                            signal: h
                        })
                    },
                    WZb = function({
                        yd: a,
                        Sc: b
                    }) {
                        return `${a}:${b}`
                    },
                    XZb = async function(a) {
                        const b = WV()();
                        try {
                            if (![2, 3, 1, 4].includes(a._status)) {
                                var c = a.Sc,
                                    d = a.yd;
                                XV(() => {
                                    a._status = 2
                                });
                                try {
                                    b.r(await b.s(a.nW.ZG(new YV({
                                        ref: {
                                            Sc: c,
                                            yd: d,
                                            Um: void 0
                                        },
                                        Zg: a.Zg,
                                        Ak: ZV(a)
                                    })))), XV(() => {
                                        a._status = 4
                                    })
                                } catch (e) {
                                    b.r(), XV(() => {
                                        a._status === 2 && (a._status = e instanceof __c.GE ? 1 : 5)
                                    })
                                }
                            }
                        } finally {
                            b.s()
                        }
                    },
                    YZb = async function(a, b) {
                        const c = WV()();
                        try {
                            if (![4, 3].includes(a._status)) {
                                XV(() => {
                                    a._status = 3
                                });
                                try {
                                    c.r(await c.s(a.nW.ZG(new YV({
                                        ref: {
                                            Sc: a.Sc,
                                            yd: a.yd,
                                            Um: void 0
                                        },
                                        Zg: a.Zg,
                                        Ak: ZV(a)
                                    })))), XV(() => {
                                        a._status = 4
                                    })
                                } catch (d) {
                                    c.r()
                                }
                                if (a._status !== 4) try {
                                    c.r(await c.s(a.rq.Zia({
                                        Sc: a.Sc,
                                        yd: a.yd,
                                        Zg: a.Zg,
                                        gi: b.gi,
                                        kc: b.gHb
                                    }))), XV(() => {
                                        a._status = 4
                                    })
                                } catch (d) {
                                    c.r(), XV(() => {
                                        d instanceof __c.HE ? a._status = 4 : a._status === 3 && (a._status = 5)
                                    })
                                }
                            }
                        } finally {
                            c.s()
                        }
                    },
                    ZV = function(a) {
                        return a.source.type === "website" ? a.source.Ak : void 0
                    },
                    $V = function(a, b) {
                        var c = a.$Sa.get(b);
                        if (c) return c;
                        c = {
                            jj: b,
                            MS: void 0,
                            MD: void 0
                        };
                        a.$Sa.set(b, c);
                        return c
                    },
                    bW = async function(a) {
                        return a.fv.then(aW.wrap(() => Ia()),
                            aW.wrap(() => Ka()))
                    },
                    ZZb = function(a) {
                        a.MT ? .cancel();
                        a.vPa ? .();
                        a.MT ? .start()
                    },
                    c_b = async function(a, b, c, d) {
                        const e = WV()();
                        try {
                            const f = d.flatMap(g => RZb(g));
                            try {
                                const g = e.r(await e.s(a.rq.Nva(new __c.$Zb({
                                    AO: b.id,
                                    Sc: a.Sc,
                                    fingerprint: c,
                                    yd: a.yd,
                                    Zg: a.Zg,
                                    Cn: f,
                                    Ak: ZV(a),
                                    caller: b.submitter,
                                    hza: a_b(a, c)
                                }))));
                                switch (g.type) {
                                    case "SUCCESS":
                                        const h = $V(a, c);
                                        h.MS = g.$v.id;
                                        h.MD = g.$v;
                                        return b_b(g);
                                    case "ERROR":
                                        return a.N.Ub(new cW("edit submission failed")), Ka({
                                            Pm: 1,
                                            kB: !0
                                        });
                                    default:
                                        throw new y(g);
                                }
                            } catch {
                                return e.r(),
                                    Ka({
                                        Pm: 1,
                                        kB: !0
                                    })
                            }
                        } finally {
                            e.s()
                        }
                    },
                    f_b = function(a) {
                        const b = a.yd;
                        return a.source.type === "website" ? new d_b({
                            nR: b
                        }) : new e_b({
                            yd: b
                        })
                    },
                    g_b = async function(a, b, c, d, e) {
                        const f = WV()();
                        try {
                            switch (b.code) {
                                case 3:
                                    return a.N.Ub(new cW("unknown form")), Ka({
                                        Pm: 2,
                                        kB: !0
                                    });
                                case 1:
                                case 2:
                                    try {
                                        if (!f.r(await f.s(a.xFa({
                                                jj: c,
                                                gi: e
                                            }))).ok) return a.N.Ub(new cW("backfill submission failed")), Ka({
                                            Pm: 3,
                                            kB: !1
                                        });
                                        const {
                                            MD: g
                                        } = $V(a, c);
                                        if (g ? .Cn.length) return c_b(a, g, c, d);
                                        a.N.Ub(new cW("empty submission"));
                                        return Ka({
                                            Pm: 5,
                                            kB: !1
                                        })
                                    } catch (g) {
                                        return f.r(),
                                            a.N.Ub(g), Ka({
                                                Pm: 1,
                                                kB: !0
                                            })
                                    }
                                default:
                                    throw new y(b.code);
                            }
                        } finally {
                            f.s()
                        }
                    },
                    a_b = function(a, b) {
                        ({
                            MD: a
                        } = $V(a, b));
                        a = a ? .submitter;
                        return a ? .type === "ANON" ? a : void 0
                    },
                    h_b = function(a, b) {
                        return b.some(c => c === 5) && a.source.type === "website" ? 2 : void 0
                    },
                    b_b = function(a) {
                        var b = a.$v;
                        a = a.Wi;
                        __c.w(b != null);
                        const c = new Map(a.map(d => [d.Wo, d.Pia]));
                        b = TZb(b);
                        a = __c.mf(b.Cn, (d, e) => {
                            d = c.get(e);
                            return {
                                Wo: e,
                                feedback: d ? .length ? {
                                    Wi: d
                                } : void 0
                            }
                        });
                        return Ia({
                            $v: b,
                            result: {
                                IL: a
                            }
                        })
                    },
                    aW = __webpack_require__(245307).Fm;
                var WV = __webpack_require__(75402)._;
                var dW = __webpack_require__(186901),
                    XV = dW.h5,
                    i_b = dW.mJ,
                    j_b = dW.sH;
                var k_b = __webpack_require__(512547).c;
                __c.eW = H(() => ({
                    type: E("A?", 2, "ANON"),
                    clientId: V(1)
                }));
                __c.fW = H(() => ({
                    type: E("A?", 1, "USER"),
                    brand: V(1),
                    user: V(2),
                    q0: Y(3)
                }));
                __c.gW = __c.mb(() => ({
                    type: [1, __c.fW, 2, __c.eW]
                }), () => ({}));
                __c.hW = () => ({
                    AO: V(1),
                    Sc: V(2),
                    yd: V(6),
                    fingerprint: V(7),
                    Zg: Y(5),
                    Ak: Y(8),
                    hza: __c.G(9, __c.eW),
                    caller: __c.G(12, __c.gW)
                });
                __c.l_b = H(() => ({ ...__c.hW(),
                    type: E("A?", 4, "ARCHIVE")
                }));
                var m_b = nb(() => [1, 2]);
                var iW = () => ({
                    arity: __c.Za(1, m_b)
                });
                var QZb = H(() => ({ ...iW(),
                    type: E("A?", 7, "NUMBER_FIELD"),
                    min: __c.HF(13),
                    max: __c.HF(14)
                }));
                var n_b = H(() => ({ ...iW(),
                    type: E("A?", 8, "EMAIL_FIELD")
                }));
                var PZb = H(() => ({ ...iW(),
                    type: E("A?", 9, "TEXT_FIELD")
                }));
                var OZb = H(() => ({
                    label: V(1),
                    value: V(2)
                }));
                var NZb = H(() => ({ ...iW(),
                    type: E("A?", 10, "SELECT_FIELD"),
                    options: __c.Ya(11, OZb),
                    multiple: __c.NF(12)
                }));
                var o_b = __c.mb(() => ({
                    type: [7, QZb, 8, n_b, 9, PZb, 10, NZb]
                }), iW);
                __c.UV = H(() => ({
                    id: V(1),
                    label: V(2),
                    Vb: __c.Xa(3, o_b)
                }));
                VV = __c.VV = H(() => ({
                    Vb: __c.Xa(3, __c.UV),
                    value: V(2)
                }));
                __c.$Zb = H(() => ({ ...__c.hW(),
                    type: E("A?", 3, "EDIT"),
                    Cn: __c.Ya(10, VV),
                    submitter: __c.G(11, __c.gW)
                }));
                __c.jW = H(() => ({
                    yd: V(1),
                    Sc: V(2),
                    Um: Y(3)
                }));
                __c.p_b = nb(() => [1, 2, 3, 4, 5, 7, 8, 9], 1);
                __c.kW = nb(() => [1, 2]);
                YV = __c.YV = H(() => ({
                    ref: __c.Xa(1, __c.jW),
                    S0: __c.ab(2, __c.p_b),
                    eda: __c.$a(6, __c.kW),
                    gi: Y(4),
                    Zg: Y(3),
                    Ak: Y(5)
                }));
                __c.lW = H(() => ({
                    Wo: V(1),
                    Pia: __c.MF(2)
                }));
                __c.q_b = nb(() => [1, 2]);
                __c.mW = nb(() => [1, 2]);
                var r_b = H(() => ({
                    Uw: Y(1),
                    limit: __c.FF(2, 100),
                    Zg: Y(3),
                    Kta: __c.$a(7, __c.q_b),
                    status: __c.$a(8, __c.mW),
                    gi: Y(20),
                    type: E("A?", 6, "BY_CALLER"),
                    yd: V(11),
                    Sc: V(12),
                    Um: Y(13),
                    Ak: Y(14)
                }));
                var d_b = H(() => ({
                    type: E("A?", 1, "WEBSITE"),
                    nR: V(1)
                }));
                var s_b = H(() => ({
                    type: E("A?", 2, "PREVIEW")
                }));
                var e_b = H(() => ({
                    type: E("A?", 3, "DESIGN"),
                    yd: V(1)
                }));
                __c.t_b = __c.mb(() => ({
                    type: [1, d_b, 2, s_b, 3, e_b]
                }), () => ({}));
                __c.u_b = H(() => ({
                    $ma: V(1),
                    Sc: V(2),
                    Um: V(3),
                    gi: Y(10),
                    source: __c.Xa(4, __c.t_b),
                    Cn: __c.Ya(5, VV),
                    userId: Y(6),
                    qC: Y(7),
                    tqa: Y(8),
                    Zg: Y(9),
                    Ak: Y(11)
                }));
                var v_b = class {
                    ZG(a) {
                        const b = this.bufferData;
                        if (b) {
                            b.buffer.push(a);
                            const e = b.buffer.length - 1;
                            return b.f_a.then(aW.wrap(f => ({
                                form: f.Wra[e].form,
                                n1: f.n1
                            })))
                        }
                        const c = this.Cgb,
                            d = [a];
                        a = new Promise((e, f) => {
                            c(async () => {
                                const g = WV()();
                                try {
                                    this.bufferData = void 0;
                                    try {
                                        const h = g.r(await g.s(this.rq.zGa({
                                            sPa: d
                                        })));
                                        e(h)
                                    } catch (h) {
                                        g.r(), f(h)
                                    }
                                } finally {
                                    g.s()
                                }
                            }, 500)
                        });
                        this.bufferData = {
                            buffer: d,
                            f_a: a
                        };
                        return a.then(aW.wrap(e => ({
                            form: e.Wra[0].form,
                            n1: e.n1
                        })))
                    }
                    constructor(a) {
                        var b = setTimeout;
                        this.rq = a;
                        this.Cgb = b
                    }
                };
                var w_b = class {
                    start() {
                        if (this.lQ) return this.lQ;
                        let a, b = !1;
                        const c = async () => {
                            const d = WV()();
                            try {
                                a = VZb(this.Lda, {
                                    initialDelay: this.ta.initialDelay,
                                    lH: this.ta.lH,
                                    CH: this.ta.CH,
                                    rpa: this.ta.rpa,
                                    aR: !0
                                });
                                try {
                                    const e = d.r(await d.s(a.result));
                                    b || this.effect(e)
                                } catch {
                                    d.r()
                                } finally {
                                    b || c()
                                }
                            } finally {
                                d.s()
                            }
                        };
                        c();
                        return this.lQ = () => {
                            b = !0;
                            a ? .cancel();
                            this.lQ = void 0
                        }
                    }
                    cancel() {
                        this.lQ && this.lQ()
                    }
                    constructor(a, b, c) {
                        this.Lda = a;
                        this.effect = b;
                        this.ta = c
                    }
                };
                var x_b, cW;
                __c.y_b = class {
                    get(a) {
                        a = this.getContext(a);
                        XZb(a);
                        return a
                    }
                    Zb(a) {
                        const b = this.getContext(a);
                        YZb(b, a);
                        return b
                    }
                    getContext({
                        Sc: a,
                        yd: b,
                        Zg: c
                    }) {
                        const d = WZb({
                                yd: b,
                                Sc: a
                            }),
                            e = this.contexts.get(d);
                        if (e) return e;
                        a = new x_b(a, b, c, this.nW, this.rq, this.N, this.source);
                        this.contexts.set(d, a);
                        return a
                    }
                    constructor(a, b, c = {
                        type: "design"
                    }) {
                        this.rq = a;
                        this.N = b;
                        this.source = c;
                        this.contexts = new Map;
                        this.nW = new v_b(a)
                    }
                };
                x_b = class {
                    static F(a) {
                        __c.O(a, {
                            _status: j_b.ref
                        })
                    }
                    get status() {
                        switch (this._status) {
                            case 0:
                            case 2:
                            case 3:
                                return 1;
                            case 4:
                                return 2;
                            case 5:
                            case 1:
                                return 3;
                            default:
                                throw new y(this._status);
                        }
                    }
                    get fv() {
                        return new Promise((a, b) => {
                            i_b(() => this.status, (c, d, e) => {
                                switch (c) {
                                    case 2:
                                        a();
                                        e.dispose();
                                        break;
                                    case 3:
                                        b(Error("Form initialization errored."));
                                        e.dispose();
                                        break;
                                    case 1:
                                        break;
                                    default:
                                        throw new y(c);
                                }
                            }, {
                                fireImmediately: !0
                            })
                        })
                    }
                    getSettings(a) {
                        return new k_b(b => {
                            const c = i_b(() => a.hxb(), async d => {
                                const e = WV()();
                                try {
                                    if (d) {
                                        const f = this.Fca.get(d);
                                        if (f) {
                                            b.next({
                                                status: 1,
                                                data: f
                                            });
                                            return
                                        }
                                    }
                                    try {
                                        b.next({
                                            status: 2
                                        });
                                        e.r(await e.s(this.fv));
                                        const {
                                            form: f,
                                            Bja: g
                                        } = e.r(await e.s(this.rq.ZG(new YV({
                                            ref: new __c.jW({
                                                Sc: this.Sc,
                                                yd: this.yd
                                            }),
                                            gi: d,
                                            Zg: this.Zg,
                                            Ak: ZV(this),
                                            S0: [8]
                                        })))), h = UZb(f.kc, g);
                                        d && this.Fca.set(d, h);
                                        b.next({
                                            status: 1,
                                            data: h
                                        })
                                    } catch (f) {
                                        e.r(), b.next((0, __c.TV)({
                                            gi: d
                                        })), this.N.Ub(f)
                                    }
                                } finally {
                                    e.s()
                                }
                            }, {
                                fireImmediately: !0
                            });
                            return () => c()
                        })
                    }
                    async c7a(a) {
                        const b = WV()();
                        try {
                            if (a) {
                                const c = this.Fca.get(a);
                                if (c) return Ia(c)
                            }
                            try {
                                b.r(await b.s(this.fv));
                                const {
                                    form: c,
                                    Bja: d
                                } = b.r(await b.s(this.rq.ZG(new YV({
                                    ref: new __c.jW({
                                        Sc: this.Sc,
                                        yd: this.yd
                                    }),
                                    gi: a,
                                    Zg: this.Zg,
                                    Ak: ZV(this),
                                    S0: [8, 2]
                                })))), e = UZb(c.kc, d, c.Sba);
                                a && this.Fca.set(a, e);
                                return Ia(e)
                            } catch (c) {
                                return b.r(), this.N.Ub(c), Ka()
                            }
                        } finally {
                            b.s()
                        }
                    }
                    async xFa(a) {
                        const b = WV()();
                        try {
                            const c = $V(this, a.jj);
                            if (c.QR) return c.QR;
                            if (!b.r(await b.s(bW(this))).ok) return Ka();
                            c.QR = this.rq.yFa(new r_b({
                                Sc: this.Sc,
                                Um: a.jj,
                                yd: this.yd,
                                Zg: this.Zg,
                                Kta: 2,
                                Ak: ZV(this),
                                gi: a.gi
                            })).then(aW.wrap(({
                                Qj: d
                            }) => {
                                const e = (d = d.find(f =>
                                    f.status === 1 && f.B8.Um === a.jj)) ? TZb(d) : void 0;
                                c.MS = e ? .id;
                                c.MD = d;
                                return Ia(e)
                            })).catch(aW.wrap(() => Ka())).finally(aW.wrap(() => {
                                c.QR = void 0
                            }));
                            return c.QR
                        } finally {
                            b.s()
                        }
                    }
                    async tab({
                        gi: a,
                        jj: b,
                        Cn: c
                    }) {
                        const d = WV()();
                        try {
                            if (!d.r(await d.s(bW(this))).ok) return Ka({
                                Pm: 7,
                                kB: !0
                            });
                            const e = $V(this, b);
                            d.r(await d.s(e.QR));
                            const f = this.Sc,
                                g = this.Zg;
                            this.MT ? .cancel();
                            const h = c.flatMap(l => RZb(l));
                            let k;
                            try {
                                if (e.MD) return c_b(this, e.MD, b, c);
                                const l = __c.td();
                                k = d.r(await d.s(this.rq.mCa(new __c.u_b({
                                    $ma: l,
                                    Sc: f,
                                    Um: b,
                                    gi: a,
                                    Zg: g,
                                    Cn: h,
                                    source: f_b(this),
                                    Ak: ZV(this)
                                }))))
                            } catch (l) {
                                return d.r(), Ka({
                                    Pm: 1,
                                    kB: !0
                                })
                            } finally {
                                ZZb(this)
                            }
                            switch (k.type) {
                                case "SUCCESS":
                                    return __c.w(k.$v != null), e.MS = k.$v.id, e.MD = k.$v, b_b(k);
                                case "ERROR":
                                    return g_b(this, k, b, c, a);
                                default:
                                    throw new y(k);
                            }
                        } finally {
                            d.s()
                        }
                    }
                    async HT({
                        jj: a
                    }) {
                        const b = WV()();
                        try {
                            if (!b.r(await b.s(bW(this))).ok) return Ka();
                            const c = $V(this, a);
                            b.r(await b.s(c.QR));
                            const d = this.Sc,
                                e = this.yd,
                                f = this.Zg;
                            if (!c.MS) return Ia();
                            this.MT ? .cancel();
                            try {
                                const g = b.r(await b.s(this.rq.Nva(new __c.l_b({
                                    AO: c.MS,
                                    Sc: d,
                                    yd: e,
                                    fingerprint: a,
                                    Zg: f,
                                    Ak: ZV(this),
                                    caller: c.MD ? .submitter,
                                    hza: a_b(this, a)
                                }))));
                                switch (g.type) {
                                    case "SUCCESS":
                                        return c.MS = void 0, c.MD = void 0, Ia();
                                    case "ERROR":
                                        return Ka();
                                    default:
                                        throw new y(g);
                                }
                            } catch {
                                return b.r(), Ka()
                            } finally {
                                ZZb(this)
                            }
                        } finally {
                            b.s()
                        }
                    }
                    constructor(a, b, c, d, e, f, g = {
                        type: "design"
                    }) {
                        this.Sc = a;
                        this.yd = b;
                        this.Zg = c;
                        this.nW = d;
                        this.rq = e;
                        this.N = f;
                        this.source = g;
                        this._status = (x_b.F(this), 0);
                        this.$Sa = new Map;
                        this.Fca = new Map;
                        this.eab = h => {
                            let k, l, m = __c.td();
                            const n = async p => {
                                const q = WV()();
                                try {
                                    try {
                                        const B = h.g7a();
                                        var r = this.Sc,
                                            t = this.yd;
                                        const D = this.Zg,
                                            F = [5];
                                        q.r(await q.s(this.fv));
                                        const {
                                            form: I,
                                            n1: K
                                        } = q.r(await q.s(this.nW.ZG(new YV({
                                            ref: new __c.jW({
                                                Sc: r,
                                                yd: t,
                                                Um: B
                                            }),
                                            S0: F,
                                            Zg: D,
                                            Ak: ZV(this),
                                            eda: h_b(this, F)
                                        }))));
                                        l = K != null ? K * 1E3 : void 0;
                                        var u;
                                        if (u = k) a: {
                                            r = k;
                                            var z = I.IL;
                                            if (r.length !== z.length) u = !1;
                                            else {
                                                for (t = 0; t < r.length; t++)
                                                    if (r[t].version !== z[t].version) {
                                                        u = !1;
                                                        break a
                                                    }
                                                u = !0
                                            }
                                        }
                                        if (!u && p === m) {
                                            var A = k = I.IL;
                                            const L = new Map;
                                            for (const M of A) {
                                                if (M.type !== "SELECT") continue;
                                                let R = L.get(M.Wo);
                                                R || (R = {
                                                    id: M.Wo,
                                                    qqa: new Map,
                                                    total: 0
                                                }, L.set(M.Wo, R));
                                                for (const S of M.gTa) {
                                                    const W = S.o0,
                                                        X = R.qqa.get(W) ? ? 0;
                                                    R.qqa.set(W, X + S.uua);
                                                    R.total += S.uua
                                                }
                                            }
                                            return {
                                                jj: B,
                                                results: {
                                                    fields: L
                                                }
                                            }
                                        }
                                    } catch (B) {
                                        q.r(), this.N.Ub(B)
                                    }
                                } finally {
                                    q.s()
                                }
                            };
                            return new k_b(p => {
                                this.vPa = () => {
                                    k = [];
                                    m = __c.td()
                                };
                                const q = new w_b(() => n(m), r => p.next(r), {
                                    initialDelay: 1E3,
                                    lH: 2,
                                    CH: 6E4,
                                    rpa: () => l
                                });
                                q.start();
                                this.MT = q;
                                return () => {
                                    this.MT ? .cancel();
                                    this.vPa = this.MT = void 0
                                }
                            })
                        }
                    }
                };
                cW = class extends Error {
                    constructor(a) {
                        super(`form: unexpected "${a}"`)
                    }
                };
                __c.z_b = H(() => ({
                    Owb: __c.JF(1),
                    Uva: __c.JF(2),
                    iza: __c.NF(4),
                    Wi: __c.Ya(3, __c.lW)
                }));
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
]); // __FILE_CONTENT_FOR__:db240ee33013aa27.js
(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [13280], {

        /***/
        427010: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(271191);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var x = __c.x;
                var SV = __c.SV;
                var RV = __c.RV;
                var a0 = function(a) {
                        __c.v(a.length > 0);
                        __c.v(a.every(b => b.indexOf("?") < 0));
                        return RV(new __c.KZb(["", ...a.map(encodeURIComponent)].join("/")))
                    },
                    b0 = __webpack_require__(75402)._;
                var Q9b = __c.mb(() => ({
                    type: [3, __c.$Zb, 4, __c.l_b]
                }), __c.hW);
                var R9b = __c.H(() => ({
                    yd: __c.V(1),
                    Sc: __c.V(2),
                    kc: __c.Xa(3, __c.z_b),
                    gi: __c.Y(6),
                    Zg: __c.Y(5)
                }));
                var S9b = __c.H(() => ({
                    sPa: __c.Ya(1, __c.YV)
                }));
                var T9b = class {
                        async Zia(a) {
                            const b = b0()();
                            try {
                                const c = SV(a0([c0, ""])),
                                    [d, {
                                        MWa: e
                                    }] = b.r(await b.s(Promise.all([this.Et.post(c, R9b.serialize(a), {
                                        zE: "createform"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        MWa: __c.I_b
                                    }))])));
                                return e.deserialize(d)
                            } finally {
                                b.s()
                            }
                        }
                        async ZG(a) {
                            const b = b0()();
                            try {
                                const c = a0([c0, ""]);
                                RV(c, {
                                    "ref.designId": x(a.ref.yd),
                                    "ref.formId": x(a.ref.Sc),
                                    "ref.formFingerprint": a.ref.Um,
                                    projections: a.S0.map(g => __c.p_b.serialize(g)),
                                    sourceFilter: a.eda && __c.kW.serialize(a.eda),
                                    settingsId: a.gi,
                                    extensionToken: a.Zg,
                                    websiteAccessToken: a.Ak
                                });
                                const d = SV(c),
                                    [e, {
                                        kXa: f
                                    }] = b.r(await b.s(Promise.all([this.Et.get(d, {
                                        zE: "getform"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        kXa: __c.tW
                                    }))])));
                                return f.deserialize(e)
                            } finally {
                                b.s()
                            }
                        }
                        async zGa(a) {
                            const b = b0()();
                            try {
                                const c = SV(a0([c0, "batch"])),
                                    [d, {
                                        jXa: e
                                    }] = b.r(await b.s(Promise.all([this.Et.post(c, S9b.serialize(a), {
                                        zE: "getformbatch"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        jXa: __c.L_b
                                    }))])));
                                return e.deserialize(d)
                            } finally {
                                b.s()
                            }
                        }
                        async mCa(a) {
                            const b =
                                b0()();
                            try {
                                const c = SV(a0([c0, "submissions"])),
                                    [d, {
                                        NWa: e
                                    }] = b.r(await b.s(Promise.all([this.Et.post(c, __c.u_b.serialize(a), {
                                        zE: "createsubmission"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        NWa: __c.N9b
                                    }))])));
                                return e.deserialize(d)
                            } finally {
                                b.s()
                            }
                        }
                        async yFa(a) {
                            const b = b0()();
                            try {
                                const c = a0([c0, "submissions"]);
                                RV(c, {
                                    type: a.type,
                                    continuation: a.Uw,
                                    limit: x(a.limit),
                                    extensionToken: a.Zg,
                                    sortOrder: a.Kta && __c.q_b.serialize(a.Kta),
                                    status: a.status && __c.mW.serialize(a.status),
                                    settingsId: a.gi
                                });
                                switch (a.type) {
                                    case "BY_FORM":
                                        RV(c, {
                                            designId: x(a.yd),
                                            formId: x(a.Sc),
                                            formFingerprint: a.Um,
                                            source: a.source && __c.kW.serialize(a.source)
                                        });
                                        break;
                                    case "BY_USER":
                                        RV(c, {
                                            designId: x(a.yd),
                                            formId: x(a.Sc),
                                            formFingerprint: a.Um,
                                            brand: x(a.brand),
                                            user: x(a.user),
                                            org: a.q0
                                        });
                                        break;
                                    case "BY_CALLER":
                                        RV(c, {
                                            designId: x(a.yd),
                                            formId: x(a.Sc),
                                            formFingerprint: a.Um,
                                            websiteAccessToken: a.Ak
                                        });
                                        break;
                                    default:
                                        throw new __c.y(a);
                                }
                                const d = SV(c),
                                    [e, {
                                        eXa: f
                                    }] = b.r(await b.s(Promise.all([this.Et.get(d, {
                                        zE: "findsubmissions"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        eXa: __c.sW
                                    }))])));
                                return f.deserialize(e)
                            } finally {
                                b.s()
                            }
                        }
                        async Nva(a) {
                            const b = b0()();
                            try {
                                __c.v(a.Sc != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.Sc));
                                __c.v(a.AO != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.AO));
                                const c = SV(a0([c0, a.Sc, "submissions", a.AO])),
                                    [d, {
                                        eYa: e
                                    }] = b.r(await b.s(Promise.all([this.Et.post(c, Q9b.serialize(a), {
                                        zE: "updatesubmissionapi"
                                    }), __webpack_require__.me(769064).then(() => ({
                                        eYa: __c.P9b
                                    }))])));
                                return e.deserialize(d)
                            } finally {
                                b.s()
                            }
                        }
                        constructor(a) {
                            this.Et =
                                a
                        }
                    },
                    c0 = "form";
                var U9b = class {};
                __c.tZa = {
                    h9a: function({
                        Et: a,
                        N: b,
                        Ak: c
                    }) {
                        a = new T9b(a);
                        return {
                            rq: a,
                            Y5a: new U9b,
                            TFa: new __c.y_b(a, b, {
                                type: "website",
                                Ak: c
                            })
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
]); // __FILE_CONTENT_FOR__:0a1f82b128480615.js
(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [6769], {

        /***/
        772543: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var nR;
                var p0 = function(a) {
                        return a.isConnected && a.matches("input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[contenteditable],[tabindex],[autofocus]")
                    },
                    q0 = function(a) {
                        return Array.from(a.querySelectorAll("input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[contenteditable],[tabindex],[autofocus]"))
                    },
                    J$b =
                    function(a) {
                        return a.querySelector("input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[contenteditable],[tabindex],[autofocus]")
                    },
                    K$b = function(a) {
                        function b(e) {
                            e.target instanceof Element ? (c = e.target, d.disconnect(), d.observe(e.target)) : c = null
                        }
                        let c = a.activeElement;
                        const d = new IntersectionObserver(() => {
                            if (a.activeElement !== c && !(c instanceof HTMLElement && p0(c))) {
                                const e =
                                    a.defaultView ? .top ? .document;
                                (e != null && e !== a && e.hasFocus() && !a.hasFocus() ? 0 : a.activeElement == null || a.activeElement === a.body) && a.dispatchEvent(new FocusEvent("focusfixup"))
                            }
                        }, {
                            root: null,
                            rootMargin: "9999px"
                        });
                        a.addEventListener("focusin", b);
                        return () => {
                            d.disconnect();
                            a.removeEventListener("focusin", b)
                        }
                    },
                    M$b = function(a) {
                        function b(d) {
                            const e = d.target;
                            clearTimeout(c);
                            c = setTimeout(L$b.wrap(() => {
                                a.activeElement instanceof HTMLIFrameElement && a.activeElement.dispatchEvent(new FocusEvent("focusin", {
                                    relatedTarget: e
                                }))
                            }))
                        }
                        let c;
                        a.addEventListener("focusout", b, {
                            capture: !0
                        });
                        return () => {
                            a.removeEventListener("focusout", b, {
                                capture: !0
                            })
                        }
                    },
                    N$b = function(a = !1) {
                        if (r0.enabled)
                            for (let b = s0.length - 1; b > 0; b--) a && s0[b].element.isConnected || (a || !p0(s0[b].element)) && s0.splice(b, 1)
                    },
                    O$b = function() {
                        var a = r0.state.element;
                        t0 = !0;
                        a.focus({
                            preventScroll: !0
                        })
                    },
                    u0 = function(a) {
                        clearTimeout(P$b);
                        P$b = setTimeout(L$b.wrap(() => {
                            document.dispatchEvent(new CustomEvent("focusstatechange", {
                                detail: {
                                    type: a
                                }
                            }))
                        }))
                    },
                    v0 = function(a, b = r0.state.boundary) {
                        return {
                            element: a,
                            boundary: b
                        }
                    },
                    Q$b = function() {
                        function a() {
                            N$b();
                            O$b();
                            u0("pop")
                        }

                        function b(f) {
                            t0 ? t0 = !1 : f.target instanceof HTMLElement && (N$b(!0), f = v0(f.target, c.body), s0.length >= 100 && s0.shift(), s0.push(f), u0("push"))
                        }
                        var c = document;
                        if (!r0.enabled) {
                            s0.length = 0;
                            s0.push({
                                element: J$b(c.body) ? ? c.body,
                                boundary: c.body
                            });
                            w0 = !0;
                            c.addEventListener("focusfixup", a, {
                                capture: !0
                            });
                            c.addEventListener("focusin", b, {
                                capture: !0
                            });
                            var d = K$b(c),
                                e = M$b(c);
                            return () => {
                                s0.length = 0;
                                w0 = !1;
                                c.removeEventListener("focusfixup", a, {
                                    capture: !0
                                });
                                c.removeEventListener("focusin",
                                    b, {
                                        capture: !0
                                    });
                                d();
                                e()
                            }
                        }
                    },
                    R$b = function(a) {
                        const b = x0(null),
                            c = x0(void 0);
                        y0(() => {
                            if (b.current) return c.current = new MutationObserver(a), c.current.observe(b.current, {
                                childList: !0,
                                subtree: !0
                            }), a([], c.current), () => c.current ? .disconnect()
                        }, [a]);
                        return {
                            ref: b
                        }
                    },
                    U$b = function() {
                        const a = x0(null),
                            b = x0([]),
                            c = x0(null);
                        var d = z0(() => {
                            a.current && (b.current = q0(a.current))
                        }, []);
                        ({
                            ref: d
                        } = R$b(d));
                        d = S$b(a, d);
                        const e = z0(h => {
                                h.target instanceof HTMLElement && (c.current = h.target)
                            }, []),
                            f = z0(h => {
                                h.relatedTarget instanceof HTMLElement &&
                                    !a.current ? .contains(h.relatedTarget) && (c.current = null)
                            }, []),
                            g = T$b(() => ({
                                get focused() {
                                    return c.current
                                },
                                get KFa() {
                                    return b.current.slice()
                                },
                                B5a(h, k) {
                                    ({
                                        wrap: k = !0
                                    } = k ? ? {});
                                    const l = b.current;
                                    if (h = l[k ? h % l.length : h]) return h.focus(), h
                                },
                                Fwb(h) {
                                    ({
                                        wrap: h = !0
                                    } = h ? ? {});
                                    const k = b.current,
                                        l = k.findIndex(m => m === c.current);
                                    if (l !== -1 && (h = k[h ? (l + 1) % k.length : Math.min(l + 1, k.length - 1)])) return h.focus(), h
                                },
                                Gwb(h) {
                                    ({
                                        wrap: h = !0
                                    } = h ? ? {});
                                    const k = b.current,
                                        l = k.findIndex(m => m === c.current);
                                    if (l !== -1 && (h = k[h ? l > 0 ? l - 1 : k.length - 1 :
                                            Math.max(0, l - 1)])) return h.focus(), h
                                },
                                Dwb() {
                                    const h = b.current[0];
                                    if (h) return h.focus(), h
                                },
                                focusLast() {
                                    var h = b.current;
                                    if (h = h[h.length - 1]) return h.focus(), h
                                }
                            }), []);
                        return {
                            ref: d,
                            onFocusCapture: e,
                            onBlur: f,
                            JFa: g
                        }
                    },
                    A0 = function() {
                        return V$b(W$b)
                    },
                    X$b = function({
                        onEnter: a,
                        bdb: b
                    } = {}) {
                        const c = x0(null),
                            d = x0(!1),
                            e = z0(h => {
                                r0.enabled && h.target instanceof HTMLElement && r0.enabled && (s0[s0.length - 1] = v0(h.target, c.current), O$b(), u0("replace"));
                                d.current || (d.current = !0, a ? .(h))
                            }, [a]),
                            f = z0(h => {
                                h.relatedTarget instanceof
                                HTMLElement && !c.current ? .contains(h.relatedTarget) && (d.current = !1, b ? .(h))
                            }, [b]),
                            g = x0(b);
                        B0(() => {
                            g.current = b
                        }, [b]);
                        y0(() => () => {
                            d.current && g.current ? .()
                        }, []);
                        return {
                            ref: c,
                            onFocusCapture: e,
                            onBlur: f
                        }
                    },
                    Y$b = function(a, b) {
                        return a instanceof HTMLElement ? p0(a) ? a : J$b(a) : b ? .KFa[0]
                    },
                    Z$b = function() {
                        const a = x0(null),
                            b = A0();
                        C0(!0, () => Y$b(a.current, b));
                        return {
                            ref: a
                        }
                    },
                    $$b = function(a) {
                        const b = A0(),
                            c = a.to,
                            d = x0(c);
                        B0(() => {
                            d.current = c
                        }, [c]);
                        y0(() => () => {
                            if (b ? .focused != null) {
                                var e = typeof d.current === "string" ? document.getElementById(d.current) :
                                    d.current();
                                e && e.focus()
                            }
                        }, [b])
                    },
                    C0 = function(a, b) {
                        const c = x0(void 0);
                        y0(() => {
                            a !== c.current && (a === !0 && b() ? .focus(), c.current = a)
                        }, [a, b])
                    },
                    aac = function(a, b) {
                        const c = x0(null),
                            d = A0(),
                            e = x0(a);
                        y0(() => {
                            if (a !== e.current) {
                                e.current = a;
                                if (c.current instanceof HTMLElement) return q0(c.current)[a] ? .focus();
                                d != null && d.B5a(a)
                            }
                        }, [a, d]);
                        const f = x0(b);
                        B0(() => {
                            f.current = b
                        }, [b]);
                        const g = z0(h => {
                            const k = (c.current instanceof HTMLElement ? q0(c.current) : d ? .KFa) ? .findIndex(l => l === h.target) ? ? -1;
                            f.current ? .(k)
                        }, [d]);
                        return {
                            ref: c,
                            onFocus: g
                        }
                    },
                    L$b = __webpack_require__(245307).Fm;
                var D0 = __webpack_require__(322594).jsx;
                var S$b = __webpack_require__(87387).A;
                var E0 = __webpack_require__(205482),
                    z0 = E0.useCallback,
                    V$b = E0.useContext,
                    y0 = E0.useEffect,
                    bac = E0.useImperativeHandle,
                    B0 = E0.useLayoutEffect,
                    T$b = E0.useMemo,
                    x0 = E0.useRef;
                var s0 = [],
                    w0 = !1,
                    t0 = !1,
                    r0 = {
                        get enabled() {
                            return w0
                        },
                        get state() {
                            return s0[s0.length - 1] ? ? v0(document.activeElement, document.body)
                        }
                    },
                    P$b;
                var W$b = (0, E0.createContext)(null),
                    F0 = W$b.Provider;
                nR = __c.nR = {
                    Qnb: function() {
                        y0(() => Q$b(), []);
                        return null
                    },
                    Rnb: function(a) {
                        const {
                            ref: b
                        } = Z$b();
                        return a.children && D0("div", {
                            ref: b,
                            className: "t6hvMA",
                            children: a.children
                        })
                    },
                    yob: F0,
                    hXa: function(a) {
                        const b = a.onFocus,
                            c = a.onBlur,
                            d = a.ref,
                            {
                                ref: e,
                                onBlur: f,
                                onFocusCapture: g
                            } = X$b(a),
                            {
                                ref: h,
                                onFocusCapture: k,
                                onBlur: l,
                                JFa: m
                            } = U$b(),
                            n = z0(q => {
                                k(q);
                                g(q)
                            }, [k, g]),
                            p = z0(q => {
                                l(q);
                                f(q);
                                c ? .(q)
                            }, [l, f, c]);
                        bac(d, () => m, [m]);
                        return D0(F0, {
                            value: m,
                            children: D0("div", {
                                ref: S$b(e, h),
                                id: a.id,
                                className: "t6hvMA",
                                onFocusCapture: n,
                                onFocus: b,
                                onBlur: p,
                                children: a.children
                            })
                        })
                    },
                    zob: function(a) {
                        const b = x0(null),
                            c = A0();
                        C0(a.condition, () => Y$b(b.current, c));
                        return D0("div", {
                            ref: b,
                            className: "t6hvMA",
                            children: a.children
                        })
                    },
                    opb: function(a) {
                        $$b(a);
                        return null
                    },
                    Dpb: function(a) {
                        const {
                            ref: b,
                            onFocus: c
                        } = aac(a.index, a.GEb);
                        return D0("div", {
                            ref: b,
                            onFocus: c,
                            className: "t6hvMA",
                            children: a.children
                        })
                    },
                    Opb: function(a) {
                        const {
                            ref: b,
                            onFocusCapture: c,
                            onBlur: d,
                            JFa: e
                        } = U$b();
                        return D0(F0, {
                            value: e,
                            children: D0("div", {
                                ref: b,
                                onFocusCapture: c,
                                onBlur: d,
                                className: "t6hvMA",
                                children: a.children
                            })
                        })
                    },
                    dwb: function(a) {
                        a.focus();
                        a.blur()
                    }
                };
                nR.HIa = p0;
                nR.HIb = Z$b;
                nR.NIb = A0;
                nR.OIb = X$b;
                nR.PIb = function() {
                    return !__c.ao()
                };
                nR.QIb = C0;
                nR.RIb = $$b;
                nR.SIb = aac;
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/2_sourcemaps/717a53dd8899f98a.vendor.js.map+33_sourcemaps/d67dd5bea71269b0.js.map+12_sourcemaps/42a61a1d2e658b60.js.map+24_sourcemaps/40c4bfdd0a80c0e0.js.map+13_sourcemaps/db240ee33013aa27.js.map+21_sourcemaps/0a1f82b128480615.js.map