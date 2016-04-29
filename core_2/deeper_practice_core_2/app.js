
(function Server(){

  function makeAjaxCall(object){
    //To keep things simpler, let's just pretend that
    //an actual Ajax call is made here. So instead,
    //this function should only call displayMessage(..)
    //with a generic success message.

    registerUsers.displayMessage("You are a wonderful human being, worthy of love.");


}

  var publicAPI = {
    makeAjaxCall: makeAjaxCall

  };

  return publicAPI;


})();




(function registerUsers(){

  function init(){
    registerUsers.submitRegistration();
  }

  function submitRegistration(){
  //this function pulls out values from the DOM elements

  var userEmail, userFullName, userPhone;

  $("input#submit").on("click", function(){
    userEmail = $("#email").val();
    console.log(userEmail);
    $("#email").val('');
    userFullName = $("#fullname").val();
    $("#fullname").val('');
    userPhone = $("#phone").val();
    $("#phone").val('');

  });

  //It should check to see if these values are valid

  if(userEmail) {
    var isValidEmail = registerUsers.processEmail(userEmail);}
  if(userFullName){
    var isValidName = registerUsers.processFullName(userFullName);}
  if(userPhone){
    var isValidPhone = registerUsers.processPhone(userPhone);
  }

  //, and if so, add each of the values as properties
  // (of the same name) to an object
  //and pass that object
  // to a function called makeAjaxCall(..).
  //However, if any validation fails, an error message
  //should be passed to displayMessage(..).

  var callObject = {};

  if(isValidPhone && isValidName && isValidEmail){
    callObject.email = userEmail;
    callObject.fullname = userFullName;
    callObject.phone = userPhone;

    Server.makeAjaxCall(callObject);
    console.log(callObject);

  } else {
    registerUsers.displayMessage("VALIDATION FAILED!!!");
  }



}
  function processEmail(address){
    //must be between 5 and 100 characters in length,
    // and must contain exactly one "@" symbol

    var pattern = /\w+@\w+.(com|net|org|edu){5,100}/gi;

    if (address.match(pattern)){
      return true
    } else {
      return false;
    }

  }

  function processFullName(name){
    // must be more than 3 characters
    if (name.length < 3){
      return false;
    }
    return true;

  }

  function processPhone(number){
    //must be formatted as XXX-XXX-XXXX where X has to be a digit 0-9.
    var pattern = /\w{3}-\w{3}-\w{4}/gi;

    if (number.match(pattern)){
      return true
    } else {
      return false;
    }

  }

  function displayMessage(message){
    //sets its value into the #message DOM element
    $("#message").append(message);


  }

  var publicAPI = {
    init: init,
    submitRegistration: submitRegistration,
    processEmail: processEmail,
    processPhone: processPhone,
    displayMessage: displayMessage

  };

  return publicAPI;


  }


  )();

  $(document).ready(registerUsers.init());
  console.log("ready");


