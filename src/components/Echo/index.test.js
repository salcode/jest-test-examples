import { render, screen } from '@testing-library/react';
import Echo from './';

test(`Test Rendering Default`, () => {
  const defaultValueFromComponent = 'my default';
  render(<Echo />);
  // Check input has default value.
  expect(screen.getByRole('textbox')).toHaveValue(defaultValueFromComponent)
  // Check rendered element (h2) with default state value.
  expect(screen.getByText(defaultValueFromComponent)).toBeDefined();
});
