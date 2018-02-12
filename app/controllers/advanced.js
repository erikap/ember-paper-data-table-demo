import Controller from '@ember/controller';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default Controller.extend(DefaultQueryParamsMixin, {
  enableFilter: true,
  enableSizes: true,
  enableLineNumbers: false,
  size: 5,
  actions: {
    export() {
      alert("This should export the data table");
    },
    print() {
      window.print();
    },
    delete(selection, datatable) {
      const titles = selection.map(function(book) { return book.get('title'); });
      alert(`${selection.length} items selected: ${titles}`);
      datatable.clearSelection();
    }
  }
});
