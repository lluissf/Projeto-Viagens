import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViagemSelecionada = defineStore('viagemSelecionada', () => {
  const viagem = ref(null)
  return { viagem }
})
