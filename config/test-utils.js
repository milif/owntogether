var TestUtil = {
  /** 
   * Mocks angular.element#focus for the duration of the test
   * @example
   * it('some focus test', inject(function($document) {
   *   TestUtil.mockFocus(this); // 'this' is the test instance
   *   doSomething();
   *   expect($document.activeElement).toBe(someElement[0]);
   * }));
   */
  mockElementFocus: function(test) {
    var focus = angular.element.prototype.focus;
    inject(function($document) {
      angular.element.prototype.focus = function() {
        $document.activeElement = this[0];
      };
    });
    // Un-mock focus after the test is done
    test.after(function() {
      angular.element.prototype.focus = focus;
    });
  },

  /**
   * Create a fake version of $$rAF that does things asynchronously
   */
  mockRaf: function() {
    module('ng', function($provide) {
      $provide.value('$$rAF', mockRaf);

      function mockRaf(cb) {
        cb();
      }
      mockRaf.debounce = function(cb) {
        return function() {
          cb.apply(this, arguments);
        };
      };
    });
  }
};

beforeEach(function() {

  this.addMatchers({
    // toHaveClass matcher from angularjs test helpers
    toHaveClass: function(clazz) {
      this.message = function() {
        return "Expected '" + angular.mock.dump(this.actual) + 
          (this.isNot ? ' not' : '') + " to have class '" + clazz + "'.";
      };
      var classes = clazz.trim().split(/\s+/);
      for (var i=0; i<classes.length; ++i) {
        if (!angular.element(this.actual).hasClass(classes[i])) {
          return false;
        }
      }
      return true;
    }
  });

});
