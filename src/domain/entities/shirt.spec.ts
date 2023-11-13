import { expect, test } from 'vitest';
import { Shirt } from './shirt';

test('should create a shirt ', () => {
  const shirt = Shirt.create({
    code: '123456',
    color: 'black',
    price: 140.0,
    size: 'M',
    image: 'url-test',
  });

  expect(shirt.id).toBeDefined();
  expect(shirt).toBeInstanceOf(Shirt);
});
