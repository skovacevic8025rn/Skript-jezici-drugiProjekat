<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/gallery">Gallery</RouterLink>
    <RouterLink to="/new">New</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/logout">Logout</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: #1e1f22;
}
.navbar a {
  color: #9a9ca3;
  text-decoration: none;
}
.navbar a.router-link-exact-active {
  color: #fff;
}
</style>