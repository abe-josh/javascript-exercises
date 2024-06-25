const helloWorld = require('./helloWorld');

describe('First Node Console application', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
