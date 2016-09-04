module.exports = function (ngModule) {
    ngModule.controller('BoxesPaymentController', ['$scope', '$state', 'Order', function ($scope, $state, Order) {
        var vm = $scope;
        vm.order = Order;
        vm.ProcessPayment = function(){
            ProcessPayment($state);
        }
     }]);

    function ProcessPayment(state) {
        state.go('boxes.confirmation');
    };
};