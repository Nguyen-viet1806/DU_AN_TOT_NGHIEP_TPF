<template>
  <div class="new-unit">
    <div class="new-unit-img">
      <img
        src="https://file.hstatic.net/1000088324/article/anh_chup_man_hinh_2021-06-10_luc_22.29.45_4_60e6ac115ae54bc087b41995edfbefbf_grande.png"
      />
    </div>
    <div class="new-unit-conten">
      <h5 class="title">
        NHỮNG MẪU ÁO PHÔNG RỘNG GRAPHIC "CHẤT LỪ" CỦA NHÀ TEEWORLD
      </h5>
      <!-- <p class="writer">Người viết: haravan support 31.08.2021</p> -->
      <p class="preview">haravan support 31.08.2021</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNewsUnit",
  components: {},
  props: {},
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.new-unit {
  padding: 10px 0 10px 0;
  width: 100%;
  display: flex;
  &-img {
    width: 31%;
    & img {
      width: 100%;
    }
  }
  &-conten {
    padding-left: 10px;
    width: 69%;
    & .title {
      cursor: pointer;
      font-size: 14px;
    }
    & .writer {
      cursor: pointer;
      color: #999999;
      font-size: 12px;
    }
    & .preview {
      cursor: pointer;
      color: #252a2b;
      font-size: 14px;
    }
  }
}
</style>