import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('delete a movie from the cart', () => {
  const cart = new Cart();
  const movie = new Movie(
    1,
    'Avengers',
    2012,
    100,
    'USA',
    'Avengers Assemble!',
    'science fiction, action, fantasy',
    137,
  );
  cart.add(movie);
  cart.delete(1);
  expect(cart.items.length).toBe(0);
})

test('total amount without discount', () => {
  const cart = new Cart();
  const movie = new Movie(
    1,
    'Avengers',
    2012,
    100,
    'USA',
    'Avengers Assemble!',
    'science fiction, action, fantasy',
    137,
  );
  cart.add(movie);
  const amount = cart.totalAmount();
  expect(amount).toBe(100);
})

test('total amount with discount', () => {
  const cart = new Cart();
  const movie = new Movie(
    1,
    'Avengers',
    2012,
    100,
    'USA',
    'Avengers Assemble!',
    'science fiction, action, fantasy',
    137,
  );
  cart.add(movie);
  const amount = cart.amountWithDiscount(5);
  expect(amount).toBe(95);
})