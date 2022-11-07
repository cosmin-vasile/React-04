import "./styles.css";
import Header from "../Header";
import Counter from "../Counter";

const App = () => {
  const onValueChange = (value) => {
    console.log(value);
  };

  return (
    <div className="main-app">
      <Header />
      <main>
        <Counter onValueChange={onValueChange} defaultValue={10} />
        <Counter defaultValue={20} />
        <Counter defaultValue={30} />
      </main>
      <aside>Aside</aside>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
