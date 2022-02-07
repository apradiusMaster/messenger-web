
require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

//window.eventBus = new Vue();



Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.component('mesenger-component', require('./components/MessengerComponent.vue'));
Vue.component('contact-component', require('./components/ContactComponent.vue'));
Vue.component('contact-list-component', require('./components/ContactListComponent.vue'));
Vue.component('active-conversation-component',require('./components/ActiveConversationComponent.vue'));
Vue.component('message-conversation-component', require('./components/MessageConversationComponent.vue'));
Vue.component('status-component', require('./components/StatusComponent'));
Vue.component('profile-form-component', require('./components/ProfileFormComponent'));
Vue.component('contact-form-component', require('./components/ContactFormComponent'));

const store = new Vuex.Store({
    state: {
      messages: [],
      selectedConversation: null,
      conversations: [],
      querySearch: ''
    }, 
    mutations: {
        newMessageList(state, messages){
            state.messages = messages;
        },
        addMessage(state, message){
            state.messages.push(message);
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
            axios.get(`/api/message?contact_id=${conversation.contact_id}`)
            .then(response => {
                               context.commit('newMessageList',  response.data);
                               context.commit('selectConversation', conversation);
                             });
       },
       getConversations(context){

        axios.get('/api/conversation')
           .then( (response) => {
                context.commit('newConversationList', response.data);
           });

           },
       },
    getters: {
        conversationsFiltered(state){
            return  state.conversations.filter(
                (conversation) => 
                conversation.contact_name
                .toLowerCase()
                .includes(state.querySearch.toLowerCase())
            );
        }
    }
  });

const app = new Vue({
    el: '#app',
    store,
    methods: {
        logout(){
            document.getElementById('logout-form').submit();
        }
    }
});
