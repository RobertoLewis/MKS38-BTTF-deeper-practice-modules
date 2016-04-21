// Define one function each for processing the following string values. Each function should receive a single parameter of the indicated name and perform some basic validations against the value. Each validation function should return true if all its checks pass, or false if any check fails.

var validateUserInfo = (function (){
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

})();

var messageOutput = (function(){

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

})();


function submitRegistration(){


 //pulls out values from the DOM elements

  var newEmail = $("#email").val();
  var newName = $("#fullname").val();
  var newPhone = $("#phone").val();

  //check to see if these values are valid
  var userEmail = validateUserInfo.email(newEmail);
  var userName = validateUserInfo.fullname(newName);
  var userPhone = validateUserInfo.phone(newPhone);
  var userProfile = {};

  //if so, add each of the values as properties (of the same name) to an object and pass that object to makeAjaxCall(..)
  //if any validation fails, an error message should be passed to displayMessage(..).


  if(userEmail){
    userProfile.email = userEmail;
  } else {
    message.failure("ERROR! Invalid email!");
  }

  if(userName){
    userProfile.name = userName;
  } else {
    message.failure("ERROR! Invalid name!")
  }


  if(userPhone){
    userProfile.phone = userPhone;
  } else {
    message.failure("ERROR! Invalid phone number!")
  }

  if (Object.keys(userProfile).length === 3){
    message.success(userProfile);
  }


}















