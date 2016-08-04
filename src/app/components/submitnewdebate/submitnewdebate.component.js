import template from './submitnewdebate.html';
import controller from './submitnewdebate.controller';
import './submitnewdebate.less';

let submitComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default submitComponent;