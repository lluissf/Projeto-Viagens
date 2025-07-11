<script setup>

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'
import {useFormaPagamento} from '@/stores/forma-pagamento'
import { usePassageiros } from '@/stores/passageiros'

const cidadeStore = useCidade() 
const locomocaoStore = useMeioTransporte()
const pagamentoStore = useFormaPagamento()
const passageiros = usePassageiros()
</script>

<template>
    <div> 
        <h1>Resumo da compra.</h1>

        <p>Você chegou ao fim!</p>
    </div>
</template>
