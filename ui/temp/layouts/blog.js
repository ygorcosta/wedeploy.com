'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './blog.soy';

class blog extends Component {
};

Soy.register(blog, templates);

export default blog;