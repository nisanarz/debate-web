import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';


let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      component: 'aboutComponent',
      url: '/create_debate',
      template: '<about></about>'
    });
})


.component('about', aboutComponent);

export default aboutModule;