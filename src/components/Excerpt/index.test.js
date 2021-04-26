import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Excerpt from './';

describe.each([
  [ '', 5, '...' ],
  [ '', -2, '...' ],
  [ 22, 0, '...' ],
  [ {a: 1}, 0, '...' ],
  [ 23.45, 0, '...' ],
  [ , , '...' ],
  [ null, null, '...' ],
  [ 'one two three', 8, 'one two' ],
])('"%s" with maxChars %i',
  (content, maxChars, expected) => {
    const container = document.createElement('div');
    test(`renders "${expected}"`, () => {
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
