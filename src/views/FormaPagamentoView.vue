<script setup>
 import { useRouter } from 'vue-router'
 import { useFormaPagamento } from '@/stores/forma-pagamento';
 pagamentoStore = useFormaPagamento

 const router = useRouter()

 const meioSelecionado = toRef(pagamentoStore, 'meioSelecionado')
</script>

<template>
<div> 
  <template>  
   <h1>Informe a forma que deseja realiazar o pagamento.</h1>
    <select  v-model="meioSelecionado">
       <option disabled value="">Escolha o meio de pagamento</option>
       <option
         v-for="meio in pagamentoStore.pagamento"
         :key="meio"
         :value="meio"
        >
        {{ meio }}
       </option>
     </select>
        <button><router-link to="/resumo">Finalizar Compra.</router-link></button>
  
 </template>
</div>
     
</template>
