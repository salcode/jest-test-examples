import { render, waitFor } from '@testing-library/react';
import CatFact from './';

test('Test Loading Message', async () => {
  const mockCatFactPromise = () => new Promise(
    (resolve) => resolve('fact from promise'),
  );
  const {
    getByText,
  } = render(<CatFact fetchCatFactText={mockCatFactPromise} />);

  // Initial render text.
  getByText('Loading Cat Fact...');

  // After the promise from fetchCatFactText() resolves, the text is updated.
  await waitFor(
    () => getByText('fact from promise')
  );
});
