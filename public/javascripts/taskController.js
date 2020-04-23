//Code from https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("addTaskModal");

// Get the button that opens the modal
var btn = document.getElementById("addTaskButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Adding Elements to the Table
var submitTaskButton = document.getElementById("submitTaskButton");

function addTaskToTable(){
  //Getting Values from the TextFields
  let nameField = document.getElementById("taskNameField");
  let descriptionField = document.getElementById("taskDescriptionField");
  let taskName = nameField.value;
  let taskDescription = descriptionField.value;
  let taskDate = "05/3/2020";
  let table = document.getElementById("taskTable");
  nameField.value="";
  descriptionField.value="";

  //Creating new row in Table
  let newRow = table.insertRow(1);
  let newNameElement = newRow.insertCell(0);
  let newDescriptionElement = newRow.insertCell(1);
  let newDateElement = newRow.insertCell(2);

  newNameElement.innerHTML = taskName;
  newDescriptionElement.innerHTML = taskDescription;
  newDateElement.innerHTML = taskDate;
  modal.style.display = "none";

}
submitTaskButton.addEventListener("click", addTaskToTable);
