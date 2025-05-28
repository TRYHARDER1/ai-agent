<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="title">YU AI Agent</h1>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/love-master">AI Love Master</RouterLink>
        <RouterLink to="/super-agent">AI Super Agent</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
}

.title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #eee;
  transform: translateY(-2px);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
