angular.directive('networking', function($http, $timeout) {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			function totalActiveAjaxRequests() {
				return $http.pendingRequests.length;
			}
			scope.$watch(totalActiveAjaxRequests, function(newVal, oldVal) {
				var set = (newVal === 0) ? 100 : 78 / newVal;
				element.width(set + '%');
				$timeout(function() {
					if (set === 100) {
						element.width(0);
					}
				}, 1000);
			});
		}
	};
})