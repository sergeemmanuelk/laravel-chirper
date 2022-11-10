import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ChirpTextarea from '../js/components/ChirpTextarea.vue';

const app = createApp();

app
    .component('ChirpTextarea', ChirpTextarea);

app
    .mount('#main');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
