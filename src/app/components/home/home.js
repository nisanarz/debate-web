import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';


let homeModule = angular.module('home', [
  uiRouter
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