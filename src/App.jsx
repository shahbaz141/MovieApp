import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { tempMovieData, tempWatchedData } from './Constant/Constant';
import Box from './Components/Box';
import Layout from './Components/Layout';

const App = () => {
  const [isOpen1,setIsOpen1]=useState(true);
  const [isOpen2,setIsOpen2]=useState(true);

  return (
    <div>
      <Layout>
      <Box isOpen={isOpen1} setIsOpen={setIsOpen1} watched={false} movies={tempMovieData}/>
      <Box watched isOpen={isOpen2} movies={tempWatchedData} setIsOpen={setIsOpen2}/>
      </Layout>
    </div>
  )
}

export default App