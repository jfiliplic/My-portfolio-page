import { msgForm } from "./elements";

export function initForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const message = event.currentTarget.message.value;
    if (!name || !email || !message) {
      alert("You must fill in all the fields.");
      return;
    }
    console.log(name + "\n" + email + "\n" + message);
    alert("Your message has been send. Want to send another message?");
    event.currentTarget.reset();
  }

  msgForm.addEventListener("submit", handleSubmit);
}
