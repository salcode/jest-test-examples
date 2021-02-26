import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Excerpt from './';

[
  [ 'Hi everybody', 4, 'Hi' ],
  [ '12 3456', 2, '12' ],
  [ 'One two three', 4, 'One' ],
  [ '      One two three', 3, 'One' ],
  [ 'Hi everybody', 4, 'Hi' ],
  [ '12 345678', 4, '12' ],
  [ '      helllo hello', 10, 'helllo' ],
  [ 'abc def  ', 10, 'abc def' ],
  [ '<strong>One two three</strong>', 5, 'One' ],
  [ '                ', 5, '' ],
  [ 'One ', 4, 'One' ],
  [ ' One ', 5, 'One' ],
].map(
  ([content, maxChars, expected], index) => {
    const container = document.createElement('div');
    it(`renders the correct length substring ${index}`, () => {
      render(
        <Excerpt
          content={content}
          maxChars={maxChars}
        />,
        container
      );
      expect(container.textContent).toBe(expected);
    });
    // Cleanup.
    unmountComponentAtNode(container);
    container.remove();
  }
);
