<template>
  <div class="vgrid footer">
    <div class="vrow">
      <div class="vcol vl-3 vm-6 vc-12">
        <h5>Showroom</h5>
        <br />
        <p>9876 Design Blvd,</p>
        <p>Suite 543, Beverly Hills,</p>
        <p>CA 90212</p>
      </div>
      <hr class="footer-hr-unit" />
      <div class="vcol vl-3 vm-6 vc-12">
        <h5>Customers</h5>
        <br />
        <p>Customer Care</p>
        <p>Returns and Refunds</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Condition of Sale</p>
        <p>Warranty</p>
      </div>
      <hr class="footer-hr-unit" />
      <div class="vcol vl-3 vm-6 vc-12">
        <h5>Services</h5>
        <br />
        <p>Customer Care</p>
        <p>Opening your Account</p>
        <p>How To Shop</p>
        <p>Shipping</p>
        <p>Track your Order</p>
        <p>Store Locator</p>
      </div>
      <hr class="footer-hr-unit" />
      <div class="vcol vl-3 vm-6 vc-12">
        <h5>Newsletter</h5>
        <br />
        <p>
          <input type="email" placeholder="Your email" /><button>Send</button>
        </p>
        <br />
        <h5>Follow</h5>
        <br />
        <p>
          <a href="#" class="navbar-icons-logo"
            ><fa :icon="['fab', 'facebook']"
          /></a>
          <a href="#" class="navbar-icons-logo"
            ><fa :icon="['fab', 'twitter']"
          /></a>
          <a href="#" class="navbar-icons-logo"
            ><fa :icon="['fab', 'youtube']"
          /></a>
          <a href="#" class="navbar-icons-logo"
            ><fa :icon="['fab', 'github']"
          /></a>
        </p>
      </div>
      <hr class="footer-hr-unit" />
    </div>
    <hr class="footer-hr" />
  </div>
</template>

<script>
export default {
  name: "Footer",
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
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding: 80px 2% 80px 2%;
  &-hr-unit {
    display: none;
  }
  & hr {
    height: 1px;
    width: 100%;
    border: 1px dotted white;
  }
  & input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: 30px;
    &::placeholder {
      font-size: 14px;
    }
  }
  & button {
    color: white;
    background: black;
    padding: 0 10px 0 10px;
    height: 30px;
    font-weight: 400;
  }
}
.navbar-icons-logo {
  margin: 0 8px 0 8px;
  color: black;
  &:hover {
    color: #7d7d7d;
  }
}
@media (max-width: 740px) {
  .footer-hr-unit {
    display: inline;
    height: 1px;
    width: 100%;
    border: 1px dotted white;
  }
  .footer-hr {
    display: none;
  }
}
</style>