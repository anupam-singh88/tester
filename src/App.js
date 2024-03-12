import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Success from './components/Success'
import New from './components/New'
import Ip from './components/IpDetector'

const App = () => {
  useEffect(() => {
    console.log(window.trackdesk)
    if (window.trackdesk) {
      console.log('initiating trackdesk...')
      window.trackdesk("lennyai", "click");
    }
  }, [])
  return (
    <Routes>
      {/* <div> */}
      <Route path="/" element={<>
        <h1>Home page</h1>
        <Link to="/success">Success Page</Link>
        <br />
        <Link to="/new">New Dummy Page</Link>

      </>} />
      <Route path="/success" element={<Success />} />
      <Route path="/new" element={<New />} />
      <Route path="/ip" element={<Ip />} />
      <Route path="/*" element={<h1>404 page</h1>} />

      {/* </div > */}
    </Routes>
  )
}

export default App
