const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      introduction: "",
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
    resetSelfIntroduction() {
      this.introduction = "";
    },
    // old way of preventDefault -> We use Vue's modifiers instead of this
    // submitForm(event) {
    //   event.preventDefault();
    //   alert("Submitted!");
    // },
    submitForm() {
      alert("Submitted!");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
