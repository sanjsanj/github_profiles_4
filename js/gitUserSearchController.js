githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.doSearch = function (){
    console.log(searchResource);
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);
