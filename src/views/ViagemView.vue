<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCidade } from '@/stores/cidade'
import { useMeioTransporte } from '@/stores/meio-transporte'
import { useViagemSelecionada } from '@/stores/viagem'
const viagemStore = useViagemSelecionada()

const cidadeStore = useCidade()
const transporteStore = useMeioTransporte()

const router = useRouter()
const viagemSelecionada = ref(null)

const todasViagens = {
    Ônibus: [
        { id: 1, horario_embarque: '08:00', horario_desembarque: '10:30', preco: 120, empresa: 'Viação Azul', tipo: 'Econômica', tempo_viagem: 150 }, // 2h30min
        { id: 2, horario_embarque: '12:30', horario_desembarque: '15:00', preco: 140, empresa: 'Viação Rápida', tipo: 'Executiva', tempo_viagem: 150 },
        { id: 3, horario_embarque: '18:00', horario_desembarque: '20:15', preco: 115, empresa: 'Ônibus Conforto', tipo: 'Econômica', tempo_viagem: 135 }
    ],
    Avião: [
        { id: 4, horario_embarque: '09:00', horario_desembarque: '09:50', preco: 450, empresa: 'Aviação Nacional', tipo: 'Primeira Classe', tempo_viagem: 50 },
        { id: 5, horario_embarque: '15:30', horario_desembarque: '16:20', preco: 480, empresa: 'Aviação Nacional', tipo: 'Econômica', tempo_viagem: 50 },
        { id: 6, horario_embarque: '20:00', horario_desembarque: '20:55', preco: 500, empresa: 'Aviação Premium', tipo: 'Executiva', tempo_viagem: 55 }
    ],
    Táxi: [
        { id: 7, horario_embarque: 'Livre', preco: 350, empresa: 'Táxi Executivo', tipo: 'Premium', tempo_viagem: 40 },
        { id: 8, horario_embarque: 'Livre', preco: 300, empresa: 'Táxi Popular', tipo: 'Econômica', tempo_viagem: 45 },
        { id: 9, horario_embarque: 'Livre', preco: 400, empresa: 'Táxi Premium', tipo: 'Executiva', tempo_viagem: 38 }
    ]
}

const viagensDisponiveis = computed(() => {
    const origemId = cidadeStore.cidade_origem
    const destinoId = cidadeStore.cidade_destino
    const meio = transporteStore.meioSelecionado

    if (!origemId || !destinoId || !meio ) return []
    return todasViagens[meio] ?? []
})

function prosseguir() {
    if (viagemSelecionada.value) {
        viagemStore.viagem = viagemSelecionada.value
        router.push('/passageiros')
    }
}
function formatarTempo(minutos) {
    const h = Math.floor(minutos / 60)
    const m = minutos % 60
    return `${h}h ${m}min`
}

// Map tipo para cor da badge
const tipoCores = {
    'Econômica': '#34d399', // verde claro
    'Executiva': '#3b82f6', // azul
    'Primeira Classe': '#f59e0b', // amarelo
    'Premium': '#ef4444' // vermelho
}
</script>

<template>
    <div class="container">
        <h1>Selecione a viagem</h1>

        <p class="info">
            Rota:
            <strong>
                {{cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_origem)?.nome}}
                ×
                {{cidadeStore.cidades.find(c => c.id === cidadeStore.cidade_destino)?.nome}}
            </strong>
            —
            <em>{{ transporteStore.meioSelecionado }}</em>
        </p>

        <div v-if="viagensDisponiveis.length" class="viagens">
            <label v-for="viagem in viagensDisponiveis" :key="viagem.id" class="card"
                :class="{ selected: viagemSelecionada && viagemSelecionada.id === viagem.id }">
                <input type="radio" :value="viagem" v-model="viagemSelecionada" name="viagem" class="radio-input" />
                <div class="card-content">
                    <div class="header">
                        <span class="horario">{{ viagem.horario_embarque }} → {{ viagem.horario_desembarque }}</span>
                        <span class="badge" :style="{ backgroundColor: tipoCores[viagem.tipo] || '#888' }">
                            {{ viagem.tipo }}
                        </span>
                    </div>
                    <div class="empresa">{{ viagem.empresa }}</div>
                    <div class="preco">R$ {{ viagem.preco }}</div>
                </div>
            </label>
        </div>
        <button v-if="viagemSelecionada" @click="prosseguir" class="botao">
            Prosseguir para os Passageiros
        </button>
    </div>
</template>

<style scoped>
.container {
    max-width: 700px;
    margin: 2rem auto;
    padding: 1rem 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;
}

.info {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #444;
}

.viagens {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.card {
    background: white;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    flex: 1 1 calc(50% - 1rem);
    cursor: pointer;
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: border-color 0.3s ease;
    position: relative;
}

.card:hover {
    border-color: #2447b9;
    box-shadow: 0 4px 12px rgb(36 71 185 / 0.3);
}

.selected {
    border-color: #2447b9;
    box-shadow: 0 0 0 3px rgba(36, 71, 185, 0.5);
}

.radio-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.horario {
    font-weight: 600;
    font-size: 1.2rem;
    color: #2447b9;
}

.badge {
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
    user-select: none;
}

.empresa {
    font-size: 1rem;
    color: #333;
}

.preco {
    font-weight: 700;
    font-size: 1.1rem;
    color: #2447b9;
}

.botao {
    background-color: #2447b9;
    color: white;
    padding: 0.75rem 1.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
    display: block;
    margin: 0 auto;
    width: fit-content;
    min-width: 180px;
}

.botao:hover {
    background-color: #1a368c;
}
</style>
