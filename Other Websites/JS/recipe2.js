// Save to grocery list button
let saveButton = document.getElementById("saveButton");
let saveList = document.getElementById("saveList2");

saveButton.addEventListener("click", function() {
    let listHtml = saveList.innerHTML;
    localStorage.setItem("saveList2", listHtml);

    let lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});

// Like Button
like2 = 0

function recipe2() {
  if (sessionStorage.like2) {
    sessionStorage.like2 = Number(sessionStorage.like2)+1;
  } else {
    sessionStorage.like2 = 1;
    }
document.getElementById("like2").innerHTML = sessionStorage.like2;
}

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

  alert("Email has been sent")
    
  // clear input fields
  document.getElementById("userName").value = ""
  document.getElementById("userEmail").value = ""
  document.getElementById("userMessage").value = ""
}

// Leave a comment

// Get the saved list from localStorage
const savedComments = sessionStorage.getItem("userComments2");

// If there is a saved list, parse it and display it
if (savedComments) {
	const comments = JSON.parse(savedComments);
	const commentsList = document.getElementById("userComments2");
		comments.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		commentsList.appendChild(li);
		});
}

function addComment() {
	// Get the input value and clear the input
	const newComment2 = document.getElementById("newComment2").value;
	document.getElementById("newComment2").value = "";

	// Add the item to the list and save the updated list to localStorage
	const commentsList = document.getElementById("userComments2");
	const li = document.createElement("li");

  let date = new Date();
	let currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	let currentTime = date.getHours()+":"+date.getMinutes();

	li.textContent = "commented " + "\"" + newComment2 + "\"" + " at " + currentTime  + " on " + currentDate;
	commentsList.appendChild(li);
	const comments = Array.from(commentsList.children).map(li => li.textContent);
	sessionStorage.setItem("userComments2", JSON.stringify(comments));
}