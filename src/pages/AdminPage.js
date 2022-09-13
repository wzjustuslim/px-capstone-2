import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Typography, Button } from '@mui/material'
import Footer from '../components/Footer.js';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Plot from 'react-plotly.js';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AdminPage = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [itemList, setitemList] = useState([]);
  const [itemSold, setitemSold] = useState([]);
  const [totalBarX, settotalBarX] = useState(["a", "b", "c"]);
  const [totalBarY, settotalBarY] = useState([1, 2, 3]);
  const [totalPieX, settotalPieX] = useState(["a", "b", "c"]);
  const [totalPieY, settotalPieY] = useState([1, 2, 3]);
  const [totalHBarX, settotalHBarX] = useState(["a", "b", "c"]);
  const [totalHBarY, settotalHBarY] = useState([11, 2, 3]);

  const [scatterData, setScatterData] = useState([{ type: 'scatter', name: 'ITEMA', x: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], y: [1, 2, 3, 2, 5, 2, 3, 3, 4, 5, 6, 3] }]);
  const [scatterItem, setScatterItem] = useState([]);
  const [monthlySalesData, setMonthlySalesData] = useState([]);


  const getXValuesBar = () => {
    try {
      const returnValue = [];
      for (let i = 0; i < 11; i++) {
        returnValue.push(itemSold[i].itemName);
      }
      return returnValue;
    } catch {

    }
  }

  const getYValuesBar = () => {
    try {
      const returnValue = [];
      for (let i = 0; i < 11; i++) {
        returnValue.push(itemSold[i].itemSold);
      }
      return returnValue;
    } catch {

    }
  }

  useEffect(() => {

    const getItemsList = async () => {

      const url = `${process.env.REACT_APP_BACKEND_URL}/api/items`;
      const res = await axios.get(url);
      const transformedItems = res.data.data.map((items) => {
        return {
          itemID: items._id,
          itemName: items.itemName,
          itemPrice: items.itemPrice,
          itemTags: items.itemTags,
        };
      });
      setitemList(transformedItems)
    }

    const getTransactionData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        },
      };
      const url = `${process.env.REACT_APP_BACKEND_URL2}/api/transactions`;
      const res = await axios.get(url, config);
      if (res.data.success) {
        try {
          const transformedItems = res.data.data.map((transactions) => {
            return {
              id: transactions._id,
              price: transactions.price,
              userId: transactions.userId,
              items: transactions.items,
              transactionDate: transactions.transactionDate,
            };
          });
          setAllTransactions(transformedItems);


        } catch (error) {
          console.error(error.message);
        }
      }
    }

    getTransactionData()
    getItemsList()


  }, []);

  useEffect(() => {

    try {


      const itemSoldCounter = [...itemList].map(value => ({ ...value, itemSold: 0 }))

      allTransactions.forEach((item) => {
        item.items.forEach((singleitem) => {
          const itemIndex = itemSoldCounter.findIndex(value => value.itemID === singleitem.item)
          if (itemIndex > 0) {
            itemSoldCounter[itemIndex].itemSold += singleitem.qty
          }
        })
        itemSoldCounter.sort((a, b) => b.itemSold - a.itemSold)
        setitemSold(itemSoldCounter)

      }
      )
    } catch (error) {
      console.error(error.message);
    }


    const salesCompareTotal = {}
    allTransactions.forEach((transactions) => {
      const transactionDate = transactions.transactionDate.split("-", 2).join('')
      for (const { qty, item } of transactions.items) {
        if (!(item in salesCompareTotal)) {
          salesCompareTotal[item] = {}
        }
        salesCompareTotal[item][transactionDate] = {
          qty: salesCompareTotal[item][transactionDate] ? salesCompareTotal[item][transactionDate].qty + qty : qty,
        }
      }
    })
    setMonthlySalesData(salesCompareTotal)


  }, [allTransactions, itemList]);

  useEffect(() => {
    let updateValue = [...scatterData]
    let scatterXArr = [];


    if (scatterItem in monthlySalesData) {
      scatterXArr = [];
      for (let i = 1; i < 13; i++) {
        const num = "2022" + ("0" + i).slice(-2);
        if (num in monthlySalesData[scatterItem[0]]) {
          scatterXArr.push(monthlySalesData[scatterItem[0]][num].qty)
        } else {
          scatterXArr.push(0)
        }
      }

      const itemIndex = itemList.findIndex(value => value.itemID === scatterItem[0])

      if (itemIndex >= 0) {


        updateValue = [{ type: 'scatter', name: itemList[itemIndex].itemName, x: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], y: scatterXArr }]
        setScatterData(updateValue)

      }
    } else if (itemList.length > 0){
      const itemIndex = itemList.findIndex(value => value.itemID === scatterItem[0])
      updateValue = [{ type: 'scatter', name: itemList[itemIndex].itemName, x: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], y: [0,0,0,0,0,0,0,0,0,0,0,0] }]
        setScatterData(updateValue)
    }


  }, [scatterItem]);

  useEffect(() => {
    settotalBarX(getXValuesBar())
    settotalBarY(getYValuesBar())


    const categoryTotal = {}
    const itemSoldTemp = [...itemSold]
    for (const { itemSold, itemTags, itemPrice } of itemSoldTemp) {
      const earnings = itemSold * itemPrice
      categoryTotal[itemTags] = {
        count: categoryTotal[itemTags] ? categoryTotal[itemTags].count + itemSold : itemSold,
        totalEarnings: categoryTotal[itemTags] ? categoryTotal[itemTags].totalEarnings + earnings : earnings
      }
    }
    const categoryTotalArr = Object.keys(categoryTotal).map((value) => {
      return {
        category: value,
        count: categoryTotal[value].count
      }

    })

    categoryTotalArr.sort((a, b) => b.count - a.count)
    const categoryTotalArrSummary = categoryTotalArr.slice(0, 4)
    const others = categoryTotalArr.slice(5).reduce((prevValue, curValue) => {
      return prevValue + curValue.count
    }, 0)
    categoryTotalArrSummary.push({ category: "others", count: others })
    const pieX = []
    const pieY = []

    categoryTotalArrSummary.forEach((value) => {
      pieX.push(value.category)
      pieY.push(value.count)
    })
    settotalPieX(pieX)
    settotalPieY(pieY)

    const profitsTotalArr = Object.keys(categoryTotal).map((value) => {
      return {
        category: value,
        totalEarnings: categoryTotal[value].totalEarnings
      }

    })


    const profitsX = []
    const profitsY = []
    profitsTotalArr.sort((b, a) => b.totalEarnings - a.totalEarnings)
    profitsTotalArr.forEach((value) => {
      profitsX.push(value.category)
      profitsY.push(value.totalEarnings)
    })

    settotalHBarX(profitsX)
    settotalHBarY(profitsY)

  }, [itemSold]);


  const handleChangeAutoComplete = (value) =>
  {
    const itemIndex = itemList.findIndex(name => name.itemName === value)
    setScatterItem([itemList[itemIndex].itemID])
  }

  return (
    <>
      <main>
        <Container maxWidth="md" sx={{ pt: "68.5px", minHeight: "100vh" }}>
          <Box sx={{ py: 8 }}>
            <Autocomplete
              id="itemSales"
              disablePortal
              // Value={"Potion"}
              options={itemList.map((option) => option.itemName)}
              renderInput={(params) => <TextField {...params} label="Item Sales" />}
              onChange={(event, value) => handleChangeAutoComplete(value)}
            />
            <Plot
              data={scatterData}
              layout={{ width: 900, height: 440, title: 'Item Sales', xaxis: { tickangle: -45 } }}
            />

            <Plot
              data={[
                { type: 'bar', x: totalBarX, y: totalBarY },
              ]}
              layout={{ width: 900, height: 440, title: 'Top 10 Selling Items', xaxis: { tickangle: -45 } }}
            />

            <Plot
              data={[
                { type: 'pie', labels: totalPieX, values: totalPieY },
              ]}
              layout={{ width: 900, height: 440, title: 'Inventory Sold by Category', xaxis: { tickangle: -45 } }}
            />

            <Plot
              data={[
                {
                  type: 'bar', y: totalHBarX, x: totalHBarY, orientation: 'h', marker: {
                    color: 'rgb(142,124,195)'
                  }
                },
              ]}
              layout={{ width: 950, height: 900, title: 'Profits By Category' }}
            />



          </Box>

        </Container>
      </main>
      <Footer />
    </>
  )
}

export default AdminPage