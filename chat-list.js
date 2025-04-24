import { defineAsyncComponent } from "vue";
import { Chat } from "./chat.js";

export async function ChatList() {
  return {
    components: { Chat: defineAsyncComponent(Chat) },
    data() {
      return {
        chats: [1, 2],
        selectedChat: null,
      };
    },
    methods: {
      addChat() {
        this.chats.push(this.chats.length + 1);
      },
    },
    template: await fetch("./chat-list.html").then((r) => r.text()),
  };
}
