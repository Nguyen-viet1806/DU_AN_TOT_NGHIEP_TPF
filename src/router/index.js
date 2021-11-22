import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import ("@/views/PageHome.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import ("@/views/PageNews.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import ("@/views/PageProduct.vue"),
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: () => import ("@/views/PageProductDetail.vue"),
  },
  {
    path: "/card",
    name: "PageCard",
    component: () => import ("@/views/PageCard.vue"),
  },
  {
    path: "/pay",
    name: "PagePay",
    component: () => import ("@/views/PagePay.vue"),
  },
  {
    path: "/login",
    name: "PageLogin",
    component: () => import ("@/views/PageLogin.vue"),
  },
  {
    path: "/profile",
    name: "PageProfile",
    component: () => import ("@/views/PageProfile.vue"),
  },
  {
    path: "/bill",
    name: "PageBill",
    component: () => import ("@/views/PageBill.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
