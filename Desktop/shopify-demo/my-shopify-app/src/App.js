import React from 'react'
import './App.css';
import MyApp from "./Components/MyApp";
import { AppProvider, Page } from '@shopify/app-bridge-react';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <AppProvider
      apiKey="d79fc0a01be6a17e5c8d897530837a75"
      shopOrigin="https://frontend-applications.myshopify.com/"
      forceRedirect={true}
    >
      <BrowserRouter>
        <Route path="/" component={MyApp} />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
