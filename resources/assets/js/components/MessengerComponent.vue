<template>
    
    <b-container fluid style=" height: calc(100vh - 56px);">
    <b-row class="h-100" no-gutters>
        <b-col cols="4">

            <contact-form-component />    
      
            <contact-list-component />
                 
        </b-col>

        <b-col cols="8">
             <active-conversation-component 
                v-if="selectedConversation">

             </active-conversation-component>
        </b-col>
    
    </b-row>
</b-container>

</template>

<script>
import ContactFormComponent from './ContactFormComponent.vue';
    export default {
  components: { ContactFormComponent },
        props: {
            user: Object
        },
        data() {
            return {
                
                querySearch: ''
            };
        },    

        mounted() {
            this.$store.commit('setUser', this.user);
            this.$store.dispatch('getConversations').then(() => {
                          const conversationId = this.$route.params.conversationId;
                 if(conversationId){
                const conversation = this.$store.getters.getConversationById(conversationId);
                this.$store.dispatch('getMessages', conversation);
                 }

            });

           Echo.private(`users.${this.user.id}`)
            .listen('MessageSent', (data) => {
                const message = data.message;
                message.written_by_me = false;
                this.addMessage(message);
         }); 

         Echo.join('messenger')
            .here((users) => {
                //console.log('online', users);
                users.forEach((user) => this.changeStatus(user, true));
            })
            .joining(
                user => this.changeStatus(user, true)
            )
            .leaving(
                user => this.changeStatus(user, false)
            )
            .error((error) => {
                console.error(error);
         });

        },

        methods: {

            addMessage(message){
         
                this.$store.commit('addMessage', message);

            },
            changeStatus(user, status){
                 const index = this.conversations.findIndex((conversation) => {
                    return conversation.contact_id == user.id;
                });
                if (index >= 0)
                this.$set( this.conversations[index], 'online', status);

            }

        },
        computed: {


            selectedConversation(){
                return this.$store.state.selectedConversation;
            },
            conversations(){
                return this.$store.state.conversations;
            }
        }


    }
</script>
