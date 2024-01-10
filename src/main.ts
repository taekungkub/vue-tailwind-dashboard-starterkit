import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import EmptyLayout from "./layout/EmptyLayout.vue";
import DashboardLayout from "./layout/DashboardLayout.vue";
import BaseCard from "./components/Base/BaseCard.vue";
import BaseDropdown from "./components/Base/BaseDropdown.vue";
import BaseDropdownItem from "./components/Base/BaseDropdownItem.vue";
import BaseModal from "./components/Base/BaseModal.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import PageHeader from "./components/PageHeader.vue";
import BaseButton from "./components/Base/BaseButton.vue";

import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import { th } from '@formkit/i18n'


const globalComponent = {
  install(app: any) {
    app.component("default-layout", DashboardLayout);
    app.component("empty-layout", EmptyLayout);
    app.component("BaseCard", BaseCard);
    app.component("BaseDropdown", BaseDropdown);
    app.component("BaseDropdownItem", BaseDropdownItem);
    app.component("BaseModal", BaseModal);
    app.component("PaginationComponent", PaginationComponent);
    app.component("PageHeader", PageHeader);
    app.component("BaseButton", BaseButton);

  },
};





const app = createApp(App);
app.use(router);
app.use(globalComponent);
app.use(plugin, defaultConfig({
   // Define additional locales
   locales: { th },
   // Define the active locale
   locale: 'th',
}))
app.mount("#app");
