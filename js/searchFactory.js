githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=964db965804892606dda6b14ac01d648ee4e446b';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    }
  }
}]);
