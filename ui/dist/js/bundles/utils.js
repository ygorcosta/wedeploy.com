var pageComponent =
webpackJsonppageComponent([199],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dispatchGlobalState = dispatchGlobalState;
function dispatchGlobalState() {
	if (window.electricPageComponent) {
		window.electricPageComponent.setState({
			element: '#pageComponent',
			page: page,
			site: data.site
		});
	}
}

/***/ })

},[32]);