<template>
  <header class="navbar">
    <router-link to="/"><h2 class="logo">Travel Star</h2></router-link>
    <nav>
      <!-- <ul class="nav-list">
        <li><router-link to="/cidade">Procurar Viagem</router-link></li>
      </ul> -->
    </nav>
  </header>
</template>

<script setup>
</script>

<style>
/* MOBILE-FIRST */
.navbar {
  display: flex;
  flex-direction: column;
  background-color: #2447b9;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
}

.nav-list li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.nav-list li a:hover {
  background-color: #1e3799;
}

/* DESKTOP */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-list {
    flex-direction: row;
    width: auto;
  }
}
</style>
