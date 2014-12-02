'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  // $scope.posts = [];
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function() {
    // $scope.posts.push($scope.post);
    // Post.save($scope.post);
    

    Post.save($scope.post, function(ref) {
      $scope.posts[ref.name] = $scope.post;
      // $scope.post = {url: 'http://', title: ''};
    });
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.deletePost = function(postId) {
    

    // Post.delete({id: postId}, function() {
    //   delete $scope.posts[postId];
    // });
    // $scope.posts.splice(index,1);
  };

});