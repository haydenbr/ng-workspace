import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.comics')
        .component('ngaComicList', {
            controller: ComicList,
            controllerAs: 'vm',
            bindings: {
                character: '<'
            },
            templateUrl: 'app/comics/comic-list.html'
        });

    ComicList.$inject = ['comicService']
    function ComicList(comicService) {
        var vm = this;
        vm.comics = [];
        vm.showProgress = false;
        vm.$onChanges = onChanges;

        function onChanges() {
            vm.comics = [];
            vm.showProgress = true;
            comicService.getComics(vm.character.id).then(comicsGetComplete).finally(function() { vm.showProgress = false; });
        }

        function comicsGetComplete(comics) {
          console.log('comics', comics);
            vm.comics = comics;
            return vm.comics;
        }
    }
})();
