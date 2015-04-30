githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=f44ddb06692b6fab2bf2d1ef692c0da31c1faad2';
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
