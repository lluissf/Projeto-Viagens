<script setup>
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'
import { useFormaPagamento } from '@/stores/forma-pagamento'
import { usePassageiros } from '@/stores/passageiros'

const cidadeStore = useCidade()
const pagamentoStore = useFormaPagamento()
const locomocaoStore = useMeioTransporte()
const passageirosStore = usePassageiros()
const router = useRouter()

</script>

<template>
  <div >
    <h1>Resumo da compra</h1>

    <h2>
      Passagem: {{ cidadeStore.cidades.find((c) => c.id === cidadeStore.cidade_origem)?.nome }} ×
      {{ cidadeStore.cidades.find((c) => c.id === cidadeStore.cidade_destino)?.nome }}
    </h2>

    <h2>Meio de Transporte: {{ locomocaoStore.meioSelecionado }}</h2>

    <h2>Data Ida: {{ cidadeStore.dataIda }}</h2>
    <h2 v-if="cidadeStore.dataVolta !== ''">Data Volta: {{ cidadeStore.dataVolta }}</h2>
    <h2 v-else>Sem data de volta</h2>
    

    <h2>Passageiros:</h2>
    <table>
      <thead>
        <tr>
          <th> Nome </th>
          <th> Documento </th>
          <th> Nascimento </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in passageirosStore.passageiros" :key="index">
          <td>{{ p.nome }}</td>
          <td>{{ p.documento }}</td>
          <td>{{ p.nascimento }}</td>
        </tr>
      </tbody>
    </table>

    <h2>Total: R$ {{ passageirosStore.totalCompra }}</h2>

    <h2>Forma de Pagamento: {{ pagamentoStore.FormaSelecionada }}</h2>

    <button @click="router.push('/gerar-passagens')">Confirmar Compra</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2447b9;
  max-width: 100%;
  padding: 1rem;
}

h2 {
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 100%;
  padding: 0.3rem 1rem;
}

h3 {
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 100%;
  padding: 3rem 1rem 1rem 1rem;
}
table {
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  margin: 0.75rem 1rem;
  
}

th, td {
  padding: 0.3rem 1rem;
  border: 1px solid #ccc;
  width: 100%;
  text-align: left;
}

th {
  background-color: #f0f0f0;
}

button {
  background-color: #f60;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 70%;
  box-sizing: border-box;
  margin: 0.75rem 2rem;
 
}

button:hover {
  background-color: #d95300;
}

/*DESKTOP*/
@media (min-width: 768px) {
    button {
    display: flex;
    margin: 1rem;
    width: 30%;
    
    }
}
</style>
