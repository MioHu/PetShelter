import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Views/Main';
import Create from './Views/Create';
import Update from './Views/Update';
import Detail from './Views/Detail';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/pets/new' element={<Create/>} />
        <Route path='/pets/:id/edit' element={<Update/>} />
        <Route path='/pets/:id' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
