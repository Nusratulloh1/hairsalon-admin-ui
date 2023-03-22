import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { i18n } from "./i18n";
import AppTag from "@/components/common/AppTag.vue";
import "@/permissions";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

// Styles
import "./assets/styles/main.scss";
import "./assets/styles/element/index.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { mask } from "vue-the-mask";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

Sentry.init({
  app,
  dsn: "https://aa77b7143c5e4de083617c8eeccd1a02@o1044492.ingest.sentry.io/4504881653088256",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [
        "localhost",
        "127.0.0.1",
        "admission.akfauniversity.com",
        /^\//,
      ],
    }),
  ],
  logErrors: true,
  tracesSampleRate: 1.0,
});

app.component("app-tag", AppTag);

app.use(i18n);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);

// Directives
app.directive("mask", mask as any);

app.mount("#app");

export { Sentry };
