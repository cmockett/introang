// angular.module("button", [])


// var buttonController = function ($scope){
// 	$scope.click = function(){
// 		console.log("You clicked me!");

// 	}

// }
// angular.module("button").controller("buttonController", ["$scope", buttonController])

angular.module("button", [])


var buttonController = function ($scope){
	$scope.click = function(){
		$scope.hidden = true;
	}
	$scope.click2 = function(){
		$scope.hidden2 = true;
}
	
	
}


angular.module("button").controller("buttonController", ["$scope", buttonController])