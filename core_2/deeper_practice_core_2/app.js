
(function(){

  function makeAjaxCall(){

}

  var publicAPI = {
    makeAjaxCall: makeAjaxCall

  };

  return publicAPI;


})();




(function registerUsers(){

  function submitRegistration(){
  //this function pulls out values from the DOM elements
  //It should check to see if these values are valid
  //, and if so, add each of the values as properties
  // (of the same name) to an object and pass that object
  // to a function called makeAjaxCall(..).
  //However, if any validation fails, an error message
  //should be passed to displayMessage(..).
}
  function processEmail(){
    //must be between 5 and 100 characters in length,
    // and must contain exactly one "@" symbol

  }

  function processFullName(){
    // must be more than 3 characters

  }

  function processPhone(){
    //must be formatted as XXX-XXX-XXXX where X has to be a digit 0-9.

  }

  function displayMessage(){
    //sets its value into the #message DOM element

  }


  }

  var publicAPI = {
    submitRegistration: submitRegistration,
    processEmail: processEmail,
    processPhone: processPhone,
    displayMessage: displayMessage

  };

  return publicAPI;





  )();


