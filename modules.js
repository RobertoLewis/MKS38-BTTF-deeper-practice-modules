
var validate = validateUserInfo();
var message = messageOutput();

//****************************Function declarations
function submitRegistration(){
//check to see if these values are valid as described below in (3)
$(document).ready(function({
  var newEmail = $("#email").val();
  var newName = $("#fullname").val();
  var newPhone = $("#phone").val();

  var userEmail = validate.email(newEmail);
  var userName = validate.fullname(newName);
  var userPhone = validate.phone(newPhone);
  var userProfile = {};

  if(userEmail){
    userProfile.email = userEmail;
  } else {
    message.failure("ERROR! Invalid email!");
  }

  if(userName){
    userProfile.name = userName;
  } else {
    message.failure("ERROR! Invalid name!")


  if(userPhone){
    userProfile.phone = userPhone;
  } else {
    message.failure("ERROR! Invalid phone number!")
  }

  if (Object.keys(userProfile).length === 3){
    message.success(userProfile);
  }
}));

//if so, add each of the values as properties (of the same name) to an object
//pass that object to a function called makeAjaxCall(..)
//if any validation fails, an error message should be passed to displayMessage(..)

}

function messageOutput (){

  function makeAjaxCall(obj){
    //this function should only call displayMessage(..) with a generic success message.
    if(obj){
      var success = "Success! Let's burn this place down!";
      displayMessage(success);

    }


}

  function displayMessage(msg){
    // sets its value into the #message DOM element from (1)
    $(document).ready(function(){
      $("#message").text(msg);
    })

  }

  return {
    success:makeAjaxCall,
    failure:displayMessage
  };

}




// Define one function each for processing the following string values. Each function should receive a single parameter of the indicated name and perform some basic validations against the value. Each validation function should return true if all its checks pass, or false if any check fails.

function validateUserInfo (){
  function checkEmail(email){
    // email must be between 5 and 100 characters in length, and must contain exactly one "@" symbol
    if(email.match(/[a-z]+@[-z]+\.(com|net|org|edu)${5, 100}/)){
      return true;
    }
    return false;
    //return true if all its checks pass, or false if any check fails.
}

  function checkFullName(fullname){
    // fullname must be more than 3 characters
    if (fullname.length < 3){
      return false;
    }
    //return true if all its checks pass, or false if any check fails.
    return true;
  }

  function checkPhone(phone){
    // phone must be formatted as XXX-XXX-XXXX where X has to be a digit 0-9.
    if(phone.match(/\d+-\d+-\d+{12}/)){
      return true;
    }
    return false;
    //return true if all its checks pass, or false if any check fails.
  }

  return {
    email: checkEmail,
    fullname: checkFullName,
    phone: checkPhone
  };

}




