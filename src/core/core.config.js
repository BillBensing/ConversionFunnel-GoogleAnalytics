module.exports = function (ngModule) {
    ngModule.config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
        function ($urlRouterProvider, $locationProvider, $stateProvider) {

            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('landing');

            $stateProvider
                .state('landing', {
                    url: '/landing',
                    template: require('../component/landing/landing.tpl.html'),
                    controller: 'LandingController'
                })
                .state('boxes', {
                    url: '/boxes',
                    template: require('../component/boxes/boxes.tpl.html'),
                    controller: 'BoxesController'
                })
                .state('boxes.selection', {
                    url: '/selection',
                    template: require('../component/boxes/selection/selection.tpl.html'),
                    controller: 'BoxesSelectionController'
                })
                .state('boxes.payment', {
                    url: '/payment',
                    template: require('../component/boxes/payment/payment.tpl.html'),
                    controller: 'BoxesPaymentController'
                })
                .state('boxes.confirmation', {
                    url: '/confirmation',
                    template: require('../component/boxes/confirmation/confirmation.tpl.html'),
                    controller: 'BoxesConfirmationController'
                })
                .state('account', {
                    url: '/account',
                    template: require('../component/account/account.tpl.html'),
                    controller: 'AccountController'
                })
                .state('account.login', {
                    url: '/login',
                    template: require('../component/account/login/login.tpl.html'),
                    controller: 'AccountLoginController'
                });
        }]);
};