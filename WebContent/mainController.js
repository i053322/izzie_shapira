var myApp = angular.module('I-Sign',[]);

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    var me = $scope;
    var videoFilesPath = "data/";

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

    $scope.showWords = function (category) {
        var me = this;

        me.data.currentWords = [];
        me.data.words.forEach(function(word) {
            if(word.categoryId === category.id)
            {
                me.data.currentWords.push(word);
            }
        });

    };

    $scope.getData = function () {
        var that = this;
        $http.get('data/database.json',
            {header : {'Content-Type' : 'application/json; charset=UTF-8'}}
        ).success(function(response)
        {
            $scope.data = response;
        });
    };

    $scope.playMovie = function (word) {
        var player = new sl.video();
        player.show(videoFilesPath + word.video);
    };

}]);

