import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Linus Torvalds', 'Gang of Four', 'Kent Beck  '];
  }
});
