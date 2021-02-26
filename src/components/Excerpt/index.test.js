import React from 'react';
import ReactDOM from 'react-dom';
import Excerpt from './';

it('renders the correct length substring', () => {
  const content = "Hi everybody";
  const maxChars = 4;
  const expected = "Hi";

  const container = document.createElement('div');
  const rendered = ReactDOM.render(
    <Excerpt
      content={content}
      maxChars={maxChars}
    />,
    container
  );
  expect(container.textContent).toBe(expected);
});
