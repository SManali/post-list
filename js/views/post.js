define([
    "templates/post-detail-container",
    "templates/post",
    "templates/post-comment",
    "templates/reply-editor"
], function(PostDetailContainerTemplate, PostTemplate, PostCommentsTemplate, ReplyEditorTemplate) {
    var PostDetail = Backbone.View.extend({
        "events": {
            "click .add-reply": "addReply",
            "click .reply-btn": "showReplyEditor"
        },
        "initialize": function(options) {
            this.postId = options.postId;
        },
        "render": function() {
            var post = this.model.getPostDetail(this.postId);
            this.$el.append(PostDetailContainerTemplate());
            this.$(".post-details").append(PostTemplate({
                "posts": post
            }));
            this.renderComments();
            return this.$el;
        },
        "renderComments": function() {
            this.$(".comments").remove();
            var post = this.model.getPostDetail(this.postId);
            this.$(".comments-container").append(PostCommentsTemplate({
                "comments": post[0].comments || []
            }));
        },
        "addReply": function(event) {
            var commentId = $(event.currentTarget).attr("data-reply-for");
            this.model.addReply({
                "postId": this.postId,
                "commentId": commentId,
                "replyText": this.$(".field textarea").val(),
                "time": new Date()
            });
            this.$(".reply-form").remove();
            this.renderComments();
        },
        "showReplyEditor": function(event) {
            this.$(".reply-form").remove();
            this.$(".reply-editor-container").append(ReplyEditorTemplate({
                "commentId": $(event.target).closest(".comment-holder").attr("id")
            }));
        }
    });
    return PostDetail;
});
