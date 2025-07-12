<script >

import html2pdf from 'html2pdf.js'
import { useResumoCompra } from '@/stores/resumo'

const resumoStore = useResumoCompra()

export default {
  methods: {
    gerarPDF() {
      const elemento = document.getElementById('conteudo-pdf')
      html2pdf().from(elemento).save('Passagens.pdf')
    }
  }
}
</script>
<template>

    <div id="conteudo-pdf">
        <h1>Resumo da compra</h1>

    <h2>
      Passagem: {{ resumoStore.cidades.find((c) => c.id === resumoStore.cidade_origem)?.nome }} ×
      {{ resumoStore.cidades.find((c) => c.id === resumoStore.cidade_destino)?.nome }}
    </h2>
    </div>

 <button @click="gerarPDF">Gerar PDF com as passagen</button>


</template>

<style scope>

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