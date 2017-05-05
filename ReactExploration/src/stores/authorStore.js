'use strict';

var _ = require('lodash');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _authors = [];

class AuthorStore extends EventEmitter {

  // React components use this to let us know they'd like to be notified when this store changes
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  // React components use this to stop change notifications
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  // Broadcast an event
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllAuthors() {
    return _authors;
  }

  getAuthorById(id) {
    return _.find(_authors, { id: id });
  }
}

const authorStore = new AuthorStore();

// Register with the dispatcher
Dispatcher.register(function (action) {
  // Handle actions
  switch (action.actionType) {
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function (author) {
        return action.id === author.id;
      });
      authorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      authorStore.emitChange();
      break;
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      authorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, { id: action.author.id });
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      authorStore.emitChange();
      break;
    default:
      // No-op (other actions may have been intended for other stores)
      break;
  }
});

module.exports = authorStore;
