export default function Main({ array, clickHandler }) {
  return (
    <main>
      {array.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            // Wrap clickHandler in arrow function to pass item object correctly
            onClick={() => clickHandler(item)}
          />
        </div>
      ))}
    </main>
  );
}
