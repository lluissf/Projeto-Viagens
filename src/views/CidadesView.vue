<script setup>
import { ref } from 'vue'
import { useCidade } from '@/stores/cidade'

const cidadeStore = useCidade()


</script>

<template>
  <div class="form-container">
    <div class="form-group">
      <label for="origem">Cidade de Origem</label>
      <select id="origem" v-model="cidadeStore.cidade_origem">
        <option disabled value="">Selecione</option>
        <option
          v-for="cidade in cidadeStore.cidades_disponiveis_origem"
          :key="cidade.id"
          :value="cidade.id"
        >
          {{ cidade.nome }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="destino">Cidade de Destino</label>
      <select id="destino" v-model="cidadeStore.cidade_destino">
        <option disabled value="">Selecione</option>
        <option
          v-for="cidade in cidadeStore.cidades_disponiveis_destino"
          :key="cidade.id"
          :value="cidade.id"
        >
          {{ cidade.nome }}
        </option>
      </select>
    </div>

        <div class="form-group">
      <label for="dataIda">Data de Ida</label>
      <input id="dataIda" type="date" v-model="cidadeStore.dataIda" />
    </div>

    
    <div class="form-group">
      <label for="dataVolta">Data de Volta</label>
      <input id="dataVolta" type="date" v-model="cidadeStore.dataVolta" />
    </div>

    
    <div v-if="cidadeStore.dataIda && cidadeStore.cidade_origem && cidadeStore.cidade_destino "class="form-group" >
      <label class="invisivel">Buscar</label>
      <router-link to="/meiao-locomocao">
        <button type="button">Buscar</button>
      </router-link>
  </div>
  </div>
</template>

<style scoped>

/* MOBILE-FIRST */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 1.5rem auto;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
}

.invisivel {
  visibility: hidden;
}

select,
input[type="date"],
button {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #f60;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #d95300;
}

/* DESKTOP*/
@media (min-width: 768px) {
  .form-container {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    max-width: 1000px;
  }

  .form-group {
    flex: 1;
    min-width: 150px;
  }

  button {
    width: 100%;
    max-width: 150px;
  }
}
</style>
