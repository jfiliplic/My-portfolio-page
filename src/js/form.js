const msgForm = document.querySelector(`[name="send-msg"]`);

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
}

msgForm.addEventListener("submit", handleSubmit);
