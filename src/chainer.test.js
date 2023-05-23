'use strict';

describe('chainer', () => {
  const { chainer } = require('./chainer');

  it('should ', () => {
    const a = jest.fn();
    const b = jest.fn(a);
    const c = jest.fn(b);
    const d = jest.fn(c);

    chainer([a, b, c, d])(0);

    expect(a).toHaveBeenCalledWith(0);
    expect(b).toHaveBeenCalledWith(a(0));
    expect(c).toHaveBeenCalledWith(b(a(0)));
    expect(d).toHaveBeenCalledWith(c(b(a(0))));
  });
});
