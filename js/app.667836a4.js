(function (t) {
  function e(e) {
    for (
      var a, i, o = e[0], c = e[1], l = e[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (i = o[u]),
        Object.prototype.hasOwnProperty.call(s, i) && s[i] && d.push(s[i][0]),
        (s[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    p && p(e);
    while (d.length) d.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < r.length; e++) {
      for (var n = r[e], a = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== s[o] && (a = !1);
      }
      a && (r.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    s = { app: 0 },
    r = [];
  function o(t) {
    return (
      c.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      {
        about: "fcbc82c3",
        "chunk-09087d14": "3fa49465",
        "chunk-14590299": "6ebd55e2",
        "chunk-492da738": "c1b199eb",
        "chunk-57283e1a": "bd0938f5",
        "chunk-69514548": "66063647",
      }[t] +
      ".js"
    );
  }
  function c(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (t) {
    var e = [],
      n = {
        about: 1,
        "chunk-09087d14": 1,
        "chunk-14590299": 1,
        "chunk-492da738": 1,
        "chunk-57283e1a": 1,
        "chunk-69514548": 1,
      };
    i[t]
      ? e.push(i[t])
      : 0 !== i[t] &&
        n[t] &&
        e.push(
          (i[t] = new Promise(function (e, n) {
            for (
              var a =
                  "css/" +
                  ({ about: "about" }[t] || t) +
                  "." +
                  {
                    about: "dc16ef25",
                    "chunk-09087d14": "07aa8c6a",
                    "chunk-14590299": "fed73c0f",
                    "chunk-492da738": "95da3b41",
                    "chunk-57283e1a": "87833b4f",
                    "chunk-69514548": "6c448f99",
                  }[t] +
                  ".css",
                s = c.p + a,
                r = document.getElementsByTagName("link"),
                o = 0;
              o < r.length;
              o++
            ) {
              var l = r[o],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === a || u === s)) return e();
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
              (l = d[o]), (u = l.getAttribute("data-href"));
              if (u === a || u === s) return e();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = e),
              (p.onerror = function (e) {
                var a = (e && e.target && e.target.src) || s,
                  r = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + a + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = a),
                  delete i[t],
                  p.parentNode.removeChild(p),
                  n(r);
              }),
              (p.href = s);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p);
          }).then(function () {
            i[t] = 0;
          }))
        );
    var a = s[t];
    if (0 !== a)
      if (a) e.push(a[2]);
      else {
        var r = new Promise(function (e, n) {
          a = s[t] = [e, n];
        });
        e.push((a[2] = r));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = o(t));
        var d = new Error();
        l = function (e) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var n = s[t];
          if (0 !== n) {
            if (n) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (d.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = a),
                (d.request = i),
                n[1](d);
            }
            s[t] = void 0;
          }
        };
        var p = setTimeout(function () {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (c.m = t),
    (c.c = a),
    (c.d = function (t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          c.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = ""),
    (c.oe = function (t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var d = 0; d < l.length; d++) e(l[d]);
  var p = u;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function (t, e, n) {
    "use strict";
    n("78ed");
  },
  "091d": function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "layout" },
          [
            a("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !t.show_header,
                  expression: "!show_header",
                },
              ],
              staticClass: "circle",
              attrs: { src: n("66e5") },
            }),
            t.show_header
              ? a("div", { staticClass: "header" }, [
                  a(
                    "div",
                    { staticClass: "site" },
                    [
                      a("img", { attrs: { id: "icon", src: n("d8e1") } }),
                      a(
                        "router-link",
                        { attrs: { to: { name: "index" }, underline: !1 } },
                        [a("h2", [t._v(t._s(t.site_name))])]
                      ),
                    ],
                    1
                  ),
                  a(
                    "div",
                    { staticClass: "extra" },
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "header-link",
                          class: { active: "plugin" === t.active_tab },
                          attrs: { to: { name: "lib" } },
                        },
                        [t._v("组件")]
                      ),
                      a(
                        "router-link",
                        {
                          staticClass: "header-link",
                          class: { active: "picks" === t.active_tab },
                          attrs: { to: { name: "picks" } },
                        },
                        [t._v("Notion")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "header-link",
                          attrs: { type: "info" },
                          on: { click: t.handleDoc },
                        },
                        [t._v("使用教程")]
                      ),
                      a(
                        "router-link",
                        {
                          staticClass: "header-link",
                          class: { active: "releases" === t.active_tab },
                          attrs: { to: { name: "log" } },
                        },
                        [t._v("更新日志")]
                      ),
                      a(
                        "router-link",
                        { attrs: { to: { name: "lib" }, underline: !1 } },
                        [
                          a(
                            "el-button",
                            {
                              attrs: { type: "primary", plain: "", round: "" },
                            },
                            [t._v("使用组件")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ])
              : a("div", { staticClass: "header2" }, [
                  a("h1", [t._v(t._s(t.site_name))]),
                  a("div", { staticClass: "menu" }, [
                    a("div", { staticClass: "menu-item" }, [t._v("首页")]),
                    a(
                      "div",
                      { staticClass: "menu-item" },
                      [
                        a("router-link", { attrs: { to: "/lib" } }, [
                          t._v("组件"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "div",
                      { staticClass: "menu-item", on: { click: t.handleDoc } },
                      [t._v("使用教程")]
                    ),
                    a(
                      "div",
                      { staticClass: "menu-item" },
                      [
                        a("router-link", { attrs: { to: "/reward" } }, [
                          t._v("为爱发电"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "div",
                      { staticClass: "menu-item" },
                      [
                        a("router-link", { attrs: { to: "/releases" } }, [
                          t._v("日志"),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "div",
                      { staticClass: "menu-item" },
                      [
                        a(
                          "el-badge",
                          { staticClass: "item", attrs: { value: "new" } },
                          [
                            a("router-link", { attrs: { to: "/news" } }, [
                              a("div", { staticClass: "menu-item" }, [
                                t._v("公告"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
            t._t("default"),
            t._m(0),
            a(
              "el-drawer",
              {
                attrs: {
                  title: "使用教程",
                  visible: t.drawer,
                  direction: t.direction,
                  size: "50%",
                },
                on: {
                  "update:visible": function (e) {
                    t.drawer = e;
                  },
                },
              },
              [a("document")],
              1
            ),
            a(
              "el-tooltip",
              {
                staticClass: "question",
                attrs: {
                  effect: "dark",
                  content: "问题反馈",
                  placement: "top",
                },
              },
              [
                a(
                  "a",
                  {
                    staticClass: "feedback",
                    attrs: {
                      href: "https://httishere.notion.site/1bb6ab70c0d646c88459d7e78ff020f4",
                      target: "blank",
                    },
                  },
                  [t._v("?")]
                ),
              ]
            ),
            a(
              "el-dialog",
              {
                attrs: {
                  title: t.newUpdate && t.newUpdate.title,
                  visible: t.centerDialogVisible,
                  width: "40%",
                  center: "",
                },
                on: {
                  "update:visible": function (e) {
                    t.centerDialogVisible = e;
                  },
                },
              },
              [
                a("div", {
                  staticClass: "new-box",
                  domProps: { innerHTML: t._s(t.newUpdate && t.newUpdate.msg) },
                }),
                a("p", { staticClass: "dialog-date" }, [
                  t._v(t._s(t.newUpdate && t.newUpdate.datetime)),
                ]),
                a(
                  "span",
                  {
                    staticClass: "dialog-footer",
                    attrs: { slot: "footer" },
                    slot: "footer",
                  },
                  [
                    a(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function (e) {
                            return t.handleUpdateDialog(t.newUpdate);
                          },
                        },
                      },
                      [t._v("立即体验")]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ],
          2
        );
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "footer" }, [
            n("div", { staticClass: "inner" }, []),
          ]);
        },
      ],
      s =
        (n("6762"),
        n("2fdb"),
        n("7f7f"),
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "block" },
            [
              n(
                "el-collapse",
                { attrs: { value: ["1"] } },
                [
                  n(
                    "el-collapse-item",
                    { attrs: { title: "Step 1: 创建专属组件", name: "1" } },
                    [
                      n("p", [
                        t._v("\n        1. 选择想要的组件进行创建"),
                        n("br"),
                        t._v(
                          "\n        2. 设置自己想要的配置，背景颜色，字体颜色等"
                        ),
                        n("br"),
                        t._v(
                          "\n        3. 点击右下角立即创建即复制对应的组件链接\n      "
                        ),
                      ]),
                      n("img", { attrs: { src: t.step1 } }),
                    ]
                  ),
                  n(
                    "el-collapse-item",
                    { attrs: { title: "Step 2: 在Notion内使用", name: "2" } },
                    [
                      n("p", [
                        t._v("方式一：直接粘贴链接并选择「Create embed」"),
                      ]),
                      n("img", { attrs: { src: t.notion[0] } }),
                      n("p", [
                        t._v(
                          "方式二：输入「/embed」命令并选择，在「Embed link」内输入组件链接"
                        ),
                      ]),
                      n("img", { attrs: { src: t.notion[1] } }),
                      n("img", { attrs: { src: t.notion[2] } }),
                    ]
                  ),
                  n(
                    "el-collapse-item",
                    { attrs: { title: "Step 3: 在FlowUs内使用", name: "3" } },
                    [
                      n("p", [
                        t._v("方式一：直接粘贴链接并选择「转换为 嵌入网页」"),
                      ]),
                      n("img", { attrs: { src: t.flowus[0] } }),
                      n("p", [
                        t._v(
                          "方式二：输入「/embed」命令并选择「嵌入网页」，在输入框内内输入组件链接"
                        ),
                      ]),
                      n("img", { attrs: { src: t.flowus[1] } }),
                      n("img", { attrs: { src: t.flowus[2] } }),
                    ]
                  ),
                  n(
                    "el-collapse-item",
                    { attrs: { title: "Step 4: 在Wolai内使用", name: "4" } },
                    [
                      n("p", [
                        t._v(
                          "输入「/embed」命令并选择「嵌入内容」，在输入框内内输入组件链接"
                        ),
                      ]),
                      n("img", { attrs: { src: t.wolai[0] } }),
                      n("img", { attrs: { src: t.wolai[1] } }),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          );
        }),
      r = [],
      o = {
        data: function () {
          return {
            step1: n("d08d"),
            notion: [n("b1b1"), n("a6c9"), n("a532")],
            flowus: [n("e548"), n("d6ef"), n("c175")],
            wolai: [n("20f9"), n("305b")],
          };
        },
      },
      c = o,
      l = (n("67b9"), n("2877")),
      u = Object(l["a"])(c, s, r, !1, null, "dcd479a6", null),
      d = u.exports,
      p = {
        components: { Document: d },
        data: function () {
          return {
            site_name: "Wigets",
            drawer: !1,
            direction: "rtl",
            newUpdate: null,
            centerDialogVisible: !1,
            pathname: this.$route.name,
          };
        },
        computed: {
          show_header: function () {
            var t = this.$route.name;
            return console.log(t), "index" !== t;
          },
          active_tab: function () {
            var t = this.$route.path;
            return t.includes("/lib") || t.includes("/create")
              ? "plugin"
              : t.includes("/picks")
              ? "picks"
              : t.includes("/releases")
              ? "releases"
              : t.includes("/reward")
              ? "reward"
              : t;
          },
        },
        mounted: function () {
          this.getDatas();
        },
        methods: {
          handleDoc: function () {
            this.drawer = !0;
          },
          getDatas: function () {
            var t = this;
            this.$axios
              .get("./news.json?v=".concat(Math.random()))
              .then(function (e) {
                var n = e.data.news,
                  a = localStorage.update;
                for (var i in n)
                  if (n[i].show && "update" === n[i].type) {
                    t.newUpdate = n[i];
                    break;
                  }
                (a && a === t.newUpdate.datetime) ||
                  ((t.centerDialogVisible = !0),
                  (localStorage.update = t.newUpdate.datetime));
              });
          },
          handleUpdateDialog: function (t) {
            return (
              t.page &&
                (this.$router.push(t.page), (this.centerDialogVisible = !1)),
              (this.centerDialogVisible = !1)
            );
          },
        },
      },
      f = p,
      m = (n("15f5"), Object(l["a"])(f, a, i, !1, null, "05036972", null));
    e["a"] = m.exports;
  },
  "0ba8": function (t, e, n) {
    t.exports = n.p + "img/home-page_4.4faa692f.png";
  },
  1: function (t, e) {},
  "15f5": function (t, e, n) {
    "use strict";
    n("4384");
  },
  "20f9": function (t, e, n) {
    t.exports = n.p + "img/wolai_01.6f9e8370.png";
  },
  "26b1": function (t, e, n) {},
  "2d8f": function (t, e, n) {
    t.exports = n.p + "img/home-page_1.d5fc31ce.png";
  },
  "305b": function (t, e, n) {
    t.exports = n.p + "img/wolai_02.cfae039f.png";
  },
  "42e8": function (t, e, n) {
    t.exports = n.p + "img/home-page_2.d698c1ed.png";
  },
  4384: function (t, e, n) {},
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("6762"), n("7f7f"), n("cadf"), n("551c"), n("f751"), n("097d");
    var a = n("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [n("Code"), n("router-view")],
          1
        );
      },
      s = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.show,
                expression: "show",
              },
            ],
            staticClass: "container dialog-container",
          },
          [
            n("div", { staticClass: "mask" }),
            n(
              "div",
              { staticClass: "dialog-content code-content" },
              [
                n(
                  "span",
                  { staticClass: "btn-close", on: { click: t.close } },
                  [n("i", { staticClass: "el-icon-close" })]
                ),
                n("h2", [t._v("Widgets")]),
                n(
                  "div",
                  { staticClass: "form-box" },
                  [
                    n(
                      "el-input",
                      {
                        staticClass: "input-with-select",
                        attrs: { placeholder: "请输入访问口令" },
                        model: {
                          value: t.code,
                          callback: function (e) {
                            t.code = e;
                          },
                          expression: "code",
                        },
                      },
                      [
                        n("el-button", {
                          attrs: {
                            slot: "append",
                            "data-splitbee-event": "Enter code",
                            type: "primary",
                            icon: "el-icon-right",
                          },
                          on: { click: t.checkCode },
                          slot: "append",
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                n("el-tag", { attrs: { type: "danger" } }, [
                  t._v("口令区分大小写"),
                ]),
                t._m(0),
                n("br"),
                t._m(1),
              ],
              1
            ),
          ]
        );
      },
      o = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "msg" }, [
            t._v("组件库的"),
            n("strong", [t._v("访问口令会不定期进行更新")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "msg" }, []);
        },
      ],
      c = n("8237"),
      l = n.n(c),
      u = {
        data: function () {
          return { show: !1, code: "" };
        },
        methods: {
          open: function () {
            console.log("open"), (this.show = !0);
          },
          close: function () {
            this.show = !1;
          },
          checkCode: function () {
            splitbee.track("Enter code");
            var t = this;
            return this.code
              ? l()(this.code) == this.$token
                ? this.$message({
                    message: "口令错误",
                    center: !0,
                    type: "error",
                  })
                : (this.$message({
                    message: "访问成功",
                    center: !0,
                    type: "success",
                  }),
                  localStorage.setItem("token", l()(this.code)),
                  void setTimeout(function () {
                    t.close(), t.successGo();
                  }, 2e3))
              : this.$message({
                  message: "请输入正确的访问口令",
                  center: !0,
                  type: "error",
                });
          },
        },
      },
      d = u,
      p = (n("c5f0"), n("2877")),
      f = Object(p["a"])(d, r, o, !1, null, "d62f037c", null),
      m = f.exports,
      h = { components: { Code: m } },
      v = h,
      g = (n("034f"), Object(p["a"])(v, i, s, !1, null, null, null)),
      b = g.exports,
      _ = n("5c96"),
      w = n.n(_);
    n("c69f");
    a["default"].use(w.a);
    var k = n("8c4f"),
      C = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "home" },
          [n("layouts", [n("router-view")], 1)],
          1
        );
      },
      y = [],
      x = n("091d"),
      E = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "main-container" },
          [
            a(
              "el-carousel",
              {
                staticClass: "swiper",
                attrs: { "indicator-position": "outside" },
              },
              [
                a("el-carousel-item", [
                  a(
                    "div",
                    { staticClass: "panel", attrs: { id: "panel-01" } },
                    [
                      a(
                        "div",
                        { staticClass: "left-panel" },
                        [
                          a("h1", [t._v("个性化自定义你的组件")]),
                          a("p", [
                            t._v("只要动动手就可以拥有专属于自己的个人组件"),
                          ]),
                          a("p", [
                            t._v(
                              "无个数限制，支持嵌入Notion，Wolai，FlowUs，Obsidian等笔记软件"
                            ),
                          ]),
                          a(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                size: "medium",
                                round: "",
                                id: "main-btn",
                              },
                              on: { click: t.handleStart },
                            },
                            [t._v("开始使用")]
                          ),
                        ],
                        1
                      ),
                      a("div", { staticClass: "right-panel" }, [
                        a("img", {
                          staticClass: "main-img",
                          attrs: { src: n("fbf5"), alt: "" },
                        }),
                      ]),
                    ]
                  ),
                ]),
                a("el-carousel-item", [
                  a(
                    "div",
                    { staticClass: "panel", attrs: { id: "panel-02" } },
                    [
                      a("div", { staticClass: "left-panel" }, [
                        a("img", {
                          staticClass: "main-img_win",
                          attrs: { src: n("2d8f"), alt: "" },
                        }),
                      ]),
                      a("div", { staticClass: "right-panel text-panel" }, [
                        a("h2", [t._v("打造个性化个人页面")]),
                        a("p", [t._v("丰富页面，把笔记做成网站")]),
                      ]),
                    ]
                  ),
                ]),
                a("el-carousel-item", [
                  a(
                    "div",
                    { staticClass: "panel", attrs: { id: "panel-03" } },
                    [
                      a("div", { staticClass: "left-panel text-panel" }, [
                        a("h2", [t._v("更加直观的数据感受")]),
                        a("p", [t._v("也可作为模块分割的工具")]),
                      ]),
                      a("div", { staticClass: "right-panel" }, [
                        a("img", {
                          staticClass: "main-img_win",
                          attrs: { src: n("42e8"), alt: "" },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ],
              1
            ),
            t._m(0),
            a("div", { staticClass: "panel", attrs: { id: "like-list" } }, [
              a("h2", [t._v("🔥 最受欢迎 🔥")]),
              a(
                "div",
                { staticClass: "list" },
                t._l(t.list, function (e, n) {
                  return a("div", { key: e.id, staticClass: "list-item" }, [
                    a("div", { staticClass: "img-box" }, [
                      a("img", { attrs: { src: e.cover, alt: "" } }),
                    ]),
                    a(
                      "h4",
                      [
                        t._v(
                          "\n          NO." +
                            t._s(n + 1) +
                            " " +
                            t._s(e.tag) +
                            "\n          "
                        ),
                        a(
                          "router-link",
                          {
                            staticClass: "view",
                            attrs: { to: "/create/" + e.id + "/time" },
                          },
                          [t._v(">> 查看")]
                        ),
                      ],
                      1
                    ),
                  ]);
                }),
                0
              ),
            ]),
            a("div", { staticClass: "panel", attrs: { id: "guide" } }, [
              a(
                "div",
                { staticClass: "text-panel" },
                [
                  a("h2", [t._v("开始配置你的组件吧")]),
                  a("p", [t._v("Get started for free.")]),
                  a(
                    "el-button",
                    {
                      attrs: {
                        type: "primary",
                        size: "medium",
                        round: "",
                        id: "main-btn",
                      },
                      on: { click: t.handleStart },
                    },
                    [t._v("开始使用")]
                  ),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      $ = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "panel", attrs: { id: "panel-04" } }, [
            a("div", { staticClass: "left-panel" }, [
              a("img", {
                staticClass: "main-img_win2",
                attrs: { src: n("ed89"), alt: "" },
              }),
            ]),
            a("div", { staticClass: "right-panel" }, [
              a("img", {
                staticClass: "main-img_win2",
                attrs: { src: n("0ba8"), alt: "" },
              }),
            ]),
          ]);
        },
      ],
      S = {
        data: function () {
          return {
            list: [
              {
                id: 7,
                cover: "./assets/20220104111624.png",
                tag: "年度格子",
                link: "https://cuman.pptest.com.cn/widgets-html/new/year-block.html",
                mode: "light",
                dark: !1,
              },
              {
                id: 3,
                cover: "./assets/20211230170132.png",
                tag: "日历",
                link: "https://cuman.pptest.com.cn/widgets-html/calendar.html",
                mode: "light",
                dark: !1,
              },
              {
                id: 1,
                cover: "./assets/20211230144940.png",
                tag: "进度时钟",
                link: "https://cuman.pptest.com.cn/widgets-html/progress.html",
                mode: "light",
              },
              {
                id: 12,
                cover: "./assets/Xnip2022-01-06_12-37-34.jpg",
                tag: "日历卡片",
                link: "https://cuman.pptest.com.cn/widgets-html/new/calendar.html",
                mode: "all",
                dark: !1,
                monday: !0,
              },
              {
                id: 14,
                cover: "./assets/20220106152448.png",
                tag: "桌面时钟",
                link: "https://cuman.pptest.com.cn/widgets-html/new/big-clock.html",
                mode: "all",
                dark: !1,
              },
              {
                id: 15,
                cover: "./assets/Xnip2022-01-11_11-26-50.jpg",
                tag: "限定周",
                link: "https://cuman.pptest.com.cn/widgets-html/new/highlight-week.html",
                mode: "all",
              },
            ],
          };
        },
        methods: {
          handleStart: function () {
            this.$router.push("/lib");
          },
        },
      },
      O = S,
      j = (n("e825"), Object(p["a"])(O, E, $, !1, null, "27345754", null)),
      U = j.exports,
      D = { name: "home", components: { Layouts: x["a"], FirstPanel: U } },
      P = D,
      T = (n("a227"), Object(p["a"])(P, C, y, !1, null, "3d723b8c", null)),
      N = T.exports;
    a["default"].use(k["a"]);
    var A = new k["a"]({
        routes: [
          {
            path: "/code",
            name: "code",
            component: function () {
              return n.e("chunk-69514548").then(n.bind(null, "3e81"));
            },
          },
          {
            path: "/",
            name: "home",
            component: N,
            redirect: "/index",
            children: [
              { path: "/index", name: "index", component: U },
              {
                path: "/releases",
                name: "log",
                component: function () {
                  return n.e("about").then(n.bind(null, "f836"));
                },
              },
              {
                path: "/reward",
                name: "reward",
                component: function () {
                  return n.e("about").then(n.bind(null, "41d6"));
                },
              },
              {
                path: "/create/:id/:type",
                name: "create",
                component: function () {
                  return n.e("about").then(n.bind(null, "1071"));
                },
              },
              {
                path: "/news",
                name: "news",
                component: function () {
                  return n.e("chunk-14590299").then(n.bind(null, "a2f9"));
                },
              },
              {
                path: "/picks",
                name: "picks",
                component: function () {
                  return n.e("chunk-57283e1a").then(n.bind(null, "98ca"));
                },
              },
              {
                path: "/picks/paid",
                name: "paid",
                component: function () {
                  return n.e("chunk-492da738").then(n.bind(null, "a028"));
                },
              },
            ],
          },
          {
            path: "/lib",
            name: "lib",
            component: function () {
              return n.e("chunk-09087d14").then(n.bind(null, "f2f9"));
            },
            redirect: "/lib/time",
            children: [
              {
                path: "/lib/time",
                name: "time",
                component: function () {
                  return n.e("about").then(n.bind(null, "6652"));
                },
              },
              {
                path: "/lib/eff",
                name: "eff",
                component: function () {
                  return n.e("about").then(n.bind(null, "56a5"));
                },
              },
              {
                path: "/lib/others",
                name: "others",
                component: function () {
                  return n.e("about").then(n.bind(null, "6d03"));
                },
              },
              {
                path: "/lib/formula",
                name: "formula",
                component: function () {
                  return n.e("about").then(n.bind(null, "09a9"));
                },
              },
            ],
          },
          {
            path: "/wid/quote_pic/:mode?",
            name: "quote_pic",
            component: function () {
              return n.e("about").then(n.bind(null, "5739"));
            },
          },
          {
            path: "/wid/title/:title?",
            name: "title",
            component: function () {
              return n.e("about").then(n.bind(null, "c236"));
            },
          },
          {
            path: "/wid/history-today",
            name: "history-today",
            component: function () {
              return n.e("about").then(n.bind(null, "3f3f"));
            },
          },
          {
            path: "/wid/today/:mode?",
            name: "today",
            component: function () {
              return n.e("about").then(n.bind(null, "f3d6"));
            },
          },
          {
            path: "/wid/mul-days-matter",
            name: "mul-days-matter",
            component: function () {
              return n.e("about").then(n.bind(null, "1950"));
            },
          },
        ],
      }),
      B = (n("499a"), n("909d"), n("4eb5")),
      L = n.n(B),
      q = n("bc3a"),
      M = n.n(q),
      V = (n("6b54"), n("3452")),
      W = "httishere9607281",
      F = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W;
        e = V["enc"].Utf8.parse(e);
        var n = V["enc"].Utf8.parse(t),
          a = V["AES"].encrypt(n, e, {
            mode: V["mode"].ECB,
            padding: V["pad"].Pkcs7,
          }),
          i = a.toString();
        return i;
      };
    function H(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W;
      e = V["enc"].Utf8.parse(e);
      var n = V["AES"].decrypt(t, e, {
          mode: V["mode"].ECB,
          padding: V["pad"].Pkcs7,
        }),
        a = n.toString(V["enc"].Utf8);
      return a;
    }
    var z = { aseEncryptParams: F, aesDecryptParams: H },
      I = a["default"].extend(m);
    m.install = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = new I({ data: t }).$mount();
      document.body.appendChild(e.$el),
        a["default"].nextTick(function () {
          e.open();
        });
    };
    var G = m,
      X = n("5488"),
      J = n.n(X);
    a["default"].component(J.a.name, J.a);
    var R = M.a.create({ withCredentials: !0 });
    R.interceptors.request.use(
      function (t) {
        return (
          (t.headers["X-Auth-Token"] =
            "8Bw0MWHoOQwNR1g1O8OtyLz5P0wyFnj8rkqlmOcD"),
          t
        );
      },
      function (t) {
        return Promise.error(t);
      }
    ),
      a["default"].use(L.a),
      (a["default"].prototype.$axios = R),
      (a["default"].prototype.$global_path =
        window.location.origin + "/widgets-site"),
      (a["default"].config.productionTip = !1);
    var K = "724624a3c05c3a17e9d92a562cc39857";
    (a["default"].prototype.$token = K),
      (a["default"].prototype.$crypto = z),
      (a["default"].prototype.$code = G.install);
    var Q = [
      "code",
      "index",
      "log",
      "lib",
      "reward",
      "lib",
      "time",
      "eff",
      "others",
      "picks",
      "paid",
    ];
    A.beforeEach(function (t, e, n) {
      if (Q.includes(t.name)) n();
      else {
        var a = localStorage.getItem("token");
        a && a === K
          ? n()
          : (G.install({
              successGo: function () {
                n();
              },
            }),
            n(!1));
      }
    }),
      new a["default"]({
        router: A,
        render: function (t) {
          return t(b);
        },
      }).$mount("#app");
  },
  "66e5": function (t, e, n) {
    t.exports = n.p + "img/home-bg.4bc2e50b.png";
  },
  "67b9": function (t, e, n) {
    "use strict";
    n("9c26");
  },
  "78ed": function (t, e, n) {},
  "909d": function (t, e, n) {},
  "9c26": function (t, e, n) {},
  a227: function (t, e, n) {
    "use strict";
    n("e934");
  },
  a532: function (t, e, n) {
    t.exports = n.p + "img/notion_03.4a9bbbde.png";
  },
  a6c9: function (t, e, n) {
    t.exports = n.p + "img/notion_02.40601ac3.png";
  },
  b1b1: function (t, e, n) {
    t.exports = n.p + "img/notion_01.d8c35966.png";
  },
  c175: function (t, e, n) {
    t.exports = n.p + "img/flowus_03.ffab89d5.png";
  },
  c5f0: function (t, e, n) {
    "use strict";
    n("26b1");
  },
  c69f: function (t, e, n) {},
  d08d: function (t, e, n) {
    t.exports = n.p + "img/step1.3262e1db.gif";
  },
  d6ef: function (t, e, n) {
    t.exports = n.p + "img/flowus_02.92c05485.png";
  },
  d8e1: function (t, e, n) {
    t.exports = n.p + "img/icon-1.459279d1.png";
  },
  e548: function (t, e, n) {
    t.exports = n.p + "img/flowus_01.b879a863.png";
  },
  e825: function (t, e, n) {
    "use strict";
    n("eeaf");
  },
  e934: function (t, e, n) {},
  ed89: function (t, e, n) {
    t.exports = n.p + "img/home-page_3.c026e7a3.png";
  },
  eeaf: function (t, e, n) {},
  fbf5: function (t, e, n) {
    t.exports = n.p + "img/home.09151f8b.png";
  },
});
//# sourceMappingURL=app.667836a4.js.map
