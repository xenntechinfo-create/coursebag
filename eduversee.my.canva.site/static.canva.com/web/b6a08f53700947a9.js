(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [34029], {

        /***/
        333838: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                __c.XX = function(a) {
                    let {
                        r: b,
                        g: c,
                        b: d
                    } = __c.cn(a);
                    c /= 255;
                    d /= 255;
                    a = b / 255;
                    return .2126 * (a <= .03928 ? a / 12.92 : ((a + .055) / 1.055) ** 2.4) + .7152 * (c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4) + .0722 * (d <= .03928 ? d / 12.92 : ((d + .055) / 1.055) ** 2.4)
                };
                __c.YX = function(a, b) {
                    a = __c.XX(a);
                    b = __c.XX(b);
                    return a > b ? (a + .05) / (b + .05) : (b + .05) / (a + .05)
                };
                __c.ZX = new __c.Jn("L");
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/b6a08f53700947a9.js.map