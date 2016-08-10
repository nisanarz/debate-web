import template from './app.html';
import controller from './app.controller.js';
import './app.less';

let appComponent = {
  template,
  controller,
  restrict: 'E'
};

export default appComponent;