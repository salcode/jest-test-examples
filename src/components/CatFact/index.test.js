import { render, screen } from '@testing-library/react';
import CatFact from './';
import getCatFact from '../../utilities/getCatFact';

test(`Test CatFact rendering`, () => {
  const spy = jest.spyOn(getCatFact);

  render(<CatFact />);
  // Check input has default value.
  expect(screen.getByRole('textbox')).toHaveValue(defaultValueFromComponent)
  // Check rendered element (h2) with default state value.
  expect(screen.getByText(defaultValueFromComponent)).toBeDefined();
});
