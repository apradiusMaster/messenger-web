<template>

        <b-list-group>

                <contact-component v-for=" conversation in conversations"
                                   :key="conversation.id"
                                   :conversation="conversation"
                                   :selected="isSelected(conversation)"
                                   @click.native="selectConversation(conversation)">

                </contact-component>
               <!-- <contact-component variant="dark"></contact-component>
                <contact-component variant=""></contact-component>
                <contact-component variant="secondary" ></contact-component> -->

        </b-list-group>
    
</template>

<script>
    export default {

        props: {

            conversations: Array
        },

        methods: {
            selectConversation(conversation){
                   
                  this.$store.dispatch('getMessages', conversation);
                   
                 //  eventBus.$emit('example', conversation);
            },
               isSelected(conversation){
               if(this.selectedConversation)
                return this.selectedConversation.id === conversation.id;

               return false; 
           }
        },
        computed: {
            selectedConversation(){
                   return  this.$store.state.selectedConversation;
            }
         
        }


    }
</script>
