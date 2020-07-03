var sampleApp = angular.module('sampleApp', ['ui.bootstrap']).filter('startFrom', function () {
  return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    } 
	 
});
sampleApp.controller('sampleController', function ($scope, $http, $window) {
			 
	//-----------Check User Credentials --------------------------
	    $scope.defpricetab = function() { 
			$scope.qty=0;
			$scope.price=0;
			$scope.nowprice=0;
			$scope.disc=43;	
			$scope.discountamt=0;
			
			if($scope.qty == 0){
				$scope.price=0;
			}else if($scope.qty >= 1 && $scope.qty <= 10) { 
				 $scope.price= 89.99; 
			 }else if($scope.qty >=11 && $scope.qty<= 20) {				 
				 $scope.price=65.99;	 			 
			 }else if($scope.qty > 20) {
				 $scope.price=50.98; ;
			 }			
 				
		};  
		
		$scope.getdiscount = function(qty) { 
		$scope.discountamt=0;
		$scope.discountamt=$scope.discountamt+($scope.disc*qty)/100;
		$scope.nowprice=$scope.price-$scope.discountamt;
		}
		
		$scope.calcprice = function(qty) {  
			$scope.qty=parseInt(qty);
			if($scope.qty >= 1 && $scope.qty <= 10) { 
				 $scope.price= 89.99;
			 }			
			 if($scope.qty >=11 && $scope.qty <= 20) {				 
				 $scope.price=65.99;	
					$scope.getdiscount($scope.qty);				 
			 }			 
			 if($scope.qty > 20) {
				 $scope.price=50.98;
				 $scope.getdiscount($scope.qty);
			 }
			 console.log($scope.price);
		};  
		
		
		
		 
		 
  });