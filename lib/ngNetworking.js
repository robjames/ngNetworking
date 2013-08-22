/*global angular */
angular.module('ngNetworking', [])
	.directive('networking', function($http, $timeout) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var bar = document.createElement('div');
				bar.className = 'networkingBar';
				element.append(bar);

				function totalActiveAjaxRequests() {
					return $http.pendingRequests.length;
				}
				scope.$watch(totalActiveAjaxRequests, function(newVal, oldVal) {
					var set = (newVal === 0) ? 100 : 78 / newVal;
					bar.style.width = set + '%';
					$timeout(function() {
						if (set === 100) {
							bar.style.width = 0;
						}
					}, 1000);
				});
			}
		};
	});