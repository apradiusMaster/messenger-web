
require('./bootstrap');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

//window.eventBus = new Vue();



Vue.use(BootstrapVue);


Vue.component('mesenger-component', require('./components/MessengerComponent.vue'));
Vue.component('contact-component', require('./components/ContactComponent.vue'));
Vue.component('contact-list-component', require('./components/ContactListComponent.vue'));
Vue.component('active-conversation-component',require('./components/ActiveConversationComponent.vue'));
Vue.component('message-conversation-component', require('./components/MessageConversationComponent.vue'));
Vue.component('status-component', require('./components/StatusComponent'));
Vue.component('profile-form-component', require('./components/ProfileFormComponent'));
Vue.component('contact-form-component', require('./components/ContactFormComponent'));

const app = new Vue({
    el: '#app',
    store,
    methods: {
        logout(){
            document.getElementById('logout-form').submit();
        }
    }
});
