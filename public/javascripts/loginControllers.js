//Get Fields and Buttons

usernameField = document.getElementById("usernameField");
passwordField = document.getElementById("passwordField");
submitButton = document.getElementById("submitButton");
errorLabel = document.getElementById("errorLabel");
//$forgotPasswordText = $("forgotPasswordLink");


//List of Users and and Passwords
var user1 = {username: "Testing", password: "1234"};
var user2 = {username: "IST", password: "256"};
var user3 = {username: "Jimmy", password: "Kane"};
var users = [user1,user2,user3];


function checkPassword(){

    let enteredUserName = usernameField.value;
    let enteredPassword = passwordField.value;


    for(let i = 0; i < users.length; i++){
        let validUserName = users[i].username;
        let validPassword = users[i].password;
        let incorrectPassword = false;
        if(validUserName === enteredUserName){
            if(validPassword === enteredPassword){
                console.log("Successfully logged in as " + validUserName + " with a password of " + validPassword)
                window.location.replace("about.html");
                break;
            }
            else{
                console.log("Error!");
                errorLabel.value = "Error, incorrect Username and/or Password";
            }
        }
        else{
            console.log("No Such User Exists");
            errorLabel.innerHTML = "Error, incorrect Username and/or Password";
        }
    }
    usernameField.value = null;
    passwordField.value=null;

}

function forgotPassword(){
    let enteredUserName = usernameField.text;
    console.log("Button has been clicked");
    let found = false;
    for(let i = 0; i < users.length; i++){
        let validUserName = users[i].username;
        if(validUserName === enteredUserName){
            console.log("Yours password is: " + users[i].password);
            found = true;
        }
    }
}
submitButton.addEventListener("click", checkPassword);
document.getElementById("forgotPasswordText").addEventListener("click", forgotPassword());


