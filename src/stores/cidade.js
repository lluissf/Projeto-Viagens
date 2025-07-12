// stores/cidade.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCidade = defineStore('cidade', () => {
  const cidades = ref([
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
    { id: 4, nome: 'Curitiba' },
    { id: 5, nome: 'Porto Alegre' }
  ])

  const cidade_origem = ref(null) // guarda o id
  const cidade_destino = ref(null)

  const dataIda = ref("")
  const dataVolta = ref ("")

  const cidades_disponiveis_origem = computed(() =>
    cidades.value.filter(c => c.id !== cidade_destino.value)
  )

  const cidades_disponiveis_destino = computed(() =>
    cidades.value.filter(c => c.id !== cidade_origem.value)
  )

  return {
    cidades,
    cidade_origem,
    cidade_destino,
    cidades_disponiveis_origem,
    cidades_disponiveis_destino,
    dataVolta,
    dataIda,
  }
})
