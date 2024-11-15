import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="App">
          <h1>Employee Management</h1>
          <Routes>
            {/* defining route path for different components */}
            <Route path='/' element={<List/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App