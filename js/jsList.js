const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value === '') {
        alert('You most write something.');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");// បង្កើត Element ថ្មីមួយនៅក្នុង Memory របស់ Browser។
        span.innerHTML = "\u00d7"; // នេះគឺជា Code សម្រាប់សញ្ញាគុណ (×)
        li.appendChild(span); //ដាក់ span ទៅក្នុង li
        saveData(); 
    }
    inputBox.value = "";
}
// save on broswer
function saveData(){
    localStorage.setItem("todo_list", listContainer.innerHTML); // get from html
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

// get from broswer and show
function showTask() {
    const savedData = localStorage.getItem("todo_list");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}
showTask();

console.log(localStorage.getItem("todo_list"));