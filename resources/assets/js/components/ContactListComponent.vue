<template>

        <b-list-group>

                <contact-component v-for=" conversation in conversations"
                                   :key="conversation.id"
                                   :conversation="conversation"
                                   :selected= "selectedConversationId === conversation.id"
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

        data() {
            return {

                selectedConversationId: null
            };
        },    

        mounted() {
  
        },

        methods: {

           

            selectConversation(conversation){
                   // console.log(conversation);
                   this.selectedConversationId = conversation.id;
                   this.$emit('conversationSelected', conversation);
                   
                   eventBus.$emit('example', conversation);
            }
        }


    }
</script>
