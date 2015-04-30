githubUserSearch.controller('GitUserSearchController', ['Search', 'Search2', function(Search, Search2) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
    Search2.query(self.searchTerm)
      .then(function(response2) {
        self.userUrl = response2.data;
        console.log(self.userUrl.followers);
      })
  };

}]);
