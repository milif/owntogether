/**
 * @ngdoc module
 * @name ot.components.tags
 * @description Tags module
 */
angular.module('ot.components.tags', [
])
  .directive('otTags', [
    OtTagsDirective
  ]);

/**
 * @ngdoc directive
 * @name otTags
 * @module ot.components.tags
 * @restrict E
 *
 * @description
 *
 * @param {otLocation} location Central position.
 *
 * @usage
 * <hljs lang="html">
 * <ot-tags></ot-tags>
 * </hljs>
 *
 */
  
function OtTagsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'partials/cmp/tags/otTags.html'
  };
}


