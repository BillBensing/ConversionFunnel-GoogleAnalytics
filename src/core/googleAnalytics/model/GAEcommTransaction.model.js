module.exports = function (ngModule) {      
    ngModule.factory('GAEcommTransaction', [function () {
        var GAEcommTransaction = function(id, affiliation, revenue, shipping, tax){
            this.id = id; 
            this.affiliation = affiliation;
            this.revenue = revenue.toString();
            this.shipping = shipping.toString();
            this.tax = tax.toString();
        }
        return GAEcommTransaction;
    }]);
};