import { useState, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import getPhotos from './api';
import { getRandomPhotos, updateClicks } from './utils';

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [renderedPhotos, setRenderedPhotos] = useState([]);

  useEffect(() => {
    getPhotos('cars', 'portrait').then((photos) => setAllPhotos(photos));
  }, []);

  useEffect(() => {
    if (allPhotos.length > 0) {
      const randomPhotos = getRandomPhotos(allPhotos);
      setRenderedPhotos(randomPhotos);
    }
  }, [allPhotos]);

  function handleClick(item) {
    const randomPhotos = getRandomPhotos(allPhotos);
    setRenderedPhotos(randomPhotos);
    const updatedAllPhotos = updateClicks(allPhotos, item);
    setAllPhotos(updatedAllPhotos);
  }

  return (
    <>
      <Header />
      <Main array={renderedPhotos} clickHandler={handleClick} />
      <Footer />
    </>
  );
}

export default App;
