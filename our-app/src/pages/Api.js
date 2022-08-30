import React from "react"
import axios from "axios"

function FetchData() {
    
    axios.get('https://pokeapi.co/api/v2/item/22').then(resp => {
    console.log(resp.data)});

    function getAll() {
    axios.get('http://localhost:5000/api/items').then(resp => {
    console.log(resp.data);
});
}}


export default FetchData()