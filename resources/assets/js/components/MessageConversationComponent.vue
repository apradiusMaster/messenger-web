<template>

        
                        <b-media :right-align="writtenByMe" vertical-align="center" class="mb-2">
                            <template #aside>
                            <b-img blank blank-color="#ccc" rounded="circle" width="48" alt="placeholder"></b-img>
                            </template>

                            <b-card>
                                    <slot></slot>

                            </b-card>
                          
                        </b-media>
                        
</template>

<script>
    export default {

        props: {

                writtenByMe:Boolean,    

        },

        data() {
            return {
      
            };
        },    

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>