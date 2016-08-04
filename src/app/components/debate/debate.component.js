import template from './debate.html';
import controller from './debate.controller';
import './debate.less';

let debateComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default debateComponent;