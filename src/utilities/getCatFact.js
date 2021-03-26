export default function getCatFact() {
  return fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(response => response.json())
    .then(
      (catFactObj) => catFactObj.text
    );
}
