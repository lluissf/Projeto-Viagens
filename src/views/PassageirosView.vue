<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { usePassageiros } from '@/stores/passageiros'
import { useViagemSelecionada } from '@/stores/viagem'
import dayjs from 'dayjs'

const router = useRouter()
const passageirosStore = usePassageiros()
const viagemStore = useViagemSelecionada()

const nome = ref('')
const documento = ref('')
const nascimento = ref('')
const erro = ref('')

function calcularIdade(data) {
  if (!data || !dayjs(data).isValid()) {
    erro.value = 'Data de nascimento inválida.'
    return null
  }

  const nasc = dayjs(data)
  const hoje = dayjs()
  if (nasc.year() < 1900  || nasc.isAfter(hoje)) {
    erro.value = 'O ano informado deve ser entre 1900 e ' + hoje.year() + '.';
    return null
  }

  erro.value = ''
  return hoje.diff(nasc, 'year')
}
function removerPassageiro(index) {
  passageirosStore.passageiros.splice(index, 1)
}
function adicionarPassageiro() {
  if (!nome.value.trim()) {
    erro.value = 'Informe o nome do passageiro.'
    return
  }

  if (!documento.value || documento.value.toString().length < 6) {
    erro.value = 'Documento inválido. Deve conter ao menos 6 dígitos.'
    return
  }

  if (!nascimento.value) {
    erro.value = 'Informe a data de nascimento.'
    return
  }

  const idade = calcularIdade(nascimento.value)
  if (idade === null) return

  passageirosStore.passageiros.push({
    nome: nome.value.trim(),
    documento: documento.value,
    nascimento: nascimento.value,
  })

  nome.value = ''
  documento.value = ''
  nascimento.value = ''
  erro.value = ''
}


function valorPassagem(p) {
  const idade = calcularIdade(p.nascimento)
  return idade !== null && idade <= 12
    ? viagemStore.viagem?.preco / 2
    : viagemStore.viagem?.preco
}

const total = computed(() => {
  const preco = viagemStore.viagem?.preco || 0
  return passageirosStore.passageiros.reduce((acc, p) => {
    const idade = calcularIdade(p.nascimento)
    const valor = idade !== null && idade <= 12 ? preco / 2 : preco
    return acc + valor
  }, 0)
})

function irParaPagamento() {
  if (passageirosStore.passageiros.length === 0) return
  passageirosStore.totalCompra = total.value
  router.push('/forma-pagamento')
}
</script>

<template>
  <div class="container">
    <h1>Informe os passageiros</h1>

    <div class="form">
      <input v-model="nome" type="text" placeholder="Nome do passageiro" />
      <input v-model="documento" type="text" placeholder="Documento (CPF/RG)" /> 
      <input
        v-model="nascimento"
        type="date"
        :max="dayjs().format('YYYY-MM-DD')"
        :min="'1900-01-01'"
        placeholder="Informe a Data"
      />
      <button @click="adicionarPassageiro">Adicionar passageiro</button>
    </div>

    <p v-if="erro" class="erro">{{ erro }}</p>

    <table v-if="passageirosStore.passageiros.length" class="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <!-- <th>Documento</th> -->
          <th>Idade</th>
          <th>Valor</th>
          <th class="acao"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in passageirosStore.passageiros" :key="index">
          <td>{{ p.nome }}</td>
          <!-- <td>{{ p.documento }}</td> -->
          <td>{{ calcularIdade(p.nascimento) }} anos</td>
          <td>{{ valorPassagem(p).toFixed(2) }}</td>
          <td class="acao">
            <button class="remover" @click="removerPassageiro(index)">🗑</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="total-label">Total:</td>
          <td colspan="2" class="total">R$ {{ total.toFixed(2) }}</td>
        </tr>
      </tfoot>
    </table>

    <button
      @click="irParaPagamento"
      :disabled="passageirosStore.passageiros.length === 0"
      class="botao"
    >
      Escolher Forma de Pagamento
    </button>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.erro {
  color: red;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
.erro {
  color: #b91c1c;
  background: #fee2e2;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 0.6rem 1rem;
  border: none;
  background-color: #2447b9;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

button:hover {
  background-color: #1a368c;
}

.tabela {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.tabela table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

.tabela th,
.tabela td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: center;
}

.acao {
  width: 25px;
}
.tabela th {
  background-color: #f0f0f0;
}

.total-label {
  font-weight: bold;
  text-align: right;
}

.total {
  font-weight: bold;
  color: #2447b9;
}

.botao {
  margin-top: 1rem;
  width: 100%;
  font-size: 1.1rem;
  background-color: #2447b9;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.botao:hover {
  background-color: #1a368c;
}

@media (min-width: 640px) {
  .form {
    flex-direction: row;
    flex-wrap: wrap;
  }

  input {
    flex: 1 1 200px;
  }

  button {
    flex: 1 1 150px;
  }

  .botao {
    width: fit-content;
    margin: 1rem auto 0;
  }
}
</style>
