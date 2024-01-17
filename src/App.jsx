import { useState } from 'react';

import './App.css';

import { CREST_IMAGE } from './data';

import HeaderButton from './components/Header/Header'; 
import Main from './components/Main/Main';

export default function App() {
  const [crestIndex, setCristIndex] = useState();

  function changeCrestClick(crestName) {
    const index = CREST_IMAGE.findIndex(crest => crest.name === crestName); 
    setCristIndex(index);
  }

  return (
    <>
      <header>
        {CREST_IMAGE.map((crest) => <HeaderButton key={crest.image} srcImage={crest} onClick={() => changeCrestClick(crest.name)}></HeaderButton>)}
      </header>
      <main>
        <Main index={crestIndex ? crestIndex : 0}></Main>
      </main>
    </>
  )
}
