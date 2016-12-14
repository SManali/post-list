define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"reply-form\">\r\n    <div class=\"field\">\r\n        <textarea></textarea>\r\n    </div>\r\n    <div class=\"add-reply\" data-reply-for=\""
    + container.escapeExpression(((helper = (helper = helpers.commentId || (depth0 != null ? depth0.commentId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"commentId","hash":{},"data":data}) : helper)))
    + "\">\r\n        <i class=\"edit-icon\"></i> Add Reply\r\n    </div>\r\n</div>\r\n";
},"useData":true}); });