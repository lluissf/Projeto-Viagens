import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePassageiros = definePassageiros('passageiros', () => {
 const passageiros = "Informações dos Passageiros"

  return { passageiros }
})
