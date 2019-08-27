import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.quiz')
        .component('ngaQuestion', {
            controller: Question,
            controllerAs: 'vm',
            bindings: {
                question: '<'
            },
            templateUrl: 'app/quiz/question.html'
        });

    Question.$inject = ['quizService'];

    function Question(quizService) {
        var vm = this;
        vm.answer = null;
        vm.setAnswer = setAnswer;

        function setAnswer() {
            quizService.setAnswer(vm.question, vm.answer);
        }
    }
})();
