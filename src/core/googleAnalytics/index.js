module.exports = function(ngModule){
    require('./GoogleAnalytics.service.js')(ngModule);
    
    // Register Models
    require('./model/GAEcommItem.model.js')(ngModule);
    require('./model/GAEcommTransaction.model.js')(ngModule);
    
};