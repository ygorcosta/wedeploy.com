'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './docs.soy';

class docs extends Component {
};

Soy.register(docs, templates);

export default docs;