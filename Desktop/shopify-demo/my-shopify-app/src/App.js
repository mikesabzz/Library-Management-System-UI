import React from 'react'
import './App.css';
import MyApp from "./Components/MyApp";
import { AppProvider, Page } from '@shopify/app-bridge-react';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <AppProvider
      apiKey=""
      shopOrigin=""
      forceRedirect={true}
    >
      <BrowserRouter>
        <Route path="/" component={MyApp} />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
