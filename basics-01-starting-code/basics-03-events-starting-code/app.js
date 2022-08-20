const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(number = 0) {
      this.counter += number;
    },
    reduce(number = 0) {
      this.counter -= number;
    },
  },
});

app.mount("#events");
