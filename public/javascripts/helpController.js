//Getting Fields & Button
var nameField = document.getElementById("nameField");
var emailField = document.getElementById("emailField");
var subjectField = document.getElementById("subjectField");
var descriptionField = document.getElementById("descriptionField");
var submitButton = document.getElementById("submitButton");

function submitHelpRequest(){
    let name = nameField.value;
    let email = emailField.value;
    let subject = subjectField.value;
    let description = descriptionField.value;

    console.log("****************NEW HELP REQUEST ****************");
    console.log("New Entry from: " + name);
    console.log('With an Email of: ' + email);
    console.log("Help Request Subject: " + subject);
    console.log(description);

    nameField.value = null;
    emailField.value = null;
    subjectField.value = null;
    descriptionField.value = null;
}

submitButton.addEventListener("click", submitHelpRequest);