export default function Main({ array, clickHandler }) {
  return (
    <main>
      {array.map((item) => (
        // Wrap clickHandler in arrow function to pass item object
        <div key={item.title} onClick={() => clickHandler(item)}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </main>
  );
}
