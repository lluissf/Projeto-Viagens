import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePassageiros = defineStore('passageiros', () => {
  const passageiros = ref([]) // Começa com lista vazia
  const totalCompra = ref("")

  return { passageiros, totalCompra }
})
