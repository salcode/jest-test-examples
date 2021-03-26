import {
  useEffect,
  useState
} from 'react';

const getCatFact = () => {
  return fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(response => response.json())
    .then(
      (catFactObj) => catFactObj.text
    );
};

export default function CatFact() {
  const [catFact, setCatFact] = useState('Loading...');
  useEffect(() => {
    getCatFact()
      .then(
        (catFactText) => setCatFact(catFactText)
      );
  }, []);

  return (
    <div>{catFact}</div>
  );
}
