//Lets goooo!

//setting up variables for elements;

const inputBox = document.getElementById('input-box');

const tasksCont = document.getElementById('Tasks-container');

//i am using "onclick" on the button element in the html to run the "addTask" function, alternatively there are other methods for doing this like: "AddEventListener" etc but for simplicity i am using this xD;

function addTask() {
    //adding if else statement incase the user dont type anything in the input box;
    if (inputBox.value === '') {
        alert("You must Type something in the input box to add a Task");
    }
    //else it will append the task to the list!;
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        tasksCont.appendChild(li);
        //adding a span element to the body to make a "cross" to delete the added tasks;
        let span = document.createElement('span');
        span.innerHTML = ("\u00d7");
        li.appendChild(span);
    }
    //this will make the input box empty after clicking the button;
    inputBox.value = '';
    inputBox.focus();
    //using the function "saveData()" to preserve the data;
    saveData();

}

//adding "click" even listener to toggle the tag classes to "checked" or "uncheck" whenever the user clicks on them;


tasksCont.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        //using saveData function;
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        //using saveData function;
        saveData();
    }
}, false)

//now everything is done except we have to add a way to save the todo list tasks so whenever the user refreshes/close the page they can preserve their tasks in the list otherwise the whole concept of todo list would be useless!;

//we will call this below function 3 times in the above code pieces;

function saveData() {
    localStorage.setItem("data", tasksCont.innerHTML);
    //localStorage is a built in javascript way to preserve data in the browser;
}

//this below function will show the data whenever the user refreshes the page!;

function showData() {
    tasksCont.innerHTML = localStorage.getItem("data");
}
//calling this showData function is important otherwise this whole "preserving data" functions wont work!;
showData();


//-----------------------End---------------------
