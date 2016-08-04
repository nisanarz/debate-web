import angular from 'angular';
import uiRouter from 'angular-ui-router';
import debateslistComponent from './debateslist.component';


let debateslistModule = angular.module('debateslist', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('debateslist', {
      component: 'debateslistComponent',
      url: '/debateslist',
      template: '<debateslist></debateslist>'
    });
})


.component('debateslist', debateslistComponent);

export default debateslistModule;