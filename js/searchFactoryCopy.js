githubUserSearch.factory('Search2', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/users/';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl + searchTerm,
        method: 'GET',
        params: {}
      });
    }
  }
}]);
