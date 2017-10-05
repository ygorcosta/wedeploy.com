import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './PlugNPlay.soy.js';
import {highlightAllCodeElementsInDoc} from '../utils/highlight.js';
import {isServerSide} from 'metal';

const phrase = {
  console: 'Install service from our web-based console with one click.',
  source: 'Or deploy a wedeploy.json file with just few lines of code.',
};

export default class PlugNPlay extends Component {
  attached() {
    if (isServerSide()) {
      return;
    }
    this.on('rendered', () => highlightAllCodeElementsInDoc());
  }

  showConsole() {
    this.selected = 'console';
    this.phrase = phrase.console;
  }

  showSource() {
    this.selected = 'source';
    this.phrase = phrase.source;
  }
}

PlugNPlay.STATE = {
  selected: {
    value: 'console',
  },
  phrase: {
    value: phrase.console,
  },
};

Soy.register(PlugNPlay, templates);
