<template>

        
                        <b-media :right-align="writtenByMe" vertical-align="center" class="mb-2">
                            <template #aside>
                            <b-img  :src="image" rounded="circle" width="48" height="48"></b-img>
                            </template>

                            <b-card>
                                    <slot></slot>

                            </b-card>
                          
                        </b-media>
                        
</template>

<script>
    export default {

        props: {
                image: String,
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