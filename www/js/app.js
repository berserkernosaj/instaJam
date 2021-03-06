// Ionic instajam App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'instajam' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'instajam.services' is found in services.js
// 'instajam.controllers' is found in controllers.js
var socket = io();

angular.module('instajam', ['ionic', 'instajam.controllers', 'youtube-embed', 'instajam.services', 'satellizer', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.frFeed', {
    url: '/Feed',
    views: {
      'tab-frFeed': {
        templateUrl: 'templates/tab-frFeed.html',
        controller: 'frFeedCtrl'
      }
    }
  })
  .state('tab.search', {
      url: '/search',
      views:{
          'tab-search':{
          templateUrl: 'templates/search.html',
          controller:'searchCtrl'
              }
    }

    })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'frUserProfileCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'chatCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'messageCtrl',
          resolve: {
               currentUser: function(userService) {
                  return userService.getCurrentUser().then(function(response) {
                      return response.data
                  })
              },
              chatDetail: function(messageSrvc, $stateParams) {
                  return messageSrvc.getChatDetailResolve($stateParams).then(function(data) {
                      return data.data
                    })
              }
          },
        }
      }
    })
    .state('edit', {
      url: '/edit',
        templateUrl: 'templates/tab-edit.html',
        controller: 'frUserProfileCtrl'


    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'frRecordCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'frLoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/newUserLogin.html',
    controller: 'frLoginCtrl'
})
  .state('user-profile', {
    url: '/user/:id',
        templateUrl: 'templates/user-profile.html',
        controller: 'instaUserCtrl',
        resolve: {
             instaUser: function(userService, $stateParams){
               return userService.getUserProfile($stateParams)
               .then(function(response){
                 console.log("RESPONSE HITTING: " + response);
                 return response.data;
               })
             }
            }
    })
  // .state('map', {
  //   url: '/map',
  //   templateUrl: 'templates/map.html',
  //   controller: 'mapCtrl',
  // })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
