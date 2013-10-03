'use strict';
var KittyKlickerKontroller = [ '$scope', function($scope) {
    $scope.data={};
    $scope.data.kittens=0;
    $scope.data.kittenImage='KittyNotClick.jpg';
    $scope.increaseKittens= function() {
        $scope.data.kittens+=1;
    } ;
    $scope.showClickedKitten= function() {
        $scope.data.kittenImage='KittyClick.jpg';
    };
    $scope.showUnclickedKitten= function() {
        $scope.data.kittenImage='KittyNotClick.jpg';
    };
} ];