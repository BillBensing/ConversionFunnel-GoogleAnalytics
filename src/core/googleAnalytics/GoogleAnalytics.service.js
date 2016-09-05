module.exports = function (ngModule) {
    ngModule.factory('GoogleAnalyticsEcommerce', ['GAEcommTransaction', 'GAEcommItem', '$window', function (Transaction, Item, $window) {

        var _ecommAddTrans = 'ecommerce:addTransaction';
        var _ecommAddItem = 'ecommerce:addItem';
        var _ecommSend = 'ecommerce:send';
        var _ecommClear = 'ecommerce:clear';
        var _transAffil = 'WePackIt Website';

        var GoogleAnalytics = function () {
            this.items = [];
            this.transaction = {};
            this.transId = guid();
        };

        GoogleAnalytics.prototype.NewTransaction = function (revenue, shipping, tax) {
            var trans = new Transaction(this.transId, _transAffil, revenue, shipping, tax);    
            this.transaction = trans;
        };

        GoogleAnalytics.prototype.AddItem = function (name, sku, category, price, qty) {
            var item = new Item(this.transaction.id, name, sku, category, price, qty);
            this.items.push(item);
            item = null;
        };

        GoogleAnalytics.prototype.SendTransaction = function(){
            MarshalTransaction(this.transaction);
            MarshalItems(this.items);
            ExecuteTransaction();
        };

        function MarshalTransaction(transaction){           
            $window.ga(_ecommAddTrans, JSON.stringify(transaction));
        };

        function MarshalItems(items){
            for(var i=0; i<items.length; i++){
                $window.ga(_ecommAddItem, JSON.stringify(items[i]));
            };
        };

        function ExecuteTransaction(){
            $window.ga(_ecommSend);
            $window.ga(_ecommClear);
        };
        return GoogleAnalytics;
    }]);

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
};