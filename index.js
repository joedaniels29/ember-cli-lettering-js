/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lettering-js',
  included: function (app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this._super.included(app);

    app.import(app.bowerDirectory + '/letteringjs/jquery.lettering.js');
  }
};
