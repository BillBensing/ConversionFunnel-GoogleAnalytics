module.exports = function(ngModule){
    require('./core.config.js')(ngModule);
    
    require('./order/order.factory.js')(ngModule);

    // Style Sheet registration
    require('./css/style.css');

    //Custom Component Registration

    // Material Select
    require('./js/MaterialSelect.js');
    require('./css/MaterialSelect.css');
    
};