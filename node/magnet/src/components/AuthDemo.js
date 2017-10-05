import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './AuthDemo.soy.js';
import {dom} from 'metal-dom';
import 'wicg-focus-ring';

export default class AuthDemo extends Component {
  showSnippet(event) {
    const button = event.delegateTarget;
    const container = dom.parent(button, '.view--authdemo');
    const panels = container.querySelectorAll('.panel-source--authdemo');
    const buttons = container.querySelectorAll('.menu-source--authdemo button');
    const panel = panels[Array.prototype.slice.call(buttons).indexOf(button)];
    dom.removeClasses(panels, 'is-active');
    dom.removeClasses(buttons, 'is-active');
    dom.addClasses(panel, 'is-active');
    dom.addClasses(button, 'is-active');
  }
}

Soy.register(AuthDemo, templates);
