module.exports = function(ngModule){
    ngModule.controller('LandingContentController', ['$scope',function($scope) {
        var vm = $scope;
        vm.title = "Welcome";
        vm.description = "This is the Angular1 Webpack Starter Project.";
    }]);
};