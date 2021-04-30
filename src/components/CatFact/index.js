import { useEffect, useState } from 'react';

import getCatFactPromise from '../../utilities/getCatFactPromise';

export default function CatFact() {
  const [ catFactText, setCatFactText ] = useState('Loading Cat Fact...');

  useEffect(() => {

    const getRemoteCatFactAndSetToState = async () => {
      const text = await getCatFactPromise();
      setCatFactText(text);
    };

    getRemoteCatFactAndSetToState();
  }, []);
  return (
    <h4>{catFactText}</h4>
  );
}
