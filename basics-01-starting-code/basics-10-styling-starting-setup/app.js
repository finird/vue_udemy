Vue.createApp({
  data() {
    return {
      boxSelected: [false, false, false],
    };
  },
  methods: {
    setBoxSelect(index) {
      this.boxSelected[index] = !this.boxSelected[index];
    },
  },
}).mount("#styling");
