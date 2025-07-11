<script setup>
</script>

<template>
  <div class="home-container">
    <h1>🌟 Travel Star</h1>
    <p>Bem-vindo ao nosso site de viagens! Explore destinos incríveis com conforto e segurança.</p>
    <router-link to="/cidade">
      <button>Procurar Viagens</button>
    </router-link>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  text-align: center;
  min-height: 80vh;
  background: linear-gradient(to bottom right, #f0f4ff, #d6e0ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2447b9;
}

p {
  font-size: 1rem;
  max-width: 500px;
  color: #333;
  margin-bottom: 2rem;
}

button {
  background-color: #2447b9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #1a368c;
}
</style>
