import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import { ContentContextProvider } from './context/ContentContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContentContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ContentContextProvider>,
)
