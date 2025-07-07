<script setup>
import { useCidade } from '@/stores/cidade'

const cidadeStore = useCidade()
</script>

<template>
  <div>
    <h1>Selecione as Cidades:</h1>
    <ul>
      <li>
        <h2>Cidade de Origem</h2>
        <select v-model="cidadeStore.cidade_origem">
          <option disabled value="">Selecione</option>
          <option
            v-for="cidade in cidadeStore.cidades_disponiveis_origem"
            :key="cidade.id"
            :value="cidade.id"
          >
            {{ cidade.nome }}
          </option>
        </select>
      </li>

      <li>
        <h2>Cidade de Destino</h2>
        <select v-model="cidadeStore.cidade_destino">
          <option disabled value="">Selecione</option>
          <option
            v-for="cidade in cidadeStore.cidades_disponiveis_destino"
            :key="cidade.id"
            :value="cidade.id"
          >
            {{ cidade.nome }}
          </option>
        </select>
      </li>
    </ul>

    <router-link to="/meiao-locomocao">
      <button>Selecionar o Meio de Locomoção</button>
    </router-link>
  </div>
</template>
<style>
h2 {
  color: #000;
}
</style>