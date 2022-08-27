Vue.createApp({
  data() {
    return {
      message: "Another Vue app instance!",
    }
  },
  methods: {
    changeMessage() {
      this.message = "Changed message!"
    }
  }
}).mount('#app2');
