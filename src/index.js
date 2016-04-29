import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import Firebase from 'firebase';

import  'angular-route';
import 'angularfire';

var phonecatApp = angular.module('Duit', ['ngRoute', 'firebase', 'ngMaterial']);

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

phonecatApp.controller('LoginController',  ($scope, $location, $firebaseAuth) => {

	$scope.facebookLogin = () =>{

		let firebaseRef = new Firebase('https://brilliant-heat-6714.firebaseio.com')

		let auth = $firebaseAuth(firebaseRef)

		auth.$authWithOAuthPopup("facebook")
			.then((authData)=>{
				console.log('Facebook login success:', authData)
				$location.path('/buy-tickets')
			})
			.catch((error)=>{
				console.log("Facebook login failed", error)
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