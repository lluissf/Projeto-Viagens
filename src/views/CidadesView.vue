<script setup>
 
</script>

<template>
    <div> 
        <h1>Selecione as Cidades:</h1>
        <ul>
            <li>
                <h2>Cidade de Origem</h2>
                <input type="text" placeholder="Cidade De Origem">
            </li>
            <li>
                <h2>Cidade de Destino</h2>
                <input type="text" placeholder="Cidade De Destino">
            </li>
        </ul>
        <button><router-link to="/meiao-locomocao">Selecionar o Meio de Locomoção</router-link></button>
    </div>
</template>
