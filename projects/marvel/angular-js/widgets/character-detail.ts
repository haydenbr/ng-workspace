import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.widgets')
        .component('ngaCharacterDetail', {
            controller: CharacterDetail,
            controllerAs: 'vm',
            bindings: {
                character: '<'
            },
            templateUrl: 'app/widgets/character-detail.html'
        });

    CharacterDetail.$inject = ['imageService', 'characterService']

    function CharacterDetail(imageService, characterService) {
        var vm = this;
        vm.getAvatar = getAvatar;
        vm.getCharacterImage = getCharacterImage;
        vm.getCharacterLink = getCharacterLink;

        function getAvatar(thumbnail) {
            return imageService.getImage('standard_medium', thumbnail);
        }

        function getCharacterImage(thumbnail) {
            return imageService.getImage('portrait_uncanny', thumbnail);
        }

        function getCharacterLink(character) {
            return characterService.getCharacterDetailsUrl(character);
        }
    }
})();
