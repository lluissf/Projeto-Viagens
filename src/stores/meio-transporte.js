import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMeioTransporte = defineMeioTransporte('meio-transporte', () => {
 const transporte = "transporte"

  return { transporte }
})
