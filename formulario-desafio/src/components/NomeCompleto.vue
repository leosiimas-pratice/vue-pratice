<template>
    <div class="nome completo">
        <h1>Seja Bem Vindo {{ nome }} {{ sobrenome }}</h1>
    </div>
</template>

<script>
export default {
    props:{
        nome:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
