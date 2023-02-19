<template>
    <h1 class="text-3xl">Lista das tarefas</h1>
    <div class="container mx-auto">
        <tarefa />
    </div>
</template>

<script>

    import Tarefa from './Tarefa.vue'
    export default {
        name: 'Tarefas',

        components: {
            Tarefa
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/scss/Tarefas';
</style>