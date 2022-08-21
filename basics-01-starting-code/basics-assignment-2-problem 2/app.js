Vue.createApp({
  data() {
    return {
      inputValue: "",
      confirmedInputValue: "",
    };
  },
  methods: {
    showAlert(value) {
      alert(value);
    },
    handleInputChange(event, additionalValue) {
      this.inputValue = event.target.value + " " + additionalValue;
    },
    handleConfirmInputChange() {
      this.confirmedInputValue = this.inputValue;
    },
  },
}).mount("#assignment");
