export default function Header({ currentScore, bestScore }) {
  return (
    <header>
      <div className='div left'>
        <h1>How's Your Memory?</h1>
        <p>
          Get points by clicking on an image, but don't click on any image more
          than once!
        </p>
      </div>
      <div className='div right'>
        <h3 className='counter current'>Current score: {currentScore}</h3>
        <h3 className='counter total'>Best score: {bestScore}</h3>
      </div>
    </header>
  );
}
