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
    let mounted = true;
    getCatFact()
      .then(
        (catFactText) => {
          if (mounted) {
            setCatFact(catFactText)
          }
        }
      );

    return () => mounted = false;
  }, []);

  return (
    <div>{catFact}</div>
  );
}
