(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-14590299"],
  {
    "084e": function (t, s, e) {},
    "254b": function (t, s, e) {
      "use strict";
      e("084e");
    },
    5205: function (t, s, e) {
      "use strict";
      e("f474");
    },
    a2f9: function (t, s, e) {
      "use strict";
      e.r(s);
      var a = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "lib-container" }, [
            e("h2", [t._v("系统公告")]),
            e(
              "div",
              { staticClass: "news-list" },
              t._l(t.list, function (s) {
                return e("CardItem", { key: s.datetime }, [
                  e(
                    "h3",
                    [
                      e("el-tag", { attrs: { type: t.type[s.type].style } }, [
                        t._v(t._s(t.type[s.type].label)),
                      ]),
                      t._v(t._s(s.title) + "\n      "),
                    ],
                    1
                  ),
                  e("div", { domProps: { innerHTML: t._s(s.msg) } }),
                  e("p", { staticClass: "date" }, [t._v(t._s(s.datetime))]),
                ]);
              }),
              1
            ),
          ]);
        },
        n = [],
        i = e("bac9"),
        c = {
          components: { CardItem: i["a"] },
          data: function () {
            return {
              list: [],
              type: {
                update: { label: "迭代更新", style: "success" },
                others: { label: "QA", style: "error" },
              },
            };
          },
          mounted: function () {
            this.getDatas();
          },
          methods: {
            getDatas: function () {
              return
            },
          },
        },
        o = c,
        r = (e("254b"), e("2877")),
        d = Object(r["a"])(o, a, n, !1, null, "c9d86192", null);
      s["default"] = d.exports;
    },
    bac9: function (t, s, e) {
      "use strict";
      var a = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "div",
            { staticClass: "item", class: t.mode },
            [
              t._t("default"),
              e("div", { staticClass: "dot", attrs: { id: "dot-1" } }),
              e("div", { staticClass: "dot", attrs: { id: "dot-2" } }),
              e("div", { staticClass: "dot", attrs: { id: "dot-3" } }),
              e("div", { staticClass: "dot", attrs: { id: "dot-4" } }),
            ],
            2
          );
        },
        n = [],
        i = { props: ["mode"] },
        c = i,
        o = (e("5205"), e("2877")),
        r = Object(o["a"])(c, a, n, !1, null, "124d7ad7", null);
      s["a"] = r.exports;
    },
    f474: function (t, s, e) {},
  },
]);
//# sourceMappingURL=chunk-14590299.6ebd55e2.js.map
