import logo from './logo.svg';
 
import './App.css';
import List from './List';
import Data from './Data';
import { useState } from 'react';

function App() {
  const [people,setPeople] = useState(Data);
    return( <main>
      <section className = "container">
        <h3>{people.length }  BIRTHDAY TODAY</h3>
         <List people={people}/>
         <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    )
}

export default App;
