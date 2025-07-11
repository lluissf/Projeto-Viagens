<script setup>
import { useRouter } from 'vue-router'
import { useFormaPagamento } from '@/stores/forma-pagamento'

const router = useRouter()
const pagamentoStore = useFormaPagamento()
</script>

<template>
  <div>
    <h1>Informe a forma que deseja realizar o pagamento.</h1>
    <select v-model="pagamentoStore.meioSelecionado">
      <option disabled value="">Escolha o meio de pagamento</option>
      <option v-for="meio in pagamentoStore.pagamento" :key="meio" :value="meio">
        {{ meio }}
      </option>
    </select>

    <button @click="router.push('/resumo')" :disabled="!pagamentoStore.meioSelecionado">
      Finalizar Compra
    </button>
  </div>
</template>
