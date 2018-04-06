angular.module('shared.services.Utils', [])
  .factory('Utils', function Utils() {

    var service = {
      isNullOrUndefined: isNullOrUndefined,
      isUndefinedOrWhitespace: isUndefinedOrWhitespace,
      isNullOrWhitespace: isNullOrWhitespace,
      isNullOrUndefinedOrWhitespace: isNullorUndefinedOrWhitespace,
      isFilterData: isFilterData,
      isGenerateHexString: generateHexString
    };
    return service;

    function isNullOrUndefined(object) {
      return object === null || angular.isUndefined(object) ? true : false;
    }

    function isFilterData(data, filterBy) {
      var filterBy = filterBy;
      var result = data.filter(function(o) {
        return Object.keys(filterBy).every(function(k) {
          return filterBy[k].some(function(f) {
            return o[k] === f;
          });
        });
      });
      return result;
    }

    function generateHexString(length) {
      var ret = "";
      while (ret.length < length) {
        ret += Math.random().toString(16).substring(2);
      }
      return ret.substring(0, length);
    }

    function isUndefinedOrWhitespace(stringText) {
      return angular.isUndefined(stringText) || stringText.trim().length <= 0 ? true : false;
    }

    function isNullorUndefinedOrWhitespace(stringText) {
      if (stringText !== null) {
        return angular.isUndefined(stringText) || stringText.trim().length <= 0 ? true : false;
      } else {
        return true;
      }
    }

    function isNullOrWhitespace(stringText) {
      return stringText === null || stringText.trim().length <= 0 ? true : false;
    }
  });