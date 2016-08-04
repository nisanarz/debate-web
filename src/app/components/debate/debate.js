import angular from 'angular';
import uiRouter from 'angular-ui-router';
import debateComponent from './debate.component';


let debateModule = angular.module('debate', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('debate', {
      component: 'debateComponent',
      url: '/debate',
      template: '<debate></debate>'
    });
})


.component('debate', debateComponent);

export default debateModule;