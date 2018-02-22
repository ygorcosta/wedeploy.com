import {isServerSide} from 'metal';

export function dispatchGlobalState() {
  if (isServerSide()) {
    return;
  }

  if (window.electric.currentPageComponent) {
    try {
      window.electric.currentPageComponent.setState({
        element: '#pageComponent',
        page: electric.page,
        site: electric.data.site
      });
    } catch(error){}
  }
}
