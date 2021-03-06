import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      messages: [],
      selectedConversation: null,
      conversations: [],
      querySearch: '',
      user : null
    }, 
    mutations: {
        setUser(state, user){
            state.user = user;
        },
        newMessageList(state, messages){
            state.messages = messages;
        },
        addMessage(state, message){
            const conversation = state.conversations.find((conversation) =>{
                return conversation.contact_id == message.from_id ||
                        conversation.contact_id == message.to_id
            });     

            const author =state.user.id === message.from_id ? 'Tú' : conversation.contact_name;

            conversation.last_message = `${author}: ${message.content}`;
            conversation.last_time = message.created_at;

             if(state.selectedConversation.contact_id == message.from_id
                || state.selectedConversation.contact_id == message.to_id ){
                    state.messages.push(message);
             }

           
        },
        selectConversation(state, conversation){
            state.selectedConversation = conversation;
        },
        newQuerySearch(state, newValue){
            state.querySearch = newValue;
        },
        newConversationList(state, conversations){
            state.conversations = conversations;
        }
    },
    actions: {
        getMessages(context, conversation ){
          return   axios.get(`/api/message?contact_id=${conversation.contact_id}`)
            .then(response => {
                               context.commit('newMessageList',  response.data);
                               context.commit('selectConversation', conversation);
                             });
       },
       getConversations(context){

         return axios.get('/api/conversation')
           .then( (response) => {
                context.commit('newConversationList', response.data);
           });

           },
           postMessage(context, newMessage){
            const  params = {
                to_id: context.state.selectedConversation.contact_id,
                content: newMessage
            };
                axios.post('/api/message', params)
                .then((response) => {
                    if(response.data.success){
                        newMessage= '';
                        const message = response.data.message;
                        message.written_by_me = true;
                        context.commit('addMessage', message);
                    }
                
                });
    
           }

       },

    getters: {
        conversationsFiltered(state){
            return  state.conversations.filter(
                (conversation) => 
                conversation.contact_name
                .toLowerCase()
                .includes(state.querySearch.toLowerCase())
            );
        },
        getConversationById(state){
            return function(conversationId){
                return state.conversations.find(
                    conversation => 
                    conversation.id == conversationId
                );
            } 
        }
    }
  });