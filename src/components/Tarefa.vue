<template>
        <div v-for="d in dados" :key="d.id" :value="d.tarefa" class="card container py-2 px-10 mx-0 min-w-full flex flex-col items-center">
            <div class="px-2 py-2">
                <div class="font-bold text-xl mb-2">{{ d.tarefa }}</div>
            </div>
            <div class="px-2 py-2">
                <div class="text-sm mb-2">
                    <span style="font-weight: bold; color: #000;">
                        Data: 
                    </span> 
                    <span style="font-style: normal; color: gray;" class="text-sm mb-2">
                        17/01/2023
                    </span>
                </div>
            </div>
            <div class="px-2 pt-2 pb-1">
                <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </div>

</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'

    export default {
        name: 'Tarefa',

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/tarefas')
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/scss/Tarefa';
</style>