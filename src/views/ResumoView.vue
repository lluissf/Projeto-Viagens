<script setup>
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'
import { useFormaPagamento } from '@/stores/forma-pagamento'

const cidadeStore = useCidade()
const pagamento = useFormaPagamento()
const locomocaoStore = useMeioTransporte()
const router = useRouter()


</script>

<template>

    <div> 
        

        <h1>Resumo da compra.</h1>    
        <p>Você chegou ao fim!</p>

    </div>
           
</template>
