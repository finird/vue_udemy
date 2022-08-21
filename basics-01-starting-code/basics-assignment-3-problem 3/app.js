Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(number) {
      this.number += +number;
    },
  },
  computed: {
    result() {
      const { number } = this;
      if (number > 37) {
        return "Too much!";
      }
      if (number !== 37) return "Not there yet";
      return String(number);
    },
  },
  watch: {
    result() {
      const resetValue = () => {
        this.number = 0;
      };
      setTimeout(resetValue, 5000);
    },
  },
}).mount("#assignment");
