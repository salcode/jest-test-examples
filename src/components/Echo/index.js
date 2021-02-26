import { useState } from 'react';

export default function Echo() {
  const [wordsToEcho, setWordsToEcho] = useState('my default');

  const onChange = (e) => setWordsToEcho(e.target.value);

  return (
    <div>
      <h2>{wordsToEcho}</h2>
      <input
        onChange={onChange}
        type="text"
        value={wordsToEcho}
      />
    </div>
  );
}
