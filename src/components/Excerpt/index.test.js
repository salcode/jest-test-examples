import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Excerpt from './';

[
  [ '', 5, '...' ],
  [ '', -2, '...' ],
  [ 22, 0, '...' ],
  [ {a: 1}, 0, '...' ],
  [ 23.45, 0, '...' ],
  [ , , '...' ],
  [ null, null, '...' ],
  [ 'one two three', 8, 'one two' ],
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
