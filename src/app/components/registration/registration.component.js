import template from './registration.html';
import controller from './registration.controller';
import './registration.less';

let registrationComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default registrationComponent;