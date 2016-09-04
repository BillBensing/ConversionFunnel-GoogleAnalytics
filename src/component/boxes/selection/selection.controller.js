module.exports = function (ngModule) {
    ngModule.controller('BoxesSelectionController', ['$scope', '$state', 'Order', function ($scope, $state, Order) {
        var vm = $scope;
        vm.order = Order;
        vm.PaymentInformation = function() {
            PaymentInformation($state);
        };

        vm.$watchGroup(['order.small.qty','order.medium.qty','order.large.qty'], function(newValues, oldValues, scope) {
            vm.order.calculate();
        });

    }]);

    function PaymentInformation(state) {
        state.go('boxes.payment');
    };
};