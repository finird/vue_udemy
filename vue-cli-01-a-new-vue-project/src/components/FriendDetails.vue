<template>
  <li>
    <h2
        @click="toggleFriendIsFavorite(friend.id)"
    >
      {{ friend.name }} {{ friend.isFavorite ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleShowDetails">{{ areDetailsVisible ? 'Hide' : 'Show'}} details</button>
    <ul v-if="areDetailsVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>

export default {
  props: {
    friend: {
      type: Object,
      required: true,
    },
    toggleFavorite: {
      type: Function,
      required: true,
      default: () => {},
    }
  },
  data() {
    return {
      areDetailsVisible: false
    };
  },
  methods: {
    toggleShowDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
  }
};

</script>
