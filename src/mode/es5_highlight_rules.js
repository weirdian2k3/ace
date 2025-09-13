"use strict";

var oop = require("../lib/oop");
var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;


var Es5HighlightRules = function () {
  JavaScriptHighlightRules.call(this, {
    noES6: true
  });
};
//oop.inherits(Es5HighlightRules, JavaScriptHighlightRules);

exports.Es5HighlightRules = Es5HighlightRules;