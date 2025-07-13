<script setup>
 import { useNome } from '@/stores/login';

 const usuarioStore = useNome( )

</script>

<template>
  <div class = "tudo">
    <div class="login"> 
        <p>Faça seu login.</p>
        <input type="text" v-model="usuarioStore.Usuario" placeholder="Digite seu nome" />
    </div>
    <div v-if="usuarioStore.Usuario.length >= 3"> <!--.length é len()vno js-->
      <label class="invisivel">Login</label>
      <router-link to="/">
      <button type="button">Login</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

.tudo {
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 1rem;
  padding: 2rem;
  margin: 0 0 0 3rem;
  max-width: 60%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.login input {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}

p{
   text-align: center;
   font-size: 1.3rem;
   margin: 0 0 10px 0;
}

.invisivel {
  visibility: hidden;
}

button {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  background-color: #f60;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;
  max-width: 150px;
}

button:hover {
  background-color: #d95300;
}

/* DESKTOP*/
@media (min-width: 768px) {
 .tudo {
  margin: 0rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
 

}
</style>