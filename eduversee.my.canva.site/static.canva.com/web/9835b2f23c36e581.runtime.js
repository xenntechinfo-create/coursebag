(() => {
    "use strict";
    var e, r, t, f, n, s = {},
        i = {};

    function c(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = s, c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, c.amdO = {}, e = [], c.O = (r, t, f, n) => {
        if (!t) {
            var s = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [t, f, n] = e[u], i = !0, a = 0; a < t.length; a++)
                    if ((!1 & n || s >= n) && Object.keys(c.O).every((e => c.O[e](t[a])))) t.splice(a--, 1);
                    else if (i = !1, n < s) s = n;
                if (i) {
                    e.splice(u--, 1);
                    var d = f();
                    if (void 0 !== d) r = d
                }
            }
            return r
        } else {
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [t, f, n]
        }
    }, c.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return c.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(e, f) {
        if (1 & f) e = this(e);
        if (8 & f) return e;
        if ("object" == typeof e && e) {
            if (4 & f && e.__esModule) return e;
            if (16 & f && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        c.r(n);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & f && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, c.d(n, s), n
    }, c.d = (e, r) => {
        for (var t in r)
            if (c.o(r, t) && !c.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => {
        if (82433 === e) return "8f4179a61c2d7dea.js";
        if (65673 === e) return "38c4a59e85d167e6.vendor.js";
        if (91438 === e) return "838ebe5470ea94d7.vendor.js";
        if (27740 === e) return "c4ac979195acdf45.js";
        if (5362 === e) return "efdd04ed275a8076.js";
        if (34029 === e) return "b6a08f53700947a9.js";
        if (96282 === e) return "6da6f149dacbce82.js";
        if (8022 === e) return "5df8be2475d68bf2.js";
        if (25421 === e) return "bcb54d87002fd31c.js";
        if (7626 === e) return "02483da29ebd65fa.js";
        if (26557 === e) return "f5ebda47f380c2d2.js";
        if (2179 === e) return "7c2711fb87c88d26.js";
        if (23348 === e) return "632195b9d247cab7.js";
        if (33472 === e) return "fa411e49b042ebf4.js";
        if (93569 === e) return "a4732be4aa67b130.js";
        if (51949 === e) return "3cb0db568626137b.js";
        if (79326 === e) return "e98312324ae54a88.js";
        if (97283 === e) return "a02528e8f8effb04.js";
        if (19393 === e) return "b50fbd9c77a23682.js";
        if (32762 === e) return "f83a80997c9bc71e.js";
        if (79839 === e) return "b918157dfba270fb.js";
        if (8693 === e) return "c1bf632ad62a592a.js";
        if (8949 === e) return "6e09e7e492be2c73.js";
        if (78609 === e) return "bc0ed43b9bb632e7.js";
        if (6857 === e) return "4a004b0e6aab87c7.js";
        if (37289 === e) return "bc69e2415b229a9d.js";
        if (36332 === e) return "76435d84fc50e262.js";
        if (25621 === e) return "10649841f84f2012.js";
        if (32878 === e) return "233afb5a904ff91a.js";
        if (96022 === e) return "58047cb220259fbe.js";
        if (46680 === e) return "af4d3ec5adae7fa1.js";
        if (98276 === e) return "c31cec739d37031c.js";
        if (95277 === e) return "7b1d3d66567348bb.js";
        if (24130 === e) return "db07c488ca567448.js";
        if (65035 === e) return "4c42eac186f29b56.js";
        if (33578 === e) return "8568c5d70dabe5f4.js";
        if (84400 === e) return "18072ffa645b1fde.js";
        if (34357 === e) return "7749250e3c3a4156.js";
        if (64055 === e) return "8a6e5ff98ff1d4de.js";
        if (5488 === e) return "b13e4ddbda3ccd53.js";
        if (4466 === e) return "8570c8100ef30ca8.js";
        if (13023 === e) return "7f7b3bd4d6855f6f.js";
        if (15193 === e) return "ce7c8907db0d6066.js";
        if (65928 === e) return "4080a7bb306215ed.js";
        if (97478 === e) return "f001f28f311bbfcf.js";
        if (4137 === e) return "3b1b0530ca0f7e37.js";
        if (9325 === e) return "981a1ecf1de0b603.js";
        if (13077 === e) return "a3cf560965600646.js";
        if (35653 === e) return "1924d7f04128bd98.js";
        if (44191 === e) return "da319e6e6556aa3e.js";
        if (57695 === e) return "c61c933f790aa328.js";
        if (97792 === e) return "d21364bb8c447731.js";
        if (30406 === e) return "93d484a77a354c37.js";
        if (7779 === e) return "49545f5d06cd54a5.js";
        if (29793 === e) return "8b0f12555a4b769b.js";
        if (11657 === e) return "0104ac9ae926badf.js";
        if (21437 === e) return "347bd838332563b9.js";
        if (68809 === e) return "673ed49dc4afed80.js";
        if (95731 === e) return "9a9a4dc11cf09808.js";
        if (38866 === e) return "6c2095e9792f5878.js";
        if (49001 === e) return "828f07901c9958fb.js";
        if (853 === e) return "9f0c5bc7115fb283.js";
        if (97450 === e) return "3c6d157ff88e0699.js";
        if (64610 === e) return "48775f690d621268.js";
        if (12190 === e) return "0a4b64755d607ec3.js";
        if (19584 === e) return "53dab2eeeccd69e8.js";
        if (47534 === e) return "d164b202e89b4688.js";
        if (18136 === e) return "e4ee50cf82f6f9a2.js";
        if (50332 === e) return "a03f4d92912f1764.js";
        if (92594 === e) return "3895ad4e0f70bf7f.js";
        if (30641 === e) return "5094a45778ef3f72.js";
        if (77116 === e) return "bc7b83293cbe1783.js";
        if (86258 === e) return "425cbf4c3e655fb1.js";
        if (92083 === e) return "c11958a8c5a21819.js";
        if (29420 === e) return "43c56758fb0c4439.js";
        if (50476 === e) return "299f4e75463abf7a.js";
        if (67874 === e) return "0a8e36736c25b7c8.js";
        if (94556 === e) return "098478c6ef6aa8dd.js";
        if (99668 === e) return "ee55bbe7b28d3b27.js";
        if (61032 === e) return "4a55432d0630d522.js";
        if (807 === e) return "42014befdb780ef9.js";
        if (70757 === e) return "be830b0ae398ed36.js";
        if (51199 === e) return "db0ecbb3fdf0a8e2.js";
        if (29055 === e) return "37b841a2be2c2bb2.js";
        if (13592 === e) return "990ef3fafafaca23.js";
        if (52334 === e) return "a609992a00f6474f.js";
        if (73217 === e) return "f8709b93b688173c.js";
        if (90377 === e) return "fb0f8d8af5016d6f.js";
        if (8540 === e) return "9392178b147e8167.js";
        if (44950 === e) return "965496228124f779.js";
        if (53200 === e) return "6b1743c250b7730c.js";
        if (25203 === e) return "aff0a0e66e014396.js";
        if (14833 === e) return "e50e7f3efe5b18af.js";
        if (71167 === e) return "073951a4b7e5c382.js";
        if (29372 === e) return "440c65d15aa0daf2.js";
        if (179 === e) return "1fc78f1eb4730d41.js";
        if (53741 === e) return "303a12141fb54710.js";
        if (35222 === e) return "478f0ae8f9e15383.js";
        if (91654 === e) return "53cecc0d3ec6bd78.vendor.js";
        if (78904 === e) return "5d2f0a13232add0a.vendor.js";
        if (54136 === e) return "4aaa04c9251d649d.js";
        if (84826 === e) return "7c072d1e3df3ad89.vendor.js";
        if (72034 === e) return "bd4f0e0729a86b2f.js";
        if (36181 === e) return "1956a449c3d43056.js";
        if (31442 === e) return "4c9a7a8f2dd6c689.js";
        if (73728 === e) return "84bc6140c6ced995.js";
        if (78426 === e) return "1317847dd2b4a829.js";
        if (6769 === e) return "0a1f82b128480615.js";
        if (97614 === e) return "01eed0fb008a5c48.vendor.js";
        if (99620 === e) return "122c4bc94c845477.js";
        if (43670 === e) return "7722e79e71e57aea.vendor.js";
        if (69798 === e) return "cc9db8eedc30d7b5.js";
        if (58724 === e) return "4d2e6be2e6e25220.js";
        if (97337 === e) return "4616b2a197b29a52.js";
        if (69334 === e) return "81440f2e5790cd4a.js";
        if (18778 === e) return "dea87fff7cf71dc0.js";
        if (77317 === e) return "ee67036e68764a20.js";
        if (62459 === e) return "a07d32ffb0841c0a.js";
        if (94116 === e) return "6ce52c9a82bfa8a8.js";
        if (41518 === e) return "b03616fcbd924f2f.js";
        if (95318 === e) return "f0ef3f2a71bafd04.js";
        if (95419 === e) return "c946712cfd3b2111.js";
        if (51690 === e) return "d7ff107b34299275.js";
        if (51138 === e) return "daff370a3df351af.js";
        if (45522 === e) return "ce22af223736269a.js";
        if (50086 === e) return "bda7d39e3cada480.js";
        if (4487 === e) return "a5520bf38c471d95.js";
        if (77246 === e) return "4946b19ff779752d.js";
        if (96443 === e) return "1b07fdd1abbfaa0a.js";
        if (25858 === e) return "b026c9cbd650ac58.js";
        if (73145 === e) return "35878da0c7cb5764.js";
        if (46844 === e) return "5b347251dbbbc9eb.js";
        if (84343 === e) return "03f0e909c1379429.js";
        if (93792 === e) return "9b78cd5508bd5149.js";
        if (21421 === e) return "1d420a4564033e5a.js";
        if (27539 === e) return "40c4bfdd0a80c0e0.js";
        if (13280 === e) return "db240ee33013aa27.js";
        if (99038 === e) return "d0d4c7d7cb8cfc4b.js";
        if (48996 === e) return "34c77be9647d465b.js";
        if (65483 === e) return "373d07296b0dc97b.js";
        if (72160 === e) return "cf64ec00237548b4.js";
        if (3386 === e) return "614a2ebc72834621.js";
        if (84663 === e) return "4be317d80de20568.js";
        if (62138 === e) return "0db5e336789ce8e0.js";
        if (30389 === e) return "c4214998e2ca10f7.js";
        if (95207 === e) return "fb86fbb8903449e2.js";
        if (8924 === e) return "f784b4f9007b337d.js";
        if (69828 === e) return "383490b60b74312b.js";
        if (68528 === e) return "29c3d00c792492ca.js";
        if (14729 === e) return "ad8ee15940036f8c.js";
        if (41224 === e) return "7c7aa12358b2c363.js";
        if (56361 === e) return "75090a920c7bd0b8.js";
        if (73978 === e) return "6922382262e3b04d.js";
        if (41623 === e) return "631ff3d4513d8151.js";
        if (73444 === e) return "63615994c2570bd4.js";
        if (14477 === e) return "af62196699ada45d.js";
        if (63014 === e) return "deed54e0e8cf5918.js";
        if (41195 === e) return "c4804acdc332dfb7.js";
        if (8817 === e) return "d70f1b9cd8da9589.js";
        if (66708 === e) return "601bc9db9e4b448f.js";
        if (32842 === e) return "dd67c0ca832fe6fd.js";
        if (47918 === e) return "717a53dd8899f98a.vendor.js";
        if (14302 === e) return "d67dd5bea71269b0.js";
        if (99222 === e) return "42a61a1d2e658b60.js";
        if (22867 === e) return "9ab9bad7fe4ad74c.js";
        if (98848 === e) return "87b827e229adbd4c.js";
        if (55471 === e) return "fe6deb34c4604133.js";
        if (53030 === e) return "de040675e727812b.js";
        if (25456 === e) return "5c242da2b32edc86.js";
        if (39729 === e) return "9d3f270e061bfec3.js";
        if (11660 === e) return "8700b507ba23dceb.vendor.js"
    }, c.miniCssF = e => {
        if (82433 === e) return "74665c88e815776a.ltr.css";
        if ({
                65673: 1,
                91438: 1,
                91654: 1,
                78904: 1,
                84826: 1,
                97614: 1,
                43670: 1,
                47918: 1,
                11660: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if ({
                27740: 1,
                34029: 1,
                8022: 1,
                25421: 1,
                7626: 1,
                26557: 1,
                2179: 1,
                23348: 1,
                33472: 1,
                93569: 1,
                51949: 1,
                79326: 1,
                97283: 1,
                32762: 1,
                79839: 1,
                8693: 1,
                8949: 1,
                78609: 1,
                6857: 1,
                37289: 1,
                36332: 1,
                32878: 1,
                96022: 1,
                46680: 1,
                98276: 1,
                95277: 1,
                24130: 1,
                65035: 1,
                33578: 1,
                84400: 1,
                34357: 1,
                64055: 1,
                5488: 1,
                4466: 1,
                13023: 1,
                15193: 1,
                65928: 1,
                97478: 1,
                4137: 1,
                9325: 1,
                13077: 1,
                35653: 1,
                44191: 1,
                57695: 1,
                97792: 1,
                30406: 1,
                7779: 1,
                29793: 1,
                11657: 1,
                21437: 1,
                68809: 1,
                95731: 1,
                38866: 1,
                49001: 1,
                853: 1,
                97450: 1,
                64610: 1,
                12190: 1,
                19584: 1,
                47534: 1,
                18136: 1,
                50332: 1,
                92594: 1,
                30641: 1,
                77116: 1,
                86258: 1,
                92083: 1,
                29420: 1,
                50476: 1,
                67874: 1,
                94556: 1,
                99668: 1,
                61032: 1,
                807: 1,
                70757: 1,
                51199: 1,
                29055: 1,
                13592: 1,
                52334: 1,
                73217: 1,
                90377: 1,
                8540: 1,
                44950: 1,
                53200: 1,
                14833: 1,
                71167: 1,
                29372: 1,
                179: 1,
                53741: 1,
                54136: 1,
                72034: 1,
                36181: 1,
                31442: 1,
                73728: 1,
                78426: 1,
                69798: 1,
                69334: 1,
                18778: 1,
                77317: 1,
                62459: 1,
                94116: 1,
                41518: 1,
                95318: 1,
                95419: 1,
                51690: 1,
                51138: 1,
                50086: 1,
                4487: 1,
                77246: 1,
                96443: 1,
                25858: 1,
                73145: 1,
                46844: 1,
                84343: 1,
                21421: 1,
                27539: 1,
                13280: 1,
                99038: 1,
                48996: 1,
                65483: 1,
                72160: 1,
                3386: 1,
                84663: 1,
                62138: 1,
                30389: 1,
                95207: 1,
                8924: 1,
                69828: 1,
                68528: 1,
                14729: 1,
                41224: 1,
                56361: 1,
                73978: 1,
                41623: 1,
                63014: 1,
                22867: 1,
                98848: 1,
                55471: 1,
                53030: 1,
                25456: 1,
                39729: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (5362 === e) return "638e8938c76a575e.ltr.css";
        if (96282 === e) return "350564e0af03f511.ltr.css";
        if (19393 === e) return "f6e522ba1b73f662.ltr.css";
        if (25621 === e) return "5f1d4839e07de62c.ltr.css";
        if (25203 === e) return "05624d166fe81780.ltr.css";
        if (35222 === e) return "ca10385ab7f3657c.ltr.css";
        if (6769 === e) return "885afa618a0ef5dc.ltr.css";
        if (99620 === e) return "5b7fe8f909b06739.ltr.css";
        if (58724 === e) return "9094dc9ec76e31ae.ltr.css";
        if (97337 === e) return "924c43291449318d.ltr.css";
        if (45522 === e) return "df7675ca10eb9455.ltr.css";
        if (93792 === e) return "3dbaf06b7ed5ac2f.ltr.css";
        if (73444 === e) return "808276a5007d4718.ltr.css";
        if (14477 === e) return "4d840abc7c866b40.ltr.css";
        if (41195 === e) return "d773125bfa931aef.ltr.css";
        if (8817 === e) return "e940ab9cac682936.ltr.css";
        if (66708 === e) return "67396d728aca38e0.ltr.css";
        if (32842 === e) return "37e99df5dea702e4.ltr.css";
        if (14302 === e) return "c1b46feba703e1dd.ltr.css";
        if (99222 === e) return "f7688c2d15a1efc4.ltr.css"
    }, c.miniCssFRtl = e => {
        if (28933 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (28253 === e) return "c166e5d20ad58f4e.s4le6a.vendor.rtl.css";
        if (98821 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (98973 === e) return "f31d11dc584a35be.rtl.css";
        if (82433 === e) return "a3d1066e1d3ee958.rtl.css";
        if ({
                65673: 1,
                91438: 1,
                91654: 1,
                78904: 1,
                84826: 1,
                97614: 1,
                43670: 1,
                47918: 1,
                11660: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if ({
                27740: 1,
                34029: 1,
                8022: 1,
                25421: 1,
                7626: 1,
                26557: 1,
                2179: 1,
                23348: 1,
                33472: 1,
                93569: 1,
                51949: 1,
                79326: 1,
                97283: 1,
                32762: 1,
                79839: 1,
                8693: 1,
                8949: 1,
                78609: 1,
                6857: 1,
                37289: 1,
                36332: 1,
                32878: 1,
                96022: 1,
                46680: 1,
                98276: 1,
                95277: 1,
                24130: 1,
                65035: 1,
                33578: 1,
                84400: 1,
                34357: 1,
                64055: 1,
                5488: 1,
                4466: 1,
                13023: 1,
                15193: 1,
                65928: 1,
                97478: 1,
                4137: 1,
                9325: 1,
                13077: 1,
                35653: 1,
                44191: 1,
                57695: 1,
                97792: 1,
                30406: 1,
                7779: 1,
                29793: 1,
                11657: 1,
                21437: 1,
                68809: 1,
                95731: 1,
                38866: 1,
                49001: 1,
                853: 1,
                97450: 1,
                64610: 1,
                12190: 1,
                19584: 1,
                47534: 1,
                18136: 1,
                50332: 1,
                92594: 1,
                30641: 1,
                77116: 1,
                86258: 1,
                92083: 1,
                29420: 1,
                50476: 1,
                67874: 1,
                94556: 1,
                99668: 1,
                61032: 1,
                807: 1,
                70757: 1,
                51199: 1,
                29055: 1,
                13592: 1,
                52334: 1,
                73217: 1,
                90377: 1,
                8540: 1,
                44950: 1,
                53200: 1,
                14833: 1,
                71167: 1,
                29372: 1,
                179: 1,
                53741: 1,
                54136: 1,
                72034: 1,
                36181: 1,
                31442: 1,
                73728: 1,
                78426: 1,
                69798: 1,
                69334: 1,
                18778: 1,
                77317: 1,
                62459: 1,
                94116: 1,
                41518: 1,
                95318: 1,
                95419: 1,
                51690: 1,
                51138: 1,
                50086: 1,
                4487: 1,
                77246: 1,
                96443: 1,
                25858: 1,
                73145: 1,
                46844: 1,
                84343: 1,
                21421: 1,
                27539: 1,
                13280: 1,
                99038: 1,
                48996: 1,
                65483: 1,
                72160: 1,
                3386: 1,
                84663: 1,
                62138: 1,
                30389: 1,
                95207: 1,
                8924: 1,
                69828: 1,
                68528: 1,
                14729: 1,
                41224: 1,
                56361: 1,
                73978: 1,
                41623: 1,
                63014: 1,
                22867: 1,
                98848: 1,
                55471: 1,
                53030: 1,
                25456: 1,
                39729: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (5362 === e) return "1e246b15020f607d.rtl.css";
        if (96282 === e) return "4572bb3a43c17abb.rtl.css";
        if (19393 === e) return "1991a15a9b55f670.rtl.css";
        if (25621 === e) return "b4bd268b7e5afaa4.rtl.css";
        if (25203 === e) return "5e44a47af6e0da97.rtl.css";
        if (35222 === e) return "be92cdc2c813e15f.rtl.css";
        if (6769 === e) return "d435c9e4d8f8c1df.rtl.css";
        if (99620 === e) return "b197b394e4f55ce1.rtl.css";
        if (58724 === e) return "918171a1aa694966.rtl.css";
        if (97337 === e) return "d41a1c13df702638.rtl.css";
        if (45522 === e) return "ee8047e81a98287e.rtl.css";
        if (93792 === e) return "e407f9fe14abc1e1.rtl.css";
        if (73444 === e) return "ef337a6c97f57428.rtl.css";
        if (14477 === e) return "e740a1873b3cffad.rtl.css";
        if (41195 === e) return "4d88c9641efd9ac9.rtl.css";
        if (8817 === e) return "fc3b645f5d50c773.rtl.css";
        if (66708 === e) return "d4630519eaf4fb3e.rtl.css";
        if (32842 === e) return "91027d8eb04b9936.rtl.css";
        if (14302 === e) return "230bb2c0a2857186.rtl.css";
        if (99222 === e) return "757ccaf1e9841689.rtl.css"
    }, c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), f = {}, n = "@canva/web:", c.l = (e, r, t, s) => {
        if (!f[e]) {
            var i, a;
            if (void 0 !== t)
                for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                    var o = d[u];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == n + t) {
                        i = o;
                        break
                    }
                }
            if (!i) {
                if (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc) i.setAttribute("nonce", c.nc);
                i.setAttribute("data-webpack", n + t), i.src = e
            }
            f[e] = [r];
            var l = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(b);
                    var n = f[e];
                    if (delete f[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), a && document.head.appendChild(i)
        } else f[e].push(r)
    }, c.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = c.e,
            r = function e(r, t, f) {
                return r().catch((function(n) {
                    return 0 === f ? Promise.reject(n) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, f - 1)
                    }));
                    var s
                }))
            };
        c.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), c.p = "", (() => {
        if (globalThis.__batch_chunks__) ! function(e, r, t, f, n, s, i, c, a, d, u) {
            const o = e.l;
            let l = [];
            const b = [];
            if ("undefined" != typeof document)
                for (const O of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                    const e = O.getAttribute("href");
                    e && b.push(e)
                }
            let j = e => document.head.appendChild(e);
            e.l = function(e, r, n, i) {
                var c;
                for (let t = 0; t < b.length; t++)
                    if (b[t].endsWith(e)) return b.splice(t, 1), o(e, r, n, i);
                const a = d && e.endsWith(".strings.js") ? g : p,
                    u = null !== (c = globalThis.loadScript) && void 0 !== c ? c : m;
                if (t) {
                    if (0 === a.files.length) Promise.resolve().then((() => {
                        C(a.files, u), a.files = [], a.sourcemapSize = 0
                    }));
                    const r = w(e);
                    if (a.files.length >= 1 && a.sourcemapSize + r > s || a.files.length >= f) C(a.files, u), a.files = [], a.sourcemapSize = 0;
                    a.sourcemapSize += r
                } else {
                    if (h++ < 10) return o(e, r, n, i);
                    if (0 === a.files.length) setTimeout((() => T(a.files, u)), 1)
                }
                a.files.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else window.batchFailedAssetCount = (window.batchFailedAssetCount || 0) + 1, o(e, r, n, i)
                    },
                    originalLoad: () => {
                        o(e, r, n, i)
                    }
                })
            }, e.loadCss = function(e, r) {
                const n = e.getAttribute("href");
                if (j = r || j, t) {
                    if (0 === l.length) Promise.resolve().then((() => {
                        C(l, _), l = [], y = 0
                    }));
                    const e = w(n);
                    if (l.length >= 1 && y + e > s || l.length >= f) C(l, _), l = [], y = 0;
                    y += e
                } else {
                    if (v++ < 15) return r(e);
                    if (0 === l.length) setTimeout((() => T(l, _)), 1)
                }
                l.push({
                    src: n,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let h = 0;
            const p = {
                    files: [],
                    sourcemapSize: 0
                },
                g = {
                    files: [],
                    sourcemapSize: 0
                };

            function m(e, t) {
                const f = document.createElement("script");
                let n;
                const s = e => {
                    f.onerror = f.onload = null, clearTimeout(n), f.parentNode && f.parentNode.removeChild(f), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                f.onload = f.onerror = s, f.src = e, f.async = !1, n = setTimeout((() => s({
                    type: "timeout",
                    target: f
                })), r), document.head.appendChild(f)
            }
            let v = 0,
                y = 0;

            function _(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", j(t)
            }

            function w(e) {
                const r = n(),
                    t = e.substring(r.length);
                return t ? c[t] || i : 0
            }

            function k() {
                const e = n(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function T(e, r) {
                const t = n();
                let i, d = 0,
                    o = [];
                try {
                    i = globalThis.navigator.serviceWorker
                } catch {}
                const l = a && (null == i ? void 0 : i.controller) ? await async function(e) {
                    const r = await caches.open(u),
                        t = [];
                    for (const f of e)
                        if (await r.match(f.src)) f.originalLoad();
                        else t.push(f);
                    return t
                }(e) : e;
                for (const n of l) {
                    const e = n.src.substring(t.length),
                        r = e ? c[e] || 0 : 0;
                    if (o.length >= 1 && d + r > s || o.length >= f) b(o), o = [], d = 0;
                    o.push(n), d += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const f = k(),
                        n = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${f}/chunk-batch/${n}`, (r => {
                        for (const {
                                callback: t,
                                src: f
                            } of e) t({
                            type: r.type,
                            target: {
                                src: f,
                                href: f
                            }
                        })
                    }))
                }
                o.length && b(o), e.length = 0
            }

            function C(e, r) {
                if (0 === e.length) return;
                const t = n();
                if (1 !== e.length) r(`${k()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: f
                        } of e) t({
                        type: r.type,
                        target: {
                            src: f,
                            href: f
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(c, 12e4, globalThis.__sync_batch_chunks__, 40, (() => c.p), 10485760, 51200, {
            "e91301d7ccce13c1.ltr.css": 484112,
            "9387e60d71605084.js": 16892637,
            "f31d11dc584a35be.rtl.css": 484122,
            "53540badba4d899c.sentry_browser.js": 533889,
            "9835b2f23c36e581.runtime.js": 80857,
            "a50a789b7d9ec703.vendor.js": 2244228,
            "1194272a367de1cd.s4le6a.vendor.js": 1246909,
            "38c4a59e85d167e6.vendor.js": 782461,
            "838ebe5470ea94d7.vendor.js": 125566,
            "c4ac979195acdf45.js": 153999,
            "efdd04ed275a8076.js": 171936,
            "6da6f149dacbce82.js": 1386840,
            "ad8ee15940036f8c.js": 53421,
            "601bc9db9e4b448f.js": 552734,
            "9d3f270e061bfec3.js": 253677,
            "d67dd5bea71269b0.js": 209097,
            "717a53dd8899f98a.vendor.js": 135374,
            "42a61a1d2e658b60.js": 84138,
            "f5ebda47f380c2d2.js": 115542,
            "632195b9d247cab7.js": 149439,
            "7c2711fb87c88d26.js": 52330,
            "a4732be4aa67b130.js": 177887,
            "4a004b0e6aab87c7.js": 71218,
            "58047cb220259fbe.js": 150474,
            "e4ee50cf82f6f9a2.js": 81756,
            "d164b202e89b4688.js": 344899,
            "43c56758fb0c4439.js": 198584,
            "bc7b83293cbe1783.js": 128835,
            "5094a45778ef3f72.js": 129301,
            "42014befdb780ef9.js": 188858,
            "299f4e75463abf7a.js": 167713,
            "c11958a8c5a21819.js": 626160,
            "a609992a00f6474f.js": 410539,
            "53dab2eeeccd69e8.js": 146579,
            "f8709b93b688173c.js": 160741,
            "098478c6ef6aa8dd.js": 63561,
            "9392178b147e8167.js": 233994,
            "965496228124f779.js": 362404,
            "073951a4b7e5c382.js": 382088,
            "440c65d15aa0daf2.js": 362500,
            "1fc78f1eb4730d41.js": 368780,
            "478f0ae8f9e15383.js": 241714,
            "4aaa04c9251d649d.js": 240294,
            "bd4f0e0729a86b2f.js": 243222,
            "1956a449c3d43056.js": 432434,
            "4c9a7a8f2dd6c689.js": 226387,
            "84bc6140c6ced995.js": 393019,
            "1317847dd2b4a829.js": 233073,
            "0a1f82b128480615.js": 54195,
            "01eed0fb008a5c48.vendor.js": 168721,
            "122c4bc94c845477.js": 186039,
            "7722e79e71e57aea.vendor.js": 648073,
            "dea87fff7cf71dc0.js": 127774,
            "c946712cfd3b2111.js": 81114,
            "ce22af223736269a.js": 671283,
            "9b78cd5508bd5149.js": 2012856,
            "03f0e909c1379429.js": 108455,
            "9ab9bad7fe4ad74c.js": 231553,
            "40c4bfdd0a80c0e0.js": 118164,
            "cf64ec00237548b4.js": 53018,
            "fb86fbb8903449e2.js": 200209
        }, globalThis.__check_cache_batch_chunks__, "undefined" != typeof globalThis && null != globalThis.flags && null != globalThis.flags.f2ace465 ? globalThis.flags.f2ace465 : !1, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"363":49001,"10004":51690,"19779":47918,"19868":65673,"34191":72160,"43010":23348,"58313":41623,"68828":97478,"89563":56361,"92309":58724,"92750":94116,"102566":54136,"104398":25456,"104993":11660,"106427":37289,"112068":98276,"115175":15193,"124738":29372,"138527":73145,"144725":95731,"149342":96282,"178033":30389,"181007":14477,"181876":25858,"183351":4137,"196751":96282,"200790":97792,"201794":5488,"217431":55471,"219376":24130,"229274":41224,"238569":64055,"239349":57695,"240352":64610,"247793":65035,"258551":96282,"288639":14729,"290120":14302,"293192":97450,"304035":68809,"306797":77317,"318159":8949,"318747":34357,"320784":32842,"331257":95277,"336801":7779,"337917":95207,"344844":4466,"354456":63014,"363452":33472,"366723":62459,"375435":853,"376865":26557,"392418":91438,"402331":36181,"411514":27740,"415924":12190,"421952":95318,"423830":32878,"424488":51138,"426431":71167,"427010":13280,"428262":72034,"431793":13023,"434895":39729,"456150":77246,"457236":7626,"465297":95419,"467723":21437,"476395":13077,"493001":25421,"504550":3386,"512624":50086,"523137":6857,"527623":35653,"529188":82433,"535109":179,"539667":11657,"540731":22867,"543568":5362,"548844":93792,"555100":41518,"555576":78426,"558402":65928,"563790":45522,"575567":4487,"580825":8817,"649000":66708,"655404":97337,"666558":36332,"697478":18778,"706140":73978,"711260":62138,"722536":53030,"726928":46844,"746008":33578,"751088":96282,"761582":96282,"769064":98848,"772543":6769,"793252":38866,"797279":97283,"816563":84663,"823288":73728,"827224":99620,"846805":9325,"846933":44191,"856598":99222,"875986":84400,"879434":73444,"891409":84343,"892164":96022,"897049":93569,"900762":31442,"911399":72160,"914020":30406,"920429":41195,"920769":96443,"934176":79326,"935875":73217,"945026":72160,"956546":44950,"968047":29793,"984954":8540}'),
            r = JSON.parse('{"179":[13592,14833,18136,29420,30641,51199,53200,61032,67874,70757,807,8693,90377,92594,94556,99668],"807":[47534,50332,78609],"853":[],"2179":[],"3386":[],"4137":[],"4466":[],"4487":[],"5362":[],"5488":[],"6769":[],"6857":[78609],"7626":[],"7779":[],"8022":[],"8540":[52334,90377],"8693":[79839],"8817":[68528,69828,8924],"8924":[],"8949":[32762,8693],"9325":[],"11657":[],"11660":[],"12190":[],"13023":[],"13077":[],"13280":[27539],"13592":[],"14302":[47918,96282],"14477":[69828,8924],"14729":[68528,69828,8924],"14833":[],"15193":[],"18136":[19584,47534,79839],"18778":[69334],"19393":[51949],"19584":[],"21421":[],"21437":[],"22867":[93792],"23348":[2179],"24130":[],"25203":[],"25421":[8022],"25456":[],"25621":[],"25858":[],"26557":[],"27539":[21421,69334],"27740":[],"28253":[],"29055":[],"29372":[13592,14833,18136,29420,30641,51199,53200,61032,67874,70757,807,8693,92594,94556,99668],"29420":[86258,92083],"29793":[],"30389":[],"30406":[],"30641":[],"31442":[13592,29055,50476,51199,70757,807,92594],"32762":[19393,97283],"32842":[96282],"32878":[25621],"33472":[],"33578":[],"34029":[],"34357":[],"35222":[92083,95277],"35653":[],"36181":[18136,29055,29420,30641,53741,67874,70757,77116,8693,94556],"36332":[],"37289":[],"38866":[],"39729":[],"41195":[68528,69828,8924],"41224":[69828,8924],"41518":[],"41623":[69828,8924],"43670":[],"44191":[],"44950":[13592,18136,29420,61032,8693,90377,94556],"45522":[],"46680":[],"46844":[],"47534":[19393,2179],"47918":[],"48996":[99038],"49001":[],"50086":[],"50332":[],"50476":[86258],"51138":[],"51199":[25621],"51690":[],"51949":[],"52334":[13592,18136,29055,29420,30641,51199,61032,67874,70757,807,8693,92594,94556,99668],"53030":[95207],"53200":[],"53741":[],"54136":[13592,35222,50332,53741,78904,8693,96022],"55471":[99038],"56361":[69828,8924],"57695":[],"58724":[43670,69798],"61032":[47534,77116],"62138":[],"62459":[],"63014":[68528,69828,8924],"64055":[],"64610":[],"65035":[],"65483":[],"65673":[],"65928":[],"66708":[21421,69334,96282],"67874":[50476],"68528":[],"68809":[],"69334":[],"69798":[],"69828":[96282],"70757":[32762],"71167":[13592,14833,18136,25203,50476,53200,70757,77116,807,8693,92594,94556,99668],"72034":[13592,35222,50332,53741,84826,8693,96022],"72160":[48996,65483],"73145":[8022],"73217":[52334],"73444":[69828,8924],"73728":[13592,18136,25203,29055,50332,50476,53200,61032,78609],"73978":[8924,96282],"77116":[],"77246":[],"77317":[],"78426":[13592,29420,53200,61032,67874,70757,807,8693,90377,94556],"78609":[],"78904":[91654],"79326":[51949],"79839":[19393],"82433":[],"84343":[79326],"84400":[],"84663":[65483],"84826":[91654],"86258":[],"90377":[92083],"91438":[],"91654":[],"92083":[19584,47534],"92594":[],"93569":[33472],"93792":[34029,46680,84343,97614],"94116":[],"94556":[92083],"95207":[],"95277":[],"95318":[],"95419":[],"95731":[],"96022":[],"96282":[34029],"96443":[],"97283":[],"97337":[43670,69798],"97450":[],"97478":[],"97614":[],"97792":[],"98276":[46680],"98821":[],"98848":[48996],"98973":[],"99038":[27539],"99222":[96282],"99620":[97614],"99668":[47534]}'),
            t = (e, f, n) => {
                if (!n.has(e)) return n.add(e), r[e].forEach((e => t(e, f, n))), f.push(e), f
            };
        c.me = function(r) {
            const f = e[r];
            if (null == f) return Promise.resolve(c(r));
            const n = t(f, [], new Set);
            return Promise.all(n.map((e => c.e(e)))).then((() => c(r)))
        }
    })(), (() => {
        const e = {};
        c.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = globalThis.cmsg;
                    if (!t || !t.assets) return;
                    const f = t.loaded,
                        n = t.locale || "en";
                    if (f && f[e + "_" + n]) return;
                    const s = t.assets[n] && t.assets[n][e] && t.assets[n][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((f, n) => {
                        const s = c.p + t;
                        c.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, f();
                            else delete r[e], n(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const f = r[e];
                if (f) t.push(f)
            }(r, e, t)
        }
    })(), (() => {
        if (globalThis.loadScript) c.l = globalThis.loadScript, c.loadCss = function(e) {
            queueMicrotask((() => e ? .onload ? .({
                type: "load",
                target: e
            })))
        }
    })(), (() => {
        let e = "undefined" != typeof globalThis && void 0 !== globalThis.document ? globalThis.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) c.miniCssF = c.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var f = c.miniCssF(e),
                        n = c.p + f;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                                var n = (i = t[f]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === e || n === r)) return i
                            }
                            var s = document.getElementsByTagName("style");
                            for (f = 0; f < s.length; f++) {
                                var i;
                                if ((n = (i = s[f]).getAttribute("data-href")) === e || n === r) return i
                            }
                        })(f, n)) return r();
                    ((e, r, t, f, n) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) f();
                                else {
                                    var i = t && ("load" === t.type ? "missing" : t.type),
                                        c = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = c, s.parentNode) s.parentNode.removeChild(s);
                                    n(a)
                                }
                            }, s.href = r,
                            function(e) {
                                if (c.loadCss) c.loadCss(e, (function(e) {
                                    document.head.appendChild(e)
                                }));
                                else document.head.appendChild(e)
                            }(s)
                    })(e, n, 0, r, t)
                })),
                r = {
                    28933: 0
                };
            c.f.miniCss = (t, f) => {
                if (r[t]) f.push(r[t]);
                else if (0 !== r[t] && {
                        5362: 1,
                        6769: 1,
                        8817: 1,
                        14302: 1,
                        14477: 1,
                        19393: 1,
                        25203: 1,
                        25621: 1,
                        32842: 1,
                        35222: 1,
                        41195: 1,
                        45522: 1,
                        58724: 1,
                        66708: 1,
                        73444: 1,
                        82433: 1,
                        93792: 1,
                        96282: 1,
                        97337: 1,
                        99222: 1,
                        99620: 1
                    }[t]) f.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        c.b = document.baseURI || self.location.href;
        var e = {
            28933: 0
        };
        c.f.j = (r, t) => {
            var f = c.o(e, r) ? e[r] : void 0;
            if (0 !== f)
                if (f) t.push(f[2]);
                else if (28933 != r) {
                var n = new Promise(((t, n) => f = e[r] = [t, n]));
                t.push(f[2] = n);
                var s = c.p + c.u(r),
                    i = new Error;
                c.l(s, (t => {
                    if (c.o(e, r)) {
                        if (0 !== (f = e[r])) e[r] = void 0;
                        if (f) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + s + ")", i.name = "ChunkLoadError", i.type = n, i.request = s, f[1](i)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, c.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var f, n, [s, i, a] = t,
                    d = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (f in i)
                        if (c.o(i, f)) c.m[f] = i[f];
                    if (a) var u = a(c)
                }
                if (r) r(t);
                for (; d < s.length; d++) {
                    if (n = s[d], c.o(e, n) && e[n]) e[n][0]();
                    e[n] = 0
                }
                return c.O(u)
            },
            t = globalThis.webpackChunk_canva_web = globalThis.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/9835b2f23c36e581.runtime.js.map