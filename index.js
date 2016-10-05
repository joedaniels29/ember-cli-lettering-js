/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lettering-js',
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/letteringjs/jquery.lettering.js');
  }
};
