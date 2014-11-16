/**
 * @ngdoc module
 * @name ot.components.map
 * @description Map module
 */
angular.module('ot.components.map', [
])
  .directive('otMap', [
    OtMapDirective
  ]);

/**
 * @ngdoc directive
 * @name otMap
 * @module ot.components.map
 * @restrict E
 *
 * @description
 *
 * @param {otLocation} location Central position.
 *
 * @usage
 * <hljs lang="html">
 * <ot-map location="otLocation"></ot-map>
 * </hljs>
 *
 */
  
function OtMapDirective() {
  return {
    restrict: 'E',
    templateUrl: 'partials/cmp/map/otMap.html'
  };
}


