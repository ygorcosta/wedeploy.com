'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import {addClasses,hasClass} from 'metal-dom';
import {dispatchGlobalState} from './utils';
import 'moment';

import templates from './TutorialSidebar.soy';

class TutorialSidebar extends Component {
	attached() {
		this.formatRelativeTime('custom');

		var timeRead = 0;
		var totalTime = 0;
		var indexSelected = -1;

		document.querySelectorAll('.sidebar-link').forEach((item, i) => {
			totalTime += parseInt(item.dataset.time);

			if (hasClass(item, 'sidebar-link-selected')) {
				indexSelected = i;
			}

			if (indexSelected === -1) {
				addClasses(item, 'sidebar-link-read');
				timeRead += parseInt(item.dataset.time);
				return;
			}
		});

		page.timeRemaining = moment.duration(((totalTime - timeRead) * 1000)).humanize();
		dispatchGlobalState();
	}

	closeNavigationMenu(e) {
		page.navigationToggler = false;
		dispatchGlobalState();
	}

	disposed() {
		this.formatRelativeTime('en');
	}

	formatRelativeTime(type) {
		if (type === 'custom') {
			moment.lang(type, {
				relativeTime: {
					future: '%s',
					past: '%s',
					s: '%d sec',
					ss: '%d sec',
					m: '1 min',
					mm: '%d min',
					h: '1 h',
					hh: '%d h',
					d: '1 d',
					dd: '%d d'
				}
			});
		} else {
			moment.lang(type);
		}
	}
};

Soy.register(TutorialSidebar, templates);

export default TutorialSidebar;
