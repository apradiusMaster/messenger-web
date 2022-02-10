
require('./bootstrap');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import VueRouter from 'vue-router'

//window.eventBus = new Vue();

import MessengerComponent from './components/MessengerComponent.vue'
import ExampleComponent from './components/ExampleComponent'

Vue.use(BootstrapVue);
Vue.use(VueRouter);


/*Vue.component('mesenger-component', require('./components/MessengerComponent.vue')); */
Vue.component('contact-component', require('./components/ContactComponent.vue'));
Vue.component('contact-list-component', require('./components/ContactListComponent.vue'));
Vue.component('active-conversation-component',require('./components/ActiveConversationComponent.vue'));
Vue.component('message-conversation-component', require('./components/MessageConversationComponent.vue'));
Vue.component('status-component', require('./components/StatusComponent'));
Vue.component('profile-form-component', require('./components/ProfileFormComponent'));
Vue.component('contact-form-component', require('./components/ContactFormComponent'));

const routes = [
    { path: '/chat', component: MessengerComponent },
    { path: '/chat/:conversationId', component: MessengerComponent },
    { path: '/example', component: ExampleComponent }
  ]
  
  const router = new VueRouter({
    routes,
    mode : 'history'
  })



const app = new Vue({
    el: '#app',
    store,
    router,
    methods: {
        logout(){
            document.getElementById('logout-form').submit();
        }
    }
});
