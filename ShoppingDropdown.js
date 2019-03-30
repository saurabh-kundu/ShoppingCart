var app=angular.module("myShoppingList", []);
		app.controller("myCtrl", ['$scope','$window', function($scope, $window){
			$scope.products=["Watch", "Bag", "Shoes"];
			$scope.editButtonClicked=false;
			var globalIndex="";
			$scope.addNew= function(){					
					if($scope.addMe != "" && $scope.addMe != null)
						$scope.products.push($scope.addMe);
					else
						$window.alert("Entering empty value..are you idiot ?");
					$scope.addMe="";
				}

			$scope.edit = function(index){
				$scope.editButtonClicked=true;
				globalIndex=index;
				$scope.addMe=$scope.products[index];

			}
			$scope.update = function(){
				$scope.products[globalIndex]=$scope.addMe;
				$scope.addMe="";
				$scope.editButtonClicked=false;
			}

			$scope.removeItem = function(index){
				$scope.products.splice(index, 1);
			}
		}]);