var myApp = angular.module('myApp',['ngRoute','ui.bootstrap']);
myApp.controller('myCtrl', ['$scope','$http','$routeParams',
		
		function($scope, $http, $routeParams){
			$scope.data_params = $routeParams.guitarID;
				$http.get('json/guitardata.json')
					.success(function(data){
						$scope.data = data;
							
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
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
	});