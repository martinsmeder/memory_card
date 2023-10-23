export default function Header() {
  return (
    <header>
      <div className='div left'>
        <h1>Memory Game</h1>
        <p>
          Get points by clicking on an image, but don't click on any image more
          than once!
        </p>
      </div>
      <div className='div right'>
        <h3 className='counter current'>Current score: 0</h3>
        <h3 className='counter total'>Best score: 0</h3>
      </div>
    </header>
  );
}
