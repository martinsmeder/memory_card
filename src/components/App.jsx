import { useState, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import getImages from './api';
import {
  getRandomPhotos,
  updateClicks,
  resetAllClicks,
  isNotClickedTwice,
  isNotClicked,
} from './utils';

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [renderedPhotos, setRenderedPhotos] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    getImages('car', 'horizontal').then((photos) => {
      setAllPhotos(photos);
    });
  }, []);

  useEffect(() => {
    if (allPhotos.length > 0) {
      const randomPhotos = getRandomPhotos(allPhotos);
      setRenderedPhotos(randomPhotos);
      updateScore(); // Add to useEffect to update state in real time
    }
  }, [allPhotos]);

  function updateScore() {
    if (allPhotos.every(isNotClicked)) return;
    if (allPhotos.every(isNotClickedTwice)) setCurrentScore(currentScore + 1);
    else {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      const resetAllPhotos = resetAllClicks(allPhotos);
      setAllPhotos(resetAllPhotos);
    }
  }

  function handleClick(item) {
    console.log(item);
    const randomPhotos = getRandomPhotos(allPhotos);
    setRenderedPhotos(randomPhotos);
    const updatedAllPhotos = updateClicks(allPhotos, item);
    setAllPhotos(updatedAllPhotos);
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main array={renderedPhotos} clickHandler={handleClick} />
      <Footer />
    </>
  );
}

export default App;
