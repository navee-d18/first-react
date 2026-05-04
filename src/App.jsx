import './App.css';
import Product from './Product';

function App() {

  let styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    
    <div style={styles}>
      <Product title="Keyboard" idx={0}/>
      <Product title="Mouse" idx={1}/>
      <Product title="Laptop" idx={2}/>
      <Product title="Speaker" idx={3}/>
    </div>
  );
}

export default App
