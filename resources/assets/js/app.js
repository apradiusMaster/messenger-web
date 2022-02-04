
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

const store = new Vuex.Store({
    state: {
      messages: [],
      selectedConversation: null
      
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
        }
    },
    actions: {
        getMessages(context, conversation ){
            axios.get(`/api/message?contact_id=${conversation.contact_id}`)
            .then(response => {
                               context.commit('newMessageList',  response.data);
                               context.commit('selectConversation', conversation);
                             });
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
