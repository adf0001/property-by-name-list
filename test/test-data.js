// global, for html page
property_by_name_list = require("../property-by-name-list.js");

module.exports = {

	"property_by_name_list()": function (done) {
		var obj = {};

		property_by_name_list(obj, ["a", "b", "c"], "ddd");		//set


		done(!(
			obj.a.b.c === "ddd" &&
			property_by_name_list(obj, ["a", "b", "c"]) === "ddd"		//get
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
