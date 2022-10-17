import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WujieVue from "wujie-vue3";
import credentialsFetch from "./fetch";
import lifecycles from "./lifecycle";
import hostMap from "./hostMap";

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

bus.$on("click", (msg: string) => window.alert(msg));

const attrs = { src: "//localhost:5175/" };
const props = {
    jump: (name: string) => {
        console.log('props-jump-name => ', name);
    },
};
const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;

setupApp({
    name: "vite",
    url: hostMap("//localhost:5715/"),
    attrs,
    exec: true,
    props,
    fetch: credentialsFetch,
    degrade,
    ...lifecycles,
})


if (window.localStorage.getItem("preload") !== "false") {
    preloadApp({
        name: "vite",
        url: 'http//localhost:5715/'
    });
}

const app = createApp(App);
app.use(WujieVue).mount('#app');
