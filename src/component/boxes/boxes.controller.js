module.exports = function (ngModule) {
    ngModule.controller('BoxesController', ['$scope', '$state', 'Order', function ($scope, $state, Order) {
        var vm = $scope;
        vm.order = Order;
        vm.$state = $state;
    }]);
};