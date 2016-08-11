import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAria from 'angular-aria';
import firebase from 'angularfire';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import '../../node_modules/textangular/dist/textAngular-sanitize.min';
import 'angular-ui-bootstrap';

// firebase = require('../../node_modules/firebase/app');
//     require("../../node_modules/firebase/auth");
//     require("../../node_modules/firebase/database");



// const config = {
//     apiKey: "AIzaSyB_QbI3_9CWew8XMeHfu6CKXYG147w0L0s",
//     authDomain: "debatedb-16357.firebaseapp.com",
//     databaseURL: "https://debatedb-16357.firebaseio.com/",
// };
// mainApp = firebase.initializeApp(config);


angular.module('app', [
    uiRouter,
    ngAnimate,
    ngMaterial,
    ngMessages,
    ngAria,
    firebase,
    Common.name,
    Components.name, 
    require('textAngular'),
    'ui.bootstrap'
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