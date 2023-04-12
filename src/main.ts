import App from './App.vue'
import './assets/main.css'
import {createApp} from "vue";
import router from "./router";
import { library,dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { store } from './store/store'



library.add( fas,fab,far )
dom.watch()



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
