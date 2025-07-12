// stores/resumoCompra.ts
import { defineStore, storeToRefs } from 'pinia'
import { computed } from 'vue'

import { useCidade } from './cidade'
import { useMeioTransporte } from './meio-transporte'
import { useFormaPagamento } from './forma-pagamento'
import { usePassageiros } from './passageiros'

export const useResumoCompra = defineStore('resumoCompra', () => {
  const cidadeStore = useCidade()
  const pagamentoStore = useFormaPagamento()
  const locomocaoStore = useMeioTransporte()
  const passageirosStore = usePassageiros()

  const { cidade_origem, cidade_destino, cidades } = storeToRefs(cidadeStore)
  const { FormaSelecionada } = storeToRefs(pagamentoStore)
  const { meioSelecionado } = storeToRefs(locomocaoStore)
  const { passageiros, totalCompra } = storeToRefs(passageirosStore)

  const cidadeOrigem = computed(() =>
    cidades.value.find(c => c.id === cidade_origem.value)?.nome || ''
  )

  const cidadeDestino = computed(() =>
    cidades.value.find(c => c.id === cidade_destino.value)?.nome || ''
  )

 const Empresa = computed(() => empresa_viagem.value || '')

 const Tipo = computed(() => tipo_viagem.value || '')


return {
  cidadeOrigem,
  cidadeDestino,
  meioSelecionado,
  passageiros,
  totalCompra,
  FormaSelecionada,
  cidades,
  Empresa,
  Tipo,
}

})
