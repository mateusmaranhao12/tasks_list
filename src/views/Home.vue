<template>
  <pesquisar-tarefa />
  <tarefas />
</template>

<script>

  import PesquisarTarefa from '../components/PesquisarTarefa.vue'
  import Tarefas from '../components/Tarefas.vue'

  export default {
    name: 'Home',
    components: { 
      PesquisarTarefa,
      Tarefas
    }
  }
</script>
