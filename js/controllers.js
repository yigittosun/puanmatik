angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {

$scope.mat=0;
$scope.tur=0;
$scope.ink=0;
$scope.din=0;
$scope.ing=0;
$scope.fen=0;
$scope.sonuc=0;

$scope.hesapla=function(mat,tur,sos,fen,ink,din,ing){

  $scope.sonuc=104+mat*5.3+fen*5.3+ink*2.6+din*2.6+ing*2.6+tur*5.3;
  console.log(mat);
  console.log(tur);
  console.log(ink);
  console.log(din);
  console.log(ing);
  console.log(fen);

};
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
