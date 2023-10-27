export default function Main({ array, clickHandler }) {
  return (
    <main>
      {array.map((item) => (
        <div key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            // Wrap clickHandler in arrow function to pass item object correctly
            onClick={() => clickHandler(item)}
          />
        </div>
      ))}
    </main>
  );
}
