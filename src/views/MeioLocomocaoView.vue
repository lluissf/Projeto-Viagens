<script setup>
import { ref } from 'vue'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'

const cidadeStore = useCidade() 
const locomocaoStore = useMeioTransporte()
const meioSelecionado = ref('')
</script>

<template>
  <div>
    <p>Selecione o meio de locomoção (Avião/Ônibus).</p>
    
    <div v-if="cidadeStore.cidade_origem && cidadeStore.cidade_destino">
      <p>
        Cidades Selecionadas:
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

    <select v-model="meioSelecionado">
      <option disabled value="">Escolha o meio</option>
      <option
        v-for="meio in locomocaoStore.transporte"
        :key="meio"
        :value="meio"
      >
        {{ meio }}
      </option>
    </select>

    <div v-if="meioSelecionado">
      <router-link to="/viagem">
        <button>Confirmar e ir para a Viagem</button>
      </router-link>
    </div>
  </div>
</template>
