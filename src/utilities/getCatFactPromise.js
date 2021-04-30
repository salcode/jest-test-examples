export default function getCatFactPromise() {
  return fetch('https://cat-fact.herokuapp.com/facts/random?amount=10')
    .then(response => response.json())
    .then(catFactObjects => catFactObjects.filter(
      obj => obj.status.verified === true
    ))
    .then(verifiedCatFactObjects => verifiedCatFactObjects[0])
    .then(
      catFact => catFact?.text ?? 'Cats are not dogs'
    );
}
