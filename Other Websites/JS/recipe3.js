// Save to grocery list button
let saveButton = document.getElementById("saveButton");
let saveList = document.getElementById("saveList3");

saveButton.addEventListener("click", function() {
    let listHtml = saveList.innerHTML;
    localStorage.setItem("saveList3", listHtml);

    let lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});


// like button
like3 = 0

function recipe3() {
  if (sessionStorage.like3) {
    sessionStorage.like3 = Number(sessionStorage.like3)+1;
  } else {
    sessionStorage.like3 = 1;
    }
document.getElementById("like3").innerHTML = sessionStorage.like3;
}

// contact me
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
    localStorage.setItem("usersStorage3", JSON.stringify(users))

    alert("Email has been sent")
  
    // clear input fields
    document.getElementById("userName").value = ""
    document.getElementById("userEmail").value = ""
    document.getElementById("userMessage").value = ""
}

// Get the saved list from localStorage
const savedComments = sessionStorage.getItem("userComments3");

// If there is a saved list, parse it and display it
if (savedComments) {
	const comments = JSON.parse(savedComments);
	const commentsList = document.getElementById("userComments3");
		comments.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		commentsList.appendChild(li);
		});
}

function addComment() {
	// Get the input value and clear the input
	const newComment3 = document.getElementById("newComment3").value;
	document.getElementById("newComment3").value = "";

	// Add the item to the list and save the updated list to localStorage
	const commentsList = document.getElementById("userComments3");
	const li = document.createElement("li");

  let date = new Date();
	let currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	let currentTime = date.getHours()+":"+date.getMinutes();

	li.textContent = "commented " + "\"" + newComment3 + "\"" + " at " + currentTime  + " on " + currentDate;
	commentsList.appendChild(li);
	const comments = Array.from(commentsList.children).map(li => li.textContent);
	sessionStorage.setItem("userComments3", JSON.stringify(comments));
}