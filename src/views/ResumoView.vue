<script setup lang="ts">
import { useResumoCompra } from '@/stores/resumo'
import html2pdf from 'html2pdf.js'

const resumoCompraStore = useResumoCompra()

function gerarPDF() {
  const pdf = document.getElementById('conteudo-pdf')
  if (pdf) {
    html2pdf().from(pdf).save('Passagem.pdf')
  } else {
    console.error('Elemento #conteudo-pdf não encontrado!')
  }
}

function gerarCodigo() {
  const random = Math.floor(Math.random() * 1000)
  const timestamp = Date.now().toString(36)
  return `STAR-${timestamp}-${random}`
}

const codigoCompra = gerarCodigo()


</script>

<template>
  <div>

    <div id="conteudo-pdf">
      <h1>Esse PDF serve como sua passagem</h1>
      <h2>{{ resumoCompraStore.cidadeOrigem }} x  {{ resumoCompraStore.cidadeDestino }}</h2>

      <h2>Meio de Transporte: {{ resumoCompraStore.meioSelecionado }}</h2>

      <h2>Empresa: {{ resumoCompraStore.empresaViagem }}</h2>

      <h2>Tipo: {{ resumoCompraStore.tipoViagem  }}</h2>
      

      <h2>Data Ida: {{ resumoCompraStore.dataIda }}</h2>
      <h2 v-if="resumoCompraStore.dataVolta !== ''">Data Volta: {{ resumoCompraStore.dataVolta }}</h2>
      <h2 v-else>Sem data de volta</h2>

      <h2>Com embarque previsto para às {{resumoCompraStore.horarioEmbarque }} </h2>
      <h2>Desembarque previsto para às {{ resumoCompraStore.horarioDesembarque }}</h2> 
      
      <h2>Total: R$ {{ resumoCompraStore.totalCompra }}</h2>
      <h2>Forma de Pagamento: {{ resumoCompraStore.FormaSelecionada }}</h2>

      <h2>Passageiros:</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
            <th>Nascimento</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(p, index) in resumoCompraStore.passageiros"
            :key="index"
          >
            <td>{{ p.nome }}</td>
            <td>{{ p.documento }}</td>
            <td>{{ p.nascimento }}</td>
          </tr>
        </tbody>
      </table>

      <h2>As passagem apenas serão aceitais com a apresentação dos seus documentos</h2>
      <h2>Codigo de confirmação: {{ gerarCodigo()}} </h2>
    </div>

    <button @click="gerarPDF">Gerar PDF</button>
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

h2,p {
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
