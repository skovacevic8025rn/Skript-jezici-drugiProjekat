<template>
  <main class="home">
    <h1>Pixel Art</h1>
    <p>Crtaj piksel po piksel, zajedno sa drugima.</p>
    <RouterLink to="/new" class="btn">Počni da crtaš</RouterLink>
  </main>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 1rem;
}
.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #5865f2;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
}
</style>
