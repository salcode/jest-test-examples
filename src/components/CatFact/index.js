import {
  useEffect,
  useState
} from 'react';

import getCatFact from '../../utilities/getCatFact';

export default function CatFact() {
  const [catFact, setCatFact] = useState('Loading...');
  useEffect(() => {
    let mounted = true;
    getCatFact()
      .then(
        (catFactText) => {
          if (mounted) {
            setCatFact(catFactText)
          }
        }
      ).catch(
        (e) => {
          if (mounted) {
            console.error('Failed to load cat fact from API', e);
            // Use default cat fact.
            setCatFact('A cat is not a dog.');
          }
        }
      );

    return () => mounted = false;
  }, []);

  return (
    <div>{catFact}</div>
  );
}
