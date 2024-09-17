import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app.js';
import './App.css';
// import './custom.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);



// function App() {
//     console.log('App component rendering');
//     return (
//       <div>
//         <h1>App is loaded</h1>
//       <Router>
//         <AppNavbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} /> // render the home page component on the home route
//           <Route path="/recommendation" element= {<WaxRecommendation />} /> // render the wax recommendation component on the wax recommendation route 
//           <Route path="/input" element= {<InputForm />} /> // render the input form component on the input route
//         </Routes>
//       </Router>
//       </div>
//     );
//   }
  
  export default App;
