import { useEffect, useState } from 'react';

const getCatFact = () =>
  fetch('https://cat-fact.herokuapp.com/facts/random?amount=10')
    .then(response => response.json())
    .then(catFactObjects => catFactObjects.filter(
      obj => obj.status.verified === true
    ))
    .then(verifiedCatFactObjects => verifiedCatFactObjects[0])
    .then(
      catFact => catFact?.text ?? 'Cats are not dogs'
    );

export default function CatFact() {
  const [ catFactText, setCatFactText ] = useState('Loading Cat Fact...');

  useEffect(() => {

    const getRemoteCatFactAndSetToState = async () => {
      const text = await getCatFact();
      setCatFactText(text);
    };

    getRemoteCatFactAndSetToState();
  }, []);
  return (
    <h4>{catFactText}</h4>
  );
}
