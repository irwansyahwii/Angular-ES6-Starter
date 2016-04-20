import angular from 'angular';
import Firebase from 'firebase';

import  'angular-route';

var phonecatApp = angular.module('MilesEvent', ['ngRoute']);

phonecatApp.config(['$routeProvider', ($routeProvider) =>{
	$routeProvider
		.when('/login', {
			templateUrl: '/partials/login.html',
			controller: 'LoginController'
		})
		.when('/buy-tickets', {
			templateUrl: '/partials/buy-tickets.html',
			controller: "BuyTicketsController"
		})
		.otherwise({
			redirectTo: '/login'
		})	
}])

phonecatApp.controller('LoginController',  ($scope, $location) => {

	$scope.firebaseRef = new Firebase('https://brilliant-heat-6714.firebaseio.com')

	$scope.facebookLogin = () =>{

		$scope.firebaseRef.authWithOAuthPopup("facebook", (error, authData)=>{
			if(error){
				console.log("Facebook login failed", error)
			}
			else{
				$location.path('/buy-tickets')
			}
		})
	}
});

phonecatApp.controller('BuyTicketsController',  ($scope) => {
	$scope.buyTicket = (ticketId) =>{
		switch(ticketId){
			case 1: 
				console.log("Ticket1 ")
				break;
			case 2: 
				console.log("Ticket2 ")
				break;
		}
	}
});