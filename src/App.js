import React, { useState, useEffect, useMemo} from "react";
import "./App.css";
import BatsmaForm from "./BatsmaForm";

function App() {
  const testData = useMemo(() => {
    return [
      { country: "Pakistan", score: 23 },
      { country: "Pakistan", score: 127 },
      { country: "India", score: 3 },
      { country: "India", score: 71 },
      { country: "Australia", score: 31 },
      { country: "India", score: 22 },
      { country: "Pakistan", score: 81 },
    ];
  }, [])

  console.log(testData)

  const [data, setData] = useState(testData)
  const [countryOne, setCountryOne] = useState('')
  const [countryTwo, setCountryTwo] = useState('')
  const [averageOne, setAverageOne] = useState(0)
  const [averageTwo, setAverageTwo] = useState(0)
  const [serverMode, setServerMode] = useState(false)

  const changeDetailsOne = (e) => {
    let f = 0;
    let sum = 0;
    let avg = 0;
    console.log(data)
    data.map(data => {
      
      if(e.target.value !== data.country) {
        return null
      }
      if(data.country === e.target.value)
        f += 1
        sum += data.score
        avg = sum/f

      return setAverageOne(avg);
    })
    setCountryOne(e.target.value)
  }
  
  const changeDetailsTwo = (e) => {
    let f = 0;
    let sum = 0;
    let avg = 0;
    data.map(data => {
      
      if(e.target.value !== data.country) {
        return null
      }
      if(data.country === e.target.value)
        f += 1
        sum += data.score
        avg = sum/f

      return setAverageTwo(avg);
    })
    setCountryTwo(e.target.value)
  }

  const radioInputHandler = (e) => {
    const target = e.target
    const value = target.value
    const checked = target.checked
    console.log(value)
    if(checked && value === 'test')
      setServerMode(false)
    else if(checked && value === 'server')
      setServerMode(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://www2.rsphinx.com/static/misc/cric_scores.json', {
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'no-cors'
        })
        const responseData = await response.json()
        setData(responseData)
      } catch(err) {
        console.log(err)
        setData(testData)
      }
    }
    if(serverMode)
      fetchData()
  }, [serverMode, testData])

  return (
    <div className="App">
      <form>
        Source of data:
        <input id="src-test" type="radio" name="data-source" value="test" checked onChange={radioInputHandler}/>
        <label htmlFor="src-local">Test Data</label>
        <input id="src-server" type="radio" name="data-source" value="server" onChange={radioInputHandler}/>
        <label htmlFor="src-server">Server Data</label>
      </form>
      <BatsmaForm width={averageOne} average={averageOne} changeDetails={changeDetailsOne} value={countryOne}/>
      <BatsmaForm width={averageTwo} average={averageTwo} changeDetails={changeDetailsTwo} value={countryTwo}/>
    </div>
  );
}

export default App;
