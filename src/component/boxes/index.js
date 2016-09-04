module.exports = function(ngModule){
    require('./boxes.controller.js')(ngModule);

    // Register Sub Modules
    require('./selection/index.js')(ngModule);
    require('./payment/index.js')(ngModule);
    require('./confirmation/index.js')(ngModule);
};