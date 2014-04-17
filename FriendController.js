
app.controller('friendController', function($scope, $http){
	$scope.test = "Hello World";
	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json").
		success(function(jsonData){
			$scope.friends = jsonData.results;
		});
	$scope.attributeSort = "name";
	$scope.alphabetizedSort = "false";
	$scope.attributes = [
		{label:'Name', value:'name'},
		{label:'# friends', value:'friend_count'},
		{label:'City',  value:'current_location.city'},
		{label:'State', value:'current_location.state'},
		{label:'Country', value:'current_location.country'}
	];
});


/*
var profilePicsDiv = document.getElementById('profile_pics');
FB.getLoginStatus(function(response) {
  if (response.status != 'connected') {
    profilePicsDiv.innerHTML = '<em>You are not connected</em>';
    return;
  }

  FB.api({ method: 'friends.get' }, function(result) {
    Log.info('friends.get response', result);
    var markup = '';
    var numFriends = result ? Math.min(5, result.length) : 0;
    if (numFriends > 0) {
      for (var i=0; i<numFriends; i++) {
        markup += (
          '<fb:profile-pic size="square" ' +
                          'uid="' + result[i] + '" ' +
                          'facebook-logo="true"' +
          '></fb:profile-pic>'
        );
      }
    }
    profilePicsDiv.innerHTML = markup;
    FB.XFBML.parse(profilePicsDiv);
  });
});
*/