//Get Fields and Buttons

usernameField = document.getElementById("usernameField");
passwordField = document.getElementById("passwordField");
submitButton = document.getElementById("submitButton");
//$errorLabel = $("#errorLabel");
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
                console.log("Success");
                console.log("Successfully logged in as " + validUserName + " with a password of " + validPassword)
                break;
            }
            else{
                incorrectPassword = true;
            }
        }
        else if (incorrectPassword){
            //$errorLabel.show();
            console.log(enteredUserName + " has entered an incorrect password;")
            break;
        }
    }
    usernameField.value = null;
    passwordField.value=null;

}

function forgotPassword(){
    let enteredUserName = $usernameField.text;
    let found = false;
    for(let i = 0; i < users.length; i++){
        let validUserName = users[i].username;
        if(validUserName === enteredUserName){
            console.log("Yours password is: " + users[i].password);
            found = true;
        }
    }
    if(!found){
        console.log("ERROR: UserName does not exist in system");
    }
}
submitButton.addEventListener("click", checkPassword);
//submitButton.addEventListener("click", checkPassword);
//$forgotPasswordText.addEventListener("click", forgotPassword());


