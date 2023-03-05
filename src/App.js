import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './Componants/BarChart';
import {Fare,Age} from './Data'

function App() {
  let keys1 = Object.keys(Fare);
  let keys2 = Object.keys(Age);

  const [userData] = useState({
    labels: keys1,
    datasets:[{
      label: "Fare",
      data: Object.values(Fare),
    },
    {
      label: "Age",
      data: Object.values(Age),
    },
  ]
  },
  );

  return (
    <div className="App">
        <BarChart chartdata={userData}/>
    </div>
  );
}

export default App;
