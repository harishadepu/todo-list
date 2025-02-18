const inputText = document.getElementById("inputText");
const listContainer = document.getElementById("listContainer");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",()=>{
    const inputValue = inputText.value;
    if(inputValue === ""){
        alert("enter text to add");
    }
    else{
        const listItem = document.createElement("li");
        listItem.innerHTML = inputValue;
        listContainer.appendChild(listItem);
        const cross = document.createElement("i");
        cross.className = "fa-sharp fa-solid fa-trash";
        listItem.appendChild(cross);
        
    }
    inputText.value = "";
    saveData();
    
})
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showData();