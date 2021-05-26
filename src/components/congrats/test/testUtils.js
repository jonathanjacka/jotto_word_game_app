

/**
 * REturns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {String} value - value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);