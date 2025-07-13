import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNome = defineStore('usuario', () => {
  const Usuario = ref ('')
    

  return { Usuario }
})
