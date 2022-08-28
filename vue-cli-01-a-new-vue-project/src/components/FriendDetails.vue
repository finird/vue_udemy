<template>
  <li>
    <h2
        @click="toggleFavorite"
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
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id);
    },
  },
};

</script>
