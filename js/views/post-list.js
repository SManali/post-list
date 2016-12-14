define([
    "templates/post-list",
    "templates/post"
], function(PostListTemplate, PostTemplate) {
    var PostListView = Backbone.View.extend({
        "events": {
            "click .post-detail-link": "onPostTitleClick",
            "click .filter": "onPostCategoryChange",
            "click .author .detail": "onAuthorDetails",
            "click .delete-post": "deletePost"
        },
        "render": function() {
            this.$el.append(PostListTemplate({
                "postCategory": this.model.get("categories")
            }));
            this.renderPost(this.model.getPosts());
            this.activeCategoryState()
            return this.$el;
        },
        "renderPost": function(posts) {
            this.$(".posts-container").html("").append(PostTemplate({
                "posts": posts,
                "deleteBtn": true
            }));
            this.$(".no-post-text").toggle(!posts.length);
            this.updateDeletePostCounter();
            this.updatePostCount(posts);
        },

        "onPostTitleClick": function(event) {
            router.navigate("post-detail/" + $(event.target).closest(".post-holder").attr("id"), {
                "trigger": true
            });
        },
        "onPostCategoryChange": function(event) {
            this.model.set("curCategory", $(event.currentTarget).attr("id"));
            this.renderPost(this.model.getPosts());
            this.activeCategoryState();
        },
        "deletePost": function(event) {
            this.model.removePost($(event.target).closest(".post-holder").attr("id"));
            this.renderPost(this.model.getPosts());
        },
        "updateDeletePostCounter": function() {
            if (this.model.get("deletedPost")) {
                this.$(".delete-post-text").show().find(".delete-post-count").text(this.model.get("deletedPost"));
            } else {
                this.$(".delete-post-text").hide();
            }
        },
        "onAuthorDetails": function(event) {
            router.navigate("author-detail/" + $(event.target).closest(".author").attr("id"), {
                "trigger": true
            });
        },
        "showModel": function(options) {
            this.$el.append(ModalTemplate({
                "headerText": options.title,
                "content": options.content
            }));
            this.$(".custom-modal").on("hide.bs.modal", $.proxy(function() {
                    this.$(".custom-modal").remove();
                }, this))
                .modal({
                    "backdrop": true,
                    "show": true
                });
        },
        "activeCategoryState": function() {
            this.$(".filter").removeClass("active");
            this.$("#" + this.model.get("curCategory")).addClass("active");
        },
        "updatePostCount": function(posts) {
            var postsCount = posts.length;
            if (postsCount < 10) {
                postsCount = "0" + postsCount;
            }
            this.$(".post-count").html(postsCount);
        }
    });
    return PostListView;
});
