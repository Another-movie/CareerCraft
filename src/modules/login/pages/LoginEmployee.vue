<template>
  <div class="employee-login">
    <form @submit.prevent="formSubmitHandler">
      <h2>Login as Employee</h2>
      <label>Name</label>
      <input type="text" v-model="name">

      <label>Surname</label>
      <input type="text" v-model="surname">

      <label>Email</label>
      <input type="email" v-model="email">

      <label>date of birth</label>
      <datepicker v-model="date" placeholder="Hello"></datepicker>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "LoginEmployee",
  data: () => ({
    name: "",
    surname: "",
    email: "",
    date: ""
  }),
  components: {
    Datepicker
  },
  methods: {
    formSubmitHandler() {
      console.log(this.name, this.surname, this.email, this.date);
      // axios.post()
    }
  }
};
</script>

<style>
.employee-login {
  align-items: center;
  text-align: center;
}
form {
  background: white;
  border: 1px solid gray;
  text-align: left;
  margin: 200px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
label {
  font-size: 16px;
  color: black;
}
input {
  line-height: 20px;
}
button {
  margin: 1rem 0 0 0;
  height: 40px;
  font-size: 16px;
}
</style>