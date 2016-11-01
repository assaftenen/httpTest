function albumService($http, ALBUMS_CONST) {
	this.getAlbums = function () {
		console.log(ALBUMS_CONST);
		return $http
			.get(ALBUMS_CONST.ALBUMS)
			.then(function (res) {
				return res.data.slice(0,10);
			});
	};
	this.getAlbumById = function(id){
		var id = id;
		return $http
			.get(ALBUMS_CONST.ALBUM_ID,{
				params:{id:id}
			})
			.then(function (res) {
				return res.data;
			});
	}
}

angular
	.module('albums')
	.service('albumService', albumService);
