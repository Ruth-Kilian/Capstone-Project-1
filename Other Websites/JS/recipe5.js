// save to grocery list button
const saveButton = document.getElementById("saveButton");
const saveList = document.getElementById("saveList5");

saveButton.addEventListener("click", function() {
    const listHtml = saveList.innerHTML;
    localStorage.setItem("saveList5", listHtml);

    const lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});

// like button
like5 = 0

function recipe5() {
  if (sessionStorage.like5) {
    sessionStorage.like5 = Number(sessionStorage.like5)+1;
  } else {
    sessionStorage.like5 = 1;
    }
document.getElementById("like5").innerHTML = sessionStorage.like5;
}

// Contact me
class User{
    constructor(name, email, message) {
        this.name = name
        this.email = email
        this.message = message  
    }
  }
  
  const users = []
  
  // function to "send" Email
  function sendEmail() {
    const newUser =  new User (
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
const savedComments = sessionStorage.getItem("userComments5");

// If there is a saved list, parse it and display it
if (savedComments) {
	const comments = JSON.parse(savedComments);
	const commentsList = document.getElementById("userComments5");
		comments.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		commentsList.appendChild(li);
		});
}

function addComment() {
	// Get the input value and clear the input
	const newComment5 = document.getElementById("newComment5").value;
	document.getElementById("newComment5").value = "";

	// Add the item to the list and save the updated list to localStorage
	const commentsList = document.getElementById("userComments5");
	const li = document.createElement("li");

  const date = new Date();
	const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	const currentTime = date.getHours()+":"+date.getMinutes();

	li.textContent = "commented " + "\"" + newComment5 + "\"" + " at " + currentTime  + " on " + currentDate;
	commentsList.appendChild(li);
	const comments = Array.from(commentsList.children).map(li => li.textContent);
	sessionStorage.setItem("userComments5", JSON.stringify(comments));
}