angular.module('App', ['']);

function Ctrl($scope) {
  $scope.list = [];
  $scope.title = 'The GDG pre-alpha experiment';
  $scope.audio = undefined;
  $scope.chapter = '';
 	var cnt = 1;

  $scope.submit = function() {
    $scope.audio = $('#recorded-audio')[0].src;

    this.list.push({
    	'chapter' : cnt,
    	'title' : this.chapter,
    	'blob' : this.audio
    });

    cnt++;
  };

  $scope.getChapter = function($e) {
  	$scope.audio = $e.blob;
  	$('#recorded-audio')[0].src = $e.blob;
  }
}

// jQuery bindings
$(document).ready(function() {
	$('.finished-chapter').bind('click', function(){
		$(this).toggleClass('selected');
	});
});