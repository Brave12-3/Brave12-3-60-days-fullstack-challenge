const chatForm = document.getElementById("chat-form");
const chatContainer = document.getElementById("chat-container");
const messageInput = document.getElementById("message-input");

// 🧠 When user submits the form
chatForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const message = messageInput.value.trim();
  if (message === "") return;

  // Add user's message
  addMessage(message, "right");

  // Clear input
  messageInput.value = "";

  // Simulated HTML reply
  setTimeout(() => {
    addMessage("Nice one! I'm just a robot though 🤖", "left");
  }, 1000);
});

function addMessage(text, side) {
  const msg = document.createElement("p");
  msg.classList.add("chat", side);
  msg.textContent = text;
  chatContainer.appendChild(msg);

  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
