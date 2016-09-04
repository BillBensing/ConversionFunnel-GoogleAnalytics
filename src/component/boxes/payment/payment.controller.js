module.exports = function (ngModule) {
    ngModule.controller('BoxesPaymentController', ['$scope', '$state', 'GoogleAnalyticsEcommerce', 'Order', function ($scope, $state, GoogleAnalyticsEcommerce, Order) {
        var vm = $scope;
        vm.order = Order;

        var Ecommerece = new GoogleAnalyticsEcommerce();

        vm.ProcessPayment = function () {
            Ecommerece.NewTransaction(Order.total, Order.delivery, 0);
            addSmallBox(Order);
            addMediumBox(Order);
            addLargeBox(Order);
            Ecommerece.SendTransaction();
            ProcessPayment($state);
        };

        function addSmallBox(order) {
            if (order.small.qty > 0) {
                //name, sku, category, price, qty
                Ecommerece.AddItem("Small Box", "SmBx", "WebSite", order.small.price, order.small.qty);
            }
        };
        function addMediumBox(order) {
            if (order.medium.qty > 0) {
                //name, sku, category, price, qty
                Ecommerece.AddItem("Medium Box", "MdBx", "WebSite", order.medium.price, order.medium.qty);
            }
        };
        function addLargeBox(order) {
            if (order.large.qty > 0) {
                //name, sku, category, price, qty
                Ecommerece.AddItem("Large Box", "LgBx", "WebSite", order.large.price, order.large.qty);
            }
        };
    }]);

    function ProcessPayment(state) {
        state.go('boxes.confirmation');
    };
};