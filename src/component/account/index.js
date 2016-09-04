module.exports = function(ngModule){
    require('./account.controller.js')(ngModule);

    // Include SubModules
    require('./login/login.controller.js')(ngModule);
};