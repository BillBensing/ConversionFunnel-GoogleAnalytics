module.exports = function(ngModule){
    require('./new-account.controller.js')(ngModule);
    require('./confirmation/index.js')(ngModule);
};