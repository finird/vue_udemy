Vue.createApp({
  template: `
    <button @click="changeMessage">Update message</button>
    <p>{{ message }}</p>
  `,
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
