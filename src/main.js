import { createApp } from 'vue';
import App from './App.vue';
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// Global CSS
import './assets/main.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faQuoteLeft, faQuoteRight, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
// Library
library.add(faQuoteLeft, faQuoteRight, faTwitter, faFacebook, faClipboard);
// App
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');