import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'
import React, { useState, useEffect } from 'react'
import { mockData } from '../../API/mockData.api'


function RewardsPage() {

const [salesData,setSalesData] = useState([])
const [filterSales, setFilterSales] = useState([])
const [filterSales2, setFilterSales2] = useState([])
const [filterSales3, setFilterSales3] = useState([])
const [text, setText] = useState('');


useEffect(()=>{
mockData().then((data) => {
        console.log(data)
        let tempobject = data
        tempobject.forEach((item)=>{
            let priceCalculation = (item.price/100)*2
            let conditionalReward
            if (item.price > 50) {
                let margin = item.price - 50
                conditionalReward = margin/50
            }
            item.rewards = priceCalculation + conditionalReward
            console.log(item)
        })
        console.log(tempobject)
        setSalesData(tempobject)
    });
},[])


const handleChange = event => {
    setText(event.target.value);
  };

function getMonthFromString(mon){
    return new Date(Date.parse(mon +" 1, 2022")).getMonth()+1
 }

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber-1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

function filterMonth(event) {
    event.preventDefault();

    // Lets define the months to be displayed // 
    let monthNumber = getMonthFromString(text)
    let monthHistory = [monthNumber, monthNumber-1, monthNumber-2]
    let monthLimit = monthHistory.map((item)=>{
        return(
        toMonthName(item)
        )
    })

    for (let i = 0; i<= monthLimit.length-1; i++ ) {
        let filtered = salesData.filter((item=>item.month=== monthLimit[i]))
        if (i===0) {
            
            setFilterSales(filtered)
        } else if ( i ===1) {
            setFilterSales2(filtered)
        } else {
        setFilterSales3(filtered)
        }
    }
        
    
    
    
}

function show(event) {
    event.preventDefault();
    setFilterSales(salesData)
    setFilterSales2([])
    setFilterSales3([])
}


    return(
        <div className="rewards-homepage">
            <p> Rewards </p>
                
                <input
                    type="text"
                    id="message"
                    name="filterName"
                    onChange={handleChange}
                    placeholder="Filter Last 3 Months"
                    value={text}
                />
                <button type="submit" onClick={filterMonth}> Submit </button>
                <button type="submit" onClick={show}> Show All </button>
                <div className="display-all-customers"> 
                <table>
                <tr className="rewards-row">
                        <th className="rewards-cell">Month</th>
                        <th className="rewards-cell">Customer </th>
                        <th className="rewards-cell">Spent </th>
                        <th className="rewards-cell">Rewards </th>
                </tr>
                    {filterSales.map((item) => {
                        return( 
                        <tr> 
                            <td className="rewards-cell">{item.month}</td>
                            <td className="rewards-cell">{item.name}</td>
                            <td className="rewards-cell">{item.price}</td>
                            <td className="rewards-cell">{item.rewards}</td>
                        </tr>
                        )
                    })}
                     {filterSales2.map((item) => {
                        return( 
                        <tr> 
                            <td className="rewards-cell">{item.month}</td>
                            <td className="rewards-cell">{item.name}</td>
                            <td className="rewards-cell">{item.price}</td>
                            <td className="rewards-cell">{item.rewards}</td>
                        </tr>
                        )
                    })}
                    {filterSales3.map((item) => {
                        return( 
                        <tr> 
                            <td className="rewards-cell">{item.month}</td>
                            <td className="rewards-cell">{item.name}</td>
                            <td className="rewards-cell">{item.price}</td>
                            <td className="rewards-cell">{item.rewards}</td>
                        </tr>
                        )
                    })}
                    </table>
                </div>
        </div>
    )
}

export default RewardsPage
