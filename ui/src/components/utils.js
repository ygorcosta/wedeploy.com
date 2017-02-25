export function dispatchGlobalState() {
	if (window.electricPageComponent) {
		window.electricPageComponent.setState({
			element: '#pageComponent',
			page: data.page,
			site: data.site
		});
	}
}