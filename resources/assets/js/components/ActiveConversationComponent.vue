<template>
    <b-row class="h-100">
                <b-col cols="8">
                    <b-card no-body

                        footer-bg-variant="light"
                        footer-border-variant="dark"
                        title="Conversación activa"
                        class="h-100">

                        <b-card-body class="card-body-scroll">
                            <message-conversation-component  
                                v-for= " message in messages "  
                                :key= message.id 
                                :written-by-me="message.written_by_me"
                                :image = "message.written_by_me ? myImage : contactImage">

                               {{ message.content }}

                            </message-conversation-component>

                        
                        </b-card-body>


                        <div slot="footer">
                             <b-form class=" mb-0" @submit.prevent="postMessages"
                                autocomplete="off">
                              <b-input-group>
                                  <b-form-input class="text-center"
                                    type="text"
                                    v-model="newMessage"
                                    placeholder="Escribe un mensaje...">
                                </b-form-input>

                                <b-input-group-append>
                                   <b-button type="submit" variant="primary">Enviar</b-button>     
                                </b-input-group-append>    
                                  
                               </b-input-group>
                                

                             </b-form>   

                        </div>
                    </b-card>    

                </b-col>
                <b-col cols="4">
                    <b-img :src="contactImage"  rounded="circle"  width="60" height="60" blank-color="#777" class="m-1" />
                    <p> {{contactName}} </p>
                    <hr>
                    <b-form-checkbox>
                       Desactivar notificaciones
                    </b-form-checkbox>

                </b-col>


            
    </b-row>
    
</template>
<style>

 .card-body-scroll {

     height: calc(100vh - 63px);
     overflow-y: auto;
 }

</style>

<script>
import MessageConversationComponent from './MessageConversationComponent.vue';
    export default {
  components: { MessageConversationComponent },

        props: {

            contactId: Number,
            contactName: String,
            contactImage: String,
            myImage: String,
            messages: Array
        },

        data() {
            return {
                newMessage: ''
            };
        },    
        
        mounted() {
            eventBus.$on('example', function(data){
                console.log('Ocurrio el evento example', data);
            }); 
        },

        methods: {
  
            postMessages(){
                const  params = {
                    to_id: this.contactId,
                    content: this.newMessage
                };
                axios.post('/api/message', params)
                .then((response) => {
                    if(response.data.success){
                        this.newMessage= '';
                        const message = response.data.message;
                        message.written_by_me = true;
                        this.$emit('messageCreated', message);
                    }
                  
                });

            },
            scrollToBotton(){
                const el = document.querySelector('.card-body-scroll');
                el.scrollTop = el.scrollHeight;
            }
        },
        updated(){
            this.scrollToBotton();
            console.log('messages ha cambiado');

        }
    }
</script>