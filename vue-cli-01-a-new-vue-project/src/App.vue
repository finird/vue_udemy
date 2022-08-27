<template>
  <h1>Hello, Vue!</h1>
  <friend-details v-for="friend in friends" :key="friend.id" :friend="friend" />
</template>

<script>

export default {
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
    };
  },
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: sans-serif;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>
