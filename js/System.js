"use strict";

var settingsController;
var userController;
var appController;
var appsView;

// construct and execute a System setup class
(function System() {

  var onDeviceReady = function() {
    settingsController = new SettingsController();
    appsView = new AppsView();
    appController = new AppController();
    userController = new UserController();
    userController.init();
  };

  var init = function() {
    $(document).ready(function() {
      if (isMobile()) {
        document.addEventListener('deviceready', onDeviceReady, false);
      } else {
        onDeviceReady();
      }
    });
  };

  init();
})();