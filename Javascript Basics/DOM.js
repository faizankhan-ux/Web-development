document.title = "ChangedByJS"
console.log(document.body.children);


// selctor
/*

document.getElementById("")
document.getElementsByClassName("")
document.querySelector(".") -> selects first element with given class
document.querySelectorAll(".")
document.getElementByTagName("div")


*/

let div = document.createElement("div")
div.innerHTML = "i have been inserted"
document.querySelector(".container").append(div)

