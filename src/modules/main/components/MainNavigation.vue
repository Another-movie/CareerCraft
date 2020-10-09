<template>
  <div class="main__navigation">
    <h1>Logo</h1>
    <div class="main__navigation-menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Candidates</li>
        <li>Companies</li>
        <li>Blog</li>
      </ul>
      <div>
        <button @click="postJob">POST A JOB</button>
        <button @click="login">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
  methods: {
    postJob() {
      // this.$router.push({ name:  })
    },
    login() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
.main__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
}
li:hover {
  background: blue;
  color: white;
}
.main__navigation-menu {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>