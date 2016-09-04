module.exports = function (ngModule) {
    ngModule.controller('BoxesConfirmationController', ['$scope', '$state', 'Order', function ($scope, $state, Order) {
        var vm = $scope;
        vm.order = Order;
    }]);
};