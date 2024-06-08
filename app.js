var getul = document.querySelector("#ul")

function addTodo(){
    var getInp = document.querySelector("#inp")
    var creatli = document.createElement("li")
    var liText = document.createTextNode(getInp.value)
    creatli.appendChild(liText)
    getul.appendChild(creatli)
    getInp.value = ''
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    creatli.appendChild(delBtn)
    delBtn.setAttribute("onclick","delfunc(this)")
    delBtn.setAttribute ('class','deletor')

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    creatli.appendChild(editBtn)
    editBtn.setAttribute("onclick","editfunc(this)")
    editBtn.setAttribute ('class','editor')
    
}

function delall(){ 
    getul.innerHTML = ''
}

function delfunc(e){
    e.parentNode.remove()
    

    }

    function editfunc(e){
        
        var chalayap = prompt("enter Updated Value",e.parentNode.firstChild.textContent)
        e.parentNode.firstChild.textContent = chalayap
    }



















