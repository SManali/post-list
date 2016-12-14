define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"post-"
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + " post-holder\" id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n    <div class=\"post-image-container\">\r\n        <img src=\"http://placehold.it/350x150\" width=\"100%\">\r\n    </div>\r\n    <div class=\"post-content-container\">\r\n        <div class=\"post-title post-detail-link\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\r\n        <div class=\"post-date-time\">"
    + alias2(alias1((depth0 != null ? depth0.dateTime : depth0), depth0))
    + "</div>\r\n        <div class=\"post-description\">"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</div>\r\n        <div class=\"post-keywords\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"short-details author\" id="
    + alias2(alias1((depth0 != null ? depth0.authorId : depth0), depth0))
    + ">\r\n            <span class=\"post-author detail\">"
    + alias2(alias1((depth0 != null ? depth0.authorName : depth0), depth0))
    + "</span>\r\n            <span>|</span>\r\n            <span class=\"total-comments detail\">"
    + alias2(alias1((depth0 != null ? depth0.totalComments : depth0), depth0))
    + " comments</span>\r\n        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depths[1] != null ? depths[1].deleteBtn : depths[1]),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"keyword\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"post-options clearfix\">\r\n            <div class=\"delete-post\">Delete</div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}); });