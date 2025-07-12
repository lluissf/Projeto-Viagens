import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useViagemSelecionada = defineStore('viagemSelecionada', () => {
  const viagem = ref(null)

  const empresaViagem = computed(() => viagem.value?.empresa || '')
  const tipoViagem = computed(() => viagem.value?.tipo || '')
  const horarioEmbarque = computed(() => viagem.value?.horario_embarque || '')
  const horarioDesembarque = computed(() => viagem.value?.horario_desembarque || '')
  const dataViagem = computed(() => viagem.value?.data || '')

  return {
    viagem,
    empresaViagem,
    tipoViagem,
    horarioEmbarque,
    horarioDesembarque,
    dataViagem,
  }
})
