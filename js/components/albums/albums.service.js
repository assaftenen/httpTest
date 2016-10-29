function albumService($http) {
	this.getAlbums = function () {
		return $http
			.get('https://jsonplaceholder.typicode.com/albums')
			.then(function (res) {
				return res.data.slice(0,10);
			});
	};
	this.getAlbumById = function(id){
		var id = id;
		const url = 'https://jsonplaceholder.typicode.com/albums';
		return $http
			.get(url,{
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
