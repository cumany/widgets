/*
 * @Author: your name
 * @Date: 2022-01-05 15:11:00
 * @LastEditTime: 2022-01-05 15:11:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/assets/bili.js
 */
let allUp = [],
  pageIndex = 1,
  num = 0,
  putData = () => {
    let onePage = [];

    $(".cover").each((i, item) => {
      let data0 = {
        name: $(".fans-name")[i].innerHTML,
        id: item.pathname.replace(/\//g, ""),
      }; // ID用户名

      let data1 = $.ajax({
        url: `https://api.bilibili.com/x/space/acc/info?mid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 个人信息

      let data2 = $.ajax({
        url: `https://api.bilibili.com/x/relation?fid=${data0.id}&jsonp=jsonp&callback`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 关注时间戳

      let data3 = $.ajax({
        url: `https://api.bilibili.com/x/relation/stat?vmid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 关注粉丝数

      let data4 = $.ajax({
        url: `https://api.bilibili.com/x/space/upstat?mid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 播放获赞阅读

      let data5 = $.ajax({
        url: `https://api.bilibili.com/x/space/bangumi/follow/list?vmid=${data0.id}&type=1&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 订阅数量

      let data6 = $.ajax({
        url: `https://api.bilibili.com/x/v3/fav/folder/created/list?pn=1&ps=10&up_mid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 收藏夹

      let data7 = $.ajax({
        url: `https://api.bilibili.com/x/ugcpay-rank/elec/month/up?up_mid=${data0.id}`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 充电总人数

      let data8 = $.ajax({
        url: `https://api.bilibili.com/x/space/notice?mid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 公告

      let data9 = $.ajax({
        url: `https://api.bilibili.com/x/space/acc/tags?mid=${data0.id}&jsonp=jsonp`,
        async: false,
        xhrFields: { withCredentials: true },
      }); // 标签

      user00 = JSON.parse(data1.responseText).data.sex; // 性别

      user01 = JSON.parse(data1.responseText).data.birthday; // 生日

      user02 = JSON.parse(data1.responseText).data.level; // 等级

      user03 = JSON.parse(data1.responseText).data.sign.replace(/[\r\n]/g, " "); // 签名

      user04 = JSON.parse(data8.responseText).data.replace(/[\r\n]/g, " "); // 公告

      user05 = JSON.parse(data9.responseText).data[0].tags; // 标签

      user06 = JSON.parse(data1.responseText).data.face; // 头像

      user07 = JSON.parse(data1.responseText).data.vip.label.text; // 会员

      user08 = JSON.parse(data1.responseText).data.official.title; // 认证

      user09 = JSON.parse(data1.responseText).data.live_room.roomid; // 直播间ID

      user10 = JSON.parse(data1.responseText).data.live_room.title; // 直播间标题

      user11 = JSON.parse(data1.responseText).data.live_room.cover; // 直播间封面

      user12 = JSON.parse(data1.responseText).data.pendant.pid; // 头像挂件ID

      user13 = JSON.parse(data1.responseText).data.pendant.name; // 头像挂件名称

      user14 = JSON.parse(data1.responseText).data.pendant.image; // 头像挂件链接

      user15 = JSON.parse(data1.responseText).data.nameplate.nid; // 徽章ID

      user16 = JSON.parse(data1.responseText).data.nameplate.name; // 徽章名称

      user17 = JSON.parse(data1.responseText).data.nameplate.image; // 徽章链接

      user18 = JSON.parse(data1.responseText).data.top_photo; // 背景图片

      if (JSON.parse(data5.responseText).message == "用户隐私设置未公开") {
        user19 = "用户隐私设置未公开";
      } else {
        user19 = JSON.parse(data5.responseText).data.total;
      } // 订阅数量

      if (JSON.parse(data6.responseText).data == null) {
        user20 = "null";
      } else {
        user20 = JSON.parse(data6.responseText).data.count;
      } // 收藏夹数量

      user21 = JSON.parse(data3.responseText).data.following; // 关注数

      user22 = JSON.parse(data3.responseText).data.follower; // 粉丝数

      user23 = JSON.parse(data4.responseText).data.likes; // 获赞量

      user24 = JSON.parse(data4.responseText).data.archive.view; // 播放量

      user25 = JSON.parse(data4.responseText).data.article.view; // 阅读量

      if (JSON.parse(data7.responseText).message != "") {
        user26 = "up主未开通充电";
      } else {
        user26 = JSON.parse(data7.responseText).data.total_count;
      } // 充电总人数

      user27 = JSON.parse(data2.responseText).data.mtime; // 关注时间戳(s)

      user28 = new Date().getTime(); // 截止时间戳(ms)

      num++; // num+1

      onePage.push(data0); // 将data0对象添加到onePage数组里

      console.log(
        ` ${num} ${data0.id} ${data0.name} ${user00} ${user01} ${user02} ${user03} ${user04} ${user05} ${user06} ${user07} ${user08} ${user09} ${user10} ${user11} ${user12} ${user13} ${user14} ${user15} ${user16} ${user17} ${user18} ${user19} ${user20} ${user21} ${user22} ${user23} ${user24} ${user25} ${user26} ${user27} ${user28} `
      );

      if (i === $(".cover").length - 1) {
        allUp.push(onePage);

        if ($(".be-pager-next")[0].classList.length === 1) {
          pageIndex++;
          $(".be-pager-next").click();
          setTimeout(() => {
            putData();
          }, 100);
        } else {
          console.log("已完成");
        }
      }
    });
  };

putData();
