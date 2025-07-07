import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNome = defineLogin('usuario', () => {
  const Usuario = "nome inserido"
    //pegar a nome selecionada

  return { Usuario }
})
