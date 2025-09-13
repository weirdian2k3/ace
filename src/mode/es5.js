"use strict";

var oop = require("../lib/oop");
var jsMode = require("./javascript").Mode;
var WorkerClient = require("../worker/worker_client").WorkerClient;

function Mode() {
    jsMode.call(this);
    this.$highlightRuleConfig = {noES6: true};
}
oop.inherits(Mode, jsMode);

(function() {
    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.call("setOptions", [{
          esVersion: 5
        }]);

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };


    this.$id = "ace/mode/es5";
}).call(Mode.prototype);

exports.Mode = Mode;
