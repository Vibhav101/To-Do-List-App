/* for This Month */

const input3 = document.getElementById("input3");
const list3 = document.getElementById("list3");
const time3 = document.getElementById("time3");

function add3Task() {
    if(input3.value === "" || time3.value === ""){
        alert("Incomplete task info");
    }
    else{
        let li3 = document.createElement("li");
        let space = "&nbsp&nbsp&nbsp&nbsp;";
        li3.innerHTML = input3.value + space + time3.value;
        list3.appendChild(li3);
    }
    input3.value = "";
    time3.value = "";
    saveData3();
}

input3.addEventListener("keypress", function(add3){
    if(add3.key === "Enter"){
        add3Task();
    }
}, false);

time3.addEventListener("keypress", function(add3){
    if(add3.key === "Enter"){
        add3Task();
    }
}, false);

list3.addEventListener("click", function(cut3){
    if(cut3.target.tagName === "LI" || cut3.target.tagName === "SPAN"){
        let targetElement = cut3.target.tagName === "LI" ? cut3.target : cut3.target.parentElement;
        targetElement.classList.toggle("checked");
        saveData3();
    }
}, false);

list3.addEventListener("dblclick", function(delete3) {
    if (delete3.target.tagName === "LI") {
        delete3.target.parentElement.removeChild(delete3.target);
        saveData3();
    } 
}, false);

function saveData3(){
    localStorage.setItem("data3", list3.innerHTML);
}

function showData3(){
    list3.innerHTML = localStorage.getItem("data3");
}

showData3();