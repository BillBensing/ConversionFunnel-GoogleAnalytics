module.exports = function (ngModule) {
    ngModule.controller('NewAccountConfirmationController', ['$scope', '$state', function ($scope, $state) {
        var vm = $scope;

        vm.title = "Created Successfully";

    }]);
};