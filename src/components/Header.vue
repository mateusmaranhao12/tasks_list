<template>
    <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-3xl text-blue-500 tracking-tight"><i class="fa-solid fa-list-check"></i> Tasks List</span>
        </div>
    </nav>
    <ul class="flex">
        <li class="flex-1 mr-2">
            <router-link to="/" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
                Home
            </router-link>
        </li>
        <li class="flex-1 mr-2">
            <router-link to="/listar-tarefa" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
                Adicionar Tarefa
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @import '@/scss/Header';
</style>