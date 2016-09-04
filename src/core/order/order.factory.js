module.exports = function (ngModule) {      
    ngModule.factory('Order', [function () {

        var _zip = "";
        var _email = "";
        var _sm = { qty: 0, price: 5, subtotal: 0};
        var _md = { qty: 0, price: 7, subtotal: 0 };
        var _lg = { qty: 0, price: 10, subtotal: 0  };
        var _dlvry = { qty: 1, price: 5, subtotal: 5  };
        var _total = 0;

        // Calculate Total on instantiation
        CalculateOrderTotal();

        function CalculateOrderTotal(){
            _sm.subtotal = _sm.qty * _sm.price;
            _md.subtotal = _md.qty * _md.price;
            _lg.subtotal = _lg.qty * _lg.price;
            _total = _sm.subtotal + _md.subtotal + _lg.subtotal + _dlvry.subtotal;
            console.log("Total Should Be: " + _total);
        };

        return {
            zip: _zip,
            email: _email,
            small: _sm,
            medium: _md,
            large: _lg,
            delivery:  _dlvry,
            total: _total,
            calculate: CalculateOrderTotal
        };
    }]);
};