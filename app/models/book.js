import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  isbn: DS.attr(),
  publicationDate: DS.attr('date'),
  genre: DS.attr(),
  language: DS.attr(),
  numberOfPages: DS.attr('number'),
  authors: DS.hasMany('author')
});
