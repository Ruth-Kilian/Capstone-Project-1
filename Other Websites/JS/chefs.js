// Contact me

class User{
  constructor(name, email, message) {
      this.name = name
      this.email = email
      this.message = message  
  }
}

let users = []

// function to "send" Email
function sendEmail() {
  let newUser =  new User (
      document.getElementById("userName").value,
      document.getElementById("userEmail").value,
      document.getElementById("userMessage").value,
  )

  users.push(newUser)
  localStorage.setItem("usersStorageChefs", JSON.stringify(users))

  alert("Email has been sent")

  // clear input fields
  document.getElementById("userName").value = ""
  document.getElementById("userEmail").value = ""
  document.getElementById("userMessage").value = ""
}

// Leave a comment

// Get the saved list from localStorage
const savedComments = localStorage.getItem("userCommentsChefs");

// If there is a saved list, parse it and display it
if (savedComments) {
	const comments = JSON.parse(savedComments);
	const commentsList = document.getElementById("userCommentsChefs");
		comments.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		commentsList.appendChild(li);
		});
}

function addComment() {
	// Get the input value and clear the input
	const newCommentChefs = document.getElementById("newCommentChefs").value;
	document.getElementById("newCommentChefs").value = "";

	// Add the item to the list and save the updated list to localStorage
	const commentsList = document.getElementById("userCommentsChefs");
	const li = document.createElement("li");
	li.textContent = newCommentChefs;
	commentsList.appendChild(li);
	const comments = Array.from(commentsList.children).map(li => li.textContent);
	localStorage.setItem("userCommentsChefs", JSON.stringify(comments));
}