import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCidade = defineCidade('cidade', () => {
  const cidade = "cidade selecionada"

  
  return { cidade }
})
