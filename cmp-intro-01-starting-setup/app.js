const app = Vue.createApp({
  data() {
    return {
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
});

app.component('friend', {
  template: `
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ isDetailsVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
  `,
  props: {
    friend: {
      type: Object
    },
  },
  computed: {
    id() {
      return this.friend.id;
    },
    name() {
      return this.friend.name;
    },
    phone() {
      return this.friend.phone;
    },
    email() {
      return this.friend.email;
    },
  },
  data() {
    return {
      isDetailsVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    }
  }
});


app.mount('#app');
