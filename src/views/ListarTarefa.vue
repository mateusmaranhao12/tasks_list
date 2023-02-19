<template>
    <div class="listar-tarefa container py-3 px-6 mx-0 min-w-full flex flex-col items-center">
      <h1 class="text-4xl mb-8">Listar Tarefa</h1>
      <form method="POST" class="max-w-lg" @submit="adicionarTarefa">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tarefa">
              Tarefa
            </label>
            <input 
              v-model="tarefa"
              class="
                appearance-none 
                block w-full 
                bg-gray-200 
                text-gray-700 
                border border-gray-200 
                rounded py-3 px-4 
                leading-tight 
                focus:outline-none 
                focus:bg-white 
                focus:border-gray-500" 
                id="tarefa" 
                type="text" 
                placeholder="Exemplo: Lavar a louça"
            >
          </div>
        </div>
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          <i class="fa-solid fa-plus"></i> Adicionar tarefa
        </button>
      </form>
    </div>
</template>

<script>
    export default {

      name: 'ListarTarefa',

      data: () => ({

        tarefa: ''

      }),

      methods: {

        async adicionarTarefa(e) {

          e.preventDefault()

          const data = {
            tarefa: this.tarefa
          }

          const dataJson = JSON.stringify(data)

          const req = await fetch ('http://localhost:3000/tarefas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dataJson
          })
          
          await req.json()

        }

      }

    }
</script>

<style lang="scss" scoped>
    @import '@/scss/ListarTarefa';
</style>