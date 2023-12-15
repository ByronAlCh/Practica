import './App.css'
import axios from 'axios'
import Navbar from "./components/Navbar/Navbar"

import HomePage from "./pages/HomePage/HomePage"
import PhoneDetails from './pages/PhoneDetails/PhoneDetails'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {

  const [phoneList, setPhoneList] = useState([])
  const [loadingPhones, setLoadingPhones] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    loadPhones()
  }, [])

  const loadPhones = async () => {
    try {
      const response = await axios.get(`${import.meta.env.REACT_APP_SERVER_URL}/phones`)

      setTimeout(() => {
        setPhoneList(response.data)
        setLoadingPhones(false)
      }, 1000)
    }
    catch (err) {
      navigate('/')
    }
  }

  return (

    <div className="App">

      <Navbar phoneList={phoneList} />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/phonesDetails/:phoneId' element={<PhoneDetails phoneList={phoneList} />} />

          <Route path="/error" element={<h1>Error</h1>} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
