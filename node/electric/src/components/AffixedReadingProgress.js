'use strict';

import {core, isServerSide} from 'metal';
import Component from 'metal-component';
import ElectricReadingProgress from 'electric-base-components';
import position from 'metal-position';
import Soy from 'metal-soy';

import templates from './AffixedReadingProgress.soy.js';

class AffixedReadingProgress extends ElectricReadingProgress {
  rendered() {
    if (isServerSide()) {
      return;
    }

    var docsNav = document.querySelector('.docs-nav');
    var docsNavContainer = docsNav.parentNode;
    var parentWidth = position.getWidth(docsNavContainer);
    docsNav.style.width = parentWidth + 'px';
  }
};

Soy.register(AffixedReadingProgress, templates);

export default AffixedReadingProgress;
