import {isServerSide} from 'metal';

export function dispatchGlobalState() {
	if (isServerSide()) {
		return;
	}

	if (window.electricPageComponent) {
		try {
			window.electricPageComponent.setState({
				element: '#pageComponent',
				page: page,
				site: data.site
			});
		} catch(error){}
	}
}
