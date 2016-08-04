import angular from 'angular';
import uiRouter from 'angular-ui-router';
import submitComponent from './submitnewdebate.component';


let submitModule = angular.module('submit', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('submit', {
      component: 'submitComponent',
      url: '/submit',
      template: '<submit></submit>'
    });
})


.component('submit', submitComponent);

export default submitModule;