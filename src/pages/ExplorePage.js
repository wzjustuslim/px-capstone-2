import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExplorePage = () => {  
  useEffect(() => {
    const asyncStuff = async () => {
      const res = await axios.get('https://pokemartdb-backend.herokuapp.com/api/items')
      // const res = await axios.get('https://pokeapi.co/api/v2/item-category/loot')
      console.log(res.data)
    }

    asyncStuff()
  });
  

  return (
    <>
      <main>
        here
        <br />
        ...
        ...
        <br />
        ...
        ...
        <br />
        ...
        <br />
      </main>
    </>
  )
};
export default ExplorePage;