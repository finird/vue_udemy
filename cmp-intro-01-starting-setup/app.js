Vue.createApp({
  data() {
    return {
      isDetailsVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          email: 'manuel@localhost.com',
          phone: '01234 5678 991',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          email: 'julie@localhost.com',
          phone: '09876 543 221',
        },
      ]
    }
  },
  methods: {
    // all friend items listen to this visible state => not isolated
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    }
  }
}).mount('#app');
