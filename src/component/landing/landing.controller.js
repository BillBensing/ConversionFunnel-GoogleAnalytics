module.exports = function (ngModule) {
    ngModule.controller('LandingController', ['$scope', '$state', 'Order', function ($scope, $state, Order) {
        var vm = $scope;

        vm.Next = function () {
            Order.email = vm.email;
            Order.zip = vm.zip;
            SelectBoxes($state);
        };

    }]);

    function SelectBoxes(state) {
        state.go('boxes.selection');
    };
};