import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { ChatList } from "./chat-list.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Add your routes here
  ],
});

createApp({
  components: {
    ChatList: defineAsyncComponent(ChatList),
  },
})
  .use(router)
  .mount("#app");
