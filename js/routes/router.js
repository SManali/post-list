define([
    "js/views/post-list",
    "js/views/post",
    "js/views/author"
], function(PostListView, PostView, AuthorView) {
    var routerClass = Backbone.Router.extend({
        "routes": {
            "": "postList",
            "post-detail/:id": "postDetail",
            "author-detail/:id": "authorDetail"
        },
        "curView": null,
        "remove": function() {
            if (this.curView) {
                this.curView.remove();
            }
        },
        "postDetail": function(postId) {
            this.remove();
            var postView = new PostView({
                "model": router.model,
                "postId": postId
            });
            $(".main-container").append(postView.render());
            this.curView = postView;
        },
        "authorDetail": function(authorId) {
            this.remove();
            var authorView = new AuthorView({
                "model": router.model,
                "authorId": authorId
            });
            $(".main-container").append(authorView.render());
            this.curView = authorView;
        },
        "postList": function() {
            this.remove();
            var mainView = new PostListView({
                "model": router.model
            });
            $(".main-container").append(mainView.render());
            this.curView = mainView;
        }
    });
    return routerClass;
});
