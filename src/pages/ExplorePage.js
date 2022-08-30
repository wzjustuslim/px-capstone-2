import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard'

const ExplorePage = () => {  

  const [pokemartItems, setPokeMartItems] = useState([]);

  useEffect(() => {
    const asyncStuff = async () => {
      const res = await axios.get('https://pokemartdb-backend.herokuapp.com/api/items')
      // const res = await axios.get('https://pokeapi.co/api/v2/item-category/loot')
      setPokeMartItems(res.data)
      console.log(res.data)
    }

    asyncStuff()
  },[]);
  

  return (
    <>
      <main>
        <br /><br /><br /><br />
        {/* {pokemartItems.map((item) =>{
          <ItemCard items={item}/>
        })} */}
      </main>
    </>
  )
};
export default ExplorePage;