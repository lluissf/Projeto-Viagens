import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMeioTransporte = defineStore('meio-transporte', () => {
  const transporte = ref([
    'Ônibus', 'Avião', 'Van', 'Carro', 'Trem'
  ])

  return { transporte }
})
