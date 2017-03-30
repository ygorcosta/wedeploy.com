'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import {addClasses,hasClass} from 'metal-dom';
import {dispatchGlobalState} from './utils';
import 'moment';

import templates from './TutorialSidebar.soy';

class TutorialSidebar extends Component {

	syncPage(val) {
		this.navigationToggler = page.navigationToggler;
	}

	rendered(firstRender) {

		if(!firstRender) {
			this.calculateTimeRemaining();
		}
	}

	calculateTimeRemaining() {
		var timeRead = 0;
		var totalTime = 0;
		var indexSelected = -1;

		var sidebarLinks = document.querySelectorAll('.sidebar-link');

		sidebarLinks.forEach((item, i) => {
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

		var milliseconds = (totalTime - timeRead);
		var eventDuration = moment.duration(milliseconds, 'seconds');
		page.timeRemaining = this.humanizeDuration(eventDuration);
		dispatchGlobalState();
	}

	closeNavigationMenu(e) {
		page.navigationToggler = false;
		dispatchGlobalState();
	}

	humanizeDuration(eventDuration) {
		eventDurationString = '';

		if (eventDuration.days() > 0) {
			eventDurationString += ' ' + moment.duration(eventDuration.days(), 'days').asDays() + 'd';
		}

		if (eventDuration.hours() > 0) {
			eventDurationString += ' ' + moment.duration(eventDuration.hours(), 'hours').asHours() + ' h';
		}

		if (eventDuration.minutes() > 0) {
			eventDurationString += ' ' + moment.duration(eventDuration.minutes(), 'minutes').asMinutes() + ' min';
		}

		if (eventDuration.seconds() > 0) {
			eventDurationString += ' ' + moment.duration(eventDuration.seconds(), 'seconds').asSeconds() + ' sec';
		}

		return eventDurationString.trim();
	}

};

TutorialSidebar.STATE = {
	navigationToggler: {
		internal: true,
		value: false
	}
}

Soy.register(TutorialSidebar, templates);

export default TutorialSidebar;
