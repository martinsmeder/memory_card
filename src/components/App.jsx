import { useState, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import getPhotos from './api';

// https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
// Render 6 random items for each click
// - new state: renderedPhotos (main only needs access to this)
// - getRandomPhotos(): randomly select 6 photos from allPhotos, then render them
// - handleClick(): update click attribute, update allPhotos, getRandomPhotos()
//   , setRenderedPhotos --> repeat
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

  function getRandomPhotos(arr) {
    const randomPhotos = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      randomPhotos.push(item);
    }
    return randomPhotos;
  }

  function handleClick() {
    setRenderedPhotos([]);
    const randomPhotos = getRandomPhotos(allPhotos);
    setRenderedPhotos(randomPhotos);
  }

  return (
    <>
      <Header />
      {/* <Main /> */}

      <main>
        {renderedPhotos.map((item) => (
          <div key={item.title} onClick={() => handleClick()}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </main>

      <ul></ul>
      <Footer />
    </>
  );
}

export default App;
