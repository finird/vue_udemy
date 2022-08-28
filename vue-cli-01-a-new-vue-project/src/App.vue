<template>
  <header>
    <h1>Hello, Vue!</h1>
  </header>
  <NewFriend @add-friend="addFriendHandler"/>
  <FriendsList
    @toggle-favorite="toggleFriendIsFavorite"
    @delete-friend="deleteFriendHandler"
    :friends="friends"/>
</template>

<script>

import NewFriend from "@/components/friends/newFriend/NewFriend";
import FriendsList from "@/components/friends/FriendsList";

export default {
  components: {FriendsList, NewFriend},
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          email: 'manuel@localhost.com',
          phone: '01234 5678 991',
          isFavorite: false,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          email: 'julie@localhost.com',
          phone: '09876 543 221',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFriendIsFavorite(id) {
      const identifiedFriend = this.friends.find(friend => friend.id === id);
      if (!identifiedFriend) return;
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addFriendHandler(newFriend) {
      this.friends.unshift(newFriend);
    },
    deleteFriendHandler(friendId) {
      this.friends = this.friends.filter(({id}) => id !== friendId)
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.mt--1 {
  margin-top: 1rem;
}

</style>
