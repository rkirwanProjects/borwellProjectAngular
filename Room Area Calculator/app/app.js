var calculatorApp = angular.module('calculatorApp', ['ngRoute']);

calculatorApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        }).otherwise({
          redirectTo: '/home'
        });

}]);

function numberOnly(evt, input){
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 46 || charCode == 47 || charCode > 57)){
    return false;
  }
  if (charCode == 46 && input.value.indexOf('.') >= 0){
    return false;
  }
  return true;
}

function setTwoNumberDecimal(input){
  var numbers = input.value.split('.');
  console.log("numbers.length = " + numbers.length);
  if (numbers.length > 1){
    var postDecimal = numbers[1];
    console.log("postDecimal.length = " + postDecimal.length);
    if (postDecimal.length > 1){
      console.log("return false");
      return false;
    }
  }
  return true;
}

function validateInput(evt, input){
  return (numberOnly(evt, input) && setTwoNumberDecimal(input));
}
