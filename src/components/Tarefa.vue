<template>
        <div v-for="d in dados" :key="d.id" :value="d.tarefa" class="card container py-2 px-10 mx-0 min-w-full flex flex-col items-center">
            <div class="px-2 py-2">
                <div class="font-bold text-xl mb-2">
                    {{ d.tarefa }}
                </div>
            </div>
            <div class="px-2 pt-2 pb-1">
                <button @click="removerTarefa(d.id)" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    <i class="fa-solid fa-trash"></i> Remover tarefa
                </button>
                <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
                    <i class="fa-solid fa-pen-to-square"></i> Editar tarefa
                </button>
            </div>
        </div>

</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'

    export default {
        name: 'Tarefa',

        data: () => ({

            tarefa: '',

        }),

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/tarefas')
        },

        methods: {
            async removerTarefa(id) {

                await fetch (`http://localhost:3000/tarefas/${id}`, {
                    method: 'DELETE'
                })

                window.location.reload();
            }


        }
    }
</script>

<style lang="scss" scoped>
    @import '@/scss/Tarefa';
</style>