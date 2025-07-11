<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'

const cidadeStore = useCidade() 
const locomocaoStore = useMeioTransporte()
const meioSelecionado = ref('')

const router = useRouter()

watch(meioSelecionado, (novo) => {
  if (novo) {
    router.push('/viagem')
  }
})
</script>

<template>
  <div>
    <div class="rota" v-if="cidadeStore.cidade_origem && cidadeStore.cidade_destino">
      <p>
        <strong>
          {{
            cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_origem)?.nome
          }} x
          {{
            cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_destino)?.nome
          }}
        </strong>
      </p>
    </div>

    <select class="meio" v-model="meioSelecionado">
      <option disabled value="">Escolha o meio</option>
      <option
        v-for="meio in locomocaoStore.transporte"
        :key="meio"
        :value="meio"
      >
        {{ meio }}
      </option>
    </select>
  </div>
</template>

<style scoped>

  div.rota {
    margin: 10px 0px 0px 0px;
    font-size: 1.4rem;
    padding: 20px;
    color: #000;
  }

  div select.meio { 
    padding: 8px;
    margin: 5px;
  }


</style>