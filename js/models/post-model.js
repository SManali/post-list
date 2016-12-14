define([
    "js/models/data-module"
], function(DataModule) {
    var PostModel = Backbone.Model.extend({
        "defaults": function() {
            return {
                "posts": [],
                "authors": [],
                "categories": [],
                "curCategory": "category-1",
                "deletedPost": 0
            };
        },
        "initialize": function() {
            var posts = [],
                authors = [],
                categories = [];
            DataModule.getPostData({
                "onSuccess": function(data) {
                    posts = data;
                }
            });
            DataModule.getAuthorData({
                "onSuccess": function(data) {
                    authors = data;
                }
            });
            DataModule.getCategoryData({
                "onSuccess": function(data) {
                    categories = data;
                }
            });
            this.set({
                "posts": posts,
                "authors": authors,
                "categories": categories
            })
        },
        "getPosts": function() {
            var posts = this.sortPosts(this.getCategoryPost(this.get("posts")));
            //Add author name
            _.each(posts, $.proxy(function(obj, index) {
                obj.authorName = this.getAuthorDetails(obj.authorId).name;
                obj.totalComments = obj.comments ? obj.comments.length : 0;
            }, this));
            return posts;
        },
        "getCategoryPost": function(posts) {
            posts = _.extend({}, posts);
            if (this.get("curCategory")) {
                var curCategory = this.get("curCategory");
                posts = _.filter(posts, function(obj) {
                    return obj.categories.indexOf(curCategory) > -1;
                });
            }
            return posts;
        },
        "sortPosts": function(posts) {
            posts = _.extend({}, posts);
            return _.sortBy(posts, function(obj) {
                return new Date(obj.dateTime);
            })
        },
        "removePost": function(id) {
            var posts = this.get("posts"),
                index = _.findIndex(posts, {
                    "id": id
                });
            if (index > -1) {
                posts.splice(index, 1);
                this.set("deletedPost", this.get("deletedPost") + 1);
            }
        },
        "getPostDetail": function(postId) {
            return _.where(this.get("posts"), {
                "id": postId
            }) || [];
        },
        "getAuthorDetails": function(authorId) {
            var authorDetail = _.where(this.get("authors"), {
                "id": authorId
            }) || [];
            return authorDetail[0] || {}
        },
        "getAuthorPosts": function(authorId) {
            var posts = _.where(this.get("posts"), {
                "authorId": authorId
            });
            posts = $.extend({}, posts);
            return posts;
        },
        "addReply": function(options) {
            var posts = this.getPostDetail(options.postId)[0],
                comments = _.where(posts.comments, {
                    "id": options.commentId
                })[0],
                replyData = {
                    "text": options.replyText,
                    "time": options.time
                }
            comments.reply = comments.reply || [];
            comments.reply.push(replyData);
        }
    });
    return PostModel;
});
