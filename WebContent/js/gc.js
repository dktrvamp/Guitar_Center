var myApp = angular.module('myApp',['ngRoute','ui.bootstrap']);
myApp.controller('homeCtrl',function($scope,$location,$http,shareService){
	$http({
		url:"json/guitardata.json",
		method: "GET"	
	}).success(function(resp){       
		$scope.product = resp; //this will get the data out of the json file
	
	});					
	// way is parameter to go to the next page
	// slide is an array element that grabs a hold of the info of the selected product(guitar)
	$scope.change = function(way,slide){
		$location.path(way);
		console.log(shareService.setResults($scope.product[$scope.product.indexOf(slide)]));
	alert("hello");
	};
	
});
myApp.controller('orderCtrl',function($scope,$location,shareService){
	$scope.show = [];
	$scope.show = shareService.getResults();
	console.log($scope.show);
});
myApp.controller('confCtrl',function($scope,$location){
	

});

//transfer data from one page to another

myApp.service('shareService',function(){
    var results = [];
    function setResults(value){
    	results = value;
    }
    function getResults(){
    	return results;
    }
    return{
    	setResults: setResults,
    	getResults: getResults
    };
});	

/*// router

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'temp/home.html',
		controller: 'homeCtrl'
	})
	.when('/order', {
		templateUrl: 'temp/order.html',
		controller: 'orderCtrl'
	})
	.when('/confirmation', {
		templateUrl: 'temp/confirmation.html',
		controller: 'confCtrl'
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
function CarouselDemoCtrl($scope, $http){
	$http({
		url:"json/guitardata.json",
		method: "GET"	
	}).success(function(resp){
		$scope.product = resp;
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
	};*/
	

