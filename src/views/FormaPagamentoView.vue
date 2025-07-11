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

    <button @click="router.push('/resumo')" :disabled="!pagamentoStore.FormaSelecionada">
      Finalizar Compra
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

}

</style>
