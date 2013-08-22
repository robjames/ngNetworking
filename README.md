ngNetworking
============

This is an angular directive to indicate a loading/progress bar.

The directive simply sets the width of the element, based on how many outstanding $http pendingRequests there are.

The css (or your variation of) is the key to making this look and animate properly.

##Usage

Include the CSS

Include the directive

Add the html to your page:

	 <div id="networking" networking ></div>

Dont forget to inject the directive when you initilize your app

	angular.module('MyApp', ['ngRoute', 'ngResource', 'ngNetworking']) //for example