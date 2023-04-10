import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faQuoteLeft, faQuoteRight, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faQuoteLeft, faQuoteRight, faTwitter, faFacebook, faClipboard);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')