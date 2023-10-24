import { useState, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import getPhotos from './api';

// https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos('cars', 'portrait').then((photos) => setPhotos(photos));
  }, []);

  return (
    <>
      <Header />
      {/* <Main /> */}

      <main>
        {/* <h1>Does this work?</h1> */}
        {photos.slice(0, 6).map((item) => (
          <div key={item.title}>
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
