import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import ngMaterial from 'angular-material';
import firebase from 'angularfire';


let homeModule = angular.module('home', [
  uiRouter, ngMaterial, firebase
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      component: 'homeComponent',
      url: '/home',
      template: '<home></home>'
    });
})


.component('home', homeComponent);

export default homeModule;