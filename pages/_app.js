import '../assets/css/App.css'
import '../assets/css/Backdrop.css'
import '../assets/css/Dashboard.css'
import '../assets/css/Checkbox.css'
import '../assets/css/CreateNewBatch.css'
import '../assets/css/Typography.css'
import '../assets/css/Dropdown.css'
import React from 'react'
import Head from 'next/head'
import { ChakraProvider  } from "@chakra-ui/react";
import MulishFonts from '../components/ui/MulishFonts'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider resetCSS={true}>
        <MulishFonts />
        <Component {...pageProps} />
      </ChakraProvider>
  )
}