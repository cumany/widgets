(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    "02f4": function (e, t, n) {
      var r = n("4588"),
        i = n("be13");
      e.exports = function (e) {
        return function (t, n) {
          var o,
            a,
            s = String(i(t)),
            u = r(n),
            l = s.length;
          return u < 0 || u >= l
            ? e
              ? ""
              : void 0
            : ((o = s.charCodeAt(u)),
              o < 55296 ||
              o > 56319 ||
              u + 1 === l ||
              (a = s.charCodeAt(u + 1)) < 56320 ||
              a > 57343
                ? e
                  ? s.charAt(u)
                  : o
                : e
                ? s.slice(u, u + 2)
                : a - 56320 + ((o - 55296) << 10) + 65536);
        };
      };
    },
    "0390": function (e, t, n) {
      "use strict";
      var r = n("02f4")(!0);
      e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1);
      };
    },
    "083a": function (e, t, n) {
      e.exports = n.p + "img/facebook.8362eb14.png";
    },
    "09a9": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "lib-container" },
            [
              n(
                "el-row",
                [
                  n("el-col", { attrs: { span: 12 } }, [
                    n("div", { staticClass: "basic" }, [
                      n("h2", [e._v("Formula 基本概念和函数")]),
                      n("p", [
                        e._v(
                          "在使用Formula功能前需要先了解一些基本概念和基本公式"
                        ),
                      ]),
                      n("ul", [
                        n("li", [
                          n("h3", [
                            e._v(
                              "Property（属性，在表格内每一列都是一个属性）"
                            ),
                          ]),
                          e._v("\n            在公式内"),
                          n("code", [e._v('prop("属性")')]),
                          e._v(
                            "是返回每个记录内对应的属性值，且带有对应的数据格式\n          "
                          ),
                        ]),
                        n("li", [
                          n("h3", [
                            e._v(
                              "公式内的四种数据类型（也是可返回的数据类型）"
                            ),
                          ]),
                          n("ul", [
                            n("li", [
                              e._v(
                                "\n                字符串（文本）：标题，text，select等返回的数据格式都是字符串\n              "
                              ),
                            ]),
                            n("li", [e._v("数字")]),
                            n("li", [e._v("日期")]),
                            n("li", [
                              e._v(
                                "布尔值（true or false）：即结果呈现为单选是否被选中"
                              ),
                            ]),
                          ]),
                        ]),
                        n("li", [
                          n("h3", [e._v("基本函数")]),
                          n("ul", [
                            n("li", [
                              n("strong", [e._v("if语法")]),
                              e._v(
                                "，在公式中有两种运算语法，其中boolean指的是条件，第一个value是符合条件的结果，第二个value指的是非对应的结果\n                "
                              ),
                              n("pre", [
                                e._v("boolean ? value : value"),
                                n("br"),
                                e._v("if(boolean, value, value)"),
                              ]),
                              e._v(
                                "\n                例如：当前有一个属性为「成绩」，需要判断成绩状态"
                              ),
                              n("br"),
                              n("pre", [
                                e._v('prop("成绩") >= 60 ? "及格" : "不及格"'),
                                n("br"),
                                e._v(
                                  'if(prop("成绩") >= 60, "及格" , "不及格")\n                      '
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  n("el-col", { attrs: { span: 12 } }, [
                    n(
                      "div",
                      { staticClass: "list" },
                      [
                        n("h2", [e._v("Notion内使用主要公式")]),
                        n(
                          "el-row",
                          [
                            n(
                              "el-col",
                              { attrs: { span: 12 } },
                              [
                                n(
                                  "el-select",
                                  {
                                    attrs: { placeholder: "请选择" },
                                    model: {
                                      value: e.type,
                                      callback: function (t) {
                                        e.type = t;
                                      },
                                      expression: "type",
                                    },
                                  },
                                  [
                                    n("el-option", {
                                      key: "所有",
                                      attrs: { label: "所有", value: "所有" },
                                    }),
                                    n("el-option", {
                                      key: "日期",
                                      attrs: { label: "日期", value: "日期" },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            n(
                              "el-col",
                              { attrs: { span: 12 } },
                              [
                                n("el-input", {
                                  attrs: {
                                    placeholder: "搜索公式",
                                    "prefix-icon": "el-icon-search",
                                  },
                                  model: {
                                    value: e.keywords,
                                    callback: function (t) {
                                      e.keywords = t;
                                    },
                                    expression: "keywords",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._l(e.list, function (t, r) {
                          return n(
                            "card-item",
                            { key: t.title, attrs: { mode: "compact" } },
                            [
                              n("h3", [
                                n(
                                  "span",
                                  [
                                    e._v(
                                      "NO." +
                                        e._s(r + 1) +
                                        " 「" +
                                        e._s(t.title) +
                                        "」"
                                    ),
                                    n(
                                      "el-tag",
                                      {
                                        attrs: {
                                          type: "success",
                                          size: "small",
                                        },
                                      },
                                      [e._v(e._s(t.type))]
                                    ),
                                  ],
                                  1
                                ),
                                n("i", {
                                  staticClass: "el-icon-view",
                                  on: { click: e.showDetail },
                                }),
                              ]),
                              n("el-collapse-transition", [
                                n(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.show_detail,
                                        expression: "show_detail",
                                      },
                                    ],
                                    staticClass: "item-detail",
                                  },
                                  [
                                    n(
                                      "p",
                                      [
                                        e._v(
                                          "\n                需要的属性（列）："
                                        ),
                                        e._l(t.properties, function (t) {
                                          return n(
                                            "el-tag",
                                            {
                                              key: t.label,
                                              attrs: {
                                                type: "primary",
                                                effect: "dark",
                                              },
                                            },
                                            [
                                              e._v(
                                                e._s(t.label) +
                                                  "(" +
                                                  e._s(t.type) +
                                                  ")"
                                              ),
                                            ]
                                          );
                                        }),
                                      ],
                                      2
                                    ),
                                    t.code
                                      ? [
                                          n("strong", [e._v("常规公式")]),
                                          n("pre", [e._v(e._s(t.code))]),
                                        ]
                                      : e._e(),
                                    t.text_code
                                      ? [
                                          n("strong", [
                                            e._v(
                                              "文案公式（增加逻辑判断展示可读性文案，可"
                                            ),
                                            n("span", [e._v("复制")]),
                                            e._v("该部分公式）"),
                                          ]),
                                          n("code", [e._v(e._s(t.text_code))]),
                                        ]
                                      : e._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ],
                            1
                          );
                        }),
                      ],
                      2
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        o = n("bac9"),
        a = {
          components: { CardItem: o["a"] },
          data: function () {
            return {
              list: [
                {
                  title: "倒数日",
                  properties: [{ label: "目标日", type: "Date" }],
                  code: 'dateBetween(now(), prop("目标日"), "days")',
                  text_code:
                    '(dateBetween(now(), prop("目标日"), "days") == 0) ? "🎉 就是今天" : (dateBetween(now(), prop("目标日"), "days") < 0) ? ("⏰ 还有" + format(abs(dateBetween(now(), prop("目标日"), "days")))+"天") : ("✅ 过去" + format(dateBetween(now(), prop("目标日"), "days")))+"天")',
                  type: "日期",
                },
              ],
              keywords: "",
              type: "所有",
              show_detail: !1,
            };
          },
          methods: {
            showDetail: function () {
              this.show_detail = !this.show_detail;
            },
          },
        },
        s = a,
        u = (n("e9d9"), n("2877")),
        l = Object(u["a"])(s, r, i, !1, null, "57351394", null);
      t["default"] = l.exports;
    },
    "0a49": function (e, t, n) {
      var r = n("9b43"),
        i = n("626a"),
        o = n("4bf8"),
        a = n("9def"),
        s = n("cd1c");
      e.exports = function (e, t) {
        var n = 1 == e,
          u = 2 == e,
          l = 3 == e,
          c = 4 == e,
          f = 6 == e,
          p = 5 == e || f,
          d = t || s;
        return function (t, s, h) {
          for (
            var v,
              g,
              m = o(t),
              y = i(m),
              b = r(s, h, 3),
              w = a(y.length),
              D = 0,
              x = n ? d(t, w) : u ? d(t, 0) : void 0;
            w > D;
            D++
          )
            if ((p || D in y) && ((v = y[D]), (g = b(v, D, m)), e))
              if (n) x[D] = g;
              else if (g)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return D;
                  case 2:
                    x.push(v);
                }
              else if (c) return !1;
          return f ? -1 : l || c ? c : x;
        };
      };
    },
    "0a85": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIcElEQVR4nO2d+08UVxTH5w9o/a3tz02bDFCrP5qiyLMPhFoEWqVvbKsmbdFSQVGQ2oD10WeoAmprFVB8vwo1yoIiiPJmMQgLKgiCwi47c7dNk9b2Nmfc2Q67d3dZGfYOs/ck34TAzH2cz9znDPdwHDNmzJgxY8aMGTNmzJgxY6aWIYRCEELrEEJnEEJ96KFhnQnZ6wZ1zEQIBWvuCbLZbJEIoXoNOAvTkCiKdTabLYI2B04QhGcRQpW0HYK0owpBEJ6hAgMhtFAUxVENOAFrSYIgWG02W7RfYYiimCqK4t+0K480KkEQHgwMDKz0CwybzRbjCUZHew8uLDiJV6Rux4lxG3HU/DU44oU0XShq/hqpTitTd+CiH09iY7vJI5Ta2tpkf4wZ46QC9HT346y1RdSdFuFHRYauxlkZxdjU00+EYjabbZs3bw6fNiAIod9IGddebMVxMZnUHRRBSbFRa3HV+UYilM7OzlaO456aDhjhpAxrDM0TuqXw0DQ8L3k7npN2EAdvqsBBeVWYzzfoQkF5VVKd5qSV4XlJ26S6yvWOXrAGX6ppJULJzc39guO4x9QGUk/qphYpWsaC6PV4duYJ6o7j/SSoa1j0ekf9oZfoNQ24ADGZTD0cx4WrvQJ3yUg5ZgCM4NxK6k7i/ayQ3MoJUDZm7ia2ksTExHTVui77dojLbAoGNbmbCqSWwbu0lGOO7gt8YuxwnX0dPny4lOO4GLWAnHXOAKa28lMBYwZtp/CUNS9pq8MfRTtPuQBpb29v5jguheO4WWoA6XPOANYZcgFgAKftEJ6y5n5a5vDHquU7XIAMDQ2N2IEEqQHkd+cMlsRtdBQgOKeCukN4ygrJqXD4IzE+2wWIxWL50w4kbMpARFH8xzkD5VRXT1Nb/hEFPpD9Ab4hrNz/tQOJV6OFuGSgXBjRdgavESl9QvKZHcjUt1MYEIOaQJYxIPmaaiEg1kJ4BoR+n85rcwxhLYRnQOg/rTxrIfQdwjMgvq1DPihrxuOCOKX31ciPgrJCmXU9hqQdbcfWGQDFKoo4/XhHYAzqnxxp0zQUqyjiz461+1yvGQHk8xPkp+zjI22a7L7GBVEqmy91mVFARITwjgs3iH9bVd6KLVaBOgRkF5QFykQqK9QB6jLjgcjXF9T0EP+eWtqMx8YFTcBYcaiFWMavL9xwXKcbIKCdF03Ea94racKjFKGYrQL+8CAZxrdV3ROu1RUQUOElMpSUXxrxfYv/oUDrfOdAE7FMP1RPhKFLIKB99X04iHDtsn2N+J4fobiDAWUrru0l3qNLIKD9V27i4C3VLtcv9RMU6CLf2k+Gsbeuz+19ugUCOtBAhvL6z9fwiNk6bTCga3zTLQxyywgIIKCjzf04hADltd0NeGh0XHUYw2YrTvrpqkt+8GCUXbvl9X7dA3kI5TYO+coVyuLiBjyoIpS7Y1acuNcVBjwQhxq9wwgYIKDjLf1kKLsb8J3746rAWLKHDKO86fak0wkYIKCTrf34OQKUVwqv4FsjlkeGMXB/HMcXNxBhHPEBRsABQQjhSuMgfn5rjUs6L++qxzdHzD6n13/PguMIMGZvrcGn21y/VGdACE6o6LjjFkrv8OShwLVwj3M6kDbk8SitLeBaCPIABBT6XS2u6RrymkZ115B0LSkNBsQHGKfbBqTuxBNk0AdlLfhU64A0WMv3ws8wDi0v9f6Wj3VZk4BxooU8qHvT3G01kny9D/KCPFmX5eO093LPMF5UdMVnh8t6aVc9vtR9l017JzuGwDqAtFpP2NPg6JJguyP7bOekujNlt5Rz9rpjax/SgjSnshbR/aAO2xWk/aykvVcnjA+yTHfNOPfX6ziyoM5tnlEFddI1pBkZpAlpO98DZSi9GuBbJ+52fN+Y5OZi1+AYPtc5KG17gOBn+J23+yBtyIMEBcoUkEC0sP3+tpt3IXsuB9j2u7sXVCl+fmsIL6jeLWkO7BdUWnuFO+rhFe73Bp2/wnX3kcP7Jc3UP3L4yM1HDt9U3dAnkJnwGdDKQ+Rvsrac69IPEL18KLf9vE4+lNPTp6TpXj6+nhFASGIfW2sICPt3BE47LYT9ww6nzS5Lr4qYqWOIXhXBgBioQ2BA8uk7ngHJp+9sBiSfvoMZkHz6TmVANOBIfqYBYUf8GdQ84k+VdYjNOQOIEiAXAI7fpv108ho6BDPpVY+HYKoCpNfzMbFl1B3CU9bctFJvx8QOq3nE3xnnDCB+hlwAOJietkN4ygIfyP4o3uXxIGVVDsHMdM4Agpmwo8YNEozZGce9HjVeXl5eouYxscGkWQMEM5GfCjiQHg6mp/2k8n5W8KZKHBb1/2H82evIh/EnJCSkq3aQMhiEhnPOBCLLKMNVABQ4mJ62k3g/tgxlZIT4F9e5C1fRrRjQp37UuByVjUT+YnWLFMxkQkCXpG3SWegw89DTqddBeVVSnWAAJwV0gUhDxJ4kKytPAeRxVYDYoVSQMoSCwNOhXBgFkmKjM7DhQhMRhtFobFHAUCdchWwQNBHi9JEyhqYKwUzkgT4QFBm6WhozSN0UaGxszBYbG7taAWRaYlEtFAThL1IBpCeiwyTFz4C5OEQJ0F3YvPhsqW4wtSXNphQr8wdOXdVCbroMgiZChu4KE+iyWq0PCgsLCxUwElUPCuZsBoNh8ejoqEi78khjgtiFGzZsyFfAWDYtXRXJIGgixOmj7QSkERmNxlanMWMpx3FPc362J7Kzs3MgNBxthyBKgnVGRkbGlwoQoCS/tQyCQf8YDqHhIBoZ7NtAzCWLxfIHbWchlQV1grpBHWE7RLECT3EawKd3zJikPWmfa6cEqGLsPtCczbJvEYTZN9OSNeCsFJWVbK9bmL2u6q3AmTFjxowZM2bMmDHjdG3/AY/ZmE9jDGrlAAAAAElFTkSuQmCC";
    },
    "0a99": function (e, t, n) {},
    1071: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "page-container" },
            [
              n(
                "div",
                { staticClass: "page-container-header" },
                [
                  n(
                    "el-breadcrumb",
                    { attrs: { separator: "››" } },
                    [
                      n(
                        "el-breadcrumb-item",
                        { attrs: { to: { path: "/" } } },
                        [e._v("首页")]
                      ),
                      n("el-breadcrumb-item", [
                        n(
                          "a",
                          {
                            attrs: {
                              href: e.type ? e.type_bread[e.type].type : "",
                            },
                          },
                          [e._v(e._s(e.type ? e.type_bread[e.type].label : ""))]
                        ),
                      ]),
                      n("el-breadcrumb-item", [
                        e._v(e._s(e.item && e.item.tag)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "el-row",
                [
                  n("el-col", { attrs: { span: 14 } }, [
                    n("div", { staticClass: "preview" }, [
                      n(
                        "h1",
                        [
                          e._v("\n          Preview · 预览"),
                          n("el-tag", [
                            e._v("\n            当前组件 "),
                            n("i", { staticClass: "el-icon-view" }),
                            n(
                              "span",
                              {
                                staticClass: "leancloud_visitors",
                                attrs: {
                                  id: e.hash,
                                  "data-flag-title": "Your Article Title",
                                },
                              },
                              [
                                n("i", {
                                  staticClass: "leancloud-visitors-count",
                                }),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                      n("iframe", {
                        class:
                          e.item && e.item.size && "auto" === e.item.size
                            ? "frame-auto"
                            : "",
                        attrs: { src: e.item && e.item.link, frameborder: "0" },
                      }),
                    ]),
                  ]),
                  n("el-col", { attrs: { span: 10 } }, [
                    n(
                      "div",
                      { staticClass: "settings" },
                      [
                        n("h1", [e._v(e._s(e.item && e.item.tag))]),
                        n(
                          "el-form",
                          {
                            ref: "form",
                            staticClass: "main-form",
                            attrs: { model: e.form, "label-width": "80px" },
                          },
                          [
                            e.item && e.item.desc
                              ? n("el-alert", {
                                  staticClass: "desc-alert",
                                  attrs: {
                                    title: e.item.desc,
                                    type: "warning",
                                    "show-icon": "",
                                  },
                                })
                              : e._e(),
                            e.item && "all" === e.item.mode
                              ? n(
                                  "el-form-item",
                                  { attrs: { label: "主题" } },
                                  [
                                    n(
                                      "el-radio-group",
                                      {
                                        attrs: { size: "medium" },
                                        model: {
                                          value: e.form.black,
                                          callback: function (t) {
                                            e.$set(e.form, "black", t);
                                          },
                                          expression: "form.black",
                                        },
                                      },
                                      [
                                        n(
                                          "el-radio",
                                          { attrs: { border: "", label: 0 } },
                                          [e._v("默认")]
                                        ),
                                        n(
                                          "el-radio",
                                          { attrs: { border: "", label: 1 } },
                                          [e._v("暗黑")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            e.item && e.item.theme
                              ? n(
                                  "el-form-item",
                                  { attrs: { label: "风格" } },
                                  [
                                    n(
                                      "el-select",
                                      {
                                        attrs: { placeholder: "请选择" },
                                        model: {
                                          value: e.form.theme,
                                          callback: function (t) {
                                            e.$set(e.form, "theme", t);
                                          },
                                          expression: "form.theme",
                                        },
                                      },
                                      e._l(e.item.theme, function (e) {
                                        return n("el-option", {
                                          key: e.key,
                                          attrs: {
                                            label: e.label,
                                            value: e.key,
                                          },
                                        });
                                      }),
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e(),
                            e.item && e.item.icons
                              ? n(
                                  "el-form-item",
                                  { attrs: { label: "图标" } },
                                  [
                                    n(
                                      "el-select",
                                      {
                                        attrs: { placeholder: "请选择" },
                                        model: {
                                          value: e.form.icon,
                                          callback: function (t) {
                                            e.$set(e.form, "icon", t);
                                          },
                                          expression: "form.icon",
                                        },
                                      },
                                      e._l(e.item.icons, function (e) {
                                        return n("el-option", {
                                          key: e.key,
                                          attrs: {
                                            label: e.label,
                                            value: e.key,
                                          },
                                        });
                                      }),
                                      1
                                    ),
                                    n("img", {
                                      staticClass: "icon",
                                      attrs: { src: e.icon_preview, alt: "" },
                                    }),
                                  ],
                                  1
                                )
                              : e._e(),
                            e.item && !e.item.color_unset
                              ? [
                                  e.item && e.item.bg_color
                                    ? n(
                                        "el-form-item",
                                        { attrs: { label: "背景颜色" } },
                                        [
                                          n("el-color-picker", {
                                            model: {
                                              value: e.form.bg_color,
                                              callback: function (t) {
                                                e.$set(e.form, "bg_color", t);
                                              },
                                              expression: "form.bg_color",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : e._e(),
                                  e.item && e.item.font_color
                                    ? n(
                                        "el-form-item",
                                        { attrs: { label: "字体颜色" } },
                                        [
                                          n("el-color-picker", {
                                            model: {
                                              value: e.form.font_color,
                                              callback: function (t) {
                                                e.$set(e.form, "font_color", t);
                                              },
                                              expression: "form.font_color",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : e._e(),
                                ]
                              : e._e(),
                            e.item
                              ? n("setForm", {
                                  attrs: { id: e.id, item: e.item },
                                  on: { "on-form": e.onCustomize },
                                })
                              : e._e(),
                            n("br"),
                            n(
                              "el-form-item",
                              [
                                n(
                                  "el-button",
                                  {
                                    directives: [
                                      {
                                        name: "clipboard",
                                        rawName: "v-clipboard:copy",
                                        value: e.item && e.item.link,
                                        expression: "item && item.link",
                                        arg: "copy",
                                      },
                                      {
                                        name: "clipboard",
                                        rawName: "v-clipboard:success",
                                        value: e.handleCopy,
                                        expression: "handleCopy",
                                        arg: "success",
                                      },
                                    ],
                                    attrs: { type: "primary", round: "" },
                                  },
                                  [e._v("立即创建")]
                                ),
                              ],
                              1
                            ),
                          ],
                          2
                        ),
                        n("footer-reward"),
                        n("el-alert", {
                          staticClass: "desc-alert",
                          attrs: {
                            title: "评论区",
                            type: "success",
                            closable: !1,
                            center: "",
                          },
                        }),
                        n("div", { attrs: { id: "vcomments" } }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        o = (n("8e6e"), n("ac6a"), n("456d"), n("85f2")),
        a = n.n(o);
      function s(e, t, n) {
        return (
          t in e
            ? a()(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n("b54a"), n("c5f6"), n("7514");
      var u = n("b138"),
        l = n.n(u),
        c = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            [
              e.item.hasOwnProperty("monday")
                ? n(
                    "el-form-item",
                    { attrs: { label: "起始" } },
                    [
                      n(
                        "el-radio-group",
                        {
                          attrs: { size: "medium" },
                          model: {
                            value: e.form.monday,
                            callback: function (t) {
                              e.$set(e.form, "monday", t);
                            },
                            expression: "form.monday",
                          },
                        },
                        [
                          n("el-radio", { attrs: { border: "", label: 1 } }, [
                            e._v("周一"),
                          ]),
                          n("el-radio", { attrs: { border: "", label: 0 } }, [
                            e._v("周日"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : e._e(),
              24 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "事件" } },
                      [
                        n("el-input", {
                          attrs: {
                            width: "200",
                            placeholder: "事件名称不超过5个字",
                          },
                          model: {
                            value: e.form.name,
                            callback: function (t) {
                              e.$set(e.form, "name", t);
                            },
                            expression: "form.name",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "日期" } },
                      [
                        n("el-date-picker", {
                          attrs: {
                            type: "date",
                            format: "yyyy/MM/dd",
                            "value-format": "yyyy/MM/dd",
                            placeholder: "选择日期",
                            "picker-options": e.pickerOptions,
                          },
                          model: {
                            value: e.form.day,
                            callback: function (t) {
                              e.$set(e.form, "day", t);
                            },
                            expression: "form.day",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              15 === e.item.id
                ? [
                    n("el-form-item", { attrs: { label: "说明：" } }, [
                      n("strong", [e._v("不选择周区间")]),
                      e._v("则默认显示当前周（根据当前时间实时更新）\n    "),
                    ]),
                    n(
                      "el-form-item",
                      { attrs: { label: "选择周" } },
                      [
                        n("el-date-picker", {
                          attrs: {
                            type: "week",
                            format: "yyyy第WW周",
                            "value-format": "yyyy/MM/dd",
                            placeholder: "选择周",
                            "picker-options": e.pickerOptions,
                          },
                          model: {
                            value: e.form.day,
                            callback: function (t) {
                              e.$set(e.form, "day", t);
                            },
                            expression: "form.day",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              13 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "生日" } },
                      [
                        n("el-date-picker", {
                          attrs: {
                            type: "date",
                            format: "yyyy/MM/dd",
                            "value-format": "yyyy/MM/dd",
                            placeholder: "选择日期",
                            "picker-options": e.pickerOptions,
                          },
                          model: {
                            value: e.form.day,
                            callback: function (t) {
                              e.$set(e.form, "day", t);
                            },
                            expression: "form.day",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "昵称" } },
                      [
                        n("el-input", {
                          attrs: {
                            width: "200",
                            placeholder: "目标名称不超过5个字",
                          },
                          model: {
                            value: e.form.name,
                            callback: function (t) {
                              e.$set(e.form, "name", t);
                            },
                            expression: "form.name",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "备注文案" } },
                      [
                        n("el-input", {
                          attrs: {
                            width: "200",
                            placeholder: "备注文案不超过12个字",
                          },
                          model: {
                            value: e.form.msg,
                            callback: function (t) {
                              e.$set(e.form, "msg", t);
                            },
                            expression: "form.msg",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              11 === e.item.id
                ? e._l(e.form.tasks, function (t, r) {
                    return n(
                      "el-form-item",
                      { key: "task-" + r, attrs: { label: "目标" + (r + 1) } },
                      [
                        n("el-input", {
                          staticStyle: {
                            width: "200px",
                            "margin-right": "20px",
                          },
                          attrs: { placeholder: "目标名称不超过5个字" },
                          model: {
                            value: t.name,
                            callback: function (n) {
                              e.$set(t, "name", n);
                            },
                            expression: "item.name",
                          },
                        }),
                        n("el-date-picker", {
                          attrs: {
                            type: "date",
                            format: "yyyy/MM/dd",
                            "value-format": "yyyy/MM/dd",
                            placeholder: "选择日期",
                            "picker-options": e.pickerOptions,
                          },
                          model: {
                            value: t.day,
                            callback: function (n) {
                              e.$set(t, "day", n);
                            },
                            expression: "item.day",
                          },
                        }),
                        e._v("\n          \n      "),
                        n("el-button", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 0 === r && e.form.tasks.length < 4,
                              expression:
                                "index === 0 && form.tasks.length < 4",
                            },
                          ],
                          attrs: {
                            icon: "el-icon-plus",
                            circle: "",
                            size: "small",
                          },
                          on: {
                            click: function (t) {
                              return e.onAddItem(e.form.tasks.length + 1);
                            },
                          },
                        }),
                      ],
                      1
                    );
                  })
                : e._e(),
              e.item.id >= 1001 && e.item.id < 1002
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "文案" } },
                      [
                        n("el-input", {
                          attrs: { width: "200", placeholder: "这里是文案" },
                          model: {
                            value: e.form.content,
                            callback: function (t) {
                              e.$set(e.form, "content", t);
                            },
                            expression: "form.content",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              27 === e.item.id || 28 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "事件" } },
                      [
                        n("el-input", {
                          attrs: {
                            width: "200",
                            placeholder: "事件名称不超过5个字",
                          },
                          model: {
                            value: e.form.name,
                            callback: function (t) {
                              e.$set(e.form, "name", t);
                            },
                            expression: "form.name",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "目标日" } },
                      [
                        n("el-date-picker", {
                          attrs: {
                            type: "date",
                            format: "yyyy/MM/dd",
                            "value-format": "yyyy/MM/dd",
                            placeholder: "选择日期",
                            "picker-options": e.pickerOptions,
                          },
                          model: {
                            value: e.form.day,
                            callback: function (t) {
                              e.$set(e.form, "day", t);
                            },
                            expression: "form.day",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              29 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "高亮颜色" } },
                      [
                        n("el-color-picker", {
                          model: {
                            value: e.form.highlight,
                            callback: function (t) {
                              e.$set(e.form, "highlight", t);
                            },
                            expression: "form.highlight",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "日期范围" } },
                      [
                        n("el-date-picker", {
                          attrs: {
                            type: "daterange",
                            align: "right",
                            "unlink-panels": "",
                            format: "yyyy/MM/dd",
                            "value-format": "yyyy/MM/dd",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期",
                            "picker-options": e.pickerOptions2,
                          },
                          model: {
                            value: e.form.date_range,
                            callback: function (t) {
                              e.$set(e.form, "date_range", t);
                            },
                            expression: "form.date_range",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              30 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "语言" } },
                      [
                        n(
                          "el-select",
                          {
                            attrs: { placeholder: "请选择" },
                            model: {
                              value: e.form.lan,
                              callback: function (t) {
                                e.$set(e.form, "lan", t);
                              },
                              expression: "form.lan",
                            },
                          },
                          [
                            n("el-option", {
                              key: "cn",
                              attrs: { label: "中文", value: "cn" },
                            }),
                            n("el-option", {
                              key: "en",
                              attrs: { label: "英文", value: "en" },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                : e._e(),
              1004 === e.item.id
                ? [
                    n(
                      "el-form-item",
                      { attrs: { label: "文案" } },
                      [
                        n("el-input", {
                          attrs: { width: "50", placeholder: "按钮文案" },
                          model: {
                            value: e.form.btn_name,
                            callback: function (t) {
                              e.$set(e.form, "btn_name", t);
                            },
                            expression: "form.btn_name",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "目标链接" } },
                      [
                        n("el-input", {
                          attrs: { width: "50", placeholder: "请输入目标链接" },
                          model: {
                            value: e.form.link,
                            callback: function (t) {
                              e.$set(e.form, "link", t);
                            },
                            expression: "form.link",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "el-form-item",
                      { attrs: { label: "尺寸" } },
                      [
                        n(
                          "el-radio-group",
                          {
                            model: {
                              value: e.form.size,
                              callback: function (t) {
                                e.$set(e.form, "size", t);
                              },
                              expression: "form.size",
                            },
                          },
                          [
                            n("el-radio", { attrs: { label: "normal" } }, [
                              e._v("默认"),
                            ]),
                            n("el-radio", { attrs: { label: "large" } }, [
                              e._v("较大"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                : e._e(),
            ],
            2
          );
        },
        f = [],
        p = {
          props: ["item"],
          data: function () {
            return {
              form: {
                monday: 1,
                tasks: [{ day: "2022/12/31", name: "2022结束" }],
                name: "",
                day: "",
                content: "这里是自定义文案 · Here is the custom text",
                highlight: "#77ac98",
                date_range: "",
                lan: "cn",
                btn_name: "Github",
                size: "normal",
                link: "",
              },
            };
          },
          computed: {
            pickerOptions: function () {
              return { firstDayOfWeek: this.form.monday ? 1 : 7 };
            },
            pickerOptions2: function () {
              return {
                disabledDate: function (e) {
                  return e.getTime() < Date.now();
                },
                shortcuts: [
                  {
                    text: "最近一周",
                    onClick: function (e) {
                      var t = new Date(),
                        n = new Date();
                      n.setTime(n.getTime() - 6048e5), e.$emit("pick", [n, t]);
                    },
                  },
                  {
                    text: "最近一个月",
                    onClick: function (e) {
                      var t = new Date(),
                        n = new Date();
                      n.setTime(n.getTime() - 2592e6), e.$emit("pick", [n, t]);
                    },
                  },
                ],
              };
            },
          },
          mounted: function () {
            console.log(this.item);
            var e = new Date();
            this.form.created = ""
              .concat(e.getFullYear(), "/")
              .concat(e.getMonth() + 1, "/")
              .concat(e.getDate());
          },
          methods: {
            onAddItem: function (e) {
              this.form.tasks.push({
                name: "目标名称".concat(e),
                day: "2022/12/31",
              });
            },
          },
          watch: {
            form: {
              handler: function (e) {
                this.$emit("on-form", e);
              },
              deep: !0,
            },
          },
        },
        d = p,
        h = n("2877"),
        v = Object(h["a"])(d, c, f, !1, null, null, null),
        g = v.exports,
        m = function () {

        },
        y = [
        ],
        b = {
          data: function () {
            return { show_reward: !1 };
          },
        },
        w = b,
        D = (n("8aab"), Object(h["a"])(w, m, y, !1, null, "68946751", null)),
        x = D.exports;
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = {
          components: { setForm: g, FooterReward: x },
          data: function () {
            return {
              hash: window.location.hash,
              id: this.$route.params.id,
              type: this.$route.params.type,
              type_bread: {
                time: { type: "#/lib/time", label: "时间组件" },
                eff: { type: "#/lib/eff", label: "效率组件" },
                others: { type: "#/lib/others", label: "其他组件" },
              },
              item: null,
              params: null,
              form: {
                black: 0,
                bg_color: "",
                font_color: "",
                theme: "",
                icon: "github",
              },
              created: !1,
              is_theme_link: !1,
            };
          },
          computed: {
            icon_preview: function () {
              return n("69ae")("./".concat(this.form.icon, ".png"));
            },
          },
          mounted: function () {
            this.getData(),
              new l.a({
                el: "#vcomments",
                appId: "wgD3lhLSAPHdLGH0gPy9Ep5n-gzGzoHsz",
                appKey: "DX5XDbJapqKFh8XT5myBkrcc",
                avatar: "hide",
                path: window.location.hash,
                visitor: !0,
              });
          },
          methods: {
            getData: function () {
              var e = this,
                t = { time: "resources", eff: "efficiency", others: "others" };
              this.$axios
                .get("./".concat(t[e.type], ".json?v=").concat(Math.random()))
                .then(function (t) {
                  var n = t.data.list,
                    r = n.find(function (t) {
                      return t.id === Number(e.id);
                    });
                  (e.item = r),
                    (e.form.bg_color = r.bg_color),
                    (e.form.font_color = r.font_color),
                    (e.item.original_link = r.link),
                    r.theme && (e.form.theme = r.theme[0].key),
                    r.theme && r.theme[0].link && (e.is_theme_link = !0);
                });
            },
            onCustomize: function (e) {
              (this.created = !1), (this.params = e), this.previewLink();
            },
            previewLink: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.form,
                t = this,
                n = k(k({}, e), this.params),
                r = t.item.original_link;
              if ((console.log(n), t.is_theme_link)) {
                var i = t.item.theme.find(function (e) {
                  return e.key === t.form.theme;
                });
                r = i.link;
              }
              var o = t.$crypto.aseEncryptParams(JSON.stringify(n));
              (t.item.link = "".concat(r, "?e=").concat(o)),
                console.log(t.item.link);
            },
            createLink: function () {
              this.created = !0;
            },
            handleCopy: function () {
              var e = this;
              splitbee.track("Create widget", { type: e.type, id: e.id }),
                this.$message({
                  message: "创建成功，快去粘贴到📒笔记软件内体验一下吧",
                  type: "success",
                });
            },
          },
          watch: {
            form: {
              handler: function (e, t) {
                this.previewLink(e);
              },
              deep: !0,
            },
          },
        },
        C = E,
        F = (n("9ca8"), Object(h["a"])(C, r, i, !1, null, "7588dc02", null));
      t["default"] = F.exports;
    },
    1169: function (e, t, n) {
      var r = n("2d95");
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == r(e);
        };
    },
    "11e9": function (e, t, n) {
      var r = n("52a7"),
        i = n("4630"),
        o = n("6821"),
        a = n("6a99"),
        s = n("69a8"),
        u = n("c69a"),
        l = Object.getOwnPropertyDescriptor;
      t.f = n("9e1e")
        ? l
        : function (e, t) {
            if (((e = o(e)), (t = a(t, !0)), u))
              try {
                return l(e, t);
              } catch (n) {}
            if (s(e, t)) return i(!r.f.call(e, t), e[t]);
          };
    },
    1673: function (e, t, n) {},
    1708: function (e, t, n) {
      e.exports = n.p + "img/twitter.48a2ec2a.png";
    },
    1950: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container", class: { dark: e.dark } },
            [
              n("div", { staticClass: "head" }, [
                e._v("\n    我的倒数日"),
                n(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.list,
                        expression: "list",
                      },
                    ],
                  },
                  [e._v(e._s(e.dues) + "/" + e._s(e.list && e.list.length))]
                ),
              ]),
              n(
                "ul",
                { staticClass: "list" },
                e._l(e.list, function (t) {
                  return n("li", { key: t.key, staticClass: "item" }, [
                    n("span", { staticClass: "label" }, [e._v(e._s(t.key))]),
                    n("div", { staticClass: "progress" }, [
                      n("div", {
                        style: {
                          width:
                            t.remain > 0
                              ? (100 * (t.total - t.remain)) / t.total + "%"
                              : "100%",
                        },
                      }),
                    ]),
                    n("span", { staticClass: "remain" }, [
                      e._v(
                        e._s(Math.abs(t.remain)) +
                          "天" +
                          e._s(t.remain > 0 ? "后" : "前")
                      ),
                    ]),
                  ]);
                }),
                0
              ),
            ]
          );
        },
        i = [],
        o =
          (n("ac6a"),
          n("28a5"),
          {
            props: ["_msg", "_created", "dark"],
            data: function () {
              return {
                msg:
                  this._msg || "考研-2022/09/26,生日-2022/01/01,N2-2022/6/19",
                created: this._created || "2021/09/04",
                dues: 0,
              };
            },
            computed: {
              list: function () {
                var e = this,
                  t = this.msg.split(","),
                  n = new Date(),
                  r = n.getTime(),
                  i = new Date(this.created).getTime(),
                  o = [];
                return (
                  t.forEach(function (t) {
                    var n = t.split("-"),
                      a = new Date(n[1]),
                      s = a.getTime(),
                      u = s - r,
                      l = Math.floor(u / 864e5),
                      c = s - i,
                      f = Math.floor(c / 864e5);
                    l <= 0 && (e.dues += 1),
                      o.push({ key: n[0], value: n[1], remain: l, total: f });
                  }),
                  console.log(o),
                  o
                );
              },
            },
            mounted: function () {},
            watch: {
              _msg: function (e) {
                e && (this.msg = e);
              },
              _created: function (e) {
                e && (this.created = e);
              },
            },
          }),
        a = o,
        s = (n("a30a"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "52fb7c50", null);
      t["default"] = u.exports;
    },
    "214f": function (e, t, n) {
      "use strict";
      n("b0c5");
      var r = n("2aba"),
        i = n("32e9"),
        o = n("79e5"),
        a = n("be13"),
        s = n("2b4c"),
        u = n("520a"),
        l = s("species"),
        c = !o(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }),
        f = (function () {
          var e = /(?:)/,
            t = e.exec;
          e.exec = function () {
            return t.apply(this, arguments);
          };
          var n = "ab".split(e);
          return 2 === n.length && "a" === n[0] && "b" === n[1];
        })();
      e.exports = function (e, t, n) {
        var p = s(e),
          d = !o(function () {
            var t = {};
            return (
              (t[p] = function () {
                return 7;
              }),
              7 != ""[e](t)
            );
          }),
          h = d
            ? !o(function () {
                var t = !1,
                  n = /a/;
                return (
                  (n.exec = function () {
                    return (t = !0), null;
                  }),
                  "split" === e &&
                    ((n.constructor = {}),
                    (n.constructor[l] = function () {
                      return n;
                    })),
                  n[p](""),
                  !t
                );
              })
            : void 0;
        if (!d || !h || ("replace" === e && !c) || ("split" === e && !f)) {
          var v = /./[p],
            g = n(a, p, ""[e], function (e, t, n, r, i) {
              return t.exec === u
                ? d && !i
                  ? { done: !0, value: v.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            }),
            m = g[0],
            y = g[1];
          r(String.prototype, e, m),
            i(
              RegExp.prototype,
              p,
              2 == t
                ? function (e, t) {
                    return y.call(e, this, t);
                  }
                : function (e) {
                    return y.call(e, this);
                  }
            );
        }
      };
    },
    "225e": function (e, t, n) {},
    "22eb": function (e, t, n) {},
    "27f6": function (e, t, n) {
      e.exports = n.p + "img/notion.43874839.png";
    },
    "28a5": function (e, t, n) {
      "use strict";
      var r = n("aae3"),
        i = n("cb7c"),
        o = n("ebd6"),
        a = n("0390"),
        s = n("9def"),
        u = n("5f1b"),
        l = n("520a"),
        c = n("79e5"),
        f = Math.min,
        p = [].push,
        d = "split",
        h = "length",
        v = "lastIndex",
        g = 4294967295,
        m = !c(function () {
          RegExp(g, "y");
        });
      n("214f")("split", 2, function (e, t, n, c) {
        var y;
        return (
          (y =
            "c" == "abbc"[d](/(b)*/)[1] ||
            4 != "test"[d](/(?:)/, -1)[h] ||
            2 != "ab"[d](/(?:ab)*/)[h] ||
            4 != "."[d](/(.?)(.?)/)[h] ||
            "."[d](/()()/)[h] > 1 ||
            ""[d](/.?/)[h]
              ? function (e, t) {
                  var i = String(this);
                  if (void 0 === e && 0 === t) return [];
                  if (!r(e)) return n.call(i, e, t);
                  var o,
                    a,
                    s,
                    u = [],
                    c =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    f = 0,
                    d = void 0 === t ? g : t >>> 0,
                    m = new RegExp(e.source, c + "g");
                  while ((o = l.call(m, i))) {
                    if (
                      ((a = m[v]),
                      a > f &&
                        (u.push(i.slice(f, o.index)),
                        o[h] > 1 && o.index < i[h] && p.apply(u, o.slice(1)),
                        (s = o[0][h]),
                        (f = a),
                        u[h] >= d))
                    )
                      break;
                    m[v] === o.index && m[v]++;
                  }
                  return (
                    f === i[h]
                      ? (!s && m.test("")) || u.push("")
                      : u.push(i.slice(f)),
                    u[h] > d ? u.slice(0, d) : u
                  );
                }
              : "0"[d](void 0, 0)[h]
              ? function (e, t) {
                  return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                }
              : n),
          [
            function (n, r) {
              var i = e(this),
                o = void 0 == n ? void 0 : n[t];
              return void 0 !== o ? o.call(n, i, r) : y.call(String(i), n, r);
            },
            function (e, t) {
              var r = c(y, e, this, t, y !== n);
              if (r.done) return r.value;
              var l = i(e),
                p = String(this),
                d = o(l, RegExp),
                h = l.unicode,
                v =
                  (l.ignoreCase ? "i" : "") +
                  (l.multiline ? "m" : "") +
                  (l.unicode ? "u" : "") +
                  (m ? "y" : "g"),
                b = new d(m ? l : "^(?:" + l.source + ")", v),
                w = void 0 === t ? g : t >>> 0;
              if (0 === w) return [];
              if (0 === p.length) return null === u(b, p) ? [p] : [];
              var D = 0,
                x = 0,
                A = [];
              while (x < p.length) {
                b.lastIndex = m ? x : 0;
                var k,
                  E = u(b, m ? p : p.slice(x));
                if (
                  null === E ||
                  (k = f(s(b.lastIndex + (m ? 0 : x)), p.length)) === D
                )
                  x = a(p, x, h);
                else {
                  if ((A.push(p.slice(D, x)), A.length === w)) return A;
                  for (var C = 1; C <= E.length - 1; C++)
                    if ((A.push(E[C]), A.length === w)) return A;
                  x = D = k;
                }
              }
              return A.push(p.slice(D)), A;
            },
          ]
        );
      });
    },
    "32e8": function (e, t, n) {},
    "386b": function (e, t, n) {
      var r = n("5ca1"),
        i = n("79e5"),
        o = n("be13"),
        a = /"/g,
        s = function (e, t, n, r) {
          var i = String(o(e)),
            s = "<" + t;
          return (
            "" !== n &&
              (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'),
            s + ">" + i + "</" + t + ">"
          );
        };
      e.exports = function (e, t) {
        var n = {};
        (n[e] = t(s)),
          r(
            r.P +
              r.F *
                i(function () {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    "3f3f": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container wrapper his-today" },
            [
              n("h2", [
                n("em", [e._v("-")]),
                e._v(
                  e._s(e.year) + " / " + e._s(e.month) + " / " + e._s(e.day)
                ),
                n("em", [e._v("-")]),
              ]),
              n(
                "el-timeline",
                { attrs: { reverse: !0 } },
                e._l(e.list, function (t, r) {
                  return n(
                    "el-timeline-item",
                    {
                      key: r,
                      attrs: {
                        timestamp: t.year,
                        color: r % 2 === 0 ? "teal" : "",
                        placement: "top",
                      },
                    },
                    [n("p", { domProps: { innerHTML: e._s(t.title) } })]
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        i = [],
        o = {
          data: function () {
            return { list: [], year: "", month: "", day: "" };
          },
          mounted: function () {
            var e,
              t,
              n = this,
              r = new Date();
            (this.year = r.getFullYear()),
              (e = r.getMonth() + 1),
              (t = r.getDate()),
              (e = e > 9 ? e : "0".concat(e)),
              (t = t > 9 ? t : "0".concat(t)),
              (n.month = e),
              (n.day = t),
              this.getHisToday(e);
          },
          methods: {
            getHisToday: function (e) {
              var t = "".concat(this.month).concat(this.day),
                n = localStorage.getItem("his_".concat(t));
              if (n) this.list = JSON.parse(n);
              else {
                var r = this;
                r.$axios
                  .get(
                    "https://baike.baidu.com/cms/home/eventsOnHistory/".concat(
                      e,
                      ".json"
                    )
                  )
                  .then(function (t) {
                    var n = t.data;
                    r.formatData(n[e]);
                  });
              }
            },
            formatData: function (e) {
              var t = "".concat(this.month).concat(this.day),
                n = e[t];
              (this.list = n),
                localStorage.setItem("his_".concat(t), JSON.stringify(n));
            },
          },
        },
        a = o,
        s = (n("cb5e"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "ffd0a0d6", null);
      t["default"] = u.exports;
    },
    "41d6": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          return e._m(0);
        },
        i = [
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              { staticClass: "page-container container wrapper" },
              [
                r("h3", [e._v("感谢支持🙏")]),
                r("h4", [e._v("「 💗 让本站更持久地发光发热 💗 」")]),
                r("p", [
                  e._v(
                    "\n    本来这个组件库是我的一时兴起，也是为了自己用Notion的时候能更加赏心悦目，但是没想到能得到这么多人的喜欢，真的非常意外！"
                  ),
                  r("br"),
                  e._v("\n    之后也会继续产出，很感谢大家的支持和反馈💗！！ "),
                  r("br"),
                  e._v("期待你们的意见反馈！！\n  "),
                ]),
                r("div", { staticClass: "reward-box" }, [
                  r("img", { attrs: { src: n("a94e"), alt: "" } }),
                  r("img", { attrs: { src: n("fd78"), alt: "" } }),
                ]),
              ]
            );
          },
        ],
        o = (n("4999"), n("2877")),
        a = {},
        s = Object(o["a"])(a, r, i, !1, null, "1a20ee73", null);
      t["default"] = s.exports;
    },
    "432c": function (e, t, n) {
      "use strict";
      n("32e8");
    },
    "454f": function (e, t, n) {
      n("46a7");
      var r = n("584a").Object;
      e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n);
      };
    },
    "456d": function (e, t, n) {
      var r = n("4bf8"),
        i = n("0d58");
      n("5eda")("keys", function () {
        return function (e) {
          return i(r(e));
        };
      });
    },
    "46a7": function (e, t, n) {
      var r = n("63b6");
      r(r.S + r.F * !n("8e60"), "Object", { defineProperty: n("d9f6").f });
    },
    4999: function (e, t, n) {
      "use strict";
      n("6a88");
    },
    "4ef8": function (e, t, n) {
      e.exports = n.p + "img/figma.1ea25bb6.png";
    },
    5205: function (e, t, n) {
      "use strict";
      n("f474");
    },
    "520a": function (e, t, n) {
      "use strict";
      var r = n("0bfb"),
        i = RegExp.prototype.exec,
        o = String.prototype.replace,
        a = i,
        s = "lastIndex",
        u = (function () {
          var e = /a/,
            t = /b*/g;
          return i.call(e, "a"), i.call(t, "a"), 0 !== e[s] || 0 !== t[s];
        })(),
        l = void 0 !== /()??/.exec("")[1],
        c = u || l;
      c &&
        (a = function (e) {
          var t,
            n,
            a,
            c,
            f = this;
          return (
            l && (n = new RegExp("^" + f.source + "$(?!\\s)", r.call(f))),
            u && (t = f[s]),
            (a = i.call(f, e)),
            u && a && (f[s] = f.global ? a.index + a[0].length : t),
            l &&
              a &&
              a.length > 1 &&
              o.call(a[0], n, function () {
                for (c = 1; c < arguments.length - 2; c++)
                  void 0 === arguments[c] && (a[c] = void 0);
              }),
            a
          );
        }),
        (e.exports = a);
    },
    "56a5": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container wrapper" },
            e._l(e.list, function (t, r) {
              return n(
                "el-row",
                { key: "row-" + r, attrs: { gutter: 20 } },
                e._l(t, function (t) {
                  return n(
                    "el-col",
                    { key: t.id, attrs: { span: 8 } },
                    [
                      n(
                        "el-card",
                        {
                          staticClass: "item-card",
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: { shadow: "hover" },
                          on: {
                            click: function (n) {
                              return e.handleSettingModal(t);
                            },
                          },
                        },
                        [
                          n("img", {
                            staticClass: "image",
                            attrs: { src: t.cover, alt: "" },
                          }),
                          n(
                            "div",
                            { staticClass: "bottom clearfix" },
                            [
                              n("h3", [e._v(e._s(t.tag))]),
                              n(
                                "el-button",
                                {
                                  staticClass: "edit-btn",
                                  attrs: {
                                    type: "primary",
                                    icon: "el-icon-edit",
                                    round: "",
                                  },
                                  on: {
                                    click: function (n) {
                                      return e.handleCreate(t.id);
                                    },
                                  },
                                },
                                [e._v("去创建")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  );
                }),
                1
              );
            }),
            1
          );
        },
        i = [],
        o =
          (n("a481"),
          n("b54a"),
          {
            data: function () {
              return {
                times: [],
                show_setting_modal: !1,
                currentItem: null,
                currentComponent: "today",
                show_preview: !1,
                list: {},
              };
            },
            mounted: function () {
              this.getDatas();
            },
            methods: {
              getDatas: function () {
                var e = this;
                this.$axios.get("./efficiency.json").then(function (t) {
                  var n = t.data.list;
                  e.times = n;
                  for (var r = {}, i = n.length, o = 0; o < i; o++) {
                    var a = Math.floor(o / 3);
                    r[a] ? r[a].push(n[o]) : (r[a] = [n[o]]);
                  }
                  e.list = r;
                });
              },
              handleCopy: function () {
                this.$message({
                  message: "复制成功，快去Notion体验一下吧",
                  type: "success",
                });
              },
              handleSettingModal: function (e) {
                (this.currentItem = e),
                  (this.currentComponent = e.link),
                  (this.show_setting_modal = !0);
              },
              handleModalClose: function () {
                (this.currentItem = null),
                  (this.currentComponent = null),
                  (this.show_setting_modal = !1),
                  (this.show_preview = !1);
              },
              handlePreview: function (e) {
                (this.currentItem = e), (this.show_preview = !0);
              },
              handleCreate: function (e) {
                splitbee.track("Select widget", { type: "eff", id: e }),
                  this.$router.replace("/create/".concat(e, "/eff"));
              },
            },
          }),
        a = o,
        s = (n("da0a"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "15053014", null);
      t["default"] = u.exports;
    },
    5739: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "container wrapper" }, [
            n("img", {
              staticClass: "bg",
              attrs: { src: e.images[e.mode], alt: "" },
            }),
            n("div", { staticClass: "inner" }, [
              e._v(
                "如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以"
              ),
            ]),
          ]);
        },
        i = [],
        o = n("c45d"),
        a = n.n(o),
        s = {
          data: function () {
            return { images: [a.a], mode: 0 };
          },
        },
        u = s,
        l = (n("432c"), n("2877")),
        c = Object(l["a"])(u, r, i, !1, null, "44c43fb8", null);
      t["default"] = c.exports;
    },
    "5dbc": function (e, t, n) {
      var r = n("d3f4"),
        i = n("8b97").set;
      e.exports = function (e, t, n) {
        var o,
          a = t.constructor;
        return (
          a !== n &&
            "function" == typeof a &&
            (o = a.prototype) !== n.prototype &&
            r(o) &&
            i &&
            i(e, o),
          e
        );
      };
    },
    "5eda": function (e, t, n) {
      var r = n("5ca1"),
        i = n("8378"),
        o = n("79e5");
      e.exports = function (e, t) {
        var n = (i.Object || {})[e] || Object[e],
          a = {};
        (a[e] = t(n)),
          r(
            r.S +
              r.F *
                o(function () {
                  n(1);
                }),
            "Object",
            a
          );
      };
    },
    "5f1b": function (e, t, n) {
      "use strict";
      var r = n("23c6"),
        i = RegExp.prototype.exec;
      e.exports = function (e, t) {
        var n = e.exec;
        if ("function" === typeof n) {
          var o = n.call(e, t);
          if ("object" !== typeof o)
            throw new TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return o;
        }
        if ("RegExp" !== r(e))
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(e, t);
      };
    },
    "5fc1": function (e, t, n) {
      "use strict";
      n("225e");
    },
    6652: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container wrapper" },
            e._l(e.list, function (t, r) {
              return n(
                "el-row",
                { key: "row-" + r, attrs: { gutter: 20 } },
                e._l(t, function (t) {
                  return n(
                    "el-col",
                    { key: t.id, attrs: { span: 8 } },
                    [
                      n(
                        "el-card",
                        {
                          staticClass: "item-card",
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: { shadow: "hover" },
                          on: {
                            click: function (n) {
                              return e.handleSettingModal(t);
                            },
                          },
                        },
                        [
                          n("img", {
                            staticClass: "image",
                            attrs: { src: t.cover, alt: "" },
                          }),
                          n(
                            "div",
                            { staticClass: "bottom clearfix" },
                            [
                              n("h3", [e._v(e._s(t.tag))]),
                              n(
                                "el-button",
                                {
                                  staticClass: "edit-btn",
                                  attrs: {
                                    type: "primary",
                                    icon: "el-icon-edit",
                                    round: "",
                                  },
                                  on: {
                                    click: function (n) {
                                      return e.handleCreate(t.id);
                                    },
                                  },
                                },
                                [e._v("去创建")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  );
                }),
                1
              );
            }),
            1
          );
        },
        i = [],
        o =
          (n("b54a"),
          n("a481"),
          {
            data: function () {
              return {
                times: [],
                show_setting_modal: !1,
                currentItem: null,
                currentComponent: "highlight",
                list: {},
              };
            },
            mounted: function () {
              this.getDatas();
            },
            methods: {
              getDatas: function () {
                var e = this;
                this.$axios
                  .get("./resources.json?v=".concat(Math.random()))
                  .then(function (t) {
                    var n = t.data.list;
                    e.times = n;
                    for (var r = {}, i = n.length, o = 0; o < i; o++) {
                      var a = Math.floor(o / 3);
                      r[a] ? r[a].push(n[o]) : (r[a] = [n[o]]);
                    }
                    e.list = r;
                  });
              },
              handleCreate: function (e) {
                splitbee.track("Select widget", { type: "time", id: e }),
                  this.$router.replace("/create/".concat(e, "/time"));
              },
              handleSettingModal: function (e) {
                "setting" === e.link_type &&
                  ((this.currentItem = e),
                  (this.currentComponent = e.link),
                  (this.show_setting_modal = !0));
              },
              handleModalClose: function () {
                (this.currentItem = null),
                  (this.currentComponent = null),
                  (this.show_setting_modal = !1);
              },
            },
          }),
        a = o,
        s = n("2877"),
        u = Object(s["a"])(a, r, i, !1, null, null, null);
      t["default"] = u.exports;
    },
    "69ae": function (e, t, n) {
      var r = {
        "./facebook.png": "083a",
        "./figma.png": "4ef8",
        "./github.png": "86e5",
        "./gmail.png": "aff5",
        "./instagram.png": "cf26",
        "./linkedin.png": "fbf0",
        "./mail.png": "0a85",
        "./notion.png": "27f6",
        "./stack-overflow.png": "c053",
        "./twitter.png": "1708",
        "./weibo.png": "7358",
        "./youtube.png": "77b5",
        "./zoom.png": "b616",
      };
      function i(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (e.exports = i),
        (i.id = "69ae");
    },
    "6a88": function (e, t, n) {},
    "6d03": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container wrapper" },
            e._l(e.list, function (t, r) {
              return n(
                "el-row",
                { key: "row-" + r, attrs: { gutter: 20 } },
                e._l(t, function (t) {
                  return n(
                    "el-col",
                    { key: t.id, attrs: { span: 8 } },
                    [
                      n(
                        "el-card",
                        {
                          staticClass: "item-card",
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: { shadow: "hover" },
                          on: {
                            click: function (n) {
                              return e.handleSettingModal(t);
                            },
                          },
                        },
                        [
                          n("img", {
                            staticClass: "image",
                            attrs: { src: t.cover, alt: "" },
                          }),
                          n(
                            "div",
                            { staticClass: "bottom clearfix" },
                            [
                              n("h3", [e._v(e._s(t.tag))]),
                              n(
                                "el-button",
                                {
                                  staticClass: "edit-btn",
                                  attrs: {
                                    type: "primary",
                                    icon: "el-icon-edit",
                                    round: "",
                                  },
                                  on: {
                                    click: function (n) {
                                      return e.handleCreate(t.id);
                                    },
                                  },
                                },
                                [e._v("去创建")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  );
                }),
                1
              );
            }),
            1
          );
        },
        i = [],
        o =
          (n("a481"),
          n("b54a"),
          {
            data: function () {
              return {
                times: [],
                show_setting_modal: !1,
                currentItem: null,
                currentComponent: "today",
                show_preview: !1,
                list: {},
              };
            },
            mounted: function () {
              this.getDatas();
            },
            methods: {
              getDatas: function () {
                var e = this;
                this.$axios.get("./others.json?v=20221231").then(function (t) {
                  var n = t.data.list.filter(function (e) {
                    return !e.hide;
                  });
                  e.times = n;
                  for (var r = {}, i = n.length, o = 0; o < i; o++) {
                    var a = Math.floor(o / 3);
                    r[a] ? r[a].push(n[o]) : (r[a] = [n[o]]);
                  }
                  e.list = r;
                });
              },
              handleCopy: function () {
                this.$message({
                  message: "复制成功，快去Notion体验一下吧",
                  type: "success",
                });
              },
              handleSettingModal: function (e) {
                (this.currentItem = e),
                  (this.currentComponent = e.link),
                  (this.show_setting_modal = !0);
              },
              handleModalClose: function () {
                (this.currentItem = null),
                  (this.currentComponent = null),
                  (this.show_setting_modal = !1),
                  (this.show_preview = !1);
              },
              handlePreview: function (e) {
                (this.currentItem = e), (this.show_preview = !0);
              },
              handleCreate: function (e) {
                splitbee.track("Select widget", { type: "others", id: e }),
                  this.$router.replace("/create/".concat(e, "/others"));
              },
            },
          }),
        a = o,
        s = (n("838e"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "5e6f1597", null);
      t["default"] = u.exports;
    },
    7358: function (e, t, n) {
      e.exports = n.p + "img/weibo.f1654723.png";
    },
    7514: function (e, t, n) {
      "use strict";
      var r = n("5ca1"),
        i = n("0a49")(5),
        o = "find",
        a = !0;
      o in [] &&
        Array(1)[o](function () {
          a = !1;
        }),
        r(r.P + r.F * a, "Array", {
          find: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n("9c6c")(o);
    },
    "76e4": function (e, t, n) {},
    "77b5": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPcElEQVR4nO1cCVAUVxqezbFH7WZ3k6wR6BkoDZvaJFW7yZpNShMPFEHxCsQTue9LvMV4RI0Xmmg0XtFILhWNmsR4osaQCMFIBBTFKCCiIILITL/XbY7N8W/9PdPN0D0YZpDpJtt/1VdWjTPvf/xf93vvP95vMOiiiy666KKLLrrooosuuuiiiy666KKLLrrooosuujRLY2PjfSzL3k8IeRD/FQEAv7H7mi5tEY7juloslicJIUMIIeGEkImEkAWU0jWU0m2U0kOU0pOU0gpK6SVKaROl1Ewp5Sml4AQI/o4Q0kApvWgb8zAhZAch5A1CSCalNINSGotz4Xn+CZ7nPX5VpALAPSzLPsyy7EBKaRKl9BWbAfIppZcJId87aVRwNwghPxBCapFAQshOQshSSmk8x3H9zWazDwDcbdCysCz7H0rpcjQ6IeQ7tQ1KOx63CCHHCSHLWJbtYdCKcBw3hhBSrAEDgcooopQGq0YEIeQRQkiuBgwBGsMRi8XSza1ksCwbSCm1tHfyLMtC9eVaKD1dDgX5Z+DwoS/hw1258O5bB2Hd6g9g2eKtMGfmmzBz6gaYlPq6gOS4FRAbkSkgdNTLMCZ4XguEjlwg/X981HLpdzOmrIcFc9+CVzO3wxvr9sCWd3Lgo92fwZGck/BF3hkoO3cJ6q/fuCOksCxrxr3GXWSEEkJ+bMvErtXWQ9FX52H/3nzI2rgPXlmaDRlTNgiGChk6B/o/Own69UzXFAL7TYWxIfMhJX4FzMnYBCuX74DsLYfh2NGv4NzZSrjZ2NRWUn4oLy9/oaPJCLjdCelyVa1g+Ikpq2GI/wzVjduvgxA8ZDZMm7gOtr6bA7U19a2SYjabvzty5Ehgh5CBZ3ObH6BQXHetQVheBjzn3BM/9Lk0iPRLhYkDk2HOoCRYNiQR1g9PgPdC4uCjUbFwdGwMfDk+Ck6HW1ERFQmVUZFQFR0B9bHhApriwoFPCBNwM876GaI6OkL4LuJcRCQUh0VBXmg0HBodC7tGxsLbwfGwdngCZA5JhFmBSZDinwJj+6ZB4LMTnPobAvpOhfVrPmz1zamvr2+Mi4t75I4TQgj5wJHCkuILMGrEXMVE+/dMh9F90iDdPwUygxLgneA42D86Bk6Oj4byyMgWhtQaGuLC4euISPgiNFp4MN4YkQDzBidC8oAUCO7jmLCYsKVwqfKqQ1IKCgoOGo3GB+4YGZTS3o4UnS65CEF2SxOS8PLgJCgYHwVNceoblu8gXI8Jh5wxMZDmn9KCFDxUVFdfc7Sf/BQTExlvMBjuvSOEEEL2yJVcv34DXhg2R5oMvu6lEVGqG4t3Mw6MjoVBdsscngJZlihIycs7vt/b27P9DuStW7e8CCE/yRUsXbhFmsS4vqlQGxOhunF4lXAyLAoCejW/Kdu3HlUQcvPmTc7Xt3toly5d/tTetyNKPnjVpRrw7z1ZUD6g1wRhw1XbKLzK2BISLxEycvhcMJstClJmzJg228fH68l2EUIp3SIf+O3N+yXl8wcnqW4MXgNg48MhpHeaZJfPPi1SEHLgwIFshmFCDAaD65FkQkiZfOD05NWS4uOh0aobg9cIVg5NkOyCDqXcbmfOnM43Gj3HuXziAoB7HTmCQwMyBKV+PdOFs7/ahuA1Ajx5iYTgQyu325UrV6qREG9v78dcIoTjuMflg9ZcrZOUop+hthF4DeFsRKRkGwwNOfDc/+vr2228t7dXL5cIoZSGKJyc/DOS0qkByaobgdcQzPFhgi8m2sdRsDIyMnyS0Wgc5BIhhJDJ8gExGisqXDEsQXUj8BoD+mOifYqLvlYQkpmZudhk8hrt0sZOKV0pH3Dj+j2SQow5qW0AXmPAUJFon0MHChSEbN+e/SbuIy75I4SQXfIBF81/V1J4cEyM2/5QeqoQ+LnTVDf4L2FxUKJkn3eyDigIyc09tgcJ6dbtoa6uvCEn5ANOSm0+8haOd59DSFG/xQLcwb3AT4hV3fCtYdOIZgdx+ZJtymBsSUkBEmIymR52hZBKxaY0brGksDLKfeESaj+PmqvAbVwDfKL2jtx7R8U2H3rS1yoIqaioOI+EMAzzL1cIUeQ/QobMlhRimFoVQqgNJUXAz89QnQR7oKMs2gfTyPI519bW1Fp9ESePvgBwl6Og4sA+U6xOYa90oPFh6hJCKVDWAtyRg8BP1kYIB+N6IiGYJ5LPt7GxkdgIGeAUISzLPqAY7EaTXbZvglv/UNoaISLqrwO3JQv4JHWjzpjNtM8mOsqNoHPIMEyQs4Q8LB/sUmVNi/yHpgihVnBflwG3eK5qhGAoyT5p1VDfqJhjQMCABFuQse3Ccdw/5QNh1YWoKNovVZOEUAQhwOV+AvzUFFVIsc+NVJRfUcwvOjpyktHoNdYp55Bl2afkA50uvigpSuifol1CqA0NDcBtfw/4FPfma3A5F+1UdrZSMa+UlKTpuI/4+vr+rs2EEEJ6yQf6qrCsOVXp3wkIoTZcqgBuxWK3zdW+EAKLQOTzmTJl0iwk5MEHH7yvzYRQSvvKBzrxRamkaMLA5M5DCLXtL19+AVxGeofPdYxdPKvwZJliHi+9NGceEtK9e/e/OLNkDZQPdPyzYknR5IDORwhFUpqagNu9HfjUjkusje+XKtkpP++0Yg5LlixZaMuL3O/MkhUkHyj32ClJ0bROSggVcbkKuFXLOmSueOAR7YQ2k+teseKVZUiIp6fn33RCaMcTEmVHyOe5xQpCXn11eSYS8tBDTgQYOY7zVy5ZJfqSleBcTuTkibMKQhYsmDfftmR5tpkQSmmf22ULsWqvsy1ZnJs29RG9m09ZWN0pn8fkyRNfdJoQQsgz8oHwxCAdewd0IkIuuffYa1/JeOHry4r5xMZGT0ZCPDw8urSZELwhKx+opOiCpChOdwzBERlcQphQjSPaCS8kye0YHDwixelTlqOKk9Iz5ZIivEag2TeEqBc6kceysAZaPr+ePXvGOO0Yms1mb/lAWG4vlUu6uQSIdpLgIt5LkW4DPDtJUXjNsuzPGO21Fcz9oc2EXL9+/Y/yP7ah4aakLPDZdG0RUq+N8PsZu3zIiMGzWs2HIHr0cPJ6AiHkW/mA/n2sRdYIrENSnRBWWwkq+4xhxNhFrWYMnY722gi5Jh8QWRcVXnXjFQTaSVK4e0c3l5OmJb52u5y6c/kQGyGl8gHDRi+UFOLdPVUIqdFukcPWkDjJPrOmb1QQUlpaetJGSJArhByTD5ietEqVynfaScqAVg9rLgN6NTNbQciJEyeOupRTR6GUvi0fEC/fiwo/GOk+w3AnC4CfNVl1g/8S8EavaJ8tbx9SELJv375sa12W53OuvCEvywfEK8Ciwk3Px6tuAF5jsI/05hw8oSBk8+ZNq22Fck+58obEywfcuf0TSSGWTaptAF5jGGyXvi06pSy2njlzxmwkxMfH41FXe5q0mqRyd4CR1zjqYpqdQgQ2VJDbLygoMNGWC/F2hZDuji58SpdSeusXdng7QorColq033DUakN0Cl261marXmzhHBJCYJDfNGv1on6lDewJwdsAUs1BktIHqampuSoS4uPj83uDK+LIF0mIXi4pxvYTai8VvEbwytDE2176PH/+fLH1yMuMMrgqlNKttztp6Rt7mEAGthIZYbehO8ql5+XlHXDZKbR7Q2LkA2Pxl1+viYJi/14T4Hyk+zx2XqNAF0AkA1uOmJssrebSjUZjH5cJwTA8IeRn+eAvTt8oTSDcLxXqY/9/W2t8Pi4a/O3KR7GPltxeFovlux49noi0Llme/za0RyilBxydtuw7AYX3S4UyN8a2eA0As4O7R8W1qOXFbnkWC6sgpKCg4LC4oTuVS29rBQoCS1zEnifW5cu6p2DTMYsbQ/O8m1ETHS5EdRMHtGzPhPdB8EF1dAXBeh0aPXThBu7dHdKiCYG9CAf3tx6D7YFNabCkMt0/WSDpzefjheteeeOiheZgN2K1F6nl7fphYST7s3HR8OFIsYFZkkCA/cZtj6jQJVB+sdphmgBbM4lvh0shE0fyzTffmAjBrt1KhRfOV7W4DNpWYNYxtF8apPonC0G5JUMS4fVhCfBWcBzsfCFWaFWBBIot/i5GWlv2XYpqbvFnnyS7YfvsWkx4i/Z++NvicGuLP/QVdo6Mg83Px8Gq4QmwKCgJMmwt/rDNlP3y0xbgpRzsoIqXmRzZ5tq1a3Xi3oFJqXa3Z5KXl7Is22pHUiwTwj5amDMRT2G/RjwfNAumT1oH2947/EtNMG9NnDgho9kZbGdrJkdSV1eXhIn61iYhorGxSTge43l8x7aj8PrKXfDSi5shNX6l0Fs3oN9U1Q3brxXgEhw+dpHQ73fhvHeEZgn7P84XgoWOqkhaIePb+fNfEqrcbfmPoXdk73Ak+fn5Ych+WyZ2O2AvECQNK8Sx68Gu9z8VenGteW238KZh31xsOeuocfLQgRkC7IlFQ+JnwwfNlL6HeW3x9zjW7BmbIHPRVli7ardwsf+Dnblw+OAJazPls5UOr6A5i7q6uvr09LQZIhkMw4z08fH5q6EjZcOGDQMrK8vPtXfyvyawLPtzYWHhp35+feOb3wxmlFMViu0RPE9nZWWtqKqqqtCCQahKsFgsP5aWlhZOnz5FuBnVfKLyGtbhb4ZcfH0f+LO3N9M/LS15xqFDh3aUlZUV3bhxo9194amGgQcbPD2VlBQf37lzR5aY42iG11ij0fj0Y4899luDWoIJF5PJc6A4qWeeeSoaTxjr169dsXfvni0FBQU5586dK6yqqiqvr69vwqdKbcPSVmA2m79Hg1dWVpSh0XNzP/0YDb9s2bKleIP20UcfCWtJgPRGjMFc+R1tmtxewXtzJpPpcQygGY2ewY4mbj0CGkOHDRuSjBcgMeiWlbV5ze7du97Kycl5Hx2pU6cKc5FANMqVK1eqELhZ1tXVNWD77qamJh6Bxms2ZNM3+BlWB+L3EFevXr2Cv62urq68ePHCWSzDKSwsPIZG3rdv37bs7OyN69evW7l48cKX8S23X/9/GV5j8fTk5eXV02g0+rqc43Cz3IPrKMMwRh8fz39gM2GTybM3vk0mk+cIfKrabgBPtwLDHGhwLNlBo2PDGKvhu3jYCqXvMvwaBZ8sLM339vb29PDw8GEY5u/4lqEjxTDMM0ggGsVoNAYicLO0YTjDMC8g0Hj2x0zb5yHidxmGGWz9vWcgwzB+tqXlaTQyFhyYTF0exoema9euD+Fbrur6r4suuuiiiy666KKLLrrooosuuuiiiy666KKLoXPL/wD0MFBgujFREwAAAABJRU5ErkJggg==";
    },
    "784b": function (e, t, n) {},
    "7c04": function (e, t, n) {},
    "838e": function (e, t, n) {
      "use strict";
      n("e3ee");
    },
    "85f2": function (e, t, n) {
      e.exports = n("454f");
    },
    "86e5": function (e, t, n) {
      e.exports = n.p + "img/github.9aca02c7.png";
    },
    "8aab": function (e, t, n) {
      "use strict";
      n("7c04");
    },
    "8b97": function (e, t, n) {
      var r = n("d3f4"),
        i = n("cb7c"),
        o = function (e, t) {
          if ((i(e), !r(t) && null !== t))
            throw TypeError(t + ": can't set as prototype!");
        };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (e, t, r) {
                try {
                  (r = n("9b43")(
                    Function.call,
                    n("11e9").f(Object.prototype, "__proto__").set,
                    2
                  )),
                    r(e, []),
                    (t = !(e instanceof Array));
                } catch (i) {
                  t = !0;
                }
                return function (e, n) {
                  return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                };
              })({}, !1)
            : void 0),
        check: o,
      };
    },
    "8e6e": function (e, t, n) {
      var r = n("5ca1"),
        i = n("990b"),
        o = n("6821"),
        a = n("11e9"),
        s = n("f1ae");
      r(r.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
          var t,
            n,
            r = o(e),
            u = a.f,
            l = i(r),
            c = {},
            f = 0;
          while (l.length > f)
            (n = u(r, (t = l[f++]))), void 0 !== n && s(c, t, n);
          return c;
        },
      });
    },
    9093: function (e, t, n) {
      var r = n("ce10"),
        i = n("e11e").concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i);
        };
    },
    "990b": function (e, t, n) {
      var r = n("9093"),
        i = n("2621"),
        o = n("cb7c"),
        a = n("7726").Reflect;
      e.exports =
        (a && a.ownKeys) ||
        function (e) {
          var t = r.f(o(e)),
            n = i.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    "9a85": function (e, t, n) {},
    "9ca8": function (e, t, n) {
      "use strict";
      n("1673");
    },
    a1a0: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "load", function () {
          return i;
        });
      const r = "jinrishici-token";
      function i(e, t) {
        return window.localStorage && window.localStorage.getItem(r)
          ? a(e, t, window.localStorage.getItem(r))
          : o(e, t);
      }
      function o(e, t) {
        const n = function (t) {
          window.localStorage.setItem(r, t.token), e(t);
        };
        return s(n, t, "https://v2.jinrishici.com/one.json?client=npm-sdk/1.0");
      }
      function a(e, t, n) {
        return s(
          e,
          t,
          "https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token=" +
            encodeURIComponent(n)
        );
      }
      function s(e, t, n) {
        var r = new XMLHttpRequest();
        r.open("get", n),
          (r.withCredentials = !0),
          r.send(),
          (r.onreadystatechange = function () {
            if (4 === r.readyState) {
              var n = JSON.parse(r.responseText);
              "success" === n.status
                ? e(n)
                : t
                ? t(n)
                : console.error(
                    "今日诗词API加载失败，错误原因：" + n.errMessage
                  );
            }
          });
      }
    },
    a30a: function (e, t, n) {
      "use strict";
      n("9a85");
    },
    a481: function (e, t, n) {
      "use strict";
      var r = n("cb7c"),
        i = n("4bf8"),
        o = n("9def"),
        a = n("4588"),
        s = n("0390"),
        u = n("5f1b"),
        l = Math.max,
        c = Math.min,
        f = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g,
        d = /\$([$&`']|\d\d?)/g,
        h = function (e) {
          return void 0 === e ? e : String(e);
        };
      n("214f")("replace", 2, function (e, t, n, v) {
        return [
          function (r, i) {
            var o = e(this),
              a = void 0 == r ? void 0 : r[t];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
          },
          function (e, t) {
            var i = v(n, e, this, t);
            if (i.done) return i.value;
            var f = r(e),
              p = String(this),
              d = "function" === typeof t;
            d || (t = String(t));
            var m = f.global;
            if (m) {
              var y = f.unicode;
              f.lastIndex = 0;
            }
            var b = [];
            while (1) {
              var w = u(f, p);
              if (null === w) break;
              if ((b.push(w), !m)) break;
              var D = String(w[0]);
              "" === D && (f.lastIndex = s(p, o(f.lastIndex), y));
            }
            for (var x = "", A = 0, k = 0; k < b.length; k++) {
              w = b[k];
              for (
                var E = String(w[0]),
                  C = l(c(a(w.index), p.length), 0),
                  F = [],
                  S = 1;
                S < w.length;
                S++
              )
                F.push(h(w[S]));
              var _ = w.groups;
              if (d) {
                var O = [E].concat(F, C, p);
                void 0 !== _ && O.push(_);
                var B = String(t.apply(void 0, O));
              } else B = g(E, p, C, F, _, t);
              C >= A && ((x += p.slice(A, C) + B), (A = C + E.length));
            }
            return x + p.slice(A);
          },
        ];
        function g(e, t, r, o, a, s) {
          var u = r + e.length,
            l = o.length,
            c = d;
          return (
            void 0 !== a && ((a = i(a)), (c = p)),
            n.call(s, c, function (n, i) {
              var s;
              switch (i.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return t.slice(0, r);
                case "'":
                  return t.slice(u);
                case "<":
                  s = a[i.slice(1, -1)];
                  break;
                default:
                  var c = +i;
                  if (0 === c) return n;
                  if (c > l) {
                    var p = f(c / 10);
                    return 0 === p
                      ? n
                      : p <= l
                      ? void 0 === o[p - 1]
                        ? i.charAt(1)
                        : o[p - 1] + i.charAt(1)
                      : n;
                  }
                  s = o[c - 1];
              }
              return void 0 === s ? "" : s;
            })
          );
        }
      });
    },
    a94e: function (e, t, n) {
      e.exports = n.p + "img/reward.056ee02e.jpg";
    },
    aa77: function (e, t, n) {
      var r = n("5ca1"),
        i = n("be13"),
        o = n("79e5"),
        a = n("fdef"),
        s = "[" + a + "]",
        u = "​",
        l = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        f = function (e, t, n) {
          var i = {},
            s = o(function () {
              return !!a[e]() || u[e]() != u;
            }),
            l = (i[e] = s ? t(p) : a[e]);
          n && (i[n] = l), r(r.P + r.F * s, "String", i);
        },
        p = (f.trim = function (e, t) {
          return (
            (e = String(i(e))),
            1 & t && (e = e.replace(l, "")),
            2 & t && (e = e.replace(c, "")),
            e
          );
        });
      e.exports = f;
    },
    ac6a: function (e, t, n) {
      for (
        var r = n("cadf"),
          i = n("0d58"),
          o = n("2aba"),
          a = n("7726"),
          s = n("32e9"),
          u = n("84f2"),
          l = n("2b4c"),
          c = l("iterator"),
          f = l("toStringTag"),
          p = u.Array,
          d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          h = i(d),
          v = 0;
        v < h.length;
        v++
      ) {
        var g,
          m = h[v],
          y = d[m],
          b = a[m],
          w = b && b.prototype;
        if (w && (w[c] || s(w, c, p), w[f] || s(w, f, m), (u[m] = p), y))
          for (g in r) w[g] || o(w, g, r[g], !0);
      }
    },
    acee: function (e, t, n) {
      "use strict";
      n("c81a");
    },
    aff5: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMY0lEQVR4nO2de3BU1R3Hb2npTFFqa22nnbYzrdoZytg/Wp12DCEkMRAgIAElPCQkkhCISe7uZncRERWfffiKEhCI9cFj5K2CM1baSJoHMDFEASFCDbUmYZNNdvees4kSXr/Ob7m7e/fuvXf33n0kkfOb+c0wZPec7+989nzvuY89y3EsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYJFIABg9MDAwM8ppb/1er0/AYBR39ThAYBRWCPWijVj7UOtievq6hpDKZ1NKX2DENJFCLlCKQV/EkLOE0LqCSFrBEG4hRvhIQjCLViLWNN5Wa1XcAxwLCiluQDwvaQJw08DpfQBQki3VJRWEkIuU0r3U0rHcyMsKKXjKaX7xBqirRfHpjThMwfFEULaohWmIHSQEPI4AHyHG+YBAKNRK2qOod5TaGsJESgIwlRKqWBUnDTdbvdRj8fzK26YxsDAwC8IIY3xqFUQhH632z0rrgK9Xm8WIeSi9iB74L9nO+Hkp+3Q1dkdUajL5fK4XK7p3DALr9ebGY0dY41YK9aMtUeAcunEiRMz4yJQEISbCSG9Kh3Bu3vrwVz2EmRNtED6nXwg581+DF7423Y4c/oLrSl9xel0rh8OqxQA+LZ40FY9VmAtWBPWJq01K80C5rKX4d23631jovTevr4+b3V1dWqsIr9FKT2i1MHxT87A4vlPhQhTShS7ofptzU+R0+ls6u/v/xk3RIF9E0IOas3+Deve8dUSqd7Chc/A8WNnFNtpb28/M2bMmJ8aFur1evOUGq6v+ximZthChGSk8HBPWjnkp5fBtAkVYUJLi5+Hs+0dWhbmdrlc2XEd6ehqTCeEnFPThZpRu7ye6ek8FOTycO9UHjImhP4Nx6a+rlWxvaqqqmc5jhtrSCyl9DN5g+ib07NWBIWlVsBrs4vhyyWLob9kkS9pySJoWng/lGWVhgi9e+pKqPvwqJbXXu7p6XkiGSeV2Ael9FFCyCU1PagVNUtr4O/j4egbZrjcaAFoupp9/7DA1ifMMD0j+LqcrBXQdupsWJsdHR2dHMdN1i3Y4/H8QUlkWckLwePEpHI4UxAEIU9vySJ4c3Yx3JUSnDEZE0ywfu1eVa+lVy2ssb+/3/jUjhCU0psope9rfDB8GlGrX/ddE3h462kTXJGAkOeX71hgfk4QSsXyFxXbLygoWMlx3C91icY1eLhVtQY6m5zCw6mCAlUY0vzovkK4N6085JOGYr/4oksVSl9fX4/b7Z6YABgTCSGdav2iJtQm1Tp3Gg8ntppVQUjz7B4zTE4Nvrex/uOwPvbt27eL47gcvUBq5Q39+cktgY6en1kSFQx/dhXlQ+XkUAvLnb5KUTCVLBedTucqXFzECkJcoDyotXxHLahJqtFeyIPnQGQQ0nzJFpxZf316a1g/bW1tJziOW8Bx3A+iLoBSelre0KK8JwMdteQX6gLiO7YsXQSv5hZDpqTgzAlm2LT+HRAEomVhBwRBuNEoDLfbfQMhZLc6eAKbXnnXpyWgK4WHzY+b4HKDPhiYn24LtpM//ym14wgCuU0PECpvaFpmcGXVW5yvG4g/j9xXCHPSQlcm/PIq+J+2hTkIISl6YQiCcAel9Kxau50d3VBZsTZ05maa4KPXo7MopRyoDS6Pp91lV1pRfiUCydQDJKwhqWijMPzZXVoKlqnBTxLmPTNXw+FDx7Us7EJvb681GgvD1xBCzFrXorAv7FOqATW5qq2GYfhT2qZS3yKQnGEDZLBiOVy22+H1eRbfOUxgNZNqho2RLex9QRB+qKa9r6/v+4SQHWrvJ4TAts0fhFxdyLiTh5fnWOCSzQ7w96QBuXdYAQG73ZetJVaYMyl4IMS0mdbBua4eVSgulwvvwfxJrtvj8fyeUvoftfd1O5ywyr4xpK9ZaTwcKbYG9CQRyIJhCQSz12SHCpmFzZ31CDQf+VQVisfjueB0Oiv9mgkhiwkhX6m9vvVoW9h1qOVTzOCosIVoYUDEgbhkU7aw1199z2czagPtcDj2EkLeUvs75q7ttSHXovwWdREtSgqDAQkfkENFVpg5MXQVtqJyPZw7p25hatnT3QurV9aEtJUz0QT/XiKxKAYk3LLk2cPboWxK6HFl7qxHoaX5VNQwPm79DBbcsyakjZLJJjgntygGJDIQEC1s49xKn70ELtmkVfpWSJFg4H2a7HRrCIznZlvgolW7zxFrWbXPb4b+ZfkJBQJiNvosLHS2PGTb4FsxhS+J++DRh14Nee30VB4+LNSwqDgDaT9kTT4Q80GATVtaoK98WcKBgN0O3bwNSmUWtnDuE3Dsk9MhtwbkN82WZpmgszyCRcUJyIWmSjjQuAzWNywZGiCYa97rhbZVaxIOBOx2GLTa4IU5oXaAtrR310Ffyi0KX4vv0duPESDORh62NRT7YAwpEExb7UX453ObwavDwowAATHr76/0rZSkeqQ5LdUE/9JjUTECOd1YDpsaigIwhhyIP9HCeqO0sFiAgN0OHeU2WJIVDmVxpgnOlhmYFQaADDaZAxYlz2EBRI+FxQoERAvDkzu/pmdmWeDrytjajBaI3KKGLRCphWmtwuIBBMQ8tswGx5bFYFE6gShZ1LAGIrUwtVVYPIFAvFMFyGCTRdWiRgQQv4V99vCaEQ+kt9GkaVEjBojfwuQnkiMJyOkoLGpEAfFnzdYWIPzVhyPOW8qHfuDtynnlzQd9IC4dskdtUSMSiN/CagpXwoJME9TkVSpf/rYPTaIW1LRwqgW2/MWuy6JGLBDMzEn2QDsPTDH7LosMNYxu3ubT4teVNYk3DGPEAZGfzOFZd939lUMGo0nh/gvmNQsk5A6eNXkglO5QXvNA8KaTdBBKp5iSYmFKV4/lWq7JGYL3NB5esSmpFtakdIvYst73lMs1DyTkOak0S0ItTO0hCulzYAxIhMd0lk02R74HHkX67tFnR37MiAGR2WJ3AixMy6K0bPmaPIYo9UPiZGHRWBQDEgUQGgcLi9aiGBAdQKhBC9NjUQyITiBUh4UZsSgGxAAQGoWFGbUoBiQKIA6HQ3HnCEx8vhef85W2gQ/RyR+ke7DyFc1ngdX6YKsshUG59dZbi1pbW4/osTA9FnX8+PGj48ePX8qARLns5ThuwahRoxbu3r27xuPxXIzWwiJZFH6rd//+/btHjx69EPtgQHQA4a7m6NWrVxd3dXX1qFpYV49vQxjMCBbVx/P8Y5K2GRADQHyRlZV1h5aFRUq/RUnanc9x3O/YDDEIBGPs2LE/2rNnzyYtC4tkUWLiZmI3YZsMSAxAxIhoYVoWxXFcGsdx3/U3xoDEDsQXubm5f2xpaWlU2xStubm5Ydy4ccVyi+I4LuT77QxInICIcWNRUVE5buSCcDDx3/PmzbPJZkXAouTBgMQXCCfaT4oMgDTvlFqUPBiQ+APxxw3iRi4pYt4m/p9mjCggSl/Al35DiT9wYTgBMRSJArK2NghkSro1rA+Px3PeyA2qz7W2Z1qy8RQD0qAM5JGapZrbM3V2djqMzJCwDcxefHZ7oKPsmU8B/8EgmyEN8tlRBDPuDm5pWPXcjjAgJ0+e9G9glqcHiF3eUPvnX8KUSdYQKEs2nNRtX99Ey1pbe3VmSGGgxbd/Hr4T6/bt27eI9c2IWiwh5DfyXzzA3Lu7LuwKayw5nIGkx5i7dnyoeJ6Uk5NjFuvL0CVYbc8p7Eg6U4wm7sqgtFUslyQgSlvERrNZcqTEmbFn50HFD1tLS0uTpL5xRn4z42u1DYbRH/GgJf9+eDSJheNWrPJ2HQ6HK4lAuuT9r3t5jyEoOAY4FjgmSjaF6Xa7B7Ozs3lJfdcbEZ2v1Hiisrm5uVFyuSOhEWlLp3hnTU3NRgkM3ftHBsLhcDydDMGEkCuSC4Lx/YkHhaCUpiYLxr59+3ZKYOQZmh3SOHz4cCXu4JZI0XV1dR/ILnskPAgh6xJZk9vtvlBdXV0tu6Rzc1zEW63WaS0tLYeUVl/xgHHdddctkohWvCAY78Bf++no6HgtEbMdD+CyY4a+vXqjjF/PmDGD37lz5zbcobmzs7MbD1Z6BeNqCg/geJVW4b7F7VySo6qqqggHEDWhNgMzYRDHAk/6duzYsVWytJXaVMJ+VQj9b4LGVdZY8nb5fYskBfZ5R4JqSon5mBFlXC+upTPFs848A2LniwfwlGTZVIT4sahllqhNbz154lhkiGOTFBAsWLBgwYIFCxYsWLBgwYIFCxYsWLDgru34PxrqlOizPdNHAAAAAElFTkSuQmCC";
    },
    b0c5: function (e, t, n) {
      "use strict";
      var r = n("520a");
      n("5ca1")(
        { target: "RegExp", proto: !0, forced: r !== /./.exec },
        { exec: r }
      );
    },
    b138: function (e, t, n) {
      /*!
       * Valine v1.5.1
       * (c) 2017-2022 xCss
       * Released under the GPL-2.0 License.
       * Last Update: 2022-7-21 3:43:59 ├F10: PM┤
       */
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        return (function (e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var i = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.i = function (e) {
              return e;
            }),
            (t.d = function (e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (t.n = function (e) {
              var n =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 108))
          );
        })([
          function (e, t, n) {
            "use strict";
            var r = SyntaxError,
              i = Function,
              o = TypeError,
              a = function (e) {
                try {
                  return i('"use strict"; return (' + e + ").constructor;")();
                } catch (e) {}
              },
              s = Object.getOwnPropertyDescriptor;
            if (s)
              try {
                s({}, "");
              } catch (e) {
                s = null;
              }
            var u = function () {
                throw new o();
              },
              l = s
                ? (function () {
                    try {
                      return u;
                    } catch (e) {
                      try {
                        return s(arguments, "callee").get;
                      } catch (e) {
                        return u;
                      }
                    }
                  })()
                : u,
              c = n(22)(),
              f =
                Object.getPrototypeOf ||
                function (e) {
                  return e.__proto__;
                },
              p = {},
              d = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array),
              h = {
                "%AggregateError%":
                  "undefined" == typeof AggregateError
                    ? void 0
                    : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%":
                  "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
                "%ArrayIteratorPrototype%": c
                  ? f([][Symbol.iterator]())
                  : void 0,
                "%AsyncFromSyncIteratorPrototype%": void 0,
                "%AsyncFunction%": p,
                "%AsyncGenerator%": p,
                "%AsyncGeneratorFunction%": p,
                "%AsyncIteratorPrototype%": p,
                "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
                "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
                "%Boolean%": Boolean,
                "%DataView%":
                  "undefined" == typeof DataView ? void 0 : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%":
                  "undefined" == typeof Float32Array ? void 0 : Float32Array,
                "%Float64Array%":
                  "undefined" == typeof Float64Array ? void 0 : Float64Array,
                "%FinalizationRegistry%":
                  "undefined" == typeof FinalizationRegistry
                    ? void 0
                    : FinalizationRegistry,
                "%Function%": i,
                "%GeneratorFunction%": p,
                "%Int8Array%":
                  "undefined" == typeof Int8Array ? void 0 : Int8Array,
                "%Int16Array%":
                  "undefined" == typeof Int16Array ? void 0 : Int16Array,
                "%Int32Array%":
                  "undefined" == typeof Int32Array ? void 0 : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": c ? f(f([][Symbol.iterator]())) : void 0,
                "%JSON%": "object" == typeof JSON ? JSON : void 0,
                "%Map%": "undefined" == typeof Map ? void 0 : Map,
                "%MapIteratorPrototype%":
                  "undefined" != typeof Map && c
                    ? f(new Map()[Symbol.iterator]())
                    : void 0,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
                "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" == typeof Set ? void 0 : Set,
                "%SetIteratorPrototype%":
                  "undefined" != typeof Set && c
                    ? f(new Set()[Symbol.iterator]())
                    : void 0,
                "%SharedArrayBuffer%":
                  "undefined" == typeof SharedArrayBuffer
                    ? void 0
                    : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": c
                  ? f(""[Symbol.iterator]())
                  : void 0,
                "%Symbol%": c ? Symbol : void 0,
                "%SyntaxError%": r,
                "%ThrowTypeError%": l,
                "%TypedArray%": d,
                "%TypeError%": o,
                "%Uint8Array%":
                  "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
                "%Uint8ClampedArray%":
                  "undefined" == typeof Uint8ClampedArray
                    ? void 0
                    : Uint8ClampedArray,
                "%Uint16Array%":
                  "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
                "%Uint32Array%":
                  "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
                "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
                "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
              },
              v = function e(t) {
                var n;
                if ("%AsyncFunction%" === t) n = a("async function () {}");
                else if ("%GeneratorFunction%" === t) n = a("function* () {}");
                else if ("%AsyncGeneratorFunction%" === t)
                  n = a("async function* () {}");
                else if ("%AsyncGenerator%" === t) {
                  var r = e("%AsyncGeneratorFunction%");
                  r && (n = r.prototype);
                } else if ("%AsyncIteratorPrototype%" === t) {
                  var i = e("%AsyncGenerator%");
                  i && (n = f(i.prototype));
                }
                return (h[t] = n), n;
              },
              g = {
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": [
                  "AsyncGeneratorFunction",
                  "prototype",
                  "prototype",
                ],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": [
                  "GeneratorFunction",
                  "prototype",
                  "prototype",
                ],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": [
                  "SharedArrayBuffer",
                  "prototype",
                ],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": [
                  "Uint8ClampedArray",
                  "prototype",
                ],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"],
              },
              m = n(9),
              y = n(25),
              b = m.call(Function.call, Array.prototype.concat),
              w = m.call(Function.apply, Array.prototype.splice),
              D = m.call(Function.call, String.prototype.replace),
              x = m.call(Function.call, String.prototype.slice),
              A =
                /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
              k = /\\(\\)?/g,
              E = function (e) {
                var t = x(e, 0, 1),
                  n = x(e, -1);
                if ("%" === t && "%" !== n)
                  throw new r("invalid intrinsic syntax, expected closing `%`");
                if ("%" === n && "%" !== t)
                  throw new r("invalid intrinsic syntax, expected opening `%`");
                var i = [];
                return (
                  D(e, A, function (e, t, n, r) {
                    i[i.length] = n ? D(r, k, "$1") : t || e;
                  }),
                  i
                );
              },
              C = function (e, t) {
                var n,
                  i = e;
                if (
                  (y(g, i) && ((n = g[i]), (i = "%" + n[0] + "%")), y(h, i))
                ) {
                  var a = h[i];
                  if ((a === p && (a = v(i)), void 0 === a && !t))
                    throw new o(
                      "intrinsic " +
                        e +
                        " exists, but is not available. Please file an issue!"
                    );
                  return { alias: n, name: i, value: a };
                }
                throw new r("intrinsic " + e + " does not exist!");
              };
            e.exports = function (e, t) {
              if ("string" != typeof e || 0 === e.length)
                throw new o("intrinsic name must be a non-empty string");
              if (arguments.length > 1 && "boolean" != typeof t)
                throw new o('"allowMissing" argument must be a boolean');
              var n = E(e),
                i = n.length > 0 ? n[0] : "",
                a = C("%" + i + "%", t),
                u = a.name,
                l = a.value,
                c = !1,
                f = a.alias;
              f && ((i = f[0]), w(n, b([0, 1], f)));
              for (var p = 1, d = !0; p < n.length; p += 1) {
                var v = n[p],
                  g = x(v, 0, 1),
                  m = x(v, -1);
                if (
                  ('"' === g ||
                    "'" === g ||
                    "`" === g ||
                    '"' === m ||
                    "'" === m ||
                    "`" === m) &&
                  g !== m
                )
                  throw new r(
                    "property names with quotes must have matching quotes"
                  );
                if (
                  (("constructor" !== v && d) || (c = !0),
                  (i += "." + v),
                  (u = "%" + i + "%"),
                  y(h, u))
                )
                  l = h[u];
                else if (null != l) {
                  if (!(v in l)) {
                    if (!t)
                      throw new o(
                        "base intrinsic for " +
                          e +
                          " exists, but the property is not available."
                      );
                    return;
                  }
                  if (s && p + 1 >= n.length) {
                    var D = s(l, v);
                    (d = !!D),
                      (l =
                        d && "get" in D && !("originalValue" in D.get)
                          ? D.get
                          : l[v]);
                  } else (d = y(l, v)), (l = l[v]);
                  d && !c && (h[u] = l);
                }
              }
              return l;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = n(4),
              o = i(r("String.prototype.indexOf"));
            e.exports = function (e, t) {
              var n = r(e, !!t);
              return "function" == typeof n && o(e, ".prototype.") > -1
                ? i(n)
                : n;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(88),
              i =
                "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
              o = Object.prototype.toString,
              a = Array.prototype.concat,
              s = Object.defineProperty,
              u = function (e) {
                return (
                  "function" == typeof e && "[object Function]" === o.call(e)
                );
              },
              l =
                s &&
                (function () {
                  var e = {};
                  try {
                    for (var t in (s(e, "x", { enumerable: !1, value: e }), e))
                      return !1;
                    return e.x === e;
                  } catch (e) {
                    return !1;
                  }
                })(),
              c = function (e, t, n, r) {
                (!(t in e) || (u(r) && r())) &&
                  (l
                    ? s(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: n,
                        writable: !0,
                      })
                    : (e[t] = n));
              },
              f = function (e, t) {
                var n = arguments.length > 2 ? arguments[2] : {},
                  o = r(t);
                i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
                for (var s = 0; s < o.length; s += 1)
                  c(e, o[s], t[o[s]], n[o[s]]);
              };
            (f.supportsDescriptors = !!l), (e.exports = f);
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              o = n(85),
              a = r(o),
              s = n(49),
              u = r(s),
              l = n(46),
              c = r(l),
              f = n(48),
              p = r(f),
              d = n(45),
              h = r(d),
              v = document,
              g = navigator,
              m = /[&<>"'`\\]/g,
              y = RegExp(m.source),
              b = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
              w = RegExp(b.source),
              D = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#x60;",
                "\\": "&#x5c;",
              },
              x = {};
            for (var A in D) x[D[A]] = A;
            var k = null;
            Array.prototype.forEach ||
              (Array.prototype.forEach = function (e, t) {
                var n, r;
                if (null == this)
                  throw new TypeError(" this is null or not defined");
                var i = Object(this),
                  o = i.length >>> 0;
                if ("function" != typeof e)
                  throw new TypeError(e + " is not a function");
                for (arguments.length > 1 && (n = t), r = 0; r < o; ) {
                  var a;
                  r in i && ((a = i[r]), e.call(n, a, r, i)), r++;
                }
              }),
              window.NodeList &&
                !NodeList.prototype.forEach &&
                (NodeList.prototype.forEach = Array.prototype.forEach),
              String.prototype.trim ||
                (String.prototype.trim = function () {
                  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
              (0, a.default)(u.default.fn, {
                prepend: function (e) {
                  return (
                    e instanceof HTMLElement || (e = e[0]),
                    this.forEach(function (t) {
                      t.insertAdjacentElement("afterBegin", e);
                    }),
                    this
                  );
                },
                append: function (e) {
                  return (
                    e instanceof HTMLElement || (e = e[0]),
                    this.forEach(function (t) {
                      t.insertAdjacentElement("beforeEnd", e);
                    }),
                    this
                  );
                },
                remove: function () {
                  return (
                    this.forEach(function (e) {
                      try {
                        e.parentNode.removeChild(e);
                      } catch (e) {}
                    }),
                    this
                  );
                },
                find: function (e) {
                  return (0, u.default)(e, this);
                },
                show: function () {
                  return (
                    this.forEach(function (e) {
                      e.style.display = "block";
                    }),
                    this
                  );
                },
                hide: function () {
                  return (
                    this.forEach(function (e) {
                      e.style.display = "none";
                    }),
                    this
                  );
                },
                on: function (e, t, n) {
                  return (
                    u.default.fn.off(e, t, n),
                    this.forEach(function (r) {
                      e.split(" ").forEach(function (e) {
                        r.addEventListener
                          ? r.addEventListener(e, t, n || !1)
                          : r.attachEvent
                          ? r.attachEvent("on" + e, t)
                          : (r["on" + e] = t);
                      });
                    }),
                    this
                  );
                },
                off: function (e, t, n) {
                  return (
                    this.forEach(function (r) {
                      e.split(" ").forEach(function (e) {
                        r.removeEventListener
                          ? r.removeEventListener(e, t, n || !1)
                          : r.detachEvent
                          ? r.detachEvent("on" + e, t)
                          : (r["on" + e] = null);
                      });
                    }),
                    this
                  );
                },
                html: function (e) {
                  return void 0 !== e
                    ? (this.forEach(function (t) {
                        t.innerHTML = e;
                      }),
                      this)
                    : this[0].innerHTML;
                },
                text: function (e) {
                  return void 0 !== e
                    ? (this.forEach(function (t) {
                        t.innerText = e;
                      }),
                      this)
                    : this[0].innerText;
                },
                empty: function (e) {
                  return (
                    (e = e || 0),
                    this.forEach(function (t) {
                      setTimeout(function (e) {
                        t.innerText = "";
                      }, e);
                    }),
                    this
                  );
                },
                val: function (e) {
                  return void 0 !== e
                    ? (this.forEach(function (t) {
                        t.value = e;
                      }),
                      this)
                    : this[0].value || "";
                },
                attr: function () {
                  var e = arguments;
                  if ("object" == i(arguments[0])) {
                    var t = arguments[0],
                      n = this;
                    return (
                      Object.keys(t).forEach(function (e) {
                        n.forEach(function (n) {
                          n.setAttribute(e, t[e]);
                        });
                      }),
                      this
                    );
                  }
                  return "string" == typeof arguments[0] && arguments.length < 2
                    ? this[0].getAttribute(arguments[0]) || ""
                    : (this.forEach(function (t) {
                        t.setAttribute(e[0], e[1]);
                      }),
                      this);
                },
                removeAttr: function (e) {
                  return (
                    this.forEach(function (t) {
                      var n,
                        r = 0,
                        i = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                      if (i && 1 === t.nodeType)
                        for (; (n = i[r++]); ) t.removeAttribute(n);
                    }),
                    this
                  );
                },
                hasClass: function (e) {
                  return (
                    !!this[0] &&
                    new RegExp("(\\s|^)" + e + "(\\s|$)").test(
                      this[0].getAttribute("class")
                    )
                  );
                },
                addClass: function (e) {
                  return (
                    this.forEach(function (t) {
                      var n = (0, u.default)(t),
                        r = n.attr("class");
                      n.hasClass(e) || n.attr("class", (r += " " + e));
                    }),
                    this
                  );
                },
                removeClass: function (e) {
                  return (
                    this.forEach(function (t) {
                      var n = (0, u.default)(t),
                        r = n.attr("class");
                      if (n.hasClass(e)) {
                        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        n.attr("class", r.replace(i, ""));
                      }
                    }),
                    this
                  );
                },
              }),
              (0, a.default)(u.default, {
                extend: a.default,
                noop: function () {},
                navi: g,
                ua: g.userAgent,
                lang: g.language || g.languages[0],
                detect: c.default,
                store: p.default,
                escape: function (e) {
                  return e && y.test(e)
                    ? e.replace(m, function (e) {
                        return D[e];
                      })
                    : e;
                },
                unescape: function (e) {
                  return e && w.test(e)
                    ? e.replace(b, function (e) {
                        return x[e];
                      })
                    : e;
                },
                dynamicLoadSource: function (e, t) {
                  if ((0, u.default)('script[src="' + e + '"]').length)
                    t && t();
                  else {
                    var n = v.createElement("script");
                    (n.onload = n.onreadystatechange =
                      function () {
                        var e = this;
                        (e.onload = e.onreadystatechange = null),
                          t && t(),
                          (0, u.default)(n).remove();
                      }),
                      (n.async = !0),
                      n.setAttribute("referrerPolicy", "no-referrer"),
                      (0, u.default)("head")[0].appendChild(n),
                      (n.src = e);
                  }
                },
                sdkLoader: function (e, t, n) {
                  t in window && window[t]
                    ? (k && clearTimeout(k), n && n())
                    : u.default.dynamicLoadSource(e, function () {
                        k = setTimeout(u.default.sdkLoader(e, t, n), 100);
                      });
                },
                deleteInWin: function (e, t) {
                  var n = function (t) {
                    if (e in window)
                      try {
                        delete window[e];
                      } catch (t) {
                        window[e] = null;
                      }
                  };
                  0 === t ? n() : setTimeout(n, t || 500);
                },
                ajax: h.default,
              }),
              (t.default = u.default);
          },
          function (e, t, n) {
            "use strict";
            var r = n(9),
              i = n(0),
              o = i("%Function.prototype.apply%"),
              a = i("%Function.prototype.call%"),
              s = i("%Reflect.apply%", !0) || r.call(a, o),
              u = i("%Object.getOwnPropertyDescriptor%", !0),
              l = i("%Object.defineProperty%", !0),
              c = i("%Math.max%");
            if (l)
              try {
                l({}, "a", { value: 1 });
              } catch (e) {
                l = null;
              }
            e.exports = function (e) {
              var t = s(r, a, arguments);
              return (
                u &&
                  l &&
                  u(t, "length").configurable &&
                  l(t, "length", {
                    value: 1 + c(0, e.length - (arguments.length - 1)),
                  }),
                t
              );
            };
            var f = function () {
              return s(r, o, arguments);
            };
            l ? l(e.exports, "apply", { value: f }) : (e.exports.apply = f);
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(62);
          },
          function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.DEFAULT_EMOJI_CDN =
                "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/"),
              (t.DB_NAME = "Comment"),
              (t.CONFIG = {
                lang: "zh-CN",
                langMode: null,
                appId: "",
                appKey: "",
                clazzName: "Comment",
                meta: ["nick", "mail", "link"],
                path: location.pathname,
                placeholder: "Just Go Go",
                pageSize: 10,
                recordIP: !0,
                serverURLs: "",
                visitor: !1,
                mathJax: !1,
                emojiCDN: "",
                emojiMaps: void 0,
                enableQQ: !1,
                requiredFields: [],
              }),
              (t.defaultMeta = ["nick", "mail", "link"]),
              (t.QQCacheKey = "_v_Cache_Q"),
              (t.MetaCacheKey = "_v_Cache_Meta"),
              (t.RandomStr = function (e) {
                return (Date.now() + Math.round(1e3 * Math.random())).toString(
                  32
                );
              }),
              (t.VERSION = "1.5.1");
          },
          function (e, t, n) {
            function r(e, t) {
              return new o(t).process(e);
            }
            var i = n(16),
              o = n(50);
            for (var a in ((t = e.exports = r), (t.FilterCSS = o), i))
              t[a] = i[a];
            "undefined" != typeof window && (window.filterCSS = e.exports);
          },
          function (e, t, n) {
            "use strict";
            var r = n(66);
            e.exports = function (e) {
              return "symbol" == typeof e
                ? "Symbol"
                : "bigint" == typeof e
                ? "BigInt"
                : r(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(78);
            e.exports = Function.prototype.bind || r;
          },
          function (e, t, n) {
            "use strict";
            var r,
              i,
              o = Function.prototype.toString,
              a =
                "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if (
              "function" == typeof a &&
              "function" == typeof Object.defineProperty
            )
              try {
                (r = Object.defineProperty({}, "length", {
                  get: function () {
                    throw i;
                  },
                })),
                  (i = {}),
                  a(
                    function () {
                      throw 42;
                    },
                    null,
                    r
                  );
              } catch (e) {
                e !== i && (a = null);
              }
            else a = null;
            var s = /^\s*class\b/,
              u = function (e) {
                try {
                  var t = o.call(e);
                  return s.test(t);
                } catch (e) {
                  return !1;
                }
              },
              l = function (e) {
                try {
                  return !u(e) && (o.call(e), !0);
                } catch (e) {
                  return !1;
                }
              },
              c = Object.prototype.toString,
              f = "function" == typeof Symbol && !!Symbol.toStringTag,
              p =
                "object" == typeof document &&
                void 0 === document.all &&
                void 0 !== document.all
                  ? document.all
                  : {};
            e.exports = a
              ? function (e) {
                  if (e === p) return !0;
                  if (!e) return !1;
                  if ("function" != typeof e && "object" != typeof e) return !1;
                  if ("function" == typeof e && !e.prototype) return !0;
                  try {
                    a(e, null, r);
                  } catch (e) {
                    if (e !== i) return !1;
                  }
                  return !u(e);
                }
              : function (e) {
                  if (e === p) return !0;
                  if (!e) return !1;
                  if ("function" != typeof e && "object" != typeof e) return !1;
                  if ("function" == typeof e && !e.prototype) return !0;
                  if (f) return l(e);
                  if (u(e)) return !1;
                  var t = c.call(e);
                  return (
                    "[object Function]" === t ||
                    "[object GeneratorFunction]" === t
                  );
                };
          },
          function (e, t) {
            e.exports = {
              indexOf: function (e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
              },
              forEach: function (e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
              },
              trim: function (e) {
                return String.prototype.trim
                  ? e.trim()
                  : e.replace(/(^\s*)|(\s*$)/g, "");
              },
              spaceIndex: function (e) {
                var t = /\s|\n|\t/,
                  n = t.exec(e);
                return n ? n.index : -1;
              },
            };
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(6),
              i = {
                cdn: r.DEFAULT_EMOJI_CDN,
                maps: n(97),
                parse: function (e, t) {
                  return String(e).replace(
                    new RegExp(
                      ":(" + Object.keys(i.maps).join("|") + "):",
                      "ig"
                    ),
                    function (e, n) {
                      return i.maps[n] ? i.build(n, t) : e;
                    }
                  );
                },
                build: function (e, t) {
                  var n = /^(https?:)?\/\//i,
                    r = i.maps[e],
                    o = n.test(r) ? r : i.cdn + r,
                    a =
                      ' <img alt="' +
                      e +
                      '" referrerpolicy="no-referrer" class="vemoji" src="' +
                      o +
                      '" />';
                  return n.test(o) ? a : "";
                },
              };
            t.default = i;
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(95),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r);
            t.default = function (e) {
              return (0, i.default)(e, {
                onTagAttr: function (e, t, n, r) {
                  return o(e, t, n, r);
                },
                onIgnoreTagAttr: function (e, t, n, r) {
                  return o(e, t, n, r);
                },
              }).replace(/\<\/?div\>/gi, "");
            };
            var o = function (e, t, n, r) {
              if (/video|audio/i.test(e)) return "";
              if (/code|pre|span/i.test(e)) {
                if ("style" == t) {
                  var o = n.match(/color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi);
                  return o && o.length ? 'style="' + o[0] + '"' : "";
                }
                if ("class" == t)
                  return t + "='" + i.default.escapeAttrValue(n) + "'";
              }
              return "a" === e && "class" == t && "at" === n
                ? t + "='" + i.default.escapeAttrValue(n) + "'"
                : "img" === e && /src|class/i.test(t)
                ? t +
                  "='" +
                  i.default.escapeAttrValue(n) +
                  "' referrerPolicy='no-referrer'"
                : void 0;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = n(1),
              o = r("%TypeError%"),
              a = n(52),
              s = n(18),
              u = n(53),
              l = n(55),
              c = n(56),
              f = n(60),
              p = n(20),
              d = n(81),
              h = i("String.prototype.split"),
              v = Object("a"),
              g = "a" !== v[0] || !(0 in v);
            e.exports = function (e) {
              var t,
                n = f(this),
                r = g && d(this) ? h(this, "") : n,
                i = c(r);
              if (!l(e))
                throw new o(
                  "Array.prototype.forEach callback must be a function"
                );
              arguments.length > 1 && (t = arguments[1]);
              for (var v = 0; v < i; ) {
                var m = p(v);
                if (u(r, m)) {
                  var y = s(r, m);
                  a(e, t, [y, v, r]);
                }
                v += 1;
              }
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(75),
              i = n(14);
            e.exports = function () {
              var e = Array.prototype.forEach;
              return r(e) ? e : i;
            };
          },
          function (e, t) {
            function n() {
              var e = {
                "align-content": !1,
                "align-items": !1,
                "align-self": !1,
                "alignment-adjust": !1,
                "alignment-baseline": !1,
                all: !1,
                "anchor-point": !1,
                animation: !1,
                "animation-delay": !1,
                "animation-direction": !1,
                "animation-duration": !1,
                "animation-fill-mode": !1,
                "animation-iteration-count": !1,
                "animation-name": !1,
                "animation-play-state": !1,
                "animation-timing-function": !1,
                azimuth: !1,
                "backface-visibility": !1,
                background: !0,
                "background-attachment": !0,
                "background-clip": !0,
                "background-color": !0,
                "background-image": !0,
                "background-origin": !0,
                "background-position": !0,
                "background-repeat": !0,
                "background-size": !0,
                "baseline-shift": !1,
                binding: !1,
                bleed: !1,
                "bookmark-label": !1,
                "bookmark-level": !1,
                "bookmark-state": !1,
                border: !0,
                "border-bottom": !0,
                "border-bottom-color": !0,
                "border-bottom-left-radius": !0,
                "border-bottom-right-radius": !0,
                "border-bottom-style": !0,
                "border-bottom-width": !0,
                "border-collapse": !0,
                "border-color": !0,
                "border-image": !0,
                "border-image-outset": !0,
                "border-image-repeat": !0,
                "border-image-slice": !0,
                "border-image-source": !0,
                "border-image-width": !0,
                "border-left": !0,
                "border-left-color": !0,
                "border-left-style": !0,
                "border-left-width": !0,
                "border-radius": !0,
                "border-right": !0,
                "border-right-color": !0,
                "border-right-style": !0,
                "border-right-width": !0,
                "border-spacing": !0,
                "border-style": !0,
                "border-top": !0,
                "border-top-color": !0,
                "border-top-left-radius": !0,
                "border-top-right-radius": !0,
                "border-top-style": !0,
                "border-top-width": !0,
                "border-width": !0,
                bottom: !1,
                "box-decoration-break": !0,
                "box-shadow": !0,
                "box-sizing": !0,
                "box-snap": !0,
                "box-suppress": !0,
                "break-after": !0,
                "break-before": !0,
                "break-inside": !0,
                "caption-side": !1,
                chains: !1,
                clear: !0,
                clip: !1,
                "clip-path": !1,
                "clip-rule": !1,
                color: !0,
                "color-interpolation-filters": !0,
                "column-count": !1,
                "column-fill": !1,
                "column-gap": !1,
                "column-rule": !1,
                "column-rule-color": !1,
                "column-rule-style": !1,
                "column-rule-width": !1,
                "column-span": !1,
                "column-width": !1,
                columns: !1,
                contain: !1,
                content: !1,
                "counter-increment": !1,
                "counter-reset": !1,
                "counter-set": !1,
                crop: !1,
                cue: !1,
                "cue-after": !1,
                "cue-before": !1,
                cursor: !1,
                direction: !1,
                display: !0,
                "display-inside": !0,
                "display-list": !0,
                "display-outside": !0,
                "dominant-baseline": !1,
                elevation: !1,
                "empty-cells": !1,
                filter: !1,
                flex: !1,
                "flex-basis": !1,
                "flex-direction": !1,
                "flex-flow": !1,
                "flex-grow": !1,
                "flex-shrink": !1,
                "flex-wrap": !1,
                float: !1,
                "float-offset": !1,
                "flood-color": !1,
                "flood-opacity": !1,
                "flow-from": !1,
                "flow-into": !1,
                font: !0,
                "font-family": !0,
                "font-feature-settings": !0,
                "font-kerning": !0,
                "font-language-override": !0,
                "font-size": !0,
                "font-size-adjust": !0,
                "font-stretch": !0,
                "font-style": !0,
                "font-synthesis": !0,
                "font-variant": !0,
                "font-variant-alternates": !0,
                "font-variant-caps": !0,
                "font-variant-east-asian": !0,
                "font-variant-ligatures": !0,
                "font-variant-numeric": !0,
                "font-variant-position": !0,
                "font-weight": !0,
                grid: !1,
                "grid-area": !1,
                "grid-auto-columns": !1,
                "grid-auto-flow": !1,
                "grid-auto-rows": !1,
                "grid-column": !1,
                "grid-column-end": !1,
                "grid-column-start": !1,
                "grid-row": !1,
                "grid-row-end": !1,
                "grid-row-start": !1,
                "grid-template": !1,
                "grid-template-areas": !1,
                "grid-template-columns": !1,
                "grid-template-rows": !1,
                "hanging-punctuation": !1,
                height: !0,
                hyphens: !1,
                icon: !1,
                "image-orientation": !1,
                "image-resolution": !1,
                "ime-mode": !1,
                "initial-letters": !1,
                "inline-box-align": !1,
                "justify-content": !1,
                "justify-items": !1,
                "justify-self": !1,
                left: !1,
                "letter-spacing": !0,
                "lighting-color": !0,
                "line-box-contain": !1,
                "line-break": !1,
                "line-grid": !1,
                "line-height": !1,
                "line-snap": !1,
                "line-stacking": !1,
                "line-stacking-ruby": !1,
                "line-stacking-shift": !1,
                "line-stacking-strategy": !1,
                "list-style": !0,
                "list-style-image": !0,
                "list-style-position": !0,
                "list-style-type": !0,
                margin: !0,
                "margin-bottom": !0,
                "margin-left": !0,
                "margin-right": !0,
                "margin-top": !0,
                "marker-offset": !1,
                "marker-side": !1,
                marks: !1,
                mask: !1,
                "mask-box": !1,
                "mask-box-outset": !1,
                "mask-box-repeat": !1,
                "mask-box-slice": !1,
                "mask-box-source": !1,
                "mask-box-width": !1,
                "mask-clip": !1,
                "mask-image": !1,
                "mask-origin": !1,
                "mask-position": !1,
                "mask-repeat": !1,
                "mask-size": !1,
                "mask-source-type": !1,
                "mask-type": !1,
                "max-height": !0,
                "max-lines": !1,
                "max-width": !0,
                "min-height": !0,
                "min-width": !0,
                "move-to": !1,
                "nav-down": !1,
                "nav-index": !1,
                "nav-left": !1,
                "nav-right": !1,
                "nav-up": !1,
                "object-fit": !1,
                "object-position": !1,
                opacity: !1,
                order: !1,
                orphans: !1,
                outline: !1,
                "outline-color": !1,
                "outline-offset": !1,
                "outline-style": !1,
                "outline-width": !1,
                overflow: !1,
                "overflow-wrap": !1,
                "overflow-x": !1,
                "overflow-y": !1,
                padding: !0,
                "padding-bottom": !0,
                "padding-left": !0,
                "padding-right": !0,
                "padding-top": !0,
                page: !1,
                "page-break-after": !1,
                "page-break-before": !1,
                "page-break-inside": !1,
                "page-policy": !1,
                pause: !1,
                "pause-after": !1,
                "pause-before": !1,
                perspective: !1,
                "perspective-origin": !1,
                pitch: !1,
                "pitch-range": !1,
                "play-during": !1,
                position: !1,
                "presentation-level": !1,
                quotes: !1,
                "region-fragment": !1,
                resize: !1,
                rest: !1,
                "rest-after": !1,
                "rest-before": !1,
                richness: !1,
                right: !1,
                rotation: !1,
                "rotation-point": !1,
                "ruby-align": !1,
                "ruby-merge": !1,
                "ruby-position": !1,
                "shape-image-threshold": !1,
                "shape-outside": !1,
                "shape-margin": !1,
                size: !1,
                speak: !1,
                "speak-as": !1,
                "speak-header": !1,
                "speak-numeral": !1,
                "speak-punctuation": !1,
                "speech-rate": !1,
                stress: !1,
                "string-set": !1,
                "tab-size": !1,
                "table-layout": !1,
                "text-align": !0,
                "text-align-last": !0,
                "text-combine-upright": !0,
                "text-decoration": !0,
                "text-decoration-color": !0,
                "text-decoration-line": !0,
                "text-decoration-skip": !0,
                "text-decoration-style": !0,
                "text-emphasis": !0,
                "text-emphasis-color": !0,
                "text-emphasis-position": !0,
                "text-emphasis-style": !0,
                "text-height": !0,
                "text-indent": !0,
                "text-justify": !0,
                "text-orientation": !0,
                "text-overflow": !0,
                "text-shadow": !0,
                "text-space-collapse": !0,
                "text-transform": !0,
                "text-underline-position": !0,
                "text-wrap": !0,
                top: !1,
                transform: !1,
                "transform-origin": !1,
                "transform-style": !1,
                transition: !1,
                "transition-delay": !1,
                "transition-duration": !1,
                "transition-property": !1,
                "transition-timing-function": !1,
                "unicode-bidi": !1,
                "vertical-align": !1,
                visibility: !1,
                "voice-balance": !1,
                "voice-duration": !1,
                "voice-family": !1,
                "voice-pitch": !1,
                "voice-range": !1,
                "voice-rate": !1,
                "voice-stress": !1,
                "voice-volume": !1,
                volume: !1,
                "white-space": !1,
                widows: !1,
                width: !0,
                "will-change": !1,
                "word-break": !0,
                "word-spacing": !0,
                "word-wrap": !0,
                "wrap-flow": !1,
                "wrap-through": !1,
                "writing-mode": !1,
                "z-index": !1,
              };
              return e;
            }
            function r(e, t, n) {}
            function i(e, t, n) {}
            function o(e, t) {
              return a.test(t) ? "" : t;
            }
            var a = /javascript\s*\:/gim;
            (t.whiteList = n()),
              (t.getDefaultWhiteList = n),
              (t.onAttr = r),
              (t.onIgnoreAttr = i),
              (t.safeAttrValue = o);
          },
          function (e, t) {
            e.exports = {
              indexOf: function (e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
              },
              forEach: function (e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
              },
              trim: function (e) {
                return String.prototype.trim
                  ? e.trim()
                  : e.replace(/(^\s*)|(\s*$)/g, "");
              },
              trimRight: function (e) {
                return String.prototype.trimRight
                  ? e.trimRight()
                  : e.replace(/(\s*$)/g, "");
              },
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%TypeError%"),
              o = n(86),
              a = n(19),
              s = n(8);
            e.exports = function (e, t) {
              if ("Object" !== s(e))
                throw new i("Assertion failed: Type(O) is not Object");
              if (!a(t))
                throw new i(
                  "Assertion failed: IsPropertyKey(P) is not true, got " + o(t)
                );
              return e[t];
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return "string" == typeof e || "symbol" == typeof e;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%String%"),
              o = r("%TypeError%");
            e.exports = function (e) {
              if ("symbol" == typeof e)
                throw new o("Cannot convert a Symbol value to a string");
              return i(e);
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return (
                null === e || ("function" != typeof e && "object" != typeof e)
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = "undefined" != typeof Symbol && Symbol,
              i = n(23);
            e.exports = function () {
              return (
                "function" == typeof r &&
                "function" == typeof Symbol &&
                "symbol" == typeof r("foo") &&
                "symbol" == typeof Symbol("bar") &&
                i()
              );
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function () {
              if (
                "function" != typeof Symbol ||
                "function" != typeof Object.getOwnPropertySymbols
              )
                return !1;
              if ("symbol" == typeof Symbol.iterator) return !0;
              var e = {},
                t = Symbol("test"),
                n = Object(t);
              if ("string" == typeof t) return !1;
              if ("[object Symbol]" !== Object.prototype.toString.call(t))
                return !1;
              if ("[object Symbol]" !== Object.prototype.toString.call(n))
                return !1;
              for (t in ((e[t] = 42), e)) return !1;
              if (
                "function" == typeof Object.keys &&
                0 !== Object.keys(e).length
              )
                return !1;
              if (
                "function" == typeof Object.getOwnPropertyNames &&
                0 !== Object.getOwnPropertyNames(e).length
              )
                return !1;
              var r = Object.getOwnPropertySymbols(e);
              if (1 !== r.length || r[0] !== t) return !1;
              if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
              if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var i = Object.getOwnPropertyDescriptor(e, t);
                if (42 !== i.value || !0 !== i.enumerable) return !1;
              }
              return !0;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(23);
            e.exports = function () {
              return r() && !!Symbol.toStringTag;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(9);
            e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
          },
          function (e, t, n) {
            "use strict";
            var r = Object.prototype.toString;
            e.exports = function (e) {
              var t = r.call(e),
                n = "[object Arguments]" === t;
              return (
                n ||
                  (n =
                    "[object Array]" !== t &&
                    null !== e &&
                    "object" == typeof e &&
                    "number" == typeof e.length &&
                    e.length >= 0 &&
                    "[object Function]" === r.call(e.callee)),
                n
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(5),
              i = n(1),
              o = i("Object.prototype.propertyIsEnumerable"),
              a = i("Array.prototype.push");
            e.exports = function (e) {
              var t = r(e),
                n = [];
              for (var i in t) o(t, i) && a(n, [i, t[i]]);
              return n;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(27);
            e.exports = function () {
              return "function" == typeof Object.entries ? Object.entries : r;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(5),
              i = n(20),
              o = n(1),
              a = o("String.prototype.replace"),
              s =
                /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
              u =
                /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
            e.exports = function () {
              var e = i(r(this));
              return a(a(e, s, ""), u, "");
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(29),
              i = "​";
            e.exports = function () {
              return String.prototype.trim && i.trim() === i
                ? String.prototype.trim
                : r;
            };
          },
          function (e, t, n) {
            function r() {
              return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: [
                  "autoplay",
                  "controls",
                  "crossorigin",
                  "loop",
                  "muted",
                  "preload",
                  "src",
                ],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                figcaption: [],
                figure: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                summary: [],
                sup: [],
                strong: [],
                strike: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: [
                  "autoplay",
                  "controls",
                  "crossorigin",
                  "loop",
                  "muted",
                  "playsinline",
                  "poster",
                  "preload",
                  "src",
                  "height",
                  "width",
                ],
              };
            }
            function i(e, t, n) {}
            function o(e, t, n) {}
            function a(e, t, n) {}
            function s(e, t, n) {}
            function u(e) {
              return e.replace(E, "&lt;").replace(C, "&gt;");
            }
            function l(e, t, n, r) {
              if (((n = v(n)), "href" === t || "src" === t)) {
                if ("#" === (n = A.trim(n))) return "#";
                if (
                  "http://" !== n.substr(0, 7) &&
                  "https://" !== n.substr(0, 8) &&
                  "mailto:" !== n.substr(0, 7) &&
                  "tel:" !== n.substr(0, 4) &&
                  "data:image/" !== n.substr(0, 11) &&
                  "ftp://" !== n.substr(0, 6) &&
                  "./" !== n.substr(0, 2) &&
                  "../" !== n.substr(0, 3) &&
                  "#" !== n[0] &&
                  "/" !== n[0]
                )
                  return "";
              } else if ("background" === t) {
                if (((j.lastIndex = 0), j.test(n))) return "";
              } else if ("style" === t) {
                if (((I.lastIndex = 0), I.test(n))) return "";
                if (
                  ((T.lastIndex = 0),
                  T.test(n) && ((j.lastIndex = 0), j.test(n)))
                )
                  return "";
                !1 !== r && ((r = r || k), (n = r.process(n)));
              }
              return g(n);
            }
            function c(e) {
              return e.replace(F, "&quot;");
            }
            function f(e) {
              return e.replace(S, '"');
            }
            function p(e) {
              return e.replace(_, function (e, t) {
                return "x" === t[0] || "X" === t[0]
                  ? String.fromCharCode(parseInt(t.substr(1), 16))
                  : String.fromCharCode(parseInt(t, 10));
              });
            }
            function d(e) {
              return e.replace(O, ":").replace(B, " ");
            }
            function h(e) {
              for (var t = "", n = 0, r = e.length; n < r; n++)
                t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
              return A.trim(t);
            }
            function v(e) {
              return (e = f(e)), (e = p(e)), (e = d(e)), h(e);
            }
            function g(e) {
              return (e = c(e)), u(e);
            }
            function m() {
              return "";
            }
            function y(e, t) {
              function n(t) {
                return !!r || -1 !== A.indexOf(e, t);
              }
              "function" != typeof t && (t = function () {});
              var r = !Array.isArray(e),
                i = [],
                o = !1;
              return {
                onIgnoreTag: function (e, r, a) {
                  if (n(e)) {
                    if (a.isClosing) {
                      var s = "[/removed]",
                        u = a.position + s.length;
                      return (
                        i.push([!1 !== o ? o : a.position, u]), (o = !1), s
                      );
                    }
                    return o || (o = a.position), "[removed]";
                  }
                  return t(e, r, a);
                },
                remove: function (e) {
                  var t = "",
                    n = 0;
                  return (
                    A.forEach(i, function (r) {
                      (t += e.slice(n, r[0])), (n = r[1]);
                    }),
                    (t += e.slice(n))
                  );
                },
              };
            }
            function b(e) {
              for (var t = "", n = 0; n < e.length; ) {
                var r = e.indexOf("\x3c!--", n);
                if (-1 === r) {
                  t += e.slice(n);
                  break;
                }
                t += e.slice(n, r);
                var i = e.indexOf("--\x3e", r);
                if (-1 === i) break;
                n = i + 3;
              }
              return t;
            }
            function w(e) {
              var t = e.split("");
              return (
                (t = t.filter(function (e) {
                  var t = e.charCodeAt(0);
                  return 127 !== t && (!(t <= 31) || 10 === t || 13 === t);
                })),
                t.join("")
              );
            }
            var D = n(7).FilterCSS,
              x = n(7).getDefaultWhiteList,
              A = n(11),
              k = new D(),
              E = /</g,
              C = />/g,
              F = /"/g,
              S = /&quot;/g,
              _ = /&#([a-zA-Z0-9]*);?/gim,
              O = /&colon;?/gim,
              B = /&newline;?/gim,
              j =
                /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
              I = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
              T = /u\s*r\s*l\s*\(.*/gi;
            (t.whiteList = r()),
              (t.getDefaultWhiteList = r),
              (t.onTag = i),
              (t.onIgnoreTag = o),
              (t.onTagAttr = a),
              (t.onIgnoreTagAttr = s),
              (t.safeAttrValue = l),
              (t.escapeHtml = u),
              (t.escapeQuote = c),
              (t.unescapeQuote = f),
              (t.escapeHtmlEntities = p),
              (t.escapeDangerHtml5Entities = d),
              (t.clearNonPrintableCharacter = h),
              (t.friendlyAttrValue = v),
              (t.escapeAttrValue = g),
              (t.onIgnoreTagStripAll = m),
              (t.StripTagBody = y),
              (t.stripCommentTag = b),
              (t.stripBlankChar = w),
              (t.cssFilter = k),
              (t.getDefaultCSSWhiteList = x);
          },
          function (e, t, n) {
            function r(e) {
              var t = f.spaceIndex(e);
              if (-1 === t) var n = e.slice(1, -1);
              else n = e.slice(1, t + 1);
              return (
                (n = f.trim(n).toLowerCase()),
                "/" === n.slice(0, 1) && (n = n.slice(1)),
                "/" === n.slice(-1) && (n = n.slice(0, -1)),
                n
              );
            }
            function i(e) {
              return "</" === e.slice(0, 2);
            }
            function o(e, t, n) {
              "use strict";
              var o = "",
                a = 0,
                s = !1,
                u = !1,
                l = 0,
                c = e.length,
                f = "",
                p = "";
              e: for (l = 0; l < c; l++) {
                var d = e.charAt(l);
                if (!1 === s) {
                  if ("<" === d) {
                    s = l;
                    continue;
                  }
                } else if (!1 === u) {
                  if ("<" === d) {
                    (o += n(e.slice(a, l))), (s = l), (a = l);
                    continue;
                  }
                  if (">" === d) {
                    (o += n(e.slice(a, s))),
                      (p = e.slice(s, l + 1)),
                      (f = r(p)),
                      (o += t(s, o.length, f, p, i(p))),
                      (a = l + 1),
                      (s = !1);
                    continue;
                  }
                  if ('"' === d || "'" === d)
                    for (
                      var h = 1, v = e.charAt(l - h);
                      "" === v.trim() || "=" === v;

                    ) {
                      if ("=" === v) {
                        u = d;
                        continue e;
                      }
                      v = e.charAt(l - ++h);
                    }
                } else if (d === u) {
                  u = !1;
                  continue;
                }
              }
              return a < e.length && (o += n(e.substr(a))), o;
            }
            function a(e, t) {
              "use strict";
              function n(e, n) {
                if (
                  ((e = f.trim(e)),
                  (e = e.replace(p, "").toLowerCase()),
                  !(e.length < 1))
                ) {
                  var r = t(e, n || "");
                  r && i.push(r);
                }
              }
              for (var r = 0, i = [], o = !1, a = e.length, l = 0; l < a; l++) {
                var d,
                  h,
                  v = e.charAt(l);
                if (!1 !== o || "=" !== v)
                  if (
                    !1 === o ||
                    l !== r ||
                    ('"' !== v && "'" !== v) ||
                    "=" !== e.charAt(l - 1)
                  ) {
                    if (/\s|\n|\t/.test(v)) {
                      if (((e = e.replace(/\s|\n|\t/g, " ")), !1 === o)) {
                        if (-1 === (h = s(e, l))) {
                          (d = f.trim(e.slice(r, l))),
                            n(d),
                            (o = !1),
                            (r = l + 1);
                          continue;
                        }
                        l = h - 1;
                        continue;
                      }
                      if (-1 === (h = u(e, l - 1))) {
                        (d = f.trim(e.slice(r, l))),
                          (d = c(d)),
                          n(o, d),
                          (o = !1),
                          (r = l + 1);
                        continue;
                      }
                    }
                  } else {
                    if (-1 === (h = e.indexOf(v, l + 1))) break;
                    (d = f.trim(e.slice(r + 1, h))),
                      n(o, d),
                      (o = !1),
                      (l = h),
                      (r = l + 1);
                  }
                else (o = e.slice(r, l)), (r = l + 1);
              }
              return (
                r < e.length &&
                  (!1 === o ? n(e.slice(r)) : n(o, c(f.trim(e.slice(r))))),
                f.trim(i.join(" "))
              );
            }
            function s(e, t) {
              for (; t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
              }
            }
            function u(e, t) {
              for (; t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
              }
            }
            function l(e) {
              return (
                ('"' === e[0] && '"' === e[e.length - 1]) ||
                ("'" === e[0] && "'" === e[e.length - 1])
              );
            }
            function c(e) {
              return l(e) ? e.substr(1, e.length - 2) : e;
            }
            var f = n(11),
              p = /[^a-zA-Z0-9_:\.\-]/gim;
            (t.parseTag = o), (t.parseAttr = a);
          },
          function (e, t, n) {
            var r, i, o;
            /*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/ !(function (n, a) {
              (i = [e, t]),
                (r = a),
                void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) &&
                  (e.exports = o);
            })(0, function (e, t) {
              "use strict";
              function n(e) {
                function t(t) {
                  var n = e.style.width;
                  (e.style.width = "0px"),
                    e.offsetWidth,
                    (e.style.width = n),
                    (e.style.overflowY = t);
                }
                function n(e) {
                  for (
                    var t = [];
                    e && e.parentNode && e.parentNode instanceof Element;

                  )
                    e.parentNode.scrollTop &&
                      t.push({
                        node: e.parentNode,
                        scrollTop: e.parentNode.scrollTop,
                      }),
                      (e = e.parentNode);
                  return t;
                }
                function r() {
                  if (0 !== e.scrollHeight) {
                    var t = n(e),
                      r =
                        document.documentElement &&
                        document.documentElement.scrollTop;
                    (e.style.height = ""),
                      (e.style.height = e.scrollHeight + s + "px"),
                      (u = e.clientWidth),
                      t.forEach(function (e) {
                        e.node.scrollTop = e.scrollTop;
                      }),
                      r && (document.documentElement.scrollTop = r);
                  }
                }
                function i() {
                  r();
                  var n = Math.round(parseFloat(e.style.height)),
                    i = window.getComputedStyle(e, null),
                    o =
                      "content-box" === i.boxSizing
                        ? Math.round(parseFloat(i.height))
                        : e.offsetHeight;
                  if (
                    (o < n
                      ? "hidden" === i.overflowY &&
                        (t("scroll"),
                        r(),
                        (o =
                          "content-box" === i.boxSizing
                            ? Math.round(
                                parseFloat(
                                  window.getComputedStyle(e, null).height
                                )
                              )
                            : e.offsetHeight))
                      : "hidden" !== i.overflowY &&
                        (t("hidden"),
                        r(),
                        (o =
                          "content-box" === i.boxSizing
                            ? Math.round(
                                parseFloat(
                                  window.getComputedStyle(e, null).height
                                )
                              )
                            : e.offsetHeight)),
                    l !== o)
                  ) {
                    l = o;
                    var s = a("autosize:resized");
                    try {
                      e.dispatchEvent(s);
                    } catch (e) {}
                  }
                }
                if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                  var s = null,
                    u = null,
                    l = null,
                    c = function () {
                      e.clientWidth !== u && i();
                    },
                    f = function (t) {
                      window.removeEventListener("resize", c, !1),
                        e.removeEventListener("input", i, !1),
                        e.removeEventListener("keyup", i, !1),
                        e.removeEventListener("autosize:destroy", f, !1),
                        e.removeEventListener("autosize:update", i, !1),
                        Object.keys(t).forEach(function (n) {
                          e.style[n] = t[n];
                        }),
                        o.delete(e);
                    }.bind(e, {
                      height: e.style.height,
                      resize: e.style.resize,
                      overflowY: e.style.overflowY,
                      overflowX: e.style.overflowX,
                      wordWrap: e.style.wordWrap,
                    });
                  e.addEventListener("autosize:destroy", f, !1),
                    "onpropertychange" in e &&
                      "oninput" in e &&
                      e.addEventListener("keyup", i, !1),
                    window.addEventListener("resize", c, !1),
                    e.addEventListener("input", i, !1),
                    e.addEventListener("autosize:update", i, !1),
                    (e.style.overflowX = "hidden"),
                    (e.style.wordWrap = "break-word"),
                    o.set(e, { destroy: f, update: i }),
                    (function () {
                      var t = window.getComputedStyle(e, null);
                      "vertical" === t.resize
                        ? (e.style.resize = "none")
                        : "both" === t.resize &&
                          (e.style.resize = "horizontal"),
                        (s =
                          "content-box" === t.boxSizing
                            ? -(
                                parseFloat(t.paddingTop) +
                                parseFloat(t.paddingBottom)
                              )
                            : parseFloat(t.borderTopWidth) +
                              parseFloat(t.borderBottomWidth)),
                        isNaN(s) && (s = 0),
                        i();
                    })();
                }
              }
              function r(e) {
                var t = o.get(e);
                t && t.destroy();
              }
              function i(e) {
                var t = o.get(e);
                t && t.update();
              }
              var o =
                  "function" == typeof Map
                    ? new Map()
                    : (function () {
                        var e = [],
                          t = [];
                        return {
                          has: function (t) {
                            return e.indexOf(t) > -1;
                          },
                          get: function (n) {
                            return t[e.indexOf(n)];
                          },
                          set: function (n, r) {
                            -1 === e.indexOf(n) && (e.push(n), t.push(r));
                          },
                          delete: function (n) {
                            var r = e.indexOf(n);
                            r > -1 && (e.splice(r, 1), t.splice(r, 1));
                          },
                        };
                      })(),
                a = function (e) {
                  return new Event(e, { bubbles: !0 });
                };
              try {
                new Event("test");
              } catch (e) {
                a = function (e) {
                  var t = document.createEvent("Event");
                  return t.initEvent(e, !0, !1), t;
                };
              }
              var s = null;
              "undefined" == typeof window ||
              "function" != typeof window.getComputedStyle
                ? ((s = function (e) {
                    return e;
                  }),
                  (s.destroy = function (e) {
                    return e;
                  }),
                  (s.update = function (e) {
                    return e;
                  }))
                : ((s = function (e, t) {
                    return (
                      e &&
                        Array.prototype.forEach.call(
                          e.length ? e : [e],
                          function (e) {
                            return n(e);
                          }
                        ),
                      e
                    );
                  }),
                  (s.destroy = function (e) {
                    return (
                      e && Array.prototype.forEach.call(e.length ? e : [e], r),
                      e
                    );
                  }),
                  (s.update = function (e) {
                    return (
                      e && Array.prototype.forEach.call(e.length ? e : [e], i),
                      e
                    );
                  })),
                (t.default = s),
                (e.exports = t.default);
            });
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function i(e) {
              return !!e && this.init(e), this;
            }
            function o(e) {
              return new i(e);
            }
            var a = n(42),
              s = r(a),
              u = n(33),
              l = r(u),
              c = n(37),
              f = r(c),
              p = n(12),
              d = r(p),
              h = n(6),
              v = n(41),
              g = r(v),
              m = n(36),
              y = r(m),
              b = n(40),
              w = n(38),
              D = r(w),
              x = n(3),
              A = r(x),
              k = n(39),
              E = r(k),
              C = n(13),
              F = r(C),
              S = n(35),
              _ =
                (r(S),
                {
                  comment: "",
                  nick: "",
                  mail: "",
                  link: "",
                  ua: A.default.ua,
                  url: "",
                  QQAvatar: "",
                }),
              O = "",
              B = {},
              j = {
                cdn: "https://gravatar.loli.net/avatar/",
                ds: [
                  "mp",
                  "identicon",
                  "monsterid",
                  "wavatar",
                  "robohash",
                  "retro",
                  "",
                ],
                params: "",
                hide: !1,
              };
            (i.prototype.init = function (e) {
              if ("undefined" == typeof document)
                throw new Error(
                  "Sorry, Valine does not support Server-side rendering."
                );
              var t = this;
              return (
                e &&
                  ((e = A.default.extend(h.CONFIG, e)),
                  (t.i18n = (0, f.default)(
                    e.lang || A.default.lang,
                    e.langMode
                  )),
                  (t.cfg = e),
                  (d.default.maps =
                    (!!e.emojiMaps && e.emojiMaps) || d.default.maps),
                  (d.default.cdn =
                    (!!e.emojiCDN && e.emojiCDN) || d.default.cdn),
                  t._init()),
                t
              );
            }),
              (i.prototype._init = function () {
                var e = this;
                try {
                  var t = e.cfg,
                    n = t.avatar,
                    r = t.avatarForce,
                    i = t.avatar_cdn,
                    o = t.visitor,
                    a = t.path,
                    s = void 0 === a ? location.pathname : a,
                    u = t.pageSize,
                    l = t.recordIP;
                  e.cfg.path = s.replace(/index\.html?$/, "");
                  var c = j.ds,
                    f = r ? "&q=" + (0, h.RandomStr)() : "";
                  (j.params =
                    "?d=" +
                    (c.indexOf(n) > -1 ? n : "mp") +
                    "&v=" +
                    h.VERSION +
                    f),
                    (j.hide = "hide" === n),
                    (j.cdn = /^https?\:\/\//.test(i) ? i : j.cdn),
                    (e.cfg.pageSize = isNaN(u) || u < 1 ? 10 : u),
                    l &&
                      (0, b.recordIPFn)(function (e) {
                        return (_.ip = e);
                      });
                  var p = e.cfg.el || null,
                    d = (0, A.default)(p);
                  if (
                    (p = p instanceof HTMLElement ? p : d[d.length - 1] || null)
                  ) {
                    (e.$el = (0, A.default)(p)),
                      e.$el.addClass("v").attr("data-class", "v"),
                      j.hide && e.$el.addClass("hide-avatar"),
                      (e.cfg.meta = (
                        e.cfg.guest_info ||
                        e.cfg.meta ||
                        h.defaultMeta
                      ).filter(function (e) {
                        return h.defaultMeta.indexOf(e) > -1;
                      })),
                      (e.cfg.requiredFields = e.cfg.requiredFields.filter(
                        function (e) {
                          return h.defaultMeta.indexOf(e) > -1;
                        }
                      ));
                    var v = (
                        0 == e.cfg.meta.length ? h.defaultMeta : e.cfg.meta
                      ).map(function (t) {
                        var n = "mail" == t ? "email" : "text";
                        return h.defaultMeta.indexOf(t) > -1
                          ? '<input name="' +
                              t +
                              '" placeholder="' +
                              e.i18n.t(t) +
                              '" class="v' +
                              t +
                              ' vinput" type="' +
                              n +
                              '">'
                          : "";
                      }),
                      g =
                        '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' +
                        e.i18n.t("cancelReply") +
                        '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' +
                        v.length +
                        '">' +
                        v.join("") +
                        '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' +
                        e.cfg.placeholder +
                        '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' +
                        e.i18n.t("emoji") +
                        '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' +
                        e.i18n.t("preview") +
                        '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' +
                        e.i18n.t("submit") +
                        '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' +
                        e.i18n.t("comments") +
                        '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' +
                        e.i18n.t("more") +
                        '</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' +
                        h.VERSION +
                        "</div>";
                    e.$el.html(g),
                      e.$el.find(".cancel-reply").on("click", function (t) {
                        e.reset();
                      });
                    var m = e.$el.find(".vempty");
                    e.$nodata = {
                      show: function (t) {
                        return m.html(t || e.i18n.t("sofa")).show(), e;
                      },
                      hide: function () {
                        return m.hide(), e;
                      },
                    };
                    var w = e.$el.find(".vload-bottom"),
                      x = e.$el.find(".vload-top");
                    e.$loading = {
                      show: function (t) {
                        return (t && x.show()) || w.show(), e.$nodata.hide(), e;
                      },
                      hide: function () {
                        return (
                          x.hide(),
                          w.hide(),
                          0 === e.$el.find(".vcard").length && e.$nodata.show(),
                          e
                        );
                      },
                    };
                  }
                  (0, y.default)(e.cfg, function (t) {
                    var n = (0, A.default)(".valine-comment-count"),
                      r = 0;
                    !(function t(n) {
                      var i = n[r++];
                      if (i) {
                        var o = (0, A.default)(i).attr("data-xid");
                        o &&
                          e
                            .Q(o)
                            .count()
                            .then(function (e) {
                              (i.innerText = e), t(n);
                            })
                            .catch(function (e) {
                              i.innerText = 0;
                            });
                      }
                    })(n),
                      o && T.add(AV.Object.extend("Counter"), e.cfg.path),
                      e.$el && e.bind();
                  });
                } catch (t) {
                  (0, D.default)(e, t, "init");
                }
              });
            var I = function (e, t) {
                var n = new e(),
                  r = new AV.ACL();
                r.setPublicReadAccess(!0),
                  r.setPublicWriteAccess(!0),
                  n.setACL(r),
                  n.set("url", t.url),
                  n.set("xid", t.xid),
                  n.set("title", t.title),
                  n.set("time", 1),
                  n
                    .save()
                    .then(function (e) {
                      (0, A.default)(t.el)
                        .find(".leancloud-visitors-count")
                        .text(1);
                    })
                    .catch(function (e) {});
              },
              T = {
                add: function (e, t) {
                  var n = this,
                    r = (0, A.default)(
                      ".leancloud_visitors,.leancloud-visitors"
                    );
                  if (1 === r.length) {
                    var i = r[0],
                      o = decodeURI((0, A.default)(i).attr("id")),
                      a = (0, A.default)(i).attr("data-flag-title"),
                      s = encodeURI(o),
                      u = { el: i, url: o, xid: s, title: a };
                    if (decodeURI(o) === decodeURI(t)) {
                      var l = new AV.Query(e);
                      l.equalTo("url", o),
                        l
                          .find()
                          .then(function (t) {
                            if (t.length > 0) {
                              var n = t[0];
                              n.increment("time"),
                                n
                                  .save()
                                  .then(function (e) {
                                    (0, A.default)(i)
                                      .find(".leancloud-visitors-count")
                                      .text(e.get("time"));
                                  })
                                  .catch(function (e) {});
                            } else I(e, u);
                          })
                          .catch(function (t) {
                            101 == t.code ? I(e, u) : (0, D.default)(n, t);
                          });
                    } else T.show(e, r);
                  } else T.show(e, r);
                },
                show: function (e, t) {
                  var n = [];
                  if (
                    (t.forEach(function (e) {
                      var t = (0, A.default)(e).find(
                        ".leancloud-visitors-count"
                      );
                      t && t.text("0"),
                        n.push(
                          /\%/.test((0, A.default)(e).attr("id"))
                            ? decodeURI((0, A.default)(e).attr("id"))
                            : (0, A.default)(e).attr("id")
                        );
                    }),
                    n.length)
                  ) {
                    var r = new AV.Query(e);
                    r.containedIn("url", n),
                      r
                        .find()
                        .then(function (e) {
                          e.length > 0 &&
                            t.forEach(function (t) {
                              e.forEach(function (e) {
                                var n = e.get("xid") || encodeURI(e.get("url")),
                                  r = e.get("time"),
                                  i = (0, A.default)(t),
                                  o = i.attr("id");
                                if ((/\%/.test(o) ? o : encodeURI(o)) == n) {
                                  var a = i.find(".leancloud-visitors-count");
                                  a && a.text(r);
                                }
                              });
                            });
                        })
                        .catch(function (e) {});
                  }
                },
              };
            (i.prototype.Q = function (e) {
              var t = this,
                n = arguments.length,
                r = t.cfg.clazzName;
              if (1 == n) {
                var i = new AV.Query(r);
                i.doesNotExist("rid");
                var o = new AV.Query(r);
                o.equalTo("rid", "");
                var a = AV.Query.or(i, o);
                return (
                  "*" === e ? a.exists("url") : a.equalTo("url", decodeURI(e)),
                  a.addDescending("createdAt"),
                  a.addDescending("insertedAt"),
                  a
                );
              }
              var s = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""),
                u =
                  "select * from " +
                  r +
                  " where rid in (" +
                  s +
                  ") order by -createdAt,-createdAt";
              return AV.Query.doCloudQuery(u);
            }),
              (i.prototype.installLocale = function (e, t) {
                var n = this;
                return n.i18n(e, t), n;
              }),
              (i.prototype.setPath = function (e) {
                return (this.config.path = e), this;
              }),
              (i.prototype.bind = function () {
                var e = this,
                  t = e.$el.find(".vemojis"),
                  n = e.$el.find(".vpreview"),
                  r = e.$el.find(".vemoji-btn"),
                  i = e.$el.find(".vpreview-btn"),
                  o = e.$el.find(".veditor"),
                  a = d.default.maps,
                  u = !1,
                  c = function (e) {
                    var n = [];
                    for (var r in a)
                      a.hasOwnProperty(r) &&
                        d.default.build(r) &&
                        n.push(
                          '<i title="' + r + '" >' + d.default.build(r) + "</i>"
                        );
                    t.html(n.join("")),
                      (u = !0),
                      t.find("i").on("click", function (e) {
                        e.preventDefault(),
                          x(
                            o[0],
                            " :" + (0, A.default)(this).attr("title") + ":"
                          );
                      });
                  };
                (e.$emoji = {
                  show: function () {
                    return (
                      !u && c(),
                      e.$preview.hide(),
                      t.show(),
                      r.addClass("actived"),
                      e.$emoji
                    );
                  },
                  hide: function () {
                    return r.removeClass("actived"), t.hide(), e.$emoji;
                  },
                }),
                  (e.$preview = {
                    show: function () {
                      return (
                        O
                          ? (e.$emoji.hide(),
                            i.addClass("actived"),
                            n.html((0, E.default)(O)).show(),
                            z())
                          : e.$preview.hide(),
                        e.$preview
                      );
                    },
                    hide: function () {
                      return (
                        i.removeClass("actived"), n.hide().html(""), e.$preview
                      );
                    },
                  });
                var f = function (t) {
                  var r = t.val() || "";
                  r || e.$preview.hide(),
                    O != r &&
                      ((O = r),
                      i.hasClass("actived") > -1 &&
                        O != n.html() &&
                        n.html((0, E.default)(O)),
                      z());
                };
                r.on("click", function (t) {
                  r.hasClass("actived") ? e.$emoji.hide() : e.$emoji.show();
                }),
                  i.on("click", function (t) {
                    i.hasClass("actived")
                      ? e.$preview.hide()
                      : e.$preview.show();
                  });
                var p = e.cfg.meta,
                  v = {},
                  m = { veditor: "comment" };
                for (var y in (p.forEach(function (e) {
                  m["v" + e] = e;
                }),
                m))
                  m.hasOwnProperty(y) &&
                    (function () {
                      var t = m[y],
                        n = e.$el.find("." + y);
                      (v[t] = n),
                        n.on("input change blur propertychange", function (r) {
                          e.cfg.enableQQ &&
                            "blur" === r.type &&
                            "nick" === t &&
                            (n.val() && !isNaN(n.val())
                              ? (0, b.fetchQQFn)(n.val(), function (e) {
                                  var t = e.nick || n.val(),
                                    r = e.qq + "@qq.com";
                                  (0, A.default)(".vnick").val(t),
                                    (0, A.default)(".vmail").val(r),
                                    (_.nick = t),
                                    (_.mail = r),
                                    (_.QQAvatar = e.pic);
                                })
                              : A.default.store.get(h.QQCacheKey) &&
                                A.default.store.get(h.QQCacheKey).nick !=
                                  n.val() &&
                                (A.default.store.remove(h.QQCacheKey),
                                (_.nick = n.val()),
                                (_.mail = ""),
                                (_.QQAvatar = ""))),
                            "comment" === t
                              ? ((0, l.default)(n[0]),
                                w(function (e) {
                                  f(n);
                                })())
                              : (_[t] = (0, F.default)(
                                  n
                                    .val()
                                    .replace(/(^\s*)|(\s*$)/g, "")
                                    .substring(0, 35)
                                ));
                        });
                    })();
                var w = function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 300,
                      n = void 0;
                    return function () {
                      var r = this,
                        i = arguments;
                      n && clearTimeout(n),
                        (n = setTimeout(function () {
                          e.apply(r, i);
                        }, t));
                    };
                  },
                  x = function (e, t) {
                    if (document.selection)
                      e.focus(),
                        (document.selection.createRange().text = t),
                        e.focus();
                    else if (e.selectionStart || "0" == e.selectionStart) {
                      var n = e.selectionStart,
                        r = e.selectionEnd,
                        i = e.scrollTop;
                      (e.value =
                        e.value.substring(0, n) +
                        t +
                        e.value.substring(r, e.value.length)),
                        e.focus(),
                        (e.selectionStart = n + t.length),
                        (e.selectionEnd = n + t.length),
                        (e.scrollTop = i);
                    } else e.focus(), (e.value += t);
                    w(function (t) {
                      f((0, A.default)(e));
                    })();
                  },
                  k = { no: 1, size: e.cfg.pageSize, skip: e.cfg.pageSize },
                  C = e.$el.find(".vpage");
                C.on("click", function (e) {
                  C.hide(), k.no++, S();
                });
                var S = function () {
                  var t = k.size,
                    n = k.no,
                    r = Number(e.$el.find(".vnum").text());
                  e.$loading.show();
                  var i = e.Q(e.cfg.path);
                  i.limit(t),
                    i.skip((n - 1) * t),
                    i
                      .find()
                      .then(function (i) {
                        if (((k.skip = k.size), i && i.length)) {
                          var o = [];
                          i.forEach(function (t) {
                            o.push(t.id), T(t, e.$el.find(".vcards"), !0);
                          }),
                            e
                              .Q(e.cfg.path, o)
                              .then(function (e) {
                                ((e && e.results) || []).forEach(function (e) {
                                  T(
                                    e,
                                    (0, A.default)(
                                      '.vquote[data-self-id="' +
                                        e.get("rid") +
                                        '"]'
                                    )
                                  );
                                });
                              })
                              .catch(function (e) {}),
                            t * n < r ? C.show() : C.hide(),
                            z();
                        } else e.$nodata.show();
                        e.$loading.hide();
                      })
                      .catch(function (t) {
                        e.$loading.hide(), (0, D.default)(e, t, "query");
                      });
                };
                e.Q(e.cfg.path)
                  .count()
                  .then(function (t) {
                    t > 0
                      ? (e.$el.find(".vcount").show().find(".vnum").text(t),
                        S())
                      : e.$loading.hide();
                  })
                  .catch(function (t) {
                    (0, D.default)(e, t, "count");
                  });
                var I = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t =
                        /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,
                      n = e.match(t) || [];
                    return n.length > 0 ? n[0] : "";
                  },
                  T = function (t, n, r) {
                    var i = (0, A.default)(
                        '<div class="vcard" id="' + t.id + '"></div>'
                      ),
                      o = (0, F.default)(t.get("ua")),
                      a = "";
                    o &&
                      !/ja/.test(e.cfg.lang) &&
                      ((o = A.default.detect(o)),
                      (a = o.version
                        ? o.os
                          ? '<span class="vsys">' +
                            o.browser +
                            " " +
                            o.version +
                            '</span> <span class="vsys">' +
                            o.os +
                            " " +
                            o.osVersion +
                            "</span>"
                          : ""
                        : '<span class="vsys">' + o.browser + "</span>")),
                      "*" === e.cfg.path &&
                        (a =
                          '<a href="' +
                          t.get("url") +
                          '" class="vsys">' +
                          t.get("url") +
                          "</a>");
                    var u = t.get("link")
                        ? /^https?\:\/\//.test(t.get("link"))
                          ? t.get("link")
                          : "http://" + t.get("link")
                        : "",
                      l = A.default.escape(
                        (0, F.default)(t.get("nick").substring(0, 30))
                      ),
                      c = u
                        ? '<a class="vnick" rel="nofollow" href="' +
                          I(u) +
                          '" target="_blank" >' +
                          l +
                          "</a>"
                        : '<span class="vnick">' + l + "</span>",
                      f = j.hide
                        ? ""
                        : e.cfg.enableQQ && t.get("QQAvatar")
                        ? (0, F.default)(
                            '<img class="vimg" src="' +
                              I(t.get("QQAvatar")) +
                              '" referrerPolicy="no-referrer"/>'
                          )
                        : '<img class="vimg" src="' +
                          (j.cdn + (0, s.default)(t.get("mail")) + j.params) +
                          '">',
                      p =
                        f +
                        '<div class="vh"><div class="vhead">' +
                        c +
                        " " +
                        a +
                        '</div><div class="vmeta"><span class="vtime" >' +
                        (0, g.default)(t.get("insertedAt"), e.i18n) +
                        '</span><span class="vat" data-vm-id="' +
                        (t.get("rid") || t.id) +
                        '" data-self-id="' +
                        t.id +
                        '">' +
                        e.i18n.t("reply") +
                        '</span></div><div class="vcontent" data-expand="' +
                        e.i18n.t("expand") +
                        '">' +
                        (0, E.default)(t.get("comment")) +
                        '</div><div class="vreply-wrapper" data-self-id="' +
                        t.id +
                        '"></div><div class="vquote" data-self-id="' +
                        t.id +
                        '"></div></div>';
                    i.html(p);
                    var d = i.find(".vat");
                    i.find("a:not(.at)").forEach(function (e) {
                      (0, A.default)(e).attr({
                        target: "_blank",
                        rel: "noopener",
                      });
                    }),
                      r ? n.append(i) : n.prepend(i);
                    var h = i.find(".vcontent");
                    h && L(h), d && P(d, t);
                  },
                  M = {},
                  P = function (t, n) {
                    t.on("click", function (r) {
                      var i = t.attr("data-vm-id"),
                        o = t.attr("data-self-id"),
                        a = e.$el.find(".vwrap"),
                        s = "@" + A.default.escape(n.get("nick"));
                      (0, A.default)(
                        '.vreply-wrapper[data-self-id="' + o + '"]'
                      )
                        .append(a)
                        .find(".cancel-reply")
                        .show(),
                        (M = {
                          at: A.default.escape(s) + " ",
                          rid: i,
                          pid: o,
                          rmail: n.get("mail"),
                        }),
                        v.comment.attr({ placeholder: s })[0].focus();
                    });
                  },
                  z = function () {
                    setTimeout(function () {
                      try {
                        e.cfg.mathjax &&
                          "MathJax" in window &&
                          "version" in window.MathJax &&
                          ((/^3.*/.test(window.MathJax.version) &&
                            MathJax.typeset()) ||
                            MathJax.Hub.Queue([
                              "Typeset",
                              MathJax.Hub,
                              document.querySelector(".v"),
                            ])),
                          "renderMathInElement" in window &&
                            renderMathInElement((0, A.default)(".v")[0], {
                              delimiters: [
                                { left: "$$", right: "$$", display: !0 },
                                { left: "$", right: "$", display: !1 },
                              ],
                            });
                      } catch (e) {}
                    }, 100);
                  },
                  L = function (e) {
                    setTimeout(function () {
                      e[0].offsetHeight > 200 &&
                        (e.addClass("expand"),
                        e.on("click", function (t) {
                          e.removeClass("expand");
                        }));
                    });
                  };
                !(function (t) {
                  if ((t = A.default.store.get(h.MetaCacheKey) || t))
                    for (var n in p)
                      if (p.hasOwnProperty(n)) {
                        var r = p[n];
                        e.$el.find(".v" + r).val(A.default.unescape(t[r])),
                          (_[r] = t[r]);
                      }
                  var i = A.default.store.get(h.QQCacheKey);
                  _.QQAvatar = (e.cfg.enableQQ && !!i && i.pic) || "";
                })(),
                  (e.reset = function () {
                    (_.comment = ""),
                      v.comment.val(""),
                      f(v.comment),
                      v.comment.attr("placeholder", e.cfg.placeholder),
                      (M = {}),
                      e.$preview.hide(),
                      e.$el.find(".vpanel").append(e.$el.find(".vwrap")),
                      e.$el.find(".cancel-reply").hide(),
                      (O = ""),
                      l.default.update(v.comment[0]);
                  });
                var R = e.$el.find(".vsubmit"),
                  Q = function (t) {
                    if (
                      e.cfg.requiredFields.indexOf("nick") > -1 &&
                      _.nick.length < 3
                    )
                      return (
                        v.nick[0].focus(),
                        void e.$el
                          .find(".status-bar")
                          .text("" + e.i18n.t("nickFail"))
                          .empty(3e3)
                      );
                    if (
                      e.cfg.requiredFields.indexOf("mail") > -1 &&
                      !/[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(_.mail)
                    )
                      return (
                        v.mail[0].focus(),
                        void e.$el
                          .find(".status-bar")
                          .text("" + e.i18n.t("mailFail"))
                          .empty(3e3)
                      );
                    if ("" != O) {
                      for (var n in B)
                        if (B.hasOwnProperty(n)) {
                          var r = B[n];
                          (O = O.replace(n, r)), URL.revokeObjectURL(n);
                        }
                      (B = {}),
                        (_.comment = (0, F.default)(O)),
                        (_.nick = _.nick || "Anonymous");
                      var i = A.default.store.get("vlx");
                      i && Date.now() / 1e3 - i / 1e3 < 20
                        ? e.$el
                            .find(".status-bar")
                            .text(e.i18n.t("busy"))
                            .empty(3e3)
                        : U();
                    } else v.comment[0].focus();
                  },
                  N = function () {
                    var e = new AV.ACL();
                    return (
                      e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
                    );
                  },
                  U = function () {
                    A.default.store.set("vlx", Date.now()),
                      R.attr({ disabled: !0 }),
                      e.$loading.show(!0);
                    var t = AV.Object.extend(e.cfg.clazzName || "Comment"),
                      n = new t();
                    if (
                      ((_.url = decodeURI(e.cfg.path)),
                      (_.insertedAt = new Date()),
                      M.rid)
                    ) {
                      var r = M.pid || M.rid;
                      n.set("rid", M.rid),
                        n.set("pid", r),
                        (_.comment = O.replace(
                          "<p>",
                          '<p><a class="at" href="#' +
                            r +
                            '">' +
                            M.at +
                            "</a> , "
                        ));
                    }
                    for (var i in _)
                      if (_.hasOwnProperty(i)) {
                        var o = _[i];
                        n.set(i, o);
                      }
                    n.setACL(N()),
                      n
                        .save()
                        .then(function (t) {
                          "Anonymous" != _.nick &&
                            A.default.store.set(h.MetaCacheKey, {
                              nick: _.nick,
                              link: _.link,
                              mail: _.mail,
                            });
                          var n = e.$el.find(".vnum");
                          try {
                            M.rid
                              ? T(
                                  t,
                                  (0, A.default)(
                                    '.vquote[data-self-id="' + M.rid + '"]'
                                  ),
                                  !0
                                )
                              : (Number(n.text())
                                  ? n.text(Number(n.text()) + 1)
                                  : e.$el
                                      .find(".vcount")
                                      .show()
                                      .find(".vnum")
                                      .text(Number(n.text()) + 1),
                                T(t, e.$el.find(".vcards")),
                                k.skip++),
                              R.removeAttr("disabled"),
                              e.$loading.hide(),
                              e.reset();
                          } catch (t) {
                            (0, D.default)(e, t, "save");
                          }
                        })
                        .catch(function (t) {
                          (0, D.default)(e, t, "commitEvt");
                        });
                  };
                R.on("click", Q),
                  (0, A.default)(document)
                    .on("keydown", function (e) {
                      e = window.event || e;
                      var t = e.keyCode || e.which || e.charCode;
                      (e.ctrlKey || e.metaKey) && 13 === t && Q(),
                        9 === t &&
                          "veditor" == (document.activeElement.id || "") &&
                          (e.preventDefault(), x(o[0], "    "));
                    })
                    .on("paste", function (e) {
                      var t =
                        "clipboardData" in e
                          ? e.clipboardData
                          : (e.originalEvent &&
                              e.originalEvent.clipboardData) ||
                            window.clipboardData;
                      t && V(t.items, !0);
                    }),
                  o.on("dragenter dragleave dragover drop", function (e) {
                    e.stopPropagation(),
                      e.preventDefault(),
                      "drop" === e.type && V(e.dataTransfer.items);
                  });
                var V = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) {
                      var i = e[n];
                      if ("string" === i.kind && i.type.match("^text/html"))
                        !t &&
                          i.getAsString(function (e) {
                            e && x(o[0], e.replace(/<[^>]+>/g, ""));
                          });
                      else if (i.type.indexOf("image") > -1) {
                        $(i.getAsFile());
                        continue;
                      }
                    }
                  },
                  $ = function (e) {
                    try {
                      var t = URL.createObjectURL(e),
                        n = "![image](" + t + ") ",
                        r = new FileReader();
                      x(o[0], n),
                        (r.onload = function () {
                          B[t] = r.result;
                        }),
                        r.readAsDataURL(e);
                    } catch (e) {}
                  };
              }),
              (e.exports = o),
              (e.exports.default = o);
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(3),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r),
              o = function (e, t) {
                i.default
                  .ajax({
                    url: "https://app-router.com/2/route",
                    body: { appId: e },
                  })
                  .then(function (e) {
                    e.json().then(function (e) {
                      return t && t("//" + e.api_server);
                    });
                  });
              };
            t.default = { getApi: o };
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(3),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r),
              o = !1;
            t.default = function (e, t) {
              if ("AV" in window) {
                var n = window.AV.version || window.AV.VERSION;
                parseInt(n.split(".")[0]) > 2
                  ? (o = !!AV.applicationId && !!AV.applicationKey)
                  : i.default.deleteInWin("AV", 0);
              }
              o
                ? t && t()
                : i.default.sdkLoader(
                    "//unpkg.com/leancloud-storage@3/dist/av-min.js",
                    "AV",
                    function (n) {
                      var r = "https://",
                        i = "",
                        a = e.app_id || e.appId,
                        s = e.app_key || e.appKey;
                      if (!e.serverURLs)
                        switch (a.slice(-9)) {
                          case "-9Nh9j0Va":
                            r += "tab.";
                            break;
                          case "-MdYXbMMI":
                            r += "us.";
                        }
                      (i = e.serverURLs || r + "leancloud.cn"),
                        AV.init({ appId: a, appKey: s, serverURLs: i }),
                        (o = !0),
                        t && t();
                    }
                  );
            };
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var i = n(84),
              o = r(i),
              a = n(100),
              s = r(a),
              u = n(101),
              l = r(u),
              c = n(98),
              f = r(c),
              p = n(99),
              d = r(p),
              h = {
                zh: s.default,
                "zh-cn": s.default,
                "zh-CN": s.default,
                "zh-TW": l.default,
                en: f.default,
                "en-US": f.default,
                ja: d.default,
                "ja-JP": d.default,
              };
            t.default = function (e, t) {
              return (
                !h[e] && e && t && (h[e] = t),
                new o.default({ phrases: h[e || "zh"], locale: e })
              );
            };
          },
          function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.default = function (e, t) {
                if (
                  (e.$el && e.$loading.hide().$nodata.hide(),
                  "[object Error]" === {}.toString.call(t))
                ) {
                  var n = t.code || t.message || t.error || "";
                  if (isNaN(n))
                    e.$el &&
                      e.$nodata.show(
                        '<pre style="text-align:left;"> ' +
                          JSON.stringify(t) +
                          "</pre>"
                      );
                  else {
                    var r = e.i18n.t("code-" + n),
                      i =
                        (r == "code-" + n ? void 0 : r) ||
                        t.message ||
                        t.error ||
                        "";
                    101 == n || -1 == n
                      ? e.$nodata.show()
                      : e.$el &&
                        e.$nodata.show(
                          '<pre style="text-align:left;">Code ' +
                            n +
                            ": " +
                            i +
                            "</pre>"
                        );
                  }
                } else
                  e.$el &&
                    e.$nodata.show(
                      '<pre style="text-align:left;">' +
                        JSON.stringify(t) +
                        "</pre>"
                    );
              });
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.__esModule = !0;
            var i = n(83),
              o = n(79),
              a = r(o),
              s = n(3),
              u = r(s),
              l = n(12),
              c = r(l),
              f = n(13),
              p = r(f),
              d = new i.marked.Renderer();
            (d.code = function (e, t) {
              return (
                '<pre><code class="hljs language-' +
                t +
                '">' +
                (t && hljs.getLanguage(t)
                  ? hljs.highlight(t, e).value
                  : u.default.escape(e)) +
                "</code></pre>"
              );
            }),
              i.marked.setOptions({
                renderer: "hljs" in window ? d : new i.marked.Renderer(),
                highlight: function (e, t) {
                  return "hljs" in window
                    ? (t &&
                        hljs.getLanguage(t) &&
                        hljs.highlight(t, e, !0).value) ||
                        hljs.highlightAuto(e).value
                    : (0, a.default)(e);
                },
                gfm: !0,
                tables: !0,
                breaks: !0,
                pedantic: !1,
                sanitize: !1,
                smartLists: !0,
                smartypants: !0,
                headerPrefix: "v-",
              }),
              (t.default = function (e) {
                return (0, p.default)((0, i.marked)(c.default.parse(e, !0)));
              });
          },
          function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.recordIPFn = t.fetchQQFn = void 0);
            var r = n(3),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r),
              o = n(6),
              a = function (e, t) {
                var n = i.default.store.get(o.QQCacheKey);
                n && n.qq == e
                  ? t && t(n)
                  : i.default
                      .ajax({
                        url: "//valine.api.ioliu.cn/getqqinfo",
                        method: "POST",
                        body: { qq: e },
                      })
                      .then(function (e) {
                        e.json().then(function (e) {
                          e.errmsg ||
                            (i.default.store.set(o.QQCacheKey, e), t && t(e));
                        });
                      });
              },
              s = function (e) {
                i.default
                  .ajax({
                    url: "https://forge.speedtest.cn/api/location/info",
                    method: "get",
                  })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e && e(t.ip);
                  });
              };
            (t.fetchQQFn = a), (t.recordIPFn = s);
          },
          function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.default = function (e, t) {
                if (!e) return "Invalid Date.";
                try {
                  var n = i(e).getTime();
                  if (isNaN(n)) return "Invalid Date.";
                  var o = new Date().getTime(),
                    a = o - n,
                    s = Math.floor(a / 864e5);
                  if (0 === s) {
                    var u = a % 864e5,
                      l = Math.floor(u / 36e5);
                    if (0 === l) {
                      var c = u % 36e5,
                        f = Math.floor(c / 6e4);
                      if (0 === f) {
                        var p = c % 6e4;
                        return Math.round(p / 1e3) + " " + t.t("seconds");
                      }
                      return f + " " + t.t("minutes");
                    }
                    return l + " " + t.t("hours");
                  }
                  return s < 0
                    ? t.t("now")
                    : s < 8
                    ? s + " " + t.t("days")
                    : r(e);
                } catch (e) {}
              });
            var r = function (e) {
                var t = o(e.getDate(), 2),
                  n = o(e.getMonth() + 1, 2);
                return o(e.getFullYear(), 2) + "-" + n + "-" + t;
              },
              i = function e(t) {
                return t instanceof Date
                  ? t
                  : !isNaN(t) || /^\d+$/.test(t)
                  ? new Date(parseInt(t))
                  : /GMT/.test(t || "")
                  ? e(new Date(t).getTime())
                  : ((t = (t || "")
                      .replace(/(^\s*)|(\s*$)/g, "")
                      .replace(/\.\d+/, "")
                      .replace(/-/, "/")
                      .replace(/-/, "/")
                      .replace(/(\d)T(\d)/, "$1 $2")
                      .replace(/Z/, " UTC")
                      .replace(/([+-]\d\d):?(\d\d)/, " $1$2")),
                    new Date(t));
              },
              o = function (e, t) {
                for (var n = e.toString(); n.length < t; ) n = "0" + n;
                return n;
              };
          },
          function (e, t, n) {
            var r;
            !(function (i) {
              "use strict";
              function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (
                  (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              function a(e, t) {
                return (e << t) | (e >>> (32 - t));
              }
              function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n);
              }
              function u(e, t, n, r, i, o, a) {
                return s((t & n) | (~t & r), e, t, i, o, a);
              }
              function l(e, t, n, r, i, o, a) {
                return s((t & r) | (n & ~r), e, t, i, o, a);
              }
              function c(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a);
              }
              function f(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a);
              }
              function p(e, t) {
                (e[t >> 5] |= 128 << t % 32),
                  (e[14 + (((t + 64) >>> 9) << 4)] = t);
                var n,
                  r,
                  i,
                  a,
                  s,
                  p = 1732584193,
                  d = -271733879,
                  h = -1732584194,
                  v = 271733878;
                for (n = 0; n < e.length; n += 16)
                  (r = p),
                    (i = d),
                    (a = h),
                    (s = v),
                    (p = u(p, d, h, v, e[n], 7, -680876936)),
                    (v = u(v, p, d, h, e[n + 1], 12, -389564586)),
                    (h = u(h, v, p, d, e[n + 2], 17, 606105819)),
                    (d = u(d, h, v, p, e[n + 3], 22, -1044525330)),
                    (p = u(p, d, h, v, e[n + 4], 7, -176418897)),
                    (v = u(v, p, d, h, e[n + 5], 12, 1200080426)),
                    (h = u(h, v, p, d, e[n + 6], 17, -1473231341)),
                    (d = u(d, h, v, p, e[n + 7], 22, -45705983)),
                    (p = u(p, d, h, v, e[n + 8], 7, 1770035416)),
                    (v = u(v, p, d, h, e[n + 9], 12, -1958414417)),
                    (h = u(h, v, p, d, e[n + 10], 17, -42063)),
                    (d = u(d, h, v, p, e[n + 11], 22, -1990404162)),
                    (p = u(p, d, h, v, e[n + 12], 7, 1804603682)),
                    (v = u(v, p, d, h, e[n + 13], 12, -40341101)),
                    (h = u(h, v, p, d, e[n + 14], 17, -1502002290)),
                    (d = u(d, h, v, p, e[n + 15], 22, 1236535329)),
                    (p = l(p, d, h, v, e[n + 1], 5, -165796510)),
                    (v = l(v, p, d, h, e[n + 6], 9, -1069501632)),
                    (h = l(h, v, p, d, e[n + 11], 14, 643717713)),
                    (d = l(d, h, v, p, e[n], 20, -373897302)),
                    (p = l(p, d, h, v, e[n + 5], 5, -701558691)),
                    (v = l(v, p, d, h, e[n + 10], 9, 38016083)),
                    (h = l(h, v, p, d, e[n + 15], 14, -660478335)),
                    (d = l(d, h, v, p, e[n + 4], 20, -405537848)),
                    (p = l(p, d, h, v, e[n + 9], 5, 568446438)),
                    (v = l(v, p, d, h, e[n + 14], 9, -1019803690)),
                    (h = l(h, v, p, d, e[n + 3], 14, -187363961)),
                    (d = l(d, h, v, p, e[n + 8], 20, 1163531501)),
                    (p = l(p, d, h, v, e[n + 13], 5, -1444681467)),
                    (v = l(v, p, d, h, e[n + 2], 9, -51403784)),
                    (h = l(h, v, p, d, e[n + 7], 14, 1735328473)),
                    (d = l(d, h, v, p, e[n + 12], 20, -1926607734)),
                    (p = c(p, d, h, v, e[n + 5], 4, -378558)),
                    (v = c(v, p, d, h, e[n + 8], 11, -2022574463)),
                    (h = c(h, v, p, d, e[n + 11], 16, 1839030562)),
                    (d = c(d, h, v, p, e[n + 14], 23, -35309556)),
                    (p = c(p, d, h, v, e[n + 1], 4, -1530992060)),
                    (v = c(v, p, d, h, e[n + 4], 11, 1272893353)),
                    (h = c(h, v, p, d, e[n + 7], 16, -155497632)),
                    (d = c(d, h, v, p, e[n + 10], 23, -1094730640)),
                    (p = c(p, d, h, v, e[n + 13], 4, 681279174)),
                    (v = c(v, p, d, h, e[n], 11, -358537222)),
                    (h = c(h, v, p, d, e[n + 3], 16, -722521979)),
                    (d = c(d, h, v, p, e[n + 6], 23, 76029189)),
                    (p = c(p, d, h, v, e[n + 9], 4, -640364487)),
                    (v = c(v, p, d, h, e[n + 12], 11, -421815835)),
                    (h = c(h, v, p, d, e[n + 15], 16, 530742520)),
                    (d = c(d, h, v, p, e[n + 2], 23, -995338651)),
                    (p = f(p, d, h, v, e[n], 6, -198630844)),
                    (v = f(v, p, d, h, e[n + 7], 10, 1126891415)),
                    (h = f(h, v, p, d, e[n + 14], 15, -1416354905)),
                    (d = f(d, h, v, p, e[n + 5], 21, -57434055)),
                    (p = f(p, d, h, v, e[n + 12], 6, 1700485571)),
                    (v = f(v, p, d, h, e[n + 3], 10, -1894986606)),
                    (h = f(h, v, p, d, e[n + 10], 15, -1051523)),
                    (d = f(d, h, v, p, e[n + 1], 21, -2054922799)),
                    (p = f(p, d, h, v, e[n + 8], 6, 1873313359)),
                    (v = f(v, p, d, h, e[n + 15], 10, -30611744)),
                    (h = f(h, v, p, d, e[n + 6], 15, -1560198380)),
                    (d = f(d, h, v, p, e[n + 13], 21, 1309151649)),
                    (p = f(p, d, h, v, e[n + 4], 6, -145523070)),
                    (v = f(v, p, d, h, e[n + 11], 10, -1120210379)),
                    (h = f(h, v, p, d, e[n + 2], 15, 718787259)),
                    (d = f(d, h, v, p, e[n + 9], 21, -343485551)),
                    (p = o(p, r)),
                    (d = o(d, i)),
                    (h = o(h, a)),
                    (v = o(v, s));
                return [p, d, h, v];
              }
              function d(e) {
                var t,
                  n = "",
                  r = 32 * e.length;
                for (t = 0; t < r; t += 8)
                  n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
                return n;
              }
              function h(e) {
                var t,
                  n = [];
                for (
                  n[(e.length >> 2) - 1] = void 0, t = 0;
                  t < n.length;
                  t += 1
                )
                  n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8)
                  n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n;
              }
              function v(e) {
                return d(p(h(e), 8 * e.length));
              }
              function g(e, t) {
                var n,
                  r,
                  i = h(e),
                  o = [],
                  a = [];
                for (
                  o[15] = a[15] = void 0,
                    i.length > 16 && (i = p(i, 8 * e.length)),
                    n = 0;
                  n < 16;
                  n += 1
                )
                  (o[n] = 909522486 ^ i[n]), (a[n] = 1549556828 ^ i[n]);
                return (
                  (r = p(o.concat(h(t)), 512 + 8 * t.length)),
                  d(p(a.concat(r), 640))
                );
              }
              function m(e) {
                var t,
                  n,
                  r = "0123456789abcdef",
                  i = "";
                for (n = 0; n < e.length; n += 1)
                  (t = e.charCodeAt(n)),
                    (i += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
                return i;
              }
              function y(e) {
                return unescape(encodeURIComponent(e));
              }
              function b(e) {
                return v(y(e));
              }
              function w(e) {
                return m(b(e));
              }
              function D(e, t) {
                return g(y(e), y(t));
              }
              function x(e, t) {
                return m(D(e, t));
              }
              function A(e, t, n) {
                return t ? (n ? D(t, e) : x(t, e)) : n ? b(e) : w(e);
              }
              void 0 !==
                (r = function () {
                  return A;
                }.call(t, n, t, e)) && (e.exports = r);
            })();
          },
          function (e, t, n) {
            "use strict";
            var r = n(2),
              i = n(4),
              o = n(1),
              a = n(5),
              s = n(14),
              u = n(15),
              l = u(),
              c = n(44),
              f = o("Array.prototype.slice"),
              p = i.apply(l),
              d = function (e, t) {
                return a(e), p(e, f(arguments, 1));
              };
            r(d, { getPolyfill: u, implementation: s, shim: c }),
              (e.exports = d);
          },
          function (e, t, n) {
            "use strict";
            var r = n(2),
              i = n(15);
            e.exports = function () {
              var e = i();
              return (
                r(
                  Array.prototype,
                  { forEach: e },
                  {
                    forEach: function () {
                      return Array.prototype.forEach !== e;
                    },
                  }
                ),
                e
              );
            };
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = n(47),
              i = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r);
            t.default = function (e) {
              return (
                (e = (0, i.default)({ url: "", method: "get", body: {} }, e)),
                new Promise(function (t, n) {
                  if ("jsonp" == e.method) {
                    var r =
                        "cb_" +
                        (Date.now() + Math.round(1e3 * Math.random())).toString(
                          32
                        ),
                      i = document,
                      o = i.body,
                      s = i.createElement("script");
                    return (
                      (s.async = !0),
                      (s.defer = !0),
                      e.url.indexOf("?") > -1
                        ? (e.url += "&" + a({ callback: r, t: Date.now() }))
                        : (e.url += "?" + a({ callback: r, t: Date.now() })),
                      (s.src = e.url),
                      (window[r] = function (e) {
                        (window[r] = null), o.removeChild(s), t(e);
                      }),
                      void o.appendChild(s)
                    );
                  }
                  var u =
                      "XMLHttpRequest" in window
                        ? new XMLHttpRequest()
                        : new ActiveXObject("Microsoft.XMLHTTP"),
                    l = [],
                    c = [],
                    f = {},
                    p = function e() {
                      return {
                        ok: 2 == ((u.status / 100) | 0),
                        statusText: u.statusText,
                        status: u.status,
                        url: u.responseURL,
                        text: function () {
                          return Promise.resolve(u.responseText);
                        },
                        json: function () {
                          return Promise.resolve(u.responseText).then(
                            JSON.parse
                          );
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([u.response]));
                        },
                        clone: e,
                        headers: {
                          keys: function () {
                            return l;
                          },
                          entries: function () {
                            return c;
                          },
                          get: function (e) {
                            return f[e.toLowerCase()];
                          },
                          has: function (e) {
                            return e.toLowerCase() in f;
                          },
                        },
                      };
                    };
                  for (var d in (a(e.body) &&
                    (e.url =
                      e.url + "?" + ("get" == e.method ? a(e.body) : "")),
                  u.open(e.method || "get", e.url),
                  "blob" == e.dataType && (u.responseType = "blob"),
                  (u.onload = function () {
                    u
                      .getAllResponseHeaders()
                      .replace(
                        /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                        function (e, t, n) {
                          l.push((t = t.toLowerCase())),
                            c.push([t, n]),
                            (f[t] = f[t] ? f[t] + "," + n : n);
                        }
                      ),
                      t(p());
                  }),
                  (u.onerror = n),
                  (u.withCredentials = "include" == e.credentials),
                  e.headers))
                    u.setRequestHeader(d, e.headers[d]);
                  u.send(
                    "post" == e.method
                      ? e.body
                      : "get" == e.method
                      ? ""
                      : a(e.body)
                  );
                })
              );
            };
            var o = encodeURIComponent,
              a = function (e) {
                var t = [];
                for (var n in e)
                  e.hasOwnProperty(n) && t.push(o(n) + "=" + o(e[n]));
                return (t = t.join("&").replace(/%20/g, "+")) || "";
              };
          },
          function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var r = function (e) {
              e = e || navigator.userAgent;
              var t = {},
                n = {
                  Trident:
                    e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
                  Presto: e.indexOf("Presto") > -1,
                  WebKit: e.indexOf("AppleWebKit") > -1,
                  Gecko: e.indexOf("Gecko/") > -1,
                  Safari: e.indexOf("Safari") > -1,
                  Edge: e.indexOf("Edge") > -1 || e.indexOf("Edg") > -1,
                  Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
                  IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
                  Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
                  "Firefox Focus": e.indexOf("Focus") > -1,
                  Chromium: e.indexOf("Chromium") > -1,
                  Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
                  Vivaldi: e.indexOf("Vivaldi") > -1,
                  Yandex: e.indexOf("YaBrowser") > -1,
                  Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
                  360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
                  UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
                  QQBrowser: e.indexOf("QQBrowser") > -1,
                  QQ: e.indexOf("QQ/") > -1,
                  Baidu:
                    e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
                  Maxthon: e.indexOf("Maxthon") > -1,
                  Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
                  LBBROWSER: e.indexOf("LBBROWSER") > -1,
                  "2345Explorer": e.indexOf("2345Explorer") > -1,
                  TheWorld: e.indexOf("TheWorld") > -1,
                  XiaoMi: e.indexOf("MiuiBrowser") > -1,
                  Quark: e.indexOf("Quark") > -1,
                  Qiyu: e.indexOf("Qiyu") > -1,
                  Wechat: e.indexOf("MicroMessenger") > -1,
                  Taobao: e.indexOf("AliApp(TB") > -1,
                  Alipay: e.indexOf("AliApp(AP") > -1,
                  Weibo: e.indexOf("Weibo") > -1,
                  Douban: e.indexOf("com.douban.frodo") > -1,
                  Suning: e.indexOf("SNEBUY-APP") > -1,
                  iQiYi: e.indexOf("IqiyiApp") > -1,
                  Windows: e.indexOf("Windows") > -1,
                  Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
                  macOS: e.indexOf("Macintosh") > -1,
                  Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                  Ubuntu: e.indexOf("Ubuntu") > -1,
                  FreeBSD: e.indexOf("FreeBSD") > -1,
                  Debian: e.indexOf("Debian") > -1,
                  "Windows Phone":
                    e.indexOf("IEMobile") > -1 ||
                    e.indexOf("Windows Phone") > -1,
                  BlackBerry:
                    e.indexOf("BlackBerry") > -1 ||
                    e.indexOf("RIM") > -1 ||
                    e.indexOf("BB10") > -1,
                  MeeGo: e.indexOf("MeeGo") > -1,
                  Symbian: e.indexOf("Symbian") > -1,
                  iOS: e.indexOf("like Mac OS X") > -1,
                  "Chrome OS": e.indexOf("CrOS") > -1,
                  WebOS: e.indexOf("hpwOS") > -1,
                  Mobile:
                    e.indexOf("Mobi") > -1 ||
                    e.indexOf("iPh") > -1 ||
                    e.indexOf("480") > -1,
                  Tablet:
                    e.indexOf("Tablet") > -1 ||
                    e.indexOf("Pad") > -1 ||
                    e.indexOf("Nexus 7") > -1,
                };
              n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
              var r = {
                browser: [
                  "Safari",
                  "Chrome",
                  "Edge",
                  "IE",
                  "Firefox",
                  "Firefox Focus",
                  "Chromium",
                  "Opera",
                  "Vivaldi",
                  "Yandex",
                  "Kindle",
                  "360",
                  "UC",
                  "QQBrowser",
                  "QQ",
                  "Baidu",
                  "Maxthon",
                  "Sogou",
                  "LBBROWSER",
                  "2345Explorer",
                  "TheWorld",
                  "XiaoMi",
                  "Quark",
                  "Qiyu",
                  "Wechat",
                  "Taobao",
                  "Alipay",
                  "Weibo",
                  "Douban",
                  "Suning",
                  "iQiYi",
                ],
                os: [
                  "Windows",
                  "Linux",
                  "Mac OS",
                  "macOS",
                  "Android",
                  "Ubuntu",
                  "FreeBSD",
                  "Debian",
                  "iOS",
                  "Windows Phone",
                  "BlackBerry",
                  "MeeGo",
                  "Symbian",
                  "Chrome OS",
                  "WebOS",
                ],
              };
              for (var i in r)
                if (r.hasOwnProperty(i))
                  for (var o = 0, a = r[i].length; o < a; o++) {
                    var s = r[i][o];
                    n[s] && (t[i] = s);
                  }
              var u = {
                Windows: function () {
                  return {
                    "10.0": "11",
                    6.4: "10",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "7",
                    "6.0": "Vista",
                    5.2: "XP",
                    5.1: "XP",
                    "5.0": "2000",
                  }[e.replace(/^.*Windows NT ([\d.]+).*$/, "$1")];
                },
                Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
                iOS: e
                  .replace(/^.*OS ([\d_]+) like.*$/, "$1")
                  .replace(/_/g, "."),
                Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
                "Windows Phone": e.replace(
                  /^.*Windows Phone( OS)? ([\d.]+);.*$/,
                  "$2"
                ),
                macOS: e
                  .replace(/^.*Mac OS X ([\d_]+).*$/, "$1")
                  .replace(/_/g, "."),
                WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
                BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1"),
              };
              t.osVersion = "";
              var l = u[t.os];
              l &&
                (t.osVersion = "function" == typeof l ? l() : l == e ? "" : l);
              var c = {
                Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Chrome: e
                  .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
                  .replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
                IE: e
                  .replace(/^.*MSIE ([\d.]+).*$/, "$1")
                  .replace(/^.*rv:([\d.]+).*$/, "$1"),
                Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
                Firefox: e
                  .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
                  .replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
                "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
                Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
                Opera: e
                  .replace(/^.*Opera\/([\d.]+).*$/, "$1")
                  .replace(/^.*OPR\/([\d.]+).*$/, "$1"),
                Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
                Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
                Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
                QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
                QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
                Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
                UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
                Sogou: e
                  .replace(/^.*SE ([\d.X]+).*$/, "$1")
                  .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
                "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
                TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
                XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
                Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
                Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
                Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
                Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
                Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
                Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
                Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
                Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
                iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1"),
              };
              t.version = "";
              var f = c[t.browser];
              return (
                f &&
                  (t.version = "function" == typeof f ? f() : f == e ? "" : f),
                void 0 == t.browser && (t.browser = "Unknow App"),
                t
              );
            };
            t.default = r;
          },
          function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.default = function (e) {
                e = Object(e);
                for (var t = 1, n = arguments.length; t < n; t++) {
                  var r = arguments[t];
                  if (r)
                    for (var i in r)
                      Object.prototype.hasOwnProperty.call(r, i) &&
                        (e[i] = r[i]);
                }
                return e;
              });
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              return /^\{[\s\S]*\}$/.test(JSON.stringify(e));
            }
            function i(e) {
              return "[object Function]" === {}.toString.call(e);
            }
            function o(e) {
              return "[object Array]" === {}.toString.call(e);
            }
            function a(e) {
              return void 0 === e || "function" == typeof e
                ? e + ""
                : JSON.stringify(e);
            }
            function s(e) {
              if ("string" == typeof e)
                try {
                  return JSON.parse(e);
                } catch (t) {
                  return e;
                }
            }
            function u() {
              if (!(this instanceof u)) return new u();
            }
            function l(e, t) {
              var n = arguments,
                a = null;
              if ((f || (f = u()), 0 === n.length)) return f.get();
              if (1 === n.length) {
                if ("string" == typeof e) return f.get(e);
                if (r(e)) return f.set(e);
              }
              if (2 === n.length && "string" == typeof e) {
                if (!t) return f.remove(e);
                if (t && "string" == typeof t) return f.set(e, t);
                t && i(t) && ((a = null), (a = t(e, f.get(e))), l.set(e, a));
              }
              if (2 === n.length && o(e) && i(t))
                for (var s = 0, c = e.length; s < c; s++)
                  (a = t(e[s], f.get(e[s]))), l.set(e[s], a);
              return l;
            }
            t.__esModule = !0;
            var c = window.localStorage;
            (c = (function (e) {
              var t = "_Is_Incognit";
              try {
                e.setItem(t, "yes");
              } catch (t) {
                if (
                  ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].indexOf(
                    t.name
                  ) > -1
                ) {
                  var n = function () {};
                  e.__proto__ = {
                    setItem: n,
                    getItem: n,
                    removeItem: n,
                    clear: n,
                  };
                }
              } finally {
                "yes" === e.getItem(t) && e.removeItem(t);
              }
              return e;
            })(c)),
              (u.prototype = {
                set: function (e, t) {
                  if (e && !r(e)) c.setItem(e, a(t));
                  else if (r(e)) for (var n in e) this.set(n, e[n]);
                  return this;
                },
                get: function (e) {
                  if (!e) {
                    var t = {};
                    return (
                      this.each(function (e, n) {
                        return (t[e] = n);
                      }),
                      t
                    );
                  }
                  if ("?" === e.charAt(0)) return this.has(e.substr(1));
                  var n = arguments;
                  if (n.length > 1) {
                    for (var r = {}, i = 0, o = n.length; i < o; i++) {
                      var a = s(c.getItem(n[i]));
                      a && (r[n[i]] = a);
                    }
                    return r;
                  }
                  return s(c.getItem(e));
                },
                clear: function () {
                  return c.clear(), this;
                },
                remove: function (e) {
                  var t = this.get(e);
                  return c.removeItem(e), t;
                },
                has: function (e) {
                  return {}.hasOwnProperty.call(this.get(), e);
                },
                keys: function () {
                  var e = [];
                  return (
                    this.each(function (t) {
                      e.push(t);
                    }),
                    e
                  );
                },
                each: function (e) {
                  for (var t = 0, n = c.length; t < n; t++) {
                    var r = c.key(t);
                    e(r, this.get(r));
                  }
                  return this;
                },
                search: function (e) {
                  for (
                    var t = this.keys(), n = {}, r = 0, i = t.length;
                    r < i;
                    r++
                  )
                    t[r].indexOf(e) > -1 && (n[t[r]] = this.get(t[r]));
                  return n;
                },
              });
            var f = null;
            for (var p in u.prototype) l[p] = u.prototype[p];
            t.default = l;
          },
          function (e, t, n) {
            var r, i;
            !(function (n, o) {
              o = (function (e, t, n) {
                function r(i, o, a) {
                  return (
                    (a = Object.create(r.fn)),
                    i &&
                      a.push.apply(
                        a,
                        i[t]
                          ? [i]
                          : "" + i === i
                          ? /</.test(i)
                            ? (((o = e.createElement(o)).innerHTML = i),
                              o.children)
                            : o
                            ? (o = r(o)[0])
                              ? o[n](i)
                              : a
                            : e[n](i)
                          : i
                      ),
                    a
                  );
                }
                return (
                  (r.fn = []),
                  (r.one = function (e, t) {
                    return r(e, t)[0] || null;
                  }),
                  r
                );
              })(document, "addEventListener", "querySelectorAll");
              (r = []),
                void 0 !==
                  (i = function () {
                    return o;
                  }.apply(t, r)) && (e.exports = i);
            })();
          },
          function (e, t, n) {
            function r(e) {
              return void 0 === e || null === e;
            }
            function i(e) {
              var t = {};
              for (var n in e) t[n] = e[n];
              return t;
            }
            function o(e) {
              (e = i(e || {})),
                (e.whiteList = e.whiteList || a.whiteList),
                (e.onAttr = e.onAttr || a.onAttr),
                (e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr),
                (e.safeAttrValue = e.safeAttrValue || a.safeAttrValue),
                (this.options = e);
            }
            var a = n(16),
              s = n(51);
            n(17),
              (o.prototype.process = function (e) {
                if (((e = e || ""), !(e = e.toString()))) return "";
                var t = this,
                  n = t.options,
                  i = n.whiteList,
                  o = n.onAttr,
                  a = n.onIgnoreAttr,
                  u = n.safeAttrValue;
                return s(e, function (e, t, n, s, l) {
                  var c = i[n],
                    f = !1;
                  if (
                    (!0 === c
                      ? (f = c)
                      : "function" == typeof c
                      ? (f = c(s))
                      : c instanceof RegExp && (f = c.test(s)),
                    !0 !== f && (f = !1),
                    (s = u(n, s)))
                  ) {
                    var p = {
                      position: t,
                      sourcePosition: e,
                      source: l,
                      isWhite: f,
                    };
                    if (f) {
                      var d = o(n, s, p);
                      return r(d) ? n + ":" + s : d;
                    }
                    d = a(n, s, p);
                    return r(d) ? void 0 : d;
                  }
                });
              }),
              (e.exports = o);
          },
          function (e, t, n) {
            function r(e, t) {
              function n() {
                if (!o) {
                  var n = i.trim(e.slice(a, s)),
                    r = n.indexOf(":");
                  if (-1 !== r) {
                    var l = i.trim(n.slice(0, r)),
                      c = i.trim(n.slice(r + 1));
                    if (l) {
                      var f = t(a, u.length, l, c, n);
                      f && (u += f + "; ");
                    }
                  }
                }
                a = s + 1;
              }
              (e = i.trimRight(e)), ";" !== e[e.length - 1] && (e += ";");
              for (var r = e.length, o = !1, a = 0, s = 0, u = ""; s < r; s++) {
                var l = e[s];
                if ("/" === l && "*" === e[s + 1]) {
                  var c = e.indexOf("*/", s + 2);
                  if (-1 === c) break;
                  (s = c + 1), (a = s + 1), (o = !1);
                } else
                  "(" === l
                    ? (o = !0)
                    : ")" === l
                    ? (o = !1)
                    : ";" === l
                    ? o || n()
                    : "\n" === l && n();
              }
              return i.trim(u);
            }
            var i = n(17);
            e.exports = r;
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = n(1),
              o = r("%TypeError%"),
              a = n(54),
              s = r("%Reflect.apply%", !0) || i("%Function.prototype.apply%");
            e.exports = function (e, t) {
              var n = arguments.length > 2 ? arguments[2] : [];
              if (!a(n))
                throw new o(
                  "Assertion failed: optional `argumentsList`, if provided, must be a List"
                );
              return s(e, t, n);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%TypeError%"),
              o = n(19),
              a = n(8);
            e.exports = function (e, t) {
              if ("Object" !== a(e))
                throw new i("Assertion failed: `O` must be an Object");
              if (!o(t))
                throw new i("Assertion failed: `P` must be a Property Key");
              return t in e;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%Array%"),
              o = !i.isArray && n(1)("Object.prototype.toString");
            e.exports =
              i.isArray ||
              function (e) {
                return "[object Array]" === o(e);
              };
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(10);
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%TypeError%"),
              o = n(18),
              a = n(58),
              s = n(8);
            e.exports = function (e) {
              if ("Object" !== s(e))
                throw new i("Assertion failed: `obj` must be an Object");
              return a(o(e, "length"));
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(63),
              i = n(59);
            e.exports = function (e) {
              var t = i(e);
              return 0 !== t && (t = r(t)), 0 === t ? 0 : t;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(72),
              i = n(57);
            e.exports = function (e) {
              var t = i(e);
              return t <= 0 ? 0 : t > r ? r : t;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%TypeError%"),
              o = r("%Number%"),
              a = r("%RegExp%"),
              s = r("%parseInt%"),
              u = n(1),
              l = n(73),
              c = n(71),
              f = u("String.prototype.slice"),
              p = l(/^0b[01]+$/i),
              d = l(/^0o[0-7]+$/i),
              h = l(/^[-+]0x[0-9a-f]+$/i),
              v = ["", "​", "￾"].join(""),
              g = new a("[" + v + "]", "g"),
              m = l(g),
              y = [
                "\t\n\v\f\r   ᠎    ",
                "         　\u2028",
                "\u2029\ufeff",
              ].join(""),
              b = new RegExp("(^[" + y + "]+)|([" + y + "]+$)", "g"),
              w = u("String.prototype.replace"),
              D = function (e) {
                return w(e, b, "");
              },
              x = n(61);
            e.exports = function e(t) {
              var n = c(t) ? t : x(t, o);
              if ("symbol" == typeof n)
                throw new i("Cannot convert a Symbol value to a number");
              if ("bigint" == typeof n)
                throw new i(
                  "Conversion from 'BigInt' to 'number' is not allowed."
                );
              if ("string" == typeof n) {
                if (p(n)) return e(s(f(n, 2), 2));
                if (d(n)) return e(s(f(n, 2), 8));
                if (m(n) || h(n)) return NaN;
                var r = D(n);
                if (r !== n) return e(r);
              }
              return o(n);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%Object%"),
              o = n(5);
            e.exports = function (e) {
              return o(e), i(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(76);
            e.exports = function (e) {
              return arguments.length > 1 ? r(e, arguments[1]) : r(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%TypeError%");
            e.exports = function (e, t) {
              if (null == e) throw new i(t || "Cannot call method on " + e);
              return e;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(67),
              i = n(68),
              o = n(64),
              a = n(70),
              s = n(69),
              u = n(74);
            e.exports = function (e) {
              var t = o(e);
              return a(t) ? 0 : 0 !== t && s(t) ? u(t) * i(r(t)) : t;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(65);
            e.exports = function (e) {
              var t = r(e, Number);
              if ("string" != typeof t) return +t;
              var n = t.replace(
                /^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,
                ""
              );
              return /^0[ob]|^[+-]0x/.test(n) ? NaN : +n;
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(77);
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return null === e
                ? "Null"
                : void 0 === e
                ? "Undefined"
                : "function" == typeof e || "object" == typeof e
                ? "Object"
                : "number" == typeof e
                ? "Number"
                : "boolean" == typeof e
                ? "Boolean"
                : "string" == typeof e
                ? "String"
                : void 0;
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%Math.abs%");
            e.exports = function (e) {
              return i(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = Math.floor;
            e.exports = function (e) {
              return r(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r =
              Number.isNaN ||
              function (e) {
                return e !== e;
              };
            e.exports =
              Number.isFinite ||
              function (e) {
                return (
                  "number" == typeof e && !r(e) && e !== 1 / 0 && e !== -1 / 0
                );
              };
          },
          function (e, t, n) {
            "use strict";
            e.exports =
              Number.isNaN ||
              function (e) {
                return e !== e;
              };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return (
                null === e || ("function" != typeof e && "object" != typeof e)
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("%Math%"),
              o = r("%Number%");
            e.exports = o.MAX_SAFE_INTEGER || i.pow(2, 53) - 1;
          },
          function (e, t, n) {
            "use strict";
            var r = n(0),
              i = r("RegExp.prototype.test"),
              o = n(4);
            e.exports = function (e) {
              return o(i, e);
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return e >= 0 ? 1 : -1;
            };
          },
          function (e, t) {
            e.exports = function (e) {
              var t = !0,
                n = !0,
                r = !1;
              if ("function" == typeof e) {
                try {
                  e.call("f", function (e, n, r) {
                    "object" != typeof r && (t = !1);
                  }),
                    e.call(
                      [null],
                      function () {
                        "use strict";
                        n = "string" == typeof this;
                      },
                      "x"
                    );
                } catch (e) {
                  r = !0;
                }
                return !r && t && n;
              }
              return !1;
            };
          },
          function (e, t, n) {
            "use strict";
            var r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator,
              i = n(21),
              o = n(10),
              a = n(80),
              s = n(82),
              u = function (e, t) {
                if (void 0 === e || null === e)
                  throw new TypeError("Cannot call method on " + e);
                if ("string" != typeof t || ("number" !== t && "string" !== t))
                  throw new TypeError('hint must be "string" or "number"');
                var n,
                  r,
                  a,
                  s =
                    "string" === t
                      ? ["toString", "valueOf"]
                      : ["valueOf", "toString"];
                for (a = 0; a < s.length; ++a)
                  if (((n = e[s[a]]), o(n) && ((r = n.call(e)), i(r))))
                    return r;
                throw new TypeError("No default value");
              },
              l = function (e, t) {
                var n = e[t];
                if (null !== n && void 0 !== n) {
                  if (!o(n))
                    throw new TypeError(
                      n +
                        " returned for property " +
                        t +
                        " of object " +
                        e +
                        " is not a function"
                    );
                  return n;
                }
              };
            e.exports = function (e) {
              if (i(e)) return e;
              var t,
                n = "default";
              if (
                (arguments.length > 1 &&
                  (arguments[1] === String
                    ? (n = "string")
                    : arguments[1] === Number && (n = "number")),
                r &&
                  (Symbol.toPrimitive
                    ? (t = l(e, Symbol.toPrimitive))
                    : s(e) && (t = Symbol.prototype.valueOf)),
                void 0 !== t)
              ) {
                var o = t.call(e, n);
                if (i(o)) return o;
                throw new TypeError(
                  "unable to convert exotic object to primitive"
                );
              }
              return (
                "default" === n && (a(e) || s(e)) && (n = "string"),
                u(e, "default" === n ? "number" : n)
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = Object.prototype.toString,
              i = n(21),
              o = n(10),
              a = {
                "[[DefaultValue]]": function (e) {
                  var t;
                  if (
                    (t =
                      arguments.length > 1
                        ? arguments[1]
                        : "[object Date]" === r.call(e)
                        ? String
                        : Number) === String ||
                    t === Number
                  ) {
                    var n,
                      a,
                      s =
                        t === String
                          ? ["toString", "valueOf"]
                          : ["valueOf", "toString"];
                    for (a = 0; a < s.length; ++a)
                      if (o(e[s[a]]) && ((n = e[s[a]]()), i(n))) return n;
                    throw new TypeError("No default value");
                  }
                  throw new TypeError("invalid [[DefaultValue]] hint supplied");
                },
              };
            e.exports = function (e) {
              return i(e)
                ? e
                : arguments.length > 1
                ? a["[[DefaultValue]]"](e, arguments[1])
                : a["[[DefaultValue]]"](e);
            };
          },
          function (e, t, n) {
            "use strict";
            var r = Array.prototype.slice,
              i = Object.prototype.toString;
            e.exports = function (e) {
              var t = this;
              if ("function" != typeof t || "[object Function]" !== i.call(t))
                throw new TypeError(
                  "Function.prototype.bind called on incompatible " + t
                );
              for (
                var n,
                  o = r.call(arguments, 1),
                  a = function () {
                    if (this instanceof n) {
                      var i = t.apply(this, o.concat(r.call(arguments)));
                      return Object(i) === i ? i : this;
                    }
                    return t.apply(e, o.concat(r.call(arguments)));
                  },
                  s = Math.max(0, t.length - o.length),
                  u = [],
                  l = 0;
                l < s;
                l++
              )
                u.push("$" + l);
              if (
                ((n = Function(
                  "binder",
                  "return function (" +
                    u.join(",") +
                    "){ return binder.apply(this,arguments); }"
                )(a)),
                t.prototype)
              ) {
                var c = function () {};
                (c.prototype = t.prototype),
                  (n.prototype = new c()),
                  (c.prototype = null);
              }
              return n;
            };
          },
          function (e, t, n) {
            !(function (t, n) {
              e.exports = n();
            })(0, function () {
              "use strict";
              function e(e) {
                return '<span style="color: slategray">' + e + "</span>";
              }
              var t = (function (e, t) {
                  return (t = { exports: {} }), e(t, t.exports), t.exports;
                })(function (e) {
                  var t = (e.exports = function () {
                    return new RegExp(
                      "(?:" +
                        t.line().source +
                        ")|(?:" +
                        t.block().source +
                        ")",
                      "gm"
                    );
                  });
                  (t.line = function () {
                    return /(?:^|\s)\/\/(.+?)$/gm;
                  }),
                    (t.block = function () {
                      return /\/\*([\S\s]*?)\*\//gm;
                    });
                }),
                n = [
                  "23AC69",
                  "91C132",
                  "F19726",
                  "E8552D",
                  "1AAB8E",
                  "E1147F",
                  "2980C1",
                  "1BA1E6",
                  "9FA0A0",
                  "F19726",
                  "E30B20",
                  "E30B20",
                  "A3338B",
                ];
              return function (r, i) {
                void 0 === i && (i = {});
                var o = i.colors;
                void 0 === o && (o = n);
                var a = 0,
                  s = {},
                  u =
                    /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
                  l = /</,
                  c = new RegExp(
                    "(" + u.source + "|" + l.source + ")|(" + t().source + ")",
                    "gmi"
                  );
                return r.replace(c, function (t, n, r) {
                  if (r) return e(r);
                  if ("<" === n) return "&lt;";
                  var i;
                  s[n] ? (i = s[n]) : ((i = o[a]), (s[n] = i));
                  var u = '<span style="color: #' + i + '">' + n + "</span>";
                  return (a = ++a % o.length), u;
                });
              };
            });
          },
          function (e, t, n) {
            "use strict";
            var r = Date.prototype.getDay,
              i = function (e) {
                try {
                  return r.call(e), !0;
                } catch (e) {
                  return !1;
                }
              },
              o = Object.prototype.toString,
              a = n(24)();
            e.exports = function (e) {
              return (
                "object" == typeof e &&
                null !== e &&
                (a ? i(e) : "[object Date]" === o.call(e))
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = String.prototype.valueOf,
              i = function (e) {
                try {
                  return r.call(e), !0;
                } catch (e) {
                  return !1;
                }
              },
              o = Object.prototype.toString,
              a = n(24)();
            e.exports = function (e) {
              return (
                "string" == typeof e ||
                ("object" == typeof e &&
                  (a ? i(e) : "[object String]" === o.call(e)))
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var r = Object.prototype.toString;
            if (n(22)()) {
              var i = Symbol.prototype.toString,
                o = /^Symbol\(.*\)$/,
                a = function (e) {
                  return "symbol" == typeof e.valueOf() && o.test(i.call(e));
                };
              e.exports = function (e) {
                if ("symbol" == typeof e) return !0;
                if ("[object Symbol]" !== r.call(e)) return !1;
                try {
                  return a(e);
                } catch (e) {
                  return !1;
                }
              };
            } else
              e.exports = function (e) {
                return !1;
              };
          },
          function (e, t, n) {
            !(function (e, n) {
              n(t);
            })(0, function (e) {
              "use strict";
              function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              function n(e, n, r) {
                return (
                  n && t(e.prototype, n),
                  r && t(e, r),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              }
              function r(e, t) {
                if (e) {
                  if ("string" == typeof e) return i(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? i(e, t)
                      : void 0
                  );
                }
              }
              function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
              }
              function o(e, t) {
                var n =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                  Array.isArray(e) ||
                  (n = r(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var i = 0;
                  return function () {
                    return i >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[i++] };
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              function a() {
                return {
                  baseUrl: null,
                  breaks: !1,
                  extensions: null,
                  gfm: !0,
                  headerIds: !0,
                  headerPrefix: "",
                  highlight: null,
                  langPrefix: "language-",
                  mangle: !0,
                  pedantic: !1,
                  renderer: null,
                  sanitize: !1,
                  sanitizer: null,
                  silent: !1,
                  smartLists: !1,
                  smartypants: !1,
                  tokenizer: null,
                  walkTokens: null,
                  xhtml: !1,
                };
              }
              function s(t) {
                e.defaults = t;
              }
              function u(e, t) {
                if (t) {
                  if (k.test(e)) return e.replace(E, _);
                } else if (C.test(e)) return e.replace(F, _);
                return e;
              }
              function l(e) {
                return e.replace(O, function (e, t) {
                  return (
                    (t = t.toLowerCase()),
                    "colon" === t
                      ? ":"
                      : "#" === t.charAt(0)
                      ? "x" === t.charAt(1)
                        ? String.fromCharCode(parseInt(t.substring(2), 16))
                        : String.fromCharCode(+t.substring(1))
                      : ""
                  );
                });
              }
              function c(e, t) {
                (e = e.source || e), (t = t || "");
                var n = {
                  replace: function (t, r) {
                    return (
                      (r = r.source || r),
                      (r = r.replace(B, "$1")),
                      (e = e.replace(t, r)),
                      n
                    );
                  },
                  getRegex: function () {
                    return new RegExp(e, t);
                  },
                };
                return n;
              }
              function f(e, t, n) {
                if (e) {
                  var r;
                  try {
                    r = decodeURIComponent(l(n)).replace(j, "").toLowerCase();
                  } catch (e) {
                    return null;
                  }
                  if (
                    0 === r.indexOf("javascript:") ||
                    0 === r.indexOf("vbscript:") ||
                    0 === r.indexOf("data:")
                  )
                    return null;
                }
                t && !I.test(n) && (n = p(t, n));
                try {
                  n = encodeURI(n).replace(/%25/g, "%");
                } catch (e) {
                  return null;
                }
                return n;
              }
              function p(e, t) {
                T[" " + e] ||
                  (M.test(e)
                    ? (T[" " + e] = e + "/")
                    : (T[" " + e] = v(e, "/", !0))),
                  (e = T[" " + e]);
                var n = -1 === e.indexOf(":");
                return "//" === t.substring(0, 2)
                  ? n
                    ? t
                    : e.replace(P, "$1") + t
                  : "/" === t.charAt(0)
                  ? n
                    ? t
                    : e.replace(z, "$1") + t
                  : e + t;
              }
              function d(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                  for (n in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }
              function h(e, t) {
                var n = e.replace(/\|/g, function (e, t, n) {
                    for (var r = !1, i = t; --i >= 0 && "\\" === n[i]; ) r = !r;
                    return r ? "|" : " |";
                  }),
                  r = n.split(/ \|/),
                  i = 0;
                if (
                  (r[0].trim() || r.shift(),
                  r.length > 0 && !r[r.length - 1].trim() && r.pop(),
                  r.length > t)
                )
                  r.splice(t);
                else for (; r.length < t; ) r.push("");
                for (; i < r.length; i++)
                  r[i] = r[i].trim().replace(/\\\|/g, "|");
                return r;
              }
              function v(e, t, n) {
                var r = e.length;
                if (0 === r) return "";
                for (var i = 0; i < r; ) {
                  var o = e.charAt(r - i - 1);
                  if (o !== t || n) {
                    if (o === t || !n) break;
                    i++;
                  } else i++;
                }
                return e.substr(0, r - i);
              }
              function g(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, r = 0, i = 0; i < n; i++)
                  if ("\\" === e[i]) i++;
                  else if (e[i] === t[0]) r++;
                  else if (e[i] === t[1] && --r < 0) return i;
                return -1;
              }
              function m(e) {
                e && e.sanitize && e.silent;
              }
              function y(e, t) {
                if (t < 1) return "";
                for (var n = ""; t > 1; )
                  1 & t && (n += e), (t >>= 1), (e += e);
                return n + e;
              }
              function b(e, t, n, r) {
                var i = t.href,
                  o = t.title ? u(t.title) : null,
                  a = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                  r.state.inLink = !0;
                  var s = {
                    type: "link",
                    raw: n,
                    href: i,
                    title: o,
                    text: a,
                    tokens: r.inlineTokens(a, []),
                  };
                  return (r.state.inLink = !1), s;
                }
                return { type: "image", raw: n, href: i, title: o, text: u(a) };
              }
              function w(e, t) {
                var n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                var r = n[1];
                return t
                  .split("\n")
                  .map(function (e) {
                    var t = e.match(/^\s+/);
                    return null === t
                      ? e
                      : t[0].length >= r.length
                      ? e.slice(r.length)
                      : e;
                  })
                  .join("\n");
              }
              function D(e) {
                return e
                  .replace(/---/g, "—")
                  .replace(/--/g, "–")
                  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                  .replace(/'/g, "’")
                  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                  .replace(/"/g, "”")
                  .replace(/\.{3}/g, "…");
              }
              function x(e) {
                var t,
                  n,
                  r = "",
                  i = e.length;
                for (t = 0; t < i; t++)
                  (n = e.charCodeAt(t)),
                    Math.random() > 0.5 && (n = "x" + n.toString(16)),
                    (r += "&#" + n + ";");
                return r;
              }
              function A(e, t, n) {
                if (void 0 === e || null === e)
                  throw new Error(
                    "marked(): input parameter is undefined or null"
                  );
                if ("string" != typeof e)
                  throw new Error(
                    "marked(): input parameter is of type " +
                      Object.prototype.toString.call(e) +
                      ", string expected"
                  );
                if (
                  ("function" == typeof t && ((n = t), (t = null)),
                  (t = d({}, A.defaults, t || {})),
                  m(t),
                  n)
                ) {
                  var r,
                    i = t.highlight;
                  try {
                    r = U.lex(e, t);
                  } catch (e) {
                    return n(e);
                  }
                  var o = function (e) {
                    var o;
                    if (!e)
                      try {
                        t.walkTokens && A.walkTokens(r, t.walkTokens),
                          (o = W.parse(r, t));
                      } catch (t) {
                        e = t;
                      }
                    return (t.highlight = i), e ? n(e) : n(null, o);
                  };
                  if (!i || i.length < 3) return o();
                  if ((delete t.highlight, !r.length)) return o();
                  var a = 0;
                  return (
                    A.walkTokens(r, function (e) {
                      "code" === e.type &&
                        (a++,
                        setTimeout(function () {
                          i(e.text, e.lang, function (t, n) {
                            if (t) return o(t);
                            null != n &&
                              n !== e.text &&
                              ((e.text = n), (e.escaped = !0)),
                              0 === --a && o();
                          });
                        }, 0));
                    }),
                    void (0 === a && o())
                  );
                }
                try {
                  var s = U.lex(e, t);
                  return (
                    t.walkTokens && A.walkTokens(s, t.walkTokens), W.parse(s, t)
                  );
                } catch (e) {
                  if (
                    ((e.message +=
                      "\nPlease report this to https://github.com/markedjs/marked."),
                    t.silent)
                  )
                    return (
                      "<p>An error occurred:</p><pre>" +
                      u(e.message + "", !0) +
                      "</pre>"
                    );
                  throw e;
                }
              }
              e.defaults = a();
              var k = /[&<>"']/,
                E = /[&<>"']/g,
                C = /[<>"']|&(?!#?\w+;)/,
                F = /[<>"']|&(?!#?\w+;)/g,
                S = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                },
                _ = function (e) {
                  return S[e];
                },
                O = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
                B = /(^|[^\[])\^/g,
                j = /[^\w:]/g,
                I = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
                T = {},
                M = /^[^:]+:\/*[^/]*$/,
                P = /^([^:]+:)[\s\S]*$/,
                z = /^([^:]+:\/*[^/]*)[\s\S]*$/,
                L = { exec: function () {} },
                R = (function () {
                  function t(t) {
                    this.options = t || e.defaults;
                  }
                  var n = t.prototype;
                  return (
                    (n.space = function (e) {
                      var t = this.rules.block.newline.exec(e);
                      if (t && t[0].length > 0)
                        return { type: "space", raw: t[0] };
                    }),
                    (n.code = function (e) {
                      var t = this.rules.block.code.exec(e);
                      if (t) {
                        var n = t[0].replace(/^ {1,4}/gm, "");
                        return {
                          type: "code",
                          raw: t[0],
                          codeBlockStyle: "indented",
                          text: this.options.pedantic ? n : v(n, "\n"),
                        };
                      }
                    }),
                    (n.fences = function (e) {
                      var t = this.rules.block.fences.exec(e);
                      if (t) {
                        var n = t[0],
                          r = w(n, t[3] || "");
                        return {
                          type: "code",
                          raw: n,
                          lang: t[2] ? t[2].trim() : t[2],
                          text: r,
                        };
                      }
                    }),
                    (n.heading = function (e) {
                      var t = this.rules.block.heading.exec(e);
                      if (t) {
                        var n = t[2].trim();
                        if (/#$/.test(n)) {
                          var r = v(n, "#");
                          this.options.pedantic
                            ? (n = r.trim())
                            : (r && !/ $/.test(r)) || (n = r.trim());
                        }
                        var i = {
                          type: "heading",
                          raw: t[0],
                          depth: t[1].length,
                          text: n,
                          tokens: [],
                        };
                        return this.lexer.inline(i.text, i.tokens), i;
                      }
                    }),
                    (n.hr = function (e) {
                      var t = this.rules.block.hr.exec(e);
                      if (t) return { type: "hr", raw: t[0] };
                    }),
                    (n.blockquote = function (e) {
                      var t = this.rules.block.blockquote.exec(e);
                      if (t) {
                        var n = t[0].replace(/^ *> ?/gm, "");
                        return {
                          type: "blockquote",
                          raw: t[0],
                          tokens: this.lexer.blockTokens(n, []),
                          text: n,
                        };
                      }
                    }),
                    (n.list = function (e) {
                      var t = this.rules.block.list.exec(e);
                      if (t) {
                        var n,
                          r,
                          i,
                          a,
                          s,
                          u,
                          l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          v = t[1].trim(),
                          g = v.length > 1,
                          m = {
                            type: "list",
                            raw: "",
                            ordered: g,
                            start: g ? +v.slice(0, -1) : "",
                            loose: !1,
                            items: [],
                          };
                        (v = g ? "\\d{1,9}\\" + v.slice(-1) : "\\" + v),
                          this.options.pedantic && (v = g ? v : "[*+-]");
                        for (
                          var y = new RegExp(
                            "^( {0,3}" + v + ")((?: [^\\n]*)?(?:\\n|$))"
                          );
                          e &&
                          ((h = !1), (t = y.exec(e))) &&
                          !this.rules.block.hr.test(e);

                        ) {
                          if (
                            ((n = t[0]),
                            (e = e.substring(n.length)),
                            (c = t[2].split("\n", 1)[0]),
                            (f = e.split("\n", 1)[0]),
                            this.options.pedantic
                              ? ((a = 2), (d = c.trimLeft()))
                              : ((a = t[2].search(/[^ ]/)),
                                (a = a > 4 ? 1 : a),
                                (d = c.slice(a)),
                                (a += t[1].length)),
                            (u = !1),
                            !c &&
                              /^ *$/.test(f) &&
                              ((n += f + "\n"),
                              (e = e.substring(f.length + 1)),
                              (h = !0)),
                            !h)
                          )
                            for (
                              var b = new RegExp(
                                "^ {0," +
                                  Math.min(3, a - 1) +
                                  "}(?:[*+-]|\\d{1,9}[.)])"
                              );
                              e &&
                              ((p = e.split("\n", 1)[0]),
                              (c = p),
                              this.options.pedantic &&
                                (c = c.replace(
                                  /^ {1,4}(?=( {4})*[^ ])/g,
                                  "  "
                                )),
                              !b.test(c));

                            ) {
                              if (c.search(/[^ ]/) >= a || !c.trim())
                                d += "\n" + c.slice(a);
                              else {
                                if (u) break;
                                d += "\n" + c;
                              }
                              u || c.trim() || (u = !0),
                                (n += p + "\n"),
                                (e = e.substring(p.length + 1));
                            }
                          m.loose ||
                            (l
                              ? (m.loose = !0)
                              : /\n *\n *$/.test(n) && (l = !0)),
                            this.options.gfm &&
                              (r = /^\[[ xX]\] /.exec(d)) &&
                              ((i = "[ ] " !== r[0]),
                              (d = d.replace(/^\[[ xX]\] +/, ""))),
                            m.items.push({
                              type: "list_item",
                              raw: n,
                              task: !!r,
                              checked: i,
                              loose: !1,
                              text: d,
                            }),
                            (m.raw += n);
                        }
                        (m.items[m.items.length - 1].raw = n.trimRight()),
                          (m.items[m.items.length - 1].text = d.trimRight()),
                          (m.raw = m.raw.trimRight());
                        var w = m.items.length;
                        for (s = 0; s < w; s++) {
                          (this.lexer.state.top = !1),
                            (m.items[s].tokens = this.lexer.blockTokens(
                              m.items[s].text,
                              []
                            ));
                          var D = m.items[s].tokens.filter(function (e) {
                              return "space" === e.type;
                            }),
                            x = D.every(function (e) {
                              for (
                                var t, n = e.raw.split(""), r = 0, i = o(n);
                                !(t = i()).done;

                              )
                                if (("\n" === t.value && (r += 1), r > 1))
                                  return !0;
                              return !1;
                            });
                          !m.loose &&
                            D.length &&
                            x &&
                            ((m.loose = !0), (m.items[s].loose = !0));
                        }
                        return m;
                      }
                    }),
                    (n.html = function (e) {
                      var t = this.rules.block.html.exec(e);
                      if (t) {
                        var n = {
                          type: "html",
                          raw: t[0],
                          pre:
                            !this.options.sanitizer &&
                            ("pre" === t[1] ||
                              "script" === t[1] ||
                              "style" === t[1]),
                          text: t[0],
                        };
                        return (
                          this.options.sanitize &&
                            ((n.type = "paragraph"),
                            (n.text = this.options.sanitizer
                              ? this.options.sanitizer(t[0])
                              : u(t[0])),
                            (n.tokens = []),
                            this.lexer.inline(n.text, n.tokens)),
                          n
                        );
                      }
                    }),
                    (n.def = function (e) {
                      var t = this.rules.block.def.exec(e);
                      if (t)
                        return (
                          t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                          {
                            type: "def",
                            tag: t[1].toLowerCase().replace(/\s+/g, " "),
                            raw: t[0],
                            href: t[2],
                            title: t[3],
                          }
                        );
                    }),
                    (n.table = function (e) {
                      var t = this.rules.block.table.exec(e);
                      if (t) {
                        var n = {
                          type: "table",
                          header: h(t[1]).map(function (e) {
                            return { text: e };
                          }),
                          align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                          rows:
                            t[3] && t[3].trim()
                              ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                              : [],
                        };
                        if (n.header.length === n.align.length) {
                          n.raw = t[0];
                          var r,
                            i,
                            o,
                            a,
                            s = n.align.length;
                          for (r = 0; r < s; r++)
                            /^ *-+: *$/.test(n.align[r])
                              ? (n.align[r] = "right")
                              : /^ *:-+: *$/.test(n.align[r])
                              ? (n.align[r] = "center")
                              : /^ *:-+ *$/.test(n.align[r])
                              ? (n.align[r] = "left")
                              : (n.align[r] = null);
                          for (s = n.rows.length, r = 0; r < s; r++)
                            n.rows[r] = h(n.rows[r], n.header.length).map(
                              function (e) {
                                return { text: e };
                              }
                            );
                          for (s = n.header.length, i = 0; i < s; i++)
                            (n.header[i].tokens = []),
                              this.lexer.inlineTokens(
                                n.header[i].text,
                                n.header[i].tokens
                              );
                          for (s = n.rows.length, i = 0; i < s; i++)
                            for (a = n.rows[i], o = 0; o < a.length; o++)
                              (a[o].tokens = []),
                                this.lexer.inlineTokens(a[o].text, a[o].tokens);
                          return n;
                        }
                      }
                    }),
                    (n.lheading = function (e) {
                      var t = this.rules.block.lheading.exec(e);
                      if (t) {
                        var n = {
                          type: "heading",
                          raw: t[0],
                          depth: "=" === t[2].charAt(0) ? 1 : 2,
                          text: t[1],
                          tokens: [],
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                      }
                    }),
                    (n.paragraph = function (e) {
                      var t = this.rules.block.paragraph.exec(e);
                      if (t) {
                        var n = {
                          type: "paragraph",
                          raw: t[0],
                          text:
                            "\n" === t[1].charAt(t[1].length - 1)
                              ? t[1].slice(0, -1)
                              : t[1],
                          tokens: [],
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                      }
                    }),
                    (n.text = function (e) {
                      var t = this.rules.block.text.exec(e);
                      if (t) {
                        var n = {
                          type: "text",
                          raw: t[0],
                          text: t[0],
                          tokens: [],
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                      }
                    }),
                    (n.escape = function (e) {
                      var t = this.rules.inline.escape.exec(e);
                      if (t)
                        return { type: "escape", raw: t[0], text: u(t[1]) };
                    }),
                    (n.tag = function (e) {
                      var t = this.rules.inline.tag.exec(e);
                      if (t)
                        return (
                          !this.lexer.state.inLink && /^<a /i.test(t[0])
                            ? (this.lexer.state.inLink = !0)
                            : this.lexer.state.inLink &&
                              /^<\/a>/i.test(t[0]) &&
                              (this.lexer.state.inLink = !1),
                          !this.lexer.state.inRawBlock &&
                          /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                            ? (this.lexer.state.inRawBlock = !0)
                            : this.lexer.state.inRawBlock &&
                              /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                              (this.lexer.state.inRawBlock = !1),
                          {
                            type: this.options.sanitize ? "text" : "html",
                            raw: t[0],
                            inLink: this.lexer.state.inLink,
                            inRawBlock: this.lexer.state.inRawBlock,
                            text: this.options.sanitize
                              ? this.options.sanitizer
                                ? this.options.sanitizer(t[0])
                                : u(t[0])
                              : t[0],
                          }
                        );
                    }),
                    (n.link = function (e) {
                      var t = this.rules.inline.link.exec(e);
                      if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                          if (!/>$/.test(n)) return;
                          var r = v(n.slice(0, -1), "\\");
                          if ((n.length - r.length) % 2 == 0) return;
                        } else {
                          var i = g(t[2], "()");
                          if (i > -1) {
                            var o = 0 === t[0].indexOf("!") ? 5 : 4,
                              a = o + t[1].length + i;
                            (t[2] = t[2].substring(0, i)),
                              (t[0] = t[0].substring(0, a).trim()),
                              (t[3] = "");
                          }
                        }
                        var s = t[2],
                          u = "";
                        if (this.options.pedantic) {
                          var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                          l && ((s = l[1]), (u = l[3]));
                        } else u = t[3] ? t[3].slice(1, -1) : "";
                        return (
                          (s = s.trim()),
                          /^</.test(s) &&
                            (s =
                              this.options.pedantic && !/>$/.test(n)
                                ? s.slice(1)
                                : s.slice(1, -1)),
                          b(
                            t,
                            {
                              href: s
                                ? s.replace(this.rules.inline._escapes, "$1")
                                : s,
                              title: u
                                ? u.replace(this.rules.inline._escapes, "$1")
                                : u,
                            },
                            t[0],
                            this.lexer
                          )
                        );
                      }
                    }),
                    (n.reflink = function (e, t) {
                      var n;
                      if (
                        (n = this.rules.inline.reflink.exec(e)) ||
                        (n = this.rules.inline.nolink.exec(e))
                      ) {
                        var r = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (!(r = t[r.toLowerCase()]) || !r.href) {
                          var i = n[0].charAt(0);
                          return { type: "text", raw: i, text: i };
                        }
                        return b(n, r, n[0], this.lexer);
                      }
                    }),
                    (n.emStrong = function (e, t, n) {
                      void 0 === n && (n = "");
                      var r = this.rules.inline.emStrong.lDelim.exec(e);
                      if (
                        r &&
                        (!r[3] ||
                          !n.match(
                            /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                          ))
                      ) {
                        var i = r[1] || r[2] || "";
                        if (
                          !i ||
                          (i &&
                            ("" === n || this.rules.inline.punctuation.exec(n)))
                        ) {
                          var o,
                            a,
                            s = r[0].length - 1,
                            u = s,
                            l = 0,
                            c =
                              "*" === r[0][0]
                                ? this.rules.inline.emStrong.rDelimAst
                                : this.rules.inline.emStrong.rDelimUnd;
                          for (
                            c.lastIndex = 0, t = t.slice(-1 * e.length + s);
                            null != (r = c.exec(t));

                          )
                            if (
                              (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])
                            )
                              if (((a = o.length), r[3] || r[4])) u += a;
                              else if (
                                !((r[5] || r[6]) && s % 3) ||
                                (s + a) % 3
                              ) {
                                if (!((u -= a) > 0)) {
                                  if (
                                    ((a = Math.min(a, a + u + l)),
                                    Math.min(s, a) % 2)
                                  ) {
                                    var f = e.slice(1, s + r.index + a);
                                    return {
                                      type: "em",
                                      raw: e.slice(0, s + r.index + a + 1),
                                      text: f,
                                      tokens: this.lexer.inlineTokens(f, []),
                                    };
                                  }
                                  var p = e.slice(2, s + r.index + a - 1);
                                  return {
                                    type: "strong",
                                    raw: e.slice(0, s + r.index + a + 1),
                                    text: p,
                                    tokens: this.lexer.inlineTokens(p, []),
                                  };
                                }
                              } else l += a;
                        }
                      }
                    }),
                    (n.codespan = function (e) {
                      var t = this.rules.inline.code.exec(e);
                      if (t) {
                        var n = t[2].replace(/\n/g, " "),
                          r = /[^ ]/.test(n),
                          i = /^ /.test(n) && / $/.test(n);
                        return (
                          r && i && (n = n.substring(1, n.length - 1)),
                          (n = u(n, !0)),
                          { type: "codespan", raw: t[0], text: n }
                        );
                      }
                    }),
                    (n.br = function (e) {
                      var t = this.rules.inline.br.exec(e);
                      if (t) return { type: "br", raw: t[0] };
                    }),
                    (n.del = function (e) {
                      var t = this.rules.inline.del.exec(e);
                      if (t)
                        return {
                          type: "del",
                          raw: t[0],
                          text: t[2],
                          tokens: this.lexer.inlineTokens(t[2], []),
                        };
                    }),
                    (n.autolink = function (e, t) {
                      var n,
                        r,
                        i = this.rules.inline.autolink.exec(e);
                      if (i)
                        return (
                          "@" === i[2]
                            ? ((n = u(this.options.mangle ? t(i[1]) : i[1])),
                              (r = "mailto:" + n))
                            : ((n = u(i[1])), (r = n)),
                          {
                            type: "link",
                            raw: i[0],
                            text: n,
                            href: r,
                            tokens: [{ type: "text", raw: n, text: n }],
                          }
                        );
                    }),
                    (n.url = function (e, t) {
                      var n;
                      if ((n = this.rules.inline.url.exec(e))) {
                        var r, i;
                        if ("@" === n[2])
                          (r = u(this.options.mangle ? t(n[0]) : n[0])),
                            (i = "mailto:" + r);
                        else {
                          var o;
                          do {
                            (o = n[0]),
                              (n[0] = this.rules.inline._backpedal.exec(
                                n[0]
                              )[0]);
                          } while (o !== n[0]);
                          (r = u(n[0])),
                            (i = "www." === n[1] ? "http://" + r : r);
                        }
                        return {
                          type: "link",
                          raw: n[0],
                          text: r,
                          href: i,
                          tokens: [{ type: "text", raw: r, text: r }],
                        };
                      }
                    }),
                    (n.inlineText = function (e, t) {
                      var n,
                        r = this.rules.inline.text.exec(e);
                      if (r)
                        return (
                          (n = this.lexer.state.inRawBlock
                            ? this.options.sanitize
                              ? this.options.sanitizer
                                ? this.options.sanitizer(r[0])
                                : u(r[0])
                              : r[0]
                            : u(this.options.smartypants ? t(r[0]) : r[0])),
                          { type: "text", raw: r[0], text: n }
                        );
                    }),
                    t
                  );
                })(),
                Q = {
                  newline: /^(?: *(?:\n|$))+/,
                  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                  fences:
                    /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
                  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
                  table: L,
                  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                  _paragraph:
                    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                  text: /^[^\n]+/,
                  _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
                  _title:
                    /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
                };
              (Q.def = c(Q.def)
                .replace("label", Q._label)
                .replace("title", Q._title)
                .getRegex()),
                (Q.bullet = /(?:[*+-]|\d{1,9}[.)])/),
                (Q.listItemStart = c(/^( *)(bull) */)
                  .replace("bull", Q.bullet)
                  .getRegex()),
                (Q.list = c(Q.list)
                  .replace(/bull/g, Q.bullet)
                  .replace(
                    "hr",
                    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
                  )
                  .replace("def", "\\n+(?=" + Q.def.source + ")")
                  .getRegex()),
                (Q._tag =
                  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
                (Q._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
                (Q.html = c(Q.html, "i")
                  .replace("comment", Q._comment)
                  .replace("tag", Q._tag)
                  .replace(
                    "attribute",
                    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
                  )
                  .getRegex()),
                (Q.paragraph = c(Q._paragraph)
                  .replace("hr", Q.hr)
                  .replace("heading", " {0,3}#{1,6} ")
                  .replace("|lheading", "")
                  .replace("|table", "")
                  .replace("blockquote", " {0,3}>")
                  .replace(
                    "fences",
                    " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                  )
                  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                  .replace(
                    "html",
                    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                  )
                  .replace("tag", Q._tag)
                  .getRegex()),
                (Q.blockquote = c(Q.blockquote)
                  .replace("paragraph", Q.paragraph)
                  .getRegex()),
                (Q.normal = d({}, Q)),
                (Q.gfm = d({}, Q.normal, {
                  table:
                    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
                })),
                (Q.gfm.table = c(Q.gfm.table)
                  .replace("hr", Q.hr)
                  .replace("heading", " {0,3}#{1,6} ")
                  .replace("blockquote", " {0,3}>")
                  .replace("code", " {4}[^\\n]")
                  .replace(
                    "fences",
                    " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                  )
                  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                  .replace(
                    "html",
                    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                  )
                  .replace("tag", Q._tag)
                  .getRegex()),
                (Q.gfm.paragraph = c(Q._paragraph)
                  .replace("hr", Q.hr)
                  .replace("heading", " {0,3}#{1,6} ")
                  .replace("|lheading", "")
                  .replace("table", Q.gfm.table)
                  .replace("blockquote", " {0,3}>")
                  .replace(
                    "fences",
                    " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                  )
                  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                  .replace(
                    "html",
                    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                  )
                  .replace("tag", Q._tag)
                  .getRegex()),
                (Q.pedantic = d({}, Q.normal, {
                  html: c(
                    "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
                  )
                    .replace("comment", Q._comment)
                    .replace(
                      /tag/g,
                      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                    )
                    .getRegex(),
                  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                  heading: /^(#{1,6})(.*)(?:\n+|$)/,
                  fences: L,
                  paragraph: c(Q.normal._paragraph)
                    .replace("hr", Q.hr)
                    .replace("heading", " *#{1,6} *[^\n]")
                    .replace("lheading", Q.lheading)
                    .replace("blockquote", " {0,3}>")
                    .replace("|fences", "")
                    .replace("|list", "")
                    .replace("|html", "")
                    .getRegex(),
                }));
              var N = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: L,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(ref)\]/,
                nolink: /^!?\[(ref)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                emStrong: {
                  lDelim:
                    /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                  rDelimAst:
                    /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
                  rDelimUnd:
                    /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: L,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^([\spunctuation])/,
                _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
              };
              (N.punctuation = c(N.punctuation)
                .replace(/punctuation/g, N._punctuation)
                .getRegex()),
                (N.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
                (N.escapedEmSt = /\\\*|\\_/g),
                (N._comment = c(Q._comment)
                  .replace("(?:--\x3e|$)", "--\x3e")
                  .getRegex()),
                (N.emStrong.lDelim = c(N.emStrong.lDelim)
                  .replace(/punct/g, N._punctuation)
                  .getRegex()),
                (N.emStrong.rDelimAst = c(N.emStrong.rDelimAst, "g")
                  .replace(/punct/g, N._punctuation)
                  .getRegex()),
                (N.emStrong.rDelimUnd = c(N.emStrong.rDelimUnd, "g")
                  .replace(/punct/g, N._punctuation)
                  .getRegex()),
                (N._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
                (N._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
                (N._email =
                  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
                (N.autolink = c(N.autolink)
                  .replace("scheme", N._scheme)
                  .replace("email", N._email)
                  .getRegex()),
                (N._attribute =
                  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
                (N.tag = c(N.tag)
                  .replace("comment", N._comment)
                  .replace("attribute", N._attribute)
                  .getRegex()),
                (N._label =
                  /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
                (N._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
                (N._title =
                  /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
                (N.link = c(N.link)
                  .replace("label", N._label)
                  .replace("href", N._href)
                  .replace("title", N._title)
                  .getRegex()),
                (N.reflink = c(N.reflink)
                  .replace("label", N._label)
                  .replace("ref", Q._label)
                  .getRegex()),
                (N.nolink = c(N.nolink).replace("ref", Q._label).getRegex()),
                (N.reflinkSearch = c(N.reflinkSearch, "g")
                  .replace("reflink", N.reflink)
                  .replace("nolink", N.nolink)
                  .getRegex()),
                (N.normal = d({}, N)),
                (N.pedantic = d({}, N.normal, {
                  strong: {
                    start: /^__|\*\*/,
                    middle:
                      /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    endAst: /\*\*(?!\*)/g,
                    endUnd: /__(?!_)/g,
                  },
                  em: {
                    start: /^_|\*/,
                    middle:
                      /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                    endAst: /\*(?!\*)/g,
                    endUnd: /_(?!_)/g,
                  },
                  link: c(/^!?\[(label)\]\((.*?)\)/)
                    .replace("label", N._label)
                    .getRegex(),
                  reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                    .replace("label", N._label)
                    .getRegex(),
                })),
                (N.gfm = d({}, N.normal, {
                  escape: c(N.escape).replace("])", "~|])").getRegex(),
                  _extended_email:
                    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                  _backpedal:
                    /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
                })),
                (N.gfm.url = c(N.gfm.url, "i")
                  .replace("email", N.gfm._extended_email)
                  .getRegex()),
                (N.breaks = d({}, N.gfm, {
                  br: c(N.br).replace("{2,}", "*").getRegex(),
                  text: c(N.gfm.text)
                    .replace("\\b_", "\\b_| {2,}\\n")
                    .replace(/\{2,\}/g, "*")
                    .getRegex(),
                }));
              var U = (function () {
                  function t(t) {
                    (this.tokens = []),
                      (this.tokens.links = Object.create(null)),
                      (this.options = t || e.defaults),
                      (this.options.tokenizer =
                        this.options.tokenizer || new R()),
                      (this.tokenizer = this.options.tokenizer),
                      (this.tokenizer.options = this.options),
                      (this.tokenizer.lexer = this),
                      (this.inlineQueue = []),
                      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
                    var n = { block: Q.normal, inline: N.normal };
                    this.options.pedantic
                      ? ((n.block = Q.pedantic), (n.inline = N.pedantic))
                      : this.options.gfm &&
                        ((n.block = Q.gfm),
                        this.options.breaks
                          ? (n.inline = N.breaks)
                          : (n.inline = N.gfm)),
                      (this.tokenizer.rules = n);
                  }
                  (t.lex = function (e, n) {
                    return new t(n).lex(e);
                  }),
                    (t.lexInline = function (e, n) {
                      return new t(n).inlineTokens(e);
                    });
                  var r = t.prototype;
                  return (
                    (r.lex = function (e) {
                      (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                        this.blockTokens(e, this.tokens);
                      for (var t; (t = this.inlineQueue.shift()); )
                        this.inlineTokens(t.src, t.tokens);
                      return this.tokens;
                    }),
                    (r.blockTokens = function (e, t) {
                      var n,
                        r,
                        i,
                        o,
                        a = this;
                      for (
                        void 0 === t && (t = []),
                          this.options.pedantic &&
                            (e = e.replace(/^ +$/gm, ""));
                        e;

                      )
                        if (
                          !(
                            this.options.extensions &&
                            this.options.extensions.block &&
                            this.options.extensions.block.some(function (r) {
                              return (
                                !!(n = r.call({ lexer: a }, e, t)) &&
                                ((e = e.substring(n.raw.length)), t.push(n), !0)
                              );
                            })
                          )
                        )
                          if ((n = this.tokenizer.space(e)))
                            (e = e.substring(n.raw.length)),
                              1 === n.raw.length && t.length > 0
                                ? (t[t.length - 1].raw += "\n")
                                : t.push(n);
                          else if ((n = this.tokenizer.code(e)))
                            (e = e.substring(n.raw.length)),
                              (r = t[t.length - 1]),
                              !r ||
                              ("paragraph" !== r.type && "text" !== r.type)
                                ? t.push(n)
                                : ((r.raw += "\n" + n.raw),
                                  (r.text += "\n" + n.text),
                                  (this.inlineQueue[
                                    this.inlineQueue.length - 1
                                  ].src = r.text));
                          else if ((n = this.tokenizer.fences(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.heading(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.hr(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.blockquote(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.list(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.html(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.def(e)))
                            (e = e.substring(n.raw.length)),
                              (r = t[t.length - 1]),
                              !r ||
                              ("paragraph" !== r.type && "text" !== r.type)
                                ? this.tokens.links[n.tag] ||
                                  (this.tokens.links[n.tag] = {
                                    href: n.href,
                                    title: n.title,
                                  })
                                : ((r.raw += "\n" + n.raw),
                                  (r.text += "\n" + n.raw),
                                  (this.inlineQueue[
                                    this.inlineQueue.length - 1
                                  ].src = r.text));
                          else if ((n = this.tokenizer.table(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if ((n = this.tokenizer.lheading(e)))
                            (e = e.substring(n.raw.length)), t.push(n);
                          else if (
                            ((i = e),
                            this.options.extensions &&
                              this.options.extensions.startBlock &&
                              (function () {
                                var t = 1 / 0,
                                  n = e.slice(1),
                                  r = void 0;
                                a.options.extensions.startBlock.forEach(
                                  function (e) {
                                    "number" ==
                                      typeof (r = e.call({ lexer: this }, n)) &&
                                      r >= 0 &&
                                      (t = Math.min(t, r));
                                  }
                                ),
                                  t < 1 / 0 &&
                                    t >= 0 &&
                                    (i = e.substring(0, t + 1));
                              })(),
                            this.state.top && (n = this.tokenizer.paragraph(i)))
                          )
                            (r = t[t.length - 1]),
                              o && "paragraph" === r.type
                                ? ((r.raw += "\n" + n.raw),
                                  (r.text += "\n" + n.text),
                                  this.inlineQueue.pop(),
                                  (this.inlineQueue[
                                    this.inlineQueue.length - 1
                                  ].src = r.text))
                                : t.push(n),
                              (o = i.length !== e.length),
                              (e = e.substring(n.raw.length));
                          else if ((n = this.tokenizer.text(e)))
                            (e = e.substring(n.raw.length)),
                              (r = t[t.length - 1]),
                              r && "text" === r.type
                                ? ((r.raw += "\n" + n.raw),
                                  (r.text += "\n" + n.text),
                                  this.inlineQueue.pop(),
                                  (this.inlineQueue[
                                    this.inlineQueue.length - 1
                                  ].src = r.text))
                                : t.push(n);
                          else if (e) {
                            var s = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) break;
                            throw new Error(s);
                          }
                      return (this.state.top = !0), t;
                    }),
                    (r.inline = function (e, t) {
                      this.inlineQueue.push({ src: e, tokens: t });
                    }),
                    (r.inlineTokens = function (e, t) {
                      var n = this;
                      void 0 === t && (t = []);
                      var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = e;
                      if (this.tokens.links) {
                        var c = Object.keys(this.tokens.links);
                        if (c.length > 0)
                          for (
                            ;
                            null !=
                            (a =
                              this.tokenizer.rules.inline.reflinkSearch.exec(
                                l
                              ));

                          )
                            c.includes(
                              a[0].slice(a[0].lastIndexOf("[") + 1, -1)
                            ) &&
                              (l =
                                l.slice(0, a.index) +
                                "[" +
                                y("a", a[0].length - 2) +
                                "]" +
                                l.slice(
                                  this.tokenizer.rules.inline.reflinkSearch
                                    .lastIndex
                                ));
                      }
                      for (
                        ;
                        null !=
                        (a = this.tokenizer.rules.inline.blockSkip.exec(l));

                      )
                        l =
                          l.slice(0, a.index) +
                          "[" +
                          y("a", a[0].length - 2) +
                          "]" +
                          l.slice(
                            this.tokenizer.rules.inline.blockSkip.lastIndex
                          );
                      for (
                        ;
                        null !=
                        (a = this.tokenizer.rules.inline.escapedEmSt.exec(l));

                      )
                        l =
                          l.slice(0, a.index) +
                          "++" +
                          l.slice(
                            this.tokenizer.rules.inline.escapedEmSt.lastIndex
                          );
                      for (; e; )
                        if (
                          (s || (u = ""),
                          (s = !1),
                          !(
                            this.options.extensions &&
                            this.options.extensions.inline &&
                            this.options.extensions.inline.some(function (i) {
                              return (
                                !!(r = i.call({ lexer: n }, e, t)) &&
                                ((e = e.substring(r.raw.length)), t.push(r), !0)
                              );
                            })
                          ))
                        )
                          if ((r = this.tokenizer.escape(e)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if ((r = this.tokenizer.tag(e)))
                            (e = e.substring(r.raw.length)),
                              (i = t[t.length - 1]),
                              i && "text" === r.type && "text" === i.type
                                ? ((i.raw += r.raw), (i.text += r.text))
                                : t.push(r);
                          else if ((r = this.tokenizer.link(e)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if (
                            (r = this.tokenizer.reflink(e, this.tokens.links))
                          )
                            (e = e.substring(r.raw.length)),
                              (i = t[t.length - 1]),
                              i && "text" === r.type && "text" === i.type
                                ? ((i.raw += r.raw), (i.text += r.text))
                                : t.push(r);
                          else if ((r = this.tokenizer.emStrong(e, l, u)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if ((r = this.tokenizer.codespan(e)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if ((r = this.tokenizer.br(e)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if ((r = this.tokenizer.del(e)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if ((r = this.tokenizer.autolink(e, x)))
                            (e = e.substring(r.raw.length)), t.push(r);
                          else if (
                            this.state.inLink ||
                            !(r = this.tokenizer.url(e, x))
                          ) {
                            if (
                              ((o = e),
                              this.options.extensions &&
                                this.options.extensions.startInline &&
                                (function () {
                                  var t = 1 / 0,
                                    r = e.slice(1),
                                    i = void 0;
                                  n.options.extensions.startInline.forEach(
                                    function (e) {
                                      "number" ==
                                        typeof (i = e.call(
                                          { lexer: this },
                                          r
                                        )) &&
                                        i >= 0 &&
                                        (t = Math.min(t, i));
                                    }
                                  ),
                                    t < 1 / 0 &&
                                      t >= 0 &&
                                      (o = e.substring(0, t + 1));
                                })(),
                              (r = this.tokenizer.inlineText(o, D)))
                            )
                              (e = e.substring(r.raw.length)),
                                "_" !== r.raw.slice(-1) &&
                                  (u = r.raw.slice(-1)),
                                (s = !0),
                                (i = t[t.length - 1]),
                                i && "text" === i.type
                                  ? ((i.raw += r.raw), (i.text += r.text))
                                  : t.push(r);
                            else if (e) {
                              var f =
                                "Infinite loop on byte: " + e.charCodeAt(0);
                              if (this.options.silent) break;
                              throw new Error(f);
                            }
                          } else (e = e.substring(r.raw.length)), t.push(r);
                      return t;
                    }),
                    n(t, null, [
                      {
                        key: "rules",
                        get: function () {
                          return { block: Q, inline: N };
                        },
                      },
                    ]),
                    t
                  );
                })(),
                V = (function () {
                  function t(t) {
                    this.options = t || e.defaults;
                  }
                  var n = t.prototype;
                  return (
                    (n.code = function (e, t, n) {
                      var r = (t || "").match(/\S*/)[0];
                      if (this.options.highlight) {
                        var i = this.options.highlight(e, r);
                        null != i && i !== e && ((n = !0), (e = i));
                      }
                      return (
                        (e = e.replace(/\n$/, "") + "\n"),
                        r
                          ? '<pre><code class="' +
                            this.options.langPrefix +
                            u(r, !0) +
                            '">' +
                            (n ? e : u(e, !0)) +
                            "</code></pre>\n"
                          : "<pre><code>" +
                            (n ? e : u(e, !0)) +
                            "</code></pre>\n"
                      );
                    }),
                    (n.blockquote = function (e) {
                      return "<blockquote>\n" + e + "</blockquote>\n";
                    }),
                    (n.html = function (e) {
                      return e;
                    }),
                    (n.heading = function (e, t, n, r) {
                      return this.options.headerIds
                        ? "<h" +
                            t +
                            ' id="' +
                            this.options.headerPrefix +
                            r.slug(n) +
                            '">' +
                            e +
                            "</h" +
                            t +
                            ">\n"
                        : "<h" + t + ">" + e + "</h" + t + ">\n";
                    }),
                    (n.hr = function () {
                      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                    }),
                    (n.list = function (e, t, n) {
                      var r = t ? "ol" : "ul";
                      return (
                        "<" +
                        r +
                        (t && 1 !== n ? ' start="' + n + '"' : "") +
                        ">\n" +
                        e +
                        "</" +
                        r +
                        ">\n"
                      );
                    }),
                    (n.listitem = function (e) {
                      return "<li>" + e + "</li>\n";
                    }),
                    (n.checkbox = function (e) {
                      return (
                        "<input " +
                        (e ? 'checked="" ' : "") +
                        'disabled="" type="checkbox"' +
                        (this.options.xhtml ? " /" : "") +
                        "> "
                      );
                    }),
                    (n.paragraph = function (e) {
                      return "<p>" + e + "</p>\n";
                    }),
                    (n.table = function (e, t) {
                      return (
                        t && (t = "<tbody>" + t + "</tbody>"),
                        "<table>\n<thead>\n" +
                          e +
                          "</thead>\n" +
                          t +
                          "</table>\n"
                      );
                    }),
                    (n.tablerow = function (e) {
                      return "<tr>\n" + e + "</tr>\n";
                    }),
                    (n.tablecell = function (e, t) {
                      var n = t.header ? "th" : "td";
                      return (
                        (t.align
                          ? "<" + n + ' align="' + t.align + '">'
                          : "<" + n + ">") +
                        e +
                        "</" +
                        n +
                        ">\n"
                      );
                    }),
                    (n.strong = function (e) {
                      return "<strong>" + e + "</strong>";
                    }),
                    (n.em = function (e) {
                      return "<em>" + e + "</em>";
                    }),
                    (n.codespan = function (e) {
                      return "<code>" + e + "</code>";
                    }),
                    (n.br = function () {
                      return this.options.xhtml ? "<br/>" : "<br>";
                    }),
                    (n.del = function (e) {
                      return "<del>" + e + "</del>";
                    }),
                    (n.link = function (e, t, n) {
                      if (
                        null ===
                        (e = f(this.options.sanitize, this.options.baseUrl, e))
                      )
                        return n;
                      var r = '<a href="' + u(e) + '"';
                      return (
                        t && (r += ' title="' + t + '"'), r + ">" + n + "</a>"
                      );
                    }),
                    (n.image = function (e, t, n) {
                      if (
                        null ===
                        (e = f(this.options.sanitize, this.options.baseUrl, e))
                      )
                        return n;
                      var r = '<img src="' + e + '" alt="' + n + '"';
                      return (
                        t && (r += ' title="' + t + '"'),
                        r + (this.options.xhtml ? "/>" : ">")
                      );
                    }),
                    (n.text = function (e) {
                      return e;
                    }),
                    t
                  );
                })(),
                $ = (function () {
                  function e() {}
                  var t = e.prototype;
                  return (
                    (t.strong = function (e) {
                      return e;
                    }),
                    (t.em = function (e) {
                      return e;
                    }),
                    (t.codespan = function (e) {
                      return e;
                    }),
                    (t.del = function (e) {
                      return e;
                    }),
                    (t.html = function (e) {
                      return e;
                    }),
                    (t.text = function (e) {
                      return e;
                    }),
                    (t.link = function (e, t, n) {
                      return "" + n;
                    }),
                    (t.image = function (e, t, n) {
                      return "" + n;
                    }),
                    (t.br = function () {
                      return "";
                    }),
                    e
                  );
                })(),
                q = (function () {
                  function e() {
                    this.seen = {};
                  }
                  var t = e.prototype;
                  return (
                    (t.serialize = function (e) {
                      return e
                        .toLowerCase()
                        .trim()
                        .replace(/<[!\/a-z].*?>/gi, "")
                        .replace(
                          /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                          ""
                        )
                        .replace(/\s/g, "-");
                    }),
                    (t.getNextSafeSlug = function (e, t) {
                      var n = e,
                        r = 0;
                      if (this.seen.hasOwnProperty(n)) {
                        r = this.seen[e];
                        do {
                          r++, (n = e + "-" + r);
                        } while (this.seen.hasOwnProperty(n));
                      }
                      return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
                    }),
                    (t.slug = function (e, t) {
                      void 0 === t && (t = {});
                      var n = this.serialize(e);
                      return this.getNextSafeSlug(n, t.dryrun);
                    }),
                    e
                  );
                })(),
                W = (function () {
                  function t(t) {
                    (this.options = t || e.defaults),
                      (this.options.renderer =
                        this.options.renderer || new V()),
                      (this.renderer = this.options.renderer),
                      (this.renderer.options = this.options),
                      (this.textRenderer = new $()),
                      (this.slugger = new q());
                  }
                  (t.parse = function (e, n) {
                    return new t(n).parse(e);
                  }),
                    (t.parseInline = function (e, n) {
                      return new t(n).parseInline(e);
                    });
                  var n = t.prototype;
                  return (
                    (n.parse = function (e, t) {
                      void 0 === t && (t = !0);
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        c,
                        f,
                        p,
                        d,
                        h,
                        v,
                        g,
                        m,
                        y,
                        b,
                        w,
                        D,
                        x = "",
                        A = e.length;
                      for (n = 0; n < A; n++)
                        if (
                          ((p = e[n]),
                          !(
                            this.options.extensions &&
                            this.options.extensions.renderers &&
                            this.options.extensions.renderers[p.type]
                          ) ||
                            (!1 ===
                              (D = this.options.extensions.renderers[
                                p.type
                              ].call({ parser: this }, p)) &&
                              [
                                "space",
                                "hr",
                                "heading",
                                "code",
                                "table",
                                "blockquote",
                                "list",
                                "html",
                                "paragraph",
                                "text",
                              ].includes(p.type)))
                        )
                          switch (p.type) {
                            case "space":
                              continue;
                            case "hr":
                              x += this.renderer.hr();
                              continue;
                            case "heading":
                              x += this.renderer.heading(
                                this.parseInline(p.tokens),
                                p.depth,
                                l(
                                  this.parseInline(p.tokens, this.textRenderer)
                                ),
                                this.slugger
                              );
                              continue;
                            case "code":
                              x += this.renderer.code(
                                p.text,
                                p.lang,
                                p.escaped
                              );
                              continue;
                            case "table":
                              for (
                                c = "", u = "", o = p.header.length, r = 0;
                                r < o;
                                r++
                              )
                                u += this.renderer.tablecell(
                                  this.parseInline(p.header[r].tokens),
                                  { header: !0, align: p.align[r] }
                                );
                              for (
                                c += this.renderer.tablerow(u),
                                  f = "",
                                  o = p.rows.length,
                                  r = 0;
                                r < o;
                                r++
                              ) {
                                for (
                                  s = p.rows[r], u = "", a = s.length, i = 0;
                                  i < a;
                                  i++
                                )
                                  u += this.renderer.tablecell(
                                    this.parseInline(s[i].tokens),
                                    { header: !1, align: p.align[i] }
                                  );
                                f += this.renderer.tablerow(u);
                              }
                              x += this.renderer.table(c, f);
                              continue;
                            case "blockquote":
                              (f = this.parse(p.tokens)),
                                (x += this.renderer.blockquote(f));
                              continue;
                            case "list":
                              for (
                                d = p.ordered,
                                  h = p.start,
                                  v = p.loose,
                                  o = p.items.length,
                                  f = "",
                                  r = 0;
                                r < o;
                                r++
                              )
                                (m = p.items[r]),
                                  (y = m.checked),
                                  (b = m.task),
                                  (g = ""),
                                  m.task &&
                                    ((w = this.renderer.checkbox(y)),
                                    v
                                      ? m.tokens.length > 0 &&
                                        "paragraph" === m.tokens[0].type
                                        ? ((m.tokens[0].text =
                                            w + " " + m.tokens[0].text),
                                          m.tokens[0].tokens &&
                                            m.tokens[0].tokens.length > 0 &&
                                            "text" ===
                                              m.tokens[0].tokens[0].type &&
                                            (m.tokens[0].tokens[0].text =
                                              w +
                                              " " +
                                              m.tokens[0].tokens[0].text))
                                        : m.tokens.unshift({
                                            type: "text",
                                            text: w,
                                          })
                                      : (g += w)),
                                  (g += this.parse(m.tokens, v)),
                                  (f += this.renderer.listitem(g, b, y));
                              x += this.renderer.list(f, d, h);
                              continue;
                            case "html":
                              x += this.renderer.html(p.text);
                              continue;
                            case "paragraph":
                              x += this.renderer.paragraph(
                                this.parseInline(p.tokens)
                              );
                              continue;
                            case "text":
                              for (
                                f = p.tokens
                                  ? this.parseInline(p.tokens)
                                  : p.text;
                                n + 1 < A && "text" === e[n + 1].type;

                              )
                                (p = e[++n]),
                                  (f +=
                                    "\n" +
                                    (p.tokens
                                      ? this.parseInline(p.tokens)
                                      : p.text));
                              x += t ? this.renderer.paragraph(f) : f;
                              continue;
                            default:
                              var k =
                                'Token with "' +
                                p.type +
                                '" type was not found.';
                              if (this.options.silent) return;
                              throw new Error(k);
                          }
                        else x += D || "";
                      return x;
                    }),
                    (n.parseInline = function (e, t) {
                      t = t || this.renderer;
                      var n,
                        r,
                        i,
                        o = "",
                        a = e.length;
                      for (n = 0; n < a; n++)
                        if (
                          ((r = e[n]),
                          !(
                            this.options.extensions &&
                            this.options.extensions.renderers &&
                            this.options.extensions.renderers[r.type]
                          ) ||
                            (!1 ===
                              (i = this.options.extensions.renderers[
                                r.type
                              ].call({ parser: this }, r)) &&
                              [
                                "escape",
                                "html",
                                "link",
                                "image",
                                "strong",
                                "em",
                                "codespan",
                                "br",
                                "del",
                                "text",
                              ].includes(r.type)))
                        )
                          switch (r.type) {
                            case "escape":
                              o += t.text(r.text);
                              break;
                            case "html":
                              o += t.html(r.text);
                              break;
                            case "link":
                              o += t.link(
                                r.href,
                                r.title,
                                this.parseInline(r.tokens, t)
                              );
                              break;
                            case "image":
                              o += t.image(r.href, r.title, r.text);
                              break;
                            case "strong":
                              o += t.strong(this.parseInline(r.tokens, t));
                              break;
                            case "em":
                              o += t.em(this.parseInline(r.tokens, t));
                              break;
                            case "codespan":
                              o += t.codespan(r.text);
                              break;
                            case "br":
                              o += t.br();
                              break;
                            case "del":
                              o += t.del(this.parseInline(r.tokens, t));
                              break;
                            case "text":
                              o += t.text(r.text);
                              break;
                            default:
                              var s =
                                'Token with "' +
                                r.type +
                                '" type was not found.';
                              if (this.options.silent) return;
                              throw new Error(s);
                          }
                        else o += i || "";
                      return o;
                    }),
                    t
                  );
                })();
              (A.options = A.setOptions =
                function (e) {
                  return d(A.defaults, e), s(A.defaults), A;
                }),
                (A.getDefaults = a),
                (A.defaults = e.defaults),
                (A.use = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  var r,
                    i = d.apply(void 0, [{}].concat(t)),
                    o = A.defaults.extensions || {
                      renderers: {},
                      childTokens: {},
                    };
                  t.forEach(function (e) {
                    if (
                      (e.extensions &&
                        ((r = !0),
                        e.extensions.forEach(function (e) {
                          if (!e.name)
                            throw new Error("extension name required");
                          if (e.renderer) {
                            var t = o.renderers ? o.renderers[e.name] : null;
                            o.renderers[e.name] = t
                              ? function () {
                                  for (
                                    var n = arguments.length,
                                      r = new Array(n),
                                      i = 0;
                                    i < n;
                                    i++
                                  )
                                    r[i] = arguments[i];
                                  var o = e.renderer.apply(this, r);
                                  return !1 === o && (o = t.apply(this, r)), o;
                                }
                              : e.renderer;
                          }
                          if (e.tokenizer) {
                            if (
                              !e.level ||
                              ("block" !== e.level && "inline" !== e.level)
                            )
                              throw new Error(
                                "extension level must be 'block' or 'inline'"
                              );
                            o[e.level]
                              ? o[e.level].unshift(e.tokenizer)
                              : (o[e.level] = [e.tokenizer]),
                              e.start &&
                                ("block" === e.level
                                  ? o.startBlock
                                    ? o.startBlock.push(e.start)
                                    : (o.startBlock = [e.start])
                                  : "inline" === e.level &&
                                    (o.startInline
                                      ? o.startInline.push(e.start)
                                      : (o.startInline = [e.start])));
                          }
                          e.childTokens &&
                            (o.childTokens[e.name] = e.childTokens);
                        })),
                      e.renderer &&
                        (function () {
                          var t = A.defaults.renderer || new V();
                          for (var n in e.renderer)
                            !(function (n) {
                              var r = t[n];
                              t[n] = function () {
                                for (
                                  var i = arguments.length,
                                    o = new Array(i),
                                    a = 0;
                                  a < i;
                                  a++
                                )
                                  o[a] = arguments[a];
                                var s = e.renderer[n].apply(t, o);
                                return !1 === s && (s = r.apply(t, o)), s;
                              };
                            })(n);
                          i.renderer = t;
                        })(),
                      e.tokenizer &&
                        (function () {
                          var t = A.defaults.tokenizer || new R();
                          for (var n in e.tokenizer)
                            !(function (n) {
                              var r = t[n];
                              t[n] = function () {
                                for (
                                  var i = arguments.length,
                                    o = new Array(i),
                                    a = 0;
                                  a < i;
                                  a++
                                )
                                  o[a] = arguments[a];
                                var s = e.tokenizer[n].apply(t, o);
                                return !1 === s && (s = r.apply(t, o)), s;
                              };
                            })(n);
                          i.tokenizer = t;
                        })(),
                      e.walkTokens)
                    ) {
                      var t = A.defaults.walkTokens;
                      i.walkTokens = function (n) {
                        e.walkTokens.call(this, n), t && t.call(this, n);
                      };
                    }
                    r && (i.extensions = o), A.setOptions(i);
                  });
                }),
                (A.walkTokens = function (e, t) {
                  for (var n, r = o(e); !(n = r()).done; )
                    !(function () {
                      var e = n.value;
                      switch ((t.call(A, e), e.type)) {
                        case "table":
                          for (var r, i = o(e.header); !(r = i()).done; ) {
                            var a = r.value;
                            A.walkTokens(a.tokens, t);
                          }
                          for (var s, u = o(e.rows); !(s = u()).done; )
                            for (
                              var l, c = s.value, f = o(c);
                              !(l = f()).done;

                            ) {
                              var p = l.value;
                              A.walkTokens(p.tokens, t);
                            }
                          break;
                        case "list":
                          A.walkTokens(e.items, t);
                          break;
                        default:
                          A.defaults.extensions &&
                          A.defaults.extensions.childTokens &&
                          A.defaults.extensions.childTokens[e.type]
                            ? A.defaults.extensions.childTokens[e.type].forEach(
                                function (n) {
                                  A.walkTokens(e[n], t);
                                }
                              )
                            : e.tokens && A.walkTokens(e.tokens, t);
                      }
                    })();
                }),
                (A.parseInline = function (e, t) {
                  if (void 0 === e || null === e)
                    throw new Error(
                      "marked.parseInline(): input parameter is undefined or null"
                    );
                  if ("string" != typeof e)
                    throw new Error(
                      "marked.parseInline(): input parameter is of type " +
                        Object.prototype.toString.call(e) +
                        ", string expected"
                    );
                  (t = d({}, A.defaults, t || {})), m(t);
                  try {
                    var n = U.lexInline(e, t);
                    return (
                      t.walkTokens && A.walkTokens(n, t.walkTokens),
                      W.parseInline(n, t)
                    );
                  } catch (e) {
                    if (
                      ((e.message +=
                        "\nPlease report this to https://github.com/markedjs/marked."),
                      t.silent)
                    )
                      return (
                        "<p>An error occurred:</p><pre>" +
                        u(e.message + "", !0) +
                        "</pre>"
                      );
                    throw e;
                  }
                }),
                (A.Parser = W),
                (A.parser = W.parse),
                (A.Renderer = V),
                (A.TextRenderer = $),
                (A.Lexer = U),
                (A.lexer = U.lex),
                (A.Tokenizer = R),
                (A.Slugger = q),
                (A.parse = A);
              var G = A.options,
                H = A.setOptions,
                Y = A.use,
                X = A.walkTokens,
                J = A.parseInline,
                K = A,
                Z = W.parse,
                ee = U.lex;
              (e.Lexer = U),
                (e.Parser = W),
                (e.Renderer = V),
                (e.Slugger = q),
                (e.TextRenderer = $),
                (e.Tokenizer = R),
                (e.getDefaults = a),
                (e.lexer = ee),
                (e.marked = A),
                (e.options = G),
                (e.parse = K),
                (e.parseInline = J),
                (e.parser = Z),
                (e.setOptions = H),
                (e.use = Y),
                (e.walkTokens = X),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              var t = {};
              return (
                c(f(e), function (e) {
                  var n = e[0],
                    r = e[1];
                  c(r, function (e) {
                    t[e] = n;
                  });
                }),
                t
              );
            }
            function i(e, t) {
              var n = r(e.pluralTypeToLanguages);
              return n[t] || n[m.call(t, /-/, 1)[0]] || n.en;
            }
            function o(e, t, n) {
              return e.pluralTypes[t](n);
            }
            function a(e) {
              return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            function s(e) {
              var t = (e && e.prefix) || "%{",
                n = (e && e.suffix) || "}";
              if (t === y || n === y)
                throw new RangeError(
                  '"' + y + '" token is reserved for pluralization'
                );
              return new RegExp(a(t) + "(.*?)" + a(n), "g");
            }
            function u(e, t, n, r, i) {
              if ("string" != typeof e)
                throw new TypeError(
                  "Polyglot.transformPhrase expects argument #1 to be string"
                );
              if (null == t) return e;
              var a = e,
                s = r || x,
                u = "number" == typeof t ? { smart_count: t } : t;
              if (null != u.smart_count && e) {
                var l = i || w,
                  c = m.call(e, y),
                  f = n || "en",
                  p = D(l, f),
                  v = o(l, p, u.smart_count);
                a = h(c[v] || c[0]);
              }
              return g.call(a, s, function (e, t) {
                return d(u, t) && null != u[t] ? u[t] : e;
              });
            }
            function l(e) {
              var t = e || {};
              (this.phrases = {}),
                this.extend(t.phrases || {}),
                (this.currentLocale = t.locale || "en");
              var n = t.allowMissing ? u : null;
              (this.onMissingKey =
                "function" == typeof t.onMissingKey ? t.onMissingKey : n),
                (this.warn = t.warn || v),
                (this.tokenRegex = s(t.interpolation)),
                (this.pluralRules = t.pluralRules || w);
            }
            var c = n(43),
              f = n(89),
              p = n(94),
              d = n(25),
              h = n(92),
              v = function (e) {
                p(!1, e);
              },
              g = String.prototype.replace,
              m = String.prototype.split,
              y = "||||",
              b = function (e) {
                var t = e % 100,
                  n = t % 10;
                return 11 !== t && 1 === n
                  ? 0
                  : 2 <= n && n <= 4 && !(t >= 12 && t <= 14)
                  ? 1
                  : 2;
              },
              w = {
                pluralTypes: {
                  arabic: function (e) {
                    if (e < 3) return e;
                    var t = e % 100;
                    return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5;
                  },
                  bosnian_serbian: b,
                  chinese: function () {
                    return 0;
                  },
                  croatian: b,
                  french: function (e) {
                    return e >= 2 ? 1 : 0;
                  },
                  german: function (e) {
                    return 1 !== e ? 1 : 0;
                  },
                  russian: b,
                  lithuanian: function (e) {
                    return e % 10 == 1 && e % 100 != 11
                      ? 0
                      : e % 10 >= 2 &&
                        e % 10 <= 9 &&
                        (e % 100 < 11 || e % 100 > 19)
                      ? 1
                      : 2;
                  },
                  czech: function (e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
                  },
                  polish: function (e) {
                    if (1 === e) return 0;
                    var t = e % 10;
                    return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20)
                      ? 1
                      : 2;
                  },
                  icelandic: function (e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
                  },
                  slovenian: function (e) {
                    var t = e % 100;
                    return 1 === t
                      ? 0
                      : 2 === t
                      ? 1
                      : 3 === t || 4 === t
                      ? 2
                      : 3;
                  },
                },
                pluralTypeToLanguages: {
                  arabic: ["ar"],
                  bosnian_serbian: [
                    "bs-Latn-BA",
                    "bs-Cyrl-BA",
                    "srl-RS",
                    "sr-RS",
                  ],
                  chinese: [
                    "id",
                    "id-ID",
                    "ja",
                    "ko",
                    "ko-KR",
                    "lo",
                    "ms",
                    "th",
                    "th-TH",
                    "zh",
                  ],
                  croatian: ["hr", "hr-HR"],
                  german: [
                    "fa",
                    "da",
                    "de",
                    "en",
                    "es",
                    "fi",
                    "el",
                    "he",
                    "hi-IN",
                    "hu",
                    "hu-HU",
                    "it",
                    "nl",
                    "no",
                    "pt",
                    "sv",
                    "tr",
                  ],
                  french: ["fr", "tl", "pt-br"],
                  russian: ["ru", "ru-RU"],
                  lithuanian: ["lt"],
                  czech: ["cs", "cs-CZ", "sk"],
                  polish: ["pl"],
                  icelandic: ["is"],
                  slovenian: ["sl-SL"],
                },
              },
              D = (function () {
                var e = {};
                return function (t, n) {
                  var r = e[n];
                  return (
                    r && !t.pluralTypes[r] && ((r = null), (e[n] = r)),
                    r || ((r = i(t, n)) && (e[n] = r)),
                    r
                  );
                };
              })(),
              x = /%\{(.*?)\}/g;
            (l.prototype.locale = function (e) {
              return e && (this.currentLocale = e), this.currentLocale;
            }),
              (l.prototype.extend = function (e, t) {
                c(
                  f(e || {}),
                  function (e) {
                    var n = e[0],
                      r = e[1],
                      i = t ? t + "." + n : n;
                    "object" == typeof r
                      ? this.extend(r, i)
                      : (this.phrases[i] = r);
                  },
                  this
                );
              }),
              (l.prototype.unset = function (e, t) {
                "string" == typeof e
                  ? delete this.phrases[e]
                  : c(
                      f(e || {}),
                      function (e) {
                        var n = e[0],
                          r = e[1],
                          i = t ? t + "." + n : n;
                        "object" == typeof r
                          ? this.unset(r, i)
                          : delete this.phrases[i];
                      },
                      this
                    );
              }),
              (l.prototype.clear = function () {
                this.phrases = {};
              }),
              (l.prototype.replace = function (e) {
                this.clear(), this.extend(e);
              }),
              (l.prototype.t = function (e, t) {
                var n,
                  r,
                  i = null == t ? {} : t;
                if ("string" == typeof this.phrases[e]) n = this.phrases[e];
                else if ("string" == typeof i._) n = i._;
                else if (this.onMissingKey) {
                  var o = this.onMissingKey;
                  r = o(
                    e,
                    i,
                    this.currentLocale,
                    this.tokenRegex,
                    this.pluralRules
                  );
                } else
                  this.warn('Missing translation for key: "' + e + '"'),
                    (r = e);
                return (
                  "string" == typeof n &&
                    (r = u(
                      n,
                      i,
                      this.currentLocale,
                      this.tokenRegex,
                      this.pluralRules
                    )),
                  r
                );
              }),
              (l.prototype.has = function (e) {
                return d(this.phrases, e);
              }),
              (l.transformPhrase = function (e, t, n) {
                return u(e, t, n);
              }),
              (e.exports = l);
          },
          function (e, t, n) {
            "use strict";
            function r(e) {
              if (null === e || void 0 === e)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(e);
            }
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var i = Object.getOwnPropertySymbols,
              o = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable;
            e.exports = (function () {
              try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                  return !1;
                for (var t = {}, n = 0; n < 10; n++)
                  t["_" + String.fromCharCode(n)] = n;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(t)
                    .map(function (e) {
                      return t[e];
                    })
                    .join("")
                )
                  return !1;
                var r = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e;
                  }),
                  "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, r)).join("")
                );
              } catch (e) {
                return !1;
              }
            })()
              ? Object.assign
              : function (e, t) {
                  for (var n, s, u = r(e), l = 1; l < arguments.length; l++) {
                    for (var c in ((n = Object(arguments[l])), n))
                      o.call(n, c) && (u[c] = n[c]);
                    if (i) {
                      s = i(n);
                      for (var f = 0; f < s.length; f++)
                        a.call(n, s[f]) && (u[s[f]] = n[s[f]]);
                    }
                  }
                  return u;
                };
          },
          function (e, t, n) {
            function r(e, t) {
              if (
                e === 1 / 0 ||
                e === -1 / 0 ||
                e !== e ||
                (e && e > -1e3 && e < 1e3) ||
                ne.call(/e/, t)
              )
                return t;
              var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
              if ("number" == typeof e) {
                var r = e < 0 ? -ae(-e) : ae(e);
                if (r !== e) {
                  var i = String(r),
                    o = K.call(t, i.length + 1);
                  return (
                    Z.call(i, n, "$&_") +
                    "." +
                    Z.call(Z.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
                  );
                }
              }
              return Z.call(t, n, "$&_");
            }
            function i(e, t, n) {
              var r = "double" === (n.quoteStyle || t) ? '"' : "'";
              return r + e + r;
            }
            function o(e) {
              return Z.call(String(e), /"/g, "&quot;");
            }
            function a(e) {
              return !(
                "[object Array]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function s(e) {
              return !(
                "[object Date]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function u(e) {
              return !(
                "[object RegExp]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function l(e) {
              return !(
                "[object Error]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function c(e) {
              return !(
                "[object String]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function f(e) {
              return !(
                "[object Number]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function p(e) {
              return !(
                "[object Boolean]" !== g(e) ||
                (fe && "object" == typeof e && fe in e)
              );
            }
            function d(e) {
              if (ce) return e && "object" == typeof e && e instanceof Symbol;
              if ("symbol" == typeof e) return !0;
              if (!e || "object" != typeof e || !le) return !1;
              try {
                return le.call(e), !0;
              } catch (e) {}
              return !1;
            }
            function h(e) {
              if (!e || "object" != typeof e || !se) return !1;
              try {
                return se.call(e), !0;
              } catch (e) {}
              return !1;
            }
            function v(e, t) {
              return ge.call(e, t);
            }
            function g(e) {
              return Y.call(e);
            }
            function m(e) {
              if (e.name) return e.name;
              var t = J.call(X.call(e), /^function\s*([\w$]+)/);
              return t ? t[1] : null;
            }
            function y(e, t) {
              if (e.indexOf) return e.indexOf(t);
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            }
            function b(e) {
              if (!P || !e || "object" != typeof e) return !1;
              try {
                P.call(e);
                try {
                  Q.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Map;
              } catch (e) {}
              return !1;
            }
            function w(e) {
              if (!V || !e || "object" != typeof e) return !1;
              try {
                V.call(e, V);
                try {
                  q.call(e, q);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakMap;
              } catch (e) {}
              return !1;
            }
            function D(e) {
              if (!G || !e || "object" != typeof e) return !1;
              try {
                return G.call(e), !0;
              } catch (e) {}
              return !1;
            }
            function x(e) {
              if (!Q || !e || "object" != typeof e) return !1;
              try {
                Q.call(e);
                try {
                  P.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Set;
              } catch (e) {}
              return !1;
            }
            function A(e) {
              if (!q || !e || "object" != typeof e) return !1;
              try {
                q.call(e, q);
                try {
                  V.call(e, V);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakSet;
              } catch (e) {}
              return !1;
            }
            function k(e) {
              return (
                !(!e || "object" != typeof e) &&
                (("undefined" != typeof HTMLElement &&
                  e instanceof HTMLElement) ||
                  ("string" == typeof e.nodeName &&
                    "function" == typeof e.getAttribute))
              );
            }
            function E(e, t) {
              if (e.length > t.maxStringLength) {
                var n = e.length - t.maxStringLength,
                  r = "... " + n + " more character" + (n > 1 ? "s" : "");
                return E(K.call(e, 0, t.maxStringLength), t) + r;
              }
              return i(
                Z.call(Z.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, C),
                "single",
                t
              );
            }
            function C(e) {
              var t = e.charCodeAt(0),
                n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
              return n
                ? "\\" + n
                : "\\x" + (t < 16 ? "0" : "") + ee.call(t.toString(16));
            }
            function F(e) {
              return "Object(" + e + ")";
            }
            function S(e) {
              return e + " { ? }";
            }
            function _(e, t, n, r) {
              return (
                e + " (" + t + ") {" + (r ? j(n, r) : ie.call(n, ", ")) + "}"
              );
            }
            function O(e) {
              for (var t = 0; t < e.length; t++)
                if (y(e[t], "\n") >= 0) return !1;
              return !0;
            }
            function B(e, t) {
              var n;
              if ("\t" === e.indent) n = "\t";
              else {
                if (!("number" == typeof e.indent && e.indent > 0)) return null;
                n = ie.call(Array(e.indent + 1), " ");
              }
              return { base: n, prev: ie.call(Array(t + 1), n) };
            }
            function j(e, t) {
              if (0 === e.length) return "";
              var n = "\n" + t.prev + t.base;
              return n + ie.call(e, "," + n) + "\n" + t.prev;
            }
            function I(e, t) {
              var n = a(e),
                r = [];
              if (n) {
                r.length = e.length;
                for (var i = 0; i < e.length; i++)
                  r[i] = v(e, i) ? t(e[i], e) : "";
              }
              var o,
                s = "function" == typeof ue ? ue(e) : [];
              if (ce) {
                o = {};
                for (var u = 0; u < s.length; u++) o["$" + s[u]] = s[u];
              }
              for (var l in e)
                v(e, l) &&
                  ((n && String(Number(l)) === l && l < e.length) ||
                    (ce && o["$" + l] instanceof Symbol) ||
                    (ne.call(/[^\w$]/, l)
                      ? r.push(t(l, e) + ": " + t(e[l], e))
                      : r.push(l + ": " + t(e[l], e))));
              if ("function" == typeof ue)
                for (var c = 0; c < s.length; c++)
                  pe.call(e, s[c]) &&
                    r.push("[" + t(s[c]) + "]: " + t(e[s[c]], e));
              return r;
            }
            var T = "function" == typeof Map && Map.prototype,
              M =
                Object.getOwnPropertyDescriptor && T
                  ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
                  : null,
              P = T && M && "function" == typeof M.get ? M.get : null,
              z = T && Map.prototype.forEach,
              L = "function" == typeof Set && Set.prototype,
              R =
                Object.getOwnPropertyDescriptor && L
                  ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                  : null,
              Q = L && R && "function" == typeof R.get ? R.get : null,
              N = L && Set.prototype.forEach,
              U = "function" == typeof WeakMap && WeakMap.prototype,
              V = U ? WeakMap.prototype.has : null,
              $ = "function" == typeof WeakSet && WeakSet.prototype,
              q = $ ? WeakSet.prototype.has : null,
              W = "function" == typeof WeakRef && WeakRef.prototype,
              G = W ? WeakRef.prototype.deref : null,
              H = Boolean.prototype.valueOf,
              Y = Object.prototype.toString,
              X = Function.prototype.toString,
              J = String.prototype.match,
              K = String.prototype.slice,
              Z = String.prototype.replace,
              ee = String.prototype.toUpperCase,
              te = String.prototype.toLowerCase,
              ne = RegExp.prototype.test,
              re = Array.prototype.concat,
              ie = Array.prototype.join,
              oe = Array.prototype.slice,
              ae = Math.floor,
              se =
                "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
              ue = Object.getOwnPropertySymbols,
              le =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? Symbol.prototype.toString
                  : null,
              ce =
                "function" == typeof Symbol &&
                "object" == typeof Symbol.iterator,
              fe =
                "function" == typeof Symbol &&
                Symbol.toStringTag &&
                (typeof Symbol.toStringTag === ce || "symbol")
                  ? Symbol.toStringTag
                  : null,
              pe = Object.prototype.propertyIsEnumerable,
              de =
                ("function" == typeof Reflect
                  ? Reflect.getPrototypeOf
                  : Object.getPrototypeOf) ||
                ([].__proto__ === Array.prototype
                  ? function (e) {
                      return e.__proto__;
                    }
                  : null),
              he = n(102).custom,
              ve = he && d(he) ? he : null;
            e.exports = function e(t, n, C, T) {
              function M(t, n, r) {
                if ((n && ((T = oe.call(T)), T.push(n)), r)) {
                  var i = { depth: L.depth };
                  return (
                    v(L, "quoteStyle") && (i.quoteStyle = L.quoteStyle),
                    e(t, i, C + 1, T)
                  );
                }
                return e(t, L, C + 1, T);
              }
              var L = n || {};
              if (
                v(L, "quoteStyle") &&
                "single" !== L.quoteStyle &&
                "double" !== L.quoteStyle
              )
                throw new TypeError(
                  'option "quoteStyle" must be "single" or "double"'
                );
              if (
                v(L, "maxStringLength") &&
                ("number" == typeof L.maxStringLength
                  ? L.maxStringLength < 0 && L.maxStringLength !== 1 / 0
                  : null !== L.maxStringLength)
              )
                throw new TypeError(
                  'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                );
              var R = !v(L, "customInspect") || L.customInspect;
              if ("boolean" != typeof R && "symbol" !== R)
                throw new TypeError(
                  "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
                );
              if (
                v(L, "indent") &&
                null !== L.indent &&
                "\t" !== L.indent &&
                !(parseInt(L.indent, 10) === L.indent && L.indent > 0)
              )
                throw new TypeError(
                  'option "indent" must be "\\t", an integer > 0, or `null`'
                );
              if (
                v(L, "numericSeparator") &&
                "boolean" != typeof L.numericSeparator
              )
                throw new TypeError(
                  'option "numericSeparator", if provided, must be `true` or `false`'
                );
              var U = L.numericSeparator;
              if (void 0 === t) return "undefined";
              if (null === t) return "null";
              if ("boolean" == typeof t) return t ? "true" : "false";
              if ("string" == typeof t) return E(t, L);
              if ("number" == typeof t) {
                if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                var V = String(t);
                return U ? r(t, V) : V;
              }
              if ("bigint" == typeof t) {
                var $ = String(t) + "n";
                return U ? r(t, $) : $;
              }
              var q = void 0 === L.depth ? 5 : L.depth;
              if (
                (void 0 === C && (C = 0),
                C >= q && q > 0 && "object" == typeof t)
              )
                return a(t) ? "[Array]" : "[Object]";
              var W = B(L, C);
              if (void 0 === T) T = [];
              else if (y(T, t) >= 0) return "[Circular]";
              if ("function" == typeof t) {
                var G = m(t),
                  Y = I(t, M);
                return (
                  "[Function" +
                  (G ? ": " + G : " (anonymous)") +
                  "]" +
                  (Y.length > 0 ? " { " + ie.call(Y, ", ") + " }" : "")
                );
              }
              if (d(t)) {
                var X = ce
                  ? Z.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
                  : le.call(t);
                return "object" != typeof t || ce ? X : F(X);
              }
              if (k(t)) {
                for (
                  var J = "<" + te.call(String(t.nodeName)),
                    ee = t.attributes || [],
                    ne = 0;
                  ne < ee.length;
                  ne++
                )
                  J +=
                    " " + ee[ne].name + "=" + i(o(ee[ne].value), "double", L);
                return (
                  (J += ">"),
                  t.childNodes && t.childNodes.length && (J += "..."),
                  J + "</" + te.call(String(t.nodeName)) + ">"
                );
              }
              if (a(t)) {
                if (0 === t.length) return "[]";
                var ae = I(t, M);
                return W && !O(ae)
                  ? "[" + j(ae, W) + "]"
                  : "[ " + ie.call(ae, ", ") + " ]";
              }
              if (l(t)) {
                var ue = I(t, M);
                return "cause" in t && !pe.call(t, "cause")
                  ? "{ [" +
                      String(t) +
                      "] " +
                      ie.call(re.call("[cause]: " + M(t.cause), ue), ", ") +
                      " }"
                  : 0 === ue.length
                  ? "[" + String(t) + "]"
                  : "{ [" + String(t) + "] " + ie.call(ue, ", ") + " }";
              }
              if ("object" == typeof t && R) {
                if (ve && "function" == typeof t[ve]) return t[ve]();
                if ("symbol" !== R && "function" == typeof t.inspect)
                  return t.inspect();
              }
              if (b(t)) {
                var he = [];
                return (
                  z.call(t, function (e, n) {
                    he.push(M(n, t, !0) + " => " + M(e, t));
                  }),
                  _("Map", P.call(t), he, W)
                );
              }
              if (x(t)) {
                var ge = [];
                return (
                  N.call(t, function (e) {
                    ge.push(M(e, t));
                  }),
                  _("Set", Q.call(t), ge, W)
                );
              }
              if (w(t)) return S("WeakMap");
              if (A(t)) return S("WeakSet");
              if (D(t)) return S("WeakRef");
              if (f(t)) return F(M(Number(t)));
              if (h(t)) return F(M(se.call(t)));
              if (p(t)) return F(H.call(t));
              if (c(t)) return F(M(String(t)));
              if (!s(t) && !u(t)) {
                var me = I(t, M),
                  ye = de
                    ? de(t) === Object.prototype
                    : t instanceof Object || t.constructor === Object,
                  be = t instanceof Object ? "" : "null prototype",
                  we =
                    !ye && fe && Object(t) === t && fe in t
                      ? K.call(g(t), 8, -1)
                      : be
                      ? "Object"
                      : "",
                  De =
                    ye || "function" != typeof t.constructor
                      ? ""
                      : t.constructor.name
                      ? t.constructor.name + " "
                      : "",
                  xe =
                    De +
                    (we || be
                      ? "[" +
                        ie.call(re.call([], we || [], be || []), ": ") +
                        "] "
                      : "");
                return 0 === me.length
                  ? xe + "{}"
                  : W
                  ? xe + "{" + j(me, W) + "}"
                  : xe + "{ " + ie.call(me, ", ") + " }";
              }
              return String(t);
            };
            var ge =
              Object.prototype.hasOwnProperty ||
              function (e) {
                return e in this;
              };
          },
          function (e, t, n) {
            "use strict";
            var r;
            if (!Object.keys) {
              var i = Object.prototype.hasOwnProperty,
                o = Object.prototype.toString,
                a = n(26),
                s = Object.prototype.propertyIsEnumerable,
                u = !s.call({ toString: null }, "toString"),
                l = s.call(function () {}, "prototype"),
                c = [
                  "toString",
                  "toLocaleString",
                  "valueOf",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "constructor",
                ],
                f = function (e) {
                  var t = e.constructor;
                  return t && t.prototype === e;
                },
                p = {
                  $applicationCache: !0,
                  $console: !0,
                  $external: !0,
                  $frame: !0,
                  $frameElement: !0,
                  $frames: !0,
                  $innerHeight: !0,
                  $innerWidth: !0,
                  $onmozfullscreenchange: !0,
                  $onmozfullscreenerror: !0,
                  $outerHeight: !0,
                  $outerWidth: !0,
                  $pageXOffset: !0,
                  $pageYOffset: !0,
                  $parent: !0,
                  $scrollLeft: !0,
                  $scrollTop: !0,
                  $scrollX: !0,
                  $scrollY: !0,
                  $self: !0,
                  $webkitIndexedDB: !0,
                  $webkitStorageInfo: !0,
                  $window: !0,
                },
                d = (function () {
                  if ("undefined" == typeof window) return !1;
                  for (var e in window)
                    try {
                      if (
                        !p["$" + e] &&
                        i.call(window, e) &&
                        null !== window[e] &&
                        "object" == typeof window[e]
                      )
                        try {
                          f(window[e]);
                        } catch (e) {
                          return !0;
                        }
                    } catch (e) {
                      return !0;
                    }
                  return !1;
                })(),
                h = function (e) {
                  if ("undefined" == typeof window || !d) return f(e);
                  try {
                    return f(e);
                  } catch (e) {
                    return !1;
                  }
                };
              r = function (e) {
                var t = null !== e && "object" == typeof e,
                  n = "[object Function]" === o.call(e),
                  r = a(e),
                  s = t && "[object String]" === o.call(e),
                  f = [];
                if (!t && !n && !r)
                  throw new TypeError("Object.keys called on a non-object");
                var p = l && n;
                if (s && e.length > 0 && !i.call(e, 0))
                  for (var d = 0; d < e.length; ++d) f.push(String(d));
                if (r && e.length > 0)
                  for (var v = 0; v < e.length; ++v) f.push(String(v));
                else
                  for (var g in e)
                    (p && "prototype" === g) ||
                      !i.call(e, g) ||
                      f.push(String(g));
                if (u)
                  for (var m = h(e), y = 0; y < c.length; ++y)
                    (m && "constructor" === c[y]) ||
                      !i.call(e, c[y]) ||
                      f.push(c[y]);
                return f;
              };
            }
            e.exports = r;
          },
          function (e, t, n) {
            "use strict";
            var r = Array.prototype.slice,
              i = n(26),
              o = Object.keys,
              a = o
                ? function (e) {
                    return o(e);
                  }
                : n(87),
              s = Object.keys;
            (a.shim = function () {
              return (
                Object.keys
                  ? (function () {
                      var e = Object.keys(arguments);
                      return e && e.length === arguments.length;
                    })(1, 2) ||
                    (Object.keys = function (e) {
                      return s(i(e) ? r.call(e) : e);
                    })
                  : (Object.keys = a),
                Object.keys || a
              );
            }),
              (e.exports = a);
          },
          function (e, t, n) {
            "use strict";
            var r = n(2),
              i = n(4),
              o = n(27),
              a = n(28),
              s = n(90),
              u = i(a(), Object);
            r(u, { getPolyfill: a, implementation: o, shim: s }),
              (e.exports = u);
          },
          function (e, t, n) {
            "use strict";
            var r = n(28),
              i = n(2);
            e.exports = function () {
              var e = r();
              return (
                i(
                  Object,
                  { entries: e },
                  {
                    entries: function () {
                      return Object.entries !== e;
                    },
                  }
                ),
                e
              );
            };
          },
          function (e, t) {
            function n() {
              throw new Error("setTimeout has not been defined");
            }
            function r() {
              throw new Error("clearTimeout has not been defined");
            }
            function i(e) {
              if (c === setTimeout) return setTimeout(e, 0);
              if ((c === n || !c) && setTimeout)
                return (c = setTimeout), setTimeout(e, 0);
              try {
                return c(e, 0);
              } catch (t) {
                try {
                  return c.call(null, e, 0);
                } catch (t) {
                  return c.call(this, e, 0);
                }
              }
            }
            function o(e) {
              if (f === clearTimeout) return clearTimeout(e);
              if ((f === r || !f) && clearTimeout)
                return (f = clearTimeout), clearTimeout(e);
              try {
                return f(e);
              } catch (t) {
                try {
                  return f.call(null, e);
                } catch (t) {
                  return f.call(this, e);
                }
              }
            }
            function a() {
              v &&
                d &&
                ((v = !1),
                d.length ? (h = d.concat(h)) : (g = -1),
                h.length && s());
            }
            function s() {
              if (!v) {
                var e = i(a);
                v = !0;
                for (var t = h.length; t; ) {
                  for (d = h, h = []; ++g < t; ) d && d[g].run();
                  (g = -1), (t = h.length);
                }
                (d = null), (v = !1), o(e);
              }
            }
            function u(e, t) {
              (this.fun = e), (this.array = t);
            }
            function l() {}
            var c,
              f,
              p = (e.exports = {});
            !(function () {
              try {
                c = "function" == typeof setTimeout ? setTimeout : n;
              } catch (e) {
                c = n;
              }
              try {
                f = "function" == typeof clearTimeout ? clearTimeout : r;
              } catch (e) {
                f = r;
              }
            })();
            var d,
              h = [],
              v = !1,
              g = -1;
            (p.nextTick = function (e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
              h.push(new u(e, t)), 1 !== h.length || v || i(s);
            }),
              (u.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (p.title = "browser"),
              (p.browser = !0),
              (p.env = {}),
              (p.argv = []),
              (p.version = ""),
              (p.versions = {}),
              (p.on = l),
              (p.addListener = l),
              (p.once = l),
              (p.off = l),
              (p.removeListener = l),
              (p.removeAllListeners = l),
              (p.emit = l),
              (p.prependListener = l),
              (p.prependOnceListener = l),
              (p.listeners = function (e) {
                return [];
              }),
              (p.binding = function (e) {
                throw new Error("process.binding is not supported");
              }),
              (p.cwd = function () {
                return "/";
              }),
              (p.chdir = function (e) {
                throw new Error("process.chdir is not supported");
              }),
              (p.umask = function () {
                return 0;
              });
          },
          function (e, t, n) {
            "use strict";
            var r = n(4),
              i = n(2),
              o = n(29),
              a = n(30),
              s = n(93),
              u = r(a());
            i(u, { getPolyfill: a, implementation: o, shim: s }),
              (e.exports = u);
          },
          function (e, t, n) {
            "use strict";
            var r = n(2),
              i = n(30);
            e.exports = function () {
              var e = i();
              return (
                r(
                  String.prototype,
                  { trim: e },
                  {
                    trim: function () {
                      return String.prototype.trim !== e;
                    },
                  }
                ),
                e
              );
            };
          },
          function (e, t, n) {
            "use strict";
            (function (t) {
              var n = "production" !== t.env.NODE_ENV,
                r = function () {};
              if (n) {
                var i = function (e, t) {
                  var n = arguments.length;
                  t = new Array(n > 1 ? n - 1 : 0);
                  for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
                  var i = 0,
                    o =
                      "Warning: " +
                      e.replace(/%s/g, function () {
                        return t[i++];
                      });
                  try {
                    throw new Error(o);
                  } catch (e) {}
                };
                r = function (e, t, n) {
                  var r = arguments.length;
                  n = new Array(r > 2 ? r - 2 : 0);
                  for (var o = 2; o < r; o++) n[o - 2] = arguments[o];
                  if (void 0 === t)
                    throw new Error(
                      "`warning(condition, format, ...args)` requires a warning message argument"
                    );
                  e || i.apply(null, [t].concat(n));
                };
              }
              e.exports = r;
            }.call(t, n(91)));
          },
          function (e, t, n) {
            function r(e, t) {
              return new a(t).process(e);
            }
            var i = n(31),
              o = n(32),
              a = n(96);
            for (var s in ((t = e.exports = r),
            (t.filterXSS = r),
            (t.FilterXSS = a),
            i))
              t[s] = i[s];
            for (var s in o) t[s] = o[s];
            "undefined" != typeof window && (window.filterXSS = e.exports),
              (function () {
                return (
                  "undefined" != typeof self &&
                  "undefined" != typeof DedicatedWorkerGlobalScope &&
                  self instanceof DedicatedWorkerGlobalScope
                );
              })() && (self.filterXSS = e.exports);
          },
          function (e, t, n) {
            function r(e) {
              return void 0 === e || null === e;
            }
            function i(e) {
              var t = p.spaceIndex(e);
              if (-1 === t)
                return { html: "", closing: "/" === e[e.length - 2] };
              e = p.trim(e.slice(t + 1, -1));
              var n = "/" === e[e.length - 1];
              return n && (e = p.trim(e.slice(0, -1))), { html: e, closing: n };
            }
            function o(e) {
              var t = {};
              for (var n in e) t[n] = e[n];
              return t;
            }
            function a(e) {
              (e = o(e || {})),
                e.stripIgnoreTag &&
                  (e.onIgnoreTag, (e.onIgnoreTag = u.onIgnoreTagStripAll)),
                (e.whiteList = e.whiteList || e.allowList || u.whiteList),
                (e.onTag = e.onTag || u.onTag),
                (e.onTagAttr = e.onTagAttr || u.onTagAttr),
                (e.onIgnoreTag = e.onIgnoreTag || u.onIgnoreTag),
                (e.onIgnoreTagAttr = e.onIgnoreTagAttr || u.onIgnoreTagAttr),
                (e.safeAttrValue = e.safeAttrValue || u.safeAttrValue),
                (e.escapeHtml = e.escapeHtml || u.escapeHtml),
                (this.options = e),
                !1 === e.css
                  ? (this.cssFilter = !1)
                  : ((e.css = e.css || {}), (this.cssFilter = new s(e.css)));
            }
            var s = n(7).FilterCSS,
              u = n(31),
              l = n(32),
              c = l.parseTag,
              f = l.parseAttr,
              p = n(11);
            (a.prototype.process = function (e) {
              if (((e = e || ""), !(e = e.toString()))) return "";
              var t = this,
                n = t.options,
                o = n.whiteList,
                a = n.onTag,
                s = n.onIgnoreTag,
                l = n.onTagAttr,
                d = n.onIgnoreTagAttr,
                h = n.safeAttrValue,
                v = n.escapeHtml,
                g = t.cssFilter;
              n.stripBlankChar && (e = u.stripBlankChar(e)),
                n.allowCommentTag || (e = u.stripCommentTag(e));
              var m = !1;
              if (n.stripIgnoreTagBody) {
                m = u.StripTagBody(n.stripIgnoreTagBody, s);
                s = m.onIgnoreTag;
              }
              var y = c(
                e,
                function (e, t, n, u, c) {
                  var m = {
                      sourcePosition: e,
                      position: t,
                      isClosing: c,
                      isWhite: o.hasOwnProperty(n),
                    },
                    y = a(n, u, m);
                  if (!r(y)) return y;
                  if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var b = i(u),
                      w = o[n],
                      D = f(b.html, function (e, t) {
                        var i = -1 !== p.indexOf(w, e),
                          o = l(n, e, t, i);
                        if (!r(o)) return o;
                        if (i)
                          return (
                            (t = h(n, e, t, g)), t ? e + '="' + t + '"' : e
                          );
                        o = d(n, e, t, i);
                        return r(o) ? void 0 : o;
                      });
                    u = "<" + n;
                    return (
                      D && (u += " " + D), b.closing && (u += " /"), u + ">"
                    );
                  }
                  y = s(n, u, m);
                  return r(y) ? v(u) : y;
                },
                v
              );
              return m && (y = m.remove(y)), y;
            }),
              (e.exports = a);
          },
          function (e, t) {
            e.exports = {
              smile: "e3/2018new_weixioa02_org.png",
              lovely: "09/2018new_keai_org.png",
              happy: "1e/2018new_taikaixin_org.png",
              clap: "6e/2018new_guzhang_thumb.png",
              whee: "33/2018new_xixi_thumb.png",
              haha: "8f/2018new_haha_thumb.png",
              "laugh and cry": "4a/2018new_xiaoku_thumb.png",
              wink: "43/2018new_jiyan_org.png",
              greddy: "fa/2018new_chanzui_org.png",
              awkward: "a3/2018new_heixian_thumb.png",
              sweat: "28/2018new_han_org.png",
              "pick nose": "9a/2018new_wabi_thumb.png",
              hum: "7c/2018new_heng_thumb.png",
              angry: "f6/2018new_nu_thumb.png",
              grievance: "a5/2018new_weiqu_thumb.png",
              poor: "96/2018new_kelian_org.png",
              disappoint: "aa/2018new_shiwang_thumb.png",
              sad: "ee/2018new_beishang_org.png",
              tear: "6e/2018new_leimu_org.png",
              "no way": "83/2018new_kuxiao_org.png",
              shy: "c1/2018new_haixiu_org.png",
              dirt: "10/2018new_wu_thumb.png",
              "love you": "f6/2018new_aini_org.png",
              kiss: "2c/2018new_qinqin_thumb.png",
              amorousness: "9d/2018new_huaxin_org.png",
              longing: "c9/2018new_chongjing_org.png",
              desire: "3e/2018new_tianping_thumb.png",
              "bad laugh": "4d/2018new_huaixiao_org.png",
              blackness: "9e/2018new_yinxian_org.png",
              "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
              titter: "71/2018new_touxiao_org.png",
              cool: "c4/2018new_ku_org.png",
              "not easy": "aa/2018new_bingbujiandan_thumb.png",
              think: "30/2018new_sikao_org.png",
              question: "b8/2018new_ningwen_org.png",
              "no idea": "2a/2018new_wenhao_thumb.png",
              dizzy: "07/2018new_yun_thumb.png",
              bomb: "a2/2018new_shuai_thumb.png",
              bone: "a1/2018new_kulou_thumb.png",
              "be quiet": "b0/2018new_xu_org.png",
              "shut up": "62/2018new_bizui_org.png",
              stupid: "dd/2018new_shayan_org.png",
              "surprise ": "49/2018new_chijing_org.png",
              vomit: "08/2018new_tu_org.png",
              cold: "40/2018new_kouzhao_thumb.png",
              sick: "3b/2018new_shengbing_thumb.png",
              bye: "fd/2018new_baibai_thumb.png",
              "look down on": "da/2018new_bishi_org.png",
              "white eye": "ef/2018new_landelini_org.png",
              "left hum": "43/2018new_zuohengheng_thumb.png",
              "right hum": "c1/2018new_youhengheng_thumb.png",
              crazy: "17/2018new_zhuakuang_org.png",
              "scold ": "87/2018new_zhouma_thumb.png",
              "hit on face": "cb/2018new_dalian_org.png",
              wow: "ae/2018new_ding_org.png",
              fan: "86/2018new_hufen02_org.png",
              money: "a2/2018new_qian_thumb.png",
              yawn: "55/2018new_dahaqian_org.png",
              sleepy: "3c/2018new_kun_thumb.png",
              sleep: "e2/2018new_shuijiao_thumb.png",
              "watermelon ": "01/2018new_chigua_thumb.png",
              doge: "a1/2018new_doge02_org.png",
              dog: "22/2018new_erha_org.png",
              cat: "7b/2018new_miaomiao_thumb.png",
              thumb: "e6/2018new_zan_org.png",
              good: "8a/2018new_good_org.png",
              ok: "45/2018new_ok_org.png",
              yeah: "29/2018new_ye_thumb.png",
              "shack hand": "e9/2018new_woshou_thumb.png",
              bow: "e7/2018new_zuoyi_org.png",
              come: "42/2018new_guolai_thumb.png",
              punch: "86/2018new_quantou_thumb.png",
            };
          },
          function (e, t) {
            e.exports = {
              nick: "NickName",
              mail: "E-Mail",
              link: "Website(http://)",
              nickFail: "NickName cannot be less than 3 bytes.",
              mailFail: "Please confirm your email address.",
              sofa: "No comment yet.",
              submit: "Submit",
              reply: "Reply",
              cancelReply: "Cancel reply",
              comments: "Comments",
              cancel: "Cancel",
              confirm: "Confirm",
              continue: "Continue",
              more: "Load More...",
              preview: "Preview",
              emoji: "Emoji",
              expand: "See more....",
              seconds: "seconds ago",
              minutes: "minutes ago",
              hours: "hours ago",
              days: "days ago",
              now: "just now",
              uploading: "Uploading ...",
              uploadDone: "Upload completed!",
              busy: "Submit is busy, please wait...",
              "code-98":
                "Valine initialization failed, please check your version of av-min.js.",
              "code-99":
                "Valine initialization failed, Please check the `el` element in the init method.",
              "code-100":
                "Valine initialization failed, Please check your appId and appKey.",
              "code-140":
                "The total number of API calls today has exceeded the development version limit.",
              "code-401":
                "Unauthorized operation, Please check your appId and appKey.",
              "code-403":
                "Access denied by API domain white list, Please check your security domain.",
            };
          },
          function (e, t) {
            e.exports = {
              nick: "ニックネーム",
              mail: "メールアドレス",
              link: "サイト(http://)",
              nickFail: "3バイト以上のニックネームをご入力ください.",
              mailFail: "メールアドレスをご確認ください.",
              sofa: "コメントしましょう~",
              submit: "提出する",
              reply: "返信する",
              cancelReply: "キャンセル",
              comments: "コメント",
              cancel: "キャンセル",
              confirm: "確認する",
              continue: "继续",
              more: "さらに読み込む...",
              preview: "プレビュー",
              emoji: "絵文字",
              expand: "もっと見る",
              seconds: "秒前",
              minutes: "分前",
              hours: "時間前",
              days: "日前",
              now: "たっだ今",
              uploading: "アップロード中...",
              uploadDone: "アップロードが完了しました!",
              busy: "20 秒間隔で提出してください    ...",
              "code-98":
                "ロードエラーです。av-min.js のバージョンを確認してください.",
              "code-99":
                "ロードエラーです。initにある`el`エレメントを確認ください.",
              "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
              "code-140":
                "今日のAPIコールの総数が開発バージョンの上限を超えた.",
              "code-401":
                "権限が制限されています。AppIdとAppKeyを確認ください.",
              "code-403":
                "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください",
            };
          },
          function (e, t) {
            e.exports = {
              nick: "昵称",
              mail: "邮箱",
              link: "网址(http://)",
              nickFail: "昵称不能少于3个字符",
              mailFail: "请填写正确的邮件地址",
              sofa: "来发评论吧~",
              submit: "提交",
              reply: "回复",
              cancelReply: "取消回复",
              comments: "评论",
              cancel: "取消",
              confirm: "确认",
              continue: "继续",
              more: "加载更多...",
              preview: "预览",
              emoji: "表情",
              expand: "查看更多...",
              seconds: "秒前",
              minutes: "分钟前",
              hours: "小时前",
              days: "天前",
              now: "刚刚",
              uploading: "正在传输...",
              uploadDone: "传输完成!",
              busy: "操作频繁，请稍候再试...",
              "code-98": "Valine 初始化失败，请检查 av-min.js 版本",
              "code-99": "Valine 初始化失败，请检查init中的`el`元素.",
              "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
              "code-140": "今日 API 调用总次数已超过开发版限制.",
              "code-401": "未经授权的操作，请检查你的AppId和AppKey.",
              "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置.",
            };
          },
          function (e, t) {
            e.exports = {
              nick: "暱稱",
              mail: "郵箱",
              link: "網址(http://)",
              nickFail: "昵稱不能少於3個字符",
              mailFail: "請填寫正確的郵件地址",
              sofa: "來發評論吧~",
              submit: "提交",
              reply: "回覆",
              cancelReply: "取消回覆",
              comments: "評論",
              cancel: "取消",
              confirm: "確認",
              continue: "繼續",
              more: "加載更多...",
              preview: "預覽",
              emoji: "表情",
              expand: "查看更多...",
              seconds: "秒前",
              minutes: "分鐘前",
              hours: "小時前",
              days: "天前",
              now: "剛剛",
              uploading: "正在上傳...",
              uploadDone: "上傳完成!",
              busy: "操作頻繁，請稍候再試...",
              "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
              "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
              "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
              "code-140": "今日 API 調用總次數已超過開發版限制.",
              "code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
              "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置.",
            };
          },
          function (e, t) {},
          function (e, t, n) {
            var r = n(104);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            var i = { transform: void 0 };
            n(106)(r, i), r.locals && (e.exports = r.locals);
          },
          function (e, t, n) {
            (t = n(105)(!1)),
              t.push([
                e.i,
                '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#555}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] pre,.v[data-class=v] code{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .vemoji,.v[data-class=v] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class=v] .vwrap .vheader .vinput{width:100%}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ul,.v[data-class=v] ol{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.9)));background:linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.night .v[data-class=v] .vinput,.night .v[data-class=v] .veditor,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.night .v[data-class=v] .status-bar{color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.night .v[data-class=v] .vsys{color:#929298}[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre code,.dark .v[data-class=v] pre,.dark .v[data-class=v] code,.dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre code,.night .v[data-class=v] pre,.night .v[data-class=v] code,.night .v[data-class=v] pre code{color:#929298;background-color:#151414}[data-theme=dark] .v[data-class=v] .vwrap,.dark .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap{border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon,.dark .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon{fill:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon.actived,.dark .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived{fill:#66b1ff}[data-theme=dark] .v[data-class=v] .vbtn,.dark .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vbtn:hover,.dark .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme=dark] .v[data-class=v] a:hover,.dark .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover{color:#d7191a}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::before,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.night .v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::after,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.night .v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}@media(prefers-color-scheme: dark){.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#b2b2b5}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#929298}.v[data-class=v] pre,.v[data-class=v] code,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}.v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}}',
                "",
              ]),
              (e.exports = t);
          },
          function (e, t, n) {
            "use strict";
            function r(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o = i(r);
                return [n]
                  .concat(
                    r.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(e, " */");
                    })
                  )
                  .concat([o])
                  .join("\n");
              }
              return [n].join("\n");
            }
            function i(e) {
              return "/*# ".concat(
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(e))))
                ),
                " */"
              );
            }
            e.exports = function (e) {
              var t = [];
              return (
                (t.toString = function () {
                  return this.map(function (t) {
                    var n = r(t, e);
                    return t[2]
                      ? "@media ".concat(t[2], " {").concat(n, "}")
                      : n;
                  }).join("");
                }),
                (t.i = function (e, n, r) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  var i = {};
                  if (r)
                    for (var o = 0; o < this.length; o++) {
                      var a = this[o][0];
                      null != a && (i[a] = !0);
                    }
                  for (var s = 0; s < e.length; s++) {
                    var u = [].concat(e[s]);
                    (r && i[u[0]]) ||
                      (n &&
                        (u[2]
                          ? (u[2] = "".concat(n, " and ").concat(u[2]))
                          : (u[2] = n)),
                      t.push(u));
                  }
                }),
                t
              );
            };
          },
          function (e, t, n) {
            function r(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = h[r.id];
                if (i) {
                  i.refs++;
                  for (var o = 0; o < i.parts.length; o++)
                    i.parts[o](r.parts[o]);
                  for (; o < r.parts.length; o++)
                    i.parts.push(c(r.parts[o], t));
                } else {
                  var a = [];
                  for (o = 0; o < r.parts.length; o++) a.push(c(r.parts[o], t));
                  h[r.id] = { id: r.id, refs: 1, parts: a };
                }
              }
            }
            function i(e, t) {
              for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                  a = t.base ? o[0] + t.base : o[0],
                  s = o[1],
                  u = o[2],
                  l = o[3],
                  c = { css: s, media: u, sourceMap: l };
                r[a]
                  ? r[a].parts.push(c)
                  : n.push((r[a] = { id: a, parts: [c] }));
              }
              return n;
            }
            function o(e, t) {
              var n = g(e.insertInto);
              if (!n)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                );
              var r = b[b.length - 1];
              if ("top" === e.insertAt)
                r
                  ? r.nextSibling
                    ? n.insertBefore(t, r.nextSibling)
                    : n.appendChild(t)
                  : n.insertBefore(t, n.firstChild),
                  b.push(t);
              else {
                if ("bottom" !== e.insertAt)
                  throw new Error(
                    "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
                  );
                n.appendChild(t);
              }
            }
            function a(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
              var t = b.indexOf(e);
              t >= 0 && b.splice(t, 1);
            }
            function s(e) {
              var t = document.createElement("style");
              return (e.attrs.type = "text/css"), l(t, e.attrs), o(e, t), t;
            }
            function u(e) {
              var t = document.createElement("link");
              return (
                (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                l(t, e.attrs),
                o(e, t),
                t
              );
            }
            function l(e, t) {
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              });
            }
            function c(e, t) {
              var n, r, i, o;
              if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function () {};
                e.css = o;
              }
              if (t.singleton) {
                var l = y++;
                (n = m || (m = s(t))),
                  (r = f.bind(null, n, l, !1)),
                  (i = f.bind(null, n, l, !0));
              } else
                e.sourceMap &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                "function" == typeof URL.revokeObjectURL &&
                "function" == typeof Blob &&
                "function" == typeof btoa
                  ? ((n = u(t)),
                    (r = d.bind(null, n, t)),
                    (i = function () {
                      a(n), n.href && URL.revokeObjectURL(n.href);
                    }))
                  : ((n = s(t)),
                    (r = p.bind(null, n)),
                    (i = function () {
                      a(n);
                    }));
              return (
                r(e),
                function (t) {
                  if (t) {
                    if (
                      t.css === e.css &&
                      t.media === e.media &&
                      t.sourceMap === e.sourceMap
                    )
                      return;
                    r((e = t));
                  } else i();
                }
              );
            }
            function f(e, t, n, r) {
              var i = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = D(t, i);
              else {
                var o = document.createTextNode(i),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
              }
            }
            function p(e, t) {
              var n = t.css,
                r = t.media;
              if ((r && e.setAttribute("media", r), e.styleSheet))
                e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }
            function d(e, t, n) {
              var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
              (t.convertToAbsoluteUrls || o) && (r = w(r)),
                i &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                    " */");
              var a = new Blob([r], { type: "text/css" }),
                s = e.href;
              (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
            }
            var h = {},
              v = (function (e) {
                var t;
                return function () {
                  return void 0 === t && (t = e.apply(this, arguments)), t;
                };
              })(function () {
                return window && document && document.all && !window.atob;
              }),
              g = (function (e) {
                var t = {};
                return function (n) {
                  return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
                };
              })(function (e) {
                return document.querySelector(e);
              }),
              m = null,
              y = 0,
              b = [],
              w = n(107);
            e.exports = function (e, t) {
              if (
                "undefined" != typeof DEBUG &&
                DEBUG &&
                "object" != typeof document
              )
                throw new Error(
                  "The style-loader cannot be used in a non-browser environment"
                );
              (t = t || {}),
                (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
                t.singleton || (t.singleton = v()),
                t.insertInto || (t.insertInto = "head"),
                t.insertAt || (t.insertAt = "bottom");
              var n = i(e, t);
              return (
                r(n, t),
                function (e) {
                  for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                      u = h[s.id];
                    u.refs--, o.push(u);
                  }
                  e && r(i(e, t), t);
                  for (a = 0; a < o.length; a++) {
                    u = o[a];
                    if (0 === u.refs) {
                      for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                      delete h[u.id];
                    }
                  }
                }
              );
            };
            var D = (function () {
              var e = [];
              return function (t, n) {
                return (e[t] = n), e.filter(Boolean).join("\n");
              };
            })();
          },
          function (e, t) {
            e.exports = function (e) {
              var t = "undefined" != typeof window && window.location;
              if (!t) throw new Error("fixUrls requires window.location");
              if (!e || "string" != typeof e) return e;
              var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
              return e.replace(
                /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function (e, t) {
                  var i,
                    o = t
                      .trim()
                      .replace(/^"(.*)"$/, function (e, t) {
                        return t;
                      })
                      .replace(/^'(.*)'$/, function (e, t) {
                        return t;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)
                    ? e
                    : ((i =
                        0 === o.indexOf("//")
                          ? o
                          : 0 === o.indexOf("/")
                          ? n + o
                          : r + o.replace(/^\.\//, "")),
                      "url(" + JSON.stringify(i) + ")");
                }
              );
            };
          },
          function (e, t, n) {
            n(103), (e.exports = n(34));
          },
        ]);
      });
    },
    b54a: function (e, t, n) {
      "use strict";
      n("386b")("link", function (e) {
        return function (t) {
          return e(this, "a", "href", t);
        };
      });
    },
    b616: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPhElEQVR4nO1de1AURxrvmOMul+idZZV/Xe7i5XEjiFLR+Aj4IhqVIIkiakBjxEcSzyhoInhnFFQgYCAKAV+JZyIKJCJ6WgmoEFDUi0HFxJiIsEgSCCKwO92Yusqjrq++cXa3d3Zm2dkHs4v7VX1VW7s7Pd3fb/rxPQchH/nIRz7ykY985CMf3YVEKb2XEBJACIkkhKwlhOwlhJzFGH9JCNERQvQY45+A4TN8J/52lhDyL/EauNYf2tJ6PF5JPM8/TAh5CWP8ESGkkxBCXcRdGOOThJBEnudHUEr7aD1WjyW9Xv8QCIoQ0uBCAGwyxvg7jHE6xvhvWo/fI4hS6ocxXkAIOddTIBBlhmXwBUrpb9DdRpTS34pAXPcAIKiEb2CM4yilv0e9nSil92CMF2GMf1AjpJutt+jpqku06MBJmpleQOOX59AXo1Pp3JlJdPrTiXTyuFUCw2f4Dn6D/8B/4Rq4tu1mu9rlrBlj/CL0GfVG6urqGoYxPmOPMHiep6erauk7W4vp0oVb6FMh8XTikyudYmgD2srdViwABPewsy9nurq6hqLeQpTS3xFCMjHGv3Q3+KtXGgQQZoavcxqA7jgyfB3NTC+kly/V2QPKLxjjDFhqUS84Of2nm6WBflpeQ19ZnKkovAnBcTQkbAMdNTeTjojdRYNW7qdD1h6mQ9Ydo4OTS+ngzeV3OLlU+A5+C1pxQPjvqDlZwrXQhlL7y5Zk0cqKC0JfbPVVr9fX8jz/CPJGIoTMEBU1xQEeL/2MLpr/pqyQxoUm0JHR2YJg/ZPLKJda4RT7bywTgBwVs42On5gge0/oy4my8zZBMRgMt3mefx55E2GMk20N6trXjTR+ebb1TAhZRUdHbaHD4gvp4JRyp0FQYmh7WFyhcK8JMvsTHAiufXPDJjCtra2bkacTmCYwxtsVp3ynge7MPUyfHr/aEoixq+nIednUf8PHbgNBiQPWf0yfmJdNJ4xbZdEn6OPOvCNUrzcogqLT6T7wWG0fNm+M8UGlzjfUfyecciyexuC4O0AklfY4EJx0SUsqpSNjtgl9Yvv4cuxbVNfwnS1Qyjxus4enRLQ7Ke4VoCOwAw0O30gDEw9rDgQn4cDEEhr8TLJFX6HvJ48r7y06na6ysrLSczR8Qki2Umf37S2locxTNyEkjg5fuptybtwjOGc5pZwOX7xb6Kux3zCG/PfLFEG5fPnyYYSQ9ssXxnij0nF21/YjlienpxJp4JqD2gs81c7ZsuYQHTtprcUYQHdROh6fPn36XYSQdpo9ISRKCYy0Tfssl6jpm4Sjp9ZC5lQy6DZPhm+0GMubm/bJgoIx/l9RUVGCJmCAgkQI4eUAyXn7oMUAxsx4kw7edEJz4XKOgrL5JB0TmW4xJrAoyI29o6Pjx/j4+ClamEMuKO0ZbMdHz8l0q07B9RQoKeXCWNixKe0pjY2NDUOHDn24xwAB25RcR0DLZTdweKp6AxgcA8qYmWkWG3358c9lQamoqIBNvq/bwejq6grEGP9s9VTovqfTp5iPtsHTN9LBm713meKUQNlcTp+M2GxxJAYdSyoPnud/Xb58+StuPXmJ/owqOQ38pViz0gcnE2/cwDl7QUkupeOY0xcoj3Ia/fXr16/5+fk97jZAwLkkNz3BHMLqGYEJxZoLjXMzD329mE5k7GBwxJeTTV5eXi5CqL+7TCMtcoZC1jYlKH0eIDCuB3jE4t2mcU+Z8JqsQbK1tbVz4MCB01wOCCFkmdwT8NrKXAtziEdr4Kku5pQKGvJMkoWVWE5Ge/bsAYVxkEujQwghjXI2KtZQ6Im2Kc7NHJhQYuH8kjt1tbS0tPXt2zfSZRu8GCFipY2zziWw2motHE4jBqeXUQ6LF6TLzpLc3Nw8hJBrvI1yblhwu5o28nGrqH/SJ5oLhtPQdA8+HaM8wB0sc+KqQwhFOG3rwhg/BjYa6Q1YH/jdPDs4kUfGZFv46OVmyYwZM1Y7vZdgjDdLG77yZT1zzI0XvG5aC4TTepZs+FhwQRvl8uUX160AOXbsWDFCaLJTiiBE8kkb3pb5odlWFbVFc2FwHsKjZ2WY5JKz9aDc5n6zT58+MQihfg4Bcvv27SBpowYDL8Q0GW8MAQm98olP+1T1NUFxBea4r+lvyAbjRUdHr0EIORZ4hzGOlzYIUX9sqI4jxkO59dWVfEvP03PXW+nyj2odAmNCTjWt/LpZ/bUp5XR8qDnE6Gz1F1Z9y8/P3ytu7uqJEPJvaYPgBzBt5jHbHBqwuwEhbH8r61T1DUBsab9jl3JkbCOjt5rkk5dzyKo/tbW1nyOEohFCf3Qkc8kgbXDpi+Z1ctjKAx4PCCGELsy/0G2fxrx9ih69/K3FdY6MLejVfJN8Xln0lqwD67777puHEFKXkyKmkVlFoRsDn0E7ddSi29OAnPjK9vIDgDW2dlpd58jYQCZGzX3S2HjZqPuoqKjXEEJj1QISKW2o+lStCf2QaUkOdVgLQFraDbL9eHxLJf3gnE7xOkfHFzJtvUlOZ6ovW7Wbnp6eiRCapUpJJIT8Q9pQ4f4TphtB4LO3AEJkhBu15zz9+nvbOSOOjo919X5YUG7VbnFxcYG4j/xBDSDvSxuCBBiTmX3RTq8FJLeqjvLdRLo7A8iI2J0mOb29pciq3XPnzlWKgDxoNyAY42ppQ2yANESleysgxMFZZS8HrdhvktPqFe9YtVtXV/eNCIi/GkC+kjYEqWLGGzljau/tgAQmlpjktDAmzardpqamb0VARqtZspqkDc1+boPpRgFvHPMBkioPSMC6YyY5Qc6jVI4tLS23REAmqQHEKmGfjSpxJommt88Q/yRzbNqz09ZatXvr1i0iAhKmZsn6SdrQ5PFmayaEw/gAqVCMdDTKCeINpHI0GAw/i4DYb0LxAUJ6AhBw6/qWLOI5S9ZcNYD4NvVUxwAZYv+mbj8gGOMr0oZ8x94KVx97I51UDHPMiuHK/b5NPbV7iy/ErdlQDCNcZjqBpHxvPWXlutl0Mjx2h72mkzDXGRfnZHktIJzbjYtv2WtcVKUYzrRpfg/b4HCHf+gwaA4Ip6H5PS0tLdMR00m3DioIy3ekwyevNnsEIJw7HFTJ4KBaaY+DSp1xUXThWtUqYZP/Hd3YY/df8ChAOFe6cFcwLtzFmVb96Ojo6PLz84sRAfkTUkMY4yPSBqHelGkfcTDIARiCDzwJEM5FQQ6jmCCH7e+UWPXj0qVL50Uw1DmoREDibO0jUFXHmRxCGPyZuh+EsB1PAYRzNgxo4hp7woCiVbtwjVXgpA1C8JcvUK5CfrmKO9BtoNzs2bNfFwFRF+TAhJJa5YVkZ33kCyVNtQZk9Kx0m3nszc3NxlBSAOQx5AhhjDdJG/7qSoMv2DpVfbD10aNHDzq8fxiJ5/lH5dIRIOTeeHOoN+XoPtJbeCSTtPP3pdbpCCDD8PDweBGM6cgZkit0DEkpvoSdCgGMgKRP6ISx5tlR9elF2RRpZnYEOgUIVHyWQZwueoFJaXPiCOztPJI56i5ZkCF7ysvNzc1lAHGuwoOoJNbLldKwTPos0Vw4nNZJnydkkz5vPvDAA/NFMBxP2GGJEPJyt2nRYUlCqrDWQuJ6Mi06LLnbtOj33ntvFzM7BrmycECz9GaQLG9ROGDx3VM4YPiinRaFA+quNVmBcfPmzfb+/fu/wPg/XFfgDGO8UO4JgOqd5pzDODp0Te8vrREoLa2RJ19aIycnh907HnFH8ZlK6U2h8AoUYDFlVk1a67AlmPMChiAGKFfIGhEVis98wyiCz7mlMlBXV9cQqIUuvbmu4XsaMdVcIQdKTnhzFTlOgWFMUELEnvJM8+fPT2Bmx0PIXQSF6eWmJ5RStShgNjOtdxcwC4mjFSdrZJeqsrKyIwwYrjlZ2ap9otfrz8t1BMre9cYSf5xQ4s+8LAMX5B+XBUOn0zUwG/nzbinPJCW9Xv8Xg8EgWwSTTQw1zZReVgQzTyahE7ijo+P21KlTVzKzI8jtYDCgPCtn5wItHkqpsgOAUqveuNH7J5XS4HDLStfpKfsVy8RmZGRkMWBM6fHiym1tbVbWYOVCygl06OveVUh5nIpCyocOHTJGkxgdUO4vgilHN27ceFeug8Y9hd3o4ewOldg8WqNPEZU+Rs+ADfzAPvk9A/jUqVMnGDDUpau5oxi/TqcrVeosFPVic0vuhBElC3Ygj5sVCVCM31wlDhiO80qnKeCamppzTOACcIBmYDCg/La+vv6EUqfhlQ+s8mgMJYJACU+otRWQ9IlgtZW+GgmUPiiBawsM5kQF/ATyFEpKSupTU1NTqNR50GZhXwG7jwUwY1cJ9aYCNCjzBPcE1wHrzzDapnZ180KXqqqq45KZEaxpMX4F6lNdXb1b7vTFGiRXvWoO3DbbweLpmFlb6LC4AvfqLinlQuUeKKck98ojsGBfr7M2FLKnqZKSkkLJnhHsEa+rUKKioqJ4CApTGpRxb4EahVKBTIQQI+GlYFuFFGOXvBQsuUyISoe4KTZUh2VwLsn5M1ju7Oz8MSsra5sEjBGeODOsaNmyZZPr6+u7fb0quINZH/1E6cwJhlIe6wWtH5LyASRwhkFiDAja+No8+AzfwcYMwof/wjUhU9ebwjvlGHzgcm5XKTc2NurCwsLiJGBov4GroaCgoEFQmN5gMPxqz4sld20/QufMMKdfu4shbgp0itpL17oFAvoOtql+/foZvX7AUQihPyMvpfsXLFgQe/XqVausLDnmeV6IGgfzBJQ4gqBlZwGANqAtCO+EiEKe7z4/xJhcExMTw1ptgadqpvS5kPpAYfodO3bktra2dtgjDCJyW1sHPXO6Vsi1yMooFA4EC+el3Xk58ZREIV0bGD7Dd/AblLSA/8I1cC20oeae4OmDwATGn2HMCQzy6M3bAeo3YMCAp3fs2LG9ublZ1VujSQ8wJGQWFBR8MHDgwAWSWTFJdRU4L6NBUH4bKj5DkWFbx2TiZoZ7Q9wUzAix2hsLxHMurdvu4QRT/68QyRcaGroCjHPNzc2tPQUELEtlZWVHIyIijBGFLENAAocQuhfdhXSP+BROBmHA0XLv3r3vXrx48bP29nabuowa7uzs/C8cLAD4JUuW/FOyP7DevUFeoVf0EN0vnu0h/jUaTBOQAgZ+BhAkZLDC8tLU1NQEbx0A5dNgMPwCDJ/hO/gN/nP27NlKSLCEayMjI1dLzBzSZSnI4QLHdxH1RQg9ihAKEZPso13EoEOEisAP0HqQ3kr3iCH8D4qCHC0uL2Hiej9LPJbOFT9HiL/Bf0aJCZYPim34liMf+chHPvIR6m30fyECSLRe+UpCAAAAAElFTkSuQmCC";
    },
    bac9: function (e, t, n) {
      "use strict";
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "item", class: e.mode },
            [
              e._t("default"),
              n("div", { staticClass: "dot", attrs: { id: "dot-1" } }),
              n("div", { staticClass: "dot", attrs: { id: "dot-2" } }),
              n("div", { staticClass: "dot", attrs: { id: "dot-3" } }),
              n("div", { staticClass: "dot", attrs: { id: "dot-4" } }),
            ],
            2
          );
        },
        i = [],
        o = { props: ["mode"] },
        a = o,
        s = (n("5205"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "124d7ad7", null);
      t["a"] = u.exports;
    },
    c046: function (e, t, n) {
      "use strict";
      n("784b");
    },
    c053: function (e, t, n) {
      e.exports = n.p + "img/stack-overflow.f13bbfa5.png";
    },
    c236: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "container wrapper" }, [
            n("h2", { staticClass: "mode-1", attrs: { data: e.text } }, [
              e._v(e._s(e.text)),
            ]),
          ]);
        },
        i = [],
        o = {
          data: function () {
            return { text: "PLANNER" };
          },
        },
        a = o,
        s = (n("5fc1"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "08468af6", null);
      t["default"] = u.exports;
    },
    c45d: function (e, t, n) {
      e.exports = n.p + "img/WechatIMG1124.01e64712.jpeg";
    },
    c5f6: function (e, t, n) {
      "use strict";
      var r = n("7726"),
        i = n("69a8"),
        o = n("2d95"),
        a = n("5dbc"),
        s = n("6a99"),
        u = n("79e5"),
        l = n("9093").f,
        c = n("11e9").f,
        f = n("86cc").f,
        p = n("aa77").trim,
        d = "Number",
        h = r[d],
        v = h,
        g = h.prototype,
        m = o(n("2aeb")(g)) == d,
        y = "trim" in String.prototype,
        b = function (e) {
          var t = s(e, !1);
          if ("string" == typeof t && t.length > 2) {
            t = y ? t.trim() : p(t, 3);
            var n,
              r,
              i,
              o = t.charCodeAt(0);
            if (43 === o || 45 === o) {
              if (((n = t.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
            } else if (48 === o) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (i = 55);
                  break;
                default:
                  return +t;
              }
              for (var a, u = t.slice(2), l = 0, c = u.length; l < c; l++)
                if (((a = u.charCodeAt(l)), a < 48 || a > i)) return NaN;
              return parseInt(u, r);
            }
          }
          return +t;
        };
      if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
        h = function (e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof h &&
            (m
              ? u(function () {
                  g.valueOf.call(n);
                })
              : o(n) != d)
            ? a(new v(b(t)), n, h)
            : b(t);
        };
        for (
          var w,
            D = n("9e1e")
              ? l(v)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            x = 0;
          D.length > x;
          x++
        )
          i(v, (w = D[x])) && !i(h, w) && f(h, w, c(v, w));
        (h.prototype = g), (g.constructor = h), n("2aba")(r, d, h);
      }
    },
    c81a: function (e, t, n) {},
    cb5e: function (e, t, n) {
      "use strict";
      n("76e4");
    },
    cd1c: function (e, t, n) {
      var r = n("e853");
      e.exports = function (e, t) {
        return new (r(e))(t);
      };
    },
    cf26: function (e, t, n) {
      e.exports = n.p + "img/instagram.0475d39b.png";
    },
    da0a: function (e, t, n) {
      "use strict";
      n("22eb");
    },
    e3ee: function (e, t, n) {},
    e853: function (e, t, n) {
      var r = n("d3f4"),
        i = n("1169"),
        o = n("2b4c")("species");
      e.exports = function (e) {
        var t;
        return (
          i(e) &&
            ((t = e.constructor),
            "function" != typeof t ||
              (t !== Array && !i(t.prototype)) ||
              (t = void 0),
            r(t) && ((t = t[o]), null === t && (t = void 0))),
          void 0 === t ? Array : t
        );
      };
    },
    e9d9: function (e, t, n) {
      "use strict";
      n("0a99");
    },
    f1ae: function (e, t, n) {
      "use strict";
      var r = n("86cc"),
        i = n("4630");
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
      };
    },
    f3d6: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "container wrapper", class: { dark: e.dark } },
            [
              n(
                "div",
                { staticClass: "inner", class: { black: "b" === e.mode } },
                [
                  e._m(0),
                  n("div", { staticClass: "content" }, [
                    n("div", { staticClass: "shici" }, [
                      n("div", { staticClass: "note note-2" }, [
                        e._v(e._s(e.content[1] || "")),
                      ]),
                      n("div", { staticClass: "note note-1" }, [
                        e._v(e._s(e.content[0])),
                      ]),
                    ]),
                    n("div", { staticClass: "date" }, [
                      e._v(
                        e._s(e.year) +
                          " / " +
                          e._s(e.month) +
                          " / " +
                          e._s(e.day)
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          );
        },
        i = [
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n("div", { staticClass: "header" }, [n("em"), n("em")]);
          },
        ],
        o = (n("28a5"), n("a1a0")),
        a = {
          props: ["styleMode", "dark"],
          data: function () {
            return {
              content: "",
              year: "",
              month: "",
              day: "",
              result: null,
              mode: this.$route.params.mode || this.styleMode,
            };
          },
          mounted: function () {
            var e = this;
            o.load(function (t) {
              var n = t.data.content;
              (e.result = t.data),
                console.log(n),
                (n = n.replaceAll("。", "")),
                (e.content = n.split("，"));
            });
            var t,
              n,
              r = new Date();
            (this.year = r.getFullYear()),
              (t = r.getMonth() + 1),
              (n = r.getDate()),
              (t = t > 9 ? t : "0".concat(t)),
              (n = n > 9 ? n : "0".concat(n)),
              (e.month = t),
              (e.day = n);
          },
          watch: {
            styleMode: function (e) {
              e && (this.mode = e);
            },
          },
        },
        s = a,
        u = (n("c046"), n("2877")),
        l = Object(u["a"])(s, r, i, !1, null, "9fe30a76", null);
      t["default"] = l.exports;
    },
    f474: function (e, t, n) {},
    f836: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "block" },
            [
              n(
                "el-row",
                [
                  n(
                    "el-col",
                    { attrs: { span: 16, offset: 3 } },
                    [
                      n("h1", [e._v("更新日志")]),
                      n(
                        "el-timeline",
                        e._l(e.logs, function (t, r) {
                          return n(
                            "el-timeline-item",
                            {
                              key: t.date,
                              attrs: {
                                timestamp: t.date,
                                placement: "top",
                                icon: t.icon,
                                type: t.type,
                                index: r,
                              },
                            },
                            [
                              n("el-card", [
                                n("h4", {
                                  domProps: { innerHTML: e._s(t.content) },
                                }),
                                n(
                                  "p",
                                  [
                                    n(
                                      "el-tag",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: 0 === r,
                                            expression: "index === 0",
                                          },
                                        ],
                                        attrs: {
                                          type: "danger",
                                          size: "mini",
                                          effect: "dark",
                                          id: "new-tag",
                                        },
                                      },
                                      [e._v("New")]
                                    ),
                                    n(
                                      "el-tag",
                                      {
                                        attrs: {
                                          type: "primary",
                                          size: "mini",
                                        },
                                      },
                                      [e._v("版本：" + e._s(t.version))]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        o = {
          data: function () {
            return {
              logs: [
                {
                  date: "2023/01/10",
                  author: "httishere",
                  content: "Feat: 新增组件评论区",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.4",
                },
                {
                  date: "2023/01/08",
                  author: "httishere",
                  content: "Feat: 新增范围日历组件",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.3",
                },
                {
                  date: "2023/01/07",
                  author: "httishere",
                  content: "Feat: 新增快捷按钮组件",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.3",
                },
                {
                  date: "2023/01/06",
                  author: "httishere",
                  content:
                    "Feat: 优化组件库列表和获取方式，公开展示组件和模版内容",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.3",
                },
                {
                  date: "2023/01/05",
                  author: "httishere",
                  content:
                    "Feat: <br><br>1. 年度格子支持暗黑模式;<br><br>2. 新增Notion模版(年度计划);",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.2",
                },
                {
                  date: "2023/01/02",
                  author: "httishere",
                  content:
                    "Feat: <br><br>1. 重构访问方式(弹窗);<br><br>2. 新增Notion模版(每日打卡，年度复盘);",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.2",
                },
                {
                  date: "2022/12/24",
                  author: "httishere",
                  content: "补充范围日历。",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.1",
                },
                {
                  date: "2022/12/22",
                  author: "httishere",
                  content: "补充两个倒数日组件。",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.1",
                },
                {
                  date: "2022/07/22",
                  author: "httishere",
                  content:
                    "组件库UI全面升级，简化使用操作<br><br>Feat:<br>1. UI升级<br>2. 新增多个组件<br>3. 新增多个Notion模版<br><br>Bugs:<br> 1. 组件参数造成的embed失败",
                  icon: "el-icon-success",
                  type: "success",
                  version: "2.0.1",
                },
                {
                  date: "2022/04/04",
                  author: "httishere",
                  content: "部分组件支持周起始选择（周一/周日）",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.3",
                },
                {
                  date: "2022/04/03",
                  author: "httishere",
                  content: "图床修复，更新口令",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.3",
                },
                {
                  date: "2022/01/12",
                  author: "httishere",
                  content:
                    "新增3个相关日历组件，优化文案空格问题。新增暗黑模式设置",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.2",
                },
                {
                  date: "2022/01/07",
                  author: "httishere",
                  content: "优化“人生进度条”，增加备注设置",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.2",
                },
                {
                  date: "2022/01/06.2",
                  author: "httishere",
                  content: "HTT组件库正式上线！！",
                  icon: "el-icon-success",
                  type: "warning",
                  version: "1.0.2",
                },
                {
                  date: "2022/01/06",
                  author: "httishere",
                  content: "新增组件：“日历卡片”，“人生进度条”和“电子桌面时钟”",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.2",
                },
                {
                  date: "2022/01/05",
                  author: "httishere",
                  content: "新增组件：“多项倒数日”",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.2",
                },
                {
                  date: "2022/01/04",
                  author: "httishere",
                  content: "新增组件：“时间进度条”和“周进度”",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.2",
                },
                {
                  date: "2021/12/31",
                  author: "httishere",
                  content: "新增组件：“历史上的今天”和“今日诗词”",
                  icon: "el-icon-success",
                  type: "success",
                  version: "1.0.1",
                },
                {
                  date: "2021/12/30",
                  author: "httishere",
                  content: "基本组件汇总，动态时钟实现",
                  icon: "el-icon-success",
                  type: "success",
                  link: null,
                  version: "1.0.1",
                },
              ],
            };
          },
        },
        a = o,
        s = (n("acee"), n("2877")),
        u = Object(s["a"])(a, r, i, !1, null, "0b6c9fe1", null);
      t["default"] = u.exports;
    },
    fbf0: function (e, t, n) {
      e.exports = n.p + "img/linkedin.836d1a60.png";
    },
    fd78: function (e, t, n) {
      e.exports = n.p + "img/reward-alipay.0f79c749.jpg";
    },
    fdef: function (e, t) {
      e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
  },
]);
//# sourceMappingURL=about.fcbc82c3.js.map
