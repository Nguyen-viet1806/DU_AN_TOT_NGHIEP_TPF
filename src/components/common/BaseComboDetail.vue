<template>
  <div class="vgrid product-detail">
    <div class="notify">
      <div
        id="popup1"
        v-if="isShowNotify"
        class="overlay"
        @click="closeNotify"
      ></div>
      <transition name="bounce">
        <div id="popup1" v-if="isShowNotify" class="popup">
          <h2>Thông báo:</h2>
          <a class="close" @click="closeNotify">&times;</a>
          <div class="content">
            {{ infoNotify }}
          </div>
        </div>
      </transition>
    </div>
    <h3 class="product-detail-title">Combo Detail</h3>
    <div class="row">
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-img">
          <p class="product-detail-img-small">
            <img
              :src="DO_MAIN + comboDetail.frontPhoto"
              alt=""
              @click="imgSelect = comboDetail.frontPhoto"
            />
            <img
              :src="DO_MAIN + comboDetail.coverPhoto"
              alt=""
              @click="imgSelect = comboDetail.coverPhoto"
            />
            <img
              :src="DO_MAIN + comboDetail.backPhoto"
              alt=""
              @click="imgSelect = comboDetail.backPhoto"
            />
            <img
              v-if="imgSelectTemp !== null"
              :src="DO_MAIN + imgSelectTemp"
              alt=""
              @click="imgSelect = imgSelectTemp"
            />
          </p>
          <p class="product-detail-img-big">
            <img
              :src="
                DO_MAIN +
                (imgSelect === null ? comboDetail.frontPhoto : imgSelect)
              "
              alt="#"
            />
          </p>
        </div>
      </div>
      <div class="vcol vl-6 vm-6 vc-12">
        <div class="product-detail-info">
          <h4 class="title">{{ comboDetail.nameCombo }}</h4>
          <p class="mt-1">
            Hàng còn:
            {{
              comboDetail.quantity 
            }}
          </p>
          <p class="price mt-1">
            Giá combo:
            {{ comboDetail.price + "đ" }}
          </p>
          <p class="mt-1">Mô tả : {{ comboDetail.descriptionCombo }}</p>
          <hr />
          <p>
            <span class="title-table">Sản phẩm có trong combo</span>
            <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ảnh </th>
              <th scope="col">Màu</th>
              <th scope="col">Size</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá</th>
            </tr>
          </thead>
          <tbody
            v-for="(Combo, index) in comboDetail.comboDetail"
            :key="Combo"
          >
            <tr>
              <th scope="row">{{ index + 1}}</th>
              <td><img width="100" :src="DO_MAIN + Combo.productDetail.detailPhoto" /></td>
              <td>{{ Combo.productDetail.color.nameColor }}</td>
              <td>{{ Combo.productDetail.size.nameSize }}</td>
              <td>
                {{
                  Combo.productDetail.idGender === 1
                    ? "Nam"
                    : Combo.productDetail.idGender === 2
                    ? "Nữ"
                    : "Unisex"
                }}
              </td>
              <td>{{ Combo.productDetail.quantity }}</td>
              <td>{{ Combo.productDetail.price }}đ</td>
            </tr>
          </tbody>
        </table>
          </p>
          <p class="mb-2" v-if="comboDetail.quantity == 0">
            <span class="badge bg-secondary"
              >Sản phẩm này đã hết hàng, bạn ghé lại sau nhé !</span
            >
          </p>
          <p class="mb-2" v-if="comboDetail.quantity != 0">
            <button @click="addCard(false)" class="btn-add-card">
              Thêm vào giỏ hàng
            </button>
          </p>
          <p class="mb-2" v-if="comboDetail.quantity != 0">
            <button @click="addCard(true)" class="btn-pay-now">Mua luôn</button>
          </p>
          <p>
            <button @click="onClickGoCombo" class="btn-add-card">
              Quay về trang combo
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DO_MAIN } from "@/constants/constants";
export default {
  name: "BasecomboDetail",
  components: {},
  props: {},
  data() {
    return {
      DO_MAIN,
      comboDetail: {},
      imgSelect: null,
      imgSelectTemp: null,
      isShowNotify: false,
      infoNotify: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getComboDetail();
    },
    closeNotify() {
      this.isShowNotify = false;
    },
    getComboDetail() {
      this.$store
        .dispatch("comboModule/getComboById", this.$route.query.idCombo)
        .then((res) => {
          if (res) {
            this.comboDetail = res.data.data;
          }
        });
    },
    onClickGoCombo() {
      document.documentElement.scrollTop = 900;
      document.body.scrollTop = 0;
      this.$router.push({ path: "/combo" });
    },

    addCard(paynow = false) {
      let payload = {
        idCombo: this.comboDetail.idCombo,
        idCart: JSON.parse(localStorage.getItem("UserInfo"))?.idCart,
      };
      this.$store.dispatch("comboModule/addCombo", payload).then((res) => {
        if (res.status) {
          this.isShowNotify = true;
          this.infoNotify = res.data.message;
          if (this.isShowNotify) {
            setTimeout(this.closeNotify, 1500);
            this.colorProduct = null;
            this.sizeProduct = null;
          }
          if (paynow) {
            setTimeout(() => {
              this.$router.push({ path: "/card" });
            }, 1800);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 2%;
  &-title {
    text-align: center;
    padding: 50px 0 50px 0;
    color: #0cb4ce;
  }
  &-img {
    display: flex;
    &-small {
      width: 22%;
      max-height: 620px;
      height: 70.5vh;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
      & img {
        cursor: pointer;
        width: 100%;
        padding: 1%;
      }
    }
    &-big {
      width: 78%;
      margin-left: 1%;
      justify-content: center;
      align-items: center;
      & img {
        width: 69%;
      }
    }
    // &-small {
    //   border-bottom: 1px solid #0cb4ce;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   & img {
    //     cursor: pointer;
    //     width: 23%;
    //     padding: 1%;
    //   }
    // }
  }
  &-info {
    padding: 5%;
  }
}
.btn-color {
  cursor: pointer;
  margin-right: 10px;
  margin-left: 5px;
  padding: 5px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  &:hover {
    border: 1px solid red;
    color: red;
  }
}
.btn-size {
  @extend .btn-color;
}
.btn-quantity {
  @extend .btn-color;
  margin-right: 0px;
  margin-left: 0px;
}
.input-quantity {
  border: 1px solid rgba(0, 0, 0, 0.09);
  width: 10%;
  padding: 5px;
  text-align: center;
}
.btn-add-card {
  padding: 10px;
  background: transparent;
  border: 1px solid black;
  color: black;
  &:hover {
    background: black;
    color: white;
    border: 1px solid black;
  }
}
.btn-pay-now {
  padding: 10px;
  background: black;
  color: white;
  &:hover {
    background: transparent;
    color: black;
    border: 1px solid black;
  }
}

@media (max-width: 740px) {
  .product-detail-img-small {
    height: 38.5vh;
  }
}
@media (min-width: 740px) and (max-width: 1023px) {
  .product-detail-img-small {
    height: 30vh;
  }
}
.color {
  display: flex;
}
.size {
  display: flex;
}
.radioColor {
  display: none;
}
.active {
  border: 1px solid red;
  color: red;
}
.title-table{
  font-weight: bold;
  font-size: 20px;
  color: red;
}
</style>