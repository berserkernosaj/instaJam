angular.module('instajam').controller('frFeedCtrl', function($scope, Chats){
  $scope.test = "hey it works";
  var chats = [{
    id: 0,
    name: 'ben gay',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
},{
  id: 0,
  name: 'ben gay',
  lastText: 'You on your way?',
  face: 'img/ben.png'
}, {
  id: 1,
  name: 'Max Lynx',
  lastText: 'Hey, it\'s me',
  face: 'img/max.png'
}, {
  id: 2,
  name: 'Adam Bradleyson',
  lastText: 'I should buy a boat',
  face: 'img/adam.jpg'
}, {
  id: 3,
  name: 'Perry Governor',
  lastText: 'Look at my mukluks!',
  face: 'img/perry.png'
}, {
  id: 4,
  name: 'Mike Harrington',
  lastText: 'This is wicked good ice cream.',
  face: 'img/mike.png'
}];

  $scope.chats = chats;
})
