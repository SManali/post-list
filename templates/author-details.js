define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"author-detail-container\">\r\n    <div class=\"author-details\">\r\n        <div class=\"author-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.authorDetails : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\r\n        <img class=\"author-image\" src=\"http://placehold.it/350x150\">\r\n        <div class=\"author-email-id\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.authorDetails : depth0)) != null ? stack1.emailID : stack1), depth0))
    + "</div>\r\n        <div class=\"author-descriptions\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.authorDetails : depth0)) != null ? stack1.details : stack1), depth0))
    + "</div>\r\n        <div class=\"extra-content\">\r\n            <div class=\"buttons\">\r\n                <div class=\"button\">Follow</div>\r\n                <div class=\"button\">Like</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"author-posts\">\r\n        <h3 class=\"header\">Post by "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.authorDetails : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\r\n        <div class=\"author-post-list\">\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true}); });