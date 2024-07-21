import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
// import DetailList from './components/DetailList';
import ListDB from "./components/ListDB"
// import ListPaged from './components/ListPaged'
import { Announced } from '@fluentui/react';
// import Pagination2 from './components/Pagination2'
// import userData from '/public/DATA.js';

function App() {
  const [message, setMessage] = React.useState('');
  const updateMessage = () => {
    setMessage('Action completed');
  };

  return <>
    <div>
      {/* <DetailList></DetailList> */}
      {/* <ListPaged ></ListPaged> */}
      {/* <Pagination2></Pagination2> */}
      <ListDB></ListDB>
    </div>
  </>
}

export default App
