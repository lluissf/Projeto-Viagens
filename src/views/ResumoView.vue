<script setup>
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'
import { useFormaPagamento } from '@/stores/forma-pagamento'
import { usePassageiros } from '@/stores/passageiros'

const cidadeStore = useCidade()
const pagamentoStore = useFormaPagamento()
const locomocaoStore = useMeioTransporte()
const passageirosStore = usePassageiros()
const router = useRouter()


</script>

<template>

    <div > 

        <h1>Resumo da compra</h1> 
        
         <h2> Passagem:    {{
          cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_origem)?.nome
        }} ×
        {{
          cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_destino)?.nome
         }}</h2>

         <h2>Meio de Transporte: {{ locomocaoStore.meioSelecionado }}</h2>

         <h2>Passageiros: {{ passageirosStore.passageiros }}</h2>

         <h2>Forma de Pagamento: {{ pagamentoStore.FormaSelecionada }}</h2>

        <h3>Obrigado por comprar conosco</h3>

    </div>
           
</template>

<style scoped>

h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2447b9;
    max-width: 100%;
    padding: 1rem;
    
}

h2 {
    font-size: 1.0rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 100%;
    padding: 0.3rem 1rem ;
}

h3 {
    font-size: 1.0rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 100%;
    padding: 3rem 1rem ;

}


</style>
