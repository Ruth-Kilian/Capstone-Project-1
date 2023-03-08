// get ids to display the ingredients
let savedListS = document.getElementById("savedListS");
let savedListM = document.getElementById("savedListM");
let savedListP = document.getElementById("savedListP");
let savedListC = document.getElementById("savedListC");
let savedList2 = document.getElementById("savedList2");
let savedList3 = document.getElementById("savedList3");
let savedList4 = document.getElementById("savedList4");
let savedList5 = document.getElementById("savedList5");
let savedList6 = document.getElementById("savedList6");

// get saved lists from local stroage
let savedListHtmlS = localStorage.getItem("saveListS");
let savedListHtmlM = localStorage.getItem("saveListM");
let savedListHtmlP = localStorage.getItem("saveListP");
let savedListHtmlC = localStorage.getItem("saveListC");
let savedListHtml2 = localStorage.getItem("saveList2");
let savedListHtml3 = localStorage.getItem("saveList3");
let savedListHtml4 = localStorage.getItem("saveList4");
let savedListHtml5 = localStorage.getItem("saveList5");
let savedListHtml6 = localStorage.getItem("saveList6");

// display the ingredients
savedListS.innerHTML = savedListHtmlS;
savedListM.innerHTML = savedListHtmlM;
savedListP.innerHTML = savedListHtmlP;
savedListC.innerHTML = savedListHtmlC;
savedList2.innerHTML = savedListHtml2;
savedList3.innerHTML = savedListHtml3;
savedList4.innerHTML = savedListHtml4;
savedList5.innerHTML = savedListHtml5;
savedList6.innerHTML = savedListHtml6;
