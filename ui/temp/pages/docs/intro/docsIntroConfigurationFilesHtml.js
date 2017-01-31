'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './configuration-files.soy';

class docsIntroConfigurationFilesHtml extends Component {
};

Soy.register(docsIntroConfigurationFilesHtml, templates);

export default docsIntroConfigurationFilesHtml;