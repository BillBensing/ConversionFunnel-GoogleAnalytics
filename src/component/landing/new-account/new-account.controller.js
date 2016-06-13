module.exports = function (ngModule) {
    ngModule.controller('NewAccountController', ['$scope','$state', function ($scope, $state) {
        var vm = $scope;

        vm.title = "Create a New Account";
        vm.onCreateAccount = onCreateAccount;
        vm.LettersAndNumbersOnlyValidation = "[A-Z,a-z]*";
        vm.EmailValidation = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";

        vm.user = {
            firstName:"",
            lastName:"",
            email:""
        };

        function onCreateAccount(user) {
            console.log(user);
            $state.go('landing.newAccountConfirmation');
        }
    }]);
};