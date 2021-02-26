import reduceToExcerpt from './reduceToExcerpt.js';

[
  [ 'Hi everybody', 4, 'Hi' ],
  [ '12 3456', 2, '12' ],
  [ 'One two three', 4, 'One' ],
  [ 'One  two three', 4, 'One' ],
  [ '      One two three', 3, 'One' ],
  [ 'Hi everybody', 4, 'Hi' ],
  [ '12 345678', 4, '12' ],
  [ '      helllo hello', 10, 'helllo' ],
  [ 'abc def  ', 10, 'abc def' ],
  [ '<strong>One two three</strong>', 5, 'One' ],
  [ '                ', 5, '' ],
  [ 'One ', 4, 'One' ],
  [ ' One ', 5, 'One' ],
  [ 'encyclopedia', 5, '' ],
].map(
  ([content, maxChars, expected], index) => {
    it(`renders the correct length substring ${index}`, () => {
      expect(
        reduceToExcerpt(content, maxChars)
      ).toBe(expected);
    });
  }
);
