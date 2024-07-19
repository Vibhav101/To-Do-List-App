/* for This Day */

const input1 = document.getElementById("input1");
const list1 = document.getElementById("list1");
const time1 = document.getElementById("time1");

function addTask() {
    if(input1.value === "" || time1.value === ""){
        alert("Incomplete task info");
    }
    else{
        let li1 = document.createElement("li");
        let space = "&nbsp&nbsp&nbsp&nbsp;";
        li1.innerHTML = input1.value + space + time1.value;
        list1.appendChild(li1);
    }
    input1.value = "";
    time1.value = "";
    saveData1();
}

input1.addEventListener("keypress", function(add1){
    if(add1.key === "Enter"){
        addTask();
    }
}, false);

time1.addEventListener("keypress", function(add1){
    if(add1.key === "Enter"){
        addTask();
    }
}, false);

list1.addEventListener("click", function(cut1){
    if(cut1.target.tagName === "LI" || cut1.target.tagName === "SPAN"){
        let targetElement = cut1.target.tagName === "LI" ? cut1.target : cut1.target.parentElement;
        targetElement.classList.toggle("checked");
        saveData1();
    }
}, false);

list1.addEventListener("dblclick", function(delete1) {
    if (delete1.target.tagName === "LI") {
        delete1.target.parentElement.removeChild(delete1.target);
        saveData1();
    } 
}, false);

function saveData1(){
    localStorage.setItem("data1", list1.innerHTML);
}

function showData1(){
    list1.innerHTML = localStorage.getItem("data1");
}

showData1();