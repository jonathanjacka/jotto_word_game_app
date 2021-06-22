module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,

  //TODO: UPDATE when function is implemented in Redux/ Context
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};
