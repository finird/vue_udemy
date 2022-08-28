<template>
  <li>
    <h2
        @click="toggleFavorite"
    >
      {{ name }} {{ isFavorite ? "(Favorite)" : "" }}
      <span title="Remove this friend" @click.stop="onRemoveFriendHandler">🗑</span>
    </h2>
    <button @click="toggleShowDetails">{{ areDetailsVisible ? 'Hide' : 'Show' }} details</button>
    <ul v-if="areDetailsVisible">
      <li><strong>Phone: </strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>


export default {
  props: ['id', 'name', 'phone', 'email', 'isFavorite'],
  emits: {
    'toggle-favorite': function (id) {
      return !!id;
    },
    'delete-friend': function (id) {
      return !!id;
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
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    onRemoveFriendHandler() {
      this.$emit('delete-friend', this.id);
    }
  },
};

</script>
