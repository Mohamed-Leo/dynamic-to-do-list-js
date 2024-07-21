document.addEventListener("DOMContentLoaded" , function() {
    // select elements----
    const addButton = document.getElementById("add-task-btn"),
    taskInput = document.getElementById("task-input"),
    taskList = document.getElementById("task-list");

    addButton.addEventListener("click" , function() {
        addTask();
    });

    taskInput.addEventListener("keypress" , function (event) {
        if(event.key === "Enter") {
            addTask();
        }
    });


    function addTask() {
        let taskText = taskInput.value.trim();

        // check on value---
        if(taskText){
            // create li element
            let li = document.createElement("li");
            li.textContent = taskText;
            // create a btn to remove the task--
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.onclick = () => li.remove();
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            // clear value--
            taskInput.value = "";
        }
        else {
            alert("please add a task");
        }
    };

    addTask();
});

