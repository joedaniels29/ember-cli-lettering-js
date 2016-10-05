/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lettering-js',
  afterInstall: function () {
    return this.addBowerPackageToProject("letteringjs");
  },
  included: function (app, parentAddon) {
    var target = (parentAddon || app);
    target.import('bower_components/letteringjs/jquery.lettering.js');
  }
};
