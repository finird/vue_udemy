const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(number = 0) {
      this.counter += number;
    },
    reduce(number = 0) {
      this.counter -= number;
    },
    setName(event, lastName) {
      this.name = event.target.value + lastName;
    },
  },
});

app.mount("#events");
