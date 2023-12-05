import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";

import Navigations from './Navigations'

function App() {


  return (
    <>
      <Navigations/>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{
    bottom:'5rem',
    right:"5rem"
  }}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      
      background: 'white',
      color: 'black',
      height:"3.8rem"
    },

    // Default options for specific types
    success: {
      duration: 4000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </>
  )
}

export default App
