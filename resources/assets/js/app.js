
require('./bootstrap');

window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue';
Vue.use(BootstrapVue);

Vue.component('mesenger-component', require('./components/MessengerComponent.vue'));
Vue.component('contact-component', require('./components/ContactComponent.vue'));
Vue.component('contact-list-component', require('./components/ContactListComponent.vue'));
Vue.component('active-conversation-component',require('./components/ActiveConversationComponent.vue'));
Vue.component('message-conversation-component', require('./components/MessageConversationComponent.vue'));
Vue.component('status-component', require('./components/StatusComponent'));

const app = new Vue({
    el: '#app',
    methods: {
        logout(){
            document.getElementById('logout-form').submit();
        }
    }
});
