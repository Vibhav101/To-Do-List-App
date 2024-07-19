/* for This Week */

const input2 = document.getElementById("input2");
const list2 = document.getElementById("list2");
const time2 = document.getElementById("time2");

function add2Task() {
    if(input2.value === "" || time2.value === ""){
        alert("Incomplete task info");
    }
    else{
        let li2 = document.createElement("li");
        let space = "&nbsp&nbsp&nbsp&nbsp;";
        li2.innerHTML = input2.value + space + time2.value;
        list2.appendChild(li2);
    }
    input2.value = "";
    time2.value = "";
    saveData2();
}

input2.addEventListener("keypress", function(add2){
    if(add2.key === "Enter"){
        add2Task();
    }
}, false);

time2.addEventListener("keypress", function(add2){
    if(add2.key === "Enter"){
        add2Task();
    }
}, false);

list2.addEventListener("click", function(cut2){
    if(cut2.target.tagName === "LI" || cut2.target.tagName === "SPAN"){
        let targetElement = cut2.target.tagName === "LI" ? cut2.target : cut2.target.parentElement;
        targetElement.classList.toggle("checked");
        saveData2();
    }
}, false);

list2.addEventListener("dblclick", function(delete2) {
    if (delete2.target.tagName === "LI") {
        delete2.target.parentElement.removeChild(delete2.target);
        saveData2();
    } 
}, false);

function saveData2(){
    localStorage.setItem("data2", list2.innerHTML);
}

function showData2(){
    list2.innerHTML = localStorage.getItem("data2");
}

showData2();