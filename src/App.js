import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "./Utils/axios"
import Chosen from "./components/Chosen/Chosen"
import Spinner from "./components/UI/Spinner"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { Switch, Route } from "react-router-dom"

const App = (props) => {
  const [countries, setCountries] = useState()
  const [chosenOne, setChoseOne] = useState()
  const [border, setBorder] = useState()

  //get all countries
  useEffect(() => {
    getAllCountry()
  }, [])

  function getAllCountry() {
    const axios = new Axios()
    axios.getAllCountries().then((all) => {
      setCountries(all.data)
    })
  }
  /*
  //Refactor response from server
  function refactorData(response) {
    let refactoredData
    for (const key of response) {
      refactoredData = key
    }
    for (const key in refactoredData) {
      if (Array.isArray(refactoredData[key])) {
        refactoredData[key] = { ...refactoredData[key] }
      }
    }

    return refactoredData
  }
  //handle new country route
  const handleCountry = (name) => {
    getCountry(name)
  }

  //handle country name route
  function getCountry(name) {
    const axios = new Axios()
    axios.getOne(name).then((all) => {
      //refactored data
      const refactored = refactorData(all.data)
      setChoseOne(refactored)
    })
  }
*/
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(renderProps) =>
            countries ? (
              <Home countries={countries} {...renderProps} />
            ) : (
              <Spinner />
            )
          }
        ></Route>
        <Route
          exact
          path='/:name'
          render={(renderProps) => (
            <Chosen {...renderProps} chosenOne={chosenOne} />
          )}
        ></Route>
        <Route
          exact
          path='/alpha/:alpha'
          render={(renderProps) => (
            <Chosen {...renderProps} chosenOne={border} />
          )}
        ></Route>
      </Switch>
    </>
  )
}

export default App
