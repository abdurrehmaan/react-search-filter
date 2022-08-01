import './App.css';
import userData from './data/userdata.json'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')

  const searchItem = userData.filter((item)=>{
    if(search == ""){
      return item
    }
    else if(item.name.toLowerCase().includes(search.toLowerCase())){
      return item
    }
  })

  console.log("Searched Item : ", searchItem)


  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={event => setSearch(event.target.value)} />
      {searchItem.map((item, key) => {
        return <>
          <div className="user" key={key}>
            <p>{item.name}</p>
          </div>

        </>
      })}

    </div>
  );
}

export default App;
