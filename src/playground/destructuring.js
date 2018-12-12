const book = {
  title: 'game of thorne',
  author: 'John',
  publisher: { // this is nested object
    name: 'penguin'
  }
};

const { name: firstname = 'someone' } = book.publisher; // destructuring

console.log(`The publisher ${firstname}`);