import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goToSimple() {
      this.transitionToRoute('books');
    },
    goToAdvanced() {
      this.transitionToRoute('advanced');
    }
  }
});
