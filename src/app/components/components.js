import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Submit from './submitnewdebate/submitnewdebate';
import Registration from './registration/registration';
import Debate from './debate/debate';
import Debateslist from './debateslist/debateslist';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Submit.name,
  Registration.name,
  Debate.name,
  Debateslist.name
]);

export default componentModule;