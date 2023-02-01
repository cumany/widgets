(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-69514548"],
  {
    "0fd4": function (e, t, s) {
      "use strict";
      s("9d4a");
    },
    "3e81": function (e, t, s) {
      "use strict";
      s.r(t);
      var c = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("div", { staticClass: "container" }, );
        },
        o = [],
        a = s("8237"),
        i = s.n(a),
        n = {
          data: function () {
            return { code: "", code_type: "password" };
          },
          mounted: function () {},
          methods: {
            checkCode: function () { localStorage.setItem("token", i()(this.code)),
            void setTimeout(function () {
              e.$router.push({ name: "lib" });
            }, 2e3)
            },
            triggerCodeType: function () {
              var e = "text" === this.code_type ? "password" : "text";
              this.code_type = e;
            },
          },
        },
        r = n,
        d = (s("0fd4"), s("2877")),
        l = Object(d["a"])(r, c, o, !1, null, "572548a2", null);
      t["default"] = l.exports;
    },
    "9d4a": function (e, t, s) {},
  },
]);
//# sourceMappingURL=chunk-69514548.66063647.js.map
