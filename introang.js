angular.module("button", [])


var buttonController = function ($scope){
	$scope.click = function(){
		console.log("You clicked me!");
	}
}
angular.module("button").controller("buttonController", ["$scope", buttonController])