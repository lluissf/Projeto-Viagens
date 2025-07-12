// src/stores/resumoCompra.ts
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import { useCidade } from './cidade'
import { useMeioTransporte } from './meio-transporte'
import { useFormaPagamento } from './forma-pagamento'
import { usePassageiros } from './passageiros'

export const useResumoCompra = defineStore('resumo', () => {
  const cidadeStore = useCidade()
  const pagamentoStore = useFormaPagamento()
  const locomocaoStore = useMeioTransporte()
  const passageirosStore = usePassageiros()

  // Use storeToRefs para manter reatividade ao usar Composition API
  const { cidade_origem, cidade_destino, cidades } = storeToRefs(cidadeStore)
  const { FormaSelecionada } = storeToRefs(pagamentoStore)
  const { meioSelecionado } = storeToRefs(locomocaoStore)
  const { passageiros, totalCompra } = storeToRefs(passageirosStore)

  // Computed properties para o resumo
  const cidadeOrigemNome = computed(() =>
    cidades.value.find((c) => c.id === cidade_origem.value)?.nome || ''
  )

  const cidadeDestinoNome = computed(() =>
    cidades.value.find((c) => c.id === cidade_destino.value)?.nome || ''
  )

  return {
    cidadeOrigemNome,
    cidadeDestinoNome,
    meioSelecionado,
    passageiros,
    totalCompra,
    FormaSelecionada,
  }
})
