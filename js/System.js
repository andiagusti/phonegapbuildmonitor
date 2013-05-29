"use strict";

var settingsController;
var userController;
var appController;
var appsView;
var chartView;
// Google Analytics
var gaPlugin;

function GAStartupSuccess() {
  googleAnalytics("startup");
}

// construct and execute a System setup class
(function System() {

  var onDeviceReady = function() {
    settingsController = new SettingsController();
    appsView = new AppsView();
    chartView = new ChartView();
    appController = new AppController();
    userController = new UserController();
    userController.init();
    document.addEventListener("menubutton", function(){$('#menu').collapse('toggle')}, false);
    if (window.plugins != undefined) {
      gaPlugin = window.plugins.gaPlugin;
      gaPlugin.init(GAStartupSuccess, emptyCallback, "UA-28850866-8", 5);
    }
    setTimeout(preventDim, 2000);
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

// stoopid test for screen dimming prevention
function preventDim() {
  $(document).trigger("menubutton");
  setTimeout(preventDim, 10000);
}