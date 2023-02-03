(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-57283e1a"],
  {
    "14f1": function (t, e, i) {
      t.exports = i.p + "img/2022-week.08815f96.jpeg";
    },
    "17b3": function (t, e, i) {
      t.exports = i.p + "img/emojis.3a815a32.png";
    },
    "1df9": function (t, e, i) {
      t.exports = i.p + "img/2022.d717c024.jpeg";
    },
    "21aa": function (t, e, i) {
      t.exports = i.p + "img/jianshen.daaec78f.jpeg";
    },
    "21ee": function (t, e, i) {
      "use strict";
      i("8100");
    },
    "28c3": function (t, e, i) {
      t.exports = i.p + "img/licai.b912bcf1.jpeg";
    },
    "3c28": function (t, e, i) {
      t.exports = i.p + "img/temp-tracker.6ee8305f.png";
    },
    "579d": function (t, e, i) {
      t.exports = i.p + "img/temp-year-2023.0c711477.png";
    },
    "63ce": function (t, e, i) {
      t.exports = i.p + "img/month-notion.49584f16.jpeg";
    },
    "68ab": function (t, e, i) {
      t.exports = i.p + "img/new-term.0ca1557c.jpg";
    },
    8100: function (t, e, i) {},
    "81d1": function (t, e, i) {
      t.exports = i.p + "img/home2.0.89a95dc2.jpeg";
    },
    "98ca": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "lib-container" }, [
            i(
              "div",
              { staticClass: "sider-tab", attrs: { "data-tab": t.active_tab } },
              [
                i(
                  "h3",
                  {
                    staticClass: "tab-item",
                    class: 0 === t.active_tab ? "active" : "",
                    on: {
                      click: function () {
                        return (t.active_tab = 0);
                      },
                    },
                  },
                  [t._v("\n      Notion模版\n    ")]
                ),
                i(
                  "h3",
                  {
                    staticClass: "tab-item",
                    class: 1 === t.active_tab ? "active" : "",
                    on: {
                      click: function () {
                        return (t.active_tab = 1);
                      },
                    },
                  },
                  [t._v("\n      Notion技巧\n    ")]
                ),
              ]
            ),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: 0 === t.active_tab,
                    expression: "active_tab === 0",
                  },
                ],
              },
              [
                i("h2", [t._v("HTTISHERE's Notion模版库")]),
                i("el-alert", {
                  staticClass: "use",
                  attrs: {
                    title:
                      "模版使用方式：点击「拷贝模版」打开模版链接，点击右上角「Duplicate」按钮拷贝到自己的空间",
                    type: "info",
                    center: "",
                    "show-icon": "",
                  },
                }),
                i(
                  "div",
                  { staticClass: "template-list" },
                  t._l(t.list, function (e) {
                    return i(
                      "div",
                      { key: e.title, staticClass: "item", class: e.direction },
                      [
                        i("el-image", {
                          staticClass: "cover",
                          attrs: { src: e.cover, lazy: "" },
                        }),
                        i("div", { staticClass: "info" }, [
                          i(
                            "h3",
                            [
                              t._v(
                                "\n            " +
                                  t._s(e.title) +
                                  "\n            "
                              ),
                              i(
                                "el-tag",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.pay,
                                      expression: "item.pay",
                                    },
                                  ],
                                  attrs: { type: "danger", size: "small" },
                                },
                                [t._v("¥ " + t._s(e.pay))]
                              ),
                            ],
                            1
                          ),
                          i("p", [t._v(t._s(e.description))]),
                        ]),
                        e.pay
                          ? [
                              i(
                                "el-button",
                                {
                                  staticClass: "copy-btn",
                                  attrs: {
                                    type: "warning",
                                    plain: "",
                                    round: "",
                                    icon: "el-icon-top-right",
                                  },
                                  on: {
                                    click: function (i) {
                                      return t.handleCopy(e);
                                    },
                                  },
                                },
                                [t._v(t._s("去购买"))]
                              ),
                            ]
                          : t.isLogin
                          ? i(
                              "a",
                              {
                                attrs: {
                                  href: e.link,
                                  target: "_blank",
                                  "data-splitbee-event": "Duplicate template",
                                },
                              },
                              [
                                i(
                                  "el-button",
                                  {
                                    staticClass: "copy-btn",
                                    attrs: {
                                      type: "primary",
                                      plain: "",
                                      round: "",
                                      icon: "el-icon-top-right",
                                    },
                                  },
                                  [t._v(t._s("去拷贝"))]
                                ),
                              ],
                              1
                            )
                          : [
                              i(
                                "el-button",
                                {
                                  staticClass: "copy-btn",
                                  attrs: {
                                    type: "primary",
                                    plain: "",
                                    round: "",
                                    icon: "el-icon-top-right",
                                  },
                                  on: {
                                    click: function (i) {
                                      return t.handleNologinCopy(e);
                                    },
                                  },
                                },
                                [t._v(t._s("去拷贝"))]
                              ),
                            ],
                      ],
                      2
                    );
                  }),
                  0
                ),
              ],
              1
            ),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.active_tab,
                    expression: "active_tab === 1",
                  },
                ],
              },
              [
                i("h2", [t._v("HTTISHERE's Notion技巧合集")]),
                i(
                  "div",
                  { staticClass: "template-list videos-list" },
                  t._l(t.videos, function (e) {
                    return i(
                      "div",
                      { key: e.title, staticClass: "item", class: e.direction },
                      [
                        i(
                          "a",
                          {
                            staticClass: "mask",
                            attrs: { href: e.link, target: "_blank" },
                          },
                          [i("i", { staticClass: "el-icon-view" })]
                        ),
                        i("el-image", {
                          staticClass: "cover",
                          attrs: { src: e.cover },
                        }),
                        i("div", { staticClass: "info" }, [
                          i("h3", [
                            t._v(
                              "\n            " + t._s(e.title) + "\n          "
                            ),
                          ]),
                          i("p", [t._v(t._s(e.description))]),
                        ]),
                      ],
                      1
                    );
                  }),
                  0
                ),
              ]
            ),
          ]);
        },
        c = [],
        s = function () {
          new Date();
        },
        o = function (t) {
          var e = localStorage.getItem("token") || !1;
          return true;
        },
        a = { getCurrentDate: s, isLogin: o },
        r = {
          data: function () {
            return {
              list: [
                {
                  title: "🔥 2023年度计划",
                  description: "All in one，日程管理，目标进度等",
                  cover: i("579d"),
                  link: "https://mp.weixin.qq.com/s?__biz=MzI0MDYwNjE4NA==&mid=2247484347&idx=1&sn=1d5de256554bbccda4956ff21aa8f034&chksm=e9190d3cde6e842a0114eeecd4e5fbfac052c9732587b39e00948829cc181a403ce2c8f1a46b&payreadticket=HHWc7XWbzt0UqsR-QztcXC1shIfDG_vrUEKRfLsELkRPfmZG3nmaDqHkf7C4Fth0Ln3KFkA#rd",
                  direction: "row",
                  pay: 4.9,
                },
                {
                  title: "🔥 游戏闯关自律计划",
                  description: "技能升级，游戏闯关，奖品激励，任务打卡",
                  cover: i("f8ad"),
                  link: "https://mp.weixin.qq.com/s/L_flWKdYBGVEaNsBjx2ZLQ",
                  direction: "row",
                  pay: 3.5,
                },
                {
                  title: "🔥 学生党新学期计划",
                  description:
                    "学期目标，重点事件，任务清单，每周复盘，课程表，习惯追踪",
                  cover: i("68ab"),
                  link: "https://mp.weixin.qq.com/s/6hc-r8xXJPHgzkjGmWcOIg",
                  direction: "row",
                  pay: 3,
                },
                {
                  title: "2022年度复盘",
                  description: "年度总结，生活碎片，年度榜单",
                  cover: i("d1ca"),
                  link: "https://httishere.notion.site/2022-in-Review-10231e23bcc44b05be85a424aa7e3e83",
                  direction: "row",
                  pay: !1,
                },
                {
                  title: "每日打卡体系·睡眠曲线",
                  description: "日常打卡，自动化生成打卡记录，计算睡眠时间",
                  cover: i("3c28"),
                  link: "https://httishere.notion.site/fe4c46eba8c1400285dce7428cef79e1?v=a458d4182934461a9a60d56d67bf3018",
                  direction: "row",
                  pay: !1,
                },
                {
                  title: "高效日程时间管理",
                  description: "日程管理，习惯打卡，时间管理，时间轴",
                  cover: i("63ce"),
                  link: "https://httishere.notion.site/Not-to-do-b942d60c9a9b4438a7f3d2b086130db2",
                  direction: "row",
                  pay: !1,
                },
                {
                  title: "财务规划 & 存钱计划",
                  description:
                    "目标打卡，打卡明细，月度支出统计，大额支出记录，购物清单，财务整理",
                  cover: i("b15f"),
                  link: "https://httishere.notion.site/HHTISHERE-8640bd02ce1c4353a0499c88a85d26ae",
                  direction: "col",
                },
                {
                  title: "个人积分打卡",
                  description:
                    "可以自定义打卡项目和分数，在日历内进行每日打卡，根据打卡自动汇总每月打卡情况",
                  cover: i("d888"),
                  link: "https://httishere.notion.site/2022-07-ed55b0d47ec943dc9878f4e4b2f2906d",
                  direction: "row",
                },
                {
                  title: "2022 周计划",
                  description:
                    "周进度，周待办和本周任务完成进度，习惯打卡，睡眠记录和总结模块",
                  cover: i("14f1"),
                  link: "https://httishere.notion.site/435bef8aeafe48c18fdb75672c468abf",
                  direction: "col",
                },
                {
                  title: "2022 健身计划",
                  description:
                    "年度目标，体测记录，阶段目标，每日饮食记录和健身记录",
                  cover: i("21aa"),
                  link: "https://httishere.notion.site/2022-3847080b7f134e05bbd874a7b034d975",
                  direction: "col",
                },
                {
                  title: "存钱计划 & 理财周记",
                  description:
                    "只要不记账，我不在花钱就在花钱的路上，每日记账，每日统计，每周汇总。购物记录",
                  cover: i("28c3"),
                  link: "https://httishere.notion.site/2022-781bfc0de3b548f3b528f09a20923c74",
                  direction: "col",
                },
                {
                  title: "个人主页2.0",
                  description:
                    "信息展示，自我拓展，计划目标，工作日常，健康生活和生活琐事",
                  cover: i("81d1"),
                  link: "https://httishere.notion.site/v2-0-c1d30e13da6a43bcafb3b1c437c4d132",
                  direction: "row",
                },
                {
                  title: "2022 年度计划",
                  description:
                    "包含年度目标列表，当前日历，当前年度数据概览（OKR），季度跟踪，月度计划，倒数日，其他计划（存钱，100件挑战，观影清单等）",
                  cover: i("1df9"),
                  link: "https://httishere.notion.site/httishere-2550c53775684104a0fdbffdcfeaab47",
                  direction: "col",
                },
              ],
              active_tab: 0,
              videos: [
                {
                  title: "自选emoji的进度条制作·进度条技巧",
                  cover: i("17b3"),
                  link: "https://mp.weixin.qq.com/s/8vowO7n6Og8JWMH-raNGyQ",
                  direction: "row",
                },
                {
                  title: "遇到多位小数怎么办，一步搞定",
                  cover: i("e10b"),
                  link: "https://mp.weixin.qq.com/s/lsRpsCu0HlgOsjiqkzxgng",
                  direction: "row",
                },
              ],
              isLogin: a.isLogin(this.$token),
            };
          },
          methods: {
            handleCopy: function (t) {
              splitbee.track("Buy template", { title: t.title }),
                this.$router.push({ name: "paid" });
            },
            handleNologinCopy: function (t) {
              var e = this;
              this.$message({ message: "输入口令拷贝模版", type: "warning" }),
                splitbee.track("Copy template without logining", {
                  title: t.title,
                }),
                this.$code({
                  successGo: function () {
                    console.log("login success"), (e.isLogin = !0);
                  },
                });
            },
          },
        },
        p = r,
        l = (i("21ee"), i("2877")),
        d = Object(l["a"])(p, n, c, !1, null, "8e4b9b94", null);
      e["default"] = d.exports;
    },
    b15f: function (t, e, i) {
      t.exports = i.p + "img/caiwu.6646c8dc.jpeg";
    },
    d1ca: function (t, e, i) {
      t.exports = i.p + "img/temp-review-2022.1c28bb3e.png";
    },
    d888: function (t, e, i) {
      t.exports = i.p + "img/jifen.c301e14b.jpeg";
    },
    e10b: function (t, e, i) {
      t.exports = i.p + "img/nums.6b37af74.jpeg";
    },
    f8ad: function (t, e, i) {
      t.exports = i.p + "img/game.1d42fa04.png";
    },
  },
]);
//# sourceMappingURL=chunk-57283e1a.bd0938f5.js.map
