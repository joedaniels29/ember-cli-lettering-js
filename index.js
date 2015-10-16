'use strict';

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
