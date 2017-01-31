'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './environment-variables.soy';

class docsIntroEnvironmentVariablesHtml extends Component {
};

Soy.register(docsIntroEnvironmentVariablesHtml, templates);

export default docsIntroEnvironmentVariablesHtml;