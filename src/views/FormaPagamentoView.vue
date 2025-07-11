<script setup>
import { useRouter } from 'vue-router'
import { useFormaPagamento } from '@/stores/forma-pagamento'

const router = useRouter()
const pagamentoStore = useFormaPagamento()

</script>

<template>
  <div>
    <h1>Informe a forma que deseja realizar o pagamento.</h1>
    <select v-model="pagamentoStore.FormaSelecionada">
      <option disabled value="">Escolha o Forma de pagamento</option>
      <option v-for="forma in pagamentoStore.pagamento" :key="forma" :value="forma">
        {{ forma }}
      </option>
    </select>

    <div v-if="pagamentoStore.FormaSelecionada === 'Pix'">
      <img   src="../image/Pix.jpg" alt="Pix">
    </div>

    <div v-else> 
        <input type="text" placeholder="Número do cartão" />
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="text" placeholder="Data de validade (MM/AA)" />
        <input type="text" placeholder="CVV" />
    </div>

    <button @click="router.push('/resumo')" :disabled="!pagamentoStore.FormaSelecionada">
      Resumo da Compra
    </button>
  </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;
    max-width: 100%;
    padding: 1rem;
}

button, select {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 80%;
  box-sizing: border-box;
  margin: 0.75rem 2rem;
  
}

button {
  background-color: #f60;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
 
}

button:hover {
  background-color: #d95300;

}

img {
  width: 80%; 
  margin: 0.75rem 2.5rem;
}

input {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 2rem;
}

  input {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 80%;
  box-sizing: border-box;
}

 input:focus {
  outline: none;
  border-color: #f60; /* Destaque na cor principal */
  box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
 }

/*DESKTOP*/
@media (min-width: 768px) {
    button {
    display: flex;
    margin: 1rem auto 0;
  }
    button,select {
      width: 30%;
      margin: 5px 20px;
    }

    img {
      width: 20%; 
    }

    input {
      width: 30%;
      margin: 1rem;
    }

}

</style>
