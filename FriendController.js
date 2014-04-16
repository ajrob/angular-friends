
app.controller('friendController', function($scope, $http){
	$scope.test = "Hello World";
	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json").
		success(function(jsonData){
			$scope.friends = jsonData.results;
		});
});



