module.exports = function (ngModule) {      
    ngModule.factory('GAEcommTransaction', [function () {
        var GAEcommTransaction = function(id, affiliation, revenue, shipping, tax){
            this.id = id; 
            this.affiliation = affiliation;
            this.revenue = revenue;
            this.shipping = shipping;
            this.tax = tax;
        }
        return GAEcommTransaction;
    }]);
};