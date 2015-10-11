'use strict';
var path = require('path');
var checker = require('ember-cli-version-checker');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name : 'ember-cli-lettering-js',
  afterInstall : function() {
    return this.addBowerPackageToProject("letteringjs");
  },
  included : function(app) {
    this._super.included(app);
    app.import('bower_components/letteringjs/jquery.lettering.js');
  }
};
