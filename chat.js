export async function Chat() {
  return {
    props: ["chatId"],
    template: await fetch("./chat.html").then((r) => r.text()),
  };
}
