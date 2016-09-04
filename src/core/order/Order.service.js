module.exports = function (ngModule) {      
    ngModule.service('Order', [function () {

        this.zip = "";
        this.email = "";
        this.small = { qty: 0, price: 5, subtotal: 0};
        this.medium = { qty: 0, price: 7, subtotal: 0 };
        this.large = { qty: 0, price: 10, subtotal: 0  };
        this.delivery = { qty: 1, price: 5, subtotal: 5  };
        this.total = 0;

        this.CalculateOrderTotal = function() {
            this.small.subtotal = this.small.qty * this.small.price;
            this.medium.subtotal = this.medium.qty * this.medium.price;
            this.large.subtotal = this.large.qty * this.large.price;
            this.total = this.small.subtotal + this.medium.subtotal + this.large.subtotal + this.delivery.subtotal;
        };
    }]);
};