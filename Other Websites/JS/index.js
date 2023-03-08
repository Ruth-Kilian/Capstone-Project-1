// Contact me
class User{
  constructor(name, email) {
      this.name = name
      this.email = email
  }
}

let newsLetters = []

// function to "send" Email
function sendEmail() {
  let newUser =  new User (
      document.getElementById("userName").value,
      document.getElementById("userEmail").value,
  )

  newsLetters.push(newUser)

  alert("You are now subscribed!")

  // clear input fields
  document.getElementById("userName").value = ""
  document.getElementById("userEmail").value = ""
}