import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormaPagamento = defineFormaPagamento('forma-pagamento', () => {
 const pagamento = "FormaPagamento"

  return { pagamento }
})
