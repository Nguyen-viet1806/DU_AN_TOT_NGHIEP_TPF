<template>
  <div class="detailed-news">
    <h1>Detailed News</h1>
    <button class="btn-back" v-on:click="onClickBtnBack">Back</button>
    <div class="detailed-news-img">
      <img
        src="https://file.hstatic.net/1000088324/article/anh_chup_man_hinh_2021-06-10_luc_22.29.45_4_60e6ac115ae54bc087b41995edfbefbf_1024x1024.png"
        alt="#"
      />
    </div>
    <div class="detailed-news-conten">
      <h4 class="detailed-news-conten-title">
        NHỮNG MẪU ÁO PHÔNG RỘNG GRAPHIC "CHẤT LỪ" CỦA NHÀ TEEWORLD
      </h4>
      <p class="detailed-news-conten-writer">
        Người viết: haravan support lúc 31.08.2021
      </p>
      <p class="detailed-news-conten-preview">
        Áo phông hay áo thun gần như là một món đồ “vật bất ly thân” của chúng
        ta. Đặc biệt, bạn trẻ nào chuộng phong cách thời trang cool ngầu chất lừ
        thì nhất định sẽ là tín đồ những mẫu áo thun dưới đây cho mà xem. Hôm
        nay, bài viết này của Teeworld chính là chính là dành riêng cho các bạn,
        hãy cùng xem những mẫu áo phông rộng chất ngất sẽ được bật mí ngay sau
        đây:
      </p>
      <div class="conten-by-number">
        <h4 class="conten-by-number-title">1. Angry Meow T-shirt</h4>
        <p class="conten-by-number-info">
          Một chiếc áo phông rộng với graphic được thiết kế dựa trên một hình
          ảnh "chú mèo nổi giận", chiếc áo này vừa ra mắt đã sold out nhanh
          chóng bởi vì sự cá tính của nó. Nổi loạn và bướng bỉnh là những tính
          từ được sử dụng để miêu tả Angry Meow T-shirt. Đó cũng là những đặc
          tính mà chủ sở hữu chiếc áo muốn thể hiện: nổi loạn, tự tin làm những
          gì mình thích.
        </p>
        <p class="conten-by-number-img">
          <img
            src="https://file.hstatic.net/1000088324/file/anh_chup_man_hinh_2021-06-10_luc_22.29.45_3_29d5c02071db4582a1785298aa0bc0fe_grande.png"
            alt="#"
          />
        </p>
      </div>

      <div class="conten-by-number">
        <h4 class="conten-by-number-title">1. Angry Meow T-shirt</h4>
        <p class="conten-by-number-info">
          Một chiếc áo phông rộng với graphic được thiết kế dựa trên một hình
          ảnh "chú mèo nổi giận", chiếc áo này vừa ra mắt đã sold out nhanh
          chóng bởi vì sự cá tính của nó. Nổi loạn và bướng bỉnh là những tính
          từ được sử dụng để miêu tả Angry Meow T-shirt. Đó cũng là những đặc
          tính mà chủ sở hữu chiếc áo muốn thể hiện: nổi loạn, tự tin làm những
          gì mình thích.
        </p>
        <p class="conten-by-number-img">
          <img
            src="https://file.hstatic.net/1000088324/file/anh_chup_man_hinh_2021-06-10_luc_22.29.45_3_29d5c02071db4582a1785298aa0bc0fe_grande.png"
            alt="#"
          />
        </p>
      </div>

      <div class="conten-by-number">
        <h4 class="conten-by-number-title">1. Angry Meow T-shirt</h4>
        <p class="conten-by-number-info">
          Một chiếc áo phông rộng với graphic được thiết kế dựa trên một hình
          ảnh "chú mèo nổi giận", chiếc áo này vừa ra mắt đã sold out nhanh
          chóng bởi vì sự cá tính của nó. Nổi loạn và bướng bỉnh là những tính
          từ được sử dụng để miêu tả Angry Meow T-shirt. Đó cũng là những đặc
          tính mà chủ sở hữu chiếc áo muốn thể hiện: nổi loạn, tự tin làm những
          gì mình thích.
        </p>
        <p class="conten-by-number-img">
          <img
            src="https://file.hstatic.net/1000088324/file/anh_chup_man_hinh_2021-06-10_luc_22.29.45_3_29d5c02071db4582a1785298aa0bc0fe_grande.png"
            alt="#"
          />
        </p>
      </div>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "DetailedNews",
  components: {},
  props: {},
  data() {
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    onClickBtnBack() {
      this.$emit("onClickBack");
    },
  },
};
</script>

<style lang="scss" scoped>
.detailed-news {
  padding: 0 2% 0 2%;
  width: 100%;

  & .btn-back {
    float: right;
    background: #0cb4ce;
    color: white;
    padding: 1%;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  &-img {
    & img {
      width: 100%;
    }
  }

  &-conten {
    &-title {
      padding: 2% 2% 2% 0;
    }

    &-writer {
      color: #252a2b;
      font-size: 14px;
      margin-bottom: 10px;
    }

    &-preview {
      font-size: 15px;
    }

    & .conten-by-number {
      padding: 2% 2% 2% 0;

      &-title {
        font-weight: bold;
      }

      &-info {
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 20px;
      }

      &-img {
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          width: 50%;
        }
      }
    }
  }
}
</style>