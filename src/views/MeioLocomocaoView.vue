<script setup>
import { toRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'

const cidadeStore = useCidade()
const locomocaoStore = useMeioTransporte()
const router = useRouter()

const meioSelecionado = toRef(locomocaoStore, 'meioSelecionado')

watch(meioSelecionado, (novo) => {
  console.log('Meio selecionado:', novo)
  if (novo) router.push('/viagem')
})
</script>

<template>
  <div class="container" v-if="cidadeStore.cidade_origem && cidadeStore.cidade_destino">
    <p class="rota">
      <strong>
        {{
          cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_origem)?.nome
        }} ×
        {{
          cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_destino)?.nome
        }}
      </strong>
    </p>

    <select class="meio-select" v-model="meioSelecionado">
      <option disabled value="">Escolha o meio de transporte</option>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f8f9fc;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.rota {
  font-size: 1.5rem;
  color: #2447b9;
  margin-bottom: 1rem;
  text-align: center;
}

.meio-select {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 300px;
}
</style>
