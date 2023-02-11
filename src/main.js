import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import pinDirective from './shared/pin-directive';

const app = createApp(App);
app.use(router);
app.use(store);
app.directive('pin', pinDirective);
app.mount('#app');
