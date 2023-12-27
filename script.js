var input = document.getElementById("input")
var listContainer = document.getElementById("list-container")

const addtask =  function(){
    if(input.value === ""){
        alert("Please add a task")
    }
    else{
        var li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li)
        input.value = "";
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    savaData();
}

listContainer.addEventListener("click",(e)=>{
    if (e.target.tagName === "LI") {
        if(e.target.classList.contains("checked")){
            e.target.classList.remove("checked");
            savaData();
        }else{
            e.target.classList.add("checked")
            savaData();
        }
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
},false)

const savaData = () => {
    localStorage.setItem("data" , listContainer.innerHTML)
}

const showList = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();