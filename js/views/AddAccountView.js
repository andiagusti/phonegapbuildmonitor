"use strict";

(function AddAccountView() {

  var init = function() {
    $(document).ready(function() {
      $("#signInButton").on("click", function() {
        var email = $("#addAccount_Email").val();
        var password = $("#addAccount_Password").val();
        var token = $("#addAccount_Token").val();
        userController.signIn(email, password, token);
        return false;
      })
    });
  };

  init();
})();