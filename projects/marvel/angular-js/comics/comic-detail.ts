import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.comics')
        .component('ngaComicDetail', {
            controller: ComicDetail,
            controllerAs: 'vm',
            bindings: {
                comic: '<'
            },
            templateUrl: 'app/comics/comic-detail.html'
        });

    ComicDetail.$inject = ['imageService'];
    function ComicDetail(imageService) {
        var vm = this;
        vm.getComicImage = getComicImage;

        function getComicImage(thumbnail) {
            return imageService.getImage('portrait_fantastic', thumbnail);
        }
    }
})();
