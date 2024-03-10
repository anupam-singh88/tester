import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Success from './components/Success'
import New from './components/New'

const App = () => {
  return (
    <Routes>
      {/* <div> */}
      <Route path="/" element={<>
        <h1>Home page</h1>
        <Link to="/success">Success</Link>
        <Link to="/new">New</Link>

      </>} />
      <Route path="/success" element={<Success />} />
      <Route path="/new" element={<New />} />
      <Route path="/*" element={<h1>404 page</h1>} />

      {/* </div > */}
    </Routes>
  )
}

export default App
