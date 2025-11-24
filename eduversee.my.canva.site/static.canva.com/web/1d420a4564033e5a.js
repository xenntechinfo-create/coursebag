(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [21421], {

        /***/
        721157: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                __c.QV = function(a, b, c) {
                    __c.v(b.length > 0);
                    __c.v(!a.params.has(b));
                    if (c != null)
                        if (Array.isArray(c)) {
                            c = c.filter(__c.Db);
                            if (c.length === 0) return a;
                            __c.v(c.every(d => typeof d === "number" || typeof d === "string"));
                            a.params.set(b, c)
                        } else if (typeof c === "boolean") a.params.set(b, c || String(c));
                    else if (typeof c === "number" || typeof c === "string") a.params.set(b, String(c));
                    else throw Error(`invalid param value type: ${typeof c}`);
                    return a
                };
                __c.RV = function(a, b) {
                    if (!b) return a;
                    if (b instanceof Map)
                        for (const [c, d] of b) __c.QV(a, c, d);
                    else
                        for (const c in b) __c.QV(a, c, b[c]);
                    return a
                };
                __c.SV = function(a) {
                    if (a.params.size === 0) return a.path;
                    const b = Array.from(a.params.entries()).map(([c, d]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                    return `${a.path}?${b}`
                };
                __c.KZb = class {
                    constructor(a) {
                        this.path = a;
                        this.params = new Map
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/1d420a4564033e5a.js.map