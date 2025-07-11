import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormaPagamento = defineStore('forma-pagamento',  () => {
  const pagamento = ref([ 'Pix', 'Debito', 'Credito' ])
  const FormaSelecionada = ref('') // Aqui guarda o selecionado
  
  return { pagamento, FormaSelecionada }

})
