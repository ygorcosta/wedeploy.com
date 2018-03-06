'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './TutorialTopbar.soy.js';
import {dispatchGlobalState} from './utils';

class TutorialTopbar extends Component {
  openNavigationMenu(e) {
    e.preventDefault();

    electric.page.navigationToggler = true;
    dispatchGlobalState();
  }
};

Soy.register(TutorialTopbar, templates);

export default TutorialTopbar;
