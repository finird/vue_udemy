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
  computed: {
    box2ComputedClasses() {
      return {
        activateBox: this.boxSelected[1],
      };
    },
  },
}).mount("#styling");
