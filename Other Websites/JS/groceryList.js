// get ids to display the ingredients
const savedListS = document.getElementById("savedListS");
const savedListM = document.getElementById("savedListM");
const savedListP = document.getElementById("savedListP");
const savedListC = document.getElementById("savedListC");
const savedList2 = document.getElementById("savedList2");
const savedList3 = document.getElementById("savedList3");
const savedList4 = document.getElementById("savedList4");
const savedList5 = document.getElementById("savedList5");
const savedList6 = document.getElementById("savedList6");

// get saved lists from local stroage
const savedListHtmlS = localStorage.getItem("saveListS");
const savedListHtmlM = localStorage.getItem("saveListM");
const savedListHtmlP = localStorage.getItem("saveListP");
const savedListHtmlC = localStorage.getItem("saveListC");
const savedListHtml2 = localStorage.getItem("saveList2");
const savedListHtml3 = localStorage.getItem("saveList3");
const savedListHtml4 = localStorage.getItem("saveList4");
const savedListHtml5 = localStorage.getItem("saveList5");
const savedListHtml6 = localStorage.getItem("saveList6");

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
