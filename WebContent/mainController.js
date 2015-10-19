var myApp = angular.module('I-Sign',[]);

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    var me = $scope;

    $scope.init = function(){
        me.data = {};


        me.getData();
        me.data.currentWords = [];

        return me.data;

    }
    $scope.$watchCollection(function () {
        return me.categories;
    }, function () {
        console.log("Changed");
    });



     $scope.add = function () {
        var me = this;

        var contact = {
            id: -1,
            name: me.newContactName
        };

        me.contacts.push(contact);
    }

    $scope.showCategories = function(){
        var me = this;

        $("#words").addClass("ng-hide");
        $("#categories").removeClass("ng-hide");
        $("#upBtn").addClass("ng-hide");

    }

    $scope.showWords = function (category) {
        var me = this;

        me.data.currentWords = [];
        $("#categories").addClass("ng-hide");
        $("#words").removeClass("ng-hide");
        $("#upBtn").removeClass("ng-hide");
        me.data.words.forEach(function(word) {
            if(word.categoryId === category.id)
            {
                me.data.currentWords.push(word);
            }
        });

    }

    $scope.getData = function () {
        var that = this;
        $http.get('data/database.json')
            .success(function(response)
            {
                $scope.data = response;
            });
    };

}]);

