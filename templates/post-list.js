define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"filter\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"post-list-container clearfix\">\r\n    <div class=\"no-post-text\">\r\n        <b>Sorry, currently there are no post</b>\r\n        <br> Stay tuned, we will shortly add new posts\r\n    </div>\r\n    <div class=\"delete-post-text\">\r\n        <span class=\"delete-post-count\"></span> post/s deleted successfully\r\n    </div>\r\n    <div class=\"post-summery clearfix\">\r\n        <div class=\"post-counter-holder\">Posts (<span class=\"post-count\"></span>)</div>\r\n        <div class=\"category-filter\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.postCategory : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n    <div class=\"posts-container\"></div>\r\n</div>\r\n";
},"useData":true}); });