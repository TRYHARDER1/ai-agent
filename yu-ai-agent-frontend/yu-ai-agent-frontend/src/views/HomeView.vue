<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="container">
      <h2>选择应用</h2>
      <div class="cards">
        <RouterLink to="/love-master" class="card">
          <h3>AI 恋爱大师</h3>
          <p>智能聊天助手，帮助你提升恋爱技巧</p>
        </RouterLink>
        <RouterLink to="/super-agent" class="card">
          <h3>AI 超级智能体</h3>
          <p>功能强大的AI智能助手，解答各类问题</p>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #42b983;
}

.card p {
  color: #666;
}
</style>
