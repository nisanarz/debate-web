import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAria from 'angular-aria';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';


angular.module('app', [
    uiRouter,
    ngAnimate,
    ngMaterial,
    ngMessages,
    ngAria,
    Common.name,
    Components.name
])
.config(($stateProvider, $urlRouterProvider) => {
 $stateProvider
    .state('first', {
      component: 'homeComponent',
      url: '/',
      template: '<home></home>'
    })
})
.component('app', AppComponent);


class Log {
    constructor(){
        console.log("Hey Hey!");
    }
}

new Log();