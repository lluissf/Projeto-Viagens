<template>
    <header>
        <h2>Travel Star</h2> 
        <ul>
            <router-link to="/">
                <li>Inicio</li>
            </router-link>
            <router-link to="/cidade">
                <li>Procurar Viagem</li>
            </router-link> 
        </ul>  
    </header>
</template>
<script setup>
</script>
<style>
header {
    display: flex;
    background: #2447b9;
}
ul { 
    justify-content: space-between;
}
ul li {
    display: inline-block;
    padding: 20px;
    color: #fff;
}
 
</style>