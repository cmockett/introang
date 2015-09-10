var app = angular.module("myApp", [])

// var mouseFunction = function($scope){
// 	$scope.hoverSelect = function(index){
// 		$scope.active = index;
// 	}
// 	$scope.hoverDeselect = function(index){
// 		$scope.active = "";
// 	}
// }

// var mouseFunction = function($scope){
// app.directive('hoverClass', function (){
// 	return {
// 		restrict: 'A',
// 		scope: {
// 			hoverClass: '@'
// 		},
// 		link: function (scope, element) {
// 			element.on('mouseenter', function() {
// 				element.addClass(scope.hoverClass);
// 			});
// 			element.on('mouseleave', function() {
// 				element.removeClass(scope.hoverClass);
// 			});
// 		}
// 	};
// });
// }

var mouseFunction = function(){
	
}


	


app.controller("appController", ["$scope", mouseFunction])