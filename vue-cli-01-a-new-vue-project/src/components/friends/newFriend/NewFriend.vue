<template>
  <section id="new-friend-input">
    <button @click.stop="toggleAddNewFriendVisible" class="btn btn-primary"
            v-show="!isAddNewFriendVisible">
      {{ !isAddNewFriendVisible ? "Add new friend" : "Cancel" }}
    </button>
    <form @submit.prevent="onAddNewFriendHandler">
      <div class="new-friend-input__container mt--1" v-show="isAddNewFriendVisible">
        <div class="new-friend-input__control">
          <label for="name">Name:</label>
          <input v-model="enteredName" type="text" name="name" id="name">
        </div>
        <div class="new-friend-input__control">
          <label for="email">E-mail:</label>
          <input v-model="enteredEmail" type="text" name="email" id="email">
        </div>
        <div class="new-friend-input__control">
          <label for="phone">Phone number:</label>
          <input v-model="enteredPhone" type="text" name="phone" id="phone">
        </div>
        <div class="new-friend-input__actions">
          <button type="submit">Add friend</button>
          <button class="btn" type="reset" @click="onCancelAddNewFriend">Cancel</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>

import {randomId} from "@/utils/randomId";

export default {
  data() {
    return {
      enteredName: '',
      enteredEmail: '',
      enteredPhone: '',
      isAddNewFriendVisible: false,
    };
  },
  emits: {
    'add-friend': function ({id, name, email, phone}) {
      return id && name && email && phone;
    },
  },
  methods: {
    isValidInput() {
      return this.enteredName && this.enteredEmail && this.enteredPhone;
    },
    inputValidator() {
      if (!this.isValidInput()) {
        alert('Wrong input!');
        return false;
      }
      return true;
    },
    onAddNewFriendHandler() {
      if (!this.inputValidator()) return;

      const {enteredName: name, enteredEmail: email, enteredPhone: phone} = this;

      const newFriend = {
        id: randomId(),
        name, email, phone,
      };

      this.$emit('add-friend', newFriend);

      this.resetFormInput();
      this.toggleAddNewFriendVisible();
    },
    toggleAddNewFriendVisible() {
      this.isAddNewFriendVisible = !this.isAddNewFriendVisible;
    },
    onCancelAddNewFriend() {
      this.resetFormInput();
      this.toggleAddNewFriendVisible();
    },
    resetFormInput() {
      this.enteredName = "";
      this.enteredEmail = "";
      this.enteredPhone = "";
    }
  }
}

</script>

<style>
#new-friend-input {
  max-width: 40rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.new-friend-input__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
}

.new-friend-input__control {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.new-friend-input__control label {
  margin-right: 0.5rem;
}

.new-friend-input__actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn-primary {
  background-color: #58004d;
  font: inherit;
  cursor: pointer;
  border: 1px solid #58004d;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}

.btn-primary:active,
.btn-primary:hover {
  background-color: #58004d;
  border: 1px solid #58004d;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}


.btn[type="reset"] {
  background-color: #58004d;
  font: inherit;
  cursor: pointer;
  border: 1px solid #58004d;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

.btn[type="reset"]:active,
.btn[type="reset"]:hover {
  background-color: #58004d;
  border: 1px solid #58004d;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

</style>
