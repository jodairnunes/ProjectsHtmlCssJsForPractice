const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const itemList = document.querySelector(".list-container li");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = inputBox.value;
    li.appendChild(p);
    // li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let img = document.createElement("img");
    img.src = "img/delete.webp";
    li.appendChild(img);
    saveData();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  sessionStorage.setItem("data", listContainer.innerHTML);
  console.log(listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = sessionStorage.getItem("data");
  console.log(sessionStorage.getItem("data"));
}

showTasks();
