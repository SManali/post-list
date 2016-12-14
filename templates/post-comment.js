define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n    <div class=\"comment-holder clearfix\" id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n        <div class=\"image-holder\">\r\n            <img src=\"http://placehold.it/350x150\">\r\n        </div>\r\n        <div class=\"content\">\r\n            <span class=\"commentor-name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\r\n            <span class=\"comment-time\">"
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "</span>\r\n            <div class=\"comment-text\">"
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</div>\r\n            <div class=\"reply-holder\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.reply : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n            <div class=\"reply-btn\">Reply</div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"reply-text\">Reply: "
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</div>\r\n                <div class=\"reply-time\">"
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"comments\">\r\n    <h3 class=\"comment-title\">Comments</h3> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true}); });