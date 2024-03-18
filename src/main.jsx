import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import RootComponent from './RootComponent'; // Import the RootComponent

import App from './App'; // Assuming App component is in the same directory

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={"/app-react-spa/"}>
    {/* <Router>  */}
        <Routes>
            {/* <Route path="*" element={<App />} /> */}
            <Route path="*" element={<RootComponent />} /> {/* Use RootComponent */}
        </Routes>
    </Router>    
  </React.StrictMode>,
);