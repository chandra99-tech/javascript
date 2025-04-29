let inputbox = document.getElementById("input");
let addbutton = document.getElementById("button");
let tasklist = document.getElementById("list");

addbutton.addEventListener('click', function () {
    let tasktext = inputbox.value.trim();
    if (tasktext === "") {
        alert("Please enter a task.");
        return;
    }

    let listitem = document.createElement('li');
    listitem.textContent = tasktext;

    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px"; 

    
    deleteBtn.addEventListener('click', function () {
        tasklist.removeChild(listitem);
    });

    
    listitem.appendChild(deleteBtn);

    
    tasklist.appendChild(listitem);

    inputbox.value = "";
    inputbox.focus();
});
