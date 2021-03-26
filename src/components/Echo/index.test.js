import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Echo from './';

test(`Test Rendering Default`, () => {
  const defaultValueFromComponent = 'my default';
  render(<Echo />);
  // Check input has default value.
  expect(screen.getByRole('textbox')).toHaveValue(defaultValueFromComponent)
  // Check rendered element (h2) with default state value.
  expect(screen.getByText(defaultValueFromComponent)).toBeDefined();
});

test.each([
  'Hello, World!',
  'Hi everybody!',
  ' racecar ',
  '  ',
  'one          two  ',
  '<strong>weak</strong>',
])(
  'renders "%s" when put in input field',
  (text) => {
    render(<Echo />);
    // Change text in textbox.
    userEvent.clear(screen.getByRole('textbox'));
    userEvent.type(screen.getByRole('textbox'), text);
    // Verify text in textbox is updated.
    expect(screen.getByRole('textbox')).toHaveValue(text);
    // Verify rendered element (h2) has updated text.
    expect(screen.getByRole('heading').textContent).toEqual(text);
  }
);
