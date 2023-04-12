import { useState } from 'react';
import List from './components/List';
import data from './data.js';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="p-3 bg-white shadow rounded-3 mx-auto w-50 my-4">
      <div className="text-center">
        <h1>Upcoming birthdays</h1>
        <small>{people.length} birthdays today</small>
      </div>

      <hr className="w-25 mx-auto mt-4" />

      {people.map((item) => (
        <List people={item} />
      ))}
      <div className="text-center">
        <button
          onClick={() => setPeople([])}
          className="btn btn-dark col-12 rounded-pill mt-4"
        >
          clear all
        </button>
      </div>
    </div>
  );
}

export default App;
