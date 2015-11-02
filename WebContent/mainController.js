var myApp = angular.module('I-Sign',[]);

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    var me = $scope;
    var videoFilesPath = "data/";

    $scope.init = function(){
        me.player = new sl.video();
        me.getData();
    };

    $("#search").bind( "keyup", function(event, ui) {
        if($scope.query){
            $scope.data.currentWords = me.data.words;
            $scope.unhideCategories();
            $scope.unhideWords();
        }
        else{
            $scope.hideWords()
        }
    });

    $scope.showWords = function (category) {
        var me = this;
        $scope.moveToWords();
        me.data.header = category.name;
        me.data.currentWords = [];
        me.data.words.forEach(function(word) {
            if(word.categoryId === category.id)
            {
                me.data.currentWords.push(word);
            }
        });

    };

    $scope.back = function(){
        $scope.moveToCategories();
    }

    $scope.moveToWords = function (){
        $scope.hideCategories();
        $scope.unhideWords();
        $scope.unhideBackButton();
        $scope.hideMovie();
        $scope.unhideSearch();

    };

    $scope.showCategories= function(){
        me.data.header ="קטגוריות";
        $scope.moveToCategories();
    };

    $scope.moveToCategories = function () {
        $scope.unhideCategories();
        $scope.hideWords();
        $scope.hideBackButton();
        $scope.hideMovie();
        $scope.unhideSearch();
    };

    $scope.playMovie = function (word) {
        $scope.moveToMovie();
        me.data.header = word.name;
        me.data.currentWord = word;
        me.player.show(videoFilesPath + word.video);
    };

    $scope.moveToMovie = function (){
        $scope.hideCategories();
        $scope.hideWords();
        $scope.unhideBackButton();
        $scope.unhideMovie();
        $scope.hideSearch();
    }

    $scope.hideBackButton = function(){
        $("#backBtn").addClass("ng-hide");
    };

    $scope.unhideBackButton = function(){
        $("#backBtn").removeClass("ng-hide");
    };

    $scope.hideCategories = function () {
        $("#categories").addClass("ng-hide");
    };
    $scope.unhideCategories = function () {
        $("#categories").removeClass("ng-hide");
    };
    $scope.hideWords = function () {
        $("#words").addClass("ng-hide");
    };
    $scope.unhideWords = function () {
        $("#words").removeClass("ng-hide");
    };
    $scope.hideMovie = function () {
        $("#jp_container_1").addClass("ng-hide");
    };
    $scope.unhideMovie = function () {
        $("#jp_container_1").removeClass("ng-hide");
    };

    $scope.hideSearch = function () {
        $("#searchDiv").addClass("ng-hide");
    };
    $scope.unhideSearch = function () {
        $("#searchDiv").removeClass("ng-hide");
    };

    $scope.getData = function () {
        $http.get('data/database.json',
            {header : {'Content-Type' : 'application/json; charset=UTF-8'}}
        ).success(function(response)
            {
                $scope.data = response;
                $scope.data.currentWords = [];
                $scope.data.header ="קטגוריות";
                $scope.ajaxdone = true;
            });
    };

}]);

