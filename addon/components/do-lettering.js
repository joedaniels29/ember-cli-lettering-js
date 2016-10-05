import Ember from 'ember';
import layout from '../templates/components/do-lettering';

export default Ember.Component.extend({
  layout,
  didInsertElement: function () {
    this._super();
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().lettering();
    });
  }
});
