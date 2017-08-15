angular.module('uploadFileService', [])

.service('uploadFile', function($http) {
    this.upload = function(file) {
        var fd = new FormData();
        fd.append('profile', file.upload);
        return $http.post('/upload/', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };

});