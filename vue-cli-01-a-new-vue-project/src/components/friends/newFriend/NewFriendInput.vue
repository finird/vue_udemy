<template>
  <div id="new-friend-input__container">
    <div class="new-friend-input__input">
      <label for="name">Name:</label>
      <input v-model="enteredName" type="text" name="name" id="name" >
    </div>
    <div class="new-friend-input__input">
      <label for="email">E-mail:</label>
      <input v-model="enteredEmail" type="text" name="email" id="email" >
    </div>
    <div class="new-friend-input__input">
      <label for="phone">Phone number:</label>
      <input v-model="enteredPhone" type="text" name="phone" id="phone" >
    </div>
    <div class="new-friend-input__actions">
      <button type="submit">Add friend</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      enteredName: '',
      enteredEmail: '',
      enteredPhone: ''
    };
  },
  emits: {
    'add-new-friend': function(name, email, phone) {
      return name && email && phone;
    },
  },
  methods: {
    isValidInput() {
      return this.enteredName && this.enteredEmail && this.enteredPhone;
    },
    onAddNewFriendHandler() {
      if (!this.isValidInput()) {
        alert('Wrong input!');
        return;
      }
      this.$emit('add-new-friend', this.enteredName, this.enteredEmail, this.enteredPhone);
    }
  }
}

</script>

<style scoped>
  #new-friend-input__container {

  }

  .new-friend-input__input {

  }
</style>
