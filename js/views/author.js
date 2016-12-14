define([
    "templates/author-details",
    "templates/post"
], function(AuthorDetailsTemplate, PostTemplate) {
    var PostDetail = Backbone.View.extend({
        "initialize": function(options) {
            this.authorId = options.authorId;
        },
        "render": function() {
            this.$el.append(AuthorDetailsTemplate({
                "authorDetails": this.model.getAuthorDetails(this.authorId)
            }));
            this.$(".author-post-list").append(PostTemplate({
                "posts": this.model.getAuthorPosts(this.authorId)
            }));
            return this.$el;
        }
    });
    return PostDetail;
});
