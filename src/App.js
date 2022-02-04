

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddEdit from './AddEdit';
import AddElement from './AddElement';
import Header from './Header';
import Home from './Home';
import View from './View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddElement/>}></Route>
        <Route path="/update/:id" element={<AddEdit/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
