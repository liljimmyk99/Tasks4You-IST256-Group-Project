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
  
  $("#taskTable").append(
    "<tr>" +
      "<td>" + taskName + "</td>" +
      "<td>" + taskDescription + "</td>" + 
      "<td>" + taskDate + "</td>" +
      "<td> <button class = btn  onClick = completeTask>X</button> <td>" +
    "</tr>"
  );
    addTaskToDataBase(taskName, taskDescription, taskDate);
  modal.style.display = "none";

}

function addTaskToDataBase(name, description, date){
  let data = {};
  data.title = name;
  data.content = description;
  data.dueDate = date;
  console.log("Data Values are: " + name + ", " + description + ", " + date);
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: "/tasks",
    success: function(data){
      loadTaskTable();
    },
    error: function (data){
      console.log(data);
    }
  });

}

function loadTaskTable(){
  $.ajax({
    type: "get",
    url: "/tasks",
    success: function(data){
      var taskTable = document.getElementById("taskTable");

      for (var i = 0; i < data.length; i++){
        let taskName = data[i].title;
        let taskDescription = data[i].content;
        let taskDate = date[i].dueDate;

        $("#taskTable").append(
          "<tr>" +
            "<td>" + taskName + "</td>" +
            "<td>" + taskDescription + "</td>" + 
            "<td>" + taskDate + "</td>" +
            "<td> <button class = \"deleteTaskButtons\"  onClick = \"completeTask()\" >X</button> <td>" +
          "</tr>"
        );
      }
    },
    error: function(data){
      console.log(data);
    }
    
  });
}

function getDate(){
  $.ajax({
    type: "get",
    url: "https://api.lrs.org/random-date-generator?num_dates=1&exclude[]=6&%20exclude[]=7",
    success: function(data){
        let dataFromServer = JSON.parse(data);
        console.log(data);
        for(let counter = 0; counter < dataFromServer.size(); counter++){
            console.log(dataFromServer.get(counter));
        }
    }
});
}

function completeTask(taskRow){
  $(tt1).parents("tr").removeChild();
  console.log("Button clicked");
}

$(document).ready(loadTaskTable());
submitTaskButton.addEventListener("click", addTaskToTable);
document.getElementById("getDateButton").addEventListener("click", getDate);
