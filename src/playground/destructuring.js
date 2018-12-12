// Object Destructuring
const book = {
  title: 'game of thorne',
  author: 'John',
  publisher: { // this is nested object
    name: 'penguin'
  }
};

const { name: firstname = 'someone' } = book.publisher; // destructuring

console.log(`The publisher ${firstname}`);

// Array Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item; // coma with empty with nothing means skip and forget the rest of the array if no destructuring assignment.

console.log(`${itemName} is ${mediumPrice}`);