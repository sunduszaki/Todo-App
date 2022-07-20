var list = document.getElementById("list");





//create li with text node

function Addtodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class", "d-flex justify-content-between pb-2");


    //create div//
    var divText = document.createElement("div");
    divText.setAttribute("class","w-75 h4");
    var divButton = document.createElement("div")
    divButton.setAttribute("class","d-flex justify-content-around w-25")
    divText.appendChild(liText);

    li.appendChild(divText);
    li.appendChild(divButton);
    //create delete button//
    var delButton = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delButton.appendChild(delText);
    delButton.setAttribute("class", "btn btn-outline-light btn-sm")
    delButton.setAttribute("onclick", "deleteItem(this)")
    // li.appendChild(delText)
    li.appendChild(delButton)

    //create edit button//
    var editButton = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editButton.setAttribute("class", "btn btn-outline-light btn-sm");

    editButton.appendChild(editText);
    editButton.setAttribute("onclick", "editItem(this)");
    divButton.appendChild(editButton);
    divButton.appendChild(delButton);


    list.appendChild(li)

    todo_item.value = ""
}
function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll() {
    list.innerHTML = ""
}