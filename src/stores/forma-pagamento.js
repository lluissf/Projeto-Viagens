import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormaPagamento = defineStore('forma-pagamento',  () => {
  const pagamento = ref([ 'Pix', 'Debito', 'Credito' ])
  const meioSelecionado = ref('') // Aqui guarda o selecionado
  
  return { pagamento, meioSelecionado }

})
