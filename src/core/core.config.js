module.exports = function (ngModule) {
    ngModule.config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
        function ($urlRouterProvider, $locationProvider, $stateProvider) {

            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('landing/index');

            $stateProvider
                .state('landing', {
                    url: '/landing',
                    template: require('../component/landing/landing.tpl.html'),
                    controller: 'LandingController'
                })
                .state('landing.index', {
                    url: '/index',
                    template: require('../component/landing/content/landing-content.tpl.html'),
                    controller: 'LandingContentController'
                })
                .state('landing.newAccount', {
                    url: '/new-account',
                    template: require('../component/landing/new-account/new-account.tpl.html'),
                    controller: 'NewAccountController'
                })
                .state('landing.newAccountConfirmation', {
                    url: '/new-account/confirmation',
                    template: require('../component/landing/new-account/confirmation/confirmation.tpl.html'),
                    controller: 'NewAccountConfirmationController'
                });
        }]);
};
