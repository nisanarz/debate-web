import template from './debateslist.html';
import controller from './debateslist.controller';
import './debateslist.less';

let debateslistComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default debateslistComponent;