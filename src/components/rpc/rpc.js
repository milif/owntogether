/**
 * @ngdoc module
 * @name ot.components.rpc
 */
angular.module('material.components.rpc', [
])
  .factory('$otRpc', [
    otRpc
  ]);

function otRpc() {
  return {
  };
}

/**
 * @ngdoc service
 * @name $otRpc
 * @module ot.components.rpc
 *
 * @description
 * Service for any kind or remote API.
 *
 * ### Restrictions
 *
 * - The dialog is always given an isolate scope.
 * - The dialog's template must have an outer `<md-dialog>` element.
 *   Inside, use an `<md-content>` element for the dialog's content, and use
 *   an element with class `md-actions` for the dialog's actions.  
 *
 * @usage
 * <hljs lang="html">
 *   $otRpc();
 * </hljs>
 *
 */

