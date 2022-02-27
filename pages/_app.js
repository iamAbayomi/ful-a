import '../assets/css/App.css'
import '../assets/css/Backdrop.css'
import '../assets/css/Dashboard.css'
import '../assets/css/Checkbox.css'
import '../assets/css/CreateNewBatch.css'
import '../assets/css/Typography.css'
import '../assets/css/Dropdown.css'
import '../assets/css/Table.css'
import React from 'react'
import Head from 'next/head'
import { ChakraProvider  } from "@chakra-ui/react";
import MulishFonts from '../components/ui/MulishFonts'
import { Provider } from 'react-redux'
import {store} from '../redux/store'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider resetCSS={false}>
        <Provider store={store}  >
          <MulishFonts />
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
  )
}