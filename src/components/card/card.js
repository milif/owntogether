/**
 * @ngdoc module
 * @name ot.components.card
 * @description Card module
 */
angular.module('ot.components.card', [
])
  .directive('otCard', [
    OtCardDirective
  ]);

/**
 * @ngdoc directive
 * @name otCard
 * @module ot.components.card
 * @restrict E
 *
 * @description
 *
 * @param {otLocation} location Central position.
 *
 * @usage
 * <hljs lang="html">
 * <ot-card></ot-card>
 * </hljs>
 *
 */
  
function OtCardDirective() {
  return {
    restrict: 'E',
    templateUrl: 'partials/cmp/card/otCard.html'
  };
}


