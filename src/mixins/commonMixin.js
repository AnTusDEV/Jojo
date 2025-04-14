export default {
  data() {
    return {
      urlCallApi: process.env.VUE_APP_API_URL || "http://localhost:8080/",
    };
  },
  methods: {
    logMessage(message) {
      console.log("Mixin log:", message || this.mixinMessage);
    },
  },
};