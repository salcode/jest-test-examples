import { useEffect, useState } from 'react';

export default function CatFact({
  fetchCatFactText,
}) {
  const [ catFactText, setCatFactText ] = useState('Loading Cat Fact...');

  useEffect(() => {

    const getRemoteCatFactAndSetToState = async () => {
      const text = await fetchCatFactText();
      setCatFactText(text);
    };

    getRemoteCatFactAndSetToState();
  }, []);
  return (
    <h4>{catFactText}</h4>
  );
}
