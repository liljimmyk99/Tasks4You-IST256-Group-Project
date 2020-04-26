
//Back up code for Demonstration if needed
function loadCompleteTaskTable(){
    addRow("IST 256 Presentation", "We must create the slides", "04/27/2020");
    addRow("Sprint 2", "MAKE THE CRUD WORK!", "04/26/2020");
    addRow("IST 311", "Final Project Paper", "05/01/2020");
    addRow("Scheduling", "Enroll in classes", "04/24/2020");
}
$(document).ready(loadCompleteTaskTable())

function addRow(name, description, date){
    $("#completedTaskTable").append(
        "<tr>" +
          "<td>" + name + "</td>" +
          "<td>" + description + "</td>" + 
          "<td>" + date + "</td>" +
        "</tr>"
      );
}

/*

function loadTaskTable(){
  $.ajax({
    type: "get",
    url: "/tasks",
    success: function(data){
      var taskTable = document.getElementById("completedTaskTable");

      for (var i = 0; i < data.length; i++){
        let taskName = data[i].title;
        let taskDescription = data[i].content;
        let taskDate = date[i].dueDate;

        $("#taskTable").append(
          "<tr>" +
            "<td>" + taskName + "</td>" +
            "<td>" + taskDescription + "</td>" + 
            "<td>" + taskDate + "</td>" +
          "</tr>"
        );
      }
    },
    error: function(data){
      console.log(data);
    }
    
  });
}


*/