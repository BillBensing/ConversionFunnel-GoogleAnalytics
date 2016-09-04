/*
    NOTE: Not importing AngularJS or anyother dependencies
    because they will be loaded at the index.html
 */
/* Import Angular and the angular app route configuration file */
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var app = angular.module("app", [uiRouter]);

app.run(function ($rootScope, $timeout) {
  $rootScope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      componentHandler.upgradeAllRegistered();
    });
  });
});

/*
    Import the apps dependencies such as controllers, directives, services and factories
    NOTE: You will need to pass in the a parameter of "app" (or whatever variable name you
          choose to name your angular module.  Additionaly, models are not imported unless
          you need inversion of control; it is assumed there may be more than one instance
          of a model within the applicaiton.
 */

/* Import and register angular module functions like config, run, etc... */
require('./component/index.js')(app);
require('./core/index.js')(app);
