function HomeCtrl($scope) {
    var me = this;

    me.categories = [
        { id: 1, name: "Color" },
        { id: 2, name: "Food" },
        { id: 3, name: "Numbers" },
        { id: 4, name: "Letters" },
        { id: 5, name: "Fruits" },
        { id: 6, name: "Vegetables" },
    ];

    me.words = [
        { id: 1, name: "Red", categoryId: 1 },
        { id: 2, name: "Yellow", categoryId: 1 },
        { id: 3, name: "Purple", categoryId: 1 },
        { id: 4, name: "Blue", categoryId: 1 },
        { id: 5, name: "White", categoryId: 1 },

        { id: 6, name: "Pizza", categoryId: 2 },
        { id: 7, name: "Tooast", categoryId: 2 },
        { id: 8, name: "Candy", categoryId: 2 },
        { id: 9, name: "French Fries" , categoryId: 2},

    ];

    me.currentWords = [];

    $scope.$watchCollection(function () {
        return me.contacts;
    }, function () {
        console.log("Changed");
    });
}

HomeCtrl.prototype.add = function () {
    var me = this;

    var contact = {
        id: -1,
        name: me.newContactName
    };

    me.contacts.push(contact);
}

HomeCtrl.prototype.showCategories = function(){
    var me = this;

    $("#words").addClass("ng-hide");
    $("#categories").removeClass("ng-hide");
    $("#upBtn").assClass("ng-hide");

}

HomeCtrl.prototype.showWords = function (category) {
    var me = this;

    me.currentWords = [];
    $("#categories").addClass("ng-hide");
    $("#words").removeClass("ng-hide");
    $("#upBtn").removeClass("ng-hide");
    me.words.forEach(function(word) {
        if(word.categoryId === category.id)
        {
            me.currentWords.push(word);
        }
    });




}
