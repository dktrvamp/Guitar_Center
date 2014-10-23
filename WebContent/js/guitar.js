var myApp = angular.module('myApp',['ngRoute','ui.bootstrap']);
myApp.service('theService',function(){ //service or factory is the same thing
	//return the object to be reused
	return{person:{fname:"George",lname:"Manhattan", //premade input placeholder
					Address:"12345 Test St. San Luis",
					zipcode:"23123",email:"muchodinero@tmt.com",
					state:"Ca", credit:"****-***-1994"
	
	}};
	});
myApp.controller('myCtrl', ['$scope','$http','$routeParams', 'theService',
		
		function($scope, $http, $routeParams,theService){
	/*this is the service.factory object*/	$scope.person=theService.person;	
			$scope.data_params = $routeParams.guitarID;
				$http.get('json/guitardata.json')
					.success(function(data){
						$scope.data = data;
							$scope.edit=true;
							$scope.inputfield=true;
							$scope.review_=false;
							$scope.edit=true;
							$scope.submit_hidden=true; 
							/*button review boolean*/
						$scope.review=function(){  
							$scope.review_=true;
							$scope.inputfield=false;
							$scope.edit=false;
							$scope.myForm=true;
							$scope.submit_hidden=false;
							$scope.edit=false;
							
						}//boolean on edit button
						$scope.edit_=function(){
							$scope.submit_hidden=true;
							$scope.review_=false;
							$scope.myForm=false;
							$scope.inputfield=true;
							$scope.review_=false;
							$scope.edit=true;
						}
						
					});
}])
						
							
// router
myApp.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'temp/home.html',
		controller: 'myCtrl'
	})
	.when('/order/:guitarID', {
		templateUrl: 'temp/order.html',
		controller: 'myCtrl'
	})
	.when('/confirmation/:guitarID', {
		templateUrl: 'temp/confirmation.html',
		controller: 'myCtrl'
	})
	.otherwise({ redirectTo: '/home' });

});

// button tabs with product info
myApp.controller('PanelCtrl', function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

//carousel containing images from the json file 
myApp.controller('CarouselDemoCtrl',function($scope, $http){
		$http({
			url:"json/guitardata.json",
			method:"GET",
			}).success(function(resp){
			$scope.data = resp;
			});  
	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length;
	    slides.push({
	      imageUrl: '/img/' + newWidth + '/300',
	     
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
	});

	