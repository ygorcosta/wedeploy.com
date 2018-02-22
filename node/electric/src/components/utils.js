import {isServerSide} from 'metal';

export function dispatchGlobalState() {
	if (isServerSide()) {
		return;
	}

	if (window.electricPageComponent) {
		try {
			window.electricPageComponent.setState({
				element: '#pageComponent',
				page: electric.page,
				site: electric.data.site
			});
		} catch(error){}
	}
}
