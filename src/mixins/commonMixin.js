export default {
  data() {
    return {
      urlCallApi: process.env.VUE_APP_API_URL || "http://localhost:8080/",
      typeProduct: {
        "productsFeatured": {
          value: 1,
          name: "Sản phẩm nổi bật"
        },
        "productsSnack": {
          value: 2,
          name: "Snack"
        },
        "productsSpongeCake": {
          value: 3,
          name: "Bánh ống xốp"
        },
        "productsFish": {
          value: 4,
          name: "Đậu phộng da cá"
        },
        "productsSnackBlank": {
          value: 5,
          name: "Phôi snack"
        },
      }
    };
  },
  methods: {
    logMessage(message) {
      console.log("Mixin log:", message || this.mixinMessage);
    },
  },
};