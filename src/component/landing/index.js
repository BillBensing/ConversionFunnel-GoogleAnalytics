module.exports = function(ngModule){
    require('./landing.controller.js')(ngModule);
    require('./content/index.js')(ngModule);
    require('./new-account/index.js')(ngModule);
};