import { createStore } from 'redux';
import rootReducer from '../src/reducers/index';

/**
 * Creates a tesing store with imported reducers, middleware, and an initial state
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - initial state for the store
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * REturns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {String} value - value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);
