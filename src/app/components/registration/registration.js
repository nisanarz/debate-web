import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationComponent from './registration.component';


let registrationModule = angular.module('registration', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('registration', {
      component: 'registrationComponent',
      url: '/registration',
      template: '<registration></registration>'
    });
})


.component('registration', registrationComponent);

export default registrationModule;