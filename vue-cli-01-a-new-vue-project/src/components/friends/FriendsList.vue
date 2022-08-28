<template>
  <ul
  >
    <FriendDetails
        v-for="friend in friends"
        v-bind="friend"
        :key="friend.id"
        @toggle-favorite="toggleFriendIsFavorite"
        @delete-friend="deleteFriendHandler"/>
  </ul>
</template>

<script>

import FriendDetails from "@/components/friends/FriendDetails";

export default {
  components: {FriendDetails},
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleFriendIsFavorite(id) {
      this.$emit('toggle-favorite', id);
    },
    deleteFriendHandler(id) {
      this.$emit('delete-friend', id);
    },
  }
};

</script>
