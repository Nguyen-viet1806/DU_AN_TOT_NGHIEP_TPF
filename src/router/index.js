import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/PageHome.vue";
import PageNews from "@/views/PageNews.vue";
import PageProduct from "@/views/PageProduct.vue";
import PageProductDetail from "@/views/PageProductDetail.vue";
import PageCard from "@/views/PageCard.vue";
import PagePay from "@/views/PagePay.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/news",
    name: "News",
    component: PageNews,
  },
  {
    path: "/product",
    name: "Product",
    component: PageProduct,
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: PageProductDetail,
  },
  {
    path: "/card",
    name: "PageCard",
    component: PageCard,
  },
  {
    path: "/pay",
    name: "PagePay",
    component: PagePay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
