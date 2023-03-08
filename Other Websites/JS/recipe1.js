// save to grocery list buttons
const saveButton = document.getElementById("saveButton");
const saveListS = document.getElementById("saveListS");

saveButton.addEventListener("click", function() {
    const listHtml = saveListS.innerHTML;
    localStorage.setItem("saveListS", listHtml);

    const lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});

const saveButton2 = document.getElementById("saveButton2");
const saveListM = document.getElementById("saveListM");

saveButton2.addEventListener("click", function() {
    const listHtml = saveListM.innerHTML;
    localStorage.setItem("saveListM", listHtml);

    const lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});

const saveButton3 = document.getElementById("saveButton3");
const saveListP = document.getElementById("saveListP");


saveButton3.addEventListener("click", function() {
    const listHtml = saveListP.innerHTML;
    localStorage.setItem("saveListP", listHtml);

    const lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});

const saveButton4 = document.getElementById("saveButton4");
const saveListC = document.getElementById("saveListC");


saveButton4.addEventListener("click", function() {
    const listHtml = saveListC.innerHTML;
    localStorage.setItem("saveListC", listHtml);

    const lengthLocalStorage = localStorage.length
    alert("You have " + lengthLocalStorage + " ingredient list(s) in your grocery list.")
});


// Like buttons
like = 0

function recipe() {
  if (sessionStorage.like) {
    sessionStorage.like = Number(sessionStorage.like)+1;
  } else {
    sessionStorage.like = 1;
    }
document.getElementById("like").innerHTML = sessionStorage.like;
}


like1 = 0

function recipe1() {
  if (sessionStorage.like1) {
    sessionStorage.like1 = Number(sessionStorage.like1)+1;
  } else {
    sessionStorage.like1 = 1;
    }
document.getElementById("like1").innerHTML = sessionStorage.like1;
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
const savedComments = sessionStorage.getItem("userComments");

// If there is a saved list, parse it and display it
if (savedComments) {
	const comments = JSON.parse(savedComments);
	const commentsList = document.getElementById("userComments");
		comments.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		commentsList.appendChild(li);
		});
}

function addComment() {
	// Get the input value and clear the input
	const newComment = document.getElementById("newComment").value;
	document.getElementById("newComment").value = "";

	// Add the item to the list and save the updated list to localStorage
	const commentsList = document.getElementById("userComments");
	const li = document.createElement("li");

  const date = new Date();
	const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	const currentTime = date.getHours()+":"+date.getMinutes();

	li.textContent = "commented " + "\"" + newComment + "\"" + " at " + currentTime  + " on " + currentDate;
	commentsList.appendChild(li);
	const comments = Array.from(commentsList.children).map(li => li.textContent);
	sessionStorage.setItem("userComments", JSON.stringify(comments));
}