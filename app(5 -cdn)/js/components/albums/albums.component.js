var albums = {
	bindings: {
		records: '<'
	},
	templateUrl: `js/components/albums/albums.component.html`,
	controller: function(albumService){
		var vm = this;
		vm.selectedAlbum =[];
		
		vm.$onInit = function () {
			console.table(vm.records);
		};
		vm.edit = function (id) {
			console.log('foo on fire!', id);
		};
		vm.moo = function(id){
		albumService.getAlbumById(id).then(function (res){
			vm.selectedAlbum = res;
		}, function(error){
			console.log("failed get album by Id" + error);
		});
		}
	}
	


};

angular
	.module('albums')
	.component('albums', albums)
	.config(function ($stateProvider) {
		$stateProvider
			.state('albums', {
				url: '/albums',
				component: 'albums',
				resolve: {
					records: function (albumService) {
						return albumService.getAlbums();
					}
				}
			});
	});
