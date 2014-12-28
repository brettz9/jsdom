"use strict";

var jsdom = require("./lib/jsdom");

var doc = jsdom.jsdom();

doc.createElement("invalid^Name");
