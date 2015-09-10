angular.module("myApp", [])

var buttonClick = function ($scope){
	// $scope.hiddenDiv=false;
	$scope.click = function (){
		$scope.hiddenDiv=true;
	}
	$scope.click2 = function (){
		$scope.hiddenDiv=false;
	}
}




angular.module("myApp").controller("myController", ["$scope", buttonClick])