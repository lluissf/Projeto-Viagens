import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMeioTransporte = defineStore('meio-transporte', () => {
  const transporte = ref([ 'Ônibus', 'Avião', 'Táxi' ])
  const meioSelecionado = ref('') // Aqui guarda o selecionado
  return { transporte, meioSelecionado }
})
