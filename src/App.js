import React from 'react';
import Container from '@material-ui/core/Container';
import Dashboard from './componenets/Dashboard'; // Adjust the path as per your project structure
import Card from '@mui/material/Card';

function App() {
//   const containerStyles = {
//   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//   padding: '20px', // Adjust padding as needed
//   borderRadius: '8px',
//   fontFamily: 'Arial, sans-serif', // Corrected font family syntax
//   color: '#ddd',
//   backgroundColor: '#1e1e1e', // Corrected background color syntax
//   textAlign: 'center',
//   height: '100vh', // Full height of the viewport
//   width: '200vw', // Full width of the viewport
//   boxSizing: 'border-box', // Ensure padding is included in width
//   position: 'relative',
//   overflow: 'auto', // Add scrollbars if content overflows
//   margin: 0, // Remove any default margins
 
// };

  return (
    <div style={{ backgroundColor: '#black', minHeight: '100vh', minWidth: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <Card sx={{ minWidth: 1975 ,  backgroundColor: 'black', padding: '150px'}}>
        <Dashboard />
        </Card>

    </div>
  );
}

export default App;
