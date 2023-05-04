const nameRegex = /^[a-zA-Z]{6,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectRegex = /^.{16,}$/;
const messageRegex = /^.{26,}$/;
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name")
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message")




form.onsubmit = (e) => {
  e.preventDefault()
let error = []
  const name = nameInput.value.trim()
  const email = emailInput.value.trim()
  const subject = subjectInput.value.trim()
  const message= messageInput.value.trim()

  if (!nameRegex.test(name)) {
      console.error('Name should contain at least 6 letters.');
      return;
    }

    if(!emailRegex.test(email)) {
      console.error("Please provide a valid email")
      return;
    }
    if (!subjectRegex.test(subject)) {
      console.error('Subject should be at least 16 characters long.');
      return;
    }
    if (!messageRegex.test(message)) {
      console.error('Message should be at least 26 characters long.');
      return;
    }

    form.submit();


};


