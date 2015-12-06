this["templates"] = this["templates"] || {};
this["templates"]["simple"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<link rel='stylesheet' href='themes/"
    + container.escapeExpression(((helper = (helper = helpers.theme || (depth0 != null ? depth0.theme : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"theme","hash":{},"data":data}) : helper)))
    + ".css'>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<img src='"
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"image","hash":{},"data":data}) : helper)))
    + "' height=\"200\" width=\"auto\">\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a href=\"http://twitter.com/"
    + container.escapeExpression(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"twitter","hash":{},"data":data}) : helper)))
    + "\" target='blank' class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div style=\"display:inline-block\">\r\n				<img src='"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "' height=\"200\" width=\"auto\">\r\n				<h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n			</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<html>\r\n<head>\r\n	<link rel='stylesheet' href='templates/simple.css'>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.theme : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</head>\r\n<body>\r\n	<div style='text-align:center;width:100%'>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\r\n		<p>"
    + alias4(((helper = (helper = helpers.about || (depth0 != null ? depth0.about : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.twitter : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div style='clear:both'>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.portfolio : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</body>\r\n</html>";
},"useData":true});