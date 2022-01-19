<template>
    <b-row class="h-100">
                <b-col cols="8">
                    <b-card

                        footer-bg-variant="light"
                        footer-border-variant="dark"
                        title="Conversación activa"
                        class="h-100">

                            <message-conversation-component  
                                v-for= " message in messages "  
                                :key= message.id 
                                :written-by-me="message.written_by_me">

                               {{ message.content }}

                            </message-conversation-component>

                         



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
                    <b-img rounded="circle" blank width="60" height="60" blank-color="#777" alt="img" class="m-1" />
                    <p>Usuario seleccionado</p>
                    <hr>
                    <b-form-checkbox>
                       Desactivar notificaciones
                    </b-form-checkbox>

                </b-col>


            
    </b-row>
    
</template>

<script>
import MessageConversationComponent from './MessageConversationComponent.vue';
    export default {
  components: { MessageConversationComponent },
        data() {
            return {
                messages: [],
                newMessage: '',
                contactId: 2
            };
        },    
        
        mounted() {
            
          this.getMessages();
        },

        methods: {
            getMessages(){
                 axios.get(`/api/message?contact_id=${this.contactId}`)
                 .then((response) => {
                              //  console.log(response.data); 

                                    this.messages = response.data;

                 });
            },
            postMessages(){
                const  params = {
                    to_id: 2,
                    content: this.newMessage
                };
                axios.post('/api/message', params)
                .then((response) => {
                    if(response.data.success){
                        this.newMessage= '';
                        this.getMessages();
                    }
                  
                });

            }
        }
    }
</script>