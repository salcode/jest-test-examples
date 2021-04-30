import { useEffect, useState } from 'react';

export default function CatFact({
  getCatFactPromise,
}) {
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
