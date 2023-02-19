<template>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo">

        </slot>

        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'Alerta',

        props: { tipo: String },

        computed: {
            estiloAlerta() {
                switch(this.tipo) {
                    case 'sucesso':
                        return 'bg-green-200 text-center border border-green-500 text-green-900 px-4 py-3 rounded relative'

                    case 'erro': 
                        return 'bg-red-200 text-center border border-red-500 text-red-900 px-4 py-3 rounded relative'
                        
                    default: return ''
                }
            }
        }
    }
</script>

<style>

</style>