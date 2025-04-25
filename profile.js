export async function Profile() {
  return {
    template: await fetch("./profile.html").then((r) => r.text()),
  };
}
