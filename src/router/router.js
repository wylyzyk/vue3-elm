import { createRouter, createWebHistory } from "vue-router";
import App from "../App";

const home = () => import("../page/home/home.vue");
const city = () => import("../page/city/city.vue");
const msite = () => import("../page/msite/msite.vue");
const search = () => import("../page/search/search.vue");
const shop = () => import("../page/shop/shop.vue");
const login = () => import("../page/login/login.vue");
const profile = () => import("../page/profile/profile.vue");
const forget = () => import("../page/forget/forget.vue");
const order = () => import("../page/order/order.vue");
const orderDetail = () => import("../page/order/children/orderDetail.vue");
const vipcard = () => import("../page/vipcard/vipcard.vue");
const invoiceRecord = () => import("../page/vipcard/children/invoiceRecord.vue");
const useCart = () => import("../page/vipcard/children/useCart.vue");
const vipDescription = () => import("../page/vipcard/children/vipDescription.vue");
const food = () => import("../page/food/food.vue");
const confirmOrder = () => import("../page/confirmOrder/confirmOrder.vue");
const remark = () => import("../page/confirmOrder/children/remark");
const payment = () => import("../page/confirmOrder/children/payment");
const userValidation = () => import("../page/confirmOrder/children/userValidation");
const invoice = () => import("../page/confirmOrder/children/invoice");
const chooseAddress = () => import("../page/confirmOrder/children/chooseAddress");
const addAddress = () => import("../page/confirmOrder/children/children/addAddress");
const searchAddress = () => import("../page/confirmOrder/children/children/children/searchAddress");
const foodDetail = () => import("../page/shop/children/foodDetail");
const shopDetail = () => import("../page/shop/children/shopDetail");
const shopSafe = () => import("../page/shop/children/children/shopSafe");
const info = () => import("../page/profile/children/info");
const setusername = () => import("../page/profile/children/children/setusername");
const address = () => import("../page/profile/children/children/address");
const add = () => import("../page/profile/children/children/children/add");
const addDetail = () => import("../page/profile/children/children/children/children/addDetail");
const balance = () => import("../page/balance/balance");
const balanceDetail = () => import("../page/balance/children/detail");
const benefit = () => import("../page/benefit/benefit");
const coupon = () => import("../page/benefit/children/coupon");
const hbDescription = () => import("../page/benefit/children/hbDescription");
const hbHistory = () => import("../page/benefit/children/hbHistory");
const exchange = () => import("../page/benefit/children/exchange");
const commend = () => import("../page/benefit/children/commend");
const points = () => import("../page/points/points");
const pointsDetail = () => import("../page/points/children/detail");
const service = () => import("../page/service/service");
const questionDetail = () => import("../page/service/children/questionDetail");
const find = () => import("../page/find/find");
const download = () => import("../page/download/download");

/**
 * @type {import(vue-router).RouteConfig[]}
 */
const routes = [
  {
    path: "/",
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
      //地址为空时跳转home页面
      {
        path: "",
        redirect: "/home"
      },
      //首页城市列表页
      {
        path: "/home",
        component: home
      },
      //当前选择城市页
      {
        path: "/city/:cityid",
        component: city
      },
      //所有商铺列表页
      {
        path: "/msite",
        component: msite,
        meta: { keepAlive: true }
      },
      //特色商铺列表页
      {
        path: "/food",
        component: food
      },
      //搜索页
      {
        path: "/search/:geohash",
        component: search
      },
      //商铺详情页
      {
        path: "/shop",
        component: shop,
        children: [
          {
            path: "foodDetail", //食品详情页
            component: foodDetail
          }, {
            path: "shopDetail", //商铺详情页
            component: shopDetail,
            children: [
              {
                path: "shopSafe", //商铺安全认证页
                component: shopSafe
              }
            ]
          }
        ]
      },
      //确认订单页
      {
        path: "/confirmOrder",
        component: confirmOrder,
        children: [
          {
            path: "remark", //订单备注
            component: remark
          }, {
            path: "invoice", //发票抬头
            component: invoice
          }, {
            path: "payment", //付款页面
            component: payment
          }, {
            path: "userValidation", //用户验证
            component: userValidation
          }, {
            path: "chooseAddress", //选择地址
            component: chooseAddress,
            children: [
              {
                path: "addAddress", //添加地址
                component: addAddress,
                children: [
                  {
                    path: "searchAddress", //搜索地址
                    component: searchAddress
                  }
                ]
              }
            ]
          }
        ]
      },
      //登录注册页
      {
        path: "/login",
        component: login
      },
      //个人信息页
      {
        path: "/profile",
        component: profile,
        children: [
          {
            path: "info", //个人信息详情页
            component: info,
            children: [
              {
                path: "setusername",
                component: setusername
              }, {
                path: "address",
                component: address,     //编辑地址
                children: [
                  {
                    path: "add",
                    component: add,
                    children: [
                      {
                        path: "addDetail",
                        component: addDetail
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "service", //服务中心
            component: service
          }
        ]
      },
      //修改密码页
      {
        path: "/forget",
        component: forget
      },
      //订单列表页
      {
        path: "/order",
        component: order,
        children: [
          {
            path: "orderDetail", //订单详情页
            component: orderDetail
          }
        ]
      },
      //vip卡页
      {
        path: "/vipcard",
        component: vipcard,
        children: [
          {
            path: "invoiceRecord", //开发票
            component: invoiceRecord
          }, {
            path: "useCart", //购买会员卡
            component: useCart
          }, {
            path: "vipDescription", //会员说明
            component: vipDescription
          }
        ]
      },
      //发现页
      {
        path: "/find",
        component: find
      },
      //下载页
      {
        path: "/download",
        component: download
      },
      //服务中心
      {
        path: "/service",
        component: service,
        children: [
          {
            path: "questionDetail", //订单详情页
            component: questionDetail
          }
        ]
      },
      //余额
      {
        path: "balance",
        component: balance,
        children: [
          {
            path: "detail", //余额说明
            component: balanceDetail
          }
        ]
      },
      //我的优惠页
      {
        path: "benefit",
        component: benefit,
        children: [
          {
            path: "coupon", //代金券说明
            component: coupon
          }, {
            path: "hbDescription", //红包说明
            component: hbDescription
          }, {
            path: "hbHistory", //历史红包
            component: hbHistory
          }, {
            path: "exchange", //兑换红包
            component: exchange
          }, {
            path: "commend", //推荐有奖
            component: commend
          }
        ]
      },
      //我的积分页
      {
        path: "points",
        component: points,
        children: [
          {
            path: "detail", //积分说明
            component: pointsDetail
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  }
});

export default router;
