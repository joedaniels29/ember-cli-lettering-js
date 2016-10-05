import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('do-lettering', 'Integration | Component | do lettering', {
  integration: true
});

test('it works', function(assert) {
  this.render(hbs`{{do-lettering}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#do-lettering}}
      template block text
    {{/do-lettering}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.render(hbs`
    {{#do-lettering}}ABC{{/do-lettering}}
  `);
  assert.notEqual(this.$().html().indexOf(
    "<span class=\"char1\" aria-hidden=\"true\">A</span>" +
    "<span class=\"char2\" aria-hidden=\"true\">B</span>" +
    "<span class=\"char3\" aria-hidden=\"true\">C</span>"), -1);
});
