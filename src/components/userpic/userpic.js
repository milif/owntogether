/**
 * @ngdoc module
 * @name ot.components.userpic
 * @description Userpic module
 */
angular.module('ot.components.userpic', [
])
	.directive('otUserpic', [
		OtUserpicDirective
	]);

/**
 * @ngdoc directive
 * @name otUserpic
 * @module ot.components.userpic
 * @restrict E
 *
 * @description
 *
 * @param {otLocation} location Central position.
 *
 * @usage
 * <hljs lang="html">
 * <ot-userpic location="otLocation"></ot-userpic>
 * </hljs>
 *
 */

function OtUserpicDirective() {
	return {
		restrict: 'E',
		templateUrl: 'partials/cmp/userpic/otUserpic.html',
		replace: true
	};
}


