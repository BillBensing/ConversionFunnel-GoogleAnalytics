module.exports = function(ngModule){
    require('./core.config.js')(ngModule);
    
    // Register SubModules
    require('./order/Order.service.js')(ngModule);
    require('./googleAnalytics/index.js')(ngModule);

    // Style Sheet registration
    require('./css/style.css');

    /* Custom Component Registration */

    // Material Select
    require('./js/MaterialSelect.js');
    require('./css/MaterialSelect.css');
    
};