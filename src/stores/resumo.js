import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useResumo = defineResumo('resumo', () => {
 const resumo = "Resumo do pacote"

  return { resumo }
})
