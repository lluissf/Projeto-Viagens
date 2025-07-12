<script setup>
import { useRouter } from 'vue-router'
import { useResumoCompra } from '@/stores/resumo'

import html2pdf from 'html2pdf.js'

const resumoCompraStore = useResumoCompra()
const router = useRouter()

function gerarPDF() {
  const elemento = document.getElementById('conteudo-pdf')
  html2pdf().from(elemento).save('Passagens.pdf')
}
</script>

<template>
  <div>
    <div id="conteudo-pdf">
      <h1>Resumo da compra</h1>

      <h2>
        Passagem: {{ resumoCompraStore.cidadeOrigemNome }} ×
        {{ resumoCompraStore.cidadeDestinoNome }}
      </h2>

      <h2>Meio de Transporte: {{ resumoCompraStore.meioSelecionado }}</h2>

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
          <tr v-for="(p, index) in resumoCompraStore.passageiros" :key="index">
            <td>{{ p.nome }}</td>
            <td>{{ p.documento }}</td>
            <td>{{ p.nascimento }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Total: {{ resumoCompraStore.totalCompra }}</h2>

      <h2>Forma de Pagamento: {{ resumoCompraStore.FormaSelecionada }}</h2>

      <h3>Obrigado por comprar conosco</h3>
    </div>

    
    <button @click="gerarPDF">  Gerar PDF com as Passagens</button>
  </div>
</template>


<style scoped>
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
