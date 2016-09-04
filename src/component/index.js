module.exports = function(ngModule){
    require('./landing/index.js')(ngModule);
    require('./boxes/index.js')(ngModule);
    require('./account/index.js')(ngModule);   
};