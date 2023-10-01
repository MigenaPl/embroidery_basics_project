function joinParty() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");
  let city = prompt("What city do you live in?");
  if (name.length > 3 && email.length > 8) {
    alert(
      `Thank you ${name}! We'll be in touch by email about our next party in ${city}!🧵🎉`
    );
  } else {
    alert(
      `Sorry ${name}, we didn't get your answer, please retry with full information.🌻`
    );
  }
}

let joinButton = document.querySelector(".enroll-button");
joinButton.addEventListener("click", joinParty);
