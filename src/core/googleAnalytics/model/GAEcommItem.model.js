module.exports = function (ngModule) {      
    ngModule.factory('GAEcommItem', [function () {
        var GAEcommItem = function(transId, name, sku, category, price, qty){
            this.id = transId; 
            this.name = name;
            this.sku = sku;
            this.category = category;
            this.price = price;
            this.qty = qty;
        };
        return GAEcommItem;
    }]);
};