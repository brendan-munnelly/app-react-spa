import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  HashRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import App from './App'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router basename={"/app-react-spa/"}> */}
    <Router>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </Router>    
  </React.StrictMode>,
);