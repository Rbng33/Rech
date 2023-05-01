import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './Components/SearchPage/Search';
import SearchResults from './Components/SearchPage/SearchResults/SearchResults';



function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path="/SearchResults" element={<SearchResults/>} />
     

      
    </Routes>
      

   
       </>
  );
}

export default App;
