const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.info('beforeMount');
  },
  mounted() {
    console.info('mounted');
  },
  beforeUpdate() {
    console.info('beforeUpdate');
  },
  updated() {
    console.info('updated');
  },
  beforeUnmount() {
    console.info('beforeUnmount');
  },
  unmounted() {
    console.info('unmounted');
  },
  beforeDestroy() {
    console.info('beforeDestroy');
  },
  destroyed() {
    console.info('destroyed');
  },
});

app.mount('#app');

setTimeout(app.unmount,3000);
